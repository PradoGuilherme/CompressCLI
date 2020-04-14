const packageJson = require('../package.json');
const colors = require('colors');

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
    console.log(`   To configure your key, please run: ${colors.green('ccpres configure')}`)
    console.log(' ___________________________________________________________\n'.green)
}

showIntro()