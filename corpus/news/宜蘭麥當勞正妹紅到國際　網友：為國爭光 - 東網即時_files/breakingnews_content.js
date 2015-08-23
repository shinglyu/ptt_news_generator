// JavaScript Document

if ( true ) {
	// $writeScript('/js/v2/oncc-imgLightBoxLib.js');	
}
if($ONCC.corpBar.getCurrentSection() == 'commentary'){
	$writeScript('/js/v2/oncc-global_commentary_list.js');
}

var documenttitle = document.title;
if ( ONCC.Specials.keyword != ''){
	ONCC.AdZone= {};
	ONCC.OpenXAdZone = {};
}

//BK_News.content.articleId = 'bkn-20140429155030873-0429_00822_001';
//document.referrer.indexOf('on.cc') == -1 

if ( ONCC.view == 'm' ) {
//if (  window.location.href.indexOf('from=webview') != -1 || (detectmob() &&  window.location.href.indexOf('share=true') != -1)  ) {

	//$('body').addClass('mview');
	$('#bottomNavCTN').remove();
	$('#footer').remove();
	document.write('<link rel="stylesheet" type="text/css" href="/css/v2/oncc-global_mobile.css" media="all">');
	
	 
	if ( ONCC.from == 'a' ) {
		$('head').append('<meta id="viewport" name="viewport" content="width=device-width; ">'); 
	} else {
		if( navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)	 || navigator.userAgent.match(/iPod/i) ){
			$('head').append('<meta id="viewport" name="viewport" content="width=device-width; ">'); 
		//} else if ( navigator.userAgent.match(/Android 2./i) ){
			
		} else {
			$('head').append('<meta id="viewport" name="viewport" content="width=640;  ">'); 
		//	$('head').append('<meta id="viewport" name="viewport" content="width=640,user-scalable=no ">'); 
		}
	}
	 
	//ONCC.AdZone= {};
	//ONCC.OpenXAdZone = {};
	
	$('.photo>table>tbody>tr>td').css('float','left');
	$('.photo>table>tbody>tr>td a').css('display','block');
	$('.photo>table>tbody>tr>td').css('margin-bottom','10px');
	$('.photo>table>tbody>tr>td .photo_next_prev').css('display','none');

	
}


