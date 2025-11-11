import { Metadata } from "next";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Dishwasher Repair Ottawa – Fast & Reliable Service | Fixer",
  description: "Need dishwasher repair in Ottawa? Fixer services all major brands like Bosch, Whirlpool & Samsung with same-day options and a 90-day warranty. Call today!",
};

const commonIssues = [
  {
    title: "Dishes come out dirty",
    description: "Clogged spray arms or poor water circulation may be to blame.",
  },
  {
    title: "Doesn't drain",
    description: "We clear blocked filters, drain hoses, and worn pumps.",
  },
  {
    title: "Leaking water",
    description: "Door seals, cracked hoses, or failed valves are typical issues.",
  },
  {
    title: "Won't start",
    description: "Could be a door latch, thermal fuse, or control board fault.",
  },
  {
    title: "Stops mid-cycle",
    description: "Bad sensors or failing control boards may be the cause.",
  },
  {
    title: "No water entering",
    description: "We test inlet valves and sensors to restore water flow.",
  },
  {
    title: "Strange noises",
    description: "Worn motors or food stuck in the pump can create loud cycles.",
  },
  {
    title: "Soap not dispensing",
    description: "A jammed detergent door or control board fault is likely.",
  },
  {
    title: "Smells bad inside",
    description: "Food buildup in filters or stagnant water often creates odors.",
  },
  {
    title: "Flashing lights or beeping",
    description: "We diagnose the error codes and reset the cycle.",
  },
  {
    title: "Spray arm not spinning",
    description: "Low pressure or debris can block movement — we clean or replace them.",
  },
  {
    title: "Water stays cold",
    description: "Faulty heating elements or thermostats may prevent sanitizing.",
  },
  {
    title: "Control panel frozen",
    description: "We test touchpads, UI boards, and wiring for defects.",
  },
  {
    title: "Overflows during fill",
    description: "Float switches or fill valves may need service.",
  },
  {
    title: "Dish racks off track",
    description: "We replace damaged rails and guides.",
  },
];

const whyChooseUs = [
  "Trusted by hundreds of Ottawa families",
  "Fast, tidy, and reliable service",
  "Transparent quotes and no surprises",
  "90-day labor warranty on every job",
];

