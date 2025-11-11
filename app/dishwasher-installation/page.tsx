import { Metadata } from "next";
import Link from "next/link";
import { FaUtensils, FaCheckCircle, FaTools, FaClock, FaShieldAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Dishwasher Installation Ottawa | Professional Dishwasher Setup",
  description: "Expert dishwasher installation services in Ottawa, ON. Professional installation for all brands. Same-day service available. Call now!",
  keywords: "dishwasher installation Ottawa, new dishwasher setup, dishwasher hookup, Ottawa ON",
};

export default function DishwasherInstallationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 w-24 h-24 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaUtensils className="text-6xl text-white" />
            </div>
            <h1 className="heading-xl text-white mb-6">Professional Dishwasher Installation in Ottawa</h1>
            <p className="text-xl text-gray-100 mb-8">
              Expert dishwasher installation for all brands. Proper hookup with water and electrical connections.
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
            <h2 className="heading-md mb-6">Professional Dishwasher Installation</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Getting a new dishwasher? Our expert technicians provide professional installation services 
                throughout Ottawa. We handle all aspects of installation including water hookup, electrical 
                connections, leveling, and testing.
              </p>
              <p>
                We ensure your dishwasher is properly installed to manufacturer specifications, preventing 
                leaks and ensuring optimal performance. Our service includes removing your old dishwasher 
                if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">What's Included in Our Dishwasher Installation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Complete dishwasher positioning and leveling",
              "Water supply line connection",
              "Drain hose installation",
              "Electrical hookup (if needed)",
              "Testing for leaks and proper drainage",
              "Old dishwasher removal and disposal",
              "Cleanup and packaging removal",
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
              <h3 className="text-xl font-bold mb-2">Expert Technicians</h3>
              <p className="text-gray-600">Licensed professionals trained on all dishwasher brands</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaClock className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Service</h3>
              <p className="text-gray-600">Quick installation to get your dishwasher running</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaShieldAlt className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Warranty Included</h3>
              <p className="text-gray-600">Installation warranty for your peace of mind</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4 text-white">Ready to Install Your New Dishwasher?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your professional dishwasher installation today. We handle everything professionally!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-accent-600 hover:bg-gray-100">
              Schedule Installation
            </Link>
            <Link href="/dishwasher-repair" className="btn-outline border-white text-white hover:bg-white hover:text-accent-600">
              Need Repair Instead?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

