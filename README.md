# Tirthendu’s portfolio

An original, interactive portfolio for GitHub Pages with a cinematic mountain-and-lake hero. No framework, dependencies, build step, or server is required.

## Publish at https://tirtho496.github.io

1. Create a GitHub repository called **tirtho496.github.io** under the **tirtho496** account. If one already exists, back up its contents before replacing anything.
2. Extract this package. Upload the **contents** of the `portfolio` directory to the repository root, including `.github/workflows/pages.yml`. Do not upload the containing directory itself. GitHub’s web uploader can omit hidden directories; use Git locally if needed.
3. Use `main` as the branch. Go to **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**.
4. Go to **Actions**, choose **Deploy portfolio to GitHub Pages**, and run it. Future commits to `main` deploy automatically.
5. Open the URL shown by the completed deployment.

Alternative, without Actions: select **Deploy from a branch**, branch `main`, folder `/ (root)` in Settings → Pages. The included `.nojekyll` file supports direct static serving.

For a project repository, the site also works at `https://tirtho496.github.io/REPOSITORY/` because all local asset paths are relative.

## Edit content

Everything is in **content.js**. Change text, save, commit. New entries are rendered automatically in array order.

To add experience, copy one object in `experience`, update its fields, and separate objects with commas:

```js
{company:'Company', role:'Role', dates:'Oct 2026 — Present', location:'City',
 points:['What you contributed.','A specific outcome.']}
```

Projects use `title`, `category`, `label`, `description`, `tags`, and optional `url`. New categories automatically appear as filter buttons. Publications use `title`, `venue`, `description`, and optional `url`. Education uses `institution`, `degree`, `detail`, `dates`, and `location`. Hobbies use `title` and `text`. Skills use `group` and `items`.

Leave unknown URLs empty; the site hides their buttons. Do not use placeholder links.

Add your public CV as `assets/resume.pdf`, then set `resume: 'assets/resume.pdf'`. Add a photograph and set `portrait: 'assets/portrait.jpg'` if desired. Neither is required.

Change colours, spacing, and typography in `styles.css`. Rendering and interactions are in `app.js`.

## Before publishing

- Review dates and descriptions. Content is based on your supplied CV and conversation details.
- The two earlier IEEE papers are grouped as one research entry because exact citations were not provided. Replace that entry with each verified citation, author list if desired, and DOI URL.
- Add verified project URLs. Links have deliberately been left empty where repository names were not confirmed.
- The site includes your email and location. It omits your phone number and private company materials.
- Make sure your latest downloadable CV is suitable for public sharing.

## Preview locally

Open `index.html` directly in a browser. Or run `python3 -m http.server 8000` from this directory and visit `http://localhost:8000`.

## Features

Original SVG landscape, rotating role text, sticky active-section navigation, section jump controls, searchable experience with company filters, collapsible education with degree filters, visual skills with discipline filters, project filters, persistent light/dark theme, keyboard focus styles, skip navigation, reduced-motion support, print styles, optional photo and CV, safe text rendering, and relative asset paths.

Optional `heroRoles` in content.js lets you customise the rotating headings, for example `heroRoles: ["Machine Learning Engineer", "Software Engineer"]`. The landscape lives in assets/landscape.svg.

## Verification

JavaScript syntax and runtime checks passed in a simulated DOM: initial rendering, experience search and empty states, company filters, education filters, project filters, skills filters, and theme switching. These checks do not verify visual layout. Browser visual QA was unavailable in the creation environment; inspect on desktop and mobile before public launch.

## Skills and scroll motion

Each experience and education entry has a `skills` array. Edit it to update the “Key skills developed” tags. Experience search includes these skills.

The `skillIcons` object maps each skill to its local SVG file in `assets/icons` (without `.svg`). Add an icon file and a mapping when adding a new skill. Brand icon credits and licence information are included in that folder. Selecting a skill opens its related experience, education, and project entries using exact case-insensitive skill/tag matches.

Section content slides from left to right once when first scrolled into view. Reduced-motion preferences disable these animations. Change the `.scroll-reveal` rules in `styles.css` to adjust distance and speed. Content stays visible when IntersectionObserver is unavailable.
