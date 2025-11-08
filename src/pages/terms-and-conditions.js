import { useEffect, useRef, useState } from "react";
import InnerPageContainer from "@/components/common/InnerPageContainer";
import PageMetaTags from "@/containers/PageMetaTags";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [sectionVisibility, setSectionVisibility] = useState(
    new Array(17).fill(false)
  );
  const sectionRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger section animations
          const sections = Array.from({ length: 17 }, (_, i) => i);
          sections.forEach((_, index) => {
            setTimeout(() => {
              setSectionVisibility((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 100);
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

  const termsSections = [
    {
      title: "1. Definitions",
      content:
        "Clear understanding of key terms used throughout this agreement.",
      items: [
        {
          title: "Client",
          description:
            "Refers to the individual or company using our services.",
        },
        {
          title: "Company",
          description:
            "Refers to Seattle Pixels, the web design and development agency.",
        },
        {
          title: "Services",
          description:
            "Refers to all services provided by Seattle Pixels, including but not limited to web design, development, SEO, and maintenance.",
        },
      ],
    },
    {
      title: "2. Acceptance of Terms",
      content:
        "By engaging Seattle Pixels for services, the Client agrees to these Terms and Conditions. These Terms may be updated periodically, and continued use of our services implies acceptance of any revisions.",
    },
    {
      title: "3. Services",
      content:
        "Seattle Pixels provides website design, development, hosting, and ongoing maintenance as outlined in the project proposal or service agreement. Specific services, timelines, and fees will be agreed upon prior to the start of any project.",
    },
    {
      title: "4. Project Scope",
      content:
        "The scope of the project will be defined in the proposal provided to the Client before the commencement of work. Any changes to the project scope after signing the agreement may result in additional fees and an updated timeline.",
    },
    {
      title: "5. Client Responsibilities",
      items: [
        "The Client agrees to provide all necessary content, information, and materials required to complete the project on time.",
        "The Client is responsible for ensuring the accuracy and legality of all content provided to Seattle Pixels.",
        "Any delays in providing required materials may result in project delays and possible additional fees.",
      ],
    },
    {
      title: "6. Payment Terms",
      items: [
        "Payment schedules will be outlined in the project proposal or service agreement.",
        "All invoices are due upon receipt unless otherwise specified.",
        "Late payments may result in project delays or suspension of services.",
      ],
    },
    {
      title: "7. Cancellation Policy",
      items: [
        "The Client may cancel the project at any time. However, any work completed up to the cancellation date will be billed accordingly.",
        "If cancellation occurs after the deposit is paid but before work has begun, the deposit may be refunded at the discretion of Seattle Pixels.",
      ],
    },
    {
      title: "8. Ownership and Intellectual Property",
      items: [
        "Upon receipt of final payment, all website design, code, and related materials created by Seattle Pixels for the Client will be transferred to the Client's ownership.",
        "Seattle Pixels retains the right to showcase completed work in its portfolio or marketing materials unless otherwise agreed upon.",
      ],
    },
    {
      title: "9. Hosting and Maintenance",
      items: [
        "Seattle Pixels offers optional hosting and maintenance services for a recurring fee. If the Client chooses to host their website elsewhere, they will be responsible for managing hosting and domain services.",
        "Maintenance packages include updates, bug fixes, and minor changes. Significant redesigns or changes outside the scope of maintenance will incur additional charges.",
      ],
    },
    {
      title: "10. Third-Party Services",
      items: [
        "Seattle Pixels may integrate third-party services such as payment gateways, plugins, or APIs into the Client's website. While we make every effort to ensure the reliability of these services, Seattle Pixels is not responsible for any issues caused by third-party providers.",
      ],
    },
    {
      title: "11. Warranty and Limitation of Liability",
      items: [
        "Seattle Pixels provides a 30-day warranty on all websites for bug fixes and technical support after launch.",
        "Seattle Pixels is not liable for any damages resulting from the use of the website, including but not limited to loss of revenue, downtime, or data breaches.",
        "In no event shall Seattle Pixels's liability exceed the amount paid by the Client for the services rendered.",
      ],
    },
    {
      title: "12. Confidentiality",
      items: [
        "Both parties agree to keep any proprietary or confidential information shared during the course of the project confidential. This obligation remains in effect even after the project is completed.",
      ],
    },
    {
      title: "13. Termination",
      items: [
        "Seattle Pixels reserves the right to terminate the service agreement at any time if the Client fails to meet its obligations, including non-payment or inappropriate conduct. In the event of termination, all fees for completed work will remain due.",
      ],
    },
    {
      title: "14. Dispute Resolution",
      items: [
        "In the event of a dispute, the parties agree to first attempt to resolve the matter through negotiation. If unsuccessful, disputes will be resolved through arbitration or the court system in the jurisdiction of Seattle, WA.",
      ],
    },
    {
      title: "15. Governing Law",
      items: [
        "These Terms and Conditions are governed by and construed in accordance with the laws of Washington State, without regard to its conflict of law provisions.",
      ],
    },
    {
      title: "16. Modifications to Terms",
      items: [
        "Seattle Pixels reserves the right to modify these Terms at any time. Clients will be notified of any changes, and continued use of our services after modifications implies acceptance of the revised Terms.",
      ],
    },
    {
      title: "17. Contact Us",
      content:
        "If you have any questions or concerns regarding these Terms, please contact us at:",
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
        title="Terms and Conditions - Seattle Pixels Web Design"
        description="Read the terms and conditions for Seattle Pixels web design services. Understand our policies, client responsibilities, and service agreements."
        url="/terms-and-conditions"
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
              Terms and Conditions
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
            <div className="mt-6 bg-base-200 rounded-2xl p-6 border border-base-300 max-w-4xl mx-auto">
              <p className="text-lg text-base-content/80 mb-4">
                Please read these terms carefully before using our services.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-base-content/60 text-sm">
                <div className="flex items-center gap-2">
                  <span>📅</span>
                  <span>Last Updated: January 1, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>⚖️</span>
                  <span>Legal Agreement</span>
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
              Welcome to Seattle Pixels. By using our services, you agree to be
              bound by the following terms and conditions. Please read them
              carefully before engaging our services.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8 mb-20">
            {termsSections.map((section, index) => (
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
                    ? `${index * 100}ms`
                    : "0ms",
                }}
              >
                <div className="bg-base-100 rounded-2xl p-6 lg:p-8 shadow-xl border border-base-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  {/* Section Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl lg:text-3xl font-bold text-base-content">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  {/* Section Content */}
                  <div className="space-y-6">
                    {section.content && (
                      <p className="text-lg text-base-content/80 leading-relaxed">
                        {section.content}
                      </p>
                    )}

                    {/* Items List */}
                    {section.items && (
                      <div className="space-y-4">
                        {section.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-start space-x-4 p-4 bg-base-200 rounded-xl border border-base-300 transform hover:scale-105 transition-all duration-300"
                            style={{ transitionDelay: `${itemIndex * 50}ms` }}
                          >
                            <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-sm font-bold mt-1 flex-shrink-0">
                              •
                            </div>
                            <div className="flex-1">
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
                  </div>
                </div>
              </section>
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
            <div className="bg-gradient-to-r from-base-200 to-base-300 rounded-2xl p-8 border border-base-300">
              <h3 className="text-2xl lg:text-3xl font-bold text-base-content mb-4">
                Questions About Our Terms?
              </h3>
              <p className="text-base-content/70 text-lg mb-6 max-w-2xl mx-auto">
                We're here to help clarify any part of our terms and conditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:pixelsseattle@gmail.com"
                  className="btn btn-primary btn-lg px-8 text-lg font-semibold hover-glow transform hover:scale-105 transition-all duration-300"
                >
                  Contact Us
                </a>
                <a
                  href={"/contact-us"}
                  className="btn btn-outline btn-primary btn-lg px-8 text-lg font-semibold hover:bg-primary hover:text-primary-content transition-all duration-300"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
