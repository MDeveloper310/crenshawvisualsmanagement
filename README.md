# Crenshaw Visuals Management — website (first draft)

Static one-page site for **Crenshaw Visuals Management** ([@crenshawvisualsmanagement](https://www.instagram.com/crenshawvisualsmanagement/)),
personal branding & PR from the team behind @crenshawvisuals.

Plain HTML/CSS + ~20 lines of vanilla JS (mobile menu toggle, footer year). No build step.

## Preview locally
```bash
cd cv-management-site
python3 -m http.server 8000
# open http://localhost:8000
```

## Structure
```
index.html            single page: hero, intro, what we do (Position/Proof/Presence),
                      how we work (4 steps + why us), who it's for, same camera (frames),
                      ways to start + contact CTA, footer
assets/css/styles.css mobile-first styles (palette sampled from the IG carousels)
assets/js/main.js     nav toggle + year
assets/img/           wordmark, logo badge, OG image, favicon PNG, 3 portfolio frames (webp)
favicon.ico, apple-touch-icon.png
robots.txt, sitemap.xml
```

## Brand tokens
- Background `#0a0a0a`, alt section `#111110`
- Gold `#c4a46a` (sampled from carousel borders/labels), soft gold `#d9c08a`
- Text `#f5f0e6`, muted `#a89f8e`, dim numerals `#3c372f`, rules `#2a2824`
- Fonts (Google Fonts): Playfair Display (headlines), Cinzel (caps labels), Lato 300/400/700 (body)

## Before going live — TODO
1. **Domain.** All absolute URLs now point to the GitHub Pages URL
   `https://mdeveloper310.github.io/crenshawvisualsmanagement/` (canonical, og:url, og:image,
   twitter:image, JSON-LD in `index.html`, plus `robots.txt` and `sitemap.xml`). If a custom
   domain is added later, find/replace that URL. Asset paths are relative so the site works under the subpath.
2. **CNAME (not created on purpose).** If hosting on GitHub Pages with a custom domain, add a
   file named `CNAME` at the repo root containing only the domain (e.g. `www.yourdomain.com`),
   and point DNS at GitHub Pages. No CNAME file exists yet because no domain has been chosen.
3. **Repo/hosting.** Hosted on GitHub Pages from `MDeveloper310/crenshawvisualsmanagement`
   (branch `main`, root): https://mdeveloper310.github.io/crenshawvisualsmanagement/
4. **Contact.** Only Instagram CTAs (DM link `https://ig.me/m/crenshawvisualsmanagement` and the
   profile). Add an email if/when one exists.
5. **Portfolio.** "Same camera" uses three frames from existing @crenshawvisuals hospitality Reels
   (media kit). Swap in personal-brand client work (with permission) once it exists.

## Content rules followed
Copy comes from the three @crenshawvisualsmanagement carousels. No prices, packages,
testimonials, stats, phone numbers or emails are on the site.
