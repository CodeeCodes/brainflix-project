import React, { Component } from "react";
import avatar from "../../assets/Images/Mohan-muruge.jpg";

export default class Comments extends Component {
	render() {
		// console.log(this.props);
		const newComments =
			this.props.comments.comments &&
			this.props.comments.comments.map(function(comment, index) {
				return (
					<div className="comments__input-div" key={index}>
						<img
							src={avatar}
							alt="avatar"
							className="comments__input-div-avatar"
						/>
						<div className="comments__input-div-info">
							<div className="comments__flex">
								<h3 className="comments__input-div-heading">{comment.name}</h3>
								<h4 className="comments__input-div-date">{comment.date}</h4>
							</div>
							<p className="comments__input-div-paragraph">{comment.comment}</p>
						</div>
					</div>
				);
			});

		return (
			<div className="comments">
				<form action="" className="comments__form">
					<h2 className="comments__heading">3 COMMENTS</h2>
					<h4 className="comments__input-heading">JOIN THE CONVERSATION</h4>
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
}
