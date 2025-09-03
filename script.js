
  // Update current year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Enhanced scroll effect for navigation
  let lastScrollY = window.scrollY;
  
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 50) {
      nav.style.background = 'rgba(10, 10, 10, 0.98)';
      nav.style.backdropFilter = 'blur(20px)';
    } else {
      nav.style.background = 'rgba(10, 10, 10, 0.95)';
      nav.style.backdropFilter = 'blur(15px)';
    }

    // Hide/show nav on scroll
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      nav.style.transform = 'translateY(-100%)';
    } else {
      nav.style.transform = 'translateY(0)';
    }
    lastScrollY = currentScrollY;
  });

  // Scroll animations
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

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  // Add some interactive electronics effects
  document.querySelectorAll('.service-card, .portfolio-item, .experience-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      // Create a brief glow effect
      this.style.boxShadow = '0 8px 30px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.boxShadow = '';
    });
  });

  // Random circuit elements animation
  function createCircuitElement() {
    const element = document.createElement('div');
    element.className = 'circuit-element';
    element.style.position = 'fixed';
    element.style.left = Math.random() * window.innerWidth + 'px';
    element.style.top = Math.random() * window.innerHeight + 'px';
    element.style.zIndex = '-1';
    document.body.appendChild(element);

    setTimeout(() => {
      element.remove();
    }, 5000);
  }

  // Add circuit elements periodically
  setInterval(createCircuitElement, 3000);

  // Add typing effect to hero title
  const heroTitle = document.querySelector('.hero-title');
  const originalText = heroTitle.textContent;
  heroTitle.textContent = '';
  
  let i = 0;
  function typeWriter() {
    if (i < originalText.length) {
      heroTitle.textContent += originalText.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  // Start typing effect after a delay
  setTimeout(typeWriter, 1000);

  // Add glitch effect to some elements occasionally
  function addGlitchEffect() {
    const elements = document.querySelectorAll('.skill-tag, .service-icon');
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    
    randomElement.style.animation = 'none';
    randomElement.style.textShadow = '2px 0 #ff00ff, -2px 0 #00ffff';
    
    setTimeout(() => {
      randomElement.style.textShadow = '';
      randomElement.style.animation = '';
    }, 200);
  }

  setInterval(addGlitchEffect, 5000);

