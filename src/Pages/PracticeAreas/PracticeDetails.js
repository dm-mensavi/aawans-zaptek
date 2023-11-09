import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from "react-router-dom";
import getDataById from "../../components/getFunctions/GetDataById";
import { practiceAreaData } from "./PracticeAreaData";
import Header from "../../components/Header";
import { Helmet } from "react-helmet";


function PracticeDetails() {

  //Scroll to the top of the page on load
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // get the page id from the route
	let { id } = useParams();
	const practiceItem = getDataById(practiceAreaData, id);

	return (
		<div>
			<Helmet>
				<title>{practiceItem.title} - AawAans</title>
			</Helmet>
			<Header pageTitle="Practice Details" name="Practice Details" />

			{/* Your content and design goes here */}
			<div className="flex flex-col items-center my-20">
				<div className="h3 text-center">{practiceItem.title}</div>
				<img
					width={700}
					height={700}
					src={require(`../../public/${practiceItem.image}.jpg`)}
					alt="not found"
				/>
			</div>
		</div>
	);
}

export default PracticeDetails;
