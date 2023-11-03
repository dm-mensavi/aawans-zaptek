import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/Nopage";
import { About } from "./Pages/About";
import Attorney from "./Pages/Attorney";

//Blog with sub pages
import Blog from "./Pages/Blog/Blog";
import BlogCategory from "./Pages/Blog/BlogCategory";
import BlogDetails from "./Pages/Blog/BlogDetails";

//Practice with sub page
import PracticeArea from "./Pages/PracticeAreas/PracticeArea";
import PracticeDetails from "./Pages/PracticeAreas/PracticeDetails";

//Cases with sub page
import Cases from "./Pages/Cases/Cases";
import CaseDetails from "./Pages/Cases/CaseDetails";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Layout with navbar */}
				<Route path="/" element={<Layout />}>
					{/* Pages */}
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="attorney" element={<Attorney />} />
					<Route path="practice" element={<PracticeArea />} />
					<Route path="practice/:id" element={<PracticeDetails />} />
					<Route path="cases" element={<Cases />} />
					<Route path="cases/:id" element={<CaseDetails />} />
					<Route path="caseDetails" element={<CaseDetails />} />
					<Route path="blog" element={<Blog />} />
					<Route path="blog/:id" element={<BlogDetails />} />
					<Route path="blogDetails" element={<BlogDetails />} />
					<Route path="blogCategory" element={<BlogCategory />} />
					<Route path="contact" element={<Contact />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
