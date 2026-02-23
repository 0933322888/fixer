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
  title: "Merivale Gardens Appliance Repair – Trusted Service | Fixer",
  description:
    "Appliance repair in Merivale Gardens. Washers, dryers, ovens, fridges & more. Friendly local team, insured repairs, 90-day warranty.",
};

const services = [
  {
    name: "Washer repair Merivale Gardens",
    description: "Smooth cycles without leaks.",
    href: "/washer-repair/nepean",
  },
  {
    name: "Dryer repair Merivale Gardens",
    description: "Efficient drying with minimal noise.",
    href: "/dryer-repair/nepean",
  },
  {
    name: "Dishwasher repair Merivale Gardens",
    description: "Sparkling dishes without rewashing.",
    href: "/dishwasher-repair/nepean",
  },
  {
    name: "Oven repair Merivale Gardens",
    description: "Even heat for perfect baking and roasting.",
    href: "/oven-repair/nepean",
  },
  {
    name: "Cooktop repair Merivale Gardens",
    description: "Responsive burners with steady temperatures.",
    href: "/cooktop-repair/nepean",
  },
  {
    name: "Microwave repair Merivale Gardens",
    description: "Safe, quick reheating.",
    href: "/microwave-repair/nepean",
  },
  {
    name: "Fridge repair Merivale Gardens",
    description: "Keep groceries fresh and safe.",
    href: "/fridge-repair/nepean",
  },
  {
    name: "Freezer repair Merivale Gardens",
    description: "Dependable long-term cold storage.",
    href: "/freezer-repair/nepean",
  },
];

const attractions = [
  "Neighbourhood parks and playgrounds.",
  "Merivale Road shops and family dining.",
  "Nearby sports fields and community events.",
];

const faqs = [
  {
    question: "What types of appliances do you service in Merivale Gardens?",
    answer: "Washers, dryers, fridges, freezers, dishwashers, ovens, cooktops, and microwaves — we cover the full list.",
  },
  {
    question: "Do you repair high-end brands?",
    answer: "Yes, we handle Bosch, LG, Samsung, GE, and many more premium and mainstream brands.",
  },
  {
    question: "Is installation also offered?",
    answer: "Absolutely — request Appliance Installation Nepean for new units.",
  },
  {
    question: "Can I schedule fridge repair in Ottawa if I move?",
    answer: "Yes, we serve all Ottawa neighbourhoods. Book fridge repair in Ottawa any time.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Barrhaven East Appliance Repair",
    href: "/service-areas/nepean/barrhaven-east",
  },
  {
    name: "Centrepointe Appliance Repair",
    href: "/service-areas/nepean/centrepointe",
  },
];

const additionalAreas = [
  "Craig Henry",
  "Tanglewood",
  "Skyline",
  "Fisher Glen",
  "Manordale",
  "Knoxdale",
  "Leslie Park",
  "Borden Farm",
];

export default function MerivaleGardensServiceAreaPage() {
  return (
    <>
      <ServiceAreaHero
        title="Merivale Gardens Appliance Repair – Fast & Reliable"
        description={
          <>
            Appliance repair in Merivale Gardens made easy. Our insured team fixes all
            major appliances with a 90-day guarantee. See our{" "}
            <Link
              href="/service-areas/nepean"
              className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
            >
              Nepean appliance repair
            </Link>{" "}
            hub, covering Barrhaven East and Centrepointe.
          </>
        }
        additionalContent={
          <p>
            Solid 90-day warranty on all services. Insured, customer-friendly team. Local Nepean technicians nearby. Same-day help when scheduling allows.
          </p>
        }
      />

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Merivale Gardens"
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
        header="Brands We Service in Merivale Gardens"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Merivale Gardens While We Fix"
        description="While we handle your repair, discover Merivale Gardens:"
        
        linkText="Check current events: Ottawa Tourism Events"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <p className="text-center text-gray-700">
            We also cover{" "}
            <Link
              href="/fridge-repair"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              fridge repair in Ottawa
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
      <FAQSection applianceName="Merivale Gardens" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Email or Call to Book Your Merivale Gardens Appliance Repair — Contact Us Today"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}
