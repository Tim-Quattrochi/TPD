import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/handsWorking.jpg";

export default function HomePage(props) {
	return (
		<>
			<div className="pl-44  h-screen max-h-screen flex flex-col ">
				<h1 className="text-sky-500 font-semibold p-10 pb-16 text-3xl text-center">
					We design with your future in mind!
				</h1>

				<div className="flex justify-between pb-20">
					<img
						src={logo}
						className="w-6/12 rounded-2xl ml-5 align place-content-center"
					/>

					<button className=" mr-56">
						<Link to="/register"> SIGN-UP </Link>{" "}
					</button>
				</div>

				<div class="p-4 rounded-lg text-slate-800">
					<h3>Why Choose Total Product Design?</h3>
					<p>
						Total Product Design (TPD) is a growing design agency that
						specialized in creating powerful, effective brands and web presences
						for businesses of all sizes.
					</p>
					<p>
						Our team of experienced designers takes the time to understand your
						business, your goals, and your target audience, and we use this
						information to create a unique, tailored design that speaks directly
						to your audience.
					</p>
					<p>
						In addition to our attention to detail and personalized approach,
						TPD is also known for our innovative and cutting-edge designs. We
						are always on the lookout for new trends and techniques, and we are
						not afraid to push the boundaries in order to create something truly
						special and memorable.
					</p>
					<p>
						Overall, if you want a brand and web presence that truly stands out
						and gets results, TPD is the perfect choice. Contact us today to
						learn more about what we can do for your business.
					</p>
				</div>
			</div>
		</>
	);
}
