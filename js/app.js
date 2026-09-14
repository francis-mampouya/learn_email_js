/* EmailJS Lab — app.js
   Modules : navigation, étapes, config, laboratoire (EmailJS), code, debug, checklist, FAQ
   ====================================================================== */

'use strict';

/* ---------- Données pédagogiques ---------- */

const STEPS = [
  {
    n: 'Étape 01', title: 'Créer un compte EmailJS',
    summary: "Ouvre emailjs.com et inscris-toi gratuitement. C'est la seule condition pour utiliser le service.",
    detail: html`<h3>Créer un compte EmailJS</h3>
      <ol>
        <li>Va sur <a href="https://www.emailjs.com" target="_blank" rel="noopener">emailjs.com</a>.</li>
        <li>Clique sur <strong>Sign Up Free</strong> et crée ton compte (email + mot de passe).</li>
        <li>Confirme ton adresse email via le lien reçu.</li>
      </ol>
      <div class="tip">💡 Tu n'as pas besoin de carte bancaire : le plan gratuit suffit pour apprendre.</div>`
  },
  {
    n: 'Étape 02', title: 'Créer un Email Service',
    summary: "Le service connecte EmailJS à ta boîte mail (Gmail, Outlook…). C'est lui qui expédie réellement l'email.",
    detail: html`<h3>Créer un Email Service</h3>
      <ol>
        <li>Dans le dashboard, va dans <strong>Email Services → Add New Service</strong>.</li>
        <li>Choisis un fournisseur (Gmail, Outlook, etc.).</li>
        <li>Connecte ton compte : EmailJS proposera une utilisation de ses propres identifiants OAuth pour Gmail.</li>
        <li>Copie le <strong>Service ID</strong> généré (ex. <code>service_abc123</code>).</li>
      </ol>
      <div class="tip">💡 Pour Gmail, sélectionne l'option <em>"Connect account"</em> avec les identifiants officiels EmailJS : tu n'exposes ainsi aucun mot de passe.</div>`
  },
  {
    n: 'Étape 03', title: 'Créer un Email Template',
    summary: "Le template est le modèle de ton email : qui reçoit, quel sujet, quel contenu.",
    detail: html`<h3>Créer un Email Template</h3>
      <ol>
        <li>Va dans <strong>Email Templates → Create New Template</strong>.</li>
        <li>Renseigne le champ <strong>To Email</strong> : l'adresse qui va recevoir les messages (la tienne en test).</li>
        <li>Dans le sujet et le contenu, insère des <strong>variables</strong> entre accolades : <code>{{from_name}}</code>, <code>{{reply_to}}</code>, <code>{{message}}</code>.</li>
        <li>Enregistre et copie le <strong>Template ID</strong> (ex. <code>template_xyz</code>).</li>
      </ol>
      <div class="tip">💡 Les variables du template doivent correspondre aux attributs <code>name</code> de ton formulaire HTML.</div>`
  },
  {
    n: 'Étape 04', title: 'Récupérer les identifiants',
    summary: "Public Key, Service ID, Template ID : les 3 valeurs indispensables pour connecter ton formulaire.",
    detail: html`<h3>Récupérer les identifiants</h3>
      <ul>
        <li><strong>Public Key</strong> : menu <strong>Account → General</strong>. C'est la clé publique, faite pour le navigateur.</li>
        <li><strong>Service ID</strong> : menu <strong>Email Services</strong>.</li>
        <li><strong>Template ID</strong> : menu <strong>Email Templates</strong>.</li>
      </ul>
      <div class="tip">⚠️ Emploie les valeurs fictives <code>YOUR_PUBLIC_KEY</code>, <code>YOUR_SERVICE_ID</code>, <code>YOUR_TEMPLATE_ID</code> tant que tu n'as pas les tiennes.</div>`
  },
  {
    n: 'Étape 05', title: 'Installer le SDK EmailJS',
    summary: "Importe le SDK dans ta page HTML. Une seule ligne suffit grâce au CDN officiel.",
    detail: html`<h3>Installer le SDK EmailJS</h3>
      <p>Ajoute avant la fermeture du <code>&lt;body&gt;</code> :</p>
      <code>&lt;script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"&gt;&lt;/script&gt;</code>
      <p class="tip">💡 La version <code>@4</code> utilise la méthode <code>init()</code> avec une <code>publicKey</code>. C'est la méthode officielle actuelle.</p>`
  },
  {
    n: 'Étape 06', title: 'Créer le formulaire HTML',
    summary: "Un formulaire classique : nom, email, sujet, message. Chaque champ a un name = variable du template.",
    detail: html`<h3>Créer le formulaire HTML</h3>
      <p>Crée une balise <code>&lt;form&gt;</code> avec un id unique.<br>
      Chaque champ doit avoir un attribut <code>name</code> identique au nom d'une variable du template :</p>
      <code>&lt;input type="text" name="from_name"&gt;</code> · <code>&lt;input type="email" name="reply_to"&gt;</code> · <code>&lt;textarea name="message"&gt;</code>
      <div class="tip">💡 <code>sendForm()</code> lit automatiquement ces attributs <code>name</code> : pas besoin de récupérer chaque valeur à la main.</div>`
  },
  {
    n: 'Étape 07', title: 'Connecter le formulaire à EmailJS',
    summary: "Initialise le SDK avec ta Public Key, puis branche l'événement submit sur sendForm().",
    detail: html`<h3>Connecter le formulaire à EmailJS</h3>
      <ul>
        <li><strong>Initialisation</strong> : <code>emailjs.init({ publicKey: 'YOUR_PUBLIC_KEY' })</code></li>
        <li><strong>Envoi</strong> : <code>emailjs.sendForm(serviceID, templateID, '#tonForm')</code></li>
        <li>Cette méthode renvoie une <strong>Promise</strong> : <code>.then()</code> = succès, <code>.catch()</code> = erreur.</li>
      </ul>
      <div class="tip">💡 Toujours appeler <code>init()</code> avant le premier envoi.</div>`
  },
  {
    n: 'Étape 08', title: 'Envoyer le premier email',
    summary: "Teste le formulaire : le message doit arriver dans ta boîte mail reliée au service.",
    detail: html`<h3>Envoyer le premier email</h3>
      <ol>
        <li>Remplis les champs Nom, Email, Sujet, Message.</li>
        <li>Clique sur <strong>Envoyer le message</strong>.</li>
        <li>Vérifie ton email : le message doit apparaître dans la boîte de réception de l'adresse configurée dans le template.</li>
        <li>Observe la console développeur (F12 → Console) : <code>SUCCESS! 200 OK</code></li>
      </ol>
      <div class="tip">💡 Si tu reçois le mail, tu viens d'envoyer un email sans backend — bravo !</div>`
  },
  {
    n: 'Étape 09', title: 'Gérer les erreurs',
    summary: "Affiche un message clair si l'envoi échoue, plutôt que de laisser l'utilisateur sans réponse.",
    detail: html`<h3>Gérer les erreurs</h3>
      <ul>
        <li>Utilise la branche <code>catch</code> de la Promise pour capturer l'erreur.</li>
        <li>Affiche un message compréhensible : « L'envoi a échoué, vérifie tes identifiants. »</li>
        <li>Logue l'erreur dans la console pour retrouver le code exact (ex. <code>430</code>, <code>400</code>).</li>
      </ul>
      <div class="tip">💡 Va voir la section <a href="#debug">Debug</a> de ce site pour la liste des erreurs fréquentes.</div>`
  },
  {
    n: 'Étape 10', title: 'Sécuriser et améliorer',
    summary: "Limite les envois, ajoute une capture anti-spam, valide côté client.",
    detail: html`<h3>Sécuriser et améliorer</h3>
      <ul>
        <li><strong>Limit Rate</strong> dans <code>init()</code> : bloque les envois trop rapides.</li>
        <li><strong>Block List</strong> : bloque des adresses indésirables.</li>
        <li><strong>Validation côté client</strong> : vérifie email, longueurs, champs requis.</li>
        <li>Hydrate le template avec des variables, ajoute une confirmation d'envoi.</li>
      </ul>
      <div class="tip">💡 Voir <code>Options</code> dans la documentation EmailJS pour limiter le spam.</div>`
  }
];

