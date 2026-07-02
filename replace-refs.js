const fs = require('fs');
const path = require('path');

const mapping = JSON.parse(fs.readFileSync('image-mapping.json', 'utf-8'));

function getHtmlFiles(dir, fileList = []) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file === 'node_modules' || file.includes('photos')) return;
      getHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const htmlFiles = getHtmlFiles(__dirname);
let totalReplacements = 0;

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  let fileReplacements = 0;

  for (const [localRef, cloudUrl] of Object.entries(mapping)) {
    const fileName = localRef.split('/').pop();
    // Match any src="...filename" regardless of folder path prefix used
    const regex = new RegExp(`["'][^"']*${fileName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`, 'g');
    const before = content;
    content = content.replace(regex, `"${cloudUrl}"`);
    if (content !== before) fileReplacements++;
  }

  if (fileReplacements > 0) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Updated ${fileReplacements} references in ${file}`);
    totalReplacements += fileReplacements;
  }
});

console.log(`\nDone. ${totalReplacements} total replacements across ${htmlFiles.length} HTML files checked.`);