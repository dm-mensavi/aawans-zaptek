import React from "react";
import Header from "../../components/Header";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { practiceAreaData } from "./PracticeAreaData";
import { flipX } from "../../variants";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function PracticeArea() {

	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<div>
			<Helmet>
				<title>Practice Areas - AawAans</title>
			</Helmet>
			<Header pageTitle="Practice Areas" name="Practice Areas" />

			{/* Refactor this code to design the cards */}
			<div className="px-4 md:px-10 lg:px-32 py-14 md:py-36">
				<div className="flex justify-center items-center">
					<div className="h4 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
						{practiceAreaData.map((item) => (
							<motion.div
								variants={flipX()}
								initial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true, amount: 0 }}
								key={item.id}
								className="shadow-custom px-5 pt-5 pb-14 rounded-lg">
								<div
									className="flex flex-col justify-center items-center"
									to={`/practice/${item.id}`}>
									<div className="relative mb-14 w-full">
										<img
											src={require(`../../public/${item.image}.jpg`)}
											alt="not found"
											className="rounded-lg w-full object-cover top-0 left-0"
										/>

										{/* Icons absolute -bottom-10 left-[35%]*/}
										<figure className="">
											<img
												src={item.icon}
												alt={item.title}
												className="absolute -bottom-10 left-[35%] border-white border-4 border-spacing-3 z-10 w-24 h-24 rounded-full"
											/>
										</figure>
									</div>

									<div className="text-center">
										<Link to={`/practice/${item.id}`} className="link-text">
											{item.title}
										</Link>

										<p className="font-normal text-[20px] text-[#565656] font-sans">
											{item.description}
										</p>
									</div>

									<Link
										to={`/practice/${item.id}`}
										className="font-semibold text-lg mt-8 bg-primaryLighter py-2 px-8 rounded-lg font-sans hover:bg-primary hover:text-white transition duration-200">
										Read More
									</Link>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default PracticeArea;
