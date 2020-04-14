const commands = ['help', 'version', 'configure', 'list']

module.exports = {
  validate: (command) => {
    return commands.filter(e => e === command[0])
  }
}