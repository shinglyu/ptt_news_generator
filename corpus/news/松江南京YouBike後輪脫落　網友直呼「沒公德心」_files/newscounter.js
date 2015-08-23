(function ( $ ) {
 
    $.fn.newscounter = function( options ) {
 
        /**
         * 設定選項
         * newsId		: 必須指定新聞代碼
         * counterUrl	: 必須指定 counter 的 script url , ajax 將背景呼叫取得新聞瀏覽人數
         */
        var settings = $.extend({
        	newsId : null,
            counterUrl: "http://news.cts.com.tw/action/news_count.php"
        }, options );
 
        
        if(settings.newsId === null) {
        	console.error('The newscounter plugin must assign newsId.');
        	return this;
        }
        
        
        var newsCounterElement = this;
        
        
        $.ajax({
        	url			: settings.counterUrl ,
        	dataType	: 'jsonp',
        	data		: { 'news_id' : settings.newsId },
        	crossDomain : true,
        	jsonpCallback		: "callback_newscounter",
        	
        })
        .done(function(data){
    		newsCounterElement.text(data);
    	})
    	.fail(function(){
    		console.error('The newscounter can not load data.');
    	});

        return this; 
    };
 
}( jQuery ));
/*
使用方式
$(document).ready(function(){
	$('div#xxxID').newscounter({
		newsId : '201411111234567879',
		counterUrl : 'http://news.cts.com.tw/action/news_counter.php'
	});
});


*/