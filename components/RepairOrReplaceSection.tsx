import Link from "next/link";

interface RepairOrReplaceSectionProps {
  description: string;
}

export default function RepairOrReplaceSection({ description }: RepairOrReplaceSectionProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-md mb-6">Repair or Replace?</h2>
          <p className="text-lg text-gray-700 mb-8">{description}</p>
          <Link href="/blog/repair-vs-replace-appliance" className="btn-primary">
            Read Our Repair vs. Replace Guide
          </Link>
        </div>
      </div>
    </section>
  );
}

