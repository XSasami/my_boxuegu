define(['bootstrap', 'jquery', 'aside', 'header', 'util', 'nprogress', 'template', 'jquery_form'],
    function (ud, $, ud, ud, util, nprogress, template, ud) {

        // 登陆状态检测
        util.checkLoginStatus();

        // 配置网站进度条
        nprogress.start();
        $(function () {
            nprogress.done();
        })

        // 获取id
        var id = util.getSearchID('tc_id');

        // 数据的回显
        $.get('/v6/teacher/edit', {
            tc_id: id
        }, function (data) {
            $('.teacher-add').append(template('tc_edit_tpl', data.result));

            // 修改数据并保存
            $('#tc_edit').ajaxForm({
                data: {
                    tc_id: id
                },
                success: function () {
                    location.href = '/html/teacher/list.html';
                }
            });
        });
    });