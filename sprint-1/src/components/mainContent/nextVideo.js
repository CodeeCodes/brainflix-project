import React from "react";

export default function nextVideo(props) {
	// console.log(props.data.nextvideo[0]);
	const videoImage =
		props.data.nextvideo &&
		props.data.nextvideo.map(function(video) {
			return (
				<div className="next__video">
					<img
						src={video.image}
						alt="next video"
						className="next__video-image"
					/>
					<div className=" next__video-info">
						<h5 className="next__video-heading">{video.title}</h5>
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
