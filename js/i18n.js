"use strict";

const I18N = {
  fr: {
    skip: "Aller au contenu principal",

    "nav.intro": "Introduction",
    "nav.path": "Parcours",
    "nav.config": "Configuration",
    "nav.lab": "Laboratoire",
    "nav.history": "Historique",
    "nav.debug": "Dépannage",
    "nav.quiz": "Quiz",
    "nav.faq": "FAQ",

    "hero.title": "Maîtrisez l'envoi d'emails côté client avec EmailJS",
    "hero.sub":
      "Un laboratoire pédagogique complet pour comprendre EmailJS, configurer votre service, puis envoyer votre premier email depuis un simple formulaire — sans backend, sans framework.",
    "hero.cta1": "Commencer le parcours",
    "hero.cta2": "Tester le laboratoire",
    "hero.stat1": "étapes guidées",
    "hero.stat2": "erreurs décryptées",
    "hero.stat3": "backend requis",

    "intro.eyebrow": "Introduction",
    "intro.title": "Qu'est-ce qu'EmailJS ?",
    "intro.sub":
      "Comprendre les fondations avant d'écrire la première ligne de code.",
    "intro.c1.title": "Qu'est-ce qu'EmailJS ?",
    "intro.c1.text":
      "EmailJS est un service tiers qui permet d'envoyer des emails directement depuis du JavaScript côté client, sans écrire la moindre ligne de code serveur.",
    "intro.c2.title": "À quoi ça sert ?",
    "intro.c2.text":
      "Formulaires de contact, newsletters, confirmations de commande, notifications : tout ce qui nécessite un envoi d'email depuis une page web.",
    "intro.c3.title": "Comment ça fonctionne ?",
    "intro.c3.text":
      "Vous configurez un service (ex. Gmail), un template (modèle d'email) sur le dashboard EmailJS, puis vous connectez votre formulaire via le SDK JavaScript.",
    "intro.c4.title": "Avantages & limites",
    "intro.c4.text":
      "Avantages : zéro backend, mise en place rapide. Limites : plan gratuit limité (≈ 200 emails/mois, 1 requête/sec).",

    "path.eyebrow": "Parcours",
    "path.title": "10 étapes progressives",
    "path.sub":
      "Suivez-les dans l'ordre : chaque étape s'appuie sur la précédente.",

    "config.eyebrow": "Configuration",
    "config.title": "Vos identifiants EmailJS",
    "config.sub":
      "Stockés uniquement dans votre navigateur (localStorage). Rien n'est envoyé sur un serveur tiers.",
    "config.form.title": "Identifiants du laboratoire",
    "config.form.hint":
      "Ces valeurs servent uniquement à alimenter le formulaire de test ci-dessous.",
    "config.form.save": "Enregistrer les identifiants",
    "config.form.export": "Exporter (.json)",
    "config.form.clear": "Effacer",
    "config.note.title": "Public vs. Secret",
    "config.note.p1":
      "La Public Key est faite pour être visible dans votre code JavaScript.",
    "config.note.p2":
      "Avec EmailJS, aucune clé secrète n'est utilisée côté navigateur.",
    "config.note.rule":
      "Règle d'or : ne mettez jamais une clé privée côté client.",

    "lab.eyebrow": "Laboratoire",
    "lab.title": "Envoyez un vrai email",
    "lab.sub":
      "Remplissez le formulaire et observez les états : chargement, succès, erreur.",
    "lab.name": "Nom",
    "lab.email": "Email",
    "lab.subject": "Sujet",
    "lab.message": "Message",
    "lab.send": "Envoyer le message",
    "lab.how.title": "Comment ça marche ?",
    "lab.how.li1":
      "Les champs possèdent un attribut name correspondant aux variables du template.",
    "lab.how.li2":
      "Le SDK collecte automatiquement ces valeurs avec sendForm().",
    "lab.how.li3": "Chaque champ est validé en JavaScript avant l'envoi.",
    "lab.how.li4": "Le bouton reflète l'état : chargement / succès / erreur.",
    "lab.how.vars":
      "Variables attendues dans votre template : from_name, reply_to, subject, message.",
    "lab.rate.today": "Envois aujourd'hui",
    "lab.rate.next": "Prochain envoi",

    "playground.title": "Prévisualisation du template",
    "playground.hint":
      "Modifiez le template et voyez le rendu avec des valeurs d'exemple.",

    "history.eyebrow": "Historique",
    "history.title": "Vos 10 derniers envois",
    "history.sub": "Sauvegardés localement dans votre navigateur.",
    "history.empty": "Aucun envoi pour le moment.",
    "history.clear": "Effacer l'historique",

    "code.eyebrow": "Code source",
    "code.title": "Exemple concret",
    "code.sub": "Le code réellement utilisé par ce laboratoire.",
    "code.copy": "Copier",

    "debug.eyebrow": "Dépannage",
    "debug.title": "Erreurs fréquentes",
    "debug.sub": "Les 8 erreurs les plus courantes et leur solution immédiate.",

    "checklist.eyebrow": "Progression",
    "checklist.title": "Checklist de maîtrise",
    "checklist.sub": "Votre progression est sauvegardée localement.",
    "checklist.i1": "Compte EmailJS créé",
    "checklist.i2": "Service configuré (Gmail, Outlook…)",
    "checklist.i3": "Template créé avec les variables",
    "checklist.i4": "Public Key récupérée",
    "checklist.i5": "Formulaire HTML avec attributs name",
    "checklist.i6": "SDK EmailJS installé via CDN",
    "checklist.i7": "Premier email envoyé avec succès",
    "checklist.i8": "Gestion des erreurs ajoutée",
    "checklist.progress": "étapes validées",

    "quiz.eyebrow": "Quiz",
    "quiz.title": "Testez vos connaissances",
    "quiz.sub": "5 questions pour valider votre compréhension.",

    "faq.eyebrow": "FAQ",
    "faq.title": "Questions fréquentes",

    "footer.tagline":
      "Un projet pédagogique open source pour apprendre EmailJS.",
    "footer.col.explore": "Explorer",
    "footer.col.practice": "Mettre en pratique",
    "footer.col.resources": "Ressources",
    "footer.docs": "Documentation EmailJS",
    "footer.sdk": "Guide SDK (sendForm)",
    "footer.bug": "Signaler un bug",
    "footer.top": "Haut de page",
    "footer.legal":
      "Projet pédagogique non affilié officiellement à EmailJS. Nom et identité visuelle utilisés à des fins d'apprentissage.",

    "builtwith": "Projet open source",
    "builtwith.by": "MIT",

    "shortcuts.title": "Raccourcis clavier",
    "shortcuts.cmdk": "Palette de commandes",
    "shortcuts.theme": "Basculer le thème",
    "shortcuts.help": "Afficher cette aide",
    "shortcuts.esc": "Fermer",
  },

  en: {
    skip: "Skip to main content",

    "nav.intro": "Introduction",
    "nav.path": "Path",
    "nav.config": "Configuration",
    "nav.lab": "Lab",
    "nav.history": "History",
    "nav.debug": "Debug",
    "nav.quiz": "Quiz",
    "nav.faq": "FAQ",

    "hero.title": "Master client-side email sending with EmailJS",
    "hero.sub":
      "A complete educational lab to understand EmailJS, configure your service, and send your first email from a simple form — no backend, no framework.",
    "hero.cta1": "Start the path",
    "hero.cta2": "Try the lab",
    "hero.stat1": "guided steps",
    "hero.stat2": "errors decoded",
    "hero.stat3": "backend required",

    "intro.eyebrow": "Introduction",
    "intro.title": "What is EmailJS?",
    "intro.sub":
      "Understand the fundamentals before writing your first line of code.",
    "intro.c1.title": "What is EmailJS?",
    "intro.c1.text":
      "EmailJS is a third-party service that lets you send emails directly from client-side JavaScript, without writing any server code.",
    "intro.c2.title": "What is it for?",
    "intro.c2.text":
      "Contact forms, newsletters, order confirmations, notifications: anything that needs to send an email from a web page.",
    "intro.c3.title": "How does it work?",
    "intro.c3.text":
      "You configure a service (e.g. Gmail), a template (email model) on the EmailJS dashboard, then connect your form via the JavaScript SDK.",
    "intro.c4.title": "Pros & cons",
    "intro.c4.text":
      "Pros: zero backend, quick setup. Cons: free tier limited (~200 emails/month, 1 request/sec).",

    "path.eyebrow": "Path",
    "path.title": "10 progressive steps",
    "path.sub": "Follow them in order: each step builds on the previous one.",

    "config.eyebrow": "Configuration",
    "config.title": "Your EmailJS credentials",
    "config.sub":
      "Stored only in your browser (localStorage). Nothing is sent to a third-party server.",
    "config.form.title": "Lab credentials",
    "config.form.hint":
      "These values are only used to feed the test form below.",
    "config.form.save": "Save credentials",
    "config.form.export": "Export (.json)",
    "config.form.clear": "Clear",
    "config.note.title": "Public vs. Secret",
    "config.note.p1":
      "The Public Key is meant to be visible in your JavaScript code.",
    "config.note.p2": "With EmailJS, no secret key is used in the browser.",
    "config.note.rule": "Golden rule: never put a private key client-side.",

    "lab.eyebrow": "Lab",
    "lab.title": "Send a real email",
    "lab.sub":
      "Fill in the form and observe the states: loading, success, error.",
    "lab.name": "Name",
    "lab.email": "Email",
    "lab.subject": "Subject",
    "lab.message": "Message",
    "lab.send": "Send message",
    "lab.how.title": "How does it work?",
    "lab.how.li1":
      "Fields have a name attribute matching the template variables.",
    "lab.how.li2":
      "The SDK automatically collects these values with sendForm().",
    "lab.how.li3": "Each field is validated in JavaScript before sending.",
    "lab.how.li4": "The button reflects the state: loading / success / error.",
    "lab.how.vars":
      "Variables expected in your template: from_name, reply_to, subject, message.",
    "lab.rate.today": "Sends today",
    "lab.rate.next": "Next send",

    "playground.title": "Template preview",
    "playground.hint":
      "Edit the template and see the result with sample values.",

    "history.eyebrow": "History",
    "history.title": "Your last 10 sends",
    "history.sub": "Saved locally in your browser.",
    "history.empty": "No send yet.",
    "history.clear": "Clear history",

    "code.eyebrow": "Source code",
    "code.title": "Concrete example",
    "code.sub": "The code actually used by this lab.",
    "code.copy": "Copy",

    "debug.eyebrow": "Debug",
    "debug.title": "Common errors",
    "debug.sub": "The 8 most common errors and their immediate fix.",

    "checklist.eyebrow": "Progress",
    "checklist.title": "Mastery checklist",
    "checklist.sub": "Your progress is saved locally.",
    "checklist.i1": "EmailJS account created",
    "checklist.i2": "Service configured (Gmail, Outlook…)",
    "checklist.i3": "Template created with variables",
    "checklist.i4": "Public Key retrieved",
    "checklist.i5": "HTML form with name attributes",
    "checklist.i6": "EmailJS SDK installed via CDN",
    "checklist.i7": "First email successfully sent",
    "checklist.i8": "Error handling added",
    "checklist.progress": "steps validated",

    "quiz.eyebrow": "Quiz",
    "quiz.title": "Test your knowledge",
    "quiz.sub": "5 questions to validate your understanding.",

    "faq.eyebrow": "FAQ",
    "faq.title": "Frequently asked questions",

    "footer.tagline": "An open-source educational project to learn EmailJS.",
    "footer.col.explore": "Explore",
    "footer.col.practice": "Practice",
    "footer.col.resources": "Resources",
    "footer.docs": "EmailJS docs",
    "footer.sdk": "SDK guide (sendForm)",
    "footer.bug": "Report a bug",
    "footer.top": "Back to top",
    "footer.legal":
      "Educational project not officially affiliated with EmailJS. Name and visual identity used for learning purposes.",

    "builtwith": "Open source",
    "builtwith.by": "MIT",

    "shortcuts.title": "Keyboard shortcuts",
    "shortcuts.cmdk": "Command palette",
    "shortcuts.theme": "Toggle theme",
    "shortcuts.help": "Show this help",
    "shortcuts.esc": "Close",
  },
};

