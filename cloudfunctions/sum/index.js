// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init()
// 云函数入口函数
exports.main = (event, context) => {
	console.log(event)
	console.log(context)
	return {
		sum: event.a + event.b
	}
}
