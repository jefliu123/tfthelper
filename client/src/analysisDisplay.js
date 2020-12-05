import React, { Component } from "react";
import "./App.css";
import ChampDisplay from "./champDisplay.js";

export default class AnalysisDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "" };
    }

    componentDidMount() {
        this.setState({ username: this.props.username});
    }

    render() {
        const champDisplayArray = [];
        var mostUsedCarry = "";
        var abuser = false;

        var championsData = {}
       
        if (this.props.parentResponse.champions) {
            championsData = this.props.parentResponse.champions;
            var championsArray = Object.entries(championsData);
            championsArray.sort((x, y) => y[1].freq - x[1].freq);
            for (var i = 0; i < 5; i++) {
                if (i === 0) {
                    mostUsedCarry = championsArray[i][0];
                    if (championsArray[i][1].freq > 4) {
                        abuser = true;
                    }
                }
                champDisplayArray.push(<ChampDisplay champName = {championsArray[i][0]} champInfoObject = {championsArray[i][1]}/>);
            }
        }


        return (
            <div className = "Champion-body">
                <div className = "Champion-header">
                    <p className = "Summoner-name">{this.state.username}</p>
                    <p>Preferred Carries:<br></br>(Past 10 Games)</p>
                </div>
                <div className = "Champion-row">
                    {champDisplayArray}
                </div>
                <div className = "Analysis-box">
                    <p>
                    Verdict:
                    {abuser && <span className="red">&nbsp;{mostUsedCarry.substring(5)} one-trick. Yikes</span>}
                    {!abuser && <span className="green">&nbsp;Pretty flexible. Not bad</span>}
                    </p>
                </div>
            </div>
        );
    }
}