import { useEffect, useRef, useState } from "react";
import FeatureImageContainer from "@/components/common/FeatureImageContainer";
import InnerPageContainer from "@/components/common/InnerPageContainer";
import OurProcess from "@/components/home/OurProcess";
import PageMetaTags from "@/containers/PageMetaTags";
import Link from "next/link";

export default function Page({ leftText, imageUrl, title }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      <PageMetaTags
        title="About Us - Seattle Pixels Web Design"
        description="Learn about Zalmai Zazai, owner and lead developer at Seattle Pixels. Professional web development services with purpose and vision."
        url="/about-us"
      />

      <div
        ref={sectionRef}
        className="min-h-screen bg-base-100 transition-colors duration-500"
      >
        {/* Hero Header */}
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Us
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
            <p className="mt-6 text-lg lg:text-xl text-base-content/80 max-w-2xl mx-auto">
              Building websites with purpose, passion, and professional
              excellence
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Section */}
            <div
              className={`transform transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 -translate-x-10 scale-95"
              }`}
            >
              <div className="relative group">
                {/* Background Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Main Image Container */}
                <div className="relative bg-base-100 rounded-2xl p-6 shadow-2xl border border-base-300 group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2">
                  <img
                    src="Zalmaiabout.jpg"
                    alt="Zalmai Zazai - Owner & Developer"
                    className="w-full max-w-md mx-auto h-80 lg:h-96 object-contain transform group-hover:scale-105 transition duration-700"
                  />

                  {/* Profile Card */}
                  <div className="bg-base-200 text-base-content lg:bottom-6 lg:right-6 -bottom-4 -right-4 flex flex-col rounded-xl p-4 absolute shadow-2xl border border-base-300 transform group-hover:scale-105 transition-all duration-500">
                    <h1 className="font-bold text-xl lg:text-2xl text-primary">
                      Zalmai Zazai
                    </h1>
                    <p className="text-base-content/70">
                      Owner & Lead Developer
                    </p>

                    {/* Social Links */}
                    <div className="flex space-x-3 mt-3">
                      {["💼", "🐙", "🔗"].map((icon, index) => (
                        <div
                          key={index}
                          className="w-8 h-8 bg-base-300 rounded-full flex items-center justify-center text-sm hover:bg-primary hover:text-primary-content transition-all duration-300 transform hover:scale-110 cursor-pointer"
                        >
                          {icon}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                  <div
                    className="absolute -bottom-2 -right-2 w-6 h-6 bg-secondary rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div
              className={`transform transition-all duration-700 delay-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                  Passionate About Web Development
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-base-content leading-tight mb-6">
                  We Build Websites with{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Purpose & Vision
                  </span>
                </h2>

                <div className="space-y-4 text-base-content/80 text-lg leading-relaxed">
                  <p>
                    My name is{" "}
                    <strong className="text-primary">Zalmai Zazai</strong>, and
                    I am the owner and lead developer at Seattle Pixels. I hold
                    a bachelors degree in computer science, specializing in
                    software engineering.
                  </p>
                  <p>
                    My journey in tech started with desktop-based applications,
                    but after moving to the U.S. in 2021, I realized the immense
                    demand for web applications. I quickly adapted and mastered
                    modern web development technologies like React and Next.js.
                  </p>
                  <p>
                    I found that many small businesses face the same struggle:
                    either they cannot afford a quality website, or if they do,
                    they end up with an outdated, poorly designed site.
                  </p>
                  <p className="bg-base-200 rounded-lg p-4 border-l-4 border-primary">
                    To solve this, I created a business model that caters to
                    their needs—affordable, professional websites that help
                    businesses grow without breaking the bank.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 my-8">
                  {[
                    { number: "50+", label: "Projects" },
                    { number: "100%", label: "Satisfaction" },
                    { number: "2+", label: "Years Exp" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-4 bg-base-200 rounded-lg transform hover:scale-105 transition-all duration-300"
                    >
                      <div className="text-2xl font-bold text-primary">
                        {stat.number}
                      </div>
                      <div className="text-sm text-base-content/70">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link href="/contact-us">
                  <button className="btn btn-primary btn-lg px-8 text-lg font-semibold hover-glow transform hover:scale-105 transition-all duration-300 group">
                    Contact Us Now!
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </Link>

                {/* Trust Indicator */}
                <div className="flex items-center justify-center lg:justify-start gap-3 mt-6 text-base-content/60 text-sm">
                  <span>⭐</span>
                  <span>Trusted by small businesses nationwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Process Section */}
        <div
          className={`mt-20 lg:mt-32 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <OurProcess />
        </div>
      </div>
    </>
  );
}
