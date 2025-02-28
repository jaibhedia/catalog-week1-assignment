

# TechnoFevers - Catalog Week 1 Assignment

**TechnoFevers** is a modern, responsive, and lightweight static website designed to showcase innovative collaboration solutions. Developed as part of the Catalog Week 1 Assignment, the project uses semantic HTML, modular SCSS (Sass), and vanilla JavaScript. The site features interactive elements such as a mobile hamburger menu and smooth sliders for team members and customer reviews.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Design Inspiration](#design-inspiration)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Directory Structure](#directory-structure)
- [Installation](#installation)
- [Development](#development)
- [Live Server Testing](#live-server-testing)
- [Deployment](#deployment)
- [Improvements & Future Features](#improvements--future-features)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

This project is a static website that delivers a modern user experience, inspired by a detailed Figma design. It adheres to pixel-perfect specifications and incorporates responsive design techniques, ensuring a seamless experience across devices.

---

## Design Inspiration

The design was directly inspired by a Figma prototype which emphasizes:
- A responsive layout and intuitive navigation.
- A consistent color palette and modern typography.
- Engaging animations and transitions for smooth user interactions.

View the design [here](https://www.figma.com/design/64l0uD9YE0NVZcdAZ2YQb8/technofevers_dev?m=dev).

---

## Features

- **Responsive Design:** Mobile-friendly layout with an adaptive hamburger menu.
- **Modular Styling:** Organized SCSS files with variables, mixins, and media queries.
- **Interactive Elements:**  
  - Smooth scrolling sliders for team and review sections.
  - Dynamic navigation toggle implemented with vanilla JavaScript.
- **Optimized Assets:** Utilizes SVG icons and preloaded background images for improved performance.

---

## Tech Stack

- **HTML5:** Semantic markup for better accessibility and SEO.
- **SCSS (Sass):** Modular styling, using organized folders (abstracts, base, components, layout, pages).
- **JavaScript:** Vanilla JS for client-side interactivity.
- **Node.js & NPM:** For dependency management and build automation.
- **Dart Sass:** Compiles SCSS into production-ready CSS.

---

## Directory Structure

```
├── assets/
│   ├── icons/
│   │   ├── feature-code.svg
│   │   ├── feature-computer.svg
│   │   ├── feature-content.svg
│   │   ├── feature-newsletter.svg
│   │   ├── feature-redesign.svg
│   │   ├── feature-support.svg
│   │   ├── icons-sprite.svg
│   │   └── logo.svg
├── css/
│   ├── style.css
│   └── style.css.map
├── sass/
│   ├── abstracts/
│   │   ├── _index.scss
│   │   ├── _mixins.scss
│   │   └── _variables.scss
│   ├── base/
│   │   ├── _base.scss
│   │   ├── _index.scss
│   │   └── _utilities.scss
│   ├── components/
│   │   ├── _about-section.scss
│   │   ├── _achievements-section.scss
│   │   ├── _footer-section.scss
│   │   ├── _header-section.scss
│   │   ├── _hero-section.scss
│   │   ├── _mission-section.scss
│   │   ├── _review-section.scss
│   │   ├── _service-section.scss
│   │   └── _team-section.scss
│   ├── layout/
│   │   ├── _about.scss
│   │   ├── _achievements.scss
│   │   ├── _footer.scss
│   │   ├── _header.scss
│   │   ├── _hero.scss
│   │   ├── _mission.scss
│   │   ├── _review.scss
│   │   ├── _service.scss
│   │   └── _team.scss
│   ├── pages/
│   │   └── _home.scss
│   └── index.scss
├── src/
│   └── js/
│       └── script.js
├── index.html
├── package.json
├── README.md
└── .gitignore
```

---

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/jaibhedia/catalog-week1-assignment.git
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd catalog-week1-assignment
   ```
3. **Install Dependencies:**
   ```bash
   npm install
   ```

---

## Development

To develop locally, use the following commands:

- **SCSS Compilation & Live Reload:**  
  Start watching SCSS files and auto-update CSS:
  ```bash
  npm start
  ```
- **Live Server Testing:**  
  For a live-reloading preview (if you have a live server package installed), run:
  ```bash
  npm run devserver
  ```
  *(Make sure your `package.json` includes a script for `live-server`—for example, using the `live-server` package.)*

> **Note:** If you haven’t set up the live server script yet, you can install it globally or add it as a dev dependency:
> ```bash
> npm install live-server --save-dev
> ```
> Then add the following to your `package.json` scripts section:
> ```json
> "scripts": {
>   "start": "sass ./sass/index.scss ./css/style.css --watch",
>   "liverser": "live-server --port=5500"
> }
> ```

---

## Deployment

To prepare your project for production:

1. **Build the Project:**
   ```bash
   npm run build
   ```
   This command will compile SCSS to minified CSS and bundle your JavaScript.

2. **Deploy:**  
   Since this is a static site, you can deploy on platforms like Vercel, Netlify, or GitHub Pages. For Vercel, simply connect your GitHub repository to Vercel and deploy.

---

## License

This project is licensed under the **ISC License**. See the [LICENSE](LICENSE) file for details.

---
