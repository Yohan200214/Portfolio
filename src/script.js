// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: elementPosition - navbarHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });

    // Initialize animations
    initAnimations();
    
    // Initialize charts
    initCharts();
    
    // Initialize skill bars
    initSkillBars();
});

// Animation observer
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add animation classes to elements and observe them
    document.querySelectorAll('.about-content, .skills-grid, .projects-grid, .contact-content').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    document.querySelectorAll('.stat').forEach((el, index) => {
        el.classList.add('scale-in');
        el.style.animationDelay = `${index * 0.2}s`;
        observer.observe(el);
    });

    document.querySelectorAll('.project-card').forEach((el, index) => {
        el.classList.add('slide-in-left');
        el.style.animationDelay = `${index * 0.2}s`;
        observer.observe(el);
    });
}

// Initialize skill bars animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width + '%';
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Initialize charts
function initCharts() {
    // Sales Analytics Chart
    const salesCtx = document.getElementById('salesChart');
    if (salesCtx) {
        new Chart(salesCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Sales',
                    data: [65, 78, 90, 85, 95, 110],
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        display: false
                    },
                    y: {
                        display: false
                    }
                },
                elements: {
                    point: {
                        radius: 0
                    }
                }
            }
        });
    }

    // Stock Price Chart
    const stockCtx = document.getElementById('stockChart');
    if (stockCtx) {
        new Chart(stockCtx, {
            type: 'line',
            data: {
                labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
                datasets: [{
                    label: 'Predicted',
                    data: [100, 105, 103, 108, 112, 110, 115],
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }, {
                    label: 'Actual',
                    data: [100, 104, 102, 107, 111, 109, 114],
                    borderColor: '#764ba2',
                    backgroundColor: 'rgba(118, 75, 162, 0.1)',
                    borderWidth: 3,
                    fill: false,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        display: false
                    },
                    y: {
                        display: false
                    }
                },
                elements: {
                    point: {
                        radius: 0
                    }
                }
            }
        });
    }

    // Customer Segmentation Chart (D3.js)
    const segmentationDiv = document.getElementById('segmentationChart');
    if (segmentationDiv) {
        const width = 280;
        const height = 180;
        
        const svg = d3.select(segmentationDiv)
            .append('svg')
            .attr('width', width)
            .attr('height', height);

        // Create sample data for customer segments
        const data = [
            { x: 20, y: 30, r: 8, color: '#667eea' },
            { x: 80, y: 40, r: 12, color: '#764ba2' },
            { x: 150, y: 60, r: 10, color: '#f093fb' },
            { x: 220, y: 80, r: 15, color: '#f5576c' },
            { x: 60, y: 120, r: 9, color: '#4facfe' },
            { x: 140, y: 140, r: 11, color: '#00f2fe' },
            { x: 200, y: 100, r: 7, color: '#43e97b' }
        ];

        svg.selectAll('circle')
            .data(data)
            .enter()
            .append('circle')
            .attr('cx', d => d.x)
            .attr('cy', d => d.y)
            .attr('r', d => d.r)
            .attr('fill', d => d.color)
            .attr('opacity', 0.8)
            .on('mouseover', function() {
                d3.select(this)
                    .attr('opacity', 1)
                    .attr('r', d => d.r + 2);
            })
            .on('mouseout', function() {
                d3.select(this)
                    .attr('opacity', 0.8)
                    .attr('r', d => d.r);
            });
    }

    // Sentiment Analysis Chart (D3.js)
    const sentimentDiv = document.getElementById('sentimentChart');
    if (sentimentDiv) {
        const width = 280;
        const height = 180;
        
        const svg = d3.select(sentimentDiv)
            .append('svg')
            .attr('width', width)
            .attr('height', height);

        // Create sample sentiment data
        const sentimentData = [
            { sentiment: 'Positive', value: 45, color: '#43e97b' },
            { sentiment: 'Neutral', value: 35, color: '#4facfe' },
            { sentiment: 'Negative', value: 20, color: '#f5576c' }
        ];

        const radius = Math.min(width, height) / 2 - 20;
        const arc = d3.arc()
            .innerRadius(0)
            .outerRadius(radius);

        const pie = d3.pie()
            .value(d => d.value);

        const g = svg.append('g')
            .attr('transform', `translate(${width/2}, ${height/2})`);

        g.selectAll('path')
            .data(pie(sentimentData))
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', d => d.data.color)
            .attr('stroke', '#1a1a2e')
            .style('stroke-width', '2px')
            .on('mouseover', function() {
                d3.select(this)
                    .attr('transform', 'scale(1.05)');
            })
            .on('mouseout', function() {
                d3.select(this)
                    .attr('transform', 'scale(1)');
            });
    }
}

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Get form data for validation
            const name = this.querySelector('input[name="name"]').value;
            const email = this.querySelector('input[name="email"]').value;
            const subject = this.querySelector('input[name="subject"]').value;
            const message = this.querySelector('textarea[name="message"]').value;
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                e.preventDefault();
                alert('Please fill in all fields');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Allow form to submit to Formspree
            // Formspree will handle the submission and redirect
            // We'll reset the form after a delay to simulate success
            setTimeout(() => {
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 3000);
        });
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title .gradient-text');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
});

// Add floating animation to cards
function addFloatingAnimation() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.5}s`;
    });
}

// Initialize floating animation
document.addEventListener('DOMContentLoaded', addFloatingAnimation);

// Smooth reveal animation for sections
function revealOnScroll() {
    const sections = document.querySelectorAll('section');
    
    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    };
    
    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(80px)';
        section.style.transition = 'all 0.8s ease';
        sectionObserver.observe(section);
    });
}

// Initialize reveal animation
document.addEventListener('DOMContentLoaded', revealOnScroll); 