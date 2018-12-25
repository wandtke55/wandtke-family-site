import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import CreatePost from './components/CreatePost/CreatePost';
import Register from './components/Register/Register';

export default (socket) => (
    <Switch>
        <Route exact path='/' render={(props)=> <Home socket={socket}{...props}/>}/>
        <Route path='/login' render={(props)=> <Login socket={socket}{...props}/>}/>
        <Route path='/create-post' render={(props)=> <CreatePost socket={socket}{...props}/>}/>
        <Route path='/register' component={Register}/>
    </Switch>
)