const fs = require('fs');
const path = require('path');

const header = fs.readFileSync(path.join(__dirname, 'partials', 'header.html'), 'utf8');
const footer = fs.readFileSync(path.join(__dirname, 'partials', 'footer.html'), 'utf8');

const pages = [
  'index.html',
  'blog/index.html',
  'blog/2025-05-psychiatry-sleep.html',
  'garden/index.html',
  'garden/welcome.html',
  'hub/index.html',
  'portfolio/index.html',
  'portfolio/sample-case.html'
];

for (const file of pages) {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace('<!-- @@header -->', header);
  content = content.replace('<!-- @@footer -->', footer);
  fs.writeFileSync(filePath, content);
}
