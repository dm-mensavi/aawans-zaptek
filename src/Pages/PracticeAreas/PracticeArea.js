import React from "react";
import Header from "../../components/Header";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { practiceAreaData } from "./PracticeAreaData";

function PracticeArea() {
	return (
		<div>
			<Helmet>
				<title>Practice Areas - AawAans</title>
			</Helmet>
			<Header pageTitle="Practice Areas" name="Practice Areas" />

			{/* Refactor this code to design the cards */}
			<div className="h4 flex flex-col items-center">
				{practiceAreaData.map((item) => (
					<Link className="relative" key={item.id} to={`/practice/${item.id}`}>
						<div >{item.title}</div>
						<img
							width={300}
							height={300}
							src={require(`../../public/${item.image}.jpg`)}
							alt="not found"
							className="rounded-lg"
						/>

            {/* Icons */}
						<img src={item.icon} alt={item.title}	className="absolute -bottom-10 left-[35%] border-white border-4 border-spacing-3 z-10 w-24 h-24 rounded-full"/>

					</Link>
				))}
			</div>
		</div>
	);
}

export default PracticeArea;
