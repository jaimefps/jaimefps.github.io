/* ============================================================
   Project data — edit this list to curate what shows up.
   Each featured project gets a hand-drawn minimalist SVG
   representing its concept (see ART below).
   ============================================================ */

const GH = "jaimefps";

/* shared art palette */
const A = {
  line: "#4d5a6e",   // dim slate strokes
  soft: "#33404f",   // even dimmer secondary strokes
  node: "#161d27",   // node fill (panel)
  amber: "#f0a84b",  // accent
};

const ART = {
  /* neural net wired into a Game Boy */
  "pokemon-ai": `
  <svg viewBox="0 0 420 210" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Neural network controlling a Game Boy">
    <g stroke="${A.soft}" stroke-width="2" fill="none">
      <line x1="78" y1="55" x2="140" y2="85"/>
      <line x1="78" y1="105" x2="140" y2="85"/>
      <line x1="78" y1="105" x2="140" y2="125"/>
      <line x1="78" y1="155" x2="140" y2="125"/>
      <line x1="140" y1="85" x2="198" y2="105"/>
      <line x1="140" y1="125" x2="198" y2="105"/>
    </g>
    <path class="art-dash" d="M198 105 H 258" stroke="${A.amber}" stroke-width="2" stroke-dasharray="5 6" fill="none"/>
    <g fill="${A.node}" stroke="${A.line}" stroke-width="2">
      <circle cx="78" cy="55" r="7"/>
      <circle cx="78" cy="105" r="7"/>
      <circle cx="78" cy="155" r="7"/>
      <circle cx="140" cy="85" r="7"/>
      <circle cx="140" cy="125" r="7"/>
    </g>
    <circle cx="198" cy="105" r="8" fill="${A.amber}"/>
    <g stroke="${A.line}" fill="none" stroke-width="2.5">
      <rect x="258" y="25" width="106" height="160" rx="14"/>
      <rect x="273" y="42" width="76" height="60" rx="4"/>
      <path d="M289 133 h9 v-9 h9 v9 h9 v9 h-9 v9 h-9 v-9 h-9 z"/>
      <circle cx="337" cy="140" r="6.5"/>
      <circle cx="353" cy="128" r="6.5"/>
      <line x1="296" y1="166" x2="312" y2="160"/>
      <line x1="318" y1="166" x2="334" y2="160"/>
    </g>
    <g fill="${A.amber}">
      <rect x="303" y="58" width="8" height="8"/>
      <rect x="295" y="66" width="8" height="8"/>
      <rect x="311" y="66" width="8" height="8"/>
      <rect x="303" y="74" width="8" height="8"/>
      <rect x="295" y="82" width="8" height="8"/>
      <rect x="311" y="82" width="8" height="8"/>
    </g>
  </svg>`,

  /* constellation graph rising out of an open book */
  "book-graph-explorer": `
  <svg viewBox="0 0 420 210" preserveAspectRatio="xMidYMid meet" role="img" aria-label="A graph of ideas rising from an open book">
    <g stroke="${A.soft}" stroke-width="2" fill="none">
      <line x1="150" y1="62" x2="210" y2="38"/>
      <line x1="210" y1="38" x2="272" y2="64"/>
      <line x1="150" y1="62" x2="185" y2="100"/>
      <line x1="272" y1="64" x2="240" y2="104"/>
      <line x1="185" y1="100" x2="240" y2="104"/>
      <line x1="150" y1="62" x2="240" y2="104"/>
    </g>
    <path class="art-dash" d="M210 140 V 38" stroke="${A.amber}" stroke-width="2" stroke-dasharray="5 6" fill="none"/>
    <g fill="${A.node}" stroke="${A.line}" stroke-width="2">
      <circle cx="150" cy="62" r="7"/>
      <circle cx="272" cy="64" r="7"/>
      <circle cx="185" cy="100" r="6"/>
      <circle cx="240" cy="104" r="6"/>
    </g>
    <circle cx="210" cy="38" r="8" fill="${A.amber}"/>
    <g stroke="${A.line}" stroke-width="2.5" fill="none" stroke-linejoin="round">
      <path d="M210 150 C 185 136 140 134 112 142 L112 168 C 140 160 185 162 210 176"/>
      <path d="M210 150 C 235 136 280 134 308 142 L308 168 C 280 160 235 162 210 176"/>
      <line x1="210" y1="150" x2="210" y2="176"/>
    </g>
    <g stroke="${A.soft}" stroke-width="2" fill="none">
      <path d="M128 150 C 150 144 180 145 198 152"/>
      <path d="M292 150 C 270 144 240 145 222 152"/>
    </g>
  </svg>`,

  /* an atom of state, held inside code braces */
  "use-vanilla-state": `
  <svg viewBox="0 0 420 210" preserveAspectRatio="xMidYMid meet" role="img" aria-label="An atom held between code braces">
    <text x="110" y="128" font-family="IBM Plex Mono, monospace" font-size="76" fill="${A.line}">{</text>
    <text x="282" y="128" font-family="IBM Plex Mono, monospace" font-size="76" fill="${A.line}">}</text>
    <g stroke="${A.soft}" stroke-width="2" fill="none">
      <ellipse cx="210" cy="103" rx="62" ry="22"/>
      <ellipse cx="210" cy="103" rx="62" ry="22" transform="rotate(60 210 103)"/>
      <ellipse cx="210" cy="103" rx="62" ry="22" transform="rotate(-60 210 103)"/>
    </g>
    <circle cx="210" cy="103" r="8" fill="${A.amber}"/>
    <circle cx="264" cy="84" r="5" fill="${A.node}" stroke="${A.line}" stroke-width="2"/>
    <circle cx="173" cy="146" r="5" fill="${A.node}" stroke="${A.line}" stroke-width="2"/>
  </svg>`,

  /* canonical Spanish becomes boricua Spanish */
  "borikense": `
  <svg viewBox="0 0 420 210" preserveAspectRatio="xMidYMid meet" role="img" aria-label="The word puerta becoming puelta in speech bubbles">
    <g stroke="${A.line}" stroke-width="2.5" fill="none" stroke-linejoin="round">
      <path d="M55 60 h130 a10 10 0 0 1 10 10 v40 a10 10 0 0 1 -10 10 h-95 l-18 18 v-18 h-17 a10 10 0 0 1 -10 -10 v-40 a10 10 0 0 1 10 -10 z"/>
      <path d="M235 92 h130 a10 10 0 0 1 10 10 v40 a10 10 0 0 1 -10 10 h-17 v18 l-18 -18 h-95 a10 10 0 0 1 -10 -10 v-40 a10 10 0 0 1 10 -10 z"/>
    </g>
    <text x="120" y="98" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="${A.line}">pue<tspan fill="${A.amber}" text-decoration="line-through">r</tspan>ta</text>
    <text x="300" y="130" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="${A.line}">pue<tspan fill="${A.amber}">l</tspan>ta</text>
    <path class="art-dash" d="M196 108 C 212 118 218 120 232 126" stroke="${A.amber}" stroke-width="2" stroke-dasharray="5 6" fill="none"/>
  </svg>`,

  /* analogue clock meshed with a servo gear */
  "clock-concerns": `
  <svg viewBox="0 0 420 210" preserveAspectRatio="xMidYMid meet" role="img" aria-label="A clock face driven by a gear">
    <g stroke="${A.line}" stroke-width="2.5" fill="none">
      <circle cx="165" cy="105" r="62"/>
      <line x1="165" y1="48" x2="165" y2="58"/>
      <line x1="165" y1="152" x2="165" y2="162"/>
      <line x1="108" y1="105" x2="118" y2="105"/>
      <line x1="212" y1="105" x2="222" y2="105"/>
    </g>
    <line x1="165" y1="105" x2="165" y2="70" stroke="${A.line}" stroke-width="3" stroke-linecap="round"/>
    <line x1="165" y1="105" x2="192" y2="118" stroke="${A.amber}" stroke-width="3" stroke-linecap="round"/>
    <circle cx="165" cy="105" r="4.5" fill="${A.amber}"/>
    <g stroke="${A.line}" stroke-width="2.5" fill="none">
      <circle cx="292" cy="128" r="26"/>
      <circle cx="292" cy="128" r="9"/>
      <line x1="292" y1="94" x2="292" y2="102"/>
      <line x1="292" y1="154" x2="292" y2="162"/>
      <line x1="258" y1="128" x2="266" y2="128"/>
      <line x1="318" y1="128" x2="326" y2="128"/>
      <line x1="268" y1="104" x2="274" y2="110"/>
      <line x1="316" y1="152" x2="310" y2="146"/>
      <line x1="316" y1="104" x2="310" y2="110"/>
      <line x1="268" y1="152" x2="274" y2="146"/>
    </g>
    <path class="art-dash" d="M292 162 C 292 184 230 184 200 175" stroke="${A.amber}" stroke-width="2" stroke-dasharray="5 6" fill="none"/>
  </svg>`,
};

