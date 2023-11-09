import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import AboutIntro from "./AboutIntro";
import OurAttorney from "./OurAttorney";
import BlogSubscription from "./BlogSubscription";
import ClientsTestimonial from "./ClientsTestimonial";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";


function About() {

	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	const [subForm, setSubForm] = useState({
		email: "",
	});

	const updateForm = (event) => {
		const { name, value } = event.target;
		setSubForm((oldSubForm) => ({
			...oldSubForm,
			[name]: value,
		}));
	};

	return (
		<div>
			<Helmet>
				<title>About - AawAans</title>
			</Helmet>
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
