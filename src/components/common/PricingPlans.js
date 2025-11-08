import { useState, useEffect, useRef } from "react";
import CheckIcon from "@heroicons/react/24/outline/CheckIcon";
import Link from "next/link";

const packages = [
  {
    title: "Basic Business Website",
    description:
      "Perfect for small businesses needing a professional online presence",
    features: [
      "Custom 5-page website design",
      "Mobile-responsive layout",
      "Basic SEO optimization",
      "Contact form integration",
      "Social media integration",
      "1-month free support",
      "Google Analytics setup",
    ],
    cta: "Get Quote",
    popular: false,
    gradient: "from-green-500 to-emerald-500",
    icon: "💼",
  },
  {
    title: "Advanced Business Solution",
    description: "Ideal for growing businesses with more complex needs",
    features: [
      "Custom 10-page website",
      "Advanced responsive design",
      "Premium SEO optimization",
      "Content management system",
      "E-commerce functionality ready",
      "Blog integration",
      "6-month support included",
      "Performance optimization",
    ],
    cta: "Get Quote",
    popular: true,
    gradient: "from-orange-500 to-amber-500",
    icon: "🚀",
  },
  {
    title: "E-Commerce & Custom Solutions",
    description: "Complete online store or complex web applications",
    features: [
      "Full e-commerce functionality",
      "Custom database design",
      "Payment gateway integration",
      "Inventory management",
      "User account system",
      "Advanced security features",
      "1-year premium support",
      "Priority development",
      "Custom features as needed",
    ],
    cta: "Get Quote",
    popular: false,
    gradient: "from-blue-500 to-cyan-500",
    icon: "🛒",
  },
];

function PricingPlans() {
  const [isVisible, setIsVisible] = useState(false);
  const [cardVisibility, setCardVisibility] = useState(
    new Array(3).fill(false)
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
    <div ref={sectionRef} className="w-full">
      {/* Main Packages Grid */}
      <div className="grid md:grid-cols-3 grid-cols-1 mt-12 lg:mt-16 gap-8 lg:gap-12">
        {packages.map((pkg, index) => (
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
            {/* Background Glow */}
            <div
              className={`absolute -inset-4 bg-gradient-to-r ${pkg.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500`}
            ></div>

            <div
              className={`relative card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 h-full ${
                pkg.popular ? "ring-2 ring-secondary/50" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-secondary-content px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="card-body p-6 lg:p-8">
                {/* Package Header */}
                <div className="text-center mb-6">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${pkg.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {pkg.icon}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-base-content">
                    {pkg.title}
                  </h3>
                  <p className="text-base-content/70 mt-2 text-sm">
                    {pkg.description}
                  </p>
                </div>

                {/* Custom Quote Notice */}
                <div className="bg-base-200 rounded-lg p-4 text-center mb-6">
                  <div className="text-lg font-semibold text-base-content">
                    Custom Pricing
                  </div>
                  <div className="text-sm text-base-content/70 mt-1">
                    Get a personalized quote based on your requirements
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-base-content/80 text-sm lg:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href="/contact-us" className="w-full mt-auto">
                  <button
                    className={`btn btn-lg w-full font-semibold hover-glow transform hover:scale-105 transition-all duration-300 ${
                      pkg.popular ? "btn-primary" : "btn-outline btn-primary"
                    }`}
                  >
                    {pkg.cta}
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
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Why Custom Pricing Section */}
      <div
        className={`mt-16 text-center transition-all duration-700 delay-800 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="bg-base-200 rounded-2xl p-8 border border-base-300 max-w-4xl mx-auto">
          <h3 className="text-2xl lg:text-3xl font-bold text-base-content mb-4">
            Why Custom Pricing?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-bold text-base-content mb-2">
                Tailored Solutions
              </h4>
              <p className="text-base-content/70 text-sm">
                Every business has unique needs. We provide pricing that matches
                your specific requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💡</div>
              <h4 className="font-bold text-base-content mb-2">
                No Hidden Costs
              </h4>
              <p className="text-base-content/70 text-sm">
                Get a transparent quote with all features and costs outlined
                upfront.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-bold text-base-content mb-2">
                Flexible Options
              </h4>
              <p className="text-base-content/70 text-sm">
                Choose from various packages and customize features to fit your
                budget.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/contact-us">
              <button className="btn btn-primary btn-lg px-8 text-lg font-semibold hover-glow transform hover:scale-105 transition-all duration-300">
                Get Your Free Quote Today
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
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPlans;
