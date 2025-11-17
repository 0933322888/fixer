import Link from "next/link";

interface BrandsSectionProps {
  applianceName?: string;
  header?: string;
  premessage?: string;
  postmessage?: string;
}

export default function BrandsSection({ applianceName = "", header = " Brands We Repair", premessage, postmessage }: BrandsSectionProps) {
  const brands = [
    { name: "Bosch", href: "/brands/bosch" },
    { name: "Frigidaire", href: "/brands/frigidaire" },
    { name: "GE", href: "/brands/ge" },
    { name: "Kenmore", href: "/brands/kenmore" },
    { name: "LG", href: "/brands/lg" },
    { name: "Maytag", href: "/brands/maytag" },
    { name: "Panasonic", href: "/brands/panasonic" },
    { name: "Samsung", href: "/brands/samsung" },
    { name: "Whirlpool", href: "/brands/whirlpool" },
    { name: "Electrolux", href: "?" },
  ];
  return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8"> <Link href="/brands" className="text-primary-600 hover:text-primary-700 font-semibold">{applianceName + header}</Link></h2>
            <p className="text-center text-gray-700 mb-8">
              {premessage || `Our certified technicians are trained to repair all major brands and models of ${applianceName ? applianceName.toLowerCase() + "s" : "household appliances"}.`}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {brands.map((brand, index) => (
                <Link
                  key={index}
                  href={brand.href}
                  className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors"
                >
                  <p className="font-semibold text-gray-900 hover:text-primary-700">{brand.name}</p>
                </Link>
              ))}
            </div>
            <p className="text-center text-gray-700">
              {postmessage || "Not sure about your model? No problem. We'll identify the issue and explain your options."}
            </p>
          </div>
        </div>
      </section>
  );
}

