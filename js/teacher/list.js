define(['aside', 'header', 'util', 'nprogress', 'template', 'bootstrap'],
    function (ud, ud, util, nprogress, template, ud) {

        // 登陆状态检测
        util.checkLoginStatus();

        // 配置网站进度条
        nprogress.start();
        $(function () {
            nprogress.done();
        })

        // 显示教师列表
        template.helper('age', function (tplValue) {
            if (!tplValue) {
                return '';
            }
            return (new Date().getFullYear()) - tplValue.slice(0, 4);
        })
        // 发送ajax请求，渲染列表
        $.get('/v6/teacher', function (data) {
            $('#tc_list').append(template('tc_list_tpl', data));
        })

        // 讲师详细信息的回显
        $('#tc_list').on('click', '[href="#teacherModal"]', function(){
            var $id = $(this).attr('data-tc-id');
            $.get('/v6/teacher/view', {tc_id: $id}, function(data){
                $('#teacherModal').html(template('modal_tpl', data.result));
            })
        })

        // 讲师的启用/注销
        $('#tc_list').on('click', '[href="javascript:;"]', function(){
            var $id = $(this).attr('data-tc-id'),
            $status = $(this).attr('data-tc-status'),
            $that = $(this);
            $.post('/v6/teacher/handle', {
                    tc_id: $id,
                    tc_status: $status
                }, function(data){
                    $that.attr('data-tc-status', data.result.tc_status);
                    $that.html(data.result.tc_status==1? '启用': '注销');
                });
        });
        
        // ajax加载动画
        // util.loading();
    });