/**
 * WallFlow — Gestion du thème Dark/Light
 * Bascule la classe .light-mode sur <body> et persiste le choix dans localStorage.
 */
(function() {
  var STORAGE_KEY = "wallflow-theme";

  function getStored() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStored(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {}
  }

  function isLight() {
    var stored = getStored();
    if (stored === "light") return true;
    if (stored === "dark") return false;
    return false; // défaut: dark
  }

  function apply(light) {
    var root = document.documentElement;
    if (light) {
      root.classList.add("light-mode");
    } else {
      root.classList.remove("light-mode");
    }
    setStored(light ? "light" : "dark");
    [].forEach.call(document.querySelectorAll("#themeToggle, #themeToggleMobile"), function(btn) {
      btn.setAttribute("aria-label", light ? "Passer en mode sombre" : "Passer en mode clair");
      btn.setAttribute("title", light ? "Mode sombre" : "Mode clair");
    });
    var sun = document.getElementById("themeIconSun");
    var moon = document.getElementById("themeIconMoon");
    if (sun) sun.style.display = light ? "none" : "";
    if (moon) moon.style.display = light ? "" : "none";
  }

  function toggle() {
    apply(!isLight());
  }

  // Appliquer au chargement (avant peinture pour éviter le flash)
  (function init() {
    var light = isLight();
    apply(light);
  })();

  // Attacher le clic aux boutons (desktop + mobile drawer)
  function initButton() {
    var btn = document.getElementById("themeToggle");
    var btnMobile = document.getElementById("themeToggleMobile");
    if (btn) btn.addEventListener("click", toggle);
    if (btnMobile) btnMobile.addEventListener("click", toggle);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initButton);
  } else {
    initButton();
  }

  window.WallFlowTheme = { toggle: toggle, isLight: isLight, apply: apply };
})();
