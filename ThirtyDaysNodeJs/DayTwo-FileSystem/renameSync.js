const fs = require('fs')

fs.renameSync('./assets/tober.txt', './assets/renamedSync.txt');

console.log("Renamed using Sync");