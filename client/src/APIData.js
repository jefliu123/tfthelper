import React, { Component } from "react";
import "./App.css";

export default class APIData extends Component {
    render() {
        return (
            <div>
                {this.props.parentResponse}
                <h1>YESSIR</h1>
            </div>
        );
    }
}