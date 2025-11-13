import { Metadata } from "next";
import Link from "next/link";
import { FaCheckCircle, FaPhone, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Fixer Appliance Repair Inc. – Ottawa Appliance Experts",
  description: "Family-owned Ottawa appliance repair by Michael R. – 15+ years of trusted service, friendly approach, and a 90-day guarantee.",
};

const whatMakesUsDifferent = [
  "Family-Owned & Local – We live and work right here in Ottawa",
  "Fast Response – Same-day appliance repair available in many areas",
  "Expertise You Can Trust – 15+ years in the appliance service industry",
  "Friendly Service – Building trust one repair at a time",
  "Clear Pricing – No hidden fees or surprises",
  "90-Day Warranty – On all completed repairs",
];

const serviceAreas = [
  "Kanata",
  "Stittsville",
  "Nepean",
  "Carp",
  "Orleans",
  "Barrhaven",
  "Vanier",
  "Arnprior",
  "Carleton Place",
  "Mississippi Mills",
];

const brands = [
  "Bosch",
  "Frigidaire",
  "GE",
  "Kenmore",
  "LG",
  "Maytag",
  "Panasonic",
  "Samsung",
  "Whirlpool",
  "Electrolux",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">About Fixer Appliance Repair Inc.</h1>
            <p className="text-xl text-gray-100">
              Family-owned, locally trusted, and dedicated to keeping your appliances running smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                <strong>Fixer Appliance Repair Inc.</strong> is a family-owned business proudly serving Ottawa and the surrounding communities. Led by owner and head technician <strong>Michael R.</strong>, we bring over 15 years of hands-on experience in appliance repair and installation of all major household appliances.
              </p>
              <p>
                Michael is well-known among our customers — not only for his technical skills, but also for his friendly approach and dedication to doing the job right the first time. Many clients recognize him instantly from past visits, which is why we proudly feature his photo here on our website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                <Image
                  src="/gallery/output2.jpg"
                  alt="Michael R. - Owner & Head Technician at Fixer Appliance Repair"
                  fill
                  style={{ objectFit: 'cover' }}
                  quality={85}
                />
              </div>
              <p className="text-center text-gray-600 italic">
                Michael R - Owner & Head Technician
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                What began as a small local service run from our home has grown into a trusted Ottawa appliance repair company. Over the years, we've repaired thousands of appliances, built long-term relationships with our customers, and earned a reputation for reliability, honesty, and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">What Makes Us Different</h2>
            <div className="space-y-4">
              {whatMakesUsDifferent.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-6 rounded-lg shadow-sm">
                  <FaCheckCircle className="text-primary-600 text-2xl flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Our Service Areas</h2>
            <p className="text-center text-gray-700 text-lg mb-8">
              We proudly serve Ottawa and nearby communities, including:
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {serviceAreas.map((area, index) => {
                const slug = area.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link
                    key={index}
                    href={`/service-areas/${slug}`}
                    className="px-4 py-2 bg-primary-50 text-gray-900 rounded-lg font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors"
                  >
                    {area}
                  </Link>
                );
              })}
              <span className="px-4 py-2 bg-primary-50 text-gray-900 rounded-lg font-medium">
                and more
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8"> <Link href="/brands" className="text-primary-600 hover:text-primary-700 font-semibold">Brands We Service</Link></h2>
            <p className="text-center text-gray-700 text-lg mb-8">
              We work with all major appliance brands, including:
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {brands.map((brand, index) => {
                const slug = brand.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link
                    key={index}
                    href={`/brands/${slug}`}
                    className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold shadow-sm hover:bg-primary-50 hover:text-primary-700 transition-colors"
                  >
                    {brand}
                  </Link>
                );
              })}
            </div>
            <p className="text-center text-gray-700">
              KitchenAid, and others
            </p>
          </div>
        </div>
      </section>

      {/* A Friendly Note from Michael */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-8 text-white">A Friendly Note from Michael</h2>
            <blockquote className="text-xl italic leading-relaxed mb-6">
              "My goal is simple — to fix your appliance quickly, properly, and with respect for your home. Every repair is personal to me, and I want every customer to feel confident they've made the right choice."
            </blockquote>
            <p className="text-lg font-semibold">— Michael</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-8">Ready to Get Your Appliance Fixed?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Call us today to schedule your appliance repair in Ottawa. We're here to help!
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-3 text-xl">
              <FaPhone className="text-primary-600" />
              <a href="tel:613-413-6969" className="text-primary-600 hover:text-primary-700 font-semibold">
                613-413-6969
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 text-xl">
              <FaEnvelope className="text-primary-600" />
              <a href="mailto:service@fixerappliancerepair.ca" className="text-primary-600 hover:text-primary-700 font-semibold">
                service@fixerappliancerepair.ca
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Note */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-700">
              We value your trust and take your privacy seriously. You can read more in our{" "}
              <Link href="/privacy-policy" className="text-primary-600 hover:text-primary-700 font-semibold">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

