import React from "react";
import Animate from "./Animate";
import logo from "../assets/logo.png";
import "./Footer.scss";
function Footer() {
	return (
		<footer className="footer__container">
			<div className="footer__info">
				<div>
					<img src={logo} alt="brand" style={{ width: "70px" }} />
					<span>
						<h3>Mohit Saran</h3>
						<p>Full-Stack Developer</p>
					</span>
				</div>
				<Animate />
			</div>
			<div className="footer__description">
				<p>Bangalore, India</p>
				<p>mohitsaran07@gmail.com</p>
				<h6>Ⓒ 2023</h6>
			</div>
		</footer>
	);
}

export default Footer;
