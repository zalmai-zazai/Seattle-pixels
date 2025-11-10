import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/logo.png" />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Space AI" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="" />
        {/* <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        /> */}
        {/* <script
          src="//code.tidio.co/cetmi260l9tu57d8omqr0ee2awzejuig.js"
          async
        ></script> */}
        <meta itemProp="image" content="/logo.png" />
      </Head>

      {/* Super simple layout - no scroll containers */}
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
}
