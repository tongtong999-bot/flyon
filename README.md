# Galiview Website

A modern, tech-forward drone brand website for Galiview Inc. showcasing the Galiview Pro drone product line.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Tech-Futuristic Theme**: Dark theme with neon cyan/blue accents, glassmorphism effects, and smooth animations
- **Multiple Pages**: Homepage, Product Details, About Us, Privacy Policy, Terms of Service, Cookie Policy
- **Interactive Elements**: Smooth scroll, reveal animations, mobile menu toggle, and form validation
- **Professional Aesthetic**: Modern design inspired by premium tech brands

## Project Structure

```
galiview-website/
├── index.html              # Homepage with hero, features, and contact sections
├── product.html            # Product specifications and features
├── about.html              # Company information and values
├── privacy-policy.html     # Privacy policy documentation
├── terms-of-service.html   # Terms and conditions
├── cookie-policy.html      # Cookie usage policy
├── styles.css              # Complete stylesheet with design system
├── main.js                 # Interactive JavaScript functionality
├── images/                 # Image assets directory (empty - add your images here)
└── README.md              # This file
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended)

### Running Locally

#### Option 1: Simple File Access
1. Navigate to the `galiview-website` directory
2. Open `index.html` in your web browser
3. Navigate between pages using the navigation menu

#### Option 2: Using a Local Server (Recommended)
For best performance and testing, use a local web server:

**Using Python 3:**
```bash
cd galiview-website
python -m http.server 8000
```
Then open http://localhost:8000 in your browser.

**Using Node.js (http-server):**
```bash
cd galiview-website
npx http-server
```

**Using VS Code Live Server extension:**
1. Install the Live Server extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Customization

### Branding
- Update the brand name in header logo (currently "GALIVIEW")
- Modify taglines and company information in each page
- Replace placeholder images with actual product and company images

### Colors
The color scheme is defined in CSS variables at the top of `styles.css`:

```css
:root {
  --accent-cyan:  #00d4ff;
  --accent-blue:  #0066ff;
  --accent-purple:#7b2fff;
  --accent-green: #00ff9d;
  /* ... more variables */
}
```

### Content
- Update product specifications in `product.html`
- Modify company information in `about.html`
- Update contact details in the contact section and footer
- Review and update legal policies for your specific needs

### Images
Add your images to the `images/` directory and update image references in the HTML files:
- Product images
- Company/team photos
- Brand logo
- Background elements

## Features Included

### Homepage (`index.html`)
- Hero section with animated background
- Key statistics display
- Company overview
- Product preview
- Feature highlights
- Services and support information
- Contact form

### Product Page (`product.html`)
- Detailed product specifications
- Technical breakdown of camera, gimbal, flight performance, etc.
- Intelligent features showcase
- Package contents and included items

### About Page (`about.html`)
- Company vision and mission
- Company story and values
- Company snapshot/details
- Commitment to excellence

### Legal Pages
- Comprehensive Privacy Policy
- Detailed Terms of Service
- Cookie Policy with consent information

### Interactive Features
- Scroll-based reveal animations
- Mobile responsive navigation
- Smooth scrolling to sections
- Form validation
- Header scroll effects

## Browser Compatibility

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Performance

- Optimized CSS with modern features
- Minimal JavaScript for essential interactivity
- No external dependencies for core functionality
- Google Fonts loaded asynchronously
- Smooth animations using CSS transforms

## Deployment

This is a static website and can be deployed to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Cloudflare Pages
- Any traditional web hosting service

Simply upload all files in the `galiview-website` directory to your hosting provider.

## Security Notes

- The contact form is a frontend demonstration and requires backend implementation for actual email functionality
- Consider implementing proper form validation and spam protection for production use
- Review legal policies with legal counsel before deployment
- Ensure all external links and resources are from trusted sources

## Support

For questions or issues with this website template, contact:
- Email: webmaster@galiview.com
- Website: www.galiview.com

## License

© 2026 Galiview Inc. All rights reserved.

---

**Note**: This website is designed as a showcase template. Product specifications, features, and company information should be updated with accurate data before production use.
