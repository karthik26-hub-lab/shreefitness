const fs = require('fs');
const path = require('path');

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

// Target directories that Vercel might look for:
const targetDirs = ['public', 'dist'];

for (const target of targetDirs) {
  const dir = path.join(__dirname, target);
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  fs.mkdirSync(dir, { recursive: true });

  for (const f of files) {
    const src = path.join(__dirname, f);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(dir, f));
    }
  }

  const assetsSrc = path.join(__dirname, 'assets');
  const assetsDist = path.join(dir, 'assets');
  if (fs.existsSync(assetsSrc)) {
    copyDir(assetsSrc, assetsDist);
  }
  console.log('✅ Output directory ' + target + '/ populated with index.html and assets.');
}

console.log('✅ Build completed successfully! All assets ready.');
