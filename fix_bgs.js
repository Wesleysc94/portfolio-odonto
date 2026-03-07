import fs from 'fs';
import path from 'path';

const dir = 'src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx')).map(f => path.join(dir, f));

let count = 0;

files.forEach(p => {
    let content = fs.readFileSync(p, 'utf8');
    let originalContent = content;

    // Fix form inputs fallback 
    content = content.replace(/dark:bg-white\/5([^a-zA-Z0-9_\-])/g, 'dark:bg-white/5 aura:bg-white/5 ruby:bg-white/5$1');
    content = content.replace(/dark:border-white\/10([^a-zA-Z0-9_\-])/g, 'dark:border-white/10 aura:border-white/10 ruby:border-white/10$1');

    // Fix glass cards fallback bg-black/40
    content = content.replace(/dark:bg-black\/40([^a-zA-Z0-9_\-])/g, 'dark:bg-black/40 aura:bg-black/40 ruby:bg-black/40$1');
    content = content.replace(/dark:bg-black\/50([^a-zA-Z0-9_\-])/g, 'dark:bg-black/50 aura:bg-black/50 ruby:bg-black/50$1');
    content = content.replace(/dark:bg-black\/80([^a-zA-Z0-9_\-])/g, 'dark:bg-black/80 aura:bg-black/80 ruby:bg-black/80$1');

    // Fix border fallbacks
    content = content.replace(/dark:border-zinc-800\/80([^a-zA-Z0-9_\-])/g, 'dark:border-zinc-800/80 aura:border-zinc-800/80 ruby:border-zinc-800/80$1');
    content = content.replace(/dark:border-zinc-800([^a-zA-Z0-9_\-])/g, 'dark:border-zinc-800 aura:border-zinc-800 ruby:border-zinc-800$1');

    // Fix background slate 800 or zinc 900
    content = content.replace(/dark:bg-zinc-800\/50([^a-zA-Z0-9_\-])/g, 'dark:bg-zinc-800/50 aura:bg-zinc-800/50 ruby:bg-zinc-800/50$1');
    content = content.replace(/dark:bg-zinc-900\/50([^a-zA-Z0-9_\-])/g, 'dark:bg-zinc-900/50 aura:bg-zinc-900/50 ruby:bg-zinc-900/50$1');

    if (content !== originalContent) {
        fs.writeFileSync(p, content);
        count++;
    }
});

console.log(`Corrigido background fallback missing em ${count} arquivos.`);
