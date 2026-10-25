'use strict';

// Product photos, shopping URLs, and personal experiences retained from J's existing site.
const products = [
{"id":"vitamin-b12","category":"wellness","need":"routine","name":"365 Vitamin B12","kicker":"PART OF MY MORNING ROUTINE","tag":"J’s morning routine","image":"vitamin-b12.jpg","info":"365 by Whole Foods Market. Vitamin B12 500 mcg lozenges, natural cherry flavor, vegan, 100 count. Check the full label for ingredients and directions.","teaser":"I usually take these in the morning with my first round of supplements. They work fine for me.","use":"I use these in the mornings, usually with my first dose of supplements.","pros":["They fit into my morning routine."],"know":"The bottle says 500 mcg, which is 0.5 mg. This is the product strength, not a recommended dose for everyone. Follow the label and ask a clinician about your needs.","take":"It works fine for me. My experience is personal and may differ from yours.","url":"https://amzn.to/3W7VuoO","reviewPage":"vitamin-b12-review.html"},
{"id":"lions-mane","category":"wellness","need":"routine","name":"Horbäach Lion’s Mane","kicker":"PART OF MY WELLNESS ROUTINE","tag":"About 3 years of use","image":"lions-mane.jpg","info":"Lion’s mane mushroom extract supplement. 80 softgels; labeled non-GMO and gluten free. The front says 3000 mg equivalent; check Supplement Facts for the actual serving and extract amount.","teaser":"I’ve used this for about three years. I felt I noticed changes over time, while also taking other supplements.","use":"I’ve used lion’s mane for about three years. During that time, I felt my memory improved a little, noticed I wasn’t getting colds as easily, and felt my allergy symptoms improved. I was also taking other supplements, so I can’t say which changes came from lion’s mane.","pros":["These personal observations are why I keep taking it.","I think the price is good; current prices vary."],"know":"These observations do not establish that lion’s mane prevents colds, treats allergies, diabetes, or improves memory. Other supplements and factors may have contributed. Possible side effects include stomach discomfort, nausea and rash; consult a clinician about medicines and suitability.","take":"These are my own observations, and they’re why I keep taking it. Individual experiences vary.","url":"https://amzn.to/4zwATsW","reviewPage":"lions-mane-review.html"},
  {
    id: 'tire-inflator', category: 'wheels', need: 'essentials', name: 'Portable tire inflator', kicker: 'READY WHEN YOU NEED IT', tag: 'About 6 months of use', image: 'tire-inflator.jpg',
    info: 'A portable air pump for compatible tires and inflatables. Check the included adapters and operating instructions for your needs.',
    teaser: 'I carry it in my backpack every day. The portability is the biggest plus for me.',
    use: 'I use it for my car tires, footballs, and the wheels on my two-wheeler. I’ve used it for about six months.',
    pros: ['Small enough to carry in my backpack.', 'Useful for more than just my car tires.'],
    know: 'It can get pretty hot when I use it a lot. Follow the manufacturer’s instructions, including any recommended duty cycle and cool-down time.',
    take: 'I keep carrying it because having a small inflator with me is convenient.', url: 'https://amzn.to/4xGLPDA', reviewPage: 'tire-inflator-review.html'
  },
  {
    id: 'seat-covers', category: 'wheels', need: 'comfort', name: 'Seat covers', kicker: 'A SIMPLE INTERIOR REFRESH', tag: 'Recently purchased', image: 'seat-covers.jpg', lowRes: true,
    info: 'Covers for your vehicle’s seats. Check the listing for vehicle fit, material, installation, and airbag compatibility.',
    teaser: 'I bought these to replace my old seat covers. They’re comfortable, and I’d buy them again.',
    use: 'I recently replaced my old seat covers with this set.',
    pros: ['I find them comfortable.', 'I like the flexible fit, breathable material, and water resistance.'],
    know: 'My experience is with my own seats. Check compatibility with your vehicle before buying.',
    take: 'Yes, I would buy them again.', url: 'https://amzn.to/46SUYx4'
  },
  {
    id: 'febreze', category: 'wheels', need: 'comfort', name: 'Febreze Auto vent clips', kicker: 'KEEP THE CAR FEELING FRESH', tag: 'Used for years', image: 'febreze.jpg',
    info: 'Small fragrance clips that attach to a car’s air vents. See the listing for scent choices, pack size, and directions.',
    teaser: 'I especially like these in cooler weather. Summer heat makes them disappear faster for me.',
    use: 'I’ve used these for years as part of my routine for keeping the car smelling fresh, especially during colder months.',
    pros: ['Easy to use and small enough to stay out of the way.', 'Lots of scent choices.', 'They work well for me at keeping the car smelling fresh.'],
    know: 'In hot summer weather, they don’t last as long for me. The liquid seems to evaporate faster in the heat.',
    take: 'I keep buying them, especially when the weather is cooler. My rating: 4 out of 5.', url: 'https://amzn.to/3VeN26Z'
  },
  {
    id: 'little-trees', category: 'wheels', need: 'comfort', name: 'Little Trees Black Ice', kicker: 'MY WARM-WEATHER PICK', tag: 'A summer favorite', image: 'little-trees.webp',
    info: 'Hanging car air fresheners in the Black Ice scent. Check the selected pack size and follow the package directions.',
    teaser: 'These don’t contain liquid, and they last longer for me in the summer.',
    use: 'I use these to keep my car smelling fresh, especially during the summer.',
    pros: ['Simple to use.', 'No liquid.', 'They last longer for me in hot weather.'],
    know: 'Scent preference and how long it lasts can vary. I like buying packs of six or more.',
    take: 'I continue to use them, especially when the weather is hot.', url: 'https://amzn.to/4dLPg3X'
  },
  {
    id: 'microfiber', category: 'wheels', need: 'care', name: 'Meguiar’s microfiber towels', kicker: 'KEEP IT CLEAN', tag: 'Part of my car-care routine', image: 'microfiber.jpg',
    info: 'Microfiber towels for cleaning and drying vehicle surfaces. Check the product’s care and washing instructions.',
    teaser: 'They absorb water well for me. I keep one for the interior and one for the exterior.',
    use: 'I use these for cleaning my car and its windows as part of my regular vehicle-care routine.',
    pros: ['They absorb water well.', 'They help me clean windows without leaving stains.', 'Practical for my regular cleaning routine.'],
    know: 'I keep separate towels for the interior and exterior. Follow the towel’s care instructions.',
    take: 'Simple, useful towels that do the job I need. I keep using them.', url: 'https://amzn.to/4dTYvz1'
  },
  {
    id: 'vrp', category: 'wheels', need: 'care', name: 'Chemical Guys VRP', kicker: 'TIRES & TRIM', tag: '5+ years of use', image: 'vrp.jpg', lowRes: true,
    info: 'A vinyl, rubber, and plastic detailing product. Follow the label for suitable surfaces and application directions.',
    teaser: 'I like the creamy texture and how it holds up on my tires. I’ve used it for over five years.',
    use: 'I use Chemical Guys VRP on my tires and plastic parts inside and outside my vehicle. I’ve used it for over five years.',
    pros: ['I like the creamy texture.', 'I like how it holds up on my tires.'],
    know: 'I recommend gloves for application. Check the label for surfaces it can be used on.',
    take: 'It’s a product I continue to use in my own car-care routine.', url: 'https://amzn.to/3Twjpxc'
  },
  {
    id: 'detailing-spray', category: 'wheels', need: 'care', name: 'Meguiar’s detailing spray', kicker: 'THE FINISHING TOUCH', tag: 'Part of my paint-care routine', image: 'detailing-spray.jpg', lowRes: true,
    info: 'A detailing spray for vehicle paint care. Check the exact formula and directions on the product listing and label.',
    teaser: 'I use it as part of my paint-care routine. I like the shine it gives my car.',
    use: 'I use this as part of my paint-care routine because I like the shine and added protection it gives my vehicle’s finish.',
    pros: ['I like the shine on my car.', 'It fits into my own paint-care routine.'],
    know: 'Follow the product label and check the exact formula before using it on your vehicle’s finish.',
    take: 'This is my experience with my own car. Choose what suits your vehicle and care routine.', url: 'https://amzn.to/4ryrZYQ'
  },
  {
    id: 'ashwagandha', category: 'wellness', need: 'routine', name: 'Ashwagandha', kicker: 'PART OF MY DAILY ROUTINE', tag: '5+ years · still using', image: 'ashwagandha.jpg', lowRes: true,
    info: 'An ashwagandha dietary supplement. Check the product label for ingredients, serving directions, and suitability.',
    teaser: 'I’ve included it in my everyday wellness routine for more than five years, and I still use it.',
    use: 'I include ashwagandha in my everyday routine. I’ve used it for more than five years and continue to use it.',
    pros: ['It’s a familiar part of my own routine.', 'I’ve continued to choose it over the years.'],
    know: 'My experience does not establish a health benefit or guarantee a result. Ask a doctor or pharmacist about suitability and interactions.',
    take: 'I’m sharing something I personally use. What works for me may not work the same way for you.', url: 'https://amzn.to/4dYuPkk'
  },
  {
    id: 'ginseng-ginkgo', category: 'wellness', need: 'routine', name: 'Panax Ginseng & Ginkgo', kicker: 'A FAMILIAR WELLNESS PICK', tag: '5+ years · still using', image: 'ginseng-ginkgo.jpg', lowRes: true,
    info: 'A dietary supplement combining Panax ginseng and ginkgo. Check the label for ingredients and serving directions.',
    teaser: 'This combination fits into my everyday routine. I’ve used it for more than five years.',
    use: 'I include this combination because it fits easily into my everyday wellness routine. I’ve used it for more than five years and continue to use it.',
    pros: ['It fits into my personal daily routine.', 'I’ve continued to use the combination over time.'],
    know: 'Personal use is not evidence of a health benefit. Check the label and ask a doctor or pharmacist about suitability and interactions.',
    take: 'It’s one of my own picks, not a promise about what it will do for someone else.', url: 'https://amzn.to/4yVW4nJ'
  },
  {
    id: 'turmeric-ginger', category: 'wellness', need: 'routine', name: 'Turmeric & Ginger', kicker: 'AN EVERYDAY WELLNESS PICK', tag: '5+ years · still using', image: 'turmeric-ginger.jpg', lowRes: true,
    info: 'A dietary supplement combining turmeric and ginger. Check the label for ingredients, serving directions, and suitability.',
    teaser: 'I’ve kept turmeric and ginger in my routine for more than five years and continue to use them.',
    use: 'I include turmeric and ginger in my everyday routine. I’ve used them for more than five years and continue to use them.',
    pros: ['A familiar combination in my own routine.', 'Something I have continued to use over the years.'],
    know: 'My experience does not guarantee results. Supplements may interact with medicines or health conditions; ask a doctor or pharmacist.',
    take: 'We’re all different. Read the label and decide what makes sense for you with appropriate professional guidance.', url: 'https://amzn.to/4z4uchx'
  }
];

