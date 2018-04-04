import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyBNY0fSp2GT5dT65HUzRy05BiItLTIlBTY",
    authDomain: "bloc-chat1-8e5e4.firebaseapp.com",
    databaseURL: "https://bloc-chat1-8e5e4.firebaseio.com",
    projectId: "bloc-chat1-8e5e4",
    storageBucket: "bloc-chat1-8e5e4.appspot.com",
    messagingSenderId: "506807739216"
  };
  firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        activeRoom: 'No Room Selected Yet'
      };
    }

    setActiveRoom(e) {
      this.setState({ activeRoom: e.target.value })
    }

  render() {
    return (
    <div className="App">
    <div>
      <RoomList
        firebase={firebase}
        activeRoom={this.state.activeRoom}
        setActiveRoom={(e) => this.setActiveRoom(e)}
      />
      <h1>Active Room: {this.state.activeRoom} </h1>
      <MessageList
        firebase={firebase}
        activeRoom={this.state.activeRoom}
      />
      </div>
    </div>
    );
  }
}

export default App;
