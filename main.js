const animatedItems = [
  ...document.querySelectorAll(
    ".topbar, .hero-side, .hero-intro, .hero-title, .hero-footer, .info-strip, .profile-section, .projects-section, .liquid-section"
  ),
];

animatedItems.forEach((item, index) => {
  item.setAttribute("data-animate", "");
  item.style.transitionDelay = `${index * 80}ms`;
});

const reveal = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        reveal.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

animatedItems.forEach((item) => reveal.observe(item));

const modal = document.querySelector("#project-modal");
const modalTitle = document.querySelector("#project-modal-title");
const modalSummary = document.querySelector(".project-modal-summary");
const modalRole = document.querySelector(".project-modal-role");
const modalPeriod = document.querySelector(".project-modal-period");
const modalTools = document.querySelector(".project-modal-tools");
const modalPoints = document.querySelector(".project-modal-points");

const openModal = (button) => {
  modalTitle.textContent = button.dataset.title || "";
  modalSummary.textContent = button.dataset.summary || "";
  modalRole.textContent = button.dataset.role || "";
  modalPeriod.textContent = button.dataset.period || "";
  modalTools.textContent = button.dataset.tools || "";
  modalPoints.innerHTML = "";

  const points = (button.dataset.points || "").split("|").filter(Boolean);

  points.forEach((point) => {
    const item = document.createElement("li");
    item.textContent = point;
    modalPoints.appendChild(item);
  });

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
};

document.querySelectorAll("[data-project-modal]").forEach((button) => {
  button.addEventListener("click", () => openModal(button));
});

document.querySelectorAll("[data-modal-close]").forEach((element) => {
  element.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});
