const tinify = require("tinify");

module.exports = () => {
  try {
    if (!tinify._key)
      throw new Error('Please configure your Tinify key!')

    const compressionsThisMonth = tinify.compressionCount;
    console.log('')
    return console.log(' SUCCESS '.bgGreen, 'The amount used that month was:', compressionsThisMonth ? compressionsThisMonth : 0 + "/500", "\n")
  } catch (error) {
    console.log('')
    return console.log(' ERROR '.bgRed, "" + error.message + "", "", "\n")
  }
}