const brands = [
  "Bosch",
  "Whirlpool",
  "LG",
  "Samsung",
  "GE",
  "Frigidaire",
  "Maytag",
  "KitchenAid",
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

const ottawaAttractions = [
  "ByWard Market – fresh produce, unique shops, and great patios",
  "Rideau Canal Pathway – scenic walks with Ottawa's best views",
  "Happy Goat Coffee Co. (Elgin St.) – popular café with serious personality",
  "Canadian Museum of Nature – perfect for curious minds of all ages",
];

const faqs = [
  {
    question: "How much does dishwasher repair usually cost in Ottawa?",
    answer: "Most repairs range between $120–$250 depending on the issue and brand.",
  },
  {
    question: "Which dishwasher brands do you service?",
    answer: "We handle all major brands like Bosch, Whirlpool, KitchenAid, Samsung, LG, GE, and more.",
  },
  {
    question: "Can you fix leaking dishwashers?",
    answer: "Yes — leaks are a common issue, often caused by worn seals, hoses, or valves.",
  },
  {
    question: "My dishwasher doesn't drain. Can you help?",
    answer: "Definitely. We'll check for clogs, faulty pumps, or drain motors and get it fixed.",
  },
  {
    question: "Do you offer same-day dishwasher repair in Ottawa?",
    answer: "In many cases, yes — especially for urgent issues like leaks or flooding.",
  },
  {
    question: "How long does a typical repair take?",
    answer: "Most repairs take 45–90 minutes, depending on the problem and part availability.",
  },
  {
    question: "Is it worth repairing an older dishwasher?",
    answer: "We help you decide based on age, model, and part costs. In many cases — yes.",
  },
  {
    question: "Do you carry parts or need to order them?",
    answer: "We stock parts for most common brands. Special orders may take 1–3 days.",
  },
  {
    question: "Do you provide a warranty on repairs?",
    answer: "Yes — we provide a 90-day warranty on both labor and parts we install.",
  },
  {
    question: "Do you uninstall and reinstall built-in dishwashers?",
    answer: "Absolutely. We carefully remove and reinstall dishwashers when needed.",
  },
];

const relatedServices = [
  { name: "Washer Repair Ottawa", href: "/washer-repair" },
  { name: "Dryer Repair Ottawa", href: "/dryer-repair" },
  { name: "Fridge Repair Ottawa", href: "/fridge-repair" },
  { name: "Freezer Repair Ottawa", href: "/freezer-repair" },
  { name: "Oven Repair Ottawa", href: "/oven-repair" },
  { name: "Cooktop Repair Ottawa", href: "/cooktop-repair" },
  { name: "Microwave Repair Ottawa", href: "/microwave-repair" },
  { name: "Dishwasher Installation Ottawa", href: "/dishwasher-installation" },
];

export default function DishwasherRepairPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white">Dishwasher Repair Ottawa – Get Your Dishes Clean Again</h1>
            <p className="text-xl leading-relaxed mb-8">
              A broken dishwasher means more than dirty dishes — it eats up your time. Fixer Appliance Repair delivers professional, affordable dishwasher repair across Ottawa. Whether it's leaking, not draining, or not turning on, we'll get it back in action fast.
            </p>
            <p className="text-lg">
              We repair all major dishwasher brands, including Bosch, LG, Samsung, Whirlpool, GE, Maytag, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Common Problems We Fix */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Problems We Fix</h2>
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

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">Why Choose Us</h2>
            <div className="space-y-4 text-center">
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

      {/* Repair or Replace */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Repair or Replace?</h2>
            <p className="text-lg text-gray-700 mb-8">
              When your dishwasher breaks down, it's tempting to shop for a new one — but repairs are often quick and cost-effective. See how to tell when it's worth fixing.
            </p>
            <Link href="/repair-vs-replace" className="btn-primary">
              Read Our Repair vs. Replace Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Installation Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Installation Services</h2>
            <p className="text-lg text-gray-700 mb-8">
              Need a new dishwasher installed? Our technicians provide safe, code-compliant dishwasher installation across Ottawa.
            </p>
            <Link href="/dishwasher-installation" className="btn-primary">
              Learn About Dishwasher Installation
            </Link>
          </div>
        </div>
      </section>

      {/* Brands We Repair */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-8">Brands We Repair</h2>
            <p className="text-center text-gray-700 mb-8">
              We work with all popular dishwasher brands:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {brands.map((brand, index) => (
                <div 
                  key={index} 
                  className="text-center p-4 bg-gray-50 rounded-lg font-semibold text-gray-900"
                >
                  {brand}
                </div>
              ))}
            </div>
            <p className="text-center text-gray-700">
              Don't see your dishwasher's name here? Reach out — we likely still service it.
            </p>
          </div>
        </div>
      </section>

      {/* We Serve These Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">We Serve These Areas</h2>
            <p className="text-center text-gray-700 mb-8">
              Fixer Appliance Repair provides trusted dishwasher repair services across Ottawa and beyond. We proudly serve neighborhoods such as:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {serviceAreas.map((area, index) => (
                <Link 
                  key={index} 
                  href={`/dishwasher-repair/${area.slug}`}
                  className="text-center p-3 bg-white rounded-lg shadow-sm hover:bg-primary-50 hover:shadow-md transition-all"
                >
                  <p className="text-gray-900 font-medium hover:text-primary-700">{area.name}</p>
                </Link>
              ))}
            </div>
            <p className="text-center text-gray-700">
              Don't see your area listed? Give us a call — we may already be servicing your neighborhood.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">FAQ – Dishwasher Repair in Ottawa</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Things to Do in Ottawa */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Things to Do in Ottawa While We Repair Your Dishwasher</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Give yourself a break while we fix your dishwasher. Whether you're into culture, coffee, or calm — Ottawa has something nearby:
            </p>
            <div className="bg-white p-8 rounded-lg shadow-sm mb-6">
              <ul className="space-y-4">
                {ottawaAttractions.map((attraction, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary-600 text-xl">•</span>
                    <p className="text-gray-700 text-lg">{attraction}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center bg-primary-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                🔍 Want to catch a live event or exhibit? Check what's happening this week:
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

      {/* Book Your Repair CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-6 text-white">Book Your Dishwasher Repair in Ottawa</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to get your dishwasher back in action? Call or text us now to book your appointment.
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-2xl">
              📞 Call or text: <a href="tel:613-413-6969" className="font-semibold hover:underline">613-413-6969</a>
            </p>
            <p className="text-xl">
              📧 Email: <a href="mailto:service@fixerappliancerepair.ca" className="font-semibold hover:underline">service@fixerappliancerepair.ca</a>
            </p>
          </div>
          <p className="text-lg">
            Fixer is your trusted Ottawa technician — fast, friendly, and reliable.
          </p>
        </div>
      </section>

      {/* We Also Offer */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-8">We Also Offer</h2>
            <p className="text-center text-gray-700 mb-8">
              Looking for more appliance repair services in Ottawa? We also handle:
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

