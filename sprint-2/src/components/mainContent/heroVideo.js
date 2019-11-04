import React from "react";
import HeroVideo from "../../assets/Images/hero-image.jpg";

export default function Hero(props) {
	return (
		<div className="hero">
			<video poster={HeroVideo} controls className="hero__video"></video>
		</div>
	);
}
