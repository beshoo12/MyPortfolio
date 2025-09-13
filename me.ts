// ===== Types =====
type Project = { 
  title: string; 
  tag: string; 
  desc: string; 
  link: string; 
  repo: string; 
};

// ===== Dataset =====
const PROJECTS_TS: Project[] = [
  { title: "Age-Calculate", tag: "Frontend", desc: "E-commerce inspired landing with responsive grid.", link: "https://beshoo12.github.io/Age-Calculate/", repo: "https://github.com/beshoo12/Age-Calculate.git" },
  { title: "ALAHLYSTORE", tag: "Frontend", desc: "Sports merchandise store UI + filters.", link: "#", repo: "#" },
  { title: "AVATAR", tag: "UI/UX", desc: "Character themed landing page with smooth scroll.", link: "#", repo: "#" },
  { title: "CRUDS", tag: "JavaScript", desc: "CRUD app (localStorage + validation + search).", link: "#", repo: "#" },
  { title: "CURDS_USE_PURE_JS", tag: "JavaScript", desc: "Pure JS data manager with search & sort.", link: "#", repo: "#" },
  { title: "Dashboard_files", tag: "UI", desc: "Admin dashboard widgets & tables.", link: "#", repo: "#" },
  { title: "FORM_files", tag: "Frontend", desc: "Responsive forms + validation patterns.", link: "#", repo: "#" },
  { title: "Iphones_Apple", tag: "Frontend", desc: "Product landing with feature highlights.", link: "#", repo: "#" },
  { title: "Javascript", tag: "JavaScript", desc: "Collection of JS utilities and mini-apps.", link: "#", repo: "#" },
  { title: "MENU_files", tag: "Frontend", desc: "Interactive navigation menu components.", link: "#", repo: "#" },
  { title: "Simple Weather App", tag: "JavaScript", desc: "Personal profile page with animations.", link: "https://beshoo12.github.io/Simple-Weather-App/", repo: "https://github.com/beshoo12/Simple-Weather-App.git" },
  { title: "X-O Game", tag: "React.js", desc: "Currency converter utility.", link: "https://beshoo12.github.io/xo-game-react/", repo: "https://github.com/beshoo12/xo-game-react.git" },
  { title: "Mavro Sc Club", tag: "Web App", desc: "Online database system.", link: "https://beshoo12.github.io/DATABASE/", repo: "https://github.com/beshoo12/DATABASE.git" },
  { title: "Shop Fruits", tag: "Frontend", desc: "Mini online store.", link: "https://beshoo12.github.io/shop-fruits/", repo: "https://github.com/beshoo12/shop-fruits.git" },
  { title: "Todo_list", tag: "React.js", desc: "Club fan page with highlights & news layout.", link: "https://beshoo12.github.io/todo-list-react/", repo: "https://github.com/beshoo12/todo-list-react.git" }
];

// ===== Render Projects =====
function renderProjectsTS(list: Project[]): void {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = "";
  list.forEach((p) => {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-lg-4 reveal";
    col.innerHTML = `
      <div class="card project h-100">
        <div class="card-body">
          <div class="d-flex align-items-start justify-content-between">
            <h3 class="h5 mb-1">${p.title}</h3>
            <span class="badge">${p.tag}</span>
          </div>
          <p class="mb-3 text-blush-200">${p.desc}</p>
          <div class="d-flex gap-2">
            <a class="btn btn-crimson btn-sm" href="${p.link}" target="_blank" rel="noreferrer"><i class="fa-solid fa-up-right-from-square me-1"></i>Demo</a>
            <a class="btn btn-outline-peach btn-sm" href="${p.repo}" target="_blank" rel="noreferrer"><i class="fa-brands fa-github me-1"></i>Repo</a>
          </div>
        </div>
      </div>`;
    grid.appendChild(col);
  });

  revealScanTS();
}

// ===== Reveal on Scroll =====
function revealScanTS(): void {
  const els = document.querySelectorAll<HTMLElement>(".reveal");
  const winH = window.innerHeight;
  els.forEach((el) => {
    if (el.getBoundingClientRect().top < winH - 100) {
      el.classList.add("show");
    }
  });
}

// ===== Active Nav State =====
const sectionsTS: readonly string[] = ["home", "about", "skills", "projects", "experience", "certs", "contact"];
const navLinksTS = document.querySelectorAll<HTMLAnchorElement>(".navbar .nav-link");

function setActiveTS(): void {
  let current = "home";
  sectionsTS.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (el.getBoundingClientRect().top <= 120) current = id;
  });

  navLinksTS.forEach((a) =>
    a.classList.toggle("active", a.getAttribute("href") === "#" + current)
  );
}

// ===== Init on Load =====
window.addEventListener("load", () => {
  renderProjectsTS(PROJECTS_TS);
  revealScanTS();
  setActiveTS();
});

window.addEventListener("scroll", () => {
  revealScanTS();
  setActiveTS();
});
