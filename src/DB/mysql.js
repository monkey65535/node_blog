const mysql = require('mysql');
const {MYSQL_CONF} = require('../conf/db');

// 创建链接对象
const con = mysql.createConnection(MYSQL_CONF);
// 链接数据库
con.connect();

// 执行sql的函数
function exec(sql) {
    return new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if (err) {
                reject(err);
                con.end();
                return;
            }
            console.log(result);
            resolve(result);
            con.end();
        })
    })
}

module.exports = {
    exec
};