import members from "../../public/members.png";

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
						<img src={members} alt="our attornies" />
					</figure>
				</div>
			</div>
		</section>
	);
};

export default OurAttorney
