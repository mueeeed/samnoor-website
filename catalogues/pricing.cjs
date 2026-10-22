// Indicative ex-factory price ranges (INR per piece, at MOQ) by fabric and GSM.
// samnoor.in publishes no prices, so these are estimates built from 2025–26
// B2B marketplace listings (IndiaMART, TradeIndia, Alibaba, Made-in-China,
// Global Sources, Hicabistan, QualityAbaya) plus fabric-per-metre + CMT costing.
// Row shape: [gsm, fabric/build, typical use, inrLow, inrHigh, isStandard]

const INR_PER_USD = 88;

// ---------------------------------------------------------------- HIJABS
const hijabTypes = {
  georgette: [
    ["70", "Poly-viscose georgette", "Light summer weight, semi-sheer", 85, 110],
    ["80", "Poly-viscose georgette", "Standard — self-crinkle, soft fall", 95, 125, true],
    ["100", "Heavy georgette", "Opaque, fuller drape for cooler markets", 115, 150],
  ],
  chiffon: [
    ["60", "Matte chiffon", "Light, entry price point, may need underscarf", 70, 90],
    ["75", "Premium matte chiffon", "Standard export weight — opaque, no underscarf", 85, 115, true],
    ["90", "Heavy matte chiffon (ceruti-type)", "Extra opacity, crisp fold, premium shelf", 105, 135],
  ],
  jersey: [
    ["160", "Cotton-elastane jersey", "Light everyday, hot climates", 120, 150],
    ["180", "Cotton-modal jersey", "Standard no-pin wrap", 135, 170, true],
    ["200", "Cotton-modal jersey", "Fuller coverage, holds shape all day", 150, 190],
    ["220", "Premium heavyweight jersey", "Cold markets, premium private label", 170, 215],
  ],
  modal: [
    ["140", "Modal-cotton 60/40", "Light, silky hand-feel", 150, 190],
    ["160", "Modal-cotton 60/40", "Standard — matte, low sheen", 170, 215, true],
    ["180", "Modal-cotton 60/40", "Richer drape, premium gifting", 190, 240],
  ],
  "printed-modal": [
    ["140", "Digitally printed modal", "Light print-led range", 175, 225],
    ["160", "Digitally printed modal", "Standard print base", 200, 255, true],
    ["180", "Digitally printed modal", "Premium print, deeper colour", 220, 280],
  ],
  "printed-chiffon": [
    ["60", "Digitally printed chiffon", "Entry print range", 95, 125],
    ["75", "Digitally printed chiffon", "Standard — holds fine line detail", 110, 145, true],
    ["90", "Digitally printed heavy chiffon", "Premium seasonal print", 130, 165],
  ],
  satin: [
    ["90", "Poly satin", "Light sheen, gifting entry", 110, 140],
    ["110", "Armani-type satin", "Standard occasion weight", 125, 160, true],
    ["130", "Heavy satin", "Evening / bridal-adjacent drape", 145, 185],
  ],
  silk: [
    ["12 mm (≈52)", "Mulberry silk habotai", "90×90 cm, machine-rolled hem", 650, 850],
    ["16 mm (≈69)", "Mulberry silk", "90×90 cm, machine-rolled hem", 850, 1100],
    ["19 mm (≈82)", "Mulberry silk charmeuse", "Standard — 90×90 cm, machine-rolled", 1050, 1350, true],
    ["22 mm (≈95)", "Mulberry silk charmeuse", "Heaviest drape, premium tier", 1250, 1600],
  ],
  crinkle: [
    ["80", "Heat-set crinkle", "Light texture, airy", 95, 125],
    ["100", "Heat-set crinkle", "Standard — permanent ripple", 110, 145, true],
    ["120", "Heavy crinkle", "Maximum volume & opacity", 130, 165],
  ],
  cotton: [
    ["60", "Cotton voile (combed)", "Standard hot-climate daily wear", 95, 125, true],
    ["80", "Cotton voile", "Better opacity, fewer creases", 115, 145],
    ["100", "Cotton lawn", "Opaque natural-fibre option", 130, 165],
  ],
  ribbed: [
    ["200", "Rib knit", "Light streetwear wrap", 150, 190],
    ["240", "Rib knit", "Standard sculpted, no-pin wrap", 175, 220, true],
    ["280", "Heavy rib knit", "Winter / premium casual", 200, 250],
  ],
  bamboo: [
    ["150", "Bamboo-viscose jersey", "Light, breathable", 180, 230],
    ["180", "Bamboo-viscose jersey", "Standard eco range", 205, 260, true],
    ["200", "Bamboo-viscose jersey", "Premium soft, fuller drape", 225, 285],
  ],
};

