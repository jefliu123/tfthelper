import React, { Component } from "react";
import "./App.css";

export default class ChampDisplay extends Component {
    render() {
        var champName = this.props.champName;
        var champInfoObject = this.props.champInfoObject;
        var frequency = champInfoObject.freq;
        var itemsObject = champInfoObject.items;
        var itemsArray = Object.entries(itemsObject);
        itemsArray.sort((x, y) => y[1] - x[1]);
        const itemsDisplayArray = [];
        for (var i = 0; i < 4; i++) {
            if (itemsArray[i]) {
                if (itemsArray[i][0] > 9) {
                    itemsDisplayArray.push(<img src={require("./items/" + itemsArray[i][0] + ".png")} className="Item-icon" alt="yessir" />);
                }
            }
        }
        return (
            <div className = "Champion-box">
                <img src={require("./championIcons/" + champName + ".png")} className="Champion-icon" alt="yessir" />
                <p> {frequency} Games </p>
                <span>{itemsDisplayArray}</span>
            </div>
        );
    }
}