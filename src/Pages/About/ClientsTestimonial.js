import TestimonialCard from "../../components/TestimonialCard";
import reviewer1 from "../../public/reviewer1.jpg";
import reviewer2 from "../../public/reviewer2.jpg";
import bgImg from "../../public/testimonial-bg-shape.svg";

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
]

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

export default ClientsTestimonial
