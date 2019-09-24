#!/usr/bin/env node

const {execFile} = require('child_process');
const {promisify} = require('util');
const serve = require('./index.js');

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

serve({callback});
