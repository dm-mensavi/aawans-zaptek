import { useParams } from "react-router-dom";
import getDataById from "../../GetDataById";
// import { BlogData } from "./BlogData";
import Header from "../../components/Header";
import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BlogInfo from './BlogInfo'
import {data} from './Data'

function BlogDetails() {
	//Scroll to the top of the page on load
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	// get the page id from the route
	let { id } = useParams();

	// const blogItem = getDataById(BlogData, id);
	const blogItem = getDataById(data, id);

	const items = data.map((item) =>

		<BlogInfo title={item.title} picture={item.picture}/>
	)

	return (
		<div>
			<Helmet>
				<title>{blogItem.title} - AawAans</title>
			</Helmet>
			<Header pageTitle="Blog Details" name="Blog" />

			{/* Your content and design goes here */}
			{/* <div className="flex flex-col items-center my-20">
				<div className="h3 text-center">{blogItem.title}</div>
				<img
					width={700}
					height={700}
					src={require(`../../public/${blogItem.image}.jpg`)}
					alt="not found"
				/>
			</div> */}
{/* <BlogInfo /> */}
			
			{items}
		</div>
	);
}

export default BlogDetails;
