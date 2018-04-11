const fs = require('fs');
const path = require('path');

const swPath = path.join(__dirname, '..', 'build', 'service-worker.js');
const serviceWorker = fs.readFileSync(swPath, {
  encoding: 'utf8'
});

const replacedFile = serviceWorker.replace(/index.html/g, '');

fs.writeFileSync(swPath, replacedFile);