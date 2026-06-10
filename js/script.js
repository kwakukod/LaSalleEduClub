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

  // ==========================================
  // AUTO-CALCULATE SCHOLARSHIP TOTALS
  // ==========================================
  const totalScholarshipsCount = typeof scholarships !== 'undefined' ? scholarships.length : 0;

  const scholarshipIntroSpan = document.getElementById('scholarship-count-dynamic');
  if (scholarshipIntroSpan) {
    scholarshipIntroSpan.textContent = totalScholarshipsCount;
  }

  const applySectionSpan = document.getElementById('apply-count-dynamic');
  if (applySectionSpan) {
    applySectionSpan.textContent = totalScholarshipsCount;
  }
  // ==========================================

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

  // Auto-Update Announcement Year Dynamically (Rolls over every July)
  const announcementYearEl = document.getElementById('announcement-year');
  if (announcementYearEl) {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth(); // Note: January is 0, June is 5, July is 6

    // If it's July (6) or later, show next year's date
    if (currentMonth >= 6) {
      announcementYearEl.textContent = currentYear + 1;
    } else {
      announcementYearEl.textContent = currentYear;
    }
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