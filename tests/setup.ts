import { afterAll } from 'vitest';
import fs from 'fs/promises';

afterAll(async () => {
  await fs.rm('.cache', { recursive: true, force: true });
});
