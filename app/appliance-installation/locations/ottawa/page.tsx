import { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight, FaChevronRight, FaMapMarkerAlt, FaWrench } from "react-icons/fa";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import BenefitsSection from "@/components/BenefitsSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import InstallationNotesSection from "@/components/InstallationNotesSection";

export const metadata: Metadata = {
  title: "Appliance Installation Ottawa – Washers, Dryers, Dishwashers, Fridges | Fixer",
  description:
    "Expert appliance installation in Ottawa — washers, dryers, dishwashers, fridges & more. Safe, reliable service with 90-day warranty. Call 613-413-6969 today!",
  keywords:
    "appliance installation Ottawa, washer installation Ottawa, dryer installation Ottawa, dishwasher installation Ottawa",
};

const serviceAreas = [
  { install: "Appliance Installation Kanata", hrefInstall: "/appliance-installation/locations/kanata", repair: "Kanata Appliance Repair", hrefRepair: "/service-areas/kanata" },
  { install: "Appliance Installation Stittsville", hrefInstall: "/appliance-installation/locations/stittsville", repair: "Stittsville Appliance Repair", hrefRepair: "/service-areas/stittsville" },
  { install: "Appliance Installation Nepean", hrefInstall: "/appliance-installation/locations/nepean", repair: "Nepean Appliance Repair", hrefRepair: "/service-areas/nepean" },
  { install: "Carp Installation", hrefInstall: null, repair: "Carp Appliance Repair", hrefRepair: "/service-areas/carp" },
  { install: "Orleans Installation", hrefInstall: null, repair: "Orleans Appliance Repair", hrefRepair: "/service-areas/orleans" },
  { install: "Barrhaven Installation", hrefInstall: null, repair: "Barrhaven Appliance Repair", hrefRepair: "/service-areas/barrhaven" },
  { install: "Vanier Installation", hrefInstall: null, repair: "Vanier Appliance Repair", hrefRepair: "/service-areas/vanier" },
  { install: "Arnprior Installation", hrefInstall: null, repair: "Arnprior Appliance Repair", hrefRepair: "/service-areas/arnprior" },
  { install: "Carleton Place Installation", hrefInstall: null, repair: "Carleton Place Appliance Repair", hrefRepair: "/service-areas/carleton-place" },
  { install: "Mississippi Mills Installation", hrefInstall: null, repair: "Mississippi Mills Appliance Repair", hrefRepair: "/service-areas/mississippi-mills" },
];

const appliances = [
  { label: "Washer Installation Ottawa", href: "/appliance-installation/washer" },
  { label: "Dryer Installation Ottawa", href: "/appliance-installation/dryer" },
  { label: "Dishwasher Installation Ottawa", href: "/appliance-installation/dishwasher" },
  { label: "Fridge Installation Ottawa", href: null },
  { label: "Freezer Installation Ottawa", href: null },
  { label: "Oven Installation Ottawa", href: "/appliance-installation/oven" },
  { label: "Cooktop Installation Ottawa", href: "/appliance-installation/cooktop" },
  { label: "Microwave Installation Ottawa", href: "/appliance-installation/microwave" },
];

const faqs = [
  {
    question: "Do you offer same-day installation in Ottawa?",
    answer: "Yes — same-day appointments are available in many areas. Call us to check today’s availability.",
  },
  {
    question: "Can you uninstall my old appliance?",
    answer: "Absolutely. We can remove your old washer, fridge, or other appliance before installing the new one.",
  },
  {
    question: "Do you connect water lines and electrical hookups?",
    answer: "Yes. We connect appliances to existing water lines and electrical outlets. Plumbing work or electrical rewiring is not included in our service.",
  },
  {
    question: "What warranty do you provide?",
    answer: "Every installation is backed by our 90-day labour warranty for your peace of mind.",
  },
];

