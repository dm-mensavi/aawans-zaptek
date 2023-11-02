import React, { useState } from "react";
import Header from "../components/Header";
import AboutIntro from "./About/AboutIntro";
import OurAttorney from "./About/OurAttorney";
import BlogSubscription from "./About/BlogSubscription";
import ClientsTestimonial from "./About/ClientsTestimonial";


function About() {
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
			<Header pageTitle="About Page" name="About" />

			<div className="about-page-body md:px-10 ">
				<AboutIntro />
				<OurAttorney />
				<BlogSubscription subForm={subForm} updateForm={updateForm} />
				<ClientsTestimonial />
			</div>
		</div>
	);
}

export default About;
