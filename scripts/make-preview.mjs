import fs from 'node:fs';
import path from 'node:path';
const root = process.cwd();
const dist = path.join(root, 'dist');
let html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const embed = (name, mime) =>
  `data:${mime};base64,${fs.readFileSync(path.join(root, 'public', name)).toString('base64')}`;
html = html.replace(
  /<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g,
  (_, source) =>
    `<style>${fs.readFileSync(path.join(dist, source), 'utf8').replace(/url\(([^)]+)\)/g,(match,value)=>{
      const asset=value.replace(/["']/g,'').replace(/^(\.\.\/|\.\/|\/)+/,'');
      if(asset.startsWith('fonts/') && fs.existsSync(path.join(root,'public',asset)))return `url("${embed(asset,asset.endsWith('.ttf')?'font/ttf':'font/woff2')}")`;
      return match;
    })}</style>`,
);
html = html.replace(
  /<script[^>]*src="([^"]+)"[^>]*><\/script>/g,
  (_, source) => {
    let js = fs.readFileSync(path.join(dist, source), 'utf8');
    // Embed any local images/PDFs used in the compiled app, including renamed assets.
    function walk(dir) {
      return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const full = path.join(dir, entry.name);
        return entry.isDirectory() ? walk(full) : [full];
      });
    }
    for (const full of walk(path.join(root, 'public'))) {
      const file = path
        .relative(path.join(root, 'public'), full)
        .split(path.sep)
        .join('/');
      const mime = {
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.webp': 'image/webp',
        '.svg': 'image/svg+xml',
        '.pdf': 'application/pdf',
      }[path.extname(file).toLowerCase()];
      if (mime && js.includes(file))
        js = js.replaceAll(file, embed(file, mime));
    }
    return `<script type="module">${js.replaceAll('</script', '<\\/script')}</script>`;
  },
);
html = html.replace('./favicon.svg', embed('favicon.svg', 'image/svg+xml'));
fs.writeFileSync(path.join(root, 'portfolio-preview.html'), html);
console.log('Created self-contained portfolio-preview.html');
