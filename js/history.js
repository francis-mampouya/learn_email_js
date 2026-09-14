"use strict";

window.EmailJSLab = window.EmailJSLab || {};

const HISTORY_KEY = "emailjsLabHistory";
const HISTORY_MAX = 10;

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
  } catch (e) {
    return [];
  }
}

function saveHistory(list) {
  try {
    localStorage.setItem(
      HISTORY_KEY,
      JSON.stringify(list.slice(0, HISTORY_MAX)),
    );
  } catch (e) {}
}

function addToHistory(entry) {
  const list = loadHistory();
  list.unshift({
    subject: entry.subject || "(sans sujet)",
    from_name: entry.from_name || "Anonyme",
    status: entry.status || "success",
    date: Date.now(),
  });
  saveHistory(list);
  renderHistory();
}

function renderHistory() {
  const list = document.getElementById("historyList");
  const empty = document.getElementById("historyEmpty");
  if (!list) return;

  const history = loadHistory();
  if (history.length === 0) {
    list.innerHTML = "";
    if (empty) empty.hidden = false;
    return;
  }
  if (empty) empty.hidden = true;

  list.innerHTML = history
    .map((item) => {
      const date = new Date(item.date).toLocaleString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      const cls = item.status === "error" ? "is-error" : "is-success";
      const label = item.status === "error" ? "Erreur" : "Envoyé";
      const safeSubject = escapeHtml(item.subject);
      const safeName = escapeHtml(item.from_name);
      return `
      <li class="history-item">
        <div class="history-main">
          <div class="history-subject">${safeSubject}</div>
          <div class="history-meta">${safeName} · ${date}</div>
        </div>
        <span class="history-badge ${cls}">${label}</span>
      </li>`;
    })
    .join("");
}

function clearHistory() {
  try {
    localStorage.removeItem(HISTORY_KEY);
  } catch (e) {}
  renderHistory();
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function initHistory() {
  renderHistory();
  const btn = document.getElementById("clearHistoryBtn");
  if (btn) btn.addEventListener("click", clearHistory);
}

window.EmailJSLab.history = {
  initHistory,
  addToHistory,
  renderHistory,
  clearHistory,
};
