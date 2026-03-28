import fs from 'fs';
import path from 'path';

const files = ['biology.js', 'chemistry.js', 'physics.js'];
const dir = path.join(process.cwd(), 'src/data');

for (const file of files) {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf-8');

  // We want to remove notes: [ ... ], and quiz: [ ... ],
  // This regex matches "notes: [" or "quiz: [" until the matching closing brace.
  // Actually, since it's JS, we can just replace the block.
  // A simpler regex for notes: \[.*?\] depending on dotAll:
  content = content.replace(/notes:\s*\[[\s\S]*?\],?/g, '');
  content = content.replace(/quiz:\s*\[[\s\S]*?\],?/g, '');
  
  fs.writeFileSync(filePath, content);
  console.log(`Stripped ${file}`);
}
