"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaClock, FaUser, FaArrowRight } from "react-icons/fa";

// Placeholder blog posts - replace with actual content from CMS or database
const blogPosts = [
  {
    id: 1,
    title: "Oven Heats, But Not Properly? Here's What Might Be Wrong",
    slug: "oven-heats-improperly",
    excerpt: "Troubleshooting uneven or insufficient oven heating. Expert tips for fixing temperature issues, calibration problems, and heat distribution.",
    image: "/gallery/oven_blog2.jpg",
    category: "Oven Repair",
    author: "Michael Russky",
    date: "November 22, 2024",
    readTime: "7 min read",
  },
  {
    id: 2,
    title: "Oven Not Heating at All? Here's What Might Be Going Wrong",
    slug: "oven-not-heating",
    excerpt: "Common reasons why your electric oven won't heat and how to fix them. Expert troubleshooting tips from Ottawa's trusted appliance repair professionals.",
    image: "/gallery/oven_blog.jpg",
    category: "Oven Repair",
    author: "Michael Russky",
    date: "November 20, 2024",
    readTime: "8 min read",
  },
//   {
//     id: 3,
//     title: "5 Signs Your Fridge Needs Immediate Repair",
//     slug: "5-signs-fridge-needs-repair",
//     excerpt: "Don't wait until your food spoils. Learn the warning signs that indicate your refrigerator needs professional attention.",
//     image: "/gallery/output2.jpg",
//     category: "Fridge Repair",
//     author: "Michael Russky",
//     date: "November 15, 2024",
//     readTime: "5 min read",
//   },
//   {
//     id: 4,
//     title: "How to Extend the Life of Your Washing Machine",
//     slug: "extend-washing-machine-life",
//     excerpt: "Simple maintenance tips that can add years to your washer's lifespan and save you money on repairs.",
//     image: "/gallery/output2.jpg",
//     category: "Washer Maintenance",
//     author: "Michael Russky",
//     date: "November 10, 2024",
//     readTime: "7 min read",
//   },
//   {
//     id: 5,
//     title: "Dishwasher Not Draining? Here's What to Check First",
//     slug: "dishwasher-not-draining",
//     excerpt: "Before calling a technician, try these simple troubleshooting steps to fix a dishwasher that won't drain properly.",
//     image: "/gallery/output2.jpg",
//     category: "Dishwasher Repair",
//     author: "Michael Russky",
//     date: "November 5, 2024",
//     readTime: "6 min read",
//   },
//   {
//     id: 6,
//     title: "When to Repair vs. Replace Your Appliance",
//     slug: "repair-vs-replace-appliance",
//     excerpt: "Making the right decision between repairing and replacing can save you hundreds. Here's how to decide.",
//     image: "/gallery/output2.jpg",
//     category: "Buying Guide",
//     author: "Michael Russky",
//     date: "October 28, 2024",
//     readTime: "8 min read",
//   },
//   {
//     id: 7,
//     title: "Why Is My Dryer Taking So Long to Dry Clothes?",
//     slug: "dryer-taking-long-to-dry",
//     excerpt: "Slow drying times are frustrating and costly. Discover the common causes and how to fix them.",
//     image: "/gallery/output2.jpg",
//     category: "Dryer Repair",
//     author: "Michael Russky",
//     date: "October 20, 2024",
//     readTime: "5 min read",
//   },
//   {
//     id: 8,
//     title: "Essential Appliance Maintenance Checklist for Homeowners",
//     slug: "appliance-maintenance-checklist",
//     excerpt: "Keep your appliances running smoothly with this comprehensive monthly and yearly maintenance guide.",
//     image: "/gallery/output2.jpg",
//     category: "Maintenance",
//     author: "Michael Russky",
//     date: "October 15, 2024",
//     readTime: "10 min read",
//   },
];

const categories = [
  "All Posts",
  "Oven Repair",
  "Fridge Repair",
  "Washer Maintenance",
  "Dishwasher Repair",
  "Dryer Repair",
  "Buying Guide",
  "Maintenance",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");

  const filteredPosts =
    selectedCategory === "All Posts"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Appliance Repair Blog</h1>
            <p className="text-xl text-gray-100">
              Expert tips, maintenance guides, and repair advice from Ottawa's trusted appliance repair professionals
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-colors font-semibold ${
                    selectedCategory === category
                      ? "bg-primary-600 text-white"
                      : "bg-white text-gray-700 hover:bg-primary-50 border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">
                  No posts found in this category.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Image */}
                  <Link href={`/blog/${post.slug}`} className="block relative aspect-video">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category */}
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                        {post.title}
                      </h2>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <FaUser className="text-primary-600" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock className="text-primary-600" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="text-sm text-gray-500 mb-4">{post.date}</div>

                    {/* Read More Link */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
                    >
                      Read More <FaArrowRight />
                    </Link>
                  </div>
                </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated</h2>
            <p className="text-xl text-gray-100 mb-8">
              Subscribe to our newsletter for the latest appliance repair tips and exclusive offers
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section> */}

      {/* Need Help CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Professional Help?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Our expert technicians are ready to help with all your appliance repair needs in Ottawa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:613-413-6969"
                className="btn-primary inline-flex items-center justify-center"
              >
                Call 613-413-6969
              </a>
              <Link href="/contact" className="btn-outline inline-flex items-center justify-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

