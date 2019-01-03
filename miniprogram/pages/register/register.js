// miniprogram/pages/register/register.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		objectArray: [
			{ id: 5, unique: 'unique_5' },
			{ id: 4, unique: 'unique_4' },
			{ id: 3, unique: 'unique_3' },
			{ id: 2, unique: 'unique_2' },
			{ id: 1, unique: 'unique_1' },
			{ id: 0, unique: 'unique_0' },
		],
		numberArray: [1, 2, 3, 4]
	},
	switch: function (e) {
		const length = this.data.objectArray.length
		for (let i = 0; i < length; ++i) {
			const x = Math.floor(Math.random() * length)
			const y = Math.floor(Math.random() * length)
			const temp = this.data.objectArray[x]
			this.data.objectArray[x] = this.data.objectArray[y]
			this.data.objectArray[y] = temp
		}
		console.log(length)
		this.setData({
			objectArray: this.data.objectArray
		})
	},
	addToFront: function (e) {
		const length = this.data.objectArray.length
		this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(this.data.objectArray)
		this.setData({
			objectArray: this.data.objectArray
		})
	},
	addNumberToFront: function (e) {
		this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
		this.setData({
			numberArray: this.data.numberArray
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		//console.log(array);
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {
		
	},
	
	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {
		
	},
	doRegister: function (event) {
		const db = wx.cloud.database();
		const message = "用户名或者密码错误";
		var d = db.collection("user").where({
			'UserName': 'agan',
			'Password': '123456'
		}).get();

		console.log(d)









		// wx.cloud.callFunction({
		// 	name: 'CustomLogin',
		// 	success: res => {
		// 		console.log(res);
		// 		wx.showToast({
		// 			title: '调用成功1',
		// 		})
		// 		this.setData({
		// 			result: JSON.stringify(res.result) + "123123"
		// 		})
		// 	},
		// 	fail: err => {
		// 		wx.showToast({
		// 			icon: 'none',
		// 			title: '调用失败',
		// 		})
		// 		console.error('[云函数] [sum] 调用失败：', err)
		// 	}
		// })





















		// wx.showLoading({
		// 	title: 'asd',
		// })
		// wx.hideLoading()
		// wx.showToast({
		// title:'123',
		// })
		// var d = wx.getSystemInfoSync()
		// console.log(d);
		// this.setData({
		// 	loading:1
		// })
		// console.log(event);
		// wx.request({

		// 	url: 'https://www.baidu.com',

		// 	success: function (res) {

		// 		console.log(res)// 服务器回包信息
		// 	}
		// })
		// wx.setStorage({
		// 	key: 'key1',
		// 	data:"key123123",
		// 	success: function (res) {
		// 		// 异步接口在success回调才能拿到返回值
		// 		var value1 = res.data
		// 		console.log('success')
		// 		wx.getStorage({
		// 			key: 'key1',
		// 			success: function (res) {
		// 				// 异步接口在success回调才能拿到返回值
		// 				var value1 = res.data
		// 				console.log(value1)
		// 			},
		// 			fail: function () {
		// 				console.log('读取key1发生错误')
		// 			}
		// 		})
		// 	},
		// 	fail: function () {
		// 		console.log('读取key1发生错误')
		// 	}
		// })

	},
})