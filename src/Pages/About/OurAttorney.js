import members from "../../public/members.png";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";

const OurAttorney = () => {
	return (
		<section className="our-attorney py-14 md:py-36">
			<div className="section-content flex justify-center items-center  px-4 sm:px-10 lg:px-14">
				<div className="grid grid-cols-1 max-w-6xl gap-10 items-center md:gap-12 md:grid-cols-2">
					<div className="md:order-2">
						<div className="section-header">
							<motion.h2
                                variants={fadeIn("up", 0.5, 0)}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0 }}
                                className="px-7 py-2 bg-primary inline-block text-white rounded-md"
                            >
								Our Attorney
							</motion.h2>

							<motion.h3 
                                variants={fadeIn("up", 0.5, 0)}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0 }}
                                className="mt-10 mb-[20px] font-serif text-3xl leading-10 font-bold lg:text-4xl lg:mt-12 lg:mb-[26px]"
                            >
								Meet Our Attorney
							</motion.h3>
						</div>

						<div className="text-secondaryLight text-lg">
							<motion.p 
                                variants={fadeIn("up", 0.5, 0)}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0 }}
                                className="mb-4 md:mb-8"
                            >
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</motion.p>

							<motion.p 
                                variants={fadeIn("up", 0.5, 0)}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0 }}
                                className="mb-4 md:mb-8"
                            >
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</motion.p>

							<motion.button 
                                variants={fadeIn("up", 0.5, 0)}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0 }}
                                className="mt-7 px-8 py-3 text-black bg-[#f6f6f6] rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-300"
                            >
								Meet All Attorney
							</motion.button>
						</div>
					</div>
					<figure className="md:md:order-1">
						<img src={members} alt="our attornies" />
					</figure>
				</div>
			</div>
		</section>
	);
};

export default OurAttorney
