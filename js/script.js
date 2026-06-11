// ==========================================
// DYNAMIC RENDERING ENGINE
// ==========================================

const renderSiteData = () => {
  const desktopNav = document.getElementById('desktop-nav-container');
  const mobileNav = document.getElementById('mobile-nav-container');
  const scholarshipContainer = document.getElementById('scholarship-container');
  const recipientsContainer = document.getElementById('recipients-container');
  
  // Target containers for administrative directories parity
  const honoreesContainer = document.getElementById('dynamic-honorees-container');
  const judgesContainer = document.getElementById('dynamic-judges-container');
  const escortsContainer = document.getElementById('dynamic-escorts-container');

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

  // Inject Full Dynamic Honoree Cards (Honoring Admin panel selection overrides)
  if (honoreesContainer && typeof annualHonorees !== 'undefined') {
    honoreesContainer.innerHTML = annualHonorees.map(h => {
      let iconName = 'award';
      
      // 1. If an icon was explicitly set via the Admin Panel, prioritize it
      if (h.icon) {
        iconName = h.icon;
      } 
      // 2. Fall back to semantic string identification matching for safety
      else if (h.award) {
        const awardLower = h.award.toLowerCase();
        if (awardLower.includes('humanitarian')) iconName = 'heart-handshake';
        else if (awardLower.includes('service') || awardLower.includes('community')) iconName = 'users';
        else if (awardLower.includes('educator') || awardLower.includes('teacher')) iconName = 'book-marked';
      }

      return `
        <div class="honoree-card">
          <div class="honoree-icon">
            <div class="honoree-icon-wrap"><i data-lucide="${iconName}" width="24" height="24"></i></div>
          </div>
          <div class="honoree-award-tag">${h.award || ''}</div>
          <div class="honoree-name">${h.name || ''}</div>
          <div class="honoree-bio">${h.bio || ''}</div>
        </div>
      `;
    }).join('');
  }

  // Inject Scholarship Committee Judges Dynamically
  if (judgesContainer && typeof scholarshipJudges !== 'undefined') {
    judgesContainer.innerHTML = scholarshipJudges.map(name => `
      <span class="judge-tag">${name}</span>
    `).join('');
  }

  // Inject Hostesses & Escorts Dynamically
  if (escortsContainer && typeof hostessesAndEscorts !== 'undefined') {
    escortsContainer.innerHTML = hostessesAndEscorts.map(name => `
      <span class="judge-tag">${name}</span>
    `).join('');
  }

  // Auto-Update Footer Year Dynamically
  const footerYearSpan = document.getElementById('footer-year');
  if (footerYearSpan) {
    footerYearSpan.textContent = new Date().getFullYear();
  }

  // ==========================================================================
  // HARDWARE DECOUPLING LAYER: SYSTEM YEAR INJECTION ENGINE
  // ==========================================================================
  if (typeof systemYearConfig !== 'undefined') {
    const elMap = {
      'scholarship-season-year': systemYearConfig.scholarshipSeasonYear,
      'recipients-class-year': systemYearConfig.recipientsClassYear,
      'recipients-title-year': systemYearConfig.recipientsTitleYear,
      'announcement-year': systemYearConfig.announcementYear,
      'honorees-season-year': systemYearConfig.honoreesSeasonYear,
      'judges-season-year': systemYearConfig.judgesSeasonYear,
      'escorts-season-year': systemYearConfig.escortsSeasonYear,
      'apply-title-year': systemYearConfig.applyTitleYear,
      'apply-class-year': systemYearConfig.applyTitleYear // Linked directly to match application target context
    };

    // Cycle across DOM targets and securely inject the compiled configuration strings
    Object.keys(elMap).forEach(id => {
      const el = document.getElementById(id);
      if (el && elMap[id]) {
        el.textContent = elMap[id];
      }
    });
  }

  // Re-initialize dynamic Lucide graphics components cleanly on data mutations
  if (window.lucide) {
    lucide.createIcons();
  }
};

// ==========================================
// INITIALIZATION LAYER (DOMContentLoaded)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  renderSiteData();

  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('drawer');

  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      drawer.classList.toggle('open');
    });

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