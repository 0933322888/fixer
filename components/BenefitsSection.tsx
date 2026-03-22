import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

interface BenefitsSectionProps {
  applianceName?: string;
  heading?: string;
  message?: string;
  benefits: string[];
  imageSrc?: string;
  imageAlt?: string;
}

export default function BenefitsSection({
  applianceName = "",
  heading,
  message = "",
  benefits,
  imageSrc,
  imageAlt = "",
}: BenefitsSectionProps) {
  return (
    <section className="section-padding bg-gray-100">
      <div className="container-custom">
        <h2 className="heading-md text-center mb-12">{heading || `Why Choose Our ${applianceName} Repair Service?`}</h2>
        {message && <p className="text-center text-gray-700 mb-12">{message}</p>}
        <div className={`max-w-6xl mx-auto ${imageSrc ? "flex flex-col lg:flex-row gap-10 lg:gap-12 lg:items-stretch" : ""}`}>
          {imageSrc && (
            <div className="w-full lg:w-80 xl:w-96 flex-shrink-0 order-first lg:order-last flex flex-col">
              <div className="relative flex-1 min-h-[240px] lg:min-h-0 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1024px) 100vw, 384px"
                />
              </div>
            </div>
          )}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${imageSrc ? "flex-1 min-h-0" : "max-w-4xl mx-auto"}`}>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
                <FaCheckCircle className="text-accent-500 text-2xl flex-shrink-0 mt-1" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

