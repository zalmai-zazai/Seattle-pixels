import { useEffect, useRef, useState } from "react";
import InnerPageContainer from "@/components/common/InnerPageContainer";
import PageMetaTags from "@/containers/PageMetaTags";

const faqsData = [
  {
    question: "What services does Seattle Pixels offer?",
    answer:
      "We offer comprehensive web design and development services, including custom website design, eCommerce development, hosting, ongoing maintenance, and SEO optimization. Our goal is to create websites that not only look great but also serve your business needs effectively.",
    category: "services",
    icon: "🎨",
  },
  {
    question: "How much does it cost to build a website?",
    answer:
      "The cost of a website depends on several factors such as the type of site, the number of pages, and specific features or customizations. We offer flexible pricing plans, including lump-sum payment options or monthly plans starting as low as $175/month. For a detailed quote, please contact us for a consultation.",
    category: "pricing",
    icon: "💰",
  },
  {
    question: "Do you offer ongoing website maintenance and updates?",
    answer:
      "Yes, we offer lifetime updates and 24/7 support with our packages. Additionally, we have an optional $50/month plan for unlimited edits and updates, ensuring your website stays fresh and functional as your business evolves.",
    category: "support",
    icon: "🔧",
  },
  {
    question: "What platforms do you build websites on?",
    answer:
      "We specialize in custom-built websites using modern technologies like React, Next.js, and Shopify for eCommerce. Our websites are fully responsive, fast, and scalable to grow with your business.",
    category: "technology",
    icon: "⚡",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "On average, the website design and development process takes 2-3 weeks, depending on the complexity of your project. We'll work closely with you throughout the process to ensure that deadlines are met.",
    category: "process",
    icon: "⏱️",
  },
  {
    question: "Can I make changes to the website after it's built?",
    answer:
      "Absolutely! Our websites are built with user-friendly content management systems (CMS) like Shopify, so you can easily update your content. We also offer a plan for unlimited edits, or we can manage updates for you.",
    category: "support",
    icon: "✏️",
  },
  {
    question: "Do you provide SEO services?",
    answer:
      "Yes, we include basic SEO services with all our web development projects, ensuring that your site is optimized for search engines from the start. We also offer advanced SEO packages for ongoing search engine optimization.",
    category: "services",
    icon: "🔍",
  },
  {
    question: "Do you offer eCommerce website development?",
    answer:
      "Yes, we specialize in building custom eCommerce websites. We can create a fully functional online store, integrate secure payment gateways, configure shipping options, and provide a Shopify walkthrough to help you manage your store with ease.",
    category: "services",
    icon: "🛒",
  },
  {
    question: "What support do you offer after the website is launched?",
    answer:
      "We provide 24/7 support to all our clients. Whether you need technical assistance, updates, or troubleshooting, we are here to help. Our goal is to ensure that your website continues to run smoothly after launch.",
    category: "support",
    icon: "💬",
  },
  {
    question: "Can I host my website with Seattle Pixels?",
    answer:
      "Yes! We offer reliable hosting services for $25/month, ensuring that your website remains fast and secure. We also manage the hosting process, so you can focus on running your business.",
    category: "hosting",
    icon: "🌐",
  },
  {
    question: "How do I get started with Seattle Pixels?",
    answer:
      "Getting started is easy! Simply contact us via our website or email. We'll schedule a consultation to discuss your business needs, provide a custom quote, and guide you through the next steps to bring your website vision to life.",
    category: "process",
    icon: "🚀",
  },
];

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [openItems, setOpenItems] = useState({});
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

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const categories = [
    { id: "all", name: "All Questions", icon: "❓", count: faqsData.length },
    {
      id: "services",
      name: "Services",
      icon: "🎨",
      count: faqsData.filter((f) => f.category === "services").length,
    },
    {
      id: "pricing",
      name: "Pricing",
      icon: "💰",
      count: faqsData.filter((f) => f.category === "pricing").length,
    },
    {
      id: "support",
      name: "Support",
      icon: "🔧",
      count: faqsData.filter((f) => f.category === "support").length,
    },
    {
      id: "technology",
      name: "Technology",
      icon: "⚡",
      count: faqsData.filter((f) => f.category === "technology").length,
    },
    {
      id: "process",
      name: "Process",
      icon: "⏱️",
      count: faqsData.filter((f) => f.category === "process").length,
    },
    {
      id: "hosting",
      name: "Hosting",
      icon: "🌐",
      count: faqsData.filter((f) => f.category === "hosting").length,
    },
  ];

  const filteredFaqs =
    activeCategory === "all"
      ? faqsData
      : faqsData.filter((faq) => faq.category === activeCategory);

  return (
    <>
      <PageMetaTags
        title="Frequently Asked Questions - Seattle Pixels"
        description="Find answers to common questions about web design, pricing, support, and our development process at Seattle Pixels."
        url="/faqs"
      />

      <div
        ref={sectionRef}
        className="min-h-screen bg-base-100 transition-colors duration-500"
      >
        {/* Header Section */}
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
            <p className="mt-6 text-lg lg:text-xl text-base-content/80 max-w-3xl mx-auto">
              Find answers to common questions about our web design services,
              pricing, and process. Cant find what you are looking for? Contact
              us directly!
            </p>
          </div>

          {/* Category Filters */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`btn gap-2 transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? "btn-primary"
                    : "btn-outline btn-primary"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
                <span className="badge badge-sm">{category.count}</span>
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-6 mb-20">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`bg-base-100 rounded-2xl shadow-xl border border-base-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${
                    openItems[index] ? "ring-2 ring-primary/20" : ""
                  }`}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full text-left p-6 lg:p-8 focus:outline-none"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center text-white text-lg mt-1 flex-shrink-0">
                          {faq.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg lg:text-xl font-bold text-base-content pr-4">
                            {faq.question}
                          </h3>
                        </div>
                      </div>
                      <div
                        className={`transform transition-transform duration-300 ${
                          openItems[index] ? "rotate-180" : ""
                        }`}
                      >
                        <svg
                          className="w-6 h-6 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      openItems[index]
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                      <div className="border-t border-base-300 pt-6">
                        <p className="text-base-content/80 text-lg leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className={`text-center transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gradient-to-r from-base-200 to-base-300 rounded-2xl p-8 lg:p-12 border border-base-300">
              <h2 className="text-2xl lg:text-4xl font-bold text-base-content mb-6">
                Still Have Questions?
              </h2>
              <p className="text-lg text-base-content/80 mb-8 max-w-2xl mx-auto">
                We are here to help! Contact us directly and we well get back to
                you with personalized answers to your specific questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={"/contact-us"}
                  className="btn btn-primary btn-lg px-8 text-lg font-semibold hover-glow transform hover:scale-105 transition-all duration-300"
                >
                  Contact Us Now
                </a>
                <a
                  href="tel:2066706888"
                  className="btn btn-outline btn-primary btn-lg px-8 text-lg font-semibold hover:bg-primary hover:text-primary-content transition-all duration-300"
                >
                  Call: (206) 670-6888
                </a>
              </div>

              {/* Quick Contact Info */}
              <div className="flex flex-wrap justify-center items-center gap-8 mt-8 text-base-content/60">
                <div className="flex items-center gap-2">
                  <span>✉️</span>
                  <span>pixelsseattle@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>💬</span>
                  <span>24/7 Support Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>⚡</span>
                  <span>Fast Response Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
