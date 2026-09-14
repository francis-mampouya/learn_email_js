/* =========================================================================
   EmailJS Lab — app.js
   Modules : navigation, thème, étapes, configuration, laboratoire,
             coloration syntaxique, dépannage, checklist, FAQ.
   ========================================================================= */

"use strict";

/* ---------- Données pédagogiques ---------- */

const STEPS = [
  {
    n: "Étape 01",
    title: "Créer un compte EmailJS",
    summary:
      "Ouvrez emailjs.com et inscrivez-vous gratuitement. C'est la seule condition pour utiliser le service.",
    detail: `
      <h3>Créer un compte EmailJS</h3>
      <ol>
        <li>Rendez-vous sur <a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer">emailjs.com</a>.</li>
        <li>Cliquez sur <strong>Sign Up Free</strong> et créez votre compte (email + mot de passe).</li>
        <li>Confirmez votre adresse email via le lien reçu.</li>
      </ol>
      <div class="tip">💡 Aucune carte bancaire n'est demandée : le plan gratuit suffit largement pour apprendre.</div>`,
  },
  {
    n: "Étape 02",
    title: "Créer un Email Service",
    summary:
      "Le service connecte EmailJS à votre boîte mail (Gmail, Outlook…). C'est lui qui expédie réellement l'email.",
    detail: `
      <h3>Créer un Email Service</h3>
      <ol>
        <li>Dans le dashboard, ouvrez <strong>Email Services → Add New Service</strong>.</li>
        <li>Choisissez un fournisseur (Gmail, Outlook, etc.).</li>
        <li>Connectez votre compte via OAuth (aucun mot de passe n'est exposé).</li>
        <li>Copiez le <strong>Service ID</strong> généré (ex. <code>service_abc123</code>).</li>
      </ol>
      <div class="tip">💡 Pour Gmail, sélectionnez l'option <em>« Connect account »</em> avec les identifiants officiels EmailJS.</div>`,
  },
  {
    n: "Étape 03",
    title: "Créer un Email Template",
    summary:
      "Le template est le modèle de votre email : destinataire, sujet, contenu dynamique.",
    detail: `
      <h3>Créer un Email Template</h3>
      <ol>
        <li>Ouvrez <strong>Email Templates → Create New Template</strong>.</li>
        <li>Renseignez le champ <strong>To Email</strong> : l'adresse qui reçoit les messages.</li>
        <li>Insérez des <strong>variables</strong> entre accolades : <code>{{from_name}}</code>, <code>{{reply_to}}</code>, <code>{{message}}</code>.</li>
        <li>Enregistrez et copiez le <strong>Template ID</strong> (ex. <code>template_xyz</code>).</li>
      </ol>
      <div class="tip">💡 Les variables du template doivent correspondre aux attributs <code>name</code> de votre formulaire HTML.</div>`,
  },
  {
    n: "Étape 04",
    title: "Récupérer les identifiants",
    summary:
      "Public Key, Service ID, Template ID : les 3 valeurs indispensables pour connecter votre formulaire.",
    detail: `
      <h3>Récupérer les identifiants</h3>
      <ul>
        <li><strong>Public Key</strong> : <strong>Account → General</strong>. Faite pour le navigateur.</li>
        <li><strong>Service ID</strong> : <strong>Email Services</strong>.</li>
        <li><strong>Template ID</strong> : <strong>Email Templates</strong>.</li>
      </ul>
      <div class="tip">⚠️ Utilisez les valeurs fictives <code>YOUR_PUBLIC_KEY</code>, <code>YOUR_SERVICE_ID</code>, <code>YOUR_TEMPLATE_ID</code> tant que vous n'avez pas les vôtres.</div>`,
  },
  {
    n: "Étape 05",
    title: "Installer le SDK EmailJS",
    summary: "Importez le SDK via CDN. Une seule ligne suffit.",
    detail: `
      <h3>Installer le SDK EmailJS</h3>
      <p>Ajoutez avant la fermeture du <code>&lt;/body&gt;</code> :</p>
      <p><code>&lt;script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"&gt;&lt;/script&gt;</code></p>
      <div class="tip">💡 La version <code>@4</code> utilise <code>init()</code> avec une <code>publicKey</code> : c'est la méthode officielle actuelle.</div>`,
  },
  {
    n: "Étape 06",
    title: "Créer le formulaire HTML",
    summary:
      "Un formulaire classique : nom, email, sujet, message. Chaque name = variable du template.",
    detail: `
      <h3>Créer le formulaire HTML</h3>
      <p>Créez une balise <code>&lt;form&gt;</code> avec un id unique.<br>
      Chaque champ doit avoir un attribut <code>name</code> identique à une variable du template :</p>
      <p><code>&lt;input type="text" name="from_name"&gt;</code> · <code>&lt;input type="email" name="reply_to"&gt;</code> · <code>&lt;textarea name="message"&gt;</code></p>
      <div class="tip">💡 <code>sendForm()</code> lit automatiquement ces attributs : pas besoin de récupérer chaque valeur manuellement.</div>`,
  },
  {
    n: "Étape 07",
    title: "Connecter le formulaire à EmailJS",
    summary:
      "Initialisez le SDK avec votre Public Key, puis branchez l'événement submit sur sendForm().",
    detail: `
      <h3>Connecter le formulaire à EmailJS</h3>
      <ul>
        <li><strong>Initialisation</strong> : <code>emailjs.init({ publicKey: 'YOUR_PUBLIC_KEY' })</code></li>
        <li><strong>Envoi</strong> : <code>emailjs.sendForm(serviceID, templateID, '#monForm')</code></li>
        <li>La méthode renvoie une <strong>Promise</strong> : <code>.then()</code> = succès, <code>.catch()</code> = erreur.</li>
      </ul>
      <div class="tip">💡 Toujours appeler <code>init()</code> avant le premier envoi.</div>`,
  },
  {
    n: "Étape 08",
    title: "Envoyer le premier email",
    summary:
      "Testez le formulaire : le message doit arriver dans la boîte mail reliée au service.",
    detail: `
      <h3>Envoyer le premier email</h3>
      <ol>
        <li>Remplissez les champs Nom, Email, Sujet, Message.</li>
        <li>Cliquez sur <strong>Envoyer le message</strong>.</li>
        <li>Vérifiez votre boîte de réception.</li>
        <li>Ouvrez la console développeur (F12 → Console) : vous devez voir <code>SUCCESS! 200 OK</code>.</li>
      </ol>
      <div class="tip">💡 Si vous recevez le mail, vous venez d'envoyer un email sans backend — bravo !</div>`,
  },
  {
    n: "Étape 09",
    title: "Gérer les erreurs",
    summary:
      "Affichez un message clair si l'envoi échoue, plutôt que de laisser l'utilisateur sans réponse.",
    detail: `
      <h3>Gérer les erreurs</h3>
      <ul>
        <li>Utilisez la branche <code>catch</code> de la Promise pour capturer l'erreur.</li>
        <li>Affichez un message compréhensible : « L'envoi a échoué, vérifiez vos identifiants. »</li>
        <li>Loguez l'erreur dans la console pour retrouver le code exact (<code>430</code>, <code>400</code>…).</li>
      </ul>
      <div class="tip">💡 Consultez la section <a href="#debug">Dépannage</a> de ce site pour la liste des erreurs fréquentes.</div>`,
  },
  {
    n: "Étape 10",
    title: "Sécuriser et améliorer",
    summary:
      "Limitez les envois, ajoutez une protection anti-spam, validez côté client.",
    detail: `
      <h3>Sécuriser et améliorer</h3>
      <ul>
        <li><strong>Limit Rate</strong> dans <code>init()</code> : bloque les envois trop rapides.</li>
        <li><strong>Block List</strong> : filtre les adresses indésirables.</li>
        <li><strong>Validation côté client</strong> : email, longueurs, champs requis.</li>
        <li>Ajoutez une confirmation d'envoi et personnalisez vos templates.</li>
      </ul>
      <div class="tip">💡 Voir <code>Options</code> dans la documentation EmailJS pour la limitation de spam.</div>`,
  },
];

