import { useEffect, useRef, useState } from "react";
import AppointmentForm from "@/components/account/AppointmentForm";
import AppointmentList from "@/components/account/AppointmentList";
import InnerPageContainer from "@/components/common/InnerPageContainer";
import OurProcess from "@/components/home/OurProcess";
import PageMetaTags from "@/containers/PageMetaTags";
import { addAppointment, sayHello } from "@/lib/action";
import Link from "next/link";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [sectionVisibility, setSectionVisibility] = useState({
    contact: false,
    form: false,
  });

  const sectionRef = useRef(null);
  const contactRef = useRef(null);
  const appointmentRef = useRef(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger animations
          setTimeout(
            () => setSectionVisibility((prev) => ({ ...prev, contact: true })),
            300
          );
          setTimeout(
            () => setSectionVisibility((prev) => ({ ...prev, form: true })),
            600
          );
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

  const contactInfo = [
    {
      icon: "📞",
      title: "Phone",
      content: "(206) 670-6888",
      description: "Call or text us directly",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "✉️",
      title: "Email",
      content: "pixelsseattle@gmail.com",
      description: "We respond within 24 hours",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "📍",
      title: "Service Area",
      content: "All states of USA",
      description: "Serving businesses nationwide",
      gradient: "from-orange-500 to-amber-500",
    },
  ];

  return (
    <>
      <PageMetaTags
        title="Contact Us - Seattle Pixels Web Design"
        description="Get in touch with Seattle Pixels for custom web design solutions. Call (206) 670-6888 or book a free consultation today."
        url="/contact-us"
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
              Contact Us
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
            <p className="mt-6 text-lg lg:text-xl text-base-content/80 max-w-2xl mx-auto">
              Ready to transform your online presence? Lets discuss your project
              and create something amazing together.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div
              ref={contactRef}
              className={`transform transition-all duration-700 ${
                sectionVisibility.contact
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 -translate-x-10 scale-95"
              }`}
            >
              <div className="bg-base-100 rounded-2xl p-6 lg:p-8 shadow-xl border border-base-300">
                <h2 className="text-2xl lg:text-3xl font-bold text-base-content mb-6">
                  Get In Touch
                </h2>

                <p className="text-lg text-base-content/80 mb-8 leading-relaxed">
                  Send us an email with all details about your website. We
                  usually respond immediately or within 24 hours. Lets start the
                  conversation about your next web project!
                </p>

                {/* Contact Info Cards */}
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="group transform transition-all duration-500 hover:scale-105"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="bg-base-200 rounded-xl p-6 border border-base-300 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center text-xl text-white transform group-hover:scale-110 transition-transform duration-300`}
                          >
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-base-content text-lg mb-1">
                              {item.title}
                            </h3>
                            <p className="text-base-content font-semibold text-lg mb-1">
                              {item.content}
                            </p>
                            <p className="text-base-content/70 text-sm">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="mt-8 p-4 bg-primary/10 rounded-xl border border-primary/20">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">💬</span>
                    <div>
                      <h4 className="font-semibold text-base-content">
                        Direct Communication
                      </h4>
                      <p className="text-base-content/70 text-sm">
                        You well always communicate directly with the developer
                        - no automated systems or middlemen.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-4 mt-6 text-base-content/60 text-sm">
                  <div className="flex items-center gap-2">
                    <span>⭐</span>
                    <span>50+ Happy Clients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🚀</span>
                    <span>Fast Response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>💎</span>
                    <span>Professional Service</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <div
              ref={appointmentRef}
              className={`transform transition-all duration-700 delay-300 ${
                sectionVisibility.form
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-10 scale-95"
              }`}
            >
              <div className="relative group">
                {/* Background Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative bg-base-100 rounded-2xl shadow-2xl border border-base-300 hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="p-6 lg:p-8">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl lg:text-3xl font-bold text-base-content mb-2">
                        Book a Free Consultation
                      </h2>
                      <p className="text-base-content/70">
                        Lets discuss your project and explore how we can help
                        your business grow online.
                      </p>
                    </div>

                    {/* Form Container */}
                    <div className="transform transition-all duration-500 group-hover:scale-105">
                      <AppointmentForm />
                    </div>

                    {/* Form Benefits */}
                    <div className="mt-6 space-y-3 text-sm text-base-content/70">
                      <div className="flex items-center space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>No obligation - free consultation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>Get a custom quote for your project</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>Professional advice tailored to your needs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div
            className={`text-center mt-16 transition-all duration-700 delay-900 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gradient-to-r from-base-200 to-base-300 rounded-2xl p-8 border border-base-300 max-w-4xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold text-base-content mb-4">
                Not Sure Where to Start?
              </h3>
              <p className="text-base-content/70 text-lg mb-6 max-w-2xl mx-auto">
                Check out our portfolio to see examples of our work, or read
                about our process to understand how we can help your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/portfolio">
                  <button className="btn btn-primary btn-lg px-8 text-lg font-semibold hover-glow transform hover:scale-105 transition-all duration-300">
                    View Our Portfolio
                  </button>
                </Link>
                <Link href="/about-us">
                  <button className="btn btn-outline btn-primary btn-lg px-8 text-lg font-semibold hover:bg-primary hover:text-primary-content transition-all duration-300">
                    Learn About Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
