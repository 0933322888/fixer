import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceAreaHero from "@/components/ServiceAreaHero";

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

const services: {
  repair: { label: string; href: string };
  installation?: { label: string; href: string };
}[] = [
  {
    repair: { label: "Washer Repair", href: "/washer-repair" },
    installation: {
      label: "Washer Installation",
      href: "/appliance-installation/washer",
    },
  },
  {
    repair: { label: "Dryer Repair", href: "/dryer-repair" },
    installation: {
      label: "Dryer Installation",
      href: "/appliance-installation/dryer",
    },
  },
  {
    repair: { label: "Dishwasher Repair", href: "/dishwasher-repair" },
    installation: {
      label: "Dishwasher Installation",
      href: "/appliance-installation/dishwasher",
    },
  },
  { repair: { label: "Fridge Repair", href: "/fridge-repair" } },
  { repair: { label: "Freezer Repair", href: "/freezer-repair" } },
  {
    repair: { label: "Oven Repair", href: "/oven-repair" },
    installation: {
      label: "Oven Installation",
      href: "/appliance-installation/oven",
    },
  },
  {
    repair: { label: "Cooktop Repair", href: "/cooktop-repair" },
    installation: {
      label: "Cooktop Installation",
      href: "/appliance-installation/cooktop",
    },
  },
  {
    repair: { label: "Microwave Repair", href: "/microwave-repair" },
    installation: {
      label: "Microwave Installation",
      href: "/appliance-installation/microwave",
    },
  },
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
      <ServiceAreaHero
        title="Appliance Repair Service Areas in Ottawa"
        icon={<FaMapMarkerAlt className="text-[30px] mb-2 inline-block" />}
        description={
          <>
            At Fixer Appliance Repair, we're proud to provide friendly, professional, and
            reliable service across Ottawa and the surrounding towns. Whether you're
            in the heart of the city or in a nearby community, we have local technicians
            ready to help with your washer, dryer, dishwasher, fridge, freezer, oven,
            cooktop, and microwave repairs.
          </>
        }
        additionalContent={
          <p>
            We back all our work with a 90-day labour warranty and bring the tools and
            common parts needed for most repairs on the first visit.
          </p>
        }
      />

      {/* Service Areas Section */}
      <section className="section-padding bg-white">
        <div className="container-custom mb-12">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="relative aspect-video md:aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/Laundry room.png"
                  alt="Appliance repair service across Ottawa and surrounding areas"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-lg text-gray-700">
                We cover Ottawa and nearby suburbs with fast, reliable appliance repair. Our technicians bring the tools and common parts needed for most repairs on the first visit.
              </p>
            </div>
          </div>
        </div>
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
            <Link
              href="/appliance-installation/locations/ottawa"
              className="font-semibold text-accent-600 hover:text-accent-700 hover:underline"
            >
              Appliance Installation
            </Link>{" "}
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
              <div
                key={service.repair.href}
                className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-md border border-gray-200"
              >
                <span
                  className="inline-flex h-2 w-2 shrink-0 rounded-full bg-accent-500"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-gray-900">
                  <Link
                    href={service.repair.href}
                    className="text-primary-600 hover:text-primary-700 hover:underline"
                  >
                    {service.repair.label}
                  </Link>
                  {service.installation && (
                    <>
                      {" & "}
                      <Link
                        href={service.installation.href}
                        className="text-primary-600 hover:text-primary-700 hover:underline"
                      >
                        {service.installation.label}
                      </Link>
                    </>
                  )}
                </span>
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
        />
    </>
  );
}