const DEBUG_ITEMS = [
  {
    code: "Public Key incorrecte",
    desc: "Code d'erreur 430 ou message « Invalid Public Key ».",
    fix: "Vérifiez la Public Key dans Account → General et recollez-la dans emailjs.init().",
  },
  {
    code: "Service ID incorrect",
    desc: "Erreur sur le service, message « service not found ».",
    fix: "Comparez avec le Service ID affiché dans Email Services du dashboard.",
  },
  {
    code: "Template ID incorrect",
    desc: "Erreur « template not found » ou code 400.",
    fix: "Recopiez le Template ID depuis Email Templates, sans espace ni caractère superflu.",
  },
  {
    code: "Template mal configuré",
    desc: "Email vide ou expéditeur inattendu.",
    fix: "Vérifiez le champ To Email et les réglages d'envoi dans le dashboard EmailJS.",
  },
  {
    code: "Variables du template erronées",
    desc: "Les valeurs du formulaire n'apparaissent pas dans l'email.",
    fix: "Les attributs name du HTML doivent correspondre exactement aux variables du template.",
  },
  {
    code: "Problème CORS",
    desc: "Blocage lié aux domaines autorisés côté EmailJS.",
    fix: "Ajoutez votre domaine local dans la liste autorisée des réglages du compte.",
  },
  {
    code: "Problème de réseau",
    desc: "Pas de réponse, timeout, ou erreur réseau dans la console.",
    fix: "Vérifiez votre connexion et que le CDN email.js est bien chargé (onglet Network).",
  },
  {
    code: "Limite EmailJS atteinte",
    desc: "Code 429 / quota dépassé, « rate limit » ou « limitRate ».",
    fix: "Le plan gratuit limite le volume. Patientez, réduisez le rythme ou passez à un plan supérieur.",
  },
];

