import { Metadata } from "next";
import Link from "next/link";
import { FaTshirt, FaCheckCircle, FaTools, FaClock, FaShieldAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Washer Installation Ottawa | Washing Machine Installation Service",
  description: "Expert washer installation services in Ottawa. Professional installation for all washing machine brands. Same-day service available. Call now!",
  keywords: "washer installation Ottawa, washing machine installation, washer hookup, Ottawa ON",
};

export default function WasherInstallationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6"><FaTshirt className="text-[30px] mb-2 inline-block" /> Professional Washer Installation in Ottawa</h1>
            <p className="text-xl text-gray-100 mb-8">
              Expert washing machine installation for all brands and models. Proper setup with water hookup and testing.
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
            <h2 className="heading-md mb-6">Professional Washing Machine Installation</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Bought a new washing machine? Let our experienced technicians handle the installation. We install 
                all types of washers including top-load, front-load, and HE models with proper hookup and testing.
              </p>
              <p>
                Our installation service ensures your washer is properly connected, leveled, and tested to prevent 
                leaks and vibration issues. We handle everything from positioning to final testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">What's Included in Our Washer Installation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Unpacking and positioning of washer",
              "Proper leveling to prevent vibration",
              "Hot and cold water connection",
              "Drain hose installation",
              "Complete leak testing",
              "Old washer removal and disposal",
              "Test cycle to ensure proper operation",
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
              <p className="text-gray-600">Experienced professionals who install washers correctly</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaClock className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Same-Day Available</h3>
              <p className="text-gray-600">Quick installation scheduling for your convenience</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaShieldAlt className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Warranty Protected</h3>
              <p className="text-gray-600">Installation warranty included with every job</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4 text-white">Ready to Install Your New Washer?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your professional washer installation today. We'll get your machine running perfectly!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-accent-600 hover:bg-gray-100">
              Schedule Installation
            </Link>
            <Link href="/washer-repair" className="btn-outline border-white text-white hover:bg-white hover:text-accent-600">
              Need Repair Instead?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

