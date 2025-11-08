import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function Footer() {
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

  const socialLinks = [
    {
      name: "Twitter",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="fill-current"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
        </svg>
      ),
      url: "#",
    },
    {
      name: "Instagram",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="fill-current"
        >
          <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96z" />
        </svg>
      ),
      url: "#",
    },
    {
      name: "YouTube",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="fill-current"
        >
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      ),
      url: "#",
    },
    {
      name: "Facebook",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="fill-current"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
        </svg>
      ),
      url: "#",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="fill-current"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      url: "#",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="bg-base-100 transition-colors duration-500"
    >
      {/* Main Footer Content */}
      <div
        className={`transform transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="transform transition-all duration-500 hover:scale-105">
                <img
                  className="w-64 max-w-full mb-6"
                  src="SecondLogo.png"
                  alt="Seattle Pixels - Web Design Agency"
                />
              </div>
              <p className="text-base-content/80 mb-6 leading-relaxed">
                Creating stunning, responsive websites that drive results for
                small businesses across the United States.
              </p>

              {/* Newsletter Signup */}
              <div className="bg-base-200 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-base-content mb-2">
                  Stay Updated
                </h4>
                <div className="join w-full">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="input input-bordered join-item flex-1 text-sm"
                  />
                  <button className="btn btn-primary join-item text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Information Links */}
            <div className="transform transition-all duration-500 delay-200">
              <h3 className="footer-title text-lg font-bold text-base-content">
                Information
              </h3>
              <div className="space-y-3 mt-4">
                <Link
                  href="/about-us"
                  className="link link-hover text-base-content/80 hover:text-primary transition-colors duration-300 block py-1"
                >
                  About Us
                </Link>
                {/* <Link
                  href="/whatweoffer"
                  className="link link-hover text-base-content/80 hover:text-primary transition-colors duration-300 block py-1"
                >
                  Our Services
                </Link> */}
                {/* <Link
                  href="/portfolio"
                  className="link link-hover text-base-content/80 hover:text-primary transition-colors duration-300 block py-1"
                >
                  Portfolio
                </Link> */}
                <Link
                  href="/faqs"
                  className="link link-hover text-base-content/80 hover:text-primary transition-colors duration-300 block py-1"
                >
                  FAQs
                </Link>
              </div>
            </div>

            {/* Legal Links */}
            <div className="transform transition-all duration-500 delay-300">
              <h3 className="footer-title text-lg font-bold text-base-content">
                Legal
              </h3>
              <div className="space-y-3 mt-4">
                <Link
                  href="/privacy-policy"
                  className="link link-hover text-base-content/80 hover:text-primary transition-colors duration-300 block py-1"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-and-conditions"
                  className="link link-hover text-base-content/80 hover:text-primary transition-colors duration-300 block py-1"
                >
                  Terms & Conditions
                </Link>
                {/* <Link
                  href="/cookie-policy"
                  className="link link-hover text-base-content/80 hover:text-primary transition-colors duration-300 block py-1"
                >
                  Cookie Policy
                </Link> */}
                {/* <Link
                  href="/sitemap"
                  className="link link-hover text-base-content/80 hover:text-primary transition-colors duration-300 block py-1"
                >
                  Sitemap
                </Link> */}
              </div>
            </div>

            {/* Contact & Social */}
            <div className="transform transition-all duration-500 delay-400">
              <h3 className="footer-title text-lg font-bold text-base-content">
                Contact Info
              </h3>
              <div className="space-y-3 mt-4">
                <div className="flex items-center space-x-3 text-base-content/80 group cursor-pointer">
                  <span className="text-primary group-hover:scale-110 transition-transform duration-300">
                    📞
                  </span>
                  <span className="group-hover:text-primary transition-colors duration-300">
                    (206) 670-6888
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-base-content/80 group cursor-pointer">
                  <span className="text-primary group-hover:scale-110 transition-transform duration-300">
                    ✉️
                  </span>
                  <span className="group-hover:text-primary transition-colors duration-300">
                    pixelsseattle@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-base-content/80 group cursor-pointer">
                  <span className="text-primary group-hover:scale-110 transition-transform duration-300">
                    📍
                  </span>
                  <span className="group-hover:text-primary transition-colors duration-300">
                    Seattle, Washington, USA
                  </span>
                </div>

                {/* Social Links */}
                <div className="mt-6">
                  <h4 className="font-semibold text-base-content mb-4">
                    Follow Us
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <Link
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 bg-base-200 p-3 rounded-lg hover:bg-primary hover:text-primary-content group`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                        aria-label={social.name}
                      >
                        {social.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`bg-gradient-to-r from-primary to-secondary transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-content text-center md:text-left">
              <p className="text-lg font-semibold">
                © {new Date().getFullYear()} Seattle Pixels. All rights
                reserved.
              </p>
            </div>

            {/* Additional Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-primary-content/90">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors duration-300 text-sm"
              >
                Privacy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="hover:text-white transition-colors duration-300 text-sm"
              >
                Terms
              </Link>
              {/* <Link
                href="/sitemap"
                className="hover:text-white transition-colors duration-300 text-sm"
              >
                Sitemap
              </Link> */}
              <div className="flex items-center space-x-2 text-sm">
                <span>Made with</span>
                <span className="text-red-400 animate-pulse">❤️</span>
                <span>in Seattle</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-32 right-6 btn btn-primary btn-circle shadow-2xl hover-glow transform hover:scale-110 transition-all duration-300 z-40"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  );
}

export default Footer;
