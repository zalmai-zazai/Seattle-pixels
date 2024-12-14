import Link from "next/link";

function Hero() {
  return (
    <div className="hero py-12 bg-gradient-to-t from-blue-500 to-purple-700">
      <div className="hero-content md:px-0 px-4 max-w-6xl flex-col lg:flex-row-reverse">
        <img
          src="hero3.png"
          className="max-w-full  h-80 object-cover rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl text-slate-100 font-bold md:leading-none leading-tight md:mt-0 mt-10">
            Small Buisnesses <span className="md:block mt-4">Web Designer</span>
          </h1>
          <p className="py-2 text-xl text-slate-100 mt-4 pr-12">
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
