
var GLBOAL_PATH = '';
var NEWS_PATH = '';
var CURSECT = '';
var serverdate = '';
	 	
var ONCC = {

	ready: false,
	section: null,
	view : 'd', // view is used for display desktop view or m view
	from : 'b', // broswer or app 
		
	init: function() {
		this.section = this.getSection();
		if ( typeof ( serverTime ) != 'undefined' ) {
			serverdate = serverTime.substr(0,8);
		}
		if ( window.location.href.indexOf('v=m') != -1 ) {
			 ONCC.view = 'm';
			 ONCC.from = 'b';
		}
		
		if ( detectmob() ) {
			ONCC.view = 'm';
		}
		if ( detectmob() && window.location.href.indexOf('view=m') != -1 ) {
			 ONCC.view = 'm';
			 ONCC.from = 'b';
		}
		if ( detectmob() && window.location.href.indexOf('from=webview') != -1 ) {
			 ONCC.view = 'm';
			 ONCC.from = 'a';
		}
		
		/* if ( detectmob() && ((document.referrer.indexOf('on.cc') == -1 && document.referrer.indexOf('202.125.90.') == -1 ) || window.location.href.indexOf('from=webview') != -1 || window.location.href.indexOf('share=true') != -1 ) ) {
			 ONCC.view = 'm';
		} */
		if ( window.location.href.indexOf('view=d') != -1 ) {
			 ONCC.view = 'd';	
		}
	},

	getLevel : function() {
		var url = location.href;
		if ( url.indexOf('/bkn/cnt/') != -1 ||  url.indexOf('/ad/') != -1 || url.indexOf('/polling/') != -1 || url.indexOf('/wallpaper') != -1  ) {
			return 'content';
		} else {
			return 'main';
		}
	},
	
	getLocation : function() {
		var url = location.href;
		if (url.indexOf('/hk/')!==-1) {
			return 'hk';
		} else if (url.indexOf('/tw/')!==-1) {
			return 'tw';
		} else if (url.indexOf('/cn/')!==-1) {
			return 'cn';
		} else if (url.indexOf('/au/')!==-1) {
			return 'au';
		} else if (url.indexOf('/eu/')!==-1) {
			return 'eu';
		} else if (url.indexOf('/us/')!==-1) {
			return 'us';
		} else if (url.indexOf('/ot/')!==-1) {
			return 'ot';
		} else if (url.indexOf('/int/')!==-1) {
			return 'int';
		} else if (url.indexOf('/sc/')!==-1) {
			return 'sc';
		} else if (url.indexOf('/bknrac/')!==-1) {
			return 'bknrac';
		} 
		
		
		return 'hk';
	},
	getSection: function() {
		var url = location.href;
		if (url.indexOf('/news/')!==-1) {
			return 'news';
		} else if (url.indexOf('/finance/')!==-1) {
			return 'finance';
		} else if (url.indexOf('/sport/')!==-1) {
			return 'sport';
		} else if (url.indexOf('/entertainment/')!==-1) {
			return 'entertainment';
		} else if (url.indexOf('/life/')!==-1) {
			return 'life';
		} else if (url.indexOf('/china_world/')!==-1) {
			return 'china_world';
		} else if (url.indexOf('/commentary/')!==-1) {
			return 'commentary';
		} else if (url.indexOf('/lifestyle/')!==-1) {
			return 'lifestyle';
		} else if (url.indexOf('/weather/')!==-1) {
			return 'weather';
		} else if (url.indexOf('/comsoul/')!==-1) {
			return 'comsoul';
		} else if (url.indexOf('/syscheck/')!==-1) {
			return 'syscheck';
		} else if (url.indexOf('/ad/')!==-1) {
			return 'ad';
		}
		return 'news';
	},
	getNation :function(){
		try{
			return $ONCC.corpBar.getNation();
		}catch(e){
			return 'hk';
		}
	},
	getSectionChi : function() {
		var url = location.href;
		if (url.indexOf('/news/')!==-1) {
			return '新聞';
		} else if (url.indexOf('/finance/')!==-1) {
			return '財經';
		} else if (url.indexOf('/sport/')!==-1) {
			return '體育';
		} else if (url.indexOf('/entertainment/')!==-1) {
			return '娛樂';
		} else if (url.indexOf('/life/')!==-1) {
			return '生活';
		} else if (url.indexOf('/china_world/')!==-1) {
			return '兩岸';
		} else if (url.indexOf('/commentary/')!==-1) {
			return '評論';
		} else if (url.indexOf('/lifestyle/')!==-1) {
			return '生活';
		}
		return '新聞';
	},
	
	getNationChiByInput  : function ( nation ) {
		switch(nation) {
		case 'hk':
			return '港澳';
		case 'tw':
			return '台灣';
		case 'cn':
			return '大陸';
		case 'int':
			return '國際';
		case 'bknrac':
			return '馬經';
		}
		return '港澳';
	},
	
	getSectionChiByInput : function ( section ) {
		
		switch(section) {
		case 'news':
			return '新聞';
		case 'finance':
			return '財經';
		case 'sport':
			return '體育';
		case 'entertainment':
			return '娛樂';
		case 'life':
			return '生活';
		case 'china_world':
			return '兩岸';
		case 'commentary':
			return '評論';
		case 'lifestyle':
			return '生活';
		}
		return '新聞';
		
	},
	getCodeBySection : function ( location_section ) {

		switch ( location_section ) {
		case 'hk_news':
			return '822';
			break;
		case 'hk_finance':
			return "842";
			break;
		case 'hk_entertainment':
			return "862";
			break;
		case 'hk_sport':
			return "882";
			break;
		case 'hk_lifestyle':
			return "982";
			break;
		case 'hk_commentary':
			return "832";
			break;
		case 'hk_weather':
			return "942";
			break;
		
		case 'tw_news':
			return "4011";
			break;
		case 'tw_finance':
			return "4311";
			break;
		case 'tw_entertainment':
			return "4111";
			break;
		case 'tw_sport':
			return "4211";
			break;
		case 'tw_lifestyle':
			return "4511";
			break;
		case 'tw_commentary':
			return "4411";
			break;
		case 'cn_news':
			return "5011";
			break;
		case 'cn_commentary':
			return "5411";
			break;
		case 'int_news':
			return "17011";
			break;
		}
		
	},
	getSectionByCode : function( code ) {
		
		code = code.replace(',','');

		switch ( code ) {
		case '822':
			return ["hk", "news"];
			break;
		case '842':
			return ["hk", "finance"];
			break;
		case '862':
			return ["hk", "entertainment"];
			break;
		case '882':
			return ["hk", "sport"];
			break;
		case '982':
			return ["hk", "lifestyle"];
			break;
		case '832':
			return ["hk", "commentary"];
			break;
		case '942':
			return ["hk", "weather"];
			break;	
		case '4011':
			return ["tw", "news"];
			break;
		case '4311':
			return ["tw", "finance"];
			break;
		case '4111':
			return ["tw", "entertainment"];
			break;
		case '4211':
			return ["tw", "sport"];
			break;
		case '4511':
			return ["tw", "lifestyle"];
			break;
		case '4411':
			return ["tw", "commentary"];
			break;
		case '5011':
			return ["cn", "news"];
			break;
		case '5411':
			return ["cn", "commentary"];
			break;
		case '17011':
			return ["int", "news"];
			break;
		}
		
	},
	
	addCommentaryIcon: function( value , size) {
		if ( typeof ( value ) != 'undefined' ) {
			if ( value != '') {
				return '<img src="/img/v2/comment_' + size + '.png" class="commentary_icon" />';
			} else {
				return '';
			}
		} else {
			return '';
		}
	},
	
	setNationClassInBody : function() {
		
		$('body').addClass( '_nation_' + ONCC.getNation());
		
	}
};


ONCC.header = {
	init: function() {
		var cb = $ONCC.corpBar;
		var promoHtml = cb.renderPromo();
		promoHtml = promoHtml.replace('&#x71B1;&#x9580;', '&#x71B1;&#x9580;：');
		$('#headerKeyword').html(promoHtml);

		/*$('#headerInfo').append(cb.renderWeatherInfo()+cb.renderWeatherBreaking());
		if ($.browser.msie) {
			$('#headerSetHomepage').click(function(){
				this.style.behavior='url(#default#homepage)';
				this.setHomePage('http://on.cc');
				return false;
			});
		}

		  if (typeof Urchin != 'undefined') {
			Urchin.content_view(window.location.href);
		  }
		*/
	}
};
ONCC.overture = {
	init: function() {
		return false;
		var qs = new $QueryString('http://cmh.hk.overture.com/js_flat_1_0/');

		var key = new String(ONCC.section);

		if (key == 'finance') {
			key = 'bank_finance_property_invest'
		} else if (key == 'entertainment') {
			key = 'artist'
		} else if (key == 'life') {
			key = 'arts'
		} else if (key == 'sport') {
			key = 'sports'
		}
		qs.set({
			config: '3269468278',
			source: 'orisun_hk_ctxt',
			ctxtId: key,
			cb: new Date().getTime().toString(),
			ctxtUrl: encodeURIComponent(location.href),
			ctxtCat: 'hk_t1_default_business',
			maxCount: '3',
			type: ONCC.section,
			keywordCharEnc: 'big5',
			outputCharEnc: 'big5hkscs',
			mkt: 'hk'
		});
		$writeScript(qs);
	},
	write: function() {
		return false;
		var i=6;
		var html = [];
		if (zSr) {
			if (zSr.length > 6) {
				html.push('<div id="yahooOverture" class="yahooOverture">');
				html.push('<p class="right"><a href="http://hk.searchmarketing.yahoo.com/?o=HK0021" target="_blank">雅虎贊助網站</a></p>');
				html.push('<ul>');
				while (i < zSr.length) {
					var descr = zSr[i++]; // listing description
					var unused1 = zSr[i++]; // (ignore)
					var clickURL = zSr[i++]; // listing link
					var title = zSr[i++]; // listing title
					var sitehost = zSr[i++]; // advertiser’s domain name
					var unused2 = zSr[i++]; // (ignore)
					html.push('<li><a href="' + clickURL + '" target="_blank"><h3>' + title + '</h3>');
					html.push('<p class="desc">' + descr + '</p>');
					html.push('<p class="domain">(' + sitehost + ')</p>');
					html.push('</a></li>');
				}
				html.push('</ul></div>');
			}
		}
		document.write(html.join(''));
	}
};

ONCC.data = {
	
	data_focusNews : null,
	data_hotNews : null,
	data_video : null,
	
	get : function( data_name ) {
		return ONCC.data[data_name];
	},
	
	set : function( data_name ) {
		ONCC.data[data_name] = data_name;
	}

}