const FAQ_ITEMS = [
  {
    q: "EmailJS est-il vraiment gratuit ?",
    a: "Oui, un plan gratuit existe (≈ 200 emails/mois et 2 services dans les versions récentes). Il suffit pour apprendre, mais possède des limites volontaires.",
  },
  {
    q: "La Public Key expose-t-elle mon compte ?",
    a: "Non. La Public Key est conçue pour être publique. En revanche, aucune clé secrète ne doit jamais être mise dans un fichier front-end.",
  },
  {
    q: "Puis-je utiliser EmailJS en production ?",
    a: "Possible pour des volumes modestes, à condition de configurer correctement l'authentification et les restrictions de domaine. Pour du volume, préférez un backend et un vrai service d'envoi.",
  },
  {
    q: "Ai-je besoin d'un backend ?",
    a: "Non, c'est tout l'intérêt d'EmailJS : le SDK s'adresse directement à leurs serveurs depuis le navigateur.",
  },
  {
    q: "Pourquoi mes emails arrivent-ils en spam ?",
    a: "C'est fréquent avec les services gratuits ou les domaines non vérifiés. Vérifiez le domaine d'envoi dans les réglages du service et soignez le contenu.",
  },
  {
    q: "Quelle différence entre send() et sendForm() ?",
    a: "send() prend des paramètres que vous construisez manuellement ; sendForm() collecte automatiquement les champs d'un formulaire HTML via leurs attributs name.",
  },
];

