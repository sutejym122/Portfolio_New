# Portfolio

My personal portfolio website, built with React and Vite.

The site showcases my software engineering experience, projects, technical skills, and contact information.

## Tech Stack

- React
- Vite
- JavaScript
- HTML
- CSS
- Vercel

## Running Locally

Clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

Portfolio content is maintained in:

```text
src/content.js
```

This includes:

- Projects
- Work experience
- Skills
- Contact information
- External links

Project assets and images are stored in:

```text
src/assets/
```

Static files, including my resume, are stored in:

```text
public/
```

## Design

The portfolio was designed and implemented with a lightweight, responsive approach without relying on a UI framework.

Key implementation details include:

- Responsive layouts for desktop and mobile
- Native system font stack
- Reusable design tokens and accent styling in `src/index.css`
- Scroll-based reveal animations using `IntersectionObserver`
- Support for `prefers-reduced-motion`
- Lightweight client-side implementation without additional animation or 3D libraries

## Deployment

The application can be deployed on platforms that support Vite applications, including Vercel and Netlify.

Production configuration:

```text
Build command: npm run build
Output directory: dist
```

## Author

**Sutej Yadavanahalli Manjunath**

Software Engineer

[LinkedIn](https://www.linkedin.com/in/sutej-ym/) · [GitHub](https://github.com/sutejym122)
