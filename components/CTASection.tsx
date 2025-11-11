import Link from "next/link";

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
      <div className="container-custom text-center">
        <h2 className="heading-lg mb-4 text-white">Need Your Appliance Fixed Today?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Our expert technicians are ready to help. Same-day service available. Call now or book online!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary bg-white text-accent-600 hover:bg-gray-100">
            Schedule Service Now
          </Link>
          <a href="tel:+16135551234" className="btn-outline border-white text-white hover:bg-white hover:text-accent-600">
            Call (613) 555-1234
          </a>
        </div>
      </div>
    </section>
  );
}

