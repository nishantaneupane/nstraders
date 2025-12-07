# Assets Folder

This folder contains all media files for the WalkPro website.

## Structure

```
assets/
├── images/          # Product images, thumbnails, and photos
└── videos/          # Product videos and demonstrations
```

## Usage Instructions

### Images Folder

Place your product images here:

- **Product photos** - Main treadmill images (front, side, top views)
- **Lifestyle images** - Images showing the product in use
- **Thumbnails** - Smaller versions for gallery
- **Customer photos** - For testimonials/reviews

**Recommended formats:** JPG, PNG, WebP  
**Recommended sizes:**

- Hero images: 1920x1080px
- Product images: 800x800px
- Thumbnails: 150x150px

### Videos Folder

Place your product videos here:

- **Product demonstrations** - How to use the treadmill
- **Assembly videos** - Setup instructions
- **Feature highlights** - Showcasing specific features
- **Customer testimonials** - Video reviews

**Recommended formats:** MP4, WebM  
**Recommended resolution:** 1920x1080 (Full HD)

## How to Use Your Images in the Website

Once you add images to `assets/images/`, update the image paths in your HTML files:

### Example:

Instead of:

```html
<img
  src="https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=600&fit=crop"
  alt="Walking Pad"
/>
```

Use:

```html
<img src="assets/images/your-image-name.jpg" alt="Walking Pad" />
```

## Image Naming Convention

Use clear, descriptive names:

- `product-main.jpg`
- `product-side-view.jpg`
- `product-folded.jpg`
- `product-in-use.jpg`
- `customer-review-1.jpg`
- `led-display-closeup.jpg`

## Optimization Tips

1. **Compress images** before uploading (use tools like TinyPNG or Squoosh)
2. **Use appropriate dimensions** - Don't upload 4K images if you only need 800px
3. **Consider WebP format** for better compression and quality
4. Keep file sizes under 500KB for faster loading

---

Need help updating image paths? Just ask!