const categories = {
  wheels: { title: 'Wheels', note: 'Useful finds for your car.', filters: [['all', 'All picks'], ['essentials', 'Car essentials'], ['care', 'Car care'], ['comfort', 'Fresh & comfortable']] },
  wellness: { title: 'Everyday Wellness', note: 'Part of J’s everyday routine.', filters: [['all', 'All picks'], ['routine', 'Daily routine']] }
};
const state = { category: 'wheels', filter: 'all', query: '', openReviews: new Set() };
const grid = document.getElementById('product-grid');
const search = document.getElementById('product-search');
const escapeText = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const chevron = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
const externalIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6m0-6L10 14"/><path d="M10 4H4v16h16v-6"/></svg>';

function productCard(product) {
  const p = Object.fromEntries(Object.entries(product).map(([key,value]) => [key, typeof value === 'string' ? escapeText(value) : value]));
  return `<article class="product-card" id="product-${p.id}" aria-labelledby="name-${p.id}">
    <div class="product-visual"><span class="product-tag">${p.tag}</span><img src="assets/${p.image}" alt="${p.name}" loading="lazy" ${p.lowRes ? 'class="low-res"' : ''}></div>
    <div class="product-body"><p class="product-kicker">${p.kicker}</p><h3 id="name-${p.id}">${p.name}</h3>
    <p class="product-info"><span class="info-label">GENERAL PRODUCT INFORMATION</span>${p.info}</p>
    <details class="review" data-review-id="${p.id}" ${state.openReviews.has(product.id) ? 'open' : ''}><summary aria-label="J’s review of ${p.name}">
      <span class="review-top"><span>J’s review <span aria-hidden="true">·</span> Personal experience</span>${chevron}</span><span class="review-teaser">${p.teaser}</span>
      <span class="review-toggle when-closed">Read my full review</span><span class="review-toggle when-open">Close my full review</span>
    </summary><div class="review-content">
      ${p.reviewPage ? `<p><a href="${p.reviewPage}">Read J’s full review &amp; product information →</a></p>` : ''}<h4>How I use it</h4><p>${p.use}</p><h4>What I like</h4><ul>${product.pros.map(value=>`<li>${escapeText(value)}</li>`).join('')}</ul>
      <h4>What to know</h4><p>${p.know}</p><h4>My take</h4><p>${p.take}</p><p class="review-source">J’s own experience. Everyone is different; your experience may vary.</p>
    </div></details>
    <a class="button primary shopping-button" href="${p.url}" target="_blank" rel="sponsored noopener noreferrer" aria-label="View ${p.name} on Amazon, opens in a new tab">View on Amazon ${externalIcon}</a>
    <p class="paid-note">Paid link · Price & details on Amazon</p></div></article>`;
}

