import { Metadata } from "next";
import Link from "next/link";
import { FaClock, FaUser, FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Repair vs Replacement Guide for Appliances | Fixer",
  description: "Not sure whether to repair or replace your appliance? See lifespan guides, cost rules, and expert advice from a technician with 15+ years of experience in Ottawa.",
};

const faqs = [
  {
    question: "When should I repair instead of replace my appliance?",
    answer: "Repair is usually the better choice when the appliance is not too old, has been maintained properly, requires a reasonably priced fix, and parts are easily available.",
  },
  {
    question: "What is the 50% rule for appliance repair?",
    answer: "If the repair costs more than 50% of the price of a comparable new appliance, replacement is usually smarter.",
  },
  {
    question: "How long do appliances typically last?",
    answer: "Refrigerators last 10–15 years, washers 10–12 years, dishwashers 9–11 years, electric stoves/ovens 13–15 years, and dryers 10–13 years.",
  },
  {
    question: "When is replacement the better choice?",
    answer: "Replacement makes sense when the appliance is near or past its expected lifespan, has repeated failures, requires a major component failure (compressor, motor, control board), or repair costs approach 50% of a new unit's price.",
  },
  {
    question: "What are the benefits of replacing an old appliance?",
    answer: "New appliances come with full manufacturer warranties, improved energy efficiency (lower hydro bills), less stress and uncertainty, and some older units simply aren't worth investing in.",
  },
];

