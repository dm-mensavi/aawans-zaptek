import React from "react";
import HeroSection from "./HeroSection";
import { Helmet } from "react-helmet";
import Features from "./Features";

function Home() {
	return (
		<div>
			<Helmet>
				<title>Home - AawAans</title>
			</Helmet>
			<HeroSection />
			<Features />
		</div>
	);
}

export default Home;
