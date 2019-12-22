#!/usr/bin/env node

import {execFile} from 'child_process';
import {promisify} from 'util';
import serve from './index.js';

const run = promisify(execFile);
const command = process.argv.slice(2);

async function callback(path) {
  try {
    const {stdout} = await run(
      'node',
      ['--experimental-modules', '--loader', '@micburks/jspm-loader', ...command, path],
      {cwd: process.cwd()}
    );
    return stdout;
  } catch (error) {
    console.error(error);
    return error;
  }
}

const server = serve({callback});

process.on('exit', () => {
  server.close();
});
