document.addEventListener("DOMContentLoaded", () => {
  // 1. Dynamic Copyright Year
  const yearEl = document.getElementById("currentYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2. Dark / Light Theme Switcher (Persists in localStorage)
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const themeIconSun = document.getElementById("themeIconSun");
  const themeIconMoon = document.getElementById("themeIconMoon");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
    if (themeIconSun && themeIconMoon) {
      themeIconSun.style.display = theme === "dark" ? "inline-block" : "none";
      themeIconMoon.style.display = theme === "light" ? "inline-block" : "none";
    }
  }

  const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
  applyTheme(savedTheme);

  themeToggle.addEventListener("click", () => {
    const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });

  // 3. Local Asset Drop-Zone Placeholder Handler
  function attachLocalFallback(imgEl) {
    imgEl.addEventListener("error", () => {
      const expectedPath = imgEl.dataset.asset || imgEl.getAttribute("src");
      const isLogo = imgEl.closest(".brand");
      const placeholder = document.createElement("div");
      placeholder.className = "asset-placeholder";
      placeholder.innerHTML = isLogo
        ? `<svg class="ui-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/></svg>`
        : `<svg class="ui-icon-lg accent-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>Add image at:<br><strong>${expectedPath}</strong></span>`;
      imgEl.replaceWith(placeholder);
    }, { once: true });
  }

  document.querySelectorAll("img[data-asset]").forEach(attachLocalFallback);

  // 4. Mobile Slide-In Side Drawer Navigation
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  const navOverlay = document.getElementById("navOverlay");
  const closeDrawer = document.getElementById("closeDrawer");

  function openMobileDrawer() {
    navMenu.classList.add("active");
    navOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMobileDrawer() {
    navMenu.classList.remove("active");
    navOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  mobileToggle.addEventListener("click", openMobileDrawer);
  closeDrawer.addEventListener("click", closeMobileDrawer);
  navOverlay.addEventListener("click", closeMobileDrawer);

  document.querySelectorAll(".drawer-list a").forEach((link) => {
    link.addEventListener("click", closeMobileDrawer);
  });

  // 5. Floating Back-to-Top Button
  const backToTopBtn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  }, { passive: true });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 6. Render 6-Card Portfolio Grid
  const portfolioGrid = document.getElementById("portfolioGrid");

  function renderProjects(filter = "all") {
    const filtered = filter === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((item) => item.category === filter);

    portfolioGrid.innerHTML = filtered
      .map(
        (project) => `
        <article class="project-card" data-id="${project.id}">
          <div class="project-thumb">
            <span class="project-badge">${project.badge}</span>
            ${project.metricBadge ? `<span class="project-metric-pill">${project.metricBadge}</span>` : ""}
            <img src="${project.image}" data-asset="${project.image}" alt="${project.title}" loading="lazy" />
          </div>
          <div class="project-body">
            <div class="project-role-line">${project.role}</div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.summary}</p>
            <div class="project-deliverables-chips">
              ${project.highlights.map((tag) => `<span class="deliverable-chip">${tag}</span>`).join("")}
            </div>
            <div class="project-footer">
              <span class="project-tags">${project.tags}</span>
              <button class="project-link open-modal" data-id="${project.id}">
                Case Study
                <svg class="ui-icon-sm" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
              </button>
            </div>
          </div>
        </article>
      `
      )
      .join("");

    portfolioGrid.querySelectorAll("img[data-asset]").forEach(attachLocalFallback);
  }

  renderProjects();

  // 7. Category Filter Handling
  const filterPills = document.querySelectorAll(".filter-pill");
  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      filterPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      renderProjects(pill.dataset.filter);
    });
  });

  // 8. Structured Case Study & Video Modal
  const modal = document.getElementById("previewModal");
  const modalImg = document.getElementById("modalImg");
  const modalVideo = document.getElementById("modalVideo");
  const modalCategory = document.getElementById("modalCategory");
  const modalRole = document.getElementById("modalRole");
  const modalTitle = document.getElementById("modalTitle");
  const modalSummary = document.getElementById("modalSummary");
  const modalChallenge = document.getElementById("modalChallenge");
  const modalSolution = document.getElementById("modalSolution");
  const modalDeliverables = document.getElementById("modalDeliverables");
  const modalOutcome = document.getElementById("modalOutcome");
  const modalActionWrap = document.getElementById("modalActionWrap");
  const closeModal = document.getElementById("closeModal");

  function closeCaseStudyModal() {
    modal.classList.remove("open");
    modalVideo.pause();
    modalVideo.removeAttribute("src");
  }

  portfolioGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".project-card");
    if (!card) return;

    const project = PROJECTS_DATA.find((p) => p.id === card.dataset.id);
    if (!project) return;

    if (project.videoUrl) {
      modalImg.style.display = "none";
      modalVideo.style.display = "block";
      modalVideo.src = project.videoUrl;
    } else {
      modalVideo.style.display = "none";
      modalVideo.pause();
      const thumbImg = card.querySelector("img");
      if (thumbImg) {
        modalImg.style.display = "block";
        modalImg.src = thumbImg.src;
      } else {
        modalImg.style.display = "none";
      }
    }

    modalCategory.textContent = project.badge;
    modalRole.textContent = project.role;
    modalTitle.textContent = project.title;
    modalSummary.textContent = project.summary;
    modalChallenge.textContent = project.challenge;
    modalSolution.textContent = project.solution;
    modalDeliverables.innerHTML = project.deliverables.map((d) => `<li>${d}</li>`).join("");
    modalOutcome.textContent = project.outcome;

    modalActionWrap.innerHTML = project.figmaUrl
      ? `<a href="${project.figmaUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
           Open Interactive Prototype
         </a>`
      : "";

    modal.classList.add("open");
  });

  closeModal.addEventListener("click", closeCaseStudyModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeCaseStudyModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCaseStudyModal();
      closeMobileDrawer();
    }
  });
});