BK_News.content = {
    articleId: '',
    priority: '',
    pub_code: '',
    siteMap_code: '',
    section_name: '',
    section_code: '',
    video_path: '',
    vid: '',
    vcreateTime: '',
    vcreateDate: '',
    vthumbnailPath: '',
    last_focus_news_date: null,
    lastRecentNews: [],
    timerId: null,
    totalPage: 0,
    firstNum: 0,
    lastNum: 0,
    pager: null,
    pageSize: 20,
    idx: 0,
    defaultIdx: 0,
    pagerObj: null,
    timerFlag: 1,
    photo_count: 0,
    isFirst_check_next_prev: true,
    countLastItem: 0,
	listdata : null,
	
    init: function () {
		
		BK_News.content.pubDate = BK_News.content.articleId.split('-')[1].substr(0,8);
		
		if ( $ONCC.corpBar.getCurrentSection() == 'commentary') {
		
			$('#newsHeadline span.datetime').css('width','150px');
			$('#newsHeadline .reversecolor').show();
			
			if ( $ONCC.cookie('reversecolor') == null ) {
				$ONCC.cookie('reversecolor','white', { path:'/'});
			}

			if ( $ONCC.cookie('reversecolor') == 'black' ) {
				$('#centerCTN .upper .leftSide').removeClass('light');
				$('#centerCTN .upper .leftSide').addClass('dark');
			
			} else {
				 $('#centerCTN .upper .leftSide').addClass('light');
				$('#centerCTN .upper .leftSide').removeClass('dark');
				
			}
			
			$('#newsHeadline .reversecolor').click( function() {
				
				if ( $ONCC.cookie('reversecolor') == 'white' ) {
					$('#centerCTN .upper .leftSide').removeClass('light');
					$('#centerCTN .upper .leftSide').addClass('dark');
					
					$ONCC.cookie('reversecolor','black', { path:'/'});
				
				} else {
					$('#centerCTN .upper .leftSide').addClass('light');
					$('#centerCTN .upper .leftSide').removeClass('dark');
					$ONCC.cookie('reversecolor','white', { path:'/'});
					
				}

			});

			var title = $('.topHeadline h1').text();
			var titleNews = title.split('：');
			var titleArray = ( titleNews.length > 1 ) ?  titleNews[1].split('-') :titleNews[0].split('-');
			var category =  ( titleNews.length > 1 ) ? titleNews[0] : '';
			var author = '';
		
			author = BK_News.content.authorname;
			authorCat = BK_News.content.authortitle ;
			
			var pic_img =  $CommentaryItemAuthor(author,category);
			if( ONCC.getSection() == 'commentary' && ONCC.getLocation() == 'tw' && 1==2 || ONCC.getSection() == 'commentary' && ONCC.getLocation() == 'cn' && 1==2){
			var authorHtml = ( author != '' ) ? '<div class="author"> - ' + author +'</div>'+ (authorCat != '' ? ' <div class="authorCat">'+authorCat+'</div><div class="authorTitleLine" style="background-color:'+($ONCC.corpBar.getLocationPath() == 'hk' ? '#009E96;':($ONCC.corpBar.getLocationPath() == 'tw' ? '#d463d5;':'#d60009;'))+'"></div>':'') + '': '';
			}else{
			var authorHtml = ( author != '' ) ? '<span class="author"> - ' + author + (authorCat != '' ? ' <span class="authorCat">'+authorCat+'</span>':'') + '</span>': '';
			}
			var realTitle = titleArray[0];
			
			
			var title = new $CommentaryItemTitle();
			var odn = title.odn;//['正論','功夫茶','政治解碼','神州觀察','世界視線','產評'] ;
			var odn_comm = title.odn_comm;//['龍吟虎嘯','坦言集','彈指春秋','強詞有理','大道之行','滴滴金','商語廣播','菩提明鏡','笑看天下','兩岸三地情','如刀集','龍七公'];
			var tsn = title.tsn;//['社論','太一叮','小氣候','陽光華夏','SUN瞭望','財經論點'];
			var tsn_comm = title.tsn_comm;//['鐵筆錚錚','毓民特區','雪地鴻爪','人民之聲','熱帶語林','夢閒話','橫眉冷看','熱廚房','烽火台','亂世達觀','虎視寰球','龍吟大地'];
			
			//for testing mod
			var mod_comm = title.mod_comm;
			
			
			var title_cn = new $CommentaryItemTitle('_cn');
			var odn_cn =  title_cn.odn;//['正论','功夫茶','政治解码','神州观察','世界视线','产评'];
			var odn_comm_cn = title_cn.odn_comm;//['龙吟虎啸','坦言集','弹指春秋','强词有理','大道之行','滴滴金','商语广播','菩提明镜','笑看天下','两岸三地情','如刀集','龙七公'];
			var tsn_cn = title_cn.tsn;//['社论','太一叮','小气候','阳光华夏','SUN瞭望','财经论点'];
			var tsn_comm_cn = title_cn.tsn_comm;//['铁笔铮铮','毓民特区','雪地鸿爪','人民之声','热带语林','梦闲话','横眉冷看','热厨房','烽火台','乱世达观','虎视寰球','龙吟大地'];
			
			//for testing mod
			var mod_comm_cn = title.mod_comm;
			
			var pic_img_html = '';
			if( ONCC.getSection() == 'commentary' && ONCC.getLocation() == 'tw' && 1==2 || ONCC.getSection() == 'commentary' && ONCC.getLocation() == 'cn'  && 1==2){
			if(pic_img != '' && ($ONCC.corpBar.getLocationPath() == 'tw' || $ONCC.corpBar.getLocationPath() == 'cn')){
				pic_img_html = '<div><div style="float:left;margin-right:8px" ><img style="width:70px;border: 2px solid white;" src="'+pic_img+'" /></div>';
			}
			
			////!!other article function use this format to get catg!!////
			if ( $ONCC.corpBar.getLocationPath() == 'hk' && ( ( $.inArray(  category , odn ) != -1 ) ||  ( $.inArray(  category , odn_comm ) != -1 ) || ( $.inArray(  category , odn_cn ) != -1 ) || ( $.inArray(  category , odn_comm_cn ) != -1)) ) {
				category = '<div><div style="color:#e50077;display:inline;">' + category +  '</div>';
			}
			if ( $ONCC.corpBar.getLocationPath() == 'hk' && ( ( $.inArray(  category , tsn ) != -1 ) ||  ( $.inArray(  category , tsn_comm ) != -1 ) || ( $.inArray(  category , tsn_cn ) != -1 ) || ( $.inArray(  category , tsn_comm_cn ) != -1)) ) {
				category = '<div><div style="color:#ed6d00;display:inline;">' + category +  '</div>';
			}
			
			//for testing mod
			if ( $ONCC.corpBar.getLocationPath() == 'hk' && ( ( $.inArray(  category , mod_comm ) != -1 ) ||  ( $.inArray(  category , mod_comm_cn ) != -1 ) ) ) {
				category = '<div><div style="color:#009E96;display:inline;">' + category +  '</div>';
			}
			
			if ( $ONCC.corpBar.getLocationPath() == 'tw' ) {
				category = '<div><div style="color:#d463d5;display:inline;">' + category +  '</div>';
			}
			if ( $ONCC.corpBar.getLocationPath() == 'cn' ) {
				category = '<div><div style="color:#d60009;display:inline;">' + category +  '</div>';
			}
			
			$('.topHeadline h1').html(pic_img_html + category + authorHtml + '<div style="font-size:18px;">' + realTitle + '</div></div></div>');
			
			$("#newsHeadline .topHeadline").after("<div class='titleBagkgroundPage'></div>");
			$("#newsHeadline").wrap("<div id='wrapNewsHeadline'></div>");
			}else{
			if(pic_img != '' && ($ONCC.corpBar.getLocationPath() == 'tw' || $ONCC.corpBar.getLocationPath() == 'cn')){
				pic_img_html = '<div style="float:left;margin-right:8px" ><img style="width:70px" src="'+pic_img+'" /></div>';
			}
			
			////!!other article function use this format to get catg!!////
			if ( $ONCC.corpBar.getLocationPath() == 'hk' && ( ( $.inArray(  category , odn ) != -1 ) ||  ( $.inArray(  category , odn_comm ) != -1 ) || ( $.inArray(  category , odn_cn ) != -1 ) || ( $.inArray(  category , odn_comm_cn ) != -1)) ) {
				category = '<span style="color:#e50077;">' + category +  '</span>';
			}
			if ( $ONCC.corpBar.getLocationPath() == 'hk' && ( ( $.inArray(  category , tsn ) != -1 ) ||  ( $.inArray(  category , tsn_comm ) != -1 ) || ( $.inArray(  category , tsn_cn ) != -1 ) || ( $.inArray(  category , tsn_comm_cn ) != -1)) ) {
				category = '<span style="color:#ed6d00;">' + category +  '</span>';
			}
			
			//for testing mod
			if ( $ONCC.corpBar.getLocationPath() == 'hk' && ( ( $.inArray(  category , mod_comm ) != -1 ) ||  ( $.inArray(  category , mod_comm_cn ) != -1 ) ) ) {
				category = '<span style="color:#009E96;">' + category +  '</span>';
			}
			
			if ( $ONCC.corpBar.getLocationPath() == 'tw' ) {
				category = '<span style="color:#d463d5;">' + category +  '</span>';
			}
			if ( $ONCC.corpBar.getLocationPath() == 'cn' ) {
				category = '<span style="color:#d60009;">' + category +  '</span>';
			}
			
			$('.topHeadline h1').html(pic_img_html + category + authorHtml + '<br/>' + realTitle );

			}
			/* if ( $ONCC.cookie('reversecolor') == 'black' ) {
				$('#centerCTN .upper .leftSide .author').css('color','#fff');
				$('#centerCTN .upper .leftSide .authorCat').css('color','#cacaca');
				$('#centerCTN .upper .leftSide .imgmask').css('width','580px');
			}  */
				
			var dateRegExp = new RegExp('-|:| ', 'g');
			if(typeof BK_News.content.editTime !== 'undefined') {
				var day_str = BK_News.content.pubDate;
				var edit_dat_str = BK_News.content.editTime;
			} else {
				var day_str = BK_News.content.pubDate;
				var edit_dat_str = '';
			}
			var pubDate = $('#newsHeadline .datetime').text();
			var time_str = pubDate.split(' ')[0];
			time_str = time_str.replace('[','').replace(']','');
			
			
			if(typeof BK_News.content.pubTime !== 'undefined') {
				var pubTime = BK_News.content.pubTime;
			} else {
				var pubTime = '';
			}
			if(typeof BK_News.content.editTime !== 'undefined') {
				var editTime = BK_News.content.editTime;
			} else {
				var editTime = pubTime;
			}
			
		
			var datetime_str = '';
			
			
			//if ( day_str == current_day_str ) {
			//	datetime_str = time_str;
			//} else {
			//	datetime_str = $dateFormat(day_str + time_str.replace(':',''),'mm月dd日(dddd) HH:MM');
				//day_str = date_arr[1]*1 + '月' + date_arr[0]*1 + '日' + '&nbsp;';
			//}
			datetime_str = $dateFormat(day_str + time_str.replace(':',''),'mm月dd日(dddd)');
			if(BK_News.content.editTime != '' && BK_News.content.editTime != '[ERROR]' &&  editTime != pubTime) {
				var edit_time_str = BK_News.content.editTime.substr(0, 4);
				edit_time_str = edit_time_str.substr(0, 2) + ':' + edit_time_str.substr(2, 2);
				edit_datetime_str = $dateFormat(day_str + edit_time_str.replace(':',''),'mm月dd日(dddd) HH:MM');
				edit_datetime_str = edit_datetime_str.split(' ');
				edit_datetime_str = edit_datetime_str[1];
				datetime_str = datetime_str.split(' ');
				datetime_str = '<div class="date">' + datetime_str[0] + '</div><div class="time"><span>' + edit_datetime_str + '更新</span></span>' + datetime_str[1] + '建立</span></div>';
			}
			//datetime_str = '';
			//$('#newsHeadline .datetime').hide();
			//$('#newsHeadlineTop .datetime').hide();

		} else {
			var pubDate = $('#newsHeadline .datetime').text();
			var time_str = pubDate.split(' ')[0];
			time_str = time_str.replace('[','').replace(']','');
			var date_arr = pubDate.split(' ')[1].split('/'); 
			var day_str = date_arr[2] + '' + date_arr[1] + '' + date_arr[0];
			
			if(typeof BK_News.content.pubTime !== 'undefined') {
				var pubTime = BK_News.content.pubTime;
			} else {
				var pubTime = '';
			}
			if(typeof BK_News.content.editTime !== 'undefined') {
				var editTime = BK_News.content.editTime;
			} else {
				var editTime = pubTime;
			}
			
			
			var current_day_str = $dateFormat(todaydate , 'yyyymmdd')
			var datetime_str = '';
			var edit_datetime_str = '';
			
			//if ( day_str == current_day_str ) {
			//	datetime_str = time_str;
			//} else {
				datetime_str = $dateFormat(day_str + time_str.replace(':',''),'mm月dd日(dddd) HH:MM');
				if(BK_News.content.editTime != '' && BK_News.content.editTime != '[ERROR]' && editTime != pubTime) {
					var edit_time_str = BK_News.content.editTime.substr(0, 4);
					edit_time_str = edit_time_str.substr(0, 2) + ':' + edit_time_str.substr(2, 2);
					edit_datetime_str = $dateFormat(day_str + edit_time_str.replace(':',''),'mm月dd日(dddd) HH:MM');
					edit_datetime_str = edit_datetime_str.split(' ');
					edit_datetime_str = edit_datetime_str[1];
					datetime_str = datetime_str.split(' ');
					datetime_str = '<div class="date">' + datetime_str[0] + '</div><div class="time"><span>' + edit_datetime_str + '更新</span></span>' + datetime_str[1] + '建立</span></div>';
				}
				//day_str = date_arr[1]*1 + '月' + date_arr[0]*1 + '日' + '&nbsp;';
			//}k
			
			var title = $('.topHeadline h1').html();
			
			
			$('.topHeadline h1').html( ONCC.titlekeyword.converter(title,current_day_str + '000000') );
			$('.commentary_icon_hover').css('display','none');
		}
      
        $('#newsHeadline .datetime').html(datetime_str);
        $('#newsHeadlineTop .datetime').html( datetime_str);
       
		var loadStatusFunc1 = function () {
		
            if(BK_News.Active.flag == 0) return;
            if(BK_News.content.timerFlag == 1) {
			
				var url = '';
				if ( ONCC.getSection() == 'lifestyle') {
					
					if (  $.urlParams.get('section') != '' &&  $.urlParams.get('section') != null  ) {
						var section = $.urlParams.get('section');
						url =  NEWS_PATH + '/cnt/lifestyle/' + section +'_list'+ $ONCC.curLang  + '.js';
						var current_section_object = 
							{ 
							"highlight" : url, 
							"url" : url , 
							"url_short" : url ,
							"url_other" : url ,
							"code" : '822', 
							"name" : 'lifenews', 
							"isFirst": true,
							"codeName":'生活',
							"icon": '/images/thumb_hknews.jpg'
							};
						current_section = current_section_object;
					}
				} else {
					var url = NEWS_PATH + '/js/' + BK_News.content.pubDate + '/' +  ONCC.getSection() + '_dailyList' + $ONCC.curLang  + '.js';
				}

				// dailyList
                var listLoader1 = new $ListLoader( url );
                listLoader1.callbacks.push(function (data) {

					BK_News.content.listdata = data;
					
					var title =  ($("title").text() != '') ? $("title").text() : $(document).attr("title"); // get the orginal title from chrome : ie

					

					// lifestyle news
					if ( ONCC.getSection() == 'lifestyle' ) {
						
						if (  $.urlParams.get('section') != '' &&  $.urlParams.get('section') != null  ) {
							var link = '';
							for (var i = 0; i < data.length; i++) {
								link = data[i].link.replace('.html',$ONCC.curLang + '.html') + '?section=' +  $.urlParams.get('section');
								data[i].link = link;
							}
						}
					}

					if ( $ONCC.corpBar.getCurrentSection() == 'commentary')  {
					
						// get backday list
						var backday = $strToDate( BK_News.content.pubDate );
						backday.setDate( backday.getDate() - 1);
						var url = NEWS_PATH + '/js/' + $dateFormat( backday , 'yyyymmdd') + '/' +  ONCC.getSection() + '_dailyList' + $ONCC.curLang  + '.js';
						var listLoader_back = new $ListLoader( url );
						listLoader_back.callbacks.push(function (data) {
							
							if ( ( data != null ) ? ( data.length > 0 ) : false ) {
								
								$.each ( data , function( k,v ) {
									BK_News.content.listdata.push( v );
								});
									
							}
							
							// get nextday list
							var nextday = $strToDate( BK_News.content.pubDate );
							nextday.setDate( nextday.getDate() + 1);
							var url = NEWS_PATH + '/js/' + $dateFormat( nextday , 'yyyymmdd') + '/' +  ONCC.getSection() + '_dailyList' + $ONCC.curLang  + '.js';
							var listLoader_next = new $ListLoader( url );
							listLoader_next.callbacks.push(function (data) {
								
								if ( ( data != null ) ? ( data.length > 0 ) : false ) {
								
									$.each ( BK_News.content.listdata , function( k,v ) {
										data.push( v );
									});
									
									BK_News.content.listdata = data;
								}
								
								
								BK_News.content.checkNextPrev( BK_News.content.listdata );
								BK_News.content.isFirst_check_next_prev = false;

							});
							listLoader_next.load();
						
						
							
							
						});
						listLoader_back.load();
						
					
					} else {
						BK_News.content.checkNextPrev(data);
						BK_News.content.isFirst_check_next_prev = false;
					}
					
							
					/*	
					if ( $ONCC.corpBar.getCurrentSection() != 'commentary')  {
						
						if(BK_News.content.isFirst_check_next_prev) {
						
							BK_News.content.checkNextPrev(data);
							BK_News.content.isFirst_check_next_prev = false;
						}
						
					} else {
						
						var listLoader2 = new $ListLoader(current_section); // fulllist
						listLoader2.callbacks.push(function (data, section) {
						
							if ( current_section.name ==  'lifenews' ) {
						
								if (  $.urlParams.get('section') != '' &&  $.urlParams.get('section') != null ) {
									var link = '';
									for (var i = 0; i < data.length; i++) {
										link = data[i].link.replace('.html',$ONCC.curLang + '.html') + '?section=' +  $.urlParams.get('section');
										data[i].link = link;
									}
									
								}
							
							}

							if(BK_News.content.isFirst_check_next_prev) {
							
								BK_News.content.checkNextPrev(data);
								BK_News.content.isFirst_check_next_prev = false;
							}
						});

						listLoader2.load();
				
					}*/
                   
                });
				
				
                listLoader1.load();
            }
        };
		
        loadStatusFunc1();
        this.timerId = setInterval(loadStatusFunc1, 300000);
        
        $('.photo a.thickbox').each(function () {
            if($(this).attr('href').indexOf('ERROR') != -1) {
                $(this).remove();
            }
        });
        BK_News.content.photo_count = $('.photo a.thickbox').length;
        if(BK_News.content.photo_count >= 1) {
            if(BK_News.content.photo_count == 1) {
                //$('.photo a.thickbox tr:eq(1) td:eq(1)').html("1/1");
                $('.photo a.thickbox tr:eq(1) td:eq(1)').html('');
                $('.photo  p').addClass('narrow1');
            }
            else {
                $('.photo a.thickbox').each(function (idx) {
                    var left_class = '';
                    var right_class = '';
                    left_class = 'left';
                    right_class = 'right';
                    $('.photo  p').addClass('narrow');
                    $(this).find('tr:eq(1) td:eq(1)').html('<table class="photo_next_prev">' +
                        '<tr>' +
                        '<td><div class="' +
                        left_class +
                        '" rel="' + (idx + 1) + '"></div></td>' +
                        '<td><div class="page_no">' +
                        (idx + 1) +
                        "/" +
                        BK_News.content.photo_count +
                        '</div></td><td><div class="' +
                        right_class +
                        '" rel="' + (idx + 1) + '"></div></td>' +
                        '</tr>' +
                        '</table>');
                });
                $('a.thickbox .left').click(function (event) {
                    var e = event || window.event;
                    e.stopPropagation();
                    e.cancelBubble = true;
                    var idx = parseInt($(this).attr('rel'));
                    $('a.thickbox').hide();
                    if(idx == 1) {
                        $('a.thickbox[rel=' + BK_News.content.photo_count + ']').show();
                    }
                    else {
                        $('a.thickbox[rel=' + (idx - 1) + ']').show();
                    }
                    return false;
                });
                $('a.thickbox .right').click(function (event) {
                    var e = event || window.event;
                    e.stopPropagation();
                    e.cancelBubble = true;
                    var idx = parseInt($(this).attr('rel'));
                    $('a.thickbox').hide();
                    if(idx == BK_News.content.photo_count) {
                        $('a.thickbox[rel=1]').show();
                    }
                    else {
                        $('a.thickbox[rel=' + (idx + 1) + ']').show();
                    }
                    return false;
                });
            }
        }
        else {
            $('.photo').hide();
        }
       // var str = '【on.cc東網專訊】';
	    var str = $ONCC.lang.translate('&#x3010;&#x6F;&#x6E;&#x2E;&#x63;&#x63;&#x6771;&#x7DB2;&#x5C08;&#x8A0A;&#x3011;');
		
		//if ( $ONCC.corpBar.getCurrentSection() == 'commentary' && $ONCC.corpBar.getLocationPath() == 'hk' ) {
		if ( $ONCC.corpBar.getCurrentSection() == 'commentary' ) { // all commentary remove 【on.cc東網專訊】
			str = '';
		}
		
        if( ONCC.getSection() == 'finance' && $ONCC.corpBar.getNation() == 'hk') {
            $('.breakingNewsContent').html('<p class="summary">' + str + BK_News.httpKeyword.renderHtml(BK_News.stockKeyword.renderHtml($('.breakingNewsContent p.summary').html())) + '</p>');
        }
        else {
            $('.breakingNewsContent').html('<p class="summary">' + str + BK_News.httpKeyword.renderHtml($('.breakingNewsContent p.summary').html()) + '</p>');
        }
		
		if ( $ONCC.corpBar.getCurrentSection() == 'commentary') {
			$('.imgmask').each(function () {
				$(this).imgmask({
					width: '580px',
					height: '400px'
				});
			});
		} else {
			$('.imgmask').each(function () {
				$(this).imgmask({
					width: '608px',
					height: '400px'
				});
			});
		}
        
        var polling = $('.polling');
        if(polling.text() != '') {
            $('.pollingContent').show();
        }
		$('.commentary_icon').click(function(){
			$('html, body').animate({
				scrollTop: $('#comm_shortcut_target').offset().top
			}, 400);
		});
		
		$('.commentary_icon').hover(
			function(){
				$('.commentary_icon_hover').css('left',$('.commentary_icon').position().left - 48);
				$('.commentary_icon_hover').show();
			},
			function() {
				
				$('.commentary_icon_hover').hide();
			})
		;
		
		
		//$('div.photo a.thickbox').not(':first').hide();
    },
    init_itvc : function() {
		
		var playerPath = '/img/v2/player.swf';
		var tvcAdzone = 0;
		
		if ( $ONCC.corpBar.getNation() == 'tw' ) {
			tvcAdzone = 445;
		} else {
			tvcAdzone = 445;
		}
		
		var playerURL = playerPath + '?mid=&mdate=&' + 't=' +   (( ONCC.getNation() == 'tw' ) ? '&msect=twbkn':'&msect=bkn');
		var fv = {
			today: todaydate,
			tvc: 1,
			tvcSeq: 1,
			playMode: 7,
			autoPlay: 0,
			loadThumb: 1,
			adType:'oncc',
			bumper: 0,
			buttons: 'vol',
			tvcAdzone : tvcAdzone,
			adzone : tvcAdzone,
			//tvcAdZones: '1185,1184,1186,1187,1189',
			//customThumbPath:
			customThumbPath: '',
			useAgent: navigator.userAgent

		};
		
		if (  BK_News.html5.domain == 'http://video.cdn.on.cc' ) {
			playerURL = playerURL.replace('/img/v2/player.swf','/img/v2/playerAuto.swf');
			
			//'http://video.cdn.on.cc
			fv.autoPlay = 1;
		}
		var params = {
			allowFullScreen: true,
			allowScriptAccess: 'always',
			wmode: 'opaque'
		};
		swfobject.embedSWF(playerURL, "playerCTN", "570", "362", "9.0.0", "expressInstall.swf", fv, params, {
			name: 'player_flash'
		});
		$('.video').css('height','1px');
		$('.video').css('overflow','hidden');
		$('.video').show();
			
	},
	init_video: function () {

        //if (BK_News.content.video_path.indexOf('ERROR') == -1 ) {
        if((BK_News.content.video_path != '') && (BK_News.content.video_path.indexOf('ERROR') == -1)) {
            var today = new Date().getTime();
			var playerPath = '/img/v2/player.swf';
			var tvcAdzone = 0;
			
			if ( $ONCC.corpBar.getNation() == 'tw' ) {
				tvcAdzone = 447;
			} else {
				tvcAdzone = 446;
			}
			
			/*
			if ( $ONCC.corpBar.getNation() == 'hk' ) {
				tvcAdzone = 3092;
			} else {
				tvcAdzone = 3093;
			}
			
			if ( window.location.href.indexOf('UAT=true') != -1 ) {
				playerPath = '/img/v2/playerUAT.swf';
				
			
			}*/
			
				
			//}		
			//if(BK_News.platform.mobile || window.location.href.indexOf('from=webview') != -1){
			if( ONCC.view == 'm' ){
				//sim
				$('.video #skip_btn').live('click', function(){
					/*ONTV.p.tvcBool = false;
        			skipITVC();	*/
				})
				BK_News.html5.write_player();
				

				if(BK_News.html5.firstLoad){
					
				} else {
					
				}
				/*
				var vctime = new Date(BK_News.content.vcreateTime*1000);								
				var video = 'http://202.125.90.194/Video/' + $dateFormat(vctime, 'yyyymm') + '/' + BK_News.content.vid + '_ipad.mp4';
				
				var player_html = '<div id="player_html5" style="margin-top:5px;"><video id="html5_player" autobuffer poster="" width="580" height="326"><source id="mp4Vid" src="' + video + '" type="video/mp4"></video></div>';				
				
				$('.video').css({
					'padding-left' : '14px',
					'padding-right' : '14px',
					'width' : '580px',
					'height' : '375px'
				});
				$('#btnMoreVideoCTN').width(580);
				$('#btnMoreVideoCTN').after(player_html);
								
				$('.video').show();
				$('#pageCTN-left-row1').show();
				*/
			} else {			
				var playerURL = playerPath + '?mid=' + BK_News.content.vid + '&mdate=' + BK_News.content.vcreateTime + '&' + 't=' + today +  (( ONCC.getNation() == 'tw' ) ? '&msect=twbkn':'&msect=bkn');
				var fv = {
					today: todaydate,
					tvc: 1,
					tvcSeq: 1,
					playMode: 4,
					autoPlay: 0,
					loadThumb: 1,
					adType:'oncc',
					bumper: 0,
					buttons: 'vol',
					tvcAdzone : tvcAdzone,
					adzone : tvcAdzone,
					//tvcAdZones: '1185,1184,1186,1187,1189',
					//customThumbPath:
					customThumbPath: BK_News.content.vthumbnailPath,
					useAgent: navigator.userAgent

				};
				
				if (  BK_News.html5.domain == 'http://video.cdn.on.cc' ) {
					playerURL = playerURL.replace('/img/v2/player.swf','/img/v2/playerAuto.swf');
					
					//'http://video.cdn.on.cc
					fv.autoPlay = 1;
				}
				var params = {
					allowFullScreen: true,
					allowScriptAccess: 'always',
					wmode: 'opaque'
				};
				swfobject.embedSWF(playerURL, "playerCTN", "570", "362", "9.0.0", "expressInstall.swf", fv, params, {
					name: 'player_flash'
				});
				$('.video').show();
				$('#pageCTN-left-row1').show();
				/*
				if ($('.video').css('display') != 'none' ) {
						$('#pageCTN-left-row1').html($('#newsHeadline').html()); 
						$('#pageCTN-left-row1').show();
						$('#newsHeadline').hide();		
				}
				*/
			}
        }
        else {
            $('#newsHeadline').show();
        }
    },
	
	getOtherArticle: function(data){
			
		var title = new $CommentaryItemTitle($ONCC.curLang);
		
		if(ONCC.getLocation() == 'tw'){
			var tempList = title.combine_tw;
		}else if(ONCC.getLocation() == 'cn'){
			var tempList = title.combine_cn;
		}else {
			var tempList = title.combine_hk;
		}
		var list = [];
		$.each(tempList,function(k,v){
			if(typeof v != 'string'){
				$.each(v,function(_k,_v){
					list.push(_v);
				})
			}else{
				list.push(v);
			}
		})
		var date = BK_News.content.pubDate;
		//var catg = $('.topHeadline span:first').html();
		
		var prevCatg,nextCatg;
		var prevDateCatg = false;
		var nextDateCatg = false;
		var prev = false;
		var next = false;
		var newsList = {};
		var _newsList = {};
		var dateArr = [];
		$.each(data,function(k,v){
			var _date = v.articleId.split('-')[1].substr(0,8);
			var _catg = getCatg(v);
			
			if(typeof newsList[_date] == 'undefined'){
				newsList[_date] = [];
				_newsList[_date] = [];
				dateArr.push(_date);
			}
			
			if($.inArray(_catg,list) == -1){
				_newsList[_date].push(v);
			}else{
				$.each(list,function(_k,_v){
					if(_catg == _v){
						newsList[_date][_k] = v;
					}
				});
			}
		});
		$.each(newsList,function(k,v){
			newsList[k] = filtEmpty(newsList[k]);
			newsList[k] = $.merge(newsList[k],_newsList[k]);
		});
		$.each(newsList,function(k,v){
			$.each(v,function(_k,_v){
				if(typeof _v != 'undefined' && _v.articleId == BK_News.content.articleId){
					if(_k != 0 && typeof v[_k-1] != 'undefined'){
						prev = v[_k-1];
					}else{
						var key = getPrevDateKey();
						if(key && typeof newsList[key] != 'undefined' && newsList[key][newsList[key].length-1] != 'undefined'){
							prev = newsList[key][newsList[key].length-1];
						}
					}
					if(typeof v[_k+1] != 'undefined'){
						next = v[_k+1];
					}else{
						var key = getNextDateKey();
						if(key && typeof newsList[key] != 'undefined' && newsList[key][0] != 'undefined'){
							next = newsList[key][0];
						}
					}
				}
			});
		});
		
		return [prev,next]; 
		function getCatg(_d){
			return _d.title.split('：')[0];
		}
		function filtEmpty(arr){
			var _temp = [];
			for(var i = 0 ; i < arr.length ; i++){
				if(typeof arr[i] != 'undefined'){
					_temp.push(arr[i]);
				}
			}
			return _temp;
		}
		function getPrevDateKey(){
			var key = $.inArray(date,dateArr);
			if(key > 0 && typeof dateArr[key-1] != 'undefined'){
				return dateArr[key-1];
			}else{
				return false;
			}
		}
		
		function getNextDateKey(){
			var key = $.inArray(date,dateArr);
			if(typeof dateArr[key+1] != 'undefined'){
				return dateArr[key+1];
			}else{
				return false;
			}
		}
	},
			
			
    checkNextPrev: function ( data ) {

		if ( ONCC.view == 'm' ) {
		//if (  window.location.href.indexOf('from=webview') != -1 ) {
			return ;
		}
        if(typeof data !== 'undefined') {
			var url = new $QueryString ( window.location.href );
			var perfixlink = '';
			var refer = url.get('refer');
			
			if ( refer != null ) {
				perfixlink = '?refer=' +refer;
			} else {
				perfixlink = '?article_id=' + BK_News.content.articleId;
			}
			//if ( $ONCC.corpBar.getCurrentSection() == 'commentary' ) {
			$('.next_prevBtn').html('<a href="/'+ONCC.getLocation()+'/'+ONCC.getSection()+'/index.html' + perfixlink + '" class="backTolist" style="background-position-y: 2px;"><div><img src="/img/v2/content_back.png" title="返回" /></div></a>');
			//} else {
				//$('.next_prevBtn').html('<a href="/'+ONCC.getLocation()+'/'+ONCC.getSection()+'/newslist.html?article_id=' + BK_News.content.articleId + '" class="backTolist" style="background-position-y: 2px;"><div>' + $ONCC.lang.translate('返回') + '</div></a>');
			//}

			var prev = $('.contentFeature  a.prevArticle');
            var next = $('.contentFeature a.nextArticle');
            $('.contentFeature').hide();
			
			if ( $ONCC.corpBar.getCurrentSection() == 'commentary') {
			
			
				var prevNext = this.getOtherArticle(data);
				
				var _prev = prevNext[0];
				var _next = prevNext[1];
				
				if(_next){
				
					next.attr('href',NEWS_PATH + _next.link);
					var eventname = ( typeof ( _next.eventname ) != 'undefined' ) ? (( _next.eventname != '' ) ? _next.eventname + '：':'' ) : '';
					var eventstatus = ( typeof ( _next.eventstatus ) != 'undefined' ) ? (( _next.eventstatus != '' ) ? _next.eventstatus :'' ) : '';
					if ( eventstatus != 'HOT_EVENT' ) {
						_next.title = _next.title.replace(eventname,'');
						eventname = '';
					}
					var title = eventname + _next.title.replace(eventname,'') ;
					next.find('div').html('<ul><li style="float: left;margin-right: 10px;"><img src="/img/v2/content_down_' + ONCC.getNation() + '.png" title="下一則" /></li><li style="line-height: 34px;">'+ title +'</li></ul>');
					next.show();
					$('.next_prevBtn').prepend('<a class="backTolist" href="' + NEWS_PATH + _next.link+ '" style="margin-right: 10px;"><div><img src="/img/v2/content_down_' + ONCC.getNation() + '.png" title="下一則" /></div></a>');
				}
				if(_prev){
					prev.attr('href',NEWS_PATH + _prev.link);
					var eventname = ( typeof ( _prev.eventname ) != 'undefined' ) ? (( _prev.eventname != '' ) ? _prev.eventname + '：':'' ) : '';
					var eventstatus = ( typeof ( _prev.eventstatus ) != 'undefined' ) ? (( _prev.eventstatus != '' ) ? _prev.eventstatus :'' ) : '';
					if ( eventstatus != 'HOT_EVENT' ) {
						_prev.title = _prev.title.replace(eventname,'');
						eventname = '';
					}
					var title = eventname + _prev.title.replace(eventname,'') ;
					prev.find('div').html('<ul><li style="float: left;margin-right: 10px;"><img src="/img/v2/content_up_' + ONCC.getNation() + '.png" title="下一則" /></li><li style="line-height: 34px;">'+ title +'</li></ul>');
					prev.show();
					$('.next_prevBtn').prepend('<a class="backTolist" href="' + NEWS_PATH +_prev.link+ '" style="margin-right: 10px;"><div><img src="/img/v2/content_up_' + ONCC.getNation() + '.png" title="上一則" /></div></a>');
				}
				if(_prev || _next){
					$('.contentFeature').show();
				}
			}else{
				$.each(data,function(k,v){
					if(v.articleId == BK_News.content.articleId){
						if(typeof data[k+1] != 'undefined'){
							
							next.attr('href',NEWS_PATH + data[k+1].link);
							var eventname = ( typeof ( data[k+1].eventname ) != 'undefined' ) ? (( data[k+1].eventname != '' ) ? data[k+1].eventname + '：':'' ) : '';
							var eventstatus = ( typeof ( data[k+1].eventstatus ) != 'undefined' ) ? (( data[k+1].eventstatus != '' ) ? data[k+1].eventstatus :'' ) : '';
							if ( eventstatus != 'HOT_EVENT' ) {
								data[k+1].title = data[k+1].title.replace(eventname,'');
								eventname = '';
							}
							var title = eventname + data[k+1].title.replace(eventname,'') ;
							next.find('div').html('<ul><li style="float: left;margin-right: 10px;"><img src="/img/v2/content_down_' + ONCC.getNation() + '.png" title="下一則" /></li><li style="line-height: 34px;">'+ title +'</li></ul>');
							next.show();
							$('.next_prevBtn').prepend('<a class="backTolist" href="' + NEWS_PATH + data[k+1].link+ '" style="margin-right: 10px;"><div><img src="/img/v2/content_down_' + ONCC.getNation() + '.png" title="下一則" /></div></a>');
						} else {

							var nextday = $strToDate( BK_News.content.pubDate );
							nextday.setDate( nextday.getDate() - 1);
							var url = NEWS_PATH + '/js/' + $dateFormat( nextday , 'yyyymmdd') + '/' +  ONCC.getSection() + '_dailyList' + $ONCC.curLang  + '.js';
							var listLoader = new $ListLoader(url);
							listLoader.callbacks.push(function (data) {
								if ( data.length > 0 ) {
									next.attr('href',NEWS_PATH + data[ 0 ].link);
									var eventname = ( typeof ( data[0].eventname ) != 'undefined' ) ? (( data[0].eventname != '' ) ? data[0].eventname + '：':'' ) : '';
									var eventstatus = ( typeof ( data[0].eventstatus ) != 'undefined' ) ? (( data[0].eventstatus != '' ) ? data[0].eventstatus :'' ) : '';
									if ( eventstatus != 'HOT_EVENT' ) {
										data[0].title = data[0].title.replace(eventname,'');
										eventname = '';
									}
									var title = eventname + data[0].title.replace(eventname,'') ;
									next.find('div').html('<ul><li style="float: left;margin-right: 10px;"><img src="/img/v2/content_down_' + ONCC.getNation() + '.png" title="下一則"  /></li><li style="line-height: 34px;">'+ title +'</li></ul>');
									next.show();
									$('.next_prevBtn').prepend('<a class="backTolist" href="' + NEWS_PATH + data[ 0 ].link+ '" style="margin-right: 10px;"><div><img src="/img/v2/content_down_' + ONCC.getNation() + '.png" title="下一則" /></div></a>');
								}
							});
							listLoader.load();
								
								
		
						}
						if(typeof data[k-1] != 'undefined'){
							prev.attr('href',NEWS_PATH + data[k-1].link);
							var eventname = ( typeof ( data[k-1].eventname ) != 'undefined' ) ? (( data[k-1].eventname != '' ) ? data[k-1].eventname + '：':'' ) : '';
							var eventstatus = ( typeof ( data[k-1].eventstatus ) != 'undefined' ) ? (( data[k-1].eventstatus != '' ) ? data[k-1].eventstatus :'' ) : '';
								if ( eventstatus != 'HOT_EVENT' ) {
									data[k-1].title = data[k-1].title.replace(eventname,'');
									eventname = '';
								}
							var title = eventname + data[k-1].title.replace(eventname,'') ;
							prev.find('div').html('<ul><li style="float: left;margin-right: 10px;"><img src="/img/v2/content_up_' + ONCC.getNation() + '.png" title="上一則" /></li><li style="line-height: 34px;">'+ title +'</li></ul>');
							prev.show();
							$('.next_prevBtn').prepend('<a class="backTolist" href="' + NEWS_PATH + data[k-1].link+ '" style="margin-right: 10px;"><div><img src="/img/v2/content_up_' + ONCC.getNation() + '.png" title="上一則" /></div></a>');
						} else {
							
							var backday = $strToDate( BK_News.content.pubDate );
							backday.setDate( backday.getDate() +  1);
							var url = NEWS_PATH + '/js/' + $dateFormat( backday , 'yyyymmdd') + '/' +  ONCC.getSection() + '_dailyList' + $ONCC.curLang  + '.js';
							var listLoader = new $ListLoader(url);
							listLoader.callbacks.push(function (data) {
								
								if ( data != null ) {
									if ( data.length > 0 ) {
										
										prev.attr('href',NEWS_PATH + data[ data.length - 1 ].link);
										prev.find('div').html('<ul><li style="float: left;margin-right: 10px;"><img src="/img/v2/content_up_' + ONCC.getNation() + '.png" /></li><li style="line-height: 34px;">'+data[ data.length - 1 ].title +'</li></ul>');
										prev.show();
										$('.next_prevBtn').prepend('<a class="backTolist" href="' + NEWS_PATH + data[ data.length - 1 ].link+ '" style="margin-right: 10px;"><div><img src="/img/v2/content_up_' + ONCC.getNation() + '.png" /></div></a>');
									}
								}
								
							});
							listLoader.load();
							
						}
						$('.contentFeature').show();
					}
				});
			}
			
			

        }
    }
};


