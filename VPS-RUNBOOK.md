# VPS runbook — Fixer site (Next.js)

Use this when SSH’d into the VPS as a user with `sudo` (paths assume the app lives at `/var/www/fixer`; change if yours differs).

## One-time setup (already done if the site works)

- Node.js 20+ installed  
- App deployed under `/var/www/fixer`  
- `.env.production` or `.env.local` in that folder with `SMTP_*` (and any other secrets) — **never commit these**  
- Nginx reverse-proxy to `http://127.0.0.1:3000`  
- Let’s Encrypt certificates for your domain  
- `pm2 startup` configured so PM2 revives after reboot  

---

## Start or restart the app (most common)

```bash
cd /var/www/fixer
pm2 status
```

If **`fixer-web` is missing or “errored”**:

```bash
cd /var/www/fixer
npm ci
npm run build
pm2 start npm --name fixer-web -- start
pm2 save
```

If it already exists but you need a clean restart:

```bash
cd /var/www/fixer
pm2 restart fixer-web
```

---

## After you pull new code from Git

```bash
cd /var/www/fixer
git pull
npm ci
npm run build
pm2 restart fixer-web
```

### Static images (`public/`)

Images are served from **`public/`** (e.g. `public/images/Microwave.png` → `/images/Microwave.png`). That folder **must be in Git** and present on the VPS after `git pull`. If images 404 on production but work locally, run **`git status`** on your machine: ensure `public/images/` is committed and pushed, then pull on the server again.

---

## After a VPS reboot

PM2 should auto-start if `pm2 startup` was run once. Check:

```bash
pm2 status
```

If nothing is running:

```bash
cd /var/www/fixer
pm2 start npm --name fixer-web -- start
pm2 save
```

(Re-run **`pm2 startup`** and the command it prints if PM2 does not come back after reboot.)

---

## Nginx (only if the site is “down” but PM2 is online)

```bash
sudo nginx -t
sudo systemctl status nginx
sudo systemctl reload nginx   # after config changes
```

---

## Quick health checks

From the VPS:

```bash
curl -sI http://127.0.0.1:3000/
curl -sI http://127.0.0.1:3000/api/contact
```

`/api/contact` with GET often returns **405** — that still means the API route is alive.

Recent logs:

```bash
pm2 logs fixer-web --lines 50
```

---

## Firewall reminder

If pages time out from the browser but `curl` to `127.0.0.1:3000` works, open **80** and **443** (e.g. `ufw allow 'Nginx Full'`) and check Hostinger’s VPS firewall in hPanel if applicable.

---

## DNS reminder

**A** records for `@` and `www` must point to **this VPS’s public IP**. If they point at Hostinger CDN (`*.cdn.hstgr.net`), the contact form will hit the wrong host and `/api/contact` will not work.
