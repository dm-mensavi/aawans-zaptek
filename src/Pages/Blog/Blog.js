import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import { BlogData } from "./BlogData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { flipX } from "../../variants";
import { useLocation } from "react-router-dom";

function Blog() {

	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	const postsPerPage = 6;
	const [currentPage, setCurrentPage] = useState(1);

	// Calculate total number of pages
	const totalPages = Math.ceil(BlogData.length / postsPerPage);

	// Calculate the index range for the current page
	const startIndex = (currentPage - 1) * postsPerPage;
	const endIndex = startIndex + postsPerPage;

	const currentPosts = BlogData.slice(startIndex, endIndex);

	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	const nextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
			scrollToTop();
		}
	};

	const prevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
			scrollToTop();
		}
	};

	return (
		<div className="mb-32">
			<Helmet>
				<title>Blog Post - AawAans</title>
			</Helmet>
			<Header pageTitle="Blog Page" name="Blog" />

			<div className="lg:grid md:grid sm:flex sm:flex-col sm:justify-center sm:items-center lg:grid-cols-3 md:grid-cols-2 gap-5 general-margin">
				{currentPosts.map((item, index) => (
					<Link key={index} to={`/blog/${item.id}`}>
						<motion.div
							variants={flipX()}
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0 }}
							className="bg-white rounded-lg w-fit p-3 shadow-md my-5 min-h-[400px] max-h-[100%]  hover:shadow-lg hover:shadow-primary pb-10">
							<div className="relative w-fit flex flex-col justify-center items-center">
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

			<div className="flex justify-center mt-10">
				<button
					className="btn-secondary mr-3"
					onClick={prevPage}
					disabled={currentPage === 1}>
					Previous Page
				</button>
				<button
					className="btn-secondary"
					onClick={nextPage}
					disabled={currentPage === totalPages}>
					Next Page
				</button>
			</div>
		</div>
	);
}

export default Blog;
