# Quick Setup Guide

## Getting Started

Follow these steps to get your appliance repair website up and running:

### Step 1: Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This will install all required packages (Next.js, React, Tailwind CSS, TypeScript, etc.)

### Step 2: Run the Development Server

```bash
npm run dev
```

Open your browser and go to: [http://localhost:3000](http://localhost:3000)

You should now see your website running!

### Step 3: Customize Your Website

#### A. Update Company Information

1. **Header** (`components/Header.tsx`):
   - Line 17: Change "Your Company Name" to your business name
   - Line 28: Update phone number "(613) 555-1234"
   - Line 14: Replace the icon with your logo (place logo in `public/` folder)

2. **Footer** (`components/Footer.tsx`):
   - Lines 11-15: Update company description
   - Lines 48-77: Update contact information (address, phone, email, hours)
   - Lines 19-27: Update social media links

#### B. Update Contact Form

**File:** `app/contact/page.tsx`

Currently, the form just logs data to the console. To make it functional:

1. Set up an email service (SendGrid, Mailgun, etc.)
2. Create an API route in `app/api/contact/route.ts`
3. Update the `handleSubmit` function (line 27) to send data to your API

Example API setup:
```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  // Send email using your email service
  // Return response
  return NextResponse.json({ success: true });
}
```

#### C. Update SEO Information

Update metadata in each page file:
- Homepage: `app/page.tsx` (not exported, uses layout metadata)
- Service pages: `app/[service]-repair/page.tsx`
- Installation pages: `app/[service]-installation/page.tsx`
- Contact page: `app/contact/page.tsx`

Update:
- Page titles
- Meta descriptions
- Keywords (add your specific location and services)

#### D. Update Location/Service Area

1. **Change from Ottawa to your city:**
   - Search for "Ottawa" in all files
   - Replace with your city name
   - Update ZIP/postal codes

2. **Update Google Maps:**
   - Go to [Google Maps](https://www.google.com/maps)
   - Find your business location
   - Click "Share" → "Embed a map"
   - Copy the iframe URL
   - Replace the URL in:
     - `components/MapSection.tsx` (line 15)
     - `app/contact/page.tsx` (line 182)

#### E. Customize Colors (Optional)

**File:** `tailwind.config.ts`

Current colors:
- Primary (blue): `#3b82f6`
- Accent (orange): `#f97316`

To change colors, update the hex codes in the `colors` section.

### Step 4: Add Your Logo

1. Place your logo file in the `public/` folder (e.g., `public/logo.png`)
2. Update `components/Header.tsx`:

Replace:
```tsx
<div className="bg-primary-600 p-3 rounded-lg">
  <FaTools className="text-white text-2xl" />
</div>
```

With:
```tsx
<Image 
  src="/logo.png" 
  alt="Company Logo" 
  width={60} 
  height={60} 
/>
```

Don't forget to import Image:
```tsx
import Image from "next/image";
```

### Step 5: Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized production build.

To test the production build locally:
```bash
npm start
```

### Step 6: Deploy

#### Deploy to Vercel (Easiest):

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up/login with GitHub
4. Click "New Project"
5. Import your repository
6. Click "Deploy"

Done! Your site will be live in minutes.

#### Other Deployment Options:
- **Netlify:** Similar to Vercel, connect your GitHub repo
- **DigitalOcean:** Use their App Platform
- **AWS:** Use Amplify for easy deployment
- **Self-hosted:** Use any VPS with Node.js support

## Troubleshooting

### Issue: "Module not found" errors
**Solution:** Run `npm install` to install dependencies

### Issue: Port 3000 already in use
**Solution:** Use a different port: `npm run dev -- -p 3001`

### Issue: Styles not loading
**Solution:** 
1. Stop the dev server (Ctrl+C)
2. Delete `.next` folder
3. Run `npm run dev` again

### Issue: TypeScript errors
**Solution:** Most errors will resolve after `npm install`. If not, check that all imports are correct.

## Need Help?

- Check the main README.md for more detailed information
- Refer to [Next.js Documentation](https://nextjs.org/docs)
- Check [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Quick Checklist

- [ ] Install dependencies (`npm install`)
- [ ] Run dev server (`npm run dev`)
- [ ] Update company name in Header and Footer
- [ ] Update phone number throughout the site
- [ ] Update email address
- [ ] Configure contact form submission
- [ ] Update location from Ottawa to your city
- [ ] Update Google Maps embed
- [ ] Add your logo
- [ ] Customize SEO metadata
- [ ] Test all pages
- [ ] Build and deploy

Good luck with your appliance repair website! 🛠️

