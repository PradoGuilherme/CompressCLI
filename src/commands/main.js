const helpCommand = require('./help')
const configureCommand = require('./configure')
const quotaCommand = require('./quota')
const compressCommand = require('./compress')
const listCommand = require('./list')

module.exports = {
    list: listCommand,
    help: helpCommand,
    configure: configureCommand.configure,
    quota: quotaCommand,
    compress: compressCommand
}