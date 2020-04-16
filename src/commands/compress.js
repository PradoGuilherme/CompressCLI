const tinify = require("tinify");
const path = require("path");

module.exports = async (env) => {
  try {
    if (!env || !env.length || !env[1] || !env[1].f)
      throw new Error("You need to pass the path on '-f' parameter!")

    const source = await tinify.fromFile(env[1].f)
    let dir = env[1].f.split('/')

    let newFileName = './compressed-' + dir[dir.length - 1]
    dir.push(newFileName)
    let newPath = mountPath(dir)

    await source.toFile(newPath)
    console.log('')
    return console.log(' SUCCESS '.bgGreen, 'Saved on ' + newPath, "\n")
  } catch (error) {
    console.log('')
    return console.log(' ERROR '.bgRed, "" + error.message + "", "", "\n")
  }
}

const mountPath = (pathDir, name) => {
  let newPathDir = ['/']
  pathDir.forEach((element, index) => {
    if (pathDir.length - 2 > index && element)
      newPathDir.push(element)
  });

  newPathDir.push(pathDir[pathDir.length - 1])
  return path.join.apply(null, newPathDir)
}