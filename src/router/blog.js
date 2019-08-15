const {
    SuccessModel,
    ErrorModel
} = require('../model/resModel');
const {
    getList,
    getDetail,
    newBlog
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
        const id = req.query.id || '';
        const datailData = getDetail(id);
        return new SuccessModel(datailData, '获取blog详情')
    }
    //  新增blog
    if (method.toUpperCase() === 'POST' && req.path === '/api/blog/add') {
        const blogBody = req.body;
        const data = newBlog(req.body);
        return new SuccessModel(data,'新建blog');
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