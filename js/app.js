"use strict";

window.EmailJSLab = window.EmailJSLab || {};

/* =========================================================================
   DONNÉES PÉDAGOGIQUES BILINGUES
   ========================================================================= */

const STEPS_DATA = {
  fr: [
    {
      n: "Étape 01",
      title: "Créer un compte EmailJS",
      summary: "Ouvrez emailjs.com et inscrivez-vous gratuitement.",
      detail: `<h3>Créer un compte EmailJS</h3><ol><li>Rendez-vous sur <a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer">emailjs.com</a>.</li><li>Cliquez sur <strong>Sign Up Free</strong>.</li><li>Confirmez votre adresse email.</li></ol><div class="tip">💡 Aucune carte bancaire n'est demandée.</div>`,
    },
    {
      n: "Étape 02",
      title: "Créer un Email Service",
      summary: "Le service connecte EmailJS à votre boîte mail.",
      detail: `<h3>Créer un Email Service</h3><ol><li>Ouvrez <strong>Email Services → Add New Service</strong>.</li><li>Choisissez un fournisseur (Gmail, Outlook…).</li><li>Connectez votre compte via OAuth.</li><li>Copiez le <strong>Service ID</strong>.</li></ol><div class="tip">💡 Pour Gmail, utilisez « Connect account ».</div>`,
    },
    {
      n: "Étape 03",
      title: "Créer un Email Template",
      summary: "Le template est le modèle de votre email.",
      detail: `<h3>Créer un Email Template</h3><ol><li>Ouvrez <strong>Email Templates → Create New Template</strong>.</li><li>Renseignez le champ <strong>To Email</strong>.</li><li>Insérez des variables : <code>{{from_name}}</code>, <code>{{message}}</code>.</li><li>Copiez le <strong>Template ID</strong>.</li></ol><div class="tip">💡 Les variables doivent correspondre aux attributs <code>name</code> du HTML.</div>`,
    },
    {
      n: "Étape 04",
      title: "Récupérer les identifiants",
      summary: "Public Key, Service ID, Template ID : les 3 valeurs clés.",
      detail: `<h3>Récupérer les identifiants</h3><ul><li><strong>Public Key</strong> : Account → General.</li><li><strong>Service ID</strong> : Email Services.</li><li><strong>Template ID</strong> : Email Templates.</li></ul>`,
    },
    {
      n: "Étape 05",
      title: "Installer le SDK EmailJS",
      summary: "Importez le SDK via CDN.",
      detail: `<h3>Installer le SDK EmailJS</h3><p><code>&lt;script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"&gt;&lt;/script&gt;</code></p>`,
    },
    {
      n: "Étape 06",
      title: "Créer le formulaire HTML",
      summary: "Chaque name = variable du template.",
      detail: `<h3>Créer le formulaire HTML</h3><p>Exemple : <code>&lt;input type="text" name="from_name"&gt;</code></p>`,
    },
    {
      n: "Étape 07",
      title: "Connecter le formulaire à EmailJS",
      summary: "Initialisez le SDK puis sendForm().",
      detail: `<h3>Connecter le formulaire</h3><ul><li><code>emailjs.init({ publicKey })</code></li><li><code>emailjs.sendForm(serviceID, templateID, '#form')</code></li></ul>`,
    },
    {
      n: "Étape 08",
      title: "Envoyer le premier email",
      summary: "Testez et vérifiez la réception.",
      detail: `<h3>Envoyer le premier email</h3><ol><li>Remplissez le formulaire.</li><li>Cliquez sur Envoyer.</li><li>Vérifiez votre boîte.</li></ol>`,
    },
    {
      n: "Étape 09",
      title: "Gérer les erreurs",
      summary: "Affichez un message clair en cas d'échec.",
      detail: `<h3>Gérer les erreurs</h3><ul><li>Utilisez <code>.catch()</code>.</li><li>Affichez un message compréhensible.</li><li>Loguez dans la console.</li></ul>`,
    },
    {
      n: "Étape 10",
      title: "Sécuriser et améliorer",
      summary: "Limitez les envois, validez côté client.",
      detail: `<h3>Sécuriser</h3><ul><li>Limit Rate dans <code>init()</code>.</li><li>Block List.</li><li>Validation côté client.</li></ul>`,
    },
  ],
  en: [
    {
      n: "Step 01",
      title: "Create an EmailJS account",
      summary: "Visit emailjs.com and sign up for free.",
      detail: `<h3>Create an EmailJS account</h3><ol><li>Go to <a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer">emailjs.com</a>.</li><li>Click <strong>Sign Up Free</strong>.</li><li>Confirm your email address.</li></ol><div class="tip">💡 No credit card required.</div>`,
    },
    {
      n: "Step 02",
      title: "Create an Email Service",
      summary: "The service connects EmailJS to your mailbox.",
      detail: `<h3>Create an Email Service</h3><ol><li>Open <strong>Email Services → Add New Service</strong>.</li><li>Pick a provider (Gmail, Outlook…).</li><li>Connect via OAuth.</li><li>Copy the <strong>Service ID</strong>.</li></ol><div class="tip">💡 For Gmail, use "Connect account".</div>`,
    },
    {
      n: "Step 03",
      title: "Create an Email Template",
      summary: "The template is your email model.",
      detail: `<h3>Create an Email Template</h3><ol><li>Open <strong>Email Templates → Create New Template</strong>.</li><li>Fill in the <strong>To Email</strong> field.</li><li>Insert variables: <code>{{from_name}}</code>, <code>{{message}}</code>.</li><li>Copy the <strong>Template ID</strong>.</li></ol><div class="tip">💡 Variables must match the <code>name</code> attributes in HTML.</div>`,
    },
    {
      n: "Step 04",
      title: "Get your credentials",
      summary: "Public Key, Service ID, Template ID: the 3 key values.",
      detail: `<h3>Get your credentials</h3><ul><li><strong>Public Key</strong>: Account → General.</li><li><strong>Service ID</strong>: Email Services.</li><li><strong>Template ID</strong>: Email Templates.</li></ul>`,
    },
    {
      n: "Step 05",
      title: "Install the EmailJS SDK",
      summary: "Import the SDK via CDN.",
      detail: `<h3>Install the EmailJS SDK</h3><p><code>&lt;script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"&gt;&lt;/script&gt;</code></p>`,
    },
    {
      n: "Step 06",
      title: "Create the HTML form",
      summary: "Each name = template variable.",
      detail: `<h3>Create the HTML form</h3><p>Example: <code>&lt;input type="text" name="from_name"&gt;</code></p>`,
    },
    {
      n: "Step 07",
      title: "Connect the form to EmailJS",
      summary: "Init the SDK then call sendForm().",
      detail: `<h3>Connect the form</h3><ul><li><code>emailjs.init({ publicKey })</code></li><li><code>emailjs.sendForm(serviceID, templateID, '#form')</code></li></ul>`,
    },
    {
      n: "Step 08",
      title: "Send your first email",
      summary: "Test and confirm reception.",
      detail: `<h3>Send your first email</h3><ol><li>Fill the form.</li><li>Click Send.</li><li>Check your inbox.</li></ol>`,
    },
    {
      n: "Step 09",
      title: "Handle errors",
      summary: "Show a clear message on failure.",
      detail: `<h3>Handle errors</h3><ul><li>Use <code>.catch()</code>.</li><li>Show a clear message.</li><li>Log to the console.</li></ul>`,
    },
    {
      n: "Step 10",
      title: "Secure and improve",
      summary: "Rate limit, client validation.",
      detail: `<h3>Secure</h3><ul><li>Limit Rate in <code>init()</code>.</li><li>Block List.</li><li>Client-side validation.</li></ul>`,
    },
  ],
};

