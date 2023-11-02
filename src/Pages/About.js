import React, { useState } from "react";
import Header from "../components/Header";
import TestimonialCard from "../components/TestimonialCard";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import members from "../public/members.png";
import reviewer1 from "../public/reviewer1.jpg";
import reviewer2 from "../public/reviewer2.jpg";
import bgImg from "../public/testimonial-bg-shape.svg";
import aboutImg from "../public/about-image.jpg";
import checkIcon from "../public/check-icon.svg";

const services = [
	"Immigration Laws",
	"DUI Defense",
	"Litigation & Arbitration",
	"Domestic Violence Family",
	"Traffic Violence",
	"Crimes",
];

const testimonies = [
	{
		authur: "Brian Mack",
		testimony:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst quisque sagittis purus sit amet volutpat.",
		image: <img src={reviewer1} alt="Brian Mack" />,
		jobTitle: "Businessman",
	},
	{
		authur: "Alonzo Daniel",
		testimony:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst quisque sagittis purus sit amet volutpat.",
		image: <img src={reviewer2} alt="Brian Mack" />,
		jobTitle: "Businessman",
	},
	{
		authur: "Brian Mak",
		testimony:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst quisque sagittis purus sit amet volutpat.",
		image: <img src={reviewer1} alt="Brian Mack" />,
		jobTitle: "Businessman",
	},
	{
		authur: "Alonzo Daniell",
		testimony:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst quisque sagittis purus sit amet volutpat.",
		image: <img src={reviewer2} alt="Brian Mack" />,
		jobTitle: "Businessman",
	},
];

const AboutIntro = () => {
	return (
		<section className="about-intro py-14 md:py-36">
			<div className="section-content px-4 sm:px-14 md:px-24">
				<div className="grid grid-cols-1 gap-28 lg:grid-cols-2 lg:items-start">
					<div className="lg:order-2">
						<div className="section-header">
							<h2 className="px-7 py-2 bg-primary inline-block text-white rounded-md">
								About Us
							</h2>

							<h3 className="mt-10 mb-[20px] font-serif text-4xl leading-10 font-bold lg:text-4xl lg:mt-12 lg:mb-[26px]">
								We Have Experienced <span className="text-primary">Lawyer</span>{" "}
								They Are <span className="text-primary">Always Ready</span> To
								Help You.
							</h3>
						</div>

						<div className="text-secondaryLight text-lg">
							<p className="mb-4 md:mb-8">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Platea dictumst quisque sagittis purus sit amet volutpat. Massa
								massa ultricies mi quis hendrerit dolor. Quis commodo odio
								aenean.
							</p>

							<div className="mt-7 grid gap-5 sm:grid-cols-2">
								{services.map((service, index) => (
									<div className="flex gap-3 items-center font-semibold">
										<figure className="">
											<img src={checkIcon} alt="check icon" />
										</figure>
										<h3 className="">{service}</h3>
									</div>
								))}
							</div>
						</div>
					</div>
					<figure className="lg:order-1 lg:relative">
						<div className="hidden lg:block absolute border-[2px] border-primary w-full h-full left-10 top-10 rounded-lg -z-10"></div>
						<img
							src={aboutImg}
							alt="our attornies"
							className="w-full block rounded-lg"
						/>
					</figure>
				</div>
			</div>
		</section>
	);
};

const OurAttorney = () => {
	return (
		<section className="our-attorney py-14 md:py-36">
			<div className="section-content px-4 sm:px-14 md:px-24">
				<div className="grid grid-cols-1 gap-12 md:grid-cols-2">
					<div className="md:order-2">
						<div className="section-header">
							<h2 className="px-7 py-2 bg-primary inline-block text-white rounded-md">
								Our Attorney
							</h2>

							<h3 className="mt-10 mb-[20px] font-serif text-4xl leading-10 font-bold lg:text-4xl lg:mt-12 lg:mb-[26px]">
								Meet Our Attorney
							</h3>
						</div>

						<div className="text-secondaryLight text-lg">
							<p className="mb-4 md:mb-8">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>

							<p className="mb-4 md:mb-8">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>

							<button className="mt-7 px-8 py-3 text-black bg-[#f6f6f6] rounded-lg font-semibold hover:bg-primary hover:text-white transition duration-200duration-200">
								Meet All Attorney
							</button>
						</div>
					</div>
					<figure className="md:md:order-1">
						<img src={members} alt="our attorneys" />
					</figure>
				</div>
			</div>
		</section>
	);
};