const crepeHijab = [
  ["95", "Polyester crepe", "Standard — textured, heavier drape", 120, 150, true],
  ["110", "Polyester crepe", "Cooler climates, crisp hold", 130, 165],
  ["130", "Heavy crepe", "Maximum opacity, winter range", 145, 185],
];

const instantTypes = {
  chiffon: [
    ["60 + 180 cap", "Chiffon shell, jersey cap", "Entry instant", 130, 165],
    ["75 + 180 cap", "Premium chiffon shell, jersey cap", "Standard instant", 140, 180, true],
    ["90 + 180 cap", "Heavy chiffon shell, jersey cap", "Premium opacity", 160, 200],
  ],
  jersey: [
    ["160", "Cotton-elastane jersey", "Light casual pull-on", 140, 180],
    ["180", "Cotton-modal jersey", "Standard casual pull-on", 150, 195, true],
    ["200", "Cotton-modal jersey", "Fuller coverage", 165, 210],
  ],
  "pre-stitched": [
    ["75", "Chiffon, fully pre-sewn shape", "Standard pre-stitched", 150, 190, true],
    ["180", "Jersey, fully pre-sewn shape", "Soft stretch pre-stitched", 160, 205],
  ],
  modal: [
    ["160", "Modal-cotton shell", "Standard modal instant", 180, 230, true],
    ["180", "Modal-cotton shell", "Premium drape", 195, 245],
  ],
  crinkle: [
    ["80", "Heat-set crinkle shell", "Light textured instant", 150, 190],
    ["100", "Heat-set crinkle shell", "Standard textured instant", 165, 210, true],
  ],
  cotton: [
    ["60", "Cotton voile shell", "Hot-climate daily wear", 140, 175, true],
    ["80", "Cotton voile shell", "Better opacity", 150, 190],
  ],
  pleated: [
    ["75", "Chiffon, pressed pleats", "Standard pleated instant", 165, 210, true],
    ["90", "Heavy chiffon, pressed pleats", "Sharper, longer-lasting pleat", 180, 225],
  ],
  "one-piece": [
    ["180", "Jersey one-piece pull-on", "Fastest, simplest style", 120, 155, true],
    ["75", "Chiffon one-piece pull-on", "Dressier one-piece", 125, 160],
  ],
  "two-layer": [
    ["60 + 60", "Double chiffon layer", "Added opacity", 180, 225],
    ["75 + 75", "Double premium chiffon", "Standard two-layer", 195, 245, true],
  ],
  khimar: [
    ["75", "Chiffon, khimar length", "Shoulder & chest coverage", 240, 310, true],
    ["180", "Jersey, khimar length", "Stretch khimar instant", 260, 330],
  ],
};