function renderProducts() {
  const query = state.query.trim().toLocaleLowerCase();
  const visible = products.filter(p => p.category === state.category && (state.filter === 'all' || p.need === state.filter) && (!query || `${p.name} ${p.info} ${p.teaser} ${p.kicker} ${p.tag} ${p.use} ${p.pros.join(' ')} ${p.know}`.toLocaleLowerCase().includes(query)));
  grid.innerHTML = visible.map(productCard).join('');
  const total = products.filter(p => p.category === state.category).length;
  document.getElementById('result-count').textContent = `${visible.length} of ${total} ${categories[state.category].title.toLowerCase()} picks`;
  document.getElementById('empty-state').hidden = visible.length !== 0;
  grid.querySelectorAll('details').forEach(details => details.addEventListener('toggle', () => {
    if (details.open) state.openReviews.add(details.dataset.reviewId);
    else state.openReviews.delete(details.dataset.reviewId);
  }));
}

function renderFilters() {
  const filters = document.getElementById('filters');
  filters.innerHTML = categories[state.category].filters.map(([id,label]) => `<button class="filter" data-filter="${id}" aria-pressed="${state.filter === id}">${label}</button>`).join('');
  filters.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
    state.filter = button.dataset.filter;
    filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    renderProducts();
  }));
}

