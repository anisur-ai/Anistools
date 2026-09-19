'use strict';

/* ================= Helpers ================= */
const $ = id => document.getElementById(id) || document.createElement('div');
const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
const store = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
const load = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };

/* ================= Translations: key: [English, বাংলা] ================= */
const STR = {
  hero_tag: ['Free · No sign-up · Runs in your browser', 'ফ্রি · সাইনআপ ছাড়াই · আপনার ব্রাউজারেই চলে'],
  hero_a: ['Free Online Tools for', 'প্রতিদিনের কাজের জন্য'],
  hero_b: ['Everyday Tasks', 'ফ্রি অনলাইন টুলস'],
  hero_desc: ['QR codes, passwords, word counts, image compression and a calculator — fast, private and free.', 'QR কোড, পাসওয়ার্ড, শব্দ গণনা, ছবি কম্প্রেশন আর ক্যালকুলেটর — দ্রুত, নিরাপদ ও ফ্রি।'],
  tab_qr: ['QR Code', 'QR কোড'],
  tab_pass: ['Password', 'পাসওয়ার্ড'],
  tab_word: ['Word Counter', 'শব্দ গণনা'],
  tab_img: ['Image Compressor', 'ইমেজ কম্প্রেসর'],
  tab_calc: ['Calculator', 'ক্যালকুলেটর'],
  copy: ['Copy', 'কপি'],

  qr_h: ['QR Code Generator', 'QR কোড জেনারেটর'],
  qr_p: ['Turn any link or text into a QR code and download it as PNG.', 'যেকোনো লিংক বা লেখাকে QR কোডে বদলে PNG হিসেবে ডাউনলোড করুন।'],
  qr_in: ['Link or text', 'লিংক বা লেখা'],
  qr_fg: ['QR color', 'QR-এর রং'],
  qr_bg: ['Background', 'ব্যাকগ্রাউন্ড'],
  qr_gen: ['Generate QR code', 'QR কোড তৈরি করুন'],
  qr_dl: ['Download PNG', 'PNG ডাউনলোড'],
  qr_empty: ['Enter a link or text first.', 'আগে লিংক বা লেখা দিন।'],
  qr_long: ['Text is too long for a QR code.', 'QR কোডের জন্য লেখাটি অনেক বড়।'],
  qr_contrast: ['Colors are too similar — the QR may not scan.', 'রং দুটো খুব কাছাকাছি — QR স্ক্যান নাও হতে পারে।'],

  pw_h: ['Password Generator', 'পাসওয়ার্ড জেনারেটর'],
  pw_p: ['Create strong random passwords. Nothing is sent or stored.', 'শক্তিশালী র‍্যান্ডম পাসওয়ার্ড বানান। কিছুই পাঠানো বা সংরক্ষণ করা হয় না।'],
  pw_ph: ['Your password', 'আপনার পাসওয়ার্ড'],
  pw_strength: ['Strength', 'শক্তি'],
  pw_time: ['Estimated crack time', 'ভাঙতে আনুমানিক সময়'],
  pw_note: ['Estimate assumes an offline attack at 10 billion guesses per second.', 'হিসাবটি প্রতি সেকেন্ডে ১,০০০ কোটি অনুমানের অফলাইন আক্রমণ ধরে করা।'],
  pw_len: ['Length', 'দৈর্ঘ্য'],
  pw_up: ['Uppercase (A–Z)', 'বড় হাতের (A–Z)'],
  pw_low: ['Lowercase (a–z)', 'ছোট হাতের (a–z)'],
  pw_num: ['Numbers (0–9)', 'সংখ্যা (0–9)'],
  pw_sym: ['Symbols (!@#$)', 'চিহ্ন (!@#$)'],
  pw_gen: ['Generate password', 'নতুন পাসওয়ার্ড'],
  pw_weak: ['Weak', 'দুর্বল'],
  pw_fair: ['Fair', 'মোটামুটি'],
  pw_strong: ['Strong', 'শক্তিশালী'],
  pw_vstrong: ['Very strong', 'খুব শক্তিশালী'],
  pw_none: ['Select at least one option.', 'কমপক্ষে একটি অপশন বেছে নিন।'],
  pw_copied: ['Password copied!', 'পাসওয়ার্ড কপি হয়েছে!'],
  bits: ['bits', 'বিট'],
  t_instant: ['Instantly', 'মুহূর্তেই'],
  t_sec: ['seconds', 'সেকেন্ড'],
  t_min: ['minutes', 'মিনিট'],
  t_hr: ['hours', 'ঘণ্টা'],
  t_day: ['days', 'দিন'],
  t_yr: ['years', 'বছর'],
  t_kyr: ['thousand years', 'হাজার বছর'],
  t_myr: ['million years', 'মিলিয়ন বছর'],
  t_gyr: ['More than a billion years', '১০০ কোটি বছরেরও বেশি'],

  wc_h: ['Word Counter', 'শব্দ গণনা'],
  wc_p: ['Count words, characters, sentences and reading time as you type.', 'লেখার সাথে সাথেই শব্দ, অক্ষর, বাক্য ও পড়ার সময় গুনুন।'],
  wc_ph: ['Type or paste your text here…', 'এখানে লিখুন বা পেস্ট করুন…'],
  st_words: ['Words', 'শব্দ'],
  st_chars: ['Characters', 'অক্ষর'],
  st_nospace: ['No spaces', 'স্পেস ছাড়া'],
  st_sent: ['Sentences', 'বাক্য'],
  st_para: ['Paragraphs', 'অনুচ্ছেদ'],
  st_read: ['Min read', 'মিনিটে পড়া'],
  a_clean: ['Remove extra spaces', 'বাড়তি স্পেস মুছুন'],
  a_clear: ['Clear', 'মুছুন'],
  wc_copied: ['Text copied!', 'লেখা কপি হয়েছে!'],

  im_h: ['Image Compressor', 'ইমেজ কম্প্রেসর'],
  im_p: ['Reduce image file size in your browser. Images are never uploaded.', 'ব্রাউজারেই ছবির সাইজ কমান। ছবি কোথাও আপলোড হয় না।'],
  im_drop: ['Click to choose an image, or drag and drop it here', 'ছবি বেছে নিতে ক্লিক করুন বা এখানে টেনে আনুন'],
  im_q: ['Quality', 'কোয়ালিটি'],
  im_fmt: ['Format', 'ফরম্যাট'],
  im_w: ['Max width', 'সর্বোচ্চ প্রস্থ'],
  im_orig_w: ['Original', 'আসল মাপ'],
  im_orig: ['Original', 'আসল'],
  im_comp: ['Compressed', 'কম্প্রেসড'],
  im_dl: ['Download', 'ডাউনলোড'],
  im_saved: ['smaller', 'ছোট'],
  im_bigger: ['Already well optimized — try lower quality or a smaller width.', 'ছবিটি আগে থেকেই অপটিমাইজড — কোয়ালিটি বা প্রস্থ কমিয়ে দেখুন।'],
  im_bad: ['Please choose a PNG, JPG or WebP image.', 'অনুগ্রহ করে PNG, JPG বা WebP ছবি বেছে নিন।'],

  ca_h: ['Calculator', 'ক্যালকুলেটর'],
  ca_p: ['Simple calculator with keyboard support.', 'কিবোর্ড সাপোর্টসহ সহজ ক্যালকুলেটর।'],

  f_copy: ['© 2026 AnisTools. All rights reserved.', '© ২০২৬ AnisTools। সর্বস্বত্ব সংরক্ষিত।'],
  f_priv: ['Privacy Policy', 'গোপনীয়তা নীতি'],
  f_terms: ['Terms of Use', 'ব্যবহারের শর্তাবলী'],
  f_contact: ['Contact', 'যোগাযোগ']
};