const sportsTypes = {
  "sports-hijabs": [
    ["140", "Poly-spandex 88/12 performance knit", "Light training", 160, 200],
    ["160", "Poly-spandex 88/12 performance knit", "Standard — wicking, quick-dry", 180, 230, true],
    ["180", "Poly-spandex 88/12 performance knit", "Firmer hold, outdoor sport", 200, 250],
  ],
  "running-hijabs": [
    ["130", "Performance knit + mesh panels", "Standard high-output cardio", 190, 240, true],
    ["150", "Performance knit + mesh panels", "More coverage, still ventilated", 205, 255],
  ],
  "gym-hijabs": [
    ["180", "Poly-spandex 85/15 compression", "Medium compression", 210, 260],
    ["200", "Poly-spandex 85/15 compression", "Standard firm compression", 225, 280, true],
    ["220", "Poly-spandex compression", "Maximum hold, HIIT", 245, 300],
  ],
  "swimming-hijabs": [
    ["180", "Nylon-spandex 82/18, chlorine-resistant", "Pool / light swim", 230, 290],
    ["200", "Nylon-spandex 82/18, chlorine-resistant", "Standard swim hijab", 245, 305, true],
    ["220", "Nylon-spandex, UPF 50+ finish", "Open water, sun protection", 265, 330],
  ],
};

const luxury = {
  "noor-silk-luxury-hijab": [
    ["16 mm (≈69)", "Mulberry silk, hand-rolled, gift box", "90×90 cm", 1050, 1350],
    ["19 mm (≈82)", "Mulberry silk, hand-rolled, gift box", "Standard — 90×90 cm", 1250, 1600, true],
    ["19 mm (≈82)", "Mulberry silk, hand-rolled, gift box", "110×110 cm", 1750, 2200],
    ["22 mm (≈95)", "Mulberry silk, hand-rolled, gift box", "90×90 cm", 1450, 1850],
  ],
  "johara-embellished-silk-hijab": [
    ["16 mm (≈69)", "Mulberry silk + crystal edge trim", "Light trim", 1400, 1950],
    ["19 mm (≈82)", "Mulberry silk + crystal edge trim", "Standard", 1600, 2300, true],
  ],
  "almas-satin-luxury-hijab": [
    ["19 mm (≈82)", "Silk satin (charmeuse)", "Standard — 90×90 cm", 1250, 1600, true],
    ["22 mm (≈95)", "Silk satin (charmeuse)", "90×90 cm, heavier sheen", 1450, 1850],
    ["19 mm (≈82)", "Silk satin (charmeuse)", "110×110 cm", 1750, 2250],
  ],
  "yakoot-printed-silk-hijab": [
    ["12 mm (≈52)", "Printed silk habotai", "Entry print", 850, 1100],
    ["16 mm (≈69)", "Printed mulberry silk", "Standard print", 1150, 1450, true],
    ["19 mm (≈82)", "Printed silk charmeuse", "Premium print", 1350, 1750],
  ],
  "zumurrud-cashmere-blend-hijab": [
    ["120", "Silk-cashmere 85/15", "Standard cool-climate", 1600, 2100, true],
    ["150", "Silk-cashmere 85/15", "Winter weight", 1850, 2400],
  ],
  "lulu-pearl-trim-hijab": [
    ["16 mm (≈69)", "Mulberry silk + pearl-bead edge", "Light trim", 1300, 1800],
    ["19 mm (≈82)", "Mulberry silk + pearl-bead edge", "Standard", 1500, 2100, true],
  ],
  "marjan-ombre-silk-hijab": [
    ["16 mm (≈69)", "Hand dip-dyed ombré silk", "Standard", 1250, 1600, true],
    ["19 mm (≈82)", "Hand dip-dyed ombré silk", "Heavier drape", 1450, 1850],
  ],
};

