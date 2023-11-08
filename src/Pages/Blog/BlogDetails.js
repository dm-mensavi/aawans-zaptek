import { useParams } from "react-router-dom";
import getDataById from "../../GetDataById";
import { BlogData } from "./BlogData";
import Header from "../../components/Header";
import PopularTags from './PopularTags'
import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaLinkedinIn,FaFacebookF,FaTwitter,FaSkype } from "react-icons/fa";
import PostCat from "./PostCat";
function BlogDetails() {
	//Scroll to the top of the page on load
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	// get the page id from the route
	let { id } = useParams();

	const blogItem = getDataById(BlogData, id);

	// const items = data.map((item) =>

	// 	<BlogInfo title={item.title} picture={item.picture}/>
	// )

	return (
		<div>
			<Helmet>
				<title>{blogItem.title} - AawAans</title>
			</Helmet>
			<Header pageTitle="Blog Details" name="Blog" />

			{/* Your content and design goes here */}
			<div className="flex lg:flex-row max-md:flex-col-reverse max-sm:flex-col-reverse justify-between items-start w-full gap-10 mt-32 px-[5%]">
				<div className="lg:max-w-[40%] max-md:w-full max-sm:w-full ">
					<div className="flex justify-between items-center shadow-lg w-10/12 p-5">
						<input placeholder="Search here..." />
						<FiSearch size={25} />
					</div>
					<div>
						<p className="text-4xl mt-20 mb-5">Post Category:</p>
						<PostCat />
					</div>
					<div>
						<p className="text-4xl mt-20">Recent Post:</p>
						<div className="flex gap-5 mt-10 w-full">
							<img
								className="min-w-[30%] object-cover"
								src={require(`../../public/${blogItem.image}.jpg`)}
								alt=""
								width={"20%"}
								height={"100%"}
							/>
							<div>
								<p className="text-medium hover:text-primary cursor-pointer">
									Navigating Landloard/Tenant Dispues
								</p>
								<p className="text-primary">Feburary 16, 2020</p>
							</div>
						</div>

						<div className="flex gap-5 mt-10">
							<img
								className="min-w-[30%] object-cover"
								src={require(`../../public/${blogItem.image}.jpg`)}
								alt=""
								width={"20%"}
								height={"100%"}
							/>
							<div>
								<p className="text-medium hover:text-primary cursor-pointer w-10/12">
									Fighting for Your Civil Rights
								</p>
								<p className="text-primary">Feburary 16, 2020</p>
							</div>
						</div>

						<div className="flex gap-5 mt-10">
							<img
								className="min-w-[30%] object-cover"
								src={require(`../../public/${blogItem.image}.jpg`)}
								alt=""
								width={"20%"}
								height={"100%"}
							/>
							<div>
								<p className="text-medium hover:text-primary cursor-pointer w-10/12">
									Protecting Your Rights with Breach of Warranty
								</p>
								<p className="text-primary">Feburary 16, 2020</p>
							</div>
						</div>
					</div>

					<div>
						<p className="text-4xl mt-20">Popular Tags:</p>
							<PopularTags/>
					</div>
				</div>
				<div className="lg:max-w-[60%] max-md:w-full max-sm:w-full">
					<div>
						<img
							className=""
							src={require(`../../public/${blogItem.image}.jpg`)}
							alt=""
							width={"100%"}
						/>
						<p className="bg-primary w-fit py-1 px-2 text-lg text-white rounded-lg my-10">
							{" "}
							{blogItem.date}
						</p>
						<p className="text-4xl font-bold">{blogItem.title} </p>
					</div>
					<div className="text-lg leading-8 text-gray-500">
						<p className="my-8">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
						<ul>
							<li className="list-disc">
								{" "}
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							</li>
							<li className="list-disc">
								Sed do eiusmod tempor incididunt ut labore et dolore magna
								aliqua.
							</li>
							<li className="list-disc">
								Ut enim ad minim veniam, quis nostrud exercitation ullamco
								laboris nisi
							</li>
							<li className="list-disc">
								Commodo consequat. Duis aute irure dolor in reprehenderit in
							</li>
							<li className="list-disc">
								Voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							</li>
						</ul>
						<p className="my-8">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
						<h1 className="text-4xl font-bold my-8">
							Lorem ipsum dolor sit amet, consectetur
						</h1>

						<p className="my-8">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>

						<p className="p-10 bg-slate-100 rounded-lg">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation
						</p>

						<p className="my-8">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>

						<h1 className="text-4xl font-bold my-8">
							Lorem ipsum dolor sit amet, consectetur
						</h1>

						<p className="my-8">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
						<ul>
							<li className="list-decimal">
								{" "}
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							</li>
							<li className="list-decimal">
								Sed do eiusmod tempor incididunt ut labore et dolore magna
								aliqua.
							</li>
							<li className="list-decimal">
								Ut enim ad minim veniam, quis nostrud exercitation ullamco
								laboris nisi
							</li>
							<li className="list-decimal">
								Commodo consequat. Duis aute irure dolor in reprehenderit in
							</li>
							<li className="list-decimal">
								Voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							</li>
						</ul>
						<p className="my-8">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>

						<h1 className="text-4xl font-bold my-8">
							Lorem ipsum dolor sit amet, consectetur
						</h1>

						<p className="my-8">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>

						<p className="my-8">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>

						<p className="my-8">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
					</div>
					{/* <div className="flex justify-center flex-start items-center gap-8 bg-primary">
					<p className="text-2xl">Shared Post:</p>
					<BiLogoFacebookCircle />
					<BiLogoLinkedinSquare  />
					<BiLogoTwitter />
					<BiLogoSkype />
					</div> */}

					<div className="flex space-x-4 justify-center items-center ">
						<p className="text-2xl">Share Post:</p>
							<div
								className="w-10 h-10 bg-white hover:bg-primary/70 link-animate cursor-pointer transition-all 
              duration-300  ease-in-out rounded-full flex items-center justify-center">
								<FaFacebookF size={12} className=" text-black"></FaFacebookF>
							</div>
		
						
							<div
								className="w-10 h-10 bg-white hover:bg-primary/70 link-animate cursor-pointer transition-all 
              duration-300  ease-in-out rounded-full flex items-center justify-center">
								<FaTwitter size={12} className=" text-black"></FaTwitter>
							</div>
						
							<div
								className="w-10 h-10 bg-white hover:bg-primary/70 link-animate cursor-pointer transition-all 
              duration-300  ease-in-out rounded-full flex items-center justify-center">
								<FaSkype size={12} className="text-black"></FaSkype>
							</div>
						
							<div
								className="w-10 h-10 bg-white hover:bg-primary/70 link-animate cursor-pointer transition-all 
              duration-300  ease-in-out rounded-full flex items-center justify-center">
								<FaLinkedinIn size={12} className=" text-black"></FaLinkedinIn>
							</div>
						
					</div>

				</div>
			</div>
		</div>
	);
}

export default BlogDetails;
