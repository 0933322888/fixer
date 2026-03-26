/** @type {import('next').NextConfig} */
const nextConfig = {
  // Needs a Node runtime (e.g. VPS, Vercel) so /api/contact can send email via SMTP.
  // Static export would omit API routes and break the contact form.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