const bridalHijab = {
  lace: [
    ["75", "Chiffon base + lace trim", "Lace edging", 350, 550, true],
    ["110", "Satin base + lace overlay panel", "Fuller lace work", 420, 650],
  ],
  pearl: [
    ["75–110", "Chiffon / satin + pearl edge", "Edge trim", 450, 700, true],
    ["110", "Satin + scattered pearl field", "All-over pearls", 650, 950],
  ],
  crystal: [
    ["110–130", "Satin / silk + accent crystals", "Accent trim", 550, 850, true],
    ["130", "Heavy satin + full crystal surface", "Fully covered", 900, 1400],
  ],
  "stone-studded": [
    ["110", "Satin + mixed stone, bead & sequin", "Standard", 500, 800, true],
    ["130", "Heavy satin + dense stonework", "Heavy work", 850, 1200],
  ],
  embroidered: [
    ["75–110", "Chiffon / satin + machine embroidery", "Machine motif", 450, 700, true],
    ["110", "Satin + hand embroidery", "Hand-worked motif", 750, 1150],
  ],
  satin: [
    ["110", "Bridal satin, light embellishment", "Standard", 300, 480, true],
    ["130", "Heavy bridal satin", "Weighted drape", 340, 550],
  ],
  silk: [
    ["19 mm (≈82)", "Mulberry silk, hand-rolled", "Plain bridal silk", 1300, 1700, true],
    ["19 mm (≈82)", "Mulberry silk + hand embellishment", "Embellished", 1800, 2600],
  ],
  shimmer: [
    ["70", "Metallic-thread (lurex) weave", "Subtle shimmer", 220, 300, true],
    ["90", "Metallic-thread weave", "Fuller shimmer", 260, 360],
  ],
  "crown-style": [
    ["75–110", "Structured cap + chiffon drape", "Plain", 400, 600, true],
    ["110", "Structured cap + embellished drape", "Embellished", 550, 800],
  ],
  "veil-style": [
    ["60 + 75", "Sheer overlay + base hijab", "Plain veil", 450, 700, true],
    ["60 + 110", "Sheer lace-edged overlay + satin", "Lace-edged veil", 650, 950],
  ],
};

// Hijab products → reuse type tables, marking the product's own GSM as standard.
const hijabProducts = {
  "aria-chiffon-hijab": ["chiffon", "75"],
  "nadia-jersey-hijab": ["jersey", "180"],
  "alia-georgette-hijab": ["georgette", "80"],
  "farah-silk-hijab": ["silk", "19 mm (≈82)"],
  "dania-cotton-voile-hijab": ["cotton", "60"],
  "salwa-animal-print-hijab": ["printed-chiffon", "75"],
  "reema-printed-chiffon-hijab": ["printed-chiffon", "75"],
  "sumaya-crepe-hijab": [crepeHijab, "95"],
  "iman-modal-hijab": ["modal", "160"],
  "amira-instant-hijab": [instantTypes.chiffon, "75 + 180 cap"],
  "shifa-two-piece-instant-hijab": [
    [
      ["75 + 180 cap", "Detachable chiffon shell + jersey cap", "Standard two-piece", 175, 225, true],
      ["90 + 180 cap", "Heavy chiffon shell + jersey cap", "Premium two-piece", 195, 245],
    ],
  ],
  "rukan-jersey-instant-hijab": [instantTypes.jersey, "180"],
  "wafa-georgette-instant-hijab": [
    [
      ["80", "Georgette shell + jersey cap", "Standard", 160, 205, true],
      ["100", "Heavy georgette shell + jersey cap", "More opacity", 175, 220],
    ],
  ],
  "elif-printed-instant-hijab": [
    [
      ["75 + 180 cap", "Digitally printed chiffon + jersey cap", "Standard print", 165, 210, true],
      ["90 + 180 cap", "Printed heavy chiffon + jersey cap", "Premium print", 185, 230],
    ],
  ],
  "meryem-modal-instant-hijab": [instantTypes.modal, "160"],
  "aaliyah-satin-instant-hijab": [
    [
      ["110", "Satin-finish shell + jersey cap", "Standard", 165, 210, true],
      ["130", "Heavy satin-finish shell + jersey cap", "Occasion weight", 180, 230],
    ],
  ],
  "zayn-sports-hijab": [sportsTypes["sports-hijabs"], "160"],
  "rayyan-swim-hijab": [sportsTypes["swimming-hijabs"], "200"],
  "sakina-running-hijab": [sportsTypes["running-hijabs"], "130"],
  "yumna-yoga-hijab": [
    [
      ["120", "Poly-spandex 90/10, ultra-light", "Standard yoga / studio", 150, 190, true],
      ["140", "Poly-spandex 90/10", "More coverage", 165, 205],
    ],
  ],
  "batul-compression-hijab": [sportsTypes["gym-hijabs"], "200"],
  "iklas-junior-sports-hijab": [
    [
      ["140", "Poly-spandex 88/12, junior fit", "Standard junior", 140, 180, true],
      ["160", "Poly-spandex 88/12, junior fit", "Firmer hold", 150, 195],
    ],
  ],
  "zara-print-sports-hijab": [
    [
      ["160", "Sublimation-printed performance knit", "Standard print", 210, 265, true],
      ["180", "Sublimation-printed performance knit", "Firmer hold", 225, 285],
    ],
  ],
};

