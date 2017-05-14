define(['bootstrap', 'jquery', 'aside', 'header', 'util', 'nprogress'],
    function (ud, $, ud, ud, util, nprogress) {

        // 登陆状态检测
        util.checkLoginStatus();

        // 配置网站进度条
        nprogress.start();
        $(function () {
            nprogress.done();
        })

        // ajax加载动画
        util.loading();
        
    });