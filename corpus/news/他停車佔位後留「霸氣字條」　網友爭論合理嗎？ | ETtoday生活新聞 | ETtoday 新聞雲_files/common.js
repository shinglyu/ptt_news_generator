/***************************** 全站使用 ****************************/
//Adsnese廣告排除
var myUrl=location.href;
if(myUrl.indexOf("性愛")!=-1 || myUrl.indexOf("%E6%80%A7%E6%84%9B")!=-1){
	location.href="/";
}

//自動移除黃金文字廣告
$(function(){ 
	if (window.location.href.indexOf("3q4fd7") > 0) {//RF
		$("#ticker_3").remove();
	}
});

//防止被 iframe
if (top.location != self.location && document.referrer.search("ettoday.net") < 0) {
	top.location.href = window.location.href
}

//修正側欄固定 Firefox reload 網頁問題
var $mozBody = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Firefox 問題
$mozBody.scrollTop(0);

//側欄-社群頁籤============================================
$(function(){
	
	//初始，第一個開
	$("#change_tab_1 .tab_title li:first").addClass("current");
	$("#change_tab_1 .part_list_2:not(:first)").hide();
	
	//點墼後，對應序開
	$("#change_tab_1 .tab_title li").mouseover(function(){
		var iNo=$("#change_tab_1 .tab_title li").index(this);
		$("#change_tab_1 .tab_title li").removeClass("current");
		$("#change_tab_1 .tab_title li:eq("+ iNo +")").addClass("current");
		$("#change_tab_1 .part_list_2").hide();//全關
		$("#change_tab_1 .part_list_2:eq("+ iNo +")").show();
	});
});

//側欄-新聞相關頁籤============================================
/*
$(function(){

//輪播參數定義
	$("#change_tab_2 .run").cycle({ 
		fx:    'fade',
		speed: 500, 
		timeout:3000,//不輪播用0
		after:   onAfter,//轉換後要做動動作
		pause:1//mouseover內容區時停止輪播
	});

	//預設第一個數字高亮
	$("#change_tab_2 .pager a:eq(0)").addClass('current');
	
	//當前照片動作
	function onAfter(curr, next, opts) {
		var iCurrent = opts.currSlide; //取得目前的序號
		$("#change_tab_2 .pager a").removeClass('current').filter(':eq('+iCurrent+')').addClass('current');//數字高亮
	}
	
	//顯示指定序
	$("#change_tab_2 .pager a").mouseover(function(){
		var iNo=$("#change_tab_2 .pager a").index(this);
		$("#change_tab_2 .run").cycle(iNo); 
		$("#change_tab_2 .run").cycle('pause'); //自製懸停
        return false; 
	});
	
	//懸停後重新開始播放
    $("#change_tab_2 .pager a").mouseout(function() {
        $("#change_tab_2 .run").cycle('resume');
    });

});
*/

//上方列 新聞雲 Apps====================
/*
$(function(){
	$("#etapps").colorbox({iframe:true,innerWidth:950, innerHeight:560});
});
*/

