import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";
import ServiceAreaHero from "@/components/ServiceAreaHero";

export const metadata: Metadata = {
  title: "Chapman Mills Appliance Repair – Call 613-413-6969 | Fixer",
  description:
    "Appliance repair in Chapman Mills. Washers, dryers, ovens, fridges & more. Same-day availability, insured Ottawa techs, 90-day warranty.",
};

const services = [
  {
    name: "Washer repair Chapman Mills",
    description: "Keep laundry cycles running smoothly.",
    href: "/washer-repair/barrhaven",
  },
  {
    name: "Dryer repair Chapman Mills",
    description: "Efficient drying without delays.",
    href: "/dryer-repair/barrhaven",
  },
  {
    name: "Dishwasher repair Chapman Mills",
    description: "Spotless dishes every cycle.",
    href: "/dishwasher-repair/barrhaven",
  },
  {
    name: "Oven repair Chapman Mills",
    description: "Even heat for perfect meals.",
    href: "/oven-repair/barrhaven",
  },
  {
    name: "Cooktop repair Chapman Mills",
    description: "Responsive burners with steady control.",
    href: "/cooktop-repair/barrhaven",
  },
  {
    name: "Microwave repair Chapman Mills",
    description: "Safe, reliable reheating.",
    href: "/microwave-repair/barrhaven",
  },
  {
    name: "Fridge repair Chapman Mills",
    description: "Keep groceries fresh and cool.",
    href: "/fridge-repair/barrhaven",
  },
  {
    name: "Freezer repair Chapman Mills",
    description: "Dependable cold storage.",
    href: "/freezer-repair/barrhaven",
  },
];

const attractions = [
  "Chapman Mills Conservation Area.",
  "Marketplace Barrhaven for shops and dining.",
  "Local community parks.",
];

const faqs = [
  {
    question: "Do you offer quick repairs in Chapman Mills?",
    answer: "Yes, same-day is often possible when you call early.",
  },
  {
    question: "Do you repair fridges and freezers?",
    answer: "Yes, cooling appliances are one of our specialties — we handle all major brands.",
  },
  {
    question: "Do you guarantee your repairs?",
    answer: "Yes, with a 90-day warranty on all work.",
  },
  {
    question: "Can I book washer repair in Ottawa?",
    answer: "Absolutely — Ottawa-wide coverage is included. Book washer repair in Ottawa any time.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Stonebridge Appliance Repair",
    href: "/service-areas/barrhaven/stonebridge",
  },
  {
    name: "Longfields Appliance Repair",
    href: "/service-areas/barrhaven/longfields",
  },
];

const additionalAreas = [
  "Half Moon Bay",
  "Strandherd Meadows",
  "Old Barrhaven",
  "Davidson Heights",
  "Cedarhill Estates",
  "Hearts Desire",
  "Jockvale",
  "Havenlea",
];

export default function ChapmanMillsServiceAreaPage() {
  return (
    <>
      <ServiceAreaHero
        title="Chapman Mills Appliance Repair – Done Right the First Time"
        description={
          <>
            Trusted appliance repair in Chapman Mills. We fix all major appliances, backed
            by a 90-day warranty. Learn more at our{" "}
            <Link
              href="/service-areas/barrhaven"
              className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
            >
              Barrhaven appliance repair
            </Link>{" "}
            hub, also serving Stonebridge and Longfields.
          </>
        }
        additionalContent={
          <p>
            Guaranteed 90-day repair coverage. Insured, friendly team. Local Barrhaven technicians. Same-day service possible.
          </p>
        }
      />

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Chapman Mills"
              description="We provide expert repair services for:"
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
        header="Brands We Service in Chapman Mills"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Chapman Mills While We Fix"
        description="While we fix your appliance, explore Chapman Mills:"
        
        linkText="See what's happening nearby: Ottawa Tourism Events"
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
            title="Other Barrhaven Neighbourhoods We Serve"
            description="Looking for appliance repair in other parts of Barrhaven? Explore these dedicated service pages:"
            neighbourhoods={otherNeighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="Chapman Mills" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Book Chapman Mills Appliance Repair — Contact Us Today"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}
