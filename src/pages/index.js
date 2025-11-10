import { useEffect, useState } from "react";
import PageMetaTags from "@/containers/PageMetaTags";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-base-100 flex items-center justify-center">
        <div className="text-center">
          <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
          <p className="text-base-content/70">Loading Seattle Pixels...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageMetaTags
        title="Seattle Pixels - Creative Web Solutions & Development Agency"
        description="Professional web development agency in Seattle. Custom websites, SEO optimization, and ongoing support. Get your modern, responsive website today."
        url="https://www.seattlepixels.com/"
      />

      {/* Simple test sections to identify scrolling issue */}
      <div className="min-h-screen">
        <section className="h-screen bg-blue-100 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold">
              TEST 1 - Click here and try to scroll
            </h1>
            <p className="mt-4">
              If scrolling works here, the problem is in your Banner component
            </p>
          </div>
        </section>

        <section className="h-screen bg-green-100 flex items-center justify-center">
          <h1 className="text-4xl font-bold">
            TEST 2 - Should scroll smoothly
          </h1>
        </section>

        <section className="h-screen bg-red-100 flex items-center justify-center">
          <h1 className="text-4xl font-bold">
            TEST 3 - Should scroll smoothly
          </h1>
        </section>
      </div>
    </>
  );
}
