import { useEffect, useRef, useState } from "react";

const featuresData = [
  {
    title: "Fill Out the Questionnaire",
    description:
      "We'll send you a short email with fewer than 10 questions about your business, your services, and what makes you unique. From there, we handle everything else.",
    icon: "📝",
    gradient: "from-blue-500 to-cyan-500",
    step: 1,
  },
  {
    title: "Review the Design",
    description:
      "We'll walk you through the initial design draft via a video screen share, making any changes you request to ensure you're completely happy with the look and feel.",
    icon: "🎨",
    gradient: "from-purple-500 to-pink-500",
    step: 2,
  },
  {
    title: "Development & Demo",
    description:
      "Once the design is approved, we start building the site. You'll receive a demo link to review the final product before we officially launch and make it live.",
    icon: "⚡",
    gradient: "from-orange-500 to-amber-500",
    step: 3,
  },
];

function OurProcess() {
  const [isVisible, setIsVisible] = useState(false);
  const [cardVisibility, setCardVisibility] = useState(
    new Array(featuresData.length).fill(false)
  );
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger card animations
          setTimeout(() => setCardVisibility([true, false, false]), 200);
          setTimeout(() => setCardVisibility([true, true, false]), 400);
          setTimeout(() => setCardVisibility([true, true, true]), 600);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) sectionObserver.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full bg-base-100 py-20 lg:py-32 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Working Process
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Description Section */}
        <div
          className={`grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-base-content mb-6">
              We Take Care Of Everything
            </h3>
            <p className="text-lg text-base-content/80 leading-relaxed">
              Once the contract is signed, we well send a brief questionnaire to
              learn more about your business and services. From there, we expand
              on your input, writing the content for the entire site and
              crafting a design tailored to your brand.
            </p>
          </div>
          <div>
            <div className="bg-base-200 rounded-2xl p-6 border-l-4 border-primary">
              <p className="text-base-content/80 leading-relaxed">
                After your approval, we move into development. The entire
                process typically takes{" "}
                <strong className="text-primary">2-3 weeks</strong> from start
                to finish, ensuring you have a fully functional, professional
                website in no time.
              </p>
            </div>

            {/* Timeline Indicator */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-6">
              {["🚀", "✅", "🎯"].map((icon, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-2xl">{icon}</span>
                  {index < 2 && <div className="w-8 h-0.5 bg-base-300"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className={`group transform transition-all duration-700 ease-out ${
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
              <div
                className={`absolute -inset-4 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500`}
              ></div>

              <div className="relative card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group-hover:-translate-y-2 h-full">
                <div className="card-body p-6 lg:p-8 text-center">
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      Step {feature.step}
                    </div>
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-xl transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      {feature.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="card-title text-xl lg:text-2xl font-bold text-base-content mb-4 justify-center group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base-content/70 leading-relaxed flex-grow">
                    {feature.description}
                  </p>

                  {/* Progress Line (except for last item) */}
                  {index < featuresData.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                      <div className="w-12 h-0.5 bg-base-300 group-hover:bg-primary transition-colors duration-300"></div>
                      <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        →
                      </div>
                    </div>
                  )}

                  {/* Hover Indicator */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className={`w-8 h-1 bg-gradient-to-r ${feature.gradient} rounded-full mx-auto`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-base-200 to-base-300 rounded-2xl p-8 border border-base-300 max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-base-content mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-base-content/70 text-lg mb-6">
              Lets begin the journey to your perfect website today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={"/contact-us"}
                className="btn btn-primary btn-lg px-8 text-lg font-semibold hover-glow transform hover:scale-105 transition-all duration-300"
              >
                Start Questionnaire
              </a>
              <a
                href="/portfolio"
                className="btn btn-outline btn-primary btn-lg px-8 text-lg font-semibold hover:bg-primary hover:text-primary-content transition-all duration-300"
              >
                See Examples
              </a>
            </div>
          </div>
        </div>

        {/* Process Timeline */}
        <div
          className={`flex justify-center items-center mt-12 transition-all duration-700 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center space-x-4 text-base-content/60 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span>Questionnaire</span>
            </div>
            <div className="w-8 h-0.5 bg-base-300"></div>
            <div className="flex items-center space-x-2">
              <div
                className="w-3 h-3 bg-primary rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <span>Design Review</span>
            </div>
            <div className="w-8 h-0.5 bg-base-300"></div>
            <div className="flex items-center space-x-2">
              <div
                className="w-3 h-3 bg-primary rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <span>Launch</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProcess;
