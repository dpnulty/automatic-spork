const fs = require('fs');
const path = require('path');

const header = fs.readFileSync(path.join(__dirname, 'partials', 'header.html'), 'utf8');
const footer = fs.readFileSync(path.join(__dirname, 'partials', 'footer.html'), 'utf8');

const dirs = ['.', 'blog', 'garden', 'hub', 'portfolio'];

for (const dir of dirs) {
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.html')) continue;
    const filePath = path.join(dir, file);
    let html = fs.readFileSync(filePath, 'utf8');
    html = html.replace(/\{\{header\}\}/g, header).replace(/\{\{footer\}\}/g, footer);
    fs.writeFileSync(filePath, html);
  }
}
