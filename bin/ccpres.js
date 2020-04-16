#!/usr/bin/env node

const packageJson = require('../package.json');
const colors = require('colors');
const mainCommands = require('../src/commands/main');
const { checkKey, getKey } = require('../src/utils/checkKey');
const validateCommands = require('../src/utils/validate');
const argv = require('minimist')(process.argv.slice(2));
const tinify = require("tinify");

const getCommands = function () {
  const objectArray = Object.entries(argv);

  let result = objectArray.map(([key, value]) => {
    if (key !== '_')
      argv._.push(key)
    return {
      [key]: value
    }
  });

  return result;
}

const configureKey = async () => {
  const data = JSON.parse(await getKey())
  tinify.key = data.key;
}

const commands = getCommands();

(async () => {
  const showIntro = () => {
    console.log("")
    console.log("  _____                                                           _____   _        _____  ")
    console.log(" / ____|                                                         / ____| | |      |_   _| ")
    console.log(" | |        ___    _ __ ___    _ __    _ __    ___   ___   ___  | |      | |        | |   ")
    console.log(" | |       / _ \\  | '_ ` _ \\  | '_ \\  | '__|  / _ \\ / __| / __| | |      | |        | |   ")
    console.log(" | |____  | (_) | | | | | | | | |_) | | |    |  __/ \\__ \\ \\__ \\ | |____  | |____   _| |_  ")
    console.log(" \\______|  \\___/  |_| |_| |_| | .__/  |_|     \\___| |___/ |___/  \\_____| |______| |_____| ")
    console.log("                              | |                                                         ")
    console.log("                              |_|                                                         ")
    console.log('\n ___________________________________________________________\n'.green)
    console.log('   Version installed:', colors.green(packageJson.version))
    !checkKey() ? console.log(`   To configure your key, please run: ${colors.green('ccpres configure')}`) : null
    console.log(' ___________________________________________________________\n'.green)
  }

  if (!commands[0]._.length || commands[0]._[0] === 'version')
    return showIntro()

  if (!validateCommands.validate(commands[0]._).length)
    return console.log(colors.bgRed('\n ERROR: '), 'Command not exist!', 'Run', 'ccpress help'.green, 'to check the commands!\n\n')

  try {
    if (checkKey())
      await configureKey()

    await mainCommands[commands[0]._[0]](commands)
  } catch (error) {
    console.log("error", error)
    return console.log(colors.bgRed('\n ERROR '), 'Please try again! Still not working? Open a issue!\n\n')
  }
})()