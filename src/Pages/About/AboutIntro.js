import aboutImg from "../../public/about-image.jpg";
import checkIcon from "../../public/check-icon.svg";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";

const services = [
	"Immigration Laws",
	"DUI Defense",
	"Litigation & Arbitration",
	"Domestic Violence Family",
	"Traffic Violence",
	"Crimes",
];

const AboutIntro = () => {
	return (
		<section className="about-intro py-14 md:py-36">
			<div className="section-content flex justify-center items-center px-4 md:px-0 lg:px-14">
				<div className="max-w-6xl grid grid-cols-1 gap-20 lg:gap-32 md:grid-cols-2 md:items-start">
					<div className="md:order-2">
						<div className="section-header">
							<motion.h2 
								variants={fadeIn("up", 0.5, 0)}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0 }}
								className="px-7 py-2 bg-primary inline-block text-white rounded-md"
							>
								About Us
							</motion.h2>

							<motion.h3 
								variants={fadeIn("up", 0.5, 0)}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0 }}
								className="mt-10 mb-[20px] font-serif text-3xl leading-10 font-bold lg:text-4xl lg:mt-12 lg:mb-[26px]"
							>
								We Have Experienced <span className="text-primary">Lawyer</span>{" "}
								They Are <span className="text-primary">Always Ready</span> To
								Help You.
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
								Platea dictumst quisque sagittis purus sit amet volutpat. Massa
								massa ultricies mi quis hendrerit dolor. Quis commodo odio
								aenean.
							</motion.p>

							<div className="mt-7 grid gap-5 lg:grid-cols-2">
								{services.map((service, index) => (
									<motion.div
										variants={fadeIn("up", 0.5, 0)}
										initial="offscreen"
										whileInView="onscreen"
										viewport={{ once: true, amount: 0 }}
										key={service}
										className="flex gap-3 items-center font-semibold"
									>
										<figure className="">
											<img src={checkIcon} alt="check icon" />
										</figure>
										<h3 className="">{service}</h3>
									</motion.div>
								))}
							</div>
						</div>
					</div>
					<figure className="md:order-1 md:relative md:max-w-[480px]">
						<motion.div 
							variants={fadeIn("right", 0.5, 0)}
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0 }}
							className="hidden md:block absolute border-[2px] border-primary w-full h-[90%]  rounded-lg -z-10 top-[15%] left-[7%]"
						></motion.div>
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

export default AboutIntro