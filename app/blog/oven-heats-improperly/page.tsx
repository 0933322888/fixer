import { Metadata } from "next";
import Link from "next/link";
import { FaClock, FaUser, FaArrowLeft } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Oven Heats, But Not Properly? Here's What Might Be Wrong | Fixer Blog",
  description: "Troubleshooting uneven or insufficient oven heating. Expert tips for fixing temperature issues, calibration problems, and heat distribution from Ottawa's appliance repair pros.",
};

export default function OvenHeatsImproperlyPost() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#DD4F06] text-white py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-200 hover:text-white mb-6 transition-colors">
              <FaArrowLeft />
              Back to Blog
            </Link>
            
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-accent-500 text-white text-sm font-semibold rounded-full">
                Oven Repair
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Oven Heats, But Not Properly? Here's What Might Be Wrong
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-200">
              <div className="flex items-center gap-2">
                <FaUser />
                <span>Michael Russky</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock />
                <span>7 min read</span>
              </div>
              <span>November 22, 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="lead text-gray-700">
              Your oven turns on, the light works, and the fan hums — but your food still comes out raw, burnt on one side, or just takes forever to cook. If that sounds familiar, you're not alone. Uneven or insufficient heating is a frustrating but common oven issue we see in Ottawa homes. Here are the most likely reasons and what you can do about them.
            </p>

            {/* Section 1 */}
            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Faulty Temperature Sensor</h2>
              
              <p className="mb-4">
                <strong className="text-primary-600">Problem:</strong> The oven is heating, but not reaching the correct temperature — or turns off too early.
              </p>
              
              <p className="mb-4">
                <strong className="text-primary-600">Fix:</strong> The sensor may be misreading the internal temperature. Use a multimeter to test resistance at room temperature (~1100 ohms).
              </p>
              
              <p className="bg-primary-50 p-4 rounded border-l-4 border-primary-600">
                <strong>Still off?</strong> Replacing the sensor usually solves the issue.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Oven Needs Calibration</h2>
              
              <p className="mb-4">
                <strong className="text-primary-600">Problem:</strong> Your oven bakes, but it's consistently off by 25–50°F.
              </p>
              
              <p className="mb-4">
                <strong className="text-primary-600">Fix:</strong> Some ovens allow manual calibration through the control panel. Follow your user manual to adjust.
              </p>
              
              <p className="bg-primary-50 p-4 rounded border-l-4 border-primary-600">
                <strong>Still baking unevenly?</strong> The sensor or control board might be to blame.
              </p>
            </div>

            {/* Section 3 */}
            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Partially Working Heating Element</h2>
              
              <p className="mb-4">
                <strong className="text-primary-600">Problem:</strong> The bake or broil element is heating, but not fully — resulting in slow or uneven cooking.
              </p>
              
              <p className="mb-4">
                <strong className="text-primary-600">Fix:</strong> Check the element for dark spots, breaks, or partial glow. Replace if damaged or weak.
              </p>
              
              <p className="bg-primary-50 p-4 rounded border-l-4 border-primary-600">
                <strong>Not sure how to test it?</strong> Our Ottawa techs can do it for you.
              </p>
            </div>

            {/* Section 4 */}
            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Convection Fan Running, But Not Heating Evenly</h2>
              
              <p className="mb-4">
                <strong className="text-primary-600">Problem:</strong> You're using convection mode, but food still cooks unevenly.
              </p>
              
              <p className="mb-4">
                <strong className="text-primary-600">Fix:</strong> The fan may spin, but the convection element might not be heating. This is a separate component.
              </p>
              
              <p>
                You can test it with a multimeter or have a technician inspect both the fan motor and heating circuit.
              </p>
            </div>

            {/* Section 5 */}
            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Oven Door Not Sealing Properly</h2>
              
              <p className="mb-4">
                <strong className="text-primary-600">Problem:</strong> Heat escapes during baking — especially common in older units.
              </p>
              
              <p className="mb-4">
                <strong className="text-primary-600">Fix:</strong> Check the door gasket for wear, gaps, or looseness. If the seal is compromised, replace it.
              </p>
              
              <div className="bg-accent-50 border-l-4 border-accent-500 p-4 rounded">
                <p className="text-gray-900">
                  <strong>💡 Bonus tip:</strong> Try the 'paper test' — if you can pull a sheet of paper out when the door is closed, the seal is weak.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Blocked Vents or Dirty Interior</h2>
              
              <p className="mb-4">
                <strong className="text-primary-600">Problem:</strong> Heat distribution is disrupted due to blocked airflow or burnt-on residue inside.
              </p>
              
              <p className="mb-4">
                <strong className="text-primary-600">Fix:</strong> Remove obstructions near vents. Clean the interior (especially the back wall and fan guard) to ensure smooth circulation.
              </p>
              
              <p className="bg-primary-50 p-4 rounded border-l-4 border-primary-600">
                <strong>Still struggling?</strong> We'll help restore even heating.
              </p>
            </div>

            {/* FAQs */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (FAQs)</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Why is my oven heating unevenly?
                  </h3>
                  <p className="text-gray-700">
                    Most often it's a faulty sensor, calibration issue, or weak heating element.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Is it normal for an oven to have hot spots?
                  </h3>
                  <p className="text-gray-700">
                    Slight variations are normal, but big differences mean something's wrong.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Can a convection oven cook unevenly?
                  </h3>
                  <p className="text-gray-700">
                    Yes — if the convection element or fan isn't working properly.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What's the easiest fix I can try myself?
                  </h3>
                  <p className="text-gray-700">
                    Try recalibrating and checking the door seal. These are safe DIY steps.
                  </p>
                </div>
              </div>
            </div>

            {/* Real Case Study */}
            <div className="bg-gradient-to-r from-accent-50 to-accent-100 p-8 rounded-lg my-12 border-l-4 border-accent-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Case from Fixer Appliance Repair</h3>
              <p className="text-gray-700 leading-relaxed italic">
                We once repaired an oven in Nepean that seemed fine at first glance — lights on, fan working, display normal — but every cake came out raw in the middle. After testing, we found the sensor was slightly off and the door seal had shrunk. Replacing both brought it back to perfect baking.
              </p>
            </div>

            {/* Author Bio */}
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-lg my-12 border-l-4 border-primary-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Author</h3>
              <p className="text-gray-700 leading-relaxed">
                Michael is the lead technician at Fixer Appliance Repair Inc., serving Ottawa and nearby areas. With over 15 years of hands-on experience in electronics, appliances, and soldering-level diagnostics, he helps families solve heating problems quickly and honestly.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Tired of Uneven Baking?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Let our expert technicians diagnose and fix your oven's heating issues. We'll get your oven baking perfectly again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:613-413-6969" className="btn-primary bg-accent-500 hover:bg-accent-600">
              Call 613-413-6969
            </a>
            <Link href="/oven-repair" className="btn-outline border-white text-white hover:bg-white hover:text-primary-700">
              Learn About Our Oven Repair Service
            </Link>
          </div>
        </div>
      </section>

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
              <Link href="/blog" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  When to Repair vs. Replace Your Appliance
                </h3>
                <p className="text-gray-600">
                  Making the right decision between repairing and replacing can save you hundreds.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