let lang = 'en';
const T = k => (STR[k] ? STR[k][lang === 'bn' ? 1 : 0] : k);

function applyLang(l) {
  lang = l;
  document.documentElement.lang = l;
  $('langSelect').value = l;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = T(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = T(el.dataset.i18nPh); });
  updatePasswordInfo();
  updateImageInfo();
}

/* ================= Theme & toast ================= */
function applyTheme(t) {
  document.documentElement.dataset.theme = t;
  $('themeToggle').textContent = t === 'dark' ? '🌙' : '☀️';
}
$('themeToggle').addEventListener('click', () => {
  const t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(t);
  store('theme', t);
});
$('langSelect').addEventListener('change', e => { applyLang(e.target.value); store('lang', e.target.value); });

let toastTimer;
function toast(key) {
  const el = $('toast');
  el.textContent = T(key);
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}

async function copyText(text, msgKey) {
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
  } catch (e) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (_) {}
    ta.remove();
  }
  toast(msgKey);
}

/* ================= Tabs ================= */
let activeTool = document.body.dataset.tool || 'qr';
const tabs = document.querySelectorAll('.tab-btn');

function switchTool(key, updateHash = true) {
  const panel = document.getElementById('panel-' + key);
  if (!panel) return;
  activeTool = key;
  tabs.forEach(b => {
    const on = b.dataset.tool === key;
    b.classList.toggle('active', on);
    b.setAttribute('aria-selected', on);
  });
  document.querySelectorAll('.tool-panel').forEach(p => p.classList.toggle('active', p === panel));
  if (updateHash) history.replaceState(null, '', '#' + key);
}
tabs.forEach(b => b.addEventListener('click', () => switchTool(b.dataset.tool)));

