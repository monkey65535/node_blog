const {
    SuccessModel,
    ErrorModel
} = require('../model/resModel');
const {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog
} = require('../control/blog');


const handleBlogRouter = async (req, res) => {
    try {
        const method = req.method;
        const id = req.query.id || '';
        // 获取blog列表
        if (method.toUpperCase() === 'GET' && req.path === '/api/blog/list') {
            const author = req.query.author || '';
            const keyword = req.query.keyword || '';
            const listData = await getList(author, keyword);
            if (listData) {
                return new SuccessModel(listData, '获取blog列表成功')
            }
        }
        // 获取blog详情
        if (method.toUpperCase() === 'GET' && req.path === '/api/blog/detail') {
            const rows = await getDetail(id);
            return new SuccessModel(rows[0], '获取blog详情')
        }
        //  新增blog
        if (method.toUpperCase() === 'POST' && req.path === '/api/blog/add') {
            const author = 'zhangsan';
            const blogBody = JSON.parse(req.body);
            blogBody.author = author;
            const data = await newBlog(blogBody);
            return new SuccessModel(data, '新建blog');
        }
        //  更新blog
        if (method.toUpperCase() === 'POST' && req.path === '/api/blog/update') {
            const result = await updateBlog(id, JSON.parse(req.body));
            if (result) {
                return new SuccessModel(result, '更新完成');
            } else {
                return new ErrorModel(result, '更新失败');
            }
        }
        // 删除blog
        if (method.toUpperCase() === 'GET' && req.path === '/api/blog/delete') {
            const author = 'zhangsan';
            const result = await deleteBlog(id, author);
            if (result) {
                return new SuccessModel(result, '删除完成');
            } else {
                return new ErrorModel(result, '删除失败');
            }
        }
    } catch (e) {
        return new ErrorModel(e, 'error');
        throw new Error(e);
    }
}
module.exports = handleBlogRouter;