# Appliance Repair Website

A professional, SEO-optimized website for an appliance repair company built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, responsive design with professional UI
- 🎨 Professional appliance repair industry colors (blue and orange theme)
- 📱 Mobile-friendly navigation with hamburger menu
- 🔍 SEO optimized with meta tags and semantic HTML
- ⚡ Fast performance with Next.js App Router
- 🛠️ Service pages for 6 appliance types:
  - Fridge Repair
  - Dishwasher Repair
  - Washer Repair
  - Dryer Repair
  - Stove Repair
  - Oven Repair
- 📦 Installation pages for each appliance type
- 📞 Contact/Booking page with form
- 🗺️ Google Maps integration for service area
- ⭐ Customer testimonials and reviews
- 📋 FAQ sections with accordion functionality
- 🏢 Comprehensive footer with contact information

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Deployment:** Ready for Vercel, Netlify, or any hosting platform

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization Guide

### 1. Company Information

Update the following placeholders throughout the site:

**Header Component** (`components/Header.tsx`):
- Replace "Your Company Name" with your actual company name
- Update phone number from "(613) 555-1234"
- Replace logo icon with your company logo

**Footer Component** (`components/Footer.tsx`):
- Update company name, address, phone, email
- Update social media links
- Adjust business hours

### 2. Contact Information

**Contact Page** (`app/contact/page.tsx`):
- Update phone number
- Update email address
- Update service area details
- Configure form submission endpoint

### 3. SEO Optimization

Each page has metadata that should be customized:
- Update page titles
- Customize meta descriptions
- Add your specific keywords
- Update location targeting (currently set to Ottawa, ON)

### 4. Styling & Branding

**Colors** (`tailwind.config.ts`):
- Primary colors (blue) - adjust for your brand
- Accent colors (orange) - adjust for your brand

**Global Styles** (`app/globals.css`):
- Customize button styles
- Adjust spacing and typography

### 5. Google Maps

Update the Google Maps embed URLs in:
- `components/MapSection.tsx`
- `app/contact/page.tsx`

Replace with your business location coordinates.

### 6. Form Submission

The contact form (`app/contact/page.tsx`) currently logs to console. Integrate with:
- Your email service (SendGrid, Mailgun, etc.)
- CRM system
- Booking management software

## Project Structure

```
applianceRepair/
├── app/
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with header/footer
│   ├── page.tsx              # Homepage
│   ├── contact/              # Contact/booking page
│   ├── fridge-repair/        # Fridge repair service page
│   ├── dishwasher-repair/    # Dishwasher repair page
│   ├── washer-repair/        # Washer repair page
│   ├── dryer-repair/         # Dryer repair page
│   ├── stove-repair/         # Stove repair page
│   ├── oven-repair/          # Oven repair page
│   ├── fridge-installation/  # Fridge installation page
│   ├── dishwasher-installation/
│   ├── washer-installation/
│   ├── dryer-installation/
│   ├── stove-installation/
│   └── oven-installation/
├── components/
│   ├── Header.tsx            # Top header with logo & phone
│   ├── Navbar.tsx            # Navigation menu
│   ├── Footer.tsx            # Footer component
│   ├── ServiceHero.tsx       # Hero section for service pages
│   ├── BenefitsSection.tsx   # Benefits/why choose us
│   ├── BrandsSection.tsx     # Brands we service
│   ├── CTASection.tsx        # Call-to-action sections
│   ├── FeedbacksSection.tsx  # Customer reviews
│   ├── CommonIssuesSection.tsx
│   ├── PartsSection.tsx      # Parts we replace
│   ├── FAQSection.tsx        # FAQ accordion
│   └── MapSection.tsx        # Google Maps embed
├── public/                   # Static assets (add your logo here)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## SEO Features

- Server-side rendering (SSR) with Next.js
- Semantic HTML structure
- Meta tags for each page
- Open Graph tags for social sharing
- Descriptive URLs for all pages
- Alt text for accessibility
- Fast load times
- Mobile-responsive design

## Location Targeting

The website is currently configured for:
- **Location:** Ottawa, Ontario, Canada
- **Service Areas:** Ottawa, Kanata, Nepean, Barrhaven, Orleans, Gloucester, Stittsville, Manotick

Update these in:
- Page metadata (title & description)
- Homepage service areas section
- Footer
- Contact page

## Adding More Services

To add a new service page:

1. Create a new folder in `app/` (e.g., `app/microwave-repair/`)
2. Add a `page.tsx` file using existing service pages as template
3. Update the navigation in `components/Navbar.tsx`
4. Update the services list on the homepage
5. Create a corresponding installation page if needed

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The site can be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any Node.js hosting provider

Build command: `npm run build`
Output directory: `.next`

## Support

For questions or issues, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Icons](https://react-icons.github.io/react-icons/)

## License

This project is provided as-is for your business use.

