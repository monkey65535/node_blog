const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');
const querystring = require('querystring');
const serverHadnle = (req, res) => {
    // 设置返回格式为json
    res.setHeader('Content-type', 'application/json');
    // 处理路径和参数
    const url = req.url;
    req.path = url.split('?')[0];
    req.query = querystring.parse(url.split('?')[1]);
    // 处理blog路由
    const blogData = handleBlogRouter(req, res);
    if (blogData) {
        res.end(JSON.stringify(blogData));
        return;
    }
    // 处理user路由
    const userData = handleUserRouter(req, res);
    if(userData){
        res.end(JSON.stringify(userData));
        return;
    }
    //  404
    res.writeHead(404,{"Content-type":"text/plain"});
    res.write('404 Not Found');
}
module.exports = serverHadnle;