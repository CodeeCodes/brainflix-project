import React from "react";
import { Link } from "react-router-dom";

export default function NextVideo({ nextVideo, mainVideo }) {
	const nextVid =
		nextVideo &&
		nextVideo.map(function(video) {
			return (
				<>
					{video.id !== mainVideo.id ? (
						<Link
							to={`/nextvideo/${video.id}`}
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
					) : (
						<div key={video.id} className="hide"></div>
					)}
				</>
			);
		});

	return <div>{nextVid}</div>;
}
