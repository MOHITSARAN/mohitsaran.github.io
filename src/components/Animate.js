import React from "react";
import { motion } from "framer-motion";
import "./Animate.scss";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

import { SiGmail } from "react-icons/si";
const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.4,
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

const Animate = () => (
	<motion.ul
		className="animate__container"
		variants={container}
		initial="hidden"
		animate="visible"
	>
		{[
			{
				name: "Fa-Li",
				Icon: FaLinkedin,
				href: "https://www.linkedin.com/in/mohitsaran/",
			},
			{
				name: "Fa-In",
				Icon: FaInstagram,
				href: "https://www.instagram.com/mohit_saran/",
			},
			{ name: "Fa-Gm", Icon: SiGmail, href: "mailto:mohitsaran07@gmail.com" },
			{
				name: "Fa-Tw",
				Icon: FaTwitter,
				href: "https://twitter.com/mohitsaran7",
			},
			{
				name: "Fa-Gi",
				Icon: FaGithub,
				href: "https://github.com/MOHITSARAN",
			},
		].map(({ Icon, href, name }, index) => (
			<motion.div key={index} variants={item}>
				<a href={href} target="_blank" rel="noreferrer">
					<Icon className={`item ${name}`} />
				</a>
			</motion.div>
		))}
	</motion.ul>
);

export default Animate;