function listImage(){
	var img = $('img.imgmask');
	//var img = $('img.imgmask').not(':first');
	
	if ( img.length == 0 ) {
		return false;
	}
	if($('.imageList').length == 0){
		$('.moreContent').before('<div style="margin:0 0 10px 0" class="imageList"><div style="width:150px;float:left;margin:10px;margin-left:35px;" class="col0"></div><div style="width:150px;float:left;margin:10px" class="col1"></div><div style="width:150px;float:left;margin:10px" class="col2"></div></div><div style="clear:both;"></div>');
	}
	
	var col = 0;
	$.each(img,function(k){
		
		if ( k > 0 ) {
			var title = $($('.photo a.thickbox')[k]).attr('title');
			var src = $(this).attr('src');
			var i = '<img style="cursor:pointer;width:150px;" src="'+src+'" class="bottomImage-'+k+'" title="'+title.replace(/"/g, '\\"')+'" />';
			$('.imageList .col'+(col%3)).append('<div style="width:150px;">'+i+'<div style="font-size:12px;margin:5px 0;float:left">'+title.replace(/"/g, '\\"')+'</div></div>');
			$('.bottomImage-'+k).bind('click',function(){
				$($('.photo a.thickbox')[k]).click();
			});
			
			col++;
		}
	})
}

BK_News.html5 = {
	tvcBool: true,
	firstLoad: true,
	tvcObject: new Object,
	tvcAdUrl: '',
	tvcAdClick: '',
	tvcThumbnail: '',
	tvcImp1: '',
	tvcImp2: '',
	tvcImp3: '',
	tvcImp4: '',	
	tvcImp1_exed: false,
	tvcImp2_exed: false,
	tvcImp3_exed: false,
	tvcImp4_exed: false,
	playerHTML: '',
	domain : 'http://video.cdn.on.cc',
	//domain : 'http://202.125.90.194',

	write_player: function(){
		
		var vid_ctime = new Date(BK_News.content.vcreateTime * 1000);		
		
		var vid_path = BK_News.html5.domain + '/Video/' + $dateFormat(vid_ctime, 'yyyymm') + '/' + BK_News.content.vid + '_ipad.mp4?' + BK_News.content.vmodifyTime;
				
		if($('#playerCTN').length > 0){ $('#playerCTN').remove();}
			
		var xml_thumb = '/xml/ontv/xml/Metadata/Video/' + $dateFormat(vid_ctime, 'yyyymm') + '/' + BK_News.content.vid + '.xml?t=' + new Date().getTime();
		//var xml_itvc = 'http://hk.on.cc/starhall/test_2.xml';
		//var xml_itvc = 'adxml/adds.php?what=zone:1588';
		//var xml_itvc = '/adxml/adds.php?what=zone:1588';
		
				
		$.when( $.ajax(xml_thumb)).done(function(data_thumb, data_itvc){

			var thumb_url = $(data_thumb).find('thumbnailUrlList').find('url').text();
			var thumb_ar = thumb_url.split("/");
			
			var path_thumb = 'http://tv.on.cc/xml/Thumbnail/' + thumb_ar[(thumb_ar.length - 2)] + '/bigthumbnail/' + thumb_ar[(thumb_ar.length - 1)];
			BK_News.html5.tvcThumbnail = path_thumb;
			
			BK_News.html5.playerHTML = '<div id="player_html5" style="margin-top:5px;">' +
									   	'<video controls id="html5_player" poster="' + path_thumb + '" width="580" height="326">' +
											'<source id="mp4Vid" src="" type="video/mp4">' +
										'</video>' +
							  		   '</div>';
							  		  // '<div id="html5_skip_btn">跳過</div>';
			
			$('.video').css({
							'padding-left' : '14px',
							'padding-right' : '14px',
							'position' : 'relative',
							'width' : '580px',
							'height' : '374px'});
				
			$('#btnMoreVideoCTN').width(580);
			$('#btnMoreVideoCTN').after(BK_News.html5.playerHTML);
		
			$('.video').show();
			//$('#pageCTN-left-row1').show();
					
			var adlogUrl = $(data_itvc).find('adloggif').text();
            var adloggif = new Image();
            adloggif.src = adlogUrl;									
			
			BK_News.html5.play_action();
			BK_News.html5.tvcBool = false;
						
						//$('#html5_player').attr('autoplay','true');
						BK_News.html5.set_src('');
			
			
			$('#html5_skip_btn').live('click', function(){
				BK_News.html5.tvcBool = false;
				$('#html5_player').attr('autoplay','true');
				BK_News.html5.set_src('');
			})
		}).fail(function(){
			
			
		});	
	},
	/*
	write_player: function(){
		
		var vid_ctime = new Date(BK_News.content.vcreateTime*1000);								
		var vid_path = 'http://202.125.90.194/Video/' + $dateFormat(vid_ctime, 'yyyymm') + '/' + BK_News.content.vid + '_ipad.mp4';
				
		if($('#playerCTN').length > 0){ $('#playerCTN').remove();}
			
		var xml_thumb = '/xml/ontv/xml/Metadata/Video/' + $dateFormat(vid_ctime, 'yyyymm') + '/' + BK_News.content.vid + '.xml?t=' + new Date().getTime();
		//var xml_itvc = 'http://hk.on.cc/starhall/test_2.xml';
		//var xml_itvc = 'adxml/adds.php?what=zone:1588';
		var xml_itvc = '/adxml/adds.php?what=zone:1588';
		
				
		$.when( $.ajax(xml_thumb),  $.ajax(xml_itvc)).done(function(data_thumb, data_itvc){

			var thumb_url = $(data_thumb).find('thumbnailUrlList').find('url').text();
			var thumb_ar = thumb_url.split("/");
			
			var path_thumb = 'http://tv.on.cc/xml/Thumbnail/' + thumb_ar[(thumb_ar.length - 2)] + '/bigthumbnail/' + thumb_ar[(thumb_ar.length - 1)];
			BK_News.html5.tvcThumbnail = path_thumb;
			
			BK_News.html5.playerHTML = '<div id="player_html5" style="margin-top:5px;">' +
									   	'<video controls id="html5_player" poster="' + path_thumb + '" width="580" height="326">' +
											'<source id="mp4Vid" src="" type="video/mp4">' +
										'</video>' +
							  		   '</div>';
							  		  // '<div id="html5_skip_btn">跳過</div>';
			
			$('.video').css({
							'padding-left' : '14px',
							'padding-right' : '14px',
							'position' : 'relative',
							'width' : '580px',
							'height' : '374px'});
				
			$('#btnMoreVideoCTN').width(580);
			$('#btnMoreVideoCTN').after(BK_News.html5.playerHTML);
		
			$('.video').show();
			//$('#pageCTN-left-row1').show();
					
			var adlogUrl = $(data_itvc).find('adloggif').text();
            var adloggif = new Image();
            adloggif.src = adlogUrl;									
			
			BK_News.html5.play_action();
			
			var reloadpath = $(data_itvc).find('reloadpath').text();

			if(reloadpath == ''){
				//$('#newsHeadline').after('<div>Case 1</div>');
				
				BK_News.html5.tvcObject = data_itvc;			
				BK_News.html5.tvcAdUrl = $(data_itvc).find('newsUrlList');

				BK_News.html5.set_imp(BK_News.html5.tvcAdUrl);
				BK_News.html5.set_src(BK_News.html5.tvcObject);
			} else {
				var xml_reload = reloadpath;
				$.ajax({
                	type: "GET",
					url: "../../adxml2/" + xml_reload.substring(35),
					//url: "http://hk.on.cc/starhall/itvc_test.xml",
                	dataType: "xml",
                	success: function (data) {												
						var tvcTitle = ($(data).find('title').text());
						if(tvcTitle == ''){
							//$('#newsHeadline').after('<div>Case 2</div>');
							
							BK_News.html5.tvcBool = false;
						
							$('#html5_player').attr('autoplay','true');
							BK_News.html5.set_src('');	
						} else {
							//$('#newsHeadline').after('<div>Case 3</div>');
							
							BK_News.html5.tvcObject = data;
							BK_News.html5.tvcAdUrl = $(data).find('newsUrlList');
	
							BK_News.html5.set_imp(BK_News.html5.tvcAdUrl);
							BK_News.html5.set_src(BK_News.html5.tvcObject);	
						}												
					},
					error: function (){
						//$('#newsHeadline').after('<div>Case 4</div>');
						
						BK_News.html5.tvcBool = false;
						
						//$('#html5_player').attr('autoplay','true');
						BK_News.html5.set_src('');
					}
				});
			}
			
			$('#html5_skip_btn').live('click', function(){
				BK_News.html5.tvcBool = false;
				$('#html5_player').attr('autoplay','true');
				BK_News.html5.set_src('');
			})
		}).fail(function(){
			
			
		});	
	},
	*/
	
	set_imp: function(data){
		if (data.length != 0) {
			var urls = $(data).find('news_url');
			for (var i = 0; i < urls.length; i++) {
				var title = $(urls[i]).attr('title');
				var url = $(urls[i]).text();

				if (title == 'impression')
					BK_News.html5.tvcImp1 = url;
				if (title == 'impression1')
					BK_News.html5.tvcImp2 = url;
				if (title == 'impression2')
					BK_News.html5.tvcImp3 = url;
				if (title == 'impression3')
					BK_News.html5.tvcImp4 = url;
			}
    	}
	},
	set_src: function(data){
		if(BK_News.html5.tvcBool){ // Play TVC
			var tvc_id = $(data).find('programId').text();
			var tvc_createTime = $(data).find('createTime').text();
			var tvc_date = new Date(tvc_createTime * 1000);
			var video_src = BK_News.html5.domain + '/Video/' + $dateFormat(tvc_date, 'yyyymm') + "/" + tvc_id + "_ipad.mp4?" + BK_News.content.vmodifyTime;
			document.getElementById('html5_player').src = video_src;
			//document.getElementById('html5_player').play();									
						
			$('#html5_player').bind('ended', function () {
				$('#html5_player').unbind('ended');
			
				BK_News.html5.tvcBool = false;
				
				myVid=document.getElementById("html5_player");
				myVid.autoplay=false;
				$('#html5_player').attr('autoplay','false');

				BK_News.html5.set_src('');
			});
		} else { // Play content video
			$('.video').height(374);
			//$('#html5_skip_btn').hide();
			
			if ($('#play_btn').length > 0) {
            	$('#play_btn').remove();
        	}
			
			tvcImp1_exed = false;
			tvcImp2_exed = false;
			tvcImp3_exed = false;
			tvcImp4_exed = false;
			
			if($('#adclicklayer').length > 0){$('#adclicklayer').remove()}			
			
			var vid_ctime = new Date(BK_News.content.vcreateTime*1000);								
			var vid_path = BK_News.html5.domain + '/Video/' + $dateFormat(vid_ctime, 'yyyymm') + '/' + BK_News.content.vid + '_ipad.mp4?' + BK_News.content.vmodifyTime;
				
			document.getElementById('html5_player').src = vid_path;
			//document.getElementById('html5_player').play();
			
			$('#html5_player').bind('ended', function () {
				$('#html5_player').unbind('ended');
				
				if(BK_News.html5.tvcObject != ''){
					BK_News.html5.tvcBool = true;
					$('#html5_player').remove();	
					$('#btnMoreVideoCTN').after(BK_News.html5.playerHTML);
					
					BK_News.html5.play_action();
					BK_News.html5.set_src(BK_News.html5.tvcObject);
				}
			});
		}
	},
	play_action: function(){
		
		if ($('#play_btn').length > 0) {
            $('#play_btn').remove();
        }
		
		if (BK_News.platform.mobile || window.location.href.indexOf('html5=true') != -1) {
			if (BK_News.platform.iOS_platform == "iPad" || BK_News.platform.android) {
				$('#player_html5').append( '<div id="play_btn">' +
											'<img src="http://tv.on.cc/img/play_icon.png" width="70" height="70" />' +
										   '</div>');
										   
				$('#play_btn').live('click', function () {
					$('#play_btn').remove();
					document.getElementById('html5_player').play();
				});
			}
		}
		
		$('#html5_player').bind('play', function(){
			$('#html5_player').unbind('play');
			
			if ($('#play_btn').length > 0) {
         		$('#play_btn').remove();
        	}
		
			if(BK_News.html5.tvcBool){
				var url_items = BK_News.html5.tvcAdUrl.find('news_url');
					
				if(url_items.length != 0){
					for(var i = 0 ; i < url_items.length; i++) {
						var title = $(url_items[i]).attr('title');
						var url = $(url_items[i]).text();
						
						if(title == 'click') {
							BK_News.html5.tvcAdClick = url;
							
							$('#html5_player').after(
								'<div id="adclicklayer"></div>');
			
							$('#adclicklayer').click(function(){
								$('.video').height(415);
								//$('#html5_skip_btn').show();
								
								window.open(BK_News.html5.tvcAdClick, '_blank');										
							});
						}
					}
				}
			}
			
			if(BK_News.html5.tvcImp1 != '' && !BK_News.html5.tvcImp1_exed) {
				
				BK_News.html5.tvcImp1_exed = true;
				
				var imp_obj = new Image();
				imp_obj.src = BK_News.html5.tvcImp1;
			}
		});
		
		document.getElementById('html5_player').addEventListener('timeupdate', function(){
			
			var duration = Math.round(document.getElementById('html5_player').duration);			
			var encounter = Math.round(duration*20/100);
				
			if(encounter > (document.getElementById('html5_player').currentTime - 0.4) && 
			   encounter < (document.getElementById('html5_player').currentTime + 0.4)){

				if(BK_News.html5.tvcBool){
					$('.video').height(415);
					//$('#html5_skip_btn').show();
				}
			}
			
			if(BK_News.html5.tvcImp2 != '' && !BK_News.html5.tvcImp2_exed) {
				var encounter = Math.round(duration*20/100);
				
				if(encounter > (document.getElementById('html5_player').currentTime - 0.4) && 
				   encounter < (document.getElementById('html5_player').currentTime + 0.4)){
					
					BK_News.html5.tvcImp2_exed = true;
						
					var imp_obj = new Image();
					imp_obj.src = BK_News.html5.tvcImp2;
				}
			}
			
			if(BK_News.html5.tvcImp3 != '' && !BK_News.html5.tvcImp3_exed) {
				var encounter = Math.round(duration*50/100);
				
				if(encounter > (document.getElementById('html5_player').currentTime - 0.4) && 
				   encounter < (document.getElementById('html5_player').currentTime + 0.4)){
				
					BK_News.html5.tvcImp3_exed = true;
						
					var imp_obj = new Image();
					imp_obj.src = BK_News.html5.tvcImp3;
				}
			}
			
			if(BK_News.html5.tvcImp4 != '' && !BK_News.html5.tvcImp4_exed) {
				var encounter = Math.round(duration*99/100);
				
				if(encounter > (document.getElementById('html5_player').currentTime - 0.4) && 
				   encounter < (document.getElementById('html5_player').currentTime + 0.4)){
				
					BK_News.html5.tvcImp4_exed = true;
						
					var imp_obj = new Image();
					imp_obj.src = BK_News.html5.tvcImp4;
				}
			}
		});		
	}
}

BK_News.platform = {
    mobile: false,
    android: false,
    iOS: false,
    iOS_platform: 'non iOS',
    ie8: false,
    init: function () {
        var ua = navigator.platform.toLowerCase();
        this.mobile = (navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPad") != -1) || (navigator.platform.indexOf("iPod") != -1) ||
            (ua.indexOf("android") > -1) || (ua.indexOf("linux") > -1) ? true : false;
        var mob = true;
        if (mob) {
            $('#player div.border').css('background-color', 'white');
        }
        this.android = (ua.indexOf("android") > -1) || (ua.indexOf("linux") > -1) ? true : false;
        this.iOS = (navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPad") != -1) || (navigator.platform.indexOf("iPod") != -1) ? true : false;
        if (navigator.platform.indexOf("iPhone") != -1)
            this.iOS_platform = 'iPhone';
        else if (navigator.platform.indexOf("iPad") != -1 || navigator.platform.indexOf("iPod") != -1)
            this.iOS_platform = 'iPad';
        if ($.browser.msie == true) {
            if ($.browser.version <= 8) {
                this.ie8 = true;
            }
        }
    }
}


$(document).ready( function () {

	 //hit count
	var hitImage = new Image();
	hitImage.src = '/onccMainWebapp/hitCount.faces?newsId=' + BK_News.content.articleId  + '&pubCode=' + BK_News.content.pub_code + '&psCode=' + BK_News.content.siteMap_code.replace(',','') + '&mediaType=web&t=' + (new Date().getTime());

		
	if ( $('.moreContent .more .article_link').length > 0 ) {
		$('.moreContent').show();
		$('.moreContent').css('border-top','2px solid #ccc' );
	} else {
		if ( $('.pollingContent .polling .article_link').length > 0 ) {
			$('.pollingContent').css('border-top','2px solid #ccc' );
			$('.pollingContent').css('padding-top','10px' );
		}
	}
	if ( ONCC.view == 'm' ) {
		var curLink = window.location.href.split('?')[0];
		
		// BK_News.toolBar.init_mobile();
		
		if ( window.location.href.indexOf('from=webview') == -1 ) {
			$('#header').css('width','640px;');
			var link = '';
			if (  ONCC.platform.iOS ) {
			
				if ( ONCC.getNation() == 'hk' ) {
					link = 'https://itunes.apple.com/hk/app/id349812998?mt=8';
				} else if ( ONCC.getNation() == 'tw' ) {
					link = 'https://itunes.apple.com/hk/app/id797330635';
				} else {
					link = 'https://itunes.apple.com/hk/app/id805327918';
				}
			} else {
				if ( ONCC.getNation() == 'hk' ) {
					link = 'https://play.google.com/store/apps/details?id=com.news.on';
				} else if ( ONCC.getNation() == 'tw' ) {
					link = 'https://play.google.com/store/apps/details?id=com.news.ontw';
				} else {
					link = 'https://play.google.com/store/apps/details?id=com.news.oncn';
				}
			}
			//$('#header').html('<div class="m_header"><div class="logo" style="text-align:center;float:left;"></div><div class="share" style="float:right;"><img src="/img/v2/m_share.jpg" /></div></div>');
			$('#header').append('<div class="mobile-header">	<div class="mobile-menu-button">		<div class="m-back"></div>			<div class="m-title" style="background-image:url(/img/v2/mobile_app_install_banner_' + ONCC.getNation() + '.jpg);"><a href="' + link + '"><img src="/img/v2/mobile_app_install_' + ONCC.getNation() + '.jpg" class="" /></a>	</div>		<div class="m-share" ><!--img src="/img/v2/m_share.jpg" class="" /-->	</div>	</div></div><div id="m_focus"></div>');
		}
		$('.contentFeature').after('<div class="toDesktop" style="text-align:center;"><a href="' + curLink + '?view=d"><img src="/img/v2/m_desktop.jpg" /></a></div><div clas="m_footer" style="font-size:22px;text-align:center; margin:10px 0px 100px 0px"><div>廣告查詢：(852) 3600-6868</div><div>用戶查詢：(852) 3600-5577</div><div>版權所有 © ' + serverTime.substr(0,4) + ' ON.CC (BVI) LTD. All rights reserved.</div></div>');
		
		//<div class="fb-like" data-href="https://www.facebook.com/onccnews" data-layout="button_count" data-action="like" data-show-faces="false" data-share="false"></div>
		//https://www.facebook.com/twoncc
		
		if ( ONCC.getNation() == 'hk' ) {
			$('.breakingNewsContent').after('<div id="fanpageLikeCTN"></div><div class="" style="font-size:28px;padding: 5px 16px;">本文連結 :</div><div class="sharelink"><input type="text" id="sharePanel-url" value="' + curLink + '" /><img src="/img/v2/m_copy_link.png"  class="m_share_copy" /></div>');
			$('#fanpageLikeCTN').html('<div class="fb_plugin"><div class="fb-like" data-href="https://www.facebook.com/onccnews" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true"></div><div class="clickArea"></div></div>');
		} else if ( ONCC.getNation() == 'tw' ) {
			$('.breakingNewsContent').after('<div id="fanpageLikeCTN"></div><div class="" style="font-size:28px;padding: 5px 16px;">本文連結 :</div><div class="sharelink"><input type="text" id="sharePanel-url" value="' + curLink + '" /><img src="/img/v2/m_copy_link.png"  class="m_share_copy" /></div>');
			$('#fanpageLikeCTN').html('<div class="fb_plugin"><div class="fb-like" data-href="https://www.facebook.com/twoncc" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true"></div><div class="clickArea"></div></div>');
		}
		$('#fanpageLikeCTN').show();
		 
		 $('.clickArea').click(function () {
            window.location.href = link;
        });
		
		//}
		$('.m_share_copy').click(function () {
            $('#sharePanel-url').select();
        });
		$('.m-share').click(function () {
            $('.share-container').show();
        });
		
		$('.exitfl').click ( function() {
			$('#fanpageLikeCTN').hide();
			$ONCC.cookie('fanpageLike','hidden', { path:'/',expires:1}); // cookie for 1 day
		});
		
		/* if ( window.location.href.indexOf('mbanner') != -1 ) {
		
			$('.toDesktop').css( 'margin-top','12px');
			$('#ads_superbanner1').css( 'background-color','#fff');
			$('#ads_superbanner1').css( 	'width','auto');
			$('#ads_superbanner1').css('height','auto');
		
			$('#ads_superbanner1').show();
		} */
	}
	if ( ! ( detectmob() )) {
		if ( ONCC.getNation() == 'hk' ) {
		
			if ( ONCC.getSection() == 'commentary' && ( ONCC.getLocation() == 'cn' || ONCC.getLocation() == 'tw' ) ) {
				ONCC.SocialNetwork.fbComments();
			}
		} else if ( ONCC.getNation() == 'tw' ) {
			
			ONCC.SocialNetwork.fbComments();
			
		} else { // cn
		
		}
	}
	
	/*
	if (  BK_News.content.pubDate >= '20140529' && ONCC.getSection() == 'commentary' && ( ONCC.getLocation() == 'cn' || ONCC.getLocation() == 'tw' ) && (   ONCC.getNation() == 'tw' )  )  {
		ONCC.SocialNetwork.fbComments();
		//https://www.facebook.com/plugins/comments.php?api_key=367495573302576&channel_url=http%3A%2F%2Fstatic.ak.facebook.com%2Fconnect%2Fxd_arbiter%2FV80PAcvrynR.js%3Fversion%3D41%23cb%3Df2a1601825fbae%26domain%3Dhk.apple.nextmedia.com%26origin%3Dhttp%253A%252F%252Fhk.apple.nextmedia.com%252Ff12c503fa9408bf%26relation%3Dparent.parent&href=http%3A%2F%2Fhk.apple.nextmedia.com%2Frealtime%2Fbreaking%2F20140529%2F52524934&locale=zh_TW&mobile=false&numposts=5&sdk=joey&width=564
	}*/
	
	if ( location.href.indexOf('weibocomment=true') != -1 ) {
		ONCC.SocialNetwork.weiboComments();
		 
	}
	
	if ( location.href.indexOf('molad') != -1 ) {
		ONCC.mOverLay.build();
		 
	}
		
	
	
	
	if (location.href.indexOf('/specials/') != -1 ) {
		ONCC.Specials.initLanging();
	} else {
		ONCC.Specials.init();
	}

	
	$('.pollingContent').insertAfter('.moreContent');
	
	BK_News.platform.init();
	BK_News.netvigationBar.init();
    //PTY.searchFrm.init();
	
	if ( ONCC.view == 'd' ) {
		if ( BK_News.toolBar.version == '2.0' ) {
			BK_News.toolBar.init_like();
		} else {
			BK_News.toolBar.init();
		}
	}
	
    BK_News.content.init();
   
    BK_News.pollInfo.init();
	 if ( ONCC.view == 'd' ) {
	//if ( ! (  window.location.href.indexOf('from=webview') != -1 || (detectmob() &&  window.location.href.indexOf('share=true') != -1)  ) ) {
		BK_News.imageGalleryInfo.init();
	}
	
	 
	
		
	if ( ONCC.getSection() == 'ad' ) {
		BK_News.content.init_video();		
	} else {
		BK_News.content.video_path = "";
		BK_News.content.vid = "";
		BK_News.content.vcreateTime = "";
		BK_News.content.vmodifyTime = "";
		BK_News.content.vcreateDate = "";
		BK_News.content.vthumbnailPath = "";
		
		var videolisturl = NEWS_PATH + '/video/' + BK_News.content.pubDate + '/articleVideo_' + ONCC.getSection() + '.js';
		var listLoader = new $ListLoader(videolisturl);
		listLoader.callbacks.push( function ( _videoListData ) {
		
			if ( _videoListData != null ) {
			
				var _currentVideos = [];
				var _currentVideo = '';
					
				$.each ( _videoListData , function( k,v ) {
					if ( typeof ( v.video_lang ) == 'undefined' ) {
						 v.video_lang = 'HK';
					}
					if ( BK_News.content.articleId == v.articleId  &&  ( ONCC.getNation() == 'cn' || v.video_lang == 'HK' ) ) {
						_currentVideos.push ( v );
					}
				});					
									
				if ( _currentVideos.length > 0 ) {
					if ( _currentVideos.length == 1 ) {
						_currentVideo = _currentVideos[0];
					} else if ( _currentVideos[0].video_lang == 'HK' && ONCC.getNation() == 'hk' ||  _currentVideos[0].video_lang == 'CN' && ONCC.getNation() == 'cn') {
						_currentVideo = _currentVideos[0];
					} else {
						_currentVideo = _currentVideos[1];
					}
					
					BK_News.content.video_path = _currentVideo.video_path;
					BK_News.content.vid = _currentVideo.vid;
					BK_News.content.vcreateTime = _currentVideo.vcreateTime;
					BK_News.content.vmodifyTime = (typeof ( _currentVideo.vmodifyTime) != 'undefined') ? _currentVideo.vmodifyTime : _currentVideo.vcreateTime;
					BK_News.content.vcreateDate = _currentVideo.vcreateDate;
					BK_News.content.vthumbnailPath = '/ontv/' + _currentVideo.vcreateDate + '/large/';
					if ( _currentVideo.videoThumbnail != '' ) {
						var videoThumbnailArray = _currentVideo.videoThumbnail.split('/');
						BK_News.content.videoThumbnail = videoThumbnailArray[ videoThumbnailArray.length - 1];
					}
					ONCC.Player.hasVideo = true;
					BK_News.content.init_video();
					
				} else {
					
					if ( ONCC.getSection() == 'entertainment' ) {
						if ( $ONCC.cookie('novideoCount') == null ) {
							$ONCC.cookie('novideoCount',1, { path:'/'});	
							ONCC.Player.hasVideo = false;
							BK_News.content.init_itvc();
						} else {
							if ( $ONCC.cookie('novideoCount') == '5' ) {
								$ONCC.cookie('novideoCount',1, { path:'/'});
								ONCC.Player.hasVideo = false;
								BK_News.content.init_itvc();
							} else {
								$ONCC.cookie('novideoCount', parseInt( $ONCC.cookie('novideoCount') , 10 )+1, { path:'/'});	
							}
							
						}
					}	
				}
				
			}

		});
		
		listLoader.load();
	
	}

	$('#bottomNavCTN .menu:first').hide();
	//if(ONCC.getSection() == 'entertainment'){
	listImage();
	//}
	
	//20131226-change ontv title
	if($ONCC.curLang == '_cn'){
		$('#btnMoreVideoCTN .title').html('东网电视');
	}else{
		$('#btnMoreVideoCTN .title').html('東網電視');
	}
	
	if ( $.urlParams.get('lineheight') != '' ) {
		$('.breakingNewsContent p').css('line-height', $.urlParams.get('lineheight')+'px');
		
	}
	if ( $.urlParams.get('spacing') != '' ) {
		$('.breakingNewsContent p').css('letter-spacing',$.urlParams.get('spacing')+'px');
	}
	
	if ( ONCC.getLevel() == 'content'  &&  $.urlParams.get('fontstyle') != null  && $.urlParams.get('fontstyle') != '' ) {
	
		$('body').css('font-family','PMingLiU');
		$('.topHeadline h1').css('font-size',$.urlParams.get('ftitle') + 'px');
		$('.topHeadline h1').css('font-family','"微软雅黑", "黑体"');
		$('ul.mainmenu li div.line').css('margin-left','0px');
		$('body .summary').css('font-size',$.urlParams.get('fcontent') + 'px');
		
	}

	$('.breakingNewsContent .summary').html($('.breakingNewsContent .summary').html().replace(/<br>/g, '<div class="br" style="height:8px;"></div>'));

	if ( ONCC.view == 'm' ) {
	
		if ( ONCC.from == 'a' ) {
			$('meta[name=viewport]').attr('content','width=device-width');
		} else {
			if( navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) ){
				$('meta[name=viewport]').attr('content','width=device-width');
			//} else if ( navigator.userAgent.match(/Android 2./i) ){
			//	$('meta[name=viewport]').attr('content','width=device-width, user-scalable=no');
			//	alert( 'Android 2.' );
			} else {
				$('head').append('<meta id="viewport" name="viewport" content="width=640;  ">'); 
			} 
		}


		$('body').show();
	}

});
