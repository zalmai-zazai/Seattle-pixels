import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 flex-col lg:flex  lg:h-screen lg:items-center">
          <img
            src="Banner.png"
            className="max-w-full  h-60 sm:h-80 object-cover rounded-lg shadow-2xl"
          />
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl  font-extrabold text-transparent sm:text-5xl">
              Small Buisnesses
              <span className="sm:block p-2"> Web Designer </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              At Seattle Pixels Web Design, we build 100% hand-coded, custom
              websites designed to drive results. Starting at $150/mo, our
              services expert SEO are there to help your business grow online.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded-sm border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:ring-3 focus:outline-hidden sm:w-auto"
                href="#"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded-sm border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:ring-3 focus:outline-hidden sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
