// Menu on click scroll to specific id section
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.scroll-link');
    const offset = window.innerWidth > 768 ? 150 : 105; // Adjust the offset based on the device width
  
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        links.forEach(function(item) {
          item.classList.remove('active');
        });
  
        this.classList.add('active');
  
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth'
          });
          const elementToRemoveClassFrom = document.getElementById('siteHeader'); // Replace 'elementId' with the actual ID of the element
            if (elementToRemoveClassFrom && elementToRemoveClassFrom.classList.contains('open-mobile-menu')) {
                elementToRemoveClassFrom.classList.remove('open-mobile-menu');
            }
        }
      });
    });
  });