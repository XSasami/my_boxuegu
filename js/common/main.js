require.config({
    baseUrl: '/',
    paths: {

        // 每个页面的模块
        add: 'js/course/add',
        csList: 'js/course/list',
        category_add: 'js/course/category_add',
        category_list: 'js/course/category_list',
        course_add_step1: 'js/course/course_add_step1',
        course_add_step2: 'js/course/course_add_step2',
        course_add_step3: 'js/course/course_add_step3',

        index: 'js/home/index',
        login: 'js/home/login',
        repass: 'js/home/repass',
        settings: 'js/home/settings',

        tcAdd: 'js/teacher/add',
        tcEdit: 'js/teacher/edit',
        tcList: 'js/teacher/list',

        usList: 'js/user/list',
        usProfile: 'js/user/profile',

        // 公共模块
        aside: 'js/common/aside',
        header: 'js/common/header',
        util: 'js/common/util',

        // 第三方模块
        // 依赖于jQuery
        jquery: 'lib/jquery/jquery.min',
        bootstrap: 'lib/bootstrap/js/bootstrap.min',
        jquery_form: 'lib/jquery-form/jquery.form',
        jquery_cookie: 'lib/jquery-cookie/jquery.cookie',
        jquery_region: 'lib/jquery-region/jquery.region',
        bootstrap_datepicker: 'lib/bootstrap-datepicker/js/bootstrap-datepicker.min',
        bootstrap_datepicker_CN: 'lib/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        jquery_uploadify: 'lib/uploadify/jquery.uploadify.min',

        // 不依赖jQuery
        nprogress: 'lib/nprogress/nprogress',
        template: 'lib/artTemplate/template',
    },

    // 配置普通模块
    shim: {
        // bootstrap依赖于jq
        bootstrap: {
            deps: ['jquery']
        },
        bootstrap_datepicker_CN: {
            deps: ['jquery', 'bootstrap_datepicker']
        },
        jquery_uploadify: {
            deps: ['jquery']
        },
    }
});

var obj = {
    '/': 'index',
    '/index.html': 'index',

    '/html/course/add.html': 'add',
    '/html/course/list.html': 'csList',
    '/html/course/category_add.html': 'category_add',
    '/html/course/category_list.html': 'category_list',
    '/html/course/course_add_step1.html': 'course_add_step1',
    '/html/course/course_add_step2.html': 'course_add_step2',
    '/html/course/course_add_step3.html': 'course_add_step3',

    '/html/home/login.html': 'login',
    '/html/home/repass.html': 'repass',
    '/html/home/settings.html': 'settings',

    '/html/teacher/add.html': 'tcAdd',
    '/html/teacher/edit.html': 'tcEdit',
    '/html/teacher/list.html': 'tcList',

    '/html/user/list.html': 'usList',
    '/html/user/profile.html': 'usProfile',
}

var modelName = obj[location.pathname];
// 加载对应的模块
requirejs([modelName]);