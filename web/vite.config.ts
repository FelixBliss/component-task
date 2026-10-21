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

const monetagWebScripts = `
<script>
  window.setTimeout(function () {
    var script = document.createElement('script');
    script.dataset.zone = '12083896';
    script.src = 'https://nap5k.com/tag.min.js';
    script.async = true;
    document.head.appendChild(script);
  }, 8000);
</script>
<script>
  window.setTimeout(function () {
    var script = document.createElement('script');
    script.dataset.zone = '12087969';
    script.src = 'https://n6wxm.com/vignette.min.js';
    script.async = true;
    document.head.appendChild(script);
  }, 20000);
</script>`;

function staticProcedurePage(procedure: (typeof procedures)[number], slug: string, appScript: string, appCss: string[]): string {
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
  ${monetagWebScripts}
  <link rel="icon" type="image/jpeg" href="/unnamed.jpg">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Component Task">
  <meta property="og:title" content="${escapeHtml(procedure.title)} | Component Task">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${SITE_URL}/unnamed.jpg">
  <script type="application/ld+json">${structuredData}</script>
  <style>
    :root{font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;color:#17221c;background:#f8faf9;--green:#008a4b;--dark:#006b3c;--light:#e8f5ee;--muted:#66736c;--border:#e3e9e5}
    *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;line-height:1.6;background:#f8faf9;color:#17221c;padding-bottom:78px}
    .app-header{position:sticky;top:0;z-index:10;background:var(--green);color:#fff;box-shadow:0 3px 14px rgba(0,0,0,.08)}
    .header-inner{width:min(100%,900px);min-height:76px;margin:auto;padding:13px 18px;display:flex;align-items:center;gap:11px}
    .brand-logo{width:42px;height:42px;object-fit:cover;border-radius:12px;border:2px solid rgba(255,255,255,.25)}
    .brand-title{font-size:16px;font-weight:800;line-height:1.2}.brand-tagline{margin-top:4px;font-size:10px;opacity:.82}
    .content{width:min(100%,900px);margin:0 auto;padding:22px 17px 30px}
    .page-card{background:#fff;border:1px solid var(--border);border-radius:21px;padding:22px 20px;box-shadow:0 3px 12px rgba(0,0,0,.035)}
    .eyebrow{display:inline-block;margin:0 0 8px;padding:5px 9px;border-radius:999px;background:var(--light);color:var(--dark);font-size:10px;font-weight:800;letter-spacing:.8px;text-transform:uppercase}
    h1{margin:5px 0 12px;color:var(--dark);font-size:clamp(25px,6vw,32px);line-height:1.16;letter-spacing:-.4px}
    .intro{margin:0 0 22px;color:var(--muted);font-size:14px;line-height:1.65}
    .section-card{margin-top:13px;padding:16px;border:1px solid var(--border);border-radius:16px;background:#fff}
    h2{margin:0 0 11px;color:var(--dark);font-size:16px;line-height:1.3}
    ul{margin:0;padding-left:22px}li{margin:8px 0;font-size:13px;line-height:1.55}p{overflow-wrap:anywhere}
    a{color:var(--dark)}.app-link{display:inline-flex;align-items:center;justify-content:center;min-height:43px;margin-top:18px;padding:11px 15px;border-radius:11px;background:var(--green);color:#fff;text-decoration:none;font-size:12px;font-weight:800}
    .notice{margin-top:18px;padding:13px 14px;border:1px solid #dceee3;border-radius:13px;background:#f4faf7;color:#52635a;font-size:12px;line-height:1.55}
    .bottom-nav{position:fixed;bottom:0;left:0;right:0;z-index:10;background:#fff;border-top:1px solid var(--border);box-shadow:0 -4px 18px rgba(0,0,0,.05)}
    .bottom-nav-inner{width:min(100%,560px);min-height:65px;margin:auto;display:flex;align-items:center;justify-content:space-around;gap:8px;padding:7px 12px}
    .bottom-nav a{display:flex;flex:1;flex-direction:column;align-items:center;justify-content:center;gap:4px;color:#66736c;text-decoration:none;font-size:10px;font-weight:700}
    .bottom-nav a span{font-size:19px;line-height:1.1}.bottom-nav a.active{color:var(--green)}
    .directory-intro{margin:0 0 18px;color:var(--muted);font-size:13px}.category-section{margin-top:20px}
    .procedure-list{list-style:none;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
    .procedure-list li{margin:0}.procedure-list a{display:block;height:100%;padding:13px;border:1px solid var(--border);border-radius:14px;background:#fff;color:var(--dark);font-size:12px;font-weight:750;line-height:1.4;text-decoration:none;box-shadow:0 3px 12px rgba(0,0,0,.035)}
    .procedure-list a:focus-visible,.procedure-list a:hover{outline:2px solid #b8d8c7;background:#f4faf7}
    .total-pill{display:inline-block;margin:0 0 18px;padding:7px 11px;border:1px solid #d8ece0;border-radius:12px;background:#f4faf7;color:var(--dark);font-size:11px;font-weight:800}
    .site-footer{width:min(100%,900px);margin:auto;padding:10px 20px 20px;text-align:center;color:var(--muted);font-size:10px}
    @media(max-width:520px){.content{padding:16px 12px 24px}.page-card{padding:18px 15px;border-radius:17px}.procedure-list{grid-template-columns:1fr}.header-inner{min-height:70px}.brand-title{font-size:15px}}
  </style>
  ${appCss.map((href) => `<link rel="stylesheet" href="/${href}">`).join("\n  ")}
</head>
<body>
<div id="root">
<header class="app-header"><div class="header-inner"><img class="brand-logo" src="/unnamed.jpg" alt="Component Task logo"><div><div class="brand-title">Nursing Component Task</div><div class="brand-tagline">Nursing procedures &amp; clinical learning</div></div></div></header>
<main class="content"><article class="page-card">
  <p class="eyebrow">${escapeHtml(procedure.category)}</p>
  <h1>${escapeHtml(procedure.title)}</h1>
  <p class="intro">${escapeHtml(procedure.overview || `This guide introduces ${procedure.title.toLowerCase()} for nursing education.`)}</p>
  ${sections.replace(/<section>/g, '<section class="section-card">')}
  ${references.replace(/<section>/g, '<section class="section-card">')}
  <p class="notice">Educational resource only. Follow current Nursing and Midwifery Council guidance, local institutional protocols, scope of practice, and clinical supervision.</p>
  <a class="app-link" href="/">Open Component Task app <span aria-hidden="true">&nbsp;→</span></a>
</article></main>
<footer class="site-footer">Component Task · Bliss Innovation · Nursing education resource</footer>
<nav class="bottom-nav" aria-label="Primary navigation"><div class="bottom-nav-inner"><a href="/"><span aria-hidden="true">⌂</span>Home</a><a class="active" href="/procedures/"><span aria-hidden="true">▤</span>Procedures</a><a href="/#about"><span aria-hidden="true">ⓘ</span>About</a></div></nav>
</div>
<script type="module" src="/${appScript}"></script>
</body>
</html>`;
}

function procedureSeoPages(): Plugin {
  return {
    name: "component-task-static-procedure-seo-pages",
    apply: "build",
    generateBundle(_options, bundle) {
      const appEntry = Object.values(bundle).find(
        (item) => item.type === "chunk" && item.isEntry && item.name === "index",
      );
      if (!appEntry || appEntry.type !== "chunk") {
        throw new Error("Could not find the Component Task app entry chunk for SEO pages.");
      }
      const appScript = appEntry.fileName;
      const appCss = [...(appEntry.viteMetadata?.importedCss ?? [])];
      const appCssLinks = appCss.map((href) => `<link rel="stylesheet" href="/${href}">`).join("\n");

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
<link rel="canonical" href="${SITE_URL}/procedures/">${monetagWebScripts}<link rel="icon" type="image/jpeg" href="/unnamed.jpg">
<meta property="og:type" content="website"><meta property="og:title" content="Nursing Procedures Directory | Component Task">
<meta property="og:description" content="Browse nursing procedure guides and clinical skills learning resources."><meta property="og:url" content="${SITE_URL}/procedures/">
<style>:root{font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;color:#17221c;background:#f8faf9;--green:#008a4b;--dark:#006b3c;--light:#e8f5ee;--muted:#66736c;--border:#e3e9e5}*{box-sizing:border-box}body{margin:0;line-height:1.6;background:#f8faf9;padding-bottom:78px}.app-header{position:sticky;top:0;z-index:10;background:var(--green);color:#fff;box-shadow:0 3px 14px rgba(0,0,0,.08)}.header-inner{width:min(100%,900px);min-height:76px;margin:auto;padding:13px 18px;display:flex;align-items:center;gap:11px}.brand-logo{width:42px;height:42px;object-fit:cover;border-radius:12px;border:2px solid rgba(255,255,255,.25)}.brand-title{font-size:16px;font-weight:800;line-height:1.2}.brand-tagline{margin-top:4px;font-size:10px;opacity:.82}.content{width:min(100%,900px);margin:0 auto;padding:22px 17px 30px}.page-card{background:#fff;border:1px solid var(--border);border-radius:21px;padding:22px 20px;box-shadow:0 3px 12px rgba(0,0,0,.035)}h1{margin:0 0 12px;color:var(--dark);font-size:clamp(25px,6vw,32px);line-height:1.16}.directory-intro{color:var(--muted);font-size:13px}.category-section{margin-top:22px}h2{color:var(--dark);font-size:16px;margin:0 0 11px}.procedure-list{list-style:none;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.procedure-list li{margin:0}.procedure-list a{display:block;height:100%;padding:13px;border:1px solid var(--border);border-radius:14px;background:#fff;color:var(--dark);font-size:12px;font-weight:750;line-height:1.4;text-decoration:none;box-shadow:0 3px 12px rgba(0,0,0,.035)}.procedure-list a:hover{background:#f4faf7}.total-pill{display:inline-block;margin:0 0 18px;padding:7px 11px;border:1px solid #d8ece0;border-radius:12px;background:#f4faf7;color:var(--dark);font-size:11px;font-weight:800}.bottom-nav{position:fixed;bottom:0;left:0;right:0;z-index:10;background:#fff;border-top:1px solid var(--border);box-shadow:0 -4px 18px rgba(0,0,0,.05)}.bottom-nav-inner{width:min(100%,560px);min-height:65px;margin:auto;display:flex;align-items:center;justify-content:space-around;gap:8px;padding:7px 12px}.bottom-nav a{display:flex;flex:1;flex-direction:column;align-items:center;justify-content:center;gap:4px;color:#66736c;text-decoration:none;font-size:10px;font-weight:700}.bottom-nav a span{font-size:19px;line-height:1.1}.bottom-nav a.active{color:var(--green)}.site-footer{width:min(100%,900px);margin:auto;padding:10px 20px 20px;text-align:center;color:var(--muted);font-size:10px}@media(max-width:520px){.content{padding:16px 12px 24px}.page-card{padding:18px 15px;border-radius:17px}.procedure-list{grid-template-columns:1fr}}</style>${appCssLinks}
</head><body><div id="root"><header class="app-header"><div class="header-inner"><img class="brand-logo" src="/unnamed.jpg" alt="Component Task logo"><div><div class="brand-title">Nursing Component Task</div><div class="brand-tagline">Nursing procedures &amp; clinical learning</div></div></div></header>
<main class="content"><article class="page-card"><h1>Nursing Procedures Directory</h1><p class="directory-intro">Browse step-by-step nursing procedure and clinical skills learning resources. These guides support education and do not replace current local protocols or supervised clinical practice.</p>
<p class="total-pill">Total procedure guides: ${entries.length}</p>${directoryGroups.replace(/<section>/g, '<section class="category-section">').replace(/<ul>/g, '<ul class="procedure-list">')}</article></main><footer class="site-footer">Component Task · Bliss Innovation</footer><nav class="bottom-nav" aria-label="Primary navigation"><div class="bottom-nav-inner"><a href="/"><span aria-hidden="true">⌂</span>Home</a><a class="active" href="/procedures/"><span aria-hidden="true">▤</span>Procedures</a><a href="/#about"><span aria-hidden="true">ⓘ</span>About</a></div></nav></div><script type="module" src="/${appScript}"></script></body></html>`;

      this.emitFile({ type: "asset", fileName: "procedures/index.html", source: directoryHtml });
      for (const { procedure, slug } of entries) {
        this.emitFile({
          type: "asset",
          fileName: `procedures/${slug}/index.html`,
          source: staticProcedurePage(procedure, slug, appScript, appCss),
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
