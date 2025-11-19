import { Metadata } from "next";
import Link from "next/link";
import { FaTshirt, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Vanier Washer Service – Honest, Reliable Repairs | Fixer",
  description: "Professional washer repair in Vanier, Ottawa. Local techs, same-day bookings, and a 90-day guarantee. Keep your laundry running smoothly — call today.",
};

const commonIssues = [
  {
    title: "Washer won't power on?",
    description: "In older Vanier homes, aging wiring or tripped breakers often cause this. If not electrical, the issue could be a bad latch or switch. We'll track it down and fix it.",
  },
  {
    title: "Draining problems?",
    description: "Kinked hoses or clogged pumps are frequent in tight laundry spaces. We'll inspect and restore proper drainage.",
  },
  {
    title: "Washer too loud on spin?",
    description: "Rattling or squealing is often from worn bearings or shocks. We'll diagnose and make sure your washer runs quietly.",
  },
  {
    title: "Door won't open?",
    description: "Locks and sensors on front-load washers in Vanier sometimes glitch. We'll safely open the door and fix the mechanism.",
  },
  {
    title: "Leaking water?",
    description: "Loose connections and aging seals often cause small puddles. We'll repair the leak before it spreads to your Vanier floors.",
  },
  {
    title: "Error messages?",
    description: "Codes like LE, UE, or OE are common. We'll interpret and repair the underlying problem.",
  },
];

const whyChooseUs = [
  "Local Vanier experts with 15+ years of experience",
  "Repairs and installations for all washer brands",
  "Same-day service available in multiple neighbourhoods",
  "90-day labour warranty with every repair",
];

const neighborhoods = [
  "Overbrook",
  "Beechwood Village",
  "Cardinal Glen",
  "Notre Dame des Champs",
];

const nearbyAreas = [
  { name: "Washer Repair Kanata", slug: "kanata" },
  { name: "Washer Repair Stittsville", slug: "stittsville" },
  { name: "Washer Repair Nepean", slug: "nepean" },
  { name: "Washer Repair Orleans", slug: "orleans" },
  { name: "Washer Repair Barrhaven", slug: "barrhaven" },
  { name: "Washer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Washer Repair Arnprior", slug: "arnprior" },
  { name: "Washer Repair Carleton Place", slug: "carleton-place" },
];

const vanierAttractions = [
  "Richelieu Park – wooded trails right in the city.",
  "Vanier Museopark – celebrating francophone heritage.",
  "Beechwood Avenue – cafés and unique shops.",
];

const faqs = [
  {
    question: "Do you offer urgent washer repairs in Vanier?",
    answer: "Yes — in many cases we can schedule you the same day.",
  },
  {
    question: "Do you fix both residential and small commercial washers?",
    answer: "Yes — we handle household units and some light commercial models.",
  },
  {
    question: "Do you work in nearby Ottawa East areas?",
    answer: "Yes — including Overbrook, Beechwood, and surrounding neighbourhoods.",
  },
];

const relatedServices = [
  { name: "Dryer Repair Vanier", href: "/dryer-repair/vanier" },
  { name: "Dishwasher Repair Vanier", href: "/dishwasher-repair" },
  { name: "Fridge Repair Vanier", href: "/fridge-repair/vanier" },
  { name: "Freezer Repair Vanier", href: "/freezer-repair/vanier" },
  { name: "Oven Repair Vanier", href: "/oven-repair/vanier" },
  { name: "Cooktop Repair Vanier", href: "/cooktop-repair/vanier" },
  { name: "Microwave Repair Vanier", href: "/microwave-repair/vanier" },
  { name: "Washer Installation Vanier", href: "/appliance-installation/washer" },
];

export default function WasherRepairVanierPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white"><FaTshirt className="text-[30px] mb-2 inline-block" /> Experienced Washer Repair in Vanier</h1>
            <p className="text-xl leading-relaxed mb-8">
              When your washer gives you trouble, count on Fixer Appliance Repair for fast, friendly service in Vanier. We've been repairing washers in Ottawa East for more than 15 years, providing same-day visits in many areas, transparent pricing, and a 90-day guarantee on our work.
            </p>
            <p className="text-lg">
              👉 For all appliance services in your area, check our{" "}
              <Link href="/service-areas/vanier" className="font-semibold hover:underline">
                Vanier appliance repair page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Common Washer Issues */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Washer Issues We Fix in Vanier</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {commonIssues.map((issue, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{issue.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{issue.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Washer Installation CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">New Washer? We Can Install It</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Got a new washer? We also provide washer installation in Vanier with same-day service available in most areas.
          </p>
          <Link href="/appliance-installation/washer" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Learn About Washer Installation
          </Link>
        </div>
      </section>

      <BenefitsSection applianceName="Washer" benefits={whyChooseUs} />

      {/* Service Area */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Service Area</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              We provide appliance repair services across the entire Vanier area, including:
            </p>
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {neighborhoods.map((neighborhood, index) => (
                  <span key={index} className="px-4 py-2 bg-primary-50 text-gray-900 rounded-lg">
                    {neighborhood}
                  </span>
                ))}
                <span className="px-4 py-2 bg-primary-50 text-gray-900 rounded-lg">
                  and surrounding neighbourhoods
                </span>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 text-center">
              We also provide:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {nearbyAreas.map((area, index) => (
                <Link 
                  key={index} 
                  href={`/washer-repair/${area.slug}`}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-primary-50 transition-colors shadow-sm"
                >
                  <FaMapMarkerAlt className="text-primary-600 text-lg flex-shrink-0" />
                  <p className="text-gray-700 hover:text-primary-700 font-medium">{area.name}</p>
                </Link>
              ))}
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700">
                👉 Need washer help across Ottawa? Learn more about our{" "}
                <Link href="/washer-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
                  washer repair in Ottawa
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Things to Do */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-4">Explore Vanier While We Fix Your Washer</h2>
            <p className="text-lg text-gray-700 mb-6">
              While we repair your appliance, discover:
            </p>
            <ul className="space-y-3 text-gray-700">
              {vanierAttractions.map((attraction, index) => (
                <li key={index}>{attraction}</li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 mt-6">
              Want to catch a live event or exhibit? Check what's happening this week:
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 font-medium ml-2 hover:underline"
              >
                Ottawa Tourism Events
              </a>
            </p>
          </div>
        </div>
      </section>

      <FAQSection applianceName="Washer" faqs={faqs} />

      {/* Contact CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-6 text-white">Ready to Fix Your Washer in Vanier?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            From noisy spins to leaks, our Vanier washer repair pros fix it right the first time — call us now!
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-2xl">
              📞 Call/Text: <a href="tel:613-413-6969" className="font-semibold hover:underline">613-413-6969</a>
            </p>
            <p className="text-xl">
              📧 Email: <a href="mailto:service@fixerappliancerepair.ca" className="font-semibold hover:underline">service@fixerappliancerepair.ca</a>
            </p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Also Need Help With...</h2>
            <p className="text-center text-gray-700 mb-8">
              We do more than just washer repair — check out our other Ottawa services:
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              {relatedServices.map((service, index) => (
                <Link 
                  key={index}
                  href={service.href}
                  className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors font-semibold"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