const DEBUG_ITEMS = [
  { code: 'Public Key incorrecte', desc: 'Le code d\'erreur 430 ou un message "Invalid Public Key".',
    fix: 'Vérifie la Public Key dans Account → General et recolle-la dans emailjs.init().' },
  { code: 'Service ID incorrect', desc: 'Erreur sur le service, debug "service not found".',
    fix: 'Compare avec le Service ID affiché dans Email Services du dashboard.' },
  { code: 'Template ID incorrect', desc: 'Erreur "template not found" ou >400.',
    fix: 'Recopie le Template ID depuis Email Templates sans espace ni caractère en trop.' },
  { code: 'Template mal configuré', desc: 'Email arrive vide ou expéditeur bizarre.',
    fix: 'Vérifie le champ To Email et les réglages d\'envoi dans le dashboard EmailJS.' },
  { code: 'Variables du template incorrectes', desc: 'Les valeurs du formulaire n\'apparaissent pas dans l\'email.',
    fix: 'Les attributs name du HTML doivent correspondre exactement aux variables du template.' },
  { code: 'Problème CORS', desc: 'Blocage lié aux domaines autorisés côté EmailJS.',
    fix: 'Ajoute ton domaine local dans la liste autorisée des réglages du compte, ou teste via localhost.' },
  { code: 'Problème de réseau', desc: 'Pas de réponse, timeout, ou erreur réseau dans la console.',
    fix: 'Vérifie ta connexion et que le CDN email.js est bien chargé (onglet Network).' },
  { code: 'Limite EmailJS atteinte', desc: 'Code 429 / quota dépassé, "rate limit" ou "limitRate".',
    fix: 'La base gratuite limite le volume. Patiente, réduis le rythme, ou passe à un plan supérieur.' }
];

