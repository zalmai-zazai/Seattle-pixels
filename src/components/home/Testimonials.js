import { useEffect, useRef, useState } from "react";

const testimonialsData = [
  {
    text: "I was looking for a website that reflected the quality and professionalism of my car wash business, and they delivered exactly what I needed. The Seattle Pixels team created a sleek, modern design that not only looks great but also functions seamlessly. It was a smooth and collaborative process, and I am very happy with the results.",
    name: "Mushtak, Kent, USA",
    profilePic:
      "https://www.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg",
    role: "Car Wash Business Owner",
    rating: 5,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    text: "Seattle Pixels completely transformed my small business with their innovative approach. The design solutions they offered not only look amazing but are also highly effective in attracting customers. I'm thrilled with the results!",
    name: "Michael, USA",
    profilePic:
      "https://previews.123rf.com/images/metelsky/metelsky1904/metelsky190400021/121859823-male-avatar-icon-or-portrait-handsome-young-man-face-with-beard-vector-illustration.jpg",
    role: "Small Business Owner",
    rating: 5,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    text: "Seattle Pixels has taken my e-commerce website to the next level. Their modern techniques have improved user experience and conversion rates. The team Seattle Pixels is a game-changer in the web design industry",
    name: "Lisa, USA",
    profilePic:
      "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/1d52d65a-d57f-4b68-b9fe-d7741ff6656c/4c4421c7-822a-46b9-8016-7c057f326af3.png",
    role: "E-commerce Store Owner",
    rating: 5,
    gradient: "from-orange-500 to-amber-500",
  },
];

function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [cardVisibility, setCardVisibility] = useState(
    new Array(testimonialsData.length).fill(false)
  );
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

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

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className="text-yellow-400 text-lg">
        {i < rating ? "★" : "☆"}
      </span>
    ));
  };

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
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-lg lg:text-xl text-base-content/80 max-w-2xl mx-auto">
            Dont just take our word for it. Here ss what our clients have to say
            about their experience with Seattle Pixels.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
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
                className={`absolute -inset-4 bg-gradient-to-r ${testimonial.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500 group-hover:duration-200`}
              ></div>

              <div className="relative card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group-hover:-translate-y-2 h-full">
                <div className="card-body p-6 lg:p-8">
                  {/* Quote Icon */}
                  <div className="text-right mb-4">
                    <span className="text-4xl opacity-20 transform group-hover:scale-110 transition-transform duration-300">
                      {`"`}
                    </span>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex justify-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-base-content/80 text-center leading-relaxed italic mb-6 flex-grow">
                    {testimonial.text}
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center justify-center space-x-4 mt-auto">
                    <div className="relative">
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${testimonial.gradient} rounded-full blur opacity-0 group-hover:opacity-30 transition duration-300`}
                      ></div>
                      <img
                        className="relative w-14 h-14 rounded-full object-cover border-2 border-base-300 group-hover:border-primary/50 transition-colors duration-300"
                        src={testimonial.profilePic}
                        alt={testimonial.name}
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-base-content">
                        {testimonial.name}
                      </h4>
                      <p className="text-base-content/60 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className={`w-8 h-1 bg-gradient-to-r ${testimonial.gradient} rounded-full mx-auto`}
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
              Ready to Join Our Happy Clients?
            </h3>
            <p className="text-base-content/70 text-lg mb-6">
              Lets create your success story together.
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
                View Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div
          className={`flex flex-wrap justify-center items-center gap-8 mt-12 transition-all duration-700 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-sm text-base-content/70">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">100%</div>
            <div className="text-sm text-base-content/70">
              Satisfaction Rate
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">5.0</div>
            <div className="text-sm text-base-content/70">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
