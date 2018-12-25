import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {username} from '../../dux/reducer';

class Login extends Component{
    constructor(){
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    login = () => {
        console.log('Hit the login frontend')
        const user = {
            username: this.state.username,
            password: this.state.password
        };
        const { username, password } = this.state;
        if (username && password) {
            axios
                .post('/auth/login', user)
                .then(response => {
                    const user = response.data;
                    if (user.user_id) {
                        console.log(response.status)
                        // console.log(response)
                        // here is where the redux will be updated
                        this.props.username(response.data);
                        // here is where we push to landing page if a user is found
                        this.props.history.push('/');
                    }
                })
        } else if (!username) {
            alert('Please enter a username')
        } else if (!password) {
            alert('Please enter a password')
        }
    }

    handleInputs = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        console.log(this.state)
        return(
            <div className='login-container'>
                <div className='login'>
                <h1>Login</h1>
                <input
                        type="text"
                        name='username'
                        value={this.state.username}
                        placeholder="Username"
                        onChange={this.handleInputs}
                        className='inputs'
                    />
                <input 
                        type="password"
                        name="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.handleInputs}
                        className='inputs'
                />
                <button onClick={this.login} className='btn'>Login</button>
                <Link to='/register'><button className='btn'>Register</button></Link>
                </div>
            </div>
        )
    }
}


export default connect(null, {username})(Login)