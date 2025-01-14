import { useEffect, useRef } from "react";
import Link from "next/link";

const featuresData = [
  {
    title: "Food Delivery App",
    description:
      "We built a Food Delivery App for a restaurant using the MERN stack (MongoDB, Express, React, and Node.js). The app provides a seamless experience for customers to browse the menu, place orders, and track deliveries, enhancing the restaurant's overall service efficiency",
    img: "delivery.png",
    link: "https://food-del-smoky-beta.vercel.app/",
  },
  {
    title: "Sudsy Car Wash",
    description:
      "We designed and developed a sleek, modern website for Sudsy Car Wash, focusing on user-friendly navigation and seamless booking functionality. The design reflects the quality of their services and is fully responsive, ensuring customers can easily access it from any device. The result is a polished, high-performing website that enhances the customer experience for Sudsy Car Wash",
    img: "sudsy.png",
    link: "https://sudsaycarwash.netlify.app/",
  },
  {
    title: "Blog Website",
    description:
      "We developed a feature-rich blog website with a robust backend connected to MongoDB, ensuring efficient data storage and retrieval. The website offers user authentication via GitHub and an integrated user management system through Firebase Auth, allowing users to securely sign in, manage profiles, and interact with the platform. The admin section provides full control over content and users, enabling the addition and deletion of blog posts as well as user management features, such as adding or removing users. This system ensures secure and streamlined content creation while maintaining user authentication and authorization efficiently.",
    img: "Blog.png",
    link: "https://next14-starter-one-kappa.vercel.app/",
  },
  {
    title: "My Food Resturant",
    description:
      "We crafted a clean, visually appealing website for My Food Restaurant, designed to showcase their menu and services. The site offers smooth navigation, allowing customers to explore dishes and place orders effortlessly. With a modern design and mobile-friendly layout, it provides a seamless user experience across all devices, helping My Food Restaurant connect with customers efficiently.",
    img: "resturant.png",
    link: "https://myfoodresturant.netlify.app/",
  },
];

function Projects() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.2, // When 20% of the card is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "scale-100"); // Show the card with transition
          entry.target.classList.remove("opacity-0", "scale-90"); // Remove hidden and scale-down classes
        } else {
          entry.target.classList.add("opacity-0", "scale-90"); // Hide and scale-down when out of view
          entry.target.classList.remove("opacity-100", "scale-100"); // Ensure it's hidden
        }
      });
    }, options);

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <div className="grid place-items-center w-full bg-base-200">
      <div className="max-w-6xl py-24 content-center justify-center">
        <h1 className="text-3xl mb-24 text-center font-bold">
          Some Of Our Projects
        </h1>

        {featuresData.map((i, k) => {
          return (
            <div
              key={k}
              className="card w-full bg-base-100 my-5 shadow-xl hover:shadow-2xl mx-3 opacity-0 scale-90 transition-all duration-500"
              ref={(el) => (cardRefs.current[k] = el)}
            >
              <div className="hero-content md:px-0 px-4 max-w-6xl flex-col lg:flex-row-reverse">
                <img
                  alt="this is img"
                  src={i.img ? i.img : "hero3.png"}
                  className="max-w-full h-60 sm:h-80 object-cover lg:rounded-l-full rounded-3xl shadow-2xl"
                />

                <div className="text-center sm:text-center">
                  <h1 className="sm:text-3xl text-2xl text-blue-600 font-bold md:leading-none leading-tight md:mt-0 mt-10">
                    {i.title}
                  </h1>
                  <p className="py-1 px-8 sm:text-lg mt-4">{i.description}</p>
                  <Link target="_blank" href={i.link}>
                    <button
                      rel="noopener"
                      target="_blank"
                      className="btn text-lg mt-10 px-12 bg-blue-500 text-white normal-case"
                    >
                      Visit Website
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
