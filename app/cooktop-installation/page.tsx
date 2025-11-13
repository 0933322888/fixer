import { Metadata } from "next";
import Link from "next/link";
import { FaFire, FaCheckCircle, FaTools, FaClock, FaShieldAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Stove Installation Ottawa | Professional Gas & Electric Stove Setup",
  description: "Expert stove installation services in Ottawa. Professional installation for gas and electric stoves. Licensed technicians. Call now!",
  keywords: "stove installation Ottawa, gas stove installation, electric stove installation, cooktop installation, Ottawa ON",
};

export default function StoveInstallationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 w-24 h-24 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaFire className="text-6xl text-white" />
            </div>
            <h1 className="heading-xl text-white mb-6">Professional Stove Installation in Ottawa</h1>
            <p className="text-xl text-gray-100 mb-8">
              Expert stove and cooktop installation for gas, electric, and induction models. Licensed and certified service.
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
            <h2 className="heading-md mb-6">Expert Stove Installation Services</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Getting a new stove or cooktop? Our licensed technicians provide professional installation services 
                for all types of stoves including gas, electric, and induction models. We ensure safe, code-compliant 
                installation.
              </p>
              <p>
                Safety is our priority, especially with gas appliances. Our certified technicians are trained in 
                gas line connections, electrical hookups, and proper ventilation to ensure your stove operates 
                safely and efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">What's Included in Our Stove Installation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Professional positioning and leveling",
              "Gas line connection and testing (gas stoves)",
              "Electrical hookup (electric/induction)",
              "Igniter and burner testing",
              "Safety inspection and leak testing",
              "Old stove removal and disposal",
              "Complete function testing",
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
              <h3 className="text-xl font-bold mb-2">Licensed & Certified</h3>
              <p className="text-gray-600">Certified for gas and electric stove installation</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaClock className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Efficient Service</h3>
              <p className="text-gray-600">Professional installation completed quickly</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaShieldAlt className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Safety Guaranteed</h3>
              <p className="text-gray-600">Complete safety testing and warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4 text-white">Ready to Install Your New Stove?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your professional stove installation today. Safe, certified installation by experts!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-accent-600 hover:bg-gray-100">
              Schedule Installation
            </Link>
            <Link href="/stove-repair" className="btn-outline border-white text-white hover:bg-white hover:text-accent-600">
              Need Repair Instead?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

