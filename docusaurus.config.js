// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('path')

const cdnTransform = async (manifestEntries) => {
  const manifest = manifestEntries.map(entry => {
    const cdnOrigin = 'https://wuchuheng.com';
    console.log(entry.url)
    if (entry.url.startsWith('/assets/')) {
      entry.url = cdnOrigin + entry.url;
    }
    console.log(entry.url)
    return entry;
  });
  return {manifest, warnings: []};
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'wuchuheng\'s notes',
  tagline: '来找我吧，我的目标是星辰大海',
  url: 'https://wuchuheng.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icons.ico',
  organizationName: 'wuchuheng', // Usually your GitHub org/user name.
  projectName: 'wuchuheng.github.io', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/wuchuheng/wuchuheng.github.io/edit/master/',

          remarkPlugins: [require('mdx-mermaid')]
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/wuchuheng/wuchuheng.github.io/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    navbar: {
      title: 'wuchuheng\'s notes',
      logo: {
        alt: 'wuchuheng\'s notes',
        src: 'img/icons-96x96.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'right',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'right'},
        {to: '/docs/myLibaries', label: 'MyLibraries', position: 'right'},
        {to: '/emailMarkdown', label: 'EmailMarkdown', position: 'right'},
        {to: '/tools', label: 'Tools', position: 'right'},
        {to: '/docs/收录优秀的开源库', label: 'libraries', position: 'right'},
        {to: '/todos', label: 'Todos', position: 'right'},
        {to: '/docs/收录vim插件库/', label: 'Vim', position: 'right'},
        {to: '/docs/book', label: 'Books', position: 'right'},
        {to: '/docs/友情链接收录', label: 'FriendlyLink', position: 'right'},
        {
          href: 'https://github.com/wuchuheng/wuchuheng.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Tutorial',
    //           to: '/docs/intro',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Stack Overflow',
    //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://discordapp.com/invite/docusaurus',
    //         },
    //         {
    //           label: 'Twitter',
    //           href: 'https://twitter.com/docusaurus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'Blog',
    //           to: '/blog',
    //         },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/facebook/docusaurus',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: [
        'php',
        'nginx',
        'java',
        'groovy',
        'vim',
        'git',
        'dart',
        'applescript',
        'makefile',
        'jsx',
        'tsx',
        'rust',
        'lua',
        'json',
        'ruby',
        'cmake'
      ],
    },
    algolia: {
      appId: 'IEGAUEEF24',
      apiKey: '1edeb58562a7bcd7a914bb8b4371ed2d',
      indexName: 'wuchuheng',
    },
  }),

  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/icons-96x96.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
        swCustom: path.resolve(__dirname, 'src/sw.js'),
        // injectManifestConfig: {
        //     manifestTransforms: [
        //         cdnTransform
        //     ],
        //     modifyURLPrefix: {
        //         //...
        //     },
        //     // We already add regular static assets (html, images...) to be available offline
        //     // You can add more files according to your needs
        //     globPatterns: ['**/*.{pdf,docx,xlsx,glb}'],
        //     // ...
        // },
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'my-wandering-diary',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'my-wandering-diary',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './my-wandering-diary',
      },
    ],
  ]
};

module.exports = config;
