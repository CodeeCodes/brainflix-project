import React from "react";
import { Link } from "react-router-dom";

export default function NextVideo(props) {
	// console.log(props);
	const videoImage =
		props.data.nextvideo &&
		props.data.nextvideo.map(function(video, index) {
			return (
				<div className="next__video" key={index}>
					<Link to={`/nextVideo/${video.id}`} className="next__video">
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
				</div>
			);
		});

	return (
		<div className="next__video-main">
			<h4 className="next__video-main-heading">NEXT VIDEO</h4>
			{videoImage}
		</div>
	);
}
