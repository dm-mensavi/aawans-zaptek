import { useParams } from "react-router-dom";
import getDataById from "../../GetDataById";
import { BlogData } from "./BlogData";
import Header from "../../components/Header";
import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { AiOutlineRight } from "react-icons/ai";

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
			<div className="flex lg:flex-row md:flex-row sm:flex-col-reverse justify-between items-start w-full gap-10 mt-32">
				<div className="lg:max-w-[40%] ">
					<div className="flex justify-between items-center shadow-lg w-10/12 p-5">
						<input placeholder="Search here..." />
						<FiSearch size={25} />
					</div>
					<div>
						<p className="text-4xl mt-20 mb-5">Post Category:</p>
						<div className="flex justify-between w-10/12  gap-10 items-center  border border-slate-100 px-6 py-4 text-xl rounded-lg m-2 cursor-pointer hover:border-primary hover:border hover:bg-slate-100">
							<p>Real Estate Dispute</p>
							<AiOutlineRight />
						</div>
						<div className="flex justify-between w-10/12 items-center border border-slate-100 px-6 py-4 text-xl rounded-lg m-2 cursor-pointer hover:border-primary hover:border hover:bg-slate-100">
							<p>Employment Discrimination</p>
							<AiOutlineRight />
						</div>
						<div className="flex justify-between w-10/12  items-center border border-slate-100 px-6 py-4 text-xl rounded-lg m-2 cursor-pointer hover:border-primary hover:border hover:bg-slate-100">
							<p>Consumer Protection</p>
							<AiOutlineRight />
						</div>
						<div className="flex justify-between w-10/12  items-center border border-slate-100 px-6 py-4 text-xl rounded-lg m-2 cursor-pointer hover:border-primary hover:border hover:bg-slate-100">
							<p>Personal Injury</p>
							<AiOutlineRight />
						</div>
						<div className="flex justify-between w-10/12 items-center border border-slate-100 px-6 py-4 text-xl rounded-lg m-2 cursor-pointer hover:border-primary hover:border hover:bg-slate-100">
							<p>Labour & Employment</p>
							<AiOutlineRight />
						</div>
					</div>

					<div>
						<p className="text-4xl mt-20">Recent Post:</p>
						<div className="flex gap-5 mt-10">
							<img
								className=""
								src={require(`../../public/${blogItem.image}.jpg`)}
								alt=""
								width={"20%"}
								height={"100%"}
							/>
							<div>
								<p className="text-xl hover:text-primary cursor-pointer">
									Navigating Landloard/Tenant Dispues
								</p>
								<p className="text-primary">Feburary 16, 2020</p>
							</div>
						</div>

						<div className="flex gap-5 mt-10">
							<img
								className=""
								src={require(`../../public/${blogItem.image}.jpg`)}
								alt=""
								width={"20%"}
								height={"100%"}
							/>
							<div>
								<p className="text-xl hover:text-primary cursor-pointer w-10/12">
									Fighting for Your Civil Rights
								</p>
								<p className="text-primary">Feburary 16, 2020</p>
							</div>
						</div>

						<div className="flex gap-5 mt-10">
							<img
								className=""
								src={require(`../../public/${blogItem.image}.jpg`)}
								alt=""
								width={"20%"}
								height={"100%"}
							/>
							<div>
								<p className="text-xl hover:text-primary cursor-pointer w-10/12">
									Protecting Your Rights with Breach of Warranty
								</p>
								<p className="text-primary">Feburary 16, 2020</p>
							</div>
						</div>
					</div>

					<div>
						<p className="text-4xl mt-20">Popular Tags:</p>
						<div className="border border-slate-100 px-6 py-4 text-xl rounded-lg m-2 cursor-pointer hover:bg-primary hover:text-white w-fit">
							<p>Agreements</p>
						</div>
						<div className="border border-slate-100 px-6 py-4 text-xl rounded-lg m-2 cursor-pointer hover:bg-primary hover:text-white w-fit">
							<p>Rights & Justice</p>
						</div>
						<div className="border border-slate-100 px-6 py-4 text-xl rounded-lg m-2 cursor-pointer hover:bg-primary hover:text-white w-fit">
							<p>Consumer Protection</p>
						</div>
						<div className="flex">
							<div className="border border-slate-100 px-6 py-4 text-xl rounded-lg m-2 cursor-pointer hover:bg-primary hover:text-white w-fit">
								<p>Legal rights</p>
							</div>
							<div className="border border-slate-100 px-6 py-4 text-xl rounded-lg m-2 cursor-pointer hover:bg-primary hover:text-white w-fit">
								<p>Accident</p>
							</div>
						</div>

						<div>
							<p className="border border-slate-100 px-6 py-4 text-xl rounded-lg m-2 cursor-pointer hover:bg-primary hover:text-white w-fit">
								Labour Law
							</p>
						</div>

						<div className="flex">
							<div>
								<p className="border border-slate-100 px-6 py-4 text-xl rounded-lg m-2 cursor-pointer hover:bg-primary hover:text-white w-fit">
									Personal Injury
								</p>
							</div>
							<div>
								<p className="border border-slate-100 px-6 py-4 text-xl rounded-lg m-2 cursor-pointer hover:bg-primary hover:text-white w-fit">
									Labour Law
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="max-w-[60%]">
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
				</div>
			</div>
		</div>
	);
}

export default BlogDetails;
