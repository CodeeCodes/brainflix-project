import React from "react";
import HeroImage from "../../assets/Images/hero-image.jpg";
import PlayButton from "../../assets/Icons/svg/Icon-play.svg";
import VolumeButton from "../../assets/Icons/svg/Icon-volume.svg";
import FullButton from "../../assets/Icons/svg/Icon-fullscreen.svg";
import Views from "../../assets/Icons/svg/Icon-views.svg";
import Likes from "../../assets/Icons/svg/Icon-likes.svg";

export default function Hero(props) {
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
				<h1 className="hero__movie-heading">{props.data.title}</h1>
				<div className="flex-movie-icons">
					<h3 className="hero__movie-heading-two">{props.data.channel} </h3>
					<h3 className="hero__movie-heading-two">{props.data.timestamp}</h3>
				</div>
				<div className="flex-movie-icons">
					<img src={Views} alt="views icon" />
					<h3 className="hero__movie-heading-three">{props.data.views}</h3>
				</div>
				<div className="flex-movie-icons">
					<img src={Likes} alt="likes icon" />
					<h3 className="hero__movie-heading-three">{props.data.likes}</h3>
				</div>
				<div className="hero__movie-paragraph">{props.data.description}</div>
			</div>
		</div>
	);
}
