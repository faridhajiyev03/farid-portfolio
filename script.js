"use strict";

// The English text lives in index.html. This file only adds German
// and switches between the two languages.

const translations = {
  de: {
    "meta.title": "Farid Hajiyev — angehender Softwareentwickler",
    skip: "Zum Inhalt springen",
    "nav.about": "Über mich",
    "nav.projects": "Projekte",
    "nav.contact": "Kontakt",

    "hero.eyebrow": "Neugierig. Lernbereit. Angehender Entwickler.",
    "hero.hi": "Hallo, ich bin",
    "hero.intro":
      "Ich komme aus Baku und lerne, eigene Software zu entwickeln. An Python gefällt mir besonders, aus einer Idee Schritt für Schritt etwas zu machen, das Menschen wirklich nutzen können. Mein nächstes Ziel ist eine Ausbildung zum Fachinformatiker für Anwendungsentwicklung in Deutschland.",
    "hero.projects": "Meine Projekte ansehen",
    "hero.contact": "Kontakt aufnehmen",

    "profile.label": "Kurz über mich",
    "profile.title": "Verstehen. Üben. Wachsen.",
    "profile.text":
      "Ich möchte verstehen, wie Software funktioniert, und dieses Wissen in die Praxis umsetzen.",
    "facts.based": "Wohnort",
    "facts.basedValue": "Baku, Aserbaidschan",
    "facts.german": "Deutsch",
    "facts.germanValue": "Goethe-Zertifikat B2",
    "facts.english": "Englisch",
    "facts.englishValue": "Fließend",
    "facts.russian": "Russisch",
    "facts.russianValue": "Auf Muttersprachniveau",
    "facts.focus": "Schwerpunkt",
    "facts.focusValue": "Python & Backend-Entwicklung",

    "strip.projects": "<strong>2</strong> veröffentlichte Projekte",
    "strip.tests": "<strong>100+</strong> automatisierte Tests",
    "strip.german": "<strong>Deutsch B2</strong> · Goethe-Zertifikat",

    "about.eyebrow": "01 / Über mich",
    "about.title": "Ich will verstehen,<br>warum es funktioniert.",
    "about.p1":
      "Ich bin Farid Hajiyev und lebe in Baku, Aserbaidschan. Programmieren lerne ich selbstständig mit Kursen, praktischen Übungen und eigenen Projekten. Dabei habe ich gemerkt: <strong>Besonders viel Freude machen mir Python und die Logik hinter einer Anwendung.</strong>",
    "about.p2":
      "Dass etwas funktioniert, ist für mich erst der Anfang. Ich möchte auch verstehen, wie eine Anfrage durch eine Anwendung läuft, wo ihre Daten gespeichert werden und warum ein Nutzer nur auf seine eigenen Daten zugreifen kann.",
    "about.p3":
      "Auch Deutsch gehört zu meinem Alltag. Ich habe das <strong>Goethe-Zertifikat B2</strong>, lese weiterhin deutsche Texte, übe das Sprechen und lerne, meine technischen Entscheidungen auf Deutsch zu erklären.",
    "about.p4":
      "Außerdem bin ich Berufsmusiker im Orchester. Jahrelanges tägliches Üben hat mich Disziplin, Geduld und Teamarbeit gelehrt. Neben dem Bildschirm gehe ich regelmäßig ins Fitnessstudio.",

    "journey.eyebrow": "02 / Mein Lernweg",
    "journey.title": "Mit jeder Herausforderung ein Stück weiter.",
    "journey.text":
      "Von kleinen Übungen bis zu getesteten Anwendungen, die online nutzbar sind.",
    "journey.1.label": "Die Grundlagen",
    "journey.1.title": "Lernen durch Ausprobieren.",
    "journey.1.text":
      "Mit Python habe ich kleine Spiele und eine Karteikarten-App gebaut. Mit JavaScript habe ich danach gelernt, Webseiten interaktiv zu machen.",
    "journey.2.label": "Der nächste Schritt",
    "journey.2.title": "Die Teile verbinden.",
    "journey.2.text":
      "Heute verbinde ich Benutzeroberflächen mit FastAPI und PostgreSQL. Ich lerne APIs, Authentifizierung, Zugriffskontrolle, Datenbankmigrationen und automatisiertes Testen.",
    "journey.3.label": "Wie ich lerne",
    "journey.3.title": "Es erklären können.",
    "journey.3.text":
      "Ich teile neue Themen in kleine Schritte auf, probiere sie aus und wiederhole die schwierigen Stellen. Kurse und KI-Werkzeuge unterstützen mich dabei. Mein Ziel ist, den Code selbst erklären zu können und ihn immer selbstständiger zu schreiben.",

    "next.eyebrow": "03 / Mein nächster Schritt",
    "next.title": "Im Team lernen.<br>Verantwortung übernehmen.",
    "next.p1":
      "Ich suche eine <strong>Ausbildung zum Fachinformatiker für Anwendungsentwicklung</strong> in Deutschland. Ich möchte erleben, wie ein Entwicklungsteam Aufgaben plant, Lösungen bespricht und Software gemeinsam verbessert.",
    "next.p2":
      "Ich bringe praktische Projekterfahrung und die Bereitschaft mit, meine Grundlagen weiter zu stärken. Besonders freue ich mich auf technisches Feedback und darauf, Schritt für Schritt mehr Aufgaben selbstständig zu übernehmen.",

    "projects.eyebrow": "04 / Ausgewählte Arbeiten",
    "projects.title": "Gelerntes in die Praxis umsetzen.",
    "projects.text":
      "Zwei Full-Stack-Projekte mit Live-Demo, automatisierten Tests und Continuous Integration.",
    "projects.1.number": "Projekt 01 · Full Stack",
    "projects.1.text":
      "Eine Webanwendung, mit der man Einnahmen und Ausgaben in Euro erfasst, mit Kategorien, Datumsfiltern und einer Übersicht über das Nettoeinkommen. Jeder Nutzer sieht nur seine eigenen Buchungen.",
    "projects.1.h1": "Geldbeträge als Decimal und NUMERIC, nie als Float",
    "projects.1.h2": "50 automatisierte Tests mit pytest und GitHub Actions",
    "projects.1.h3": "Fremde Daten liefern 404 und bleiben verborgen",
    "projects.2.number": "Projekt 02 · Full Stack",
    "projects.2.text":
      "Eine persönliche Übersicht über Bewerbungen mit Status, Notizen, Suche, Filtern, Seitennavigation und Statistiken. Das React-Frontend kommuniziert mit einem geschützten FastAPI-Backend.",
    "projects.2.h1": "Backend in Schichten: Router, Schemas, Services, Modelle",
    "projects.2.h2": "53 automatisierte Tests mit pytest und GitHub Actions",
    "projects.2.h3": "Datenbankschema mit Alembic-Migrationen verwaltet",
    "projects.live": "Live-Demo ↗",
    "projects.code": "Quellcode ↗",
    "projects.note":
      "Die kostenlosen Server schlafen bei Nichtnutzung ein. Der erste Aufruf kann bis zu einer Minute dauern.",

    "skills.eyebrow": "05 / Technische Grundlagen",
    "skills.title": "Womit ich arbeite.",
    "skills.1": "Logik & APIs",
    "skills.2": "Struktur & Speicherung",
    "skills.3": "Tests & CI",
    "skills.4": "Oberfläche & Werkzeuge",

    "contact.title": "Lernen wir uns kennen.",
    "contact.text":
      "Ich würde mich freuen, Ihr Team in einem Gespräch kennenzulernen und Ihnen mehr über meinen Lernweg zu erzählen.",
    "contact.email": "E-Mail schreiben",

    "footer.tagline": "Baku, Aserbaidschan · Mit Neugier gebaut.",
    "footer.top": "Nach oben ↑",
  },
};

const english = {};

function rememberEnglish() {
  english["meta.title"] = document.title;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    english[el.dataset.i18n] = el.textContent;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    english[el.dataset.i18nHtml] = el.innerHTML;
  });
}

function setLanguage(lang) {
  const dictionary = lang === "de" ? translations.de : english;

  document.documentElement.lang = lang;
  document.title = dictionary["meta.title"];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = dictionary[el.dataset.i18n];
    if (text !== undefined) el.textContent = text;
  });

  // Only our own trusted strings above are inserted as HTML.
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const html = dictionary[el.dataset.i18nHtml];
    if (html !== undefined) el.innerHTML = html;
  });

  document.querySelectorAll(".lang-switch button").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });

  try {
    localStorage.setItem("lang", lang);
  } catch {
    // Storage can be blocked; the page works without it.
  }
}

function initialLanguage() {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (fromUrl === "de" || fromUrl === "en") return fromUrl;

  try {
    const saved = localStorage.getItem("lang");
    if (saved === "de" || saved === "en") return saved;
  } catch {
    // Ignore blocked storage.
  }

  return navigator.language.toLowerCase().startsWith("de") ? "de" : "en";
}

rememberEnglish();
setLanguage(initialLanguage());

document.querySelectorAll(".lang-switch button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});
