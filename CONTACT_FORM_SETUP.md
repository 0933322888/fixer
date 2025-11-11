# Contact Form Email Setup Guide

## Overview

The contact form is now functional and will send emails when users submit the form. The implementation uses [Resend](https://resend.com), a modern email service with a generous free tier.

## Setup Steps

### 1. Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### 2. Get Your API Key

1. Log into your Resend dashboard
2. Go to **API Keys** section
3. Click **Create API Key**
4. Give it a name (e.g., "Appliance Repair Website")
5. Copy the API key (starts with `re_`)

### 3. Set Up Environment Variables

1. Create a `.env.local` file in the root of your project (copy from `.env.example`)
2. Add your Resend API key:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   CONTACT_EMAIL=service@fixerappliancerepair.ca
   ```

### 4. Verify Your Domain (Optional but Recommended)

**For production use**, you should verify your domain:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `fixerappliancerepair.ca`)
4. Add the DNS records Resend provides to your domain's DNS settings
5. Wait for verification (usually takes a few minutes)

**Important:** Until you verify your domain, emails will be sent from `onboarding@resend.dev`. This works for testing but you should verify your domain for production.

### 5. Update the "From" Email Address

Once your domain is verified, update the `from` field in `app/api/contact/route.ts`:

```typescript
from: "Fixer Appliance Repair <service@fixerappliancerepair.ca>",
```

Replace `onboarding@resend.dev` with your verified domain email.

## Testing

1. Start your development server: `npm run dev`
2. Go to `/contact` page
3. Fill out and submit the form
4. Check the email inbox specified in `CONTACT_EMAIL`
5. You should receive an email with the form submission details

## Email Format

The email will include:
- **Subject:** "New Contact Form Submission from [Name]"
- **From:** Your verified domain email (or onboarding@resend.dev for testing)
- **To:** The email address specified in `CONTACT_EMAIL`
- **Reply-To:** The customer's email address (so you can reply directly)
- **Content:** Formatted HTML email with all form fields

## Troubleshooting

### Emails Not Sending

1. **Check API Key:** Make sure `RESEND_API_KEY` is set correctly in `.env.local`
2. **Check Console:** Look for errors in your terminal/console
3. **Check Resend Dashboard:** Go to Resend dashboard → Logs to see email status
4. **Verify Environment Variables:** Make sure `.env.local` is in the root directory and not committed to git

### Common Errors

- **"Invalid API key"**: Your API key is incorrect or missing
- **"Domain not verified"**: You're trying to use an unverified domain email address
- **"Rate limit exceeded"**: You've hit Resend's free tier limit (100 emails/day)

## Alternative Email Services

If you prefer a different email service, you can modify `app/api/contact/route.ts`:

### Using Nodemailer (SMTP)

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

Then update the API route to use Nodemailer with your SMTP settings.

### Using SendGrid

```bash
npm install @sendgrid/mail
```

### Using Mailgun

```bash
npm install mailgun.js
```

## Security Notes

- Never commit `.env.local` to git (it's already in `.gitignore`)
- Keep your API keys secure
- Use environment variables for all sensitive data
- Consider adding rate limiting for production use

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add environment variables in your hosting platform's dashboard
2. Set `RESEND_API_KEY` and `CONTACT_EMAIL`
3. Verify your domain in Resend
4. Update the `from` email address in the API route

## Free Tier Limits

Resend's free tier includes:
- 100 emails per day
- 3,000 emails per month
- Unlimited API requests

For higher limits, upgrade to a paid plan.

