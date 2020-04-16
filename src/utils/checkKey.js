const fs = require('fs')

module.exports = {
  checkKey: () => fs.existsSync('./.configure.json'),
  getKey: () => {
    return new Promise((resolve, reject) => {
      fs.readFile('./.configure.json', 'utf8', (err, data) => {
        if (err) throw err;
        resolve(data)
      });
    });
  }
} 