// ---------------------------------------------------------------- ABAYAS
// Base price for a plain closed / everyday block, sizes 52–58.
const abayaBase = {
  "Zoom 120": [120, "Zoom (polyester)", 450, 560],
  "Zoom 130": [130, "Zoom (polyester)", 480, 600],
  "Zoom 140": [140, "Zoom (polyester)", 510, 640],
  "Nida 150": [150, "Nida (Farasha-type)", 650, 820],
  "Nida 170": [170, "Nida", 710, 890],
  "Nida 185": [185, "Nida", 760, 950],
  "Korean Nida 160": [160, "Korean Nida", 880, 1100],
  "Korean Nida 180": [180, "Korean Nida", 950, 1200],
  "Korean Nida 195": [195, "Korean Nida", 1020, 1280],
  "Korean Nida 210": [210, "Korean Nida", 1090, 1380],
  "Crepe 200": [200, "Premium crepe", 950, 1200],
  "Crepe 210": [210, "Premium crepe", 990, 1250],
  "Crepe 220": [220, "Premium crepe", 1030, 1300],
  "Crepe 240": [240, "Heavy crepe", 1100, 1400],
  "Linen 150": [150, "Linen-cotton 70/30", 1050, 1350],
  "Linen 180": [180, "Linen-cotton 70/30", 1150, 1480],
  "Technical knit 180": [180, "Performance knit", 750, 950],
  "Technical knit 200": [200, "Performance knit", 820, 1050],
};

const round10 = (n) => Math.round(n / 10) * 10;

function abayaRows(bases, adder, use, standard) {
  return bases.map((key) => {
    const [gsm, fab, lo, hi] = abayaBase[key];
    return [String(gsm), fab, use, round10(lo + adder[0]), round10(hi + adder[1]), key === standard];
  });
}

const styleAdders = [
  ["Closed / Everyday", "Base block", 0, 0],
  ["Open (layering)", "No closure", 0, 0],
  ["Kimono", "Straight cut, tie belt", -40, 0],
  ["Front Open (snaps / buttons)", "Full-length closure hardware", 60, 120],
  ["Batwing", "Dropped dolman sleeve", 80, 150],
  ["Butterfly", "Wide winged panel, more fabric", 120, 200],
  ["Kloosh / Umbrella", "Circular cut, ~30% more fabric", 220, 380],
  ["Coat / Blazer", "Lapel, collar, self-belt", 250, 420],
  ["Two-Piece set", "Top + skirt, same lot", 250, 400],
  ["Three-Piece set", "Top + skirt + slip / hijab", 450, 700],
  ["Machine embroidery", "Placement panels", 300, 650],
  ["Hand stonework / embroidery", "Bodice, cuffs, hem", 700, 1800],
  ["Sizes 60–62", "Extra length & width", 40, 80],
];

