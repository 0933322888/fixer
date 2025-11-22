import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";

export const metadata: Metadata = {
  title: "Barrhaven East Appliance Repair – Experienced Techs | Fixer",
  description:
    "Reliable appliance repair in Barrhaven East. Washers, dryers, ovens, fridges & more. Professional insured service with 90-day warranty.",
};

const services = [
  {
    name: "Washer repair Barrhaven East",
    description: "Keep laundry day running smoothly.",
    href: "/washer-repair/nepean",
  },
  {
    name: "Dryer repair Barrhaven East",
    description: "Restore fast, efficient drying.",
    href: "/dryer-repair/nepean",
  },
  {
    name: "Dishwasher repair Barrhaven East",
    description: "Sparkling dishes without rewashing.",
    href: "/dishwasher-repair/nepean",
  },
  {
    name: "Oven repair Barrhaven East",
    description: "Consistent heat for perfect meals.",
    href: "/oven-repair/nepean",
  },
  {
    name: "Cooktop repair Barrhaven East",
    description: "Even heat on every burner.",
    href: "/cooktop-repair/nepean",
  },
  {
    name: "Microwave repair Barrhaven East",
    description: "Safe reheating minus the sparks.",
    href: "/microwave-repair/nepean",
  },
  {
    name: "Fridge repair Barrhaven East",
    description: "Keep groceries chilled and fresh.",
    href: "/fridge-repair/nepean",
  },
  {
    name: "Freezer repair Barrhaven East",
    description: "Dependable long-term cold storage.",
    href: "/freezer-repair/nepean",
  },
];

const attractions = [
  "Chapman Mills Marketplace for shopping and dining.",
  "Water Dragon Park — family-friendly with play areas.",
  "Local community centres with seasonal activities.",
];

const faqs = [
  {
    question: "Do you provide same-day repair in Barrhaven East?",
    answer: "Yes, when scheduling allows — call early in the day and we'll confirm availability.",
  },
  {
    question: "Do you repair ovens and cooktops?",
    answer: "Absolutely — we service all major cooking appliances, including wall ovens and ranges.",
  },
  {
    question: "Are your technicians insured?",
    answer: "Yes, our staff is fully insured so you're protected at every visit.",
  },
  {
    question: "Can you also provide washer repair in Ottawa outside Barrhaven East?",
    answer: "Yes, we cover all of Nepean and Ottawa. Book washer repair in Ottawa whenever you need it.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Centrepointe Appliance Repair",
    href: "/service-areas/nepean/centrepointe",
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
  "Manordale",
  "Knoxdale",
  "Leslie Park",
  "Borden Farm",
  "Fisher Glen",
];

export default function BarrhavenEastServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Barrhaven East Appliance Repair You Can Trust
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Appliance repair in Barrhaven East done by insured local techs. We fix all major
              appliances with a 90-day warranty. Visit our{" "}
              <Link
                href="/service-areas/nepean"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                Nepean appliance repair
              </Link>{" "}
              page, also covering Centrepointe and Merivale Gardens.
            </p>
            <p className="text-lg text-gray-100">
              Every repair is covered by our 90-day warranty. Insured, approachable staff. Nepean-based technicians close to you. Same-day service slots available.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Barrhaven East"
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
        header="Brands We Service in Barrhaven East"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Barrhaven East While We Fix"
        description="While your appliance is being repaired, explore Barrhaven East:"
        
        linkText="See what's on nearby: Ottawa Tourism Events"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <p className="text-center text-gray-700">
            We also cover{" "}
            <Link
              href="/washer-repair"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              washer repair in Ottawa
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
      <FAQSection applianceName="Barrhaven East" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Get Reliable Appliance Repair in Barrhaven East — Contact Us Today"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}
