Page({
  data: {
    addrInfo: [],
    userinfo: {},
    checkStatus: true,
    status: "default" //状态分add,modify
  },

  onLoad: function (option) {

    var status = option.status;

    console.log(status);

    this.setData({
      status: option.status
    })

    //如果为修改状态可以进行值赋值
    if (status == 'modify') {
      var userinfo = JSON.parse(option.userinfo);
      this.setData({
        userinfo: userinfo,
      })
    }


  },



  // 选择微信自带地址
  addAddr: function () {
    var that = this;
    //选择地址
    wx.chooseLocation({
      success: function (res) {
        console.info(res);
        var userinfo = that.data.userinfo;
        userinfo.address = res.address;
        userinfo.realAddress = res.name;
        that.setData({
          userinfo: userinfo
        })
      },
    })
  },
  //地址是否默认
  onChange({
    detail
  }) {
    //获取用户信息
    var userinfo = this.data.userinfo;
    userinfo.status = detail;

    // 需要手动对用户的checked默认状态进行更新
    this.setData({
      userinfo: userinfo
    });
  },
  //添加地址
  addAddress: function () {
    var currentPage = getCurrentPages();
    var prevPage = currentPage[currentPage.length - 2]; //上一个页面

    var userinfo = this.data.userinfo;

    prevPage.setData({
      status: 'add',
      userinfo: userinfo
    })
    wx.navigateBack({
      delta: 1
    })
    console.log(currentPage);
  },
  //值修改实时赋值
  modifyValue: function (event) {
    var text = event.target.dataset.text; //文本信息
    var value = event.detail; //值
    var userinfo = this.data.userinfo; //获取当前的用户信息

    switch (text) {
      case "username":
        userinfo.username = value;
        break;
      case "phone":
        userinfo.phone = value;
        break;
      case "address":
        userinfo.address = value;
        break;
      case "realAddress":
        userinfo.realAddress = value;
        break;
      default:

    }

    this.setData({
      userinfo: userinfo
    })
  },
  //删除地址
  delAddress: function () {
    var currentPage = getCurrentPages();
    var prevPage = currentPage[currentPage.length - 2]; //上一个页面
    var userinfo = this.data.userinfo; //获取当前的用户信息
    prevPage.setData({
      status: 'delete',
      userinfo: userinfo
    })
    wx.navigateBack({
      delta: 1
    })
    console.log(currentPage);
  },
  //修改地址
  modifyAddress: function () {
    var currentPage = getCurrentPages();
    var prevPage = currentPage[currentPage.length - 2]; //上一个页面
    var userinfo = this.data.userinfo; //获取当前的用户信息
    prevPage.setData({
      status: 'modify',
      userinfo: userinfo
    })
    wx.navigateBack({
      delta: 1
    })
    console.log(currentPage);
  }

})