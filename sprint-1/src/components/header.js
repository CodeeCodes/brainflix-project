import React from "react";
import Logo from "../assets/Logo/Logo-brainflix.svg";
import avatar from "../assets/Images/Mohan-muruge.jpg";
import MagnifyLogo from "../assets/Icons/svg/Icon-search.svg";
import PlusSign from "../assets/Icons/svg/Icon-upload.svg";
export default function Header() {
	return (
		<header className="header">
			<div className="header__search-logo">
				<img
					src={Logo}
					className="header__search-logo-image"
					alt="brainflix logo"
				/>
			</div>
			<div className="header__search-bar">
				<input
					type="search"
					placeholder="Search"
					className="search-bar-text"
				></input>
				<button className="header__search-button" type="submit">
					<img src={PlusSign} alt="plus sign" />
					UPLOAD
				</button>
				<img src={avatar} alt="avatar" className="header__search-avatar" />
			</div>
		</header>
	);
}
