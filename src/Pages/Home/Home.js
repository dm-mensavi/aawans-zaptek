import React from "react";
import HeroSection from "./HeroSection";
import { Helmet } from "react-helmet";

function Home() {
	return (
		<div>
			<Helmet>
				<title>Home - AawAans</title>
			</Helmet>
			<HeroSection />
		</div>
	);
}

export default Home;
