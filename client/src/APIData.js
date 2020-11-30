import React, { Component } from "react";
import "./App.css";

export default class APIData extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "Champion-box">
                <img src={require("./championIcons/" + this.props.parentResponse[0] + ".png")} className="Champion-icon" alt="yessir" />
                <p>{this.props.parentResponse[1]}</p>
            </div>
        );
    }
}