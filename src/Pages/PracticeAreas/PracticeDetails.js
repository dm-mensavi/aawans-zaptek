import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from "react-router-dom";
import getDataById from "../../GetDataById";
import { practiceAreaData } from "./PracticeAreaData";
import Header from "../../components/Header";
import { Helmet } from "react-helmet";

import practice_details from '../../public/practice-details-img-1.jpg';
import practice_detail from '../../public/practice-details-inner-1.jpg';


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
			<div className="flex flex-col pl-6 pr-6 items-center my-20">
				<img
					
					src={practice_details}
					alt="not found"
				/>
			</div>
			<div className="lg:pb-40 pl-10 pb-20 pr-10 sm:pb-20">
		<div>
				<h1 className="font-bold text-5xl font-serif">Traffic Violence</h1>
				<p className="pt-6 text-lg text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<p className="pt-6 text-lg text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<p className="pt-6 text-lg text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
			<div className='flex lg:flex-row flex-col sm:flex-row'>
			<div className='lg:w-[750px] sm:w-[450px] sm:pr-20 lg:pr-32'>
				<h1 className="font-bold text-5xl font-serif pt-10">How to get service?</h1>
				<p className="pt-6 text-lg text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<p className="pt-6 text-lg text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
			<div className='lg:pt-10 sm:pt-40 pt-10'>
			<img src={practice_detail} alt='not found'  />
			</div>
			</div>
		</div>
		</div>
	);
}

export default PracticeDetails;
