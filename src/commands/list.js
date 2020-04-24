const fs = require('fs')
const filter = require('../utils/filter')
const spinner = require('ora')('Loading...')

module.exports = async (env) => {
  try {
    console.log()
    spinner.text = 'Searching...'
    spinner.start()

    const files = fs.readdirSync(env[1].d)
    spinner.succeed()
    console.log()

    spinner.text = 'Filtering just images...'
    spinner.start()
    let filesFiltered = filter(files)

    if (!filesFiltered || !filesFiltered.length) {
      spinner.stop()
      throw new Error('No images on this directory!')
    }

    spinner.succeed()

    console.log('')
    console.log(' INFO '.bgYellow, "Count files:", filesFiltered.length, "\n")

    console.log('List of files: ')
    filesFiltered.forEach((file, index) => {
      console.log("Name:", file)
    })

    console.log('')
    console.log(' SUCCESS '.bgGreen, "\n")

  } catch (error) {
    return console.log(' ERROR '.bgRed, "" + error.message + "", "", "\n")
  }
}