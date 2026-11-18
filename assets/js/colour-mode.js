// Colour mode (gradient background) vs dark mode (dark background, gradient navbar only).
// Loaded in <head> so the saved mode is applied before the page paints.
(() => {
  const root = document.documentElement;
  const storageKey = "colour-mode";

  const readMode = () => {
    try {
      return localStorage.getItem(storageKey) === "dark" ? "dark" : "colour";
    } catch {
      return "colour";
    }
  };

  const syncButton = (mode) => {
    const button = document.getElementById("colour-mode-toggle");
    if (!button) return;
    const label = mode === "dark" ? "Switch to colour mode" : "Switch to dark mode";
    button.setAttribute("title", label);
    button.setAttribute("aria-label", label);
    button.setAttribute("aria-pressed", mode === "dark");
  };

  const applyMode = (mode) => {
    root.classList.toggle("mode-dark", mode === "dark");
    syncButton(mode);
  };

  applyMode(readMode());

  document.addEventListener("DOMContentLoaded", () => {
    syncButton(readMode());
    const button = document.getElementById("colour-mode-toggle");
    if (!button) return;
    button.addEventListener("click", () => {
      const next = root.classList.contains("mode-dark") ? "colour" : "dark";
      try {
        localStorage.setItem(storageKey, next);
      } catch {}
      applyMode(next);
    });
  });
})();
