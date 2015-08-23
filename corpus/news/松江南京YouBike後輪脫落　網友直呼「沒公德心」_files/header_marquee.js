/**
 * @copyright CTS
 */


$(document).ready(function() {
	var now			= new Date();
	var isLive		= false;	// 目前是否正顯示 LIVE
	
	
	// hadermarquee
	
	/**
	 * 切換跑馬燈或Live直播
	 */
	function switch_header(data) {
		// check time
		var nowDay		= now.getDate();
	    var nowMonth	= now.getMonth()+1; //January is 0!
		var nowHour		= now.getHours();
		var nowMinutes  = now.getMinutes();
		var imgRadio = "http://www.cts.com.tw/images/sonic.gif";
		// var isLife = false;
		var hh = ('00'+nowHour).slice(-2);
		var mm = ('00'+nowMinutes).slice(-2);
		
		var current = parseInt(hh + '' + mm , 10);
		var currentName = '';
		isLive = false;
		for(var i=0; i<data.length; i++) {
			var start = parseInt(data[i].start , 10);
			var end   = parseInt(data[i].end , 10);
			if(current >= start && current <= end) {
				isLive = true;
				currentName = data[i].name;
				break;
			}
		}

		var divSubject = $('<div id="news-realtime-marquee-subject" />');// .css('display' , 'inline-block');

		$('.immediatenews').append(divSubject);
		//console.log('now : ' + now.toString() );
		//console.log('switch_header isLive : ' + isLive);
		
		if(isLive) {
			// LIVE聽新聞 
			var img = $('<img />').attr("src" , imgRadio).attr('border',0);
			divSubject.append(img);

			// 目前直播的標題
			var divTitle = $('<div id="news-realtime-title">');
			divTitle.append($('<span style="color: #FFCC00">Live聽新聞</span>'));


			var divTitleLink = $('<a />');
			divTitleLink.text(' - ' + currentName + "線上廣播");
			divTitleLink.attr('href' , 'http://news.cts.com.tw/sound');
			
			divTitle.append(divTitleLink);
			$('.immediatenews').append(divTitle);


			
		} else {
			divSubject.text( '即時新聞 : ');
			var divMarquee = $('<div id="news-realtime-marquee" class="scroll-text" />');

			
			$('.immediatenews').append(divTitle);
			$('.immediatenews').append(divMarquee);
			
			var realtimeUrl = 'http://www.cts.com.tw/api/news_realtime_marquee.json?t=' + nowMonth+ '' + nowDay + '' + nowHour + '' + nowMinutes;

		    $.ajax({
		    	url			: realtimeUrl ,
		    	dataType	: 'jsonp',
		    	jsonpCallback		: "callback_realtime",
		    })
		    .done(function(data){
		    	marquee_append(data);
			})
			.fail(function(){
				console.error('Can not load news_realtime_marquee.json.');
			});

			/*
			divMarquee.scrollbox({
				  distance: 24,
				  queue: 'demo6-queue'
				});
			*/
		}
	}
	
	/**
	 * 增加跑馬燈項目
	 */
	function marquee_append(data) {
		
		var ul = $('<ul />');
		for(var i=0; i<data.length; i++) {
			var li = $('<li />');
			ul.append(li);
			
			var link = $('<a />').attr('href' , data[i].news_url).text(data[i].leadtitle + " ...");
			li.append(link);
			
		}
		$('#news-realtime-marquee').append(ul);
		$('#news-realtime-marquee').scrollbox();
	}
	
	
	var timer = null;
	/**
	 * 檢查是否該切換即時新聞或跑馬
	 */
	function time_checker(data) {
		// check time
		now = new Date();
		var nowDay		= now.getDate();
	    var nowMonth	= now.getMonth()+1; //January is 0!
		var nowHour		= now.getHours();
		var nowMinutes  = now.getMinutes();
		var checkIsLive = false;
		
		var hh = ('00'+nowHour).slice(-2);
		var mm = ('00'+nowMinutes).slice(-2);
		
		var current = parseInt(hh + '' + mm , 10);
		
		for(var i=0; i<data.length; i++) {
			var start = parseInt(data[i].start , 10);
			var end   = parseInt(data[i].end , 10);
			if(current >= start && current <= end) {
				checkIsLive = true;
				break;
			}
		}
		
		
		if(checkIsLive != isLive) {
			// 清除immediatenews
			$('.immediatenews').html('');
			
			// console.log('clear');
			switch_header(data);
		}
		// console.log('isLive : ' + isLive + ', checkIsLive : ' + checkIsLive);
		
	}

	
	var apiUrl = 'http://www.cts.com.tw/api/news_lei_4s.json?t=' + (now.getMonth()+1)+ '' + now.getDate() + '' + now.getHours() + '' + now.getMinutes();
	
    $.ajax({
    	url			: apiUrl ,
    	dataType	: 'jsonp',
    	jsonpCallback		: "callback_4s",
    })
    .done(function(data){
    	switch_header(data);
    	
    	timer = window.setInterval( function() {
    		time_checker(data);
    	} , 15000);
    	
    	time_checker(data);
	})
	.fail(function(){
		console.error('Can not load news_lei_4s.json.');
	});

});