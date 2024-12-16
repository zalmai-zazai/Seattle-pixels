import DocumentTextIcon from "@heroicons/react/24/outline/DocumentTextIcon";
import ArrowDownOnSquareIcon from "@heroicons/react/24/outline/ArrowDownOnSquareIcon";
import ArrowUpOnSquareIcon from "@heroicons/react/24/outline/ArrowUpOnSquareIcon";
import DevicePhoneMobileIcon from "@heroicons/react/24/outline/DevicePhoneMobileIcon";

const generationStepData = [
  {
    img: "mobile.png",
    title: "Mobile-First Design",
    description:
      "Mobile-first design ensures that your website delivers a seamless experience on smartphones and tablets, where most users access the web today. By prioritizing mobile usability from the start, we create responsive, easy-to-navigate layouts that enhance the user experience, no matter the device.",
  },

  {
    img: "responsive.png",
    title: "Responsive Design",
    description:
      "Our responsive design approach guarantees that your website looks and performs beautifully across all devices. Whether your visitors are on a desktop, tablet, or mobile phone, the layout adjusts flawlessly to fit any screen size, providing a consistent user experience.",
  },
  {
    img: "speed.png",
    title: "Optimized Page Speed",
    description:
      "Speed matters! Our websites are built with optimized code and best practices to ensure fast loading times. With quicker page speeds, you can improve user satisfaction, reduce bounce rates, and rank higher on search engines, helping your business grow.",
  },
];

function WhatWeDo() {
  return (
    <>
      <div className="grid place-items-center bg-slate-50 w-full ">
        <div className="max-w-6xl w-full py-24 px-4 content-center justify-center">
          <h2 className="text-2xl text-gray-700  text-center font-bold">
            WHAT WE DO
          </h2>
          <p className="py-2 mt-4 text-center mx-auto max-w-` ">
            At Seattle Pixels Web Design, we focus on creating custom web
            solutions tailored for small businesses across the U.S. Every
            website we build is 100% hand-coded, ensuring top-notch performance
            and search engine optimization to help your business grow. We handle
            all the updates and maintenance, so you are never left on your own.
            Our mission is to build lasting partnerships with our clients,
            supporting their growth and success over time.
          </p>
          <div className="grid mt-24 md:grid-cols-3 grid-cols-1 gap-8">
            {generationStepData.map((i, k) => {
              return (
                <div
                  key={k}
                  className={`card w-full bg-base-100 shadow-xl hover:shadow-blue-300`}
                >
                  {/* <div className="rounded-full inline-block border-2 flex p-3 relative">
                                    <div className="absolute top-5 left-8">
                                        4
                                    </div>
                                </div> */}
                  <div className="grid -mt-4 place-items-center">
                    <div className="w-48 h-16 m-auto rounded-full  bg-blue-400 text-slate-100 flex font-bold justify-center items-center">
                      <p>{i.title}</p>
                    </div>
                  </div>
                  <div className="card-body cursor-pointer items-center text-center">
                    {/* <p className="text-primary">{i.icon}</p> */}
                    <img className=" max-h-40" src={i.img} />
                    <p className="mt-2"> {i.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatWeDo;
