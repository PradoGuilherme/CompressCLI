const commands = ['help', 'version', 'configure', 'list', 'quota', 'compress']

module.exports = {
  validate: (command) => {
    return commands.filter(e => e === command[0])
  }
}