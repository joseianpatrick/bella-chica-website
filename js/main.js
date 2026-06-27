/* =========================================================
   Bella Chica Beauty Studio – Solano
   Service menu data + rendering
   Row format: [label, price, type]
     type: ''  = service item
           'h' = sub-heading
           's' = indented sub-line
   ========================================================= */

const SERVICE_CATEGORIES = [
  { name: 'SPMU Services', rows: [
    ['Basic (for 2 sessions)', '', 'h'],
    ['6D Microblading', '₱1,999'],
    ['Combo Brows', '₱2,599'],
    ['Lips Micropigmentation', '₱2,999'],
    ['Top Liner', '₱1,499'],
    ['Advanced (for 2 sessions)', '', 'h'],
    ['Sexy Brows', '₱2,999'],
    ['Ombre Brows', '₱3,999'],
    ['Men Brows', '₱2,999'],
    ['Winged Eyeliner', '₱1,999'],
    ['Winged Eyeliner Dusty', '₱2,499'],
    ['Cheek Blush', '₱2,499'],
    ['Ombre Lips', '₱3,999']
  ]},
  { name: 'Facial Care', rows: [
    ['Basic Facial', '₱299'],
    ['Deep Cleansing, per session', '₱399'],
    ['For 6 sessions', '₱2,000', 's'],
    ['Diamond Facial Peel + PDT', '₱499'],
    ['For 6 sessions', '₱2,500', 's'],
    ['BB Glass / Glow, per session', '₱999'],
    ['For 6 sessions', '₱4,500', 's'],
    ['BB Blush, per session', '₱499'],
    ['Hollywood Black Doll Laser', '₱999'],
    ['For 6 sessions', '₱4,500', 's'],
    ['Hydra Oxygen Facial', '₱999'],
    ['For 6 sessions', '₱4,500', 's'],
    ['HIFU', '', 'h'],
    ['Face', '₱2,499', 's'],
    ['Double Chin', '₱1,499', 's'],
    ['Face & Chin', '₱2,999', 's'],
    ['Upper Arms', '₱3,999', 's'],
    ['Microneedling, per session', '₱1,499'],
    ['For 6 sessions', '₱7,499', 's'],
    ['Hydradermabrasion Face', '₱1,199'],
    ['Face & Neck, per session', '₱1,499', 's']
  ]},
  { name: 'Premium Services', rows: [
    ['Noselift', '', 'h'],
    ['Package 1 — Fillers & Threads', '₱11,999', 's'],
    ['Package 2 — Fillers, Threads & Botox', '₱14,999', 's'],
    ['Other Premium Services', '', 'h'],
    ['Facelift, Femilift or Vaginoplasty', '', 's'],
    ['Eyebag & Wrinkle Reduction', '', 's'],
    ['Botox, Barbie Arms', '', 's'],
    ['Lip Augmentation', '', 's']
  ]},
  { name: 'Slimming Services', rows: [
    ['Radio Frequency / Lipo Cavitation', '₱349'],
    ['For 12 sessions', '₱3,500', 's'],
    ['Meso Lipo — Tummy or Arms', '₱2,499'],
    ['Mesotherapy — Tummy or Arms', '₱2,999'],
    ['Mesotherapy — Double Chin', '₱1,999']
  ]},
  { name: 'Eye Care', rows: [
    ['Eye Bag Treatment, per session', '₱399'],
    ['For 12 sessions', '₱4,000', 's'],
    ['Eyelash Lift', '₱499'],
    ['Lift with tint', '₱599', 's'],
    ['Eyelash Extensions', '', 'h'],
    ['Natural / Classic', '₱499', 's'],
    ['Full / Volume', '₱599', 's'],
    ['Cat / Doll Eye / Wispy', '₱699', 's'],
    ['Eyebrow Threading', '₱150']
  ]},
  { name: 'Underarm Care', rows: [
    ['Carbon Peel Laser, per session', '₱999'],
    ['For 6 sessions', '₱4,500', 's'],
    ['IPL Hair Removal / Whitening', '', 'h'],
    ['Per session (removal / whitening)', '₱349', 's'],
    ['Package 1 — 12 sessions (10 removal & 4 whitening)', '₱3,500', 's'],
    ['Package 2 — 10 sessions (10 removal, 4 whitening + 5 UA DP)', '₱3,500', 's']
  ]},
  { name: 'Waxing Services', rows: [
    ['Brazilian', '₱799'],
    ['Half / Full Legs', '₱399 / ₱799'],
    ['Arms', '₱399'],
    ['Underarms', '₱199'],
    ['Eyebrow / Upper & Lower Lip', '₱199']
  ]},
  { name: 'Lip Care', rows: [
    ['Lip Toning / Plumping, per session', '₱599'],
    ['Package — 6 sessions', '₱2,999', 's']
  ]},
  { name: 'Other Services', rows: [
    ['Tattoo Removal (2x2 in, 2 sessions)', '₱2,500'],
    ['Warts Removal, per piece (big)', '₱299'],
    ['Per area (Face or Neck, except big warts)', '₱599', 's'],
    ['Unlimited (Face & Neck, incl. big warts)', '₱1,500', 's'],
    ['Milia Removal — starts at', '₱150'],
    ['Syringoma Removal — starts at', '₱1,999'],
    ['Pimple Inject — starts at', '₱150']
  ]}
];

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function rowHtml(row) {
  const label = row[0];
  const price = row[1] || '';
  const type = row[2] || '';
  const classes = ['svc-row'];
  if (type === 'h') classes.push('is-head');
  if (type === 's') classes.push('is-sub');
  if (!price) classes.push('no-price');
  const priceHtml = price ? `<span class="svc-price">${escapeHtml(price)}</span>` : '';
  return `<div class="${classes.join(' ')}"><span class="svc-label">${escapeHtml(label)}</span>${priceHtml}</div>`;
}

function cardHtml(cat) {
  const rows = cat.rows.map(rowHtml).join('');
  return `<div class="service-card">
    <h3>${escapeHtml(cat.name)}</h3>
    <div class="card-rule"></div>
    ${rows}
  </div>`;
}

function renderServices() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;
  grid.innerHTML = SERVICE_CATEGORIES.map(cardHtml).join('');
}

document.addEventListener('DOMContentLoaded', renderServices);
