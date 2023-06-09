import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';
import './Home.css';

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useNavigate();
  const onLogin = (cred) => {

    if (cred.username === 'Navi' && cred.password === '12345') {
      history('/welcome');
    } else {
      alert("Login Failed")
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin({ username, password });
  };

  return (
    <>
      <div className='home_page_background' title='home_page_background'>
      </div>
      <div className='header' title='header'>
      </div>
      <div className='content' title='content'>
        <form className='login' onSubmit={handleSubmit} title='login' >
          <span className="label"><label title='label1'>Username</label></span>
          <span><input
            className="input-box"
            title='input-box1'
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          /></span>
          <span className="label" ><label title='label2'>Password</label></span>
          <span><input
            className="input-box"
            title='input-box2'
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          /></span>
          <span className="login-button" ><Button className="login-button" title='submit' variant="contained" type="submit"
            style={{
              "backgroundColor": "red",
              "borderRadius": "0"
            }}
          >LOGIN</Button></span>
        </form>
      </div>
    </>
  )
}

export default Home;