//Floating Title / ToolTips ============================================
//偵測iPhone/iPod
if(navigator.userAgent.match(/iPad/i)) {
	if (document.cookie.indexOf("iphone_redirect=false") == -1) {
		//alert("這是ipad");
	}
} else {
	//alert("這不是ipad");
	jQuery(document).ready(function($){

		//熱門圖集
		if ($("#hot-photo-sidebar").length > 0) {
			$("#hot-photo-sidebar .block_content h3 a").mouseover(function(e){
				this.myPic = this.rel;
				this.myTitle = this.title;
				this.myHref = this.href;
				this.myHref = (this.myHref.length > 50 ? this.myHref.toString().substring(0,50)+"..." : this.myHref);
				this.title = "";
				var floattitle = "<div id='floattitle'><p><img style='float:left;margin:5px;border:1px #fff solid' width='50' height='38' src='"+this.myPic+"'/>"+this.myTitle+"</p></div>";
				$('body').append(floattitle);
				$('#floattitle').css({"opacity":"0.9","top":(e.pageY+20)+"px","left":(e.pageX+10)+"px"}).show('fast');
			}).mouseout(function(){this.title = this.myTitle;$('#floattitle').remove();
			}).mousemove(function(e){$('#floattitle').css({"top":(e.pageY+20)+"px","left":(e.pageX+10)+"px"});
			});
		}
		
		//熱門影音
		if ($("#hot-video-sidebar").length > 0) {
			$("#hot-video-sidebar .block_content h3 a").mouseover(function(e){
				this.myPic = this.rel;
				this.myTitle = this.title;
				this.myHref = this.href;
				this.myHref = (this.myHref.length > 50 ? this.myHref.toString().substring(0,50)+"..." : this.myHref);
				this.title = "";
				var floattitle = "<div id='floattitle'><p><img style='float:left;margin:5px;border:1px #fff solid' width='50' height='38' src='"+this.myPic+"'/>"+this.myTitle+"</p></div>";
				$('body').append(floattitle);
				$('#floattitle').css({"opacity":"0.9","top":(e.pageY+20)+"px","left":(e.pageX+10)+"px"}).show('fast');
			}).mouseout(function(){this.title = this.myTitle;$('#floattitle').remove();
			}).mousemove(function(e){$('#floattitle').css({"top":(e.pageY+20)+"px","left":(e.pageX+10)+"px"});
			});
		}

	});	
}

//Facebook 無法連線時，隱藏FB外==============================
/*以下改由 php 處理，非大陸IP時才執行此碼
function hideFB(){
	//無法連上FB時，隱藏以下區塊
	$(".xfb").empty().hide();
	$("img#fbpic").onerror=null; //控制不要一直跳

	//Facebook 無法連線時，設 cookie 為 nofacebook =1
	if ($.cookie('nofacebook')!='1') {
		var date = new Date();
		date.setTime(date.getTime() + (30 * 60 * 1000));////用毫秒表示，cookie效期設30分鐘
		$.cookie('nofacebook', '1', { path:'/', expires: date });
	}
}
//$(function(){
	testFBpic = '<img id="fbpic" src="http://graph.facebook.com/712719613/picture" width="0" height="0" style="display:none" onerror="javascript:hideFB()"/>';
	$("body").append(testFBpic);
//});
*/

//Facebook 無法連線時，社群區的頭像置換為預設圖============================
function check_fbimg(){
	var img=event.srcElement;  
	img.src="http://static.ettoday.net/web_2011/images/default-thumb.gif";  
	img.onerror=null;       //控制不要一直跳
 }

//複製網頁時產生原文連結(Tynt)==========================================
if(document.location.protocol=='http:'){
 var Tynt=Tynt||[];Tynt.push('bGee2M3Q0r4iaCacwqm_6r');Tynt.i={"ap":"原文網址:","st":true,"w":"ETtodaynet","f":"ETtoday"};
 (function(){var s=document.createElement('script');s.async="async";s.type="text/javascript";s.src='http://tcr.tynt.com/ti.js';var h=document.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})();
}

//Google流量統計碼 (通用 Analytics) ==========================================
if (window.location.href.indexOf("3q4fd7") > 0) {//RF

	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-25690501-10', 'auto');
	ga('dalemon.require', 'displayfeatures');
	ga('send', 'pageview');
} else {
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	//全網
	ga('create', 'UA-25690501-1', 'ettoday.net', {'name': 'AllWeb'});
	ga('AllWeb.require', 'displayfeatures');

	//自定維度 *****************************
	if(document.getElementsByName("section").length > 0){ //如果是新聞頁
		var NewsType = document.getElementsByName("section")[0].content;//抓新聞大類
		if (NewsType !="") {//新聞大類有資料才傳送自定維度
			ga('AllWeb.set', 'dimension1', NewsType);
		}
	}
	ga('AllWeb.send', 'pageview');

	//電腦版
	ga('create', 'UA-49395399-1', 'ettoday.net', {'name': 'PCWeb'});
	ga('PCWeb.require', 'displayfeatures');
	ga('PCWeb.send', 'pageview');

}
