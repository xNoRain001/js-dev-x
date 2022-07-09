import babel from 'rollup-plugin-babel'

export default {
  input: './src/index.js',

  output: {
    file: './dist/javascript-dev-utils.js',
    format: 'umd',
    name: '_'
  },
  
  plugins: [
    babel({
      exclude: './node_modules/**'
    }),
  ]
}