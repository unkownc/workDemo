Page({
  data: {
    userinfos: [{
      id: 1,
      username: "张三",
      phone: "12345671231",
      address: "某某省某某市某某县",
      realAddress: "某某地区",
      status: true
    }, {
      id: 2,
      username: "李四",
      phone: "12345671212",
      address: "某某省某某市某某县",
      realAddress: "某某地区",
      status: false
    }],
    radio: 1
  },

  onLoad: function () {

    var userinfos = this.data.userinfos;
    var checkID = 0; //默认单选选中id
    for (var i in userinfos) {
      if (userinfos[i].status) {
        checkID = userinfos[i].id;
      }
    }

    this.setData({
      radio: checkID
    })

  },
  //单选
  onChange(event) {
    this.setData({
      radio: event.detail,
    });
  },
  //跳转至地址编辑页面
  modifyAddress: function (event) {

    var id = event.target.dataset.id;

    var userinfoStr = this.data.userinfos[id];

    var userinfo = JSON.stringify(userinfoStr);

    wx.navigateTo({
      url: 'modifyAddress/modifyAddress?status=modify&userinfo=' + userinfo,
    })
  },
  //新增地址
  addAddress: function () {
    wx.navigateTo({
      url: 'modifyAddress/modifyAddress?status=add',
    })
  },

  //获取返回页面的参数
  onShow: function () {
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1]; //当前页面
    let status = currPage.data.status;//获取上一个页面的状态(是否为CURD)
    let userinfo = currPage.data.userinfo;//获取上一个页面的地址信息
    var userinfos = this.data.userinfos;
    console.log(userinfo) //为传过来的值
 
    switch(status){
      //如果为添加,对值进行添加
      case "add":
        console.log("add>>>");
        console.log(userinfo);
        userinfo.id = userinfos.length+1;
        userinfos.push(userinfo);
        break;
      //如果为删除,对对应的值进行删除
      case "delete":
        console.log("delete>>>"+userinfo.id);
        userinfos[userinfo.id-1] = null;
        while(userinfos.length > 0 && userinfos[userinfos.length-1]==null){
            userinfos.pop();
        }
        break;
      //如果为修改,对对应值进行修改
      case "modify":
        console.log("modify>>>"+userinfo.id);
        userinfos[userinfo.id-1] = userinfo;
        break;
      default:

    }

    console.log(userinfos);

    this.setData({
      userinfos:userinfos
    })
    
  }

})