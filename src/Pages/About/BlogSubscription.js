import { fadeIn } from "../../variants";
import { motion } from "framer-motion";

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

export default BlogSubscription
