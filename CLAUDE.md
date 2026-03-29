# Personal Website — Gabriel Johnston

**Repository**: `orionjohnston/Website2`
**Deployment**: GitHub Pages from `main` branch
**URL**: `https://orionjohnston.github.io/Website2/`
**Stack**: Static HTML/CSS/JS (no build tools), Vanta.js globe, Font Awesome, Google Fonts
**Purpose**: Postdoc application portfolio — must be polished, accurate, and grounded in real accomplishments

---

## Guiding Principles

- **Accuracy first**: Every claim must match the CVs. Do not fabricate or embellish.
- **Postdoc-ready**: Emphasize publications (especially papers in review), research, teaching, and international collaboration.
- **Aesthetic polish**: Clean, professional, visually compelling — the llsvp.png 3D visualization should be a centerpiece.
- **No dead ends**: Remove all broken links, placeholder content, and missing images rather than leaving them.

---

## Phase 1: Fix Broken Things (Critical)

### 1.1 Missing Images (~14 referenced but don't exist)
Images referenced in HTML that do not exist in `images/`:
- `research-visualization.jpg` (academic.html — research overview)
- `aspect-project.jpg`, `particle-tracking.jpg`, `star-formation.jpg` (academic.html — projects)
- `evensong-recital.jpg`, `paris-cathedral.jpg`, `collaborative-ballet.jpg`, `christmas-concert.jpg` (music.html — performances)
- `calvary-organ.jpg`, `cathedral-organ.jpg`, `paris-organ.jpg` (music.html — instruments)
- `improvisation-recording.jpg`, `easter-recording.jpg`, `french-repertoire.jpg` (music.html — recordings)

**Decision**: No real photos available. Redesign all image-dependent sections to use icon/gradient/CSS-based designs. Remove image containers entirely.

### 1.2 Broken CV Download Link
- `academic.html:399` points to `docs/CV_Gabriel_Johnston.pdf`
- Actual file: `images/Gabriel_Johnston_CV (3).pdf`
- **Fix**: Create `docs/` directory, copy CV with clean filename (`Gabriel_Johnston_CV.pdf`), update link. Also add music resume download.

### 1.3 Fabricated YouTube Links
- All 3 recording cards on `music.html` link to YouTube channel but recordings are fabricated.
- **Fix**: Remove the specific recording cards with fake titles/dates. Keep the YouTube channel link only if the channel exists with real content. Otherwise, remove the Recordings section entirely.

### 1.4 Placeholder Formspree ID
- `index.html:214`: `action="https://formspree.io/f/your-formspree-id"`
- **Fix**: Use mailto fallback for now (`mailto:orion1234@ufl.edu`). Upgrade to Formspree later once account is created (free tier: 50 submissions/month).

### 1.5 Oversized Headshot
- `images/gabrielheadshot2 (1).jpeg` is 19MB
- **Fix**: Compress to ~200KB max, rename to clean filename (`gabriel-headshot.jpg`), update all references.

### 1.6 Untracked CSS
- `css/animations.css` is untracked in git — commit it.

---

## Phase 2: Content Accuracy (CV Sync)

Cross-reference everything against the two CVs (academic CV dated ~2025, music resume dated ~2025).

### 2.1 Academic Page — Missing Content

**Publications need major update.** Website only shows conference presentations. CV has:

**In Review (add these prominently):**
- Johnston, Forte, Glisovic, Chauvel, Farnetani, & Robert — "Southern Hemisphere Hotspots Traced Back to Distinct Paleo-Subduction Zones" — doi.org/10.21203/rs.3.rs-7827767/v1
- Anderson, Johnston, Perfit, Forte, Kamenov, Graham, Dixon, Wanless, & Glisovic — "Deeply Recycled Origins of Mantle Heterogeneity at the Northern East Pacific Rise" — doi.org/10.21203/rs.3.rs-6173319/v1

**In Preparation (add these):**
- Johnston, Liu, Forte, & Glisovic — "Playing with Edges: The Influence of Arbitrary Definitions on Hotspot-LLSVP Correlations"
- Johnston, Anderson, Forte, & Glisovic — "How Well Is the Mantle Sampled? A Global Voxel-Based Analysis of Residence Time and Flux from Forward- and Reverse-Time Mantle Convection"

**Conference presentations — add missing:**
- EGU 2026 (May 2026) — Voxel-based mantle sampling (upcoming)

**Fix EGU 2025 date**: Homepage says "January 2025" — should be "April 2025"

**Teaching Experience — entirely missing from website:**
- Instructor of Record, Florida Geology Lab (5 semesters)
- TA for: IDS 2935, GLY 3163, ESC 1000, GLY 1102, GLY 2030C

**Research Experience — missing:**
- Invited Scientist, IPGP Paris (June-December 2025)

**Projects — missing:**
- CLEEDI 2025 (September 2025, Tarascon-sur-Ariege, France)

**Professional Affiliations — incomplete:**
- Add: EGU, AGU (from academic CV)

### 2.2 Music Page — Missing/Wrong Content

