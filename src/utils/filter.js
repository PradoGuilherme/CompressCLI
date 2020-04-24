const path = require('path')

module.exports = (files) => {
  return files.filter(file => {
    let ext = path.extname(file).toLowerCase();
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg')
      return file;
  });
}