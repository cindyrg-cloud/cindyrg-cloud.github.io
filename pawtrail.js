// pawtrail.js — Kylo's Corner hover paw magic (subtle version) 🐾
document.addEventListener("DOMContentLoaded", () => {
  const kyloLink = document.querySelector('.navbar-nav .nav-link[href*="kylo"]');
  if (!kyloLink) return;

  // Container for ephemeral paw prints
  const pawContainer = document.createElement("div");
  pawContainer.className = "paw-container";
  document.body.appendChild(pawContainer);

  // Tunables: adjust to taste
  const INTERVAL_MS = 120;   // spawn at most ~8 paws/sec while hovering
  const MAX_PAWS   = 20;     // never allow more than this on screen
  const LIFETIME   = 800;    // ms before a paw fades out & is removed
  const SIZE_PX    = 16;     // base font-size for the paw emoji

  let lastSpawn = 0;
  let active = false;

  kyloLink.addEventListener("mouseenter", () => { active = true; });
  kyloLink.addEventListener("mouseleave", () => { active = false; });

  kyloLink.addEventListener("mousemove", (e) => {
    if (!active) return;

    const now = performance.now();
    if (now - lastSpawn < INTERVAL_MS) return; // throttle
    lastSpawn = now;

    // Slight random offset so prints don’t stack exactly under the cursor
    const jitterX = (Math.random() - 0.5) * 10; // ±5px
    const jitterY = (Math.random() - 0.5) * 6;  // ±3px
    const x = e.pageX + jitterX;
    const y = e.pageY + jitterY;

    // Create the paw
    const paw = document.createElement("span");
    paw.textContent = "🐾";
    paw.className = "paw-print";
    paw.style.left = x + "px";
    paw.style.top  = y + "px";
    paw.style.fontSize = SIZE_PX + "px";
    pawContainer.appendChild(paw);

    // Keep things tidy: cap total paws
    while (pawContainer.children.length > MAX_PAWS) {
      pawContainer.removeChild(pawContainer.firstChild);
    }

    // Remove after lifetime
    setTimeout(() => paw.remove(), LIFETIME);
  }, { passive: true });
});
