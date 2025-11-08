import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const projectsData = [
  {
    title: "Food Delivery App",
    description:
      "We built a Food Delivery App for a restaurant using the MERN stack (MongoDB, Express, React, and Node.js). The app provides a seamless experience for customers to browse the menu, place orders, and track deliveries, enhancing the restaurant's overall service efficiency.",
    img: "delivery.png",
    link: "https://food-del-smoky-beta.vercel.app/",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    category: "Web Application",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Sudsy Car Wash",
    description:
      "We designed and developed a sleek, modern website for Sudsy Car Wash, focusing on user-friendly navigation and seamless booking functionality. The design reflects the quality of their services and is fully responsive, ensuring customers can easily access it from any device.",
    img: "sudsy.png",
    link: "https://sudsaycarwash.netlify.app/",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    category: "Business Website",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Blog Website",
    description:
      "We developed a feature-rich blog website with a robust backend connected to MongoDB. The website offers user authentication via GitHub and an integrated user management system through Firebase Auth, allowing users to securely sign in and interact with the platform.",
    img: "Blog.png",
    link: "https://next14-starter-one-kappa.vercel.app/",
    technologies: ["Next.js", "Firebase", "MongoDB", "Auth"],
    category: "Full Stack",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    title: "My Food Restaurant",
    description:
      "We crafted a clean, visually appealing website for My Food Restaurant, designed to showcase their menu and services. The site offers smooth navigation, allowing customers to explore dishes and place orders effortlessly across all devices.",
    img: "resturant.png",
    link: "https://myfoodresturant.netlify.app/",
    technologies: ["React", "CSS3", "Responsive", "UI/UX"],
    category: "Restaurant Website",
    gradient: "from-green-500 to-emerald-500",
  },
];

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [projectVisibility, setProjectVisibility] = useState(
    new Array(projectsData.length).fill(false)
  );
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger project animations
          projectsData.forEach((_, index) => {
            setTimeout(() => {
              setProjectVisibility((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 300);
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
            Our Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-lg lg:text-xl text-base-content/80 max-w-3xl mx-auto">
            Explore our latest projects and see how weve helped businesses
            transform their online presence with custom web solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16 lg:space-y-24">
          {projectsData.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`group transform transition-all duration-1000 ease-out ${
                projectVisibility[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: projectVisibility[index]
                  ? `${index * 200}ms`
                  : "0ms",
              }}
            >
              {/* Background Glow Effect */}
              <div
                className={`absolute -inset-4 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500`}
              ></div>

              <div
                className={`relative card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="hero-content flex-col lg:flex-row p-6 lg:p-8 max-w-none">
                  {/* Image Section */}
                  <div
                    className={`relative flex-1 transform transition-all duration-700 ${
                      projectVisibility[index]
                        ? "scale-100 opacity-100"
                        : "scale-95 opacity-0"
                    }`}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                      <img
                        alt={project.title}
                        src={project.img}
                        className="w-full h-64 lg:h-80 object-cover transform group-hover:scale-105 transition duration-700"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-base-100/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <span className="badge badge-lg badge-primary text-primary-content font-semibold px-4 py-2">
                          Live Preview
                        </span>
                      </div>
                    </div>

                    {/* Floating Technologies */}
                    <div className="flex flex-wrap gap-2 mt-4 justify-center">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="badge badge-outline badge-sm transform group-hover:scale-105 transition-all duration-300"
                          style={{ transitionDelay: `${techIndex * 100}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div
                    className={`flex-1 text-center lg:text-left lg:pl-8 lg:pr-8 transition-all duration-700 ${
                      projectVisibility[index]
                        ? "translate-x-0 opacity-100"
                        : index % 2 === 0
                        ? "translate-x-10 opacity-0"
                        : "-translate-x-10 opacity-0"
                    }`}
                  >
                    {/* Category Badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-base-200 text-base-content/70 text-sm font-medium mb-4">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {project.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-base-content mb-4 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base-content/80 leading-relaxed mb-6 text-lg">
                      {project.description}
                    </p>

                    {/* CTA Button */}
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <button className="btn btn-primary btn-lg px-8 font-semibold hover-glow transform hover:scale-105 transition-all duration-300 group/btn">
                        <span>View Live Project</span>
                        <svg
                          className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </button>
                    </Link>

                    {/* View Counter (Simulated) */}
                    {/* <div className="flex items-center justify-center lg:justify-start gap-2 mt-4 text-base-content/60 text-sm">
                      <span>👁️</span>
                      <span>{Math.floor(Math.random() * 500) + 200} views</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-base-200 to-base-300 rounded-2xl p-8 border border-base-300 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-base-content mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-base-content/70 text-lg mb-6 max-w-2xl mx-auto">
              Lets create something amazing together. Your project could be
              featured here next!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact-us">
                <button className="btn btn-primary btn-lg px-8 text-lg font-semibold hover-glow transform hover:scale-105 transition-all duration-300">
                  Start Your Project
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="btn btn-outline btn-primary btn-lg px-8 text-lg font-semibold hover:bg-primary hover:text-primary-content transition-all duration-300">
                  View More Work
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
