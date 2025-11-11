import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cooktop Repair Ottawa – Fast Electric Cooktop Service | Fixer",
  description:
    "Fixer Appliance Repair provides expert cooktop repair in Ottawa. From cracked glass and faulty burners to wiring issues and error codes, we service Whirlpool, GE, Samsung, LG & more. Same-day service, clear pricing, 90-day warranty.",
};

const commonProblems = [
  {
    title: "Burner won't turn on",
    description: "We check the heating element, switch, and wiring.",
  },
  {
    title: "Burner gets too hot",
    description: "A faulty infinite switch might be stuck - we replace it.",
  },
  {
    title: "Cooktop cracked",
    description: "We install new glass or ceramic surfaces.",
  },
  {
    title: "Cooktop won't power on",
    description: "We check the breaker, fuse, and power wiring.",
  },
  {
    title: "One burner works, others don't",
    description: "Multiple switch or board failures - we test and repair all.",
  },
  {
    title: "Control knob broken",
    description: "We replace cracked or stripped knobs.",
  },
  {
    title: "Indicator light stays on",
    description: "Faulty light switch or control needs replacing.",
  },
  {
    title: "Cooktop trips breaker",
    description: "We check for short circuits in elements or wiring.",
  },
  {
    title: "Cooking surface stained or scorched",
    description: "We clean or polish if cosmetic; replace if needed.",
  },
  {
    title: "Cooktop hums or buzzes",
    description: "Could be loose wiring or an electrical fault - we investigate safely.",
  },
  {
    title: "Burner heats unevenly",
    description: "We inspect and replace partially damaged coil elements.",
  },
  {
    title: "Knob won't turn or clicks",
    description: "A jammed or stripped control shaft may need service.",
  },
  {
    title: "Burner light doesn't come on",
    description: "Often a small switch behind the panel - we test and repair.",
  },
  {
    title: "Ceramic top discoloration",
    description: "Mineral deposits or overheating - we clean or resurface.",
  },
  {
    title: "Electronic control unresponsive",
    description: "We test the circuit board or control module.",
  },
  {
    title: "Cooktop beeps or flashes codes",
    description: "Diagnostic mode may be stuck - we reset and resolve the issue.",
  },
  {
    title: "One side completely dead",
    description: "We check internal wiring and relay boards.",
  },
  {
    title: "Burners cycle off too fast",
    description: "Misreading temperature sensors - we recalibrate or replace.",
  },
  {
    title: "Cracks near heating zone",
    description: "We recommend full top replacement for safety.",
  },
  {
    title: "Strong odor when cooking",
    description: "May be trapped grease or heat-damaged insulation - we inspect thoroughly.",
  },
];

const whyChooseUs = [
  "We repair all types of electric cooktops - smooth-top, coil, induction.",
  "Fast diagnosis and efficient repairs.",
  "Clear rates and no last-minute add-ons.",
  "Neat, tidy, and respectful in your kitchen.",
  "Most fixes completed on the first visit.",
];

const brands = [
  "Whirlpool",
  "GE",
  "Samsung",
  "Frigidaire",
  "LG",
  "Bosch",
  "KitchenAid",
  "Maytag",
  "Kenmore",
];

const serviceAreas = [
  { name: "Cooktop repair Kanata", href: "/cooktop-repair/kanata" },
  { name: "Cooktop repair Carp", href: "/cooktop-repair/carp" },
  { name: "Cooktop repair Stittsville", href: "/cooktop-repair/stittsville" },
  { name: "Cooktop repair Nepean", href: "/cooktop-repair/nepean" },
  { name: "Cooktop repair Orleans", href: "/cooktop-repair/orleans" },
  { name: "Cooktop repair Barrhaven", href: "/cooktop-repair/barrhaven" },
  { name: "Cooktop repair Vanier", href: "/cooktop-repair/vanier" },
  { name: "Cooktop repair Arnprior", href: "/cooktop-repair/arnprior" },
  { name: "Cooktop repair Carleton Place", href: "/cooktop-repair/carleton-place" },
  { name: "Cooktop repair Mississippi Mills", href: "/cooktop-repair/mississippi-mills" },
];

const faqs = [
  {
    question: "Do you repair both glass and coil cooktops?",
    answer: "Yes - we service radiant, coil, and ceramic models.",
  },
  {
    question: "My cooktop won't turn on - can you help?",
    answer: "Absolutely - we check burners, wiring, switches, and controls.",
  },
  {
    question: "What if one burner works and others don't?",
    answer: "That's usually a switch or element issue - we can fix it.",
  },
  {
    question: "Do you service induction cooktops?",
    answer: "Yes - we repair select induction models. Ask us about yours.",
  },
  {
    question: "Can cracked glass tops be repaired?",
    answer: "The glass must be replaced - we can help with parts and installation.",
  },
  {
    question: "How much does cooktop repair cost?",
    answer: "Between $140 and $270 on average.",
  },
  {
    question: "Do you install replacement cooktops?",
    answer: "Yes - we offer safe and clean installations.",
  },
  {
    question: "Do you test for overheating issues?",
    answer: "Yes - we test thermal sensors and power levels post-repair.",
  },
  {
    question: "What brands do you work with?",
    answer: "GE, Whirlpool, Frigidaire, Samsung, LG, and more.",
  },
  {
    question: "Is your work covered by warranty?",
    answer: "Yes - 90 days on parts and labor.",
  },
];

