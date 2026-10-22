// Builds the SamNoor Hijab and Abaya wholesale catalogues (HTML + PDF) from the
// site's own content files, so names, specs, MOQs and photos match samnoor.in.
//   node catalogues/build.cjs
// Prices come from ./pricing.cjs (indicative ranges — the site lists no prices).

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const OUT = __dirname;
const { createJiti } = require(path.join(ROOT, "node_modules/jiti"));
const jiti = createJiti(__filename, { alias: { "@": path.join(ROOT, "src") } });
const { categories } = jiti(path.join(ROOT, "src/content/categories.ts"));
const { products } = jiti(path.join(ROOT, "src/content/products.ts"));
const { fabrics } = jiti(path.join(ROOT, "src/content/fabrics.ts"));
const { siteConfig } = jiti(path.join(ROOT, "src/lib/site-config.ts"));
const P = require("./pricing.cjs");

const cat = (slug) => categories.find((c) => c.slug === slug);
const prodsOf = (slug) => products.filter((p) => p.categorySlug === slug);
const fabric = (slug) => fabrics.find((f) => f.slug === slug);

// Catalogue-wide order terms. These override the per-style minimums written
// into the site copy, which is rewritten below so the text never contradicts them.
const MOQ = "25 pieces per pattern per colour";
const SAMPLE = "₹3,000 flat per sample";
const LOGO = "../Assets/logonew.png";

const fixMoq = (t) =>
  String(t ?? "")
    .replace(/(Pantone matching (?:is )?available) (?:from|at) [\d,]+ pieces per colou?r/gi, "$1 on request")
    .replace(/&mdash; [\d,]+ pieces per colou?r &mdash;/g, `&mdash; ${MOQ} &mdash;`)
    .replace(/\b(from|at) \d+ to \d+ (?:pieces|units) per \w+/gi, `$1 ${MOQ}`)
    .replace(/\b(from|at) [\d,]+ (pieces|units|sets) per (?:colou?r|design|print|colorway)(?:\/size run)?/gi, (_, w, unit) => `${w} 25 ${unit === "sets" ? "sets" : "pieces"} per pattern per colour`)
    .replace(/50-unit hand-embellished minimums/g, "hand-embellished pricing")
    .replace(/ordering 500 pieces or 50,000/g, "ordering 25 pieces or 50,000")
    .replace(/a 500-piece minimum/g, "a bulk-volume minimum");

for (const c of categories) {
  c.description = fixMoq(c.description);
  c.content = fixMoq(c.content);
  for (const s of c.subcategories || []) {
    s.description = fixMoq(s.description);
    s.shortDescription = fixMoq(s.shortDescription);
  }
}
for (const p of products) {
  p.description = fixMoq(p.description);
  p.moq = MOQ;
}

// ------------------------------------------------------------------ helpers
const esc = (s) =>
  String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Only local photos are used — remote stock fallbacks are skipped so the PDF
// never depends on the network and every image is a SamNoor asset.
const localImgs = (imgs) => imgs.filter((i) => i.src.startsWith("/") && fs.existsSync(path.join(ROOT, "public", i.src)));
const imgUrl = (src) => "../public" + src;

const inr = (n) => "₹" + Math.round(n).toLocaleString("en-IN");
const usd = (n) => "$" + (n / P.INR_PER_USD).toFixed(2);
const r5 = (n) => (n >= 1000 ? Math.round(n / 10) * 10 : Math.round(n / 5) * 5);

const SWATCH = {
  Emerald: "#175f4c", Sand: "#d9c7a3", Charcoal: "#4a4a4a", Bronze: "#8c6239", Ivory: "#f0e9db",
  Olive: "#6b6f52", Graphite: "#3b3d40", "Warm Sand": "#cdb38f", Black: "#1a1a1a", "Dusty Rose": "#c98f8f",
  Sage: "#9caf88", Leopard: "repeating-radial-gradient(circle at 30% 30%, #3a2a1a 0 2px, #c8955a 2px 6px)",
  "Tiger Stripe": "repeating-linear-gradient(60deg, #1f1a14 0 3px, #d0802c 3px 8px)",
  Zebra: "repeating-linear-gradient(60deg, #111 0 3px, #f4f4f4 3px 7px)",
  "Seasonal Print Range": "conic-gradient(#175f4c, #c98f8f, #cdb787, #202a44, #175f4c)",
  "Bronze to Ivory": "linear-gradient(135deg, #8c6239, #f0e9db)",
  "Emerald to Ivory": "linear-gradient(135deg, #175f4c, #f0e9db)",
};
const swatches = (colors) =>
  `<div class="swatches">${colors
    .map((c) => {
      const bg = c.hex || SWATCH[c.name] || "#ccc";
      return `<span class="sw"><i style="background:${bg}"></i>${esc(c.name)}</span>`;
    })
    .join("")}</div>`;

const figures = (imgs, cls = "") => {
  const list = localImgs(imgs);
  if (!list.length) return "";
  return `<div class="figs n${Math.min(list.length, 3)} ${cls}">${list
    .map((i) => `<figure><img src="${imgUrl(i.src)}" alt="${esc(i.alt)}"><figcaption>${esc(i.alt)}</figcaption></figure>`)
    .join("")}</div>`;
};

// Price table with MOQ and 3,000+ volume columns.
function priceTable(rows, { gsmLabel = "GSM", title = "Indicative price by GSM" } = {}) {
  return `<div class="ptable"><div class="ptitle">${title}<span>ex-factory Mumbai · per piece</span></div>
  <table><thead><tr><th>${gsmLabel}</th><th>Fabric / build</th><th>Typical use</th><th class="num">At MOQ (INR)</th><th class="num">At MOQ (USD)</th><th class="num">3,000+ pcs (INR)</th></tr></thead><tbody>
  ${rows
    .map(
      ([gsm, fab, use, lo, hi, std]) => `<tr class="${std ? "std" : ""}"><td class="gsm">${esc(gsm)}${std ? '<em>standard</em>' : ""}</td><td>${esc(fab)}</td><td>${esc(use)}</td>
      <td class="num">${inr(lo)} – ${inr(hi)}</td><td class="num">${usd(lo)} – ${usd(hi)}</td><td class="num">${inr(r5(lo * 0.89))} – ${inr(r5(hi * 0.91))}</td></tr>`
    )
    .join("")}
  </tbody></table></div>`;
}

