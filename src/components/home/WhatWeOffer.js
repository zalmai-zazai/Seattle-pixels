import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import FeatureImageContainer from "../common/FeatureImageContainer";

function WhatWeOffer({ title, leftText, showHeading }) {
  const [isVisible, setIsVisible] = useState({
    leftSection: false,
    rightSection: false,
    featureImage: false,
  });

  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const featureImageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target.getAttribute("data-section");
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [target]: true }));
          } else {
            setIsVisible((prev) => ({ ...prev, [target]: false }));
          }
        });
      },
      { threshold: 0.3 }
    );

    if (leftSectionRef.current) observer.observe(leftSectionRef.current);
    if (rightSectionRef.current) observer.observe(rightSectionRef.current);
    if (featureImageRef.current) observer.observe(featureImageRef.current);

    return () => {
      if (leftSectionRef.current) observer.unobserve(leftSectionRef.current);
      if (rightSectionRef.current) observer.unobserve(rightSectionRef.current);
      if (featureImageRef.current) observer.unobserve(featureImageRef.current);
    };
  }, []);

  return (
    <>
      {showHeading && (
        <h2 className="text-3xl mt-12 text-center font-bold">WHAT WE OFFER</h2>
      )}
      <div className={`grid place-items-center w-full ${leftText ? "" : ""}`}>
        <div className="max-w-6xl px-4 py-1 content-center justify-center">
          <div className="grid align-baseline md:grid-cols-2 grid-cols-1 gap-8">
            {leftText && (
              <Link
                href="/"
                className={`mt-12 relative sm:left-0 left-8 content-center transition-transform duration-500 ${
                  isVisible.leftSection
                    ? "opacity-100 translate-x-0 scale-100"
                    : "opacity-0 translate-x-10 scale-90"
                }`}
                data-section="leftSection"
                ref={leftSectionRef}
              >
                <img
                  src="favicon-32x32.png"
                  className="h-52 sm:h-72 shadow-2xl shadow-blue-300 px-10 hover:shadow-orange-300 rounded-full cursor-pointer"
                />
              </Link>
            )}

            <div
              className={`text-center gap-2 flex flex-col sm:mt-0 sm:pt-0 xl:pt-24 transition-transform duration-500 ${
                isVisible.rightSection
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-10 scale-90"
              }`}
              data-section="rightSection"
              ref={rightSectionRef}
            >
              <h2 className="text-2xl text-center leading-10 font-bold">
                {title}
              </h2>
              <p className="text-sm">{leftText}</p>
              <div className="container mt-2 gap-2 w-full flex flex-row">
                <div className="bg-blue-300 text-gray-700 p-3 gap-2 flex flex-col rounded-lg shadow-xl">
                  <h6 className="text-sm font-bold">Dedicated Support</h6>
                  <p className="text-sm ">
                    Call or text directly—no automated systems, no hassle. You
                    will always reach the developer and owner.
                  </p>
                </div>
                <div className="p-3 text-gray-600 bg-orange-200 rounded-lg shadow-xl gap-2 flex flex-col">
                  <h6 className="text-sm font-bold">Tailor-Made Design</h6>
                  <p className="text-sm ">
                    Every design is created by our in-house team, allowing us to
                    craft anything according to your needs.
                  </p>
                </div>
                <div className="p-3 text-gray-600 bg-green-200 rounded-lg shadow-xl gap-2 flex flex-col">
                  <h6 className="text-sm font-bold">Satisfaction Guarantee</h6>
                  <p className="text-sm ">
                    If you are not happy with our design, we will refund you in
                    full—no questions asked.
                  </p>
                </div>
              </div>
              <Link href="/contact-us">
                <button className="btn bg-blue-500 mt-3 px-8 text-white">
                  Get Started
                </button>
              </Link>
            </div>

            {!leftText && (
              <div
                className={`transition-transform duration-500 ${
                  isVisible.featureImage
                    ? "opacity-100 translate-x-0 scale-100"
                    : "opacity-0 translate-x-10 scale-90"
                }`}
                data-section="featureImage"
                ref={featureImageRef}
              >
                <FeatureImageContainer imageUrl="zazai.jpg" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatWeOffer;
