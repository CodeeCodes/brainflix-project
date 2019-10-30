import React from "react";
import videoImageOne from "../../assets/Images/video-list-1.jpg";
import videoImageTwo from "../../assets/Images/video-list-2.jpg";
import videoImageThree from "../../assets/Images/video-list-3.jpg";
import videoImageFour from "../../assets/Images/video-list-4.jpg";
import videoImageFive from "../../assets/Images/video-list-5.jpg";
import videoImageSix from "../../assets/Images/video-list-6.jpg";
import videoImageSeven from "../../assets/Images/video-list-7.jpg";
import videoImageEight from "../../assets/Images/video-list-8.jpg";

export default function nextVideo(props) {
	console.log(props.data.nextvideo);
	return (
		<div className="next__video-main">
			<div className="next__video">
				<img
					src={videoImageOne}
					alt="next video"
					className="next__video-image"
				/>
				<div className="next__video-info">
					<h5 className="next__video-heading">
						{props.data.nextvideo[0].title}
					</h5>
					<h5 className="next__video-heading">
						{props.data.nextvideo[0].channel}
					</h5>
				</div>
			</div>
			<div className="next__video">
				<img
					src={videoImageTwo}
					alt="next video"
					className="next__video-image"
				/>
				<div className="next__video-info">
					<h5 className="next__video-heading">
						{props.data.nextvideo[1].title}
					</h5>
					<h5 className="next__video-heading">
						{props.data.nextvideo[1].channel}
					</h5>
				</div>
			</div>
			<div className="next__video">
				<img
					src={videoImageThree}
					alt="next video"
					className="next__video-image"
				/>
				<div className="next__video-info">
					<h5 className="next__video-heading">
						{props.data.nextvideo[2].title}
					</h5>
					<h5 className="next__video-heading">
						{props.data.nextvideo[2].channel}
					</h5>
				</div>
			</div>
			<div className="next__video">
				<img
					src={videoImageFour}
					alt="next video"
					className="next__video-image"
				/>
				<div className="next__video-info">
					<h5 className="next__video-heading">
						{props.data.nextvideo[3].title}
					</h5>
					<h5 className="next__video-heading">
						{props.data.nextvideo[3].channel}
					</h5>
				</div>
			</div>
			<div className="next__video">
				<img
					src={videoImageFive}
					alt="next video"
					className="next__video-image"
				/>
				<div className="next__video-info">
					<h5 className="next__video-heading">
						{props.data.nextvideo[4].title}
					</h5>
					<h5 className="next__video-heading">
						{props.data.nextvideo[4].channel}
					</h5>
				</div>
			</div>
			<div className="next__video">
				<img
					src={videoImageSix}
					alt="next video"
					className="next__video-image"
				/>
				<div className="next__video-info">
					<h5 className="next__video-heading">
						{props.data.nextvideo[5].title}
					</h5>
					<h4 className="next__video-heading">
						{props.data.nextvideo[5].channel}
					</h4>
				</div>
			</div>
			<div className="next__video">
				<img
					src={videoImageSeven}
					alt="next video"
					className="next__video-image"
				/>
				<div className="next__video-info">
					<h5 className="next__video-heading">
						{props.data.nextvideo[6].title}
					</h5>
					<h5 className="next__video-heading">
						{props.data.nextvideo[6].channel}
					</h5>
				</div>
			</div>
			<div className="next__video">
				<img
					src={videoImageEight}
					alt="next video"
					className="next__video-image"
				/>
				<div className="next__video-info">
					<h5 className="next__video-heading">
						{props.data.nextvideo[7].title}
					</h5>
					<h5 className="next__video-heading">
						{props.data.nextvideo[7].channel}
					</h5>
				</div>
			</div>
		</div>
	);
}
