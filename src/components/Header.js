import React, { useState } from "react";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import Resume from "../assets/Mohit.pdf";
import "./Header.scss";
import { FaFileDownload } from "react-icons/fa";
function Header() {
	const [openSidebar, setOpenSidebar] = useState(false);
	const OpenSideNav = () => {
		setOpenSidebar(!openSidebar);
	};
	return (
		<header style={{ height: 100 }}>
			<div className="container">
				<nav>
					<motion.div
						initial={{ scale: 0.5 }}
						animate={{ rotate: 360, scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 100,
							damping: 20,
						}}
						whileHover={{ scale: 1.2, rotate: 0 }}
						whileTap={{
							scale: 0.8,
							rotate: -180,
							borderRadius: "100%",
						}}
					>
						<img src={logo} alt="brand" style={{ width: "70px" }} />
					</motion.div>

					<motion.span
						initial={{ scale: 0.5 }}
						animate={{ rotate: 180, scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 260,
							damping: 20,
						}}
						className={`nav-toggle mobile ${openSidebar && "open"}`}
						onClick={OpenSideNav}
					></motion.span>
					<ul className={`navbar ${openSidebar && "open"}`}>
						<li className="mobile">
							<a href="#top" onClick={OpenSideNav} className="nav-link">
								Home
							</a>
						</li>
						<li>
							<a
								href="#skill"
								onClick={OpenSideNav}
								title="Skill"
								className="nav-link"
							>
								Skills
							</a>
						</li>
						<li>
							<a href="#projects" onClick={OpenSideNav} className="nav-link">
								Projects
							</a>
						</li>
						<li>
							<a
								href={Resume}
								rel="noreferrer"
								download="MohitSaran_Fullstack"
								target="_blank"
								onClick={OpenSideNav}
								className="nav-link last"
							>
								Resume
								<FaFileDownload size={20} className="resume" />
							</a>
						</li>
						<li className="nav-info mobile">
							<img src={logo} alt="brand" style={{ width: "70px" }} />
							<span>
								<h3>Mohit</h3>
								<p>Full-Stack Developer</p>
							</span>
						</li>
						<li className="nav-social mobile">
							<a
								href="https://github.com/MOHITSARAN"
								rel="noreferrer"
								target="_blank"
								aria-label="Github"
							>
								<span className="fab fa-fw fa-github"></span>
							</a>

							<a
								href="https://www.instagram.com/mohit_saran/"
								rel="noreferrer"
								target="_blank"
								aria-label="Instagram"
							>
								<span className="fab fa-fw fa-instagram"></span>
							</a>
							<a
								href="https://www.linkedin.com/in/mohitsaran/"
								rel="noreferrer"
								target="_blank"
								aria-label="LinkedIn"
							>
								<span className="fab fa-fw fa-linkedin-in"></span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
