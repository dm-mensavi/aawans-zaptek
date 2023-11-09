import { useParams } from "react-router-dom";
import getDataById from "../../components/getFunctions/GetDataById";
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
				<div  className="sm:relative px-3 sm:px-10">
				<div>
				<img
					src={caseItem.image}
					alt={caseItem.title}
				/>
				</div>
				<div className="lg:h-28 lg:w-96 bg-primary rounded-2xl w-58 mt-10 pb-4 sm:pt-0 sm:absolute sm:bottom-8 sm:right-14 lg:right-20">
					<p className="text-white font-semibold text-lg pl-6 sm:pl-2 lg:pl-6 pt-4">Case Name &#160; &#160; &#160; &#160; &#160;&#160; &#160; &#160; :&#160; &#160; {caseItem.title}</p>
					<p className="text-white font-semibold text-lg pl-6 sm:pl-2 lg:pl-6">Time  &#160; &#160; &#160; &#160; &#160; &#160;  &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; :&#160; &#160; {caseItem.Time} </p>
					<p className="text-white font-semibold text-lg pl-6 sm:pl-2 lg:pl-6">Lawyer &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160;:&#160; &#160; {caseItem.Lawyer} </p>
				</div>
				</div>
			</div>
		<div className="lg:pb-40 pb-20 px-5 lg:px-[10%] sm:pb-20">
		<div>
				<h1 className="font-bold text-5xl font-serif">Case Description:</h1>
				<p className="pt-6 text-lg text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<p className="pt-6 text-lg text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<p className="pt-6 text-lg text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
			<div>
				<h1 className="font-bold text-5xl font-serif pt-10">Challenge</h1>
				<p className="pt-6 text-lg text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<p className="pt-6 text-lg text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<p className="pt-6 text-lg text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
		</div>
		</div>
	);
}

export default CaseDetails;
