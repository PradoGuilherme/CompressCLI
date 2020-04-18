const tinify = require("tinify");
const path = require("path");
const fs = require('fs');
const spinner = require('ora')('Loading...')

module.exports = async (env) => {
  try {
    if (!tinify._key)
      throw new Error('Please configure your Tinify key!')
    spinner.text = 'Loading...'
    spinner.start()
    if (env && env.length && env[1] && env[1].d) {
      await checkFolderAndCompressFile(env);
      spinner.stop()
      console.log()
      return console.log(' SUCCESS '.bgGreen, 'Saved on ' + env[1].d + '/compressed', "\n")
    }

    if (!env || !env.length || !env[1] || !env[1].f)
      throw new Error("You need to pass the path on '-f' parameter!")

    spinner.succeed()

    let dir = env[1].f.split('/')

    createCompressFolder(mountPath(dir, 1));

    spinner.text = 'Compressing file'
    spinner.start()

    const source = tinify.fromFile(env[1].f)

    dir.splice(dir.length - 1, 0, 'compressed')
    let newPath = mountPath(dir, 0)

    await source.toFile(newPath)

    spinner.succeed()

    console.log('')
    return console.log(' SUCCESS '.bgGreen, 'Saved on ' + newPath, "\n")
  } catch (error) {
    spinner.stop()
    console.log('')
    return console.log(' ERROR '.bgRed, "" + error.message + "", "", "\n")
  }
}

const mountPath = (pathDir, difference) => {
  let newPathDir = ['/']
  pathDir.forEach((element, index) => {
    if (pathDir.length - difference > index && element)
      newPathDir.push(element)
  });

  return path.join.apply(null, newPathDir)
}

const checkFolderAndCompressFile = async (env) => {
  let files = fs.readdirSync(env[1].d)
  spinner.succeed()

  createCompressFolder(env[1].d);

  let filesFiltered = filterImages(files)

  console.log('')
  console.log(' WORKING '.bgYellow, 'Files founded: ' + filesFiltered.length, "\n")

  for (fileUniq of filesFiltered) {
    spinner.start()
    spinner.text = 'Compressing: ' + fileUniq
    let filr = tinify.fromFile(env[1].d + '/' + fileUniq);

    await filr.toFile(env[1].d + '/compressed/' + fileUniq);
    spinner.succeed()
  }
}

const filterImages = (files) => {
  return files.filter(file => {
    let ext = path.extname(file).toLowerCase();
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg')
      return file;
  });
}

const createCompressFolder = (path) => {
  if (!fs.existsSync(path + '/compressed/')) {
    spinner.start();
    spinner.text = 'Creating directory /compressed on ' + path;
    fs.mkdirSync(path + '/compressed/');
    spinner.succeed();
  }
}

