import React from "react";
import HeroVideo from "./mainContent/heroVideo";
import Comments from "./mainContent/comments";

export default function mainContent(props) {
	// const data = props.data;

	return (
		<div>
			<HeroVideo data={props.data} />
			<Comments />
		</div>
	);
}
