define(['jquery', 'jquery_cookie', 'util'],
    function ($, ud, util) {

        // 检测登陆
        util.checkLoginStatus();
        
        /**
         * 在登陆页面时，我们已经通过ajax请求拿到了登陆后发回来的用户信息并存放在cookie里面
         * 因为在存入cookie的时候，我们把json对象转成了字符串，现下首先得把json字符串转回json对象
         * 然后把数据绑定到侧边栏上渲染出来
         */
        
        try {
            var userInfo = JSON.parse($.cookie('userInfo')) || {};
        } catch (e) {
            console.log('userInfo解析错误');
        }
        // 在保证存在用户头像的请求下再绑定数据
        
        userInfo.tc_avatar && $('.avatar >img').attr('src', userInfo.tc_avatar); // 绑定头像
        $('.aside >.profile >h4').text(userInfo.tc_name); // 绑定用户名

        // 下拉列表
        $('.slide-down').on('click', function () {
            $(this).next().slideToggle();
        })

        /*左侧导航栏焦点定位 有规律找规律 没规律用配置*/
        var pathname = location.pathname;
        // 这个配置只配置那些没规律的
        var pathToHref = {
            '/': '/index.html',
            '/html/user/profile.html': '/html/user/list.html',
            '/html/teacher/add.html': '/html/teacher/list.html',
            '/html/teacher/edit.html': '/html/teacher/list.html',
            '/html/course/course_add_step1.html': '/html/course/add.html',
            '/html/course/course_add_step2.html': '/html/course/add.html',
            '/html/course/course_add_step3.html': '/html/course/add.html',
            '/html/course/category_add.html':'/html/course/category_list.html',
        };
        $('.aside a').removeClass('active')
            .filter('[href="' + (pathToHref[location.pathname]? pathToHref[location.pathname]: pathname) + '"]').addClass('active');
    })