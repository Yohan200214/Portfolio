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

1. **SBI Stock Market Prediction (2026) – Real-Time Data Analysis**: Scraped and processed real-time stock data from Yahoo Finance to train regression models forecasting SBI stock trends for 2026. Implemented alert system offering buy/sell signals based on model insights; reduced manual monitoring efforts by 40%.
2. **NCAA Basketball Tournament Outcome Prediction (2025)**: Predicted game outcomes using historical team performance and rankings, generating probabilities for 2,000 matchups over four seasons. Engineered advanced sports metrics and applied logistic regression and XGBoost, achieving competitive accuracy on tournament bracket forecasts.
3. **Backpack Price Prediction**: Trained regression models to predict backpack prices using features like volume, material, and brand, achieving R² score of 0.87. Performed EDA and feature engineering on structured dataset, improving model performance by 15% over the baseline.

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

## 🏆 Featured Projects

### SBI Stock Market Prediction (2026) – Real-Time Data Analysis
[Kaggle Link: View Project](https://www.kaggle.com/code/yohanpeter/sbi-market-prediction)
- Python, BeautifulSoup, Pandas, Scikit-learn, YFINANCE, LXML
- Scraped and processed real-time stock data from Yahoo Finance to train regression models forecasting SBI stock trends for 2026.
- Implemented alert system offering buy/sell signals based on model insights; reduced manual monitoring efforts by 40%.

### NCAA Basketball Tournament Outcome Prediction (2025)
[Kaggle Link: View Project](https://www.kaggle.com/code/yohanpeter/march-mania-2025-notebook)
- Predicted game outcomes using historical team performance and rankings, generating probabilities for 2,000 matchups over four seasons.
- Engineered advanced sports metrics and applied logistic regression and XGBoost, achieving competitive accuracy on tournament bracket forecasts.

### Backpack Price Prediction
[Kaggle Link: View Project](https://www.kaggle.com/code/yohanpeter/notebookb8558c9827)
- Trained regression models to predict backpack prices using features like volume, material, and brand, achieving R² score of 0.87.
- Performed EDA and feature engineering on structured dataset, improving model performance by 15% over the baseline.

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

