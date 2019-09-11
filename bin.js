
import {execFile} from 'child_process';
import {promisify} from 'util';

// might be from using in conjunction with @micburks/jspm-loader
import serve from '../@micburks/serve/index.js';

const run = promisify(execFile);
const command = process.argv.slice(2);

async function callback(req) {
  try {
    const {stdout} = await run(
      'node',
      ['--experimental-modules', '--loader', '@micburks/jspm-loader', ...command],
      {cwd: process.cwd()}
    );
    return stdout;
  } catch (e) {
    console.error(e);
    return 'error';
  }
}

serve({callback});