**Calvary position history:**
- Organist & Choirmaster: October 2022 - June 2025
- Interim Organist/Choir Director: April 19, 2026 - present (returned while awaiting postdoc decisions)
- Update bio text to reflect both stints and Hurricane Helene rebuilding context.

**Raymond Glover Grant (2025, $3,500)** — mentioned in bio text but:
- Not in any awards section on music page
- Should have its own callout/highlight with details from press release:
  - Awarded by Association of Anglican Musicians
  - Studies with Dwight Thomas (Cathedral of St. Peter) and George Nicholls (American Cathedral Paris)
  - Culminated in Evensong at Calvary Episcopal Church during Hurricane Helene rebuilding

**Missing from music page:**
- Grace Presbyterian Church position (Oct 2019 - Oct 2022)
- Ensemble experience (American Cathedral Choir, Paris Chorale Society, St. Peter's Evensong Choir, Gainesville Masterchorale, UF Symphony Orchestra viola, UF Chamber Music viola, Ocala Symphony, Danville Symphony)
- Samuel Liegeon as improvisation teacher
- Voice and piano teachers
- AGO and AAM affiliations
- Hurricane Helene context and fundraising ($7,100 in rebuilding grants, $1,300 Evensong)

**Ballet pianist ended Spring 2024** — update language accordingly.

### 2.3 Homepage Fixes
- EGU highlight: Change "January 2025" to "April 2025"
- GitHub link: `index.html:210` links to `gabejohnston` — **WRONG**, must be `orionjohnston`

---

## Phase 3: Feature the llsvp.png Visualization

The new `images/llsvp.png` shows a 3D Earth with LLSVPs (red structures at core-mantle boundary) and particle trajectories. This is Gabriel's signature research visualization.

**Where to feature it:**
1. **Academic page hero or research overview** — replace the broken `research-visualization.jpg` with `llsvp.png`
2. **Homepage** — consider adding it to the "About Me > The Scientist" section or as a background element
3. Style it with a subtle glow/shadow treatment to make it pop against the page background

---

## Phase 4: Aesthetic & Polish

### 4.1 Design Improvements
- Sections with missing images need redesign (gradient backgrounds, icon-based cards, or remove image dependency)
- Consider adding a subtle parallax or reveal animation for the llsvp.png
- Ensure consistent visual treatment across all three pages
- Performance slider on music page: convert to text-based timeline (no photos available)
- Recordings section: remove fabricated recording cards, keep YouTube channel link only if real content exists

### 4.2 Responsive & Cross-Browser
- Test mobile navigation
- Ensure llsvp.png displays well at all screen sizes
- Check Vanta.js globe performance on mobile

### 4.3 SEO & Meta
- Add Open Graph meta tags for social sharing
- Add a favicon
- Ensure meta descriptions are accurate and compelling for postdoc search committees

---

## Phase 5: Deployment Prep

### 5.1 File Cleanup
- Rename files with spaces/parentheses to clean names (e.g., `gabrielheadshot2 (1).jpeg` -> `gabriel-headshot.jpg`)
- Create `docs/` for downloadable PDFs
- Remove `images/t.txt` (empty placeholder)
- Ensure `.gitignore` covers common artifacts

### 5.2 Git & GitHub
- Commit `css/animations.css` (currently untracked)
- Stage and commit all fixes
- Push to `origin main`
- Verify GitHub Pages settings in repo (Settings > Pages > Source: main branch)

---

## File Map

```
website 2/
├── index.html          <- Homepage (hero, about, highlights, contact)
├── academic.html       <- Academic portfolio (research, education, pubs, skills, awards)
├── music.html          <- Music portfolio (bio, philosophy, performances, instruments)
├── css/
│   ├── global.css      <- Variables, resets, typography
│   ├── navigation.css  <- Header/nav styles
│   ├── home.css        <- Homepage-specific
│   ├── academic.css    <- Academic page-specific
│   ├── music.css       <- Music page-specific
│   ├── common.css      <- Shared components
│   ├── animations.css  <- Scroll/stagger animations (UNTRACKED — commit!)
│   └── footer.css      <- Footer styles
├── js/
│   └── script.js       <- All JS (Vanta, sliders, tabs, smooth scroll, cursor, preloader)
├── images/
│   ├── gabrielheadshot2 (1).jpeg  <- Profile photo (19MB — COMPRESS)
│   ├── Gabriel_Johnston_CV (3).pdf <- Academic CV
│   ├── Music_Resume__1pg_ (1).pdf  <- Music resume
│   ├── llsvp.png                   <- 3D LLSVP visualization (NEW — feature prominently)
│   └── t.txt                       <- Empty placeholder (DELETE)
├── readme.md           <- Setup instructions
└── CLAUDE.md           <- THIS FILE
```

---

## Key Contacts & Links

- **Email**: orion1234@ufl.edu
- **GitHub**: orionjohnston (confirmed)
- **YouTube**: youtube.com/@orionjohnston963
- **Zenodo DOIs**: See publications section above
- **Preprint DOIs**: doi.org/10.21203/rs.3.rs-7827767/v1, doi.org/10.21203/rs.3.rs-6173319/v1
