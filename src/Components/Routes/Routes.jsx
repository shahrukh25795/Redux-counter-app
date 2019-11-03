import React from 'react';
import {Switch, BrowserRouter,Route} from 'react-router-dom'
import Home from '../Home/Home';
import Header from '../Global/Header/Header';
import Layout from '../Global/Layout/Layout';
import Footer from '../Global/Footer/Footer';
import TodoApp from '../TodoApp/TodoApp';
import Person from '../Person/Person';
import TodoAppWithSelection from '../TodoAppWithSelection/TodoAppWithSelection';
import GitHubSigleUserDetail from '../GitHubSigleUsrDetail/GitHubSigleUsrDetail';
import GitHubMultipleUsrList from '../GitHubMultipleUsrList/GitHubUsrList';
import TableList from '../TableList/TableList';
import ReduxResult from '../ReduxFlow/Component/Result';

export default class Routes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
    
        }
    }

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={(props) => <Home {...props} />} />
                    <Route exact path="/header" render={(props) => <Header {...props} />} />
                    <Route exact path="/layout" render={(props) => <Layout {...props} />} />
                    <Route exact path="/footer" render={(props) => <Footer {...props} />} />
                    <Route exact path="/todo-app" render={(props) => <TodoApp {...props} />} />
                    <Route exact path="/person" render={(props) => <Person {...props} />} />
                    <Route exact path="/todo-app-with-selection" render={(props) => <TodoAppWithSelection {...props} />} />
                    <Route exact path="/git-single-user" render={(props) => <GitHubSigleUserDetail {...props} />} />
                    <Route exact path="/table-list" render={(props) => <TableList {...props} />} />
                    <Route exact path="/redux-count" render={(props) => <ReduxResult {...props} />} />
                    <Route exact path="/git-multi-user" render={(props) => <GitHubMultipleUsrList {...props} />} />
                </Switch>
            </BrowserRouter>
        )
    }
}