const fs = require('fs')

/*
 * 读取文件方法
 * @param {string} filePath 文件的绝对路径
 * @return {string | binary}
 */
function file(filePath) {
    let content = fs.readFileSync(filePath, 'binary')
    return content
}

module.exports = file
