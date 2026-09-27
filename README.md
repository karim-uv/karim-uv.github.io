# Karim Hussein — personal site

Task 3 of the Lime Light internship programme. A responsive personal site built by rewriting the
sample Bootstrap project from the ground up.

**Live site:** https://karim-uv.github.io/karim-portfolio/

## Sections

Six, one more than the brief asks for:

1. **About** — who I am and what I work on
2. **Work** — five projects in a responsive card grid
3. **Academics** — a dated track from starting the BSc in 2023 through to graduation in 2027
4. **Skills** — grouped by what I have actually shipped with
5. **Off the clock** — football, training, building things, food, cities, hackathons
6. **Contact** — email, LinkedIn, GitHub and location

## Responsive web design

Bootstrap 5 supplies the parts of RWD the task is about:

- A `navbar-expand-lg` that collapses to a menu button below 992px.
- The 12-column grid throughout — `col-lg-4` / `col-lg-8` for the section headings and their
  content, and `row-cols-1 row-cols-md-2 row-cols-xl-3` so the project cards reflow from one
  column on a phone to three on a wide screen.
- Scrollspy, which highlights the nav link for the section you are reading.

Everything above that is written for this site: the palette, the type scale, the academic track,
the card treatments, and the mobile styles that turn the nav underline into a left rule. Type sizes use `clamp()` so they scale with the viewport rather than jumping at
breakpoints.

`js/main.js` holds one small piece of behaviour — closing the mobile menu after a link is tapped,
which Bootstrap does not do on its own and which otherwise leaves the reader looking at the menu
instead of the section they asked for.

## Accessibility

Landmarks and headings are in order, the menu button carries an `aria-label`, focus is visible on
every link and button, and `prefers-reduced-motion` turns off the card transitions.

## Structure

```
index.html
css/style.css
js/main.js
```

Bootstrap loads from jsDelivr, so there is no build step — GitHub Pages serves these three files
as they are.
