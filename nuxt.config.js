module.exports = {
  mode: 'spa',
  generate: {
    dir: 'docs'
  },
  build: {
    vendor: ['element-ui'],
    publicPath: 'https://yuto-matsuki-recochoku.github.io/gashapon-demo/'
  },
  plugins: [
    '~plugins/element-ui'
  ],
  css: [
    '~/assets/reset.css',
    'element-ui/lib/theme-chalk/index.css'
  ]
}
