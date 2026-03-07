import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dir = path.join(__dirname, 'src/components');

const files = fs.readdirSync(dir);
let updatedCount = 0;

files.forEach(file => {
    if (file.endsWith('.tsx')) {
        const p = path.join(dir, file);
        let content = fs.readFileSync(p, 'utf8');

        const beforeLength = content.length;
        content = content.replace(/margin: "-100px"/g, 'margin: "0px"');
        content = content.replace(/margin: "-50px"/g, 'margin: "0px"');

        if (content.length !== beforeLength || content.includes('margin: "0px"')) {
            fs.writeFileSync(p, content);
            updatedCount++;
            console.log('Updated ' + file);
        }
    }
});

console.log('Total files updated:', updatedCount);
