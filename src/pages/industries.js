import { useEffect, useState } from "react";

/* =========================
   SEO CONTENT PER INDUSTRY
========================= */
const industrySEO = {
  Lawyer: {
    heading: "Lawyer Website Design & SEO Services",
    description:
      "We design professional lawyer and law firm websites that build trust, attract high-quality legal clients, and rank on Google. Our attorney websites focus on credibility, fast performance, and SEO-driven lead generation.",
    keywords:
      "lawyer website design, law firm website, attorney web design, legal website SEO, lawyer SEO services",
  },

  Plumber: {
    heading: "Plumber Website Design That Gets More Calls",
    description:
      "Our plumber website designs are built for local SEO, mobile users, and emergency searches. We help plumbing businesses generate more phone calls, service requests, and booked jobs.",
    keywords:
      "plumber website design, plumbing website, plumber SEO, local plumber website, emergency plumber SEO",
  },

  Barbershop: {
    heading: "Barbershop Website Design with Online Booking",
    description:
      "Modern barbershop websites with online booking, service pages, and local SEO to attract new clients, increase walk-ins, and boost daily revenue.",
    keywords:
      "barbershop website design, barber website, online booking barber, barber SEO, barber shop website",
  },

  HomeRemodeler: {
    heading: "Home Remodeler Website Design & Lead Generation",
    description:
      "We create high-converting home remodeler websites that showcase past projects, build homeowner trust, and generate quality remodeling leads through SEO.",
    keywords:
      "home remodeler website design, remodeling contractor website, home renovation website, remodeler SEO",
  },

  Landscaper: {
    heading: "Landscaper Website Design & Local SEO Services",
    description:
      "Professional landscaper websites designed to highlight outdoor projects, attract local clients, and rank for landscaping services in Google search results.",
    keywords:
      "landscaper website design, landscaping website, lawn care website, landscaper SEO, local landscaping services",
  },
};

/* =========================
   BLOG CONTENT PER INDUSTRY
========================= */
const industriesData = {
  Lawyer: [
    {
      title: "Why Lawyers Need a Professional Website",
      content:
        "In the legal industry, trust and credibility are everything. A professional lawyer website helps establish authority, showcase legal expertise, and convert website visitors into real clients. When people search for a lawyer near them, they expect to find a modern, fast, and trustworthy law firm website.",
      image:
        "https://www.digest.tz/wp-content/uploads/2024/07/360_F_799526911_74OBNASp1s552d9QAlSCqWj6NuqtuWQ2.jpg",
      imageFirst: false,
    },
    {
      title: "Build Trust Before the First Consultation",
      content:
        "Most potential clients research lawyers online before making a phone call. Attorney profiles, case results, testimonials, and practice area pages help build confidence before the first consultation even happens.",
      tip: "Include attorney bios, bar admissions, certifications, and real client reviews.",
      image:
        "https://img.freepik.com/free-photo/lawyers-handshake-agreement_23-2152022044.jpg?semt=ais_hybrid&w=740&q=80",
      imageFirst: true,
    },
    {
      title: "Law Firm SEO Brings High-Value Clients",
      content:
        "Search engine optimization (SEO) allows your law firm website to appear when people search for legal services like personal injury lawyer, family lawyer, or criminal defense attorney. Ranking on Google means consistent, high-quality leads.",
      highlight:
        "Seattle Pixels builds lawyer websites optimized for Google and local search results.",
      image:
        "https://as1.ftcdn.net/v2/jpg/06/37/40/86/1000_F_637408631_WyrDly2AEWOkMIzNDXis0QUdWf0dP982.jpg",
      imageFirst: false,
    },
  ],

  Plumber: [
    {
      title: "Why Plumbing Businesses Need a Website",
      content:
        "When plumbing emergencies happen, customers immediately search online for help. A professional plumber website ensures your business appears at the right moment, helping you capture urgent service calls.",
      image:
        "https://images.ctfassets.net/3q1a0w8cwuwf/5nCRPUQRXc2PVJWhUCBzla/cca684283357ca91c411fa6696058b86/1461324_ST-BLOGHEADERS-4_092122.jpg",
      imageFirst: false,
    },
    {
      title: "Turn Website Visitors into Emergency Calls",
      content:
        "A plumbing website should be fast, mobile-friendly, and optimized for local SEO. Features like click-to-call buttons, service area pages, and emergency service banners increase conversions.",
      tip: "Place your phone number and emergency services above the fold.",
      image:
        "https://gkplumbing.net/wp-content/uploads/2019/10/plumbing-banner.png",
      imageFirst: true,
    },
    {
      title: "Local SEO for Plumbers Means More Jobs",
      content:
        "Local plumber SEO helps your business appear in Google Maps and local search results. Ranking for keywords like 'plumber near me' brings steady, high-intent leads.",
      highlight:
        "Seattle Pixels designs plumbing websites optimized for local search visibility.",
      image:
        "https://rankxdigital.com/wp-content/uploads/2025/12/local-seo-for-plumbers-1024x536.webp",
      imageFirst: false,
    },
  ],

  Barbershop: [
    {
      title: "Why Barbershops Need a Professional Website",
      content:
        "A barbershop website allows customers to explore your services, pricing, and styles before visiting. A modern website builds your brand and attracts new walk-in and repeat clients.",
      image:
        "https://media.istockphoto.com/id/1097864098/vector/barber-shop-sign-label-hairdressing-salon-logo-poster-print-vintage-classic-style-vector.jpg?s=612x612&w=0&k=20&c=DPxsllYXEgMGXGx2v-W5Icm2DfVokoYQN9I70bxxS78=",
      imageFirst: false,
    },
    {
      title: "Online Booking Increases Daily Revenue",
      content:
        "Online booking systems allow customers to book haircuts anytime. This reduces no-shows, saves staff time, and increases daily appointment volume.",
      highlight:
        "Seattle Pixels integrates easy online booking and calendar systems.",
      image:
        "https://www.themaineventbarbershop.com/_next/image?url=%2Fstatic%2Fimages%2Fmain-event-banner.png&w=1080&q=75",
      imageFirst: true,
    },
    {
      title: "Local SEO Helps Barbershops Get Discovered",
      content:
        "Ranking for searches like 'barbershop near me' or 'best barber in Seattle' brings consistent local traffic and new clients to your shop.",
      image:
        "https://i.pinimg.com/736x/4b/96/99/4b96993654b2d671d2743c057c8550dd.jpg",
      imageFirst: false,
    },
  ],

  HomeRemodeler: [
    {
      title: "Why Home Remodelers Need a Website",
      content:
        "Home remodeling clients want to see proof of quality work. A professional website showcases your projects, services, and experience to build trust.",
      image:
        "https://www.arlingtonva.us/files/sharedassets/public/v/1/housing/images/home-maintenance-workshops-banner-web.png?w=1197&h=380",
      imageFirst: false,
    },
    {
      title: "Showcase Your Remodeling Portfolio",
      content:
        "Before-and-after galleries, project descriptions, and testimonials help homeowners feel confident choosing your remodeling business.",
      tip: "High-quality photos significantly increase conversion rates.",
      image:
        "https://renovation-contractor-toronto.weebly.com/uploads/1/2/0/6/120662839/published/black-and-blue-simple-travel-banner-landscape.png?1719391370",
      imageFirst: true,
    },
    {
      title: "SEO Brings High-Budget Remodeling Leads",
      content:
        "Ranking for keywords like 'home remodeler near me' or 'kitchen remodeling services' attracts serious homeowners ready to invest.",
      image:
        "https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-web-banner-3d-rendered-ui-for-seo-data-analytics-and-future-image_3618751.jpg",
      imageFirst: false,
    },
  ],

  Landscaper: [
    {
      title: "Why Landscaping Businesses Need a Website",
      content:
        "A landscaping website helps homeowners and businesses find your services, view your work, and request quotes easily.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/042/366/397/small/organic-food-and-agriculture-service-for-stream-video-thumbnail-design-modern-lawn-mower-garden-or-landscaping-service-social-media-cover-or-post-template-with-abstract-green-and-yellow-color-shapes-vector.jpg",
      imageFirst: false,
    },
    {
      title: "Show Your Outdoor Projects Visually",
      content:
        "Landscaping is visual. A professional website with galleries and project descriptions builds trust and sets you apart from competitors.",
      tip: "Show seasonal work and maintenance plans.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIrO2cy1e2uwbA3HwcMfLrsWZt6RCmlmtiHQ&s",
      imageFirst: true,
    },
    {
      title: "Local SEO Drives Ongoing Landscaping Clients",
      content:
        "SEO helps landscapers rank for searches like 'landscaper near me' and 'lawn care services', bringing recurring clients year-round.",
      image: "https://img.youtube.com/vi/do9MJMjWDu0/maxresdefault.jpg",
      imageFirst: false,
    },
  ],
};

