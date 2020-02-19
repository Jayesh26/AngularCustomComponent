const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/FirstAngularElement/runtime-es2015.js',
    './dist/FirstAngularElement/polyfills-es2015.js',
    './dist/FirstAngularElement/scripts.js',
    './dist/FirstAngularElement/main-es2015.js',
  ]
  await fs.ensureDir('button1')
  await concat(files, 'button1/button.js');
  await fs.copyFile('./dist/FirstAngularElement/styles.css', 'button1/styles.css')
})()


