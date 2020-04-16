const tinify = require("tinify");

module.exports = () => {
  try {
    const compressionsThisMonth = tinify.compressionCount;
    console.log('')
    return console.log(' SUCCESS '.bgGreen, 'The amount used that month was:', compressionsThisMonth ? compressionsThisMonth : 0 + "/500", "\n")
  } catch (error) {
    console.log('')
    return console.log(' ERROR '.bgRed, "" + error.message + "", "", "\n")
  }
}