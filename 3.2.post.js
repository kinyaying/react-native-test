const Koa = require('koa')
const app = new Koa()

app.use( async (ctx) => {
    if (ctx.url === '/' && ctx.method === 'GET') {
        let html = `
            <h1>koa2 post demo</h1>
            <form method="post" action="/">
                <p>username</p>
                <input name="nickName" /><br>
                <p>nickname</p>
                <input name="nickname" /><br>
                <p>email</p>
                <input name="email" /><br>
                <button type="submit">submit</button>
            </form>
        `
        ctx.body = html
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        console.log('ctx:::::', ctx)
        let postData = await parsePostData(ctx).then((resolve) => {
            console.log('parse data succeed!', resolve)
            return resolve
        }).catch(err => {

        })

        ctx.body = postData
    } else {
        ctx.body = '<h1>404!!!</h1>'
    }
})

function parsePostData(ctx) {
    return new Promise((resolve, reject) => {
        try {
            let postdata = ''
            // 为请求添加监听事件的回调函数
            ctx.req.addListener('data', data => {
                postdata += data
            })
            ctx.req.addListener('end', () => {
                let parseData = parseQueryStr(postdata)
                resolve(parseData)
            })
        } catch (err) {
            reject(err)
        }
    })
}

function parseQueryStr(queryStr) {
    let queryData = {}
    let queryStrList = queryStr.split('&')
    for(let [index, queryStr] of queryStrList.entries()) {
        let itemList = queryStr.split('=')
        queryData[itemList[0]] = decodeURIComponent(itemList[1])
        console.log('queryData=====>', decodeURIComponent(itemList[1]),itemList[1])
    }
    console.log('encodeURIComponent===>', encodeURI('hello/:'), encodeURIComponent('hello:/'))

    return queryData
}

app.listen(3000, () => {
    console.log('[demo] request post is starting at port 3000')
})