/* ---------- Utilitaires ---------- */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* ---------- Navigation ---------- */

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
    ) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) closeMenu();
  });

  // Liens de navigation (boutons + boutons d'action)
  $$(".nav-link[data-target], .btn[data-target]").forEach((btn) => {
    btn.addEventListener("click", () => {
      closeMenu();
      const target = $(btn.dataset.target);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

/* ---------- Thème ---------- */

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

/* ---------- Étapes du parcours ---------- */

function initSteps() {
  const grid = $("#stepsGrid");
  const detail = $("#stepDetail");
  const body = $("#stepDetailBody");
  const closeBtn = $("#stepDetailClose");
  if (!grid || !detail || !body) return;

  // Rendu des cartes
  const frag = document.createDocumentFragment();
  STEPS.forEach((step, i) => {
    const li = document.createElement("li");
    li.className = "card step-card";
    li.tabIndex = 0;
    li.setAttribute("role", "button");
    li.setAttribute("aria-label", `Voir le détail : ${step.title}`);
    li.innerHTML = `
      <div class="step-num">${step.n}</div>
      <h3>${step.title}</h3>
      <p>${step.summary}</p>
      <span class="step-go">Voir le détail</span>`;

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
    body.innerHTML = STEPS[i].detail;
    detail.hidden = false;
    detail.scrollIntoView({ behavior: "smooth", block: "nearest" });
    body.focus({ preventScroll: true });
  }

  function closeStep() {
    detail.hidden = true;
  }

  closeBtn?.addEventListener("click", closeStep);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !detail.hidden) closeStep();
  });
}

/* ---------- Configuration (localStorage) ---------- */

const CONFIG_KEY = "emailjsLabConfig";

function loadConfig() {
  try {
    return JSON.parse(localStorage.getItem(CONFIG_KEY)) || {};
  } catch {
    return {};
  }
}

function saveConfig(cfg) {
  try {
    localStorage.setItem(CONFIG_KEY, JSON.stringify(cfg));
  } catch (e) {
    console.warn(
      "[EmailJS Lab] Impossible de sauvegarder la configuration.",
      e,
    );
  }
}

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
    const data = {
      publicKey: $("#publicKey").value.trim(),
      serviceId: $("#serviceId").value.trim(),
      templateId: $("#templateId").value.trim(),
    };
    saveConfig(data);
    setStatus(
      status,
      "Identifiants enregistrés dans ce navigateur.",
      "is-success",
    );
  });

  $("#clearConfigBtn")?.addEventListener("click", () => {
    try {
      localStorage.removeItem(CONFIG_KEY);
    } catch (e) {}
    form.reset();
    setStatus(status, "Identifiants effacés.", "is-loading");
  });
}

/* ---------- Statuts ---------- */

function setStatus(el, text, type) {
  if (!el) return;
  el.textContent = text;
  el.classList.remove("is-loading", "is-success", "is-error");
  if (type) el.classList.add(type);
  el.classList.add("is-visible");
}

