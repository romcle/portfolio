/* Rendu du portfolio à partir de data/profil.js et data/projets.js.
   Tu n'as normalement pas besoin de modifier ce fichier. */
(function () {
  "use strict";

  const profil = window.PROFIL || {};
  const projets = (window.PROJETS || [])
    .slice()
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));

  const $ = (sel) => document.querySelector(sel);

  function esc(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function paragraphs(text) {
    return String(text || "").split(/\n+/).filter(Boolean).map((p) => `<p>${esc(p)}</p>`).join("");
  }

  function formatDate(d) {
    if (!d) return "";
    const [y, m] = String(d).split("-");
    if (!m) return y;
    const mois = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];
    return `${mois[Number(m) - 1] || ""} ${y}`.trim();
  }

  function placeholder(titre) {
    const initials = String(titre || "?").split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
    return `<div class="card__placeholder" aria-hidden="true">${esc(initials)}</div>`;
  }

  /* ---------- Thème clair / sombre ---------- */
  function initTheme() {
    let saved = null;
    try { saved = localStorage.getItem("theme"); } catch (e) { /* stockage indisponible */ }
    if (saved) document.documentElement.dataset.theme = saved;
    document.querySelectorAll(".theme-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const current = document.documentElement.dataset.theme
          || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        const next = current === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = next;
        try { localStorage.setItem("theme", next); } catch (e) { /* ignoré */ }
      });
    });
  }

  /* ---------- Éléments communs ---------- */
  function renderCommon() {
    document.querySelectorAll("[data-profil]").forEach((el) => {
      el.textContent = profil[el.dataset.profil] || "";
    });
    const year = $("#year");
    if (year) year.textContent = new Date().getFullYear();
  }

  /* ---------- Page d'accueil ---------- */
  function renderHome() {
    document.title = `${profil.nom || "Portfolio"} — Portfolio`;

    const photo = $(".hero__photo");
    if (photo && profil.photo) {
      photo.src = profil.photo;
      photo.alt = profil.nom || "";
      photo.hidden = false;
    }
    const cv = $("#hero-cv");
    if (cv && profil.contact && profil.contact.cv) {
      cv.href = profil.contact.cv;
      cv.hidden = false;
    }

    $("#about-text").innerHTML = (profil.aPropos || []).map((p) => `<p>${esc(p)}</p>`).join("");

    $("#skills").innerHTML = Object.entries(profil.competences || {}).map(([cat, items]) => `
      <div class="skills__group">
        <h3>${esc(cat)}</h3>
        <ul class="tags">${items.map((i) => `<li class="tag">${esc(i)}</li>`).join("")}</ul>
      </div>`).join("");

    renderFilters();
    renderGrid("Tous");
    renderContact();
  }

  function renderFilters() {
    const tags = ["Tous", ...new Set(projets.flatMap((p) => p.tags || []))];
    const box = $("#filters");
    if (tags.length <= 2) { box.hidden = true; return; }
    box.innerHTML = tags.map((t, i) =>
      `<button type="button" class="filter${i === 0 ? " is-active" : ""}" data-tag="${esc(t)}">${esc(t)}</button>`
    ).join("");
    box.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter");
      if (!btn) return;
      box.querySelectorAll(".filter").forEach((b) => b.classList.toggle("is-active", b === btn));
      renderGrid(btn.dataset.tag);
    });
  }

  function renderGrid(tag) {
    const list = tag === "Tous" ? projets : projets.filter((p) => (p.tags || []).includes(tag));
    const grid = $("#projects-grid");
    if (!list.length) {
      grid.innerHTML = `<p class="muted">Aucun projet pour l'instant.</p>`;
      return;
    }
    grid.innerHTML = list.map((p) => `
      <a class="card" href="projet.html?id=${encodeURIComponent(p.id)}">
        <div class="card__media">
          ${p.image ? `<img src="${esc(p.image)}" alt="" loading="lazy">` : placeholder(p.titre)}
          ${p.enAvant ? `<span class="card__badge">★ À la une</span>` : ""}
        </div>
        <div class="card__body">
          <p class="card__meta">${esc(p.contexte || "")}${p.contexte && p.date ? " · " : ""}${esc(formatDate(p.date))}</p>
          <h3 class="card__title">${esc(p.titre)}</h3>
          <p class="card__text">${esc(p.resume || "")}</p>
          <ul class="tags">${(p.tags || []).map((t) => `<li class="tag">${esc(t)}</li>`).join("")}</ul>
        </div>
      </a>`).join("");
  }

  function renderContact() {
    const c = profil.contact || {};
    const links = [
      c.email && { label: "Email", value: c.email, href: `mailto:${c.email}` },
      c.linkedin && { label: "LinkedIn", value: "Voir mon profil", href: c.linkedin },
      c.github && { label: "GitHub", value: c.github.replace(/^https?:\/\/(www\.)?/, ""), href: c.github },
      c.cv && { label: "CV", value: "Télécharger (PDF)", href: c.cv },
    ].filter(Boolean);
    $("#contact-links").innerHTML = links.map((l) => `
      <a class="contact__item" href="${esc(l.href)}" ${l.href.startsWith("mailto:") ? "" : 'target="_blank" rel="noopener"'}>
        <span class="contact__label">${esc(l.label)}</span>
        <span class="contact__value">${esc(l.value)}</span>
      </a>`).join("");
  }

  /* ---------- Page projet ---------- */
  function renderProject() {
    const id = new URLSearchParams(location.search).get("id");
    const p = projets.find((x) => x.id === id);
    const root = $("#project");

    if (!p) {
      document.title = "Projet introuvable";
      root.innerHTML = `<h1>Projet introuvable</h1>
        <p class="muted">Vérifie l'<code>id</code> du projet dans <code>data/projets.js</code>.</p>
        <p><a class="btn" href="index.html#projets">← Retour aux projets</a></p>`;
      return;
    }

    document.title = `${p.titre} — ${profil.nom || "Portfolio"}`;

    const facts = [
      ["Contexte", p.contexte], ["Date", formatDate(p.date)],
      ["Durée", p.duree], ["Équipe", p.equipe], ["Mon rôle", p.role],
    ].filter(([, v]) => v);

    root.innerHTML = `
      <p class="project__meta">${esc(p.contexte || "")}${p.contexte && p.date ? " · " : ""}${esc(formatDate(p.date))}</p>
      <h1 class="project__title">${esc(p.titre)}</h1>
      <p class="hero__lead">${esc(p.resume || "")}</p>
      <ul class="tags">${(p.tags || []).map((t) => `<li class="tag">${esc(t)}</li>`).join("")}</ul>

      ${p.image ? `<img class="project__cover" src="${esc(p.image)}" alt="">` : ""}

      <div class="project__layout">
        <div class="project__content">
          ${(p.sections || []).map((s) => `
            <section class="project__section">
              <h2>${esc(s.titre)}</h2>
              ${paragraphs(s.texte)}
            </section>`).join("")}

          ${(p.galerie || []).length ? `
            <section class="project__section">
              <h2>Galerie</h2>
              <div class="gallery">
                ${p.galerie.map((g) => `
                  <figure>
                    <a href="${esc(g.src)}" target="_blank" rel="noopener"><img src="${esc(g.src)}" alt="${esc(g.legende || "")}" loading="lazy"></a>
                    ${g.legende ? `<figcaption>${esc(g.legende)}</figcaption>` : ""}
                  </figure>`).join("")}
              </div>
            </section>` : ""}
        </div>

        <aside class="project__aside">
          ${facts.length ? `<dl class="facts">${facts.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl>` : ""}
          ${(p.liens || []).length ? `<div class="project__links">${p.liens.map((l) =>
            `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}</div>` : ""}
        </aside>
      </div>

      ${renderPrevNext(p)}`;
  }

  function renderPrevNext(p) {
    const i = projets.indexOf(p);
    const prev = projets[i - 1];
    const next = projets[i + 1];
    if (!prev && !next) return "";
    return `<nav class="prevnext">
      ${prev ? `<a href="projet.html?id=${encodeURIComponent(prev.id)}">← ${esc(prev.titre)}</a>` : "<span></span>"}
      ${next ? `<a href="projet.html?id=${encodeURIComponent(next.id)}">${esc(next.titre)} →</a>` : ""}
    </nav>`;
  }

  initTheme();
  renderCommon();
  if ($("#projects-grid")) renderHome();
  if ($("#project")) renderProject();
})();
