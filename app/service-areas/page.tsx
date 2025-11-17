import { Metadata } from "next";
import Link from "next/link";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Appliance Repair Service Areas in Ottawa | Fixer Appliance Repair",
  description:
    "Fixer Appliance Repair proudly serves all Ottawa neighborhoods and nearby towns. Find your area and book fast, reliable appliance repair today.",
};

const serviceAreas = [
  {
    name: "Kanata Appliance Repair & Appliance Installation Kanata",
    href: "/service-areas/kanata",
  },
  {
    name: "Stittsville Appliance Repair & Appliance Installation Stittsville",
    href: "/service-areas/stittsville",
  },
  {
    name: "Nepean Appliance Repair & Appliance Installation Nepean",
    href: "/service-areas/nepean",
  },
  { name: "Carp Appliance Repair", href: "/service-areas/carp" },
  { name: "Orleans Appliance Repair", href: "/service-areas/orleans" },
  { name: "Barrhaven Appliance Repair", href: "/service-areas/barrhaven" },
  { name: "Vanier Appliance Repair", href: "/service-areas/vanier" },
  { name: "Arnprior Appliance Repair", href: "/service-areas/arnprior" },
  {
    name: "Carleton Place Appliance Repair",
    href: "/service-areas/carleton-place",
  },
  {
    name: "Mississippi Mills Appliance Repair",
    href: "/service-areas/mississippi-mills",
  },
];

const services = [
  "Washer Repair & Washer Installation",
  "Dryer Repair & Dryer Installation",
  "Dishwasher Repair & Dishwasher Installation",
  "Fridge Repair",
  "Freezer Repair",
  "Oven Repair & Oven Installation",
  "Cooktop Repair & Cooktop Installation",
  "Microwave Repair & Microwave Installation",
];

const attractions = [
  {
    name: "Parliament Hill",
    description: "Historic building with scenic river views.",
  },
  {
    name: "ByWard Market",
    description: "Fresh local food, coffee, and artisan shops.",
  },
  {
    name: "Rideau Canal",
    description: "Perfect for a stroll, bike ride, or in winter, skating.",
  },
  {
    name: "Dow’s Lake Pavilion",
    description: "Waterside cafes, boat rentals, and tulip gardens in spring.",
  },
];

const faqs = [
  {
    question: "Do you offer same-day service in my area?",
    answer:
      "Yes — same-day appointments are available in many areas. Call us to check today’s availability.",
  },
  {
    question: "Do you service rural areas near Ottawa?",
    answer:
      "Absolutely. We also cover nearby towns such as Carp, Arnprior, and Mississippi Mills.",
  },
  {
    question: "What appliances do you repair?",
    answer:
      "We service washers, dryers, dishwashers, fridges, freezers, ovens, cooktops, and microwaves.",
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Appliance Repair Service Areas in Ottawa
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              At Fixer Appliance Repair, we're proud to provide friendly, professional, and
              reliable service across Ottawa and the surrounding towns. Whether you're
              in the heart of the city or in a nearby community, we have local technicians
              ready to help with your washer, dryer, dishwasher, fridge, freezer, oven,
              cooktop, and microwave repairs.
            </p>
            <p className="text-lg text-gray-100">
              We back all our work with a 90-day labour warranty and bring the tools and
              common parts needed for most repairs on the first visit.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Our Service Areas</h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            We cover Ottawa and nearby suburbs, including:
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mb-8">
            {serviceAreas.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-accent-500 hover:shadow-md transition-all text-center font-semibold text-primary-600 hover:text-primary-700"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="rounded-md border border-accent-200 bg-white/60 p-4 text-sm text-gray-700 max-w-3xl mx-auto text-center">
            <span className="font-semibold text-accent-600">
              Appliance Installation
            </span>{" "}
            – available in all service areas.
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Appliance Repair Services We Offer</h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            For each location above, we provide the following repair and installation services:
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {services.map((service) => (
              <div key={service} className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-md border border-gray-200">
                <span className="inline-flex h-2 w-2 rounded-full bg-accent-500" aria-hidden="true" />
                <span className="text-sm font-medium text-gray-900">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Ottawa While We Fix Your Appliance"
        description="While we take care of your appliance, why not enjoy some of Ottawa's top spots?"
      />

    <FAQSection applianceName="Appliance" faqs={faqs} />

      <CTASection
        heading="Ready to Book Your Repair?"
        description="Our Ottawa technicians are standing by and fully stocked with the tools and common parts needed to get your appliances back up and running fast."
        phoneText="📞 Call/Text: 613-413-6969"
        buttonText="Book Online"
      />
    </>
  );
}


