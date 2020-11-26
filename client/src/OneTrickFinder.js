import React, { Component } from "react";
import "./App.css";

export default class OneTrickFinder extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "", username: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({username: event.target.value});
    }

    handleSubmit(event) {
        //call API
        event.preventDefault();
    }

    callAPI() {
        fetch("http://192.168.163.43:3006/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div class= "finder-body">
            <form class="submit-form" onSubmit={this.handleSubmit}>
                <input class= "finder-input" type="text" placeholder="Search Summoner Name" value={this.state.value} onChange={this.handleChange} />
                <input class= "finder-submit" type="submit" value="GO" />
                <p>{this.state.username}</p>
            </form>
            <p className="App-intro">{this.state.apiResponse}</p>
            </div>
        );
    }
}