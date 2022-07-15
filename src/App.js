import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import './App.css';
import { Form } from 'semantic-ui-react';


function App() {

  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(null);


  return (
    <div className="App">
      <div className="navbar">devHuß Git-Display</div>
      <div className="search">
        <Form>
         <Form.Group>
            <Form.Input placeholder="Name" name="name" />
            <Form.Button content="Submit" />
         </Form.Group>
        </Form>
      </div>

    </div>
  );
};

export default App;
