import React, {useState} from "react";
import HeroSection from "./HeroSection";
import { Helmet } from "react-helmet";
import Features from "./Features";
import AboutUs from "./AboutUs"
import OurAttorney from "../About/OurAttorney";
import BlogSubscription from "../About/BlogSubscription";
import ClientsTestimonial from "../About/ClientsTestimonial";

function Home() {
	const [subForm, setSubForm] = useState({
		email: "",
	});

	const updateForm = (event) => {
		const { name, value } = event.target;
		setSubForm((oldSubForm) => ({
			...subForm,
			[name]: value,
		}));
	};

	return (
		<div>
			<Helmet>
				<title>Home - AawAans</title>
			</Helmet>
			<HeroSection />
			<Features />
			<AboutUs />
			<OurAttorney />
			<ClientsTestimonial />
			<BlogSubscription subForm={subForm} updateForm={updateForm} />
		</div>
	);
}

export default Home;
