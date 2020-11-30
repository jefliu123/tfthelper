import React, { Component } from "react";
import "./App.css";
import APIData from "./APIData.js";

export default class NameSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", apiResponse: [], showData: false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({username: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.callAPI(this.state.username);
        this.setState({showData: true});
    }

    callAPI(summonerName) {
        fetch("http://localhost:3006/carryHistory?summoner_name=" + summonerName)
            .then(res => res.json())
            .then(res => this.setState({ apiResponse: Object.entries(res).sort(function(a,b) {return a[1] - b[1]}).reverse()}))
            .catch(err => err);
    }

    render() {
        const items = []
        var count = 0
        var mostUsedCarry = ""
        var abuser = false;

        for (const [champ, freq] of this.state.apiResponse) {
            if (count === 0) {
                mostUsedCarry = champ;
                if (freq > 3) {
                    abuser = true
                }
            }
            if (count > 2) {
                break;
            }
            items.push(<APIData parentResponse = {[champ, freq]}/>);
            count++;
        }

        return (
            <div class= "finder-body">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <form class="submit-form" spellcheck="false" onSubmit={this.handleSubmit}>
                    <input class= "finder-input" type="text" placeholder="Enter Summoner Name" value={this.state.value} onChange={this.handleChange} />
                    <button class= "finder-submit" type="submit"><i class="fa fa-search"></i></button>
                </form>
                {this.state.showData &&
                    <div class = "Champion-body">
                        <div class = "Champion-header">
                            <p>Preferred Carries:<br></br>(Past 10 Games)</p>
                        </div>
                        <div class = "Champion-row">
                            {items}
                        </div>
                        <div>
                            {abuser && <p class="red">You are a {mostUsedCarry.substring(5)} one-trick. Yikes</p>}
                            {!abuser && <p class="green">You are pretty flexible. Not bad</p>}
                        </div>
                    </div>
                }
            </div>
        );
    }
}