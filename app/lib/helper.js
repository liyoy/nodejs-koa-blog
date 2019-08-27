class Resolve {
    success(msg = 'success', errorCode = 0, code = 200) {
        return {
            msg,
            code,
            errorCode
        }
    }

    json(data, msg = 'success', errorCode = 0, code = 200) {
        return {
            code,
            msg,
            errorCode,
            data
        }
    }
}

/**
 * 评论列表列表创建树结构
 * @param list 评论列表
 * @returns {*}
 */
async function CommentsTree(list) {
    // 对源数据深度克隆
    let cloneData = await deepClone(list);

    return cloneData.filter(father => {
        let subCommontsData = cloneData.filter(child => {
            //返回每一项的子级数组
            return father.id === child.parent_id
        });

        if (subCommontsData.length > 0) {
            //如果存在子级，则给父级添加一个children属性，并赋值
            father.setDataValue('sub_comments', subCommontsData);
        }

        //返回第一层
        return father.parent_id === 0;
    });
}


/**
 * 深拷贝
 * @param obj
 * @return {Array|*}
 */
function deepClone(obj) {
    // 判断传入的参数是否为对象
    function isObject(o) {
        return Object.prototype.toString.call(o) === '[object Object]';
    }

    if (!isObject(obj)) {
        return obj;
    }

    var newObj = isObject(obj) ? {} : [];

    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            // 每次递归调用的函数都是全新的上下文
            newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key];
        }
    }

    return newObj;
}

module.exports = {
    Resolve,
    CommentsTree
}
