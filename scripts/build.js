'use strict';
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'dist');
fs.mkdirSync(outDir, { recursive: true });
const payload = {
  builtAt: new Date().toISOString(),
  runner: process.env.RUNNER_OS || 'local',
  sha: process.env.GITHUB_SHA || 'local',
};
fs.writeFileSync(path.join(outDir, 'build-info.json'), JSON.stringify(payload, null, 2));
fs.copyFileSync(path.join(__dirname, '..', 'src', 'index.js'), path.join(outDir, 'index.js'));
console.log('build ok → dist/');
