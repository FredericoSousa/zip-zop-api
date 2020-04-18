const fs = require('fs');
const { resolve } = require('path');

module.exports = () =>
  console.log('\x1b[32m' + fs.readFileSync(resolve(__dirname, '..', 'resources', 'logo.txt')).toString());