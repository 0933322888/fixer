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
  title: "Vanier Appliance Service – Skilled Repairs & Local Expertise | Fixer",
  description:
    "Serving Vanier homes with expert appliance service for over 15 years. Quick response, fair pricing, and quality repairs backed by a 90-day workmanship promise.",
};

const services = [
  {
    name: "Washer repair Vanier",
    description: "End mid-cycle breakdowns.",
    href: "/washer-repair/vanier",
  },
  {
    name: "Dryer repair Vanier",
    description: "Restore fast, quiet operation.",
    href: "/dryer-repair/vanier",
  },
  {
    name: "Dishwasher repair Vanier",
    description: "Get every load sparkling clean.",
    href: "/dishwasher-repair/vanier",
  },
  {
    name: "Fridge repair Vanier",
    description: "Keep your perishables fresh.",
    href: "/fridge-repair/vanier",
  },
  {
    name: "Freezer repair Vanier",
    description: "Reliable freezing for long storage.",
    href: "/freezer-repair/vanier",
  },
  {
    name: "Oven repair Vanier",
    description: "Even, dependable cooking.",
    href: "/oven-repair/vanier",
  },
  {
    name: "Cooktop repair Vanier",
    description: "Balanced heat on every burner.",
    href: "/cooktop-repair/vanier",
  },
  {
    name: "Microwave repair Vanier",
    description: "Fast and safe warming.",
    href: "/microwave-repair/vanier",
  },
];

const attractions = [
  "Beechwood Avenue – Great cafés, bakeries, and local shops.",
  "Richelieu Park – Year-round walking trails and green space.",
  "Vanier Museopark – A unique museum celebrating Franco-Ontarian culture.",
];

const faqs = [
  {
    question: "Do you offer same day service in Vanier?",
    answer:
      "Often yes. Many Vanier addresses qualify for same day or next day visits—call to check today's schedule.",
  },
  {
    question: "Which appliances do you handle most in Vanier?",
    answer:
      "Washers, dryers, dishwashers, fridges/freezers, ovens, cooktops, and microwaves — condo units included.",
  },
  {
    question: "Do you cover nearby neighbourhoods?",
    answer:
      "Yes, we also serve Overbrook, Beechwood, New Edinburgh and surrounding Ottawa East areas.",
  },
  {
    question: "What brands can you repair?",
    answer:
      "Most major and premium brands (LG, Samsung, Whirlpool, GE, Bosch, Maytag, Kenmore, Panasonic and more).",
  },
  {
    question: "Is there a warranty?",
    answer:
      "Yes—90 day labour warranty on the work we perform.",
  },
];

const neighbourhoods = [
  {
    name: "Overbrook Appliance Repair",
    href: "/service-areas/vanier/overbrook",
  },
  {
    name: "Beechwood Village Appliance Repair",
    href: "/service-areas/vanier/beechwood-village",
  },
  {
    name: "Cardinal Glen Appliance Repair",
    href: "/service-areas/vanier/cardinal-glen",
  },
];

export default function VanierServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6"><FaMapMarkerAlt className="text-[30px] mb-2 inline-block" /> Appliance Service in Vanier</h1>
            <p className="text-xl text-gray-100 mb-4">
              Need a trusted appliance repair service in Vanier? From <Link href="/washer-repair/vanier" className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200">washer repair in Vanier</Link> to <Link href="/fridge-repair/vanier" className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200">fridge repair in Vanier</Link>, our Ottawa-based, family-run team keeps local kitchens and laundry rooms working smoothly. We provide clear pricing, a 90-day workmanship guarantee, and same-day service in many parts of Vanier.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="What We Work On"
              description="We service a wide range of household appliances:"
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

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Vanier While We Work"
        description="Take a break while we handle your appliance repair:"
      />


      {/* Neighbourhoods Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ServiceAreaNeighborhoodsSection
            title="Neighbourhoods We Serve in Vanier"
            description="Looking for appliance help in a specific Vanier community? Explore detailed service pages for these neighbourhoods:"
            neighbourhoods={neighbourhoods}
          />
        </div>
      </section>

      <FAQSection applianceName="Vanier" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Call Us Today"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}


