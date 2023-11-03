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

			{/* Refactor this code to design the cards */}
			<div className="lg:pt-40 flex justify-center">
				<div className="grid grid-cols-3 gap-12">
					{caseData.map((item, index) => (
						<Link key={index} to={`/cases/${item.id}`}  className="relative">
							<img
                // width={400}
                // height= {400}
                
								src={require(`../../public/${item.image}.jpg`)}
								alt={item.title}
								className="rounded-2xl w-96 h-80 object-center"
							/>
							<div className="absolute top-0 left-0 w-96 flex flex-col justify-self-end opacity-0 rounded-xl align-bottom text-center transition-opacity duration-300 hover:opacity-100 inset-0 bg-gradient-to-t from-gray-900 ">
								<p className="text-white text-3xl pt-52">{item.title} </p>
								<p className="text-2xl text-primary">{item.subtitle} </p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default Cases;
