import { Metadata } from "next";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";

export const metadata: Metadata = {
  title: "Appliance Repair Stittsville – Fast Solutions for Every Appliance | Fixer",
  description:
    "Fixer Appliance Repair keeps Stittsville kitchens and laundry rooms running. Same-day help in many areas, expert technicians, and clear upfront quotes.",
};

const services = [
  {
    name: "Washer repair Stittsville",
    description: "Smooth, trouble-free washing.",
    href: "/washer-repair/stittsville",
  },
  {
    name: "Dryer repair Stittsville",
    description: "Faster cycles, less noise.",
    href: "/dryer-repair/stittsville",
  },
  {
    name: "Dishwasher repair Stittsville",
    description: "Spotless results without rewashing.",
    href: "/dishwasher-repair/stittsville",
  },
  {
    name: "Fridge repair Stittsville",
    description: "Keep your groceries fresh.",
    href: "/fridge-repair/stittsville",
  },
  {
    name: "Freezer repair Stittsville",
    description: "Steady freezing performance.",
    href: "/freezer-repair/stittsville",
  },
  {
    name: "Oven repair Stittsville",
    description: "Even cooking from edge to edge.",
    href: "/oven-repair/stittsville",
  },
  {
    name: "Cooktop repair Stittsville",
    description: "Consistent, even heat.",
    href: "/cooktop-repair/stittsville",
  },
  {
    name: "Microwave repair Stittsville",
    description: "Safe, quick reheating.",
    href: "/microwave-repair/stittsville",
  },
];

const attractions = [
  "Village Square Park – a lovely green space in the heart of Stittsville.",
  "Trans Canada Trail – great for a walk or bike ride.",
  "Amberwood Village Golf & Country Club – perfect for a relaxing afternoon.",
];

const faqs = [
  {
    question: "Can you come out the same day in Stittsville?",
    answer:
      "In many cases, yes. If parts are in stock we can complete the repair on the first visit.",
  },
  {
    question: "Do you service townhomes and newer builds?",
    answer:
      "Absolutely. We regularly work in Fairwinds, West Ridge, Crossing Bridge, and new developments.",
  },
  {
    question: "What appliances do you repair here most often?",
    answer:
      "Dryers that take too long, washers with noise issues, and fridges with temperature problems — plus the full kitchen and laundry list.",
  },
  {
    question: "Which brands are supported?",
    answer:
      "All common makes including LG, Samsung, Whirlpool, GE, Frigidaire, Bosch, Maytag, Kenmore, and more.",
  },
  {
    question: "How do quotes work?",
    answer:
      "We provide clear, upfront pricing after diagnosis on site — no phone quotes, since issues vary widely.",
  },
];

const neighbourhoods = [
  {
    name: "Crossing Bridge Appliance Repair",
    href: "/service-areas/stittsville/crossing-bridge",
  },
  {
    name: "Jackson Trails Appliance Repair",
    href: "/service-areas/stittsville/jackson-trails",
  },
  {
    name: "Bryanston Gate Appliance Repair",
    href: "/service-areas/stittsville/bryanston-gate",
  },
];

const additionalAreas = [
  "Amberway",
  "Poole Creek",
  "Timbermere",
  "West Ridge",
  "Fairwinds",
  "Edenwylde",
  "Westwind Farms",
  "Fernbank Crossing",
];

export default function StittsvilleServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6"><FaMapMarkerAlt className="text-[30px] mb-2 inline-block" /> Expert Appliance Repair in Stittsville</h1>
            <p className="text-xl text-gray-100 mb-4">
              When you need appliance repair in Stittsville, Fixer is here to help. From washer repair in Stittsville to fridge repair in Stittsville, our technicians cover the full range of home appliances. With over 15 years of hands-on experience, we deliver same-day service in many areas, transparent pricing, and a 90-day guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliance Repair Services in Stittsville"
              description="We repair and maintain:"
              services={services}
              installationNote={{
                label: "appliance installation in Stittsville",
                href: "/appliance-installation/stittsville",
              }}
            />
          </div>
        </div>
      </section>

      <BrandsSection
        header="Brands We Service in Stittsville"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <section className="bg-gray-50 pb-10">
        <div className="container-custom">
          <blockquote className="rounded-xl border-l-4 border-accent-500 bg-white p-6 text-gray-800 shadow-md max-w-3xl mx-auto">
            <p className="text-lg italic">
              "Fixer Appliance Repair got my fridge working again the same day I called. Professional, polite, and affordable. Highly recommend for Stittsville residents!"{" "}
              <span className="not-italic font-semibold text-gray-900">
                – Maria T., Stittsville
              </span>
            </p>
          </blockquote>
        </div>
      </section>

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Stittsville While We Work"
        description="While we repair your appliance, you can enjoy:"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <p className="text-center text-gray-700">
            Serving local homes in Fairwinds, West Ridge, and Crossing Bridge — and we also cover nearby{" "}
            <Link
              href="/service-areas/kanata"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Kanata appliance repair
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Neighbourhoods Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ServiceAreaNeighborhoodsSection
            title="Neighbourhoods We Serve in Stittsville"
            description="Looking for appliance repair in a specific Stittsville community? Explore detailed pages for these neighbourhoods:"
            neighbourhoods={neighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      <FAQSection applianceName="Stittsville" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Call Us Today"
        description="Fast. Friendly. Local. Fixer Appliance Repair – Stittsville's trusted choice."
      />
    </>
  );
}


