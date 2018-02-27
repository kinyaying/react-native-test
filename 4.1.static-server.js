/*
 * 访问web服务静态资源，一般响应有三种情况
 * 1、访问文本，如js, css, png, jpg
 * 2、访问静态目录
 * 3、找不到资源，抛出404错误
 */

const Koa = require('koa')
const path = require('path')
const content = require('./util/content')
const mimes = require('./util/mimes')

const app = new Koa()

const staticPath = './static'

//解析资源类型
function parseMime(url) {
    let extName = path.extname(url)
    extName = extName ? extName.slice(1) : 'unknown'
    return mimes[extName]
}

app.use(async ctx => {
    let fullStaticPath = path.join(__dirname, staticPath)
    let _content = await content(ctx, fullStaticPath)
    let _mime = parseMime(ctx.url)
    if(_mime) {
        ctx.type = _mime
    }

    if (_mime && _mime.indexOf('image/') >= 0) {
        ctx.res.writeHead(200)
        ctx.res.write(_content, 'binary')
        ctx.res.end()
    } else {
        ctx.body = _content
    }
})

app.listen(3000)
