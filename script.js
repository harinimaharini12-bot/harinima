// script.js - small interactivity

// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const href = this.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Put a timestamp in the footer (friendly text)
(function setCreatedText(){
  const el = document.getElementById('created');
  if(!el) return;
  const now = new Date();
  // friendly text
  el.textContent = `created ${now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
})();