const FEATURED = [
  {
    repo: "borikense",
    title: "borikense",
    desc: "Convert canonical Spanish text into a Puerto Rican accent — phonetic rules as code.",
    tags: ["JavaScript", "language", "NLP"],
  },
  {
    repo: "clock-concerns",
    title: "clock-concerns",
    desc: "A physical analogue clock driven by servos and an Arduino — where firmware meets woodworking.",
    tags: ["Arduino", "C++", "hardware"],
  },
  {
    repo: "book-graph-explorer",
    title: "book-graph-explorer",
    desc: "Navigate Spinoza's Ethics as an interactive graph — every axiom, proposition, and proof linked and explorable on the web.",
    tags: ["TypeScript", "graph viz", "philosophy"],
  },
  {
    repo: "pokemon-ai",
    title: "pokemon-ai",
    desc: "An AI completion game loop that plays Pokemon end-to-end on a Game Boy emulator — perception, decisions, and button presses.",
    tags: ["JavaScript", "LLM", "emulation"],
  },
];

const MORE = [
  { repo: "ai-gora", desc: "Agora for AIs — multi-agent debate experiments.", lang: "TypeScript" },
  { repo: "keyforge-counter", desc: "Arduino LED controller for card-game point tracking.", lang: "C++" },
  { repo: "decker", desc: "Real-time data displays for your card decks.", lang: "C++" },
  { repo: "use-vanilla-state", desc: "A tiny React state library — a simpler take on the MobX idea.", lang: "TypeScript" },
  { repo: "kysely-stack", desc: "Starter repo: full-stack app with type safety across FE/BE.", lang: "TypeScript" },
  { repo: "set-game", desc: "The card game Set, playable in the browser.", lang: "TypeScript" },
  { repo: "slack-paladin", desc: "Slack bot for giving kudos and granting achievements.", lang: "TypeScript" },
  { repo: "burger-maker", desc: "Sample code to teach kids about JavaScript.", lang: "JavaScript" },
];

