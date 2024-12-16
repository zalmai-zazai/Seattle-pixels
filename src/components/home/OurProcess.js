const featuresData = [
  {
    title: "Fill Out the Questionnaire",
    description:
      "We’ll send you a short email with fewer than 10 questions about your business, your services, and what makes you unique. From there, we handle everything else.",
  },
  {
    title: "Review the Design",
    description:
      "We’ll walk you through the initial design draft via a video screen share, making any changes you request to ensure you’re completely happy with the look and feel.",
  },
  {
    title: "Development & Demo",
    description:
      "Once the design is approved, we start building the site. You’ll receive a demo link to review the final product before we officially launch and make it live.",
  },
];

function OurProcess() {
  return (
    <>
      <div className="grid place-items-center w-full bg-base-200">
        <div className="max-w-5xl py-24 content-center justify-center">
          <div className="flex flex-col sm:flex-row sm:p-0 sm:gap-0 p-10 gap-4">
            {" "}
            <div className="flex-1">
              <h5 className="text-1xl   font-bold">Our Working Process</h5>{" "}
              <h1 className="text-3xl  font-bold">
                {" "}
                We Take Care Of Everything
              </h1>
            </div>
            <div className="flex-1">
              <p>
                Once the contract is signed, we’ll send a brief questionnaire to
                learn more about your business and services. From there, we
                expand on your input, writing the content for the entire site
                and crafting a design tailored to your brand. After your
                approval, we move into development. The entire process typically
                takes 2-3 weeks from start to finish, ensuring you have a fully
                functional, professional website in no time.
              </p>
            </div>
          </div>

          <div className="grid mx-4 mt-12 md:grid-cols-3 grid-cols-1 gap-8">
            {featuresData.map((i, k) => {
              return (
                <div
                  key={k}
                  className="card w-full bg-base-100 shadow-xl hover:shadow-2xl"
                >
                  <h2 className="mt-2 ml-4 font-bold text-blue-500">
                    Step{" > "}
                    {k + 1}
                  </h2>
                  <div className="card-body mt-2 items-center text-center">
                    <h2 className="card-title">{i.title}</h2>
                    <p className="text-sm">{i.description}</p>
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

export default OurProcess;