const DEBUG_DATA = {
  fr: [
    {
      code: "Public Key incorrecte",
      desc: "Code 430 ou « Invalid Public Key ».",
      fix: "Vérifiez la Public Key dans Account → General.",
    },
    {
      code: "Service ID incorrect",
      desc: "« service not found ».",
      fix: "Comparez avec le Service ID dans Email Services.",
    },
    {
      code: "Template ID incorrect",
      desc: "« template not found » ou code 400.",
      fix: "Recopiez le Template ID.",
    },
    {
      code: "Template mal configuré",
      desc: "Email vide ou expéditeur inattendu.",
      fix: "Vérifiez le champ To Email.",
    },
    {
      code: "Variables du template erronées",
      desc: "Les valeurs n'apparaissent pas.",
      fix: "Les attributs name doivent correspondre.",
    },
    {
      code: "Problème CORS",
      desc: "Blocage lié aux domaines autorisés.",
      fix: "Ajoutez votre domaine dans la liste autorisée.",
    },
    {
      code: "Problème de réseau",
      desc: "Pas de réponse, timeout.",
      fix: "Vérifiez votre connexion et le CDN.",
    },
    {
      code: "Limite EmailJS atteinte",
      desc: "Code 429 / « rate limit ».",
      fix: "Patientez ou passez à un plan supérieur.",
    },
  ],
  en: [
    {
      code: "Invalid Public Key",
      desc: 'Error 430 or "Invalid Public Key".',
      fix: "Check the Public Key in Account → General.",
    },
    {
      code: "Invalid Service ID",
      desc: '"service not found".',
      fix: "Compare with the Service ID in Email Services.",
    },
    {
      code: "Invalid Template ID",
      desc: '"template not found" or error 400.',
      fix: "Copy the Template ID again.",
    },
    {
      code: "Misconfigured template",
      desc: "Empty email or odd sender.",
      fix: "Check the To Email field.",
    },
    {
      code: "Wrong template variables",
      desc: "Values do not appear.",
      fix: "name attributes must match exactly.",
    },
    {
      code: "CORS issue",
      desc: "Blocked by allowed domains.",
      fix: "Add your domain to the allow list.",
    },
    {
      code: "Network issue",
      desc: "No response, timeout.",
      fix: "Check connection and CDN.",
    },
    {
      code: "EmailJS rate limit",
      desc: 'Error 429 / "rate limit".',
      fix: "Wait or upgrade your plan.",
    },
  ],
};

