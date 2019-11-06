import React from "react";
import Logo from "../assets/Logo/Logo-brainflix.svg";
import avatar from "../assets/Images/Mohan-muruge.jpg";
import PlusSign from "../assets/Icons/svg/Icon-upload.svg";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="header">
			<div className="header__search-logo">
				<Link to={`/`}>
					<img
						src={Logo}
						className="header__search-logo-image"
						alt="brainflix logo"
					/>
				</Link>
			</div>
			<div className="header__search-bar">
				<input
					type="search"
					placeholder="Search"
					className="search-bar-text"
				></input>
				<button className="header__search-button" type="submit">
					<img src={PlusSign} alt="plus sign" className="plusSign" />
					UPLOAD
				</button>
				<img src={avatar} alt="avatar" className="header__search-avatar" />
			</div>
		</header>
	);
}
