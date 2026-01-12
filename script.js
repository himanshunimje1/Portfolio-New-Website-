// ===== Navigation Toggle =====
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Active Section Highlight =====
const sections = document.querySelectorAll('section[id]');
const highlightNavLink = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
};

window.addEventListener('scroll', highlightNavLink);

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translate3d(0, 0, 0)';
            // Remove will-change after animation to improve performance
            setTimeout(() => {
                entry.target.style.willChange = 'auto';
            }, 1200);
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.skill-card, .project-card, .experience-item, .stat-card');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translate3d(0, 30px, 0)';
    el.style.transition = 'opacity 1.2s ease-out, transform 1.2s ease-out';
    el.style.willChange = 'opacity, transform';
    el.style.backfaceVisibility = 'hidden';
    el.style.webkitBackfaceVisibility = 'hidden';
    observer.observe(el);
});

// ===== Form Handling =====
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Create mailto link (non-functional form as per requirements)
        const mailtoLink = `mailto:himanshunimje@live.com?subject=Contact from ${name}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${email}`;
        window.location.href = mailtoLink;
        
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.textContent = 'Thank you! Opening your email client...';
        successMsg.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: #0176D3;
            color: white;
            padding: 1rem 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideIn 0.8s ease-out;
        `;
        document.body.appendChild(successMsg);
        
        setTimeout(() => {
            successMsg.style.animation = 'slideOut 0.8s ease-in';
            setTimeout(() => successMsg.remove(), 800);
        }, 3000);
        
        // Reset form
        contactForm.reset();
    });
}

// ===== Add CSS animations dynamically =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .nav-link.active {
        color: var(--primary-color);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ===== Performance Optimization =====
let ticking = false;
const optimizedScroll = () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            highlightNavLink();
            ticking = false;
        });
        ticking = true;
    }
};

window.addEventListener('scroll', optimizedScroll, { passive: true });

// ===== Theme Toggle =====
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

// Get saved theme or default to dark
const getTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
};

// Set theme
const setTheme = (theme) => {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update icon
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
};

// Initialize theme on page load
const currentTheme = getTheme();
setTheme(currentTheme);

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// ===== Console Message =====
console.log('%c👋 Hello! Thanks for checking out my portfolio!', 'color: #0176D3; font-size: 16px; font-weight: bold;');
console.log('%cWant to collaborate? Reach out!', 'color: #1589EE; font-size: 12px;');
