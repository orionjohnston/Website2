document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Sticky Header
    const header = document.getElementById('main-nav');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Highlights Slider
    initSlider('highlights-slider', 'slider-prev', 'slider-next', 'slider-dots');
    
    // Performances Slider
    initSlider('performances-slider', 'performances-prev', 'performances-next', 'performances-dots');
    
    // Publication Abstract Toggle
    const abstractToggles = document.querySelectorAll('.publication-abstract-toggle');
    abstractToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const abstract = this.nextElementSibling;
            abstract.classList.toggle('active');
            
            // Change icon based on state
            const icon = this.querySelector('i');
            if (abstract.classList.contains('active')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });
    
    // Instrument Tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Close mobile menu if open
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        navToggle.classList.remove('active');
                    }
                    
                    // Scroll to target with offset for fixed header
                    const headerHeight = document.getElementById('main-nav').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Animation on Scroll
    const animateElements = document.querySelectorAll('.interest-card, .about-academic, .about-music, .award-item, .project-card, .approach-card, .recording-card');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        animateElements.forEach(el => {
            observer.observe(el);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        animateElements.forEach(el => {
            el.classList.add('animated');
        });
    }
    
    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send data to a server
            // Since this is a static site, we'll just show a confirmation
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Log the form values (remove in production)
            console.log('Form submission:', { name, email, subject, message });
            
            // Show success message
            const formElements = contactForm.querySelectorAll('input, textarea, button');
            formElements.forEach(el => el.disabled = true);
            
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Thank you for your message! I will get back to you soon.';
            
            contactForm.appendChild(successMessage);
            
            // Reset form after delay
            setTimeout(() => {
                formElements.forEach(el => {
                    el.disabled = false;
                    el.value = '';
                });
                successMessage.remove();
            }, 5000);
        });
    }
});

// Helper Functions

// Initialize Slider
function initSlider(sliderId, prevBtnId, nextBtnId, dotsId) {
    const slider = document.getElementById(sliderId);
    
    if (!slider) return;
    
    const slides = slider.querySelectorAll('.highlight-slide, .performance-slide');
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    const dotsContainer = document.getElementById(dotsId);
    
    if (slides.length === 0) return;
    
    let currentIndex = 0;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.dataset.index = index;
        
        dot.addEventListener('click', () => {
            showSlide(index);
        });
        
        dotsContainer.appendChild(dot);
    });
    
    // Initialize first slide
    showSlide(0);
    
    // Next Button
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            showSlide(currentIndex + 1);
        });
    }
    
    // Previous Button
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            showSlide(currentIndex - 1);
        });
    }
    
    // Show specific slide
    function showSlide(index) {
        // Handle index bounds
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }
        
        // Update current index
        currentIndex = index;
        
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Show current slide
        slides[currentIndex].classList.add('active');
        
        // Update dots
        const dots = dotsContainer.querySelectorAll('.slider-dot');
        dots.forEach((dot, idx) => {
            if (idx === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    // Auto advance slides every 5 seconds
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);
}
