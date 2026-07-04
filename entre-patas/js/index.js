const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.main-nav a');

const setActiveLink = () => {
  let currentId = 'inicio';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    if (window.scrollY >= sectionTop) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === '#' + currentId);
  });
};

window.addEventListener('scroll', setActiveLink);
setActiveLink();
