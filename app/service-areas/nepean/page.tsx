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
  title: "Nepean Appliance Service – Experienced Care for Your Home",
  description:
    "From washers to ovens, Fixer repairs all major brands in Nepean. Trusted local team, fast scheduling, and quality work guaranteed. Call now for service.",
};

const services = [
  {
    name: "Washer repair Nepean",
    description: "Reliable spin and wash.",
    href: "/washer-repair/nepean",
  },
  {
    name: "Dryer repair Nepean",
    description: "Quicker drying times.",
    href: "/dryer-repair/nepean",
  },
  {
    name: "Dishwasher repair Nepean",
    description: "Dishes spotless after each cycle.",
    href: "/dishwasher-repair/nepean",
  },
  {
    name: "Fridge repair Nepean",
    description: "Consistent cooling performance.",
    href: "/fridge-repair/nepean",
  },
  {
    name: "Freezer repair Nepean",
    description: "Steady, dependable cold.",
    href: "/freezer-repair/nepean",
  },
  {
    name: "Oven repair Nepean",
    description: "Uniform cooking results.",
    href: "/oven-repair/nepean",
  },
  {
    name: "Cooktop repair Nepean",
    description: "Even heat every time.",
    href: "/cooktop-repair/nepean",
  },
  {
    name: "Microwave repair Nepean",
    description: "Fast, efficient heating.",
    href: "/microwave-repair/nepean",
  },
];

const attractions = [
  "Andrew Haydon Park – a great spot for a relaxing walk.",
  "Nepean Museum – learn about the area’s history.",
  "Merivale Mall – shopping and dining all in one place.",
];

const faqs = [
  {
    question: "Can I book a same day visit in Nepean?",
    answer:
      "Often possible, depending on time of day and parts availability.",
  },
  {
    question: "Do you repair apartment/condo appliances along Merivale?",
    answer:
      "Yes — condo size and compact units are no problem (with building access arranged).",
  },
  {
    question: "Which brands/models do you support?",
    answer:
      "Broad coverage: LG, Samsung, Whirlpool, GE, Maytag, Frigidaire, Bosch, Kenmore and others.",
  },
  {
    question: "Will you advise if repair isn't worth it?",
    answer:
      "Absolutely. If replacement makes more sense, we'll say so and explain why.",
    link: "/blog/repair-vs-replace-appliance",
  },
  {
    question: "Is there a warranty on your work?",
    answer: "Yes — 90 days on labour for the completed repair.",
  },
];

const neighbourhoods = [
  {
    name: "Barrhaven East Appliance Repair",
    href: "/service-areas/nepean/barrhaven-east",
  },
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

export default function NepeanServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6"><FaMapMarkerAlt className="text-[30px] mb-2 inline-block" /> Appliance Service in Nepean</h1>
            <p className="text-xl text-gray-100 mb-4">
              Looking for dependable appliance service in Nepean? Our friendly,
              Ottawa-based team has been repairing appliances for over 15 years.
              From{" "}
              <Link
                href="/washer-repair/nepean"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                washer repair in Nepean
              </Link>{" "}
              to{" "}
              <Link
                href="/fridge-repair/nepean"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                fridge repair in Nepean
              </Link>
              , we provide honest guidance, same-day bookings in many neighbourhoods,
              and a 90-day service guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="What We Fix in Nepean"
              description="We handle all your appliance needs, including:"
              services={services}
              installationNote={{
                label: "appliance installation in Nepean",
                href: "/appliance-installation/locations/nepean",
              }}
            />
          </div>
        </div>
      </section>

      <BrandsSection
        header="Brands We Work With"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <section className="bg-gray-50 pb-10">
        <div className="container-custom">
          <blockquote className="rounded-xl border-l-4 border-accent-500 bg-white p-6 text-gray-800 shadow-md max-w-3xl mx-auto">
            <p className="text-lg italic">
              "Our fridge stopped working right before a long weekend. Fixer
              arrived the same day and had it running within an hour. Excellent
              local service!"{" "}
              <span className="not-italic font-semibold text-gray-900">
                – Sarah M.
              </span>
            </p>
          </blockquote>
        </div>
      </section>

      <ThingsToDoSection
        attractions={attractions}
        heading="Things to Do While We Work"
        description="While we work on your appliance, you can:"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <p className="text-center text-gray-700">
            Serving local neighbourhoods from Centrepointe to Barrhaven, and we also provide{" "}
            <Link
              href="/service-areas/stittsville"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              appliance repair in Stittsville
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Neighbourhoods Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ServiceAreaNeighborhoodsSection
            title="Neighbourhoods We Serve in Nepean"
            description="Looking for appliance repair in a specific Nepean neighbourhood? Explore these dedicated service pages:"
            neighbourhoods={neighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      <FAQSection applianceName="Nepean" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Ready to book service?"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}


