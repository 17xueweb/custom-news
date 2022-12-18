'use strict';
const db = uniCloud.database()
// db.command数据库操作符
const dbCmd = db.command
exports.main = async (event, context) => {
  // 哪个用户(user_id)/哪篇文章(article_id)
  const {
    user_id,
    article_id
  } = event
  
  // 获取用户信息
  // doc 获取id为某个值的 当前表里的内容
  const userinfo = await db.collection('user').doc(user_id).get()
  const article_id_ids = userinfo.data[0].article_likes_ids
  
  let dbCmdFuns = null
  // 判断文章数组是否存在这个文章id
  if(article_id_ids.includes(article_id)) {
    dbCmdFuns = dbCmd.pull(article_id)
  }else {
    dbCmdFuns = dbCmd.addToSet(article_id)
  }
  
  // 更新 addToSet 更新某个id
  await db.collection('user').doc(user_id).update({
    article_likes_ids: dbCmdFuns
  })
  
	//event为客户端上传的参数
	console.log('event : ', event)
	
	//返回数据给客户端
	return {
    code: 200,
    msg: '数据请求成功',
    data: userinfo.data[0]
  }
};
