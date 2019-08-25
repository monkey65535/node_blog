const env = process.env.NODE_ENV;
// mysql 配置
let MYSQL_CONF;
if (env === 'dev') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '123',
        port: '3306',
        database: 'myblog'
    }
}
if (env === 'prod') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '123',
        port: '3306',
        database: 'myblog'
    }
}

module.exports = {
    MYSQL_CONF
}; 