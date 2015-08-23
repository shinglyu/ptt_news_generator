//側欄固定
//$(function(){
	
	var $Win = $(window);
	var $Doc = $(document);
	var $ContainerBox = $(".container_box");
	var $C1 = $(".c1");
	var $C2 = $(".c2");
	var $C2Inner = $(".c2 .c2_inner");
	var $FooterBox = $(".footer_box");

	var ua = window.navigator.userAgent.toLowerCase();
	$.browser.version = (ua.match( /.(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [0, '0'])[1];
	var version = $.browser.version;
	var isIE6 = ua.indexOf("msie 6.0");

	//偵測iPad
	//if(ua.match(/iPhone/i) || ua.match(/iPad/i) || ua.match(/android/) || isIE6 != -1 || $C2.length == 0 || location.href.indexOf("photoview")!=-1) {
	if(ua.match(/iPhone/i) || ua.match(/android/) || isIE6 != -1 || $C2.length == 0 || location.href.indexOf("photoview")!=-1) {
		//iPhone 或 iPad 或 Android 或 IE6 或 右欄高於左欄 或 沒側欄 或 是單張照片頁
		//側欄不會吸住
	} else {//非iPhone 或 非iPad 或 非Android 或 非IE6 或 右欄低高於左欄 或 有側欄 或 不是單張照片頁

		//寫入css
		document.write('<style type="text/css">.c1 {padding-bottom:500px;_padding-bottom:10px} .footer_box{ width:100%; position:fixed; z-index:99; bottom:0px;display:none;} .c2 .c2_inner{ width:300px;padding-bottom:50px;_padding-bottom:30px}</style>')

		//在c1底部插入提示語
		//$('.c1').append('<p class="no-print" style="color:red;text-align:center">▼▼ 加油！繼續往下捲，意想不到的精采內容就在網頁底部喲！▼▼</p>');
		
		$(window).scroll(function(){

			//各容器的寬高、定位是動態的，所以每一次scroll就需重算一次。
			var iWinScrollT = $Win.scrollTop(); //重取視窗 scrollTop
			var iPointA = $ContainerBox.position().top + $C2Inner.height() - $Win.height(); //側欄觸發點 (出血的量 = 目父容器的position + 目標height - 視窗height)
			var iPointB = $Doc.height() - $Win.height() - 5;  //footer觸發點(出血的量 = 目標height - 視窗height -提前5px處)
			
			// 吸住側欄
			if(iWinScrollT > iPointA && $C2Inner.height() < $C1.height()){//wayne
				$C2Inner.css({"position":"fixed","bottom":"0px"});
			}else{
				$C2Inner.css({"position":"relative","bottom":"auto"});
			};
			
			// 吸住footer
			if(iWinScrollT > iPointB){
				$FooterBox.slideDown();//顯示footer
				//顯示 728x90廣告
				//$("#ad-728x90-footer").html('<iframe src="http://static.ettoday.net/web_2011/ad/ad-728x90.htm" width="728" height="90" marginwidth="0" marginheight="0" frameborder="0" scrolling="no" allowtransparency="true"></iframe>');
			}else{
				$FooterBox.slideUp();//隱藏footer
				//$("#ad-728x90-footer").empty();//隱藏 728x90廣告
			};
			
		});
	}
	
//});