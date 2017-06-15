const https = require('follow-redirects').https;
const fs = require('fs');
const AdmZip = require('adm-zip');
const execFile = require('child_process').execFile;

function startChromium() {
  const chromium = '/usr/bin/google-chrome-beta';
  if (!fs.existsSync(chromium)) {
    console.error('Cannot find chromium');
    return false;
  }

  execFile(chromium, ['--headless', '--disable-gpu', '--remote-debugging-port=19222']);
  return true;
}

module.exports = startChromium;
