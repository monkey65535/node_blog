const {exec} = require('../DB/mysql')
// 获取blog列表
const getList = (author, keyword) => {
    let sql = `SELECT * FROM blogs where 1=1 `;
    if (author) {
        sql += `and author='${author}' `;
    }
    if (keyword) {
        sql += `and title like '%${keyword}%' `;
    }
    sql += 'order by createtime desc';
    return exec(sql);
}

const getDetail = (id) => {
    let sql = `SELECT * FROM blogs where id='${id}' `;
    return exec(sql);
}
const newBlog = (blogData = {}) => {
    const {title, content, author} = blogData;
    const createTime = Date.now();
    let sql = `insert into blogs (title, content, createtime, author) values ('${title}','${content}',${createTime},'${author}') `;
    return exec(sql)
        .then(res => {
            return {id: res.insertId}
        })
}
const updateBlog = (id, blogData = {}) => {
    const {title, content} = blogData;
    const createTime = Date.now();
    let sql = `UPDATE blogs SET title='${title}',content='${content}', createtime=${createTime} WHERE id='${id}'`;
    exec(sql)
        .then(res => {
            if (res.affectedRows > 0) {
                return true;
            }
            return false;
        });
    return true;
}

const deleteBlog = (id, author) => {
    let sql = `DELETE from blogs where id='${id}'and author='${author}'`;
    return exec(sql)
        .then(res => {
            if (res.affectedRows > 0) {
                return true;
            }

            return false;
        });
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog
}