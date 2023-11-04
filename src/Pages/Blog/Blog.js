import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import { BlogData } from "./BlogData";
import { Link } from "react-router-dom";


function Blog() {

	return (
		<div classname="">
			<Helmet>
				<title>Blog Post - AawAans</title>
			</Helmet>
			<Header pageTitle="Blog Page" name="Blog" />

			{/* Refactor this code to design the cards */}
			<div className="lg:grid md:grid sm:flex sm:flex-col sm:justify-center sm:items-center 
			lg:grid-cols-3 md:grid-cols-2 gap-5 general-margin">
				{BlogData.map((item, index) => (
					<Link key={index} to={`/blog/${item.id}`}>
						<div className="bg-white rounded-lg w-fit p-3 shadow-md my-5 max-h-[100%] hover:shadow-lg pb-10">
							<div className="relative w-fit flex flex-col justify-center items-center">
								<img
									src={require(`../../public/${item.image}.jpg`)}
									alt={item.title}
								/>
								<h1 className="bg-primary w-fit text-white p-1 px-2 rounded-lg relative z-10 -mt-5 text-center">
									{item.date}
								</h1>
								<h1 className="font-semibold text-xl text-center my-10 ">
									{item.title}
									<br />{" "}
								</h1>
								<button className="btn-secondary"> Read More</button>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

export default Blog;
