import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import FeatureImageContainer from "../common/FeatureImageContainer";
import Image from "next/image";

function WhatWeOffer({ title, leftText, showHeading }) {
  const [isVisible, setIsVisible] = useState(false);
  const [featureVisibility, setFeatureVisibility] = useState(
    new Array(3).fill(false)
  );

  const sectionRef = useRef(null);
  const featureRefs = useRef([]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger feature animations after section is visible
          setTimeout(() => {
            setFeatureVisibility([true, false, false]);
            setTimeout(() => setFeatureVisibility([true, true, false]), 200);
            setTimeout(() => setFeatureVisibility([true, true, true]), 400);
          }, 300);
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

  const features = [
    {
      title: "Dedicated Support",
      description:
        "Call or text directly—no automated systems, no hassle. You will always reach the developer and owner.",
      icon: "💬",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      title: "Tailor-Made Design",
      description:
        "Every design is created by our in-house team, allowing us to craft anything according to your needs.",
      icon: "🎨",
      gradient: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
    },
    {
      title: "Satisfaction Guarantee",
      description:
        "If you are not happy with our design, we will refund you in full—no questions asked.",
      icon: "✅",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="w-full bg-gradient-to-br from-base-100 to-base-200 py-20 lg:py-32 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {showHeading && (
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              What We Offer
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
          </div>
        )}

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Image */}
          {leftText && (
            <div
              className={`transform transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 -translate-x-10 scale-95"
              }`}
            >
              <div className="relative group">
                {/* Animated background glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Main image container */}
                <div className="relative bg-base-100 rounded-2xl p-8 shadow-2xl border border-base-300 group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="bg-white dark:bg-white rounded-xl p-4">
                    <Image
                      src="/favicon-32x32.png"
                      alt="Seattle Pixels Services"
                      width={256}
                      height={256}
                      className="w-full max-w-sm mx-auto h-64 object-contain transform group-hover:scale-105 transition duration-500"
                      sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 30vw"
                    />
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-pulse"></div>
                  <div
                    className="absolute -bottom-2 -left-2 w-4 h-4 bg-secondary rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          {/* Right Section - Content */}
          <div
            className={`transform transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="text-center lg:text-left">
              {/* Main Title */}
              <h2 className="text-3xl lg:text-4xl font-bold text-base-content leading-tight mb-6">
                {title}
              </h2>

              {/* Description */}
              <p className="text-lg text-base-content/80 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                {leftText}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    ref={(el) => (featureRefs.current[index] = el)}
                    className={`group transform transition-all duration-500 ${
                      featureVisibility[index]
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-6 scale-95"
                    }`}
                    style={{
                      transitionDelay: featureVisibility[index]
                        ? `${index * 200}ms`
                        : "0ms",
                    }}
                  >
                    <div
                      className={`bg-base-100 rounded-xl p-4 border-2 ${feature.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 h-full`}
                    >
                      {/* Icon */}
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-xl font-bold text-white mb-3 mx-auto lg:mx-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {feature.icon}
                      </div>

                      {/* Content */}
                      <h6 className="font-bold text-base-content text-sm lg:text-base mb-2">
                        {feature.title}
                      </h6>
                      <p className="text-base-content/70 text-xs lg:text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center lg:text-left">
                <Link href="/contact-us">
                  <button className="btn btn-primary btn-lg px-8 text-lg font-semibold hover-glow transform hover:scale-105 transition-all duration-300 group">
                    Get Started Today
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

                {/* Trust indicator */}
                <div className="mt-4 flex items-center justify-center lg:justify-start gap-2 text-sm text-base-content/60">
                  <span>⭐</span>
                  <span>Trusted by 50+ small businesses</span>
                </div>
              </div>
            </div>
          </div>

          {/* Alternative Image Section */}
          {!leftText && (
            <div
              className={`transform transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-10 scale-95"
              }`}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative">
                  <FeatureImageContainer imageUrl="zazai.jpg" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WhatWeOffer;
