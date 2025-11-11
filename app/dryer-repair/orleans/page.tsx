import { Metadata } from "next";
import Link from "next/link";
import { FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Orleans Dryer Repair – Fast, Local Service | Fixer",
  description: "Professional dryer repair in Orleans. Local technicians, clear pricing, and a 90-day warranty. Same-day visits available in many neighbourhoods.",
};

const commonIssues = [
  {
    title: "Dryer won't power on",
    description: "In Orleans homes, this is often a blown fuse, faulty start switch, or bad outlet. We'll test each part and fix the root issue.",
  },
  {
    title: "Not heating at all",
    description: "A burned-out heating element or tripped thermostat can leave clothes cold and wet. We'll restore proper heat.",
  },
  {
    title: "Strange scraping noises",
    description: "Usually worn drum glides or loose blower wheels. We'll track down the sound and replace the faulty parts.",
  },
  {
    title: "Drum won't spin",
    description: "Broken belts or seized motors stop the drum from turning. We'll diagnose quickly and replace what's needed.",
  },
  {
    title: "Takes too long to dry",
    description: "Blocked vents or faulty sensors reduce airflow. We'll clean out lint and check all internal systems.",
  },
  {
    title: "Shuts down mid-cycle",
    description: "Often caused by overheating or a bad thermal fuse. We'll repair it so the cycle runs to the end.",
  },
  {
    title: "Clothes still damp",
    description: "Moisture sensors or clogged ducts are common culprits. We'll calibrate or replace the sensor and clear airflow paths.",
  },
  {
    title: "Door won't close securely",
    description: "Damaged latches and hinges are easy fixes. We'll get the door sealing again.",
  },
];

const whyChooseUs = [
  "Over 15 years of hands-on dryer repair experience",
  "Same-day service available in many Orleans neighbourhoods",
  "Honest service with no hidden fees",
  "Fully stocked vans for faster repairs in one visit",
  "90-day warranty on all labour for peace of mind",
];

const neighborhoods = [
  "Fallingbrook",
  "Avalon",
  "Queenswood Heights",
  "Chapel Hill",
  "Convent Glen",
];

const nearbyAreas = [
  { name: "Dryer Repair Kanata", slug: "kanata" },
  { name: "Dryer Repair Stittsville", slug: "stittsville" },
  { name: "Dryer Repair Nepean", slug: "nepean" },
  { name: "Dryer Repair Vanier", slug: "vanier" },
  { name: "Dryer Repair Barrhaven", slug: "barrhaven" },
  { name: "Dryer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dryer Repair Arnprior", slug: "arnprior" },
  { name: "Dryer Repair Carleton Place", slug: "carleton-place" },
];

const orleansAttractions = [
  "Petrie Island – a local gem with beaches and trails.",
  "Shenkman Arts Centre – catch a live performance or exhibit.",
  "Place d'Orleans – plenty of shopping and dining choices.",
];

const faqs = [
  {
    question: "Can I get same-day dryer repair in Orleans?",
    answer: "Often yes — call us early, and we'll confirm today's availability.",
  },
  {
    question: "Why is my dryer running but not heating?",
    answer: "Usually it's a failed heating element, blown fuse, or vent issue. We'll diagnose it quickly.",
  },
  {
    question: "Do you install new dryers as well as repair them?",
    answer: "Yes, we provide dryer installation in Orleans — using your existing hookups.",
  },
  {
    question: "Do you service nearby areas outside Orleans?",
    answer: "Yes — including Fallingbrook, Avalon, and Chapel Hill.",
  },
  {
    question: "What warranty do you offer on dryer repairs?",
    answer: "All labour is covered by our 90-day warranty.",
  },
];

const relatedServices = [
  { name: "Washer Repair Orleans", href: "/washer-repair/orleans" },
  { name: "Dishwasher Repair Orleans", href: "/dishwasher-repair" },
  { name: "Fridge Repair Orleans", href: "/fridge-repair" },
  { name: "Freezer Repair Orleans", href: "/freezer-repair" },
  { name: "Oven Repair Orleans", href: "/oven-repair" },
  { name: "Electric Cooktop Repair Orleans", href: "/cooktop-repair" },
  { name: "Microwave Repair Orleans", href: "/microwave-repair" },
  { name: "Dryer Installation Orleans", href: "/dryer-installation" },
];

export default function DryerRepairOrleansPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white">Expert Dryer Repair in Orleans, ON</h1>
            <p className="text-xl leading-relaxed mb-8">
              Dryer taking two cycles to dry a single load? Fixer Appliance Repair serves Orleans with quick, reliable dryer service. From heating element failures to noisy drums, our local team restores your laundry routine with upfront pricing and a 90-day guarantee. We repair all major brands, including LG, Samsung, Whirlpool, GE, and Maytag.
            </p>
            <p className="text-lg">
              👉 For all appliance services in your area, check our{" "}
              <Link href="/orleans" className="font-semibold hover:underline">
                Orleans appliance repair page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Common Dryer Issues */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Dryer Issues We Fix in Orleans</h2>
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

      {/* Dryer Installation Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-6">Dryer Installation Services</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 mb-6">
                <strong>Looking for dryer installation in Orleans?</strong> Check our{" "}
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                  repair vs. replace guide
                </Link>
                {" "}before you buy — it compares costs, reliability, and lifespan.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                If you've already picked a new unit, we'll install and test it in Orleans using your current power setup.
              </p>
              <p className="text-gray-700 mb-6">
                👉 We don't add high-voltage wiring or new venting.
              </p>
              <div className="text-center">
                <Link href="/dryer-installation" className="btn-primary">
                  Learn more about Installation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">Why Choose Us for Dryer Repair</h2>
            <div className="space-y-4">
              {whyChooseUs.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary-600 text-2xl flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Service Area</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              We provide appliance repair services across the entire Orleans area, including:
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
              We proudly serve nearby locations such as:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {nearbyAreas.map((area, index) => (
                <Link 
                  key={index} 
                  href={`/dryer-repair/${area.slug}`}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-primary-50 transition-colors shadow-sm"
                >
                  <FaMapMarkerAlt className="text-primary-600 text-lg flex-shrink-0" />
                  <p className="text-gray-700 hover:text-primary-700 font-medium">{area.name}</p>
                </Link>
              ))}
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700">
                👉 Need dryer help across Ottawa? Learn more about our{" "}
                <Link href="/dryer-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Dryer Repair Ottawa
                </Link>
                {" "}page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enjoy Orleans While We Service Your Dryer */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Enjoy Orleans While We Service Your Dryer</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Take some time to explore the neighborhood:
            </p>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-6">
              <ul className="space-y-4">
                {orleansAttractions.map((attraction, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary-600 text-xl">•</span>
                    <p className="text-gray-700 text-lg">{attraction}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center bg-primary-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                👉 Find events in Orleans this month:
              </p>
              <a 
                href="https://ottawatourism.ca/en/see-and-do/events" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                Ottawa Events Calendar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">FAQ – Dryer Repair in Orleans</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-6 text-white">Schedule Your Dryer Repair in Orleans</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Dryer giving you trouble? We're ready to help. Contact Fixer Appliance Repair today:
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
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-8">Also Need Help With…</h2>
            <p className="text-center text-gray-700 mb-8">
              Our expertise goes beyond dryers — here's what else we do in Orleans:
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
            <p className="text-center text-gray-700 mt-8">
              Need a different appliance fixed? We've got you covered in Orleans.
            </p>
            <p className="text-center text-gray-900 font-semibold mt-4">
              Fixer Appliance Repair — your friendly dryer repair team in Orleans.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

