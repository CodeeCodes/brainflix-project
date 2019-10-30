import React from "react";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import Views from "../../assets/Icons/svg/Icon-views.svg";
import Likes from "../../assets/Icons/svg/Icon-likes.svg";
export default function Comments(props) {
	return (
		<div className="comments">
			<div className="hero__info-div">
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
			<form action="" className="comments__form">
				<h2 className="comments__heading">3 Comments </h2>
				<h4 className="comments__input-heading">Join the conversation</h4>
				<div className="comments__nav">
					<img
						src={avatar}
						alt="comments avatar"
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
			<div className="comments__input-div">
				<img src={avatar} alt="avatar" className="comments__input-div-avatar" />
				<div className="comments__input-div-info">
					<h3 className="comments__input-div-heading">
						{props.data.comments[0].name}
					</h3>
					<h4 className="comments__input-div-date">
						{props.data.comments[0].date}
					</h4>
					<p className="comments__input-div-paragraph">
						{props.data.comments[0].comment}
					</p>
				</div>
			</div>
			<div className="comments__input-div">
				<img src={avatar} alt="avatar" className="comments__input-div-avatar" />
				<div className="comments__input-div-info">
					<h3 className="comments__input-div-heading">
						{props.data.comments[1].name}
					</h3>
					<h4 className="comments__input-div-date">
						{props.data.comments[1].date}
					</h4>
					<p className="comments__input-div-paragraph">
						{props.data.comments[1].comment}
					</p>
				</div>
			</div>
			<div className="comments__input-div">
				<img src={avatar} alt="avatar" className="comments__input-div-avatar" />
				<div className="comments__input-div-info">
					<h3 className="comments__input-div-heading">
						{props.data.comments[2].name}
					</h3>
					<h4 className="comments__input-div-date">
						{props.data.comments[2].date}
					</h4>
					<p className="comments__input-div-paragraph">
						{props.data.comments[2].comment}
					</p>
				</div>
			</div>
		</div>
	);
}
