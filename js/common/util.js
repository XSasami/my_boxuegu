define(['jquery'],
    function ($) {
        return {
            checkLoginStatus: function(){
                if(!$.cookie('PHPSESSID')){
                    location.href = '/html/home/login.html';
                }
            },
            loading: function () {
                $(document).on('ajaxStart', function () {
                    $('.overlay').show();
                }).on('ajaxStop', function () {
                    $('.overlay').hiden();
                })
            }
        }
    })