const abayaTypes = {
  closed: abayaRows(["Zoom 130", "Nida 185", "Korean Nida 180", "Korean Nida 195"], [0, 0], "Pull-over or concealed back zip", "Nida 185"),
  open: abayaRows(["Zoom 130", "Nida 170", "Korean Nida 180", "Crepe 200"], [0, 0], "Open layering front", "Korean Nida 180"),
  butterfly: abayaRows(["Nida 185", "Korean Nida 180", "Korean Nida 195"], [120, 200], "Winged sleeve panel", "Korean Nida 195"),
  kimono: abayaRows(["Zoom 130", "Zoom 140", "Nida 150", "Linen 150"], [-40, 0], "Straight cut, self tie-belt", "Zoom 140"),
  "kloosh-umbrella": abayaRows(["Nida 185", "Korean Nida 180", "Korean Nida 210"], [220, 380], "Circular flared hem", "Korean Nida 180"),
  batwing: abayaRows(["Zoom 130", "Nida 185", "Korean Nida 180"], [80, 150], "Dropped dolman sleeve", "Nida 185"),
  "coat-blazer": abayaRows(["Korean Nida 210", "Crepe 220", "Crepe 240"], [250, 420], "Lapel holds roll without interfacing", "Crepe 220"),
  "front-open": abayaRows(["Nida 185", "Korean Nida 180", "Korean Nida 195"], [60, 120], "Full-length snaps / buttons", "Korean Nida 180"),
  "two-piece": abayaRows(["Nida 170", "Korean Nida 180", "Crepe 220"], [250, 400], "Per set (top + skirt)", "Korean Nida 180"),
  "three-piece": abayaRows(["Nida 170", "Korean Nida 180", "Crepe 220"], [450, 700], "Per set (top + skirt + slip/hijab)", "Korean Nida 180"),
  embroidered: [
    ...abayaRows(["Nida 185"], [300, 650], "Machine embroidery", null),
    ...abayaRows(["Crepe 220"], [300, 650], "Machine embroidery", "Crepe 220"),
    ...abayaRows(["Crepe 240"], [300, 650], "Machine embroidery, heavier", null),
    ...abayaRows(["Crepe 220"], [700, 1800], "Hand stonework + embroidery", null),
  ],
  everyday: abayaRows(["Zoom 130", "Nida 185", "Korean Nida 180"], [0, 0], "Concealed closures, side pockets", "Nida 185"),
  "sports-abayas": abayaRows(["Technical knit 180", "Technical knit 200"], [0, 0], "Looser activewear cut", "Technical knit 180"),
};

const abayaProducts = {
  "layla-nida-abaya": abayaRows(["Korean Nida 160", "Korean Nida 180", "Korean Nida 195"], [60, 120], "Open front, 5-point concealed snap, pockets", "Korean Nida 180"),
  "zahra-embellished-abaya": abayaRows(["Crepe 200", "Crepe 220", "Crepe 240"], [900, 2000], "Hand-placed stonework", "Crepe 220"),
  "salma-korean-nida-abaya": abayaRows(["Korean Nida 180", "Korean Nida 195", "Korean Nida 210"], [120, 200], "Butterfly sleeve", "Korean Nida 195"),
  "widad-kimono-abaya": abayaRows(["Zoom 130", "Zoom 140", "Linen 150"], [-40, 0], "Kimono cut, open", "Zoom 140"),
  "nailah-closed-abaya": abayaRows(["Nida 150", "Nida 170", "Nida 185"], [30, 60], "Pull-over, fitted yoke, A-line", "Nida 185"),
  "farida-linen-abaya": abayaRows(["Linen 150", "Linen 180"], [0, 0], "Reduced-crease resort weight", "Linen 180"),
  "halima-everyday-abaya": abayaRows(["Zoom 120", "Zoom 130", "Zoom 140"], [0, 0], "Value basics programme", "Zoom 130"),
  "safiya-embroidered-crepe-abaya": abayaRows(["Crepe 200", "Crepe 210", "Crepe 240"], [300, 650], "Machine embroidery", "Crepe 210"),
};

