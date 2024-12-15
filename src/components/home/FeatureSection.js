import Link from "next/link";
import FeatureImageContainer from "../common/FeatureImageContainer";

function FeatureSection({ title, leftText, showHeading }) {
  return (
    <>
      {showHeading && (
        <h2 className="text-3xl mt-12 text-center font-bold">WHAT WE OFFER</h2>
      )}
      <div className={`grid place-items-center w-full ${leftText ? "" : ""}`}>
        <div className="max-w-6xl px-4 py-1 content-center justify-center">
          <div className="grid align-baseline md:grid-cols-2 grid-cols-1 gap-8">
            {leftText && <FeatureImageContainer imageUrl="zazaipng.png" />}

            <div className="text-center gap-10 flex flex-col sm:mt-0 sm:pt-0 xl:pt-24">
              <h2 className="text-2xl  text-center leading-10 font-bold">
                {" "}
                {title}
              </h2>
              <p className="text-sm">{leftText}</p>
              <div className="container mt-2 gap-2 w-full flex flex-row">
                <div className="bg-blue-300  text-gray-700 p-3 gap-2 flex flex-col rounded-lg shadow-xl">
                  <h6 className="text-sm font-bold">Dedicated Support</h6>
                  <p className="text-sm ">
                    Call or text directly—no automated systems, no hassle. you
                    will always reach the developer and owner.
                  </p>
                </div>
                <div className="p-3  text-gray-600 bg-orange-200 rounded-lg shadow-xl gap-2 flex flex-col">
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
              <Link href="/start-designing">
                <button className="btn btn-primary mt-8 px-8 normal-case">
                  Get Started
                </button>
              </Link>
            </div>

            {!leftText && <FeatureImageContainer imageUrl="zazai.jpg" />}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureSection;
