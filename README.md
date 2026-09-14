# 📑 EmailJS Lab — Docs & Sandbox

Une documentation moderne, interactive et en français pour apprendre à intégrer **EmailJS** dans vos applications web **sans serveur Back-End**.

Conçu pour guider les développeurs pas à pas, de la configuration du tableau de bord EmailJS jusqu'à l'implémentation du code, avec un espace de test (« Sandbox ») en direct.

## 🚀 Fonctionnalités du site

- **Guide pas à pas** : explications claires pour configurer son compte, son service d'email et ses templates (10 étapes).
- **Exemples de code prêts à l'emploi** : extraits propres en JavaScript Vanilla (SDK CDN officiel) avec **coloration syntaxique** et bouton « Copier ».
- **Bac à sable interactif (Sandbox)** : un formulaire de test dans lequel on renseigne ses propres clés EmailJS (stockées en `localStorage`) pour tester l'envoi d'e-mails en direct.
- **Design Responsive & Accessible** : interface **claire/sombre**, optimisée pour mobile, tablette et ordinateur.

## 🛠️ Technologies utilisées

- **Front-End** : HTML5, CSS3, JavaScript Vanilla (aucun framework)
- **Outils & API** : EmailJS Browser SDK (`@emailjs/browser@4`)
- **Hébergement** : GitHub Pages / Netlify / Vercel (ou Live Server local)

## 📦 Installation locale

```bash
git clone https://github.com/francis-mampouya/learn_email_js.git
cd learn_email_js
```

Ouvrez simplement `index.html` avec l'extension VS Code **Live Server** (projet HTML/JS pur, aucun build requis).

## 🔐 Sécurité & Bonnes pratiques

Le site rappelle les règles essentielles de sécurité EmailJS :

- Utilisation **exclusive de la Public Key côté client** — c'est fait pour ça.
- **Aucune clé secrète** ne doit jamais être placée dans un fichier front-end (visible par tous).
- Configurer les **restrictions d'origine (whitelist de domaines)** sur le tableau de bord EmailJS pour éviter le spam.
- Trafic limité : `localStorage` uniquement côté navigateur, identifiants jamais envoyés ailleurs.

## ✍️ Auteur

Projet réalisé par **Yves Jean Francis MAMPOUYA** dans le cadre de ma formation de Développeur Full-Stack.

- GitHub : [francis-mampouya](https://github.com/francis-mampouya)
- LinkedIn : [Yves Jean Francis MAMPOUYA](https://www.linkedin.com/in/yves-jean-francis-mampouya)

> ⚠️ Projet pédagogique, non affilié officiellement à EmailJS.