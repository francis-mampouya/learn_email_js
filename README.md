# EmailJS Lab

Laboratoire pédagogique pour apprendre à envoyer des emails avec **EmailJS**, en HTML5 / CSS3 / JavaScript vanilla, sans backend.

## Démarrage

1. Ouvre le dossier dans **VS Code**.
2. Installe l'extension **Live Server**.
3. Clic droit sur `index.html` → **Open with Live Server**.

## Structure

```
emailjs-lab/
├── index.html       # structure de la SPA
├── css/style.css    # design responsive (Mobile First)
├── js/app.js        # navigation, formulaire, EmailJS, checklist, FAQ
└── assets/images/   # (inutilisé — le site fonctionne sans images)
```

## Utilisation

1. Suis le **Parcours d'apprentissage** (10 étapes).
2. Renseigne tes identifiants (`Public Key`, `Service ID`, `Template ID`) dans la section **Configuration** — ils sont stockés uniquement dans `localStorage`.
3. Teste l'envoi dans le **Laboratoire**.

> ⚠️ Ne mets jamais une clé secrète côté navigateur. La Public Key est conçue pour être publique.

Projet pédagogique, non affilié officiellement à EmailJS.