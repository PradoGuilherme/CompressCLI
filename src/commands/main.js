const helpCommand = require('./help')
const configureCommand = require('./configure')
const quotaCommand = require('./quota')

module.exports = {
    help: helpCommand,
    configure: configureCommand.configure,
    quota: quotaCommand,
    list: function () {
        console.log('list')
    }
}