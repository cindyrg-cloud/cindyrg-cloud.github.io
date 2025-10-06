// pawtrail.js — Kylo's Corner hover paw magic 🐾
document.addEventListener("DOMContentLoaded", () => {
  const kyloLink = document.querySelector('.navbar-nav .nav-link[href*="kylo"]');
  if (!kyloLink) return;

  // Create a container for the paw prints
  const pawContainer = document.createElement("div");
  pawContainer.className = "paw-container";
  document.body.appendChild(pawContainer);

  let trailActive = false;

  kyloLink.addEventListener("mouseenter", () => { trailActive = true; });
  kyloLink.addEventListener("mouseleave", () => { trailActive = false; });

  kyloLink.addEventListener("mousemove", (e) => {
    if (!trailActive) return;
    const paw = document.createElement("span");
    paw.textContent = "🐾";
    paw.className = "paw-print";
    paw.style.left = e.pageX + "px";
    paw.style.top = e.pageY + "px";
    pawContainer.appendChild(paw);

    // fade + remove
    setTimeout(() => paw.remove(), 1000);
  });
});
