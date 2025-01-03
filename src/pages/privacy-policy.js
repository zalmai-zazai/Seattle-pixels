import InnerPageContainer from "@/components/common/InnerPageContainer";
import PageMetaTags from "@/containers/PageMetaTags";

export default function Page() {
  return (
    <InnerPageContainer title="Privacy Policy">
      <PageMetaTags
        title="Privacy Policy"
        description={""}
        url="/privacy-policy"
      />

      <p className="mt-4">
        <b className="">Effective Date:12/18/2024</b>
        <br />
        <br />
        Seattle Pixels is committed to protecting your privacy. This Privacy
        Policy explains how we collect, use, disclose, and safeguard your
        information when you visit our website, www.SeattlePixels.com, or use
        our services. Please read this policy carefully to understand our views
        and practices regarding your personal data and how we treat it.
        <br />
        <br />
      </p>
      <div className="mt-4">
        <b className="">1. Information We Collect</b>
        <br />
        We may collect personal information from you in a variety of ways,
        including:
        <br />
        <br />
        <ul>
          <li>
            <b> Personal Data:</b> While using our website or services, we may
            ask you to provide us with personally identifiable information, such
            as your name, email address, phone number, and payment details.
          </li>
          <li>
            <b> Usage Data:</b> We may collect information that your browser
            sends whenever you visit our website. This data may include your IP
            address, browser type, pages visited, time spent on those pages, and
            other diagnostic d
          </li>
          <li>
            <b> Cookies and Tracking Technologies: </b>We may use cookies and
            similar tracking technologies to track activity on our website and
            hold certain information. You can instruct your browser to refuse
            cookies, but some features of our website may not function properly
            without them.
          </li>
        </ul>
        <br />
        <br />
      </div>
      <div className="mt-4">
        <b className="">2. How We Use Your Information</b>
        <br />
        We may use the information we collect in the following ways:
        <br />
        <br />
        <ul>
          <li>To provide and maintain our website and services.</li>
          <li>
            To communicate with you regarding your inquiries, projects, and
            other requests.
          </li>
          <li>To process payments and manage subscriptions or transactions.</li>
          <li>To improve and personalize your experience on our website.</li>
          <li>To provide customer support.</li>
          <li>
            To notify you of changes to our services, policies, or website
            functionality.
          </li>
          <li>
            To protect against illegal activity, fraud, and unauthorized access.
          </li>
        </ul>
        <br />
      </div>
      <div className="mt-4">
        <b className="">3. Disclosure of Your Information</b>
        <br />
        We will not share your personal information with third parties except as
        outlined below:
        <br />
        <br />
        <ul>
          <li>
            <b> Service Providers:</b> We may share your data with trusted
            third-party service providers who assist us in delivering our
            services (e.g., payment processors, hosting providers).
          </li>
          <li>
            <b> Business Transfers:</b> In the event of a merger, acquisition,
            or sale of assets, we may transfer your personal information as part
            of the business assets.
          </li>
          <li>
            <b> Legal Compliance: </b>We may disclose your information if
            required by law, court order, or government regulation
          </li>
        </ul>
        <br />
      </div>
      <div className="mt-4">
        <b className="">4. Data Security</b>
        <br />
        <p>
          We take reasonable steps to protect your personal information from
          unauthorized access, use, or disclosure. However, no transmission of
          data over the internet is guaranteed to be completely secure. We
          cannot guarantee the absolute security of your data.
        </p>
      </div>
      <div className="mt-4">
        <b className="">5. Third-Party Websites</b>
        <br />
        <p>
          Our website may contain links to third-party websites that we do not
          control. We are not responsible for the privacy practices or content
          of these external websites. We encourage you to review the privacy
          policies of any third-party websites you visit.
        </p>
      </div>
      <div className="mt-4">
        <b className="">6. Your Data Rights</b>
        <br />
        You have the right to:
        <br />
        <br />
        <ul>
          <li>Access, correct, or delete your personal information.</li>
          <li>Object to or restrict the processing of your personal data.</li>
          <li>
            Withdraw consent where the processing of your information is based
            on consent.
          </li>
          <br></br>
          To exercise any of these rights, please contact us at
          :ZazaiZalmai70@gmail.com.
        </ul>
        <br />
      </div>
      <div className="mt-4">
        <b className="">7. Changes to This Privacy Policy</b>
        <br />
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by updating the Effective Date at the top of this
          policy. We encourage you to review this page periodically for the
          latest information on our privacy practices.
        </p>
      </div>
      <div className="mt-4">
        <b className="">8. Contact Us</b>
        <br />
        <p>
          If you have any questions or concerns about this Privacy Policy or how
          we handle your personal data, please contact us at:
        </p>

        <p>
          <b>Email: </b>ZazaiZalmai70@gmail.com
        </p>
        <p>
          <b>Phone: </b>206 670 6888
        </p>
        <p>
          <b>Location: </b>Kent, WA
        </p>
      </div>
    </InnerPageContainer>
  );
}
