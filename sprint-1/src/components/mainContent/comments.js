import React from "react";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
export default function Comments(props) {
	console.log(props.data.comments[1].name);
	return (
		<div className="comments">
			<h2 className="comments__heading">3 Comments </h2>
			<h4 className="comments__input-heading">Join the conversation</h4>
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
