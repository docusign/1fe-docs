# 1fe Documentation

Official documentation repository for 1fe (One Front End) - A configuration-driven front-end platform that enables dynamic widget loading and micro-frontend architecture. Built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

## About 1fe

1fe is a powerful platform that allows organizations to build scalable front-end applications using a micro-frontend approach with dynamic configuration management, widget orchestration, and runtime dependency management.

## Live Demo

You can view the live documentation at: [1fe.com](https://1fe.com)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 22 or higher)
- [Yarn](https://yarnpkg.com/) package manager

### Installation

1. Clone this repository:

```bash
git clone https://github.com/docusign/1fe-docs.git
cd 1fe-docs
```

2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn dev
```

4. Open your browser and navigate to [http://localhost:8432](http://localhost:8432) to view the documentation locally.

### Making Changes

1. Edit the documentation files in the `src/content/docs/` directory
2. The development server will automatically reload your changes
3. Visit [http://localhost:8432](http://localhost:8432) to see your updates

### Build for Production

```bash
yarn build
```

## Project Structure

Inside of this Astro documentation project, you'll see the following folders and files:

```text
/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── content/
│   │   ├── docs/           # Documentation content
│   │   │   ├── start-here/
│   │   │   ├── tutorials/
│   │   │   ├── learning/
│   │   │   ├── how-to-guides/
│   │   │   ├── infrastructure/
│   │   │   ├── reference/
│   │   │   └── ...
│   │   └── config.ts       # Content collections config
│   ├── components/         # Reusable Astro components
│   ├── layouts/           # Page layouts
│   └── assets/            # Images and other assets
├── astro.config.mjs       # Astro configuration
└── package.json
```

Documentation content is written in MDX format and stored in the `src/content/docs/` directory. Each file automatically becomes a page based on its file path.

## Built With

- **[Astro](https://astro.build)** - Static site generator with excellent performance
- **[Starlight](https://starlight.astro.build)** - Documentation theme built on Astro
- **[TailwindCSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[MDX](https://mdxjs.com)** - Markdown with JSX support for interactive documentation
- **[React Icons](https://react-icons.github.io/react-icons/)** - Icon library for UI elements

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes to the documentation
4. Test locally using `yarn dev` and visit [http://localhost:8432](http://localhost:8432)
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Links

- [1fe Main Repository](https://github.com/docusign/1fe)
- [Astro Documentation](https://docs.astro.build)
- [Starlight Documentation](https://starlight.astro.build)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

---

### Issues and Discussions

If you have questions or want to discuss this project, please visit the [Issues](https://github.com/docusign/1fe/issues) or [Discussions](https://github.com/docusign/1fe/discussions) pages in our monorepo.
