# Pranav Dhruv Tandon - Personal Website

This is a sleek, modern, and mobile-responsive personal website for Pranav Dhruv Tandon. The website showcases Pranav's skills, experience, and professional background as an AI consultant, bioinformatics enthusiast, and strategic investor.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Modern UI with subtle animations and interactive elements
- Multiple sections highlighting Pranav's expertise and experience:
  - Hero section with a professional introduction
  - About section with detailed biography
  - Stealth Mode explanation
  - Technical Skills & Expertise
  - Professional Experience & Achievements
  - Character Traits & Approach
  - Testimonials
  - Contact Form
- Clean, professional color scheme with subtle accents

## Project Structure

```
/app/
├── index.html        # Main HTML file with all content
├── frontend/         # React frontend (alternative implementation)
└── README.md         # Project documentation
```

## How to Run

### Option 1: Simple HTML Version (Current Setup)

The website is currently deployed as a single HTML file with embedded CSS and JavaScript. To run it:

```bash
cd /app
python3 -m http.server 8000
```

Then visit http://localhost:8000 in your browser.

### Option 2: React Version (Future Enhancement)

For a more interactive experience with React:

1. Install dependencies:
   ```bash
   cd /app/frontend
   yarn install
   ```

2. Start the development server:
   ```bash
   yarn start
   ```

3. Or use supervisor:
   ```bash
   sudo supervisorctl restart frontend
   ```

## Customization

### Color Scheme

The website uses a custom color scheme with variables defined in the CSS:

- Primary: #0066cc
- Secondary: #4d94ff
- Accent: #00264d
- Light: #f5f8fc
- Dark: #1a1a1a

You can modify these colors in the `:root` section of the CSS to change the entire color scheme.

### Content

To update content:

1. Edit the corresponding sections in the HTML file
2. For images, replace the URLs with new image links
3. For testimonials, modify the text and initials/names in the testimonials section

### Adding New Sections

To add a new section:

1. Create a new `<section>` element with appropriate classes
2. Add it to the navigation menu
3. Update the JavaScript scroll functionality if needed

## Credits

- Images: Unsplash
- Icons: Heroicons
- CSS Framework: Tailwind CSS

## License

All rights reserved. This site is proprietary to Pranav Dhruv Tandon.