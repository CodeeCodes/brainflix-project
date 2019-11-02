import React from "react";

export default function NextVideo(props) {
	const videoImage =
		props.data.nextvideo &&
		props.data.nextvideo.map(function(video, index) {
			return (
				<div className="next__video" key={index}>
					<img
						src={video.image}
						alt="next video"
						className="next__video-image"
					/>
					<div className=" next__video-info">
						<h4 className="next__video-heading-bold">{video.title}</h4>
						<h5 className="next__video-heading">{video.channel}</h5>
					</div>
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
