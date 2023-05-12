import React from "react";
import { workDetails } from "../assets/skill/work";
import "./Mywork.scss";
import Work from "./Work";

function Mywork() {
	return (
		<section className="mywork__container" id="projects">
			<div className="hr_container">
				<hr />
				<hr />
				<hr />
			</div>
			<div className="title">
				<h2>WHAT I'VE DONE?</h2>
				<span>Projects of my learning journey</span>
			</div>
			<div className="mywork__items">
				{workDetails.map(
					({
						background,
						content: { name, description, tech, color, url, code },
					}) => (
						<Work
							name={name}
							bgColor={background.color}
							description={description}
							color={color}
							tech={tech}
							url={url}
							code={code}
							key={name}
						/>
					)
				)}
			</div>
			<a
				href="https://github.com/MOHITSARAN"
				rel="noreferrer"
				target="_blank"
				className="mywork__viewmore"
			>
				<i className="devicon-github-original"></i> View More
			</a>
		</section>
	);
}

export default Mywork;
