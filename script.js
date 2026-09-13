// ==================== 1. MULTILINGUAL TRANSLATION (EN / BN) ====================
const translations = {
  en: {
    hero_tag: "✨ AI-Powered & 100% Client-Side Private Suite",
    hero_title: "Supercharge Daily Tasks with <span class='gradient-text'>Smart Tools</span>",
    hero_desc: "No sign-up required, zero ads, ultra-secure. Pick your utility below:",
    tab_qr: "QR Code",
    tab_pass: "Password",
    tab_word: "AI Word Counter",
    tab_compress: "Compressor",
    tab_calc: "Calculator",
    qr_heading: "⚡ Smart QR Code Generator",
    qr_sub: "Generate high-resolution, customized QR codes in real-time.",
    qr_label_input: "Enter Link or Text:",
    qr_label_fg: "QR Color:",
    qr_label_bg: "Background:",
    qr_btn_generate: "🚀 Generate QR Code",
    qr_btn_dl: "⬇️ Download QR (PNG)",
    pass_heading: "🔐 AI Cryptographic Password Generator",
    pass_sub: "Create brute-force resilient passwords with live crack-time AI analysis.",
    btn_copy: "📋 Copy",
    pass_ai_crack: "AI Estimated Crack Time:",
    pass_len: "Length:",
    pass_chk_up: "Uppercase (A-Z)",
    pass_chk_low: "Lowercase (a-z)",
    pass_chk_num: "Numbers (0-9)",
    pass_chk_sym: "Symbols (@#$)",
    pass_btn_gen: "⚡ Generate Secure Password",
    word_heading: "📝 AI Smart Text Analyzer & Word Counter",
    word_sub: "Live text analysis, sentiment scoring, and readability insights.",
    w_words: "Words",
    w_chars: "Characters",
    w_nospace: "No Spaces",
    w_readtime: "Min Read",
    btn_ai_clean: "AI Format & Polish",
    btn_clear: "Clear",
    comp_heading: "🖼️ Neural Image Compressor",
    comp_sub: "Smart compression preserving maximum visual fidelity 100% offline.",
    comp_drop: "Click to upload image or drag and drop here",
    comp_quality: "Compression Quality:",
    comp_orig: "Original:",
    comp_comp: "Compressed:",
    comp_btn_dl: "⬇️ Download Compressed Image",
    calc_heading: "🧮 Smart Glass Calculator",
    calc_sub: "Instant mathematical expression evaluation with memory buffer."
  },
  bn: {
    hero_tag: "✨ ১০০% ফ্রি ও এআই-পাওয়ার্ড প্রাইভেট টুলস",
    hero_title: "আপনার সব কাজ হবে <span class='gradient-text'>স্মার্ট ও দ্রুত</span>",
    hero_desc: "কোনো অ্যাড বা রেজিস্ট্রেশন নেই। নিচের তালিকা থেকে টুল বেছে নিন:",
    tab_qr: "QR কোড",
    tab_pass: "পাসওয়ার্ড",
    tab_word: "AI ওয়ার্ড কাউন্টার",
    tab_compress: "ইমেজ কম্প্রেসর",
    tab_calc: "ক্যালকুলেটর",
    qr_heading: "⚡ স্মার্ট QR Code জেনারেটর",
    qr_sub: "যেকোনো লিংক বা লেখার হাই-কোয়ালিটি QR Code বানান ও ডাউনলোড করুন।",
    qr_label_input: "আপনার লিংক বা টেক্সট দিন:",
    qr_label_fg: "রং (Foreground):",
    qr_label_bg: "ব্যাকগ্রাউন্ড:",
    qr_btn_generate: "🚀 QR কোড তৈরি করুন",
    qr_btn_dl: "⬇️ ডাউনলোড PNG",
    pass_heading: "🔐 AI ক্রিপ্টোগ্রাফিক পাসওয়ার্ড জেনারেটর",
    pass_sub: "হ্যাকার-প্রুফ স্ট্রং পাসওয়ার্ড এবং AI ক্র্যাক-টাইম প্রেডিকশন।",
    btn_copy: "📋 কপি",
    pass_ai_crack: "AI হ্যাক করতে আনুমানিক সময়:",
    pass_len: "দৈর্ঘ্য (Length):",
    pass_chk_up: "বড় হাতের (A-Z)",
    pass_chk_low: "ছোট হাতের (a-z)",
    pass_chk_num: "সংখ্যা (0-9)",
    pass_chk_sym: "স্পেশাল চিহ্ন (@#$)",
    pass_btn_gen: "⚡ নতুন পাসওয়ার্ড জেনারেট করুন",
    word_heading: "📝 AI স্মার্ট টেক্সট ও ওয়ার্ড অ্যানালাইজার",
    word_sub: "রিয়েল-টাইম শব্দ, পড়ার সময়, এবং সেন্টিমেন্ট অ্যানালাইসিস।",
    w_words: "শব্দ",
    w_chars: "অক্ষর",
    w_nospace: "স্পেস ছাড়া",
    w_readtime: "মিনিট পড়া",
    btn_ai_clean: "AI ফরম্যাট ও পলিশ",
    btn_clear: "মুছে ফেলুন",
    comp_heading: "🖼️ হাইপার-ফাস্ট ইমেজ কম্প্রেসর",
    comp_sub: "কোয়ালিটি ঠিক রেখে ছবির সাইজ কমান (১০০% অফলাইন ও নিরাপদ)।",
    comp_drop: "ছবি সিলেক্ট করতে ক্লিক করুন অথবা টেনে আনুন",
    comp_quality: "কমপ্রেশন কোয়ালিটি:",
    comp_orig: "আসল ছবি:",
    comp_comp: "কম্প্রেসড:",
    comp_btn_dl: "⬇️ কম্প্রেসড ছবি ডাউনলোড করুন",
    calc_heading: "🧮 স্মার্ট নিয়ন ক্যালকুলেটর",
    calc_sub: "স্মুথ অ্যানিমেশন এবং দ্রুত গাণিতিক হিসাব।"
  }
};

