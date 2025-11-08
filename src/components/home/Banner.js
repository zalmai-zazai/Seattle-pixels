import React from "react";

const Banner = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="bg-gradient-to-br from-base-100 via-base-200 to-base-300 text-base-content transition-all duration-500">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-20 lg:py-32 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 mx-auto lg:mx-0 text-center lg:text-left animate-slide-up">
            <h1 className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl lg:text-6xl leading-tight">
              Premium <span className="text-orange-600">Web</span> Solutions
              <span className="block mt-2 lg:text-5xl bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                With <span className="text-gray-300">Seattle Pixels</span>
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg sm:text-xl/relaxed text-base-content/90 animate-fade-in delay-300">
              At Seattle Pixels Web Design, we build 100% hand-coded, custom
              websites designed to drive results. Starting at $150/mo, our
              services include expert SEO to help your business grow online.
            </p>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 animate-slide-up delay-500">
              <a
                className="btn btn-primary px-8 py-4 text-lg font-semibold hover-glow transform hover:scale-105 transition-all duration-300 shadow-lg"
                href={"/contact-us"}
              >
                <span className="flex items-center gap-2">
                  Get Started
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </a>

              <a
                className="btn btn-outline btn-primary px-8 py-4 text-lg font-semibold border-2 hover:bg-primary hover:text-primary-content transition-all duration-300 shadow-lg"
                href={"/about-us"}
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 text-base-content animate-fade-in delay-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm opacity-80">Websites Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">100%</div>
                <div className="text-sm opacity-80">Custom Code</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm opacity-80">Support</div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 animate-slide-in-left delay-300">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <img
                src="Banner.png"
                alt="Seattle Pixels Web Design"
                className="relative w-full max-w-2xl mx-auto h-64 sm:h-80 lg:h-96 object-cover rounded-xl shadow-2xl transform group-hover:scale-105 transition duration-500"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce"></div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-bounce"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-base-content/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-base-content/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
