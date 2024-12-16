import Link from "next/link";

function Hero() {
  return (
    <div className="hero py-12 bg-gradient-to-t from-blue-500 to-gray-400">
      <div className="hero-content md:px-0  px-4 max-w-6xl flex-col lg:flex-row-reverse">
        <img
          src="hero3.png"
          className="max-w-full  h-60 sm:h-80 object-cover rounded-lg shadow-2xl"
        />
        <div className="text-center sm:text-left">
          <h1 className="sm:text-5xl text-2xl text-slate-100 font-bold md:leading-none leading-tight md:mt-0 mt-10">
            Small Buisnesses <span className="md:block mt-4">Web Designer</span>
          </h1>
          <p className="py-2  sm:text-xl text-slate-100 mt-4 pr-12">
            At Seattle Pixels Web Design, we build 100% hand-coded, custom
            websites designed to drive results. Starting at $150/mo, our
            services expert SEO are there to help your business grow online.
          </p>
          <Link href="/start-designing">
            <button className="btn text-lg mt-16 px-12 btn-white text-blue-500 normal-case">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;

// <div className={`grid place-items-center w-full ${leftText ? "" : ""}`}>
//         <div className="max-w-6xl px-4 py-1 content-center justify-center">
//           <div className="grid align-baseline md:grid-cols-2 grid-cols-1 gap-8">
//             {leftText && <FeatureImageContainer imageUrl="zazaipng.png" />}

//             <div className="text-center gap-10 flex flex-col sm:mt-0 sm:pt-0 xl:pt-24">
//               <h2 className="text-2xl  text-center leading-10 font-bold">
//                 {" "}
//                 {title}
//               </h2>
//               <p className="text-sm">{leftText}</p>
//               <div className="container mt-2 gap-2 w-full flex flex-row">
//                 <div className="bg-blue-300  text-gray-700 p-3 gap-2 flex flex-col rounded-lg shadow-xl">
//                   <h6 className="text-sm font-bold">Dedicated Support</h6>
//                   <p className="text-sm ">
//                     Call or text directly—no automated systems, no hassle. you
//                     will always reach the developer and owner.
//                   </p>
//                 </div>
//                 <div className="p-3  text-gray-600 bg-orange-200 rounded-lg shadow-xl gap-2 flex flex-col">
//                   <h6 className="text-sm font-bold">Tailor-Made Design</h6>
//                   <p className="text-sm ">
//                     Every design is created by our in-house team, allowing us to
//                     craft anything according to your needs.
//                   </p>
//                 </div>
//                 <div className="p-3 text-gray-600 bg-green-200 rounded-lg shadow-xl gap-2 flex flex-col">
//                   <h6 className="text-sm font-bold">Satisfaction Guarantee</h6>
//                   <p className="text-sm ">
//                     If you are not happy with our design, we will refund you in
//                     full—no questions asked.
//                   </p>
//                 </div>
//               </div>
//               <Link href="/start-designing">
//                 <button className="btn btn-primary mt-8 px-8 normal-case">
//                   Get Started
//                 </button>
//               </Link>
//             </div>

//             {!leftText && <FeatureImageContainer imageUrl="zazai.jpg" />}
//           </div>
//         </div>
//       </div>
