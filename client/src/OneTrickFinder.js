import React, { Component } from "react";
import "./App.css";
import APIData from "./APIData.js";

export default class OneTrickFinder extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", apiResponse: "nononono", showData: false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({username: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.callAPI();
        this.setState({showData: true});
    }

    callAPI() {
        fetch("http://192.168.163.43:3006/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    render() {
        return (
            
            <div class= "finder-body">
                <form class="submit-form" onSubmit={this.handleSubmit}>
                    <input class= "finder-input" type="text" placeholder="Enter Summoner Name" value={this.state.value} onChange={this.handleChange} />
                    <input class= "finder-submit" type="submit" value="GO" />
                    <p>{this.state.username}</p>
                </form>
                <p className="App-intro">{this.state.apiResponse}</p>
                {this.state.showData && <APIData parentResponse = {this.state.apiResponse}/>}
            </div>
            
        );
    }
}