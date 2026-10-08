import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Écoulement à surface libre',
  tagline: 'Cours d’hydraulique — USTHB',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // TODO: remplacer par l'URL de production (ex. GitHub Pages / Netlify)
  url: 'https://usthb-hydraulique.example.com',
  baseUrl: '/',

  // Déploiement GitHub Pages (à adapter si vous utilisez GitHub Pages)
  organizationName: 'usthb',
  projectName: 'free-surface-flow',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    localeConfigs: {
      fr: {label: 'Français', htmlLang: 'fr-FR'},
      en: {label: 'English', htmlLang: 'en-US'},
    },
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'cours',
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // TODO: pointer vers votre dépôt pour activer « Modifier cette page »
          // editUrl: 'https://github.com/usthb/free-surface-flow/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // Feuille de style KaTeX (rendu des formules)
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Écoulement à surface libre',
      logo: {
        alt: 'Logo du cours',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'coursSidebar',
          position: 'left',
          label: 'Cours',
        },
        {
          to: '/cours/travaux-diriges',
          label: 'Travaux dirigés',
          position: 'left',
        },
        {
          to: '/cours/annexes',
          label: 'Annexes',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Cours',
          items: [
            {label: 'Introduction', to: '/cours/introduction'},
            {label: 'Travaux dirigés', to: '/cours/travaux-diriges'},
            {label: 'Annexes', to: '/cours/annexes'},
          ],
        },
        {
          title: 'Université',
          items: [{label: 'USTHB', href: 'https://www.usthb.dz/'}],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} — Cours d’hydraulique à surface libre, USTHB. Construit avec Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'matlab'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
