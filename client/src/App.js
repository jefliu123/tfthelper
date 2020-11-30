import React, { Component } from "react";
import logo from "./Teamfight_Tactics_logo.svg";
import "./App.css";

import NameSearch from './nameSearch';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="App-title">Match History Analyst</div>
                </header>
                <NameSearch />
            </div>
        );
    }
}

export default App;
