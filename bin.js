
const {execFile} = require('child_process');
const {promisify} = require('util');
const serve = require('./index.js');

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
