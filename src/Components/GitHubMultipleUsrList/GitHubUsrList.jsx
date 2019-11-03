import React from 'react';
import {getApi} from '../Communication/Communication';

export default class GitHubMultipleUsrList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           arrayList : [],
        }
    }

    componentDidMount(){
        this.getUserList();
    }

    getUserList(){
        getApi('https://api.github.com/users').then((res)=>{
            if(res.data){
                this.setState({
                    arrayList : res.data
                })
            }
        }).catch(error => console.log(error))
    }

    render(){
        return (
            <div>
                <h1 style={{textAlign : "center"}}>Git User List</h1>
                {this.state.arrayList.map((i)=>{
                    return(
                        <div className="git_multi_user" key={i.id }>
                            <p><b>Name: </b>{i.login}</p>
                            <img className="git_img" src={i.avatar_url} alt="" />
                        </div>
                    )
                })}
            </div>
        )
    }
}   