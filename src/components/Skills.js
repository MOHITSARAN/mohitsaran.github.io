import React from "react";
import skills from "../assets/skill/skill";
import "./Skills.scss";

function Skills() {
	return (
		<section id="skill" className="skills__container">
			<div className="hr_container">
				<hr />
				<hr />
				<hr />
			</div>
			<div className="title">
				<h2>SKILLS</h2>
				<p>Technologies I have worked on.</p>
			</div>
			<div className="skills__grid">
				{skills.map((skill, index) => (
					<div key={index} className="skills__item">
						<div className="boxing">{skill.img}</div>
						<h6>{skill.name}</h6>
					</div>
				))}
			</div>
		</section>
	);
}

export default Skills;
