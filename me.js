// ===== Data: Projects =====
const PROJECTS = [
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
function renderProjects(list){
  const grid = document.getElementById('projectsGrid');
  if(!grid) return;
  grid.innerHTML = '';
  list.forEach(p => {
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-lg-4 reveal';
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
  revealScan();
}

// ===== Search =====
const searchInput = document.getElementById('projectSearch');
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    const filtered = PROJECTS.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.tag.toLowerCase().includes(q) || 
      p.desc.toLowerCase().includes(q)
    );
    renderProjects(filtered);
  });
}

// ===== Reveal on Scroll =====
function revealScan(){
  const els = document.querySelectorAll('.reveal');
  const winH = window.innerHeight;
  els.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < winH - 100) el.classList.add('show');
  });
}
window.addEventListener('scroll', revealScan);

// ===== Active Nav Link on Scroll =====
const sections = ['home','about','skills','projects','experience','certs','contact'];
const navLinks = document.querySelectorAll('.navbar .nav-link');
function setActive(){
  let current = 'home';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if(!el) return;
    const top = el.getBoundingClientRect().top;
    if (top <= 120) current = id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', setActive);

// ===== Dark Mode Toggle =====
const toggle = document.getElementById("darkModeToggle");
if(toggle){
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      toggle.textContent = "Light Mode";
      localStorage.setItem("theme", "dark");
    } else {
      toggle.textContent = "Dark Mode";
      localStorage.setItem("theme", "light");
    }
  });
}

// ===== Theme on Load =====
window.addEventListener("load", () => {
  renderProjects(PROJECTS);
  revealScan();
  setActive();
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    if(toggle) toggle.textContent = "Light Mode";
  } else {
    if(toggle) toggle.textContent = "Dark Mode";
  }
});

// ===== Certificates Viewer =====
document.querySelectorAll(".view-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const pdf = btn.getAttribute("data-pdf");
    window.open(pdf, "_blank");
  });
});

// ===== Upload Certificates =====
const uploadBtn = document.getElementById("uploadBtn");
const uploadForm = document.getElementById("uploadForm");
if(uploadBtn){
  uploadBtn.addEventListener("click", () => {
    const pass = prompt("Enter password to upload:");
    if (pass === "000") {
      uploadForm.classList.remove("d-none");
    } else {
      alert("❌ Wrong password! You cannot upload.");
    }
  });
}

const submitCertificate = document.getElementById("submitCertificate");
if(submitCertificate){
  submitCertificate.addEventListener("click", () => {
    const file = document.getElementById("newCertificate").files[0];
    if (file) {
      alert(`📂 File "${file.name}" selected!\n(Backend needed to actually upload)`);
    } else {
      alert("⚠️ Please select a file.");
    }
  });
}

// ===== Contact Form (Formspree) =====
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if(!form) return;

  const status = document.createElement("div");
  status.id = "formStatus";
  form.appendChild(status);

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        status.style.color = "green";
        status.textContent = "✅ Message sent successfully!";
        form.reset();
      } else {
        status.style.color = "red";
        status.textContent = "❌ Oops! Something went wrong. Try again.";
      }
    } catch (error) {
      status.style.color = "red";
      status.textContent = "⚠️ Network error. Please try later.";
    }
  });
});
