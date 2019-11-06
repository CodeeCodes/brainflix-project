import React from "react";
import Header from "./components/header";
import MainContent from "./components/mainContent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import mainContent from "./components/mainContent";
import { Redirect } from "react-router-dom";

export default function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<MainContent />
				<Switch>	
					<Redirect to="/" component={mainContent} />
					<Route path="/video/:videoId" exact component={MainContent} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}
