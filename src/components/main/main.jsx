import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from '../../pages/landing/landingpage';
import Login from '../login/login';
import SignUp from '../signup/signup';
import Home from '../../pages/home/home';

function Main (){
    return(
        <>
        <Router>
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route exact path="/signin" component={Login}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/home" component={Home}/>

            </Switch>
        </Router>
        </>
    )
}

export default Main ;