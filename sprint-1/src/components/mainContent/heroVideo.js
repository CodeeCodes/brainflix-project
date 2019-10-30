import React from "react";
import HeroImage from "../../assets/Images/hero-image.jpg";
import PlayButton from "../../assets/Icons/svg/Icon-play.svg";
import VolumeButton from "../../assets/Icons/svg/Icon-volume.svg";
import FullButton from "../../assets/Icons/svg/Icon-fullscreen.svg";


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
	
		</div>
	);
}
