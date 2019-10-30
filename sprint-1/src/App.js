import React from "react";
import Header from "./components/header";
import MainContent from "./components/mainContent";

function App() {
	const mainVideo = {
		id: "type of <string>",
		title: "BMX Rampage: 2018 Highlights",
		description:
			"On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen.While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
		channel: "type of <string>",
		image: "type of <string>",
		views: "1,001,023",
		likes: "1,001,023",
		duration: "type of <string>",
		video: "type of <string>",
		timestamp: "type of <number>",
		comments: "type of <string>"
	};
	return (
		<div className="App">
			<Header />
			<MainContent data={mainVideo} />
		</div>
	);
}

export default App;
