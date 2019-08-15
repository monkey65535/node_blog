// 获取blog列表
const getList = (auth, keyword) => {
    return [{
            id: 1,
            title: '标题1',
            conetnt: '内容1',
            createTime: 1231231231231,
            author: 'zhangsan'
        },
        {
            id: 2,
            title: '标题2',
            conetnt: '内容2',
            createTime: 1231231231231,
            author: 'lisi'
        }
    ]
}

const getDetail = (id) => {
    return [{
        id: 1,
        title: '标题1',
        conetnt: '内容1',
        createTime: 1231231231231,
        author: 'zhangsan'
    }]
}
const newBlog = (blogData = {}) => {
    console.log('newBlog blogData...', blogData);
    return {
        id: 3
    }
}
module.exports = {
    getList,
    getDetail,
    newBlog
}