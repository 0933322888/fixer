import { Metadata } from "next";
import Link from "next/link";
import { FaFire, FaCheckCircle, FaTools, FaClock, FaShieldAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Oven Installation Ottawa | Professional Oven Setup Service",
  description: "Expert oven installation services in Ottawa. Professional installation for gas and electric ovens. Licensed technicians. Call now!",
  keywords: "oven installation Ottawa, wall oven installation, gas oven installation, electric oven installation, Ottawa ON",
};

export default function OvenInstallationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6"><FaFire className="text-[30px] mb-2 inline-block" /> Professional Oven Installation in Ottawa</h1>
            <p className="text-xl text-gray-100 mb-8">
              Expert oven installation for wall ovens, ranges, and double ovens. Safe, certified installation for all brands.
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
            <h2 className="heading-md mb-6">Professional Oven Installation Services</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Installing a new oven? Our experienced technicians provide expert installation services for all 
                types of ovens including wall ovens, ranges, double ovens, and convection ovens. We ensure proper 
                installation to manufacturer specifications.
              </p>
              <p>
                Whether you have a gas or electric oven, our licensed technicians have the expertise to install 
                it safely and correctly. We handle everything from positioning and electrical/gas connections to 
                calibration and testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">What's Included in Our Oven Installation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Professional oven positioning and securing",
              "Gas line connection (for gas ovens)",
              "Electrical hookup (for electric ovens)",
              "Temperature calibration",
              "Complete function testing",
              "Old oven removal and disposal",
              "Safety inspection included",
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
              <h3 className="text-xl font-bold mb-2">Expert Installation</h3>
              <p className="text-gray-600">Licensed technicians with extensive experience</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaClock className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Installation times that work for you</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaShieldAlt className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Warranty Included</h3>
              <p className="text-gray-600">Installation warranty for peace of mind</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4 text-white">Ready to Install Your New Oven?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your professional oven installation today. Expert installation with warranty included!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-accent-600 hover:bg-gray-100">
              Schedule Installation
            </Link>
            <Link href="/oven-repair" className="btn-outline border-white text-white hover:bg-white hover:text-accent-600">
              Need Repair Instead?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

