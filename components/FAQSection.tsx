import Link from "next/link";

interface FAQ {
  question: string;
  answer: string;
  link?: string | null;
}

interface FAQSectionProps {
  applianceName?: string;
  faqs: FAQ[];
}

export default function FAQSection({ applianceName, faqs }: FAQSectionProps) {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-md text-center mb-12">FAQ – Appliance Repair in Ottawa</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-light-100 p-6 rounded-lg shadow-sm border border-light-200">
                <h4 className="text-lg font-semibold text-primary-500 mb-3">{faq.question}</h4>
                <p className="text-neutral-600">
                  {faq.answer}
                  {faq.link && (
                    <>
                      {" "}→{" "}
                      <Link href={faq.link} className="text-primary-500 hover:text-primary-600 font-semibold">
                        Learn more
                      </Link>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

