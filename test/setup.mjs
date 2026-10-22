// Tests never write to the user's ~/.huashu-motion (experience, soundtracks): every run gets its own home.
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
process.env.OM_HOME = mkdtempSync(join(tmpdir(), 'om-home-'));
