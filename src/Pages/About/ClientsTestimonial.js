import TestimonialCard from "../../components/TestimonialCard";
import reviewer1 from "../../public/reviewer1.jpg";
import reviewer2 from "../../public/reviewer2.jpg";
import bgImg from "../../public/testimonial-bg-shape.svg";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from "react";
import "../../Styles/swiperstyles.css"

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
	const [preview, setPreview] = useState(1)
	/* const [animationProp, setAnimationProp] = useState({
		preview: 1,
		
	}) */

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1000) {
			  setPreview(2);
			} else {
			  setPreview(1);
			}
		};

		handleResize()

		window.addEventListener('resize', handleResize)

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [])

	return (
		<section className="client-testimonial py-14 md:py-36 relative">
			<figure className="absolute top-0 -left-10 -z-10 opacity-60">
				<img src={bgImg} alt="bg img" />
			</figure>
			<div className="section-content px-4 sm:px-14 md:px-24">
				<div className="section-header text-center">
					<motion.h2
						variants={fadeIn("up", 0.5, 0)}
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0 }}
						className="px-7 py-2 bg-primary inline-block text-white rounded-md"
					>
						Clients Testimonial
					</motion.h2>

					<motion.h3 
						variants={fadeIn("up", 0.5, 0)}
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0 }}
						className="mt-10 mb-[20px] font-serif text-3xl leading-10 font-bold lg:text-4xl lg:mt-12 lg:mb-[26px]"
					>
						What Clients Say About Us
					</motion.h3>
				</div>

				<div className="section-content mt-20">
					<div className="cards-container">
						<Swiper 
							modules={[Pagination]}
							spaceBetween={0}
							slidesPerView={preview}
							pagination={{ clickable: true }}
							className="flex gap-8 flex-wrap justify-center items-center">
							{
								testimonies.map((testimony) => {
									return (
										<SwiperSlide className="py-3 px-3 sm:py-10 sm:px-10" key={testimony.authur}>
											<TestimonialCard testimony={testimony}/>
										</SwiperSlide>
									)
								})
							}
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ClientsTestimonial
