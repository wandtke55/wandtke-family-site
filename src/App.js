import React, { Component } from 'react';
import './Reset.css';
import './App.css';
import io from 'socket.io-client';
import routes from './routes';

const socket = io(process.env.REACT_APP_SOCKET)

class App extends Component {
  render() {
    return (
      <div className="App">
        {routes(socket)}
      </div>
    );
  }
}

export default App;
