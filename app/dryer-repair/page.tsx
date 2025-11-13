import { Metadata } from "next";
import Link from "next/link";
import BenefitsSection from "@/components/BenefitsSection";
import { FaMapMarkerAlt, FaUtensils, FaTree, FaBook } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Dryer Repair Ottawa – Fast & Reliable Service | Fixer",
  description: "Need dryer repair in Ottawa? Fixer offers same-day service, repairs for all major electric dryers, and a 90-day warranty. Call 613-413-6969 today!",
};

const commonIssues = [
  {
    title: "Dryer not heating",
    description: "This is usually caused by a faulty heating element, blown thermal fuse, or bad thermostat. We'll run a diagnostic and replace what's needed.",
  },
  {
    title: "Dryer takes too long to dry",
    description: "Clogged vents, weak heating, or sensor issues could be to blame. We'll get your dryer working efficiently again.",
  },
  {
    title: "Clothes come out damp or cold",
    description: "If your dryer runs but doesn't fully dry the clothes, it may be cycling too early or overheating and shutting down. We'll inspect the sensors and controls.",
  },
  {
    title: "Dryer won't start",
    description: "A broken start switch, bad door latch, or faulty control board may be the issue. We'll troubleshoot and repair it quickly.",
  },
  {
    title: "Drum not spinning",
    description: "Could be due to a worn belt, motor failure, or idler pulley issue. We'll inspect and replace the necessary parts.",
  },
  {
    title: "Dryer makes loud noises or squeaks",
    description: "Grinding, thumping, or squealing noises usually mean worn drum bearings, support rollers, or a damaged belt.",
  },
  {
    title: "Error codes or flashing lights",
    description: "We'll decode the error message and get to the root of the issue — whether it's heating, sensors, or control board.",
  },
  {
    title: "Dryer shuts off mid-cycle",
    description: "Often caused by overheating, faulty moisture sensors, or loose wiring. We'll restore proper function and safety.",
  },
  {
    title: "Washer/Dryer Combo Units",
    description: "We also service washer/dryer combo appliances — especially common in downtown Ottawa condos.",
  },
  {
    title: "Dryer smells like something is burning",
    description: "This could be due to lint buildup inside the drum or vent, or an overheating motor. We'll inspect it thoroughly to prevent fire risks.",
  },
  {
    title: "Dryer keeps tripping the breaker",
    description: "This often signals an electrical short, faulty wiring, or overheating components. Let our licensed technicians take a look.",
  },
  {
    title: "Dryer won't stop running",
    description: "A faulty timer, control board, or moisture sensor may prevent the cycle from ending. We'll pinpoint the issue and fix it.",
  },
  {
    title: "Dryer door won't stay closed",
    description: "A worn or broken door latch or strike plate can prevent the dryer from operating. We'll replace the faulty components.",
  },
  {
    title: "Dryer makes a clicking noise but doesn't start",
    description: "This could mean the motor is trying to engage but is jammed or failing. We'll safely open it up and find the source.",
  },
];

const whyChooseUs = [
  "Over 15 years of experience",
  "Same-day and next-day appointments",
  "Transparent pricing, no pressure",
  "90-day labour warranty",
  "Locally owned and operated in Ottawa",
];

const brands = [
  { name: "Bosch", href: "/brands/bosch" },
  { name: "Frigidaire", href: "/brands/frigidaire" },
  { name: "GE", href: "/brands/ge" },
  { name: "Kenmore", href: "/brands/kenmore" },
  { name: "LG", href: "/brands/lg" },
  { name: "Maytag", href: "/brands/maytag" },
  { name: "Panasonic", href: "/brands/panasonic" },
  { name: "Samsung", href: "/brands/samsung" },
  { name: "Whirlpool", href: "/brands/whirlpool" },
  { name: "Electrolux", href: "?" },
];

const serviceAreas = [
  "Kanata",
  "Stittsville",
  "Nepean",
  "Orleans",
  "Vanier",
  "Barrhaven",
  "Carp",
  "Arnprior",
  "Carleton Place",
  "Mississippi Mills",
];

