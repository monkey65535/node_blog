const handleUserRouter = (req,res) => {
    const method = req.method;
    // 获取blog列表
    if(method.toUpperCase() === 'POST' && req.path === '/api/user/login'){
        return {
            message:'这是登录的接口'
        }
    }
   
}
module.exports = handleUserRouter;