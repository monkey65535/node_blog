class BaseModel {
    constructor(data, message) {
        if (typeof data === 'string') {
            // 判断data为string，则直接将message成data，其他的都设置为null
            this.message = data;
            data = null;
            message = null;
        }
        if (data) {
            this.data = data;
        }
        if (message) {
            this.message = message;
        }
    }
}
// 正确信息类
class SuccessModel extends BaseModel {
    constructor(data, message) {
        super(data, message);
        this.code = 200;
    }
}

// 错误信息类
class ErrorModel extends BaseModel {
    constructor(data, message) {
        super(data, message);
        this.code = -1;
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}