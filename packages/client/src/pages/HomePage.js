import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/handsWorking.jpg";

export default function HomePage(props) {
  return (
    <>
      <div className="h-screen bg-sky-900">
        <div className="flex flex-col items-center h-full px-4">
          <h1 className="text-amber-500 font-extrabold text-3xl text-center mb-8">
            We design with your future in mind!
          </h1>

          <div className="flex flex-col items-center w-full max-w-md">
            <img
              src={logo}
              className="w-auto h-auto max-lg:h-1/4 rounded-full place-content-center shadow-amber-500 shadow-lg mb-4"
              alt="Hands working on a laptop"
            />

            <div className="w-full rounded-2xl overflow-hidden text-slate-800 p-8 shadow-lg bg-slate-300 backdrop-opacity-80 border-double border-4 border-amber-500 ">
              <h3 className="text-center underline text-pink-800 font-semibold mb-4">
                Why Choose Total Product Design?
              </h3>
              <p className="mb-4">
                Total Product Design (TPD) is a growing design agency
                that specialized in creating powerful, effective
                brands and web presences for businesses of all sizes.
              </p>
              <p className="mb-4">
                Our team of experienced designers takes the time to
                understand your business, your goals, and your target
                audience, and we use this information to create a
                unique, tailored design that speaks directly to your
                audience.
              </p>
              <p className="mb-4">
                In addition to our attention to detail and
                personalized approach, TPD is also known for our
                innovative and cutting-edge designs. We are always on
                the lookout for new trends and techniques, and we are
                not afraid to push the boundaries in order to create
                something truly special and memorable.
              </p>
              <p className="mb-4">
                Overall, if you want a brand and web presence that
                truly stands out and gets results, TPD is the perfect
                choice. Contact us today to learn more about what we
                can do for your business.
              </p>

              <button className="w-full py-2 rounded-3xl bg-amber-500 text-pink-800">
                <Link to="/register"> SIGN-UP </Link>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