const markStd = (rows, gsm) => rows.map((r) => [r[0], r[1], r[2], r[3], r[4], r[0] === gsm]);

// ------------------------------------------------------------------ blocks
let typeCounter = 0;
function typeBlock(sub, { kicker, rows, sizes, lead, gsmLabel }) {
  typeCounter++;
  return `<section class="item">
    <div class="item-head"><span class="kicker">${kicker} ${String(typeCounter).padStart(2, "0")}</span><h3>${esc(sub.name)}</h3><p class="lede">${esc(sub.shortDescription)}</p></div>
    ${figures(sub.images)}
    <p class="body">${esc(sub.description)}</p>
    <div class="facts">
      <div><b>MOQ</b>${esc(MOQ)}</div>
      <div><b>Sizes</b>${esc(sizes)}</div>
      <div><b>Lead time</b>${esc(lead)}</div>
      <div class="wide"><b>Stock colours</b>${swatches(sub.colors)}</div>
    </div>
    ${rows ? priceTable(rows, { gsmLabel }) : ""}
  </section>`;
}

const BADGES = (p) =>
  [p.bestSeller && "Best seller", p.featured && "Featured", p.newArrival && "New arrival", p.privateLabelAvailable && "Private label ready"]
    .filter(Boolean)
    .map((b) => `<span class="badge">${b}</span>`)
    .join("");