/* GitHub's standard language colors */
const LANG_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  "C++": "#f34b7d",
  C: "#555555",
  PHP: "#4F5D95",
  CSS: "#663399",
  HTML: "#e34c26",
};

/* ---------- render ---------- */

const repoUrl = (repo) => `https://github.com/${GH}/${repo}`;

function renderFeatured() {
  const grid = document.getElementById("featured-grid");
  grid.innerHTML = FEATURED.map(
    (p) => `
    <a class="card" data-repo="${p.repo}" href="${repoUrl(p.repo)}" target="_blank" rel="noopener">
      <div class="card-thumb">${ART[p.repo] || ""}</div>
      <div class="card-body">
        <div class="card-title">${p.title}<span class="arrow">&#8599;</span></div>
        <p class="card-desc">${p.desc}</p>
        <div class="card-tags">
          ${p.tags.map((t, i) => `<span class="tag${i === 0 ? " lang" : ""}">${t}</span>`).join("")}
        </div>
      </div>
    </a>`
  ).join("");
}

function renderRail() {
  const list = document.getElementById("rail-list");
  list.innerHTML = MORE.map(
    (p) => `
    <a class="repo" href="${repoUrl(p.repo)}" target="_blank" rel="noopener">
      <div class="repo-head">
        ${p.repo}
        <span class="lang-dot" style="background:${LANG_COLORS[p.lang] || "#8b97a5"}"></span>
        <span class="repo-lang">${p.lang}</span>
      </div>
      <div class="repo-desc">${p.desc}</div>
    </a>`
  ).join("");
}

/* ---------- persona coin: philosopher / programmer ---------- */

function startCoin() {
  const inner = document.getElementById("coin-inner");
  if (!inner) return;

  // Phase-lock the shared pulse clock (pulseclock on <body>) to the coin's
  // spin, so "glow lit" lands exactly on "face landed". Both animations sit
  // on static elements and normally start in the same style flush, but this
  // makes the alignment a guarantee rather than a coincidence.
  const flip = inner.getAnimations().find((a) => a.animationName === "coinflip");
  const clock = document.body.getAnimations().find((a) => a.animationName === "pulseclock");
  if (flip && clock && flip.startTime !== null) clock.startTime = flip.startTime;

  // build the coin's thickness: thin circle slices stacked along Z
  for (let z = -4; z <= 4; z++) {
    const slice = document.createElement("div");
    slice.className = "coin-layer";
    slice.style.transform = `translateZ(${z}px)`;
    inner.appendChild(slice);
  }

  // Each CSS animation iteration is one full 360deg turn: the philosopher
  // face shows at 0deg, the hacker face at 180deg.
  const labelEl = document.getElementById("coin-label");
  const LABELS = ["philosophy", "computers"]; // front face, back face
  const DUR = parseFloat(getComputedStyle(inner).animationDuration) * 1000 || 3400;

  // each landing pulses the featured cards on that theme
  const THEME_CARDS = {
    philosophy: ["book-graph-explorer", "borikense"],
    computers: ["pokemon-ai", "clock-concerns"],
  };

  // The glow itself is pure CSS: card and label both read --pulse from the
  // single body clock, so they fade in lockstep. JS only picks WHICH cards
  // are armed, swapping the class at edge-on moments while the glow is dark.
  function resonate(idx) {
    const repos = THEME_CARDS[LABELS[idx]] || [];
    document.querySelectorAll(".card.resonate").forEach((c) => c.classList.remove("resonate"));
    repos.forEach((r) => {
      const card = document.querySelector(`.card[data-repo="${r}"]`);
      if (card) card.classList.add("resonate");
    });
  }

  // The label's glow is pure CSS (--pulse from the body clock). JS only
  // changes the TEXT, and only at edge-on moments (DUR/4 before each
  // landing) while the label is faded out.
  function onCycle() {
    if (!labelEl.textContent) {
      // very first start: label and pulse both begin lit on the front theme
      labelEl.textContent = LABELS[0];
      resonate(0);
    }
    setTimeout(() => { labelEl.textContent = LABELS[1]; resonate(1); }, DUR * 0.25);
    setTimeout(() => { labelEl.textContent = LABELS[0]; resonate(0); }, DUR * 0.75);
  }

  inner.addEventListener("animationstart", onCycle);
  inner.addEventListener("animationiteration", onCycle);
}

renderFeatured();
renderRail();
startCoin();
