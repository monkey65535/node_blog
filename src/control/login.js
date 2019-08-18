const loginCheck = (username, password) => {
    if (username && password && username.trim() === 'zhangsan' && password.trim() === '1234') {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    loginCheck
}