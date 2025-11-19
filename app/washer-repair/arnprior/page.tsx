import { Metadata } from "next";
import Link from "next/link";
import { FaTshirt, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Arnprior Washer Service – Local, Friendly Technicians | Fixer",
  description: "Reliable washer repair in Arnprior. Prompt service, clear pricing, and a 90-day warranty. Same-day appointments available in many neighbourhoods.",
};

const commonIssues = [
  {
    title: "Washer won't turn on?",
    description: "In Arnprior households, power surges or older electrical systems sometimes cause this. If the outlet checks out, it may be a latch or switch issue. We'll handle the fix.",
  },
  {
    title: "Not draining properly?",
    description: "Blocked hoses or pumps often stop Arnprior washers from draining. We'll clear the blockage so your laundry finishes without standing water.",
  },
  {
    title: "Strange noises while spinning?",
    description: "Loud thumps and rattles often come from worn suspension rods or unbalanced loads. We'll steady the washer and replace parts if necessary.",
  },
  {
    title: "Washer door won't open?",
    description: "Lock malfunctions or electronic glitches can trap laundry inside. We'll free the door and repair the faulty lock.",
  },
  {
    title: "Water on the floor?",
    description: "Leaks from hoses, seals, or valves are common. We'll pinpoint the cause and stop the leak before it causes water damage.",
  },
  {
    title: "Error codes on screen?",
    description: "Flashing LE, UE, or other codes are frequent across major brands. We'll read the code and fix the issue fast.",
  },
];

const whyChooseUs = [
  "Local Arnprior technicians — fast, reliable, and friendly",
  "Service for all major washer makes and models",
  "Same-day appointments where possible",
  "Workmanship guaranteed for 90 days",
];

const neighborhoods = [
  "Downtown Arnprior",
  "Braeside",
  "McNab",
  "White Lake",
  "Sand Point",
];

const nearbyAreas = [
  { name: "Washer Repair Kanata", slug: "kanata" },
  { name: "Washer Repair Stittsville", slug: "stittsville" },
  { name: "Washer Repair Nepean", slug: "nepean" },
  { name: "Washer Repair Orleans", slug: "orleans" },
  { name: "Washer Repair Vanier", slug: "vanier" },
  { name: "Washer Repair Barrhaven", slug: "barrhaven" },
  { name: "Washer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Washer Repair Carleton Place", slug: "carleton-place" },
];

const arnpriorAttractions = [
  "Robert Simpson Park – waterfront views and sandy beach.",
  "Gillies Grove – beautiful old-growth forest trails.",
  "Downtown Arnprior – shops, cafés, and small-town charm.",
];

const faqs = [
  {
    question: "Do you offer same-day washer repair in Arnprior?",
    answer: "Yes — in many cases we can visit the same day you call.",
  },
  {
    question: "Do you work on stacked washer-dryer units?",
    answer: "Absolutely — we service both individual and stacked units.",
  },
  {
    question: "Do you cover rural areas near Arnprior?",
    answer: "Yes — including White Lake, Pakenham, and Braeside.",
  },
];

const relatedServices = [
  { name: "Dryer Repair Arnprior", href: "/dryer-repair" },
  { name: "Dishwasher Repair Arnprior", href: "/dishwasher-repair" },
  { name: "Fridge Repair Arnprior", href: "/fridge-repair" },
  { name: "Freezer Repair Arnprior", href: "/freezer-repair" },
  { name: "Oven Repair Arnprior", href: "/oven-repair" },
  { name: "Cooktop Repair Arnprior", href: "/cooktop-repair" },
  { name: "Microwave Repair Arnprior", href: "/microwave-repair" },
  { name: "Washer Installation Arnprior", href: "/washer-installation" },
];

export default function WasherRepairArnpriorPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white"><FaTshirt className="text-[30px] mb-2 inline-block" /> Local Washer Repair Specialists in Arnprior</h1>
            <p className="text-xl leading-relaxed mb-8">
              From rural properties to downtown homes, Fixer Appliance Repair keeps Arnprior's washers running smoothly. Our technicians handle everything from poor drainage to complete breakdowns, with honest pricing and a 90-day service warranty. In many cases, we can even offer same-day appointments.
            </p>
            <p className="text-lg">
              👉 For all appliance services in your area, check our{" "}
              <Link href="/service-areas/arnprior" className="font-semibold hover:underline">
                Arnprior appliance repair page
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
            <h2 className="heading-md text-center mb-12">Common Washer Issues We Fix in Arnprior</h2>
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
            Got a new washer? We also provide washer installation in Arnprior with same-day service available in most areas.
          </p>
          <Link href="/washer-installation" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
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
              We provide appliance repair services across the entire Arnprior area, including:
            </p>
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {neighborhoods.map((neighborhood, index) => (
                  <span key={index} className="px-4 py-2 bg-primary-50 text-gray-900 rounded-lg">
                    {neighborhood}
                  </span>
                ))}
                <span className="px-4 py-2 bg-primary-50 text-gray-900 rounded-lg">
                  and surrounding rural neighbourhoods
                </span>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 text-center">
              We also offer:
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
                👉 Need washer help across the city? Learn more about our{" "}
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
            <h2 className="heading-md mb-4">Explore Arnprior While We Fix Your Washer</h2>
            <p className="text-lg text-gray-700 mb-6">
              While we handle the repair, discover the area:
            </p>
            <ul className="space-y-3 text-gray-700">
              {arnpriorAttractions.map((attraction, index) => (
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
          <h2 className="heading-md mb-6 text-white">Ready to Book Your Washer Repair in Arnprior?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't let a broken washer slow you down. Our Arnprior team offers quick, reliable repairs — book now!
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
