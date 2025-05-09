document.addEventListener('DOMContentLoaded', function() {
  const headerHeight = document.querySelector('header').offsetHeight;
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}); 