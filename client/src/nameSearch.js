import React, { Component } from "react";
import "./App.css";
import AnalysisDisplay from "./analysisDisplay";

export default class NameSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { currentUsername: "", submittedUsername: "", apiResponse: "", showData: false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({currentUsername: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.callAPI(this.state.currentUsername);
        this.setState({submittedUsername: this.state.currentUsername});
        this.setState({showData: true});
        this.mainInput.value = "";
    }

    callAPI(summonerName) {
        fetch("http://localhost:3006/carryHistory?summoner_name=" + summonerName)
            .then(res => res.json())
            .then(res => this.setState({ apiResponse: res}))
            .catch(err => err);
    }

    render() {
        return (
            <div className= "finder-body">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <form className="submit-form" spellCheck="false" onSubmit={this.handleSubmit}>
                    <input ref={(ref) => this.mainInput= ref} className= "finder-input" type="text" placeholder="Enter Summoner Name" value={this.state.value} onChange={this.handleChange} />
                    <button className= "finder-submit" type="submit"><i className="fa fa-search"></i></button>
                </form>
                {this.state.showData && <AnalysisDisplay key = {this.state.submittedUsername} username = {this.state.submittedUsername} parentResponse = {this.state.apiResponse}/>}
            </div>
        );
    }
}