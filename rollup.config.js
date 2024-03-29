import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: './src/index.js',

  output: {
    file: './dist/js-dev-x.js',
    format: 'umd',
    name: '_'
  },
  
  plugins: [
    babel({
      exclude: './node_modules/**'
    }),
    resolve({})
  ]
}