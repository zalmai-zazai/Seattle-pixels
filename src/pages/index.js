import { useEffect, useState } from "react";
import PageMetaTags from "@/containers/PageMetaTags";
import Banner from "@/components/home/Banner";
import WhatWeDo from "@/components/home/WhatWeDo";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import Testimonials from "@/components/home/Testimonials";
import Pricing from "@/components/home/Pricing";
import Projects from "@/components/home/Projects";
import CTA2 from "@/components/home/CTA2";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Debug: Find all elements causing scrollbars
    const findScrollElements = () => {
      console.log("=== SCROLLBAR DEBUG ===");

      // Check for elements with overflow
      document.querySelectorAll("*").forEach((el) => {
        const style = window.getComputedStyle(el);
        if (
          style.overflow === "auto" ||
          style.overflow === "scroll" ||
          style.overflowY === "auto" ||
          style.overflowY === "scroll"
        ) {
          console.log("Scrollable element:", el.className, el);
        }
      });

      // Check for fixed height elements that might cause overflow
      document.querySelectorAll("*").forEach((el) => {
        const style = window.getComputedStyle(el);
        if (style.height && style.overflow !== "visible") {
          console.log(
            "Fixed height element:",
            el.className,
            "height:",
            style.height
          );
        }
      });

      // Check viewport vs document height
      console.log("Viewport height:", window.innerHeight);
      console.log("Document height:", document.documentElement.scrollHeight);
    };

    // Run after page loads
    setTimeout(findScrollElements, 1000);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Load chat script after page is interactive
      setTimeout(() => {
        const script = document.createElement("script");
        script.src = "//code.tidio.co/cetmi260l9tu57d8omqr0ee2awzejuig.js";
        script.async = true;
        document.body.appendChild(script);
      }, 2000);
    }

    // Mark page as loaded after a short delay
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

      <div itemScope itemType="https://schema.org/WebSite">
        <meta itemProp="url" content="https://www.seattlepixels.com/" />
        <meta
          itemProp="name"
          content="Seattle Pixels - Creative Web Solutions"
        />
        <meta
          itemProp="description"
          content="Professional web development agency in Seattle creating modern, responsive websites with ongoing support and maintenance."
        />
      </div>

      <div className="scroll-smooth">
        {/* Remove all animation wrapper classes - just render components directly */}
        <Banner />
        <WhatWeDo />
        <WhatWeOffer
          showHeading={true}
          title="Custom Web Solutions for Your Business"
          leftText="Get a completely tailored website package designed specifically for your business needs. We handle everything from design and development to hosting and ongoing support, ensuring your online presence drives real results."
        />
        <Testimonials />
        <Pricing />
        <Projects />
        <CTA2 />
      </div>
    </>
  );
}
