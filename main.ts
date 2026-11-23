// news-image-20261122 entry: copies the front-page image beside this file
// to /output/entry.png (JPEG bytes under the entry.png name, as the rules allow).
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
console.log('entry.png written to', outDir);
