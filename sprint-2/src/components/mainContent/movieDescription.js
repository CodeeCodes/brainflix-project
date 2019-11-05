import React from "react";
import Views from "../../assets/Icons/svg/Icon-views.svg";
import Likes from "../../assets/Icons/svg/Icon-likes.svg";

export default function MovieDescription(props) {
	console.log(props.movieDescription);
	return (
		<div className="movie__description">
			<h1 className="movie__heading">{props.movieDescription.title}</h1>

			<h3 className="movie__heading-two">{props.movieDescription.channel} </h3>
			<h3 className="movie__heading-two-special">
				{props.movieDescription.timestamp}
			</h3>

			<img src={Views} alt="views icon" className="movie__icons" />
			<h3 className="movie__heading-three">{props.movieDescription.views}</h3>

			<img src={Likes} alt="likes icon" className="movie__icons" />
			<h3 className="movie__heading-three">{props.movieDescription.likes}</h3>

			<div className="movie__paragraph">
				<p className="movie__paragraph-text">
					{props.movieDescription.description}
				</p>
			</div>
		</div>
	);
}
