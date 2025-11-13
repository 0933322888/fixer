import Link from "next/link";
import { ReactNode } from "react";

interface ServiceHeroProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function ServiceHero({ title, description, icon }: ServiceHeroProps) {
  return (
    <section className="bg-[#DD4F06] text-white">
      <div className="container-custom py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 w-24 h-24 rounded-full flex items-center justify-center mb-6 mx-auto">
            {icon}
          </div>
          <h1 className="heading-xl text-white mb-6">{title}</h1>
          <p className="text-xl text-gray-100 mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Book Repair Now
            </Link>
            <a href="tel:+16135551234" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500">
              Call (613) 555-1234
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

