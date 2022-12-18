'use strict';
// 1. 获取数据库的引用
const db = uniCloud.database()
exports.main = async (event, context) => {
  // 接收分类,通过分类去筛选数据 event可以接收参数
  const { 
    name,
    page = 1,
    pageSize = 10
     } = event
  
  // 处理全部
  let matchObj = {}
  if( name !== '全部') {
    matchObj = {
      classify: name
    }
  }
  
  // 聚合：更精细化去处理数据 求和、分组、指定返回哪些字段
  // aggregate 获取数据库集合的聚合操作实例
  // match 根据条件过滤文档，并且把符合条件的文档传递给下一个流水线阶段,筛选classify 并且把name值传进来
  // project 指定某些字段返回到数据中或者某些字段不去返回到数据中 跟下面的 field 使用方法很接近，不要content内容
  // end 标志聚合操作定义完成，发起实际聚合操作
  // skip 指定一个正整数，跳过对应数量的文档，输出剩下的文档。
  // limit: 限制输出到下一阶段的记录数。
  const list = await db.collection('article')
        .aggregate()
        .match(matchObj)
        .project({
          content: false
        })
        // 计算出我们要跳过多少数据
        .skip(pageSize*(page-1))
        // 控制每次返回多少数据 10条
        .limit(pageSize)
        .end()
  
  

 // 2. 获取数据表 field过滤掉content字段
  // const list = await db.collection('article').field({
  //   // true 表示只返回这个字段， false 表示不返回这个字段
  //   content: false
  // }).get()
	
	//返回数据给客户端
	return {
    code: 200,
    msg: '数据请求成功',
    data: list.data
  }
};
