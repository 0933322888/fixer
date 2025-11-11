# Deploying to Hostinger - Complete Guide

## Overview

Your Next.js app has API routes (contact form), so you need **Node.js hosting**. Hostinger offers:
- **VPS Hosting** (recommended) - Full Node.js support
- **Cloud Hosting** - May support Node.js
- **Shared Hosting** - Usually doesn't support Node.js (would require static export, but API routes won't work)

## Prerequisites

1. **Hostinger Account** with VPS or Cloud hosting plan
2. **SSH Access** to your server
3. **Domain name** pointing to your Hostinger server
4. **Node.js 18+** installed on the server

---

## Option 1: VPS Hosting (Recommended)

### Step 1: Prepare Your Local Project

1. **Create a `.env.production` file** (for reference, don't commit it):
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   CONTACT_EMAIL=service@fixerappliancerepair.ca
   NODE_ENV=production
   ```

2. **Test the build locally**:
   ```bash
   npm run build
   npm start
   ```

### Step 2: Set Up Your VPS Server

1. **SSH into your Hostinger VPS**:
   ```bash
   ssh root@your-server-ip
   ```

2. **Install Node.js 18+** (if not already installed):
   ```bash
   # Using NodeSource repository
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Verify installation
   node --version
   npm --version
   ```

3. **Install PM2** (process manager for Node.js):
   ```bash
   sudo npm install -g pm2
   ```

4. **Install Nginx** (web server/reverse proxy):
   ```bash
   sudo apt update
   sudo apt install nginx
   sudo systemctl start nginx
   sudo systemctl enable nginx
   ```

### Step 3: Upload Your Project

**Option A: Using Git (Recommended)**

1. **On your local machine**, push code to GitHub/GitLab:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **On your VPS**, clone the repository:
   ```bash
   cd /var/www
   git clone https://github.com/yourusername/your-repo.git appliance-repair
   cd appliance-repair
   ```

**Option B: Using FTP/SFTP**

1. Use FileZilla or similar to upload all files to `/var/www/appliance-repair/`
2. Make sure to upload `.env.local` separately (it's in `.gitignore`)

### Step 4: Build and Configure

1. **Install dependencies**:
   ```bash
   cd /var/www/appliance-repair
   npm install --production
   ```

2. **Create `.env.local` file**:
   ```bash
   nano .env.local
   ```
   
   Add:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   CONTACT_EMAIL=service@fixerappliancerepair.ca
   NODE_ENV=production
   ```

3. **Build the application**:
   ```bash
   npm run build
   ```

4. **Start with PM2**:
   ```bash
   pm2 start npm --name "appliance-repair" -- start
   pm2 save
   pm2 startup
   ```

### Step 5: Configure Nginx Reverse Proxy

1. **Create Nginx configuration**:
   ```bash
   sudo nano /etc/nginx/sites-available/appliance-repair
   ```

2. **Add this configuration**:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```

3. **Enable the site**:
   ```bash
   sudo ln -s /etc/nginx/sites-available/appliance-repair /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

### Step 6: Set Up SSL Certificate (HTTPS)

1. **Install Certbot**:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   ```

2. **Get SSL certificate**:
   ```bash
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

3. **Auto-renewal** (already set up by certbot):
   ```bash
   sudo certbot renew --dry-run
   ```

### Step 7: Configure Firewall

```bash
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
sudo ufw enable
```

---

## Option 2: Cloud Hosting (If Node.js is Supported)

If your Hostinger Cloud plan supports Node.js:

1. **Upload files via File Manager or FTP** to `public_html` or designated folder
2. **Set environment variables** in Hostinger control panel
3. **Run build commands** via SSH or terminal in control panel
4. **Configure Node.js app** in Hostinger control panel to run `npm start`

---

## Option 3: Static Export (NOT Recommended - API Routes Won't Work)

⚠️ **Warning**: This will disable your contact form API route. Only use if you don't need the contact form functionality.

1. **Update `next.config.mjs`**:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };

   export default nextConfig;
   ```

2. **Build static files**:
   ```bash
   npm run build
   ```

3. **Upload `out` folder** contents to `public_html` via FTP

---

## Post-Deployment Checklist

- [ ] Environment variables are set correctly
- [ ] Domain DNS points to your server
- [ ] SSL certificate is installed and working
- [ ] PM2 is running and auto-starts on reboot
- [ ] Nginx is configured correctly
- [ ] Contact form is working (test it!)
- [ ] All pages load correctly
- [ ] Images and assets load properly

---

## Useful Commands

### PM2 Management
```bash
pm2 list                    # List all processes
pm2 logs appliance-repair    # View logs
pm2 restart appliance-repair # Restart app
pm2 stop appliance-repair   # Stop app
pm2 delete appliance-repair # Remove app
```

### Nginx Management
```bash
sudo systemctl status nginx  # Check status
sudo systemctl restart nginx # Restart
sudo nginx -t                # Test configuration
```

### Update Your App
```bash
cd /var/www/appliance-repair
git pull                    # If using Git
npm install                 # Install new dependencies
npm run build              # Rebuild
pm2 restart appliance-repair # Restart
```

---

## Troubleshooting

### App won't start
- Check PM2 logs: `pm2 logs appliance-repair`
- Verify Node.js version: `node --version` (needs 18+)
- Check environment variables are set

### 502 Bad Gateway
- Check if app is running: `pm2 list`
- Check Nginx error logs: `sudo tail -f /var/log/nginx/error.log`
- Verify proxy_pass URL matches your app port (default: 3000)

### Contact form not working
- Verify `RESEND_API_KEY` is set in `.env.local`
- Check API route logs in PM2
- Test API endpoint directly: `curl -X POST http://localhost:3000/api/contact`

### Port already in use
- Change port in `package.json` scripts or use environment variable `PORT=3001`
- Update Nginx proxy_pass accordingly

---

## Alternative: Use Vercel (Easier Option)

If Hostinger setup is too complex, consider deploying to **Vercel** (free tier available):

1. Push code to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

Vercel is specifically designed for Next.js and handles everything automatically.

---

## Need Help?

- **Hostinger Support**: Check their documentation or contact support
- **PM2 Docs**: https://pm2.keymetrics.io/
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Nginx Docs**: https://nginx.org/en/docs/