/* =========================
   SEO COMPONENT
========================= */
function IndustrySEOContent({ industry }) {
  const data = industrySEO[industry];
  if (!data) return null;

  return (
    <div className="mb-20 text-center max-w-4xl mx-auto animate-fadeIn">
      <h2 className="text-3xl lg:text-4xl font-bold mb-4">{data.heading}</h2>
      <p className="text-lg text-base-content/80">{data.description}</p>

      {/* SEO keywords */}
      <p className="sr-only">{data.keywords}</p>
    </div>
  );
}

/* =========================
   MAIN PAGE
========================= */
export default function Design() {
  const [selectedIndustry, setSelectedIndustry] = useState("Lawyer");
  const [fadeKey, setFadeKey] = useState(0);

  const blogSections = industriesData[selectedIndustry];

  // trigger fade animation on industry change
  useEffect(() => {
    setFadeKey((prev) => prev + 1);
  }, [selectedIndustry]);

  return (
    <div className="min-h-screen bg-base-100 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14 animate-slideDown">
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Industries We Serve
          </h1>
          <p className="mt-6 text-lg text-base-content/80 max-w-3xl mx-auto">
            Industry-specific website solutions designed to grow your business
          </p>
        </div>

        {/* Industry Menu */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.keys(industriesData).map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedIndustry === industry
                  ? "bg-primary text-primary-content scale-105 shadow-lg"
                  : "bg-base-200 hover:bg-primary/20"
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        {/* SEO Content */}
        <IndustrySEOContent industry={selectedIndustry} />

        {/* Blog Sections */}
        <div key={fadeKey} className="space-y-20 animate-fadeIn">
          {blogSections.map((section, index) => (
            <section key={index}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  section.imageFirst ? "lg:grid-flow-dense" : ""
                }`}
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-72 object-contain rounded-xl shadow-xl"
                />

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                    {section.title}
                  </h2>
                  <p className="text-lg text-base-content/80">
                    {section.content}
                  </p>

                  {section.tip && (
                    <div className="mt-4 bg-base-200 p-4 rounded-lg border-l-4 border-primary">
                      💡 <strong>Pro Tip:</strong> {section.tip}
                    </div>
                  )}

                  {section.highlight && (
                    <div className="mt-4 bg-primary/10 p-4 rounded-lg">
                      ⭐ {section.highlight}
                    </div>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
