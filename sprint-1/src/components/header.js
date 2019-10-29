import React from "react";
import Logo from "../assets/Logo/Logo-brainflix.svg";
import avatar from "../assets/Images/Mohan-muruge.jpg";
// import MagnifyLogo from "../assets/Icons/svg/Icon-search.svg";
export default function Header() {
	return (
		<div>
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
						placeholder="     Search"
						className="search-bar"
					></input>
					<button className="header__search-button" type="submit">
						{"    "}
						UPLOAD
					</button>
					<img src={avatar} alt="avatar" className="header__search-avatar" />
				</div>
			</header>
		</div>
	);
}