let prodCounter = 0;
function productBlock(p, rows, { collection, gsmLabel } = {}) {
  prodCounter++;
  const specs = [
    ...p.specifications.map((s) => [s.label, s.value]),
    ["Fabric", p.fabrics.join(", ")],
    ["Sizes", p.sizes.join(", ")],
    ["MOQ", p.moq],
    ["Sample charge", SAMPLE],
    ["Lead time", p.leadTime],
  ];
  return `<section class="item product">
    <div class="item-head"><span class="kicker">Style No. SN-${esc(p.categorySlug.split("-").map((w) => w[0].toUpperCase()).join(""))}-${String(prodCounter).padStart(3, "0")}${collection ? " · " + esc(collection) : ""}</span>
    <h3>${esc(p.name)}</h3><p class="lede">${esc(p.shortDescription)}</p><div class="badges">${BADGES(p)}</div></div>
    ${figures(p.images)}
    <p class="body">${esc(p.description)}</p>
    <div class="cols">
      <table class="spec"><tbody>${specs.map(([k, v]) => `<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join("")}</tbody></table>
      <div>
        <div class="minihead">Colours</div>${swatches(p.colors)}
        <div class="minihead">Customisation</div><ul class="ticks">${p.customizationOptions.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
      </div>
    </div>
    ${rows ? priceTable(rows, { gsmLabel }) : ""}
  </section>`;
}

const collectionOf = (c, slug) => (c.collections || []).find((x) => x.productSlug === slug)?.name;

function divider(c, num, title, intro, { img, prose = true } = {}) {
  const hero = localImgs([img ? { src: img, alt: title } : c.heroImage])[0];
  return `<section class="divider">
    <div class="dnum">${num}</div><h2>${esc(title)}</h2>
    <p class="dintro">${esc(intro)}</p>
    ${hero ? `<figure class="hero"><img src="${imgUrl(hero.src)}" alt="${esc(hero.alt)}"></figure>` : ""}
    ${prose && c.content ? `<div class="prose">${c.content}</div>` : ""}
  </section>`;
}

function collectionsGrid(c) {
  if (!c.collections?.length) return "";
  return `<div class="collections"><div class="minihead">Collections in this range</div><div class="cgrid">${c.collections
    .map((col) => {
      const p = products.find((x) => x.slug === col.productSlug);
      const img = p && localImgs(p.images)[0];
      return `<figure>${img ? `<img src="${imgUrl(img.src)}" alt="${esc(img.alt)}">` : ""}<figcaption><b>${esc(col.name)}</b>${p ? esc(p.name) : ""}</figcaption></figure>`;
    })
    .join("")}</div></div>`;
}

// ------------------------------------------------------------------ shared pages
const C = siteConfig.contact;
const S = siteConfig.stats;

function cover(kind, sub, img) {
  return `<section class="cover">
    <img class="logo" src="${LOGO}" alt="SamNoor">
    <div class="ctag">${esc(siteConfig.tagline)}</div>
    <h1>${kind}<span>Wholesale Catalogue &amp; GSM Price Guide</span></h1>
    <div class="cyear">Edition 2026 – 27 · Manufactured in Mumbai, India</div>
    <div class="cterms"><span>MOQ ${esc(MOQ)}</span><span>Sample charges ${esc(SAMPLE)}</span></div>
    <figure class="cimg"><img src="${imgUrl(img)}" alt=""></figure>
    <p class="csub">${esc(sub)}</p>
    <div class="cfoot"><span>${esc(C.salesEmail)}</span><span>${esc(C.phone)}</span><span>samnoor.in</span></div>
  </section>`;
}

function aboutPage(contents) {
  return `<section class="page">
    <h2 class="ph">About SamNoor</h2>
    <p class="body">${esc(siteConfig.description)} Everything in this catalogue is cut, stitched, finished, inspected and packed at our own Mumbai facility, and every style can be produced under your label.</p>
    <div class="stats">
      <div><b>${S.yearsInBusiness}+</b>years manufacturing (est. ${siteConfig.founded})</div>
      <div><b>${S.countriesServed}</b>export countries</div>
      <div><b>${S.monthlyCapacityUnits.toLocaleString("en-IN")}</b>units monthly capacity</div>
      <div><b>${S.factoryAreaSqFt.toLocaleString("en-IN")}</b>sq ft facility</div>
      <div><b>${S.workforce}</b>skilled workforce</div>
      <div><b>${S.clientsWorldwide.toLocaleString("en-IN")}+</b>clients worldwide</div>
    </div>
    <div class="terms"><div><b>Minimum order</b>${esc(MOQ)}</div><div><b>Sample charges</b>${esc(SAMPLE)}</div></div>
    <h3 class="sh">In this catalogue</h3>
    <ol class="toc">${contents.map(([t, d]) => `<li><b>${esc(t)}</b><span>${esc(d)}</span></li>`).join("")}</ol>
    <h3 class="sh">Quality checks on every order</h3>
    <ul class="ticks two">
      <li>Fabric batches verified for weight (GSM), composition and colourfastness before cutting</li>
      <li>In-line inspection during cutting and stitching</li>
      <li>Pre-final inspection before packing</li>
      <li>Randomised final audit before release</li>
      <li>Seam strength, tear resistance and dimensional-stability testing</li>
      <li>Third-party pre-shipment inspection on request</li>
    </ul>
  </section>`;
}

function pricingBasis(sizeNote) {
  return `<section class="page">
    <h2 class="ph">How to read the prices</h2>
    <div class="terms"><div><b>Minimum order (MOQ)</b>${esc(MOQ)}</div><div><b>Sample charges</b>${esc(SAMPLE)}</div></div>
    <div class="note"><b>Indicative pricing.</b> Prices in this catalogue are approximate wholesale ranges for planning and comparison. They are ex-factory Mumbai, per piece, for plain stock colours from the MOQ of ${esc(MOQ)}, excluding GST, freight, duties and optional branding. Your final price is confirmed in a written quotation (within one business day) once fabric, GSM, size, colours, quantity and packaging are fixed.</div>
    <div class="cols">
      <div>
        <h3 class="sh">Volume pricing</h3>
        <table class="spec"><thead><tr><th>Order per style</th><th>Price level</th></tr></thead><tbody>
          <tr><th>25 (MOQ) – 999 pcs</th><td>List range shown in tables</td></tr>
          <tr><th>1,000 – 2,999 pcs</th><td>approx. 5 – 7% below list</td></tr>
          <tr><th>3,000 – 9,999 pcs</th><td>approx. 9 – 11% below list (shown as “3,000+”)</td></tr>
          <tr><th>10,000+ pcs</th><td>approx. 12 – 15% below list, quoted per programme</td></tr>
        </tbody></table>
        <h3 class="sh">Reading the GSM tables</h3>
        <ul class="ticks">
          <li><b>GSM</b> (grams per square metre) is fabric weight. Higher GSM means more opacity, a heavier drape and a higher price.</li>
          <li>The row marked <b>standard</b> is the weight we stock and recommend for that style.</li>
          <li>Silk is graded in <b>momme (mm)</b>. 1 momme ≈ 4.3 GSM, so 19 mm ≈ 82 GSM.</li>
          <li>${esc(sizeNote)}</li>
          <li>USD figures are converted at ₹${P.INR_PER_USD} = US$1 and follow the exchange rate on the quotation date.</li>
        </ul>
      </div>
      <div>
        <h3 class="sh">Branding &amp; one-time costs</h3>
        <table class="spec"><tbody>${P.addOns.map(([k, v]) => `<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join("")}</tbody></table>
        <h3 class="sh">Shipping terms</h3>
        <ul class="ticks">
          <li>EXW, FOB, CIF and DDP supported. Most accounts buy <b>FOB Mumbai (Nhava Sheva / JNPT)</b>.</li>
          <li>Air freight, sea freight (FCL / LCL) or express courier.</li>
          <li>Exports are zero-rated for GST. Domestic orders are billed with GST at the prevailing apparel slab.</li>
          <li>Commercial invoice, packing list and certificate of origin are prepared for every shipment.</li>
        </ul>
      </div>
    </div>
  </section>`;
}

function fabricGuide(title, list) {
  return `<section class="page">
    <h2 class="ph">${title}</h2>
    <div class="fgrid">${list
      .map(
        (f) => `<div class="fcard">
        <figure><img src="${imgUrl(f.img)}" alt="${esc(f.name)} fabric"></figure>
        <div><h4>${esc(f.name)}<span>${esc(f.gsm)}</span></h4>
        <p>${esc(f.text)}</p>
        <div class="tags">${f.props.map((p) => `<span>${esc(p)}</span>`).join("")}</div></div>
      </div>`
      )
      .join("")}</div>
  </section>`;
}

function gsmBars(rows) {
  const max = Math.max(...rows.map((r) => r[2]));
  return `<div class="bars">${rows
    .map(
      ([name, lo, hi, gsm]) => `<div class="bar"><span class="bl">${esc(name)}</span><span class="bt"><i style="left:${(lo / max) * 100}%;width:${((hi - lo) / max) * 100}%"></i></span><span class="bv">${esc(gsm)}</span></div>`
    )
    .join("")}</div>`;
}

function matrix(title, groups) {
  return `<section class="page matrix">
    <h2 class="ph">${title}</h2>
    <p class="body small">Every style and GSM option on one sheet. Standard weights are highlighted. Prices are INR per piece at MOQ, ex-factory, with the 3,000+ volume level alongside.</p>
    <table class="mtx"><thead><tr><th>Style</th><th>GSM</th><th>Fabric / build</th><th class="num">At MOQ (INR)</th><th class="num">USD</th><th class="num">3,000+ (INR)</th></tr></thead>
    ${groups
      .map(
        ([group, items]) => `<tbody><tr class="grp"><td colspan="6">${esc(group)}</td></tr>${items
          .map(([name, rows]) =>
            rows
              .map(
                ([gsm, fab, , lo, hi, std], i) => `<tr class="${std ? "std" : ""}${i === 0 ? " first" : ""}">${i === 0 ? `<td rowspan="${rows.length}" class="mname">${esc(name)}</td>` : ""}<td>${esc(gsm)}</td><td>${esc(fab)}</td><td class="num">${inr(lo)} – ${inr(hi)}</td><td class="num">${usd(lo)} – ${usd(hi)}</td><td class="num">${inr(r5(lo * 0.89))} – ${inr(r5(hi * 0.91))}</td></tr>`
              )
              .join("")
          )
          .join("")}</tbody>`
      )
      .join("")}
    </table>
  </section>`;
}

function orderingPage(extra) {
  const steps = [
    ["Enquiry", "Send target styles, quantities, colours and market through samnoor.in, email or WhatsApp."],
    ["Quotation", "Written quotation within one business day, with MOQ, price, lead time and sampling policy."],
    ["Sampling", `Pre-production sample or lab-dip in 7 – 12 business days. Sample charges: ${SAMPLE}.`],
    ["Approval & PO", "Sample sign-off, purchase order and deposit confirm your production slot."],
    ["Production", "18 – 30 days for standard styles. 30 – 45 days for custom fabric, embellishment or a first private-label setup."],
    ["QC & dispatch", "In-line, pre-final and final audits, then export documents and shipment on your Incoterm."],
  ];
  return `<section class="page">
    <h2 class="ph">Private label &amp; ordering</h2>
    <div class="cols">
      <div>
        <h3 class="sh">Private label / OEM / ODM</h3>
        <ul class="ticks">
          <li>Custom woven or printed labels, care and size labels</li>
          <li>Hang tags, poly bags, retail cards and rigid gift boxes</li>
          <li>Custom Pantone colours on existing fabric bases (lab-dip charges apply)</li>
          <li>Custom fabric development (new weights, blends or finishes) from about 1,000 – 3,000 metres</li>
          <li>OEM manufactures to your specification. ODM adds design development from a sketch, reference image or sample garment.</li>
          <li>No tech pack needed to start. Our team builds it with you during sampling.</li>
        </ul>
        ${extra}
      </div>
      <div>
        <h3 class="sh">From enquiry to shipment</h3>
        <ol class="steps">${steps.map(([t, d]) => `<li><b>${t}</b>${d}</li>`).join("")}</ol>
      </div>
    </div>
  </section>`;
}

function backCover() {
  const a = C.address;
  return `<section class="cover back">
    <img class="logo" src="${LOGO}" alt="SamNoor">
    <div class="ctag">${esc(siteConfig.legalName)}</div>
    <div class="contact">
      <div><b>Sales</b>${esc(C.salesEmail)}</div>
      <div><b>Export</b>${esc(C.email)}</div>
      <div><b>Phone / WhatsApp</b>${esc(C.phone)}</div>
      <div><b>Web</b>samnoor.in</div>
      <div><b>Factory</b>${esc([a.line1, a.line2, a.city + " " + a.postalCode, a.state, a.country].join(", "))}</div>
      <div><b>Hours</b>${esc(C.hours)}</div>
    </div>
    <p class="csub">Prices in this catalogue are indicative and are confirmed by written quotation. Colours may vary slightly from print. © ${new Date().getFullYear()} ${esc(siteConfig.name)}.</p>
  </section>`;
}

// ------------------------------------------------------------------ HIJAB catalogue
function buildHijab() {
  typeCounter = 0;
  prodCounter = 0;
  const hij = cat("hijabs"), inst = cat("instant-hijabs"), sport = cat("sports-hijabs"), lux = cat("luxury-hijabs"), bri = cat("bridal-hijabs");
  const HIJAB_SIZES = "70×180 cm, 75×190 cm, 80×200 cm, custom";

  const productRows = (p) => {
    const spec = P.hijabProducts[p.slug] || P.luxury[p.slug] && [P.luxury[p.slug]];
    if (!spec) return null;
    const [src, std] = spec;
    const rows = typeof src === "string" ? P.hijabTypes[src] : src;
    return std ? markStd(rows, std) : rows;
  };

  const sportsSubs = ["sports-hijabs", "running-hijabs", "gym-hijabs", "swimming-hijabs"];
  const fabricList = [
    { name: "Chiffon", gsm: "60 – 90 GSM", img: "/fabrics/chiffon.jpg", text: fabric("chiffon").description, props: fabric("chiffon").properties },
    { name: "Georgette & Crinkle", gsm: "70 – 120 GSM", img: "/fabrics/georgette.jpg", text: fabric("georgette").description, props: fabric("georgette").properties },
    { name: "Crepe", gsm: "95 – 130 GSM", img: "/fabrics/crepe.jpg", text: fabric("crepe").description, props: fabric("crepe").properties },
    { name: "Jersey", gsm: "160 – 220 GSM", img: "/fabrics/jersey.jpg", text: fabric("jersey").description, props: fabric("jersey").properties },
    { name: "Modal", gsm: "140 – 180 GSM", img: "/fabrics/modal.jpg", text: "Beechwood-derived modal blended with cotton for a silkier, matte hand-feel than jersey, with richer, more even dye uptake.", props: ["Four-way stretch", "Matte, low sheen", "Even dye uptake", "No-pin wear"] },
    { name: "Cotton Voile", gsm: "60 – 100 GSM", img: "/fabrics/cotton.jpg", text: fabric("cotton").description, props: fabric("cotton").properties },
    { name: "Satin", gsm: "90 – 130 GSM", img: "/fabrics/satin.jpg", text: "Tight high-gloss satin weave with a fluid, weighted drape that keeps its glass-smooth finish through transport and retail handling.", props: ["High sheen", "Weighted drape", "Occasion & gifting", "Holds embellishment"] },
    { name: "Mulberry Silk", gsm: "12 – 22 momme (≈52 – 95 GSM)", img: "/fabrics/silk.jpg", text: fabric("silk").description, props: fabric("silk").properties },
    { name: "Ribbed Knit", gsm: "200 – 280 GSM", img: "/fabrics/ribbed.jpg", text: "Vertical rib knit with more structure than plain jersey for a sculpted, pin-free wrap with a streetwear feel.", props: ["Structured stretch", "No-pin", "Casual / streetwear", "Cool-season weight"] },
    { name: "Bamboo-Viscose", gsm: "150 – 200 GSM", img: "/fabrics/bamboo.jpg", text: "Bamboo-viscose jersey that feels softer and wicks moisture better than cotton jersey. Suits eco and wellness-positioned ranges.", props: ["Breathable", "Moisture-wicking", "Naturally soft", "Eco positioning"] },
    { name: "Printed Chiffon & Modal", gsm: "60 – 180 GSM", img: "/fabrics/printed-chiffon.jpg", text: "In-house digital printing heat-set into the fibre. Concept to strike-off in under two weeks, with Pantone recolouring on repeats.", props: ["Digital print", "Strike-off < 2 weeks", "25 pcs per pattern per colour", "Custom colourways"] },
    { name: "Performance Knit", gsm: "120 – 220 GSM", img: "/products/sports-hijabs/type/sports-hijabs.jpg", text: "Polyester or nylon with 10 – 18% spandex. Moisture-wicking, quick-dry, flatlock seams. Chlorine-resistant grades for swimwear.", props: ["Four-way stretch", "Quick-dry", "Flatlock seams", "Chlorine resistant (swim)"] },
  ];

  const bars = gsmBars([
    ["Silk (12 – 22 mm)", 52, 95, "52 – 95"],
    ["Cotton voile", 60, 100, "60 – 100"],
    ["Chiffon", 60, 90, "60 – 90"],
    ["Georgette / crinkle", 70, 120, "70 – 120"],
    ["Satin", 90, 130, "90 – 130"],
    ["Crepe", 95, 130, "95 – 130"],
    ["Performance knit", 120, 220, "120 – 220"],
    ["Modal", 140, 180, "140 – 180"],
    ["Bamboo", 150, 200, "150 – 200"],
    ["Jersey", 160, 220, "160 – 220"],
    ["Ribbed", 200, 280, "200 – 280"],
  ]);

  const coreTypes = hij.subcategories.map((s) => [s.name, P.hijabTypes[s.slug]]);
  const instTypes = inst.subcategories.map((s) => [s.name, P.instantTypes[s.slug]]);
  const sportTypes = sport.subcategories.filter((s) => sportsSubs.includes(s.slug)).map((s) => [s.name, P.sportsTypes[s.slug]]);
  const luxTypes = prodsOf("luxury-hijabs").map((p) => [p.name, P.luxury[p.slug]]);
  const briTypes = bri.subcategories.map((s) => [s.name, P.bridalHijab[s.slug]]);

  const html = [];
  html.push(cover("Hijab Collection", "Chiffon · Georgette · Jersey · Modal · Satin · Silk · Instant · Sports · Luxury · Bridal", "/categories/hijabs-hero.jpg"));
  html.push(aboutPage([
    ["Pricing guide", "How prices, GSM and volume tiers work, plus branding costs"],
    ["Fabric & GSM guide", "12 hijab fabrics with weight ranges and properties"],
    ["Master GSM price matrix", "Every style × GSM on one sheet"],
    ["1 · Core hijabs", `${hij.subcategories.length} fabric types + ${prodsOf("hijabs").length} signature styles`],
    ["2 · Instant hijabs", `${inst.subcategories.length} constructions + ${prodsOf("instant-hijabs").length} styles`],
    ["3 · Sports & swim hijabs", `${sportTypes.length} performance types + ${prodsOf("sports-hijabs").length} styles`],
    ["4 · Luxury silk hijabs", `${prodsOf("luxury-hijabs").length} mulberry silk & satin styles`],
    ["5 · Bridal hijabs", `${bri.subcategories.length} embellished bridal styles`],
    ["Size, care, private label & ordering", "Dimensions, packaging, process and contacts"],
  ]));
  html.push(pricingBasis("Hijab prices are quoted at 75×190 cm. Allow about −7% for 70×180 cm and +12% for 80×200 cm. Silk squares are priced at 90×90 cm."));
  html.push(fabricGuide("Hijab fabric &amp; GSM guide", fabricList));
  html.push(`<section class="page"><h2 class="ph">GSM at a glance</h2><p class="body">Fabric weight ranges we produce for hijabs, lightest to heaviest. Woven fabrics (chiffon, georgette, satin, crepe) feel lighter than knits at the same GSM because knits stretch and drape closer.</p>${bars}
    <h3 class="sh">Which GSM for which market?</h3>
    <table class="spec"><thead><tr><th>Market / customer</th><th>Recommended fabric &amp; GSM</th></tr></thead><tbody>
      <tr><th>GCC, South Asia, hot &amp; humid</th><td>Chiffon 75, cotton voile 60 – 80, georgette 80</td></tr>
      <tr><th>UK, Europe, North America</th><td>Jersey 180 – 200, modal 160, crepe 95 – 110</td></tr>
      <tr><th>Cold climates / winter range</th><td>Jersey 220, ribbed 240 – 280, silk-cashmere 120 – 150</td></tr>
      <tr><th>First-time hijab wearers</th><td>Instant jersey 180, one-piece pull-on</td></tr>
      <tr><th>Gifting, Eid &amp; occasion</th><td>Satin 110 – 130, silk 16 – 19 mm, printed modal 160</td></tr>
      <tr><th>Athletes, schools, swim</th><td>Performance knit 160 – 200, nylon-spandex swim 200</td></tr>
      <tr><th>Bridal &amp; nikah</th><td>Satin 110 – 130 or silk 19 mm with lace, pearl or crystal</td></tr>
    </tbody></table></section>`);
  html.push(matrix("Master GSM price matrix — Hijabs", [
    ["Core hijabs", coreTypes],
    ["Instant hijabs", instTypes],
    ["Sports & swim hijabs", sportTypes],
    ["Luxury silk hijabs (by style)", luxTypes],
    ["Bridal hijabs", briTypes],
  ]));

  // 1. Core
  html.push(divider(hij, "01", "Core Hijabs", hij.description));
  html.push(`<section class="page">${collectionsGrid(hij)}</section>`);
  for (const s of hij.subcategories)
    html.push(typeBlock(s, { kicker: "Hijab type", rows: P.hijabTypes[s.slug], sizes: s.slug === "silk" ? "90×90 cm, custom" : HIJAB_SIZES, lead: "18 – 26 days after sample approval", gsmLabel: s.slug === "silk" ? "Momme" : "GSM" }));
  for (const p of prodsOf("hijabs")) html.push(productBlock(p, productRows(p), { collection: collectionOf(hij, p.slug), gsmLabel: p.slug.includes("silk") ? "Momme" : "GSM" }));

  // 2. Instant
  typeCounter = 0;
  html.push(divider(inst, "02", "Instant Hijabs", inst.description));
  html.push(`<section class="page">${collectionsGrid(inst)}</section>`);
  for (const s of inst.subcategories) html.push(typeBlock(s, { kicker: "Instant type", rows: P.instantTypes[s.slug], sizes: "One size (stretch cap)", lead: "18 – 26 days after sample approval", gsmLabel: "Shell GSM" }));
  for (const p of prodsOf("instant-hijabs")) html.push(productBlock(p, productRows(p), { collection: collectionOf(inst, p.slug), gsmLabel: "Shell GSM" }));

  // 3. Sports
  typeCounter = 0;
  html.push(divider(sport, "03", "Sports & Swim Hijabs", sport.description));
  html.push(`<section class="page">${collectionsGrid(sport)}</section>`);
  for (const s of sport.subcategories.filter((s) => sportsSubs.includes(s.slug)))
    html.push(typeBlock(s, { kicker: "Sports type", rows: P.sportsTypes[s.slug], sizes: "S/M, L/XL, Junior S – L", lead: "25 – 32 days after sample approval" }));
  for (const p of prodsOf("sports-hijabs")) html.push(productBlock(p, productRows(p), { collection: collectionOf(sport, p.slug) }));

  // 4. Luxury
  html.push(divider(lux, "04", "Luxury Silk Hijabs", lux.description));
  html.push(`<section class="page">${collectionsGrid(lux)}</section>`);
  for (const p of prodsOf("luxury-hijabs"))
    html.push(productBlock(p, productRows(p), { collection: collectionOf(lux, p.slug), gsmLabel: p.slug.includes("cashmere") ? "GSM" : "Momme" }));

  // 5. Bridal
  typeCounter = 0;
  html.push(divider(bri, "05", "Bridal Hijabs", bri.description));
  for (const s of bri.subcategories)
    html.push(typeBlock(s, { kicker: "Bridal style", rows: P.bridalHijab[s.slug], sizes: "75×190 cm, 90×90 cm, custom", lead: "30 – 45 days after sample approval", gsmLabel: "Base GSM" }));

  // Size & care
  html.push(`<section class="page"><h2 class="ph">Sizes, care &amp; packing</h2>
    <div class="cols"><div>
    <h3 class="sh">Standard hijab dimensions</h3>
    <table class="spec c3"><thead><tr><th>Size</th><th>Best for</th><th>Price vs 75×190</th></tr></thead><tbody>
      <tr><th>70 × 180 cm</th><td>Petite wraps, hot climates, teens</td><td>approx. −7%</td></tr>
      <tr><th>75 × 190 cm</th><td>Standard shawl-style wrap</td><td>Base price</td></tr>
      <tr><th>80 × 200 cm</th><td>Fuller chest coverage, layered styles</td><td>approx. +12%</td></tr>
      <tr><th>90 × 90 cm</th><td>Square silk / luxury, folded triangle</td><td>Silk price list</td></tr>
      <tr><th>110 × 110 cm</th><td>Large luxury square</td><td>approx. +40% vs 90×90</td></tr>
      <tr><th>One size</th><td>Instant &amp; jersey stretch styles</td><td>—</td></tr>
      <tr><th>S/M · L/XL · Junior</th><td>Sports and swim hijabs</td><td>—</td></tr>
    </tbody></table>
    <h3 class="sh">Care by fabric</h3>
    <table class="spec"><tbody>
      <tr><th>Chiffon, printed chiffon</th><td>Machine wash cold, hang dry</td></tr>
      <tr><th>Jersey, modal, bamboo</th><td>Machine wash cold, tumble dry low or hang dry</td></tr>
      <tr><th>Georgette, crepe, instant</th><td>Hand wash or dry clean</td></tr>
      <tr><th>Cotton voile</th><td>Machine wash warm, tumble dry low</td></tr>
      <tr><th>Sports / swim</th><td>Machine wash cold, air dry. Rinse swimwear after use</td></tr>
      <tr><th>Silk, satin, bridal</th><td>Dry clean only</td></tr>
    </tbody></table></div><div>
    <h3 class="sh">Standard export packing</h3>
    <ul class="ticks">
      <li>Each hijab folded and individually poly-bagged</li>
      <li>Inner packs of 10 or 12 pieces per colour</li>
      <li>5-ply export cartons, about 200 – 300 chiffon hijabs or 150 – 200 jersey hijabs per carton</li>
      <li>Cartons marked with style, colour, size, quantity and PO number</li>
      <li>Luxury and bridal pieces packed in individual rigid gift boxes</li>
    </ul>
    <h3 class="sh">Colour library</h3>
    <p class="body">Every core hijab ships in our 42-shade standard library. Custom Pantone matching is available on request.</p>
    </div></div></section>`);
  html.push(orderingPage(`<h3 class="sh">Order terms</h3><table class="spec"><tbody>
    <tr><th>MOQ (all hijab styles)</th><td>${esc(MOQ)}</td></tr>
    <tr><th>Sample charges</th><td>${esc(SAMPLE)}</td></tr></tbody></table>`));
  html.push(backCover());
  return html.join("\n");
}

// ------------------------------------------------------------------ ABAYA catalogue
function buildAbaya() {
  typeCounter = 0;
  prodCounter = 0;
  const ab = cat("abayas"), bri = cat("bridal-abayas"), sport = cat("sports-hijabs");
  const sportsAbaya = sport.subcategories.find((s) => s.slug === "sports-abayas");
  const ABAYA_SIZES = "52, 54, 56, 58, 60, 62 · free size · made-to-measure";

  const fabricList = [
    { name: "Zoom", gsm: "120 – 140 GSM", img: "/fabrics/zoom.jpg", text: fabric("zoom").description, props: fabric("zoom").properties },
    { name: "Nida", gsm: "150 – 185 GSM", img: "/fabrics/nida.jpg", text: fabric("nida").description, props: fabric("nida").properties },
    { name: "Korean Nida", gsm: "160 – 210 GSM", img: "/fabrics/korean-nida.jpg", text: fabric("korean-nida").description, props: fabric("korean-nida").properties },
    { name: "Crepe", gsm: "200 – 240 GSM", img: "/fabrics/crepe.jpg", text: fabric("crepe").description, props: fabric("crepe").properties },
    { name: "Linen-Cotton", gsm: "150 – 180 GSM", img: "/fabrics/linen.jpg", text: fabric("linen").description, props: fabric("linen").properties },
    { name: "Satin", gsm: "110 – 130 GSM", img: "/fabrics/satin.jpg", text: "High-sheen satin base for bridal and evening abayas. Fluid, photograph-ready drape that carries embellishment weight.", props: ["High sheen", "Fluid drape", "Bridal & evening", "Holds stonework"] },
    { name: "Mulberry Silk", gsm: "19 – 22 momme (≈82 – 95 GSM)", img: "/fabrics/silk.jpg", text: fabric("silk").description, props: fabric("silk").properties },
    { name: "Premium Blends", gsm: "Custom", img: "/fabrics/premium-blends.jpg", text: fabric("premium-blends").description, props: fabric("premium-blends").properties },
  ];

  const bars = gsmBars([
    ["Silk (19 – 22 mm)", 82, 95, "82 – 95"],
    ["Satin", 110, 130, "110 – 130"],
    ["Zoom", 120, 140, "120 – 140"],
    ["Nida", 150, 185, "150 – 185"],
    ["Linen-cotton", 150, 180, "150 – 180"],
    ["Korean Nida", 160, 210, "160 – 210"],
    ["Performance knit", 180, 200, "180 – 200"],
    ["Crepe", 200, 240, "200 – 240"],
  ]);

  const baseRows = Object.entries(P.abayaBase)
    .filter(([k]) => !k.startsWith("Technical"))
    .map(([k, [gsm, fab, lo, hi]]) => [String(gsm), fab, "Plain closed / everyday block", lo, hi, ["Zoom 130", "Nida 185", "Korean Nida 180", "Crepe 220", "Linen 180"].includes(k)]);

  const typeGroups = ab.subcategories.map((s) => [s.name, P.abayaTypes[s.slug]]);
  const prodGroups = prodsOf("abayas").map((p) => [p.name, P.abayaProducts[p.slug]]);
  const briGroups = bri.subcategories.map((s) => [s.name, P.bridalAbaya[s.slug]]);

  const html = [];
  html.push(cover("Abaya Collection", "Zoom · Nida · Korean Nida · Crepe · Linen · Embroidered · Bridal", "/categories/abayas-hero.jpg"));
  html.push(aboutPage([
    ["Pricing guide", "How prices, GSM, size and volume tiers work, plus branding costs"],
    ["Fabric & GSM guide", "8 abaya fabrics with weight ranges and properties"],
    ["Base fabric prices & style add-ons", "Build any abaya price from fabric + cut"],
    ["Master GSM price matrix", "Every style × GSM on one sheet"],
    ["1 · Abaya styles", `${ab.subcategories.length + 1} silhouettes, including sports abaya`],
    ["2 · Signature abayas", `${prodsOf("abayas").length} ready-to-order styles with full spec sheets`],
    ["3 · Bridal abayas", `${bri.subcategories.length} bridal and nikah styles`],
    ["Size chart, care, private label & ordering", "Length chart, packing, process and contacts"],
  ]));
  html.push(pricingBasis("Abaya prices cover sizes 52 – 58. Sizes 60 – 62 add about ₹40 – ₹80 per piece. Two- and three-piece sets are priced per complete set."));
  html.push(fabricGuide("Abaya fabric &amp; GSM guide", fabricList));
  html.push(`<section class="page"><h2 class="ph">Base fabric prices</h2>
    <p class="body">Start here. These are prices for a plain closed or everyday abaya block in each fabric and GSM. Add the style add-on on the right to estimate any silhouette.</p>
    ${bars}
    ${priceTable(baseRows, { title: "Plain abaya by fabric &amp; GSM" })}
    <div class="ptable"><div class="ptitle">Style &amp; work add-ons<span>added to the base fabric price · per piece</span></div>
    <table><thead><tr><th>Style / work</th><th>What changes</th><th class="num">Add (INR)</th><th class="num">Add (USD)</th></tr></thead><tbody>
    ${P.styleAdders.map(([n, w, lo, hi]) => `<tr><td class="gsm">${esc(n)}</td><td>${esc(w)}</td><td class="num">${lo === 0 && hi === 0 ? "—" : `${lo < 0 ? "−" + inr(-lo) : "+" + inr(lo)} – +${inr(hi)}`}</td><td class="num">${lo === 0 && hi === 0 ? "—" : `${lo < 0 ? "−" + usd(-lo) : "+" + usd(lo)} – +${usd(hi)}`}</td></tr>`).join("")}
    </tbody></table></div>
    <p class="body small">Example: Korean Nida 180 GSM (₹950 – ₹1,200) + butterfly sleeve (+₹120 – ₹200) ≈ ₹1,070 – ₹1,400 per piece at MOQ.</p>
  </section>`);
  html.push(matrix("Master GSM price matrix — Abayas", [
    ["Abaya styles", [...typeGroups, ["Sports Abaya", P.abayaTypes["sports-abayas"]]]],
    ["Signature abayas", prodGroups],
    ["Bridal abayas", briGroups],
  ]));

  html.push(divider(ab, "01", "Abaya Styles", ab.description));
  html.push(`<section class="page">${collectionsGrid(ab)}</section>`);
  for (const s of ab.subcategories)
    html.push(typeBlock(s, { kicker: "Abaya style", rows: P.abayaTypes[s.slug], sizes: s.slug.includes("piece") ? "S – XXL tops, 52 – 62 skirts" : ABAYA_SIZES, lead: s.slug === "embroidered" ? "28 – 45 days after sample approval" : "22 – 30 days after sample approval" }));
  if (sportsAbaya)
    html.push(typeBlock(sportsAbaya, { kicker: "Abaya style", rows: P.abayaTypes["sports-abayas"], sizes: "S – XXL, 52 – 60", lead: "25 – 32 days after sample approval" }));

  html.push(divider(cat("abayas"), "02", "Signature Abayas", "Eight ready-to-order styles with full specifications, from the value Zoom basic to hand-stoned crepe.", { img: "/products/abayas/collections/premium-korean-nida.jpg", prose: false }));
  for (const p of prodsOf("abayas")) html.push(productBlock(p, P.abayaProducts[p.slug], { collection: collectionOf(ab, p.slug) }));

  typeCounter = 0;
  html.push(divider(bri, "03", "Bridal Abayas", bri.description));
  for (const s of bri.subcategories)
    html.push(typeBlock(s, { kicker: "Bridal style", rows: P.bridalAbaya[s.slug], sizes: "52 – 62 · made-to-measure", lead: "35 – 45 days after sample approval", gsmLabel: "Base GSM" }));

  html.push(`<section class="page"><h2 class="ph">Size chart, care &amp; packing</h2>
    <div class="cols"><div>
    <h3 class="sh">Abaya length chart</h3>
    <p class="body small">Abaya sizes are the garment length in inches, measured from shoulder to hem.</p>
    <table class="spec c3"><thead><tr><th>Size</th><th>Length</th><th>Wearer height (flat shoes)</th></tr></thead><tbody>
      <tr><th>52</th><td>132 cm</td><td>150 – 155 cm (4'11" – 5'1")</td></tr>
      <tr><th>54</th><td>137 cm</td><td>155 – 160 cm (5'1" – 5'3")</td></tr>
      <tr><th>56</th><td>142 cm</td><td>160 – 165 cm (5'3" – 5'5")</td></tr>
      <tr><th>58</th><td>147 cm</td><td>165 – 170 cm (5'5" – 5'7")</td></tr>
      <tr><th>60</th><td>152 cm</td><td>170 – 175 cm (5'7" – 5'9")</td></tr>
      <tr><th>62</th><td>157 cm</td><td>175 cm + (5'9" +)</td></tr>
      <tr><th>Free size</th><td>142 – 147 cm</td><td>Kimono, layering and Zoom basics</td></tr>
    </tbody></table>
    <p class="body small">Standard width fits UK 8 – 18 / EU 36 – 46. Plus widths and made-to-measure are available for occasion and bridal pieces.</p>
    <h3 class="sh">Care by fabric</h3>
    <table class="spec"><tbody>
      <tr><th>Zoom, Nida, Korean Nida</th><td>Machine wash cold, hang dry, cool iron</td></tr>
      <tr><th>Linen-cotton</th><td>Machine wash cold, iron while damp</td></tr>
      <tr><th>Crepe, embroidered</th><td>Dry clean recommended</td></tr>
      <tr><th>Satin, silk, bridal</th><td>Dry clean only</td></tr>
    </tbody></table></div><div>
    <h3 class="sh">Standard export packing</h3>
    <ul class="ticks">
      <li>Each abaya folded with tissue and individually poly-bagged</li>
      <li>Size-run assortment per colour, e.g. 52 / 54 / 56 / 58 / 60 in a 1 : 2 : 3 : 2 : 1 ratio</li>
      <li>5-ply export cartons, about 40 – 60 Nida abayas per carton</li>
      <li>Hanger packing and garment covers on request</li>
      <li>Bridal and embellished pieces in rigid boxes or zipped garment bags</li>
    </ul>
    <h3 class="sh">Construction standards</h3>
    <ul class="ticks">
      <li>Concealed snap closures (5-point) or hidden zips</li>
      <li>Reinforced side-seam pockets on everyday styles</li>
      <li>Overlocked and taped seams, blind-stitched hems</li>
      <li>Custom snap, zip and button hardware for private label</li>
    </ul></div></div></section>`);
  html.push(orderingPage(`<h3 class="sh">Order terms</h3><table class="spec"><tbody>
    <tr><th>MOQ (all abaya styles)</th><td>${esc(MOQ)}</td></tr>
    <tr><th>Sample charges</th><td>${esc(SAMPLE)}</td></tr></tbody></table>`));
  html.push(backCover());
  return html.join("\n");
}

// ------------------------------------------------------------------ render
const css = fs.readFileSync(path.join(__dirname, "catalogue.css"), "utf8");
function page(title, runningHead, body) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${esc(title)}</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>${css.replace("__RUNNING_HEAD__", runningHead)}</style></head><body>${body}</body></html>`;
}

const chrome = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
].find((p) => fs.existsSync(p));

for (const [file, title, head, build] of [
  ["SamNoor-Hijab-Catalogue-2026-27", "SamNoor Hijab Catalogue", "SamNoor · Hijab Wholesale Catalogue 2026–27", buildHijab],
  ["SamNoor-Abaya-Catalogue-2026-27", "SamNoor Abaya Catalogue", "SamNoor · Abaya Wholesale Catalogue 2026–27", buildAbaya],
]) {
  const htmlPath = path.join(OUT, file + ".html");
  fs.writeFileSync(htmlPath, page(title, head, build()));
  console.log("wrote", htmlPath);
  if (chrome && !process.argv.includes("--html-only")) {
    const pdfPath = path.join(OUT, file + ".pdf");
    execFileSync(chrome, [
      "--headless=new", "--disable-gpu", "--no-pdf-header-footer", "--allow-file-access-from-files",
      "--virtual-time-budget=20000", "--run-all-compositor-stages-before-draw",
      `--print-to-pdf=${pdfPath}`, "file:///" + htmlPath.replace(/\\/g, "/"),
    ], { stdio: "inherit" });
    console.log("wrote", pdfPath);
  }
}
