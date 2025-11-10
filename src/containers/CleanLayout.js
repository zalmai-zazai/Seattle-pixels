import Head from "next/head";

export default function CleanLayout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon-32x32.png" />
        <title>Seattle Pixels - Test</title>
      </Head>

      {/* Super simple layout - no scroll containers */}
      <div className="min-h-screen">{children}</div>
    </>
  );
}
