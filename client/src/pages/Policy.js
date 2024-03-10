import React from 'react';
import Layout from '../components/Layout/Layout';


const Privacy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row privacy-policy-content">
        <div className="col-md-6">
          <img
            src="/images/privacy.svg"
            alt="Privacy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6">
        <div className="privacy-policy-content">

          <div className="privacy-policy-title">Privacy Policy for TrendHevan</div>

          <div className="privacy-policy-section">
            <div className="privacy-policy-section-heading">1. Introduction</div>
            <div className="privacy-policy-section-content">
              Welcome to TrendHevan. We understand the importance of privacy and are committed to safeguarding your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect the information you provide to us through our website and services.
            </div>
          </div>

          <div className="privacy-policy-section">
            <div className="privacy-policy-section-heading">2. Information We Collect</div>
            <div className="privacy-policy-section-content">
              We may collect the following types of information:<br/>
              
              Personal Information: Name, email address, contact information, and other details you voluntarily provide.<br/>
              Usage Data: Information about how you interact with our website, including IP address, browser type, and device information.<br/>
              Cookies: We use cookies and similar technologies to enhance your browsing experience.
            </div>
          </div>

          <div className="privacy-policy-section">
            <div className="privacy-policy-section-heading">3. Use of Your Information</div>
            <div className="privacy-policy-section-content">
              We use your information for various purposes:<br/>
              Provide Services: To deliver the services you request and personalize your experience.<br/>
              Communication: To send you updates, newsletters, and promotional content if you opt-in.<br/>
              Analytics: To analyze usage patterns, improve our services, and enhance user experience.
            </div>
          </div>

          <div className="privacy-policy-section">
            <div className="privacy-policy-section-heading">4. Disclosure of Your Information</div>
            <div className="privacy-policy-section-content">
              We may share your information in the following circumstances:<br/>
              Service Providers: We may engage third-party service providers to assist in business operations.<br/>
              Legal Compliance: To comply with legal obligations or respond to lawful requests.
            </div>
          </div>

          <div className="privacy-policy-section">
            <div className="privacy-policy-section-heading">5. Your Choices</div>
            <div className="privacy-policy-section-content">
              Opt-Out: You can opt-out of promotional communications by following instructions provided.<br/>
              Cookies: You can manage cookie preferences through your browser settings.
            </div>
          </div>

          <div className="privacy-policy-section">
            <div className="privacy-policy-section-heading">6. Security Measures</div>
            <div className="privacy-policy-section-content">
              We employ security measures to protect your information from unauthorized access and misuse.
            </div>
          </div>

          <div className="privacy-policy-section">
            <div className="privacy-policy-section-heading">7. Children's Privacy</div>
            <div className="privacy-policy-section-content">
              Our services are not intended for children under [12]. We do not knowingly collect personal information from children.
            </div>
          </div>

          <div className="privacy-policy-section">
            <div className="privacy-policy-section-heading">8. Changes to This Policy</div>
            <div className="privacy-policy-section-content">
              We may update our Privacy Policy. Check for updates regularly.
            </div>
          </div>

          <div className="privacy-policy-section">
            <div className="privacy-policy-section-heading">9. Contact Us</div>
            <div className="privacy-policy-section-content">
              If you have questions about this Privacy Policy, please contact us at [1800-800-008 (toll free)].
            </div>
          </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
