import { Metadata } from "next";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Terms of Service | Fixer Appliance Repair Inc.",
  description: "Review the terms and conditions for using Fixer Appliance Repair Inc. services in Ottawa.",
};

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-100">
              Last updated: November 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="lead text-gray-700">
              Welcome to Fixer Appliance Repair Inc. ("we," "our," "us"). By using our website [fixerappliancerepair.ca] and our services, you agree to the following terms:
            </p>

            <div className="space-y-8 mt-8">
              {/* Section 1 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Services Provided</h2>
                <p className="text-gray-700">
                  We offer appliance repair and installation services in Ottawa and surrounding areas. Service availability may vary based on location and technician schedule.
                </p>
              </div>

              {/* Section 2 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Booking and Appointments</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>Appointments can be booked online, by phone, or by email.</li>
                  <li>Same-day service is available in many areas, but is not guaranteed.</li>
                  <li>You agree to provide accurate contact and service location details.</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Pricing and Payments</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>All pricing is in Canadian dollars (CAD).</li>
                  <li>Estimates provided before the service are subject to change based on actual inspection.</li>
                  <li>Payment is due upon completion of the service, unless otherwise agreed in writing.</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Warranty</h2>
                <p className="text-gray-700">
                  We provide a 90-day labour warranty on completed repairs. Parts warranty depends on the manufacturer's policy. Warranty is void if the appliance has been tampered with after our service.
                </p>
              </div>

              {/* Section 5 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  We are not responsible for:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>Damage caused by misuse, neglect, or unauthorized repair attempts</li>
                  <li>Loss of food, laundry, or other perishable items</li>
                  <li>Indirect, incidental, or consequential damages</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cancellation Policy</h2>
                <p className="text-gray-700">
                  If you need to reschedule or cancel, please notify us at least 24 hours in advance.
                </p>
              </div>

              {/* Section 7 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes to Terms</h2>
                <p className="text-gray-700">
                  We may update these Terms of Service at any time. Continued use of our website or services means you accept the updated terms.
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
              <p className="text-lg">Ottawa, Canada</p>
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

