/* eslint-disable id-length */
import * as tsImport from '../src/main.js';

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'ava';
import fs from 'fs/promises';

const filePath = fileURLToPath(import.meta.url);
const directoryPath = dirname(filePath);

test(`import-without-cache`, async (t) => {
    const loaded = await tsImport.load(`${directoryPath}/assets/library-using/library-using.ts`, {
        useCache: false,
    });

    t.truthy(loaded.result);

    const cacheDirExists = await fs.access(`${directoryPath}/.cache`).then(() => true).catch(() => false);
    t.false(cacheDirExists);
});
