# Mohamed Rifadh - Network Engineer CV Website

A modern, responsive, and production-ready CV/Portfolio website built with vanilla HTML5, CSS3, and JavaScript.

## 🚀 Features

### Design & UI/UX
- **Modern Dark Theme** with teal/cyan gradient accents
- **Fully Responsive** - Mobile-first approach (works on all devices)
- **Smooth Animations** - Intersection Observer API for performance
- **Premium Aesthetics** - Corporate and technology-focused design
- **Accessibility** - WCAG 2.1 AA compliant with proper ARIA labels

### Performance Optimizations
- **Fast Load Times** - Optimized for LCP < 2.5s
- **Lazy Loading** - Images load on demand
- **Debounced/Throttled Events** - Optimized scroll handlers
- **CSS-based Animations** - GPU accelerated transforms
- **Minimal Dependencies** - Only Google Fonts loaded
- **Intersection Observer** - Efficient scroll animations

### Key Sections
1. **Hero Section** - Profile image, name, role, location, CTA buttons
2. **About/Profile** - Professional summary and expertise
3. **Areas of Expertise** - Icon-based skill cards
4. **Accomplishments** - Timeline of key achievements
5. **Professional Experience** - Detailed work history
6. **Education & Certifications** - Academic and professional credentials
7. **Technologies & Tools** - Technical skill tags
8. **Contact Section** - Contact information and form

### Interactive Features
- **Sticky Navigation** with smooth scroll
- **Mobile Menu** with hamburger toggle
- **WhatsApp Floating Button** for instant contact
- **Scroll-to-Top Button** appears after scrolling
- **Contact Form** with validation
- **Hover Effects** on all interactive elements

## 📁 Project Structure

```
/cv/
│
├── index.html                  # Main HTML file
├── css/
│   └── style.css              # All styles (optimized)
├── js/
│   └── script.js              # All JavaScript (modular)
├── assets/
│   ├── images/
│   │   └── image.jpg          # Profile photo
│   └── docs/
│       └── Mohamed_Rifadh_CV.pdf  # Downloadable CV
└── README.md                   # Documentation
```

## 🛠️ Setup Instructions

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML/CSS/JavaScript

### Installation

1. **Clone or Download** the project files

2. **Add Your Assets**:
   - Place your profile photo as `assets/images/image.jpg`
   - Place your CV PDF as `assets/docs/Mohamed_Rifadh_CV.pdf`

3. **Customize Content**:
   - Open `index.html`
   - Update personal information:
     - Name, title, location
     - Contact details (phone, email, LinkedIn)
     - Work experience, education, skills
     - WhatsApp number in the floating button

4. **Customize Design** (Optional):
   - Open `css/style.css`
   - Modify CSS variables at the top:
     ```css
     :root {
         --primary-color: #14b8a6;
         --secondary-color: #0ea5e9;
         /* ... other variables */
     }
     ```

5. **Test Locally**:
   - Open `index.html` in your browser
   - Test all links and interactions
   - Verify responsive design on different screen sizes

## 🌐 Deployment

### Option 1: GitHub Pages (Free)
```bash
# Push to GitHub repository
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/cv.git
git push -u origin main

# Enable GitHub Pages in repository settings
# Site will be available at: https://yourusername.github.io/cv/
```

### Option 2: Netlify (Free)
1. Create account at [netlify.com](https://www.netlify.com)
2. Drag and drop the `/cv` folder
3. Site deployed instantly with custom domain option

### Option 3: Vercel (Free)
1. Create account at [vercel.com](https://vercel.com)
2. Import repository or upload files
3. Automatic deployment with SSL

### Option 4: Traditional Web Hosting
1. Upload all files via FTP/SFTP
2. Maintain folder structure
3. Point domain to the directory

## 🎨 Customization Guide

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #14b8a6;      /* Main brand color */
    --secondary-color: #0ea5e9;    /* Secondary accent */
    --bg-primary: #0f172a;         /* Background */
    --text-primary: #f1f5f9;       /* Main text color */
}
```

### Typography
Change fonts in the `<head>` of `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap" rel="stylesheet">
```

### Content
All content is in `index.html`. Search for section classes:
- `.hero` - Hero section
- `.about` - About section
- `.expertise` - Skills section
- `.experience` - Work experience
- `.contact` - Contact information

### Images
- **Profile Photo**: Replace `assets/images/image.jpg`
  - Recommended: 400x400px or larger
  - Format: JPG or PNG
  - Optimize for web (< 200KB)

- **Favicon**: Update in `<head>`:
  ```html
  <link rel="icon" type="image/png" href="favicon.png">
  ```

## 📱 Contact Integration

### WhatsApp Button
Update the WhatsApp number in `index.html`:
```html
<a href="https://wa.me/447475634357" class="whatsapp-btn">
```
Format: Country code + number (no spaces or special characters)

### Contact Form
The form currently shows a success message. To connect to a backend:

1. **Email Services** (FormSpree, EmailJS):
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Custom Backend**:
   ```javascript
   // In js/script.js, modify handleSubmit method
   async handleSubmit(e) {
       e.preventDefault();
       const response = await fetch('/api/contact', {
           method: 'POST',
           body: JSON.stringify(data)
       });
   }
   ```

## 🔍 SEO Optimization

The website includes:
- Meta descriptions
- Open Graph tags
- Semantic HTML5
- Alt text for images
- Proper heading hierarchy

To improve further:
1. Add `sitemap.xml`
2. Add `robots.txt`
3. Submit to Google Search Console
4. Optimize images (WebP format)
5. Add structured data (JSON-LD)

## ⚡ Performance Tips

### Already Implemented
- CSS variables for easy theming
- Debounced scroll events
- Throttled event handlers
- Intersection Observer for animations
- Minimal external dependencies
- CSS-based animations (GPU accelerated)

### Additional Optimizations
1. **Minify Files** (for production):
   ```bash
   # Use online tools or build tools
   - CSS: cssnano, clean-css
   - JS: uglify-js, terser
   ```

2. **Image Optimization**:
   ```bash
   # Compress images
   - Use TinyPNG or ImageOptim
   - Convert to WebP format
   ```

3. **CDN** (Content Delivery Network):
   - Use Cloudflare for faster global delivery

## 🐛 Troubleshooting

### Images Not Loading
- Verify file paths are correct
- Check file names match exactly (case-sensitive)
- Ensure images are in `assets/images/` folder

### Navigation Not Working
- Check that all section IDs match navigation links
- Verify JavaScript is loading (check browser console)

### Mobile Menu Not Opening
- Check if JavaScript is enabled
- Clear browser cache
- Test in different browsers

### Form Not Submitting
- Check browser console for errors
- Verify form ID matches JavaScript
- Implement actual backend if needed

## 📊 Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome  | 90+ |
| Firefox | 88+ |
| Safari  | 14+ |
| Edge    | 90+ |
| Opera   | 76+ |

## 📄 License

This project is open source and available for personal and commercial use.

## 👤 Author

**Mohamed Rifadh**
- Network Engineer
- Location: Hertfordshire, UK
- Email: rifadh112@gmail.com
- LinkedIn: [mohamed-rifadh](https://www.linkedin.com/in/mohamed-rifadh)

## 🤝 Support

For issues or questions:
1. Check the troubleshooting section
2. Review the code comments
3. Contact via the website form

---

**Built with ❤️ by CRAKS Media Agency**
