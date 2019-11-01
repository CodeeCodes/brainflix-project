import React from "react";
import HeroVideo from "./mainContent/heroVideo";
import Comments from "./mainContent/comments";
import NextVideo from "./mainContent/nextVideo";
import MovieDescription from "./mainContent/movieDescription";

export default function mainContent(props) {
	return (
		<div>
			<HeroVideo data={props.data} />
			<div className="main-desktop-flex">
				<div className="main-movie-div">
					<MovieDescription data={props.data} />
					<Comments data={props.data} />
				</div>
				<NextVideo data={props.data} />
			</div>
		</div>
	);
}
