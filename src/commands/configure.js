const readlineSync = require('readline-sync')
const fs = require('fs')

module.exports = {
  configure: () => {
    try {
      console.log('\n')
      const key = readlineSync.question('Please, enter you TinyPNG key? ');

      if (!key) 
        throw new Error('Please provide your TinyPNG API Key!')

      fs.writeFile('.configure.json', JSON.stringify({ 'key': key }, 2, 2), (err) => {
        if (err) return console.log(err);
        console.log('\n', ' SUCCESS '.bgGreen, 'API Key successfully saved.', "\n")
      });

    } catch (error) {
      return console.log('\n ERROR '.bgRed, "" + error.message + "", "", "\n")
    }
  }
}