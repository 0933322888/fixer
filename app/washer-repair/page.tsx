import { Metadata } from "next";
import Link from "next/link";
import { FaTshirt, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import ServiceHero from "@/components/ServiceHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Washer Repair Ottawa | Fast & Reliable Washing Machine Repair",
  description: "Professional washer repair services across Ottawa. Same-day service available. We fix all brands and models. Call 613-413-6969 for fast, reliable washer repair.",
  keywords: "washer repair Ottawa, washing machine repair, washer not draining, washer not spinning, Ottawa ON",
};

const washerProblems = [
  {
    title: "Washer won't turn on",
    description: "First, check the power cord and circuit breaker. If that's not the issue, it could be a faulty door latch, control board, or start switch. We'll diagnose it quickly.",
  },
  {
    title: "Washer not draining",
    description: "If water stays in the drum, the culprit might be a clogged drain pump, kinked hose, or worn-out pump motor. We'll clear it or replace what's needed.",
  },
  {
    title: "Washer not spinning or agitating",
    description: "A non-spinning washer could be due to a bad lid switch, motor coupling, or worn belt. Sometimes it's just an unbalanced load. Let us check it out.",
  },
  {
    title: "Strange noises or vibrations",
    description: "Thumping, squealing, or shaking can point to drum issues, loose bearings, or shock absorbers. We'll track down the cause and stop the noise.",
  },
  {
    title: "Leaking water",
    description: "Leaks usually come from worn door seals, cracked hoses, or loose connections. We'll pinpoint the source and make sure it's watertight again.",
  },
  {
    title: "Door won't unlock",
    description: "When the door stays locked after a cycle, it could be a faulty latch or a sensor error. We can unlock it safely and replace the part if needed.",
  },
  {
    title: "Error codes on the display",
    description: "Flashing codes? We'll decode them and explain what's going on — whether it's a sensor issue, water flow problem, or something else.",
  },
  {
    title: "Clothes still wet after final cycle",
    description: "If your washer finishes but clothes are soaking, it may not be spinning properly. It could be a drainage issue, unbalanced load, or motor problem.",
  },
  {
    title: "Washer starts then stops",
    description: "If your washer begins a cycle but shuts off too soon, it may be overheating, have a faulty sensor, or be experiencing power issues. We'll find the root cause.",
  },
  {
    title: "Washer won't fill with water",
    description: "When the drum stays dry, the problem could be with the inlet valve, water supply hoses, or even the control board. We'll check each part step-by-step.",
  },
  {
    title: "Washer overfills or leaks during fill",
    description: "Too much water can lead to leaks and flooding. This might be caused by a faulty pressure switch or inlet valve. We'll stop the overflow before it causes damage.",
  },
  {
    title: "Washer smells bad",
    description: "A musty or sour smell usually means mold or detergent buildup inside the drum, gasket, or dispenser. We'll deep-clean and advise on prevention.",
  },
  {
    title: "Washer shakes or \"walks\" across the floor",
    description: "If your washer shifts during a cycle, it could be unbalanced, poorly leveled, or have worn-out shock absorbers. We'll stabilize it properly.",
  },
];

const whyChooseUs = [
  "Over 15 years of washer repair experience in Ottawa homes",
  "Same-day bookings available across the city",
  "We service all major washer brands",
  "Friendly, upfront pricing and no surprises",
  "Local team that knows your neighborhood",
  "We bring the tools and parts needed for most washer repairs on the first visit",
];

const brands = [
  "LG",
  "Samsung",
  "Whirlpool",
  "GE",
  "Maytag",
  "Frigidaire",
  "Bosch",
  "Electrolux",
  "Amana",
  "Kenmore",
];

const serviceAreas = [
  { name: "Kanata", slug: "kanata" },
  { name: "Carp", slug: "carp" },
  { name: "Stittsville", slug: "stittsville" },
  { name: "Nepean", slug: "nepean" },
  { name: "Orleans", slug: "orleans" },
  { name: "Barrhaven", slug: "barrhaven" },
  { name: "Vanier", slug: "vanier" },
  { name: "Arnprior", slug: "arnprior" },
  { name: "Carleton Place", slug: "carleton-place" },
  { name: "Mississippi Mills", slug: "mississippi-mills" },
];

const faqs = [
  {
    question: "Why won't my washing machine drain properly?",
    answer: "It could be due to a clogged drain hose, faulty pump, or debris in the filter. A technician can quickly diagnose the exact cause.",
  },
  {
    question: "Is it worth repairing an old washer or should I replace it?",
    answer: "It depends on the model and issue. If the machine is under 10 years old and the repair is minor, it's usually worth fixing.",
  },
  {
    question: "How long does a typical washer repair take?",
    answer: "Most repairs are completed in under 2 hours. We carry common parts to speed up the process.",
  },
  {
    question: "Do you offer same-day washer repair in Ottawa?",
    answer: "Yes, we offer same-day or next-day appointments across Ottawa and nearby suburbs.",
  },
  {
    question: "Do you repair washer/dryer combo units?",
    answer: "Yes! We service washer/dryer combos, especially common in downtown condos and smaller homes.",
  },
  {
    question: "What causes a washing machine to stop mid-cycle?",
    answer: "It could be due to a faulty door lock, control board, or a power interruption. Our techs can run a quick diagnostic and get it running again.",
  },
  {
    question: "Why is my washing machine shaking or walking across the floor?",
    answer: "This often happens if the machine is unbalanced or the shock absorbers are worn. We'll stabilize it so it stays in place.",
  },
  {
    question: "Why does my washer smell bad even after cleaning?",
    answer: "Mold and detergent buildup in the drum or gasket are common culprits. We'll clean it properly and give you tips to prevent it.",
  },
  {
    question: "Do you offer a warranty on washer repairs?",
    answer: "Yes — all our repairs come with a 90-day labour warranty. We stand behind our work.",
  },
];

