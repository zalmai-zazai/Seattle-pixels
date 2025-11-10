import { useEffect, useState, useRef } from "react";

const generationStepData = [
  {
    img: "mobile.png",
    title: "Mobile-First Design",
    description:
      "Mobile-first design ensures that your website delivers a seamless experience on smartphones and tablets, where most users access the web today. By prioritizing mobile usability from the start, we create responsive, easy-to-navigate layouts that enhance the user experience, no matter the device.",
    icon: "📱",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    img: "responsive.png",
    title: "Responsive Design",
    description:
      "Our responsive design approach guarantees that your website looks and performs beautifully across all devices. Whether your visitors are on a desktop, tablet, or mobile phone, the layout adjusts flawlessly to fit any screen size, providing a consistent user experience.",
    icon: "💻",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    img: "speed.png",
    title: "Optimized Page Speed",
    description:
      "Speed matters! Our websites are built with optimized code and best practices to ensure fast loading times. With quicker page speeds, you can improve user satisfaction, reduce bounce rates, and rank higher on search engines, helping your business grow.",
    icon: "⚡",
    gradient: "from-orange-500 to-red-500",
  },
];

function WhatWeDo() {
  const [isVisible, setIsVisible] = useState(false);
  const [cardVisibility, setCardVisibility] = useState(
    new Array(generationStepData.length).fill(false)
  );
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute("data-index");
          if (entry.isIntersecting) {
            setCardVisibility((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) cardObserver.observe(ref);
    });

    return () => {
      if (sectionRef.current) sectionObserver.unobserve(sectionRef.current);
      cardRefs.current.forEach((ref) => {
        if (ref) cardObserver.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="w-full bg-base-100 py-20 lg:py-32 transition-colors duration-0">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-0 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            What We Do
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-lg lg:text-xl text-base-content/80 max-w-4xl mx-auto leading-relaxed">
            At Seattle Pixels Web Design, we focus on creating custom web
            solutions tailored for small businesses across the U.S. Every
            website we build is 100% hand-coded, ensuring top-notch performance
            and search engine optimization to help your business grow.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-16">
          {generationStepData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`group relative transform transition-all duration-700 ease-out ${
                cardVisibility[index]
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
              style={{
                transitionDelay: cardVisibility[index]
                  ? `${index * 200}ms`
                  : "0ms",
              }}
            >
              {/* Background Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>

              <div className="relative card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group-hover:-translate-y-2 h-full">
                {/* Icon Header */}
                <div className="card-body p-8 text-center">
                  <div
                    className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="card-title text-xl lg:text-2xl font-bold text-base-content mt-6 justify-center">
                    {item.title}
                  </h3>

                  {/* Image */}
                  <div className="my-6 transform group-hover:scale-105 transition-transform duration-500">
                    <img
                      className="max-h-32 mx-auto drop-shadow-lg"
                      src={item.img}
                      alt={item.title}
                    />
                  </div>

                  {/* Description */}
                  <p className="text-base-content/70 leading-relaxed flex-grow">
                    {item.description}
                  </p>

                  {/* Hover Indicator */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-base-200 to-base-300 rounded-2xl p-8 border border-base-300">
            <h3 className="text-2xl lg:text-3xl font-bold text-base-content mb-4">
              Ready to Transform Your Online Presence?
            </h3>
            <p className="text-base-content/70 text-lg mb-6 max-w-2xl mx-auto">
              Lets build something amazing together. Get started with your
              custom website today.
            </p>
            <a
              href={"/contact-us"}
              className="btn btn-primary btn-lg px-8 text-lg font-semibold hover-glow transform hover:scale-105 transition-all duration-300"
            >
              Start Your Project
              <svg
                className="w-5 h-5 ml-2"
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