const FAQ_DATA = {
  fr: [
    {
      q: "EmailJS est-il vraiment gratuit ?",
      a: "Oui, un plan gratuit existe (≈ 200 emails/mois). Suffisant pour apprendre.",
    },
    {
      q: "La Public Key expose-t-elle mon compte ?",
      a: "Non. Aucune clé secrète ne doit être côté client.",
    },
    {
      q: "Puis-je utiliser EmailJS en production ?",
      a: "Possible pour des volumes modestes avec authentification.",
    },
    {
      q: "Ai-je besoin d'un backend ?",
      a: "Non, le SDK s'adresse directement à leurs serveurs.",
    },
    {
      q: "Pourquoi mes emails arrivent-ils en spam ?",
      a: "Vérifiez le domaine d'envoi dans les réglages du service.",
    },
    {
      q: "Différence entre send() et sendForm() ?",
      a: "sendForm() collecte automatiquement les champs d'un formulaire.",
    },
  ],
  en: [
    {
      q: "Is EmailJS really free?",
      a: "Yes, a free plan exists (~200 emails/month). Enough to learn.",
    },
    {
      q: "Does the Public Key expose my account?",
      a: "No. No secret key should ever be client-side.",
    },
    {
      q: "Can I use EmailJS in production?",
      a: "Possible for small volumes with proper authentication.",
    },
    {
      q: "Do I need a backend?",
      a: "No, the SDK talks directly to their servers.",
    },
    {
      q: "Why do my emails go to spam?",
      a: "Check the sending domain in your service settings.",
    },
    {
      q: "Difference between send() and sendForm()?",
      a: "sendForm() automatically collects form fields.",
    },
  ],
};

/* =========================================================================
   UTILITAIRES
   ========================================================================= */

const $ = (sel, root) => (root || document).querySelector(sel);
const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

const CONFIG_KEY = "emailjsLabConfig";
const CHECK_KEY = "emailjsLabChecklist";
const RATE_COUNT_KEY = "emailjsLabRateCount";
const RATE_LAST_KEY = "emailjsLabRateLast";
const RATE_LIMIT_MS = 1000;

function currentLang() {
  return document.documentElement.lang === "en" ? "en" : "fr";
}

function loadConfig() {
  try {
    return JSON.parse(localStorage.getItem(CONFIG_KEY) || "{}");
  } catch (e) {
    return {};
  }
}

function saveConfig(cfg) {
  try {
    localStorage.setItem(CONFIG_KEY, JSON.stringify(cfg));
  } catch (e) {}
}

function setStatus(el, text, type) {
  if (!el) return;
  el.textContent = text;
  el.classList.remove("is-loading", "is-success", "is-error");
  if (type) el.classList.add(type);
  el.classList.add("is-visible");
}

/* =========================================================================
   NAVIGATION
   ========================================================================= */

