import { useEffect, useRef, useState } from "react";
import InnerPageContainer from "@/components/common/InnerPageContainer";
import PricingPlans from "@/components/common/PricingPlans";
import PageMetaTags from "@/containers/PageMetaTags";

export default function Page() {
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
        title="Pricing - Custom Web Design Solutions | Seattle Pixels"
        description="Get a personalized quote for your custom website. Professional web design solutions tailored to your business needs and budget."
        url="/pricing"
      />

      <div
        ref={sectionRef}
        className="min-h-screen bg-base-100 transition-colors duration-500"
      >
        {/* Hero Section */}
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pricing & Packages
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
            <p className="mt-6 text-lg lg:text-xl text-base-content/80 max-w-3xl mx-auto">
              Every business is unique. Get a personalized quote tailored to
              your specific needs, goals, and budget.
            </p>
          </div>

          {/* Value Proposition */}
          <div
            className={`grid lg:grid-cols-3 gap-8 mb-16 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {[
              {
                icon: "🎯",
                title: "Tailored Solutions",
                description:
                  "Custom pricing based on your specific requirements and business goals",
              },
              {
                icon: "💎",
                title: "No Hidden Costs",
                description:
                  "Transparent quotes with all features and pricing outlined upfront",
              },
              {
                icon: "🔄",
                title: "Flexible Options",
                description:
                  "Choose from various packages and customize features to fit your budget",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-base-200 rounded-2xl border border-base-300 transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-base-content mb-2">
                  {item.title}
                </h3>
                <p className="text-base-content/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Plans Section */}
        <div
          className={`transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <PricingPlans />
        </div>

        {/* FAQ Section */}
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-base-content mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
              Get answers to common questions about our pricing and process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does it take to build a website?",
                answer:
                  "Most projects take 2-3 weeks from start to finish, depending on complexity and client feedback speed.",
              },
              {
                question: "Do you offer ongoing maintenance?",
                answer:
                  "Yes! We offer monthly maintenance plans that include updates, security monitoring, and technical support.",
              },
              {
                question: "Can I update the website myself?",
                answer:
                  "Absolutely! We can build your site with a content management system so you can easily make updates.",
              },
              {
                question: "What's included in the custom quote?",
                answer:
                  "Your quote includes design, development, responsive optimization, basic SEO, and 1 month of support.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-base-200 rounded-2xl p-6 border border-base-300 transform hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-base-content mb-3">
                  {faq.question}
                </h3>
                <p className="text-base-content/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div
          className={`bg-gradient-to-r from-base-200 to-base-300 transition-all duration-700 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-base-content mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-base-content/80 mb-8 max-w-2xl mx-auto">
                Lets discuss your project and create a custom solution that fits
                your needs and budget perfectly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={"/contact-us"}
                  className="btn btn-primary btn-lg px-8 text-lg font-semibold hover-glow transform hover:scale-105 transition-all duration-300"
                >
                  Get Your Custom Quote
                </a>
                <a
                  href="/portfolio"
                  className="btn btn-outline btn-primary btn-lg px-8 text-lg font-semibold hover:bg-primary hover:text-primary-content transition-all duration-300"
                >
                  View Our Work
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-base-content/60">
                <div className="flex items-center gap-2">
                  <span>⭐</span>
                  <span>50+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🚀</span>
                  <span>Fast Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>💬</span>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
