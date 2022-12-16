'use strict';
// 1. 获取数据库的引用
const db = uniCloud.database()
exports.main = async (event, context) => {

 // 2. 获取数据表 field过滤掉content字段
  const list = await db.collection('article').field({
    // true 表示只返回这个字段， false 表示不返回这个字段
    content: false
  }).get()
	
	//返回数据给客户端
	return {
    code: 200,
    msg: '数据请求成功',
    data: list.data
  }
};
