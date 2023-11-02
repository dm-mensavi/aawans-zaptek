import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";

function Blog() {
	return (
		<div>
			<Helmet>
				<title>Blog Post - AawAans</title>
			</Helmet>
			<Header pageTitle="Blog Page" name="Blog" />
		</div>
	);
}

export default Blog;
