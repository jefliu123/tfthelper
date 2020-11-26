import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function App() {

  const [ formState, setFormState ] = useState({ username: ""})
  const [ userInfo, setUserInfo ] = useState([])

  function summonerSearch () {
    axios.get('https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/Derpiness',
      {
        params: {
          "api_key": "RGAPI-3fdfed40-385f-4f8d-97ca-dd76611f2e79"
        }
      })
      .then(res => {
        console.log(res);
        setUserInfo(res.data);
      })
  }

  function handleSubmit() {
    summonerSearch()
  }

  return (
    <b>
      <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" onChange={ e => setFormState({...formState, username: e.target.value})}/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Enter
          </Button>
        </Form>
        <p>Level: {userInfo.summonerLevel}</p>
        <p>puuid: {userInfo.puuid}</p>
      </div>
    </b>
  );
}

export default App;
