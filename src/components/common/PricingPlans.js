import { useState, useEffect, useRef } from "react";
import CheckIcon from "@heroicons/react/24/outline/CheckIcon";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "@/store/modalSlice";

const freePointers = [
  "Full Design & Development",
  "$25/mo for Hosting",
  "$100 per page after the first 5 pages",
  "Optional: $50/mo for unlimited content update",
  "Add a blog for just $250",
  "24/7 Customer Support",
  "Lifetime Updates",
];

const advancePointers = [
  "Complete Design & Development",
  "Hosting included",
  "$100 per page after 5 pages",
  "Add a blog for $250",
  "Unlimited content edits",
  "24/7 Customer Support",
  "Lifetime Updates",
];

const professionalPointers = [
  "Custom Shopify Store",
  "Full app configuration",
  "Shipping integration included",
  "Shopify walkthrough tutorial",
  "Fully editable via Shopify CMS",
  "Optional: $50/mo for unlimited edits",
  "24/7 Customer Support",
];

function PricingPlans() {
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const cardRefs = useRef([]); // Create a ref array to hold references to the cards

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

  const openPaymentPage = async (paymentType) => {
    if (!isLoggedIn) {
      dispatch(
        openModal({
          title: "",
          size: "lg",
          bodyType: "SIGN_IN_MODAL",
          extraObject: { isSignIn: true },
        })
      );
      return 1;
    }
    setLoading(true);
    console.log("Handle payment here");
    setLoading(false);
  };

  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-1 mt-2 w-full gap-8">
        <div
          className="card w-full mt-6 bg-base-100 shadow-2xl opacity-0 scale-90 transition-all duration-500 hover:shadow-green-200"
          ref={(el) => (cardRefs.current[0] = el)}
        >
          <div className="card-body pt-12 pb-16 items-center text-center">
            <h2 className="card-title text-xl">One-Time Payment</h2>
            <h2 className="font-bold mt-4 text-gray-600 text-xl">
              $1800 (One-time)
            </h2>

            <ul className="text-left mt-4">
              {freePointers.map((p, k) => (
                <li key={k} className="mt-2">
                  <CheckIcon className="w-4 h-4 text-green-500 inline-block" />{" "}
                  {p}
                </li>
              ))}
            </ul>
            <Link href="/contact-us" className="w-full">
              <button className="btn bg-green-200 btn-sm mt-8 w-full border-none hover:bg-green-200 btn-outline normal-case">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        <div
          className="card w-full mt-6 bg-base-100 shadow-2xl opacity-0 scale-90 transition-all duration-500 hover:shadow-orange-200"
          ref={(el) => (cardRefs.current[1] = el)}
        >
          <div className="card-body pt-12 pb-16 items-center">
            <div className="badge badge-secondary badge-sm absolute text-white mt-1 ml-1 left-2 top-2">
              Most Popular
            </div>
            <h2 className="card-title text-xl text-center">
              Subscription Plan
            </h2>
            <h2 className="font-bold mt-4 text-xl text-secondary align-middle mr-2">
              $150/monthly
            </h2>

            <ul className="text-left mt-4">
              {advancePointers.map((p, k) => (
                <li key={k} className="mt-2">
                  <CheckIcon className="w-4 h-4 text-green-500 inline-block" />{" "}
                  {p}
                </li>
              ))}
            </ul>
            <Link href="/contact-us" className="w-full">
              <button className="btn btn-sm mt-8 bg-orange-200 hover:bg-orange-300 border-none normal-case w-full">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        <div
          className="card w-full mt-6 bg-base-100 shadow-2xl opacity-0 scale-90 transition-all duration-500 hover:shadow-blue-200"
          ref={(el) => (cardRefs.current[2] = el)}
        >
          <div className="card-body pt-12 pb-16 items-center">
            <h2 className="card-title text-xl text-center">
              E-commerce Package
            </h2>
            <h2 className="font-bold mt-4 text-xl text-gray-600 align-middle mr-2">
              Starting at $4,000
            </h2>

            <ul className="text-left mt-4">
              {professionalPointers.map((p, k) => (
                <li key={k} className="mt-2">
                  <CheckIcon className="w-4 h-4 text-green-500 inline-block" />{" "}
                  {p}
                </li>
              ))}
            </ul>
            <Link href="/contact-us" className="w-full">
              <button className="btn btn-sm bg-blue-100 hover:bg-blue-200 border-none mt-8 btn-outline normal-case w-full">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingPlans;
