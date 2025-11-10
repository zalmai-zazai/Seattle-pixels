import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="bg-gradient-to-br from-base-100 via-base-200 to-base-300 text-base-content">
        {/* REMOVED: Heavy background elements causing performance issues */}

        <div className="relative mx-auto max-w-screen-xl px-4 py-20 lg:py-32 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 mx-auto lg:mx-0 text-center lg:text-left">
            <h1 className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl lg:text-6xl leading-tight">
              Premium <span className="text-orange-600">Web</span> Solutions
              <span className="block mt-2 lg:text-5xl bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                With <span className="text-gray-300">Seattle Pixels</span>
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg sm:text-xl/relaxed text-base-content/90">
              At Seattle Pixels we build completely custom website package
              tailored to your business needs. We handle design, development,
              and ongoing support so you can focus on what you do best.
            </p>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                className="btn btn-primary px-8 py-4 text-lg font-semibold shadow-lg"
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
                className="btn btn-outline btn-primary px-8 py-4 text-lg font-semibold border-2 shadow-lg"
                href={"/about-us"}
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 text-base-content">
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
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              {/* REMOVED: Heavy glow effect */}

              <Image
                src="/Banner.png"
                alt="Seattle Pixels Web Design"
                width={800}
                height={400}
                className="relative w-full max-w-2xl mx-auto h-64 sm:h-80 lg:h-96 object-cover rounded-xl shadow-2xl"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />

              {/* REMOVED: Floating animated circles */}
            </div>
          </div>
        </div>

        {/* REMOVED: Scroll indicator causing animation issues */}
      </section>
    </div>
  );
};

export default Banner;