function initNav() {
  const toggle = $("#menuToggle");
  const nav = $("#mainNav");
  if (!toggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove("is-open");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("click", (e) => {
    if (
      nav.classList.contains("is-open") &&
      !nav.contains(e.target) &&
      !toggle.contains(e.target)
    )
      closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) closeMenu();
  });

  $$(".nav-link[data-target], .btn[data-target]").forEach((btn) => {
    btn.addEventListener("click", () => {
      closeMenu();
      const t = $(btn.dataset.target);
      if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/* =========================================================================
   THÈME
   ========================================================================= */

function initTheme() {
  const toggle = $("#themeToggle");
  const root = document.documentElement;
  if (!toggle) return;

  const applyIcon = () => {
    const isDark = root.dataset.theme === "dark";
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute(
      "aria-label",
      isDark ? "Activer le thème clair" : "Activer le thème sombre",
    );
  };

  toggle.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("emailjsLabTheme", next);
    } catch (e) {}
    applyIcon();
  });

  applyIcon();
}

/* =========================================================================
   PROGRESSION LECTURE
   ========================================================================= */

function initReadingProgress() {
  const bar = $("#readingProgress");
  if (!bar) return;
  const update = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    bar.style.width = pct + "%";
  };
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

/* =========================================================================
   SCROLL REVEAL
   ========================================================================= */

function initScrollReveal() {
  if (!("IntersectionObserver" in window)) return;
  const targets = $$(".card, .step-card, .debug-item, .hero-stats li");
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
  );

  targets.forEach((el) => {
    if (initScrollReveal.observed && initScrollReveal.observed.has(el)) return;
    if (!initScrollReveal.observed) initScrollReveal.observed = new WeakSet();
    initScrollReveal.observed.add(el);
    el.classList.add("reveal");
    observer.observe(el);
  });
}

/* =========================================================================
   ÉTAPES
   ========================================================================= */

function renderSteps() {
  const grid = $("#stepsGrid");
  if (!grid) return;

  const lang = currentLang();
  const STEPS = STEPS_DATA[lang];

  grid.innerHTML = "";
  const frag = document.createDocumentFragment();
  STEPS.forEach((step, i) => {
    const li = document.createElement("li");
    li.className = "card step-card reveal";
    li.tabIndex = 0;
    li.setAttribute("role", "button");
    li.setAttribute(
      "aria-label",
      (lang === "en" ? "View details: " : "Voir le détail : ") + step.title,
    );
    li.innerHTML = `
      <div class="step-num">${step.n}</div>
      <h3>${step.title}</h3>
      <p>${step.summary}</p>
      <span class="step-go">${lang === "en" ? "View details" : "Voir le détail"}</span>`;

    const activate = () => openStep(i);
    li.addEventListener("click", activate);
    li.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        activate();
      }
    });
    frag.appendChild(li);
  });
  grid.appendChild(frag);

  function openStep(i) {
    const body = $("#stepDetailBody");
    const detail = $("#stepDetail");
    if (!body || !detail) return;
    body.innerHTML = STEPS[i].detail;
    detail.hidden = false;
    detail.scrollIntoView({ behavior: "smooth", block: "nearest" });
    body.focus({ preventScroll: true });
  }
}

function initSteps() {
  renderSteps();

  const closeBtn = $("#stepDetailClose");
  const detail = $("#stepDetail");
  if (closeBtn && detail) {
    closeBtn.addEventListener("click", () => {
      detail.hidden = true;
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && detail && !detail.hidden) detail.hidden = true;
  });
}

/* =========================================================================
   CONFIGURATION
   ========================================================================= */

function initConfig() {
  const form = $("#configForm");
  if (!form) return;

  const cfg = loadConfig();
  const set = (id, v) => {
    const el = $(id);
    if (el) el.value = v || "";
  };
  set("#publicKey", cfg.publicKey);
  set("#serviceId", cfg.serviceId);
  set("#templateId", cfg.templateId);

  const status = $("#configStatus");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    saveConfig({
      publicKey: ($("#publicKey") || {}).value
        ? $("#publicKey").value.trim()
        : "",
      serviceId: ($("#serviceId") || {}).value
        ? $("#serviceId").value.trim()
        : "",
      templateId: ($("#templateId") || {}).value
        ? $("#templateId").value.trim()
        : "",
    });
    const lang = currentLang();
    setStatus(
      status,
      lang === "en"
        ? "Credentials saved in this browser."
        : "Identifiants enregistrés dans ce navigateur.",
      "is-success",
    );
  });

  const clearBtn = $("#clearConfigBtn");
  if (clearBtn)
    clearBtn.addEventListener("click", () => {
      try {
        localStorage.removeItem(CONFIG_KEY);
      } catch (e) {}
      form.reset();
      const lang = currentLang();
      setStatus(
        status,
        lang === "en" ? "Credentials cleared." : "Identifiants effacés.",
        "is-loading",
      );
    });

  const exportBtn = $("#exportConfigBtn");
  if (exportBtn)
    exportBtn.addEventListener("click", () => {
      const data = JSON.stringify(loadConfig(), null, 2);
      const blob = new Blob([data], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "emailjs-config.json";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    });
}

