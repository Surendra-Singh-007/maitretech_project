import "./Header.css";
import React from "react";
import img from "./images/nifa-new-logo.png"
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

export const Header = () => {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
    }
  return (
    <div>
      <div className="Header_Container">
        <div>
          <p>Welcome to the National Institute of Fine Arts</p>
        </div>
        <div>
          <i className="fa-solid fa-phone bg-primary"></i>
          <a href="#" className="header_links">
            9555112200
          </a>
          <i className="fa-solid fa-phone space"></i>
          <a href="#" className="header_links">
            9810130552
          </a>
          <i class="fa-solid fa-envelope space"></i>
          <a href="#" className="header_links">
            admission@nifafinearts.com
          </a>
        </div>
        <div className="social_links">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
      </div>
      <div>
      <header>
			<img
            src="https://www.nifafinearts.com/images/nifa-new-logo.png"
            alt=""
            className="logo"
          />
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">About</a>
				<a href="#">Activities</a>
				<a href="#">Admission</a>
				<a href="#">Art Gallery</a>
				<a href="#">Franchise</a>
				<a href="#">Online Classes</a>
				<a href="#">Videos</a>
				<a href="#">Pay Fees</a>
				<a href="#">Contact</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
      </div>
    </div>
  );
};
