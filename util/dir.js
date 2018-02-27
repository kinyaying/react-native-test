const url = require('url')
const fs = require('fs')
const path = require('path')

// 读取目录内容
const walk = require('./walk')

/*
 * 封装目录内容
 * @param {string} url ctx.url
 * @param {string} reqPath 请求静态资源的完整本地路径
 * @return {string} 返回目录内容，封装成html
 */
function dir(url, reqPath) {
    let contentList =  walk(reqPath)
    let html = '<ul>'
    for(let [index, item] of contentList.entries()) {
        html = `${html}<li><a href="${url === '/' ? '' : url}/${item}">${item}</a>`
    }
    html = `${html}</ul>`
    return html
}

module.exports = dir
