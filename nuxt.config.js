export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt_jamstack',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: 'primevue/resources/primevue.min.css' },
    { src: 'primeicons/primeicons.css' },
    { src: 'primeflex/primeflex.css' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/content', 'primevue/nuxt'],

  primevue: {
    theme: 'md-light-indigo',
    ripple: true,
    components: [
      'AutoComplete',
      'Avatar',
      'Button',
      'Badge',
      'Calendar',
      'Card',
      'Checkbox',
      'Column',
      'ColorPicker',
      'ContextMenu',
      'DataTable',
      'DataView',
      'Dialog',
      'Dropdown',
      'FileUpload',
      'InputMask',
      'InputNumber',
      'InputSwitch',
      'InputText',
      'MegaMenu',
      'Menubar',
      'Message',
      'MultiSelect',
      'OverlayPanel',
      'Panel',
      'PanelMenu',
      'PickList',
      'ProgressBar',
      'RadioButton',
      'Ripple',
      'Sidebar',
      'Slider',
      'SplitButton',
      'TabPanel',
      'TabView',
      'Textarea',
      'Toast',
      'ToggleButton',
      'Toolbar',
      'TreeTable',
    ],
    directives: ['Tooltip', 'BadgeDirective'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()

      return files.map((file) => (file.path === '/index' ? '/' : file.path))
    },
    async ready() {
      const { $content } = require('@nuxt/content')
      const files = await $content().only(['slug']).fetch()
      console.log(files)
    },
  },
}
