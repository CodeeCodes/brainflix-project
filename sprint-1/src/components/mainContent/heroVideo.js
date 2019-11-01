import React from "react";
import HeroVideo from "../../assets/Video/heroVideo.mp4";

export default function Hero(props) {
	return (
		<div className="hero">
			<video src={HeroVideo} controls className="hero__video"></video>
		</div>
	);
}
