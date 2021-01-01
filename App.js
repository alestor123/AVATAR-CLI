#!/usr/bin/env node

var got = require('got'),
name = process.argv[2] || 'github',
terminalImage = require('terminal-image');
(async () => {console.log(await terminalImage.buffer(await got(`http://github.com/${name}.png`).buffer()));})();