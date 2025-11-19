import { Metadata } from "next";
import Link from "next/link";
import { FaWind, FaCheckCircle, FaTools, FaClock, FaShieldAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Dryer Installation Ottawa | Professional Dryer Setup Service",
  description: "Expert dryer installation services in Ottawa. Professional installation for gas and electric dryers. Same-day service available. Call now!",
  keywords: "dryer installation Ottawa, gas dryer installation, electric dryer installation, dryer hookup, Ottawa ON",
};

export default function DryerInstallationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6"><FaWind className="text-[30px] mb-2 inline-block" /> Professional Dryer Installation in Ottawa</h1>
            <p className="text-xl text-gray-100 mb-8">
              Expert dryer installation for gas and electric models. Safe setup with proper venting and testing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-accent-500 hover:bg-accent-600">
                Book Installation
              </Link>
              <a href="tel:+16135551234" className="btn-outline border-white text-white hover:bg-white hover:text-primary-700">
                Call (613) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6">Safe and Professional Dryer Installation</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Installing a new dryer? Our certified technicians provide expert installation services for both 
                gas and electric dryers. We ensure your dryer is properly connected, vented, and tested for safe 
                operation.
              </p>
              <p>
                Proper dryer installation is crucial for safety and efficiency. We handle everything including 
                positioning, venting, gas line connections (for gas dryers), and thorough testing to ensure your 
                dryer operates safely and efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">What's Included in Our Dryer Installation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Complete dryer positioning and leveling",
              "Proper vent hose installation",
              "Gas line connection (for gas dryers)",
              "Electrical hookup (for electric dryers)",
              "Vent safety inspection",
              "Old dryer removal and disposal",
              "Complete testing and safety check",
              "Installation warranty included",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
                <FaCheckCircle className="text-accent-500 text-2xl flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Why Choose Our Installation Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaTools className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Certified Technicians</h3>
              <p className="text-gray-600">Licensed for gas and electric dryer installation</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaClock className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Service</h3>
              <p className="text-gray-600">Fast installation to minimize your downtime</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaShieldAlt className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Safety First</h3>
              <p className="text-gray-600">Complete safety inspection included</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4 text-white">Ready to Install Your New Dryer?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your professional dryer installation today. Safe, certified installation guaranteed!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-accent-600 hover:bg-gray-100">
              Schedule Installation
            </Link>
            <Link href="/dryer-repair" className="btn-outline border-white text-white hover:bg-white hover:text-accent-600">
              Need Repair Instead?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