const FAQ_ITEMS = [
  { q: 'EmailJS est-il vraiment gratuit ?', a: 'Oui, un plan gratuit existe (≈ 200 emails/mois et 2 services dans les versions récentes). Il suffit pour apprendre, mais a des limites volontaires.' },
  { q: 'Est-ce que la Public Key expose mon compte ?', a: 'Non. La Public Key est conçue pour être publique. En revanche, aucune clé secrète ne doit jamais être mise dans un fichier front-end.' },
  { q: 'Puis-je envoyer des emails en production avec EmailJS ?', a: 'Possible pour des volumes modestes, surtout avec authentification par mot de passe ou OAuth configurée proprement. Pour du volume, préfère un backend et un vrai service d\'envoi.' },
  { q: 'Dois-je avoir un backend ?', a: 'Non, c\'est toute la force d\'EmailJS : le SDK s\'adresse directement à leurs serveurs depuis le navigateur.' },
  { q: 'Pourquoi mes emails partent-ils en spam ?', a: 'C\'est fréquent avec les services gratuits ou les domaines non vérifiés. Vérifie le bon domaine d\'envoi dans les réglages du service.' },
  { q: 'Quelle différence entre send() et sendForm() ?', a: 'send() prend des paramètres que tu construis manuellement ; sendForm() collecte automatiquement les champs d\'un formulaire HTML via leurs attributs name.' }
];

/* ---------- Petites utilitaires ---------- */

function html(strings, ...values) {
  return strings.reduce((acc, s, i) => acc + s + (values[i] ?? ''), '');
}

function $(sel) { return document.querySelector(sel); }
function $$(sel) { return document.querySelectorAll(sel); }

/* ---------- Navigation ---------- */