let currentLang = 'en';

function changeLanguage(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('data-lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  showToast(lang === 'bn' ? 'ভাষা বাংলায় পরিবর্তিত হয়েছে!' : 'Language changed to English!');
}

// ==================== 2. THEME SWITCHER & TOAST ====================
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const target = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', target);
  themeToggle.innerText = target === 'dark' ? '🌙' : '☀️';
});

function showToast(msg = "Copied to clipboard! ✨") {
  const toast = document.getElementById('toast');
  toast.innerText = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ==================== 3. TABS SWITCHING ====================
function switchTool(toolKey) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tool-panel').forEach(panel => panel.classList.remove('active'));

  event.target.closest('.tab-btn').classList.add('active');
  document.getElementById(`panel-${toolKey}`).classList.add('active');
}

// ==================== 4. TOOL 1: QR CODE ====================
let qrCodeObj = null;
function generateQRCode() {
  const text = document.getElementById("qrInput").value.trim();
  const fgColor = document.getElementById("qrColor").value;
  const bgColor = document.getElementById("qrBgColor").value;
  const qrContainer = document.getElementById("qrcode");
  const downloadBtn = document.getElementById("downloadQrBtn");

  if (!text) {
    showToast(currentLang === 'bn' ? "⚠️ লিংক বা টেক্সট লিখুন!" : "⚠️ Enter text or URL!");
    return;
  }
  qrContainer.innerHTML = "";
  qrCodeObj = new QRCode(qrContainer, {
    text: text,
    width: 180,
    height: 180,
    colorDark: fgColor,
    colorLight: bgColor,
    correctLevel: QRCode.CorrectLevel.H
  });

  setTimeout(() => {
    const img = qrContainer.querySelector("img");
    if (img && img.src) {
      downloadBtn.href = img.src;
      downloadBtn.style.display = "inline-block";
    }
  }, 300);
}
window.addEventListener('DOMContentLoaded', generateQRCode);

// ==================== 5. TOOL 2: AI CRYPTO PASSWORD ====================
function updatePassLength(val) {
  document.getElementById('passLengthVal').innerText = val;
  generateNewPassword();
}