/* =========================================================================
   VALIDATION
   ========================================================================= */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(input) {
  const value = input.value.trim();
  const field = input.closest(".form-field");
  if (!field) return true;
  const lang = currentLang();

  let error = "";
  if (input.hasAttribute("required") && !value) {
    error = lang === "en" ? "This field is required." : "Ce champ est requis.";
  } else if (input.type === "email" && value && !EMAIL_RE.test(value)) {
    error =
      lang === "en" ? "Invalid email address." : "Adresse email invalide.";
  } else if (input.tagName === "TEXTAREA" && value && value.length < 10) {
    error =
      lang === "en"
        ? "Your message must be at least 10 characters."
        : "Votre message doit contenir au moins 10 caractères.";
  } else if (input.hasAttribute("minlength") && value) {
    const min = Number(input.getAttribute("minlength"));
    if (value.length < min)
      error =
        (lang === "en" ? "Minimum " : "Minimum ") +
        min +
        (lang === "en" ? " characters." : " caractères.");
  }

  const prev = field.querySelector(".form-error");
  if (prev) prev.remove();
  field.classList.toggle("is-invalid", Boolean(error));

  if (error) {
    input.setAttribute("aria-invalid", "true");
    const err = document.createElement("span");
    err.className = "form-error";
    err.textContent = error;
    field.appendChild(err);
  } else {
    input.removeAttribute("aria-invalid");
  }
  return !error;
}

function validateForm(form) {
  let ok = true;
  $$("input, textarea", form).forEach((el) => {
    if (!validateField(el)) ok = false;
  });
  return ok;
}

/* =========================================================================
   RATE LIMIT
   ========================================================================= */