/* ---------- Validation ---------- */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(input) {
  const value = input.value.trim();
  const field = input.closest(".form-field");
  if (!field) return true;

  let error = "";
  if (input.hasAttribute("required") && !value) {
    error = "Ce champ est requis.";
  } else if (input.type === "email" && value && !EMAIL_RE.test(value)) {
    error = "Adresse email invalide.";
  } else if (input.tagName === "TEXTAREA" && value && value.length < 10) {
    error = "Votre message doit contenir au moins 10 caractères.";
  } else if (input.hasAttribute("minlength") && value) {
    const min = Number(input.getAttribute("minlength"));
    if (value.length < min) error = `Minimum ${min} caractères.`;
  }

  field.querySelector(".form-error")?.remove();
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

/* ---------- Laboratoire EmailJS ---------- */

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

  // Validation à la volée
  $$("input, textarea", form).forEach((el) => {
    el.addEventListener("blur", () => validateField(el));
    el.addEventListener("input", () => {
      el.closest(".form-field")?.querySelector(".form-error")?.remove();
      el.closest(".form-field")?.classList.remove("is-invalid");
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!validateForm(form)) {
      setStatus(
        status,
        "Corrigez les erreurs du formulaire avant d'envoyer.",
        "is-error",
      );
      return;
    }

    if (!emailjsReady()) {
      setStatus(
        status,
        "Le SDK EmailJS n'est pas chargé. Vérifiez la balise script CDN et votre connexion internet.",
        "is-error",
      );
      return;
    }

    const { publicKey, serviceId, templateId } = getActiveConfig();
    if (serviceId.includes("YOUR_") || templateId.includes("YOUR_")) {
      setStatus(
        status,
        "Renseignez d'abord vos vrais Service ID et Template ID dans la section Configuration.",
        "is-error",
      );
      return;
    }

    btn.classList.add("is-loading");
    btn.disabled = true;
    setStatus(status, "Envoi en cours…", "is-loading");

    try {
      emailjs.init({ publicKey });
      const res = await emailjs.sendForm(serviceId, templateId, form);
      setStatus(
        status,
        `Email envoyé avec succès ! (${res.status} ${res.text})`,
        "is-success",
      );
      form.reset();
    } catch (err) {
      let msg = "L'envoi a échoué. Consultez la section Dépannage.";
      if (err && err.status)
        msg = `Erreur ${err.status} — voir la section Dépannage pour la solution.`;
      console.error("[EmailJS]", err);
      setStatus(status, msg, "is-error");
    } finally {
      btn.classList.remove("is-loading");
      btn.disabled = false;
    }
  });
}

/* ---------- Code exemple : coloration + copie ---------- */

function initCode() {
  const tabs = $$(".code-tab");
  const htmlBlock = $("#codeHtml");
  const jsBlock = $("#codeJs");
  const filename = $("#codeFilename");
  const copyBtn = $("#copyBtn");
  if (!htmlBlock || !jsBlock) return;

  const esc = (t) =>
    t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const highlightHtml = (t) =>
    esc(t).replace(
      /(&lt;!--[\s\S]*?--&gt;)|(&lt;\/?)([a-zA-Z][\w-]*)|([\w-]+)(=)/g,
      (m, com, lt, tag, attr, eq) =>
        com
          ? `<span class="tok-com">${com}</span>`
          : lt
            ? `${lt}<span class="tok-tag">${tag}</span>`
            : `<span class="tok-attr">${attr}</span>${eq}`,
    );

  const highlightJs = (t) =>
    esc(t).replace(
      /(\/\/[^\n]*)|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")|\b(const|let|var|function|return|await|async|if|else|try|catch|new|document|window|navigator|emailjs|this|addEventListener|getElementById)\b|\b(\d+)\b/g,
      (m, com, str, kw, num) =>
        com
          ? `<span class="tok-com">${com}</span>`
          : str
            ? `<span class="tok-str">${str}</span>`
            : kw
              ? `<span class="tok-kw">${kw}</span>`
              : num
                ? `<span class="tok-num">${num}</span>`
                : m,
    );

  htmlBlock.querySelector("code").innerHTML = highlightHtml(
    htmlBlock.textContent,
  );
  jsBlock.querySelector("code").innerHTML = highlightJs(jsBlock.textContent);

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

  copyBtn?.addEventListener("click", async () => {
    const active = htmlBlock.hidden ? jsBlock : htmlBlock;
    const text = active.textContent;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch (e) {}
      ta.remove();
    }
    const original = copyBtn.innerHTML;
    copyBtn.textContent = "Copié !";
    setTimeout(() => {
      copyBtn.innerHTML = original;
    }, 1500);
  });
}

/* ---------- Dépannage ---------- */

function initDebug() {
  const list = $("#debugList");
  if (!list) return;

  list.innerHTML = DEBUG_ITEMS.map(
    (item) => `
    <article class="card debug-item">
      <h3>${item.code}</h3>
      <p>${item.desc}</p>
      <div class="fix"><strong>Solution :</strong> ${item.fix}</div>
    </article>`,
  ).join("");
}

/* ---------- Checklist ---------- */

const CHECK_KEY = "emailjsLabChecklist";

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

/* ---------- FAQ ---------- */

function initFaq() {
  const list = $("#faqList");
  if (!list) return;

  list.innerHTML = FAQ_ITEMS.map(
    (item, i) => `
    <div class="faq-item">
      <button class="faq-q" type="button" aria-expanded="false" aria-controls="faq-a-${i}">
        <span>${item.q}</span>
        <span class="faq-chev" aria-hidden="true">▼</span>
      </button>
      <div class="faq-a" id="faq-a-${i}">${item.a}</div>
    </div>`,
  ).join("");

  $$(".faq-item", list).forEach((item) => {
    const q = $(".faq-q", item);
    const a = $(".faq-a", item);
    q.addEventListener("click", () => {
      const open = item.classList.toggle("is-open");
      q.setAttribute("aria-expanded", String(open));
      a.style.maxHeight = open ? `${a.scrollHeight}px` : "0px";
    });
  });
}

/* ---------- Initialisation ---------- */

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initTheme();
  initSteps();
  initConfig();
  initLab();
  initCode();
  initDebug();
  initChecklist();
  initFaq();
});
