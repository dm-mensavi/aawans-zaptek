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
			<div className="flex flex-col h4 items-center">
				{caseData.map((item) => (
					<Link key={item.id} to={`/cases/${item.id}`}>
						<div>{item.title}</div>
						<img
							width={300}
							height={300}
							src={require(`../../public/${item.image}.jpg`)}
							alt="not found"
						/>
					</Link>
				))}
			</div>
		</div>
	);
}

export default Cases;