/* ================= Tool 1: QR code ================= */
const qrBox = $('qrcode');

function luminance(hex) {
  const c = [1, 3, 5].map(i => parseInt(hex.substr(i, 2), 16) / 255)
    .map(v => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}
function contrast(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

function generateQR(manual) {
  const dl = $('downloadQrBtn');
  const text = $('qrInput').value.trim();
  const fg = $('qrColor').value;
  const bg = $('qrBgColor').value;

  qrBox.innerHTML = '';
  dl.hidden = true;
  if (!text) { if (manual) toast('qr_empty'); return; }
  if (typeof QRCode === 'undefined') return;

  try {
    new QRCode(qrBox, {
      text, width: 512, height: 512,
      colorDark: fg, colorLight: bg,
      correctLevel: QRCode.CorrectLevel.M
    });
  } catch (e) {
    qrBox.innerHTML = '';
    toast('qr_long');
    return;
  }
  const canvas = qrBox.querySelector('canvas');
  if (canvas) {
    dl.href = canvas.toDataURL('image/png');
    dl.hidden = false;
  }
  if (contrast(fg, bg) < 3) toast('qr_contrast');
}
$('qrGenerate').addEventListener('click', () => generateQR(true));
['qrInput', 'qrColor', 'qrBgColor'].forEach(id => $(id).addEventListener('input', debounce(() => generateQR(false), 350)));

/* ================= Tool 2: Password ================= */
const SETS = {
  chkUpper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  chkLower: 'abcdefghijklmnopqrstuvwxyz',
  chkNum: '0123456789',
  chkSym: '!@#$%^&*()-_=+[]{};:,.<>?'
};
let passBits = 0;

function randInt(max) {
  const buf = new Uint32Array(1);
  const limit = Math.floor(0x100000000 / max) * max;
  do { crypto.getRandomValues(buf); } while (buf[0] >= limit);
  return buf[0] % max;
}

function generatePassword() {
  const len = +$('passLength').value;
  const pools = Object.keys(SETS).filter(id => $(id).checked).map(id => SETS[id]);
  if (!pools.length) { toast('pw_none'); return; }

  const all = pools.join('');
  const chars = pools.map(p => p[randInt(p.length)]);      // at least one from each selected set
  while (chars.length < len) chars.push(all[randInt(all.length)]);
  for (let i = chars.length - 1; i > 0; i--) {              // Fisher–Yates shuffle
    const j = randInt(i + 1);
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  $('passOutput').value = chars.join('');
  passBits = len * Math.log2(all.length);
  updatePasswordInfo();
}

function crackTime(bits) {
  const sec = Math.pow(2, bits - 1) / 1e10;   // average time at 10 billion guesses/second
  const YEAR = 31557600;
  if (sec < 1) return T('t_instant');
  if (sec < 60) return Math.round(sec) + ' ' + T('t_sec');
  if (sec < 3600) return Math.round(sec / 60) + ' ' + T('t_min');
  if (sec < 86400) return Math.round(sec / 3600) + ' ' + T('t_hr');
  if (sec < YEAR) return Math.round(sec / 86400) + ' ' + T('t_day');
  const y = sec / YEAR;
  if (y < 1e3) return Math.round(y) + ' ' + T('t_yr');
  if (y < 1e6) return Math.round(y / 1e3) + ' ' + T('t_kyr');
  if (y < 1e9) return Math.round(y / 1e6) + ' ' + T('t_myr');
  return T('t_gyr');
}

function updatePasswordInfo() {
  if (!passBits) return;
  const levels = [
    ['pw_weak', '#ef4444', '25%'],
    ['pw_fair', '#f59e0b', '50%'],
    ['pw_strong', '#10b981', '75%'],
    ['pw_vstrong', '#059669', '100%']
  ];
  const lvl = levels[passBits < 40 ? 0 : passBits < 60 ? 1 : passBits < 80 ? 2 : 3];
  const bar = $('strengthBar');
  bar.style.width = lvl[2];
  bar.style.background = lvl[1];
  $('strengthText').textContent = T(lvl[0]);
  $('entropyText').textContent = Math.round(passBits) + ' ' + T('bits');
  $('crackTimeText').textContent = crackTime(passBits);
}

$('genPass').addEventListener('click', generatePassword);
$('copyPass').addEventListener('click', () => copyText($('passOutput').value, 'pw_copied'));
$('passLength').addEventListener('input', e => { $('passLengthVal').textContent = e.target.value; generatePassword(); });
Object.keys(SETS).forEach(id => $(id).addEventListener('change', generatePassword));

/* ================= Tool 3: Word counter ================= */
function analyzeText() {
  const text = $('wordInput').value;
  const trimmed = text.trim();
  const words = trimmed ? trimmed.split(/\s+/).length : 0;
  const sentences = trimmed ? (trimmed.match(/[^.!?।]+[.!?।]*/g) || []).filter(s => s.trim()).length : 0;
  const paragraphs = trimmed ? trimmed.split(/\n\s*\n/).filter(p => p.trim()).length : 0;

  $('stWords').textContent = words;
  $('stChars').textContent = [...text].length;
  $('stNoSpace').textContent = [...text.replace(/\s/g, '')].length;
  $('stSent').textContent = sentences;
  $('stPara').textContent = paragraphs;
  $('stRead').textContent = words ? Math.max(1, Math.ceil(words / 200)) : 0;
}

const TEXT_ACTIONS = {
  upper: s => s.toUpperCase(),
  lower: s => s.toLowerCase(),
  title: s => s.toLowerCase().replace(/(^|\s)\S/g, m => m.toUpperCase()),
  clean: s => s.replace(/[ \t]+/g, ' ').replace(/^ | $/gm, '').replace(/\n{3,}/g, '\n\n').trim(),
  clear: () => ''
};
$('wordInput').addEventListener('input', analyzeText);
document.querySelectorAll('[data-act]').forEach(btn => btn.addEventListener('click', () => {
  const area = $('wordInput');
  if (btn.dataset.act === 'copy') { copyText(area.value, 'wc_copied'); return; }
  area.value = TEXT_ACTIONS[btn.dataset.act](area.value);
  analyzeText();
}));

/* ================= Tool 4: Image compressor ================= */
let srcImg = null, srcName = 'image', srcSize = 0, origUrl = null, outUrl = null, imgSaved = 0, jobId = 0;
const ALLOWED = ['image/jpeg', 'image/png', 'image/webp'];
const fmtSize = b => (b >= 1048576 ? (b / 1048576).toFixed(2) + ' MB' : (b / 1024).toFixed(1) + ' KB');

function loadImage(file) {
  if (!file || !ALLOWED.includes(file.type)) { toast('im_bad'); return; }
  srcName = file.name.replace(/\.[^.]+$/, '') || 'image';
  srcSize = file.size;
  if (origUrl) URL.revokeObjectURL(origUrl);
  origUrl = URL.createObjectURL(file);

  const img = new Image();
  img.onload = () => {
    srcImg = img;
    $('origImgPreview').src = origUrl;
    $('originalSize').textContent = fmtSize(file.size);
    $('imgSettings').hidden = false;
    compressImage();
  };
  img.onerror = () => toast('im_bad');
  img.src = origUrl;
}

function compressImage() {
  if (!srcImg) return;
  const job = ++jobId;
  const quality = +$('imgQuality').value / 100;
  const type = $('imgFormat').value;
  const maxW = +$('imgWidth').value;

  let w = srcImg.naturalWidth, h = srcImg.naturalHeight;
  if (maxW && w > maxW) { h = Math.round(h * maxW / w); w = maxW; }

  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  if (type === 'image/jpeg') { ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h); }  // avoid black background for transparent PNGs
  ctx.drawImage(srcImg, 0, 0, w, h);

  canvas.toBlob(blob => {
    if (!blob || job !== jobId) return;
    if (outUrl) URL.revokeObjectURL(outUrl);
    outUrl = URL.createObjectURL(blob);
    const ext = blob.type === 'image/webp' ? 'webp' : blob.type === 'image/png' ? 'png' : 'jpg';

    $('compImgPreview').src = outUrl;
    $('compressedSize').textContent = fmtSize(blob.size);
    const dl = $('downloadImgBtn');
    dl.href = outUrl;
    dl.download = srcName + '-compressed.' + ext;

    imgSaved = Math.round((1 - blob.size / srcSize) * 100);
    updateImageInfo();
  }, type, quality);
}

function updateImageInfo() {
  const el = $('imgResult');
  if (!srcImg) { el.textContent = ''; return; }
  el.textContent = imgSaved > 0 ? imgSaved + '% ' + T('im_saved') : T('im_bigger');
}

const dz = $('dropzone');
dz.addEventListener('click', () => $('imgUpload').click());
dz.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); $('imgUpload').click(); }
});
$('imgUpload').addEventListener('change', e => { loadImage(e.target.files[0]); e.target.value = ''; });
['dragenter', 'dragover'].forEach(ev => dz.addEventListener(ev, e => { e.preventDefault(); dz.classList.add('drag'); }));
['dragleave', 'drop'].forEach(ev => dz.addEventListener(ev, e => { e.preventDefault(); dz.classList.remove('drag'); }));
dz.addEventListener('drop', e => loadImage(e.dataTransfer.files[0]));

