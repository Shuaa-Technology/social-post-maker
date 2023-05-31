// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    {
      type: 'doc',
      id: 'introduction',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation', // Installation subpage
        'getting-started/configuration', // Configuration subpage
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/layouts', // Layouts subpage
      ],
    },
  ],
};

module.exports = sidebars;