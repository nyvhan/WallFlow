(function(){
  "use strict";

  var STORAGE_KEY = "wallflow-lang";
  var currentLang = localStorage.getItem(STORAGE_KEY) || "fr";

  var translations = {
    fr: {
      nav_home: "Accueil",
      nav_collection: "Toute la collection",
      nav_help: "Aide",
      nav_submit: "Soumettre",
      nav_about: "À propos",
      nav_brand_index: "Accueil Premium",
      nav_brand_collection: "Toute la collection",
      nav_brand_help: "Aide",
      nav_brand_about: "À propos",
      nav_brand_wallpaper: "Détails",
      index_hero_kicker: "WallFlow Premium",
      index_hero_title: "Des fonds d'écran .mp4 pour PC",
      index_hero_sub: "Performance : les vidéos de la grille ne se chargent et ne se lancent que lorsque tu survoles une carte.",
      index_hero_see: "Voir Jinx",
      index_hero_collection: "Toute la collection",
      index_section_premium: "Premium",
      index_section_sub: "Jinx · GTA VI · Space · Sunset · Lofi Coffee · Lofi Studio",
      index_cta: "Explorer toute la collection",
      footer_line: "© 2026 WallFlow • Premium Wallpapers • Pour toute demande de retrait : <a href=\"contact.html\">Contact</a>",
      collection_hero_kicker: "Toute la collection",
      collection_hero_title: "Fonds d'écran",
      collection_hero_sub: "Survol : chargement + lecture. Sortie : pause + retour à la première image. Fonds d'écran LIVE (animés) et NON-LIVE (statiques).",
      collection_section_title: "Toute la collection",
      collection_section_sub: "Optimisé : aucune vidéo ne tourne tant que tu ne survoles pas une carte. Fonds d'écran LIVE (animés) et NON-LIVE (statiques).",
      collection_search_placeholder: "Rechercher (ex: jeux, manga, espace, chill…)",
      collection_modal_download: "Télécharger maintenant (.mp4)",
      collection_share_toast: "Lien copié !",
      collection_modal_close: "Fermer",
      collection_player_prev: "Précédent",
      collection_player_next: "Suivant",
      aide_title: "Fonds d'écran animés sur Windows",
      aide_intro: "Suis ces 3 étapes pour utiliser tes vidéos WallFlow comme fond d'écran avec Lively Wallpaper.",
      aide_step1_title: "Télécharger",
      aide_step1_text: "Choisis un fond sur WallFlow, ouvre sa page détail puis clique sur Télécharger. Le fichier .mp4 sera enregistré sur ton PC.",
      aide_step1_btn: "Voir la collection WallFlow",
      aide_step2_title: "Installer Lively Wallpaper",
      aide_step2_text: "Sur Windows, utilise Lively Wallpaper pour afficher des vidéos en fond d'écran. Télécharge-le gratuitement depuis le Microsoft Store.",
      aide_step2_btn: "Installer Lively Wallpaper (Microsoft Store)",
      aide_step3_title: "Appliquer",
      aide_step3_text: "Ouvre Lively Wallpaper, puis glisse-dépose ton fichier .mp4 dans la fenêtre (ou ajoute-le via le bouton +). Le fond d'écran est appliqué aussitôt.",
      aide_drag_screen: "Écran",
      wallpaper_title: "Fond d'écran",
      wallpaper_desc: "Voici ce fond d'écran.",
      wallpaper_download: "Télécharger",
      creator_name: "Nyvhan",
      creator_vision: "Aujourd'hui, personne ne te dirige vraiment vers un site qui regroupe des fonds d'écran pour tous les goûts. On t'envoie un lien par-ci, un autre par-là, sans vraie référence. De ce constat est née l'idée de WallFlow : créer ce site de référence pour que tout le monde trouve le fond d'écran qui lui correspond. Je sais que ça prendra du temps — les goûts et les personnes sont très variés — mais l'objectif est clair : devenir la référence pour qui cherche des fonds d'écran, quel que soit son style.",
      creator_back: "Retour à la galerie",
      creator_footer: "© WallFlow · Nyvhan",
      warning_ok: "Compris",
      nav_brand_submit: "Proposer un fond d'écran",
      submit_title: "Proposer un fond d'écran",
      submit_intro: "Partage ta création avec la communauté WallFlow. Remplis le formulaire ci-dessous.",
      submit_label_username: "Nom / Pseudo",
      submit_ph_username: "Ton nom ou pseudo",
      submit_label_link: "Lien du Wallpaper",
      submit_ph_link: "Lien Drive, Mega, ou YouTube",
      submit_label_category: "Catégorie",
      submit_cat_gaming: "Gaming",
      submit_cat_anime: "Anime",
      submit_cat_minimaliste: "Minimaliste",
      submit_cat_nature: "Nature",
      submit_cat_autre: "Autre",
      submit_label_message: "Message (détails optionnels)",
      submit_ph_message: "Précisions, crédits, lien vers l'artiste…",
      submit_checkbox: "Je certifie être l'auteur de cette œuvre ou disposer des droits de partage nécessaires.",
      submit_btn: "Envoyer ma création",
      submit_disclaimer: "WallFlow respecte le droit d'auteur. Tout contenu signalé par son créateur original sera retiré immédiatement.",
      submit_success_message: "Ta création a bien été envoyée. Merci !",
      submit_success_btn: "Génial !",
      submit_error_message: "Une erreur s'est produite. Réessaie dans quelques instants.",
      nav_brand_contact: "Contact",
      nav_contact: "Contact",
      contact_title: "Contact",
      contact_intro: "Une question ou une demande de retrait ? Envoyez-nous un message.",
      contact_label_name: "Nom",
      contact_ph_name: "Votre nom",
      contact_label_email: "Email",
      contact_ph_email: "Votre adresse email",
      contact_label_subject: "Sujet",
      contact_subject_removal: "Demande de retrait",
      contact_subject_other: "Autre",
      contact_label_message: "Message",
      contact_ph_message: "Votre message…",
      contact_btn: "Envoyer",
      contact_rights_title: "Protection des Droits",
      contact_rights_text: "Artistes, votre travail est précieux. Si un wallpaper vous appartient et que vous souhaitez son retrait immédiat, utilisez ce formulaire. Nous traitons les demandes sous 24 à 48h.",
      contact_success_message: "Votre message a bien été envoyé. Merci !",
      contact_success_btn: "OK",
      contact_error_message: "Une erreur s'est produite. Réessaie dans quelques instants."
    },
    en: {
      nav_home: "Home",
      nav_collection: "Full collection",
      nav_help: "Help",
      nav_submit: "Submit",
      nav_about: "About",
      nav_brand_index: "Premium Home",
      nav_brand_collection: "Full collection",
      nav_brand_help: "Help",
      nav_brand_about: "About",
      nav_brand_wallpaper: "Details",
      index_hero_kicker: "WallFlow Premium",
      index_hero_title: ".mp4 wallpapers for PC",
      index_hero_sub: "Performance: grid videos load and play only when you hover over a card.",
      index_hero_see: "View Jinx",
      index_hero_collection: "Full collection",
      index_section_premium: "Premium",
      index_section_sub: "Jinx · GTA VI · Space · Sunset · Lofi Coffee · Lofi Studio",
      index_cta: "Explore full collection",
      footer_line: "© 2024 WallFlow • Premium Wallpapers • For removal requests: <a href=\"contact.html\">Contact</a>",
      collection_hero_kicker: "Full collection",
      collection_hero_title: "Wallpapers",
      collection_hero_sub: "Hover: load and play. Leave: pause. LIVE and static wallpapers.",
      collection_section_title: "Full Collection",
      collection_section_sub: "Optimized: No video runs until you hover over a card. LIVE (animated) and NON-LIVE (static) wallpapers.",
      collection_search_placeholder: "Search (e.g. games, manga, space, chill…)",
      collection_modal_download: "Download now (.mp4)",
      collection_share_toast: "Link copied!",
      collection_modal_close: "Close",
      collection_player_prev: "Previous",
      collection_player_next: "Next",
      aide_title: "Animated wallpapers on Windows",
      aide_intro: "Follow these 3 steps to use your WallFlow videos as wallpaper with Lively Wallpaper.",
      aide_step1_title: "Download",
      aide_step1_text: "Choose a wallpaper on WallFlow, open its detail page and click Download. The .mp4 file will be saved to your PC.",
      aide_step1_btn: "View WallFlow collection",
      aide_step2_title: "Install Lively Wallpaper",
      aide_step2_text: "On Windows, use Lively Wallpaper to display videos as wallpaper. Download it free from the Microsoft Store.",
      aide_step2_btn: "Install Lively Wallpaper (Microsoft Store)",
      aide_step3_title: "Apply",
      aide_step3_text: "Open Lively Wallpaper, then drag and drop your .mp4 file into the window (or add it via the + button). The wallpaper is applied immediately.",
      aide_drag_screen: "Screen",
      wallpaper_title: "Wallpaper",
      wallpaper_desc: "This is the wallpaper.",
      wallpaper_download: "Download",
      creator_name: "Nyvhan",
      creator_vision: "Today, no one really points you to a single place that gathers wallpapers for every taste. You get one link here, another there, with no clear reference. That's why WallFlow was born: to create that reference site so everyone can find the wallpaper that fits them. I know it will take time — tastes and people are very diverse — but the goal is clear: to become the reference for anyone looking for wallpapers, whatever their style.",
      creator_back: "Back to gallery",
      creator_footer: "© WallFlow · Nyvhan",
      warning_ok: "OK",
      nav_brand_submit: "Submit a wallpaper",
      submit_title: "Submit a wallpaper",
      submit_intro: "Share your creation with the WallFlow community. Fill in the form below.",
      submit_label_username: "Name / Username",
      submit_ph_username: "Your name or username",
      submit_label_link: "Wallpaper link",
      submit_ph_link: "Drive, Mega, or YouTube link",
      submit_label_category: "Category",
      submit_cat_gaming: "Gaming",
      submit_cat_anime: "Anime",
      submit_cat_minimaliste: "Minimalist",
      submit_cat_nature: "Nature",
      submit_cat_autre: "Other",
      submit_label_message: "Message (optional details)",
      submit_ph_message: "Details, credits, link to artist…",
      submit_checkbox: "I certify that I am the author of this work or have the necessary sharing rights.",
      submit_btn: "Submit my creation",
      submit_disclaimer: "WallFlow respects copyright. Any content reported by its original creator will be removed immediately.",
      submit_success_message: "Your submission was sent successfully. Thank you!",
      submit_success_btn: "Awesome!",
      submit_error_message: "Something went wrong. Please try again in a moment.",
      nav_brand_contact: "Contact",
      nav_contact: "Contact",
      contact_title: "Contact",
      contact_intro: "A question or removal request? Send us a message.",
      contact_label_name: "Name",
      contact_ph_name: "Your name",
      contact_label_email: "Email",
      contact_ph_email: "Your email address",
      contact_label_subject: "Subject",
      contact_subject_removal: "Removal request",
      contact_subject_other: "Other",
      contact_label_message: "Message",
      contact_ph_message: "Your message…",
      contact_btn: "Send",
      contact_rights_title: "Rights Protection",
      contact_rights_text: "Artists, your work is valuable. If a wallpaper belongs to you and you want it removed immediately, use this form. We process requests within 24 to 48 hours.",
      contact_success_message: "Your message was sent successfully. Thank you!",
      contact_success_btn: "OK",
      contact_error_message: "Something went wrong. Please try again in a moment."
    },
    es: {
      nav_home: "Inicio",
      nav_collection: "Toda la colección",
      nav_help: "Ayuda",
      nav_submit: "Enviar",
      nav_about: "Acerca de",
      nav_brand_index: "Inicio Premium",
      nav_brand_collection: "Toda la colección",
      nav_brand_help: "Ayuda",
      nav_brand_about: "Acerca de",
      nav_brand_wallpaper: "Detalles",
      index_hero_kicker: "WallFlow Premium",
      index_hero_title: "Fondos de pantalla .mp4 para PC",
      index_hero_sub: "Rendimiento: los vídeos de la cuadrícula se cargan y reproducen solo al pasar el cursor sobre una tarjeta.",
      index_hero_see: "Ver Jinx",
      index_hero_collection: "Toda la colección",
      index_section_premium: "Premium",
      index_section_sub: "Jinx · GTA VI · Space · Sunset · Lofi Coffee · Lofi Studio",
      index_cta: "Explorar toda la colección",
      footer_line: "© 2024 WallFlow • Premium Wallpapers • Para solicitar retirada: <a href=\"contact.html\">Contacto</a>",
      collection_hero_kicker: "Toda la colección",
      collection_hero_title: "Fondos de pantalla",
      collection_hero_sub: "Pasar: cargar y reproducir. Salir: pausa. Fondos en vivo y estáticos.",
      collection_section_title: "Toda la colección",
      collection_section_sub: "Optimizado: Ningún video se ejecuta hasta que pases el cursor sobre una tarjeta. Fondos de pantalla LIVE (animados) y NON-LIVE (estáticos).",
      collection_search_placeholder: "Buscar (ej. juegos, manga, espacio, chill…)",
      collection_modal_download: "Descargar ahora (.mp4)",
      collection_share_toast: "¡Enlace copiado!",
      collection_modal_close: "Cerrar",
      collection_player_prev: "Anterior",
      collection_player_next: "Siguiente",
      aide_title: "Fondos de pantalla animados en Windows",
      aide_intro: "Sigue estos 3 pasos para usar tus vídeos WallFlow como fondo de pantalla con Lively Wallpaper.",
      aide_step1_title: "Descargar",
      aide_step1_text: "Elige un fondo en WallFlow, abre su página de detalle y haz clic en Descargar. El archivo .mp4 se guardará en tu PC.",
      aide_step1_btn: "Ver colección WallFlow",
      aide_step2_title: "Instalar Lively Wallpaper",
      aide_step2_text: "En Windows, usa Lively Wallpaper para mostrar vídeos como fondo de pantalla. Descárgalo gratis desde Microsoft Store.",
      aide_step2_btn: "Instalar Lively Wallpaper (Microsoft Store)",
      aide_step3_title: "Aplicar",
      aide_step3_text: "Abre Lively Wallpaper y arrastra tu archivo .mp4 a la ventana (o añádelo con el botón +). El fondo se aplica al instante.",
      aide_drag_screen: "Pantalla",
      wallpaper_title: "Fondo de pantalla",
      wallpaper_desc: "Este es el fondo de pantalla.",
      wallpaper_download: "Descargar",
      creator_name: "Nyvhan",
      creator_vision: "Hoy nadie te dirige realmente a un sitio que reúna fondos de pantalla para todos los gustos. Te envían un enlace aquí, otro allí, sin una referencia clara. De ahí nació WallFlow: crear ese sitio de referencia para que todo el mundo encuentre el fondo que le encaje. Sé que llevará tiempo — los gustos y las personas son muy diversos — pero el objetivo está claro: ser la referencia para quien busque fondos de pantalla, sea cual sea su estilo.",
      creator_back: "Volver a la galería",
      creator_footer: "© WallFlow · Nyvhan",
      warning_ok: "Entendido",
      nav_brand_submit: "Enviar un fondo de pantalla",
      submit_title: "Enviar un fondo de pantalla",
      submit_intro: "Comparte tu creación con la comunidad WallFlow. Rellena el formulario.",
      submit_label_username: "Nombre / Usuario",
      submit_ph_username: "Tu nombre o usuario",
      submit_label_link: "Enlace del fondo de pantalla",
      submit_ph_link: "Enlace Drive, Mega o YouTube",
      submit_label_category: "Categoría",
      submit_cat_gaming: "Gaming",
      submit_cat_anime: "Anime",
      submit_cat_minimaliste: "Minimalista",
      submit_cat_nature: "Naturaleza",
      submit_cat_autre: "Otro",
      submit_label_message: "Mensaje (detalles opcionales)",
      submit_ph_message: "Detalles, créditos, enlace al artista…",
      submit_checkbox: "Certifico ser el autor de esta obra o disponer de los derechos de uso necesarios.",
      submit_btn: "Enviar mi creación",
      submit_disclaimer: "WallFlow respeta los derechos de autor. Cualquier contenido denunciado por su creador original será retirado de inmediato.",
      submit_success_message: "Tu envío se ha enviado correctamente. ¡Gracias!",
      submit_success_btn: "¡Genial!",
      submit_error_message: "Ha ocurrido un error. Inténtalo de nuevo en un momento.",
      nav_brand_contact: "Contacto",
      nav_contact: "Contacto",
      contact_title: "Contacto",
      contact_intro: "¿Una pregunta o solicitud de retirada? Envíanos un mensaje.",
      contact_label_name: "Nombre",
      contact_ph_name: "Tu nombre",
      contact_label_email: "Email",
      contact_ph_email: "Tu dirección de correo",
      contact_label_subject: "Asunto",
      contact_subject_removal: "Solicitud de retirada",
      contact_subject_other: "Otro",
      contact_label_message: "Mensaje",
      contact_ph_message: "Tu mensaje…",
      contact_btn: "Enviar",
      contact_rights_title: "Protección de Derechos",
      contact_rights_text: "Artistas, vuestro trabajo es valioso. Si un fondo de pantalla es vuestro y queréis su retirada inmediata, usad este formulario. Tratamos las solicitudes en 24 a 48 h.",
      contact_success_message: "Tu mensaje se ha enviado correctamente. ¡Gracias!",
      contact_success_btn: "OK",
      contact_error_message: "Ha ocurrido un error. Inténtalo de nuevo en un momento."
    }
  };

  var warningMessages = {
    en: "Note: The original language of this site is French. This translation was generated by AI and some phrases may be inaccurate.",
    es: "Nota: El idioma original de este sitio es el francés. Esta traducción fue generada por IA y algunos textos pueden ser incorrectos."
  };

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === "fr" ? "fr" : lang === "es" ? "es" : "en";
    var t = translations[lang] || translations.fr;
    document.querySelectorAll("[data-i18n]").forEach(function(el) {
      var key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) {
        if (el.getAttribute("data-i18n-html")) {
          el.innerHTML = t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function(el) {
      var key = el.getAttribute("data-i18n-ph");
      if (t[key] !== undefined) el.placeholder = t[key];
    });
    var label = document.getElementById("langPickerLabel");
    if (label) label.textContent = lang === "fr" ? "FR" : lang === "es" ? "ES" : "EN";
    document.querySelectorAll(".langPickerItem").forEach(function(el) {
      el.classList.toggle("is-active", el.getAttribute("data-lang") === lang);
    });
    try { window.dispatchEvent(new CustomEvent("wallflow-lang-applied")); } catch (e) {}
  }

  function showWarningModal(lang, onClose) {
    var overlay = document.getElementById("langWarningOverlay");
    var msgEl = document.getElementById("langWarningMessage");
    var btnEl = document.getElementById("langWarningOk");
    if (!overlay || !msgEl) return;
    msgEl.textContent = warningMessages[lang] || "";
    overlay.classList.add("is-open");
    function close() {
      overlay.classList.remove("is-open");
      if (typeof onClose === "function") onClose();
      btnEl.removeEventListener("click", close);
      overlay.removeEventListener("click", overlayClick);
      document.removeEventListener("keydown", escClose);
    }
    function overlayClick(e) {
      if (e.target === overlay) close();
    }
    function escClose(e) {
      if (e.key === "Escape") close();
    }
    btnEl.addEventListener("click", close);
    overlay.addEventListener("click", overlayClick);
    document.addEventListener("keydown", escClose);
  }

  function closeLangMenu() {
    var picker = document.getElementById("langPicker");
    if (picker) {
      picker.classList.remove("is-open");
      var trigger = document.getElementById("langPickerTrigger");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
    }
  }

  function initLang() {
    var picker = document.getElementById("langPicker");
    var trigger = document.getElementById("langPickerTrigger");
    var menu = document.getElementById("langPickerMenu");
    if (picker && trigger && menu) {
      trigger.addEventListener("click", function(e) {
        e.stopPropagation();
        var isOpen = picker.classList.toggle("is-open");
        trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
      document.querySelectorAll(".langPickerItem").forEach(function(item) {
        item.addEventListener("click", function() {
          var lang = this.getAttribute("data-lang");
          if (lang === "en" || lang === "es") {
            closeLangMenu();
            showWarningModal(lang, function() {
              applyLanguage(lang);
            });
          } else {
            applyLanguage(lang);
            closeLangMenu();
          }
        });
      });
      document.addEventListener("click", function(e) {
        if (picker.classList.contains("is-open") && !picker.contains(e.target)) closeLangMenu();
      });
      document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") closeLangMenu();
      });
    }
    applyLanguage(currentLang);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLang);
  } else {
    initLang();
  }

  window.WallFlowLang = { apply: applyLanguage, current: function() { return currentLang; } };
})();
