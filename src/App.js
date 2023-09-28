import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import Login from './components/Login';
import ChatFeed from './components/ChatFeed';
import "./App.css";

const projectID = "...";

const App = () => {

  if(!localStorage.getItem('username')) {
    return <Login />
  }

  return (
    <ChatEngine
    height="100vh"
    projectID={projectID}
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App;
