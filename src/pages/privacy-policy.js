import { useEffect, useRef, useState } from "react";
import InnerPageContainer from "@/components/common/InnerPageContainer";
import PageMetaTags from "@/containers/PageMetaTags";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [sectionVisibility, setSectionVisibility] = useState(
    new Array(8).fill(false)
  );
  const sectionRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger section animations
          const sections = Array.from({ length: 8 }, (_, i) => i);
          sections.forEach((_, index) => {
            setTimeout(() => {
              setSectionVisibility((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) sectionObserver.unobserve(sectionRef.current);
    };
  }, []);

  const privacySections = [
    {
      title: "1. Information We Collect",
      content:
        "We may collect personal information from you in a variety of ways, including:",
      items: [
        {
          title: "Personal Data",
          description:
            "While using our website or services, we may ask you to provide us with personally identifiable information, such as your name, email address, phone number, and payment details.",
        },
        {
          title: "Usage Data",
          description:
            "We may collect information that your browser sends whenever you visit our website. This data may include your IP address, browser type, pages visited, time spent on those pages, and other diagnostic data.",
        },
        {
          title: "Cookies and Tracking Technologies",
          description:
            "We may use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse cookies, but some features of our website may not function properly without them.",
        },
      ],
    },
    {
      title: "2. How We Use Your Information",
      content: "We may use the information we collect in the following ways:",
      items: [
        "To provide and maintain our website and services.",
        "To communicate with you regarding your inquiries, projects, and other requests.",
        "To process payments and manage subscriptions or transactions.",
        "To improve and personalize your experience on our website.",
        "To provide customer support.",
        "To notify you of changes to our services, policies, or website functionality.",
        "To protect against illegal activity, fraud, and unauthorized access.",
      ],
    },
    {
      title: "3. Disclosure of Your Information",
      content:
        "We will not share your personal information with third parties except as outlined below:",
      items: [
        {
          title: "Service Providers",
          description:
            "We may share your data with trusted third-party service providers who assist us in delivering our services (e.g., payment processors, hosting providers).",
        },
        {
          title: "Business Transfers",
          description:
            "In the event of a merger, acquisition, or sale of assets, we may transfer your personal information as part of the business assets.",
        },
        {
          title: "Legal Compliance",
          description:
            "We may disclose your information if required by law, court order, or government regulation.",
        },
      ],
    },
    {
      title: "4. Data Security",
      content:
        "We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure. However, no transmission of data over the internet is guaranteed to be completely secure. We cannot guarantee the absolute security of your data.",
    },
    {
      title: "5. Third-Party Websites",
      content:
        "Our website may contain links to third-party websites that we do not control. We are not responsible for the privacy practices or content of these external websites. We encourage you to review the privacy policies of any third-party websites you visit.",
    },
    {
      title: "6. Your Data Rights",
      content: "You have the right to:",
      items: [
        "Access, correct, or delete your personal information.",
        "Object to or restrict the processing of your personal data.",
        "Withdraw consent where the processing of your information is based on consent.",
      ],
      note: "To exercise any of these rights, please contact us at: pixelsseattle@gmail.com.",
    },
    {
      title: "7. Changes to This Privacy Policy",
      content:
        "We may update this Privacy Policy from time to time. We will notify you of any changes by updating the Effective Date at the top of this policy. We encourage you to review this page periodically for the latest information on our privacy practices.",
    },
    {
      title: "8. Contact Us",
      content:
        "If you have any questions or concerns about this Privacy Policy or how we handle your personal data, please contact us at:",
      contact: [
        { label: "Email", value: "pixelsseattle@gmail.com" },
        { label: "Phone", value: "(206) 670-6888" },
        { label: "Location", value: "Kent, WA" },
      ],
    },
  ];

  return (
    <>
      <PageMetaTags
        title="Privacy Policy - Seattle Pixels Web Design"
        description="Learn how Seattle Pixels protects your privacy and handles your personal information. Read our comprehensive privacy policy."
        url="/privacy-policy"
      />

      <div
        ref={sectionRef}
        className="min-h-screen bg-base-100 transition-colors duration-500"
      >
        {/* Header Section */}
        <div
          className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
            <div className="mt-6 bg-base-200 rounded-2xl p-6 border border-base-300 max-w-4xl mx-auto">
              <p className="text-lg text-base-content/80 mb-4">
                Your privacy is important to us. This policy explains how we
                collect, use, and protect your information.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-base-content/60 text-sm">
                <div className="flex items-center gap-2">
                  <span>📅</span>
                  <span>Effective Date: December 18, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🔒</span>
                  <span>Last Updated: December 18, 2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div
            className={`bg-base-200 rounded-2xl p-6 lg:p-8 border border-base-300 mb-12 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg text-base-content/80 leading-relaxed">
              Seattle Pixels is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website,
              www.SeattlePixels.com, or use our services. Please read this
              policy carefully to understand our views and practices regarding
              your personal data and how we treat it.
            </p>
          </div>

          {/* Privacy Policy Sections */}
          <div className="space-y-12 mb-20">
            {privacySections.map((section, index) => (
              <section
                key={index}
                ref={(el) => (sectionRefs.current[index] = el)}
                className={`transform transition-all duration-700 ease-out ${
                  sectionVisibility[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: sectionVisibility[index]
                    ? `${index * 200}ms`
                    : "0ms",
                }}
              >
                <div className="bg-base-100 rounded-2xl p-6 lg:p-8 shadow-xl border border-base-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  {/* Section Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-base-content">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  {/* Section Content */}
                  <div className="space-y-6">
                    <p className="text-lg text-base-content/80 leading-relaxed">
                      {section.content}
                    </p>

                    {/* Items List */}
                    {section.items && (
                      <div className="space-y-4">
                        {section.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-start space-x-4 p-4 bg-base-200 rounded-xl border border-base-300 transform hover:scale-105 transition-all duration-300"
                            style={{ transitionDelay: `${itemIndex * 100}ms` }}
                          >
                            <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-sm font-bold mt-1 flex-shrink-0">
                              ✓
                            </div>
                            <div>
                              {typeof item === "string" ? (
                                <p className="text-base-content/80">{item}</p>
                              ) : (
                                <>
                                  <h4 className="font-semibold text-base-content mb-1">
                                    {item.title}
                                  </h4>
                                  <p className="text-base-content/80">
                                    {item.description}
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Contact Information */}
                    {section.contact && (
                      <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                        <div className="space-y-3">
                          {section.contact.map((contact, contactIndex) => (
                            <div
                              key={contactIndex}
                              className="flex items-center justify-between"
                            >
                              <span className="font-semibold text-base-content">
                                {contact.label}:
                              </span>
                              <span className="text-base-content/80">
                                {contact.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Note */}
                    {section.note && (
                      <div className="bg-base-200 rounded-xl p-4 border-l-4 border-primary">
                        <p className="text-base-content/80 italic">
                          {section.note}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className={`text-center transition-all duration-700 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gradient-to-r from-base-200 to-base-300 rounded-2xl p-8 border border-base-300">
              <h3 className="text-2xl lg:text-3xl font-bold text-base-content mb-4">
                Questions About Your Privacy?
              </h3>
              <p className="text-base-content/70 text-lg mb-6 max-w-2xl mx-auto">
                We are here to help you understand how we protect your
                information and respect your privacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:pixelsseattle@gmail.com"
                  className="btn btn-primary btn-lg px-8 text-lg font-semibold hover-glow transform hover:scale-105 transition-all duration-300"
                >
                  Contact Our Privacy Team
                </a>
                <a
                  href={"/contact-us"}
                  className="btn btn-outline btn-primary btn-lg px-8 text-lg font-semibold hover:bg-primary hover:text-primary-content transition-all duration-300"
                >
                  General Inquiries
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
