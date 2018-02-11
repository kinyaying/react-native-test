const koa = require('koa')
const fs = require('fs')
const Router = require('koa-router')

const app = new koa()
var logger = require('./middleware/logger-async.js')

function render( page ) {
    return new Promise(( resolve, reject ) => {
        let viewUrl = `./view/${page}`
        fs.readFile(viewUrl, "binary", ( err, data ) => {
        if ( err ) {
            reject( err )
        } else {
            resolve( data )
        }
    })
  })
}


async function route(url) {
    let view = '404.html'
    switch( url ) {
        case '/':
            view = 'index.html'
            break
        case '/index':
            view = 'index.html'
            break
        case '/todo':
            view = 'todo.html'
            break
        default:
            break
    }
    let html = await render(view)
    return html
}

app.use(logger())

app.use(async (ctx) => {
  let url = ctx.request.url
  let html = await route(url)
  ctx.body = html
})

app.listen(3001)
console.log('[demo] start-quick is starting at port 3001')