window.EmailJSLab = window.EmailJSLab || {};

function applyLang(lang) {
  const dict = I18N[lang] || I18N.fr;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });
}

function setLang(lang) {
  if (!I18N[lang]) lang = "fr";
  try {
    localStorage.setItem("emailjsLabLang", lang);
  } catch (e) {}
  document.documentElement.lang = lang;

  const label = document.getElementById("langLabel");
  if (label) label.textContent = lang.toUpperCase();
  const flag = document.getElementById("langFlag");
  if (flag) flag.textContent = lang === "en" ? "🇬🇧" : "🇫🇷";

  applyLang(lang);

  // Re-render des sections dynamiques (étapes, quiz, FAQ, debug)
  if (window.EmailJSLab && window.EmailJSLab.reRenderAll) {
    window.EmailJSLab.reRenderAll();
  }
}

function initI18n() {
  let lang = "fr";
  try {
    lang = localStorage.getItem("emailjsLabLang") || "fr";
  } catch (e) {}
  if (!I18N[lang]) lang = "fr";
  setLang(lang);

  const toggle = document.getElementById("langToggle");
  const menu = document.getElementById("langMenu");
  const switcher = document.querySelector(".lang-switcher");
  if (!toggle || !menu || !switcher) return;

  const markActive = (l) => {
    document.querySelectorAll(".lang-option").forEach((opt) => {
      opt.classList.toggle("is-active", opt.dataset.lang === l);
    });
  };
  markActive(lang);

  const closeMenu = () => {
    switcher.classList.remove("is-open");
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    switcher.classList.add("is-open");
    menu.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    if (menu.hidden) openMenu();
    else closeMenu();
  });

  document.addEventListener("click", (e) => {
    if (!menu.hidden && !switcher.contains(e.target)) closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menu.hidden) closeMenu();
  });

  document.querySelectorAll(".lang-option").forEach((opt) => {
    opt.addEventListener("click", () => {
      setLang(opt.dataset.lang);
      markActive(opt.dataset.lang);
      closeMenu();
    });
  });
}

window.EmailJSLab.i18n = { initI18n, setLang, applyLang, I18N };
