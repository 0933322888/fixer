import { Metadata } from "next";
import Link from "next/link";
import { FaUtensils, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";

export const metadata: Metadata = {
  title: "Dishwasher Repair Orleans – Fast, Local Experts | Fixer",
  description: "Fixer offers trusted dishwasher repair in Orleans. We fix leaks, draining issues & error codes for Bosch, Whirlpool, Samsung & more — with same-day service & warranty.",
};

const commonIssues = [
  {
    title: "Dishwasher won't start?",
    description: "In Orleans kitchens, this is often due to a tripped breaker, faulty latch, or worn control board. We'll test the power supply and switches to get your dishwasher running again.",
  },
  {
    title: "Not draining water properly?",
    description: "Standing water in the tub is usually a blocked filter or clogged drain hose. We'll clear it out so your dishes come out sparkling clean.",
  },
  {
    title: "Making loud grinding noises?",
    description: "If your dishwasher in Orleans sounds like a tractor, it could be a failing circulation pump or worn motor bearings. We'll replace the noisy part fast.",
  },
  {
    title: "Leaking onto the floor?",
    description: "Leaky door gaskets or loose hoses can cause puddles. We'll seal the leak and protect your Orleans flooring from damage.",
  },
  {
    title: "Dishes still dirty after a cycle?",
    description: "Blocked spray arms or weak water pressure often leave dishes greasy. We'll restore proper cleaning power so you can trust every load.",
  },
  {
    title: "Error codes on display?",
    description: "Flashing E15, E24, or other codes are common in Bosch, Samsung, and Whirlpool models. We'll translate the code and fix the underlying problem.",
  },
];

const whyChooseUs = [
  "Local Orleans dishwasher experts with years of experience",
  "Same-day and next-day scheduling available",
  "90-day labour warranty on all repairs and installs",
  "Honest, upfront pricing — no hidden extras",
];

const neighborhoods = [
  "Fallingbrook",
  "Avalon",
  "Queenswood Heights",
  "Chapel Hill",
  "Convent Glen",
];

const nearbyAreas = [
  { name: "Dishwasher Repair Kanata", slug: "kanata" },
  { name: "Dishwasher Repair Stittsville", slug: "stittsville" },
  { name: "Dishwasher Repair Nepean", slug: "nepean" },
  { name: "Dishwasher Repair Vanier", slug: "vanier" },
  { name: "Dishwasher Repair Barrhaven", slug: "barrhaven" },
  { name: "Dishwasher Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dishwasher Repair Arnprior", slug: "arnprior" },
  { name: "Dishwasher Repair Carleton Place", slug: "carleton-place" },
];

const orleansAttractions = [
  "Relax at Petrie Island, known for its sandy shorelines.",
  "Visit the Shenkman Arts Centre for arts and culture.",
  "Stop by Place d'Orleans for shops and food.",
];

const faqs = [
  {
    question: "Can I get same-day dishwasher repair in Orleans?",
    answer: "Often yes — call us early, and we'll check today's schedule.",
  },
  {
    question: "Why is my dishwasher not draining water?",
    answer: "It could be a clogged filter, blocked pump, or kinked hose. We'll clear it and test.",
  },
  {
    question: "Do you install new dishwashers?",
    answer: "Yes — we provide dishwasher installation in Orleans using your existing water and electrical hookups.",
  },
  {
    question: "Do you service nearby communities?",
    answer: "Yes — including Fallingbrook, Chapel Hill, and Avalon.",
  },
  {
    question: "Do you offer a warranty on dishwasher repairs?",
    answer: "Yes — all labour is covered by our 90-day warranty.",
  },
];

const relatedServices = [
  { name: "Washer Repair Orleans", href: "/washer-repair/orleans" },
  { name: "Dryer Repair Orleans", href: "/dryer-repair/orleans" },
  { name: "Fridge Repair Orleans", href: "/fridge-repair/orleans" },
  { name: "Freezer Repair Orleans", href: "/freezer-repair/orleans" },
  { name: "Oven Repair Orleans", href: "/oven-repair/orleans" },
  { name: "Cooktop Repair Orleans", href: "/cooktop-repair/orleans" },
  { name: "Microwave Repair Orleans", href: "/microwave-repair/orleans" },
  { name: "Dishwasher Installation Orleans", href: "/appliance-installation/dishwasher" },
];

export default function DishwasherRepairOrleansPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white"><FaUtensils className="text-[30px] mb-2 inline-block" /> Dishwasher Repair Orleans – Fast, Local Experts</h1>
            <p className="text-xl leading-relaxed mb-8">
              Dishes coming out dirty or dishwasher refusing to start? Fixer Appliance Repair provides Orleans families with quick, reliable dishwasher service. From clogged pumps to faulty control boards, our team gets it done right the first time.
            </p>
            <p className="text-lg mb-6">
              We repair major brands including Bosch, Samsung, LG, Whirlpool, and GE.
            </p>
            <p className="text-lg">
              👉 For all appliance services in your neighborhood, see our{" "}
              <Link href="/orleans" className="font-semibold hover:underline">
                Local Orleans page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Common Dishwasher Issues */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Dishwasher Issues We Fix in Orleans</h2>
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

      {/* Installation Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-6">Dishwasher Installation in Orleans</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 mb-6">
                <strong>Dishwasher giving you trouble in Orleans?</strong> Before investing in a new one, check our{" "}
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                  repair vs. replace guide
                </Link>
                {" "}— it explains lifespan, costs, and common repair scenarios.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                When you've purchased a new unit, we provide dishwasher installation in Orleans. We'll set it up, balance it, and test it using your existing water and power lines.
              </p>
              <p className="text-gray-700 mb-6">
                👉 We don't provide new plumbing or wiring services.
              </p>
              <div className="text-center">
                <Link href="/appliance-installation/dishwasher" className="btn-primary">
                  Learn more about Installation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection applianceName="Dishwasher" benefits={whyChooseUs} />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Orleans area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="dishwasher"
        nearbyAreasLabel="We regularly travel to:"
        footerText={
          <p className="text-lg text-gray-700">
            For Ottawa-wide coverage, visit our{" "}
            <Link href="/dishwasher-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Dishwasher Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      {/* Things to Do in Orleans */}
      <ThingsToDoSection
        attractions={orleansAttractions}
        heading="Things to Do in Orleans While We Repair Your Dishwasher"
        description="Make the most of your wait with these ideas:"
        
        linkText="Ottawa Events Calendar"
      />

      <FAQSection applianceName="Dishwasher" faqs={faqs} />

      {/* Contact CTA */}
      <CTASection 
        heading="Schedule Your Dishwasher Repair in Orleans"
        description="Dishwasher leaving dishes dirty? Let's fix it. Call Fixer Appliance Repair today:"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With…"
        description="Our expertise goes beyond dishwashers — here's what else we do in Orleans:"
        applianceName="Dishwasher"
      />
    </>
  );
}
