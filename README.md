# cindyrg.github.io

# 🌐 Cindy Guzman — Personal Website

Welcome to my personal website!  
This site showcases my professional background, analytics projects, and portfolio built with **[Quarto](https://quarto.org)** and hosted via **GitHub Pages**.

---

## 🧠 Overview

The website includes:
- 🏠 **Home:** Introduction and quick overview of who I am  
- 📊 **Projects:** Analytics and data science projects from Boston University and personal initiatives  
- 📄 **CV:** Downloadable PDF/Word version of my résumé  
- 💬 **Contact:** Contact form powered by [Formspree](https://formspree.io) for inquiries and collaborations  

---

## ⚙️ Tech Stack

- **Framework:** Quarto (Markdown + Python + HTML)
- **Styling:** Custom CSS with a clean, minimal aesthetic
- **Deployment:** GitHub Pages  
- **Integrations:** Formspree for the contact form, custom domain support  

---

## 🚀 Local Setup

If you'd like to preview or modify this site locally:

```bash
# Clone the repository
git clone https://github.com/cindyrg-cloud/cindyrg.github.io
cd cindyrg.github.io

# (Optional) Create and activate a virtual environment
python3 -m venv .venv
source .venv/bin/activate   # macOS/Linux
.venv\Scripts\activate      # Windows

# Install dependencies (if needed)
pip install -r requirements.txt

# Preview site locally
quarto preview

cindyrg.github.io/
├── _site/              # Built site output (ignored in git)
├── assets/             # Images, CV files, icons, etc.
├── contact.qmd         # Contact page
├── index.qmd           # Home page
├── projects.qmd        # Projects page
├── cv.qmd              # CV page
├── styles.css          # Custom styling
└── README.md


---
MIT License

Copyright (c) 2025 Cindy Guzman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this website and associated documentation files (the "Website"), to deal
in the Website without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Website, and to permit persons to whom the Website is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Website.

THE WEBSITE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE WEBSITE OR THE USE OR OTHER DEALINGS IN THE
WEBSITE.
