import { useEffect, useRef, useState } from "react";

function Design() {
  const [isVisible, setIsVisible] = useState(false);
  const [sectionVisibility, setSectionVisibility] = useState(
    new Array(5).fill(false)
  );
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            const index = entry.target.getAttribute("data-index");
            setSectionVisibility((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.setAttribute("data-index", index);
        observer.observe(ref);
      }
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const blogSections = [
    {
      title: "Why Every Small Business Needs a Website in 2025",
      content:
        "In today's digital age, having an online presence is more critical than ever. Whether you own a local coffee shop or a landscaping business, your website serves as the face of your business in the online world. At Seattle Pixels, we specialize in creating websites that drive business growth. In this blog, we'll explore the importance of having a website and how it can help your business stay competitive in 2025 and beyond.",
      image:
        "https://www.pngplay.com/wp-content/uploads/5/Web-Design-Icon-PNG.png",
      imageFirst: false,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Build Trust with Your Customers",
      content:
        "In a world where people expect to find everything online, having a well-designed, professional website is a must for building credibility. Customers are likely to research a company online before making a purchase or visiting a store. If they can't find your website, they might question the legitimacy of your business.",
      tip: "Your website should include key information such as your services, testimonials, contact details, and a clear call to action.",
      image:
        "https://png.pngtree.com/png-clipart/20230801/original/pngtree-building-trust-blue-gradient-concept-icon-picture-image_7797218.png",
      imageFirst: true,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Showcase Your Products or Services",
      content:
        "A website provides the perfect platform to showcase what your business offers. With visually appealing designs, professional photos, and detailed descriptions, you can effectively communicate the value of your products or services.",
      highlight:
        "At Seattle Pixels, we use stunning design and user-friendly layouts to make sure your products and services stand out.",
      image:
        "https://onlinepngtools.com/images/pages/png/transparent-png-tools/main.png",
      imageFirst: false,
      gradient: "from-orange-500 to-amber-500",
    },
    {
      title: "Reach a Larger Audience",
      content:
        "Unlike a physical storefront, your website is accessible 24/7. This means potential customers can learn about your business even after hours. With effective search engine optimization (SEO), your site can reach people who are actively searching for the services you offer, helping you expand your customer base beyond your local area.",
      image:
        "https://png.pngtree.com/png-clipart/20230814/original/pngtree-womam-protest-female-demonstration-protester-picture-image_7942870.png",
      imageFirst: true,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Compete with Larger Companies",
      content:
        "A well-designed website levels the playing field between small businesses and larger companies. Even if your business is small, a professional website gives you the chance to present yourself as a leader in your industry.",
      tip: "Using digital marketing strategies like paid ads or social media integration can drive traffic to your site and help you compete in a crowded market.",
      image:
        "https://png.pngtree.com/png-vector/20230912/ourmid/pngtree-business-growth-concept-businessman-create-a-positive-graph-png-image_10027869.png",
      imageFirst: false,
      gradient: "from-red-500 to-rose-500",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100 py-12 lg:py-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blog Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Small Business Web Design Guide
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-lg lg:text-xl text-base-content/80 max-w-3xl mx-auto">
            Essential insights for small businesses looking to establish a
            powerful online presence in 2025
          </p>

          {/* Blog Meta Info */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-base-content/60">
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span>⏱️</span>
              <span>5 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🏷️</span>
              <span>Web Design, Small Business</span>
            </div>
          </div>
        </div>

        {/* Blog Sections */}
        <div className="space-y-16 lg:space-y-24">
          {blogSections.map((section, index) => (
            <section
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className={`transform transition-all duration-1000 ease-out ${
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
              {/* Background Glow */}
              <div
                className={`absolute -inset-4 bg-gradient-to-r ${section.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500`}
              ></div>

              <div
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  section.imageFirst ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image Section */}
                <div
                  className={`transform transition-all duration-700 ${
                    sectionVisibility[index]
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-0"
                  }`}
                >
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-base-200 to-base-300 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    <img
                      src={section.image}
                      alt={section.title}
                      className="relative w-full h-64 lg:h-80 object-contain rounded-xl shadow-2xl transform group-hover:scale-105 transition duration-700"
                    />
                    {/* Image Decoration */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-pulse"></div>
                    <div
                      className="absolute -bottom-2 -left-2 w-4 h-4 bg-secondary rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`transform transition-all duration-700 ${
                    sectionVisibility[index]
                      ? "translate-x-0 opacity-100"
                      : section.imageFirst
                      ? "translate-x-10 opacity-0"
                      : "-translate-x-10 opacity-0"
                  }`}
                >
                  <div className="text-center lg:text-left">
                    {/* Section Number */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                      Section {index + 1}
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl lg:text-3xl font-bold text-base-content leading-tight mb-6 group-hover:text-primary transition-colors duration-300">
                      {section.title}
                    </h2>

                    {/* Content */}
                    <div className="space-y-4 text-base-content/80 text-lg leading-relaxed">
                      <p>{section.content}</p>

                      {/* Tip Box */}
                      {section.tip && (
                        <div className="bg-base-200 rounded-lg p-4 border-l-4 border-primary mt-4">
                          <div className="flex items-start space-x-3">
                            <span className="text-primary text-xl">💡</span>
                            <div>
                              <strong className="text-base-content">
                                Pro Tip:
                              </strong>
                              <p className="mt-1">{section.tip}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Highlight Box */}
                      {section.highlight && (
                        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4 border border-primary/20 mt-4">
                          <div className="flex items-start space-x-3">
                            <span className="text-primary text-xl">⭐</span>
                            <p className="text-base-content">
                              {section.highlight}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Section Indicator */}
                    <div className="flex items-center justify-center lg:justify-start gap-2 mt-6 text-base-content/60 text-sm">
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${section.gradient}`}
                      ></div>
                      <span>Essential for small business success</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Blog Conclusion CTA */}
        <div
          className={`text-center mt-20 transition-all duration-700 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-base-200 to-base-300 rounded-2xl p-8 lg:p-12 border border-base-300">
            <h2 className="text-2xl lg:text-4xl font-bold text-base-content mb-6">
              Ready to Build Your Professional Website?
            </h2>
            <p className="text-lg text-base-content/80 mb-8 max-w-2xl mx-auto">
              Let Seattle Pixels help you create a stunning, effective website
              that drives business growth and establishes your online presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={"/contact-us"}
                className="btn btn-primary btn-lg px-8 text-lg font-semibold hover-glow transform hover:scale-105 transition-all duration-300"
              >
                Start Your Project
              </a>
              <a
                href="/portfolio"
                className="btn btn-outline btn-primary btn-lg px-8 text-lg font-semibold hover:bg-primary hover:text-primary-content transition-all duration-300"
              >
                View Our Work
              </a>
            </div>

            {/* Share Section */}
            <div className="mt-8 pt-6 border-t border-base-300">
              <p className="text-base-content/60 mb-4">
                Found this helpful? Share it:
              </p>
              <div className="flex justify-center space-x-4">
                {["📱", "🐦", "💼", "🔗"].map((icon, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 bg-base-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-content transition-all duration-300 transform hover:scale-110"
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
