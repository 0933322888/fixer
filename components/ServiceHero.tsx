import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

interface ServiceHeroProps {
  title: string | ReactNode;
  description: string | ReactNode;
  icon: ReactNode;
  additionalContent?: ReactNode;
  buttonText?: string;
  phoneNumber?: string;
  phoneText?: string;
  headingSize?: "lg" | "xl";
  useSectionPadding?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  /** Optional different image for the right panel. If omitted, the left image is used on both sides. */
  imageSrcRight?: string;
  imageAltRight?: string;
}

export default function ServiceHero({
  title,
  description,
  icon,
  additionalContent,
  buttonText = "Book Online",
  phoneNumber = "613-413-6969",
  phoneText = "Call us",
  headingSize = "lg",
  useSectionPadding = false,
  imageSrc,
  imageAlt = "",
  imageSrcRight,
  imageAltRight = "",
}: ServiceHeroProps) {
  const rightImageSrc = imageSrcRight ?? imageSrc;
  const headingClass = headingSize === "xl" ? "heading-xl" : "heading-lg";
  const sectionClass = useSectionPadding ? "section-padding bg-[#DD4F06] text-white" : "bg-[#DD4F06] text-white";
  const containerPadding = useSectionPadding ? "" : "py-16 md:py-20";

  return (
    <section className={`overflow-hidden ${imageSrc ? "flex flex-col lg:flex-row lg:items-stretch" : sectionClass}`}>
      {imageSrc ? (
        <>
          {/* Left image */}
          <div className="relative hidden lg:block lg:flex-1 lg:min-w-0">
            <Image
              src={imageSrc}
              alt=""
              fill
              style={{ objectFit: "cover", objectPosition: "center right" }}
              sizes="33vw"
              priority
              className="object-cover"
            />
          </div>
          {/* Center: orange background + text */}
          <div className="bg-[#DD4F06] text-white flex flex-col justify-center w-full lg:w-auto lg:min-w-0 lg:max-w-3xl lg:flex-shrink-0 py-12 md:py-16 lg:py-20 px-8 sm:px-10 lg:px-14 xl:px-20">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className={`${headingClass} mb-6 text-white`}>
                {icon} {title}
              </h1>
              {typeof description === "string" ? (
                <p className="text-xl leading-relaxed mb-8 text-gray-100">
                  {description}
                </p>
              ) : (
                <div className="text-xl leading-relaxed mb-8 text-gray-100">
                  {description}
                </div>
              )}
              {additionalContent && (
                <div className="mb-8">
                  {additionalContent}
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-primary-500 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                  {buttonText}
                </Link>
                <a href={`tel:${phoneNumber}`} className="btn-outline border-white text-white hover:bg-white hover:text-primary-500">
                  {phoneText}
                </a>
              </div>
            </div>
          </div>
          {/* Right image */}
          <div className="relative lg:flex-1 lg:min-w-0 mt-8 lg:mt-0">
            <div className="relative aspect-square lg:aspect-auto lg:absolute lg:inset-0 rounded-xl lg:rounded-none overflow-hidden">
              <Image
                src={(rightImageSrc ?? imageSrc)!}
                alt={imageAltRight || imageAlt}
                fill
                style={{ objectFit: "cover", objectPosition: "center left" }}
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </>
      ) : (
        <div className={`container-custom ${containerPadding}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`${headingClass} mb-6 text-white`}>
              {icon} {title}
            </h1>
            {typeof description === "string" ? (
              <p className="text-xl leading-relaxed mb-8 text-gray-100">
                {description}
              </p>
            ) : (
              <div className="text-xl leading-relaxed mb-8 text-gray-100">
                {description}
              </div>
            )}
            {additionalContent && (
              <div className="mb-8">
                {additionalContent}
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-500 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                {buttonText}
              </Link>
              <a href={`tel:${phoneNumber}`} className="btn-outline border-white text-white hover:bg-white hover:text-primary-500">
                {phoneText}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

