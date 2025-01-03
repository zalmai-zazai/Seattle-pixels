import Link from "next/link";

function Navlinks() {
  return (
    <>
      {/* <li className="mr-2"><Link href="/features">Features</Link></li> */}

      <li className="mr-2">
        <Link href="/about-us">About Us</Link>
      </li>
      <li className="mr-2">
        <Link href="/pricing">Pricing</Link>
      </li>
      <li className="mr-2">
        <Link href="/blogs">Blogs</Link>
      </li>
      <li className="mr-2">
        <Link href="/privacy-policy">Privacy and policy</Link>
      </li>
      <li className="mr-2">
        <Link href="/faqs">FAQS</Link>
      </li>
      <li className="mr-2">
        <Link href="/contact-us">Contact Us</Link>
      </li>
      {/* <li className="mr-2">
        <Link href="/start-designing">Start Designing</Link>
      </li> */}
    </>
  );
}

export default Navlinks;
