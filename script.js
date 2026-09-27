document.addEventListener('DOMContentLoaded', () => {
  const bookingForm = document.getElementById('bookingForm');
  
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(bookingForm);
      const data = Object.fromEntries(formData.entries());
      
      console.log('Booking submitted (demo only):', data);
      
      alert('Thank you for your booking request!\n\nThis is a demonstration. In production, your booking would be confirmed and you would receive an email confirmation.\n\nBooking Details:\nService: ' + data.service + '\nDate: ' + data.date + '\nTime: ' + data.time + '\nName: ' + data.name);
      
      bookingForm.reset();
    });
  }
  
  // Set minimum date to today for date picker
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }
  
  // Simple scroll reveal animation
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  const cards = document.querySelectorAll('.feature-card, .testimonial, .service-item');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});