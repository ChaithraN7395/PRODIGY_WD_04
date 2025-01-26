// Smooth scrolling to sections
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

// Theme toggle functionality
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Theme';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '20px';
toggleButton.style.right = '20px';
toggleButton.style.padding = '10px 20px';
toggleButton.style.cursor = 'pointer';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