export default function RepairVsReplacePost() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-accent-500 to-accent-600 text-white py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-200 hover:text-white mb-6 transition-colors">
              <FaArrowLeft />
              Back to Blog
            </Link>
            
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-accent-500 text-white text-sm font-semibold rounded-full">
                Buying Guide
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Repair vs Replacement: How to Make the Right Choice for Your Appliance
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-200">
              <div className="flex items-center gap-2">
                <FaUser />
                <span>Michael R</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock />
                <span>10 min read</span>
              </div>
              <span>December 1, 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="lead text-gray-700">
              For more than 15 years, I've been repairing home appliances across Ottawa and the surrounding areas. One of the most common questions homeowners ask is: <strong>"Should I repair my appliance, or is it time to replace it?"</strong>
            </p>
            <p className="text-gray-700">
              This guide combines industry knowledge, current research, and professional experience to help you make a smart, confident decision.
            </p>

            {/* What Research Says */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Research Says</h2>
              <p className="text-gray-700 mb-4">
                Below are two of the most credible and relevant modern sources that help homeowners understand when repair or replacement is the better option.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg my-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Consumer Reports – "Repair or Replace" Tool</h3>
                <p className="text-gray-700 mb-3">
                  <a 
                    href="https://www.consumerreports.org/repair-replace/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent-600 hover:text-accent-700 underline"
                  >
                    https://www.consumerreports.org/repair-replace/
                  </a>
                </p>
                <p className="text-gray-700">
                  A practical tool that evaluates whether repairing or replacing is more cost-effective based on the appliance's age, typical lifespan, reliability, and expected repair cost.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg my-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Torca-Adell et al., 2025 — "Exploring the Acquisition, Usage, Repair, and End-of-Life Management of Household Appliances"
                </h3>
                <p className="text-gray-700 mb-3">
                  <a 
                    href="https://www.sciencedirect.com/science/article/abs/pii/S266678432400069X" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent-600 hover:text-accent-700 underline inline-flex items-center gap-1"
                  >
                    Official link <FaExternalLinkAlt className="text-xs" />
                  </a>
                </p>
                <p className="text-gray-700 font-semibold mb-2">Key findings:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Repair is usually favored when the appliance is not too old, has been maintained properly, and requires a reasonably priced fix.</li>
                  <li>Replacement is more common when the appliance is older, has repeated failures, or requires a major or costly component.</li>
                  <li>Regular maintenance and correct usage significantly extend appliance lifespan.</li>
                  <li>Cost and convenience remain the strongest factors influencing repair vs replacement decisions.</li>
                  <li>Repair is most beneficial when the appliance still has meaningful remaining service life.</li>
                </ul>
              </div>

              <p className="text-gray-700 italic">
                These insights closely match what I see every day in real homes across Ottawa.
              </p>
            </div>

            {/* Repair vs Replacement Quick Visual Guide */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Repair vs Replacement — Quick Visual Guide</h2>
              <p className="text-gray-700 mb-6">
                Below is a simple, clear comparison table you can use to decide which option makes more sense.
              </p>
              
              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-accent-500 text-white">
                      <th className="border border-gray-300 p-4 text-left font-semibold">Repair Is Likely</th>
                      <th className="border border-gray-300 p-4 text-left font-semibold">Replacement Is Likely</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-4 text-gray-700">Appliance is not too old</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Appliance is near or past its expected lifespan</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 text-gray-700">Good maintenance history</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Repeated or multiple failures</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-4 text-gray-700">Single or isolated issue</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Major component failure (compressor, motor, control board)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 text-gray-700">Repair cost is reasonable</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Repair cost approaches 50% of the price of a new appliance</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-4 text-gray-700">Parts are easily available</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Parts are discontinued, back-ordered, or very expensive</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Typical Lifespans */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Typical Lifespans of Home Appliances</h2>
              <p className="text-gray-700 mb-4">
                These are industry averages and help determine whether a repair is worthwhile.
              </p>
              
              <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-600 my-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-semibold text-primary-700 mr-2">Refrigerator:</span>
                    <span>10–15 years</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-primary-700 mr-2">Washer:</span>
                    <span>10–12 years</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-primary-700 mr-2">Dishwasher:</span>
                    <span>9–11 years</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-primary-700 mr-2">Electric stove/oven:</span>
                    <span>13–15 years</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-primary-700 mr-2">Dryer:</span>
                    <span>10–13 years</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-gray-700">
                A repair early in the appliance's lifespan is almost always cost-effective. A repair late in the lifespan often isn't.
              </p>
            </div>

            {/* General Rules of Thumb */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">General Rules of Thumb</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1. The 50% Rule</h3>
                  <p className="text-gray-700">
                    If the repair costs more than 50% of the price of a comparable new appliance, replacement is usually smarter.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Age Matters</h3>
                  <p className="text-gray-700">
                    Units approaching the end of their lifespan are often not worth major repair investments.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3. One-Time Issue vs. Repeated Issues</h3>
                  <p className="text-gray-700">
                    A single failure = repair usually makes sense. Ongoing failures = time to replace.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Energy Efficiency</h3>
                  <p className="text-gray-700">
                    Newer models often use significantly less electricity and water, which saves money long-term.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Parts Availability</h3>
                  <p className="text-gray-700">
                    If parts are discontinued, extremely expensive, or have long wait times, replacement may be the better choice.
                  </p>
                </div>
              </div>
            </div>

            {/* Expert Analysis */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Analysis (from Michael — 15+ Years of Experience)</h2>
              
              <p className="text-gray-700 mb-6">
                Here's my honest, practical perspective based on thousands of service calls across Ottawa:
              </p>
              
              <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-600 my-6">
                <p className="text-gray-700 mb-4">
                  If an appliance is reasonably young, the issue is isolated, and parts are affordable, then <strong>repairing is almost always the best option</strong>.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg my-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">I recommend replacement when:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>there is a major component failure (compressor, sealed system, motor, main control board)</li>
                  <li>the unit is over 12 years old</li>
                  <li>the repair cost is close to or above 50% of the cost of a new unit</li>
                  <li>the appliance has a history of repeated problems</li>
                </ul>
              </div>

              <div className="bg-accent-50 p-6 rounded-lg my-6 border-l-4 border-accent-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why replacement may be the better choice:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>New appliances come with full manufacturer warranties</li>
                  <li>Improved energy efficiency = lower hydro bills</li>
                  <li>Less stress and uncertainty</li>
                  <li>Some older units simply aren't worth investing in</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-lg my-6 border-l-4 border-primary-600">
                <p className="text-gray-700 italic leading-relaxed">
                  My principle is simple: <strong>"Fix it fast and fix it right — so I don't have to come back."</strong> If a repair lets me deliver that level of quality, I'll recommend it. If not, I'll tell you honestly that replacement is the smarter long-term solution.
                </p>
              </div>
            </div>

            {/* FAQs */}
            <div className="my-12">
              <FAQSection faqs={faqs} />
            </div>

            {/* Author Bio */}
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-lg my-12 border-l-4 border-primary-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Author</h3>
              <p className="text-gray-700 leading-relaxed">
                Hi, I'm Michael, lead technician at Fixer Appliance Repair Inc. With over 15 years of experience repairing home appliances across Ottawa, I've helped thousands of homeowners make the right decision between repair and replacement. My goal is to provide honest, practical advice that saves you time and money.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <CTASection 
        heading="Need Help Deciding?"
        description="If you're unsure whether repair or replacement is the right choice for your situation, we offer clear professional diagnostics, transparent repair estimates, honest recommendations, help choosing a new appliance if needed, and installation services for most electric appliances."
        buttonText="Contact Us"
      />

      {/* Related Posts */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/oven-not-heating" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Oven Not Heating at All? Here's What Might Be Going Wrong
                </h3>
                <p className="text-gray-600">
                  Common reasons why your electric oven won't heat and how to fix them.
                </p>
              </Link>
              <Link href="/blog/oven-heats-improperly" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Oven Heats, But Not Properly? Here's What Might Be Wrong
                </h3>
                <p className="text-gray-600">
                  Troubleshooting uneven or insufficient oven heating.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

