// Smooth scroll for anchor links
//disabe auto merge
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll to top button (optional)
const topBtn = document.createElement('button');
topBtn.textContent = "↑ Top";
topBtn.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  display: none;
  background: #0073e6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;
document.body.appendChild(topBtn);

window.addEventListener('scroll', () => {
  topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
