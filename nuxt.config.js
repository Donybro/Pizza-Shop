export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'pizzaShop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  mode: 'spa',
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/scss/index.scss'],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/vuelidate.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-purgecss',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyChFlOS2ECY9UOJbFQRntUw3XM9bcAzmcQ',
          authDomain: 'pizza-75af9.firebaseapp.com',
          projectId: 'pizza-75af9',
          storageBucket: 'pizza-75af9.appspot.com',
          messagingSenderId: '1097513689550',
          appId: '1:1097513689550:web:04f9e5dc424d78f2238b9f',
          measurementId: 'G-9BFQNF2CZX',
        },
        services: {
          auth: true,
          database: true,
        },
      },
    ],
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
  },
  purgeCSS: { mode: 'postcss' },
};