const debouncedCompress = debounce(compressImage, 200);
$('imgQuality').addEventListener('input', e => { $('qLabel').textContent = e.target.value + '%'; debouncedCompress(); });
$('imgFormat').addEventListener('change', compressImage);
$('imgWidth').addEventListener('change', compressImage);

/* ================= Tool 5: Calculator (safe parser, no eval) ================= */
let calc = '0', justSolved = false;
const OPS = '+-*/';
const showCalc = () => { $('calcScreen').textContent = calc.replace(/\*/g, '×').replace(/\//g, '÷'); };

function evaluate(expr) {
  let i = 0;
  function factor() {
    let neg = false;
    if (expr[i] === '-') { neg = true; i++; }
    const m = /^(\d+\.?\d*|\.\d+)/.exec(expr.slice(i));
    if (!m) throw new Error('syntax');
    i += m[0].length;
    let v = parseFloat(m[0]), pct = false;
    if (expr[i] === '%') { v /= 100; i++; pct = true; }
    return { v: neg ? -v : v, pct };
  }
  function term() {
    const first = factor();
    let v = first.v, pct = first.pct;
    while (expr[i] === '*' || expr[i] === '/') {
      const op = expr[i++];
      const r = factor().v;
      if (op === '/' && r === 0) throw new Error('div0');
      v = op === '*' ? v * r : v / r;
      pct = false;
    }
    return { v, pct };
  }
  let left = term().v;
  while (expr[i] === '+' || expr[i] === '-') {
    const op = expr[i++];
    const r = term();
    const rv = r.pct ? left * r.v : r.v;      // 200+10% = 220
    left = op === '+' ? left + rv : left - rv;
  }
  if (i < expr.length) throw new Error('syntax');
  return left;
}

function solve() {
  const expr = calc.replace(/[-+*/]+$/, '');
  if (!expr || calc === 'Error') return;
  try {
    const res = evaluate(expr);
    if (!isFinite(res) || Math.abs(res) >= 1e15) throw new Error('range');
    $('calcHistory').textContent = expr.replace(/\*/g, '×').replace(/\//g, '÷') + ' =';
    calc = res.toFixed(10).replace(/\.?0+$/, '');
    if (calc === '-0' || calc === '') calc = '0';
    justSolved = true;
  } catch (e) {
    calc = 'Error';
    $('calcHistory').textContent = '';
  }
  showCalc();
}

function calcKey(k) {
  if (k === '=') { solve(); return; }
  if (k === 'AC') {
    calc = '0'; justSolved = false;
    $('calcHistory').textContent = '';
  } else if (k === 'DEL') {
    calc = calc === 'Error' ? '0' : calc.slice(0, -1);
    if (!calc || calc === '-') calc = '0';
    justSolved = false;
  } else {
    if (calc === 'Error') calc = '0';
    const last = calc.slice(-1);
    if (OPS.includes(k)) {
      calc = OPS.includes(last) ? calc.slice(0, -1) + k : calc + k;
      justSolved = false;
    } else if (k === '%') {
      if (/\d$/.test(calc)) calc += '%';
    } else {
      if (justSolved) { calc = '0'; justSolved = false; }
      const cur = calc.split(/[-+*/]/).pop();
      if (k === '.') {
        if (!cur.includes('.') && !cur.endsWith('%')) calc += cur === '' ? '0.' : '.';
      } else if (calc.slice(-1) === '%') {
        return;
      } else {
        calc = cur === '0' ? calc.slice(0, -1) + k : calc + k;
      }
    }
  }
  showCalc();
}

$('calcKeypad').addEventListener('click', e => {
  const b = e.target.closest('[data-k]');
  if (b) calcKey(b.dataset.k);
});
document.addEventListener('keydown', e => {
  if (activeTool !== 'calculator' || e.ctrlKey || e.metaKey || e.altKey) return;
  if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
  const k = e.key;
  if (/^[0-9.+\-*/%]$/.test(k)) calcKey(k);
  else if (k === 'Enter' && e.target.tagName !== 'BUTTON') { e.preventDefault(); calcKey('='); }
  else if (k === '=') calcKey('=');
  else if (k === 'Backspace') calcKey('DEL');
  else if (k === 'Escape') calcKey('AC');
});

/* ================= Init ================= */
applyLang(load('lang') === 'bn' ? 'bn' : 'en');
applyTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
const hash = location.hash.slice(1);
if (hash) switchTool(hash, false);
generateQR(false);
generatePassword();
analyzeText();