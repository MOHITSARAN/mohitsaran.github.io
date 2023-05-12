import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

import "./Work.scss";

function Work({ name, description, tech, url, bgColor, color, code }) {
	const skillRef = useRef();
	useEffect(() => {
		const tiltNode = skillRef.current;
		VanillaTilt.init(tiltNode, {
			max: 15,
			speed: 200,
			glare: true,
			"max-glare": 0.2,
		});
		return () => {
			tiltNode.vanillaTilt.destroy();
		};
	}, []);
	return (
		<div
			className="work__container"
			style={{ backgroundColor: bgColor, color: color }}
			ref={skillRef}
		>
			<h4> {name}</h4>
			<p>{description}</p>
			<div className="work__tech">
				<div className="hr_container">
					<hr />
					<hr />
					<hr />
				</div>

				<b>Tech Stack: </b>
				{tech}
			</div>
			<div></div>
			<div className="work__link">
				{code && (
					<a
						href={code}
						rel="noreferrer"
						target="_blank"
						className="work__a"
						style={{ backgroundColor: color, color: bgColor }}
					>
						Code
					</a>
				)}
			</div>
		</div>
	);
}

export default Work;