function todayKey() {
  const d = new Date();
  return (
    d.getFullYear() +
    "-" +
    String(d.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(d.getDate()).padStart(2, "0")
  );
}

function loadRateCount() {
  try {
    const data = JSON.parse(localStorage.getItem(RATE_COUNT_KEY) || "{}");
    if (data.date !== todayKey()) return { date: todayKey(), count: 0 };
    return data;
  } catch (e) {
    return { date: todayKey(), count: 0 };
  }
}

function incrementRateCount() {
  const data = loadRateCount();
  data.count += 1;
  try {
    localStorage.setItem(RATE_COUNT_KEY, JSON.stringify(data));
  } catch (e) {}
  updateRateIndicator();
}

function getLastSendTime() {
  return Number(localStorage.getItem(RATE_LAST_KEY) || 0);
}

function canSend() {
  return Date.now() - getLastSendTime() >= RATE_LIMIT_MS;
}

function updateRateIndicator() {
  const todayEl = $("#rateToday");
  const nextEl = $("#rateNext");
  if (!todayEl || !nextEl) return;

  const data = loadRateCount();
  todayEl.textContent = String(data.count);

  const elapsed = Date.now() - getLastSendTime();
  const lang = currentLang();
  if (elapsed >= RATE_LIMIT_MS) {
    nextEl.textContent = lang === "en" ? "Now" : "Maintenant";
  } else {
    const remaining = ((RATE_LIMIT_MS - elapsed) / 1000).toFixed(1);
    nextEl.textContent = remaining + " s";
  }
}

function initRate() {
  updateRateIndicator();
  setInterval(() => {
    const elapsed = Date.now() - getLastSendTime();
    if (elapsed < RATE_LIMIT_MS) updateRateIndicator();
  }, 1000);
}

/* =========================================================================
   LABORATOIRE
   ========================================================================= */

function emailjsReady() {
  return typeof window.emailjs !== "undefined";
}

function getActiveConfig() {
  const cfg = loadConfig();
  return {
    publicKey: cfg.publicKey || "YOUR_PUBLIC_KEY",
    serviceId: cfg.serviceId || "YOUR_SERVICE_ID",
    templateId: cfg.templateId || "YOUR_TEMPLATE_ID",
  };
}

function initLab() {
  const form = $("#labForm");
  const btn = $("#sendBtn");
  const status = $("#formStatus");
  if (!form || !btn) return;

  $$("input, textarea", form).forEach((el) => {
    el.addEventListener("blur", () => validateField(el));
    el.addEventListener("input", () => {
      const field = el.closest(".form-field");
      if (!field) return;
      const prev = field.querySelector(".form-error");
      if (prev) prev.remove();
      field.classList.remove("is-invalid");
      el.removeAttribute("aria-invalid");
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const lang = currentLang();

    if (!validateForm(form)) {
      setStatus(
        status,
        lang === "en"
          ? "Fix the form errors before sending."
          : "Corrigez les erreurs du formulaire avant d'envoyer.",
        "is-error",
      );
      return;
    }
    if (!emailjsReady()) {
      setStatus(
        status,
        lang === "en"
          ? "EmailJS SDK not loaded. Check your connection."
          : "Le SDK EmailJS n'est pas chargé.",
        "is-error",
      );
      return;
    }

    const { publicKey, serviceId, templateId } = getActiveConfig();
    if (serviceId.includes("YOUR_") || templateId.includes("YOUR_")) {
      setStatus(
        status,
        lang === "en"
          ? "Please fill in your real Service ID and Template ID in Configuration."
          : "Renseignez d'abord vos vrais Service ID et Template ID.",
        "is-error",
      );
      return;
    }
    if (!canSend()) {
      setStatus(
        status,
        lang === "en"
          ? "Please wait one second between sends."
          : "Veuillez patienter une seconde entre deux envois.",
        "is-error",
      );
      return;
    }

    btn.classList.add("is-loading");
    btn.disabled = true;
    setStatus(
      status,
      lang === "en" ? "Sending…" : "Envoi en cours…",
      "is-loading",
    );

    const subject = ($("#labSubject") || {}).value || "";
    const fromName = ($("#labName") || {}).value || "";

    try {
      emailjs.init({ publicKey });
      const res = await emailjs.sendForm(serviceId, templateId, form);
      try {
        localStorage.setItem(RATE_LAST_KEY, String(Date.now()));
      } catch (e) {}
      incrementRateCount();
      setStatus(
        status,
        (lang === "en"
          ? "Email sent successfully! ("
          : "Email envoyé avec succès ! (") +
          res.status +
          " " +
          res.text +
          ")",
        "is-success",
      );
      if (window.EmailJSLab.history) {
        window.EmailJSLab.history.addToHistory({
          subject,
          from_name: fromName,
          status: "success",
        });
      }
      form.reset();
    } catch (err) {
      let msg =
        lang === "en"
          ? "Send failed. Check the Debug section."
          : "L'envoi a échoué. Consultez la section Dépannage.";
      if (err && err.status)
        msg =
          (lang === "en" ? "Error " : "Erreur ") +
          err.status +
          (lang === "en"
            ? " — see the Debug section."
            : " — voir la section Dépannage.");
      console.error("[EmailJS]", err);
      setStatus(status, msg, "is-error");
      if (window.EmailJSLab.history) {
        window.EmailJSLab.history.addToHistory({
          subject,
          from_name: fromName,
          status: "error",
        });
      }
    } finally {
      btn.classList.remove("is-loading");
      btn.disabled = false;
    }
  });
}

/* =========================================================================
   CODE
   ========================================================================= */

function buildHtmlExample() {
  const form = $("#labForm");
  const lang = currentLang();
  const btn = lang === "en" ? "Send" : "Envoyer";
  const lines = [
    "<!-- Formulaire HTML minimal -->",
    '<form id="' + (form ? form.id : "labForm") + '">',
  ];
  if (form) {
    $$("input, textarea", form).forEach((el) => {
      if (el.tagName === "TEXTAREA") {
        lines.push(
          '  <textarea name="' +
            el.name +
            '" placeholder="..." rows="4"></textarea>',
        );
      } else {
        const minLen = el.minLength
          ? ' minlength="' + el.minLength + '"'
          : "";
        const req = el.hasAttribute("required") ? " required" : "";
        lines.push(
          '  <input type="' +
            el.type +
            '" name="' +
            el.name +
            '"' +
            minLen +
            req +
            " />",
        );
      }
    });
  }
  lines.push("  <button>" + btn + "</button>");
  lines.push("</form>");
  return lines.join("\n");
}

function buildJsExample() {
  const form = $("#labForm");
  const id = (form || {}).id || "labForm";
  const lang = currentLang();
  const logMsg = lang === "en" ? "Email sent!" : "Email envoyé !";
  const errMsg = lang === "en" ? "Error:" : "Erreur :";
  return (
    '// Initialisation avec la Public Key\n' +
    "emailjs.init({ publicKey: 'YOUR_PUBLIC_KEY' });\n\n" +
    "document.getElementById('" + id + "')\n" +
    "  .addEventListener('submit', async (e) => {\n" +
    "    e.preventDefault();\n\n" +
    "    try {\n" +
    "      const res = await emailjs.sendForm(\n" +
    "        'YOUR_SERVICE_ID',   // Service ID\n" +
    "        'YOUR_TEMPLATE_ID',  // Template ID\n" +
    "        '#" + id + "'\n" +
    "      );\n" +
    "      console.log('" + logMsg + "', res.status, res.text);\n" +
    "    } catch (err) {\n" +
    "      console.error('" + errMsg + "', err);\n" +
    "    }\n" +
    "  });"
  );
}

function renderCode() {
  const htmlBlock = $("#codeHtml");
  const jsBlock = $("#codeJs");
  if (!htmlBlock || !jsBlock) return;

  const esc = (t) =>
    t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const highlightHtml = (t) =>
    esc(t).replace(
      /(&lt;!--[\s\S]*?--&gt;)|(&lt;\/?)([a-zA-Z][\w-]*)|([\w-]+)(=)/g,
      (m, com, lt, tag, attr, eq) =>
        com
          ? '<span class="tok-com">' + com + "</span>"
          : lt
            ? lt + '<span class="tok-tag">' + tag + "</span>"
            : '<span class="tok-attr">' + attr + "</span>" + eq,
    );
  const highlightJs = (t) =>
    esc(t).replace(
      /(\/\/[^\n]*)|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")|\b(const|let|var|function|return|await|async|if|else|try|catch|new|document|window|navigator|emailjs|this|addEventListener|getElementById)\b|\b(\d+)\b/g,
      (m, com, str, kw, num) =>
        com
          ? '<span class="tok-com">' + com + "</span>"
          : str
            ? '<span class="tok-str">' + str + "</span>"
            : kw
              ? '<span class="tok-kw">' + kw + "</span>"
              : num
                ? '<span class="tok-num">' + num + "</span>"
                : m,
    );

  const htmlCode = htmlBlock.querySelector("code");
  const jsCode = jsBlock.querySelector("code");
  if (htmlCode) {
    htmlCode.textContent = buildHtmlExample();
    htmlCode.innerHTML = highlightHtml(htmlCode.textContent);
  }
  if (jsCode) {
    jsCode.textContent = buildJsExample();
    jsCode.innerHTML = highlightJs(jsCode.textContent);
  }
}

function initCode() {
  renderCode();

  const tabs = $$(".code-tab");
  const htmlBlock = $("#codeHtml");
  const jsBlock = $("#codeJs");
  const filename = $("#codeFilename");
  const copyBtn = $("#copyBtn");
  if (!htmlBlock || !jsBlock) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");
      const isJs = tab.dataset.tab === "js";
      htmlBlock.hidden = isJs;
      jsBlock.hidden = !isJs;
      if (filename) filename.textContent = isJs ? "app.js" : "index.html";
    });
  });

  if (copyBtn)
    copyBtn.addEventListener("click", async () => {
      const active = htmlBlock.hidden ? jsBlock : htmlBlock;
      const text = active.textContent;
      try {
        await navigator.clipboard.writeText(text);
      } catch (e) {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand("copy");
        } catch (err) {}
        ta.remove();
      }
      const original = copyBtn.innerHTML;
      copyBtn.textContent = currentLang() === "en" ? "Copied!" : "Copié !";
      setTimeout(() => {
        copyBtn.innerHTML = original;
      }, 1500);
    });
}

