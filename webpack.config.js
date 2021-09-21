// using absolute paths via nodes path module to prevent confusion between mac/windows relative paths
const path = require('path');

const entry = '/server.js';
const outputDir = 'build/';

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, entry),
  output: {
    filename: `[name]-[hash].js`,
    path: path.resolve(__dirname, outputDir),
  },
};
