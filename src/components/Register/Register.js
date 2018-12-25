import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            confirmPass: ''
        }
    }
    // skeleton register endpoint here to register a new user. Some logic here should check that the username doesn't exist and that the password and confirm passwords actually match.
    register = () => {
        console.log('hit the front end of register')
        const user = {
            username: this.state.username,
            password: this.state.password
        };
        if (
            this.state.password !== '' &&
            this.state.password === this.state.confirmPass
        ) {
            axios
                .post('/auth/register', user)
                .then(result => {
                    console.log(result);
                    this.props.history.push('/')
                })
                .catch(err => {
                    console.log(`Error: ${err}`)
                })
        } else if (this.state.username === '') {
            alert('Please enter a valid username')
        } else (
            alert(`Passwords must match`)
        )
    }
    // basic method to handle any user inputs.
    handleInputs = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className='register_container'>
                <div className='register_card'>
                    <h1>Register</h1>
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
                        name='password'
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.handleInputs}
                        className='inputs'
                    />
                    <input
                        type="password"
                        name='confirmPass'
                        value={this.state.confirmpass}
                        placeholder="Confirm password"
                        onChange={this.handleInputs}
                        className='inputs'
                    />
                    <button
                        className="login_button"
                        onClick={this.register}
                    >Register!</button>
                </div>
            </div>
        )
    }
}



export default Register