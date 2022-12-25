'use strict';
// 获取数据库引用
const db = uniCloud.database()
const $ = db.command.aggregate
exports.main = async (event, context) => {
  
  const {
    user_id,
    article_id
  } = event
  
  // 获取用户信息
  let user = await db.collection('user').doc(user_id).get()
  user = user.data[0]
  let list = await db.collection('article')
  .aggregate()
  .addFields({
    // 是否关注作者
    is_author_like: $.in(['$author.id', user.author_likes_ids]),
    // 是否收藏文章
    is_like: $.in(['$_id', user.article_likes_ids]),
    // 是否点赞
    is_thumbs_up: $.in(['$_id', user.thumbs_up_article_ids])
  })
  // match 根据前台传递过来参数来筛选数据
  .match({
    _id: article_id
  })
  // project 操作哪些字段返回 哪些字段不返回
  .project({
    // 不返回评论
    coments: 0
  })
  .end()
	
	//返回数据给客户端
	return {
    code: 200,
    msg: '数据请求成功',
    data: list.data[0]
  }
};
