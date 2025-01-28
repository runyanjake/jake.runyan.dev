import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jake Runyan',
  tagline: 'Welcome to my online resume.',
  favicon: 'img/favicon.ico',


  url: 'https://jake.runyan.dev',
  baseUrl: '/',

  // Keep only if deploying on github pages.
  organizationName: 'runyanjake', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          path: './docs',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'projects-blog',
        path: './projects',
        routeBasePath: 'projects',
        blogTitle: 'Projects',
        blogDescription: 'My Current & Past Projects'
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'resume',
        path: './resume',
        routeBasePath: 'resume',
        blogTitle: 'Resume',
        blogDescription: 'My Resume'
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Jake Runyan',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'aboutSidebar',
            position: 'left',
            label: 'About Me',
          },
          {to: '/projects', label: 'Projects', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/resume', label: 'Resume', position: 'left'},
          {
            href: 'https://github.com/runyanjake/jake.runyan.dev',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Socials',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/runyanjake/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/runyanjake/',
              },
            ],
          },
          {
            title: 'Content Links',
            items: [
              {
                label: 'About Me',
                to: '/docs/about',
              },
              {
                label: 'Projects',
                to: '/projects',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/runyanjake',
              },
              {
                label: 'Jake\'s West Coast YouTube',
                href: 'https://www.youtube.com/@jakeswestcoast',
              },
              {
                label: 'PWS Recipes',
                href: 'https://recipes.whitney.rip',
              },
              {
                label: 'Jake\'s Photography Site',
                href: 'https://jakesphotos.whitney.rip',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jake Runyan.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
