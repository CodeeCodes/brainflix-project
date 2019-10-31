import React, { Component } from "react";
import Header from "./components/header";
import MainContent from "./components/mainContent";
import videoImageOne from "./assets/Images/video-list-1.jpg";
import videoImageTwo from "./assets/Images/video-list-2.jpg";
import videoImageThree from "./assets/Images/video-list-3.jpg";
import videoImageFour from "./assets/Images/video-list-4.jpg";
import videoImageFive from "./assets/Images/video-list-5.jpg";
import videoImageSix from "./assets/Images/video-list-6.jpg";
import videoImageSeven from "./assets/Images/video-list-7.jpg";
import videoImageEight from "./assets/Images/video-list-8.jpg";

class App extends Component {
	constructor() {
		super();
		this.mainVideo = {
			id: "type of <string>",
			title: "BMX Rampage: 2018 Highlights",
			description:
				"On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen.While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
			channel: "By Red Cow",
			views: "1,001,023",
			likes: "1,001,023",
			duration: "type of <string>",
			video: "type of <string>",
			timestamp: "12/18/2018 ",
			comments: [
				{
					avatar: "src/assets/Images/Mohan-muruge.jpg",
					name: "Micheal Lyons",
					date: "12/18/2018",
					comment:
						"They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
				},
				{
					avatar: "src/assets/Images/Mohan-muruge.jpg",
					name: "Gary Wong",
					date: "12/18/2018",
					comment:
						"Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
				},
				{
					avatar: "src/assets/Images/Mohan-muruge.jpg",
					name: "Theodore Duncan",
					date: "12/18/2018",
					comment:
						"How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
				}
			],
			nextvideo: [
				{
					id: "1",
					title: "Become A Travel Pro In One Easy Lesson...",
					channel: "Scotty Cranmer",
					image: videoImageOne
				},
				{
					id: "2",
					title: "Les Houches The Hidden Gem Of The...",
					channel: "Scotty Cranmer",
					image: videoImageTwo
				},
				{
					id: "3",
					title: "Travel Health Useful Medical Information...",
					channel: "Scotty Cranmer",
					image: videoImageThree
				},
				{
					id: "4",
					title: "Cheap Airline Tickets Great Ways To Save",
					channel: "Emily Harper",
					image: videoImageFour
				},
				{
					id: "5",
					title: "Take A Romantic Break In A Boutique Hotel",
					channel: "Ethan Owen",
					image: videoImageFive
				},
				{
					id: "6",
					title: "Choose The Perfect Accommodations",
					channel: "Lydia Perez",
					image: videoImageSix
				},
				{
					id: "7",
					title: "Cruising Destination Ideas",
					channel: "Timothy Austin",
					image: videoImageSeven
				},
				{
					id: "8",
					title: "Train Travel On Track For Safety",
					channel: "Scotty Cranmer",
					image: videoImageEight
				}
			]
		};
	}
	render() {
		return (
			<div className="App">
				<Header />
				<MainContent data={this.mainVideo} />
			</div>
		);
	}
}

export default App;
