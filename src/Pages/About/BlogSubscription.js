import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import dots1 from "../../public/newsletter-dot.svg"

const BlogSubscription = (props) => {
	const buttonAnim = {
		offscreen: { y: 0 },
		onscreen: {
			y: 0
		},
	}

	return (
		<section className="blog-subscription py-14 md:py-24 bg-primary md:-mx-10">
			<div className="section-content relative flex justify-center items-center">
				<div className="px-4 sm:px-14 md:px-24 max-w-3xl z-10">
					<div className="section-header text-center text-white ">
						<div>
							<motion.h2 
								variants={fadeIn("up", 0.5, 0)}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.3 }}
								className="font-serif text-3xl font-bold leading-10 lg:text-4xl"
							>
								Subscribe To Our Blog
							</motion.h2>

							<motion.p 
								variants={fadeIn("up", 0.5, 0)}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.3 }}
								className="mt-5 md:mt-8 leading-8 text-lg"
							>
								Lorem ipsum dolor sit amet consectetur adipisicing elitsed
								eiusmod tempor incididunt labore dolore.
							</motion.p>
						</div>
					</div>

					<form
						className="mt-14 md:mt-20 text-lg"
					>
						<motion.div 
							variants={fadeIn("up", 0.5, 0)}
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0.3 }}
							className="sm:pl-8 sm:pr-[5px] sm:py-[5px] sm:rounded-lg sm:bg-white sm:grid sm:grid-cols-5 	sm:items-center sm:gap-8"
						>
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

							<motion.div
								variants={buttonAnim}
								viewport={{ once: true, amount: 1 }}
								className="sm:col-span-2 sm:mt-0">
								<button
									className="w-full bg-black px-5 py-[11px] text-white rounded-lg mt-5
                 					hover:bg-primary transition-colors duration-300
                  					sm:mt-0"
								>
									Subscribe
								</button>
							</motion.div>
						</motion.div>
					</form>
				</div>

				<figure className="absolute top-20 right-5 w-48 sm:w-60 md:w-auto md:right-26 lg:right-48">
					<img src={dots1} alt="dots 1" />
				</figure>

				<figure className="absolute top-20 left-5 w-48 sm:w-60 md:w-auto md:left-26 lg:left-48">
					<img src={dots1} alt="dots 1" />
				</figure>
			</div>
		</section>
	);
};

export default BlogSubscription