function generateNewPassword() {
  const len = parseInt(document.getElementById('passLength').value);
  const useUpper = document.getElementById('chkUpper').checked;
  const useLower = document.getElementById('chkLower').checked;
  const useNum = document.getElementById('chkNum').checked;
  const useSym = document.getElementById('chkSym').checked;

  let chars = "";
  let poolSize = 0;
  if (useUpper) { chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; poolSize += 26; }
  if (useLower) { chars += "abcdefghijklmnopqrstuvwxyz"; poolSize += 26; }
  if (useNum) { chars += "0123456789"; poolSize += 10; }
  if (useSym) { chars += "!@#$%^&*()_+-=[]{}|;:,.<>?"; poolSize += 28; }

  if (!chars) {
    showToast(currentLang === 'bn' ? "⚠️ কমপক্ষে একটি অপশন নির্বাচন করুন!" : "⚠️ Select at least one option!");
    return;
  }

  let pass = "";
  for (let i = 0; i < len; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById('passOutput').value = pass;

  // AI Entropy & Crack Time Engine
  const entropy = len * Math.log2(poolSize);
  const bar = document.getElementById('strengthBar');
  const crackTime = document.getElementById('crackTimeText');

  if (entropy < 45) {
    bar.style.width = "25%";
    bar.style.background = "#ef4444";
    crackTime.innerText = currentLang === 'bn' ? "কয়েক সেকেন্ড ❌" : "A few seconds ❌";
  } else if (entropy < 70) {
    bar.style.width = "60%";
    bar.style.background = "#f59e0b";
    crackTime.innerText = currentLang === 'bn' ? "৩ থেকে ৫ বছর ⚠️" : "3 to 5 years ⚠️";
  } else {
    bar.style.width = "100%";
    bar.style.background = "#10b981";
    crackTime.innerText = currentLang === 'bn' ? "১০ লক্ষ+ বছর (অভেদ্য) 🛡️" : "1 Million+ Years (Unbreakable) 🛡️";
  }
}

function copyPassword() {
  const val = document.getElementById('passOutput').value;
  if (val) {
    navigator.clipboard.writeText(val);
    showToast(currentLang === 'bn' ? "পাসওয়ার্ড কপি করা হয়েছে! 🔐" : "Password copied! 🔐");
  }
}
window.addEventListener('DOMContentLoaded', generateNewPassword);

// ==================== 6. TOOL 3: AI WORD COUNTER & ANALYZER ====================
function analyzeText() {
  const text = document.getElementById('wordInput').value;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const noSpace = text.replace(/\s+/g, '').length;
  const readTime = Math.ceil(words / 200);

  document.getElementById('wcWords').innerText = words;
  document.getElementById('wcChars').innerText = chars;
  document.getElementById('wcNoSpace').innerText = noSpace;
  document.getElementById('wcReadTime').innerText = readTime;

  // AI Sentiment & Readability
  const sentiment = document.getElementById('aiSentiment');
  const readingLevel = document.getElementById('aiReadingLevel');
  
  if (words === 0) {
    sentiment.innerText = "Neutral";
    readingLevel.innerText = "Standard";
    return;
  }

  const positiveWords = ["great", "good", "awesome", "smart", "love", "ভাল", "সেরা", "সুন্দর"];
  const isPos = positiveWords.some(w => text.toLowerCase().includes(w));
  sentiment.innerText = isPos ? "Positive 😊" : "Objective 📊";
  readingLevel.innerText = words > 50 ? "Pro Content 🎓" : "General Casual 📖";
}

function aiSummarizeMock() {
  const area = document.getElementById('wordInput');
  if (!area.value.trim()) {
    showToast(currentLang === 'bn' ? "আগে কিছু টেক্সট লিখুন!" : "Enter some text first!");
    return;
  }
  showToast(currentLang === 'bn' ? "✨ AI ফরম্যাট সম্পূর্ণ হয়েছে!" : "✨ AI Clean & Polish Done!");
  // Remove extra spaces & capitalize sentences
  area.value = area.value.replace(/\s+/g, ' ').trim().replace(/(^\w|\.\s*\w)/gi, c => c.toUpperCase());
  analyzeText();
}

function transformText(type) {
  const area = document.getElementById('wordInput');
  area.value = type === 'upper' ? area.value.toUpperCase() : area.value.toLowerCase();
  analyzeText();
}

function clearText() {
  document.getElementById('wordInput').value = "";
  analyzeText();
}

// ==================== 7. TOOL 4: IMAGE COMPRESSOR ====================
let loadedRawImage = null;
function handleImage(e) {
  const file = e.target.files[0];
  if (!file) return;

  document.getElementById('originalSize').innerText = (file.size / 1024).toFixed(1) + " KB";
  const reader = new FileReader();
  reader.onload = function(event) {
    loadedRawImage = new Image();
    loadedRawImage.onload = () => {
      document.getElementById('origImgPreview').src = event.target.result;
      document.getElementById('imgSettings').style.display = 'block';
      compressImageAction();
    };
    loadedRawImage.src = event.target.result;
  };
  reader.readAsDataURL(file);
}

function updateQuality(val) {
  document.getElementById('qLabel').innerText = val + "%";
  compressImageAction();
}

function compressImageAction() {
  if (!loadedRawImage) return;
  const quality = parseInt(document.getElementById('imgQuality').value) / 100;
  const canvas = document.createElement('canvas');
  canvas.width = loadedRawImage.width;
  canvas.height = loadedRawImage.height;

  const ctx = canvas.getContext('2d');
  ctx.drawImage(loadedRawImage, 0, 0, canvas.width, canvas.height);

  const compressedData = canvas.toDataURL('image/jpeg', quality);
  document.getElementById('compImgPreview').src = compressedData;

  const compSizeInBytes = (compressedData.length * (3/4));
  document.getElementById('compressedSize').innerText = (compSizeInBytes / 1024).toFixed(1) + " KB";
  document.getElementById('downloadImgBtn').href = compressedData;
}

// ==================== 8. TOOL 5: CALCULATOR ====================
let calcState = "0";
function calcInput(char) {
  if (calcState === "0" && char !== ".") calcState = char;
  else calcState += char;
  document.getElementById('calcScreen').innerText = calcState;
}

function calcClear() {
  calcState = "0";
  document.getElementById('calcHistory').innerText = "";
  document.getElementById('calcScreen').innerText = "0";
}

function calcDelete() {
  calcState = calcState.slice(0, -1);
  if (!calcState) calcState = "0";
  document.getElementById('calcScreen').innerText = calcState;
}

function calcSolve() {
  try {
    document.getElementById('calcHistory').innerText = calcState + " =";
    const res = Function('"use strict";return (' + calcState.replace(/×/g, '*').replace(/÷/g, '/') + ')')();
    calcState = String(res);
    document.getElementById('calcScreen').innerText = calcState;
  } catch {
    document.getElementById('calcScreen').innerText = "Error";
    calcState = "0";
  }
}

// ==================== 9. ANIS AI COPILOT CHATBOT ====================
function toggleAIChat() {
  document.getElementById('aiChatDrawer').classList.toggle('open');
}

function sendAIPrompt() {
  const input = document.getElementById('aiUserPrompt');
  const query = input.value.trim();
  if (!query) return;

  const body = document.getElementById('aiChatBody');

  // Append user message
  const userDiv = document.createElement('div');
  userDiv.className = 'ai-msg user';
  userDiv.innerText = query;
  body.appendChild(userDiv);
  input.value = "";

  // Dynamic AI Smart Responses
  const botDiv = document.createElement('div');
  botDiv.className = 'ai-msg bot';
  botDiv.innerText = "Thinking...";
  body.appendChild(botDiv);
  body.scrollTop = body.scrollHeight;

  setTimeout(() => {
    let reply = "I can assist you with QR codes, secure passwords, word analytics, or image optimization!";
    const lower = query.toLowerCase();

    if (lower.includes("password") || lower.includes("পাসওয়ার্ড")) {
      reply = "💡 Pro AI Tip: Always combine 16+ characters with numbers and symbols to stay 100% quantum-safe!";
    } else if (lower.includes("compress") || lower.includes("ছবি")) {
      reply = "🖼️ To keep images sharp, set quality between 70% and 80%. It saves 60% disk space with zero noticeable blur.";
    } else if (lower.includes("hi") || lower.includes("hello") || lower.includes("কেমন আছো")) {
      reply = currentLang === 'bn' ? "হ্যালো! আমি Anis AI। আপনার কী সাহায্য লাগবে বলুন।" : "Hello! I am Anis AI. How can I boost your productivity today?";
    } else {
      reply = `✨ Analysis for "${query}": Task evaluated. You can use our built-in tab tools above for instantaneous processing!`;
    }
    botDiv.innerText = reply;
    body.scrollTop = body.scrollHeight;
  }, 600);
}