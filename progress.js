function animateHorizontalProgress() {
    const progressBars = document.querySelectorAll('.progress-bar');
  
    progressBars.forEach(bar => {
      const percent = parseInt(bar.parentNode.querySelector('.skill-percent').innerText);
      const fill = bar.querySelector('.progress-fill');
      fill.style.width = percent + '%';
    });
  }
  
  // Call the function to animate the progress bars
  animateHorizontalProgress();
  