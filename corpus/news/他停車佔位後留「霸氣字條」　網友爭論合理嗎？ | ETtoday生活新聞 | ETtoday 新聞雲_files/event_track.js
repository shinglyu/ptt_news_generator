//RF from 2015/3/3 ==========================================

$(function () {
	var ref = new pageRefresh();
	ref.SetDelaySec(300);
	ref.Start();
});

if (window.location.href.indexOf("3q4fd7") > 0) {// RF (網址有帶參數時)
	if(typeof(Storage) !== "undefined") {//支援 sessionStorage
       if (sessionStorage.getItem("oriTitle") != null) {
       		document.title = sessionStorage.getItem("oriTitle");
       }
	}
	//var Omask ='<div style="position:fixed; width:100%; height:1500px; left:0px; top:0px; z-index:50;background-color:#ccc;filter:alpha(opacity=60); opacity:0.6;"></div>';
	//$("body").append(Omask);
}

function pageRefresh(){
	var waitingTime=600000;
	this.SetDelaySec=function(sec){waitingTime=sec*1000};
	this.Start=function(){doRefresh()};
	function doRefresh(){
		var browser = navigator.userAgent;
		var hasVideo = $(".story iframe").length + $(".story object").length + $(".story embed").length + $(".video_box").length; //值為0時，表示網頁中沒有任何影片存在
		if (hasVideo == 0 && browser.indexOf("Chrome") != -1 || browser.indexOf("Firefox") != -1 || browser.indexOf("Safari") != -1 ) {//如果網頁中沒有影片, 且為 chrome 或 Firefox 或 Safari
			var e;
			function startCountdown(){//重新計時
				clearTimeout(e);
				if ($("#index").length > 0) {//如果是首頁
					e=setTimeout(function(){window.location.reload()},waitingTime)
				}else{//非首頁
				  if(typeof(Storage) !== "undefined") {//支援 sessionStorage
					 if (window.location.href.indexOf("3q4fd7") == -1) {//not RF (網址沒有帶參數時)
				          var thisUrl = window.location.href;
				          sessionStorage.setItem("oriUrl", thisUrl);
				          sessionStorage.setItem("oriTitle", document.title);
				          e=setTimeout(function(){window.location.href="http://www.ettoday.net/news/news-list.htm?from=3q4fd7"},waitingTime)
				      } else {
				         e=setTimeout(function(){window.location.href="http://www.ettoday.net/news/news-list.htm?from=3q4fd7"},waitingTime)
				     }
				  } else {//不支援 sessionStorage
				     e=setTimeout(function(){window.location.href="http://www.ettoday.net/news/news-list.htm?from=3q4fd7"},waitingTime)
				  }
				}
			}
			startCountdown();
			$("body").click(function(){startCountdown()});
			$(window).scroll(function(){startCountdown()});
			$(window).resize(function(){startCountdown()});
			$(document).keypress(function(f){startCountdown()})
			$("body").on("mousemove", startCountdown);
			$("body").on("mousemove", goBackToOri);
		}
	}
};

function goBackToOri(){
	if (window.location.href.indexOf("3q4fd7") == -1) {//not RF (網址沒有帶參數時)
         //alert("網址沒有帶參數時，無動作");
    } else {
       var gotoUrl = sessionStorage.getItem("oriUrl");
       if (gotoUrl != null) {
       		window.location.href=gotoUrl;
       }else{
       		window.location.href=window.location.href.split("?from=3q4fd7")[0];
       }
    }
}

//切回頁籤時
try {
	// 修正瀏覽器差異
	var hidden, visibilityChange; 
	if (typeof document.hidden !== "undefined") { 
	  hidden = "hidden";
	  visibilityChange = "visibilitychange";
	} else if (typeof document.mozHidden !== "undefined") {
	  hidden = "mozHidden";
	  visibilityChange = "mozvisibilitychange";
	} else if (typeof document.msHidden !== "undefined") {
	  hidden = "msHidden";
	  visibilityChange = "msvisibilitychange";
	} else if (typeof document.webkitHidden !== "undefined") {
	  hidden = "webkitHidden";
	  visibilityChange = "webkitvisibilitychange";
	}

	//切換事件
	function handleVisibilityChange() {
	  if (document[hidden]) {
	    //離
	  } else {
	    //回
	    //$("body").off("mousemove", goBackToOri);
	    goBackToOri();
	  }
	}

	// 切換事件
	document.addEventListener(visibilityChange, handleVisibilityChange, false);
} catch(e){
   //alert(e)
}

