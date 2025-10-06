// kylo-lightbox.js — simple modal for .kylo-grid images
document.addEventListener("DOMContentLoaded", () => {
  // was: const grid = document.querySelector(".kylo-grid, .kylo-masonry");
const grid = document.querySelector(".kylo-grid, .kylo-masonry, .kylo-uniform");
  if (!grid) return;

  const imgs = Array.from(grid.querySelectorAll("img"));
  if (imgs.length === 0) return;

  // Overlay DOM
  const overlay = document.createElement("div");
  overlay.className = "kylo-lightbox";
  overlay.innerHTML = `
    <div class="kylo-lightbox__inner" role="dialog" aria-modal="true" aria-label="Image viewer">
      <button class="kylo-lightbox__close" aria-label="Close">×</button>
      <button class="kylo-lightbox__prev" aria-label="Previous">‹</button>
      <img class="kylo-lightbox__img" alt="">
      <button class="kylo-lightbox__next" aria-label="Next">›</button>
    </div>
  `;
  document.body.appendChild(overlay);

  const imgEl = overlay.querySelector(".kylo-lightbox__img");
  const btnClose = overlay.querySelector(".kylo-lightbox__close");
  const btnPrev  = overlay.querySelector(".kylo-lightbox__prev");
  const btnNext  = overlay.querySelector(".kylo-lightbox__next");

  let idx = 0;

  function open(i) {
    idx = i;
    imgEl.src = imgs[idx].src; // use the displayed src; swap to a larger file if you have one
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function close() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }
  function prev() { open((idx - 1 + imgs.length) % imgs.length); }
  function next() { open((idx + 1) % imgs.length); }

  // Bind clicks (work whether or not the img is wrapped in <a>)
  imgs.forEach((img, i) => {
    (img.closest("a") || img).addEventListener("click", (e) => {
      e.preventDefault();
      open(i);
    });
  });

  // Controls & interactions
  btnClose.addEventListener("click", close);
  btnPrev.addEventListener("click", (e) => { e.stopPropagation(); prev(); });
  btnNext.addEventListener("click", (e) => { e.stopPropagation(); next(); });
  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });

  document.addEventListener("keydown", (e) => {
    if (!overlay.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  });
});
