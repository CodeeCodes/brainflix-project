import React from "react";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import Views from "../../assets/Icons/svg/Icon-views.svg";
import Likes from "../../assets/Icons/svg/Icon-likes.svg";

export default function Comments(props) {
	const newComments =
		props.data.comments &&
		props.data.comments.map(function(comment) {
			<div className="comments__input-div">
				<img src={avatar} alt="avatar" className="comments__input-div-avatar" />
				<div className="comments__input-div-info">
					<h3 className="comments__input-div-heading">{comment.name}</h3>
					<h4 className="comments__input-div-date">{comment.date}</h4>
					<p className="comments__input-div-paragraph">{comment.comment}</p>
				</div>
			</div>;
		});
	const movieDescription =
		props.data &&
		props.data.map(function(movie) {
			<div className="hero__info-div">
				<div className="hero__movie-description">
					<h1 className="hero__movie-heading">{movie.title}</h1>
					<div className="flex-movie-icons">
						<h3 className="hero__movie-heading-two">{movie.channel} </h3>
						<h3 className="hero__movie-heading-two">{movie.timestamp}</h3>
					</div>
					<div className="flex-movie-icons">
						<img src={Views} alt="views icon" />
						<h3 className="hero__movie-heading-three">{movie.views}</h3>
					</div>
					<div className="flex-movie-icons">
						<img src={Likes} alt="likes icon" />
						<h3 className="hero__movie-heading-three">{movie.likes}</h3>
					</div>
					<div className="hero__movie-paragraph">{movie.description}</div>
				</div>
			</div>;
		});

	return (
		<div className="comments">
			 {movieDescription}
			<form action="" className="comments__form">
				<h2 className="comments__heading">3 Comments </h2>
				<h4 className="comments__input-heading">Join the conversation</h4>
				<div className="comments__nav">
					<img
						src={avatar}
						alt="comments avatar"
						className="comments__input-avatar"
					/>
					<textarea
						name="comments-text-area"
						cols="40"
						rows="5"
						className="comments__input-text"
					></textarea>
					<button type="comments__input-submit">COMMENT</button>
				</div>
			</form>
			{newComments}
		</div>
	);
}
