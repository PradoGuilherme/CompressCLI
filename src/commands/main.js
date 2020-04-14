const helpCommand = require('./help')
const configureCommand = require('./configure')

module.exports = {
    help: helpCommand,
    configure: configureCommand.configure,
    list: function () {
        console.log('list')
    }
}