const faqs = [
  {
    question: "How much does dryer repair cost in Ottawa?",
    answer: "Most dryer repairs in Ottawa range from $150 to $300, depending on the issue and the brand. We'll always give you a clear quote before starting any work — no surprises.",
  },
  {
    question: "How long does a typical dryer repair take?",
    answer: "Most repairs take less than 90 minutes. If parts are needed, we'll let you know up front and schedule a fast return visit.",
  },
  {
    question: "Is it worth repairing a dryer?",
    answer: "Yes, especially if your dryer is less than 10 years old. Repairs are often far more affordable than replacement. Not sure? Our repair vs replace guide is coming soon.",
  },
  {
    question: "Are tumble dryers worth repairing?",
    answer: "Tumble dryers are absolutely repairable — most issues involve heating elements, belts, or sensors and can be fixed quickly by a professional.",
  },
  {
    question: "Do you fix washer/dryer combo units?",
    answer: "Yes — we frequently repair stacked and combo units in Ottawa condos and apartments.",
  },
  {
    question: "Do you repair electric dryers?",
    answer: "Yes. We do not service gas dryers, but we specialize in electric models.",
  },
  {
    question: "What is the most common problem with dryers?",
    answer: "The most common issues include no heat, long drying times, and loud noises. These are usually related to the heating element or ventilation system.",
  },
  {
    question: "Should I repair or replace my dryer?",
    answer: "If your dryer is under 10 years old, repair is almost always the better option. For older units, we'll give you honest advice based on cost and condition. Our comparison guide is coming soon.",
  },
  {
    question: "Why does my dryer smell like burning?",
    answer: "This could be due to lint buildup, an overheating motor, or a failing heating element. It's best to stop using the unit and have it inspected immediately.",
  },
  {
    question: "Can I run my dryer if it's making noise?",
    answer: "Loud or unusual noises often indicate worn parts like rollers or belts. Continued use could cause more damage, so it's best to have it checked promptly.",
  },
  {
    question: "Why is my dryer shutting off after a few minutes?",
    answer: "It might be overheating due to a clogged vent, faulty thermostat, or sensor issue. We can quickly identify and resolve the problem.",
  },
  {
    question: "Do you offer same-day dryer repair in Ottawa?",
    answer: "Yes! We offer same-day or next-day appointments in Ottawa and surrounding areas, depending on availability.",
  },
];

const ottawaAttractions = [
  "National Gallery of Canada – stunning exhibitions and iconic architecture",
  "Major's Hill Park – peaceful green space just steps from downtown",
  "Elgin Street – full of great lunch spots and cozy cafés",
  "Canadian Museum of Nature – perfect for kids and curious minds",
];

const relatedServices = [
  { name: "Washer Repair Ottawa", href: "/washer-repair" },
  { name: "Fridge Repair Ottawa", href: "/fridge-repair" },
  { name: "Freezer Repair Ottawa", href: "/freezer-repair" },
  { name: "Dishwasher Repair Ottawa", href: "/dishwasher-repair" },
  { name: "Oven Repair Ottawa", href: "/oven-repair" },
  { name: "Cooktop Repair Ottawa", href: "/cooktop-repair" },
  { name: "Microwave Repair Ottawa", href: "/microwave-repair" },
  { name: "Dryer Installation Ottawa", href: "/dryer-installation" },
];

