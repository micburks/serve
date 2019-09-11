
import serve from './index.js';
import {execFile} from 'child_process';
import {promisify} from 'util';

const run = promisify(execFile);
const command = process.argv.slice(2);

async function callback(req) {
  try {
    const {stdout} = await run('node', command);
    return stdout;
  } catch (e) {
    console.error(e);
    return 'error';
  }
}

serve({callback});
