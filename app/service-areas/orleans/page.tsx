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
  title: "Orleans Appliance Service – Prompt, Friendly, Professional | Fixer",
  description:
    "Professional appliance service in Orleans. Local team, honest rates, and a 90-day guarantee. Same-day visits often available — book your repair today.",
};

const services = [
  {
    name: "Washer repair Orleans",
    description: "Keep laundry day stress-free.",
    href: "/washer-repair/orleans",
  },
  {
    name: "Dryer repair Orleans",
    description: "Quicker drying, fewer delays.",
    href: "/dryer-repair/orleans",
  },
  {
    name: "Dishwasher repair Orleans",
    description: "Dishes that come out spotless.",
    href: "/dishwasher-repair/orleans",
  },
  {
    name: "Fridge repair Orleans",
    description: "Maintain safe food temperatures.",
    href: "/fridge-repair/orleans",
  },
  {
    name: "Freezer repair Orleans",
    description: "Reliable cold storage.",
    href: "/freezer-repair/orleans",
  },
  {
    name: "Oven repair Orleans",
    description: "Even baking and roasting.",
    href: "/oven-repair/orleans",
  },
  {
    name: "Cooktop repair Orleans",
    description: "Smooth heating every time.",
    href: "/cooktop-repair/orleans",
  },
  {
    name: "Microwave repair Orleans",
    description: "Fast, safe meal prep.",
    href: "/microwave-repair/orleans",
  },
];

const attractions = [
  "Petrie Island – beaches and walking trails along the Ottawa River.",
  "Shenkman Arts Centre – live shows, galleries, and classes.",
  "Place d’Orleans – shopping and dining all in one stop.",
];

const faqs = [
  {
    question: "Do you offer rapid appointments in Orleans?",
    answer:
      "Yes — same day or next day visits are often available across Avalon, Fallingbrook, and Chapel Hill.",
  },
  {
    question: "What appliances are covered?",
    answer:
      "Washer, dryer, dishwasher, fridge/freezer, oven, cooktop, and microwave repairs.",
  },
  {
    question: "Do you service nearby rural areas like Cumberland?",
    answer:
      "We do — Cumberland and surrounding communities are within our route.",
  },
  {
    question: "Can you work on smart/modern appliances?",
    answer:
      "Yes, we handle modern control boards and smart models from major brands.",
  },
  {
    question: "What guarantee do I receive?",
    answer: "Every repair comes with a 90 day workmanship guarantee.",
  },
];

const neighbourhoods = [
  {
    name: "Fallingbrook Appliance Repair",
    href: "/service-areas/orleans/fallingbrook",
  },
  {
    name: "Avalon Appliance Repair",
    href: "/service-areas/orleans/avalon",
  },
  {
    name: "Queenswood Heights Appliance Repair",
    href: "/service-areas/orleans/queenswood-heights",
  },
];

const additionalAreas = [
  "Chapel Hill",
  "Convent Glen",
  "Orleans Wood",
  "Cardinal Creek",
  "Navan",
  "Cumberland",
  "Chateauneuf",
  "Hiawatha Park",
];

export default function OrleansServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6"><FaMapMarkerAlt className="text-[30px] mb-2 inline-block" /> Appliance Repair in Orleans</h1>
            <p className="text-xl text-gray-100 mb-4">
              In Orleans, appliance breakdowns don't have to derail your day. Fixer
              Appliance Repair offers expert service for all major kitchen and laundry
              appliances — from{" "}
              <Link
                href="/fridge-repair/orleans"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                fridge repair in Orleans
              </Link>{" "}
              to{" "}
              <Link
                href="/cooktop-repair/orleans"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                cooktop repair in Orleans
              </Link>
              . With over 15 years of experience, we provide fair, upfront pricing, a
              90-day warranty, and same-day service in many local neighbourhoods.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="What We Fix in Orleans"
              description="Our skilled team works on:"
              services={services}
              installationNote={{
                label: "appliance installation across Ottawa",
                href: "/appliance-installation/locations/ottawa",
              }}
            />
          </div>
        </div>
      </section>

      <BrandsSection
        header="Brands We Handle"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <section className="bg-gray-50 pb-10">
        <div className="container-custom">
          <blockquote className="rounded-xl border-l-4 border-accent-500 bg-white p-6 text-gray-800 shadow-md max-w-3xl mx-auto">
            <p className="text-lg italic">
              "Fixer Appliance Repair keeps our kitchen running smoothly. Prompt, professional, and friendly every time."{" "}
              <span className="not-italic font-semibold text-gray-900">
                – Local Orleans homeowner
              </span>
            </p>
          </blockquote>
        </div>
      </section>

      <ThingsToDoSection
        attractions={attractions}
        heading="Enjoy Orleans While We Work"
        description="While our team gets your appliance back in shape, you could:"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <p className="text-center text-gray-700">
            We proudly serve Avalon, Fallingbrook, Chapel Hill, and even nearby Cumberland. Want more local
            happenings? Visit{" "}
            <a
              href="https://ottawatourism.ca/en/see-and-do/events"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Ottawa Tourism
            </a>
            .
          </p>
        </div>
      </section>

      {/* Neighbourhoods Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ServiceAreaNeighborhoodsSection
            title="Neighbourhoods We Serve in Orleans"
            description="Looking for appliance repair in a specific part of Orleans? Explore detailed service pages for these communities:"
            neighbourhoods={neighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      <FAQSection applianceName="Orleans" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Call Us Today"
        description="Fast, friendly, and professional — that's the Fixer way."
      />
    </>
  );
}


