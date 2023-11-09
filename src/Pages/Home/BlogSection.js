import React from "react";
import { motion } from "framer-motion";
import { fadeIn, flipX } from "../../variants";
import { Link } from "react-router-dom";
import { BlogData } from "../Blog/BlogData";

function BlogSection() {
	const trimedPosts = BlogData.slice(0, 2);

	return (
		<div className="flex flex-col justify-center lg:flex-row w-[95%] lg:w-[90%] xl:w-[80%] mx-auto my-32">
			{/* column one */}
			<div className="flex flex-col justify-start min-w-80">
				<motion.h2
					variants={fadeIn("up", 0.5, 0.3)}
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0 }}
					className="px-7 w-max py-1 bg-primary inline-block text-white rounded-md my-10">
					Our Attorney
				</motion.h2>
				<motion.h2
					variants={fadeIn("up", 0.5, 0.4)}
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0 }}
					className="h3 md:h2">
					Latest Blog Post
				</motion.h2>
				<motion.div
					variants={fadeIn("up", 0.5, 0.4)}
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0 }}
					className="p max-w-md ">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</motion.div>
				<motion.div
					variants={fadeIn("up", 0.5, 0.6)}
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0 }}>
					<Link to="/blog" className="btn-secondary mt-10">
						Visit All Blogs
					</Link>
				</motion.div>
			</div>
			{/* column two */}
			<div className="flex flex-col items-center justify-between sm:space-x-8 sm:flex-row ">
				{trimedPosts.map((item, index) => (
					<Link key={index} to={`/blog/${item.id}`}>
						<motion.div
							variants={flipX()}
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0 }}
							className="bg-white rounded-lg w-fit p-3 shadow-md my-5 min-h-[400px]  hover:shadow-lg hover:shadow-primary pb-10">
							<div className="relative w-[100%] lg:w-60 xl:w-80 flex flex-col justify-center items-center">
								<img
									src={require(`../../public/${item.image}.jpg`)}
									alt={item.title}
								/>
								<h1 className="bg-primary w-fit text-white p-1 px-2 rounded-lg relative z-10 -mt-5 text-center">
									{item.date}
								</h1>
								<h1 className=" text-2xl text-center mb-3 mt-7 h3">
									{item.title}
								</h1>
								<button className="btn-secondary"> Read More</button>
							</div>
						</motion.div>
					</Link>
				))}
			</div>
		</div>
	);
}

export default BlogSection;
