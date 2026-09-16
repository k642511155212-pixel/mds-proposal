(() => {
  'use strict';

  const body = document.body;
  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('.site-nav');

  const setMenuState = (isOpen) => {
    if (!menuButton || !nav) return;
    nav.classList.toggle('is-open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    body.classList.toggle('menu-open', isOpen && window.innerWidth <= 1080);
  };

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      setMenuState(menuButton.getAttribute('aria-expanded') !== 'true');
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) setMenuState(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        setMenuState(false);
        menuButton.focus();
      }
    });

    document.addEventListener('click', (event) => {
      const clickedOutside = !nav.contains(event.target) && !menuButton.contains(event.target);
      if (clickedOutside && menuButton.getAttribute('aria-expanded') === 'true') setMenuState(false);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1080) setMenuState(false);
    });
  }

  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const panels = [...document.querySelectorAll('[role="tabpanel"]')];

  const activateTab = (tab, moveFocus = false) => {
    const targetId = tab.dataset.tab;
    tabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
    });
    panels.forEach((panel) => {
      panel.hidden = panel.id !== targetId;
    });
    if (moveFocus) tab.focus();
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let nextIndex = index;
      if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = tabs.length - 1;
      activateTab(tabs[nextIndex], true);
    });
  });

  const navLinks = nav ? [...nav.querySelectorAll('a[href^="#"]')] : [];
  const observedSections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && observedSections.length) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute('href') === `#${visible.target.id}`;
        link.classList.toggle('is-active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-28% 0px -62% 0px', threshold: [0, 0.2, 0.5] });

    observedSections.forEach((section) => observer.observe(section));
  }
})();
