import { Metadata } from "next";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Privacy Policy | Fixer Appliance Repair Inc.",
  description: "Learn how Fixer Appliance Repair Inc. in Ottawa collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-100">
              Last updated: November 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="lead text-gray-700">
              Fixer Appliance Repair Inc. ("we," "our," "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect the personal information you provide when using our website [fixerappliancerepair.ca] and our services.
            </p>

            <div className="space-y-8 mt-8">
              {/* Section 1 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  We may collect the following types of personal information:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>Name</li>
                  <li>Phone number</li>
                  <li>Email address (e.g., service@fixerappliancerepair.ca)</li>
                  <li>Service address</li>
                  <li>Details about your appliance and requested service</li>
                  <li>IP address and browser data (for analytics purposes)</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use your information to:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>Schedule and provide appliance repair or installation services</li>
                  <li>Respond to inquiries and customer support requests</li>
                  <li>Send service confirmations and appointment reminders</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <p className="text-gray-900 font-semibold mt-4">
                  We never sell your personal information to third parties.
                </p>
              </div>

              {/* Section 3 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We may share your information only with:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>Our technicians and staff (to complete the requested service)</li>
                  <li>Service providers who help us operate our website or process payments</li>
                  <li>When required by law or to protect our rights</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                <p className="text-gray-700">
                  We use secure servers, encrypted communications, and industry-standard security measures to protect your data.
                </p>
              </div>

              {/* Section 5 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Tracking</h2>
                <p className="text-gray-700">
                  Our website uses cookies to improve your browsing experience and analyze website traffic. You can disable cookies in your browser settings, but some features may not work properly.
                </p>
              </div>

              {/* Section 6 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
                <p className="text-gray-700 mb-4">
                  You may request:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>A copy of the personal information we hold about you</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your data (unless required to keep for legal purposes)</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  To make a request, contact us at{" "}
                  <a href="mailto:service@fixerappliancerepair.ca" className="text-primary-600 hover:text-primary-700 font-semibold">
                    service@fixerappliancerepair.ca
                  </a>
                  {" "}or call{" "}
                  <a href="tel:613-413-6969" className="text-primary-600 hover:text-primary-700 font-semibold">
                    613-413-6969
                  </a>
                  .
                </p>
              </div>

              {/* Section 7 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes to This Policy</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">📌 Contact Information</h2>
            <div className="space-y-4">
              <p className="text-xl font-semibold">Fixer Appliance Repair Inc.</p>
              <p className="text-lg">Ottawa, ON, Canada</p>
              <div className="flex flex-col items-center gap-4 mt-6">
                <div className="flex items-center gap-3 text-xl">
                  <FaEnvelope className="text-accent-400" />
                  <span>Email:</span>
                  <a href="mailto:service@fixerappliancerepair.ca" className="font-semibold hover:underline">
                    service@fixerappliancerepair.ca
                  </a>
                </div>
                <div className="flex items-center gap-3 text-xl">
                  <FaPhone className="text-accent-400" />
                  <span>Phone:</span>
                  <a href="tel:613-413-6969" className="font-semibold hover:underline">
                    613-413-6969
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

