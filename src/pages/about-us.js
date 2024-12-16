import FeatureImageContainer from "@/components/common/FeatureImageContainer";
import InnerPageContainer from "@/components/common/InnerPageContainer";
import OurProcess from "@/components/home/OurProcess";
import PageMetaTags from "@/containers/PageMetaTags";
import Link from "next/link";

export default function Page({ leftText, imageUrl, title }) {
  return (
    <>
      <h1 className="sm:text-5xl text-center mt-12 text-3xl  font-bold  ">
        ABOUT US
      </h1>
      <div className={`grid place-items-center w-full ${leftText ? "" : ""}`}>
        <div className="max-w-6xl px-4 py-1 content-center justify-center">
          <div className="grid align-baseline md:grid-cols-2 grid-cols-1 gap-8">
            <div className="mt-6 relative left-10 container ">
              <img
                src="zazaipng.png"
                className="  w-96 lg:h-4/5 opacity-90  object-contain  rounded-b-full"
              />
              <div className="bg-gray-900  text-white  bottom-1 right-60  flex flex-col rounded-lg p-3 absolute shadow-2xl">
                <h1 className="font-bold text-xl">Zalmai Zazai</h1>
                <p>Owner, Developer</p>
              </div>
            </div>

            <div className="text-center gap-10 flex flex-col sm:mt-0 sm:pt-0 xl:pt-24">
              <div className="text-center sm:text-left">
                <h1 className="sm:text-4xl text-2xl font-bold md:leading-none leading-tight md:mt-0 mt-10">
                  We Make Websites{" "}
                  <span className="md:block mt-4"> with Purpose & Vision</span>
                </h1>
                <p className="py-2  sm:text-x mt-4 pr-2">
                  My name is Zalmai Zazai, and I am the owner and lead developer
                  at Seattle Pixels. I hold a bachelors degree in computer
                  science, specializing in software engineering. My journey in
                  tech started with desktop-based applications, but after moving
                  to the U.S. in 2021, I realized the immense demand for web
                  applications. I quickly adapted and mastered modern web
                  development technologies like React and Next.js. I found that
                  many small businesses face the same struggle: either they can
                  not afford a quality website, or if they do, they end up with
                  an outdated, poorly designed site. To solve this, I created a
                  business model that caters to their needs—a $0 down payment
                  with a manageable $150 per month. This way, small businesses
                  can get a professional, modern website without breaking the
                  bank. At Seattle Pixels, I am committed to designing and
                  developing websites that not only look great but also function
                  with intent and purpose, using cutting-edge tools and
                  technologies to help businesses grow online.
                </p>
                <Link href="/contact-us">
                  <button className="btn text-lg mt-16 px-12 bg-blue-500  text-white normal-case">
                    Conact Us Now!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <OurProcess />
      </div>
    </>
  );
}
