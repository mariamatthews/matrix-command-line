import logo from './logo.svg';
import './App.css';
import Terminal from 'terminal-in-react';
import React, { Component } from 'react';

function App() {
  return (
    <div className="App">
<Terminal
          color='red'
          backgroundColor='black'
          barColor='black'
          hideTopBar='true'
          allowTabs='false'
          startState='maximised'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{
            'open-linkedin': () => window.open('https://www.linkedin.com/in/mariamatthews89/', '_blank'),
            showmsg: this.showMsg,
            popup: () => alert('Terminal in React')
          }}
          descriptions={{
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert'
          }}
          msg='Because why not lol. Welcome to matrix. Type "help" for the list of commands.'
        />
    </div>
  );
}

export default App;
