// ==========================================
// DYNAMIC RENDERING ENGINE
// ==========================================

const renderSiteData = () => {
  const desktopNav = document.getElementById('desktop-nav-container');
  const mobileNav = document.getElementById('mobile-nav-container');
  const scholarshipContainer = document.getElementById('scholarship-container');
  const recipientsContainer = document.getElementById('recipients-container');

  // Inject Desktop Navigation Links
  if (desktopNav && typeof navLinks !== 'undefined') {
    desktopNav.innerHTML = navLinks.map(link => `
      <li><a href="${link.href}">${link.label}</a></li>
    `).join('');
  }

  // Inject Mobile Drawer Links
  if (mobileNav && typeof navLinks !== 'undefined') {
    mobileNav.innerHTML = navLinks.map(link => `
      <li><a href="${link.href}" class="drawer-link">${link.label}</a></li>
    `).join('');
  }

  // Inject Scholarships
  if (scholarshipContainer && typeof scholarships !== 'undefined') {
    scholarshipContainer.innerHTML = scholarships.map(s => `
      <div class="scholarship-card">
        <span class="sc-name">${s.name}</span>
        <span class="sc-amount">${s.amount}</span>
      </div>
    `).join('');
  }

  // Inject Recipients
  if (recipientsContainer && typeof recipients !== 'undefined') {
    recipientsContainer.innerHTML = recipients.map(r => `
      <div class="recipient-card">
        <div class="recipient-name">${r.name}</div>
        <div class="recipient-award">${r.award}</div>
        <div class="recipient-amount">${r.amount}</div>
      </div>
    `).join('');
  }

  // Auto-Update Footer Year Dynamically
  const footerYearSpan = document.getElementById('footer-year');
  if (footerYearSpan) {
    footerYearSpan.textContent = new Date().getFullYear();
  }

  // Fire Lucide icons explicitly AFTER elements are injected into the DOM
  if (window.lucide) {
    lucide.createIcons();
  }
};

// ==========================================
// INITIALIZATION LAYER (DOMContentLoaded)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Run data mapping engine
  renderSiteData();

  // 2. Hamburger menu toggle interactions
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('drawer');

  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      drawer.classList.toggle('open');
    });

    // Handle drawer links via delegation
    drawer.addEventListener('click', (e) => {
      if (e.target.classList.contains('drawer-link')) {
        hamburger.classList.remove('open');
        drawer.classList.remove('open');
      }
    });

    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !drawer.contains(e.target)) {
        hamburger.classList.remove('open');
        drawer.classList.remove('open');
      }
    });
  }

  // 3. Timeline reveal animation scroll handler
  const tlItems = document.querySelectorAll('.timeline-item');
  if (tlItems.length > 0) {
    const tlObserver = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 110);
        }
      });
    }, { threshold: 0.1 });
    tlItems.forEach(item => tlObserver.observe(item));
  }

  // 4. Hero stats animation fade-in observer
  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) {
    const so = new IntersectionObserver((entries) => {
      entries.forEach(e => { 
        if (e.isIntersecting) heroStats.style.opacity = '1'; 
      });
    }, { threshold: 0.3 });
    so.observe(heroStats);
  }
});