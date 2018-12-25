import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';


class Home extends Component{
    constructor(){
        super();

        this.state = {
            username: ''
        }
    }

    componentDidMount(){
        axios.get('/api/posts')
    }

    // random = async () => {
    //     let response = await axios.get('/api/random')
    //         console.log(response.data)
    // }

    logout = () => {
        axios.get(`/auth/logout`).then(() => { });
        this.props.history.push('/')
    }

    render(){
        console.log(this.props)
        return(
            <div className='home-container'>
                <div className='home'>
                <div className='admin'>
                <Link to='login'><h4>Admin Login</h4></Link>
                <button onClick={this.logout}>Admin Logout</button>
                <Link to='/create-post'><button>Create A Post</button></Link>
                </div>
                <h1>
                    Welcome {this.props.username.username}
                </h1>
                {/* <button onClick={this.random}>Random Button</button> */}
                <h1>
                    This is where all of the posts and comments will display below
                </h1>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.username
    }
}


export default connect(mapStateToProps)(Home)