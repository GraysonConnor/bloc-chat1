import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';


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
  render() {
    return (
    <div className="App">
    <RoomList firebase={firebase}/>
    </div>
    );
  }
}

export default App;
