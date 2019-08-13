const {
    SuccessModel,
    ErrorModel
} = require('../model/resModel');
const {
    getList
} = require('../control/blog');


const handleBlogRouter = (req, res) => {
    const method = req.method;
    // 获取blog列表
    if (method.toUpperCase() === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || '';
        const keyword = req.query.keyword || '';
        const listData = getList(author, keyword);
        return new SuccessModel(listData, '获取blog列表成功')
    }
    // 获取blog详情
    if (method.toUpperCase() === 'GET' && req.path === '/api/blog/detail') {
        return {
            message: '获取blog详情'
        }
    }
    //  新增blog
    if (method.toUpperCase() === 'GET' && req.path === '/api/blog/add') {
        return {
            message: '新增blog'
        }
    }
    //  更新blog
    if (method.toUpperCase() === 'GET' && req.path === '/api/blog/update') {
        return {
            message: '更新blog'
        }
    }
    // 删除blog
    if (method.toUpperCase() === 'GET' && req.path === '/api/blog/delete') {
        return {
            message: '删除blog'
        }
    }
}
module.exports = handleBlogRouter;