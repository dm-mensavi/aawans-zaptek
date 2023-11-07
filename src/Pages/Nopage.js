import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import nopage from "../../src/public/404.svg";

function Nopage() {
	return (
		<div>
			<Helmet>
				<title>Not Found - AawAans</title>
			</Helmet>
			<Header pageTitle={"404 Page"} name={"404"} />
			<div className="flex flex-col py-10 items-center mx-2">
				<img src={nopage} alt="No page" />
				<div className="px-7 py-1 mt-5 bg-primary inline-block text-white rounded-md">
					404 Error
				</div>
				<div className="h2 text-center">
					<h3>Sorry...</h3>
					<h3>That Page Doesn’t Exist.</h3>
				</div>
				<Link to="/" className="btn-primary my-7">
					Back To Home
				</Link>
			</div>
		</div>
	);
}

export default Nopage;
