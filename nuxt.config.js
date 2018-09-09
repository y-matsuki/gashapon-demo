module.exports = {
  mode: 'spa',
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  generate: {
    dir: 'docs'
  },
  build: {
    vendor: ['element-ui']
  },
  plugins: [
    '~plugins/element-ui'
  ],
  css: [
    '~/assets/reset.css',
    'element-ui/lib/theme-chalk/index.css'
  ]
}
