require('dotenv').config()
export default {
  srcDir: 'src',
  buildDir: 'functions/.nuxt',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
 css: ['~/assets/main.scss'],
  /*
  ** Plugins to load before mounting the App
  */
  publicRuntimeConfig: {
    //baseURL: process.env.BASE_URL,
  },
  privateRuntimeConfig: {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    FB_projectId: process.env.FB_projectId,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/firebase'

  ],
  /*
  ** Build configuration
  */
  firebase: {
    config: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      projectId: 'insurium.app',
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID      
    },
    services: {
      auth: {
        persistence: 'local', // default
      
        // it is recommended to configure either a mutation or action but you can set both
        initialize: {
          onAuthStateChangedMutation: 'user/ON_AUTH_STATE_CHANGED_MUTATION',
          // onAuthStateChangedAction: 'onAuthStateChangedAction'
        },
      
        ssr: false // default
      },
      firestore: true,
      // functions: true,
      storage: true,
      // realtimeDb: true,
      // messaging: true,
      // performance: true,
      // analytics: true,
      // remoteConfig: true
    }
  },
  build: {
    extractCSS: true,
    extend (config, ctx) {
    }
  }
}
