const fs = require('fs')

module.exports = {
  checkKey: () => fs.existsSync('/tmp/.configure-compress.json'),
  getKey: () => {
    return new Promise((resolve, reject) => {
      fs.readFile('/tmp/.configure-compress.json', 'utf8', (err, data) => {
        if (err) throw err;
        resolve(data)
      });
    });
  }
} 