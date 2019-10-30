import React from "react";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
export default function Comments() {
	return (
		<div className="comments">
			<h2 className="comments__heading">3 Comments </h2>
			{/* <div className="comments__input"> */}
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
		</div>
		// </div>
	);
}
