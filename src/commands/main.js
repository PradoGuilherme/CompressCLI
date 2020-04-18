const helpCommand = require('./help')
const configureCommand = require('./configure')
const quotaCommand = require('./quota')
const compressCommand = require('./compress')

module.exports = {
    help: helpCommand,
    configure: configureCommand.configure,
    quota: quotaCommand,
    compress: compressCommand
}