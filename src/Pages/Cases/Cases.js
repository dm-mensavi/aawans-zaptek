import React from "react";
import Header from "../../components/Header";
import { Helmet } from "react-helmet";
import { caseData } from "./CasesData";
import { Link } from "react-router-dom";

function Cases() {
	return (
		<div>
			<Helmet>
				<title>Cases - AawAans</title>
			</Helmet>
			<Header pageTitle="All Cases" name="Cases" />
			<div className="lg:pt-40 sm:pt-20 pt-20 pb-20 lg:pb-20 sm:pb-20 flex justify-center">
    <div className='grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-12'>
      {caseData.map((cases)=>(
         <Link className='relative' to={`/cases/${cases.id}`}>
         <img src={cases.image} alt="case"
           className="w-80 rounded-2xl h-80" />
         <div className="absolute top-0 left-0 w-80 flex flex-col justify-self-end opacity-0 rounded-xl align-bottom text-center transition-opacity duration-300 hover:opacity-100 inset-0 bg-gradient-to-t from-gray-900 ">
         <p className='text-white text-3xl pt-52'>{cases.title} </p>
         <p className='text-2xl text-primary'>{cases.subtitle} </p>
         </div>
         </Link>
      ))}
    </div>
  </div>

		</div>
	);
}

export default Cases;
