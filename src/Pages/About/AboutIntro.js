import aboutImg from "../../public/about-image.jpg";
import checkIcon from "../../public/check-icon.svg";

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

export default AboutIntro