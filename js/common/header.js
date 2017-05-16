define(['jquery'],function($){

    // 点击退出按钮时，发送ajax请求，跳到登录页
    $('#logout').on('click', function(){
        $.ajax({
            type: 'post',
            url: '/v6/logout',
            success: function(){
                location.href = '/html/home/login.html';
            },
            error: function(){
                alert('网络超时，请骚后再试！');
            }
        });
    });
});