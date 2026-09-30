/* ================================================================
   BREWED & BEYOND — MENU FILTER
   menu-filter.js — Category tabs · Item filtering · Animations
   ================================================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const filterTabs = document.querySelectorAll('.filter-tab');
  const menuItems  = document.querySelectorAll('.filterable-item');

  if (!filterTabs.length || !menuItems.length) return;

  // ── Filter Logic ───────────────────────────────────────────────
  function filterItems(category) {
    menuItems.forEach((item, i) => {
      const itemCat = item.dataset.category;
      const show = category === 'all' || itemCat === category;

      if (show) {
        // Stagger the entrance
        item.style.transitionDelay = `${i * 0.05}s`;
        item.classList.remove('hidden-item');
        item.classList.add('show-item');
      } else {
        item.style.transitionDelay = '0s';
        item.classList.remove('show-item');
        item.classList.add('hidden-item');
      }
    });
  }

  // ── Tab Click Handlers ─────────────────────────────────────────
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active tab
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Filter items
      filterItems(tab.dataset.filter);
    });
  });

  // ── Init: show all ────────────────────────────────────────────
  filterItems('all');

});
