import React, { Component } from "react";
import Header from "./components/header";
import MainContent from "./components/mainContent";
import { Route, Switch } from "react-router-dom";
import mainContent from "./components/mainContent";
import { Redirect } from "react-router-dom";
import UploadPage from "./components/uploadPage";

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<MainContent />
				<Switch>
					<Redirect to="/" exact component={mainContent} />
					<Route path="/nextvideo/:videoid" component={MainContent} />
					<Route path="/uploadpage" component={UploadPage} />
				</Switch>
			</div>
		);
	}
}
