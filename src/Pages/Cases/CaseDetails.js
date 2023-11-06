import { useParams } from "react-router-dom";
import getDataById from "../../GetDataById";
import { caseData } from "./CasesData";
import Header from "../../components/Header";
import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function CaseDetails() {
	//Scroll to the top of the page on load
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	// get the page id from the route

	let { id } = useParams();

	const caseItem = getDataById(caseData, id);

	return (
		<div>
			<Helmet>
				<title>{caseItem.title} - AawAans</title>
			</Helmet>
			<Header pageTitle="Case Details" name="Case Details" />

			{/* Your content and design goes here */}
			<div className="flex flex-col items-center my-20">
				<div className="h3 text-center">{caseItem.title}</div>
				<img
					width={700}
					height={700}
					src={caseItem.image}
					alt={caseItem.title}
				/>
			<h1>{caseItem.title}</h1>
			<p>{caseItem.time}</p>
			<p>{caseItem.Lawyer}</p>
			</div>
		</div>
	);
}

export default CaseDetails;
