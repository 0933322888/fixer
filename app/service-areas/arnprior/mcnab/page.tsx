import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";

export const metadata: Metadata = {
  title: "McNab Appliance Repair – Reliable Local Experts | Fixer",
  description:
    "Local appliance repair in McNab. Washers, dryers, fridges, ovens & more. Professional insured service with a 90-day repair warranty.",
};

const services = [
  {
    name: "Washer repair McNab",
    description: "Keep laundry cycles running smoothly.",
    href: "/washer-repair/arnprior",
  },
  {
    name: "Dryer repair McNab",
    description: "Efficient drying without delays.",
    href: "/dryer-repair/arnprior",
  },
  {
    name: "Dishwasher repair McNab",
    description: "Spotless dishes every cycle.",
    href: "/dishwasher-repair/arnprior",
  },
  {
    name: "Oven repair McNab",
    description: "Even heat for perfect meals.",
    href: "/oven-repair/arnprior",
  },
  {
    name: "Cooktop repair McNab",
    description: "Responsive burners with steady control.",
    href: "/cooktop-repair/arnprior",
  },
  {
    name: "Microwave repair McNab",
    description: "Safe, reliable reheating.",
    href: "/microwave-repair/arnprior",
  },
  {
    name: "Fridge repair McNab",
    description: "Keep groceries fresh and cool.",
    href: "/fridge-repair/arnprior",
  },
  {
    name: "Freezer repair McNab",
    description: "Dependable cold storage.",
    href: "/freezer-repair/arnprior",
  },
];

const faqs = [
  {
    question: "Do you repair rural homes in McNab?",
    answer: "Yes, we service rural and town addresses.",
  },
  {
    question: "Do you carry replacement parts?",
    answer: "Yes, common parts are stocked in our vans, and we can order specialty items quickly if needed.",
  },
  {
    question: "Do you provide a warranty?",
    answer: "Yes, all jobs have a 90-day guarantee.",
  },
  {
    question: "Can I also request oven repair in Ottawa?",
    answer: "Absolutely — Ottawa is included in our coverage. Book oven repair in Ottawa whenever you need it.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Downtown Arnprior Appliance Repair",
    href: "/service-areas/arnprior/downtown",
  },
  {
    name: "Braeside Appliance Repair",
    href: "/service-areas/arnprior/braeside",
  },
];

const additionalAreas = [
  "Sandy Beach",
  "Gillies Grove",
  "Madawaska Boulevard",
  "Ottawa River South Shore",
  "Arnprior Heights",
  "Marshall's Bay",
  "Division Street",
  "John Street",
];

export default function McNabServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              McNab Appliance Repair – Fast & Reliable
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Looking for appliance repair in McNab? Our insured team fixes it right the
              first time. Visit our{" "}
              <Link
                href="/service-areas/arnprior"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                Arnprior appliance repair
              </Link>{" "}
              page, also serving Downtown and Braeside.
            </p>
            <p className="text-lg text-gray-100">
              Solid 90-day warranty. Friendly, insured professionals. Local Arnprior technicians serving McNab. Same-day help when we can.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in McNab"
              description="We provide expert repair services for:"
              services={services}
              installationNote={{
                label: "appliance installation across Ottawa",
                href: "/appliance-installation/ottawa",
              }}
            />
          </div>
        </div>
      </section>

      <BrandsSection
        header="Brands We Service in McNab"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
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
            title="Other Arnprior Neighbourhoods We Serve"
            description="Looking for appliance repair in other parts of Arnprior? Explore these dedicated service pages:"
            neighbourhoods={otherNeighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="McNab" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Schedule your McNab appliance repair — Contact Us Today"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}
