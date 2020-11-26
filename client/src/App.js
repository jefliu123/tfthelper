import React, { Component } from "react";
import logo from "./Teamfight_Tactics_logo.svg";
import "./App.css";

import OneTrickFinder from './OneTrickFinder';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="App-title">ONE-TRICK FINDER</div>
                </header>
                <OneTrickFinder />
            </div>
        );
    }
}

export default App;