const ottawaAttractions = [
  {
    name: "Parliament Hill",
    description: "historic views and riverfront trails",
  },
  {
    name: "ByWard Market",
    description: "local food, coffee, and art",
  },
  {
    name: "Rideau Canal",
    description: "perfect for a walk or bike ride",
  },
  {
    name: "Dow's Lake Pavilion",
    description: "relaxing waterside cafes and rentals",
  },
];

const relatedServices = [
  { name: "Dryer Repair Ottawa", href: "/dryer-repair" },
  { name: "Dishwasher Repair Ottawa", href: "/dishwasher-repair" },
  { name: "Fridge Repair Ottawa", href: "/fridge-repair" },
  { name: "Freezer Repair Ottawa", href: "/freezer-repair" },
  { name: "Oven Repair Ottawa", href: "/oven-repair" },
  { name: "Cooktop Repair Ottawa", href: "/cooktop-repair" },
  { name: "Microwave Repair Ottawa", href: "/microwave-repair" },
  { name: "Washer Installation Ottawa", href: "/washer-installation" },
];

export default function WasherRepairPage() {
  return (
    <>
      <ServiceHero
        title="Fast & Reliable Washer Repair Across Ottawa"
        description="Is your washing machine not draining, spinning, or starting at all? Don't worry — Fixer Appliance Repair is here to help. We provide professional washer repair services across Ottawa, offering fast diagnostics, same-day service options, and dependable local support in every major neighborhood."
        icon={<FaTshirt className="text-6xl text-white" />}
      />

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our technicians have experience with most popular washer brands and models. From top-loaders and 
              front-loaders to high-efficiency units, we know how to fix them all — quickly and reliably.
            </p>
          </div>
        </div>
      </section>

      {/* Common Washer Problems */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Washer Problems We Fix</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {washerProblems.map((problem, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{problem.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{problem.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700">
                If you notice any of these issues, it's time to schedule a visit. Early repairs prevent bigger 
                breakdowns and water damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">Why Choose Fixer Appliance Repair?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {whyChooseUs.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary-600 text-xl flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Repair or Replace */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-6">Repair or Replace?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Not sure if it's time to fix or replace your washing machine? Check out our repair vs. replace guide 
              for washers to make a smart decision based on cost, age, and reliability.
            </p>
            <Link href="/repair-vs-replace" className="btn-primary">
              Read Our Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Washer Installation */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">Washer Installation Services</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Upgrading to a new unit? We also offer washer installation in Ottawa — fast, safe, and fully insured.
          </p>
          <Link href="/washer-installation" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Learn About Installation
          </Link>
        </div>
      </section>

      {/* Brands We Repair */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Brands We Repair</h2>
            <p className="text-center text-gray-700 mb-8">
              We service all major washer brands, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {brands.map((brand, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">{brand}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-700">
              Not sure about your model? No problem. We'll identify the issue and explain your options.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Washer Repair Services Near You</h2>
            <p className="text-center text-gray-700 mb-8">
              Fixer Appliance Repair proudly serves all neighborhoods in and around Ottawa:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {serviceAreas.map((area, index) => (
                <Link 
                  key={index} 
                  href={`/washer-repair/${area.slug}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary-50 transition-colors"
                >
                  <FaMapMarkerAlt className="text-primary-600 text-lg flex-shrink-0" />
                  <p className="text-gray-700 hover:text-primary-700 font-medium">{area.name}</p>
                </Link>
              ))}
            </div>
            <p className="text-center text-gray-700">
              Don't see your neighborhood? Contact us to check service availability.
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

      {/* Things to Explore in Ottawa */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Things to Explore in Ottawa While We Fix Your Washer</h2>
            <p className="text-center text-gray-700 mb-8">
              While our technician takes care of your washer, why not take a break and enjoy some of Ottawa's best 
              spots? Here are a few great places locals love:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {ottawaAttractions.map((attraction, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">{attraction.name}</h3>
                  <p className="text-gray-700">{attraction.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-2">
                🎉 Looking for something fun this month? Check out local Ottawa events here:
              </p>
              <a 
                href="https://ottawatourism.ca/en/see-and-do/events" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                https://ottawatourism.ca/en/see-and-do/events
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">Ready to Book?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Washer trouble can ruin your day — let's get it fixed. Call or text us today to schedule your appointment.
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-xl">
              📞 Call/Text: <a href="tel:613-413-6969" className="font-semibold hover:underline">613-413-6969</a>
            </p>
            <p className="text-xl">
              📧 Email: <a href="mailto:service@fixerappliancerepair.ca" className="font-semibold hover:underline">service@fixerappliancerepair.ca</a>
            </p>
          </div>
          <p className="text-2xl font-semibold">
            We're local. We're reliable. We're Fixer.
          </p>
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

