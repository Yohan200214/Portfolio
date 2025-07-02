# Yohan Peter - Data Scientist Portfolio

A modern, responsive portfolio website showcasing data science projects, skills, and professional experience with beautiful animations and interactive visualizations.

## 🌟 Features

- **Modern Design**: Clean, professional design with dark theme
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Animations**: Smooth scroll animations and hover effects
- **Data Visualizations**: Multiple interactive charts using Chart.js and D3.js
- **Project Showcase**: Dedicated section for data science projects
- **Skills Visualization**: Animated skill bars with progress indicators
- **Contact Form**: Functional contact form with validation
- **Smooth Navigation**: Fixed navigation with smooth scrolling

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation & Running

1. **Clone or Download** the project files to your local machine

2. **Open the Website**:
   - Simply open `index.html` in your web browser
   - Or use a local server for better performance:
     ```bash
     # Using Python (if installed)
     python -m http.server 8000
     
     # Using Node.js (if installed)
     npx serve .
     
     # Using PHP (if installed)
     php -S localhost:8000
     ```

3. **Access the Website**:
   - If using a local server: Navigate to `http://localhost:8000`
   - If opening directly: The file will open in your default browser

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── src/
│   ├── styles.css          # All CSS styles and animations
│   └── script.js           # JavaScript functionality and charts
└── README.md               # This file
```

## 🎨 Customization

### Personal Information
Edit the following sections in `index.html`:

1. **Hero Section** (Lines 50-60):
   ```html
   <h1 class="hero-title">
       <span class="gradient-text">Yohan Peter</span>
   </h1>
   <h2 class="hero-subtitle">Data Scientist & ML Engineer</h2>
   ```

2. **About Section** (Lines 120-140):
   ```html
   <p>Your personal description here...</p>
   ```

3. **Contact Information** (Lines 350-370):
   ```html
   <div class="contact-item">
       <i class="fas fa-envelope"></i>
       <span>your.email@example.com</span>
   </div>
   ```

### Skills
Modify the skills section in `index.html` (Lines 180-250):
- Add/remove skill categories
- Adjust skill levels by changing the `data-width` attribute
- Update skill names and percentages

### Projects
Customize projects in `index.html` (Lines 280-400):
- Replace project titles, descriptions, and technologies
- Update GitHub and demo links
- Modify chart data in `script.js` for different visualizations

### Colors and Styling
Edit `src/styles.css` to customize:
- **Primary Colors**: Lines 15-20 (gradient colors)
- **Background Colors**: Lines 10-15
- **Font Sizes**: Various font-size properties throughout
- **Animations**: Animation timing and effects

## 📊 Data Visualizations

The portfolio includes several interactive charts:

1. **Sales Analytics Dashboard**: Line chart showing sales trends
2. **Customer Segmentation**: Scatter plot with interactive circles
3. **Stock Price Prediction**: Dual-line chart comparing predicted vs actual
4. **Sentiment Analysis**: Interactive pie chart

### Customizing Charts
Edit `src/script.js` to modify chart data:

```javascript
// Example: Modify sales data
data: [65, 78, 90, 85, 95, 110] // Replace with your data
```

## 🎯 Sections Overview

1. **Hero Section**: Eye-catching introduction with floating animations
2. **About Section**: Personal story and statistics
3. **Skills Section**: Animated skill bars with categories
4. **Projects Section**: Interactive project cards with visualizations
5. **Contact Section**: Contact form and social links

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first design approach
- Hamburger menu for mobile devices
- Flexible grid layouts
- Optimized typography for all screen sizes

## 🔧 Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop the project folder to Netlify
2. Your site will be deployed instantly
3. Custom domain can be added in settings

### Vercel
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push
3. Get a custom domain and SSL certificate

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Support

If you need help customizing this portfolio or have questions, feel free to reach out!

---

**Built with ❤️ for the Data Science Community** "# Portfolio" 
