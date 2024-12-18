import InnerPageContainer from "@/components/common/InnerPageContainer";
import PageMetaTags from "@/containers/PageMetaTags";
const faqsData = [
  {
    question: "1. What services does Seattle Pixels offer?",
    answer:
      "We offer comprehensive web design and development services, including custom website design, eCommerce development, hosting, ongoing maintenance, and SEO optimization. Our goal is to create websites that not only look great but also serve your business needs effectively.",
  },
  {
    question: "2. How much does it cost to build a website?",
    answer:
      "The cost of a website depends on several factors such as the type of site, the number of pages, and specific features or customizations. We offer flexible pricing plans, including lump-sum payment options or monthly plans starting as low as $175/month. For a detailed quote, please contact us for a consultation.",
  },
  {
    question: "4. Do you offer ongoing website maintenance and updates?",
    answer:
      "Yes, we offer lifetime updates and 24/7 support with our packages. Additionally, we have an optional $50/month plan for unlimited edits and updates, ensuring your website stays fresh and functional as your business evolves.",
  },
  {
    question: "5. What platforms do you build websites on?",
    answer:
      "We specialize in custom-built websites using modern technologies like React, Next.js, and Shopify for eCommerce. Our websites are fully responsive, fast, and scalable to grow with your business.",
  },
  {
    question: "6. How long does it take to build a website?",
    answer:
      "On average, the website design and development process takes 2-3 weeks, depending on the complexity of your project. We’ll work closely with you throughout the process to ensure that deadlines are met.",
  },
  {
    question: "7. Can I make changes to the website after its built?",
    answer:
      "Absolutely! Our websites are built with user-friendly content management systems (CMS) like Shopify, so you can easily update your content. We also offer a plan for unlimited edits, or we can manage updates for you.",
  },
  {
    question: "8. Do you provide SEO services?",
    answer:
      "Yes, we include basic SEO services with all our web development projects, ensuring that your site is optimized for search engines from the start. We also offer advanced SEO packages for ongoing search engine optimization.",
  },
  {
    question: "9. Do you offer eCommerce website development?",
    answer:
      "Yes, we specialize in building custom eCommerce websites. We can create a fully functional online store, integrate secure payment gateways, configure shipping options, and provide a Shopify walkthrough to help you manage your store with ease.",
  },
  {
    question: "10. What support do you offer after the website is launched?",
    answer:
      "We provide 24/7 support to all our clients. Whether you need technical assistance, updates, or troubleshooting, we are here to help. Our goal is to ensure that your website continues to run smoothly after launch.",
  },
  {
    question: "11. Can I host my website with Seattle Pixels?",
    answer:
      "Yes! We offer reliable hosting services for $25/month, ensuring that your website remains fast and secure. We also manage the hosting process, so you can focus on running your business.",
  },
  {
    question: "12. How do I get started with Seattle Pixels?",
    answer:
      "Getting started is easy! Simply contact us via our website or email. We’ll schedule a consultation to discuss your business needs, provide a custom quote, and guide you through the next steps to bring your website vision to life.",
  },
];

export default function Page() {
  return (
    <InnerPageContainer title="FAQs">
      <PageMetaTags title="Design FAQs" description={""} url="/faqs" />
      {faqsData.map((f, k) => {
        return (
          <div className="collapse bg-white md:mx-12  my-8 rounded-lg" key={k}>
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              {f.question}
            </div>
            <div className="collapse-content">
              <p>{f.answer}</p>
            </div>
          </div>
        );
      })}
    </InnerPageContainer>
  );
}