const thingsToDo = [
  {
    title: "China Town (Somerset W.)",
    description: "Explore dumplings, noodles, and bubble tea.",
  },
  {
    title: "Plant Recreation Centre",
    description: "Swim, lift, or take a fitness class.",
  },
  {
    title: "Parliament Hill lawn",
    description: "Iconic picnic spot with great photo ops.",
  },
  {
    title: "The Ministry of Coffee (Wellington St.)",
    description: "Hip cafe with local roasts.",
  },
];

const otherServices = [
  { name: "Washer Repair Ottawa", href: "/washer-repair" },
  { name: "Dryer Repair Ottawa", href: "/dryer-repair" },
  { name: "Dishwasher Repair Ottawa", href: "/dishwasher-repair" },
  { name: "Fridge Repair Ottawa", href: "/fridge-repair" },
  { name: "Freezer Repair Ottawa", href: "/freezer-repair" },
  { name: "Oven Repair Ottawa", href: "/oven-repair" },
  { name: "Microwave Repair Ottawa", href: "/microwave-repair" },
  { name: "Cooktop Installation Ottawa", href: "/cooktop-installation" },
];

export default function CooktopRepairPage() {
  return (
    <>
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Cooktop Repair in Ottawa - Smooth Heating Starts Here
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              When your cooktop won't heat or certain burners stop working, we are here to help. Fixer
              Appliance Repair handles electric cooktop repairs in Ottawa with same-day availability.
            </p>
            <p className="text-xl text-gray-100 mb-8">
              We work with LG, Samsung, Whirlpool, GE, Maytag, Frigidaire, and others.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-accent-500 hover:bg-accent-600">
                Book Cooktop Repair
              </Link>
              <a
                href="tel:+16135550199"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-700"
              >
                Call (613) 555-0199
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="heading-md mb-6">Common Problems We Fix</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {commonProblems.map((problem) => (
                <div
                  key={problem.title}
                  className="p-6 bg-gray-50 rounded-xl shadow-sm text-left"
                >
                  <h3 className="font-semibold text-lg text-primary-700 mb-2">{problem.title}</h3>
                  <p className="text-gray-700">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Why choose us</h2>
            <ul className="space-y-3 text-lg text-gray-700 inline-block text-left">
              {whyChooseUs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-600" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-6 text-gray-700 text-lg text-center">
            <div>
              <h2 className="heading-md mb-4">Repair or Replace?</h2>
              <p>
                Replacing a cooktop can be costly. If it is still under 10 to 12 years old, our guide can help you
                decide if it is worth saving.
              </p>
            </div>
            <div>
              <h2 className="heading-md mb-4">Installation Services</h2>
              <p>
                We safely install electric cooktops in Ottawa kitchens, including drop-in models and custom
                countertop cuts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Brands We Repair</h2>
            <p className="text-lg text-gray-700 mb-6">
              We repair cooktops from these well-known brands:
            </p>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3">
              {brands.map((brand) => (
                <div key={brand} className="p-4 bg-white rounded-lg shadow text-center text-primary-700 font-semibold">
                  {brand}
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-700 mt-6">
              Do not see your cooktop brand here? Just give us a call - we are happy to help.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">We Serve These Areas</h2>
            <p className="text-lg text-gray-700 mb-4">
              Need electric cooktop repair in Ottawa? We serve the following communities:
            </p>
            <ul className="grid gap-3 sm:grid-cols-2 text-lg text-primary-700 text-left md:px-12">
              {serviceAreas.map((area) => (
                <li key={area.name}>
                  <Link href={area.href} className="hover:underline">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 mt-6">
              Need service outside this list? Just ask - we may be in your area already.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">FAQ - Cooktop Repair in Ottawa</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-white rounded-xl shadow p-6 text-left">
                  <h3 className="text-lg font-semibold text-primary-700 mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Things to Do in Ottawa While We Repair Your Cooktop</h2>
            <p className="text-lg text-gray-700 mb-6">
              While your cooktop is being handled, you can enjoy some of Ottawa's best casual escapes:
            </p>
            <ul className="space-y-4 text-lg text-gray-700 inline-block text-left">
              {thingsToDo.map((item) => (
                <li key={item.title}>
                  <span className="font-semibold text-primary-700">{item.title}</span> - {item.description}
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 mt-6">
              <span role="img" aria-hidden="true">
                🔍
              </span>{" "}
              Want to catch a live event or exhibit? Check what is happening this week:{" "}
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 hover:underline"
              >
                https://ottawatourism.ca/en/see-and-do/events
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="heading-md text-white">Book Your Cooktop Repair in Ottawa</h2>
            <p className="text-lg text-gray-100">
              Need your cooktop working again ASAP? Let Fixer handle it. Contact us by phone, text, or book online -
              Ottawa's friendly appliance pros are here for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
              <a href="tel:+16135550199" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
                Call or Text (613) 555-0199
              </a>
              <a
                href="mailto:service@fixerappliancerepair.ca"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-700"
              >
                Email service@fixerappliancerepair.ca
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">We Also Offer</h2>
            <p className="text-lg text-gray-700 mb-4">
              We offer a full range of appliance services in Ottawa, including:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {otherServices.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="px-4 py-2 rounded-full bg-gray-100 text-primary-700 hover:bg-primary-700 hover:text-white transition"
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