/* =========================================================================
   DEBUG
   ========================================================================= */

function renderDebug() {
  const list = $("#debugList");
  if (!list) return;
  const lang = currentLang();
  const items = DEBUG_DATA[lang];
  const label = lang === "en" ? "Fix:" : "Solution :";
  list.innerHTML = items
    .map(
      (item) => `
    <article class="card debug-item">
      <h3>${item.code}</h3>
      <p>${item.desc}</p>
      <div class="fix"><strong>${label}</strong> ${item.fix}</div>
    </article>`,
    )
    .join("");
}

function initDebug() {
  renderDebug();
}

/* =========================================================================
   CHECKLIST
   ========================================================================= */

function initChecklist() {
  const form = $("#checklistForm");
  const counter = $("#checklistDone");
  if (!form) return;

  let saved = [];
  try {
    saved = JSON.parse(localStorage.getItem(CHECK_KEY) || "[]");
  } catch (e) {}

  $$('input[type="checkbox"]', form).forEach((box) => {
    box.checked = saved.includes(box.dataset.check);
  });

  const update = () => {
    const checks = $$("input:checked", form).map((b) => b.dataset.check);
    if (counter) counter.textContent = String(checks.length);
    try {
      localStorage.setItem(CHECK_KEY, JSON.stringify(checks));
    } catch (e) {}
  };

  form.addEventListener("change", update);
  update();
}

/* =========================================================================
   FAQ
   ========================================================================= */

function renderFaq() {
  const list = $("#faqList");
  if (!list) return;
  const lang = currentLang();
  const items = FAQ_DATA[lang];

  list.innerHTML = items
    .map(
      (item, i) => `
    <div class="faq-item">
      <button class="faq-q" type="button" aria-expanded="false" aria-controls="faq-a-${i}">
        <span>${item.q}</span>
        <span class="faq-chev" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </span>
      </button>
      <div class="faq-a" id="faq-a-${i}">${item.a}</div>
    </div>`,
    )
    .join("");

  $$(".faq-item", list).forEach((item) => {
    const q = $(".faq-q", item);
    const a = $(".faq-a", item);
    if (!q || !a) return;
    q.addEventListener("click", () => {
      const open = item.classList.toggle("is-open");
      q.setAttribute("aria-expanded", String(open));
      a.style.maxHeight = open ? a.scrollHeight + "px" : "0px";
    });
  });
}

function initFaq() {
  renderFaq();
}

/* =========================================================================
   RACCOURCIS CLAVIER
   ========================================================================= */

