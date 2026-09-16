
const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('.desktop-nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.desktop-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    tabs.forEach(item => item.classList.toggle('active', item === tab));
    panels.forEach(panel => panel.classList.toggle('active', panel.id === target));
  });
});

const navLinks = [...document.querySelectorAll('.desktop-nav a')];
const sections = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);

const observer = new IntersectionObserver(entries => {
  const current = entries
    .filter(entry => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!current) return;
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current.target.id}`);
  });
}, { rootMargin: '-30% 0px -58% 0px', threshold: [0, .25, .5] });

sections.forEach(section => observer.observe(section));
