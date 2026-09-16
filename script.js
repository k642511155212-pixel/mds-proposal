const progress = document.querySelector('#pageProgress');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const navLinks = [...document.querySelectorAll('.site-nav a')];
const tabs = [...document.querySelectorAll('.tab-button')];
const panels = [...document.querySelectorAll('.tab-panel')];

function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? window.scrollY / max : 0;
  progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
}

window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

tabs.forEach(button => {
  button.addEventListener('click', () => {
    const id = button.dataset.tab;
    tabs.forEach(tab => tab.classList.toggle('active', tab === button));
    panels.forEach(panel => panel.classList.toggle('active', panel.id === id));
  });
});

const observedSections = navLinks
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const observer = new IntersectionObserver(entries => {
  const visible = entries
    .filter(entry => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

  if (!visible) return;
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`);
  });
}, {
  rootMargin: '-28% 0px -58% 0px',
  threshold: [0, .2, .45, .7]
});

observedSections.forEach(section => observer.observe(section));