function initNav() {
  const toggle = $('#menuToggle');
  const nav = $('#mainNav');

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('click', (e) => {
    if (nav.classList.contains('is-open') && !nav.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) closeMenu();
  });

  function closeMenu() {
    nav.classList.remove('is-open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  $$('.nav-link[data-target]').forEach((btn) => {
    btn.addEventListener('click', () => {
      closeMenu();
      const target = $(btn.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  $$('.btn[data-target]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = $(btn.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ---------- Parcours (étapes) ---------- */

function initSteps() {
  const grid = $('#stepsGrid');
  const detail = $('#stepDetail');
  const body = $('#stepDetailBody');

  STEPS.forEach((step, i) => {
    const btn = document.createElement('article');
    btn.className = 'card step-card';
    btn.tabIndex = 0;
    btn.setAttribute('role', 'button');
    btn.setAttribute('aria-label', `Voir le détail : ${step.title}`);
    btn.innerHTML = `
      <div class="step-num">${step.n}</div>
      <h3>${step.title}</h3>
      <p>${step.summary}</p>
      <span class="step-go">Voir le détail</span>`;
    btn.addEventListener('click', () => openStep(i));
    btn.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openStep(i); } });
    grid.appendChild(btn);
  });

  function openStep(i) {
    body.innerHTML = STEPS[i].detail;
    detail.hidden = false;
    detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  $('#stepDetailClose').addEventListener('click', () => { detail.hidden = true; });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') detail.hidden = true; });
}

/* ---------- Configuration (localStorage) ---------- */

const CONFIG_KEY = 'emailjsLabConfig';

function loadConfig() {
  try {
    return JSON.parse(localStorage.getItem(CONFIG_KEY)) || {};
  } catch {
    return {};
  }
}

function initConfig() {
  const form = $('#configForm');
  const cfg = loadConfig();

  $('#publicKey').value = cfg.publicKey || '';
  $('#serviceId').value = cfg.serviceId || '';
  $('#templateId').value = cfg.templateId || '';

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem(CONFIG_KEY, JSON.stringify({
      publicKey: $('#publicKey').value.trim(),
      serviceId: $('#serviceId').value.trim(),
      templateId: $('#templateId').value.trim()
    }));
    setStatus($('#configStatus'), 'Identifiants enregistrés dans ce navigateur.', 'is-success');
  });

  $('#clearConfigBtn').addEventListener('click', () => {
    localStorage.removeItem(CONFIG_KEY);
    form.reset();
    setStatus($('#configStatus'), 'Identifiants effacés.', 'is-loading');
  });
}

/* ---------- Laboratoire : validation ---------- */

function validateField(input) {
  const value = input.value.trim();
  const field = input.closest('.form-field');
  let error = '';

  if (!value) error = 'Ce champ est requis.';
  else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Adresse email invalide.';
  else if (input.tagName === 'TEXTAREA' && value.length < 10) error = 'Ton message doit contenir au moins 10 caractères.';

  const prev = field.querySelector('.form-error');
  if (prev) prev.remove();
  field.classList.toggle('is-invalid', Boolean(error));
  if (error) input.setAttribute('aria-invalid', 'true');
  else input.removeAttribute('aria-invalid');

  if (error) {
    const err = document.createElement('span');
    err.className = 'form-error';
    err.textContent = error;
    field.appendChild(err);
  }
  return !error;
}

function validateForm(form) {
  let ok = true;
  form.querySelectorAll('input, textarea').forEach((el) => { if (!validateField(el)) ok = false; });
  return ok;
}

/* ---------- Laboratoire : EmailJS ---------- */

function emailjsReady() { return typeof emailjs !== 'undefined'; }

function getActiveConfig() {
  const cfg = loadConfig();
  return {
    publicKey: cfg.publicKey || 'YOUR_PUBLIC_KEY',
    serviceId: cfg.serviceId || 'YOUR_SERVICE_ID',
    templateId: cfg.templateId || 'YOUR_TEMPLATE_ID'
  };
}

function setStatus(el, text, type) {
  el.textContent = text;
  el.classList.remove('is-loading', 'is-success', 'is-error');
  if (type) el.classList.add(type);
  el.classList.add('is-visible');
}

function initLab() {
  const form = $('#labForm');
  const btn = $('#sendBtn');
  const status = $('#formStatus');

  form.querySelectorAll('input, textarea').forEach((el) => {
    el.addEventListener('blur', () => validateField(el));
    el.addEventListener('input', () => { const prev = el.closest('.form-field').querySelector('.form-error'); if (prev) prev.remove(); });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validateForm(form)) {
      setStatus(status, 'Corrige les erreurs du formulaire avant d\'envoyer.', 'is-error');
      return;
    }

    if (!emailjsReady()) {
      setStatus(status, 'Le SDK EmailJS n\'est pas chargé. Vérifie la balise script CDN (connexion internet).', 'is-error');
      return;
    }

    const { publicKey, serviceId, templateId } = getActiveConfig();
    if (serviceId.includes('YOUR_') || templateId.includes('YOUR_')) {
      setStatus(status, 'Renseigne d\'abord tes vrais Service ID et Template ID dans la section Configuration.', 'is-error');
      return;
    }

    btn.classList.add('is-loading');
    btn.disabled = true;
    setStatus(status, 'Envoi en cours…', 'is-loading');

    try {
      emailjs.init({ publicKey });
      const res = await emailjs.sendForm(serviceId, templateId, form);
      setStatus(status, `Email envoyé avec succès ! (${res.status} ${res.text})`, 'is-success');
      form.reset();
    } catch (err) {
      let msg = 'L\'envoi a échoué. Consulte la section Debug.';
      if (err && err.status) msg = `Erreur ${err.status} — voir la section Debug pour la solution.`;
      console.error('[EmailJS]', err);
      setStatus(status, msg, 'is-error');
    } finally {
      btn.classList.remove('is-loading');
      btn.disabled = false;
    }
  });
}

/* ---------- Code exemple : onglets + copie ---------- */

function initCode() {
  const tabs = $$('.code-tab');
  const htmlBlock = $('#codeHtml');
  const jsBlock = $('#codeJs');
  const filename = $('#codeFilename');

  /* Coloration syntaxique légère (sans dépendance) */
  const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  function highlightHtml(t) {
    return esc(t).replace(
      /(&lt;!--[\s\S]*?--&gt;)|(&lt;\/?)([a-zA-Z][\w-]*)|([\w-]+)(=)/g,
      (m, com, lt, tag, attr, eq) => com
        ? `<span class="tok-com">${com}</span>`
        : lt
          ? `${lt}<span class="tok-tag">${tag}</span>`
          : `<span class="tok-attr">${attr}</span>${eq}`
    );
  }

  function highlightJs(t) {
    return esc(t).replace(
      /(\/\/[^\n]*)|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")|\b(const|let|var|function|return|await|async|if|else|try|catch|new|document|navigator|emailjs|this|addEventListener)\b|\b(\d+)\b/g,
      (m, com, str, kw, num) => com
        ? `<span class="tok-com">${com}</span>`
        : str
          ? `<span class="tok-str">${str}</span>`
          : kw
            ? `<span class="tok-kw">${kw}</span>`
            : num
              ? `<span class="tok-num">${num}</span>`
              : m
    );
  }

  htmlBlock.querySelector('code').innerHTML = highlightHtml(htmlBlock.textContent);
  jsBlock.querySelector('code').innerHTML = highlightJs(jsBlock.textContent);

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      const isJs = tab.dataset.tab === 'js';
      htmlBlock.hidden = isJs;
      jsBlock.hidden = !isJs;
      filename.textContent = isJs ? 'app.js' : 'index.html';
    });
  });

  $('#copyBtn').addEventListener('click', async () => {
    const active = htmlBlock.hidden ? jsBlock : htmlBlock;
    const text = active.textContent;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    const btn = $('#copyBtn');
    const original = btn.textContent;
    btn.textContent = 'Copié ! ✔';
    setTimeout(() => { btn.textContent = original; }, 1500);
  });
}

