define(['aside', 'header', 'util', 'nprogress', 'template'],
    function (ud, ud, util, nprogress, template) {

        // 登陆状态检测
        util.checkLoginStatus();

        // 配置网站进度条
        nprogress.start();
        $(function () {
            nprogress.done();
        })

        template.helper('age', function (tplValue) {
            if (!tplValue) {
                return '';
            }
            return (new Date().getFullYear()) - tplValue.slice(0, 4);
        })
        // 发送ajax请求
        $.get('/v6/teacher', function (data) {
            $('#tc_list').append(template('tc_list_tpl', data));
        })

        // ajax加载动画
        util.loading();
    });