// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  target: "static",
  app: {
    head: {
      "title": 'ArtMySpace | Share and Discover Amazing Artworks',
      "meta": [
        { "charset": 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no', crossorigin: true},
        { name: "theme-color", content: "#461f84"}
      ],
      "link": [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href:'https://fonts.gstatic.com'},
        { rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Laila&display=swap"}
      ],
      script: [
        
      ]
    },  
  },
  css: [
    '~/assets/css/main.css',
    // '~/assets/css/style.css',
    // '~/assets/css/typography.css',
    // '~/assets/css/universal.css',
  ],
})
