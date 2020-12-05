import React, { Component } from "react";
import logo from "./Teamfight_Tactics_logo.svg";
import "./App.css";
import NameSearch from "./nameSearch";
import AnalysisDisplay from "./analysisDisplay";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			submittedUsername: "", //   last submitted text field
			apiResponse: "", //         returned JSON from backend
			showData: false, //         true after submit
		};

		this.setSubmittedUsername = this.setSubmittedUsername.bind(this);
		this.setApiResponse = this.setApiResponse.bind(this);
		this.setShowData = this.setShowData.bind(this);
	}

	setSubmittedUsername(sumbitted_username) {
		this.setState({ submittedUsername: sumbitted_username });
	}

	setApiResponse(api_response) {
		this.setState({ apiResponse: api_response });
	}

	setShowData(show_data) {
		this.setState({ showData: show_data });
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div className="App-top">
						<div className="App-logoAndTitle">
							<img src={logo} className="App-logo" alt="logo" />
							<div className="App-title">MATCH HISTORY ANALYST</div>
						</div>
						<NameSearch
							setSubmittedUsername={this.setSubmittedUsername}
							setApiResponse={this.setApiResponse}
							setShowData={this.setShowData}
						/>
					</div>
				</header>
				{this.state.showData && (
					<AnalysisDisplay
						username={this.state.submittedUsername}
						parentResponse={this.state.apiResponse}
					/>
				)}
			</div>
		);
	}
}

export default App;
