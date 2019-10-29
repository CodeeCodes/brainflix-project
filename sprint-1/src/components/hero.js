import React from "react";
import HeroImage from "../assets/Images/hero-image.jpg";
import PlayButton from "../assets/Icons/svg/Icon-play.svg";
import VolumeButton from "../assets/Icons/svg/Icon-volume.svg";
import FullButton from "../assets/Icons/svg/Icon-fullscreen.svg";
import Views from "../assets/Icons/svg/Icon-views.svg";
import Likes from "../assets/Icons/svg/Icon-likes.svg";

export default function Hero() {
	return (
		<div className="hero">
			<img src={HeroImage} alt="two bmx riders" className="hero__image" />
			<div className="hero__image-icons">
				<div className="hero__image-icon-one">
					<img
						src={PlayButton}
						alt="play button"
						className="hero__image-icons-button"
					/>
				</div>
				<div className="hero__image-icon-two">
					<img
						src={FullButton}
						alt="full screen button"
						className="hero__image-icons-button"
					/>
					<img
						src={VolumeButton}
						alt="volume button"
						className="hero__image-icons-button"
					/>
				</div>
			</div>
			<div className="hero__movie-description">
				<h1 className="hero__movie-heading">BMX Rampage: 2018 Highlights</h1>
				<div className="flex-movie-icons">
					<h3 className="hero__movie-heading-two">By Red Cow </h3>
					<h3 className="hero__movie-heading-two">12/18/2018 </h3>
				</div>
				<div className="flex-movie-icons">
					<img src={Views} alt="views icon" />
					<h3 className="hero__movie-heading-three">1,001,023</h3>
				</div>
				<div className="flex-movie-icons">
					<img src={Likes} alt="views icon" />
					<h3 className="hero__movie-heading-three">1,001,023</h3>
				</div>
				<p className="hero__movie-paragraph">
					On a gusty day in Southern Utah, a group of 25 daring mountain bikers
					blew the doors off what is possible on two wheels, unleashing some of
					the biggest moments the sport has ever seen. While mother nature only
					allowed for one full run before the conditions made it impossible to
					ride, that was all that was needed for event veteran Kyle Strait, who
					won the event for the second time -- eight years after his first Red
					Cow Rampage title
				</p>
			</div>
		</div>
	);
}
