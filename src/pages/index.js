import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";

import PageMetaTags from "@/containers/PageMetaTags";
import Pricing from "@/components/home/Pricing";
import CTA2 from "@/components/home/CTA2";
import Projects from "@/components/home/Projects";
import WhatWeDo from "@/components/home/WhatWeDo";
import Testimonials from "@/components/home/Testimonials";
import WhatWeOffer from "@/components/home/WhatWeOffer";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <PageMetaTags title="Home" description={""} url="" />
      <div itemScope itemType="https://schema.org/WebSite">
        <meta itemProp="url" content="https://www.webdesignai.com/" />
        <meta itemProp="name" content="Seattle Pixels" />
      </div>
      <Hero />
      <WhatWeDo />
      {/* <FeatureSection showHeading={true} title="Feature title 1" /> */}

      <WhatWeOffer
        showHeading={true}
        title="Websites Starting at $150 per Month with $0 Down"
        leftText="We offer a comprehensive website package starting at $150 per month with no upfront cost for a 5-page custom-built website. For larger or more complex websites, custom pricing is available depending on additional requirements. A 12-month minimum contract applies, including design, development, hosting, unlimited updates, 24/7 support, and ongoing maintenance."
      />

      {/* <FeatureSection title="Feature title 3"/> */}

      <Testimonials />
      <Pricing />

      <Projects />
      <CTA2 />
    </>
  );
}
