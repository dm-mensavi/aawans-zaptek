import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

const Layout = () => {
	return (
		<div className="pt-5 px-4 justify-center md:pt-6 md:px-10 lg:px-20 xl:mx-auto max-w-[1900px]">
			<Navbar />
			{/* Page content */}
			<div className="">
				<Outlet />
			</div>

			<Footer />
		</div>
	);
};

export default Layout;
