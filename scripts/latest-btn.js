  // Update for newest post/project. Update manually.
document.addEventListener('DOMContentLoaded', function() { 
  const LATEST_POST = {
    url: "/pages/log/index.html",  
    title: "Updated CTA Button",               
    date: "2026-1-30",                       
    description: "Updated my CTA button to go to newest update. Pretty cool."
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