function chooseCategory(category, { updateHash = true, scroll = false } = {}) {
  if (!categories[category]) return;
  state.category = category; state.filter = 'all'; state.query = ''; search.value = '';
  document.querySelectorAll('[role="tab"]').forEach(button => {
    const active = button.dataset.category === category;
    button.setAttribute('aria-selected', String(active)); button.tabIndex = active ? 0 : -1;
  });
  document.querySelectorAll('[data-category-link]').forEach(link => {
    if (link.dataset.categoryLink === category) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  });
  document.getElementById('product-panel').setAttribute('aria-labelledby', `tab-${category}`);
  document.getElementById('collection-note').textContent = categories[category].note;
  document.getElementById('wellness-note').hidden = category !== 'wellness';
  search.placeholder = category === 'wheels' ? 'Find a car essential…' : 'Find a wellness pick…';
  renderFilters(); renderProducts();
  if (updateHash && location.hash !== `#${category}`) history.pushState(null, '', `#${category}`);
  if (scroll) document.getElementById('picks').scrollIntoView({block:'start'});
}

document.querySelectorAll('[role="tab"]').forEach(button => {
  button.addEventListener('click', () => chooseCategory(button.dataset.category, {scroll: window.scrollY > document.getElementById('picks').offsetTop}));
  button.addEventListener('keydown', event => {
    if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
    event.preventDefault();
    const category = event.key === 'Home' ? 'wheels' : event.key === 'End' ? 'wellness' : state.category === 'wheels' ? 'wellness' : 'wheels';
    chooseCategory(category); document.getElementById(`tab-${category}`).focus();
  });
});
document.querySelectorAll('a[href="#wheels"], a[href="#wellness"]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault(); chooseCategory(link.getAttribute('href').slice(1), {scroll: true});
}));
search.addEventListener('input', () => { state.query = search.value; renderProducts(); });
document.getElementById('reset-search').addEventListener('click', () => {
  state.query = ''; state.filter = 'all'; search.value = ''; renderFilters(); renderProducts(); search.focus();
});
window.addEventListener('hashchange', () => {
  const category = location.hash.slice(1);
  if (categories[category]) chooseCategory(category, { updateHash: false, scroll: true });
});
const initialCategory = location.hash.slice(1);
chooseCategory(categories[initialCategory] ? initialCategory : 'wheels', {updateHash: false});
if (categories[initialCategory]) requestAnimationFrame(() => document.getElementById('picks').scrollIntoView({block:'start'}));

// Preserve every original deep link, including links arriving from search engines.
function revealOriginalAnchor(){const id=decodeURIComponent(location.hash.slice(1));if(!id||id==='wellness'||id==='wheels')return;const target=document.getElementById(id);const archive=document.getElementById('original-content');if(target&&archive.contains(target)){archive.open=true;requestAnimationFrame(()=>target.scrollIntoView({block:'start'}));}}
window.addEventListener('hashchange',revealOriginalAnchor);revealOriginalAnchor();
