import React, { useEffect } from "react";
import Header from "../components/Header";
import { Helmet } from "react-helmet";
import { attorneyData } from "./AttorneyData";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Attorney() {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<div>
			<Helmet>
				<title>Attorney - AawAans</title>
			</Helmet>
			<Header pageTitle="Our Attorney" name="Attorney" />
			<div className="general-margin">
				<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-7 gap-5 rounded-xl lg:pt-28 pt-5 pb-20 p-10 lg:p-10 lg:pb-40">
					{attorneyData.map((attorneys) => (
						<motion.div
							variants={fadeIn("up", 0.7, 0)}
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0.2 }}
							className="border-2 lg:p-6 p-6 rounded-lg flex flex-col items-center">
							<img src={attorneys.pic} alt="attorney pictures" />
							<p className="font-bold font-serif text-2xl pt-4">
								{attorneys.name}{" "}
							</p>
							<p className="text-lg text-secondaryLight pt-2">
								{attorneys.position}{" "}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Attorney;
