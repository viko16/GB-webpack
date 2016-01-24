export default class {

    constructor(signPackage, shareInfo) {
        this.signPackage = signPackage;
        this.shareInfo = shareInfo;

        this.setConfig();
        this.listenEvents();
    }

    setConfig() {
        let sign = this.signPackage;
        sign.jsApiList = [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo'
        ];
        sign.debug = false;
        
        wx.config(sign);
    }

    listenEvents() {
        wx.ready(() => {
            let { title, desc, imgUrl, link } = this.shareInfo;

            wx.onMenuShareTimeline({
                title: title,
                link: link,
                imgUrl: imgUrl,
                trigger: function (res) {},
                success: function (res) {},
                cancel: function (res) {},
                fail: function (res) {}
            });
            wx.onMenuShareAppMessage({
                title: title,
                desc: desc,
                link: link,
                imgUrl: imgUrl,
                trigger: function (res) {},
                success: function (res) {},
                cancel: function (res) {},
                fail: function (res) {}
            });
            wx.onMenuShareQQ({
                title: title,
                desc: desc,
                link: link,
                imgUrl: imgUrl,
                trigger: function (res) {},
                complete: function (res) {},
                success: function (res) {},
                cancel: function (res) {},
                fail: function (res) {}
            });
            wx.onMenuShareWeibo({
                title: title,
                desc: desc,
                link: link,
                imgUrl: imgUrl,
                trigger: function (res) {},
                complete: function (res) {},
                success: function (res) {},
                cancel: function (res) {},
                fail: function (res) {}
            });
        });

        wx.error((res) => {

            // config信息验证失败会执行error函数，如签名过期导致验证失败，
            // 具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，
            // 对于SPA可以在这里更新签名。

            console.error(res);

        });
    }

}