const BlogSubscription = (props) => {
	return (
		<section className="blog-subscription py-14 md:py-24 bg-primary md:-mx-10">
			<div className="section-content flex justify-center items-center">
				<div className="px-4 sm:px-14 md:px-24 max-w-3xl">
					<div className="section-header text-center text-white ">
						<motion.div
							variants={fadeIn("up", 0.7, 0.3)}
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0.8 }}>
							<h2 className="font-serif text-4xl font-bold leading-10 lg:text-4xl">
								Subscribe To Our Blog
							</h2>

							<p className="mt-5 md:mt-8 leading-8 text-lg">
								Lorem ipsum dolor sit amet consectetur adipisicing elitsed
								eiusmod tempor incididunt labore dolore.
							</p>
						</motion.div>
					</div>

					<motion.form
						variants={fadeIn("up", 0.7, 0.3)}
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.8 }}
						className="mt-14 md:mt-20 text-lg">
						<div className="sm:pl-8 sm:pr-2 sm:py-2 sm:rounded-lg sm:bg-white sm:grid sm:grid-cols-5 sm:items-center sm:gap-4">
							<input
								type="email"
								name="email"
								required
								onChange={props.updateForm}
								value={props.subForm.email}
								placeholder="Enter your email address"
								className="block w-full px-5 py-4 rounded-lg
                sm:col-span-3 sm:p-0 sm:py-0 sm:outline-none"
							/>

							<div

								className="sm:col-span-2 sm:mt-0">
								<button
									className="w-full bg-black px-5 py-4 text-white rounded-lg mt-5
                  hover:bg-primary transition duration-200
                  sm:mt-0">
									Subscribe
								</button>
							</div>
						</div>
					</motion.form>
				</div>
			</div>
		</section>
	);
};

const ClientsTestimonial = () => {
	return (
		<section className="client-testimonial py-14 md:py-36 relative">
			<figure className="absolute top-0 -left-10 -z-10 opacity-60">
				<img src={bgImg} alt="bg img" />
			</figure>
			<div className="section-content px-4 sm:px-14 md:px-24">
				<div className="section-header text-center">
					<h2 className="px-7 py-2 bg-primary inline-block text-white rounded-md">
						Clients Testimonial
					</h2>

					<h3 className="mt-10 mb-[20px] font-serif text-4xl leading-10 font-bold lg:text-4xl lg:mt-12 lg:mb-[26px]">
						What Clients Say About Us
					</h3>
				</div>

				<div className="section-content mt-20">
					<div className="cards-container">
						<div className="flex gap-8 flex-wrap justify-center items-center">
							{testimonies.map((testimony) => {
								return <TestimonialCard testimony={testimony} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

function About() {
	const [subForm, setSubForm] = useState({
		email: "",
	});

	const updateForm = (event) => {
		const { name, value } = event.target;
		setSubForm((oldSubForm) => ({
			...subForm,
			[name]: value,
		}));
	};

	return (
		<div>
			<Header pageTitle="About Page" name="About" />

			<div className="about-page-body md:px-10 ">
				<AboutIntro />
				<OurAttorney />
				<BlogSubscription subForm={subForm} updateForm={updateForm} />
				<ClientsTestimonial />
			</div>
		</div>
	);
}

export { About, AboutIntro, OurAttorney, BlogSubscription, ClientsTestimonial };
