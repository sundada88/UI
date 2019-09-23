module.exports = {
  presets: [
    ['@babel/preset-env', {
      loose: true,
      modules: 'commonjs'
    }]
  ],
  plugins: [
    ["@babel/plugin-transform-runtime", {
      coreje: 2,
      helper: true,
      regenerator: true,
      useESModule: false,
      loose: true,
      modules: 'commonjs'
    }],
    '@babel/plugin-syntax-dynamic-import'
  ]
}