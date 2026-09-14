"use strict";

window.EmailJSLab = window.EmailJSLab || {};

const QUIZ_DATA = {
  fr: [
    {
      q: "Où récupérer la Public Key EmailJS ?",
      options: ["Email Services", "Account → General", "Email Templates"],
      correct: 1,
    },
    {
      q: "Quelle est la différence entre send() et sendForm() ?",
      options: [
        "sendForm() collecte automatiquement les champs d'un formulaire",
        "send() est plus rapide",
        "Aucune, ce sont des alias",
      ],
      correct: 0,
    },
    {
      q: "À quoi sert le Template ID ?",
      options: [
        "Identifier le modèle d'email à utiliser",
        "Chiffrer le message",
        "Identifier l'utilisateur",
      ],
      correct: 0,
    },
    {
      q: "La Public Key doit-elle rester secrète ?",
      options: [
        "Non, elle est faite pour être publique",
        "Oui, absolument",
        "Seulement en production",
      ],
      correct: 0,
    },
    {
      q: "Que faire en cas d'erreur 430 ?",
      options: [
        "Vérifier la Public Key",
        "Attendre 1 heure",
        "Changer de compte EmailJS",
      ],
      correct: 0,
    },
  ],
  en: [
    {
      q: "Where can you find your EmailJS Public Key?",
      options: ["Email Services", "Account → General", "Email Templates"],
      correct: 1,
    },
    {
      q: "What's the difference between send() and sendForm()?",
      options: [
        "sendForm() automatically collects form fields",
        "send() is faster",
        "None, they are aliases",
      ],
      correct: 0,
    },
    {
      q: "What is the Template ID used for?",
      options: [
        "Identifying which email template to use",
        "Encrypting the message",
        "Identifying the user",
      ],
      correct: 0,
    },
    {
      q: "Should the Public Key stay secret?",
      options: [
        "No, it is meant to be public",
        "Yes, absolutely",
        "Only in production",
      ],
      correct: 0,
    },
    {
      q: "What should you do on error 430?",
      options: [
        "Check the Public Key",
        "Wait 1 hour",
        "Switch EmailJS account",
      ],
      correct: 0,
    },
  ],
};

const QUIZ_UI = {
  fr: {
    submit: "Valider mes réponses",
    restart: "Recommencer",
    incomplete: (n, total) =>
      `Répondez à toutes les questions (${n}/${total} répondues).`,
    almost: "Presque !",
    low: "À revoir — relisez les étapes du parcours.",
    mid: "Bien ! Encore un petit effort pour la perfection.",
    perfect: "Parfait ! Vous maîtrisez EmailJS.",
    badge: "Certifié EmailJS Lab",
  },
  en: {
    submit: "Submit my answers",
    restart: "Try again",
    incomplete: (n, total) => `Answer all questions (${n}/${total} answered).`,
    almost: "Almost there!",
    low: "Needs review — read through the path again.",
    mid: "Good! One more step for perfection.",
    perfect: "Perfect! You master EmailJS.",
    badge: "Certified EmailJS Lab",
  },
};

function getLang() {
  return document.documentElement.lang === "en" ? "en" : "fr";
}

function renderQuiz() {
  const container = document.getElementById("quizContainer");
  if (!container) return;

  const lang = getLang();
  const QUIZ = QUIZ_DATA[lang];
  const UI = QUIZ_UI[lang];

  container.innerHTML =
    QUIZ.map(
      (item, i) => `
    <fieldset class="quiz-question">
      <legend>${i + 1}. ${item.q}</legend>
      ${item.options
        .map(
          (opt, j) => `
        <label class="quiz-option">
          <input type="radio" name="q${i}" value="${j}">
          <span>${opt}</span>
        </label>
      `,
        )
        .join("")}
    </fieldset>
  `,
    ).join("") +
    `
    <button type="button" class="btn btn-primary quiz-submit" id="quizSubmit">
      ${UI.submit}
    </button>
  `;

  const btn = document.getElementById("quizSubmit");
  if (btn) btn.addEventListener("click", submitQuiz);
}

function submitQuiz() {
  const result = document.getElementById("quizResult");
  if (!result) return;

  const lang = getLang();
  const QUIZ = QUIZ_DATA[lang];
  const UI = QUIZ_UI[lang];

  let score = 0;
  let answered = 0;

  QUIZ.forEach((item, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) {
      answered++;
      if (Number(selected.value) === item.correct) score++;
    }
  });

  if (answered < QUIZ.length) {
    result.hidden = false;
    result.className = "quiz-result";
    result.innerHTML = `<strong>${UI.almost}</strong><p>${UI.incomplete(answered, QUIZ.length)}</p>`;
    return;
  }

  const perfect = score === QUIZ.length;
  result.hidden = false;
  result.className = "quiz-result" + (perfect ? " is-perfect" : "");

  let message = "";
  if (score <= 2) message = UI.low;
  else if (score <= 4) message = UI.mid;
  else message = UI.perfect;

  const badge = perfect
    ? `<div class="quiz-badge">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        ${UI.badge}
      </div>`
    : "";

  result.innerHTML = `
    <strong>${score} / ${QUIZ.length}</strong>
    <p>${message}</p>
    ${badge}
    <button type="button" class="btn btn-outline quiz-restart" id="quizRestart">${UI.restart}</button>
  `;

  const restart = document.getElementById("quizRestart");
  if (restart)
    restart.addEventListener("click", () => {
      result.hidden = true;
      result.innerHTML = "";
      renderQuiz();
    });
}

function initQuiz() {
  renderQuiz();
}

window.EmailJSLab.quiz = { initQuiz, renderQuiz, submitQuiz };
