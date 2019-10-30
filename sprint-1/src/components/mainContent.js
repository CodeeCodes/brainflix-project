import React from "react";
import HeroVideo from "./mainContent/heroVideo";
import Comments from "./mainContent/comments";
import NextVideo from "./mainContent/nextVideo";

export default function mainContent(props) {
	// const data = props.data;

	return (
		<div>
			<HeroVideo data={props.data} />
			<Comments data={props.data} />
			<NextVideo data={props.data} />
		</div>
	);
}
