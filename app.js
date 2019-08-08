const serverHadnle = (req, res) => {
    // 设置返回格式为json
    res.setHeaders('Content-type','application/json');
    const resData = {
        name:'aaa',
        site:'localhost',
        env:process.env.NODE_ENV
    }
    res.end(JSON.parse(resData));
}
module.exports = serverHadnle;