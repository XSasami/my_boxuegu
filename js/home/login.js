define(['bootstrap', 'jquery', 'jquery_form', 'jquery_cookie', 'nprogress', 'util'],
    function (ud, $, ud, ud, nprogress, util) {

        // 配置网站进度条
        nprogress.start();
        $(function () {
            nprogress.done();
        })

        // ajax加载动画
        util.loading();

        // 监听form表单的提交事件，转为ajax请求，请求成功则跳转到首页
        $('#login-form').ajaxForm({

            /**
             * 登陆成功后，服务器会返回该用户的信息。
             * 我们把它存储到cookie，供其他页面使用。
             */
            success: function (data) {
                console.log(data);
                $.cookie('userInfo', JSON.stringify(data.result), {
                    path: '/', 
                    expires: new Date('3011-5-16')
                }); // 设置path: '/'为了使所有页面都能够使用这个cookie数据
                // 跳转页面
                location.href = '/';
            },
            error: function () {
                alert('登陆失败！')
            }
        });

        // 登陆状态检测
        if($.cookie('PHPSESSID')){
            location.href = '/';
        }
    });