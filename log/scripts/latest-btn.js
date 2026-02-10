  // Update for newest post/project. Update manually.
document.addEventListener('DOMContentLoaded', function() { 
  const LATEST_POST = {
    url: "/_site/log/",  
    title: "It Works",               
    date: "2026-2-09",                       
    description: "We are SO back, brother."
  };
  
  // Find and update CTA buttons
  const ctaButtons = document.querySelectorAll('.cta-btn');
  
  ctaButtons.forEach(function(button) {
    // Check if it's the href="#project" cta-btn
    if (button.getAttribute('href') === '#project' && LATEST_POST.url) {
      // Update the href to go to the latest page
      button.href = LATEST_POST.url;
      
        
      }
    }
  );
});