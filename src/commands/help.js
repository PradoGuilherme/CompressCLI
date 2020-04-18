module.exports = () => {
    console.log('Usage:'.gray, 'ccpres <cmd> [args]\n')

    console.log('Commands:'.gray)
    console.log('  ccpres list        Show list of images in the folder')
    console.log('  ccpres compress    Compress the image and save in the same folder but with a prefix on the filename')
    console.log('  ccpres quota       Show the current quota')
    console.log('  ccpres help        Show helper\n')

    console.log('Options:'.gray)
    console.log('  --help         Show helper')
    console.log('  -f             The filename with the entire directory')
    console.log('  -d             The directory path with the files')
}