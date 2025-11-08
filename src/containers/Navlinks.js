import Link from "next/link";

function Navlinks() {
  return (
    <>
      <li className="mr-2">
        <Link
          href="/about-us"
          className="font-semibold text-base-content hover:text-primary transition-colors duration-200"
        >
          <span className="material-symbols-outlined text-primary mr-1">
            select_all
          </span>
          About Us
        </Link>
      </li>
      <li className="mr-2">
        <Link
          href="/pricing"
          className="font-semibold text-base-content hover:text-primary transition-colors duration-200"
        >
          <span className="material-symbols-outlined text-primary mr-1">
            attach_money
          </span>
          Pricing
        </Link>
      </li>
      <li className="mr-2">
        <Link
          href="/blogs"
          className="font-semibold text-base-content hover:text-primary transition-colors duration-200"
        >
          <span className="material-symbols-outlined text-primary mr-1">
            grid_view
          </span>
          Blogs
        </Link>
      </li>
      <li className="mr-2">
        <Link
          href="/privacy-policy"
          className="font-semibold text-base-content hover:text-primary transition-colors duration-200"
        >
          <span className="material-symbols-outlined text-primary mr-1">
            policy
          </span>
          Privacy Policy
        </Link>
      </li>
      <li className="mr-2">
        <Link
          href="/faqs"
          className="font-semibold text-base-content hover:text-primary transition-colors duration-200"
        >
          <span className="material-symbols-outlined text-primary mr-1">
            quiz
          </span>
          FAQs
        </Link>
      </li>
      <li className="mr-2">
        <Link
          href="/contact-us"
          className="font-semibold text-base-content hover:text-primary transition-colors duration-200"
        >
          <span className="material-symbols-outlined text-primary mr-1">
            perm_contact_calendar
          </span>
          Contact Us
        </Link>
      </li>
    </>
  );
}

export default Navlinks;
