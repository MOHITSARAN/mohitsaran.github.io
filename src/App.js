import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Mywork from "./components/Mywork";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Img from "./assets/logo.png";
import "./App.scss";

function App() {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(false);
	}, []);
	if (loading) {
		return (
			<div className={`app__loading ${!loading && "loaded"}`}>
				<div className="app__loading-img">
					<img inline="true" src={Img} alt="loading" />
				</div>
			</div>
		);
	}
	return (
		<div className="wrapper">
			<Header />
			<HeroSection />
			<Skills />
			<Mywork />
			<Footer />
		</div>
	);
}

export default App;
