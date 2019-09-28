import React from 'react';
import {Switch, BrowserRouter,Route} from 'react-router-dom'
import Home from '../Home/Home';
import Header from '../Global/Header/Header';
import Layout from '../Global/Layout/Layout';
import Footer from '../Global/Footer/Footer';

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
                </Switch>
            </BrowserRouter>
        )
    }
}