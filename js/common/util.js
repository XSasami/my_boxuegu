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
            },
            getSearchID: function(searchID) {
                var searchObj = {}, temp;
                var searchArr = location.search.slice(1).split('&');
                for(var i = 0; i < searchArr.length; i++){
                    temp = searchArr[i].split('=');
                    searchObj[temp[0]] = temp[1];
                }
                return searchID==null? searchObj: searchObj[searchID];
            },
        }
    })