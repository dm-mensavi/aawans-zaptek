import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import { BlogData } from "./BlogData";
import { Link } from "react-router-dom";

function Blog() {
	return (
		<div>
			<Helmet>
				<title>Blog Post - AawAans</title>
			</Helmet>
			<Header pageTitle="Blog Page" name="Blog" />

			{/* Refactor this code to design the cards */}
			<div className="h4 flex flex-col items-center">
				{BlogData.map((item) => (
					<Link key={item.id} to={`/blog/${item.id}`}>
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

export default Blog;
