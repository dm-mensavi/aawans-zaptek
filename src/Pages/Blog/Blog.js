import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
// import { BlogData } from "./BlogData";
import { Link } from "react-router-dom";
import BlogCategory from "./BlogCategory";
import BlogDetails from './BlogDetails'
import BlogInfo from './BlogInfo'
import {data} from './Data'

function Blog() {
	const cards = data.map((item)=>
	<Link key={item.id} to={`/blog/${item.id}`}>
	<BlogCategory key={item.id} title={item.title} picture={item.picture} br={item.br}/>
	</Link>
	)

	// console.log(cards)
	return (
		<div  classname='bg-red-500'>
			<Helmet>
				<title>Blog Post - AawAans</title>
			</Helmet>
			<Header pageTitle="Blog Page" name="Blog" />

			{/* Refactor this code to design the cards */}
			{/* <div className="h4 flex flex-col items-center">
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
			</div> */}

				<div className='lg:grid md:grid sm:flex sm:flex-col sm:justify-center sm:items-center lg:grid-cols-3 md:grid-cols-2 gap-5 '>
				{cards}
				{/* <BlogCategory /> */}
					{/* <BlogInfo /> */}
				</div>
		</div>
	);
}

export default Blog;
