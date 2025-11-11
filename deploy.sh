#!/bin/bash

# Hostinger Deployment Helper Script
# Run this script on your VPS after uploading your project

echo "🚀 Starting Hostinger Deployment Setup..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Installing Node.js 18..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

echo "✅ Node.js version: $(node --version)"

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "📦 Installing PM2..."
    sudo npm install -g pm2
fi

echo "✅ PM2 installed"

# Install project dependencies
echo "📦 Installing project dependencies..."
npm install --production

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "⚠️  .env.local not found. Creating template..."
    cat > .env.local << EOF
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=service@fixerappliancerepair.ca
NODE_ENV=production
EOF
    echo "📝 Please edit .env.local and add your actual values!"
    echo "   Then run: npm run build && pm2 start npm --name 'appliance-repair' -- start"
    exit 1
fi

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi

echo "✅ Build successful!"

# Start with PM2
echo "🚀 Starting application with PM2..."
pm2 start npm --name "appliance-repair" -- start
pm2 save
pm2 startup

echo "✅ Application started!"
echo ""
echo "📋 Next steps:"
echo "1. Configure Nginx reverse proxy (see HOSTINGER_DEPLOYMENT.md)"
echo "2. Set up SSL certificate with Certbot"
echo "3. Test your website: http://localhost:3000"
echo ""
echo "Useful commands:"
echo "  pm2 logs appliance-repair    # View logs"
echo "  pm2 restart appliance-repair  # Restart app"
echo "  pm2 list                     # List all processes"