/***************************** Universal Analytics ****************************/

//新聞分類追蹤 *****************************
if(document.getElementsByName("section").length > 0){ //如果是新聞頁
	var NewsCategory = document.getElementsByName("section")[0].content;//抓新聞大類
	var NewsSubCategory = document.getElementsByName("subsection")[0].content;//抓新聞次類
	ga('AllWeb.send', 'event', '新聞分類', ''+NewsCategory+'', ''+NewsSubCategory+'', {'nonInteraction': 1});
}

//版頭-主選單 *****************************
$(".nav2012 a").click(function() {          
	ga("PCWeb.send", "event", "版頭-主選單", ""+$(this).text()+"");
});

//版尾-主選單 *****************************
$(".footer_nav a").click(function() {
	ga("PCWeb.send", "event", "版尾-主選單", ""+$(this).text()+"");
});

//版尾-選單
$(".footer_menu a").click(function() {
	ga("PCWeb.send", "event", "版尾-選單", ""+$(this).text()+"");
});

//版尾-版權宣告
$(".footer address a").click(function() {
	ga("PCWeb.send", "event", "版尾-版權宣告", ""+$(this).text()+"");
});

//版尾-秘密花園
/* 改直接做在html結構中
$("#girlsgirlsgirls a").click(function() {
	ga("PCWeb.send", "event", "版尾-秘密花園", ""+$(this).find("img").attr("title")+"");
});
*/

//新聞頁-新聞內連結 *****************************
$(".story a").click(function() {
	ga("PCWeb.send", "event", "新聞頁-新聞內連結", ""+$(this).text()+"", ""+$(this).attr('href')+"");
});

//新聞頁-文末粉絲團連結 *****************************
$("#fbfanslink p a").click(function() {
	ga("PCWeb.send", "event", "新聞頁-文末粉絲團連結", ""+$(this).text()+"", ""+$(this).attr('href')+"");
});

//新聞頁-推薦閱讀
$(".editor-choice a").click(function() {
	ga("PCWeb.send", "event", "新聞頁-推薦閱讀", ""+$(this).text()+"", ""+$(this).attr('href')+"");
});

//新聞頁-熱門新聞
$("#hot-news-index a").click(function() {
	ga("PCWeb.send", "event", "新聞頁-熱門新聞", ""+$(this).text()+"", ""+$(this).attr('href')+"");
});

//新聞頁-關鍵字
$("#news-keywords a").click(function() {
	ga("PCWeb.send", "event", "新聞頁-關鍵字", ""+$(this).text()+"", ""+$(this).attr('href')+"");
});

//新聞頁-分頁列
$(".subjcet_news .menu_page a").click(function() {
	ga("PCWeb.send", "event", "新聞頁-分頁列", ""+$(this).text()+"", ""+$(this).attr('href')+"");
});

//新聞頁-社群分享：Facebook
$(".social_share a#s-facebook").click(function() {
	ga("PCWeb.send", "event", "新聞頁-社群分享", "Facebook-Share", ""+self.location.href+"");
})

//新聞頁-社群分享：Google+
$(".social_share a#s-google").click(function() {
	ga("PCWeb.send", "event", "新聞頁-社群分享", "GooglePlus-Share",""+self.location.href+"");
})

//新聞頁-社群分享：Email
$(".social_share a#s-email").click(function() {
	ga("PCWeb.send", "event", "新聞頁-社群分享", "Email-Share",""+self.location.href+"");
})

//新聞頁-社群分享：Plurk
$(".social_share a#s-plurk").click(function() {
	ga("PCWeb.send", "event", "新聞頁-社群分享", "Plurk-Share",""+self.location.href+"");
})

//新聞頁-社群分享：Twitter
$(".social_share a#s-twitter").click(function() {
	ga("PCWeb.send", "event", "新聞頁-社群分享", "Twitter-Share",""+self.location.href+"");
})

//新聞頁-社群分享：新浪微博
$(".social_share a#s-weibo").click(function() {
	ga("PCWeb.send", "event", "新聞頁-社群分享", "Weibo-Share",""+self.location.href+"");
})

//新聞頁-社群分享：QQ微博
$(".social_share a#s-qq").click(function() {
	ga("PCWeb.send", "event", "新聞頁-社群分享", "QQ-Share",""+self.location.href+"");
})

//新聞頁-社群分享：人人網
$(".social_share a#s-renren").click(function() {
	ga("PCWeb.send", "event", "新聞頁-社群分享", "Renren-Share",""+self.location.href+"");
})