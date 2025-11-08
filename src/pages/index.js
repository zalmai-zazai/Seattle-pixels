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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "//code.tidio.co/cetmi260l9tu57d8omqr0ee2awzejuig.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Trigger animations after page load
    setIsVisible(true);
  }, []);

  return (
    <>
      <PageMetaTags
        title="Seattle Pixels - Creative Web Solutions & Development Agency"
        description="Professional web development agency in Seattle. Custom websites, SEO optimization, and ongoing support starting at $150/month. Get your modern, responsive website today."
        url="https://www.seattlepixels.com/"
      />

      {/* Schema Markup for better SEO */}
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
        {/* Hero Banner with animations */}
        <div className={isVisible ? "animate-slide-up" : "opacity-0"}>
          <Banner />
        </div>

        {/* What We Do with staggered animation */}
        <div className={isVisible ? "animate-slide-up delay-300" : "opacity-0"}>
          <WhatWeDo />
        </div>

        {/* Value Proposition */}
        <div className={isVisible ? "animate-fade-in delay-500" : "opacity-0"}>
          <WhatWeOffer
            showHeading={true}
            title="Professional Websites Starting at $150/month"
            leftText="Get a complete 5-page custom website package with design, development, hosting, unlimited updates, 24/7 support, and ongoing maintenance. Perfect for businesses wanting a professional online presence without the upfront costs."
          />
        </div>

        {/* Social Proof */}
        <div className={isVisible ? "animate-slide-up delay-700" : "opacity-0"}>
          <Testimonials />
        </div>

        {/* Pricing */}
        <div className={isVisible ? "animate-fade-in delay-900" : "opacity-0"}>
          <Pricing />
        </div>

        {/* Portfolio */}
        <div
          className={isVisible ? "animate-slide-up delay-1100" : "opacity-0"}
        >
          <Projects />
        </div>

        {/* Final CTA */}
        <div className={isVisible ? "animate-fade-in delay-1300" : "opacity-0"}>
          <CTA2 />
        </div>
      </div>
    </>
  );
}
