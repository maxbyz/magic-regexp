export default defineAppConfig({
  docus: {
    title: 'magic-regexp',
    layout: 'docs',
    url: 'https://regexp.dev',
    description: '🦄 A compiled-away, type-safe, readable RegExp alternative',
    socials: {
      twitter: 'danielcroe',
      github: 'danielroe/magic-regexp',
    },
    debug: false,
    github: {
      root: 'docs/content',
      edit: true,
      releases: true,
    },
    cover: {
      src: '/cover.png',
      alt: 'A screenshot of the magic-regexp home page.',
    },
    footer: {
      credits: [
        {
          icon: 'IconDocus',
          text: 'Powered by Docus',
          href: 'https://docus.com',
        },
      ],
      icons: [
        {
          label: 'Nuxt',
          href: 'https://nuxt.com',
          component: 'IconNuxt',
        },
        {
          label: 'Vue Telescope',
          href: 'https://vuetelescope.com',
          component: 'IconVueTelescope',
        },
      ],
    },
  },
})
