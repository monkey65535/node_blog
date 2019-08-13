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

module.exports = {
    getList
}