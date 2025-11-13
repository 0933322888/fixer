# Image Folder Guide

This folder contains all images for your appliance repair website.

## 📁 Folder Structure

```
public/
├── logo.png                    ← Your company logo (200x80px, PNG)
├── hero-appliance-repair.jpg   ← Homepage hero background (1920x1080px)
├── appliances/                 ← Images of appliances
│   ├── fridge.jpg              (800x600px)
│   ├── dishwasher.jpg          (800x600px)
│   ├── washer.jpg              (800x600px)
│   ├── dryer.jpg               (800x600px)
│   ├── stove.jpg               (800x600px)
│   └── oven.jpg                (800x600px)
├── brands-img/                 ← Brand logos
│   ├── samsung.png             (300x150px, PNG with transparency)
│   ├── lg.png
│   ├── whirlpool.png
│   ├── ge.png
│   ├── maytag.png
│   ├── bosch/
│   │   ├── washer.webp
│   │   ├── dryer.webp
│   │   ├── dishwasher.webp
│   │   ├── cooktop.webp
│   │   └── mw.webp
│   └── ... (add more as needed)
├── gallery/                    ← Before/after photos, work examples
│   ├── repair-1.jpg            (1000x1000px square)
│   ├── repair-2.jpg
│   ├── repair-3.jpg
│   └── ... (add more as needed)
└── testimonials/               ← Customer photos
    ├── customer-1.jpg          (200x200px square)
    ├── customer-2.jpg
    └── customer-3.jpg
```

## 🎯 Priority Images to Add

### 1. **MUST HAVE** (Add First)
- [ ] `logo.png` - Your company logo
- [ ] `appliances/fridge.jpg` - Refrigerator image
- [ ] `appliances/dishwasher.jpg` - Dishwasher image
- [ ] `appliances/washer.jpg` - Washing machine image
- [ ] `appliances/dryer.jpg` - Dryer image
- [ ] `appliances/stove.jpg` - Stove/cooktop image
- [ ] `appliances/oven.jpg` - Oven image

### 2. **SHOULD HAVE** (Add Next)
- [ ] `hero-appliance-repair.jpg` - Background for homepage hero
- [ ] Brand logos in `brands-img/` folder (at least 6-8 major brands)

### 3. **NICE TO HAVE** (Add When Possible)
- [ ] Gallery images in `gallery/` (your actual repair work)
- [ ] Customer photos in `testimonials/` (with permission)

## 📏 Image Specifications

### Logo (`logo.png`)
- **Size:** 200x80px to 300x120px
- **Format:** PNG with transparent background
- **File Size:** Under 50KB
- **Use:** Header, footer, browser tab icon

### Hero Background (`hero-appliance-repair.jpg`)
- **Size:** 1920x1080px (Full HD)
- **Format:** JPG
- **File Size:** 200-500KB (compressed)
- **Use:** Homepage hero section background

### Appliance Images (`appliances/`)
- **Size:** 800x600px or 1200x900px
- **Format:** JPG
- **File Size:** 100-300KB each
- **Use:** Service cards on homepage

### Brand Logos (`brands-img/`)
- **Size:** 300x150px (landscape)
- **Format:** PNG with transparent background
- **File Size:** Under 30KB each
- **Use:** Brands we service section

### Gallery Images (`gallery/`)
- **Size:** 1000x1000px (square) or 1200x800px (landscape)
- **Format:** JPG
- **File Size:** 150-300KB each
- **Use:** Portfolio/work examples gallery

### Customer Photos (`testimonials/`)
- **Size:** 200x200px (square)
- **Format:** JPG
- **File Size:** Under 50KB each
- **Use:** Testimonial sections

## 🔍 Where to Find Images

### Free Stock Photo Sites:
1. **[Unsplash](https://unsplash.com/)** - Search: "appliances", "refrigerator", "repair"
2. **[Pexels](https://pexels.com/)** - Search: "home appliances", "technician"
3. **[Pixabay](https://pixabay.com/)** - Free images
4. **[Freepik](https://freepik.com/)** - Vectors and photos (check license)

### Brand Logos:
- Download official logos from brand websites
- Use [Brandfetch](https://brandfetch.com/) to find brand assets
- Ensure you have rights to use logos

### Your Own Photos:
- Take photos of your actual work
- Photos of your team/technicians
- Before/after repair shots
- **Best for authenticity!**

## 🛠️ Image Optimization Tools

Before uploading, optimize your images:

1. **[TinyPNG](https://tinypng.com/)** - Compress PNG and JPG files
2. **[Squoosh](https://squoosh.app/)** - Google's image optimizer
3. **[ImageOptim](https://imageoptim.com/)** - Mac app for optimization
4. **[GIMP](https://www.gimp.org/)** - Free Photoshop alternative for resizing

## ✅ Quick Checklist

Before adding an image:
- [ ] Image is properly sized (see specs above)
- [ ] Image is compressed/optimized
- [ ] Filename is descriptive (e.g., `fridge-repair.jpg` not `IMG_1234.jpg`)
- [ ] Image is in the correct folder
- [ ] You have rights to use the image

## 🚀 After Adding Images

1. Update component code to use your images (see `IMAGE_GUIDE.md`)
2. Test that images display correctly
3. Check mobile responsiveness
4. Verify alt text is descriptive

## 📝 Example Filenames

Good filenames:
- `logo.png`
- `samsung-fridge-repair.jpg`
- `lg-washing-machine-service.jpg`
- `repair-before-after-1.jpg`

Bad filenames:
- `IMG_1234.jpg`
- `Untitled.png`
- `asdfasdf.jpg`
- `image1.jpg`

## ⚠️ Important Notes

1. **Copyright:** Only use images you own or have rights to use
2. **Size Matters:** Large images slow down your website
3. **Alt Text:** Always add descriptive alt text in code
4. **Mobile:** Test how images look on mobile devices
5. **Consistency:** Keep similar image sizes across the site

---

Need help? Check `IMAGE_GUIDE.md` and `EXAMPLE_WITH_IMAGES.md` in the project root!

