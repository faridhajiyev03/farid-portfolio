# Farid Hajiyev — Portfolio

Personal portfolio website in English and German.

**Live:** https://faridhajiyev03.github.io/farid-portfolio/

## Projects shown

- [Personal Finance Manager](https://github.com/faridhajiyev03/personal-finance-manager) — FastAPI, PostgreSQL, JavaScript
- [Job Application Tracker](https://github.com/faridhajiyev03/job-application-tracker) — FastAPI, PostgreSQL, React

## How it works

- Plain HTML, CSS and JavaScript, no build step
- English text is written in `index.html`; `script.js` holds the German translation
  and switches the language (also via `?lang=de` or `?lang=en` in the URL)
- The language follows the browser setting on the first visit and is remembered afterwards
- Hosted on GitHub Pages

## Structure

```text
index.html
styles.css
script.js
assets/
├── profile.jpg
├── personal-finance-manager.jpg
└── job-application-tracker.jpg
```
