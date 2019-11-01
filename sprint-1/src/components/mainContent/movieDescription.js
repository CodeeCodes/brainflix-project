import React from "react";
import Views from "../../assets/Icons/svg/Icon-views.svg";
import Likes from "../../assets/Icons/svg/Icon-likes.svg";

export default function MovieDescription(props) {
	// console.log(props.data);
	return (
		<div className="movie__description">
			<h1 className="movie__heading">{props.data.title}</h1>

			<h3 className="movie__heading-two">{props.data.channel} </h3>
			<h3 className="movie__heading-two">{props.data.timestamp}</h3>

			<img src={Views} alt="views icon" className="movie__icons" />
			<h3 className="movie__heading-three">{props.data.views}</h3>

			<img src={Likes} alt="likes icon" className="movie__icons" />
			<h3 className="movie__heading-three">{props.data.likes}</h3>

			<div className="movie__paragraph">{props.data.description}</div>
		</div>
	);
}

// const movieDescription = props.data;
// movieDescription.map(function(movie) {
// 	return (
// 		<div className="hero__info-div">
// 			<div className="hero__movie-description">
// 				<h1 className="hero__movie-heading">{movie.title}</h1>
// 				<div className="flex-movie-icons">
// 					<h3 className="hero__movie-heading-two">{movie.channel} </h3>
// 					<h3 className="hero__movie-heading-two">{movie.timestamp}</h3>
// 				</div>
// 				<div className="flex-movie-icons">
// 					<img src={Views} alt="views icon" />
// 					<h3 className="hero__movie-heading-three">{movie.views}</h3>
// 				</div>
// 				<div className="flex-movie-icons">
// 					<img src={Likes} alt="likes icon" />
// 					<h3 className="hero__movie-heading-three">{movie.likes}</h3>
// 				</div>
// 				<div className="hero__movie-paragraph">{movie.description}</div>
// 			</div>
// 		</div>
// 	);
// });
