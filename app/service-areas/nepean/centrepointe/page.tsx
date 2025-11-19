import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";

export const metadata: Metadata = {
  title: "Centrepointe Appliance Repair – Call 613-413-6969 | Fixer",
  description:
    "Fast appliance repair in Centrepointe. Washers, dryers, ovens, fridges & more. Insured local techs, same-day service, 90-day warranty.",
};

const services = [
  {
    name: "Washer repair Centrepointe",
    description: "Keep laundry moving without delays.",
    href: "/washer-repair/nepean",
  },
  {
    name: "Dryer repair Centrepointe",
    description: "Faster drying, less waiting.",
    href: "/dryer-repair/nepean",
  },
  {
    name: "Dishwasher repair Centrepointe",
    description: "Sparkling dishes every cycle.",
    href: "/dishwasher-repair/nepean",
  },
  {
    name: "Oven repair Centrepointe",
    description: "Even heat for baking and roasting.",
    href: "/oven-repair/nepean",
  },
  {
    name: "Cooktop repair Centrepointe",
    description: "Responsive heat on every burner.",
    href: "/cooktop-repair/nepean",
  },
  {
    name: "Microwave repair Centrepointe",
    description: "Safe, reliable reheating.",
    href: "/microwave-repair/nepean",
  },
  {
    name: "Fridge repair Centrepointe",
    description: "Keep food fresh and ready.",
    href: "/fridge-repair/nepean",
  },
  {
    name: "Freezer repair Centrepointe",
    description: "Dependable deep-freeze storage.",
    href: "/freezer-repair/nepean",
  },
];

const attractions = [
  "Centrepointe Theatre and Ben Franklin Place.",
  "Algonquin College campus and green spaces.",
  "Local restaurants and cafés along Baseline Road.",
];

const faqs = [
  {
    question: "Do you offer evening appointments in Centrepointe?",
    answer: "Yes, we sometimes have evening availability — call to find a time that works best.",
  },
  {
    question: "Do you fix dishwashers that leak?",
    answer: "Definitely — leaks are one of the most common dishwasher issues we repair.",
  },
  {
    question: "Do you guarantee your work?",
    answer: "Yes, all repairs include a 90-day warranty on labour and installed parts.",
  },
  {
    question: "If I need oven repair in Ottawa, do you travel beyond Nepean?",
    answer: "Absolutely — we service the entire Ottawa region. Book oven repair in Ottawa whenever you need it.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Barrhaven East Appliance Repair",
    href: "/service-areas/nepean/barrhaven-east",
  },
  {
    name: "Merivale Gardens Appliance Repair",
    href: "/service-areas/nepean/merivale-gardens",
  },
];

const additionalAreas = [
  "Craig Henry",
  "Tanglewood",
  "Skyline",
  "Fisher Glen",
  "Leslie Park",
  "Borden Farm",
  "Knoxdale",
  "Manordale",
];

export default function CentrepointeServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Centrepointe Appliance Repair – Professional Local Team
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Reliable appliance repair in Centrepointe, Nepean. Same-day appointments often
              available. Learn more at our{" "}
              <Link
                href="/service-areas/nepean"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                Nepean appliance repair
              </Link>{" "}
              page, also serving Barrhaven East and Merivale Gardens.
            </p>
            <p className="text-lg text-gray-100">
              90-day protection on repairs. Professional, insured experts. Local Nepean techs who know your community. Same-day repairs often possible.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Centrepointe"
              description="We provide expert repair services for:"
              services={services}
              installationNote={{
                label: "appliance installation across Nepean",
                href: "/appliance-installation/locations/nepean",
              }}
            />
          </div>
        </div>
      </section>

      <BrandsSection
        header="Brands We Service in Centrepointe"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Centrepointe While We Fix"
        description="While we fix your appliance, enjoy Centrepointe:"
        link="https://ottawatourism.ca/en/see-and-do/events"
        linkText="See what's happening this week: Ottawa Tourism Events"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <p className="text-center text-gray-700">
            We also cover{" "}
            <Link
              href="/oven-repair"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              oven repair in Ottawa
            </Link>{" "}
            and surrounding areas.
          </p>
        </div>
      </section>

      {/* Neighbourhoods Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ServiceAreaNeighborhoodsSection
            title="Other Nepean Neighbourhoods We Serve"
            description="Looking for appliance repair in other parts of Nepean? Explore these dedicated service pages:"
            neighbourhoods={otherNeighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="Centrepointe" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Fast, Friendly Help is One Call Away — Contact Us Today"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}
