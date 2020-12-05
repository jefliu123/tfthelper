import React, { Component } from "react";
import "./App.css";

export default class NameSearch extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentUsername: "", //current text field
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	//called everytime text field changes
	handleChange(event) {
		//update currentUsername with current text in text field
		this.setState({ currentUsername: event.target.value });
	}

	// called on submit
	handleSubmit(event) {
		event.preventDefault();
		// calls callAPI with entered username
		this.callAPI(this.state.currentUsername);
		// sets parent state submittedUsername to the submitted username
		this.props.setSubmittedUsername(this.state.currentUsername);
		// sets parent state showData to true (to display analysis)
		this.props.setShowData(true);
		// resets text field on submit
		this.mainInput.value = "";
	}

	// takes in summoner name and fetches JSON into apiResponse (in parent)
	callAPI(summonerName) {
		fetch("http://localhost:3006/carryHistory?summoner_name=" + summonerName)
			.then((res) => res.json())
			.then((res) => this.props.setApiResponse(res))
			.catch((err) => err);
	}

	render() {
		return (
			<div className="finder-body">
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				></link>
				<form
					className="submit-form"
					spellCheck="false"
					onSubmit={this.handleSubmit}
				>
					<input
						ref={(ref) => (this.mainInput = ref)}
						className="finder-input"
						type="text"
						placeholder="Enter Summoner Name"
						value={this.state.value}
						onChange={this.handleChange}
					/>
					<button className="finder-submit" type="submit">
						<i className="fa fa-search"></i>
					</button>
				</form>
			</div>
		);
	}
}
