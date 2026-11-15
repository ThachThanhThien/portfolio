/* =========================================================
   PROJECT DATA — edit this section to update your projects
   ========================================================= */

// Web projects → each card navigates to its page
const webProjects = [
  {
    name: "Learning Portal",
    icon: "📚",
    color: "#6366f1",
    description: "A place to organize courses, notes and learning paths in one spot.",
    url: "https://learn-with-will.github.io/",
  },
  {
    name: "Toolbox",
    icon: "🧰",
    color: "#f59e0b",
    description: "A collection of handy everyday utilities for developers and everyone else.",
    url: "https://toolbox.thientt.com/",
  },
  {
    name: "Recipe",
    icon: "🍳",
    color: "#ef4444",
    description: "Find, save and cook your favourite recipes with step-by-step guides.",
    url: "https://recipe-sepia-three.vercel.app/",
  },
];

// Mobile apps → each shows an info section with download links
const apps = [
  {
    name: "Goal Tracker",
    icon: "🎯",
    color: "#22c55e",
    tagline: "Turn big goals into daily wins.",
    description:
      "Set goals, break them into milestones and track your progress every day. Streaks and reminders keep you motivated.",
    features: ["Daily check-ins & streaks", "Milestones & progress charts", "Smart reminders"],
    downloads: [
      { type: "appstore", url: "#" }, // TODO
      { type: "googleplay", url: "#" }, // TODO
    ],
  },
  {
    name: "Photo Idea",
    icon: "📸",
    color: "#ec4899",
    tagline: "Never run out of things to shoot.",
    description:
      "Get fresh photography ideas, poses and challenges whenever you need inspiration. Save your favourites for your next shoot.",
    features: ["Daily photo challenges", "Pose & composition ideas", "Save to your mood board"],
    downloads: [
      { type: "appstore", url: "#" },
      { type: "googleplay", url: "#" },
    ],
  },
  {
    name: "Closet",
    icon: "👕",
    color: "#8b5cf6",
    tagline: "Your wardrobe, in your pocket.",
    description:
      "Digitize your wardrobe, mix and match outfits and plan what to wear. Know exactly what you own before you shop.",
    features: ["Catalog your clothes", "Build & save outfits", "Outfit planner calendar"],
    downloads: [
      { type: "appstore", url: "#" },
      { type: "googleplay", url: "#" },
    ],
  },
];

// Browser extensions → each shows an info section with download links
const extensions = [
  {
    name: "Flash Card",
    icon: "🃏",
    color: "#0ea5e9",
    tagline: "Learn while you browse.",
    description:
      "Create flash cards from any web page and review them with spaced repetition right from your browser toolbar.",
    features: ["Save words from any page", "Spaced repetition reviews", "Sync across devices"],
    downloads: [
      {
        type: "download",
        label: "Download Extension",
        sub: "Get the ZIP file",
        icon: "📦",
        url: "https://drive.google.com/uc?export=download&id=1WBzNAnV0doXFDB0eOc1mWysl4Jjbz1Bi",
      },
    ],
  },
  {
    name: "Dark Mode",
    icon: "🌙",
    color: "#64748b",
    tagline: "Easy on the eyes, everywhere.",
    description:
      "Apply a beautiful dark theme to any website with one click. Adjust brightness and contrast, or whitelist sites.",
    features: ["One-click dark mode", "Per-site settings", "Brightness & contrast control"],
    downloads: [
      {
        type: "download",
        label: "Download Extension",
        sub: "Get the ZIP file",
        icon: "📦",
        url: "https://drive.google.com/uc?export=download&id=1WZZzuwPSXSegcYx8Q2c55l7UUa4CKw0k",
      },
    ],
  },
  {
    name: "Task",
    icon: "✅",
    color: "#14b8a6",
    tagline: "Your to-do list, one click away.",
    description:
      "A lightweight task manager that lives in your browser. Capture tasks quickly and stay focused on what matters.",
    features: ["Quick-add from toolbar", "Due dates & priorities", "New-tab task overview"],
    downloads: [
      {
        type: "download",
        label: "Download Extension",
        sub: "Get the ZIP file",
        icon: "📦",
        url: "https://drive.google.com/uc?export=download&id=1Px_PJFL1cvvbbxi8vyJdIZyeE6zO3-Q3",
      },
    ],
  },
];

/* =========================================================
   RENDERING — no need to edit below this line
   ========================================================= */

const STORE = {
  appstore: { label: "App Store", sub: "Download on the", icon: "🍎" },
  googleplay: { label: "Google Play", sub: "Get it on", icon: "▶" },
  chrome: { label: "Chrome Web Store", sub: "Available in the", icon: "🌐" },
  firefox: { label: "Firefox Add-ons", sub: "Get it for", icon: "🦊" },
};

const el = (html) => {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
};

function renderWeb() {
  const root = document.getElementById("webCards");
  webProjects.forEach((p) => {
    root.appendChild(
      el(`
      <a class="card reveal" href="${p.url}" target="_blank" rel="noopener" style="--accent:${p.color}">
        <div class="card-icon">${p.icon}</div>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <span class="card-link">Open <span class="arrow">→</span></span>
      </a>`)
    );
  });
}

function renderShowcase(rootId, items, kind) {
  const root = document.getElementById(rootId);
  items.forEach((item, i) => {
    const buttons = item.downloads
      .map((d) => {
        const s = STORE[d.type] || {
          label: d.label || "Download",
          sub: d.sub || "Direct download",
          icon: d.icon || "📥",
        };
        return `<a class="store-btn" href="${d.url}" target="_blank" rel="noopener">
            <span class="store-icon">${s.icon}</span>
            <span><small>${s.sub}</small>${s.label}</span>
          </a>`;
      })
      .join("");

    const visual =
      kind === "app"
        ? `<div class="phone"><div class="phone-notch"></div><div class="phone-screen">
             <div class="mock-icon">${item.icon}</div><div class="mock-title">${item.name}</div>
             <div class="mock-line"></div><div class="mock-line short"></div>
             <div class="mock-bar"><span style="width:${55 + i * 15}%"></span></div>
           </div></div>`
        : `<div class="browser"><div class="browser-bar"><i></i><i></i><i></i>
             <div class="browser-url"></div><div class="ext-badge">${item.icon}</div></div>
             <div class="browser-body"><div class="popup">
               <div class="mock-title">${item.icon} ${item.name}</div>
               <div class="mock-line"></div><div class="mock-line short"></div><div class="mock-line"></div>
             </div></div></div>`;

    root.appendChild(
      el(`
      <article class="feature reveal ${i % 2 ? "reverse" : ""}" style="--accent:${item.color}">
        <div class="feature-visual">${visual}</div>
        <div class="feature-text">
          <span class="pill">${item.icon} ${kind === "app" ? "Mobile app" : "Browser extension"}</span>
          <h3>${item.name}</h3>
          <p class="tagline">${item.tagline}</p>
          <p>${item.description}</p>
          <ul class="features">${item.features.map((f) => `<li>${f}</li>`).join("")}</ul>
          <div class="stores">${buttons}</div>
        </div>
      </article>`)
    );
  });
}

renderWeb();
renderShowcase("appList", apps, "app");
renderShowcase("extList", extensions, "ext");
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
toggle.addEventListener("click", () => links.classList.toggle("open"));
links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => links.classList.remove("open")));

// Reveal on scroll
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((n) => io.observe(n));
