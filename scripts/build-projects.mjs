import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

const root = process.cwd();
const output = path.join(root, "dist");

const skip = new Set([
  ".git", ".github", ".gitignore", "node_modules", "dist",
  "scripts", "content", "package.json", "package-lock.json",
  "netlify.toml", "README.md"
]);

// Copy the existing static website intact (including admin, assets and other pages).
fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });
for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
  if (skip.has(entry.name) || entry.name.startsWith(".")) continue;
  fs.cpSync(path.join(root, entry.name), path.join(output, entry.name), {
    recursive: true
  });
}

const escapeHtml = (value = "") => String(value ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#39;");

function safeUrl(value) {
  try {
    const url = new URL(String(value ?? ""));
    return ["https:", "http:"].includes(url.protocol) ? url.href : "#";
  } catch {
    return "#";
  }
}

function readProjects(lang) {
  const folder = path.join(root, "content", "projects", lang);
  if (!fs.existsSync(folder)) {
    throw new Error(`Brak katalogu projektów: ${folder}`);
  }
  const filenames = fs.readdirSync(folder)
    .filter(name => name.toLowerCase().endsWith(".md"))
    .sort();
  if (!filenames.length) {
    throw new Error(`Brak plików Markdown w: ${folder}`);
  }

  return filenames.map(filename => {
    const text = fs.readFileSync(path.join(folder, filename), "utf8");
    const match = text.match(/^\uFEFF?---[ \t]*\r?\n([\s\S]*?)\r?\n---(?:[ \t]*\r?\n|[ \t]*$)/);
    if (!match) throw new Error(`Brak YAML front matter: ${lang}/${filename}`);
    const project = yaml.load(match[1]);
    if (!project || typeof project !== "object" || !project.title) {
      throw new Error(`Brak poprawnego tytułu: ${lang}/${filename}`);
    }
    return project;
  });
}

function projectHtml(project, lang) {
  const categories = Array.isArray(project.categories)
    ? project.categories.map(String).join(" ") : "";
  const technologies = Array.isArray(project.technologies)
    ? project.technologies.map(item =>
        typeof item === "object" && item !== null ? item.tech_name : item
      ).filter(Boolean) : [];
  const techHtml = technologies
    .map(item => `<li class="project__tech-item">${escapeHtml(item)}</li>`)
    .join("\n              ");

  const label = lang === "en"
    ? { problem: "Problem:", solution: "Solution:", impact: "Impact:", tech: "Technologies used in the project" }
    : { problem: "Problem:", solution: "Rozwiązanie:", impact: "Wpływ:", tech: "Technologie użyte w projekcie" };

  return `    <article class="project" data-categories="${escapeHtml(categories)}">
      <header class="project__header">
        <h2 class="project__title">
          <a href="${escapeHtml(safeUrl(project.project_url))}" target="_blank" rel="noopener noreferrer" class="project__link">${escapeHtml(project.title)}</a>
        </h2>
        <ul class="project__tech-list" aria-label="${label.tech}">
          ${techHtml}
        </ul>
      </header>
      <div class="project__content">
        <p class="project__detail"><strong class="project__label">${label.problem}</strong> ${escapeHtml(project.problem)}</p>
        <p class="project__detail"><strong class="project__label">${label.solution}</strong> ${escapeHtml(project.solution)}</p>
        <p class="project__detail"><strong class="project__label">${label.impact}</strong> ${escapeHtml(project.impact)}</p>
      </div>
    </article>`;
}

const alternateTags = `    <link rel="alternate" hreflang="pl" href="https://konradjam.com/projects">
    <link rel="alternate" hreflang="en" href="https://konradjam.com/en/projects">`;

function buildPage(lang, relativeFile, canonical) {
  const destination = path.join(output, relativeFile);
  let html = fs.readFileSync(destination, "utf8");
  const rendered = readProjects(lang).map(p => projectHtml(p, lang)).join("\n");

  const placeholder = /<div class="projects">\s*<\/div>/i;
  if (!placeholder.test(html)) {
    throw new Error(`Nie znaleziono pustego <div class="projects"> w ${relativeFile}`);
  }
  html = html.replace(placeholder, `<div class="projects">\n${rendered}\n    </div>`);

  // Only in dist: stop fetching projects from GitHub API and CDN in the browser.
  html = html.replace(/^[ \t]*<script\b[^>]*\bsrc=["'][^"']*(?:\/load-projects\.js|\/js-yaml\.min\.js)[^"']*["'][^>]*><\/script>[ \t]*\r?\n?/gim, "");

  // filter.js already listens for this event. Send it after its script loads.
  const filterScript = /(<script\s+src=["'][^"']*\/filter\.js["']\s*><\/script>)/i;
  if (!filterScript.test(html)) {
    throw new Error(`Nie znaleziono skryptu filter.js w ${relativeFile}`);
  }
  html = html.replace(filterScript,
    `$1\n    <script>document.dispatchEvent(new Event("projectsLoaded"));</script>`);

  // Align the two language versions with their public, extensionless URLs.
  const canonicalTag = /<link\s+rel="canonical"\s+href="[^"]+"\s*\/?\s*>/i;
  if (!canonicalTag.test(html)) {
    throw new Error(`Brak canonical w ${relativeFile}`);
  }
  html = html.replace(canonicalTag,
    `<link rel="canonical" href="${canonical}">\n${alternateTags}`);
  html = html.replace(/(<meta\s+property="og:url"\s+content=")[^"]+("\s*\/?\s*>)/i,
    (_, prefix, suffix) => `${prefix}${canonical}${suffix}`);

  fs.writeFileSync(destination, html, "utf8");
  console.log(`OK: ${relativeFile} — ${readProjects(lang).length} projektów`);
}

buildPage("pl", "projects.html", "https://konradjam.com/projects");
buildPage("en", "en/projects.html", "https://konradjam.com/en/projects");
console.log("Sukces: wygenerowano katalog dist/");
