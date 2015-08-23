
ONCC.Specials = {
	
	item : [],
	isFoundItem : null,
	keyword : '',
	eventid : '',
	
	init : function() {
		
		//if ( BK_News.content.event.length == 0 ) {
			
			var title = document.title;
			
			$.each( ONCC.Specials.item, function(k,v) {
				if (title.indexOf(v.zh_keyword + "：") != -1) {
					ONCC.Specials.eventid = v.eventid;
				}
				
				if ( title.indexOf(v.cn_keyword + "：") != -1){
					ONCC.Specials.eventid = v.eventid;
				}
				
				
			});
		
			if ( ONCC.Specials.eventid == '' ) {
				if ( BK_News.content.event.length != 0 ) {
					ONCC.Specials.eventid = BK_News.content.event[0];
				} else {
					return;
				}
			}
		//} else {
		//	ONCC.Specials.eventid = BK_News.content.event[0];
		//}
		
		var url = new $QueryString ( window.location.href );
		var numOfEvent = BK_News.content.event.length;
		var eventsData = new Array();
		
		//if (  url.get('eventid')!= null ) {
			//ONCC.Specials.eventid = url.get('eventid');
		//} 

		var title = document.title;
		
		$.each( ONCC.Specials.item, function(k,v) {

			if ( ONCC.Specials.eventid == v.eventid ) {
				ONCC.Specials.isFoundItem = this ;
			}
		
		});
	
		if ( ONCC.Specials.isFoundItem != null ){
			
			if ( ONCC.Specials.isFoundItem.css != '' ) {
				document.write('<link rel="stylesheet" type="text/css" href="' + ONCC.Specials.isFoundItem.css + '" media="all">');
			}

			$(document).ready(function() {
				$('#ads_superbanner1').css('height','128px');
				$('#ads_superbanner1').css('width','916px');
				$('#ads_superbanner1').html('<img src="' + ONCC.Specials.isFoundItem.topbanner + '" border="0">');
				$('.rightSide').html('<img src="' + ONCC.Specials.isFoundItem.rightbanner + '" border="0" />');
				$('#ads_superbanner1').css('margin-bottom','0px');
				$('.upper .leftSide').css('margin-top','5px');
				
				if ( ONCC.Specials.isFoundItem.css != '' ) {
					$('body').css('color','#ccc');
					$.each($('#sideLeft img').not('[alt!=""]'),function(k,v){
						if(k == 0 || k == 1 || k == 2 || k == 3){
							var org = $(this).attr('src');
							var ext = org.split('.');
							org = org.replace('.'+ext[ext.length-1],'');
							$(this).attr('src',org+'_v2.'+ext[ext.length-1]);
						}
					});
				}
			});
		}
	},
	
	initLanging : function() {
		
		var title = document.title;
		
		$.each( ONCC.Specials.item, function(k,v) {
			if (location.href.indexOf("/" + v.name + "/") != -1 ){
			
				if ( $ONCC.curLang != '_cn' ) {
					ONCC.Specials.keyword = v.zh_keyword;
				} else {
					ONCC.Specials.keyword = v.cn_keyword;
				}
				ONCC.Specials.isFoundItem = this;	
			}
		});
	
		if ( ONCC.Specials.isFoundItem != null ){
			
			ONCC.GlobalfocusSectionNews.numOfFocus = 0;
			document.write('<link rel="stylesheet" type="text/css" href="' + ONCC.Specials.isFoundItem.css + '" media="all">');

			$(document).ready(function() {
				$('#ads_superbanner1').css('height','128px');
				$('#ads_superbanner1').css('width','916px');
				$('#topBanner').html('<img src="' + ONCC.Specials.isFoundItem.topbanner + '" border="0">');
				$('#rightBanner').html('<img src="' + ONCC.Specials.isFoundItem.rightbanner + '" border="0" />');
				$('#ads_superbanner1').css('margin-bottom','0px');
				
				if ( ONCC.Specials.isFoundItem.css != '' ) {
					$('body').css('color','#ccc');
					$.each($('#sideLeft img').not('[alt!=""]'),function(k,v){
						if(k == 0 || k == 1 || k == 2 || k == 3){
							var org = $(this).attr('src');
							var ext = org.split('.');
							org = org.replace('.'+ext[ext.length-1],'');
							$(this).attr('src',org+'_v2.'+ext[ext.length-1]);
						}
					});
				}
			});
		}
		
	},
	
	add : function( item ) {
		ONCC.Specials.item.push(item);
	}

}
// { zh : keyword , cn:keyword , eventid: , css , topbanner path , right banner path , langing path, 

