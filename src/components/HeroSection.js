import React from "react";
import "./HeroSection.scss";
import Animate from "./Animate";
import AboutMe from "./AboutMe";
import TypeWriter from "react-typewriter";

function HeroSection() {
	return (
		<div className="herosection__container">
			<h1>I'm Mohit Saran</h1>
			<h3>
				JavaScript, Python{" "}
				<TypeWriter typing={1}>Full Stack Developer</TypeWriter>
			</h3>
			<AboutMe />
			<Animate />
		</div>
	);
}

export default HeroSection;
