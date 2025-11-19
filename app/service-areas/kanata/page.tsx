import { Metadata } from "next";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";

export const metadata: Metadata = {
  title: "Kanata Appliance Repair – Expert Technicians You Can Trust",
  description:
    "Local Kanata experts repairing washers, fridges, ovens & more. Same-day appointments in many areas — reliable service with no hidden fees.",
};

const services = [
  {
    name: "Washer repair Kanata",
    description: "Smooth cycles, no stoppages.",
    href: "/washer-repair/kanata",
  },
  {
    name: "Dryer repair Kanata",
    description: "Faster drying, less waiting.",
    href: "/dryer-repair/kanata",
  },
  {
    name: "Dishwasher repair Kanata",
    description: "Impeccably clean plates and glasses.",
    href: "/dishwasher-repair/kanata",
  },
  {
    name: "Fridge repair Kanata",
    description: "Optimal cooling for your groceries.",
    href: "/fridge-repair/kanata",
  },
  {
    name: "Freezer repair Kanata",
    description: "Dependable deep-freeze storage.",
    href: "/freezer-repair/kanata",
  },
  {
    name: "Oven repair Kanata",
    description: "Consistent cooking temperatures.",
    href: "/oven-repair/kanata",
  },
  {
    name: "Cooktop repair Kanata",
    description: "Even and responsive heat.",
    href: "/cooktop-repair/kanata",
  },
  {
    name: "Microwave repair Kanata",
    description: "Rapid, safe reheating.",
    href: "/microwave-repair/kanata",
  },
];

const attractions = [
  "Kanata Centrum Shopping Centre – shopping, dining, and entertainment all in one place.",
  "Walter Baker Park – perfect for a walk or picnic.",
  "Kanata North Technology Park – home to Ottawa’s tech hub.",
];

const faqs = [
  {
    question: "Is same-day service available in Kanata North and South?",
    answer:
      "Often yes — especially in Kanata Lakes, Morgan’s Grant, and Bridlewood.",
  },
  {
    question: "Do you carry parts on the truck?",
    answer:
      "We stock common parts to finish many repairs on the first visit; special orders are arranged quickly.",
  },
  {
    question: "What appliances do you cover?",
    answer:
      "All core kitchen and laundry units: washers, dryers, dishwashers, fridges, freezers, ovens, cooktops, and microwaves.",
  },
  {
    question: "Brands you work with?",
    answer:
      "We service LG, Samsung, Whirlpool, GE, Frigidaire, Maytag, Bosch, Kenmore, and many more.",
  },
  {
    question: "Do you provide a warranty?",
    answer: "Yes — 90 days on labour for peace of mind.",
  },
];

const neighbourhoods = [
  {
    name: "Morgan's Grant Appliance Repair",
    href: "/service-areas/kanata/morgans-grant",
  },
  {
    name: "Beaverbrook Appliance Repair",
    href: "/service-areas/kanata/beaverbrook",
  },
  {
    name: "Katimavik-Hazeldean Appliance Repair",
    href: "/service-areas/kanata/katimavik-hazeldean",
  },
  {
    name: "Glen Cairn Appliance Repair",
    href: "/service-areas/kanata/glen-cairn",
  },
  {
    name: "Kanata Lakes Appliance Repair",
    href: "/service-areas/kanata/kanata-lakes",
  },
  {
    name: "Bridlewood Appliance Repair",
    href: "/service-areas/kanata/bridlewood",
  },
];


export default function KanataServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6"><FaMapMarkerAlt className="text-[30px] mb-2 inline-block" /> Appliance Repair Services in Kanata</h1>
            <p className="text-xl text-gray-100 mb-4">
              Need appliance repair in Kanata that's fast, friendly, and reliable?
              With over 15 years of appliance repair experience, our skilled Fixer
              technicians provide trusted service to Kanata households. From washer
              repair in Kanata to fridge repair in Kanata, we handle it all — often
              with same-day availability.
            </p>
            <p className="text-lg text-gray-100">
              You'll always get upfront pricing and a 90-day guarantee on the work we do.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Our Appliance Services in Kanata"
              description="We fix all major household appliances:"
              services={services}
              installationNote={{
                prefix: "👉 We also provide",
                label: "appliance installation in Kanata",
                href: "/appliance-installation/kanata",
              }}
            />
          </div>
        </div>
      </section>

      <BrandsSection
        header="Brands We Service in Kanata"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <section className="pb-10 bg-white">
        <div className="container-custom">
          <blockquote className="rounded-xl border-l-4 border-accent-500 bg-white p-6 text-gray-800 shadow-md max-w-3xl mx-auto">
            <p className="text-lg italic">
              "Great service! My fridge broke down, and Fixer came the same day.
              The technician explained everything and had it fixed within an
              hour."{" "}
              <span className="not-italic font-semibold text-gray-900">
                – Sarah, Kanata
              </span>
            </p>
          </blockquote>
        </div>
      </section>

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Kanata While We Fix Your Appliance"
        description="While we work on your appliance, why not take a break and enjoy some of Kanata's best spots?"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <p className="text-center text-gray-700">
            Serving Kanata households from Morgan's Grant to Bridlewood — and
            even nearby{" "}
            <Link
              href="/service-areas/stittsville"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Stittsville appliance repair
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Neighbourhoods Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ServiceAreaNeighborhoodsSection
            title="Neighbourhoods We Serve in Kanata"
            description="Looking for appliance help in a specific Kanata community? Explore detailed service pages for these neighbourhoods:"
            neighbourhoods={neighbourhoods}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="Kanata" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Book Your Appliance Service in Kanata Today"
        description="We're local. We're reliable. We're Fixer."
      />
    </>
  );
}


