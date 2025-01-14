import Link from "next/link";

function Navlinks() {
  return (
    <>
      {/* <li className="mr-2"><Link href="/features">Features</Link></li> */}

      <li className="mr-2 font-bold text-gray-500">
        <Link href="/about-us">
          {" "}
          <span class="material-symbols-outlined  text-blue-300">
            select_all
          </span>{" "}
          About Us
        </Link>
      </li>
      <li className="mr-2 font-bold text-gray-500">
        <Link href="/pricing">
          <span class="material-symbols-outlined  text-blue-300">
            attach_money
          </span>{" "}
          Pricing
        </Link>
      </li>
      <li className="mr-2 font-bold text-gray-500">
        <Link href="/blogs">
          {" "}
          <span class="material-symbols-outlined  text-blue-300">
            grid_view
          </span>{" "}
          Blogs
        </Link>
      </li>
      <li className="mr-2 font-bold text-gray-500">
        <Link href="/privacy-policy">
          {" "}
          <span class="material-symbols-outlined  text-blue-300">
            policy
          </span>{" "}
          Privacy and policy
        </Link>
      </li>
      <li className="mr-2 font-bold text-gray-500">
        <Link href="/faqs">
          {" "}
          <span class="material-symbols-outlined  text-blue-300">
            quiz
          </span>{" "}
          FAQS
        </Link>
      </li>
      <li className="mr-2 font-bold text-gray-500">
        <Link href="/contact-us">
          {" "}
          <span class="material-symbols-outlined text-blue-300">
            perm_contact_calendar
          </span>{" "}
          Contact Us
        </Link>
      </li>
      {/* <li className="mr-2">
        <Link href="/start-designing">Start Designing</Link>
      </li> */}
    </>
  );
}

export default Navlinks;
