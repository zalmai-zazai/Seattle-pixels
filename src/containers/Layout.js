import Footer from "./Footer";
import Navbar from "./Navbar";
import Link from "next/link";
import Navlinks from "./Navlinks";
import Head from "next/head";
import ModalLayout from "./ModalLayout";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn, setToken } from "@/store/userSlice";
import { useEffect } from "react";
import LeftSidebar from "./LeftSidebar";
import NavProfileLinks from "./NavProfileLinks";

export default function Layout({ children }) {
  const logoutUser = () => {};

  const { isLoggedIn, credits, scrollId } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    //initAPIS and Auth
    const TOKEN = localStorage.getItem("token");
    if (TOKEN) {
      dispatch(setLoggedIn(true));
      dispatch(setToken(TOKEN));
      // getCurrentCredits()
    }
  }, []);

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
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/logo.png" />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Space AI" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
        <meta itemProp="image" content="/logo.png" />
      </Head>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="overflow-y-auto  flex flex-col ">
            <Navbar />

            <div className="overflow-y-auto">
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </div>

        <div className="drawer-side ">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-100">
            <li className="mr-2 font-bold text-gray-500">
              <Link href="/">
                {" "}
                <span className="material-symbols-outlined  text-blue-300">
                  home
                </span>{" "}
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