/* ---------- Debug ---------- */

function initDebug() {
  const list = $('#debugList');
  list.innerHTML = DEBUG_ITEMS.map((item) => `
    <article class="card debug-item">
      <h3>${item.code}</h3>
      <p>${item.desc}</p>
      <div class="fix">✅ <strong>Solution :</strong> ${item.fix}</div>
    </article>`).join('');
}

/* ---------- Checklist (localStorage) ---------- */

const CHECK_KEY = 'emailjsLabChecklist';

function initChecklist() {
  const form = $('#checklistForm');
  const counter = $('#checklistDone');

  const saved = JSON.parse(localStorage.getItem(CHECK_KEY) || '[]');
  form.querySelectorAll('input').forEach((box) => {
    box.checked = saved.includes(box.dataset.check);
  });

  function update() {
    const done = form.querySelectorAll('input:checked').length;
    counter.textContent = done;
    const checks = [...form.querySelectorAll('input:checked')].map((b) => b.dataset.check);
    localStorage.setItem(CHECK_KEY, JSON.stringify(checks));
  }

  form.addEventListener('change', update);
  update();
}

/* ---------- FAQ ---------- */

function initFaq() {
  const list = $('#faqList');
  list.innerHTML = FAQ_ITEMS.map((item, i) => `
    <div class="faq-item">
      <button class="faq-q" aria-expanded="false" aria-controls="faq-a-${i}">
        ${item.q}
        <span class="faq-chev" aria-hidden="true">▼</span>
      </button>
      <div class="faq-a" id="faq-a-${i}">${item.a}</div>
    </div>`).join('');

  list.querySelectorAll('.faq-item').forEach((item) => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    q.addEventListener('click', () => {
      const open = item.classList.toggle('is-open');
      q.setAttribute('aria-expanded', String(open));
      a.style.maxHeight = open ? a.scrollHeight + 'px' : '0';
    });
  });
}

/* ---------- Thème clair / sombre ---------- */

function initTheme() {
  const toggle = $('#themeToggle');
  const doc = document.documentElement;

  function setIcon() {
    toggle.textContent = doc.dataset.theme === 'dark' ? '☀️' : '🌙';
  }

  toggle.addEventListener('click', () => {
    const next = doc.dataset.theme === 'dark' ? 'light' : 'dark';
    doc.dataset.theme = next;
    localStorage.setItem('emailjsLabTheme', next);
    setIcon();
  });

  setIcon();
}

/* ---------- Initialisation ---------- */

document.addEventListener('DOMContentLoaded', () => {
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