'use strict';
// 1. 获取数据库的引用
const db = uniCloud.database()
// 声明一个聚合的操作符
const $ = db.command.aggregate
exports.main = async (event, context) => {
  // 接收分类,通过分类去筛选数据 event可以接收参数
  const {
    user_id,
    value
  } = event
  // 获取用户表
  // title: new RegExp(value) 根据名称来模糊匹配
  const userinfo = await db.collection('user').doc(user_id).get()
  const article_likes_ids = userinfo.data[0].article_likes_ids
  const list = await db.collection('article')
    .aggregate()
    .addFields({
      is_like: $.in(['$_id', article_likes_ids])
    })
    .project({
      content: false
    })
    .match({ 
      title: new RegExp(value)
    })
    .end()

  //返回数据给客户端
  return {
    code: 200,
    msg: '数据请求成功',
    data: list.data
  }
};
