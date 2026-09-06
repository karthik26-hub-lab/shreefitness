const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const files = [
  'index.html',
  'invoice.html',
  'INVOICE.pdf',
  'robots.txt',
  'sitemap.xml',
  'README.md',
  'PROJECT_SPECIFICATION.md',
  'SEO_INDEXING_GUIDE.md'
];

for (const f of files) {
  const src = path.join(__dirname, f);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(distDir, f));
    console.log('Copied ' + f + ' -> dist/');
  }
}

const assetsSrc = path.join(__dirname, 'assets');
const assetsDist = path.join(distDir, 'assets');
if (fs.existsSync(assetsSrc)) {
  copyDir(assetsSrc, assetsDist);
  console.log('Copied assets/ -> dist/assets/');
}

console.log('✅ Build completed successfully! All assets ready in dist/');
