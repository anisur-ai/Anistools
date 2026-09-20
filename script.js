'use strict';

/* =========================================================
   AnisTools – Home page script
   Works with index.html + home.css
   ========================================================= */

const root = document.documentElement;
const $ = id => document.getElementById(id);

const store = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
const load = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };

/* ---------- Theme ---------- */
const themeBtn = $('themeToggle');

function applyTheme(t) {
  root.dataset.theme = t;
  themeBtn.textContent = t === 'dark' ? '🌙' : '☀️';
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', t === 'dark' ? '#0a0e1a' : '#f6f8fc');
}
themeBtn.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  store('theme', next);
});

/* ---------- Language ---------- */
const langSel = $('langSelect');
const search = $('toolSearch');

function applyLang(l) {
  root.lang = l;
  langSel.value = l;
  search.placeholder = l === 'bn' ? search.dataset.phBn : search.dataset.phEn;
}
langSel.addEventListener('change', e => {
  applyLang(e.target.value);
  store('lang', e.target.value);
});

/* ---------- Mobile menu ---------- */
const menuBtn = $('menuToggle');
const nav = $('mainNav');

function setMenu(open) {
  nav.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', open);
  menuBtn.textContent = open ? '✕' : '☰';
}
menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
document.addEventListener('click', e => { if (!e.target.closest('.site-header')) setMenu(false); });

/* ---------- Tool search & category filter ---------- */
const cards = Array.from(document.querySelectorAll('.tool-card'));
const chips = Array.from(document.querySelectorAll('.chip'));
const emptyNote = $('emptyNote');
let activeCat = 'all';

function applyFilters() {
  const q = search.value.trim().toLowerCase();
  let shown = 0;
  cards.forEach(card => {
    const inCat = activeCat === 'all' || card.dataset.cat === activeCat;
    const hay = (card.textContent + ' ' + (card.dataset.keywords || '')).toLowerCase();
    const show = inCat && (!q || hay.includes(q));
    card.hidden = !show;
    if (show) shown++;
  });
  emptyNote.hidden = shown > 0;
}

search.addEventListener('input', applyFilters);
chips.forEach(chip => {
  chip.setAttribute('aria-pressed', chip.classList.contains('active'));
  chip.addEventListener('click', () => {
    activeCat = chip.dataset.filter;
    chips.forEach(c => {
      const on = c === chip;
      c.classList.toggle('active', on);
      c.setAttribute('aria-pressed', on);
    });
    applyFilters();
  });
});

/* ---------- Mark cards "Coming soon" if the page is not uploaded yet ---------- */
if (location.protocol.indexOf('http') === 0) {
  cards.forEach(card => {
    fetch(card.getAttribute('href'), { method: 'HEAD', cache: 'no-cache' })
      .then(r => {
        if (!r.ok) {
          card.classList.add('soon');
          card.setAttribute('aria-disabled', 'true');
          card.tabIndex = -1;
        }
      })
      .catch(() => {});
  });
}

/* ---------- Init ---------- */
applyTheme(root.dataset.theme === 'light' ? 'light' : 'dark');
applyLang(load('lang') === 'bn' ? 'bn' : 'en');
applyFilters();