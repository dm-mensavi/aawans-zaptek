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
					<Link key={item.id} to={`/practice/${item.id}`}>
						<div>{item.title}</div>
						<img
							width={300}
							height={300}
							src={require(`../../public/${item.image}.jpg`)}
							alt="not found"
						/>

            {/* SVG */}
            <div className="flex rounded-full p-3 w-16 h-16 items-center bg-primary">
            {item.icon}
              
            </div>

					</Link>
				))}
			</div>
		</div>
	);
}

export default PracticeArea;
