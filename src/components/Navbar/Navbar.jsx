import { useState } from "react";
import "./navbar.css";
import {
	ChatCenteredDots,
	Users,
	Camera,
	HeartStraight,
	UserCircle,
	CaretDown,
	List,
} from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

function Navbar() {
	const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

	const handleClick = (e) => {
		e.preventDefault();
		setShowHamburgerMenu(!showHamburgerMenu);
	};

	return (
		<>
			<nav className="mainNav">
				<div className="logo">
					<NavLink to="/" className="logoText">
						secret<span className="colored">desires</span>
						<span className="subHeading">Open Beta</span>
					</NavLink>
				</div>
				<div
					className={
						showHamburgerMenu ? " menuLinks mobileMenuLinks" : "menuLinks"
					}
				>
					<ul>
						<li>
							<NavLink to="/chats">
								<ChatCenteredDots className="icon" weight="fill" />
								<span className="linkText">Chat</span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/myCharacters" onClick={handleClick}>
								<Users className="icon" weight="fill" />
								<span className="linkText">My Characters</span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/generateImages" onClick={handleClick}>
								<Camera className="icon" weight="fill" />
								<span className="linkText">Generate Images</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/createCharacter"
								onClick={handleClick}
								className="createCharacter"
							>
								<HeartStraight className="icon" weight="fill" />
								<span className="linkText">Create Character</span>
							</NavLink>
						</li>
					</ul>
				</div>
				<div className="account">
					<UserCircle className="icon" weight="fill" />
					<span className="accountText">My Profile </span>
					<CaretDown className="icon-Dropdown" weight="fill" />
				</div>
				<div className="hamburgerMenu">
					<a href="/" onClick={handleClick}>
						<List className="icon-Menu" />
					</a>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
