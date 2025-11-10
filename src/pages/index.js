import { useEffect, useState } from "react";
import PageMetaTags from "@/containers/PageMetaTags";
import Banner from "@/components/home/Banner";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Delay chat widget
      setTimeout(() => {
        const script = document.createElement("script");
        script.src = "//code.tidio.co/cetmi260l9tu57d8omqr0ee2awzejuig.js";
        script.async = true;
        document.body.appendChild(script);
      }, 3000);
    }

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

      <div className="scroll-smooth">
        {/* Test with just Banner first */}
        <Banner />

        {/* Simple test section to check scrolling */}
        <div className="h-screen bg-base-200 flex items-center justify-center">
          <h2 className="text-2xl font-bold">
            Test Section - Can you scroll here smoothly?
          </h2>
        </div>

        <div className="h-screen bg-base-300 flex items-center justify-center">
          <h2 className="text-2xl font-bold">Another Test Section</h2>
        </div>
      </div>
    </>
  );
}
