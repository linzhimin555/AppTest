// miniprogram/pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //console.log(array);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  doRegister: function(event) {

		let {form} = this.data;
		console.log(form);
		return ;
    const db = wx.cloud.database();
    db.collection("counters").doc(data.data[i]._id).remove({ success: function (data) { data }, fail: function (err) { console.log(err) } });
    db.collection("counters").add({
      data: {
        UserName: 'll',
        Password: "123456",
        Remarks: 'xiaohao',
        Age: '18'
      },
      success: function (res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
      },
      fail: function (err) {
        console.log(err)
      }
    })


    const message = "用户名或者密码错误";
    var d = db.collection("counters").where({
      'UserName': 'll',
    }).get();
    var userName = "ll";
    try{
      var d = db.collection("counters").where({
      'UserName': 'll',
    }).get({
      success: function(data) {
        console.log(data);
        // for(var i in data.data)
        // {
        //   const db = wx.cloud.database();
        //   console.log(i);
        //   db.collection("counters").doc(data.data[i]._id).remove({success:function(data){data},fail:function(err){console.log(err)}});
        // }
        if (data.data.length == 0) {
          console.log(data);
          //执行注册
          var dd = data.data;
          
        } else {
          wx.showModal({
            title: "您输入的用户名已存在！"
          })
        }
      }
    });
    }
    catch(err){console.log(err);}

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