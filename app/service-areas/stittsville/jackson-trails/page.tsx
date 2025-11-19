import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";

export const metadata: Metadata = {
  title: "Jackson Trails Appliance Repair – Reliable Service | Fixer",
  description:
    "Appliance repair in Jackson Trails. Washers, dryers, ovens, dishwashers & more. Same-day appointments, local team, 90-day warranty.",
};

const services = [
  {
    name: "Washer repair Jackson Trails",
    description: "Smooth cycles without interruptions.",
    href: "/washer-repair/stittsville",
  },
  {
    name: "Dryer repair Jackson Trails",
    description: "Faster drying with less noise.",
    href: "/dryer-repair/stittsville",
  },
  {
    name: "Dishwasher repair Jackson Trails",
    description: "Spotless dishes every run.",
    href: "/dishwasher-repair/stittsville",
  },
  {
    name: "Oven repair Jackson Trails",
    description: "Even baking and roasting.",
    href: "/oven-repair/stittsville",
  },
  {
    name: "Cooktop repair Jackson Trails",
    description: "Responsive heat across every burner.",
    href: "/cooktop-repair/stittsville",
  },
  {
    name: "Microwave repair Jackson Trails",
    description: "Safe, quick reheating.",
    href: "/microwave-repair/stittsville",
  },
  {
    name: "Fridge repair Jackson Trails",
    description: "Keep groceries fresh and ready.",
    href: "/fridge-repair/stittsville",
  },
  {
    name: "Freezer repair Jackson Trails",
    description: "Dependable cold storage.",
    href: "/freezer-repair/stittsville",
  },
];

const attractions = [
  "Parks and playgrounds woven into quiet residential streets.",
  "Quick access to Trans Canada Trail for biking and walks.",
  "Local family-friendly cafés and shops.",
];

const faqs = [
  {
    question: "How soon can you come to Jackson Trails?",
    answer: "Often within a day — and same-day service is sometimes possible when you call early.",
  },
  {
    question: "Do you bring spare parts with you?",
    answer: "Yes, we carry common parts on the truck and can order specialty items quickly if needed.",
  },
  {
    question: "Do you install appliances as well as repair them?",
    answer: "Yes, installation is part of our services. Learn more through Appliance Installation Stittsville.",
  },
  {
    question: "Can I also schedule dryer repair in Ottawa for my parents?",
    answer: "Absolutely — our team serves the entire Ottawa region. Book dryer repair in Ottawa whenever they need help.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Crossing Bridge Appliance Repair",
    href: "/service-areas/stittsville/crossing-bridge",
  },
  {
    name: "Bryanston Gate Appliance Repair",
    href: "/service-areas/stittsville/bryanston-gate",
  },
];

const additionalAreas = [
  "Timbermere",
  "Poole Creek",
  "Amberway",
  "Fernbank Crossing",
  "Fairwinds",
  "West Ridge",
  "Edenwylde",
  "Westwind Farms",
];

export default function JacksonTrailsServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Jackson Trails Appliance Repair – Reliable Local Service
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Appliance repair in Jackson Trails made simple. Our local team delivers
              dependable service, often same-day. See our{" "}
              <Link
                href="/service-areas/stittsville"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                Stittsville appliance repair
              </Link>{" "}
              page, also serving Crossing Bridge and Bryanston Gate.
            </p>
            <p className="text-lg text-gray-100">
              Guaranteed 90-day coverage for peace of mind. Courteous, insured repair professionals. Stittsville-based techs near your home. Same-day service when possible.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Jackson Trails"
              description="We provide expert repair services for:"
              services={services}
              installationNote={{
                label: "appliance installation in Stittsville",
                href: "/appliance-installation/locations/stittsville",
              }}
            />
          </div>
        </div>
      </section>

      <BrandsSection
        header="Brands We Service in Jackson Trails"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Jackson Trails While We Fix"
        description="While your appliance is being repaired, check out Jackson Trails:"
        link="https://ottawatourism.ca/en/see-and-do/events"
        linkText="See current events here: Ottawa Tourism Events"
      />

      {/* Neighbourhoods Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ServiceAreaNeighborhoodsSection
            title="Other Stittsville Neighbourhoods We Serve"
            description="Looking for appliance repair in other parts of Stittsville? Explore these dedicated service pages:"
            neighbourhoods={otherNeighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="Jackson Trails" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Need local help?"
        description="613-413-6969 or service@fixerappliancerepair.ca — book your Jackson Trails appliance repair now."
      />
    </>
  );
}