/*201400531*/
ONCC.Specials.add({name:'64_25anniversary',zh_keyword:'六四25周年',cn_keyword:'六四25周年', eventid:'4028812c4637ecd801464c855d583116',css:'',topbanner:'/specials/64_25anniversary/topbanner.jpg',rightbanner:'/specials/64_25anniversary/rightbanner.jpg',langing:''});
/*20140531*/

/*201400531*/
ONCC.Specials.add({name:'64_25anniversary',zh_keyword:'六四25周年',cn_keyword:'六四25周年', eventid:'402881264637ec61014648b552c346bc',css:'',topbanner:'/specials/64_25anniversary/topbanner.jpg',rightbanner:'/specials/64_25anniversary/rightbanner.jpg',langing:''});
/*20140531*/

/*20140525.0529*/
ONCC.Specials.add({name:'slander',zh_keyword:'網上誹謗',cn_keyword:'网上诽谤', eventid:'4028812c4637ecd80146439e822e3da1',css:'',topbanner:'/specials/slander/topbanner.jpg',rightbanner:'/specials/slander/rightbanner.jpg',langing:''});
ONCC.Specials.add({name:'macauce2014',zh_keyword:'澳門反「離補」法案',cn_keyword:'澳门反“离补”法案', eventid:'4028812c4618fb3e014632a71d52051e',css:'',topbanner:'/bknlib/js/macauce2014/topbanner.jpg',rightbanner:'/bknlib/js/macauce2014/rightbanner.jpg',langing:''});
/*20140525.0529*/

ONCC.Specials.add({name:'malaair',zh_keyword:'馬航空難',cn_keyword:'马航空难', eventid:'32c3618d7a094f19b64b52135e64727e',css:'',topbanner:'/specials/malaair/topbanner.jpg',rightbanner:'/specials/malaair/rightbanner.jpg',langing:''});

/*20140314*/
ONCC.Specials.add({name:'corrupt2014',zh_keyword:'澳門巨貪案',cn_keyword:'澳门巨贪案',eventid:'	e87ba73560f7433d83d5efaa8d84c3ab',css:'',topbanner:'/specials/corrupt2014_2/webtop.jpg',rightbanner:'/specials/corrupt2014_2/webright.jpg',langing:''});
/*20140314*/

ONCC.Specials.add({name:'bangkok',zh_keyword:'周永康貪腐案',cn_keyword:'周永康贪腐案',eventid:'51e07e8e19d5c4add93ed2ff91f6ae2b4',css:'',topbanner:'/img/v2/topBanner2.jpg',rightbanner:'/img/v2/rightBanner2.jpg',langing:''});


