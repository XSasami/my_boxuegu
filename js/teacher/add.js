define(['bootstrap', 'jquery', 'aside', 'header', 'util', 'nprogress', 'jquery_form'],
    function (ud, $, ud, ud, util, nprogress, ud) {

        // 登陆状态检测
        util.checkLoginStatus();

        // 配置网站进度条
        nprogress.start();
        $(function () {
            nprogress.done();
        })

        $('#tc_add').ajaxForm(function(){
            location.href = '/html/teacher/list.html';
        })

        // ajax加载动画
        util.loading();
        
    });