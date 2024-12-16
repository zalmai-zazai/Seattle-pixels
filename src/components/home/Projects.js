import Link from "next/link";

const featuresData = [
  {
    title: "Sudsy Car Wash",
    description:
      "We designed and developed a sleek, modern website for Sudsy Car Wash, focusing on user-friendly navigation and seamless booking functionality. The design reflects the quality of their services and is fully responsive, ensuring customers can easily access it from any device. The result is a polished, high-performing website that enhances the customer experience for Sudsy Car Wash",
    img: "sudsy.png",
    link: "https://sudsaycarwash.netlify.app/",
  },
  {
    title: "My Food Resturant",
    description:
      "We crafted a clean, visually appealing website for My Food Restaurant, designed to showcase their menu and services. The site offers smooth navigation, allowing customers to explore dishes and place orders effortlessly. With a modern design and mobile-friendly layout, it provides a seamless user experience across all devices, helping My Food Restaurant connect with customers efficiently.",
    img: "resturant.png",
    link: "https://myfoodresturant.netlify.app/",
  },
  {
    title: "My Ecomerce",
    description:
      "We developed a custom eCommerce website designed for seamless shopping experiences. With integrated payment gateways, easy navigation, and mobile-friendly design, the site allows customers to browse and purchase products effortlessly. Built for performance and scalability, it offers a reliable platform for growing online sales.",
    img: "ecomerce.png",
    link: "https://zazaiecomerce.onrender.com/",
  },
];

function Projects() {
  return (
    <>
      <div className="grid place-items-center w-full bg-base-200">
        <div className="max-w-6xl py-24 content-center justify-center">
          <h1 className="text-3xl mb-24  text-center font-bold">
            Some Of Our Projects
          </h1>

          {featuresData.map((i, k) => {
            return (
              <div
                key={k}
                className="card w-full bg-base-100 my-5 shadow-xl hover:shadow-2xl "
              >
                <div className="hero-content md:px-0  px-4 max-w-6xl flex-col lg:flex-row-reverse">
                  <img
                    src={i.img ? i.img : "hero3.png"}
                    className="max-w-full  h-60 sm:h-80 object-cover rounded-l-full shadow-2xl"
                  />

                  <div className="text-center sm:text-center">
                    <h1 className="sm:text-3xl text-2xl text-blue-600 font-bold md:leading-none leading-tight md:mt-0 mt-10">
                      {i.title}
                    </h1>
                    <p className="py-1 px-8 sm:text-lg mt-4">{i.description}</p>
                    <Link href={i.link}>
                      <button
                        rel="noopener"
                        noreferrer
                        target="_blank"
                        className="btn text-lg mt-10 px-12 bg-blue-500 text-white normal-case"
                      >
                        Vist Website
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
