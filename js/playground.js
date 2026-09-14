"use strict";

window.EmailJSLab = window.EmailJSLab || {};

const SAMPLE_VALUES = {
  from_name: "Francis",
  reply_to: "francis@exemple.com",
  subject: "Demande d'information",
  message: "Bonjour, j'aimerais en savoir plus sur votre projet.",
};

function renderTemplate(source) {
  let output = source;
  Object.keys(SAMPLE_VALUES).forEach((key) => {
    const regex = new RegExp("\\{\\{\\s*" + key + "\\s*\\}\\}", "g");
    output = output.replace(regex, SAMPLE_VALUES[key]);
  });
  return output;
}

function updatePreview() {
  const source = document.getElementById("tplSource");
  const preview = document.getElementById("tplPreview");
  if (!source || !preview) return;
  preview.textContent = renderTemplate(source.value);
}

function initPlayground() {
  const source = document.getElementById("tplSource");
  if (!source) return;
  source.addEventListener("input", updatePreview);
  updatePreview();
}

window.EmailJSLab.playground = {
  initPlayground,
  renderTemplate,
  updatePreview,
};
