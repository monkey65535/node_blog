const {login} = require('../control/login')
const {SuccessModel, ErrorModel} = require('../model/resModel');
const handleUserRouter = async (req, res) => {
    try {
        const method = req.method;
        // 获取blog列表
        if (method.toUpperCase() === 'POST' && req.path === '/api/user/login') {
            const resultData = req.body;
            const {username, password} = JSON.parse(resultData);
            const result = await login(username, password);
            if (result.username) {
                // 操作cookie
                res.setHeader('Set-Cookie',`username=${result.username};path=/`)
                return new SuccessModel(result, '登录成功');
            } else {
                return new ErrorModel(result, '登录失败');
            }
        }
    } catch (e) {
        throw new Error(e);
    }
}
module.exports = handleUserRouter;