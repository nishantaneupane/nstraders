# WalkPro - Walking Pad E-Commerce Website

A modern, animated single-page e-commerce website for selling premium walking pads. Features smooth animations, responsive design, and EmailJS integration for order processing.

## Features

- ✨ **Modern Design**: Clean, professional layout with smooth animations
- 📱 **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- 🛒 **Simple Checkout**: Easy-to-use checkout form with validation
- 📧 **Email Integration**: Orders sent via EmailJS (no backend required)
- 🎨 **Animated UI**: Engaging scroll animations and transitions
- 🖼️ **Product Gallery**: Interactive image gallery with thumbnails
- ⭐ **Customer Reviews**: Testimonials section with ratings
- 🚀 **Fast Loading**: Optimized for performance

## Technologies Used

- HTML5
- CSS3 (with modern animations and flexbox/grid)
- Vanilla JavaScript
- EmailJS for email functionality
- Font Awesome icons
- Unsplash images (stock photos)

## Setup Instructions

### 1. EmailJS Configuration

To enable order emails, you need to set up EmailJS:

#### Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

#### Step 2: Create an Email Service

1. In your EmailJS dashboard, click "Add New Service"
2. Choose your email provider (Gmail, Outlook, etc.)
3. Follow the instructions to connect your email
4. Note your **Service ID**

#### Step 3: Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Order from {{customer_name}}

Order Details:
================
Customer Name: {{customer_name}}
Email: {{customer_email}}
Phone: {{customer_phone}}

Shipping Address:
{{shipping_address}}

Product: {{product_name}}
Price: {{product_price}}
Order Date: {{order_date}}

Special Instructions:
{{order_notes}}

================
Please process this order as soon as possible.
```

4. Save the template and note your **Template ID**

#### Step 4: Get Your Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)

#### Step 5: Update the Website Code

Open `script.js` and replace the following placeholders:

```javascript
// Line 2: Replace with your Public Key
emailjs.init("YOUR_PUBLIC_KEY");

// Line 149-151: Replace with your Service ID and Template ID
const response = await emailjs.send(
  "YOUR_SERVICE_ID", // Replace this
  "YOUR_TEMPLATE_ID", // Replace this
  {
    to_email: "your-email@example.com", // Replace with your email
    // ... rest of the code
  }
);
```

### 2. Running the Website

#### Option 1: Open Directly

1. Simply open `index.html` in your web browser
2. The website will load and function locally

#### Option 2: Use Live Server (Recommended)

1. If using VS Code, install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. The website will open in your browser with live reload

#### Option 3: Simple HTTP Server

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (install http-server globally first)
npx http-server

# Then open http://localhost:8000 in your browser
```

## File Structure

```
NS_Fitness/
│
├── index.html          # Main HTML file
├── style.css           # All styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization Guide

### Changing Product Information

**Edit `index.html`:**

- Product name: Line 183
- Price: Line 185 (and multiple other locations)
- Product specs: Lines 197-204
- Images: Replace Unsplash URLs with your own images

### Changing Colors

**Edit `style.css` (lines 8-17):**

```css
:root {
  --primary-color: #4f46e5; /* Main brand color */
  --primary-dark: #4338ca; /* Darker shade */
  --secondary-color: #10b981; /* Accent color */
  --text-dark: #1f2937; /* Dark text */
  --text-light: #6b7280; /* Light text */
  --bg-light: #f9fafb; /* Background */
  --white: #ffffff; /* White */
}
```

### Adding More Products

To add more products, you'll need to:

1. Duplicate the product section in `index.html`
2. Update the form to include product selection
3. Modify the EmailJS template to handle multiple products
4. Update the JavaScript to process different products

## Testing the Order Form

1. Fill out all required fields in the checkout form
2. Click "Place Order"
3. Check your email inbox (the one specified in EmailJS)
4. You should receive an order confirmation email

## Troubleshooting

### Orders Not Being Sent

1. **Check EmailJS Configuration**

   - Verify your Public Key, Service ID, and Template ID are correct
   - Check EmailJS dashboard for any error messages
   - Ensure your email service is properly connected

2. **Check Browser Console**

   - Open Developer Tools (F12)
   - Look for error messages in the Console tab
   - Common issues: CORS errors, network issues, or missing EmailJS credentials

3. **Verify Email Template**
   - Make sure template variables match the code exactly
   - Test the template in EmailJS dashboard

### Styling Issues

1. **Clear Browser Cache**

   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

2. **Check File Paths**
   - Ensure `style.css` and `script.js` are in the same directory as `index.html`

### Images Not Loading

- The website uses Unsplash URLs which require internet connection
- Replace with local images if working offline

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

Potential features to add:

- Payment gateway integration (Stripe, PayPal)
- Product variations (colors, sizes)
- Inventory management
- Order tracking system
- Admin dashboard
- Multiple product catalog
- Shopping cart for multiple items
- Customer accounts
- Wishlist functionality

## Support

For issues or questions:

- Check the EmailJS documentation: https://www.emailjs.com/docs/
- Review browser console for errors
- Verify all EmailJS credentials are correct

## License

This project is free to use and modify for personal or commercial purposes.

## Credits

- Icons: Font Awesome
- Images: Unsplash
- Email Service: EmailJS
- Fonts: System fonts (Inter fallback)

---

Made with ❤️ for WalkPro
