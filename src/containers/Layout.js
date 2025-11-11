import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LeftSidebar from "./LeftSidebar";
import ModalLayout from "./ModalLayout";
import Link from "next/link";
import Navlinks from "./Navlinks";
import NavProfileLinks from "./NavProfileLinks";

export default function CleanLayout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="" />
        <meta property="og:image" content="/logo.png" />
        <meta name="image" content="/logo.png" />
        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/logo.png" />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Space AI" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="" />
        <meta itemProp="image" content="/logo.png" />
      </Head>

      {/* DaisyUI Drawer Structure - Essential for mobile menu */}
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

        {/* Main Content */}
        <div className="drawer-content flex flex-col">
          <Navbar />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </div>

        {/* Mobile Sidebar/Drawer */}
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-100">
            <li className="mr-2 font-bold text-gray-500">
              <Link href="/">
                <span className="material-symbols-outlined text-blue-300">
                  home
                </span>
                Home
              </Link>
            </li>
            <Navlinks />
            <div className="mt-12"></div>
            <NavProfileLinks />
          </ul>
        </div>
      </div>

      <LeftSidebar />
      <ModalLayout />
    </>
  );
}
