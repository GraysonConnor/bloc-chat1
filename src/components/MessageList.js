import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.roomsRef = this.props.firebase.database().ref('messages');
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) })
    });
  }

  render() {
      return (
        <div>
        <h2>Messages:</h2>
        <ul>
          {this.state.messages
            .filter(message => message.roomId === this.props.activeRoom)
            .map((message, key) => (
            <li key={message.key}>
              {message.content}
            </li>
          ))}
        </ul>
        </div>
      );
    }

}

export default MessageList;
