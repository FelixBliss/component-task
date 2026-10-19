import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { procedures } from "./src/data/procedures";

const SITE_URL = "https://component-task.pages.dev";

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function slugify(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function procedureSlug(procedure: (typeof procedures)[number]): string {
  // Including the stable source ID prevents duplicate-title collisions.
  return `${slugify(procedure.title) || "nursing-procedure"}-${slugify(procedure.id)}`;
}

function paragraph(value: string): string {
  return `<p>${escapeHtml(value)}</p>`;
}

function listSection(title: string, values?: string[]): string {
  if (!values?.length) return "";
  return `<section><h2>${escapeHtml(title)}</h2><ul>${values
    .map((value) => `<li>${escapeHtml(value)}</li>`)
    .join("")}</ul></section>`;
}

function staticProcedurePage(procedure: (typeof procedures)[number], slug: string): string {
  const canonical = `${SITE_URL}/procedures/${slug}/`;
  const description = (procedure.overview || `Learn about ${procedure.title} in this nursing procedure guide.`)
    .replace(/\s+/g, " ")
    .slice(0, 155);
  const sections = [
    listSection("Purpose", procedure.purpose),
    listSection("Indications", procedure.indications),
    listSection("Equipment", procedure.equipment),
    listSection("Preparation", procedure.preparation),
    listSection("Procedure steps", procedure.steps),
    listSection("Precautions", procedure.precautions),
    listSection("Contraindications", procedure.contraindications),
    listSection("Aftercare", procedure.afterCare),
    listSection("Nursing considerations", procedure.nursingConsiderations),
    listSection("Possible complications", procedure.complications),
    listSection("Patient education", procedure.patientEducation),
    listSection("Documentation", procedure.documentation),
  ].join("");

  const references = procedure.references?.length
    ? `<section><h2>References and further reading</h2><ul>${procedure.references
        .map((reference) => `<li><a href="${escapeHtml(reference.url)}" rel="noopener noreferrer">${escapeHtml(reference.title)}</a></li>`)
        .join("")}</ul></section>`
    : "";

  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: procedure.title,
    description,
    url: canonical,
    isPartOf: { "@type": "WebSite", name: "Component Task", url: `${SITE_URL}/` },
    about: { "@type": "Thing", name: procedure.title },
    inLanguage: "en",
  }).replace(/</g, "\\u003c");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(procedure.title)} | Nursing Procedure | Component Task</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <link rel="canonical" href="${canonical}">
  <link rel="icon" type="image/jpeg" href="/unnamed.jpg">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Component Task">
  <meta property="og:title" content="${escapeHtml(procedure.title)} | Component Task">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${SITE_URL}/unnamed.jpg">
  <script type="application/ld+json">${structuredData}</script>
  <style>
    :root{font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#17212b;background:#f8fafc}
    body{margin:0;line-height:1.65}header,main,footer{max-width:850px;margin:auto;padding:20px}
    header{border-bottom:1px solid #dbe3ea;background:#fff}main{background:#fff;margin-top:20px;margin-bottom:20px;border:1px solid #e2e8f0;border-radius:14px}
    a{color:#087f8c}nav{display:flex;gap:16px;flex-wrap:wrap}h1{line-height:1.2;font-size:clamp(1.8rem,5vw,2.6rem)}h2{margin-top:1.8rem;font-size:1.25rem}
    li{margin:.45rem 0}.eyebrow{color:#087f8c;font-weight:700;text-transform:uppercase;letter-spacing:.06em;font-size:.8rem}
    .notice{background:#f1f5f9;padding:12px 14px;border-radius:8px;font-size:.92rem}footer{font-size:.9rem;color:#526170}
  </style>
</head>
<body>
<header><nav><a href="/">Component Task home</a><a href="/procedures/">Browse all procedures</a></nav></header>
<main>
  <p class="eyebrow">${escapeHtml(procedure.category)}</p>
  <h1>${escapeHtml(procedure.title)}</h1>
  ${paragraph(procedure.overview || `This guide introduces ${procedure.title.toLowerCase()} for nursing education.`)}
  ${sections}
  ${references}
  <p class="notice">Educational resource only. Follow current Nursing and Midwifery Council guidance, local institutional protocols, scope of practice, and clinical supervision.</p>
  <p><a href="/">Open Component Task</a> for the main learning experience.</p>
</main>
<footer><p>Component Task · Bliss Innovation · Nursing education resource</p></footer>
</body>
</html>`;
}

function procedureSeoPages(): Plugin {
  return {
    name: "component-task-static-procedure-seo-pages",
    apply: "build",
    generateBundle() {
      const seen = new Set<string>();
      const entries = procedures.map((procedure) => {
        const slug = procedureSlug(procedure);
        if (seen.has(slug)) {
          throw new Error(`Duplicate SEO procedure slug: ${slug}`);
        }
        seen.add(slug);
        return { procedure, slug, url: `${SITE_URL}/procedures/${slug}/` };
      });

      const categories = [...new Set(entries.map(({ procedure }) => procedure.category))].sort();
      const directoryGroups = categories.map((category) => {
        const items = entries.filter(({ procedure }) => procedure.category === category);
        return `<section><h2>${escapeHtml(category)}</h2><ul>${items
          .map(({ procedure, slug }) => `<li><a href="/procedures/${slug}/">${escapeHtml(procedure.title)}</a></li>`)
          .join("")}</ul></section>`;
      }).join("");

      const directoryHtml = `<!doctype html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Nursing Procedures Directory | Component Task</title>
<meta name="description" content="Browse nursing procedure guides and clinical skills learning resources from Component Task.">
<meta name="robots" content="index,follow,max-image-preview:large">
<link rel="canonical" href="${SITE_URL}/procedures/"><link rel="icon" type="image/jpeg" href="/unnamed.jpg">
<meta property="og:type" content="website"><meta property="og:title" content="Nursing Procedures Directory | Component Task">
<meta property="og:description" content="Browse nursing procedure guides and clinical skills learning resources."><meta property="og:url" content="${SITE_URL}/procedures/">
<style>:root{font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#17212b;background:#f8fafc}body{margin:0;line-height:1.65}header,main,footer{max-width:900px;margin:auto;padding:20px}header,main{background:#fff}header{border-bottom:1px solid #dbe3ea}main{margin-top:20px;margin-bottom:20px;border:1px solid #e2e8f0;border-radius:14px}a{color:#087f8c}nav{display:flex;gap:16px;flex-wrap:wrap}h1{line-height:1.2}li{margin:.4rem 0}footer{font-size:.9rem;color:#526170}</style>
</head><body><header><nav><a href="/">Component Task home</a><a href="/procedures/">All procedures</a></nav></header>
<main><h1>Nursing Procedures Directory</h1><p>Browse step-by-step nursing procedure and clinical skills learning resources. These guides support education and do not replace current local protocols or supervised clinical practice.</p>
<p>Total procedure guides: ${entries.length}</p>${directoryGroups}</main><footer>Component Task · Bliss Innovation</footer></body></html>`;

      this.emitFile({ type: "asset", fileName: "procedures/index.html", source: directoryHtml });
      for (const { procedure, slug } of entries) {
        this.emitFile({
          type: "asset",
          fileName: `procedures/${slug}/index.html`,
          source: staticProcedurePage(procedure, slug),
        });
      }

      const sitemapUrls = [
        `${SITE_URL}/`,
        `${SITE_URL}/procedures/`,
        ...entries.map(({ url }) => url),
      ];
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls
        .map((url) => `  <url><loc>${escapeHtml(url)}</loc></url>`)
        .join("\n")}\n</urlset>\n`;
      this.emitFile({ type: "asset", fileName: "sitemap.xml", source: sitemap });
    },
  };
}

export default defineConfig({
  plugins: [react(), procedureSeoPages()],
  base: "./",
});
