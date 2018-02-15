function parsePostData(ctx) {
    return new Promise((resolve, reject) => {
        try {
            let postData = ''
            ctx.req.addListener('data', (data) => {
                postData += data
            })
            ctx.req.addListener('end', function () {
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
    console.log(queryStrList)
    for(let [index, queryStr] of queryStrList.entries()) {
        let itemList = queryList.split('=')
        queryData[itemList[0]] = decodeURIComponent(itemList[1])
    }
    return queryData
}