ONCC.platform = {
    mobile: false,
    android: false,
    iOS: false,
    iOS_platform: 'non iOS',
    ie8: false,
    init: function () {
        var ua = navigator.platform.toLowerCase();
        this.mobile = (navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPad") != -1) || (navigator.platform.indexOf("iPod") != -1) ||
            (ua.indexOf("android") > -1) || (ua.indexOf("linux") > -1) ? true : false;
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
/* ONCC.data = {
	
	data_focusNews : null,
	data_hotNews : null,
	
	get : function( data_name ) {
		return ONCC.data[data_name];
	},
	
	set : function( data_name ) {
		ONCC.data[data_name] = data_name;
	}

} */

ONCC.platform.init();
 

ONCC.toHex = function(str) {
	var hex = '';
	for(var i=0;i<str.length;i++) {
		hex += ''+str.charCodeAt(i).toString(16);
	}
	return hex.toUpperCase();
}

ONCC.datePattern = function(){
	return 'yyyy/mm/dd HH:MM';
};

ONCC.date = {
	server: null,
	client: null,
	adjust: 0,
	init: function() {
		this.server = (typeof todaydate === 'string') ? $strToDate(todaydate) : new Date();
		this.client = new Date();
		this.adjust = this.server.getTime() - this.client.getTime();
	},
	now: function() {
		return new Date(new Date().getTime() + this.adjust);
	}
};

var $writeScript = function(url) {
	document.write(unescape("%3Cscript src='"+url+"' type='text/javascript'%3E%3C/script%3E"));
};

var $getUrlWithTime = function(url) {
	var qs = new $QueryString(url);
	qs.set({t:$dateFormat(new Date(new Date()),'yyyymmddHHMM')});
	return qs.toString();
};


function detectmob() { 
	 if( navigator.userAgent.match(/Android/i)
		 || navigator.userAgent.match(/webOS/i)
		 || navigator.userAgent.match(/iPhone/i)
		 || navigator.userAgent.match(/iPad/i)
		 || navigator.userAgent.match(/iPod/i)
		 || navigator.userAgent.match(/BlackBerry/i)
		 || navigator.userAgent.match(/Windows Phone/i)
	 ){
		return true;
	  }
	 else {
		return false;
	  }
}

$strToDate = function(str) {
	if (str.length >= 8) {
		var yyyy = str.substring(0,4);
		var mm = parseInt(str.substring(4,6), 10) - 1;
		var dd = str.substring(6,8);
		var HH = (str.length >= 10) ? str.substring(8,10) : 0;
		var MM = (str.length >= 12) ? str.substring(10,12) : 0;
		var ss = (str.length >= 14) ? str.substring(12,14) : 0;
		return new Date(yyyy, mm, dd, HH, MM, ss);
	}
	return new Date();
};
$digitPad = function(symbol, val, len) {
	var str = String(val);
	while (str.length < len) { str= symbol+str; }
	return str;
};
$dateFormat = function (dateObj, pattern) {
	// Some common format strings
	var masks = {'default':'ddd mmm dd yyyy HH:MM:ss'};
	// Internationalization strings
	var i18n = {
		dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', '日', '一', '二', '三', '四', '五', '六'],
		monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	};

	var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
		timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		timezoneClip = /[^-+\dA-Z]/g,
		pad = function (val, len) {
			len = len || 2;
			return $digitPad('0',val,len);
		};

	var formatter = function (date, mask, utc) {

			mask = String(masks[mask] || mask || masks['default']);

			// Allow setting the utc argument via the mask
			if (mask.slice(0, 4) == 'UTC:') {
				mask = mask.slice(4);
				utc = true;
			}

			var	_ = utc ? 'getUTC' : 'get',
				d = date[_ + 'Date'](),
				D = date[_ + 'Day'](),
				m = date[_ + 'Month'](),
				y = date[_ + 'FullYear'](),
				H = date[_ + 'Hours'](),
				M = date[_ + 'Minutes'](),
				s = date[_ + 'Seconds'](),
				L = date[_ + 'Milliseconds'](),
				o = utc ? 0 : date.getTimezoneOffset(),
				flags = {
					d:    d,
					dd:   pad(d),
					ddd:  i18n.dayNames[D],
					dddd: i18n.dayNames[D + 7],
					m:    m + 1,
					mm:   pad(m + 1),
					mmm:  i18n.monthNames[m],
					mmmm: i18n.monthNames[m + 12],
					yy:   y.toString().slice(2),
					yyyy: y,
					h:    H % 12 || 12,
					hh:   pad(H % 12 || 12),
					H:    H,
					HH:   pad(H),
					M:    M,
					MM:   pad(M),
					s:    s,
					ss:   pad(s),
					l:    pad(L, 3),
					L:    pad(L > 99 ? Math.round(L / 10) : L),
					t:    H < 12 ? "a"  : "p",
					tt:   H < 12 ? "am" : "pm",
					T:    H < 12 ? "A"  : "P",
					TT:   H < 12 ? "AM" : "PM"
				};

			return mask.replace(token, function ($0) {
				return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
			});
	};
	if (typeof dateObj === 'string'){
		dateObj = $strToDate(dateObj);
	}
	return formatter(dateObj, pattern, false);
};

$ONTVdateFormat = function(date) {
	var diff = ONCC.date.now() - date.getTime();
	var remainMins = Math.floor((diff / 1000) / 60);
	if (remainMins < 60) {
		if (remainMins < 1) remainMins = 1;
		return remainMins + $ONCC.lang.translate("&#x5206;&#x9418;&#x524D;");
	} else if (remainMins < 1440) {
		return Math.floor(remainMins/60) + $ONCC.lang.translate("&#x5C0F;&#x6642;&#x524D;");
	}
	//return $dateFormat(date, ONTV.datePattern()).replace(' ', '&nbsp;&nbsp;');
	var vyear =  $dateFormat(date,'yyyy');
	var nyear = todaydate.substr(0,4);
	if(vyear == nyear){
		return $dateFormat(date, 'm月d日 HH:MM').replace(' ', '&nbsp;&nbsp;');
	}else{
		return $dateFormat(date, 'yyyy年m月d日HH:MM').replace(' ', '&nbsp;&nbsp;');
	}
};



var $SlidePageBox = function( object ) {
	this.contentContainer = object.contentContainer;
	this.pagingContainer = object.pagingContainer;
	this.width = object.width;
	this.recusive = true;
	this.isClickable = true;
	this.intervalKey = '';
	this.autoLoop = true;
	this.autoLoopTimer = 10 * 1000;
};

$SlidePageBox.prototype.init = function() {

	var _this = this;
	var pageHtml="<div>";
	 pageHtml+='<div class="page_arrow left" id="page_left">&nbsp;</div>';
	for(i=1;i<=( $(_this.contentContainer).find('.item').length);i++){
	   pageHtml+='<div class="page" id="page_'+i+'">&nbsp;</div>';
	}
	pageHtml+='<div class="page_arrow right" id="page_right">&nbsp;</div>';
	pageHtml+="</div>";
	$(_this.pagingContainer).html(pageHtml);
	$(_this.pagingContainer).find(".page[id='page_1']").addClass("pageActive");

	if ( _this.autoLoop ) {
		_this.intervalKey = setInterval( function() {_this.rotate();}, _this.autoLoopTimer ); 		
		$(_this.contentContainer).hover (
			function() {
				clearInterval ( _this.intervalKey );
			},
			function() {
				_this.intervalKey = setInterval( function() {_this.rotate();}, _this.autoLoopTimer ); 		
			}
		); 
	}
	$(_this.pagingContainer).find(".page_arrow").click( function(k ,v){
		
		var nowId=$(_this.pagingContainer).find(".page.pageActive").attr("id").substr($(_this.pagingContainer).find(".page.pageActive").attr("id").indexOf("_")+1,$(_this.pagingContainer).find(".page.pageActive").attr("id").indexOf("_").length);
		var toId = '';
		var navigation = '';
		if ( $(this).hasClass('left') ) {
			navigation = 'left';
			if ( parseInt(nowId,10) == 1 ) {
				if ( _this.recusive == true ) {
					toId = $(_this.pagingContainer).find(".page").length + "";
					navigation = 'right';
				} else {
					return;
				}
			} else {
				toId = ( parseInt(nowId,10) - 1 ) + "";
			}
			
		} else if ( $(this).hasClass('right') ) {
			navigation = 'right';
			if ( parseInt(nowId,10) == $(_this.pagingContainer).find(".page").length ){
				if ( _this.recusive == true ) {
					toId = "1";
					navigation = 'left';
				} else {
					return;
				}
				
			} else {
				toId =  ( parseInt(nowId,10) + 1 ) + "";
			}
			
			
		} else {
			return;
		}
		
		_this.move( nowId,toId,navigation);
		
	});
	$(_this.pagingContainer).find(".page").click( function(k ,v){

		 var clickId=($(this).attr("id").substr((($(this).attr("id").indexOf("_"))+1),$(this).attr("id").length));
		 var nowId=$(_this.pagingContainer).find(".page.pageActive").attr("id").substr($(_this.pagingContainer).find(".page.pageActive").attr("id").indexOf("_")+1,$(_this.pagingContainer).find(".page.pageActive").attr("id").indexOf("_").length);
		
		 if(clickId>nowId){
			  var navigation = 'right'; 
		 }else if(nowId>clickId){
			  var navigation = 'left'; 
		 }else {
			 _this.isClickable = true;
			 return;
		 }
		
		_this.move( nowId,clickId,navigation);

	});
};

$SlidePageBox.prototype.move = function( from , to , navigation ) {
	 
	//console.log( 'from ' + from + ' to ' + to);
	var _this = this;
	from = parseInt( from , 10 );
	to = parseInt( to , 10 );
	
	if ( _this.isClickable == false ) {
		return;
	}
	_this.isClickable = false;

	if ( navigation == 'left' ) {
		var navigation = -1;
	} else if ( navigation == 'right' ) {
		var navigation = 1;
	} else {
		return;
	}
	
	 var moveNo= Math.abs(from-to);
	 var nowMarginLeft=$(_this.contentContainer).css("marginLeft").replace('px','');
	 var lastMarginLeft=(parseInt(nowMarginLeft)-moveNo*navigation*_this.width)+"px";
	 if(!$(_this.contentContainer).is(":animated")){			
		$(_this.contentContainer).stop().animate({marginLeft:lastMarginLeft}, "normal", function() {
			_this.isClickable = true;
		});	
	}
	$(_this.pagingContainer).find(".page[id='page_"+from+"']").removeClass("pageActive");
	$(_this.pagingContainer).find(".page[id='page_"+to+"']").addClass("pageActive");
			
};

$SlidePageBox.prototype.rotate = function() {
	
	var _this = this;
	
	var nowId=$(_this.pagingContainer).find(".page.pageActive").attr("id").substr($(_this.pagingContainer).find(".page.pageActive").attr("id").indexOf("_")+1,$(_this.pagingContainer).find(".page.pageActive").attr("id").indexOf("_").length);
	navigation = 'right';
	if ( parseInt(nowId,10) == $(_this.pagingContainer).find(".page").length ){
		if ( _this.recusive == true ) {
			toId = "1";
			navigation = 'left';
		} else {
			return;
		}
		
	} else {
		toId =  ( parseInt(nowId,10) + 1 ) + "";
	}
	_this.move( nowId,toId,navigation);
};



var $$TabBox = function(id) {
	this.ctn = $('#'+id);
	this.tabs = this.ctn.find('ul.tabs a');
	this.content = this.ctn.find('.content');
	this.handlers = [];
	var thisObj = this;
	this.tabs.bind('click', function(evt) { thisObj.tabClickHandler(evt);return false; });
};
$$TabBox.prototype.addTabClickEvent = function(handler) {
	this.handlers.push(handler);
};
$$TabBox.prototype.tabClickHandler = function(evt) {
	var target = $(evt.currentTarget);
	var type = target.attr('rel');
	var l = this.handlers.length;
	this.tabs.parents('li').removeClass('on');
	target.parent().addClass('on');
	for(var i = 0; i < l; i++) {
		this.handlers[i](type);
	}
};

var $QueryString = function(url) {
	this.url = (url || window.location.href);
	this.params = this.getParams(this.url);
};
$QueryString.prototype.get = function(key) {
	if (typeof this.params[key] !== 'undefined') return this.params[key];
	return null;
};
$QueryString.prototype.set = function(params) {
	for (var key in params) {
		this.params[key] = params[key];
	}
};
$QueryString.prototype.toString = function() {
	var temp = this.url.split('?');
	var urlParams = [];
	var cnt = 0;
	for (var key in this.params) {
		if (cnt !== 0) urlParams.push('&');
		urlParams.push(key+'='+encodeURIComponent(this.params[key]));
		cnt++;
	}
	return temp[0] + ((urlParams.length > 0) ? '?'+urlParams.join('') : '');
};
$QueryString.prototype.getParams = function(url) {
	var o = {};
	var temp = url.split('?');
	if (temp.length > 1) {
		var qs = temp[1].split('&');
		var l = qs.length;
		while(l--) {
			var valSet = qs[l].split('=');
			if (valSet.length > 1) {
				o[valSet[0]] = decodeURIComponent(valSet[1]);
			}
		}
	}
	return o;
};
var $ListLoader = function( url ) {
	this.url = url;
	this.callbacks = [];

};
$ListLoader.prototype.ajaxSuccess = function(data, section) {
	for(var i = 0; i < this.callbacks.length; i++) {
		this.callbacks[i](data, section);
	}
};

$ListLoader.prototype.fileNotFind = function() {
	for(var i = 0; i < this.callbacks.length; i++) {
		this.callbacks[i](null,null);
	}
};

$ListLoader.prototype.ajaxError = function() {
	for(var i = 0; i < this.callbacks.length; i++) {
		this.callbacks[i](null,null);
	}
};
$ListLoader.prototype.load = function() {

	var url = '';
	this.url = this.url + '?_=' + $dateFormat(new Date(new Date()),'yyyymmddHHMM');
	if ( this.url.indexOf('/event_') != -1 ) { // event cache in yyyymmddHHM
		this.url = this.url.slice(0,-1);
	}
	var instance = this;

	$.ajax({
		type : "GET",
		url : this.url,
		dataType : "json",
		success : function(data) {
			
			//dailylist and videoicon
			if ( this.url.indexOf('_dailyList') != -1 ) {
				
				// get dailylist find 20[14]
				var re = /\b20[0-9]+\b/; 
				var videolistDate = re.exec(this.url)
				var videolisturl = NEWS_PATH + '/video/' + videolistDate[0] + '/articleVideo_' + ONCC.getSection() + '.js';
				var listLoader = new $ListLoader(videolisturl);
				var _dailyListData = data;
				var _instance = instance;
				var _currentVideos = [];
				var _currentVideo = '';
				listLoader.callbacks.push( function ( _videoListData ) {
					
					if ( _videoListData != null ) {
					
						$.each ( _dailyListData , function ( k,v ) {
							
							v.video = '';
							v.videoThumbnail = '';
							_currentVideos = [];
							_currentVideo = '';
							$.each ( _videoListData , function ( k1,v2 ) {
							
								if ( typeof ( v2.video_lang ) == 'undefined' ) {
									 v2.video_lang = 'HK';
								}
								if ( v.articleId == v2.articleId &&  ( ONCC.getNation() == 'cn' || v2.video_lang == 'HK' ) ) {
									_currentVideos.push ( v2 );
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

								var videoThumbnailArray = '';
								var thumbnail =  'http://tv.on.cc/xml/Thumbnail/' + _currentVideo.vcreateDate.substr(0,6) + '/';
								if ( _currentVideo.videoThumbnail != '' ) {
									videoThumbnailArray = _currentVideo.videoThumbnail.split('/');
								}
								v.video = _currentVideo.video_path;
								v.videoThumbnail = thumbnail + videoThumbnailArray[ videoThumbnailArray.length - 1];
								
							}
									
						});
					}
					
					
					_instance.ajaxSuccess( _dailyListData, instance.section );
				});
				
				listLoader.load();
			} else {
				instance.ajaxSuccess(data, instance.section);
			}
			
		},
		statusCode : {
			404 : function() {
				//instance.fileNotFind();
			}
		},
		error : function(e, s, err) {
			 instance.ajaxError();
		}
	});

};

var $MetaLoader = function(id, createTime) {
	this.id = id;
	this.createTime = createTime;
	this.data = null;
	this.callbacks = [];
};
$MetaLoader.prototype.ajaxSuccess = function(data){
	for(var i = 0; i < this.callbacks.length; i++) {
		this.callbacks[i](data);
	}
};
$MetaLoader.prototype.ajaxError = function(){
	this.parseComplete(this.data);
};
$MetaLoader.prototype.parseComplete = function(data){
	if (data != null || typeof data != 'undefined' ) {
		for (var i = 0; i < this.callbacks.length; i++) {
			
				this.callbacks[i](data);
		
		}
	}	
};
$MetaLoader.prototype.load = function() {
	//var cache = ONTV.caches.getMeta(this.id);
	//if (cache) {
		//this.parseComplete(cache);
	//} else {

	var d = new Date(this.createTime*1000);
 	var url = '/xml/ontv/xml/Metadata/Video/'+$dateFormat(d,'yyyymm')+'/'+this.id+'.xml';
	
	var instance = this;
		$.ajax({
			url: url,
			dataType: 'xml',
			success: function(data){
				instance.ajaxSuccess(data);
			},
			error: function(){
				instance.ajaxError();
			}
		});
	//}
};
//#$MetaLoader

function scrollToElm(elm,during){
	if(typeof during != 'number'){during = 400;}
	$('html, body').animate({
        scrollTop: $(elm).offset().top
    }, during);
}

var clientWindowSize = function(){
	var theWidth, theHeight;
	if (window.innerWidth) {
		theWidth=window.innerWidth;
	}else if (document.documentElement && document.documentElement.clientWidth) {
		theWidth=document.documentElement.clientWidth;
	}else if (document.body) {
		theWidth=document.body.clientWidth;
	}
		
	if (window.innerHeight) {
		theHeight=window.innerHeight;
	}else if (document.documentElement && document.documentElement.clientHeight) {
		theHeight=document.documentElement.clientHeight;
	}else if (document.body) {
		theHeight=document.body.clientHeight;
	}
	
	return {height:theHeight,width:theWidth}
}

var $strTruncate = function(str, len, utf16) {//alert("a".charCodeAt(0));
	
	
	str = str.replace(/(&lt;|<)br(&gt;|>|\/>|\/&gt;)/,'');//replace first char matches <br>
	str = str.replace(/(&lt;|<)br(&gt;|>|\/>|\/&gt;).*/,'');//replace char after <br>
	
	if ( str == '' ) {
		return '詳情容後報道';
	}
	
	var rtnVal = new String(str);
	//if (utf16) {
		var tmpElem = document.createElement('div');
		tmpElem.innerHTML = str;
		if ( str != '') {
			rtnVal = tmpElem.childNodes[0].nodeValue;
		} else {
			rtnVal = '';
		}
	//}
	//rtnVal = rtnVal.replace(/<(.*)\/>/g,'');
	//rtnVal = rtnVal.replace(/<(.*?)\/>/g,'');
	
	
	if ( rtnVal.length < 8 ) {
		rtnVal = rtnVal.substr(0,len - 8) +  rtnVal.substr(len - 8 , rtnVal.length).replace(/<(.*?)\/>/g,'');
	}
	
	
	return rtnVal.substring(0, len)+((rtnVal.length > len) ? '...' : '');
};

var $langConvert = function ( url ) {

	if ( ($ONCC.cookie('lang') == null || $ONCC.cookie('lang') == 'zh' ) ) {
		return url;
	} else {

		if ( url.indexOf('index.html') != -1 && url.indexOf('newslist.html') != -1) {
			url.replace('.html','_cn.html');
		}
	
	}
}

//#$MetaLoader
var $MetaLoader = function(id, createTime) {
	this.id = id;
	this.createTime = createTime;
	this.data = null;
	this.callbacks = [];
};
$MetaLoader.prototype.ajaxSuccess = function(data){
	for(var i = 0; i < this.callbacks.length; i++) {
		this.callbacks[i](data);
	}
};
$MetaLoader.prototype.ajaxError = function(){
	this.parseComplete(this.data);
};
$MetaLoader.prototype.parseComplete = function(data){
	if (data != null || typeof data != 'undefined' ) {
		for (var i = 0; i < this.callbacks.length; i++) {
			
				this.callbacks[i](data);
		
		}
	}	
};
$MetaLoader.prototype.load = function() {
	//var cache = ONTV.caches.getMeta(this.id);
	//if (cache) {
		//this.parseComplete(cache);
	//} else {

	var d = new Date(this.createTime*1000);
 	var url = '/xml/ontv/xml/Metadata/Video/'+$dateFormat(d,'yyyymm')+'/'+this.id+'.xml';
	
	var instance = this;
		$.ajax({
			url: url,
			dataType: 'xml',
			success: function(data){
				instance.ajaxSuccess(data);
			},
			error: function(){
				instance.ajaxError();
			}
		});
	//}
};
//#$MetaLoader

(function($){
	$.urlParams = {
		get: function(strParamName){
			return $.urlParams.extract(strParamName,window.location.href);
		},
		extract: function(strParamName,strHref){
			var strReturn = "";
			var bFound=false;

			var cmpstring = strParamName + "=";
			var cmplen = cmpstring.length;

			if ( strHref.indexOf("?") > -1 ){
			var strQueryString = strHref.substr(strHref.indexOf("?")+1);
			var aQueryString = strQueryString.split("&");
				for ( var iParam = 0; iParam < aQueryString.length; iParam++ ){
				  if (aQueryString[iParam].substr(0,cmplen)==cmpstring){
					var aParam = aQueryString[iParam].split("=");
					strReturn = decodeURIComponent(aParam[1]);//should decode url string
					bFound=true;
					break;
				  }
				}
			}
			if (bFound==false) return null;
			return strReturn;
		},
		set: function(url,parameterName,parameterValue){
			return url+"?"+encodeURIComponent(parameterName)+"="+encodeURIComponent(parameterValue);
		},
		append: function(url,parameterName,parameterValue){
			return url+"&"+encodeURIComponent(parameterName)+"="+encodeURIComponent(parameterValue);
		}
	}
})(jQuery);

ONCC.init();

// S: redirect to mobile view
if ( ONCC.view == 'm' && ONCC.from == 'b' && ONCC.getLevel() == 'content' ) {
	regEx = /(\/[0-9]{6,}\/)/g,
	articleDate = window.location.href.match(regEx);
	if ( articleDate.toString().substr(1,8) >= "20150814" ) {
		window.location = window.location.href.replace( articleDate[0]  ,  articleDate[0] + 'mobile/');
	}
}
// E: redirect to mobile view


ONCC.toTop = {
	
	init : function() {
		
		$('body').prepend('<p id="back-top" style="display: block;"> <a href="#top"><span></span></a> </p>');
		// hide #back-top first
		$("#back-top").hide();
		// fade in #back-top
		$(function () {
			$(window).scroll(function () {
				if(!$('#lightbox').is(":visible")){
					if ($(this).scrollTop() > 150) {
						$('#back-top').fadeIn();
					} else {
						$('#back-top').fadeOut();
					}
				}
			});
	
			// scroll body to 0px on click
			$('#back-top a').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 400);
				return false;
			});
		});
	}
}


ONCC.autoFitRight = function( isLeft , isRight ){

	var _isLeft = isLeft;
	var _isRight = isRight;
	
	if ( _isLeft == false && _isRight == false ) {
		return;
	}
	//var btnMargin = Racing.platform.ie?105:90;
	var btnMargin = 0;
	var leftTop = 0;
	var leftFixed = false;
	var rightTop = 0;
	var rightSideHeight = 0;

/* 	$.each ( $('#sideLeft ul') , function( k,v ) {
		if ( $(v).position().top + 100 - $('#page_left_fixed_CTN').position().top > clientWindowSize().height ) {
			$(v).addClass('fixHidden');
		}
		
		$.each ( $(v).find('li') , function( k1,v1 ) {
			if ( $(v1).position().top + 100 - $('#page_left_fixed_CTN').position().top > clientWindowSize().height ) {
				$(v1).addClass('fixHidden');
			}
		});
	
	}); */
	$(window).scroll(function(){
			
			if ( _isLeft == true ) {
				var scrollTop = $(this).scrollTop();
				
				if ( location.href.indexOf('newlayout') != -1 ) {
				
					if ( scrollTop > 10  ) {
						if ( $('#fix-top .headNavLine').css('position') == 'relative' ) {
							$('#fix-top .headNavLine').css('position','fixed');
							$('#headerLogo').stop().animate({width: "70px"}, 500)
						
							$('.headNavLine').stop().animate({height: "46px"}, 500)
							$('ul#siteChannel2').stop().animate({"margin-left": "105px"}, 500)
							$('.headNavLine .other').fadeOut();
							$('#odnlogo').fadeOut();
							$('#headerLogo img:first').stop().animate({width: "64px"}, 500)
							
							$('#sideLeft').css({'position':'fixed'});
							$('#sideLeft').css({'top':'50px'});
						}
					} else {
						if (  $('#fix-top .headNavLine').css('position') == 'fixed' ) {
							$('#fix-top .headNavLine').css('position','relative');
							$('#headerLogo').stop().animate({width: "140px"}, 500)
							$('.headNavLine').stop().animate({height: "80px"}, 500)
							$('ul#siteChannel2').stop().animate({"margin-left": "167px"}, 500)
							$('.headNavLine .other').fadeIn();
							
							$('#odnlogo').fadeIn();
							$('#headerLogo img:first').stop().animate({width: "120px"}, 500)
							
							$('#sideLeft').css({'position':'relative'});
							$('#sideLeft').css({'top':'0px'});
						
						}
					}
				}
				
				if ( $('#sideLeft').position().top != 0 ) {
				
				}
				
				if ( leftTop == 0 ) {
					leftTop =  $('#sideLeft').position().top;
				} 
				
				//if ( location.href.indexOf('new3layout') != -1 ) {
				if ( true ) {
					if ( scrollTop > leftTop + $('#sideLeft').height() ) {
						if ( $('#sideLeft').css('position') != 'fixed' ) {
							
							
	
							$('#sideLeft').css('overflow','hidden');
							$('#sideLeft').css('height',  $(window).height() - 70  );
							$('#moreMenu').css('top', $(window).height() - 40 );
							$('#moreMenuUp').css('top', $(window).height() - 64 );
							$('#sideLeft .fixHidden').hide();
							$('#sideLeft').css('position','fixed');
							$('#sideLeft').css('top','-' + $('#sideLeft').height() + 'px');
							$('#sideLeft').stop().animate({top: '8px'}, 800, function() {
								$('#moreMenu').show();
								$('#moreMenuUp').show();
							});
							
							
							$('#moreMenu').find('img').attr('src','/img/v2/menu_down.png');
							$('#sideLeft').addClass('min-menu');
						}
						//-123
					} else {
					
						$('#sideLeft').css('overflow','inherit');
						$('#sideLeft').css('height','auto');
						$('#sideLeft').css('position','relative');
						$('#sideLeft .fixHidden').show();
						$('#sideLeft').css('top','auto');
						$('#moreMenu').hide();
						$('#moreMenuUp').hide();
						$('#sideLeft').removeClass('min-menu');
					}
				}
				

			}
			/* S: leftside /
			if ( leftTop == 0 ) {
				leftTop = $('#sideLeft').offset().top;
			}
			
			
			
			if ( scrollTop > leftTop ) {
				$('#sideLeft').css({'position':'fixed'});
				$('#sideLeft').css({'top': '0px'});
				//$('.mainmenu li ul.title').slideUp();	
				
			} else {
				$('#sideLeft').css({'position':'relative'});
				//$('.mainmenu li ul.title').slideDown();
			}
			/* E: leftside */
			
			
			/* S: rightside */
			
			if ( _isRight == true ) {
				if ( $('#page_right_fixed_CTN .rightSide').height() > $('.leftSide').height()  ) {
					$('#page_right_fixed_CTN .rightSide').css({'position':'relative'});
					$('#page_right_fixed_CTN .rightSide').css({'top': '0px'});
					return;
				}
				//console.log(scrollTop);
				if ( rightTop == 0 ) {
					rightTop = $('#page_right_fixed_CTN .rightSide').offset().top;
				}

				if ( $(window).height() > $('#page_right_fixed_CTN .rightSide').height() ) { // case 1 : window height > rightside -> fix on top
					
					if ( scrollTop + 8 > rightTop ) {
						$('#page_right_fixed_CTN .rightSide').css({'position':'fixed'});
						$('#page_right_fixed_CTN .rightSide').css({'top': '8px'});
					} else {
						$('#page_right_fixed_CTN .rightSide').css({'position':'relative'});
						$('#page_right_fixed_CTN .rightSide').css({'top': '0px'});
					}
					
				} else if (  $(window).height()  > $('#page_right_fixed_CTN .rightSide').height() - 508 ) { // case 2 : window height - lrec x 2 > rightside -> fix on top
					 
					 if ( (scrollTop - 508) > rightTop ) {
						$('#page_right_fixed_CTN .rightSide').css({'position':'fixed'});
						$('#page_right_fixed_CTN .rightSide').css({'top':  ( 508 * -1)  + 'px'});
					} else {
						$('#page_right_fixed_CTN .rightSide').css({'position':'relative'});
						$('#page_right_fixed_CTN .rightSide').css({'top': '0px'});
					}
					
					
				} else { // case 3 : window height - lrec x 2 > rightside -> fix on top
					if ( scrollTop - 60 + $(window).height() - rightTop  > $('#page_right_fixed_CTN .rightSide').height() ) {
						$('#page_right_fixed_CTN .rightSide').css({'position':'fixed'});
						$('#page_right_fixed_CTN .rightSide').css({'top': 'auto'});
						$('#page_right_fixed_CTN .rightSide').css({'bottom': '60px'});
					} else {
						$('#page_right_fixed_CTN .rightSide').css({'position':'relative'});
						$('#page_right_fixed_CTN .rightSide').css({'bottom': '0px'});
					}
				}
			
			}
		
			
			
			//var scrollTop = $(this).scrollTop();
			
			/*
			if ( scrollTop > rightTop ) {
				
			
				
			} else {
				
			}
			*/
			/* E: rightside */
			
	});
}




ONCC.Weather = {
	
	container : '#weatherCTN',
	listingDate : serverdate,
	init : function() {
	
	
		var url = NEWS_PATH + '/js/' + this.listingDate + '/weather_dailyList' + $ONCC.curLang  + '.js';
		var listLoader = new $ListLoader(url);
		listLoader.callbacks.push( function (data) {

			if ( ( data == null ) ? true : ( data.length == 0 ) ) { // recusive find the latest news feed

				var backday = $strToDate( ONCC.Weather.listingDate);
				backday.setDate( backday.getDate() - 1);
				ONCC.Weather.listingDate =  $dateFormat( backday , 'yyyymmdd');
				ONCC.Weather.init();
			
			} else { // found the latest news feed
				ONCC.Weather.bind(data[0]);
			}

		});
		listLoader.load();

	},
	
	bind : function( v ) {
	
		var html = [];
			 html.push('<ul class="weatherCTN">');
			 if(corpbar_weather_gif !='') {
				var icons = corpbar_weather_gif.split('|');
				var titles = corpbar_weather_gif_alt.split('|');
				for(var i=0; i<icons.length; i++)
				{
					html.push('<li><img src="'+$ONCC.domain+'/adv/web/corp/img/'+icons[i]+'" alt="'+titles[i]+'" title="'+titles[i]+'" style="vertical-align: middle; margin-right:4px;">');
				}
			}
			html.push( '<span class="weatherTitle">溫度：</span>' + corpbar_temperature+'<img src="'+$ONCC.domain+'/adv/web/corp/img/oncc_deg.gif" style="vertical-align: middle; margin-right:20px;"></li>');

			var title = v.title.replace('交通：','<span class="weatherTitle">交通：</span>');
			html.push('<li><a href="'+NEWS_PATH  + v.link+'" >' + title + '</a></li>');
			html.push('</ul>');

			$(ONCC.Weather.container).html( html.join(''));
	}
}




Number.prototype.toSymString = function(num) {
	if (this > 0) return '+' + this.toFixed(num).toString();
	return this.toFixed(num).toString();
};
Number.prototype.toPercentString = function(num) {
	if (this > 0) return '+' + this.toFixed(num).toString() + '%';
	else if (isNaN(this)) return new Number(0).toFixed(num) + '%';
	return this.toFixed(num).toString() + '%';
};
Number.prototype.toCommasString = function(num) {
	var x = this.toFixed(num).toString().split('.');
	var x1 = x[0];
	var x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	//var rgx = new RegExp('\d+)(\d{3})');
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}
Number.prototype.toChiUnit = function(num, unitStrPattern) {
	if (!num) num = 1;
	var valStr = 0;
	var unitStr = '';
	if (this < 10000) {
		valStr = this.toFixed(num).toString();
	} else if (this < 100000000) {
		valStr = (this/10000).toFixed(num).toString();
		unitStr = '萬';
	}
	/*
	else if (this < 10000000) {
		valStr = (this/1000000).toFixed(10).toString();
		unitStr = '百萬';
	} else if (this < 100000000) {
		valStr = (this/10000000).toFixed(10).toString();
		unitStr = '千萬';
	}*/
	else {
		valStr = (this/100000000).toFixed(num).toString();
		unitStr = '億';
	}
	var x = valStr.split('.');
	return new Number(x[0]).toCommasString() + '.' + x[1] + ((unitStrPattern) ? unitStrPattern.replace('$1', unitStr) : unitStr);
};
var MarketStatus = function(st) {
	this.status = '';
	if (st) this.status = st.toUpperCase();
};
MarketStatus.prototype.toString = function() {
	var rtnVal = '';
	switch(this.status) {
		case 'CT': rtnVal = '開市中'; break;
		case 'CL': rtnVal = '中午收市'; break;
		case 'DC': rtnVal = '全日收市'; break;
	};
	return rtnVal;
};
MarketStatus.prototype.isOpen = function() {
	return (this.status === 'CT');
}

if(typeof M18 == 'undefined'){
	var M18 = {};
}

M18.marketStatus = (typeof M18['s_MAIN'] !== 'undefined') ? new MarketStatus(M18['s_MAIN']) : new MarketStatus();
M18.lang = {
	'mk_open':'開市中', 'mk_fclose': '全日收市', 'mk_hclose':'中午收市','mk_close':'收市',
	'HSI':'&#24658;生指數', 'HSCEI':'國企指數'
};
M18.getTimeStamp = function(daily) {
	var today = new Date();
	if (daily) return today.getFullYear().toString() + today.getMonth().toString() + today.getDate().toString();
	var tString =  today.getTime().toString();
	return tString.substring(0,tString.length-3)+'9'+tString.substring(tString.length-2,tString.length);
};
M18.loadScript = function(url, callback, cbparams) {
	var head = document.getElementsByTagName("head")[0];
	var script = document.createElement("script");
	var done = false;
	script.src = url;
	script.charset = 'big5';
	// Attach handlers for all browsers
	script.onload = script.onreadystatechange = function() {
		if (!done && (!this.readyState||this.readyState =="loaded"||this.readyState == "complete")) {
			done = true;
			callback(cbparams);
			// Handle memory leak in IE
			script.onload=script.onreadystatechange=null;
			head.removeChild(script);
		}
	};
	head.appendChild(script);
};
M18.path = {
	append: function(url, params) {
		var urlParams = [];
		var cnt = 0;
		var temp = url.split('?');
		var qs = this.getQs(url);
		for (var key in params) {
			qs[key] = params[key];
		}
		for (var key in qs) {
			if (cnt !== 0) urlParams.push('&');
			urlParams.push(key+'='+qs[key]);
			cnt++;
		}
		if (urlParams.length > 0) {
			return temp[0] + '?'+urlParams.join('');
		} else {
			return url;
		}
	},
	get: function(path, daily) {
		var dummy = '';
		return this.append(path, {'t': M18.getTimeStamp(daily)});
	},
	getQs: function(url) {
		var rtnVal = {};
		var temp = url.split('?');
		if (temp.length > 1) {
			var qs =temp[1].split('&');
			for(var i = 0; i < qs.length;i++) {
				var keyVal = qs[i].split('=');
				if (keyVal.length > 1) {
					rtnVal[keyVal[0]] = decodeURIComponent(keyVal[1]);
				}
			}
		}
		return rtnVal;
	},
	market: function(){
		return this.get('http://home.on.cc/js/index/MAIN_s.js');
	},
	adr: function() {
		return this.get('/js/daily/adr/adr_b.js');
	},
	worldIdx: function() {
		return this.get('/js/daily/worldidx/worldidx_b.js');
	},
	stock: {
		root: 'http://home.on.cc/js/',
		folderNames: {
			'r': 'real',
			'o': 'opening',
			'd': 'daily',
			's': 'market_status',
			'q': 'quote',
			'i': 'index',
			'delay': 'delay'
		},
		get: function(symbol, type, subType) {
			//var daily = (type !== 'r' && type !== 'delay');
			return M18.path.get(this.root + this.folderNames[subType] + '/'+ symbol + '_' + ((subType != 'o' && subType != 's') ? ((type != 'delay') ? type : 'delay') : subType) +'.js', false);
		}
	},
	market: function(){
		return this.get('http://home.on.cc/js/index/MAIN_s.js');
	},
	index: function() {
		return this.get('http://home.on.cc/js/index/HSI_r.js');
	}
};

M18.indexWidget = {
	index: -1,
	id: '#indexWidget',
	indexVal: null,
	changeVal: null,
	statusVal: null,
	content: null,
	firstLoad: true,
	curStatus:null,
	closingEI:false,
	closing:false,
	closingCount:0,
	init: function() {
		this.content = $(this.id);
		if (this.content.length > 0) {
			this.indexVal = this.content.find('tr.index td.val');
			this.statusVal = this.content.find('tr.status td.label');
			this.changeVal = this.content.find('tr.status td.val');
			this.load(true);
			this.loadStatus(true);
			$(this.id).find('.HSI').before('<a id="hsi_link" style="cursor:pointer;" href="http://money18.on.cc/info/liveinfo_quote.html?symbol=HSI" target="_blank"><div style="width:280px;height:50px;background:white;position:absolute;z-index:1;opacity:0;filter: alpha(opacity = 0);"></div></a>');

			$('#hsi_link').click(function(){});
		}
	},
	load: function(reload) {
		if (typeof M18['r_HSI'] === 'undefined' || reload === true) {
			M18.loadScript(M18.path.index(), function() { M18.indexWidget.render() });
		} else {
			M18.indexWidget.render();
		}
	},
	loadStatus:  function(reload) {

		if (typeof M18['s_MAIN'] === 'undefined' || reload === true) {
			M18.loadScript(M18.path.market(), function() { M18.indexWidget.updateStatus() });
		} else {
			M18.indexWidget.updateStatus();
		}
	},
	render: function() {
		if (M18['r_HSI']) {
			if (this.index.toFixed(2) != new Number(M18['r_HSI'].value).toFixed(2)) {

				this.index = new Number(M18['r_HSI'].value);
				if (this.firstLoad === false) {
					this.indexVal.addClass('highlight');
					this.changeVal.addClass('highlight');
				}
				this.firstLoad = false;
				this.content.removeClass('up').removeClass('down');

				var change =  new Number(M18['r_HSI'].difference);
				if (change > 0) this.content.addClass('up');
				else if (change < 0) this.content.addClass('down');

				this.indexVal.html(this.index.toCommasString(2));
				this.changeVal.html(change.toSymString(2) + ' <span class="percent">(' + ((change / (this.index - change))*100).toPercentString(2) + ')</span>');
				setTimeout(function(){ M18.indexWidget.clearHighLight()}, 500);
			}

		}
		if (M18.marketStatus.isOpen() || M18['s_MAIN'] == 'EI' || this.closing) {
			if(this.closing){
				this.closingCount++;
				if(this.closingCount > 100){
					this.closingCount = 0;
					this.closing = false;
				}
			}
			setTimeout(function(){ M18.indexWidget.load(true)}, 2000);
		}
	},
	updateStatus: function() {
		if(this.closingEI && M18['s_MAIN'] == 'DC'){
			this.closing = true;
			this.closingEI = false;
		}

		if( M18['s_MAIN'] == 'EI' && !this.closingEI){
			this.closingEI = true;
		}

		var lastStatus = M18.marketStatus.isOpen();
		M18.marketStatus.status = M18['s_MAIN'];
		this.statusVal.html('&nbsp;'+M18.marketStatus+'&nbsp;');
		setTimeout(function(){ M18.indexWidget.loadStatus(true)}, 10000);
		if (lastStatus == false && lastStatus != M18.marketStatus.isOpen()) {
			this.render();
		}
	},
	clearHighLight: function() {
		this.indexVal.removeClass('highlight');
		this.changeVal.removeClass('highlight');
	}
};


M18.idxWidget = function(id, idxType) {
	this.index = -1;
	this.id = id;
	this.idxType = idxType;
	this.idxName = M18.lang[idxType];
	this.idxCtn = null;
	this.idxNameCtn = null;
	this.changeCtn = null;
	this.toCtn = null;
	this.ctn = null;
	this.firstLoad = true;
	this.timerId = null;
	this.curStatus = null;
	this.count = 0;
	this.closingCount = 0;
	this.closing = false;
};
M18.idxWidget.prototype.init = function() {
	this.ctn = $(this.id);
	if (this.ctn.length > 0) {
		this.idxNameCtn = this.ctn.find('.idxName');
		this.idxCtn = this.ctn.find('.val');
		this.changeCtn = this.ctn.find('.change');
		if (!this.toCtn) {
			this.toCtn = (this.ctn.find('.turnover').length > 0) ? this.ctn.find('.turnover') : null;
		}
		this.upDownCtn = this.ctn.find('table');
		this.idxNameCtn.html(this.idxName +'&nbsp;');
		this.load();
	}
};
M18.idxWidget.prototype.load = function(reload) {
	if (typeof M18['r_'+this.idxType] === 'undefined' || reload === true) {
		var instance = this;
		M18.loadScript(M18.path.stock.get(this.idxType, 'r', 'i'), function() { instance.render(); });
	} else {
		this.render();
	}
};
M18.idxWidget.prototype.render = function() {
	clearTimeout(this.timerId);
	var instance = this;
	if (M18['r_'+this.idxType]) {
		if (this.index.toFixed(2) != new Number(M18['r_'+this.idxType].value).toFixed(2)) {
			this.index = new Number(M18['r_'+this.idxType].value);
			if (this.firstLoad === false) {
				this.idxCtn.addClass('highlight');
				this.changeCtn.addClass('highlight');
				if (this.toCtn) this.toCtn.addClass('highlight');
			}
			this.firstLoad = false;
			this.upDownCtn.removeClass('up').removeClass('down');

			var change =  new Number(M18['r_'+this.idxType].difference);
			if (change > 0) this.upDownCtn.addClass('up');
			else if (change < 0) this.upDownCtn.addClass('down');

			this.idxCtn.html(this.index.toCommasString(2));
			this.changeCtn.html(change.toSymString(2) + ' <span class="percent">(' + ((change / (this.index - change))*100).toPercentString(2) + ')</span>');

			if (this.toCtn) {
				var turnover = new Number(M18['r_'+this.idxType].turnover);
				this.toCtn.html(turnover.toChiUnit(2));
			}
			
			if(this.count == 5 || this.count == 0){
				this.count++;
				var cii = ctIndexInfo;
				if (cii.HSI) {
					if (cii.HSI.hasClass('on')) {
						cii.HSI.click();
					}
				}
				if (cii.HSCEI) {
					if (cii.HSCEI.hasClass('on')) {
						cii.HSCEI.click();
					}
				}
			}else if(this.count > 5){
				this.count = 1;
			}

			setTimeout(function(){ instance.clearHighLight()}, 500);
		}

	}
	if (M18.marketStatus.isOpen() || M18.marketStatus.status === 'EI' || this.curStatus === 'EI' || instance.closing == true) {
		if(instance.closing == true){
			instance.closingCount++;
		}
		if(instance.closingCount > 100){
			instance.closing = false;
			return false;
		}
		if(M18.marketStatus.status === 'DC' && this.curStatus === 'EI'){
			instance.closing = true;
		}
		var timeInterval = 2000;
		this.timerId = setTimeout(function(){ instance.load(true)}, timeInterval);
		this.curStatus = M18.marketStatus.status;
		this.count++;
	}
};
M18.idxWidget.prototype.clearHighLight = function() {
	this.idxCtn.removeClass('highlight');
	this.changeCtn.removeClass('highlight');
	if (this.toCtn) {
		this.toCtn.removeClass('highlight');
	}
};

M18.marketWidget = function(id) {
	this.id = id;
	this.ctn = null;
	this.events = [];
	this.fixIe = false;
};
M18.marketWidget.prototype.init = function() {
	this.ctn = $(this.id + ' .status');
	if (this.ctn.length > 0) {
		this.load();
	}
};
M18.marketWidget.prototype.load = function(reload) {
	if (typeof M18['s_MAIN'] === 'undefined' || reload === true) {
		var instance = this;
		M18.loadScript(M18.path.market(), function() { instance.render() });
	} else {
		this.render();
	}
};
M18.marketWidget.prototype.render = function() {
	var lastStatus = M18.marketStatus.isOpen();
	var instance = this;
	M18.marketStatus.status = M18['s_MAIN'];
	this.ctn.html(M18.marketStatus+(this.fixIe ? '&nbsp;':''));
	setTimeout(function(){ instance.load(true)}, 10000);
	if (lastStatus == false && lastStatus != M18.marketStatus.isOpen()) {
		for (var i =0; i < this.events.length; i++) {
			this.events[i]();
		}
	}
};


		var ctIndexInfo = {
	HSI: null,
	HSCEI: null,
	chart: null,
	init: function() {
		this.HSI = $('#idxWidget-HSI');
		this.HSCEI = $('#idxWidget-HSCEI');
		//this.chart = $('#indexInfo div.chart');
		//$(this.chart).before('<a href="#" id="index_link" target="_blank" style="border: none;color:#D6D6D6;"></a>');
		//$(this.chart).appendTo('#indexInfo #index_link');
		
		this.HSI.find('div.chart').find('div.top').css('background-image',  'url(http://home.on.cc/chart/d1/img/i_w_HSI.jpg?t='+new Date().getTime()+')');
		this.HSI.find('div.chart').find('div.bottom').css('background-image',  'url(http://home.on.cc/chart/d1/img/i_w_HSI.jpg?t='+new Date().getTime()+')');
		this.HSCEI.find('div.chart').find('div.top').css('background-image',  'url(http://home.on.cc/chart/d1/img/i_w_HSCEI.jpg?t='+new Date().getTime()+')');
		this.HSCEI.find('div.chart').find('div.bottom').css('background-image',  'url(http://home.on.cc/chart/d1/img/i_w_HSCEI.jpg?t='+new Date().getTime()+')');
		/*this.HSI.click(function() {
			var c = ctIndexInfo;
			//if (!c.HSI.hasClass('on')) {
				c.HSCEI.removeClass('on');
				c.HSI.addClass('on');
				var imgUrl = 'url(http://home.on.cc/chart/d1/img/i_w_HSI.jpg?t='+new Date().getTime()+')';
				c.chart.find('div.top').css('background-image', imgUrl);
				c.chart.find('div.bottom').css('background-image', imgUrl);
				$('#indexInfo #index_link').attr('href','http://money18.on.cc/info/liveinfo_quote.html?symbol=HSI');
			//}
		});
		this.HSCEI.click(function() {
			var c = ctIndexInfo;
			//if (!c.HSCEI.hasClass('on')) {
				c.HSI.removeClass('on');
				c.HSCEI.addClass('on');
				var imgUrl = 'url(http://home.on.cc/chart/d1/img/i_w_HSCEI.jpg?t='+new Date().getTime()+')';
				c.chart.find('div.top').css('background-image', imgUrl);
				c.chart.find('div.bottom').css('background-image', imgUrl);
				$('#indexInfo #index_link').attr('href','http://money18.on.cc/info/liveinfo_quote.html?symbol=HSCEI');
			//}
		});
		this.HSI.click();*/
	}
};


function queryStock() {
	var qSymbolTf = document.getElementById('txt_qstock_symbol');
	var qSymbol = qSymbolTf.value;

	//var priceURL = "http://money18.on.cc/info/liveinfo_quote.html?symbol=";
	var priceURL = "http://money18.on.cc/info/quote_redirect.html?symbol=";
	//var priceURL = "http://202.125.90.99/info/liveinfo_quote.html?symbol=";

	var tracking = 'http://ad1.on.cc/phpAdsNew/adclick.php?bannerid=49955';

	if (qSymbol != '' && (qSymbol.match(new RegExp(/^\d{0,5}$/)) || qSymbol.match(new RegExp(/^\d{0,6}$/)))) {
		var timespan =  new Date().getTime();
		var imp = new Image();
		imp.src = tracking+'&t='+timespan;

		setTimeout(function(){
			qSymbol = $digitPad('0',qSymbol, 5);
			window.location = priceURL + qSymbol;
		},200);

	} else {
		alert("請輸入正確股票編號。");
		qSymbolTf.focus();
	}
}
function onFocusStock(obj) {if (obj.value == '輸入股票編號') {obj.value = '';}}
function onBlurStock(obj) {if (obj.value == '') {obj.value = '輸入股票編號';}}



var ctMarkSix = {
	curtab:1,
	load: function() {
		var xml = new onccLib.ParseXML('/news/xml/LOT_GAME.xml');
		xml.setOutputArrayAll();
		xml.async(ctMarkSix.init);
		xml.parse();
	},
	init: function(data) {
		var weekday = ['日', '一', '二', '三', '四', '五', '六'];
		//var ampm = ['日', '一', '二', '三', '四', '五', '六'];
		var numlist = String(data.LOTTERY[0].LAST_DRAW[0].DRAW_NUM[0]['#text']).split(',');
		var extranum = String(data.LOTTERY[0].LAST_DRAW[0].DRAW_NUM[0].EXTRA_NUM[0]);
		var datenum = String(data.LOTTERY[0].LAST_DRAW[0].DATE[0]).split('-');
		var thisdateobj = new Date(parseInt(datenum[2],10), parseInt(datenum[1],10)-1, parseInt(datenum[0],10));
		var ndatenum = String(data.LOTTERY[0].NEXT_DRAW[0].DATE[0]).split('-');
		var nextdateobj = new Date(parseInt(ndatenum[2],10), parseInt(ndatenum[1],10)-1, parseInt(ndatenum[0],10));
		var drawID = String(data.LOTTERY[0].LAST_DRAW[0].ID[0]).split('-');
		var mdate = ndatenum[2].toString().concat(ndatenum[1].toString(), ndatenum[0].toString(), String(data.LOTTERY[0].NEXT_DRAW[0].CLOSE_TIME[0]).substring(0,2), String(data.LOTTERY[0].NEXT_DRAW[0].CLOSE_TIME[0]).substring(2,4));
		if(mdate > todaydate.substr(0, 12)) {
		
			var plus = '<img src="/img/marksix/plus.gif" width="12" height="12" style="padding-top:6px;">';
			var html = '<div class="whiteContentBox">';
			html += '<div class="headerCTN">';
			html += '<div class="title">';
			html += '<div style="width:285px;float:left;padding-bottom:10px;background:url(/img/marksix/marksixbg.gif) repeat-x top right;">';
				html += '<div style="float:left;"><img src="/img/marksix/marksix.gif" height="20" border="0" alt="六合彩" title="六合彩" style="margin:0px;"></div>';
				html += '<div style="float:left;" onclick="ctMarkSix.change(1)" onmouseover="ctMarkSix.over(1)" onmouseout="ctMarkSix.out(1)"><div id="msix1_on" style="display:block;"><img src="/img/marksix/bt_results_on.gif" height="20" alt="攪珠結果" title="攪珠結果" border="0" style="margin:0px;"></div>';
				html += '<div id="msix1_off" style="display:none;"><img src="/img/marksix/bt_results_off.gif" height="20" alt="攪珠結果" title="攪珠結果" border="0" style="margin:0px;"></div></div>';
				html += '<div style="float:left;" onclick="ctMarkSix.change(2)" onmouseover="ctMarkSix.over(2)" onmouseout="ctMarkSix.out(2)"><div id="msix2_on" style="display:none;"><img src="/img/marksix/bt_lucky_on.gif" height="20" alt="運財號碼" title="運財號碼" border="0" style="margin:0px;"></div>';
				html += '<div id="msix2_off" style="display:block;"><img src="/img/marksix/bt_lucky_off.gif" height="20" alt="運財號碼" title="運財號碼" border="0" style="margin:0px;"></div></div>';
			html += '</div>';
			html += '<div id="content2" style="display:none">';
	
			html += '</div>';
	
			html += '<div id="content1" style="display:block">';
			//html += '攪珠日期：'+datenum[0]+'/'+datenum[1]+'/'+datenum[2]+' 星期'+weekday[thisdateobj.getDay()]+'（期數：'+drawID[0]+'/'+drawID[1]+'）';
			html += '攪珠日期：'+datenum[2]+'年'+datenum[1]+'月'+datenum[0]+'日('+weekday[thisdateobj.getDay()]+') (期數：'+drawID[0]+'/'+drawID[1]+')';
			html += '<div class="numlist">';
			for(var i = 0; i < numlist.length;i++) {
				html += '<img src="/img/marksix/no_'+ $digitPad('0', String(numlist[i]), 2) + '.gif" alt="'+numlist[i]+'" title="'+numlist[i]+'" width="26" height="26">';
			}
			html += plus;
			html += '<img src="/img/marksix/no_'+ $digitPad('0', String(extranum), 2) + '.gif" alt="'+extranum+'" title="'+extranum+'" width="26" height="26">';
			html += '</div>';
			html += '<div style="line-height:18px;">';
	
			for(var i=0; i<data.LOTTERY[0].LAST_DRAW[0].MK6[0].PRIZE.length; i++)
			{
				if(data.LOTTERY[0].LAST_DRAW[0].MK6[0].PRIZE[i].NUM == 1)
				{
					if(parseInt(data.LOTTERY[0].LAST_DRAW[0].MK6[0].PRIZE[i].WIN_INV)>0)
					{
						html += '頭獎每注派彩：'+formatCurrency(parseInt(data.LOTTERY[0].LAST_DRAW[0].MK6[0].PRIZE[i]['#text']))+'（'+(parseInt(data.LOTTERY[0].LAST_DRAW[0].MK6[0].PRIZE[i].WIN_INV)/parseInt(data.LOTTERY[0].LAST_DRAW[0].MK6[0].UNIT_BET))+' 注中）<br>';
					}
					else
					{
						html += '頭獎每注派彩：－（無人中）<br>';
					}
				}
				else if(data.LOTTERY[0].LAST_DRAW[0].MK6[0].PRIZE[i].NUM == 2)
				{
					if(parseInt(data.LOTTERY[0].LAST_DRAW[0].MK6[0].PRIZE[i].WIN_INV)>0)
					{
						html += '二獎每注派彩：'+formatCurrency(parseInt(data.LOTTERY[0].LAST_DRAW[0].MK6[0].PRIZE[i]['#text']))+'（'+(parseInt(data.LOTTERY[0].LAST_DRAW[0].MK6[0].PRIZE[i].WIN_INV)/parseInt(data.LOTTERY[0].LAST_DRAW[0].MK6[0].UNIT_BET))+' 注中）<br>';
					}
					else
					{
						html += '二獎每注派彩：－（無人中）<br>';
					}
				}
				else if(data.LOTTERY[0].LAST_DRAW[0].MK6[0].PRIZE[i].NUM == 3)
				{
					if(parseInt(data.LOTTERY[0].LAST_DRAW[0].MK6[0].PRIZE[i].WIN_INV)>0)
					{
						html += '三獎每注派彩：'+formatCurrency(parseInt(data.LOTTERY[0].LAST_DRAW[0].MK6[0].PRIZE[i]['#text']))+'（'+(parseInt(data.LOTTERY[0].LAST_DRAW[0].MK6[0].PRIZE[i].WIN_INV)/parseInt(data.LOTTERY[0].LAST_DRAW[0].MK6[0].UNIT_BET))+' 注中）<br>';
					}
					else
					{
						html += '三獎每注派彩：－（無人中）<br>';
					}
				}
			}
			html += '</div>';
			html += '</div></div>';
			html += '</div>';
	
			var hh = parseInt(String(data.LOTTERY[0].NEXT_DRAW[0].CLOSE_TIME[0]).substring(0,2));
			var mm = parseInt(String(data.LOTTERY[0].NEXT_DRAW[0].CLOSE_TIME[0]).substring(2,4));
			if(hh>12)
			{
				hh= hh-12;
			}
			html += '<div id="content3" class="boxContentCTN_bg" style="padding-top:15px;line-height:18px;display:block">';
			//html += '下期攪珠日期：'+ndatenum[0]+'/'+ndatenum[1]+'/'+ndatenum[2]+' 星期'+weekday[nextdateobj.getDay()]+'<br>';
			html += '下期攪珠日期：'+ndatenum[2]+'年'+ndatenum[1]+'月'+ndatenum[0]+'日('+weekday[nextdateobj.getDay()]+')<br>';
			html += '截止售票時間：晚上 '+hh+':'+mm+'<br>';
	
			var displayamount = 0;
			var snowball = 0;
			if(String(data.LOTTERY[0].NEXT_DRAW[0].SNOWBALL[0]['#text']) != '(Null)')
			{
				snowball = parseInt(String(data.LOTTERY[0].NEXT_DRAW[0].SNOWBALL[0]['#text']));
			}
			var jackpot = parseInt(String(data.LOTTERY[0].NEXT_DRAW[0].JACKPOT[0]));
			if(jackpot < snowball)
			{
				displayamount = snowball;
			}
			else
			{
				displayamount = jackpot
			}
	
			html += '多寶／金多寶：<span style="color:#ff8e00;font-weight:bold;">'+formatCurrency(displayamount)+'</span><br>';
			html += '估計頭獎基金：<span style="color:#ff8e00;font-weight:bold;">'+formatCurrency(parseInt(String(data.LOTTERY[0].NEXT_DRAW[0].EST_PRIZE1_MANUAL[0])))+'</span><br>';
	
			html += '</div><div class="footer"><div></div></div></div>';
			document.getElementById('dataMarkSixCTN').innerHTML = html;
			ctMarkSix.gennewsix();
			$('#markSixCTN').show();
		} else {
			$('#markSixCTN').hide();
		}
	},
	over: function(inid) {
		if(inid != ctMarkSix.curtab)
		{
			document.getElementById('msix'+inid+'_on').style.display='block';
			document.getElementById('msix'+inid+'_off').style.display='none';
		}

	},
	out: function(inid) {
		if(inid != ctMarkSix.curtab)
		{
			document.getElementById('msix'+inid+'_on').style.display='none';
			document.getElementById('msix'+inid+'_off').style.display='block';
		}

	},
	change: function(inid) {
		if(ctMarkSix.curtab != inid)
		{
			if(inid == 2)
			{
				document.getElementById('content3').style.display='none';
			}
			else
			{
				document.getElementById('content3').style.display='block';
			}
			document.getElementById('msix'+ctMarkSix.curtab+'_on').style.display='none';
			document.getElementById('msix'+ctMarkSix.curtab+'_off').style.display='block';
			document.getElementById('msix'+inid+'_on').style.display='block';
			document.getElementById('msix'+inid+'_off').style.display='none';
			document.getElementById('content'+inid).style.display='block';
			document.getElementById('content'+ctMarkSix.curtab).style.display='none';
			ctMarkSix.curtab = inid;
		}
	},
	gensix:function(){
		var randnoArray = new Array();
		var tempno = Math.floor(Math.random()*49)+1;
		while (randnoArray.length < 6)
		{
			var addok = true;
			for(var i=0; i<randnoArray.length; i++)
			{
				if(randnoArray[i] == tempno)
				{
					addok = false;
					break;
				}
			}
			if(addok)
			{
				randnoArray.push(tempno);
			}
			tempno = Math.floor(Math.random()*49)+1;
		}
		return randnoArray.sort(ctMarkSix.sortNumbers);
	},
	gennewsix:function(){
		var html='';
		var numbers = [];
       	html += '<div class="numlist">';
		for(var m=0; m<4; m++)
		{
			numbers = ctMarkSix.gensix();
			if(m>0)
			{
				html += '<div style="height:1px;width:220px;background-color:#eee;padding:0px;margin:5px 0px 5px 0px;overflow:hidden"></div>';
			}
			for (var i=0; i<numbers.length; i++)
			{
				html += '<img src="/img/marksix/no_'+ $digitPad('0', String(numbers[i]), 2) + '.gif" alt="'+numbers[i]+'" title="'+numbers[i]+'" width="26" height="26" style="margin-right:10px;">';
			}
		}
		html += '</div>';
		html += '<img src="/img/marksix/bt_reset.gif" alt="重試" title="重試" border="0" style="margin-left:240px;cursor:pointer;" onclick="ctMarkSix.gennewsix()">';
		document.getElementById('content2').innerHTML = html;
	},
	sortNumbers:function(a, b) {return a - b}
};


ONCC.Polling = {
 
 	init: function() {
	
		$.get($getUrlWithTime('/orimain/polling/polling.xml'), function(data) {
			$('#pollingCTN').html(ONCC.Polling.renderHtml(data));
			$('#pollingCTN').show();
		});
			
			
			/*$('#'+$this.attr('type')+'Header').click(function(){
				  if (typeof Urchin != 'undefined') {
					Urchin.click_view(window.location.href,$this.attr('type')+'Header');
				  }
			});*/
		
	},
	renderHtml: function (data) {
	
		var html = '';
		var sect = '';
		var title = '';
		var url = '';
		var pathIdx = '';
		html += '<li class="header"><img src="/img/v2/polling_icon.png" style="margin-right: 5px;">民意中心</li>';
		html += '<li>快些投下你的一票 :</li>';
		$.each( $(data).find('polling') ,function() {
			
			sect = $(this).find('sect_L1_cname').text();
			title = $strTruncate( $(this).find('title').text(), 20, true);
			url =   $(this).find('url').text();
			pathIdx = url.indexOf('/cgi-bin/');
			url = '/polling/index.html?url='+url.substring(pathIdx, url.length).replace('?', '+');
			
			html += '<li><a href="' + url + '" target="_blank">' + sect + ' : ' + title + '</a></li>';
		});
		
		html  = '<ul>' + html + '</ul>';
		
		return html;
	}
};


function formatCurrency(num) {
	num = num.toString().replace(/\$|\,/g,'');
	if(isNaN(num))
	num = "0";
	sign = (num == (num = Math.abs(num)));
	num = Math.floor(num*100+0.50000000001);
	cents = num%100;
	num = Math.floor(num/100).toString();
	if(cents<10)
	cents = "0" + cents;
	for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
	num = num.substring(0,num.length-(4*i+3))+','+
	num.substring(num.length-(4*i+3));
	return (((sign)?'':'-') + '$' + num);
}
// ================================================================
//  class: onccLib.ParseXML
var onccLib = {};
onccLib.ParseXML = function ( url, query, method ) {
    this.http = new onccLib.ParseXML.HTTP( url, query, method, false );
    return this;
};
//  class variables
onccLib.ParseXML.MIME_TYPE_XML  = 'text/xml';
onccLib.ParseXML.MAP_NODETYPE = [
    '',
    'ELEMENT_NODE', //1
    'ATTRIBUTE_NODE', //2
    'TEXT_NODE', //3
    'CDATA_SECTION_NODE', //4
    'ENTITY_REFERENCE_NODE', //5
    'ENTITY_NODE', //6
    'PROCESSING_INSTRUCTION_NODE', //7
    'COMMENT_NODE', //8
    'DOCUMENT_NODE', //9
    'DOCUMENT_TYPE_NODE', //10
    'DOCUMENT_FRAGMENT_NODE', //11
    'NOTATION_NODE' //12
];
//  define callback function (ajax)
onccLib.ParseXML.prototype.async = function ( func, args ) {
    this.callback_func = func;      // callback function
    this.callback_arg  = args;      // first argument
};
onccLib.ParseXML.prototype.onerror = function ( func, args ) {
    this.onerror_func = func;       // callback function
};
//  method: parse()
//  return: parsed object
//  Download a file from remote server and parse it.
onccLib.ParseXML.prototype.parse = function () {
    if ( ! this.http ) return;
    if ( this.onerror_func ) {
        this.http.onerror( this.onerror_func );
    }
    if ( this.callback_func ) {                             // async mode
        var copy = this;
        var proc = function() {
            if ( ! copy.http ) return;
            var data = copy.parseResponse();
            copy.callback_func( data, copy.callback_arg );  // call back
        };
        this.http.async( proc );
    }
    this.http.load();
    if ( ! this.callback_func ) {                           // sync mode
        var data = this.parseResponse();
        return data;
    }
};
//  every child/children into array
onccLib.ParseXML.prototype.setOutputArrayAll = function () {this.setOutputArray( true );}
//  a child into scalar, children into array
onccLib.ParseXML.prototype.setOutputArrayAuto = function () {this.setOutputArray( null );}
//  every child/children into scalar (first sibiling only)
onccLib.ParseXML.prototype.setOutputArrayNever = function () {this.setOutputArray( false );}
//  specified child/children into array, other child/children into scalar
onccLib.ParseXML.prototype.setOutputArrayElements = function ( list ) {this.setOutputArray( list );}
//  specify how to treate child/children into scalar/array
onccLib.ParseXML.prototype.setOutputArray = function ( mode ) {
    if ( typeof(mode) == 'string' ) {
        mode = [ mode ];                // string into array
    }
    if ( mode && typeof(mode) == 'object' ) {
        if ( mode.length < 0 ) {
            mode = false;               // false when array == []
        } else {
            var hash = {};
            for( var i=0; i<mode.length; i++ ) {
                hash[mode[i]] = true;
            }
            mode = hash;                // array into hashed array
            if ( mode['*'] ) {
                mode = true;            // true when includes '*'
            }
        }
    }
    this.usearray = mode;
}
//  method: parseResponse()
onccLib.ParseXML.prototype.parseResponse = function () {
    var root = this.http.documentElement();
    var data = this.parseDocument( root );
    return data;
}
//  convert from DOM root node to JavaScript Object
//  method: parseElement( rootElement )
onccLib.ParseXML.prototype.parseDocument = function ( root ) {
    if ( ! root ) return;
    var ret = this.parseElement( root );            // parse root node
    if ( this.usearray == true ) {                  // always into array
        ret = [ ret ];
    } else if ( this.usearray == false ) {          // always into scalar
        //
    } else if ( this.usearray == null ) {           // automatic
        //
    } else if ( this.usearray[root.nodeName] ) {    // specified tag
        ret = [ ret ];
    }
    var json = {};
    json[root.nodeName] = ret;                      // root nodeName
    return json;
};
//  convert from DOM Element to JavaScript Object
//  method: parseElement( element )
onccLib.ParseXML.prototype.parseElement = function ( elem ) {
    //  COMMENT_NODE
    if ( elem.nodeType == 7 ) {
        return;
    }

    //  TEXT_NODE CDATA_SECTION_NODE
    if ( elem.nodeType == 3 || elem.nodeType == 4 ) {
        var bool = elem.nodeValue.match( /[^\x00-\x20]/ ); // for Safari
        if ( bool == null ) return;     // ignore white spaces
        return elem.nodeValue;
    }

    var retval;
    var cnt = {};

    //  parse attributes
    if ( elem.attributes && elem.attributes.length ) {
        retval = {};
        for ( var i=0; i<elem.attributes.length; i++ ) {
            var key = elem.attributes[i].nodeName;
           if ( typeof(key) != 'string' ) continue;
            var val = elem.attributes[i].nodeValue;
            if ( ! val ) continue;
            if ( typeof(cnt[key]) == 'undefined' ) cnt[key] = 0;
            cnt[key] ++;
            this.addNode( retval, key, cnt[key], val );
        }
    }

    //  parse child nodes (recursive)
    if ( elem.childNodes && elem.childNodes.length ) {
        var textonly = true;
        if ( retval ) textonly = false;        // some attributes exists
        for ( var i=0; i<elem.childNodes.length && textonly; i++ ) {
            var ntype = elem.childNodes[i].nodeType;
            if ( ntype == 3 || ntype == 4 ) continue;
            textonly = false;
        }
        if ( textonly ) {
            if ( ! retval ) retval = '';
            for ( var i=0; i<elem.childNodes.length; i++ ) {
                retval += elem.childNodes[i].nodeValue;
            }
        } else {
            if ( ! retval ) retval = {};
            for ( var i=0; i<elem.childNodes.length; i++ ) {
                var key = elem.childNodes[i].nodeName;
                if ( typeof(key) != 'string' ) continue;
                var val = this.parseElement( elem.childNodes[i] );
                if ( ! val ) continue;
                if ( typeof(cnt[key]) == 'undefined' ) cnt[key] = 0;
                cnt[key] ++;
                this.addNode( retval, key, cnt[key], val );
            }
        }
    }
    return retval;
};
//  method: addNode( hash, key, count, value )
onccLib.ParseXML.prototype.addNode = function ( hash, key, cnts, val ) {
    if ( this.usearray == true ) {              // into array
        if ( cnts == 1 ) hash[key] = [];
        hash[key][hash[key].length] = val;      // push
    } else if ( this.usearray == false ) {      // into scalar
        if ( cnts == 1 ) hash[key] = val;       // only 1st sibling
    } else if ( this.usearray == null ) {
        if ( cnts == 1 ) {                      // 1st sibling
            hash[key] = val;
        } else if ( cnts == 2 ) {               // 2nd sibling
            hash[key] = [ hash[key], val ];
        } else {                                // 3rd sibling and more
            hash[key][hash[key].length] = val;
        }
    } else if ( this.usearray[key] ) {
        if ( cnts == 1 ) hash[key] = [];
        hash[key][hash[key].length] = val;      // push
    } else {
        if ( cnts == 1 ) hash[key] = val;       // only 1st sibling
    }
};

// ================================================================
//  class: onccLib.ParseXML.HTTP
//  constructer: new onccLib.ParseXML.HTTP()
onccLib.ParseXML.HTTP = function( url, query, method, textmode ) {
    this.url = url;
    if ( typeof(query) == 'string' ) {
        this.query = query;
    } else {
        this.query = '';
    }
    if ( method ) {
        this.method = method;
    } else if ( typeof(query) == 'string' ) {
        this.method = 'POST';
    } else {
        this.method = 'GET';
    }
    this.textmode = textmode ? true : false;
    this.req = null;
    this.xmldom_flag = false;
    this.onerror_func  = null;
    this.callback_func = null;
    this.already_done = null;
    return this;
};
//  class variables
onccLib.ParseXML.HTTP.REQUEST_TYPE  = 'application/x-www-form-urlencoded';
onccLib.ParseXML.HTTP.ACTIVEX_XMLDOM  = 'Microsoft.XMLDOM';  // Msxml2.DOMDocument.5.0
onccLib.ParseXML.HTTP.ACTIVEX_XMLHTTP = 'Microsoft.XMLHTTP'; // Msxml2.XMLHTTP.3.0
onccLib.ParseXML.HTTP.EPOCH_TIMESTAMP = 'Thu, 01 Jun 1970 00:00:00 GMT'
onccLib.ParseXML.HTTP.prototype.onerror = onccLib.ParseXML.prototype.onerror;
onccLib.ParseXML.HTTP.prototype.async = function( func ) {
    this.async_func = func;
}
//  method: load(  )
onccLib.ParseXML.HTTP.prototype.load = function() {
    // create XMLHttpRequest object
    if ( window.ActiveXObject ) {                           // IE5.5,6,7
        var activex = onccLib.ParseXML.HTTP.ACTIVEX_XMLHTTP;    // IXMLHttpRequest
        if ( this.method == 'GET' && ! this.textmode ) {
            // use IXMLDOMElement to accept any mime types
            // because overrideMimeType() is not available on IE6
            activex = onccLib.ParseXML.HTTP.ACTIVEX_XMLDOM;     // IXMLDOMElement
        }
        this.req = new ActiveXObject( activex );
    } else if ( window.XMLHttpRequest ) {                   // Firefox, Opera, iCab
        this.req = new XMLHttpRequest();
    }

    // async mode when call back function is specified
    var async_flag = this.async_func ? true : false;

    // open for XMLHTTPRequest (not for IXMLDOMElement)
    if ( typeof(this.req.send) != 'undefined' ) {
        this.req.open( this.method, this.url, async_flag );
    }

    // Content-Type: application/x-www-form-urlencoded (request header)
    // Some server does not accept without request content-type.
    if ( typeof(this.req.setRequestHeader) != 'undefined' ) {
        this.req.setRequestHeader( 'Content-Type', onccLib.ParseXML.HTTP.REQUEST_TYPE );
    }

    // Content-Type: text/xml (response header)
    // FireFox does not accept other mime types like application/rdf+xml etc.
    if ( typeof(this.req.overrideMimeType) != 'undefined' && ! this.textmode ) {
        this.req.overrideMimeType( onccLib.ParseXML.MIME_TYPE_XML );
    }

    // set call back handler when async mode
    if ( async_flag ) {
        var copy = this;
        copy.already_done = false;                  // not parsed yet
        var check_func = function () {
            if ( copy.req.readyState != 4 ) return;
            var succeed = copy.checkResponse();
            if ( ! succeed ) return;                // failed
            if ( copy.already_done ) return;        // parse only once
            copy.already_done = true;               // already parsed
            copy.async_func();                      // call back async

			// To fix bug of IE's memory leak
			copy.req.onreadystatechange = function(){};

        };
        this.req.onreadystatechange = check_func;
    }

    // send the request and query string
    if ( typeof(this.req.send) != 'undefined' ) {
        this.req.send( this.query );                        // XMLHTTPRequest
    } else if ( typeof(this.req.load) != 'undefined' ) {
        this.req.async = async_flag;
        this.req.load( this.url );                          // IXMLDOMElement
    }

    // just return when async mode
    if ( async_flag ) return;

    var succeed = this.checkResponse();
}
//  method: checkResponse()
onccLib.ParseXML.HTTP.prototype.checkResponse = function() {
    // parseError on IXMLDOMElement
    if ( this.req.parseError && this.req.parseError.errorCode != 0 ) {
        if ( this.onerror_func ) this.onerror_func( this.req.parseError.reason );
        return false;                       // failed
    }

    // HTTP response code
    if ( this.req.status-0 > 0 &&
         this.req.status != 200 &&          // OK
         this.req.status != 206 &&          // Partial Content
         this.req.status != 304 ) {         // Not Modified
        if ( this.onerror_func ) this.onerror_func( this.req.status );
        return false;                       // failed
    }

    return true;                            // succeed
}
//  method: documentElement()
//  return: XML DOM in response body
onccLib.ParseXML.HTTP.prototype.documentElement = function() {
    if ( ! this.req ) return;
    if ( this.req.responseXML ) {
        return this.req.responseXML.documentElement;    // XMLHTTPRequest
    } else {
       return this.req.documentElement;                // IXMLDOMDocument
    }
}
//  method: responseText()
//  return: text string in response body
onccLib.ParseXML.HTTP.prototype.responseText = function() {
    if ( ! this.req ) return;

    //  Safari and Konqueror cannot understand the encoding of text files.
    if ( navigator.appVersion.match( 'KHTML' ) ) {
        var esc = escape( this.req.responseText );
        if ( ! esc.match('%u') && esc.match('%') ) {
            return decodeURIComponent(esc);
        }
    }

    return this.req.responseText;
}

// ================================================================
//  class: onccLib.ParseXML.Text
onccLib.ParseXML.Text = function ( url, query, method ) {
    this.http = new onccLib.ParseXML.HTTP( url, query, method, true );
    return this;
};

onccLib.ParseXML.Text.prototype.parse = onccLib.ParseXML.prototype.parse;
onccLib.ParseXML.Text.prototype.async = onccLib.ParseXML.prototype.async;
onccLib.ParseXML.Text.prototype.onerror = onccLib.ParseXML.prototype.onerror;

onccLib.ParseXML.Text.prototype.parseResponse = function () {
    var data = this.http.responseText();
    return data;
}

onccLib.strRemoveBR = function (aString) {
	var retVal = String(aString);
	var brRegExp = /&lt;br&gt;/gi;
	return retVal.replace(brRegExp, '');
};

ONCC.Player = {
	
	hasVideo : true,
	
	playedTvc : function( status ) {
		if ( this.hasVideo == false ) {
			$('.video').fadeOut();
		}
	},
	
	playingTvc : function( status ) {
		if ( this.hasVideo == false ) {
			$('.video').css('height','362px');
			$('.video').css('overflow','block');
		}
	}
	
}

var GLBOAL_PATH = ONCC.getLocation();var NEWS_PATH = '/' + GLBOAL_PATH + '/' + 'bkn'; SECTION_CODE = ONCC.getCodeBySection( ONCC.getLocation() + "_" + ONCC.getSection() );
var NEWS_PATH = '/' + GLBOAL_PATH + '/' + 'bkn';



/* S:global function */



/* S:global function */


/* S:main page */
ONCC.MainPage = {
	
	container : '#tab',
	sectionClass : '',
	targetType : '',
	
	hash : window.location.hash,
	
	init : function() {
		
		var url = new $QueryString ( window.location.href );
		var refer = url.get('refer');
					
		if ( $ONCC.curLang == '_cn' ) {
			$(this.container).find('.item').addClass('cn');
		}
		
		if ( ONCC.getSection() == 'entertainment' ) {
			ONCC.MainPage.sectionClass = ONCC.entSectionNews;
		} else if ( ONCC.getSection() == 'lifestyle' ) {
			ONCC.MainPage.sectionClass = ONCC.lifeSectionNews;
		}  else if ( ONCC.getSection() == 'sport' ) {
			ONCC.MainPage.sectionClass = ONCC.sportSectionNews;
		} else {
			ONCC.MainPage.sectionClass = ONCC.normalSectionNews;
		}
		
		
		$( ONCC.MainPage.container ).show();
		$( ONCC.MainPage.container ).find('.item').click ( function() {
			$( ONCC.MainPage.container ).find('.item').removeClass('active');
			$( '#tabContent' ).find('.item').removeClass('active');
			$( '#tabContent' ).find('.item').hide();
			
			$(this).addClass('active');
			$( '#tabContent' ).find('.item').hide();
			$( '#tabContent' ).find('#' + $(this).attr('id').replace('Tab','Content')).show();
			
			switch ( $(this).attr('id') ) {
				case 'breakingnewsTab':
					ONCC.MainPage.sectionClass.createBreakingNewsContent();
					break;
				case 'hotnewsTab':
					ONCC.MainPage.sectionClass.createHotNewsContent();
					break;
				case 'focusnewsTab':
					ONCC.MainPage.sectionClass.createFocusNewsContent();
					break;
				default:
					ONCC.MainPage.sectionClass.createFocusNewsContent();
			}
			
		});
		
		
		if ( refer != null ) {
			//news
			this.targetType = refer;
			$( '#tabContent' ).find('.item').hide();
			if ( refer == 'hn' ) {
				$( ONCC.MainPage.container ).find('#hotnewsTab').addClass('active');
				ONCC.MainPage.sectionClass.createHotNewsContent();
			} else if ( refer == 'fn' ) {
				$( ONCC.MainPage.container ).find('#focusnewsTab').addClass('active');	
				ONCC.MainPage.sectionClass.createFocusNewsContent();
			} else {
				$( ONCC.MainPage.container ).find('#breakingnewsTab').addClass('active');
			}
			
			
			
			
			//hot
			
			//focus
		} else {
			$( ONCC.MainPage.container ).find('#breakingnewsTab').addClass('active');
			
		}
	}
}

ONCC.normalSectionNews = {
	
	isOnloadBreakingNews : false,
	isOnloadHotNews : false,
	isOnloadFocusNews : false,
	
	createBreakingNewsContent : function() {
		
		
	
	},
	
	createHotNewsContent : function() {
	
		if ( this.isOnloadHotNews == false ) {
			this.isOnloadHotNews = true;
			ONCC.HotNews.init();
		}
	},
	
	createFocusNewsContent : function() {
		
		if ( this.isOnloadFocusNews == false ) {
			this.isOnloadFocusNews = true;
			ONCC.FocusNews.init();
		}
	}
}


ONCC.HotNews = {

	container : '#tabContent #hotnewsContent',
	data : null,
	pointer : 0,
	loading : false,
	
	init : function() {

		var url = NEWS_PATH + '/hitcount/web/js/hitCount_'+ SECTION_CODE  + '_UTF8' + $ONCC.curLang  + '.js';
		this.data = new Array();
		var listFocusLoader = new $ListLoader(url);
		listFocusLoader.callbacks.push(function (data) {
			ONCC.HotNews.bind(data);
		});
		listFocusLoader.load();
	},
	
	initContent : function() { // right sidebar
	
		//hitCount_all_UTF8_1.js
		//hitCount_all_UTF8_1_cn.js

		if ( $ONCC.curLang == '' ) {
			var url = '/js/hitCount/js/hitCount_all_UTF8.js';
		} else {
			var url = '/js/hitCount/js/hitCount_all_UTF8_cn.js';
		}
		
		if ( url != '' ) {
			this.data = new Array();
			var listFocusLoader = new $ListLoader(url);
			listFocusLoader.callbacks.push(function (data) {
				ONCC.HotNews.bindContent(data);
			});
			listFocusLoader.load();
		}
	},
	
	
	bind : function( data ) {
		
		var count = 0;
		
		$.each(data,function( k , v ){
			
			
			if ( count >= 50 ) {
				return;
			}
			var dateRegExp = new RegExp('-|:| ', 'g');
			if ( $dateFormat( v.pubDate.replace(dateRegExp,''), 'yyyymmdd') > '20140425' ) {
				ONCC.HotNews.setFocusBox( count + 1 , v );
				count++;
			} 
			
			
		});

		$( ONCC.HotNews.container).show();
		
			
	},
	
	bindContent : function( data ) {

		
		var html = '';
		var itemCount = 0;
		var pageNo = 1;
		var dateRegExp = new RegExp('-|:| ', 'g');
		
		$.each(data,function( k , v ){
			
			if ( $dateFormat( v.pubDate.replace(dateRegExp,''), 'yyyymmdd') <= '20140425' ) {
				 return true;
			}

			if ( itemCount >= 30 ) {
				return;
			}
			
			if ( itemCount % 5 == 0) {
				html+='<div class="item" id="hotNews_'+pageNo+'">';
				pageNo++;
			}

			html += ONCC.HotNews.setFocusContentBox( itemCount + 1 , v );
			
			if ( itemCount % 5 == 4) {
				html += '</div>';
			}
			
			itemCount++;
			
		});
		
		$('#hotnewsInner').css("width",6*296+"px");
		$('#hotnewsInner').html( html );
		var slidePageBox = new $SlidePageBox( { "contentContainer" : "#hotnewsInner", "pagingContainer" : "#hotnewsInnerPage", "width" :296});
		slidePageBox.init();
		
	},
	
	setFocusBox : function( key, data ) {
		var html = '';
		var datearr = data.pubDate.split(' ')[0].split('-');
		var timearr = data.pubDate.split(' ')[1].split(':');
		var datetime = '';
		var thumbnail = ( ( data.thumbnail != '' ) ? NEWS_PATH+''+ data.thumbnail : data.videoThumbnail );
		/* var eventname = ( typeof ( data.eventname ) != 'undefined' ) ? (( data.eventname != '' ) ? data.eventname + '：':'' ) : '';
		var eventstatus = ( typeof (data.eventstatus ) != 'undefined' ) ? (( data.eventstatus != '' ) ? data.eventstatus :'' ) : '';
		if ( eventstatus != 'HOT_EVENT' ) {
			data.title = data.title.replace(eventname,'');
			eventname = '';
		}

		var title = eventname + (data.title.replace('︰','：')).replace(eventname,'');// +  ONCC.addCommentaryIcon( data.commentary , 's' ); */
		title = ONCC.titlekeyword.converter ( data.title,data.pubDate,data.district );
		timestr = timearr[0] + ':'+ timearr[1];
		datestr = datearr[1]*1 + '月' + datearr[2]*1 + '日';
		if ( data.pubDate == data.editTime ) {
			datetime = $dateFormat(data.pubDate.replace('-','').replace('-','').replace(' ','').replace(':','').replace(':',''),'mm月dd日(dddd) HH:MM');
		} else {
			datetime = $dateFormat(data.editTime.replace('-','').replace('-','').replace(' ','').replace(':','').replace(':',''),'mm月dd日(dddd) HH:MM') + '更新';
		}data.link = data.link.replace('.html', $ONCC.curLang + '.html');
		var url = ''+NEWS_PATH+''+data.link+'?refer=hn';
		
		html += '<div class="focus clearfix ' + ((this.targetArticle == data.articleId) ? "target":"") + ' ">';
		//html += '<div class="num">' + key + '</div>';
		var curThumbnail = '';
		var curSmallThumbnail = '';
		if ( typeof(data.photoTypeLocation1_1 ) !== 'undefined') {
			if ( data.photoTypeName1_1 == 'thumbnail' ) {
				curThumbnail = data.photoTypeLocation1_1;
			}
			if ( data.photoTypeName1_1 == 'smallthumbnail' ) {
				curSmallThumbnail = data.photoTypeLocation1_1;
			}
		}
		if ( typeof(data.photoTypeLocation1_2 ) !== 'undefined') {
			if ( data.photoTypeName1_2 == 'thumbnail' ) {
				curThumbnail = data.photoTypeLocation1_2;
			}
			if ( data.photoTypeName1_2 == 'smallthumbnail' ) {
				curSmallThumbnail = data.photoTypeLocation1_2;
			}
		}
		if ( typeof(data.photoTypeLocation1_3 ) !== 'undefined') {
			if ( data.photoTypeName1_3 == 'thumbnail' ) {
				curThumbnail = data.photoTypeLocation1_3;
			}
			if ( data.photoTypeName1_3 == 'smallthumbnail' ) {
				curSmallThumbnail = data.photoTypeLocation1_3;
			}
		}
		
		if ( curSmallThumbnail != '' ) curThumbnail = curSmallThumbnail;
		
		if ( curThumbnail != '' ) {
			html += '<div class="thumb"><a href="'+url+'" title="'+data.title+'"><img src="'+NEWS_PATH+''+curThumbnail+'"></a>';
			if ( data.video != '' ) {
				html += '<div class="videoIcon"></div>';
			}
			html += '</div>';
		}
		html += '<div class="datetime"><span class="num">' + key + '</span><a href="'+url+'">' +datetime  + '</a></div>';
		html += '<h1><a href="'+url+'">'+ title + '</a></h1>';
		html += '<p><a href="'+url +'">'+$strTruncate(data.content, 44)+'</a></p>';
		html += '</div>';
		
		$( ONCC.HotNews.container).append( html );
	
	},
	setFocusContentBox : function( key, data ) {
		var html = '';
		var datearr = data.pubDate.split(' ')[0].split('-');
		var timearr = data.pubDate.split(' ')[1].split(':');
		var datetime = '';
		var section = ONCC.getSectionByCode(data.section);
		var sectionName = '';
		if (section[1] == 'commentary') {
			sectionName = ONCC.getNationChiByInput( section[0]) + ONCC.getSectionChiByInput( section[1] );
		} else if (section[1] == 'news') {
			sectionName = ONCC.getNationChiByInput( section[0]);
		} else {
			sectionName =  ONCC.getSectionChiByInput( section[1] );
		}
		var thumbnail = ( ( data.thumbnail != '' ) ? NEWS_PATH+''+ data.thumbnail : data.videoThumbnail );
	/* 	var eventname = ( typeof ( data.eventname ) != 'undefined' ) ? (( data.eventname != '' ) ? data.eventname + '：':'' ) : '';
		var eventstatus = ( typeof (data.eventstatus ) != 'undefined' ) ? (( data.eventstatus != '' ) ? data.eventstatus :'' ) : '';
		if ( eventstatus != 'HOT_EVENT' ) {
			data.title = data.title.replace(eventname,'');
			eventname = '';
		}

		var title = eventname + (data.title.replace('︰','：')).replace(eventname,''); //+  ONCC.addCommentaryIcon( data.commentary , 's' ); */
		title = ONCC.titlekeyword.converter ( data.title,data.pubDate,data.district );
		//timestr = timearr[0] + ':'+ timearr[1];
		//datestr = datearr[1]*1 + '月' + datearr[2]*1 + '日';
		//datetime = $dateFormat(data.pubDate.replace('-','').replace('-','').replace(' ','').replace(':','').replace(':',''),'mm月dd日(dddd) HH:MM');
		data.link = data.link.replace('.html', $ONCC.curLang + '.html');
		//var url = ''+NEWS_PATH+''+data.link+'?refer=hn';
		
		var url = '/'+section[0]+'/bkn'+data.link+'?refer=hn2';
		
		
		var curThumbnail = '';
		var curSmallThumbnail = '';
		if ( typeof(data.photoTypeLocation1_1 ) !== 'undefined') {
			if ( data.photoTypeName1_1 == 'thumbnail' ) {
				curThumbnail = data.photoTypeLocation1_1;
			}
			if ( data.photoTypeName1_1 == 'smallthumbnail' ) {
				curSmallThumbnail = data.photoTypeLocation1_1;
			}
		}
		if ( typeof(data.photoTypeLocation1_2 ) !== 'undefined') {
			if ( data.photoTypeName1_2 == 'thumbnail' ) {
				curThumbnail = data.photoTypeLocation1_2;
			}
			if ( data.photoTypeName1_2 == 'smallthumbnail' ) {
				curSmallThumbnail = data.photoTypeLocation1_2;
			}
		}
		if ( typeof(data.photoTypeLocation1_3 ) !== 'undefined') {
			if ( data.photoTypeName1_3 == 'thumbnail' ) {
				curThumbnail = data.photoTypeLocation1_3;
			}
			if ( data.photoTypeName1_3 == 'smallthumbnail' ) {
				curSmallThumbnail = data.photoTypeLocation1_3;
			}
		}
		
		if ( curSmallThumbnail != '' ) curThumbnail = curSmallThumbnail;
		
		
		
		
		if ( curThumbnail == '' ) {
			switch(section[0] + '_' + section[1]) {
				case ('hk_commentary'):
					curThumbnail = '/img/v2/hk_comm_img' + $ONCC.curLang + '.jpg';
					break;
				case ('tw_commentary'):
					curThumbnail = '/img/v2/tw_comm_img' + $ONCC.curLang + '.jpg';
					break;
				case ('cn_commentary'):
					curThumbnail = '/img/v2/cn_comm_img' + $ONCC.curLang + '.jpg';
					break;
				default:
					curThumbnail = '/img/v2/oncc_preload.jpg';
			}

		} else {

			curThumbnail = '/'+section[0]+'/bkn'+curThumbnail;
		}
		
		
		if ( curThumbnail != '' ) {
			html += '<div class="hnitem clearfix">';
			html += '<div class="thumbnail"><a href="'+url+'" title="'+data.title+'"><img src="'+curThumbnail+'"></a>';
			if ( data.video != '' ) {
				html += '<div class="videoIcon"></div>';
			}
			html += '</div>';
		} else {
			html += '<div class="hnitem clearfix nothumb">';
		}
		//html += '<div class="datetime"><span class="num">' + key + '</span><a href="'+url+'">' +datetime  + '</a></div>';
		html +=  '<div class="content"><span class="num">' + key + '</span><a href="'+url+'">'+ title + '</a></div>';
		
		
		html +=  '<div class="section">[' + sectionName + ']</div>';
		//html += '<p><a href="'+url +'">'+$strTruncate(data.content, 50)+'</a></p>';
		html += '</div>';

		return html;
	
	} 
	
}

ONCC.FocusNews = {
	container : '#tabContent #focusnewsContent',
	data : null,
	pointer : 0,
	loading : false,
	
	
	init : function() {

		//http://202.125.90.157/hk/bkn/js/bknFocusList_news.js
		var url = NEWS_PATH + '/js/bknFocusList_'+ ONCC.getSection() + $ONCC.curLang  + '.js';
		
		this.data = new Array();
		var listFocusLoader = new $ListLoader(url);
		listFocusLoader.callbacks.push(function (data) {
			ONCC.FocusNews.bind(data);
		});
		listFocusLoader.load();
	},
	
	initContent : function() { // right sidebar
	
		var url = NEWS_PATH + '/js/bknFocusList_'+ ONCC.getSection() + $ONCC.curLang  + '.js';
		
		this.data = new Array();
		var listFocusLoader = new $ListLoader(url);
		listFocusLoader.callbacks.push(function (data) {
			
			if ( ONCC.data.data_focusNews == null) {
				var listFocusLoader = new $ListLoader(  NEWS_PATH + '/js/bknHighlight_'+ ONCC.getSection() + $ONCC.curLang  + '.js' );
				listFocusLoader.callbacks.push(function (data1) {
					ONCC.data.data_focusNews = data1;
					ONCC.FocusNews.bindContent(data);
				});
				listFocusLoader.load();

			} else {
				ONCC.FocusNews.bindContent(data);
			}
			
				
		});
		listFocusLoader.load();
	},
	
	bind : function( data ) {
	
		var count = 0;
		$.each(data[0].focusNews,function( k , v ){
		
			if  ($.inArray(  v.articleId , ONCC.GlobalfocusSectionNews.section_focus_id ) == -1 ) {
				if ( count >= 48 ) {
					return;
				}
				ONCC.FocusNews.setFocusBox( v );
				
				count++;
			}
		});
		
		
		$( ONCC.FocusNews.container).show();
	},
	
	bindContent : function( data ) {
		
		var focusNews_ids = [];
		$.each ( ONCC.data.data_focusNews[0].focusNews , function( k,v ) {
			
			if (! ( ONCC.GlobalfocusSectionNews.reservedFocus % 2 != 0 && (k + 1 == ONCC.data.data_focusNews[0].focusNews.length) )) {
				focusNews_ids.push ( v.articleId );
			}
		});
		var html = '';
		var pageNo = 1;
		var count = 0;
		$.each(data[0].focusNews,function( k , v ){
			
			if ( ONCC.getLevel() == 'main') {
				if  ($.inArray(  v.articleId , focusNews_ids ) != -1 ) {
					return;
				}
			}
			
			
			
			if ( count >= 30 ) {
				return false;
			}
			
			if ( count % 5 == 0) {
				html+='<div class="item" id="focusSideNews_'+pageNo+'">';
				pageNo++;
			}

			html += ONCC.FocusNews.setFocusContentBox( count + 1 , v );
			
			if ( count % 5 == 4) {
				html += '</div>';
			}
			
			count++;
			
		});
		
		$('#focusnewsInner').css("width",6*296+"px");
		$('#focusnewsInner').html( html );
		var slidePageBox = new $SlidePageBox( { "contentContainer" : "#focusnewsInner", "pagingContainer" : "#focusnewsInnerPage", "width" :296});
		slidePageBox.init();
		
	},
	
	setFocusBox : function ( data ) {
		
		var html = '';
		var datearr = data.pubDate.split(' ')[0].split('-');
		var timearr = data.pubDate.split(' ')[1].split(':');
		var datetime = '';
		
	/* 	var eventname = ( typeof ( data.eventname ) != 'undefined' ) ? (( data.eventname != '' ) ? data.eventname + '：':'' ) : '';
		var eventstatus = ( typeof (data.eventstatus ) != 'undefined' ) ? (( data.eventstatus != '' ) ? data.eventstatus :'' ) : '';
		if ( eventstatus != 'HOT_EVENT' ) {
			data.title = data.title.replace(eventname,'');
			eventname = '';
		}

		var title = eventname + (data.title.replace('︰','：')).replace(eventname,'');// +  ONCC.addCommentaryIcon( data.commentary , 's' ); */
		title = ONCC.titlekeyword.converter ( data.title,data.pubDate,data.district );
		timestr = timearr[0] + ':'+ timearr[1];
		datestr = datearr[1]*1 + '月' + datearr[2]*1 + '日';
		if ( data.pubDate == data.editTime ) {
			datetime = $dateFormat(data.pubDate.replace('-','').replace('-','').replace(' ','').replace(':','').replace(':',''),'mm月dd日(dddd) HH:MM');
		} else {
			datetime = $dateFormat(data.editTime.replace('-','').replace('-','').replace(' ','').replace(':','').replace(':',''),'mm月dd日(dddd) HH:MM') + '更新';
		}data.link = data.link.replace('.html', $ONCC.curLang + '.html');
		var url = ''+NEWS_PATH+''+data.link+'?refer=fn';
		html += '<div class="focus clearfix ">';
		var curThumbnail = '';
		var curSmallThumbnail = '';
		if ( typeof(data.photoTypeLocation1_1 ) !== 'undefined') {
			if ( data.photoTypeName1_1 == 'thumbnail' ) {
				curThumbnail = data.photoTypeLocation1_1;
			}
			if ( data.photoTypeName1_1 == 'smallthumbnail' ) {
				curSmallThumbnail = data.photoTypeLocation1_1;
			}
		}
		if ( typeof(data.photoTypeLocation1_2 ) !== 'undefined') {
			if ( data.photoTypeName1_2 == 'thumbnail' ) {
				curThumbnail = data.photoTypeLocation1_2;
			}
			if ( data.photoTypeName1_2 == 'smallthumbnail' ) {
				curSmallThumbnail = data.photoTypeLocation1_2;
			}
		}
		if ( typeof(data.photoTypeLocation1_3 ) !== 'undefined') {
			if ( data.photoTypeName1_3 == 'thumbnail' ) {
				curThumbnail = data.photoTypeLocation1_3;
			}
			if ( data.photoTypeName1_3 == 'smallthumbnail' ) {
				curSmallThumbnail = data.photoTypeLocation1_3;
			}
		}
		
		if ( curSmallThumbnail != '' ) curThumbnail = curSmallThumbnail;
		
		if ( curThumbnail != '' ) {
			html += '<div class="thumb"><a href="'+url+'" title="'+data.title+'"><img src="'+NEWS_PATH+''+curThumbnail+'"></a>';
			if ( data.video != '' ) {
				html += '<div class="videoIcon"></div>';
			}
			html += '</div>';
		}
		html += '<div class="datetime"><a href="'+url+'">' +datetime  + '</a></div>';
		html += '<h1><a href="'+url+'">'+ title + '</a></h1>';
		if ( curThumbnail == '' ) {
		html += '<p><a href="'+url +'">'+$strTruncate(data.content, 120)+'</a></p>';
		}
		html += '</div>';
		
		$( ONCC.FocusNews.container).append( html );
	
	},
	
	setFocusContentBox : function( key, data ) {
		var html = '';
		var datearr = data.pubDate.split(' ')[0].split('-');
		var timearr = data.pubDate.split(' ')[1].split(':');
		var datetime = '';
		var thumbnail = ( ( data.thumbnail != '' ) ? NEWS_PATH+''+ data.thumbnail : data.videoThumbnail );
	/* 	var eventname = ( typeof ( data.eventname ) != 'undefined' ) ? (( data.eventname != '' ) ? data.eventname + '：':'' ) : '';
		var eventstatus = ( typeof (data.eventstatus ) != 'undefined' ) ? (( data.eventstatus != '' ) ? data.eventstatus :'' ) : '';
		if ( eventstatus != 'HOT_EVENT' ) {
			data.title = data.title.replace(eventname,'');
			eventname = '';
		}

		var title = eventname + (data.title.replace('︰','：')).replace(eventname,''); //+  ONCC.addCommentaryIcon( data.commentary , 's' ); */
		title = ONCC.titlekeyword.converter ( data.title,data.pubDate,data.district );
		//timestr = timearr[0] + ':'+ timearr[1];
		//datestr = datearr[1]*1 + '月' + datearr[2]*1 + '日';
		//datetime = $dateFormat(data.pubDate.replace('-','').replace('-','').replace(' ','').replace(':','').replace(':',''),'mm月dd日(dddd) HH:MM');
		data.link = data.link.replace('.html', $ONCC.curLang + '.html');
		//var url = ''+NEWS_PATH+''+data.link+'?refer=hn';
		
		var url = ''+NEWS_PATH+''+data.link+'?refer=fn2';
		
		
		var curThumbnail = '';
		var curSmallThumbnail = '';
		if ( typeof(data.photoTypeLocation1_1 ) !== 'undefined') {
			if ( data.photoTypeName1_1 == 'thumbnail' ) {
				curThumbnail = data.photoTypeLocation1_1;
			}
			if ( data.photoTypeName1_1 == 'smallthumbnail' ) {
				curSmallThumbnail = data.photoTypeLocation1_1;
			}
		}
		if ( typeof(data.photoTypeLocation1_2 ) !== 'undefined') {
			if ( data.photoTypeName1_2 == 'thumbnail' ) {
				curThumbnail = data.photoTypeLocation1_2;
			}
			if ( data.photoTypeName1_2 == 'smallthumbnail' ) {
				curSmallThumbnail = data.photoTypeLocation1_2;
			}
		}
		if ( typeof(data.photoTypeLocation1_3 ) !== 'undefined') {
			if ( data.photoTypeName1_3 == 'thumbnail' ) {
				curThumbnail = data.photoTypeLocation1_3;
			}
			if ( data.photoTypeName1_3 == 'smallthumbnail' ) {
				curSmallThumbnail = data.photoTypeLocation1_3;
			}
		}
		
		if ( curSmallThumbnail != '' ) curThumbnail = curSmallThumbnail;
		
		if ( curThumbnail == '' ) {
			curThumbnail = '/img/v2/oncc_preload.jpg';
		} else {
			curThumbnail = ''+NEWS_PATH+''+curThumbnail;
		}
		
		
		if ( curThumbnail != '' ) {
			html += '<div class="fnitem clearfix">';
			html += '<div class="thumbnail"><a href="'+url+'" title="'+data.title+'"><img src="'+curThumbnail+'"></a>';
			if ( data.video != '' ) {
				html += '<div class="videoIcon"></div>';
			}
			html += '</div>';
		} else {
			html += '<div class="hnitem clearfix nothumb">';
		}
		html +=  '<div class="content"><a href="'+url+'">'+ title + '</a>';

		html += '</div></div>';

		return html;
	
	} 
}

ONCC.GlobalnewsList = {
	//container : '#tabContent',
	container : '#tabContent #breakingnewsContent',
	data : null,
	lastestData : null,
	lastestDate : serverdate,
	pointer : 0,
	isAutoAppended : false,
	articleDate : null,
	updatePerpage : 20,
	getFulllist : false,
	targetArticle : null,
	listingDate : serverdate,
	loading : false,
	addItems : [],
	
	init: function() {
		
		if ( this.listingDate < "20140425" ) {
			return;
		}
		
		if ( this.targetArticle == null ) {
			this.targetArticle = $.urlParams.get('article_id');
			if ( this.targetArticle != null ) {
				this.listingDate = this.targetArticle.split('-')[1].substr(0,8);
				ONCC.GlobalnewsList.data = [];
			} 
		}

		var url = NEWS_PATH + '/js/' + this.listingDate + '/' +  ONCC.getSection() + '_dailyList' + $ONCC.curLang  + '.js';

		var listLoader = new $ListLoader(url);
		listLoader.callbacks.push(function (data) {
			
			if ( ONCC.GlobalnewsList.targetArticle != null ) {
				
				if ( ONCC.GlobalnewsList.listingDate <= serverdate ) {
					
					if ( data != null ) {
						$.each ( ONCC.GlobalnewsList.data , function( k,v ) {
							data.push( v );
						});
					}
					
					ONCC.GlobalnewsList.data = data;
					
					var nextday = $strToDate(ONCC.GlobalnewsList.listingDate);
					nextday.setDate( nextday.getDate() + 1);
					ONCC.GlobalnewsList.listingDate =  $dateFormat( nextday , 'yyyymmdd');
					ONCC.GlobalnewsList.init();
				} else {

					var backday = $strToDate( ONCC.GlobalnewsList.targetArticle.split('-')[1].substr(0,8) );
					backday.setDate( backday.getDate() - 1);
					ONCC.GlobalnewsList.listingDate =  $dateFormat( backday , 'yyyymmdd');
					var url = NEWS_PATH + '/js/' + ONCC.GlobalnewsList.listingDate + '/' +  ONCC.getSection() + '_dailyList' + $ONCC.curLang  + '.js';

					var listLoader1 = new $ListLoader(url);
					listLoader1.callbacks.push(function (data) {
					
						if ( data != null ) {
							$.each ( data , function( k,v ) {
								ONCC.GlobalnewsList.data.push( v );
							});
						}
						
						ONCC.GlobalnewsList.initOperation( ONCC.GlobalnewsList.data );

					});
					listLoader1.load();
				}
			
			} else {
				
				
					
				if ( ( data == null ) ? true : ( data.length == 0 ) ) { // recusive find the latest news feed

					var backday = $strToDate(ONCC.GlobalnewsList.listingDate);
					backday.setDate( backday.getDate() - 1);
					ONCC.GlobalnewsList.listingDate =  $dateFormat( backday , 'yyyymmdd');
				
					ONCC.GlobalnewsList.init();
				
				} else { // found the latest news feed
					ONCC.GlobalnewsList.initOperation(data);
					
					
				if ( ONCC.MainPage.targetType != '' ) {
					$('html, body').animate({scrollTop: $('#tabContent').position().top - 66}, 'slow',
						function() {
							 
						}
					);
				}	
		
				}
			
			
			}
			
		});
		listLoader.load();
	},
	
	initOperation : function(data) {
	
		if ( data == null ) {
			return;
		}
		
		
		//console.log( 'initOperation' );
		
		

		ONCC.GlobalnewsList.data = data;
		ONCC.GlobalnewsList.lastestData = data;

		$( ONCC.GlobalnewsList.container ).append(this.renderLastestHtml( data ));
		
		$('.btnArrow').click(function() {
			
				ONCC.GlobalnewsList.appendNews( ONCC.GlobalnewsList.updatePerpage );
				
			});

		
		if ( data.length < ONCC.GlobalnewsList.updatePerpage ) {
			ONCC.GlobalnewsList.appendNews ( ONCC.GlobalnewsList.updatePerpage - data.length );
		}
		// link to target article
		if ( ONCC.GlobalnewsList.targetArticle != null && $( ONCC.GlobalnewsList.container + ' .focus.target').length > 0 ) {
			$('html, body').animate({scrollTop: $('#tabContent .focus.target').position().top - 60}, 'slow',
			function() {
				$(ONCC.GlobalnewsList.container + ' .focus').not('.target').hover( function() {
					$(ONCC.GlobalnewsList.container + ' .target').removeClass('target');
				});
			}
			);
		}
		/* if (  ONCC.getNation() == 'tw' && ONCC.getLocation() == 'tw' &&  $ONCC.corpBar.getCurrentSection() == 'finance' ) { 
			$( ONCC.GlobalnewsList.container ).prepend('<div id="focusListLabel" style="margin-top: 5px;padding-bottom: 5px;border-bottom: 1px solid #ccc;">' + $ONCC.lang.translate("&#x5373;&#x6642;") + $ONCC.lang.translate("&#x8CA1;&#x7D93;")+ '</div>');
		} */
		if ( $ONCC.corpBar.getCurrentSection() == 'news' ) { // 即時新聞
		/* 	$('#tab').before('<div id="weatherCTN" style="border-top:0"></div>');
			if ( ONCC.getLocation() == 'hk' && ONCC.getNation() == 'hk') {
				ONCC.Weather.init();
			}
		}
		
		
		if ( $ONCC.corpBar.getCurrentSection() == 'news' ) { // 即時新聞 */
			/* ('<div id="focusListLabel" style="margin-top: 5px;padding-bottom: 5px;border-bottom: 1px solid #ccc;">' + $ONCC.lang.translate("&#x5373;&#x6642;") + $ONCC.lang.translate("&#x65B0;&#x805E;")+ '</div>');
			 */
			 
			// call back weather function in oncc-news_hk.js
			
			if ( ONCC.getNation() == 'tw' ) {
				$( ONCC.GlobalnewsList.container ).prepend('<div id="focusListLabel" style="margin-top: 5px;padding-bottom: 5px;border-bottom: 1px solid #ccc;">' + $ONCC.lang.translate("&#x5373;&#x6642;") + $ONCC.lang.translate("&#x65B0;&#x805E;")+ '</div>');
			}
			if ( ONCC.getLocation() == 'hk' && ONCC.getNation() == 'hk') {
				$( ONCC.GlobalnewsList.container ).prepend('<div id="weatherCTN" style="border-top:0"></div>');
				ONCC.Weather.init();
			}
			
		} else if ( $ONCC.corpBar.getCurrentSection() == 'entertainment' ) { // 即時娛樂
			$( ONCC.GlobalnewsList.container ).before('<div id="focusListLabel">' + $ONCC.lang.translate("&#x5373;&#x6642;") + $ONCC.lang.translate("&#x5A1B;&#x6A02;") + '</div>');
		} else if ( $ONCC.corpBar.getCurrentSection() == 'finance' ) {
			//$( ONCC.GlobalnewsList.container ).before('<div id="focusListLabel" style="float:left;margin-top:8px;">' + $ONCC.lang.translate("&#x5373;&#x6642;") + $ONCC.lang.translate("&#x8CA1;&#x7D93;") + '</div><div style="float:right;margin-bottom:4px;"><a href="http://money18.on.cc/invtips/recommend_stocks.html?type=stocks" target="_blank"><img src="/img/v2/recommend_stocks.png"></a></div>');
		}
		
		
		// auto AppendNews when scroll down
		this.autoAppendNews();
		// for get the lastest news 3 minutes
		setInterval(ONCC.GlobalnewsList.cropjob, 300 * 1000); 
		
		
 	
		
	},
	
	cropjob : function () {
		 ONCC.GlobalnewsList.autoUpdateNews();
	},
	
	autoAppendNews : function() {
		//return false;
		$(window).scroll(function(){
			
			//if ( ONCC.GlobalnewsList.isAutoAppended == false ) {
			//if ( $('.lastest').find('.focus').length < 100 ) {
				if ( $('.btnArrow').length != 0  ) {
					var clientHeight = clientWindowSize().height;
					var scrollTop = $(this).scrollTop();
					//if ( scrollTop +  clientHeight  >= $('body').height() ) {
					if ( clientHeight + scrollTop + 100 >= $('.btnArrow').position().top) {	
						//if ( $('.lastest').find('.focus').length < 20 ) {
							ONCC.GlobalnewsList.appendNews( ONCC.GlobalnewsList.updatePerpage );
						//} else {
						//	ONCC.GlobalnewsList.appendNews(100);
						//	window.scrollTo(0,document.body.scrollHeight);
						//}
						//ONCC.GlobalnewsList.isAutoAppended = true;
					}
					/*if ( clientHeight + scrollTop - 40 > $('.btnArrow').position().top ) {
						
					}*/
				}
			
		});
		
	},
	
	autoUpdateNews : function() {
			
		//serverdate
		//var url = NEWS_PATH + '/js/' + ONCC.getSection() + '_shortList' + $ONCC.curLang  + '.js';
		
		var url = NEWS_PATH + '/js/' + serverdate + '/' +  ONCC.getSection() + '_dailyList' + $ONCC.curLang  + '.js';
		
		var listLoader = new $ListLoader(url);
		listLoader.callbacks.push(function (data) {
			
			if ( data != null ) {
				if ( data.length > 0 ) {
					// not the new one
					if ( data[0].articleId != ONCC.GlobalnewsList.lastestData[0].articleId ) {
						ONCC.GlobalnewsList.updateNews(data);
						ONCC.GlobalnewsList.lastestData = data;
					}
				}
				
				ONCC.GlobalnewsList.lastestDate = serverdate;
			}
		});
		listLoader.load();
		
	},
	
	updateNews : function( data ) {
		var html = '';
		var i = 0 ;
		var dateRegExp = new RegExp('-|:| ', 'g');
		var title = '';
		
		while( data[i].articleId != ONCC.GlobalnewsList.lastestData[0].articleId && i <= data.length) {
			html += '<div class="autoLatest">' + ONCC.GlobalnewsList.focusbox(data[i]) + '</div>';
			i++;
		} 
		
		$( ONCC.GlobalnewsList.container + ' .lastest').prepend(html);
		
	},

	renderLastestHtml: function(data) {
		
		if(data.length < 1){return false;}
	 
		var html = '<div class="lastest">';
		
		var max = ONCC.GlobalnewsList.updatePerpage;

		
		// found the target article
		if ( this.targetArticle != null ) {
			
			if ( ($.inArray(  this.targetArticle , ONCC.GlobalfocusSectionNews.section_focus_id ) == -1 )) {
			
				for (var i = 0; i < data.length; i++) {
					if (　this.targetArticle == data[i].articleId ) {
						max = i + ONCC.GlobalnewsList.updatePerpage;
						break;
					}
				}
			}
		} 
		
		var addItem = '';
		$.each ( this.addItems , function( k,v ) {
			
			var isNewWindow = ( v.isNewWindow == 'true' ) ? ' target="_blank"':'';
			addItem += '<div class="focus ' + v.skinClass + ' clearfix">';
			addItem += '<div id="adv_ul_left" style="text-align: right;float: right;color:#999;font-size:12px;">客戶資訊</div>';
			if ( v.image != '' ) {
				addItem += '<div class="thumb"><a href="'+v.url+'" ' + isNewWindow + ' title="'+v.title+'"><img src="'+v.image+'"></a>';
				//if ( data.video != '' ) {
				//	addItem += '<div class="videoIcon"></div>';
				//}
				addItem += '</div>';
			}
			//addItem += '<div class="datetime"><a href="'+url+'">' +datetime  + '</a></div>';
			addItem += '<h1><a href="'+v.url+' " ' + isNewWindow + '>'+ v.title + '</a></h1>';
			addItem += '<p><a href="'+v.url +' " ' + isNewWindow + '>'+v.content+'</a></p>';
			addItem += '</div>';
			//addItem += '<div class="focus clearfix  "><div class="thumb"><a href="/hk/bkn/cnt/news/20141217/bkn-20141217174637677-1217_00822_001.html" title="攝影師魂斷欣澳　藝人感震驚、一場悲劇"><img src="/hk/bkn/cnt/news/20141217/photo/bkn-20141217174637677-1217_00822_001_01s.jpg?175830"></a></div><div class="datetime"><a href="/hk/bkn/cnt/news/20141217/bkn-20141217174637677-1217_00822_001.html">12月17日(三) 17:46</a></div><h1><a href="/hk/bkn/cnt/news/20141217/bkn-20141217174637677-1217_00822_001.html">攝影師魂斷欣澳　藝人感震驚、一場悲劇</a></h1><p><a href="/hk/bkn/cnt/news/20141217/bkn-20141217174637677-1217_00822_001.html">資深攝影師陳國雄(51歲)，在欣澳拍攝電影《絕地逃亡》時，快艇疑意外翻轉，陳與另外7人墮海，他被救起...</a></p></div>
			//data.splice ( 0,0, v );
			
			html += addItem;
		});
		

		var dateRegExp = new RegExp('-|:| ', 'g');
		var count = 0;
		for (var i = 0; i < data.length ;i++ ) {
		
			if ( ($.inArray(  data[i].articleId , ONCC.GlobalfocusSectionNews.section_focus_id ) == -1 ) && data[i].title.indexOf(ONCC.Specials.keyword) != -1 ) {
				
				if ( count != 0 && ONCC.GlobalnewsList.listingDate !=  $dateFormat( data[i].pubDate.replace(dateRegExp,''), 'yyyymmdd') ) {
					html += '<div class="seq">' + $dateFormat( data[i].pubDate.replace(dateRegExp,''), 'mm月dd日(dddd)') + '</div>';
				}
				ONCC.GlobalnewsList.listingDate = $dateFormat( data[i].pubDate.replace(dateRegExp,''), 'yyyymmdd');
				html += ONCC.GlobalnewsList.focusbox(data[i]);
				count++;
				if ( count == 5 ||  count == 15) {
					html += ONCC.yahooOvertune.initInList();
				}
			}
			
			ONCC.GlobalnewsList.pointer++;
			
			if ( count >= max ) {
				break;
			}
			 
		}

        html += '</div>';
		html += '<p class="right"><a class="btnArrow" style="cursor: pointer;">更多</a></p>';
		return html;
	},
	
	addNewsItem : function( title, content, image, url , skinClass , isNewWindow ) {
		this.addItems.push ( { 'title' : title, 'image' : image , 'content' : content , 'skinClass' : skinClass,  'url' : url , 'isNewWindow':isNewWindow,'pos' : 0 } );
	},

	appendNews : function(numOfArticle) {
		
		if ( numOfArticle == 0 || ONCC.GlobalnewsList.listingDate < '20140425' || ONCC.GlobalnewsList.loading == true ) {
			return;
		}
		var html = '';
		
		var data = ONCC.GlobalnewsList.data;
		var dateRegExp = new RegExp('-|:| ', 'g');
		var count = 0;

		for (var i = ONCC.GlobalnewsList.pointer; i < data.length ; i++) {
			if ( ($.inArray(  data[i].articleId , ONCC.GlobalfocusSectionNews.section_focus_id ) == -1 ) ) {
				html += ONCC.GlobalnewsList.focusbox(data[i]);
				count++;
				if ( count == 5 ||  count == 15) {
					html += ONCC.yahooOvertune.initInList();
				}
			}
			

			ONCC.GlobalnewsList.pointer++;
			
			
			if ( count >= numOfArticle ){
				
				break;
			}
		}
		
		$('.lastest').append(html);
		if ( ONCC.GlobalnewsList.pointer == data.length ) {
			ONCC.GlobalnewsList.loading = true;
			ONCC.GlobalnewsList.pointer = 0;
			ONCC.GlobalnewsList.data = [];
			var backday = $strToDate(ONCC.GlobalnewsList.listingDate);
			backday.setDate( backday.getDate() - 1);
			ONCC.GlobalnewsList.listingDate =  $dateFormat( backday , 'yyyymmdd');
			html = '<div class="seq">' + $dateFormat( ($strToDate(ONCC.GlobalnewsList.listingDate)), 'mm月dd日(dddd)') + '</div>';
			$('.lastest').append(html);
			var url = NEWS_PATH + '/js/' + ONCC.GlobalnewsList.listingDate + '/' +  ONCC.getSection() + '_dailyList' + $ONCC.curLang  + '.js';
			//var url = NEWS_PATH + '/js/' + ONCC.getSection() + '_fullList' + $ONCC.curLang  + '.js';
	
			var listLoader = new $ListLoader(url);
			listLoader.callbacks.push(function (data) {
				
				
				if ( data == null ) {
					ONCC.GlobalnewsList.data = [];
				} else {
					ONCC.GlobalnewsList.data = data;
				}
				
				ONCC.GlobalnewsList.loading = false;
				ONCC.GlobalnewsList.appendNews( numOfArticle - count );
				
			});
		
			listLoader.load();
		}

	},
	
	focusbox : function( data ) {
		var html = '';
		var use_date;
		if(typeof data.editTime !== 'undefined' && data.pubDate != data.editTime) {
			var datearr = data.editTime.split(' ')[0].split('-');
			var timearr = data.editTime.split(' ')[1].split(':');
		} else {
			var datearr = data.pubDate.split(' ')[0].split('-');
			var timearr = data.pubDate.split(' ')[1].split(':');
		}
		var datetime = '';
		var thumbnailSelector = ( typeof (data.smallthumbnail) != 'undefined' ) ? data.smallthumbnail:data.thumbnail;
		var thumbnail = ( ( thumbnailSelector != '' ) ? NEWS_PATH+''+thumbnailSelector : data.videoThumbnail );
	/* 	var eventname = ( typeof ( data.eventname ) != 'undefined' ) ? (( data.eventname != '' ) ? data.eventname + '：':'' ) : '';
		var eventstatus = ( typeof (data.eventstatus ) != 'undefined' ) ? (( data.eventstatus != '' ) ? data.eventstatus :'' ) : '';
		if ( eventstatus != 'HOT_EVENT' ) {
			data.title = data.title.replace(eventname,'');
			eventname = '';
		}*/

		var title = data.title.replace('︰','：') +  ONCC.addCommentaryIcon( data.commentary , 's' ); 
		title = ONCC.titlekeyword.converter ( data.title,data.pubDate,data.district );
		timestr = timearr[0] + ':'+ timearr[1];
		datestr = datearr[1]*1 + '月' + datearr[2]*1 + '日';
		if(typeof data.editTime !== 'undefined' && data.pubDate != data.editTime) {
			datetime = $dateFormat(data.editTime.replace('-','').replace('-','').replace(' ','').replace(':','').replace(':',''),'mm月dd日(dddd) HH:MM');
		} else {
			datetime = $dateFormat(data.pubDate.replace('-','').replace('-','').replace(' ','').replace(':','').replace(':',''),'mm月dd日(dddd) HH:MM');
		}
		//datetime = $dateFormat(data.pubDate.replace('-','').replace('-','').replace(' ','').replace(':','').replace(':',''),'mm月dd日(dddd) HH:MM');
		var url = ''+NEWS_PATH+''+data.link;
		html += '<div class="focus clearfix ' + ((this.targetArticle == data.articleId) ? "target":"") + ' ">';
		if ( thumbnail != '' ) {
			html += '<div class="thumb"><a href="'+url+'" title="'+data.title+'"><img src="'+thumbnail+'"></a>';
			if ( data.video != '' ) {
				html += '<div class="videoIcon"></div>';
			}
			html += '</div>';
		}
		if(typeof data.editTime !== 'undefined' && data.pubDate != data.editTime) {
			html += '<div class="datetime"><a href="'+url+'">' + datetime  + '更新</a></div>';
		} else {
			html += '<div class="datetime"><a href="'+url+'">' + datetime  + '</a></div>';
		}
		//html += '<div class="datetime"><a href="'+url+'">' +datetime  + '</a></div>';
		html += '<h1><a href="'+url+'">'+ title + '</a></h1>';
		html += '<p><a href="'+url +'">'+$strTruncate(data.content, 44)+'</a></p>';
		html += '</div>';
		
		return html;
				
	}
	
};

/* S:ONCC.GlobalfocusSectionNews */
ONCC.GlobalfocusSectionNews = {
	container : '#focusNews',
	data : null,
	mainfocus_url :  '',
	section_focus_id : [],
	numOfFocus : 8,
	numOfFocusDone : 0,
	reservedFocus : 0,
	isSpecialHighlight : 'false',
	
	init : function() {
		
		var data = '';
		var dateArray = new Array();
		var dateTemp = new Array();
		
		$.each ( $('#focusNews .focusSpecialItem') , function( k,v ) {
			ONCC.GlobalfocusSectionNews.section_focus_id.push( $(v).attr('rel'));
			date = $(v).attr('rel').split('-')[1].substr(0,8);
			if ( typeof(dateTemp[ parseInt(date,10) ]) == 'undefined' ){
				dateTemp[ parseInt(date,10) ] = date;
				dateArray.push ( date );
			}
		});
		
		$.each ( $('#focusNews .focusItem') , function( k,v )  {
			ONCC.GlobalfocusSectionNews.section_focus_id.push( $(v).attr('rel'));
			date = $(v).attr('rel').split('-')[1].substr(0,8);
			if ( typeof(dateTemp[ parseInt(date,10) ]) == 'undefined' ) {
				dateTemp[ parseInt(date,10) ] = date;
				dateArray.push ( date );
			}
		});
		
		ONCC.GlobalfocusSectionNews.videoListBind( dateArray );
		
		if ( focus_banner_c && focus_banner_c_on == false ) {
			ONCC.GlobalfocusSectionNews.section_focus_id.pop();
		}
		ONCC.GlobalnewsList.init();

		/* 
		if ( this.numOfFocus == 0 ) {
			ONCC.GlobalnewsList.init();
			return;
		}
		this.mainfocus_url = NEWS_PATH + '/js/bknHighlight_'+ ONCC.getSection() + $ONCC.curLang  + '.js';
		
		this.data = new Array();
		var listFocusLoader = new $ListLoader(this.mainfocus_url);
		listFocusLoader.callbacks.push(function (data) {
			ONCC.GlobalfocusSectionNews.bind(data);
		});
		listFocusLoader.load(); */

	},
	
	adjustLayout : function() {
	
		$.each ( $(ONCC.GlobalfocusSectionNews.container).find('.focusItem .focusThumbnail img.focusImg') ,function(){

			var height = ( typeof ( this.naturalHeight ) !== 'undefined' ) ? this.naturalHeight : this.height ;
			var width = ( typeof ( this.naturalWidth ) !== 'undefined' ) ? this.naturalWidth : this.width ;
			
			if( height < width ){
							 
				if ( width * 214 / height < 300 ) {
					
					$(this).css('width','300');
					height = 300 * height / width;
					$(this).css('height',height);
				} else {
					$(this).css('height','214');
					width = width * 214 / height;
					$(this).css('margin-left','-' + ((width - 300) / 2) + 'px');
				}
				
			} else {
				$(this).css('width','300');
			}
			
		});
		
		$.each ( $(ONCC.GlobalfocusSectionNews.container).find('.focusSpecialItem .focusThumbnail img.focusImg'),function(){		

			var height = ( typeof ( this.naturalHeight ) !== 'undefined' ) ? this.naturalHeight : this.height ;
			var width = ( typeof ( this.naturalWidth ) !== 'undefined' ) ? this.naturalWidth : this.width ;
			
			if( height < width ){
							 
				if ( width * 435 / height < 608 ) {
					
					$(this).css('width','608');
					height = 608 * height / width;
					$(this).css('height',height);
				} else {
					$(this).css('height','435');
					width = width * 435 / height;
					$(this).css('margin-left','-' + ((width - 608) / 2) + 'px');
				}
				
			} else {
				$(this).css('width','608');
			
			}
			
		});

		//focus_banner_c 
		
		//if ( $('#focus_banner_c_CTN').length == 0 ) {

			$.each ( $('.focusItem') , function( k,v ) {
				if ( k % 2 == 0) {
					$(this).addClass('left');
				} else {
					$(this).addClass('right');
				}
			});
					
			/* if ( focus_banner_c && $('.focusItemAd').length > 0 ) {
				
				$('#focus_banner_c1_CTN').css({
						'float':'left',
						'padding-bottom':'8px'
					});
					
				if ( $('.focusItemAd').length == 1 ) {
					
					$('.focusItemAd').css('padding-right','4px');
					$('.focusItemAd').css('width','300px');
					$('#focusNews .focusItem:first').css('padding-left','4px');
					$('#focusNews .focusItem:odd').addClass('left');
					$('#focusNews .focusItem:even').addClass('right');
					$('#focusNews .focusItem:last').hide();
				
				} else {
					 
					$('.focusItemAd:last').css({
						'float':'right',
						'padding-bottom':'8px'
					});
				
					$.each ( $('.focusItem') , function( k,v ) {
						if ( k % 2 == 0) {
							$(this).addClass('right');
						} else {
							$(this).addClass('left');
						}
					
					});
				}
			} else {
				
				if ( focus_banner_c ) {
					$('#focus_banner_c_CTN').css('padding-right', '4px');
				$('#focusNews .focusItem:odd').addClass('left');
				$('#focusNews .focusItem:even').addClass('right');
				$('#focusNews .focusItem:last').hide();
				} else {
					$('#focusNews .focusItem:odd').addClass('right');
					$('#focusNews .focusItem:even').addClass('left');
				}
			} */
		/* } else {
			
			if (  focus_banner_c == true ) {
				$('#focus_banner_c_CTN').css('padding-right', '4px');
				$('#focusNews .focusItem:odd').addClass('left');
				$('#focusNews .focusItem:even').addClass('right');
				$('#focusNews .focusItem:last').hide();
			} else {
				$('#focusNews .focusItem:odd').addClass('right');
				$('#focusNews .focusItem:even').addClass('left');
			}
		} */
	},
	
	bind : function(data) {
	
		var focusItemDate = new Array();
		var focusItemDateFound = false;

		
		if ( data == null ) {
			ONCC.GlobalnewsList.init();
			return;
		}
		if ( data[0].focusNews.length == 0) {
			ONCC.GlobalnewsList.init();
			return;
		}
		
		//ONCC.GlobalfocusSectionNews.numOfFocusDone = data[0].focusNews.length;//gary 20131010 4focus
		
		this.data.push(data);
		
		//gary 20131010 4focus
		
		var hasSpecialHighlight = 0;
		$.each(data[0].focusNews,function( k , v ){
		
			
			itemDate = v.articleId.split('-')[1].substr(0,8);
			
			focusItemDateFound = false;
			$.each ( focusItemDate , function ( k1,v1 ) {
				
				if ( v1 == itemDate ) {
					focusItemDateFound = true;
				}
			});
			
			if ( focusItemDateFound == false ) {
				focusItemDate.push ( itemDate );
			}
			
		
			if ( v.isSpecialHighlight == 'true' ) {
				hasSpecialHighlight = 1;
			}
			if( k < ONCC.GlobalfocusSectionNews.numOfFocus + hasSpecialHighlight ){
				ONCC.GlobalfocusSectionNews.setFocusBox( v , ONCC.GlobalfocusSectionNews.container);
			}
		});
		
		//var main_img = new Image();
		//main_img.src = $(ONCC.focusNews.container).find('.focusItem[rel=' + id + '] .focusThumbnail img').attr('src') + "?" + new Date().getTime();
		//[rel=' + id + ']
		$(ONCC.GlobalfocusSectionNews.container).find('.focusItem .focusThumbnail img.focusImg').load(function(){		

			var height = ( typeof ( this.naturalHeight ) !== 'undefined' ) ? this.naturalHeight : this.height ;
			var width = ( typeof ( this.naturalWidth ) !== 'undefined' ) ? this.naturalWidth : this.width ;
			
			if( height < width ){
							 
				if ( width * 214 / height < 300 ) {
					
					$(this).css('width','300');
					height = 300 * height / width;
					$(this).css('height',height);
				} else {
					$(this).css('height','214');
					width = width * 214 / height;
					$(this).css('margin-left','-' + ((width - 300) / 2) + 'px');
				}
				
			} else {
				$(this).css('width','300');
			}
			
		});
		
		$(ONCC.GlobalfocusSectionNews.container).find('.focusSpecialItem .focusThumbnail img.focusImg').load(function(){		

			var height = ( typeof ( this.naturalHeight ) !== 'undefined' ) ? this.naturalHeight : this.height ;
			var width = ( typeof ( this.naturalWidth ) !== 'undefined' ) ? this.naturalWidth : this.width ;
			
			if( height < width ){
							 
				if ( width * 435 / height < 608 ) {
					
					$(this).css('width','608');
					height = 608 * height / width;
					$(this).css('height',height);
				} else {
					$(this).css('height','435');
					width = width * 435 / height;
					$(this).css('margin-left','-' + ((width - 608) / 2) + 'px');
				}
				
			} else {
				$(this).css('width','608');
			
			}
			
		});
		

		$.each( $(ONCC.GlobalfocusSectionNews.container).find('.focusItem'),function(k,v) {
			if ( k%2 == ONCC.GlobalfocusSectionNews.reservedFocus % 2 ) {
				$(this).addClass('left');
			} else {
				$(this).addClass('right');
			}
		});
	
		
		//for handle the first focus item at the right , add padding-left 8px
		if ( $(ONCC.GlobalfocusSectionNews.container).find('.focusItem:first').hasClass('right') ) {
			$(ONCC.GlobalfocusSectionNews.container).find('.focusItem:first').css('padding-left','8px');
		}
		
		
		
		// focus 
		ONCC.GlobalfocusSectionNews.videoListBind( focusItemDate );
		
		// for delay check
		ONCC.GlobalnewsList.init();
		
	},

	
	setFocusBox:function(data, container){
		//gary 20131010 4focus
		var content = '';
		var mainContent = '';
		var content_other = '';
		var title = '';
		var link = '';
		var thumbnail = '';
		var count = 0;
		var section = '';
		var withImage = true;
		var video = data.video;
		section =  data.section;
		mainContent = data.content;
		
		/* var eventname = ( typeof ( data.eventname ) != 'undefined' ) ? (( data.eventname != '' ) ? data.eventname + '：':'' ) : '';
		var eventstatus = ( typeof (data.eventstatus ) != 'undefined' ) ? (( data.eventstatus != '' ) ? data.eventstatus :'' ) : '';
		if ( eventstatus != 'HOT_EVENT' ) {
			data.title = data.title.replace(eventname,'');
			eventname = '';
		}*/
		
		title = data.title.replace('︰','：') + ONCC.addCommentaryIcon( data.commentary , 's' ); 
		title = ONCC.titlekeyword.converter ( data.title,data.pubDate,data.district );
		link =  data.link;
		//link = '/tw/news.html';
		id = data.articleId;
				
		ONCC.GlobalfocusSectionNews.section_focus_id.push(id);
				
		var isSpecialHighlight = ( typeof ( data.isSpecialHighlight)  != 'undefined' ) ? data.isSpecialHighlight : 'false';

		if ( isSpecialHighlight == 'true') {
			ONCC.GlobalfocusSectionNews.isSpecialHighlight = isSpecialHighlight;
		}	else {
			ONCC.GlobalfocusSectionNews.numOfFocusDone++;	
		}

		var curThumbnail = '';
		if ( typeof(data.photoTypeLocation1_1 ) !== 'undefined') {
			if ( data.photoTypeName1_1 == 'thumbnail' ) {
				curThumbnail = data.photoTypeLocation1_1;
			}
		}
		if ( typeof(data.photoTypeLocation1_2 ) !== 'undefined') {
			if ( data.photoTypeName1_2 == 'thumbnail' ) {
				curThumbnail = data.photoTypeLocation1_2;
			}
		}
		if ( typeof(data.photoTypeLocation1_3 ) !== 'undefined') {
			if ( data.photoTypeName1_3 == 'thumbnail' ) {
				curThumbnail = data.photoTypeLocation1_3;
			}
		}
		
		if ( curThumbnail != '') {
			
			if ( title.length > 12 ) {
				mainContent = $strTruncate(mainContent,15);
			} else {
				mainContent = $strTruncate(mainContent,25);
			}
			
			thumbnail =  '<img class="focusImg" src="' + NEWS_PATH  + curThumbnail + '" />';
			
		} else {
			withImage = false;
			
			if ( isSpecialHighlight != 'true' ) {
				if ( $ONCC.corpBar.getNation() == 'hk' ) { // for title background
					thumbnail = '<img class="focusImg" src="/img/v2/news_bg.jpg" />';
				} else {
					thumbnail = '<img class="focusImg" src="/img/v2/'+ $ONCC.corpBar.getNation() + '_news_bg.jpg" />';
				}
				mainContent = $strTruncate(mainContent,90);
			} else {
				mainContent = $strTruncate(mainContent,280);
			}
		}

		redirect_path = '/' + GLBOAL_PATH + '/bkn' + data.link;
		text_title = data.title + ONCC.addCommentaryIcon( data.commentary , 's' );
		
		
		/*if ( key == 0 ) {
			isSpecialHighlight = 'true';
		} else {
			ONCC.GlobalfocusSectionNews.numOfFocusDone++;
		}*/

		//content = '<div class="focusItem ' + ((withImage)?'':'noImage') + '" rel="' + id + '" url="' + link + '"  title="' +  data.title + '" alt="' +  data.title + '">';
		content = '<div class=" ' +((isSpecialHighlight == 'true')?'focusSpecialItem':'focusItem') + ' ' + ((withImage)?'':'noImage') + '" rel="' + id + '" url="' + link + '"  title="' +  data.title + '" alt="' +  data.title + '">';
		content += '<div class="focusThumbnail">';
		content += '<a href="' + redirect_path + '" target="_self">' + thumbnail + '</a></div>';
		content += '<a href="' + redirect_path + '" target="_self">';
		content += '<div class="titleLayer" style="cursor:pointer"><div class="focusTitle">' + title + '</div>' + ((withImage)?'':'<div class="focusContent">' + mainContent + '</div>') + '</div>';
		content += '</a>';
		content += '<div class="videoContainer"></div>';
		
		
		/*if ( typeof ( video ) != 'undefined' &&  video != '' ) {
			content += '<a href="' + redirect_path + '" target="_self"><div class="videoIcon" style="cursor:pointer"></div></a>';
		}*/
		content += '</div>';
		
		if ( isSpecialHighlight == 'true' ) {
			$(container).prepend(content);
		} else {
			$(container).append(content);
		}
		
		//$(container).find('.focusItem[rel=' + id + '] a').attr('href', link );
		
	},
	
	videoListBind : function( focusItemDate ) {

		$.each ( focusItemDate , function ( k,v ) {
			
			videolisturl = NEWS_PATH + '/video/' + v + '/articleVideo_' + ONCC.getSection() + '.js';
			var listLoader = new $ListLoader(videolisturl);
				
			listLoader.callbacks.push( function ( _videoListData ) {

				$.each ( $('#focusNews .focusItem') , function ( k,v ) {
				
					$.each ( _videoListData , function ( k1,v1 ) {
				
						if ( $(v).attr('rel') == v1.articleId ) {
							
							$(v).find('.videoContainer').html( '<a href="' + NEWS_PATH + $(v).attr('url') + '" target="_self"><div class="videoIcon" style="cursor:pointer"></div></a>' );
							return false;
						}
						
					});

				});
				
				$.each ( $('#focusNews .focusSpecialItem') , function ( k,v ) {
				
					$.each ( _videoListData , function ( k1,v1 ) {
				
						if ( $(v).attr('rel') == v1.articleId ) {
							
							$(v).find('.videoContainer').html( '<a href="' + NEWS_PATH + $(v).attr('url') + '" target="_self"><div class="videoIcon" style="cursor:pointer"></div></a>' );
							return false;
						}
						
					});

				});
				
			});
			
			listLoader.load();

		});

	}
}
/* E:ONCC.GlobalfocusSectionNews */
 
ONCC.commentaryBox = {

	container : '#commentaryBox',
	templeContainer:'#allCommentaryTemple',
	pageContainer:'#commentaryPaging',
	authorUrl:'/' + ONCC.getLocation() + '/bkn/bknAuthor/UTF8/authorList_' + ONCC.getCodeBySection( ONCC.getLocation() + '_commentary' )+ '.js',
	authorData:'',
	authorArray:new Array(),
	templeArray:new Array(),
	
	init : function() {
		var _this=this;
		var listLoader = new $ListLoader( _this.authorUrl );
		listLoader.callbacks.push(function (data) {
			_this.authorArray=data;
			_this.build(_this.authorArray);
		});
		listLoader.load();
	 
	},

	build : function(data) {
	var _this=this;
	
		 var commentaryBoxHtml = '';
		commentaryBoxHtml+='<div id="commentaryBox" class="commentaryBox">';
		commentaryBoxHtml+='<div id="commentaryTitle"></div>';
		commentaryBoxHtml+='<div id="row_1"><div class="showRedBackground"></div><div class="shadowBackground"></div></div>';
		commentaryBoxHtml+='<div id="row_2"><div class="showRedBackground"></div><div class="shadowBackground"></div></div>';
		commentaryBoxHtml+='<div id="row_3"><div class="showRedBackground"></div><div class="shadowBackground"></div></div>';
		commentaryBoxHtml+='<div id="row_4"><div class="showRedBackground"></div><div class="shadowBackground"></div></div>';
		commentaryBoxHtml+='<div id="row_5"><div class="shadowTopBackground"></div><div class="showRedBackground"></div></div>';
		commentaryBoxHtml+='<div id="allCommentaryTemple"></div>';
		commentaryBoxHtml+='<div id="commentaryPaging"></div>';
		commentaryBoxHtml+='</div>';
		$("#yahooSearchCTN").after(commentaryBoxHtml);
		
		var name,sectId,iconPath,title;
		var commentaryTempleNo=1;
		var commentaryRowNo=1;
		var whichRow=1;
		var html='';
		var indexNo=0;
		$(data).each( function(k,v){
			if(commentaryTempleNo==1){
				html+='<div class="commentaryTemple item" id="commentaryTemple_'+indexNo+'">';
			}
			if(commentaryRowNo==1){
				if(whichRow>5){
					whichRow=1;
				}
				html+='<div class="commentaryRow" data="row_'+whichRow+'">';
				whichRow++;
			}
			var authorHex = ONCC.toHex(this['name']);
			html+='<div class="commentaryDetail" rowData="'+(whichRow-1)+'" nameData="'+this['name']+'" titleData="'+this['title']+'"><div class="commentaryImgDiv"><a href="/' + ONCC.getLocation() + '/commentary/index.html?authorID='+authorHex+'"><img class="commentaryImg" src="/'+ONCC.getLocation()+'/bkn/bknAuthor/img/'+this["iconPath"]+'"></a></div>';
			html+='<div class="'+(whichRow==6? 'commentarySmallHover_special':'commentarySmallHover')+'"><img class="commentaryImgSmall" src="'+(whichRow==6?"/img/commentaryBox/box_4.png":"/img/commentaryBox/box_2.png")+'"></div></div>';
			
			if(commentaryRowNo==4){
				html+='</div>';
				commentaryRowNo=1;
			}else{
				commentaryRowNo++;
			}
			if(commentaryTempleNo==20){
				html+='</div>';
				//_this.templeArray[indexNo]=html;
				indexNo++;
				//html="";
				commentaryTempleNo=1;
			}else{
				commentaryTempleNo++;
			}
		});
		
		if(commentaryRowNo!=1){
			html+="</div></div>";
		}else if(commentaryRowNo==1&&commentaryTempleNo!=20){
			html+="</div>"; 
		}else if(commentaryTempleNo==20){
			indexNo--;
		}
		//set allCommentaryTemple width

		$(_this.templeContainer).css("width",(parseInt(indexNo)+1)*296+"px");
		$(_this.templeContainer).html(html);

		var slidePageBox = new $SlidePageBox( { "contentContainer" : "#allCommentaryTemple", "pagingContainer" : "#commentaryPaging", "width" :296});
		slidePageBox.init();
	
		//mouse
		$(".commentaryDetail").mouseover(function(){
		 
			var rowData=$(this).attr("rowData");
			$("#row_"+rowData).css("display","block");
			$("#row_"+rowData).find(".showRedBackground").html("<div class='detailName'>"+$(this).attr("nameData")+"</div><div class='detailTitle'>"+$(this).attr("titleData")+"</div>");
			if(rowData!=5){
				$(this).find(".commentarySmallHover").css("display","block");
			}else{
				$(this).find(".commentarySmallHover_special").css("display","block");
			}
		});
		$(".commentaryDetail").mouseout(function(){
			var rowData=$(this).attr("rowData");
			$("#row_"+rowData).css("display","none");
			$("#row_"+rowData).find(".showRedBackground").text("");
			if(rowData!=5){
				$(this).find(".commentarySmallHover").css("display","none");
			}else{
				$(this).find(".commentarySmallHover_special").css("display","none");
			}
		});
		
	_this.changeUnderNumber();
	
	},
	changeUnderNumber : function() {
		
		$('#commentaryBox #commentaryPaging .page').each(function(){
			$(this).html($(this).attr('id').replace('page_',''));
			})
	}
	
}

ONCC.eventNews = {
	
	container : '#urgentNews',
	data : null,
	datafeed : null,
	title : null,
	cutoff : 19,
	
	initMain : function() {
	
		var url = NEWS_PATH + '/cnt/' + ONCC.getSection() + '/eventList' + $ONCC.curLang  + '.js';
		var listLoader = new $ListLoader(url);
		listLoader.callbacks.push(function (data) {
			ONCC.eventNews.bindMain(data);
		});
		
		listLoader.load();
	},
	
	bindMain : function( data ) {
			
		if ( data == null ) {
			return;
		}
		if ( ONCC.getLevel() == 'main' && ( ONCC.getSection() == 'sport' || ONCC.getSection() == 'entertainment' || ONCC.getSection() == 'lifestyle' )) {
			ONCC.eventNews.container = $('.divSect.bottom').find('#urgentNews');
		} else {
			ONCC.eventNews.container = $('.rightSide').find('#urgentNews');
		}
					
		if  ( data[0].event.length > 0 ) {

			var itemsWidth = 0;
			var currentItemWidth = 0;
			var html = '';
			var url = '';
			
			$.each(  data[0].event , function( k,v) {
			
				if ( v.status == 'HOT_EVENT' ) {
					if ( v.link != '' && v.articleId != '' ) {
					
						url = new $QueryString ( '/' + v.location + '/bkn' + v.link );
						if ( $ONCC.curLang == '_cn' ) {
							url.set( { 'lang': $ONCC.curLang }); 
						}
						url.set( {'eventid' : v.uuid} );
						url.set( {'eventsection' : ONCC.getLocation() + '_' + ONCC.getSection() } );
						html += '<div class="relateKewordItem" title="' + v.name + '"><a href="' + url.toString() + '"><span class="bullet">&nbsp;•&nbsp;</span>' + v.name + '</a></div>';
					}
				}
			});
				
			if ( html != '' ) {
				$(ONCC.eventNews.container).before('<div class="relateKewordHeader"><img src="/img/v2/urgent_title_' + ONCC.getNation() + $ONCC.curLang + '.png"></div>');
				html = '<div class="relateKewordContent">' + html + '</div><div class="clear" style="clear: both;"></div>';
				$(ONCC.eventNews.container).html(html);
				$(ONCC.eventNews.container).show();
			}

			$.each(  $('.relateKewordItem') , function ( k,v ) {
			
				currentItemWidth = $(v).css('width').replace('px','') * 1;
				
				if ( currentItemWidth > 145 ) {
					if ( itemsWidth == 145 ) {
						$(v).before('<div class="sepItem" style="border-bottom:solid 1px #ccc; clear:both;"></div>');
					} 
				}
				
				itemsWidth += currentItemWidth;
				
				if ( itemsWidth > 146 ) {
					$(v).after('<div class="sepItem" style="border-bottom:solid 1px #ccc; clear:both;"></div>');
					itemsWidth = 0;
				}

			});

			if ( $('.relateKewordItem:odd:last').attr('title') == $('.relateKewordItem:last').attr('title') ) {
				$('#urgentNews .sepItem:last').remove();
			}

			ONCC.eventNews.banner();
		} 
		
	},
	
	initContent : function() {

		if ( ONCC.view == 'm' ) {
			ONCC.eventNews.cutoff = 5;
		}
		var url = new $QueryString ( window.location.href );
			
		if (  url.get('eventsection') != null && url.get('eventid') != null ) {
		
			var eventSection = url.get('eventsection').split('_');
			var url = '/' + eventSection[0] + '/bkn/cnt/' + eventSection[1] + '/event_' + url.get('eventid') + $ONCC.curLang  + '.js';
				var listLoader = new $ListLoader(url);
				listLoader.callbacks.push(function (data) {
					ONCC.eventNews.bindContent(data);
				});
				
				listLoader.load();
				
				
		} else {

			var url = NEWS_PATH + '/cnt/' + ONCC.getSection() + '/eventList' + $ONCC.curLang  + '.js';

			var listLoader = new $ListLoader(url);
			listLoader.callbacks.push(function (data) {
				
				if ( data == null ) {
					return;
				}
				var url = new $QueryString ( window.location.href );
				var title = $('.topHeadline h1').text();
				var founded = null;
				var eventid = '';
				
				if (  url.get('eventid') != null ) {
					eventid = url.get('eventid');
				} else {

					if ( typeof  BK_News.content.event != 'undefined' ) {

						if ( BK_News.content.event.length != 0 ) {
							
							$.each ( BK_News.content.event , function( k,v ) {
							
								$.each ( data[0].event , function( k1,v1 ) {
						
										if (  v1.uuid == v ) {
											
											if ( v1.status == 'HOT_EVENT' ) {
												founded = v1;
											}
											return false;
										}
								});
								
								if ( founded != null ) {
									return false;
								}
					
							});
							
							if ( founded == null ) {
								eventid = BK_News.content.event[0];
							}

						}
					
					}
					/*
					if ( BK_News.content.event.length != 0 ) {

						eventid = BK_News.content.event[0];
					}*/
				}
				
				if ( founded == null ) {
					$.each ( data[0].event , function( k,v ) {
					
						if ( eventid == '' ) {
							/* if ( title.indexOf( v.name + '：') != -1 ) {
								founded = this;
							}	 */
						} else {
							if ( eventid == v.uuid ) {
								founded = this
							}
						}
						
					});
				}
				
				

				if ( founded != null ) {
					
					var url = NEWS_PATH + '/cnt/' + ONCC.getSection() + '/event_' + founded.uuid + $ONCC.curLang  + '.js';
					var listLoader = new $ListLoader(url);
					listLoader.callbacks.push(function (data) {
						ONCC.eventNews.bindContent(data);
					});
					
					listLoader.load();
				
				
				
					
				} else {
					return;
				}
			});
				
			listLoader.load();	
			
		}
		/*
		
		if ( typeof ( BK_News.content.event ) == 'undefined' ) {
		
			var url = NEWS_PATH + '/cnt/' + ONCC.getSection() + '/eventList' + $ONCC.curLang  + '.js';

			var listLoader = new $ListLoader(url);
			listLoader.callbacks.push(function (data) {
				
				var url = new $QueryString ( window.location.href );
				var eventid = '';			
			
				var title = $('.topHeadline h1').text();
				var founded = null;
				
				$.each ( data , function( k,v ) {
					
					if ( title.indexOf( v.eventname ) != -1 ) {
						founded = this;
					}
				});
				
				if ( founded != null ) {
					ONCC.eventNews.bindContent( founded );
				} else {
					return;
				}
			});
			
			listLoader.load();
			
		} else {
		
			if ( BK_News.content.event.length == 0 ) {
				return;
			}
			
			var url = new $QueryString ( window.location.href );
			var eventid = '';
			var numOfEvent = BK_News.content.event.length;
			var eventsData = new Array();
			
			if (  url.get('eventid') != null ) {
				eventid = url.get('eventid');
			} else {
				eventid = BK_News.content.event[0];
			}
			
			
			var url = NEWS_PATH + '/cnt/' + ONCC.getSection() + '/event_' + eventid + $ONCC.curLang  + '.js';
			var listLoader = new $ListLoader(url);
			listLoader.callbacks.push(function (data) {
				eventsData.push(data);
				//numOfEvent--;
				//if ( numOfEvent== 0 ) {
					ONCC.eventNews.bindContent(eventsData);
				//}
			});
			
			listLoader.load();
		}

		*/
	},
	
	bindContent : function( data ) {
 
		var eventname = '';
		var title = ($('.topHeadline h1').html()).replace('︰','：');
		if (  data[0].event[0].status != 'HOT_EVENT' ) {
			eventname = '';
		} 
		$('.topHeadline h1').html( title );

		if ( data[0].article.length <= 1 || (data[0].event[0].status != 'HOT_EVENT' && data[0].event[0].status != 'RELATED_NEWS')) { // remove current article
			return;
		}
		var onlySameSection = true;
		var sectionCode = data[0].article[0].section;
		
		$.each( data[0].article , function ( k,v ) {
			if ( sectionCode != v.section ) {
				onlySameSection = false;
				return false;
			}
		});
		var listitemCount = 0;
		var dateRegExp = new RegExp('-|:| ', 'g');
		
		$('.contentFeature').before('<div id="urgentNews"><div class="t">相關新聞 :</div></div>');
		//$('.contentFeature').before('<div id="urgentNews"><div class="t">'+ data[0].event[0].name +'相關新聞 :</div></div>');
		
		$.each( data[0].article , function ( k,v ) {
			if (!( BK_News.content.articleId == v.articleId )) { // remove current article
				v.onlySameSection = onlySameSection;
				$('.leftSide #urgentNews').append(ONCC.eventNews.focusbox(this, k , data[0].event[0] ) ) ;
			}

		});
		if (  ONCC.eventNews.cutoff <= data[0].article.length) {
				html = '<div class="listitemmore ">';
				html += '<span id="listitemmore">更多></span>';
				html += '</div>';
				$('.leftSide #urgentNews').append(html);
		}
		$('#listitemmore').click( function() {
			
			if ( ONCC.view == 'm' ) {
				ONCC.eventNews.cutoff = 10;
			}
		
			for ( i = 0 ; i < ONCC.eventNews.cutoff ; i++ ) {
				v = $('.leftSide #urgentNews .hideitem:first');
				var src = $(v).find('img').attr('datasrc');
				$(v).find('img').attr('src',src);
				$(v).removeClass('hideitem');
				$(v).show();
			}
			
			if ( $('.leftSide #urgentNews .hideitem').length == 0 ) {
				$('.listitemmore #listitemmore').hide();
			}
				/* $.each( $('.leftSide #urgentNews .hideitem').find('img') , function( k , v ) {
					var src = $(v).attr('datasrc');
					$(v).attr('src',src);
				
				}); */
			
			//$([0]).attr('datasrc')
				//$('.listitemmore').remove();
				//$('.hideitem').css('display','block');
		});
		
		
	},
	
	focusbox : function( data , listitemCount, eventObject ) {
		var html = '';
		var datearr = data.pubDate.split(' ')[0].split('-');
		var timearr = data.pubDate.split(' ')[1].split(':');
		if(typeof data.editTime !== 'undefined' && data.pubDate != data.editTime) {
			var datearr = data.editTime.split(' ')[0].split('-');
			var timearr = data.editTime.split(' ')[1].split(':');
		} else {
			var datearr = data.pubDate.split(' ')[0].split('-');
			var timearr = data.pubDate.split(' ')[1].split(':');
		}
		var datetime = '';
		var title = data.title +  ONCC.addCommentaryIcon( data.commentary , 's' );
		var sectionArray = ONCC.getSectionByCode( data.section.replace(',','') );
		
		var sectionName = '';
		//if ( sectionArray[0] + '_' +  sectionArray[1] !=  ONCC.getLocation() + '_' + ONCC.getSection() ) {
		if ( data.onlySameSection == false ) {
			sectionName = (( sectionArray[1] == 'news' ) ? ONCC.getNationChiByInput( sectionArray[0] ) : ONCC.getSectionChiByInput( sectionArray[1] ) );
			sectionName = '<span class="sectionName" style="font-size: 14px;color: #666666; float:right">[' + sectionName + ']</span> ';
		}
		
		
		var pubPath = '/' + sectionArray[0] + '/bkn';
		title = ONCC.titlekeyword.converter ( title,data.pubDate,data.district );
		title = (title.replace('︰','：')).replace( eventObject.name + '：','' );
		timestr = timearr[0] + ':'+ timearr[1];
		datestr = datearr[1]*1 + '月' + datearr[2]*1 + '日';
		if(typeof data.editTime !== 'undefined' && data.pubDate != data.editTime) {
			datetime = $dateFormat(data.editTime.replace('-','').replace('-','').replace(' ','').replace(':','').replace(':',''),'mm月dd日(dddd) HH:MM');
		} else {
			datetime = $dateFormat(data.pubDate.replace('-','').replace('-','').replace(' ','').replace(':','').replace(':',''),'mm月dd日(dddd) HH:MM');
		}
		//datetime = $dateFormat(data.pubDate.replace('-','').replace('-','').replace(' ','').replace(':','').replace(':',''),'mm月dd日(dddd) HH:MM');
		
		var currentUrl = new $QueryString ( window.location.href );
		data.link = data.link.replace('.html', $ONCC.curLang + '.html');
		var url = new $QueryString ( pubPath + data.link );
		if ( $ONCC.curLang == '_cn' ) {
			url.set( { 'cn': 'true' }); 
		}
		
		
		url.set( currentUrl.params );
		 
		if ( typeof ( currentUrl.params.eventsection ) == 'undefined' ) {
			url.set( {'eventsection' : ONCC.getLocation() + '_' + ONCC.getSection() } );
		}
		if ( typeof ( currentUrl.params.from ) == 'undefined' && ONCC.view == 'm') {
			if ( ONCC.from == 'a' ) {
				url.set( {'from' : 'webview' } );
			} else {
				url.set( {'view' : 'm' } );
			}
			
		}
		url.set( {'eventid' : eventObject.uuid} );
		url = url.toString();		
		
		
		if ( listitemCount >= ONCC.eventNews.cutoff ) {
			html += '<div class="focus clearfix ' + ((this.targetArticle == data.articleId) ? "target":"") + ' hideitem" style="display:none;"><div class="divtable">';
		} else {
			html += '<div class="focus clearfix ' + ((this.targetArticle == data.articleId) ? "target":"") + ' "><div class="divtable">';
		}
		
		if ( typeof ( data.videoThumbnail ) == 'undefined' ) {
			data.videoThumbnail = '';
		}
		
		if ( typeof ( data.video) != 'undefined') {
			
			var thumb_ar = data.video.split("/");
			if ( thumb_ar.length > 2) {
				data.videoThumbnail = 'http://tv.on.cc/xml/Thumbnail/' + thumb_ar[(thumb_ar.length - 2)] + '/bigthumbnail/' + data.videoThumbnail;
			}
		}
		var thumbnailSelector = ( typeof (data.smallthumbnail) != 'undefined' ) ? (((data.smallthumbnail) != '') ? data.smallthumbnail:data.thumbnail) :data.thumbnail;
		var thumbnail = ( ( thumbnailSelector != '' ) ? pubPath + thumbnailSelector : data.videoThumbnail );

		if ( thumbnail != '' ) {
		
			if ( listitemCount > ONCC.eventNews.cutoff ) {
				html += '<div class="thumb"><a href="'+url+'" title="'+data.title+'"><img datasrc="' + thumbnail + '" src=""></a>';
			} else {
				html += '<div class="thumb"><a href="'+url+'" title="'+data.title+'"><img src="'+thumbnail+'"></a>';
			}
			if ( data.video != '' ) {
				html += '<div class="videoIcon"></div>';
			}
			html += '</div>';
		}
		if(typeof data.editTime !== 'undefined' && data.pubDate != data.editTime) {
			html += '<div class="urgentContent"><div class="datetime"><a href="'+url+'">' +datetime  + '更新</a>' + sectionName + '</div>';
		} else {
			html += '<div class="urgentContent"><div class="datetime"><a href="'+url+'">' +datetime  + '</a>' + sectionName + '</div>';
		}
		//html += '<div class="urgentContent"><div class="datetime"><a href="'+url+'">' +datetime  + '</a>' + sectionName + '</div>';
		html += '<h1><a href="'+url+'">'+ title + '</a></h1>';
		html += '<p><a href="'+url +'">'+$strTruncate(data.content, 44)+'</a></p></div>';
		html += '</div></div>';
		
		return html;
				
	},
	banner : function() {
		
		var html = ''; 

			if ( ONCC.getNation() == 'hk' && ONCC.getLocation() == 'hk' && ONCC.getSection() == 'news' && ONCC.getLevel() == 'main' ) {
			
				$.getScript("/img/ad/ctf/goldenPrice.js", function() {
					
			/* 		
					if ( window.location.href.indexOf('adsix') == -1 ) {
						html = '<div class="relateNews_banner" style=""><a id="ctf_langing" href="http://ad4.on.cc/web/adclick.php?bannerid=905" target="_blank">';
						html += '<div id="banner_ctf" style="background-image: url(/img/ad/ctf/banner.jpg); width:290px ; height:55px; position: relative; cursor: pointer; " ><div style="color: #98012E;left: 179px;top: 12px;width: 120px;position: absolute;font-size: 16px;font-weight: bold;">' + goldenPrice[1] + '</div>';
						html += '<div style="text-align: right;line-height: 20px;padding-top: 33px;">' + goldenYear + '/' + goldenMonth + '/'  + goldenDay + ' ' + goldenHour + ':'  + goldenMin + ' 更新</div>';
						html += '</div></a></div>';
						$(ONCC.eventNews.container).prepend(html);	
						
						var _img = new Image();
						_img.src = 'http://ad4.on.cc/web/adview.php?bannerid=905';
						
					
					 } else { */
						
					//}
					
					var price = goldenPrice[1].split('/')[0].replace('HK$','');
						
					html = '<div class="relateNews_banner" style=""><a id="ctf_langing" href="http://ad4.on.cc/web/adclick.php?bannerid=1989" target="_blank">';
					html += '<div id="banner_ctf" style="background-image: url(/img/ad/six/banner.jpg); width:290px ; height:50px; position: relative; cursor: pointer; " ><div style="line-height: 20px;  line-height: 20px;padding-left: 88px">' + goldenYear + '/' + parseInt(goldenMonth,10) + '/'  + parseInt(goldenDay,10) + ' ' + goldenHour + ':'  + goldenMin + ' 更新</div>';
					html += '<div style="color: #c2b49c;left: 179px; text-align:right;top: 12px;width: 108px;position: absolute;font-size: 20px;font-weight: bold;padding-top: 9px;"><span style="  font-size: 10px;vertical-align: text-top;">$</span>' + price + '<span style="font-size: 10px;">/両</span></div>';
					html += '</div></a></div>';
					$(ONCC.eventNews.container).prepend(html);	
					



					var _img = new Image();
					_img.src = 'http://ad4.on.cc/web/adview.php?bannerid=1989';
					$('#banner_ctf').click( function() {
						$('#ctf_langing').click();

					});

				 });

			}

	}
}


ONCC.titlekeyword = {

	converter : function( str ,date, city) {
		var str_org = str;
		str = str.replace(":","：");
		
/* 		//<span class="city">澳门</span>
		if ( str.indexOf('<span class="city">澳门</span>') != -1 ) {
			str = str.replace('<span class="city">澳门</span>','<span class="macauKeyword" style="color:green;font-weight:bold;margin-right:8px" >澳门</span>');
		}
		
		if ( str.indexOf('<span class="city">澳門</span>') != -1 ) {
			str = str.replace('<span class="city">澳門</span>','<span class="macauKeyword" style="color:green;font-weight:bold;margin-right:8px" >澳門</span>');
		}
	 
		if (( str.indexOf('澳門　') != -1 ) || str.indexOf('澳門消息　') != -1 ) {
			str = '<span class="macauKeyword" style="color:green;font-weight:bold;">澳門 </span>' + str.replace('澳門消息　','').replace('澳門　','');
		}else if ( str_org.indexOf('　') != -1 && typeof date != 'undefined') {

		}
		
		if(typeof city != 'undefined'){
			if ( city != '' ) {
				if ( city == '澳門' || city == '澳门' ) {
					str = '<span class="macauKeyword" style="color:green;font-weight:bold;margin-right:8px" >'+city+'</span>' + str ;
				} else {
					str = '<span class="city">'+city+'</span>' + str ;
				}
				
			}
		} */
		
		return str;
	}
}

ONCC.sitemap = {
	
	init : function() {
		$('#sitemapCTN').html( this.build());
	},
	
	build : function() {
		var html = '<div id="sitemap"><table><tbody><tr>';
		
		html += '<td class="hk"><a href="/'+ONCC.getNation()+'/news" title="' + $ONCC.lang.translate("&#x65B0;&#x805E;") + '" class="title">' + $ONCC.lang.translate("&#x65B0;&#x805E;") + '</a>';
		html += '<ul class="common">';
		html += '<li><a href="/hk/news/index.html">' + $ONCC.lang.translate("&#x6E2F;&#x6FB3;")+ '</a></li>';
		html += '<li><a href="/tw/news/index.html">' + $ONCC.lang.translate("&#21488;&#28771;")+ '</a></li>';
		html += '<li><a href="/cn/news/index.html">' + $ONCC.lang.translate("&#x5927;&#x9678;")+ '</a></li>';
		html += '<li><a href="/int/news/index.html">' + $ONCC.lang.translate("&#x570B;&#x969B;")+ '</a></li>';
		html += '</ul></td>';
		
		html += '<td class="hk"><a href="/'+ONCC.getNation()+'/commentary/index.html" title="' + $ONCC.lang.translate("&#x8A55;&#x8AD6;") + '" class="title">' + $ONCC.lang.translate("&#x8A55;&#x8AD6;") + '</a>';
		html += '<ul class="common">';
		html += '<li><a href="/hk/commentary/index.html">' + $ONCC.lang.translate("&#x6E2F;&#x6FB3;")+ '</a></li>';
		html += '<li><a href="/tw/commentary/index.html">' + $ONCC.lang.translate("&#21488;&#28771;")+ '</a></li>';
		html += '</ul></td>';
		
		html += '<td class="hk"><a href="/'+ONCC.getNation()+'/entertainment/index.html" title="' + $ONCC.lang.translate("&#x5A1B;&#x6A02;") + '" class="title">' + $ONCC.lang.translate("&#x5A1B;&#x6A02;") + '</a>';
		html += '<ul class="common">';
		html += '</ul></td>';
		
		html += '<td class="hk"><a href="/'+ONCC.getNation()+'/finance/index.html" title="' + $ONCC.lang.translate("&#x8CA1;&#x7D93;") + '" class="title">' + $ONCC.lang.translate("&#x8CA1;&#x7D93;") + '</a>';
		html += '<ul class="common">';
		html += '</ul></td>';
		
		html += '<td class="hk"><a href="/'+ONCC.getNation()+'/sport/index.html" title="' + $ONCC.lang.translate("&#x9AD4;&#x80B2;") + '" class="title">' + $ONCC.lang.translate("&#x9AD4;&#x80B2;") + '</a>';
		html += '<ul class="common">';
		html += '</ul></td>';
		
		html += '<td class="hk"><a href="/'+ONCC.getNation()+'/lifestyle/index.html" title="' + $ONCC.lang.translate("&#x751F;&#x6D3B;") + '" class="title">' + $ONCC.lang.translate("&#x751F;&#x6D3B;") + '</a>';
		html += '<ul class="common">';
		html += '</ul></td>';
		
		html += '</tr></tbody></table></div>';
		return html;
	}
}

/* E:sectionlist page */

/* S:video feed */
ONCC.tvLive = {
	
	statusInterval : '',
	live_url_path : 'http://on.cc/js/tv/live_url.js',
	live_status : 'off',
	live_title : '',
	
	init : function() {
		
		var _this = this;
		ONCC.tvLive.liveStatusUpdate();
		_this.statusInterval=setInterval(function(){
			ONCC.tvLive.liveStatusUpdate();
		},5000);

	},
	
	liveStatusUpdate : function( ) {
		
		var _this = this;
		
		$.getScript( _this.live_url_path ,function(){
			if( ONCC.tvLive.live_status != live_url.onoff || ( live_url.onoff == 'on' &&  ONCC.tvLive.live_title != live_url.title )) {
				 ONCC.tvLive.live_status = live_url.onoff;
				  ONCC.tvLive.live_title = live_url.title;
				ONCC.tvLive.showLiveNotice( live_url );
			}
			
		});
		
	},
	
	showLiveNotice : function( live_url ) {
		
		if ( live_url.onoff == 'off') {
			$('#liveNotice').remove();
		} else {
			$('#liveNotice').remove();
			$('#sideLeft .mainmenu').before('<div id="liveNotice" rel="' + live_url.link + '"><div class="tvliveicon"><img src="/img/v2/tvliveicon.gif" /></div><div class="tvlivetext"><div class="textcontent"><MARQUEE WIDTH="80%">' + live_url.title + '</MARQUEE></div></div><div class="tvlivebg"><img src="/img/v2/tvlivebg.png" /></div></div>');
			
			$('#liveNotice').click ( function() {
				window.open( $(this).attr("rel"),'_blank');		
			});
		}//$('.tvlivetext').marquee();

	} 

}

/* S:video feed */

ONCC.videoFeed  = {

	container : '#ontvVideoCTN',
	numOfVideo : 5,
	video_items : [],
	numOfVideoInRow : 1,
	sectionCode : '',
	rotateTimer : 10 * 1000,
 
	currentDisplayItem : 0, 
	intervalKey : '',
	init :function(){
		var videoChannel = 0;
		
		switch (ONCC.getNation() + '_' + ONCC.getLocation() + '_' + ONCC.getSection()) {
		case 'hk_hk_news':
		  videoChannel = 3;
		  break;
		case 'hk_cn_news':
		  videoChannel = 160;
		  break;
		case 'hk_tw_news':
		  videoChannel = 154;
		  break;
		case 'hk_int_news':
		  videoChannel = 166;
		  break;	
		case 'hk_hk_finance':
		  videoChannel = 2;
		  break;
		case 'hk_hk_sport':
		  videoChannel = 198;
		  break;
		case 'hk_hk_entertainment':
		  videoChannel = 4;
		  break;
		case 'hk_hk_lifestyle':
		  videoChannel = 5;
		  break;
		case 'hk_hk_finance':
		  videoChannel = 2;
		  break; 
		  
		default:
		 
		}
		
		if ((ONCC.getNation() + '_' + ONCC.getLocation() + '_' + ONCC.getSection() == 'hk_hk_entertainment' && window.location.href.indexOf('hk/entertainment/wallpaper') != -1)||
			(ONCC.getNation() + '_' + ONCC.getLocation() + '_' + ONCC.getSection() == 'tw_tw_entertainment' && window.location.href.indexOf('tw/entertainment/wallpaper') != -1)||
			(ONCC.getNation() + '_' + ONCC.getLocation() + '_' + ONCC.getSection() == 'cn_hk_entertainment' && window.location.href.indexOf('hk/entertainment/wallpaper') != -1)) {
			 videoChannel = 245;
		}
		
		if ( videoChannel != 0 ) {
			this.sectionCode = videoChannel;
			$.get($getUrlWithTime('/xml/ontv/xml/Group/top50_' + videoChannel + '' + $ONCC.curLang  + '.xml'), function(data){
			if(videoChannel!=245){
				ONCC.videoFeed.bind($(data).find('video'));
				ONCC.videoFeed.banner();
				ONCC.videoFeed.intervalKey = setInterval( ONCC.videoFeed.rotate, ONCC.videoFeed.rotateTimer ); 
				
				$(ONCC.videoFeed.container).find('.videoPlayer').click( function() {
					window.open( ONCC.videoFeed.video_items[ ONCC.videoFeed.currentDisplayItem ].url,'_blank');	
					ONCC.videoFeed.intervalKey = setInterval( ONCC.videoFeed.rotate, ONCC.videoFeed.rotateTimer ); 
					$(ONCC.videoFeed.container).find('.videoPlayer').hide();
					$(ONCC.videoFeed.container).find('.videoPlayIcon').show();
					$(ONCC.videoFeed.container).find('.videoThumbnail').show();
				});
				$(ONCC.videoFeed.container).hover (
					function() {
						clearInterval ( ONCC.videoFeed.intervalKey );
						$(ONCC.videoFeed.container).find('.videoPlayer').show();
						$(ONCC.videoFeed.container).find('.videoPlayer').append('<div id="player_flash"></div>');
						$(ONCC.videoFeed.container).find('.videoThumbnail').hide();
						$(ONCC.videoFeed.container).find('.videoPlayIcon').hide();
						var params = {
							allowFullScreen: true,
							allowScriptAccess: 'always',
							wmode: 'opaque',
							hasPriority: true
						};
						 var defaultFv = {
							today: serverTime,
							tvc: 0,
							playMode: 0,
							autoPlay: 1,
							bumper: 0,
							theme: ''
						};
						var swfUrl = '/img/v2/mainplayer.swf?mid=' + ONCC.videoFeed.video_items[ ONCC.videoFeed.currentDisplayItem ].filename + '&mdate=' + ONCC.videoFeed.video_items[ ONCC.videoFeed.currentDisplayItem ].createTime + '&t=1424849861543&msect=bkn';
						swfobject.embedSWF(swfUrl, "player_flash", "286", "161", "10.0.0", "expressInstall.swf", defaultFv, params, {
							name: 'player_flash'
						});
					},
					function() {
						$(ONCC.videoFeed.container).find('.videoPlayer #player_flash').remove();
						ONCC.videoFeed.intervalKey = setInterval( ONCC.videoFeed.rotate, ONCC.videoFeed.rotateTimer ); 
						$(ONCC.videoFeed.container).find('.videoPlayer').hide();
						$(ONCC.videoFeed.container).find('.videoPlayIcon').show();
						$(ONCC.videoFeed.container).find('.videoThumbnail').show();
					}
				);
			 
				}else{
					ONCC.videoFeed.babybind($(data).find('video'));
				}
			});
		}
		
		//$(this.container).before('<div id="videoFeedLabel">' + $ONCC.lang.translate("&#x6771;&#x65B9;&#x96FB;&#x8996;") + '</div>');*/
	},

	babybind : function(data) {
	    var videoContent = '';
		
		
		$.each(data,function( k , v) {
			
			videoContent = ''; 
			videoContent += '<div class="videoItem ' + ((k%ONCC.videoFeed.numOfVideoInRow==0)?'first':'') + '" rel="' + $(v).attr('filename') + '" ' + (( k > 0 ) ? 'style="display:none;"' : '' ) + '>';
			videoContent += '<div class="videoPlayIcon"><a href="http://tv.on.cc/index.html?s=' + ONCC.videoFeed.sectionCode + '&amp;i=' + $(v).attr('filename') + '&amp;d=' + $(v).attr('createTime') + '" target="_blank" filename="' + $(v).attr('filename') + '" createTime="' + $(v).attr('createTime')  + '"><img src="/img/v2/focus_video_icon.png" /></a></div>';
			videoContent += '<div class="videoTitle" style="background-image: url(/img/v2/ontv_baby_repeat.jpg);"><div class="videoTitleTop" style="background-image: url(/img/v2/ontv_baby_top.jpg); height:7px; width:288px;"></div><div style="width:278px;padding-left:5px;"><a href="http://tv.on.cc/index.html?s=' + ONCC.videoFeed.sectionCode + '&amp;i=' + $(v).attr('filename') + '&amp;d=' + $(v).attr('createTime') + '" target="_blank">' + $(v).text()+ '</a></div><div class="videoTitleBottom" style="background-image: url(/img/v2/ontv_baby_bottom.jpg); height:4px; width:288px;"></div></div>';
			videoContent += '<div class="videoThumbnail"></div>';
			videoContent += '</div>';
			$(ONCC.videoFeed.container).append(videoContent);

			var metaLoader = new $MetaLoader($(v).attr('filename'), $(v).attr('createTime'));
			metaLoader.callbacks.push(function (m) {
				var thumb_url = $(m).find('thumbnailUrlList').find('url').text();
				var thumb_ar = thumb_url.split("/");
				var thumbnail = 'http://tv.on.cc/xml/Thumbnail/' + thumb_ar[(thumb_ar.length - 2)] + '/bigthumbnail/' + thumb_ar[(thumb_ar.length - 1)];
				$(ONCC.videoFeed.container).find('.videoItem[rel=' + $(m).find('programId').text() + '] .videoThumbnail').html('<a href="http://tv.on.cc/index.html?s=' + ONCC.videoFeed.sectionCode + '&amp;i=' + $(m).find('programId').text() + '&amp;d=' + $(m).find('createTime').text() + '" target=_blank"><img src="' + thumbnail + '" /></a>');
				$(ONCC.videoFeed.container).show();
			});
			metaLoader.load();
					
			if ( k >= (ONCC.videoFeed.numOfVideo - 1 )) 
				return false;
		});
	},
	
	bind : function(data) {

		var videoContent = '';
		
		$.each(data,function( k , v) {
			
			if ( k == 0 ) {
				videoContent = ''; 
				videoContent += '<div class="videoItem ' + ((k%ONCC.videoFeed.numOfVideoInRow==0)?'first':'') + '" rel="' + $(v).attr('filename') + '" ' + (( k > 0 ) ? 'style="display:none;"' : '' ) + '>';
				videoContent += '<div class="videoPlayIcon"><a href="http://tv.on.cc/index.html?s=' + ONCC.videoFeed.sectionCode + '&amp;i=' + $(v).attr('filename') + '&amp;d=' + $(v).attr('createTime') + '" target="_blank" filename="' + $(v).attr('filename') + '" createTime="' + $(v).attr('createTime')  + '"><img src="/img/v2/focus_video_icon.png" /></a></div>';
				videoContent += '<div class="videoTitle" style="background-image: url(/img/v2/ontv_baby_repeat.jpg);"><div class="videoTitleTop" style="background-image: url(/img/v2/ontv_baby_top.jpg); height:7px; width:288px;"></div><div style="width:278px;padding-left:5px;"><a href="http://tv.on.cc/index.html?s=' + ONCC.videoFeed.sectionCode + '&amp;i=' + $(v).attr('filename') + '&amp;d=' + $(v).attr('createTime') + '" target="_blank">' + $(v).text()+ '</a></div><div class="videoTitleBottom" style="background-image: url(/img/v2/ontv_baby_bottom.jpg); height:4px; width:288px;"></div></div>';
				videoContent += '<div class="videoPlayer"><div id="player_flash_layer"></div><div id="player_flash"></div></div>';
				videoContent += '<div class="videoThumbnail"></div>';
				videoContent += '</div>';
				$(ONCC.videoFeed.container).append(videoContent);
			}
			var video_item = {};
			video_item.filename = $(v).attr('filename');
			video_item.createTime = $(v).attr('createTime');
			video_item.thumbnail = '';
			video_item.title = $(v).text();
			video_item.url = 'http://tv.on.cc/hk/index.html?s=' + ONCC.videoFeed.sectionCode + '&amp;i=' + $(v).attr('filename') + '&amp;d=' + $(v).attr('createTime');
			ONCC.videoFeed.video_items.push( video_item );

			var metaLoader = new $MetaLoader($(v).attr('filename'), $(v).attr('createTime'));
			metaLoader.callbacks.push(function (m) {
				
				var thumb_url = $(m).find('thumbnailUrlList').find('url').text();
				var thumb_ar = thumb_url.split("/");
				var thumbnail = 'http://tv.on.cc/xml/Thumbnail/' + thumb_ar[(thumb_ar.length - 2)] + '/bigthumbnail/' + thumb_ar[(thumb_ar.length - 1)];
				
				$.each ( ONCC.videoFeed.video_items , function( k,v ) {
					
					if ( v.filename == $(m).find('programId').text() ) {
						ONCC.videoFeed.video_items[k].thumbnail = thumbnail;
					}
					
				});
				if ( $(ONCC.videoFeed.container).find('.videoItem[rel=' + $(m).find('programId').text() + ']').length > 0 ) {
					$(ONCC.videoFeed.container).find('.videoItem[rel=' + $(m).find('programId').text() + '] .videoThumbnail').html('<a href="http://tv.on.cc/index.html?s=' + ONCC.videoFeed.sectionCode + '&amp;i=' + $(m).find('programId').text() + '&amp;d=' + $(m).find('createTime').text() + '" target=_blank" class="videoThumbnail_top"><img src="' + thumbnail + '" class="" /></a><a href="http://tv.on.cc/index.html?s=' + ONCC.videoFeed.sectionCode + '&amp;i=' + $(m).find('programId').text() + '&amp;d=' + $(m).find('createTime').text() + '" target=_blank" class="videoThumbnail_bottom"><img src="' + thumbnail + '" class="" /></a>');
					$(ONCC.videoFeed.container).show();
				}
				
				
				//$(ONCC.videoFeed.container).show();
			});
			metaLoader.load();
					
			if ( k >= (ONCC.videoFeed.numOfVideo - 1 )) 
				return false;
		});
	},
	
	tableHtml:function( data ){
		var _this = this;
		var table = [];
		var item = '';
		table.push('<ul id="ul_subTitle2">');

		$.each(data.focusNews,function(k,v){
			item = '';
			item = '<li><div class="focusnews_item"><div class="image"><img src="http://news.on.cc/' + v.photoTypeLocation1_1 + '" width="40px" /></div><div class="title">' + v.title + '</div></div></li>';
			table.push(item);
		})
		table.push('</ul>');
		return table.join('');
	},
	rotate : function() {
		
		ONCC.videoFeed.currentDisplayItem = ( ( ONCC.videoFeed.currentDisplayItem + 1 == ONCC.videoFeed.numOfVideo ) ? 0 : ONCC.videoFeed.currentDisplayItem + 1);
		var videoItem = ONCC.videoFeed.video_items[ ONCC.videoFeed.currentDisplayItem ];
		var thumbnail = videoItem.thumbnail;
		$(ONCC.videoFeed.container).find('.videoItem .videoThumbnail .videoThumbnail_bottom img').attr('src',thumbnail);
		$( ONCC.videoFeed.container).find('.videoItem .videoThumbnail .videoThumbnail_top img').fadeOut( "slow", function() {

			var url = videoItem.url;
			$( ONCC.videoFeed.container).find('.videoItem .videoPlayIcon a').attr('href',url);
			$( ONCC.videoFeed.container).find('.videoItem .videoTitle a').attr('href',url);
			$( ONCC.videoFeed.container).find('.videoItem .videoTitle a').html( videoItem.title );
			$(ONCC.videoFeed.container).find('.videoItem .videoThumbnail a').attr('href',url);
			$(ONCC.videoFeed.container).find('.videoItem .videoThumbnail img').attr('src',thumbnail);
			$(ONCC.videoFeed.container).find('.videoItem .videoThumbnail .videoThumbnail_top img').attr('src',thumbnail);
			$(ONCC.videoFeed.container).find('.videoItem .videoThumbnail .videoThumbnail_top img').show();
			//$(ONCC.videoFeed.container).find('.videoItem .videoThumbnail ').html('<a href="' + url + '" target=_blank"><img src="' + thumbnail + '" /></a>');

			//$( ONCC.videoFeed.container).find('.videoItem').fadeIn();
							
		});
		
	},
	
	banner : function() {
		
		var html = ''; 
		//if ( ONCC.getNation() == 'hk' && ONCC.getLocation() == 'hk' && ONCC.getSection() == 'news' ) {

			//html += '<div class="ontv_banner"><a target="_blank" href="http://hk.on.cc/specials/latest.html?key=%E6%99%AE%E9%81%B8%E7%88%AD%E8%AD%B0&location=hk&section=news&lang=zh"><img src="/img/v2/284x57_tc.gif" width="284px"  /></a></div>';
		var currenttime =  serverTime.substr(8,6);

		if(serverTime >= "20141211000000" && serverTime < "20141213000000"){
			if(serverTime >= "20141211000000" && serverTime <  "20141211073000" ){
				html += '<div class="ontv_banner"><a target="_blank" href="http://hk.on.cc/specials/latest.html?key=%E6%99%AE%E9%81%B8%E7%88%AD%E8%AD%B0&location=hk&section=news&lang=zh"><img src="/img/v2/284x57_tc.gif" width="284px"  /></a></div>';
			}else{
				html += '<div class="ontv_banner"><a target="_blank" href="http://tv.on.cc/live/index.html"><img src="/img/v2/284x57_tc_live_2.gif" width="284px"  /></a></div>';
			}
		}else if(serverTime >= "20141215080000" && serverTime < "20141215200000"){
				html += '<div class="ontv_banner"><a target="_blank" href="http://tv.on.cc/live/index.html"><img src="/img/v2/284x57_tc_live.gif" width="284px"  /></a></div>';
		}else if(serverTime >= "20141216080000" && serverTime < "20141216100000"){
				html += '<div class="ontv_banner"><a target="_blank" href="http://tv.on.cc/live/index.html"><img src="/img/v2/284x57_tc_live_2.gif" width="284px"  /></a></div>';		
		}else{				
			//if ( currenttime > '130000' && currenttime < '210000' ) {
			//	html += '<div class="ontv_banner"><a target="_blank" href="http://tv.on.cc/live/index.html"><img src="/img/v2/284x57_tc_live.gif" width="284px"  /></a></div>';
			//} else {
				//html += '<div class="ontv_banner"><a target="_blank" href="http://hk.on.cc/specials/latest.html?key=%E6%99%AE%E9%81%B8%E7%88%AD%E8%AD%B0&location=hk&section=news&lang=zh"><img src="/img/v2/284x57_tc.gif" width="284px"  /></a></div>';	
			//}
			//html += '<div class="ontv_banner"><a target="_blank" href="http://tv.on.cc/live/index.html"><img src="/img/v2/284x57_tc_live_3.gif" width="284px"  /></a></div>';
			//html += '<div class="ontv_banner"><a target="_blank" href="http://hk.on.cc/specials/latest.html?key=%E8%A8%B1%E4%BB%95%E4%BB%81%E6%A1%88&location=hk&section=news&lang=zh"><img src="/img/v2/284x57_tc_live_4.gif" width="284px"  /></a></div>';
			//html += '<div class="ontv_banner"><a target="_blank" href="http://tv.on.cc/live/index.html"><img src="/img/v2/284x57_tc_live_4.gif" width="284px"  /></a></div>';
		}
		//}
			
		$(ONCC.videoFeed.container).find('.videoItem:last').after(html);
	}
}

ONCC.ODNTSNCover = {
	
	container : '#ODNTSNCoverCTN',
	
	init : function() {
		
		$('#ads_large2').after('<div id="ODNTSNCoverCTN"></div>');
		$.ajax({
			type: "GET",
			url: "/hk/bkn/xml/news_headline.xml",
			dataType: "xml",
			success: function(xml) {
				var odn_cover = $(xml).find('headline[type="odn"]').find('pic').text();
				var tsn_cover = $(xml).find('headline[type="tsn"]').find('pic').text();
				
				var odn_html = '<a href="http://orientaldaily.on.cc/"><img src="' + odn_cover + '" class="cover"></a>';
				var tsn_html = '<a href="http://the-sun.on.cc"><img src="' + tsn_cover + '" class="cover"></a>';
				
				$( ONCC.ODNTSNCover.container ).html('<div class="cover" style="margin-bottom:8px;">' + odn_html + '</div><div class="cover"  style="margin-bottom:8px;">' + tsn_html + '</div>');
			}
		});

	},
	
	bind : function() {
		
		function rotateCover() {
			$('#articleHeader .odn.active').fadeOut( "slow", function() {
				$('#articleHeader .odn').addClass('active');
				$(this).addClass('inactive').removeClass('active');
				$('#articleHeader .odn.active').removeClass('inactive');
				$('#articleHeader .odn.inactive').show();
			
			});
			$('#articleHeader .tsn.active').fadeOut( "slow", function() {
				$('#articleHeader .tsn').addClass('active');
				$(this).addClass('inactive').removeClass('active');
				$('#articleHeader .tsn.active').removeClass('inactive');
				$('#articleHeader .tsn.inactive').show();
			
			});
		}
		
		$.ajax({
			type: "GET",
			url: "../bkn/xml/news_headline.xml",
			dataType: "xml",
			success: function(xml) {
				var odn_cover = $(xml).find('headline[type="odn"]').find('pic').text();
				var tsn_cover = $(xml).find('headline[type="tsn"]').find('pic').text();
				
				var odn_html = '<div id="odnHeaderNews" class="item active odn news"><a href="http://orientaldaily.on.cc/"><img src="' + odn_cover + '" class="cover"></a></div>';
				var tsn_html = '<div id="tsnHeaderNews" class="item active tsn news"><a href="http://the-sun.on.cc"><img src="' + tsn_cover + '" class="cover"></a></div>';
				var gendate =  $(xml).find('onccxml').attr('gendate');
				var currentdate = serverTime.substr(0,8);
				var currenttime =  serverTime.substr(8,6);
				
				var visibleTime = '220000';
				if ( ONCC.getNation() == 'hk' ) {
					var buttomTime = '150000';
				} else {
					var buttomTime = '130000';
				}

				if ( ( currentdate > gendate ) || ( currentdate == gendate && serverTime.substr(8,6) > visibleTime ) ) { 
					// visible tsnheader and odnheader
				} else if ( window.location.href.indexOf('cover=true') != -1 || ( currentdate == gendate && serverTime.substr(8,6) < buttomTime) ) {
				
					ONCC.GlobalfocusSectionNews.reservedFocus += 2;
					
					if ( ONCC.getNation() != 'tw' && ONCC.getSection() == 'news' && focus_banner_c == true ) {
						$('#focusNews #focus_banner_c1_CTN:first').before('<div id="articleHeader"><div id="tsnHeader"></div><div id="odnHeader"></div></div>');
					} else {
						$('#focusNews .focusItem:first').before('<div id="articleHeader"><div id="tsnHeader"></div><div id="odnHeader"></div></div>');
					}
					$('#articleHeader').find('#odnHeader').html(odn_html);
					$('#articleHeader').find('#tsnHeader').html(tsn_html);
				
				} else {
				
					$('#focus_banner_4_5_CTN').after('<div id="articleHeader"><div id="tsnHeader"></div><div id="odnHeader"></div></div>');
					$('#articleHeader').find('#odnHeader').html(odn_html);
					$('#articleHeader').find('#tsnHeader').html(tsn_html);
					
				}

				$.ajax({
					type: "GET",
					url: "../bkn/xml/ent_headline.xml",
					dataType: "xml",
					success: function(xml) {
						
						if ( $('#articleHeader').length > 0 ) {
							var odn_cover = $(xml).find('headline[type="odn"]').find('pic').text();
							var tsn_cover = $(xml).find('headline[type="tsn"]').find('pic').text();
							
							var odn_html = '<div id="odnHeaderEnt" class="item odn ent"><a href="http://orientaldaily.on.cc/cnt/entertainment/index.html"><img src="' + odn_cover + '" class="cover"></a></div>';
							var tsn_html = '<div id="tsnHeaderEnt" class="item tsn ent"><a href="http://the-sun.on.cc/cnt/entertainment/index.html"><img src="' + tsn_cover + '" class="cover"></a></div>';
							
							$('#articleHeader #odnHeader').append( odn_html );
							$('#articleHeader #tsnHeader').append( tsn_html );
							
							setInterval( rotateCover, 7 * 1000 ); 
							
						}
						
					},
					error: function () {  
					}
				
				});	
				
			},
			error: function () {  
			}
		});
		
	}
}

ONCC.Specials = {
	item : [],
	isFoundItem : null,
	keyword : '',
	init : function() {
	
	}
}

ONCC.SocialNetwork = {

	container : '#facebookCTN',
	
	init : function() {

		if ( ONCC.getNation() == 'hk' ) {
			var fanspagelink  = 'https://www.facebook.com/onccnews';
			var recommendlink = 'http%3A%2F%2Fhk.on.cc';
		} else {
			var fanspagelink  = 'https://www.facebook.com/twoncc';
			var recommendlink = 'http%3A%2F%2Ftw.on.cc';
		}
		var facebookIframelink = 'https://www.facebook.com/plugins/likebox.php?href=' + fanspagelink + '&width=256&height=500&colorscheme=light&show_faces=false&border_color&stream=true&header=false&appId=133946296451';
		
/* 		var html = '<div id="facebookTab"><div class="tab active" id="fb_fanspage" ></div><div class="tab" id="fb_recommend"></div></div>';
		html += '<div id="container">';
		html += '<div id="fb_fanspage_container" class="container active">';
		html += '<iframe id="facebookIframe" src="' + facebookIframelink + '" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:300px; height:400px;" allowtransparency="true"></iframe>'
		html += '</div>';
		facebookIframelink = 'https://www.facebook.com/plugins/recommendations.php?site=' + recommendlink + '&width=300&height=400&header=true&colorscheme=light&max_age=10';
		html += '<div id="fb_recommend_container" class="container active">';
		html += '<iframe id="facebookIframe" src="' + facebookIframelink + '" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:300px; height:400px;" allowtransparency="true"></iframe>'
		html += '</div>';
		html += '</div>'; */

		/* var html = '';
		//if ( ONCC.getNation() == 'tw') {
		html += '<div id="container">';
		html += '<div class="fb-page" data-href="https://www.facebook.com/twoncc" data-width="298" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/twoncc"><a href="https://www.facebook.com/twoncc">東網台灣</a></blockquote></div></div>';
		
		html += '</div>';
		$(this.container).html(html);
		$(this.container).show(); */
		//}
		/* $('#facebookTab .tab').click( function() {
			
			if ( !($(this).hasClass('active') )) {
				$('#facebookTab .tab').removeClass('active');
				$(ONCC.SocialNetwork.container).find('.container').removeClass('active');
				$(this).addClass('active');
				
				 $(ONCC.SocialNetwork.container).find( '#' + $(this).attr('id') + '_container').addClass('active');
			}
		}); */
	 
	},
	
	fbComments : function() {

		if ( BK_News.toolBar.version == '2.0' ) {
			$('#facebook_comment .header').html('<img src="/img/v2/commentbox_' + ONCC.getNation() + '.jpg"></div><div id="fb-root"></div><div class="fb-comments" data-href="' + 'http://' + document.domain + document.location.pathname.replace('_cn.html','.html') + '" data-numposts="10" data-colorscheme="light">');
		} else {
			
			$('.contentFeature').before('<div id="facebook_comment"></div>');
			$('#facebook_comment').html('<div class="header"><img src="/img/v2/commentbox_' + ONCC.getNation() + '.jpg"></div><div id="fb-root"></div><div class="fb-comments" data-href="' + 'http://' + document.domain + document.location.pathname.replace('_cn.html','.html') + '" data-numposts="10" data-colorscheme="light"></div>');
		//$('#facebook_comment').html('<div class="header"><img src="/img/v2/commentbox_' + ONCC.getLocation() + '.jpg" /></div><fb:comments mobile="false" href="' + 'http://' + document.domain + document.location.pathname.replace('_cn.html','.html') + '" num_posts="5" width="564"></fb:comments>');
			(function(d, s, id) {
			  var js, fjs = d.getElementsByTagName(s)[0];
			  if (d.getElementById(id)) return;
			  js = d.createElement(s); js.id = id;
			  js.src = "//connect.facebook.net/zh_HK/all.js#xfbml=1&appId=133946296451";
			  fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));/**/
			}
		
	},
	
	weiboComments : function() {
		$('.contentFeature').before('<div id="weibo_comment"></div>');
		var url = "http://widget.weibo.com/distribution/comments.php?width=0&url=http%3A%2F%2Fcn.on.cc%2Fcn%2Fbkn%2Fcnt%2Fnews%2F20140523%2Fbkncn-20140523083109152-0523_05011_001.html&appkey=1008671919&language=zh_cn&dpc=1";
		$('#weibo_comment').html('<iframe id="WBCommentFrame" src="' + url + '" scrolling="no" frameborder="0" style="width:100%"></iframe>');

		window.WBComment.init({
			"id": "WBCommentFrame"
		});
	}
	
}

ONCC.yahooSearch = {
	
	container : '#yahooSearchCTN',
	
	init : function() {
		$(this.container).find('.title').html('<img src="/img/v2/icon_pic.png" style="background-color: #ff6600;">' + $ONCC.lang.translate('&#x65B0;&#x805E;&#x641C;&#x5C0B;'));
		$(this.container).find('.content').html('<iframe scrolling="no" height="23px" frameborder="0" width="280px" src="http://home.on.cc/adv/web/corp/js/searchbox_yahoo.html?gfghf=gfghdf&amp;tsn_search"></iframe>');
		$(this.container).show();
		//$('#next_with_superbanner2').before('')
		//http://home.on.cc/adv/web/corp/js/searchbox_yahoo.html?&tsn_search
	}, resize : function( container , height )  {
		$(container).css('height',height);
		
	}	
}	

ONCC.yahooOvertune = {
	
	container : '#yahooOvertuneCTN',
	containerID : 1,
	catID : ['food','finance','sports','investment','fashion','education','auto','health','property','travel'],
	catType : ['hk_t1_default_business','hk_t1_default_news','hk_t1_default_entertainment','hk_t1_default_finance','hk_t1_default_travel','hk_t1_default_fashion'],
	catIDCount : 0,
	catTypeCount : 0,
	rsultCount : 0,
	data : '',
	
	init : function() {
	
		this.catIDCount = Math.floor(Math.random() * this.catID.length);
		
		var html = '';
		html += '<iframe id="ysmIframe" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" width="312" src="/js/v2/iframe_ysm_utf8.html?size=narrow&amp;key=news&amp;url=http://orientaldaily.on.cc/"></iframe>';
		//$(this.container).html(html);
		//$(this.container).show();
	},
	initInList : function() {

		var catTypeRand = this.catType[Math.floor(Math.random() * this.catType.length)];
		
		if (  this.rsultCount + 1 > 2 ) {
			
			this.data = '';
			this.rsultCount = 0;
			
			if ( this.catIDCount >  this.catID.length - 2 ) {
				this.catIDCount = 0;
			} else {
				this.catIDCount++;
			}
			
		} else {
			this.rsultCount++;
		}

		var html = '';	
		if ( ONCC.getSection() == 'news' ) {
			html += '<iframe id="ysmIframe' + ONCC.yahooOvertune.containerID + '" class="ysmIFrame" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" width="608" height="0" src="/js/v2/iframe_ysm_list.html?containerID='+ONCC.yahooOvertune.containerID+'&mkt=' + ONCC.getNation() +'&type=list&catIDCount=' +  this.catID[ this.catIDCount] + '&catTypeCount=' +  catTypeRand + '&resultCount=' +  this.rsultCount + '&size=narrow&url=http://' + ONCC.getNation() + '.on.cc/"></iframe>';
			ONCC.yahooOvertune.containerID++;
		}
		return '';
		//return html;
	
	}, resize : function( container , height )  {
		$(container).css('height',height);
	}, setData : function( data ) {
		this.data = data;
	}, getData : function() {
		return this.data;
	}
}	

ONCC.footer = {
	init: function() {
		var sect = 'oncc';
		var footer = $('#footer');
		//footer.find('div.menu').html($ONCC.footer.getMenuList(sect).join(' | '));
		footer.find('div.copyright').html($ONCC.footer.getCopyRight(sect));
	}
};

ONCC.TopBar = {
	
	init : function() {
		
		var _this = this;
		var headNavLine = '';
		//<div class="searchONCC"><input type="text" style="border:0" id="searchBox-keyword" onfocus="onKeywordFocus(this)" onblur="onKeywordBlur(this)" name="sk" class=""></div>
		headNavLine += '<div id="fix-top"><div class="headNavLine" style="display:none">';
				//headNavLine += '<div class="siteWidth"  style=""><div id="headerLogo"><img src="http://on.cc/img/oncc_logo_v2.png" style=""><img id="odnlogo" src="http://on.cc/img/oncc_name.png"></div>';
				headNavLine += '<ul id="siteChannel3">';
				headNavLine += '<div class="topsiteChannel"><li class="ontv"><img src="/img/v2/logo.png" width="131px" /></li>';
				headNavLine += '<div class="topsiteChannel"><li class="ontv ">9月19日 (五)</li>';
				
				headNavLine += '<li class="ontv "></li>';
				headNavLine += '<li class="ontv " style="margin-left:4px;">30</li>';
				headNavLine += '<li class="ontv "><img src="http://home.on.cc/adv/web/corp/img/oncc_deg_v2.gif"></li>';
				
				headNavLine += '<li class="ontv "><div id="focusMessage" style="background-image:url(/img/v2/ticker_bg.png)"><div class="label" style="">焦點</div><div id="messageContainer" style="overflow: hidden;height: 34px;"><div class="message" style=""><a href="/hk/bkn/cnt/news/20140923/bkn-20140923155639139-0923_00822_001.html">普選爭議：罷課第二天 4千人參加講座集會</a></div><div class="message" style="">許仕仁案：許指郭炳江應允顧問費每年最少千五萬</div><div class="message" style="">荃灣大命南亞童險被小巴輾斃</div><div class="message" style="">76歲周洋城旺角失蹤</div></div></div></li>';
				headNavLine += '<li class="ontv btn" style="margin:0px"><img src="/img/v2/btn_search.png" /></li>';
		
				headNavLine += '<li class="ontv btn" style="margin:0px"><img src="/img/v2/btn_fb.png" /></li>';
			
				
				//headNavLine += '<li id="zh_lang" class="ontv btn txt on">繁</li><li id="zh_lang" class="ontv btn txt on">|</li><li id="cn_lang" class=" ontv btn txt  ">简</li><li id="zh_lang" class="ontv btn txt on">|</li><li id="cn_lang" class=" ontv btn txt  ">港澳版</li>';
				headNavLine += '<li id="zh_lang" class="ontv btn txt on">大事件追蹤 <span style="background-color: #ff6600;padding: 0px 2px;border: 1px solid #ff6600;border-radius: 9px;">2</span></li>';
				headNavLine += '</div>';
				headNavLine += '</ul>';
				headNavLine += '</div>';
				
		headNavLine += '</div>	</div>';
		
		$('#header').before( headNavLine );
		
		$('.headNavLine').css('background-color','#6D6F71');
		$('.headNavLine').css('border-bottom','#6D6F71 1px solid');
		$('.headNavLine').css('box-shadow','0px 3px 9px #000');

	
		$(function(){
			// 先取得 .abgne-news-scroll ul 及 li 的高度
			// 並設定訊息移動, 淡入及輪播時間
			var $news = $('#focusMessage #messageContainer'), 
				scrollHeight = $news.find('.message').outerHeight(true), 
				scrollSpeed = 600, fadeInSpeed = 600, 
				timer, speed = 3000;
		 
			// 用來控制輪播用
			function newsScroll(){
				// 先把 .abgne-news-scroll ul 往下移
				$news.animate({
					top: scrollHeight + 'px'
				}, scrollSpeed, function(){
					// 當 .abgne-news-scroll ul 移動到定點後
					// 先找出最後一個 li
					var $last = $news.find('.message:last');
					// 複製一份並先隱藏起來
					// 接著把它加到 .abgne-news-scroll ul 中的第一個項目
					// 最後用淡入的方式顯示, 當顯示完後繼續輪播
					$last.clone().hide().prependTo($news).fadeIn(fadeInSpeed, function(){
						timer = setTimeout(newsScroll, speed);
					});
					// 馬上把 .abgne-news-scroll ul 移到 top 等於 0 的位置
					$news.css('top', 0);
					// 把 $last 移除掉
					$last.remove();
				});
			}
		 
			// 啟動輪播計時器
			timer = setTimeout(newsScroll, speed);
		});

		/* $('#page_left_fixed_CTN ul:nth-child(4)').remove();
		$('#page_left_fixed_CTN ul:nth-child(4)').remove();
		$('#page_left_fixed_CTN ul:nth-child(4)').remove();
		$('#page_left_fixed_CTN ul:nth-child(4)').remove(); */
		/* 
		$('#page_left_fixed_CTN ul:first').remove();
		$('#page_left_fixed_CTN ul:first').remove();
		$('#page_left_fixed_CTN ul:first').remove();
		$('#page_left_fixed_CTN ul:first').remove();
		$('#page_left_fixed_CTN ul:last').remove();
		$('#page_left_fixed_CTN ul:last').remove(); */
	 
		_this.event();
	},
	
	event : function() {
		
		var btnMargin = 0;
		var leftTop = 0;
		var leftFixed = false;
		var rightTop = 0;
		var rightSideHeight = 0;
		var scrollTop = $(this).scrollTop();
		
		if ( leftTop == 0 ) {
			leftTop =  $('#sideLeft').position().top;
		} 
				
		if ( scrollTop > leftTop + $('#sideLeft').height() ) {
			if ( $('#sideLeft').css('position') != 'fixed' ) {
				$('#sideLeft .fixHidden').hide();
				$('#sideLeft').css('position','fixed');
				$('#sideLeft').css('top','-' + $('#sideLeft').height() + 'px');
				$('#sideLeft').stop().animate({top: '-' + ($('#sideLeft #languageInfo').position().top - 16 - $('.headNavLine').height() ) + 'px'}, 500)
			}
			
			//-123
		} else {
			$('#sideLeft').css('position','relative');
			$('#sideLeft .fixHidden').show();
			$('#sideLeft').css('top','auto');
		}
		
		if ( scrollTop > $('#sideLeft #languageInfo').position().top  ) {
			if ( $('#fix-top .headNavLine').css('position') == 'relative' ) {
				$('#fix-top .headNavLine').css('position','fixed');
			
				$('.headNavLine').show();
				$('ul#siteChannel2').stop().animate({"margin-left": "105px"}, 500);
				
				if ( location.href.indexOf('m1d') != -1 ) {
					$('#sideLeft').css({'position':'fixed'});
					$('#sideLeft').css({'top':'-124px'});
				}
			}
		} else {
			//$('#sideLeft .mainmenu').slideUp('fast')
			if (  $('#fix-top .headNavLine').css('position') == 'fixed' ) {
				$('#fix-top .headNavLine').hide();
				$('#fix-top .headNavLine').css('position','relative');
		
				//$('.headNavLine').stop().animate({height: "80px"}, 500)
				$('ul#siteChannel2').stop().animate({"margin-left": "167px"}, 500);
			
				if ( location.href.indexOf('m1d') != -1 ) {
					$('#sideLeft').css({'position':'relative'});
					$('#sideLeft').css({'top':'0px'});
				}
			
			}
		}
				
				
	}
	
	
	
}

/*
ONCC.searchNewsByDay = {
	init:function(){
		var _this = this;
		if(window.location.href.indexOf('newslist.html') != -1 && $.urlParams.get('sect') != null && $.urlParams.get('date') != null && $('#dayNews.inpage').length > 0){
			var target = $('#dayNews.inpage');
			var url = NEWS_PATH + '/js/' + $.urlParams.get('sect') + '_fullList' + $ONCC.curLang  + '.js';
			var listLoader = new $ListLoader(url);
			var html = '';
			var news = '';
			html += '<div id="tabContent"><div class="lastest">';
			html += '</div></div>';
			$(target).html(html);
			
			listLoader.callbacks.push(function (data) {
				if ( data != null ) {
					$.each(data,function(){
						var d1 = $.urlParams.get('date').split('-');
						d1 = d1[0]+'-'+digitPad('0',d1[1],2)+'-'+digitPad('0',d1[2],2);
						if(this.pubDate.indexOf(d1) != -1){
							if($(target).find('span#'+this.articleId).length > 0){return true;}
							news = '<span id="'+this.articleId+'">'+ONCC.GlobalnewsList.focusbox(this)+'</span>';
							$(target).find('#tabContent .lastest').append(news);
						}
					})
				}
			});
			listLoader.load();
		}
	}
}
*/
function digitPad (symbol, val, len) {
	var str = String(val);
	while (str.length < len) { str= symbol+str; }
	return str;
}

if(typeof ONCC.sCalender == 'undefined'){
	//document.write("<link rel='stylesheet' type='text/css' href='/css/v2/oncc-calender.css' />");
	//document.write('<script src="/js/v2/oncc-calender.js" type="text/javascript"></script>');
}

/* S:document ready */


if ( ONCC.getSection() == 'commentary' ) {
	document.write('<link rel="stylesheet" type="text/css" href="/css/v2/oncc-main_comm.css" media="all">');
	document.write('<script src="/js/v2/oncc-global_commentary.js" type="text/javascript"></script>');
	document.write('<script src="/js/v2/oncc-commentary_hk.js" type="text/javascript"></script>');
	
	if ( location.href.indexOf('weibocomment=true') != -1 ) {
		document.write('<script src="http://tjs.sjs.sinajs.cn/open/widget/js/widget/comment.js" type="text/javascript" charset="utf-8"></script>');
	}
}


if ( ONCC.getLevel() == 'content') {
	//document.write('<script src="/js/v2/oncc-body-script.js" type="text/javascript"></script>');
}


$(document).ready(function() {
	
	
	/*	menu build */
	var _html = '';
	if ( ONCC.getLevel() == 'main' ) {
		//&& 
		_html += '<div class="relateKewordHeader"><img src="/img/v2/toprank_' + ONCC.getNation() + $ONCC.curLang + '.jpg"></div><div id="hotnewsCTN"><div id="hotnewsInner"></div><div id="hotnewsInnerPage"></div></div>';
		if ( ONCC.getSection() != 'commentary' && ONCC.getSection() != 'weather' ) {
			_html += '<div class="relateKewordHeader"><img src="/img/v2/sp_' + (( ONCC.getSection() == 'lifestyle') ? 'life_' : '' ) +  ONCC.getNation() + $ONCC.curLang + '.jpg"></div><div id="focusnewsCTN"><div id="focusnewsInner"></div><div id="focusnewsInnerPage"></div></div>';
		}
		if ( ONCC.getSection() == 'news' || ONCC.getSection() == 'finance' ) {
			$('#ireport').before( _html );
			//$('#urgentNews').after('<div class="relateKewordHeader"><img src="/img/v2/toprank_' + ONCC.getNation() + $ONCC.curLang + '.jpg"></div><div id="hotnewsCTN"><div id="hotnewsInner" target="1"></div></div>');
		} else if( ONCC.getSection() == 'news' ) {
			$('#ireport').before( _html );
		} else {
			$('#yahooSearchCTN').before( _html );
		}
	}
	
	if ( ONCC.getNation() == 'hk' && ONCC.getLocation() == 'hk' ) {
		ONCC.yahooSearch.init();
	}

	if ( ONCC.getNation() == 'hk' ) {
		ONCC.tvLive.init();
	}
	
	if ( $.urlParams.get('lineheight') != '' ) {
		$('#tabContent').css('line-height', $.urlParams.get('lineheight')+'px');
	}
	if ( $.urlParams.get('spacing') != '' ) {
		$('#tabContent').css('letter-spacing',$.urlParams.get('spacing')+'px');
	}
	if ( $.urlParams.get('font-size') != '' ) {
	
		setTimeout(function(){ 
			$('#tabContent').css('font-size',$.urlParams.get('font-size')+'px');
			$('.focusItem a').css('font-size',$.urlParams.get('font-size')+'px');
			$('#urgentNews a').css('font-size',$.urlParams.get('font-size')+'px');
			$('.breakingNewsContent p').css('font-size',$.urlParams.get('font-size')+'px');
			$('#focusNews .focusItem .focusTitle').css('line-height',$.urlParams.get('font-size')+'px');
		 }, 5000);
	}

	if ( ONCC.getSection() == 'commentary' && ONCC.getLocation() == 'tw' || ONCC.getSection() == 'commentary' && ONCC.getLocation() == 'cn') {
		 //ONCC.commentaryBox.init(); 
	}
	if ( location.href.indexOf('hktb') != -1 ) {
		ONCC.GlobalnewsList.addNewsItem ( '為你未來退休生活作準備','恒生強積金客戶專享更優惠基金管理費。投資涉及風險，詳情請按此。','http://ad6.on.cc/web/html/HSBX/2015/0321/133x94.jpg','{clickurl}' ,'xxxxx' );
	}
	if ( location.href.indexOf('newlayout') != -1 ) {
		var headNavLine = '';
		//<div class="searchONCC"><input type="text" style="border:0" id="searchBox-keyword" onfocus="onKeywordFocus(this)" onblur="onKeywordBlur(this)" name="sk" class=""></div>
		headNavLine += '<div id="fix-top"><div class="headNavLine">';
		headNavLine += '<div class="siteWidth"  style=""><div id="headerLogo"><img src="http://on.cc/img/oncc_logo_v2.png" style=""><img id="odnlogo" src="http://on.cc/img/oncc_name.png"></div>';
		headNavLine += '<ul id="siteChannel2">';
		headNavLine += '<div class="topsiteChannel"><li class="ontv"><a href="http://tv.on.cc/hk/index.html" class="">東網電視</a></li>';
		headNavLine += '<li class="odn"><a href="http://home.on.cc/epaper/home.html?pub=odn" class="">東方日報 - <span class="">電子報</span></a></li>';
		headNavLine += '<li class="tsn"><a href="http://home.on.cc/epaper/home.html?pub=tsn" class="">太<span class="">陽</span><span class="">報</span> - <span class="">電子報</span></a></li>';
		headNavLine += '<li class="goodnews"><a href="http://the-sun.on.cc/cgi-bin/good_news.cgi" class="">好<span class=""></span><span class=""></span><span class=""></span><span class=""></span>報 - <span class="">電子報</span></a></li>';
		headNavLine += '<li class="odnepaper"><a href="http://orientaldaily.on.cc" class="">東方日報 - <span class="">網<span class=""></span><span class=""></span>頁</span></a></li>';
		headNavLine += '<li class="tsnepaper"><a href="http://the-sun.on.cc" class="">太<span class="">陽</span><span class="">報</span> - <span class="">網<span class="char"></span><span class=""></span>頁</span></a></li>';
		headNavLine += '<li class="money18"><a href="http://money18.on.cc" class=""><span class="">東網</span>Money<span class="">18</span></a></li></div>';
		
		headNavLine += '<div class="other"><li><a href="http://flashon.com" class="flashon">FLASHoN.com</a></li>';
		headNavLine += '<li><a href="http://flashon.com/emagazine/" class="flashon">FLASHoN-<span class="">電子版</span></a></li>';
		headNavLine += '<li><a href="http://home.on.cc/epaper/home.html?pub=spe" class="special">特<span class=""></span><span class=""></span><span class=""></span><span class=""></span>刊 - <span class="">電子版</span></a></li>';
		headNavLine += '<li><a href="http://racing.on.cc" class="racing">馬經</a></li><li><a href="http://football.on.cc" class="football">波經</a></li>';
		headNavLine += '<li><a href="http://luxe.on.cc" class="luxelife"><span class="luxelife_1"></span></a></li>';
		headNavLine += '<li><a href="http://starhall.on.cc" class="starhall"><span class="starhall_1"></span></a></li>';
		headNavLine += '<li><a href="http://p18.on.cc" class="property">搵樓18</a></li>';
		headNavLine += '<li><a href="http://classified.on.cc" class="classified">分類廣告</a></li>';
		headNavLine += '<li><a href="http://opg.on.cc/tc/odn_charity.html" class="charity">慈善基金</a></li></div></ul>';
		headNavLine += '<div class="nowSitesTools">';
		headNavLine += '<div><a href="http://now.com/home/search?portal=news&amp;type=all" class="search"></a></div>';
		headNavLine += '</div></div>';
				
		headNavLine += '</div>	</div>';
		
		$('#header').before( headNavLine );
		
		$('.headNavLine').css('background-image','url("/img/v2/bar.png")');
		
		
		$('#page_left_fixed_CTN ul:first').remove();
		$('#page_left_fixed_CTN ul:first').remove();
		$('#page_left_fixed_CTN ul:first').remove();
		$('#page_left_fixed_CTN ul:first').remove();
		$('#page_left_fixed_CTN ul:last').remove();
		$('#page_left_fixed_CTN ul:last').remove();
	}
	
	//if ( location.href.indexOf('new3layout') != -1 ) {
	if ( true ) {
		$('#sideLeft').after('<div id="moreMenuUp" style="display:none; position:fixed;"><span id="nav"><img src="/img/v2/menu_up.png" /></span></div><div id="moreMenu" style="display:none; position:fixed;"><span id="nav"><img src="/img/v2/menu_down.png" /></span></div>');
		
		var scrollLoopId;

		$('#moreMenu').hover( function() {
		 
			 scrollLoopId =  setInterval( 
				function() {
					if ( parseInt( $('#sideLeft').css('height').replace('px',''),10) - 20  < $('#sideLeft ul:last').position().top + parseInt($('#sideLeft ul:last').css('height'),10)  ) {
						$('#sideLeft').css('height', parseInt( $('#sideLeft').css('height').replace('px',''),10) + 2);
						$('#sideLeft').css('top',  parseInt(  $('#sideLeft').css('top').replace('px',''),10)  - 2);
					}
				}
			 , 5) ; 				
		
		}, function() {
		
			clearInterval(scrollLoopId);
		});
			$('#moreMenuUp').hover( function() {
		 
			 scrollLoopId =  setInterval( 
				function() {
					 if (   parseInt(  $('#sideLeft').css('top').replace('px',''),10) < 0 ) {
						$('#sideLeft').css('height', parseInt( $('#sideLeft').css('height').replace('px',''),10) - 2);
						$('#sideLeft').css('top',  parseInt(  $('#sideLeft').css('top').replace('px',''),10) + 2);
					 }
				}
			 , 5) ; 				
		
		}, function() {
		
			clearInterval(scrollLoopId);
		});
	
	}
	
	
	
	if ( ONCC.getSection() != 'commentary' && ONCC.getSection() != 'lifestyle' && ONCC.getLevel() == 'main' ) {
		ONCC.MainPage.init();
	}
	/* if ( ONCC.getLevel() == 'main' && window.location.href.indexOf('entertainment/wallpaper') != -1) {
		$('.wallpaper_box').after('<div id="ontvVideoCTN2" style="margin-top:8px"><a href="http://tv.on.cc/index.html?s=245" target="_blank"><img src="/img/v2/oncc_baby_video' + $ONCC.curLang + '.jpg" /></a></div>');
	} */

	// init urchin library
	if (typeof Urchin != 'undefined') {
		Urchin.content_view( window.location.href)
	}
	
	ONCC.footer.init();

	// urchin
	if ( ONCC.view == 'm') {
		if ( ONCC.from == 'b' ) {
			Urchin.label_view( 'html','broswerview','mview' );
		} else {
			Urchin.label_view( 'html','mobileview','mview' );
		}
	} else {
		Urchin.label_view( 'html','broswerview','dview' );
	}

	// init facebook fanpage
	if ( ONCC.getLevel() == 'content' && ( ONCC.getSection() == 'news' || ONCC.getSection() == 'commentary' || ONCC.getSection() == 'finance' ) && ( ONCC.getNation() == 'hk' || ONCC.getNation() == 'tw' ) ) {
		//ONCC.SocialNetwork.init();
	}
	
	// init yahoo overtune
	if ( ONCC.getNation() == 'hk' ) {
		ONCC.yahooOvertune.init();
	}
	
	ONCC.toTop.init();
	
	if (  ONCC.getNation() == 'hk' && ONCC.getLevel() == 'main') {
		ctMarkSix.load();
		ONCC.Polling.init();
	}
	if ( ONCC.getLevel() == 'main' && window.location.href.indexOf('/wc2014/') == -1) {
		ONCC.eventNews.initMain();
	}	
	
	if  ( ONCC.getLevel() == 'main' &&  ( ONCC.getSection() == 'news' || ONCC.getSection() == 'entertainment' || ONCC.getSection() == 'sport' || ONCC.getSection() == 'lifestyle' || ONCC.getSection() == 'finance'  )  )  { 
		ONCC.FocusNews.initContent();
	}
	if  ( ONCC.getLevel() == 'main' ) {
	ONCC.HotNews.initContent();
	}
	
		
	if ( ONCC.getNation() == 'cn' && ONCC.getLocation() == 'cn' && ONCC.getSection() == 'commentary' && ONCC.getLevel() == 'main' ) {
		ONCC.ODNTSNCover.init();
	} else if ( ONCC.getLocation() == 'hk' &&  ONCC.getSection() == 'news' && ONCC.getLevel() == 'main'  ){
		ONCC.ODNTSNCover.bind();
	}
	
	ONCC.videoFeed.init();

	/* ONCC.babyList.init(); */
	// for 繁簡轉換
	ONCC.sitemap.init();
	
	if ( $('#languageInfo .txt').length > 0 ) {
	
		$('#languageInfo .txt').not('#region_change').click( function(){
			
			if ( $(this).text() == '繁' ) {
				
				$ONCC.cookie('lang','zh', { path:'/'});
				
				if ( $ONCC.curLang == '_cn' ) {
					var url = '';
					
					if ( window.location.href.indexOf('index.html') == -1 && window.location.href.indexOf('newslist.html') == -1) {
						url = window.location.href.replace('_cn.html','.html');
						url = url.replace('?cn=true','?zh=true');
						window.location = url;
					} else {
						window.location = window.location.href.replace('?zh=true','').replace('?cn=true','');
					}	
				}
				
			} else {
				$ONCC.cookie('lang','cn', { path:'/'});
				if ( $ONCC.curLang != '_cn' ) {
					if ( /*window.location.href.indexOf('index.html') == -1 &&*/ window.location.href.indexOf('newslist.html') == -1 ) {
						if ( ONCC.getLevel() == 'main' && window.location.href.indexOf('/index.html') == -1 ) {
							window.location =  window.location.href + 'index_cn.html';
						} else {
							window.location = window.location.href.replace('.html','_cn.html');
						}
					} else {
						window.location = window.location.href.replace('?zh=true','').replace('?cn=true','');
					}
				}
			}
			
		});
	}

	if (  ONCC.getSection() != 'weather' ) {
		if($('#region_change').length>0){
			var menu_out = 0;
			$('#region_change').hover(function(){
				clearTimeout(menu_out);
				$(this).css('width','75px');
				$('#region_menu').css('display','block');
			},function(){
				clearTimeout(menu_out);
				var _this = this;
				menu_out = setTimeout(function(){
					$(_this).css('width','55px');
					$('#region_menu').css('display','none');
				},1000);
			});
		}
	} else {
		$('#tab #focusnewsTab').hide();
		$('#tab #hotnewsTab').hide();
	}
	
	// for ad 
	if ( ONCC.getSection() == 'ad' || window.location.href.indexOf('/sitemap') != -1) {
		$('#region_menu #region_tw a').attr('href','http://tw.on.cc/tw/news/index.html');
		$('#region_menu #region_cn a').attr('href','http://cn.on.cc/hk/news/index.html?cn=true');
	}
/* 	
	if (ONCC.getLevel() == 'main' && ONCC.getLocation() == 'hk' && ONCC.getNation() == 'hk' && ONCC.getSection() == 'news' ) {
		$('#ads_large2').after('<div id="ontvad" style="margin-bottom:8px;"></div>');
		$('#ontvad').html('<a href="http://tv.on.cc/index.html?s=233" target="_blank"><img src="/ad/macauce2014/banner.jpg" /></a>');
	} */

	/* if ( ONCC.getLevel() == 'main' && ( ONCC.getSection() != 'sport' && ONCC.getSection() != 'entertainment' && ONCC.getSection() != 'lifestyle' ) ) {
		ONCC.autoFitRight();
	} */
	
	if ( ONCC.view == 'm' ) {
		ONCC.autoFitRight( false , false );
	} else {
		if ( ONCC.getLevel() == 'main' ) {
		
			if (  ( ONCC.getSection() == 'sport' || ONCC.getSection() == 'entertainment' || ONCC.getSection() == 'lifestyle' ) ) {
				ONCC.autoFitRight( true , false );
			} else {
				ONCC.autoFitRight( true , true );
			}
		} else {
			ONCC.autoFitRight( true , true );
		}
	}
	

	/* if($ONCC.curLang == '_cn'){
		$('.linking.root.title.circle.level1.hk_sport').css("background-image","url('http://hk.on.cc/img/v2/sport_menu_btn_cn.jpg')");
	} */
	
});
/* S:document ready */

/* E:global function */