const importantNotes = [
  {
    title: "Existing Connections Only",
    description: "We install appliances only on existing connections. Our technicians connect to pre-installed water lines and electrical outlets.",
  },
  {
    title: "No Plumbing Work",
    description: "Our technicians connect appliances to pre-installed water lines only. We do not perform plumbing modifications or installations.",
  },
  {
    title: "No Electrical Rewiring",
    description: "Installation is done on existing outlets. We do not perform electrical rewiring or install new circuits.",
  },
  {
    title: "Special Modifications",
    description: "If special modifications are required, we'll let you know before starting so you can make an informed decision.",
  },
];

const exploreItems = [
  "Parliament Hill – Canada's most iconic landmark with scenic river views.",
  // "ByWard Market – Fresh local food, coffee shops, and artisan boutiques.",
  "Rideau Canal – Perfect for a walk, bike ride, or in winter, the world's largest skating rink.",
  "Dow's Lake Pavilion – Waterside cafés, boat rentals, and tulip gardens in spring.",
];

export default function InstallationServicesPage() {
  const gridCols = serviceAreas.length % 2 === 0 ? "md:grid-cols-2" : "md:grid-cols-3";

  return (
    <>
      {/* Hero */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6"><FaWrench className="text-[30px] mb-2 inline-block" /> Appliance Installation Services in Ottawa</h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              At Fixer Appliance Repair, we don’t just <Link href="/service-areas" className="text-white underline font-semibold hover:text-gray-100">repair appliances in Ottawa</Link> — we also install new ones so you can start using them right away. We provide appliance installation in Ottawa and nearby suburbs, covering both kitchens and laundry rooms. From washers and dryers to dishwashers, fridges, ovens, and more, our technicians handle safe, proper hookups across Ottawa and nearby towns. We bring the right tools, connect everything correctly, and back each installation with a 90-day labour warranty.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-4">Our Service Areas</h2>
            <p className="text-center text-lg text-neutral-600 mb-8 max-w-3xl mx-auto">
              We provide appliance installation and repair services across Ottawa and nearby suburbs, including:
            </p>
            <div className={`grid ${gridCols} gap-4`}>
              {serviceAreas.map((area) => (
                <div key={area.install} className="bg-white border text-center border-light-200 rounded-lg p-5 hover:border-primary-400 hover:shadow-md transition-all group">
                  <div className="flex flex-col gap-3 text-center">
                    {area.hrefInstall ? (
                      <Link href={area.hrefInstall} className="text-primary-600 font-semibold hover:text-primary-700 transition-colors group-hover:text-primary-500">
                        {area.install} <FaChevronRight className="inline-block" />
                      </Link>
                    ) : (
                      <span className="text-primary-600 font-semibold hover:text-primary-700 transition-colors group-hover:text-primary-500">{area.install}</span>
                    )}
                    <span className="text-neutral-400 text-sm">and</span>
                    <div className="flex items-center justify-center gap-2 text-center">
                      <Link href={area.hrefRepair} className="text-primary-600 text-center font-semibold hover:text-primary-700 transition-colors group-hover:text-primary-500">
                        {area.repair} <FaChevronRight className="inline-block" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedServicesSection
        services={appliances}
        heading="Appliances We Install"
        description="From kitchens to laundry rooms, our team handles safe, professional installation for all major home appliances. Whether it's a brand-new purchase or a replacement for an older unit, we'll connect everything correctly, test the appliance, and leave your home tidy."
      />

      <InstallationNotesSection
        notes={importantNotes}
        description="To ensure clarity and set proper expectations, here's what you need to know about our installation service:"
      />

      <ThingsToDoSection
        attractions={exploreItems}
        heading="Explore Ottawa While We Handle the Install"
        description="While we take care of the heavy lifting at home, you can enjoy some of Ottawa's top spots:"
      />

      <FAQSection faqs={faqs} />

      <CTASection
        heading="Don't let that shiny new appliance sit idle in the box."
        description="Same-day installation available in many Ottawa areas — book today and start using it tonight."
        phoneText="Call/Text: 613-413-6969"
      />
    </>
  );
}
