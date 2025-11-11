import { Metadata } from "next";
import Link from "next/link";
import { FaClock, FaUser, FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Oven Not Heating at All? Here's What Might Be Going Wrong | Fixer Blog",
  description: "Common reasons why your electric oven won't heat and how to fix them. Expert troubleshooting tips from Ottawa's trusted appliance repair professionals.",
};

export default function OvenNotHeatingPost() {
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
              Oven Not Heating at All? Here's What Might Be Going Wrong
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-200">
              <div className="flex items-center gap-2">
                <FaUser />
                <span>Michael Russky</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock />
                <span>8 min read</span>
              </div>
              <span>November 20, 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="lead text-gray-700">
              Trying to cook dinner only to discover your oven isn't heating up at all? You're not alone — this is one of the most common problems we see as appliance technicians in Ottawa. Whether it's a weekday meal or you're prepping for a holiday dinner, a non-working oven throws everything off. Let's break down the most common reasons and what you can do.
            </p>

            {/* Section 1 */}
            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Heating Element Failure (Electric Ovens)</h2>
              
              <p className="mb-4">
                <strong className="text-primary-600">Problem:</strong> The oven is on, but it stays cold.
              </p>
              
              <p className="mb-4">
                <strong className="text-primary-600">Fix:</strong> Open the oven and take a look at the bake and broil elements. Are they glowing red? If not, they may be burnt out. Heating elements often show visible signs of damage like blistering or breaks.
              </p>
              
              <p className="mb-4">
                <strong className="text-primary-600">Try this:</strong> You can check the element for continuity with a multimeter. If it's faulty, you'll need to replace it with a compatible part (based on your oven's model number).
              </p>
              
              <p className="bg-primary-50 p-4 rounded border-l-4 border-primary-600">
                <strong>Still cold?</strong> Call Fixer Appliance Repair — we stock replacement elements and can usually get it fixed same-day.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Blown Thermal Fuse</h2>
              
              <p className="mb-4">
                <strong className="text-primary-600">Problem:</strong> The oven suddenly stopped working after a power surge or overheating.
              </p>
              
              <p className="mb-4">
                <strong className="text-primary-600">Fix:</strong> The thermal fuse is a safety device that cuts off power if the oven overheats. If it blows, the oven won't heat at all.
              </p>
              
              <p className="mb-4">
                <strong className="text-primary-600">Try this:</strong> If you're comfortable working with electronics, unplug the oven and use a multimeter to test the fuse. If blown, it will show no continuity.
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <p className="text-gray-900">
                  <strong>⚠️ Warning:</strong> If the fuse blew once, the root cause (like poor airflow) must be addressed too.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Temperature Sensor Malfunction</h2>
              
              <p className="mb-4">
                <strong className="text-primary-600">Problem:</strong> Oven stays cold or shuts off too early.
              </p>
              
              <p className="mb-4">
                <strong className="text-primary-600">Fix:</strong> The temperature sensor monitors internal heat and tells the control board when to turn the elements on/off. If it's defective, the oven may not heat.
              </p>
              
              <p>
                <strong className="text-primary-600">Try this:</strong> Check the sensor for damage or disconnection. Test its resistance at room temp (~1100 ohms). If the reading is off, replace it.
              </p>
            </div>

            {/* Section 4 */}
            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Power Supply Issues</h2>
              
              <p className="mb-4">
                <strong className="text-primary-600">Problem:</strong> No signs of power — display is blank, oven is unresponsive.
              </p>
              
              <p className="mb-4">
                <strong className="text-primary-600">Fix:</strong> Check the circuit breaker, plug, and outlet. Ovens use 240V power, and even one tripped breaker can cause it to lose heat.
              </p>
              
              <p>
                <strong className="text-primary-600">Try this:</strong> Plug something else into the outlet. No power? Reset the breaker. Still nothing? You may need an electrician.
              </p>
            </div>

            {/* Section 5 */}
            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Control Board Failure</h2>
              
              <p className="mb-4">
                <strong className="text-primary-600">Problem:</strong> You've ruled out everything else, but it still won't heat.
              </p>
              
              <p className="mb-4">
                <strong className="text-primary-600">Fix:</strong> If the control board isn't sending voltage to the elements or relay switches, the oven won't respond.
              </p>
              
              <p>
                <strong className="text-primary-600">Try this:</strong> This is usually not DIY — replacing a control board requires precision and proper diagnosis. Contact a qualified technician to test the board and install a new one if needed.
              </p>
            </div>

            {/* Video Section */}
            <div className="bg-primary-50 p-8 rounded-lg my-8 border-2 border-primary-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 Still not sure what's wrong?</h2>
              <p className="mb-4 text-gray-700">
                If you're still unsure which part is causing the problem, this short and practical video may help. It walks through the most common reasons why an electric oven won't heat — including how to check the element, fuse, and control board.
              </p>
              <a
                href="https://www.youtube.com/watch?v=lyRjIxGHWW4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
              >
                <FaExternalLinkAlt />
                Watch on YouTube: EASY FIX - Oven Not Heating
              </a>
            </div>

            {/* FAQs */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (FAQs)</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Why is my oven turning on but not getting hot?
                  </h3>
                  <p className="text-gray-700">
                    Usually it's a faulty heating element, sensor, or blown thermal fuse.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Can I replace a heating element myself?
                  </h3>
                  <p className="text-gray-700">
                    Yes, if you're confident. But always unplug the oven and double-check compatibility.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Is it worth repairing an old oven?
                  </h3>
                  <p className="text-gray-700">
                    If the repair is under $300 and the oven is under 10–15 years old — usually yes.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Can a blown fuse cause an oven not to heat?
                  </h3>
                  <p className="text-gray-700">
                    Yes. Especially if the oven suddenly lost power after running for a while.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What should I check first?
                  </h3>
                  <p className="text-gray-700">
                    Start with the heating element and breaker. Then move to sensor and fuse.
                  </p>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-lg my-12 border-l-4 border-primary-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Author</h3>
              <p className="text-gray-700 leading-relaxed">
                Hi, I'm Michael, lead technician at Fixer Appliance Repair Inc. I've spent over 15 years diagnosing and fixing ovens, fridges, washers, and more — from circuit boards to soldering repairs. My background includes microelectronics assembly, mobile device repair, and PC builds, so when it comes to heating issues, I've probably seen it (and fixed it). My goal is to keep your kitchen running smoothly without the guesswork.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Need Professional Oven Repair?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Don't let a broken oven ruin your meal plans. Our expert technicians can diagnose and fix your oven fast.
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
              <Link href="/blog" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  When to Repair vs. Replace Your Appliance
                </h3>
                <p className="text-gray-600">
                  Making the right decision between repairing and replacing can save you hundreds.
                </p>
              </Link>
              <Link href="/blog" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Essential Appliance Maintenance Checklist
                </h3>
                <p className="text-gray-600">
                  Keep your appliances running smoothly with this comprehensive guide.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

