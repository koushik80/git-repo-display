import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import './App.css';
import { Form, Card, Image, Icon } from 'semantic-ui-react';
import SocialFollow from './SocialFollow';


function App() {

  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] = useState('');
  const [commits, setCommits] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch("https://api.github.com/users/example")
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);

  const setData = ({ name, login, followers,
                     following, public_repos,
                     avatar_url,commits
  }) => {
    setName(name);
    setUsername(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
    setCommits(commits);

  };

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${userInput}`)
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          setError(data.message);
        } else {
          setData(data);
          setError(null);
        }
      });
  };

  return (
    <div className="App">
      <div>
        <div className="navbar">
          <div className="nav-logo">
          <div className="wrapper">
              <h1 className="display-name">GitHuß Search Engine<div><img src={logo} className="App-logo" alt="logo" /></div></h1>
	        </div>
        </div>
        </div>
      <div className="search-box">
      <div className="search">
        <Form onSubmit={handleSubmit}>
         <Form.Group>
              <Form.Input
                placeholder="Github user"
                name="github user" onChange={handleSearch} />
              <Form.Button content="Search" />
         </Form.Group>
        </Form>
        </div>
        </div>
        {error ? (<hi>{error}</hi>) : (
          <div className="card">
        <Card>
          <Image src={avatar} wrapped ui={false} />
         <Card.Content>
              <Card.Header>{name}</Card.Header>
              <Card.Header>{userName}</Card.Header>
         </Card.Content>
        <div className="info">
         <Card.Content extra>
            <a>
              <Icon name='user secret' />
                {followers} Followers
            </a>
            </Card.Content>
         <Card.Content extra>
            <a>
             <Icon name='cloud upload' />
               {repos} Repos
           </a>
            </Card.Content>
            <Card.Content extra>
           <a>
             <Icon name='user' />
               {following} Following
           </a>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='code' />
                {commits} Commits
          </a>
        </Card.Content>
       </div>
      </Card>
      </div>
        )}
     </div>
    <div className="socialConnect"><SocialFollow /></div>
    </div>
  );
};

export default App;
