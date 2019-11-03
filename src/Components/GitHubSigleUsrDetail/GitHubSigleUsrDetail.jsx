import React from 'react';
import AsyncSelect from 'react-select/async';
import {getApi} from '../Communication/Communication'

var debounce = require('debounce-promise');

export default class GitHubSigleUserDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           userData : [],
        }
    }

    handleFetchData = (query) => {
        if(query !== ""){
           return getApi(`https://api.github.com/search/users?q=${query}`).then((res)=>{
                if(res.data){
                    if(res.data.items.length > 0){
                        res.data.items.map((i)=>{
                            i['label'] = i.login;
                            i['value'] = i.id;
                            return i;
                        })
                    }
                }
                return res.data.items
            })
            .catch(error => console.log(error))
        }
    }

    handleSelect = (el) => {
        this.setState({
            userData : el
        },()=>console.log(this.state.userData))
    }

    render(){
        return (
            <React.Fragment>
                <div className="main">
                    <div className="todo-app" style={{float:"left",width:"20%"}}>
                    <AsyncSelect
                        isMulti={true}
                        placeholder="search user name"
                        value={this.state.userData}
                        loadOptions={debounce(this.handleFetchData.bind(this), 800)}
                        onChange={this.handleSelect}
                        />    
                    </div>
                    {this.state.userData &&
                        <React.Fragment>
                            {this.state.userData.map((i)=>{
                                return(
                                    <div className="git_multi_user" key={i.id }>
                                        <p><b>Name: </b>{i.login}</p>
                                        <img className="git_img" src={i.avatar_url} alt="" />
                                    </div>
                                )
                            })}
                        </React.Fragment>
                    }
                </div>
            </React.Fragment>
        )
    }
}   