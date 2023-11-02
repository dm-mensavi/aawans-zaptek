import React from "react";
import Header from "../components/Header";

function Nopage() {
	return (
		<div>
			<Header pageTitle={"No Page"} name={"Page not found"} />
			<div className="flex flex-col py-10 items-center">
				<h1 className="h1">404</h1>
				<h3 className="text-2xl ">
					{" "}
					Unexpected error! the page you're looking for does not exist{" "}
				</h3>
			</div>
		</div>
	);
}

export default Nopage;
