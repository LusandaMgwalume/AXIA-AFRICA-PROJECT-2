 document.addEventListener('DOMContentLoaded', function() {
      const logos = document.querySelectorAll('aside > div');
      logos.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
          this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        logo.addEventListener('mouseleave', function() {
          this.style.transform = 'scale(1) rotate(0deg)';
        });
      });

      window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelectorAll('img');
        parallax.forEach(img => {
          const speed = 0.5;
          img.style.transform = `translateY(${scrolled * speed}px)`;
        });
      });

      const mottoElements = document.querySelectorAll('h1, h2, h3');
      mottoElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        setTimeout(() => {
          element.style.transition = 'all 0.8s ease';
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, index * 300);
      });
    });
 