const bridalAbaya = {
  embroidered: [
    ["185", "Nida + light machine embroidery", "Entry bridal / nikah guest", 1200, 1800],
    ["220", "Crepe + bridal embroidery", "Standard", 2200, 4000, true],
    ["130", "Heavy satin + bridal embroidery", "High sheen", 2400, 4300],
  ],
  pearl: [
    ["220", "Crepe + pearl trim", "Neckline & cuffs", 2400, 3600, true],
    ["130", "Satin + scattered pearl field", "Bodice & sleeves", 3800, 6000],
  ],
  "stone-work": [
    ["220", "Crepe + stone at bodice & cuffs", "Standard", 2600, 4200, true],
    ["240", "Heavy crepe + dense stonework", "Heavy work", 4200, 6500],
  ],
  crystal: [
    ["220–240", "Crepe + accent crystals", "Accent trim", 2800, 4500, true],
    ["130", "Heavy satin + crystal bodice", "Fully covered bodice", 5000, 8500],
  ],
  lace: [
    ["220", "Crepe + lace sleeve inserts", "Lace panels", 2200, 3400, true],
    ["130", "Satin + full lace overlay", "Full overlay", 3200, 5000],
  ],
  satin: [
    ["110", "Bridal satin, light embellishment", "Standard", 1800, 2800, true],
    ["130", "Heavy bridal satin", "Weighted drape", 2100, 3200],
  ],
  silk: [
    ["19 mm (≈82)", "Mulberry silk, hand-finished", "Standard luxury", 6500, 9500, true],
    ["22 mm (≈95)", "Mulberry silk charmeuse", "Top tier", 8000, 12000],
  ],
  "cape-style": [
    ["220", "Crepe base + plain cape", "Standard", 2800, 4800, true],
    ["220 + 60", "Crepe base + embellished sheer cape", "Embellished cape", 4500, 7000],
  ],
  "trail-gown-style": [
    ["130", "Satin gown + back trail", "Standard", 3500, 6000, true],
    ["240", "Heavy crepe + embellished trail", "Heavy work", 6000, 9500],
  ],
  white: [
    ["130", "White satin", "Standard", 2000, 3500, true],
    ["220", "White crepe", "Matte finish", 2200, 3800],
  ],
  champagne: [
    ["130", "Champagne satin", "Standard", 2100, 3600, true],
    ["220", "Champagne crepe", "Matte finish", 2300, 3900],
  ],
  "gold-embellished": [
    ["220", "Dark crepe + gold thread", "Standard", 3000, 5200, true],
    ["240", "Heavy crepe + gold zari & stone", "Heavy work", 5000, 8000],
  ],
};

const addOns = [
  ["Woven brand label", "₹2 – ₹5 / pc"],
  ["Printed care / size label", "₹1 – ₹3 / pc"],
  ["Printed hang tag with string", "₹3 – ₹8 / pc"],
  ["Individual poly bag with logo", "₹2 – ₹4 / pc"],
  ["Branded retail card / sleeve (hijabs)", "₹8 – ₹15 / pc"],
  ["Rigid gift box (luxury / bridal)", "₹60 – ₹150 / pc"],
  ["Custom Pantone lab-dip", "₹1,500 – ₹3,000 per colour (one-time)"],
  ["Print strike-off", "₹2,500 – ₹5,000 per design (one-time)"],
  ["Sample charges (any style)", "₹3,000 flat per sample"],
];

module.exports = {
  INR_PER_USD,
  hijabTypes,
  crepeHijab,
  instantTypes,
  sportsTypes,
  luxury,
  bridalHijab,
  hijabProducts,
  abayaBase,
  styleAdders,
  abayaTypes,
  abayaProducts,
  bridalAbaya,
  addOns,
};
