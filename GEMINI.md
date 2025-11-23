# GEMINI.md

This file provides a comprehensive overview of the project, its structure, and how to work with it.

## Project Overview

This is a React web application built with Vite that showcases a massive design system with over 60 themes. The application is a demo for a real estate website, and it includes features like property listings, property details, and a booking form.

The main technologies used are:

*   **React:** For building the user interface.
*   **Vite:** As the build tool and development server.
*   **Tailwind CSS:** For styling the application.
*   **lucide-react:** For icons.
*   **class-variance-authority, clsx, tailwind-merge:** Utilities for managing CSS classes.

The entire application is contained within a single file, `design-system.jsx`, which includes the design system engine, all the themes, the components, and the page views.

## Building and Running

### Development

To run the application in development mode, use the following command:

```bash
pnpm dev
```

This will start a development server, and you can view the application in your browser at the address provided in the console output.

### Build

To build the application for production, use the following command:

```bash
pnpm build
```

This will create a `dist` directory with the production-ready files.

### Preview

To preview the production build locally, use the following command:

```bash
pnpm preview
```

### Deployment

The project is set up to be deployed to GitHub Pages. To deploy the application, use the following command:

```bash
pnpm deploy
```

This will deploy the contents of the `dist` directory to the `gh-pages` branch of the repository. The `vite.config.js` is configured with a base path of `/my-react-demo/`, so the deployed application will be available at `https://<username>.github.io/my-react-demo/`.

## Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling. The configuration is in `tailwind.config.ts`.
*   **Components:** The application is built with React components. The main component is `FinalWebStyleLab` in `design-system.jsx`.
*   **Code Style:** The code style is consistent with a modern React project. It uses JSX syntax and functional components with hooks.
*   **Utilities:** The project uses `clsx`, `tailwind-merge`, and `class-variance-authority` for managing CSS classes. These are imported and used in `src/utils/cn.js`.
