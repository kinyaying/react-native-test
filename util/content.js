const path = require('path')
const fs = require('fs')

// 读取目录内容
const dir = require('./dir')
// 读取文件内容
const file = require('./file')

/*
 * 获取静态资源
 * @param {object} ctx koa上下文
 * @param {string} 静态资源目录在本地的绝对路径
 * @return {string} 请求获取到的本地内容
 */

async function content( ctx, fullStaticPath ) {
    let reqPath = path.join(fullStaticPath, ctx.url)
    let exist = fs.existsSync(reqPath)

    let content = ''

    if(!exist) {
        content = '404 not found!!!'
    } else {
        let stat = fs.statSync(reqPath)
        if(stat.isDirectory()) {
            contet = dir(ctx.url, reqPath)
        } else {
            content = await file(reqPath)
        }
    }
    return content
}

module.exports = content
