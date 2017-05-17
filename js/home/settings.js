define(['bootstrap', 'jquery', 'aside', 'header', 'util', 'nprogress', 'template', 'jquery_region', 'bootstrap_datepicker', 'bootstrap_datepicker_CN', 'jquery_form', 'jquery_uploadify'],
    function (ud, $, ud, ud, util, nprogress, template, ud, ud, ud, ud, ud) {

        // 登陆状态检测
        util.checkLoginStatus();

        // 配置网站进度条
        nprogress.start();
        $(function () {
            nprogress.done();
        })

        // 个人信息的回显
        $.get('/v6/teacher/profile', function (data) {
            $('.settings form').html(template('settings_tpl', data.result));

            // 动态添加元素之后才可获取元素
            Datepicker();
            PCD();
            profileSubmit();
            uploadify();
        });

        // 手动监听表单提交以实现在表单提交时完成其他需求
        function profileSubmit() {
            $('.settings form').on('submit', function (e) {
                e.preventDefault();
                $(this).ajaxSubmit({
                    data: {
                        tc_hometown: $('#p').find(':selected').text() + "|" + $('#c').find(':selected').text() + "|" + $('#d').find(':selected').text(),
                    },
                    success: function () {
                        location.reload();
                    },
                });
                return false;
            })
        }


        // 日期插件
        function Datepicker() {
            $('#birthday').datepicker({
                language: 'zh-CN',
                format: 'yyyy-mm-dd',
                startDate: new Date('1950-01-01'),
                endDate: new Date('1999-01-01'),
            });

            $('#joindate').datepicker({
                language: 'zh-CN',
                format: 'yyyy-mm-dd',
                startDate: new Date('2005-01-01'),
                endDate: new Date(),
            })
        }

        // 省市县三级联动
        function PCD() {
            $('#pcd').region({
                url: '/lib/jquery-region/region.json',
            })
        }

        // 上传头像
        function uploadify() {
            $('#upfile').uploadify({
                swf: '/lib/uploadify/uploadify.swf',
                uploader: '/v6/uploader/avatar',
                fileObjName: 'tc_avatar',
                buttonText: '',
                fileTypeExts: '*.png; *.jpg',
                height: $('.preview').height(),
                onUploadSuccess: function (file, data) {
                    try {
                        $('#avatar').attr('src', JSON.parse(data).result.path);
                    } catch (e) {
                        console.log(data);
                    }
                }
            });
        }

    //     function initUploadify() {
	// 	$('#upfile').uploadify({
	// 		swf: '/lib/uploadify/uploadify.swf',  // flash选取文件的脚本
	// 		uploader: '/v6/uploader/avatar', // 接口
	// 		fileObjName: 'tc_avatar', // 相当于表单的name属性
	// 		buttonText: '',
	// 		fileTypeExts: '*.png; *.jpg',
	// 		height: $('.preview').height(),
	// 		onUploadSuccess: function(file, data) {
	// 			// 这里的data不像jquery那样给你自动解析好了，需要手动解析
	// 			try{
	// 				$('#avatar').attr('src', JSON.parse(data).result.path);
	// 			}catch(e) {
	// 				console.log(data);
	// 			}
	// 		}
	// 	});
	// }

        // ajax加载动画
        // util.loading();

    });