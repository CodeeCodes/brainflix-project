import React, { Component } from "react";
import image from "../assets/Images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";
export default class uploadPage extends Component {
	render() {
		return (
			<div className="upload">
				<h1 className="upload__heading">Upload Video</h1>
				<h4 className="upload__heading-small">VIDEO THUMBNAIL</h4>
				<img src={image} alt="" className="upload__input-image" />
				<h4 className="upload__heading-small">TITLE YOUR VIDEO</h4>
				<input
					type="text"
					name=""
					placeholder="Add a title to your video"
					className="upload__input-one"
				/>
				<h4 className="upload__heading-small">ADD A VIDEO DESCRIPTION</h4>
				<input
					type="text"
					placeholder="Add a description of your video"
					className="upload__input-two"
				/>
				<button className="upload__button">PUBLISH</button>
				<Link to={"/"} className="upload__button-cancel">
					CANCEL
				</Link>
			</div>
		);
	}
}
