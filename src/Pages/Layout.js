import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

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
