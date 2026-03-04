# Personal Portfolio Website 🖨️✨

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Platform](https://img.shields.io/badge/platform-Web-lightgrey)
![Languages](https://img.shields.io/badge/languages-HTML%20%7C%20CSS%20%7C%20JS-blue)
![Deployment](https://img.shields.io/badge/deployment-Netlify-00C7B7)

## Overview

A minimalist personal portfolio website that bridges my **DTP / prepress roots** with modern front-end execution. The design deliberately references classic newspaper layouts — strong typographic hierarchy, generous whitespace, and an electric blue accent — reinterpreted through a contemporary, web-native lens.

**What you'll find here:**
- A clean, mobile-first presentation of my skills and background
- A filterable project showcase built in vanilla JavaScript
- A contact form powered by Netlify Forms with email delivery via Zoho Mail
- Content management via Decap CMS (Git-based, no database required)
- Fully automated CI/CD deployment via GitHub + Netlify

---

## 🎨 Design Philosophy

This project is **typographic-first**. Every visual decision traces back to years of print production discipline: clarity, hierarchy, and precision.

Key design decisions:

- **Newspaper-inspired headlines** — Classic papers used large red/blue titles as dominant anchors. I chose blue, pushed to **electric blue**, to make the reference feel modern rather than nostalgic.
- **Jan Tschichold's "The New Typography"** — Clean sans-serif typefaces, no unnecessary decoration, and a strong vertical rhythm built on generous whitespace.
- **Minimal ornament** — The few horizontal rules (`<hr>`) are a deliberate, subtle break from the strict Tschichold rule, retained for editorial rhythm.
- **Traditional link emphasis** — Links are underlined: a familiar, print-adjacent visual cue that doesn't rely on color alone.
- **Ghost buttons** — Border-only, no fill. An intentional nod to the utilitarian language of wireframes and print dummies.

---

## 📂 Project Structure
```
/
├── index.html # About / home page
├── projects.html # Selected work + filtering UI
├── contact.html # Contact page with Netlify Forms integration
├── success.html # Post-submission redirect page
├── _redirects.txt # Netlify redirect rules
├── README.md
│
├── admin/
│ ├── index.html # Decap CMS entry point
│ └── config.yml # CMS collections & backend config
│
├── assets/
│ ├── css/
│ │ └── style.css # Design tokens, global styles, components
│ ├── images/
│ └── js/
│ ├── filter.js # Multi-select project filtering logic
│ ├── load-projects.js # Dynamic project loading from Markdown
│ └── script.js # Client-side email rendering
│
└── content/
└── projects/ # Markdown files managed via Decap CMS
```

---

## 🚀 Getting Started

No build step required — this is a fully static site.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/konradjam/<repo-name>.git
   cd <repo-name>

2. **Run locally:**
    - Open `index.html` directly in your browser, or
    - Use a local dev server for best results (e.g. VS Code Live Server extension)

| Layer      | Technology                                                      |
| ---------- | --------------------------------------------------------------- |
| Markup     | HTML5 (semantic, accessible)                                    |
| Styling    | CSS3 — custom properties, Flexbox, mobile-first                 |
| Scripting  | Vanilla JavaScript — no frameworks                              |
| CMS        | Decap CMS — Git-based, accessed via Netlify Identity Bridge     |
| Forms      | Netlify Forms — submissions forwarded to Zoho Mail              |
| Deployment | GitHub + Netlify (continuous deployment)                        |

---

## 🌐 Deployment

Source code is hosted on GitHub and connected to Netlify for automated CI/CD.
Every commit pushed to the `main` branch automatically triggers a new build
and deploys to the live domain — no manual FTP transfers, no downtime.

### CMS — Decap CMS with Netlify Identity Bridge

Content is managed via **Decap CMS** (formerly Netlify CMS), a Git-based
headless CMS that requires no external database. Authentication is handled
by **Netlify Identity** using the **Git Gateway Bridge**, which means:

- Editors log in through Netlify Identity (email + password or OAuth)
- Decap CMS commits changes directly to the GitHub repository via Git Gateway
- Every save triggers an automatic Netlify rebuild — the live site stays in sync

### Forms — Netlify Forms + Zoho Mail

The contact form on `contact.html` is processed by **Netlify Forms**
(detected automatically at build time via the `data-netlify="true"` attribute).
Submissions are forwarded to **Zoho Mail** using Netlify's outgoing email
notification webhook, so no third-party form service is required.

Form flow:
1. Visitor submits the contact form
2. Netlify captures and stores the submission
3. A notification email is forwarded to the configured Zoho Mail address
4. Visitor is redirected to a custom thank-you page

Live site: [konradjam.com](https://konradjam.com)

---

## 👨‍💻 About the Author

I'm a Graphic Designer and DTP Operator with 15+ years of hands-on experience in the printing industry. My work sits at the intersection of print production precision and modern automation — building tools that eliminate repetitive tasks so people can focus on creative work.

**My expertise:**
- Desktop Publishing & prepress workflows
- Print production optimization and quality control
- Automation with Python, JavaScript, and Adobe ExtendScript
- Frontend development and IoT experiments

> *"Routine belongs to algorithms. Keep what matters for yourself."*

**Connect with me:**

- 💼 [LinkedIn](https://www.linkedin.com/in/konradjam) – Let's connect professionally
- 🐙 [GitHub Issues](https://github.com/konradjam/personal-webpage/issues) – Report bugs or request features

---

## 📄 License

This project is licensed under the MIT License.

**You are free to:**
- ✅ Use, modify, and distribute this code
- ✅ Use it as a base for your own portfolio

**Just remember to:**
- Keep the original license notice in the code
- Credit the original author (appreciated but not required)

See the [LICENSE](LICENSE) file for full details.

---

*Built with ❤️ for print, design, and the open web*