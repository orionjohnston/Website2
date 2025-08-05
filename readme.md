# Gabriel Johnston - Personal Website
 https://orionjohnston.github.io/Mywebsitetest/

This repository contains the code for Gabriel Johnston's personal website, showcasing both his academic research in geophysics and his musical career as an organist specializing in improvisation.

## Features

- Responsive design for all device sizes
- Interactive elements including sliders, tabs, and animations
- Separate sections for academic and musical pursuits
- Contact form for inquiries
- YouTube integration for music performances

## Website Structure

- `index.html` - Homepage with overview of both academic and music aspects
- `academic.html` - Detailed academic portfolio, research, publications
- `music.html` - Music portfolio, performances, recordings, and instruments
- `css/style.css` - All styling for the website
- `js/script.js` - Interactive JavaScript elements
- `images/` - Contains all website images

## Setting Up GitHub Pages

1. **Push your repository to GitHub**
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourrepository.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to the "GitHub Pages" section
   - Under "Source", select "main" branch
   - Click "Save"

3. **Access your website**
   - Your website will be available at `https://yourusername.github.io/yourrepository/`
   - It may take a few minutes for your site to be published

## Customization

### Images
- Replace the placeholder images in the `images/` directory with your own
- Make sure to maintain the same file names or update the references in the HTML files

### Content
- Update the text in the HTML files to reflect your own information
- Modify the publications, projects, performances, and recordings sections as needed

### Contact Form
- The contact form is set up to work with Formspree
- Replace the Formspree URL in the form action with your own

## Local Development

To run this website locally:

1. Clone the repository
   ```
   git clone https://github.com/yourusername/yourrepository.git
   ```

2. Open the project folder in your preferred code editor

3. Launch the site using a local server
   - If you have Python installed:
     ```
     python -m http.server
     ```
   - If you have Node.js installed:
     ```
     npx serve
     ```

4. View the site in your browser at `http://localhost:8000` or the port provided by your server

## License

This project is licensed under the MIT License - see the LICENSE file for details.
