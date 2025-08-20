const fs = require('fs');
const path = require('path');

// Create .nojekyll file in the out directory to prevent GitHub from processing it with Jekyll
const nojekyllPath = path.join(__dirname, '..', 'out', '.nojekyll');

try {
  // Create the out directory if it doesn't exist
  const outDir = path.dirname(nojekyllPath);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  
  // Create empty .nojekyll file
  fs.writeFileSync(nojekyllPath, '');
  console.log('✓ Created .nojekyll file for GitHub Pages');
} catch (error) {
  console.error('Error creating .nojekyll file:', error);
  process.exit(1);
}