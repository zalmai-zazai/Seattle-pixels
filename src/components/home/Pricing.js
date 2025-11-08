import PricingPlans from "../common/PricingPlans";

function Pricing() {
  return (
    <>
      <div className="grid place-items-center bg-base-100 w-full py-20 lg:py-32">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 content-center justify-center">
          <h2 className="text-4xl lg:text-5xl text-center font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get Your Custom Quote
          </h2>
          <p className="text-lg text-base-content/80 text-center mt-4 max-w-3xl mx-auto">
            Every business is unique. Get a personalized quote tailored to your
            specific needs and goals.
          </p>
          <PricingPlans />
        </div>
      </div>
    </>
  );
}

export default Pricing;
