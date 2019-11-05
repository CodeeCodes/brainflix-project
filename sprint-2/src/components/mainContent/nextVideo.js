import React from "react";
import { Link } from "react-router-dom";

export default function NextVideo(props) {
	// console.log(props);
	return (
		<div className="next__video-main">
			{props.mainVideo.length > 0 ? (
				props.mainVideo.map((video) => (
					<Link
						to={`/nextVideo/${video.id}`}
						className="next__video"
						key={video.id}
					>
						<img
							src={video.image}
							alt="next video"
							className="next__video-image"
						/>
						<div className=" next__video-info">
							<h5 className="next__video-heading-bold">{video.title}</h5>
							<h5 className="next__video-heading">{video.channel}</h5>
						</div>
					</Link>
				))
			) : (
				<div>Loading</div>
			)}
		</div>
	);
}
