interface BrandsSectionProps {
  applianceName: string;
}

export default function BrandsSection({ applianceName }: BrandsSectionProps) {
  const brands = [
    "Samsung", "LG", "Whirlpool", "GE", "Maytag", "Bosch",
    "KitchenAid", "Frigidaire", "Electrolux", "Kenmore",
    "Amana", "Miele", "Thermador", "Viking", "Sub-Zero"
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="heading-md text-center mb-4">
          {applianceName} Brands We Service
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Our certified technicians are trained to repair all major brands and models of {applianceName.toLowerCase()}s.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {brands.map((brand) => (
            <div
              key={brand}
              className="bg-gray-50 rounded-lg p-6 flex items-center justify-center border-2 border-gray-200 hover:border-primary-500 hover:shadow-md transition-all"
            >
              <span className="font-semibold text-gray-700 text-center">{brand}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-8">
          And many more! Don't see your brand? <a href="/contact" className="text-primary-600 font-semibold hover:underline">Contact us</a> - we likely service it!
        </p>
      </div>
    </section>
  );
}

