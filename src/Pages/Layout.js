import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";

const Layout = () => {
	return (
		<div>
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
