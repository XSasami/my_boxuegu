define(['bootstrap', 'jquery', 'aside', 'header', 'util', 'nprogress', 'template'],
    function (ud, $, ud, ud, util, nprogress, template) {

        // 登陆状态检测
        util.checkLoginStatus();

        // 配置网站进度条
        nprogress.start();
        $(function () {
            nprogress.done();
        })
        
        var id = util.getSearchID('tc_id')
        $.get('/v6/teacher/edit',{tc_id: id},function(data){
            $('.teacher-add').append(template('tc_edit_tpl', data.result))
        })

        // ajax加载动画
        util.loading();
    });