function initShortcuts() {
  const modal = $("#shortcutsModal");
  const fab = $("#fabHelp");
  const closeBtn = $("#shortcutsClose");

  const open = () => {
    if (modal) modal.hidden = false;
  };
  const close = () => {
    if (modal) modal.hidden = true;
  };

  if (fab) fab.addEventListener("click", open);
  if (closeBtn) closeBtn.addEventListener("click", close);
  if (modal)
    modal.addEventListener("click", (e) => {
      if (e.target === modal) close();
    });

  document.addEventListener("keydown", (e) => {
    const tag = (e.target.tagName || "").toLowerCase();
    const isTyping =
      tag === "input" || tag === "textarea" || e.target.isContentEditable;

    if (e.key === "Escape") {
      if (modal && !modal.hidden) close();
    }
    if (isTyping) return;
    if (e.key === "?" || (e.key === "/" && e.shiftKey)) {
      e.preventDefault();
      open();
    } else if (e.key === "t" || e.key === "T") {
      const toggle = $("#themeToggle");
      if (toggle) toggle.click();
    }
  });
}

/* =========================================================================
   PALETTE ⌘K
   ========================================================================= */

const CMDK_DATA = {
  fr: [
    { label: "Introduction", target: "#intro" },
    { label: "Parcours", target: "#parcours" },
    { label: "Configuration", target: "#configuration" },
    { label: "Laboratoire", target: "#labo" },
    { label: "Historique", target: "#historique" },
    { label: "Code source", target: "#code" },
    { label: "Dépannage", target: "#debug" },
    { label: "Checklist", target: "#checklist" },
    { label: "Quiz", target: "#quiz" },
    { label: "FAQ", target: "#faq" },
  ],
  en: [
    { label: "Introduction", target: "#intro" },
    { label: "Path", target: "#parcours" },
    { label: "Configuration", target: "#configuration" },
    { label: "Lab", target: "#labo" },
    { label: "History", target: "#historique" },
    { label: "Source code", target: "#code" },
    { label: "Debug", target: "#debug" },
    { label: "Checklist", target: "#checklist" },
    { label: "Quiz", target: "#quiz" },
    { label: "FAQ", target: "#faq" },
  ],
};

function initCmdk() {
  const modal = $("#cmdk");
  const input = $("#cmdkInput");
  const list = $("#cmdkList");
  if (!modal || !input || !list) return;

  let filtered = [];
  let selectedIndex = 0;

  const renderList = () => {
    if (filtered.length === 0) {
      list.innerHTML =
        "<li>" +
        (currentLang() === "en" ? "No results" : "Aucun résultat") +
        "</li>";
      return;
    }
    list.innerHTML = filtered
      .map(
        (item, i) =>
          `<li data-target="${item.target}" class="${i === selectedIndex ? "is-selected" : ""}">${item.label}</li>`,
      )
      .join("");
  };

  const open = () => {
    modal.hidden = false;
    input.value = "";
    filtered = CMDK_DATA[currentLang()].slice();
    selectedIndex = 0;
    renderList();
    setTimeout(() => input.focus(), 10);
  };

  const close = () => {
    modal.hidden = true;
  };

  const go = (target) => {
    close();
    const el = $(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      open();
      return;
    }
    if (modal.hidden) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      selectedIndex = Math.min(selectedIndex + 1, filtered.length - 1);
      renderList();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      selectedIndex = Math.max(selectedIndex - 1, 0);
      renderList();
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = filtered[selectedIndex];
      if (item) go(item.target);
    }
  });

  input.addEventListener("input", () => {
    const q = input.value.toLowerCase().trim();
    filtered = CMDK_DATA[currentLang()].filter((s) =>
      s.label.toLowerCase().includes(q),
    );
    selectedIndex = 0;
    renderList();
  });

  list.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li || !li.dataset.target) return;
    go(li.dataset.target);
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });
}

/* =========================================================================
   RÉACTIVITÉ LANGUE — Re-render des sections dynamiques
   ========================================================================= */

window.EmailJSLab.reRenderAll = function () {
  renderSteps();
  renderDebug();
  renderFaq();
  renderCode();
  if (window.EmailJSLab.quiz) window.EmailJSLab.quiz.renderQuiz();
  initScrollReveal();
};

/* =========================================================================
   INITIALISATION
   ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initTheme();
  initReadingProgress();
  initSteps();
  initConfig();
  initLab();
  initRate();
  initCode();
  initDebug();
  initChecklist();
  initFaq();
  initShortcuts();
  initCmdk();
  initScrollReveal();

  if (window.EmailJSLab.i18n) window.EmailJSLab.i18n.initI18n();
  if (window.EmailJSLab.history) window.EmailJSLab.history.initHistory();
  if (window.EmailJSLab.playground)
    window.EmailJSLab.playground.initPlayground();
  if (window.EmailJSLab.quiz) window.EmailJSLab.quiz.initQuiz();
});
