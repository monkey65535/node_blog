const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');
const querystring = require('querystring');
const getPostData = (req) => {
    const p = new Promise((reslove, reject) => {
        if (req.method.toUpperCase() !== 'POST') {
            reslove({});
            return;
        }
        if (req.headers['content-type'] !== 'application/json') {
            reslove({});
            return;
        }

        let postData = [];

        req.on('data', chunk => {
            postData.push(chunk);
        })
        req.on('end', () => {
            if (!postData) {
                reslove({});
                return;
            }
            reslove(Buffer.concat(postData).toString());
        })
    });
    return p;
}
const serverHadnle = async (req, res) => {
    try {
        // 设置返回格式为json
        res.setHeader('Content-type', 'application/json');
        // 处理路径和参数
        const url = req.url;
        req.path = url.split('?')[0];
        // 解析query
        req.query = querystring.parse(url.split('?')[1]);
        // 处理postData
        const postData = await getPostData(req);
        if (postData) {
            req.body = postData;
            // 处理blog路由
            const blogData = await handleBlogRouter(req, res)
            if (blogData) {
                res.end(JSON.stringify(blogData));
                return;
            }

            // 处理user路由
            const userData = await handleUserRouter(req, res);
            if (userData) {
                res.end(JSON.stringify(userData));
                return;
            }
            //  404
            res.writeHead(404, {
                "Content-type": "text/plain"
            });
            res.write('404 Not Found');
        }
    } catch (e) {
        throw new Error(e);
    }
};

module.exports = serverHadnle;