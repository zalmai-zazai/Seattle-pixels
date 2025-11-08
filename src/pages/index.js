import { useEffect, useState } from "react";
import PageMetaTags from "@/containers/PageMetaTags";
import Banner from "@/components/home/Banner";
import WhatWeDo from "@/components/home/WhatWeDo";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import Testimonials from "@/components/home/Testimonials";
import Pricing from "@/components/home/Pricing";
import Projects from "@/components/home/Projects";
import CTA2 from "@/components/home/CTA2";
import dynamic from "next/dynamic";

// Lazy load heavier components below the fold
const WhatWeDoLazy = dynamic(() => import("@/components/home/WhatWeDo"), {
  loading: () => <div className="min-h-[400px] bg-base-100"></div>,
});

const ProjectsLazy = dynamic(() => import("@/components/home/Projects"), {
  loading: () => <div className="min-h-[400px] bg-base-100"></div>,
});

const TestimonialsLazy = dynamic(
  () => import("@/components/home/Testimonials"),
  {
    loading: () => <div className="min-h-[400px] bg-base-100"></div>,
  }
);

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if mobile device
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));

      // Load chat script with lower priority
      setTimeout(() => {
        const script = document.createElement("script");
        script.src = "//code.tidio.co/cetmi260l9tu57d8omqr0ee2awzejuig.js";
        script.async = true;
        document.body.appendChild(script);
      }, 3000); // Delay chat widget loading

      // Trigger animations after page load with mobile consideration
      const animationDelay = isMobile ? 500 : 100;
      setTimeout(() => {
        setIsVisible(true);
      }, animationDelay);
    }
  }, []);

  // Simplified animation classes for mobile performance
  const getAnimationClass = (baseClass, delayClass) => {
    if (isMobile) {
      return isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-4";
    }
    return isVisible ? `${baseClass} ${delayClass}` : "opacity-0";
  };

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
        {/* Hero Banner - Critical, load immediately */}
        <div className={getAnimationClass("animate-slide-up", "")}>
          <Banner />
        </div>

        {/* What We Do - Lazy loaded */}
        <div className={getAnimationClass("animate-slide-up", "delay-300")}>
          <WhatWeDoLazy />
        </div>

        {/* Value Proposition */}
        <div className={getAnimationClass("animate-fade-in", "delay-500")}>
          <WhatWeOffer
            showHeading={true}
            title="Professional Websites Starting at $150/month"
            leftText="Get a complete 5-page custom website package with design, development, hosting, unlimited updates, 24/7 support, and ongoing maintenance. Perfect for businesses wanting a professional online presence without the upfront costs."
          />
        </div>

        {/* Social Proof - Lazy loaded */}
        <div className={getAnimationClass("animate-slide-up", "delay-700")}>
          <TestimonialsLazy />
        </div>

        {/* Pricing */}
        <div className={getAnimationClass("animate-fade-in", "delay-900")}>
          <Pricing />
        </div>

        {/* Portfolio - Lazy loaded */}
        <div className={getAnimationClass("animate-slide-up", "delay-1100")}>
          <ProjectsLazy />
        </div>

        {/* Final CTA */}
        <div className={getAnimationClass("animate-fade-in", "delay-1300")}>
          <CTA2 />
        </div>
      </div>
    </>
  );
}
