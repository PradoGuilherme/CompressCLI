module.exports = () => {
    console.log('Usage:'.gray, 'ccpres <cmd> [args]\n')

    console.log('Commands:'.gray)
    console.log('  ccpres list    Show list of images in the folder')
    console.log('  ccpres quota   Show the current quota')
    console.log('  ccpres help    Show helper\n')

    console.log('Options:'.gray)
    console.log('  --help         Show helper')
}