export default function DryerRepairPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white">Fast & Reliable Dryer Repair Across Ottawa</h1>
            <p className="text-xl leading-relaxed mb-8">
              Is your dryer not heating, taking forever to dry clothes, or making unusual noises? Fixer Appliance Repair offers professional dryer repair services throughout Ottawa — from central neighbourhoods to nearby suburbs. We repair all major electric dryers, including many stacked and condo-friendly models. Whether it's Whirlpool, LG, Samsung, or another trusted brand — we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-500 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                Book Online
              </Link>
              <a href="tel:613-413-6969" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500">
                Call us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Common Dryer Problems */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">🔧 Common Dryer Problems We Fix</h2>
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

      <BenefitsSection applianceName="Dryer" benefits={whyChooseUs} />

      {/* Repair or Replace */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Repair or Replace?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Wondering if your dryer is still worth fixing? Read our dryer repair vs. replacement guide to weigh your options before you buy a new one.
            </p>
            <Link href="/repair-vs-replace" className="btn-primary">
              Read Our Repair vs. Replace Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Dryer Installation CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">New Dryer? We Can Install It</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Got a new dryer? We also provide dryer installation in Ottawa with same-day service available in most areas.
          </p>
          <Link href="/dryer-installation" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Learn About Dryer Installation
          </Link>
        </div>
      </section>

      {/* Brands We Repair */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8"> <Link href="/brands" className="text-primary-600 hover:text-primary-700 font-semibold">Brands We Repair</Link></h2>
            <p className="text-center text-gray-700 mb-8">
              From LG to Whirlpool, we work with all major electric dryer brands. Here are some of the brands we repair every week in Ottawa:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {brands.map((brand, index) => (
                <Link
                  key={index}
                  href={brand.href}
                  className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors"
                >
                  <p className="font-semibold text-gray-900 hover:text-primary-700">{brand.name}</p>
                </Link>
              ))}
            </div>
            <p className="text-center text-gray-700">
              Not sure what model you have? Just send us a quick photo or the serial number — we'll take it from there.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">We Repair Dryers Across Ottawa</h2>
            <p className="text-center text-gray-700 mb-8">
              We proudly repair dryers across all Ottawa neighborhoods, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {serviceAreas.map((area, index) => {
                const slug = area.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link 
                    key={index} 
                    href={`/dryer-repair/${slug}`}
                    className="text-center p-3 bg-white rounded-lg shadow-sm hover:bg-primary-50 hover:shadow-md transition-all"
                  >
                    <p className="text-gray-900 font-medium hover:text-primary-700">{area}</p>
                  </Link>
                );
              })}
            </div>
            <p className="text-center text-gray-700">
              If you don't see your area listed — feel free to ask. Chances are, we're already nearby.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">Frequently Asked Questions (FAQs)</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Q: {faq.question}</h3>
                  <p className="text-gray-700">A: {faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Things to Do */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-4">Things to Do in Ottawa While We Repair Your Dryer</h2>
            <p className="text-lg text-gray-700 mb-6">
              Waiting for your dryer to get fixed? It's a great excuse to step out and enjoy the city. Whether you're into art, nature, or relaxing with a good book, Ottawa has something nearby:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {ottawaAttractions.map((attraction, index) => {
                const icons = [FaMapMarkerAlt, FaTree, FaUtensils, FaBook];
                const Icon = icons[index % icons.length];
                const parts = attraction.split(" – ");
                const name = parts[0];
                const description = parts[1] || "";
                return (
                  <div key={index} className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-accent-500 flex items-start gap-4">
                    <Icon className="text-accent-500 text-xl flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
                      <p className="text-gray-600 text-sm">{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 bg-gradient-to-r from-accent-50 to-primary-50 border border-accent-200 rounded-lg p-6 text-center">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Want to catch a live event or exhibit?
              </p>
              <p className="text-gray-700 mb-3">
                Check what's happening this week:
              </p>
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-600 font-semibold hover:text-accent-700 hover:underline transition-colors"
              >
                Ottawa Tourism Events
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4 text-white">Book Your Dryer Repair in Ottawa</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't wait for the laundry to pile up — schedule your dryer repair today. Call, text, or book online and let Fixer bring the heat back to your laundry routine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:613-413-6969"
              className="btn-primary bg-white text-accent-600 hover:bg-gray-100"
            >
              Call or Text (613) 413-6969
            </a>
            <Link
              href="/contact"
              className="btn-outline border-white text-white hover:bg-white hover:text-accent-600"
            >
              Book Online Now
            </Link>
          </div>
          <p className="text-lg text-white/90 mt-6">
            Email:{" "}
            <a href="mailto:service@fixerappliancerepair.ca" className="underline text-white">
              service@fixerappliancerepair.ca
            </a>
          </p>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Also Need Help With...</h2>
            <p className="text-center text-gray-700 mb-8">
              We do more than just dryer repair — check out our other Ottawa services:
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