//ONCC.Specials.add({name:'bangkok',zh_keyword:'邵逸夫逝世',cn_keyword:'邵逸夫逝世',css:'/css/v2/oncc-global-2.css',topbanner:'/img/v2/topBanner1.jpg',rightbanner:'/img/v2/rightBanner1.jpg',langing:''});
//ONCC.Specials.add({name:'bangkok',zh_keyword:'威冪大婚',cn_keyword:'威幂大婚',css:'',topbanner:'/specials/weddingyeung/topbanner.jpg',rightbanner:'/specials/weddingyeung/rightbanner.jpg',langing:''});
//ONCC.Specials.add({name:'bangkok',zh_keyword:'封鎖曼谷',cn_keyword:'封锁曼谷',css:'',topbanner:'/specials/bangkok/topbanner.jpg',rightbanner:'/specials/bangkok/rightbanner.jpg',langing:''});
//ONCC.Specials.add({name:'policy2014',zh_keyword:'施政報告',cn_keyword:'施政报告',css:'',topbanner:'/specials/policy2014/topbanner.jpg',rightbanner:'/specials/policy2014/rightbanner.jpg',langing:''});
//ONCC.Specials.add({name:'policyfocus2014',zh_keyword:'施政報告重點',cn_keyword:'施政报告重点',css:'',topbanner:'/specials/policyfocus2014/topbanner.jpg',rightbanner:'/specials/policyfocus2014/rightbanner.jpg',langing:''});
//ONCC.Specials.add({name:'corrupt2014',zh_keyword:'澳門世紀巨貪奇案',cn_keyword:'澳门世纪巨贪奇案',css:'',topbanner:'/specials/corrupt2014/web_bg_01.jpg',rightbanner:'/specials/corrupt2014/web_bg_03.jpg',langing:''});
//ONCC.Specials.add({name:'shaw2014',zh_keyword:'邵逸夫追思會',cn_keyword:'邵逸夫追思会',css:'',topbanner:'/specials/shaw2014/banner.jpg',rightbanner:'/specials/shaw2014/lrc.jpg',langing:''});
//ONCC.Specials.add({name:'shaw2014',zh_keyword:'太子黨資產曝光',cn_keyword:'太子党资产曝光',css:'',topbanner:'/specials/prince2014/topBanner1.jpg',rightbanner:'/specials/prince2014/rightBanner1.jpg',langing:''});
//ONCC.Specials.add({name:'cny2014',zh_keyword:'政界拜年',cn_keyword:'政界拜年',css:'',topbanner:'/specials/cny2014/topbanner.jpg',rightbanner:'/specials/cny2014/rightbanner.jpg',langing:''});
//ONCC.Specials.add({name:'cnyred2014',zh_keyword:'馬年運程',cn_keyword:'马年运程',css:'',topbanner:'/specials/cnyred2014/topbanner.jpg',rightbanner:'/specials/cnyred2014/rightbanner.jpg',langing:''});
//ONCC.Specials.add({name:'ngma',zh_keyword:'午馬逝世',cn_keyword:'午马逝世',css:'',topbanner:'/specials/ngma/topbanner.jpg',rightbanner:'/specials/ngma/rightbanner.jpg',langing:''});
//ONCC.Specials.add({name:'finance2014',zh_keyword:'財政預算案',cn_keyword:'财政预算案',css:'',topbanner:'/specials/finance2014/topbanner.jpg',rightbanner:'/specials/finance2014/rightbanner.jpg',langing:''});
/* 20140228 */
//ONCC.Specials.add({name:'lh2014',zh_keyword:'全國兩會',cn_keyword:'全国两会',css:'',topbanner:'/specials/lh2014/topBanner.jpg',rightbanner:'/specials/lh2014/rightBanner.jpg',langing:''});
//ONCC.Specials.add({name:'oscar2014',zh_keyword:'奧斯卡',cn_keyword:'奥斯卡',css:'',topbanner:'/specials/oscar2014/topBanner.jpg',rightbanner:'/specials/oscar2014/rightBanner.jpg',langing:''});
/* 20140228 */
/*20140314*/
//ONCC.Specials.add({name:'cheungwin',zh_keyword:'張耀榮病逝',cn_keyword:'张耀荣病逝',css:'',topbanner:'/specials/cheungwin/webtop.jpg',rightbanner:'/specials/cheungwin/webright.jpg',langing:''});
/*20140314*/
/*20140331*/
//ONCC.Specials.add({name:'cheungwin',zh_keyword:'雹雨襲港',cn_keyword:'雹雨袭港',css:'',topbanner:'/specials/hali2014/topbanner.jpg',rightbanner:'/specials/hali2014/rightbanner.jpg',langing:''});
//ONCC.Specials.add({name:'generalko',zh_keyword:'谷俊山案',cn_keyword:'谷俊山案',css:'',topbanner:'/specials/generalko/topbanner.jpg',rightbanner:'/specials/generalko/rightbanner.jpg',langing:''});
/*20140331*/
 