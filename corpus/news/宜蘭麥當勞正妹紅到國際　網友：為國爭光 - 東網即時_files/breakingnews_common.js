var title = document.title;

$writeScript('/specials/oncc-specials.js');


// JavaScript Document
document.write('<link rel="shortcut icon" href="/favicon.ico"> ');
//Common Function
if (typeof BK_News === 'undefined') {
	BK_News = {};
}

// imgmask plugin
(function($){
	$.fn.imgmask = function(maskStyle) {
		var $settings = {width:'100px', height:'100px'}, $fadeInSpeed = 50;
		if (maskStyle) {$.extend($settings, maskStyle)}
		return this.each(function(){
			var $this = $(this);
			$this
				.hide()
				.load(function(evt){
					var $this = $(evt.target);
					if ( $ONCC.corpBar.getCurrentSection() == 'commentary') {
						var imgmaskwidth = 580;
					} else {
						var imgmaskwidth = 608;
					}
					
					
					$w = $this.width(), $h = $this.height();
					$w = imgmaskwidth;
					$h = $this.height() * imgmaskwidth / $this.width();
					$mask = $this.wrap('<div />').parent().css($.extend($settings,{overflow:'hidden'})).attr('class','imgmask');

					$mw = $mask.width(), $mh = $mask.height();
					
					var imgwidth = '';
					var imgheight = '';
					
					if ($h >= $w){
						
							if(Math.round($h*$mw/$w)>=$mh){
								imgcss = 'width:'+$mw+'px, height:'+Math.round($h*$mw/$w)+'px';
								imgwidth = $mw;
								imgheight = Math.round($h*$mw/$w);
								maskheight = $mh;
							}else{
								imgcss = 'width:'+Math.round($w*$mh/$h)+'px, height:'+$mh+'px';
								imgwidth = Math.round($w*$mh/$h);
								imgheight = $mh;
								maskheight = $mh;
							}
					}else{
							if ((Math.round($w*$mh/$h)>=$mw) && ($h >= $mh) && ($mw > 100)){
								imgcss = 'width:'+Math.round($w*$mh/$h)+'px, height:'+$h+'px';
								imgwidth = Math.round($w*$mh/$h);
								//imgheight = $h;
								imgheight = $mh;
								maskheight = $mh;
							}else{
								imgcss = 'width:'+$mw+'px, height:'+Math.round($h*$mw/$w)+'px';
								//imgwidth = $mw;
								if ($mw >= imgmaskwidth){
									
									if ($w < imgmaskwidth) $w = imgmaskwidth; //slim
									
									imgwidth = $w
								}else{
									imgwidth = Math.round($w*$mh/$h);
								}
								
								if ($h <= $mh ){
									maskheight = $h;
								}else{
								//imgheight = $h;
								//maskheight = $mh;
								//imgheight = Math.round($h*$mw/$w);
									maskheight = Math.round($h*$mw/$w);
								}
							}
					}
					
					//auto height
					maskheight = 'auto';
					
					var cssObj = {
						'width' : imgwidth,
						'height' : imgheight
   					 }
					
					if ($mask.css('width') != '100px' && $mask.css('height') != '100px') {
						$mask = $this.parent().css($.extend($settings, {
							overflow: 'hidden',
							height: maskheight
						})).attr('class', 'imgmask');
					} 
					 
					$this.css( cssObj
							  
					).fadeIn($fadeInSpeed);

				})
				.attr('src', $this.attr('original'));
				
				
				if (   window.location.href.indexOf('from=webview') == -1 ) {
				
					if ( !detectmob() ){
						if ( $('.thickbox:first').attr('href') != $(this).closest('.thickbox').attr('href') ) {
							$(this).closest('.thickbox').hide();
						}
					}
				}
		});
	}
}(jQuery));


(function($) {
		  
	$.fn.thickbox = function(p_opts) {
		//var opts = (p_opts != null) ? p_opts : $.fn.thickbox.defaults;
		var opts = $.extend({}, $.fn.thickbox.defaults, p_opts);
		return this.each(function() {
			$(this).unbind('click.thickbox').bind('click.thickbox', {tbOptions:opts, tbAnchor:this}, function(e) {
				e.preventDefault();
				$(e.target).blur();
				$.thickbox.show(e.data.tbOptions, $(e.data.tbAnchor));
				return false;
			});
		});
		return this;
	};
	
	/* Public Methods */
	$.thickbox = {};
	
	$.thickbox.remove = function() {
		tb_remove();
	};
	
	$.thickbox.show = function(tbOptions, target) {
		tb_show(tbOptions, target);
	};
	
	$.thickbox.parseQuery = function(query) {
		var Params = {};
		if ( ! query ) {return Params;}// return empty object
		var Pairs = query.split(/[;&]/);
		for ( var i = 0; i < Pairs.length; i++ ) {
			var KeyVal = Pairs[i].split('=');
			if ( ! KeyVal || KeyVal.length != 2 ) {continue;}
			var key = unescape( KeyVal[0] );
			var val = unescape( KeyVal[1] );
			val = val.replace(/\+/g, ' ');
			Params[key] = val;
		}
		return Params;
	};
	
	/* Inner Methods */	
	function tb_show(tbOptions, target) {
		try {
			if (typeof document.body.style.maxHeight === 'undefined') {//if IE 6
				if (document.getElementById('TB_HideSelect') === null) {//iframe to hide select elements in ie6
					$('body').append('<iframe id="TB_HideSelect"></iframe><div id="TB_overlay"></div><div id="TB_window"></div>');
				}
			} else {//all others
				if(document.getElementById('TB_overlay') === null){
					$('body').append('<div id="TB_overlay"></div><div id="TB_window"></div>');
				}
			}
			
			if (tb_detectMacXFF()) {
				$('#TB_overlay').addClass('TB_overlayMacFFBGHack');//use png overlay so hide flash
			} else {
				$('#TB_overlay').addClass('TB_overlayBG');//use background and opacity
			}
			
			$(tbOptions.hiddenObjSelector).css('visibility','hidden');
			
			$("#TB_window").append(tbOptions.innerHTML(target));
			$("#TB_window").css('display','block');
			$("#TB_window").data('tbOptions',tbOptions);
			tb_position();

			document.onkeyup = function(e){
				if (e == null) { // ie
					keycode = event.keyCode;
				} else { // mozilla
					keycode = e.which;
				}
				if(keycode == 27){ // close
					tb_remove();
				}	
			}
			
			//Sim
			$('#TB_overlay').click(function(){
				tb_remove();	
			});
		} catch (e) {
			alert(e);
		}
	};
	
	function tb_detectMacXFF() {
		var userAgent = navigator.userAgent.toLowerCase();
		if (userAgent.indexOf('mac')!=-1 && userAgent.indexOf('firefox')!=-1) {
			return true;
		}
	};
	
	function tb_position() {
		var tbOptions = $('#TB_window').data('tbOptions');
		var scTop = $(document).scrollTop();
		var adjTop = $(window).height() - tbOptions.height;
		if (adjTop < 0)
			adjTop = scTop;
		else
			adjTop = scTop+Math.round(adjTop/2);
		
		if ($(window).width() > tbOptions.width) {
			$('#TB_window').css({left:'50%', marginLeft: '-' + parseInt((tbOptions.width / 2),10) + 'px', width: tbOptions.width + 'px'});
		} else {
			$('#TB_window').css({left:'0px', marginLeft:'0px'});
		}
		$('#TB_window').css({marginTop: adjTop + 'px'});
	};
	
	function tb_remove() {
		var tbOptions = $('#TB_window').data('tbOptions');
		$('#TB_window').css('display','none');
		$('#TB_window,#TB_overlay,#TB_HideSelect').trigger('unload').unbind().remove();
		$(tbOptions.hiddenObjSelector).css('visibility','visible');
	};
	
	$.fn.thickbox.defaults = {
		width :	980,
		height : 600,
		hiddenObjSelector : 'object, embed',
		innerHTML : function(target) {return 'Missing Content!!!'}
	};
	
})(jQuery)
;


BK_News.section = {
	hknews : { highlight : '/js/bknHighlight_news' + $ONCC.curLang + '.js', url : '/js/news_fullList' + $ONCC.curLang + '.js' , url_short : '/js/news_shortList' + $ONCC.curLang + '.js' , url_other : '/js/news_otherList' + $ONCC.curLang + '.js' , code : '822', name : 'hknews', isFirst: true, codeName:'港聞', icon: '/images/thumb_hknews.jpg'}
};


/* 
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
$trim = function(str) {
 return str.replace(/^\s+|\s+$/g,"");
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

var $cookies = {
	data:{},
	init: function() {
		var cks = document.cookie.split(';');
		var l = cks.length;
		while (l--) {
			var cksSet = cks[l].split('=');
			this.data[$.trim(cksSet[0])] = decodeURIComponent(cksSet[1]);
		}
	},
	val: function(key, val, options) {
		if (typeof val !== 'undefined') {
        	if (!options) options = {};
	        var expires;
	        var date;
			var erase = false;
            if (typeof options.expires === 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
				if (options.expires === -1) {
					erase = true;
				}
            } else {
                date = options.expires;
            }
            if (typeof date !== 'undefined') {
                expires = '; expires=' + date.toGMTString(); // use expires attribute, max-age is not supported by IE
            } else {
                expires = '; expires=' + 0;
            }
	        var path = options.path ? '; path=' + (options.path) : '/';
	        var domain = options.domain ? '; domain=' + (options.domain) : '';
			//var domain = options.domain ? '; domain=' + '' : '';
	        var secure = options.secure ? '; secure' : '';
	        document.cookie = [key, '=', encodeURIComponent(val), expires, path, domain, secure].join('');
			this.data[key] = (erase) ? null : val;
		} else {
			return (this.data[key]) ? this.data[key] : null;
		}
	},
	erase: function(key) {
		this.val(key, '', {expires:-1});
	}
};
$cookies.init();

var $random = function() {
	var min, max;
	if (arguments.length === 1) {
		min = 0;
		max = arguments[0];
	} else if (arguments.length === 2) {
		min = arguments[0];
		max = arguments[1];
	} else {
		min = 0;
		max = 1;
	}
	var rnd = Math.random() * (max - min);
	return (Math.floor(rnd) + min);
}

//***Common Function
var Utils = {
	openWin: function(link, w, h) {
		window.open(link,'popWin','location=no,toolbar=no,menubar=no,status=no,scrollbars=yes,resizable=yes,width='+w+',height='+h);
	},
	adjustImage: function(imageObject, w, h) {
		var imgWidth = parseInt(imageObject.width, 10);
		var imgHeight = parseInt(imageObject.height, 10);
		if (imgHeight > imgWidth) {
			imgHeight = imgHeight * w / imgWidth;
			imgWidth = w;
		} else {
			imgWidth = imgWidth * h / imgHeight;
			imgHeight = h;
		}
		
		if (imgWidth < w) {
			imageObject.width = w+'';
		} else if (imgHeight < h) {
			imageObject.height = h+'';
		} else {
			imageObject.width = imgWidth+'';
			imageObject.height = imgHeight+'';
		}
	}
}
//Common Class

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
//#$QueryString


var $Pager = function(pageSize, total, size) {
	if (pageSize && total && size) {
		this.init(pageSize, total, size);
	}
};
$Pager.prototype.init = function(pageSize, total, size) {
	this.size = size;
	this.pageSize = pageSize;
	this.total = total;
	this.idx = 0;
	this.pageTotal = Math.ceil(total/pageSize);
};
$Pager.prototype.next = function() {
	if (this.idx < this.pageTotal-1) {
		return (this.idx+1); 
	}
	return -1;
};
$Pager.prototype.prev = function() {
	if (this.idx > 0) {
		return (this.idx-1); 
	}
	return -1;
};
$Pager.prototype.getIdx = function(itemIdx) {
	return Math.ceil((itemIdx+1)/this.size);
};
$Pager.prototype.getList = function() {
	var list = [];
	var half = Math.floor(this.size/2);
	var adjust = (this.size % 2 === 0) ? -1 : 0;
	
	var start = this.idx;
	if (start - half + adjust > -1) {
		start = start - half + adjust; 
	} else {
		start = 0;
	}
	
	var end = start + this.size;
	if (end > this.pageTotal) {
		end = this.pageTotal;
		start = this.pageTotal - this.size;
		if (start < 0) start = 0;
	}
	for (var i = start; i < end; i++) {
		list.push(i);
	}
	return list;
};
//#$Pager




BK_News.calender = {};
BK_News.calender .holidaySet = {};
BK_News.calender .holidaySet.hk = {};
BK_News.calender .holidaySet.hk.day = {};
BK_News.calender.holidaySet.hk.day = {
	'2013': ["20130101", "20130211", "20130212", "20130213", "20130329", "20130330", "20130401", "20130404", "20130501", "20130517", "20130612", "20130701", "20130920", "20131001", "20131014", "20131225", "20131226"],
	'2012': ["20120102", "20120123", "20120124", "20120125", "20120404", "20120406", "20120407", "20120409", "20120428", "20120501", "20120623", "20120702", "20121001", "20121002", "20121023", "20121225", "20121226"],
	'2011': ["20110101", "20110203", "20110204", "20110205", "20110405", "20110422", "20110423", "20110425", "20110502", "20110510", "20110606", "20110701", "20110913", "20111001", "20111005", "20111226", "20111227"],
	'2010': ["20100101", "20100213", "20100214", "20100215", "20100216", "20100402", "20100403", "20100405", "20100406", "20100501", "20100521", "20100616", "20100701", "20100923", "20101001", "20101016", "20101225", "20101227"],
	'2009': ["20090101", "20090126", "20090127", "20090128", "20090404", "20090410", "20090411", "20090413", "20090501", "20090502", "20090528", "20090701", "20091001", "20091003", "20091026", "20091225", "20091226"],
	'2008': ["20080101", "20080207", "20080208", "20080209", "20080321", "20080322", "20080324", "20080404", "20080501", "20080512", "20080609", "20080701", "20080915", "20081001", "20081007", "20081225", "20081226"],
	'2007': ["20070101", "20070217", "20070219", "20070220", "20070405", "20070406", "20070407", "20070409", "20070501", "20070524", "20070619", "20070702", "20070926", "20071001", "20071019", "20071225", "20071226"],
	'2006': ["20060102", "20060128", "20060130", "20060131", "20060405", "20060414", "20060415", "20060417", "20060501", "20060505", "20060531", "20060701", "20061002", "20061007", "20061030", "20061225", "20061226"],
	'2005': ["20050101", "20050209", "20050210", "20050211", "20050325", "20050326", "20050328", "20050405", "20050502", "20050516", "20050611", "20050701", "20050919", "20051001", "20051011", "20051226", "20051227"],
	'2004': ["20040101", "20040122", "20040123", "20040124", "20040405", "20040409", "20040410", "20040412", "20040501", "20040526", "20040622", "20040701", "20040929", "20041001", "20041022", "20041225", "20041227"],
	'2003': ["20030101", "20030201", "20030131", "20030203", "20030405", "20030418", "20030419", "20030421", "20030501", "20030508", "20030604", "20030701", "20030912", "20031001", "20031004", "20031225", "20031226"],
	'2002': ["20020101", "20020212", "20020213", "20020214", "20020329", "20020330", "20020401", "20020405", "20020501", "20020520", "20020615", "20020701", "20020921", "20021001", "20021014", "20021225", "20021226"]
}
//Live



//oncc tw
var onccBknRoot = '/bknlib';
var highlightRoot = NEWS_PATH;
$.each(BK_News.section,function(){
	if(typeof this.highlight != 'undefined'){
		this.highlight = highlightRoot + this.highlight;
	}
	if(typeof this.url != 'undefined'){
		this.url = highlightRoot + this.url;
	}
	if(typeof this.url_short != 'undefined'){
		this.url_short = highlightRoot + this.url_short;
	}
	if(typeof this.url_other != 'undefined'){
		this.url_other = highlightRoot + this.url_other;
	}
	if(typeof this.icon != 'undefined'){
		this.icon = onccBknRoot + this.icon;
	}
})
 */
 
BK_News.httpKeyword = {
	regEx: /((http:\/\/(.[^">^]+?)|(https:\/\/(.[^">^]+?)))\s)/g,
	renderHtml: function(kw) {
		//var stockNum = kw.match(/\d{4,5}/g);
		var httpTemp = kw.match(this.regEx);
		if ( httpTemp != null ) {
			$.each ( httpTemp , function( k,v ) {
			
				v = v.replace(/\((.+?)\)/g, '$1');
				v = v.replace(/\（(.+?)\）/g, '$1');
				try { 
					kw = kw.replace(new RegExp( v , 'g'), '<a class="httpLink" href="' + v + '" target="_blank">' + v + '</a>');	
				} catch(e) {
					//kw = v;
				}
				
				
			});
		}
		return kw;
	}
}


BK_News.stockKeyword = {
	//regEx: /\（\d{4,5}\）/g,
	regEx: /(\(|\（)\d{4,5}(\)|\）)/g,
	regExSh : /\(\d{6}.SH\)/g,
	
	renderHtml: function(kw) {
		//var stockNum = kw.match(/\d{4,5}/g);
		var stockNumTemp = kw.match(this.regEx);
 		var stockNumString = '';
		var stockNum = new Array();
		
		if ( stockNumTemp != null ) {
			for (var i = 0; i < stockNumTemp.length; i++) { 
				if ( stockNumString.indexOf(stockNumTemp[i]) == -1 ) {
						stockNumString = stockNumString + ',' + stockNumTemp[i];
						stockNum.push(stockNumTemp[i]);
				}
			}
		}
		if (stockNum != null) {
			if (stockNum.length != 0) {
				stockNum = $.unique(stockNum);
				for (var i = 0; i < stockNum.length; i++) {
					//return kw.replace(stockNum, '<a href="http://money18.on.cc/info/liveinfo_quote.html?symbol='+stockNum+'" target="_blank">'+stockNum+'</a>');
					
					//stockNum[i] = stockNum[i].replace(/\((.+?)\)/g, '$1');
					//stockNum[i] = stockNum[i].replace(/\（(.+?)\）/g, '$1');
					
					//kw = kw.replace(new RegExp(stockNum[i], 'g'), '<a href="javascript:void(0);" onclick="javascript:M18box.livequotebox.LQB_show(\'' + stockNum[i] + '\');" class="stockNum">' + stockNum[i] + '<img src="/bknlib/img/stock_icon.gif" /></a>');
					try { 
					kw = kw.replace(stockNum[i], '(<a href="http://money18.on.cc/info/liveinfo_quote.html?symbol=' + stockNum[i].replace(/\((.+?)\)/g, '$1').replace(/\（(.+?)\）/g, '$1')+ '" target="_blank" class="stockNum">' + stockNum[i].replace(/\((.+?)\)/g, '$1').replace(/\（(.+?)\）/g, '$1') + '<img src="/bknlib/img/stock_icon.gif" /></a>)');
					} catch(e) {
					//kw = v;
					}
				}				
				//return kw;
			}
		}
		
		
		stockNumTemp = kw.match(this.regExSh);
 		stockNumString = '';
		stockNum = new Array();
		
		if ( stockNumTemp != null ) {
			for (var i = 0; i < stockNumTemp.length; i++) { 
				if ( stockNumString.indexOf(stockNumTemp[i]) == -1 ) {
						stockNumString = stockNumString + ',' + stockNumTemp[i];
						stockNum.push(stockNumTemp[i]);
				}
			}
		}
		if (stockNum != null) {
			if (stockNum.length != 0) {
				stockNum = $.unique(stockNum);
				for (var i = 0; i < stockNum.length; i++) {
					//return kw.replace(stockNum, '<a href="http://money18.on.cc/info/liveinfo_quote.html?symbol='+stockNum+'" target="_blank">'+stockNum+'</a>');
					
					//stockNum[i] = stockNum[i].replace(/\((.+?)\)/g, '$1');
					//stockNum[i] = stockNum[i].replace(/\（(.+?)\）/g, '$1');
					
					//kw = kw.replace(new RegExp(stockNum[i], 'g'), '<a href="javascript:void(0);" onclick="javascript:M18box.livequotebox.LQB_show(\'' + stockNum[i] + '\');" class="stockNum">' + stockNum[i] + '<img src="/bknlib/img/stock_icon.gif" /></a>');
					
					kw = kw.replace(stockNum[i], '(<a href="http://money18.on.cc/info/liveinfo_quote.html?location=sh&symbol=' + stockNum[i].replace(/\((.+?)\)/g, '$1').replace(/\（(.+?)\）/g, '$1').replace('.SH','')+ '" target="_blank" class="stockNum">' + stockNum[i].replace(/\((.+?)\)/g, '$1').replace(/\（(.+?)\）/g, '$1') + '<img src="/bknlib/img/stock_icon.gif" /></a>)');
				
					//kw = kw.replace(stockNum[i], '<a href="http://money18.on.cc/info/liveinfo_quote.html?location=sh&symbol=' + stockNum[i].replace('.SH','')+ '" target="_blank" class="stockNum">' + stockNum[i] + '<img src="/bknlib/img/stock_icon.gif" /></a>');
				}				
				//return kw;
			}
		}
		
		
		return kw;
	},
	extract_kw_to_list: function(kw) {
		var kw_list = [];
		var stockNum = kw.match(this.regEx);
		if (stockNum != null) {
			if (stockNum.length != 0) {
				stockNum = $.unique(stockNum);
				for (var i = 0; i < stockNum.length; i++) {
					//stockNum[i] = stockNum[i].replace( '(', '' );
					//stockNum[i] = stockNum[i].replace( ')', '' );
					
					stockNum[i] = stockNum[i].replace(/\((.+?)\)/g, '$1');
					stockNum[i] = stockNum[i].replace(/\（(.+?)\）/g, '$1');							
					kw_list.push(stockNum[i]);
				}
				return kw_list;
			}
		}
		return kw_list;
	},
	renderHtml2: function(kw) {
		var stockNum = kw.match(/\d{4,5}/g);
		//var stockNum = kw.match(this.regEx);
		
		if (stockNum != null) {
			if (stockNum.length != 0) {
				stockNum = $.unique(stockNum);
				for (var i = 0; i < stockNum.length; i++) {
					//return kw.replace(stockNum, '<a href="http://money18.on.cc/info/liveinfo_quote.html?symbol='+stockNum+'" target="_blank">'+stockNum+'</a>');
					kw = kw.replace(new RegExp(stockNum[i], 'g'), '<a href="javascript:void(0);" onclick="javascript:M18box.livequotebox.LQB_show(\'' + stockNum[i] + '\');" class="stockNum">' + stockNum[i] + '</a>');
				}				
				return kw;
			}
		}
		return kw;
	}	
}	

BK_News.pollInfo = {
	id: '#pageCTN-right',
	xmlPath: '/xml/polling.xml',
	//xmlPath: '/polling/polling.xml',
	init: function(sect) {
		if (sect == 'china_world') sect = 'news';
		$.get(this.xmlPath, function(data) { BK_News.pollInfo.bind(data, sect) });
	},
	bind: function(data, sect) {
		var targSect = (sect || '');
		var html = '';
		$(data).find('polling').each(function() {
			var s = $(this).find('sect_L1_name').text();
			var sectName = $(this).find('sect_L1_cname').text();
			var url = $(this).find('url').text();
			var title = $(this).find('title').text();
			var showTitle = title;
			var pathIdx = url.indexOf('/cgi-bin/');
			url = '/polling/index.html?url='+url.substring(pathIdx, url.length).replace('?', '+');
			if (showTitle.length > 23) {
				showTitle = title.substring(0,23)+'...';
			}
			if (targSect != '') {
				if (s == targSect) {
					html += '<div id="pollingBox"><a href="'+url+'" title="'+title+'">'+sectName+'：'+showTitle+'</a></div>';
				}
			} else {
				if (s == 'entertainment' || s == 'news' || s == 'finance') {
					html += '<div id="pollingBox"><a href="'+url+'" title="'+title+'">'+sectName+'：'+showTitle+'</a></div>';
				}
			}
		});
		$(this.id).append('<div style="float:left; padding: 5px;background-image: url(/images/nt.gif); width: 310px;"><h2 class="pollingBoxTitle">民意中心</h2> ' + html + '</div>');
		$(this.id).show();
	}
};
//e:pollInfo


BK_News.toolBar = {

	id: '.toolBar',
	version : '1.0',
	
	getShareUrl: function(type) {
		var urlPattern;
		if (type==='facebook') {
			urlPattern = 'http://www.facebook.com/share.php?u={url}'+encodeURIComponent('?share=true');
			//urlPattern = 'http://www.facebook.com/share.php?u={url}';
			var url = window.location.href;
		} else if (type==='twitter') {
			urlPattern = 'http://twitter.com/share?url={url}&text={title}';
			//urlPattern = 'http://twitter.com/home?status={title} {url}';
		} else if (type==='plurk') {
			urlPattern = 'http://plurk.com/?qualifier=shares&status={title} {url}';
		} else if (type==='sina') {
			
			var content = $('.breakingNewsContent p.summary').eq(0).text();

			
			if ( content.length >= 67 ) {
				content = content.substring(0, 67) + '...';	
			} else {
				content += '...';
			}
			content = encodeURIComponent(content);
			
			if($('img.imgmask').length != 0){
		
				var _pic =encodeURIComponent (   "http://" +  window.location.hostname+  $('img.imgmask').eq(0).attr('original')  );

				urlPattern = 'http://service.weibo.com/share/share.php?url={url}&title={title} ' +  encodeURIComponent('(分享自 @on.cc 東網) ') + content +'&pic=' + _pic;
			}
			else{
				urlPattern = 'http://service.weibo.com/share/share.php?url={url}&title={title} ' + encodeURIComponent('(分享自 @on.cc 東網)  ') +content;
			}
		} else if (type==='fblike') {
			if ( BK_News.content.articleId > BK_News.content.pub_code + "-20140422120000000-0000_00000_000" ) {
				urlPattern = 'http://' + document.domain + document.location.pathname.replace('_cn.html','.html');
			} else {
				
				urlPattern = '{url}';
			}
			
		} else if (type==='qq') {
			var content = $('.breakingNewsContent p.summary').eq(0).text();
			content = content.replace('【on.cc 東網 專訊】','');
			
			if ( content.length >= 67 ) {
				content = content.substring(0, 67) + '...';	
			} else {
				content += '...';
			}			
			
			content = encodeURIComponent(content);
			
			var title = encodeURIComponent(document.title);
			
			
			
			if($('img.imgmask').length != 0){
				var _pic =encodeURIComponent (   "http://" +  window.location.hostname  + $('img.imgmask').eq(0).attr('original')  );
				urlPattern = 'http://v.t.qq.com/share/share.php?url={url}&title={title}&pic='+_pic+'&content='+title+  encodeURIComponent(' (分享自 @onccnews) ') +content;
			} else {
				urlPattern = 'http://v.t.qq.com/share/share.php?url={url}&title={title}&content='+title+ encodeURIComponent(' (分享自 @onccnews)  ')  +content;
			}
		}
		
		return urlPattern.replace('{url}', window.location.href).replace('{title}', encodeURIComponent(document.title));
		//return urlPattern.replace('{url}', window.location.href).replace('{title}', encodeURIComponent('即時新聞'));
	},
	
	init_mobile : function() {
		
		$('.sharetool').hide();
		var url = window.location.href;
		var title = encodeURIComponent(document.title);
		var content = $('.breakingNewsContent p.summary').eq(0).text();
		content = content.replace('【on.cc 東網 專訊】','');
		if ( content.length >= 67 ) {
			content = content.substring(0, 67) + '...';	
		} else {
			content += '...';
		}			
		
		content = encodeURIComponent(content);
		
		var html = '';
		html += '<div class="share-container">';
		//html += '<div id="shareArea" style="display: none;">';
		html += '<div id="shareArea" style="">';
		html += '<div class="share2">';
		html += '<a href="'+this.getShareUrl('facebook')+'" title="Facebook" class="facebook" target="_blank"><img src="/img/v2/share/soc_fb_x.png" width="70" alt="Facebook"></a>';
		html += '<a href="whatsapp://send?text' + title + ' ' + url + '" title="WhatsApp" class="whatsapp" target="_blank"><img src="/img/v2/share/soc_whatsapp_x.png" width="70" alt="whatsapp"></a>';
		
		html += '<a href="'+this.getShareUrl('twitter')+'" title="Twitter" class="twitter" target="_blank"><img src="/img/v2/share/soc_twitter_x.png" width="70" alt="Twitter"></a>';
							
		if($('img.imgmask').length != 0){
		
				var _pic =encodeURIComponent (   "http://" +  window.location.hostname+  $('img.imgmask').eq(0).attr('original')  );

				urlPattern = 'http://service.weibo.com/share/share.php?url={url}&title={title} ' +  encodeURIComponent('(分享自 @on.cc 東網) ') + content +'&pic=' + _pic;
			}
			else{
				urlPattern = 'http://service.weibo.com/share/share.php?url={url}&title={title} ' + encodeURIComponent('(分享自 @on.cc 東網)  ') +content;
			}
			
		html += '<a href="'+ urlPattern + '" title="新浪微博" class="sina" target="_blank"><img src="/img/v2/share/soc_weibo_x.png" width="70" alt="新浪微博"></a>';
		html += '<a href="'+this.getShareUrl('qq')+'" title="騰訊微博" class="qq" target="_blank"><img src="/img/v2/share/soc_tencent_x.png" width="70" alt="qq"></a>';
		html += '<a href="https://plusone.google.com/_/+1/confirm?hl=zh-TW&amp;url=' + title + '" title="google+" class="google" target="_blank"><img src="/img/v2/share/soc_google_x.png" width="70" alt="google+"></a>';
		html += '</div>';
		//html += '<div class="fb_recommend"><iframe src="http://www.facebook.com/plugins/like.php?href='+this.getShareUrl('fblike')+'&amp;layout=button_count&amp;show_faces=false&amp;width=180&amp;action=recommend&amp;font=arial&amp;colorscheme=light&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:180px; height:21px;" allowTransparency="true"></iframe></div>';
		html += '</div>';
		html += '</div>';
					
		/*		
		html += '<li class="facebook_like" title="Facebook Like" ><div style="width:180px;padding-top: 4px;overflow:hidden;"><iframe src="http://www.facebook.com/plugins/like.php?href='+this.getShareUrl('fblike')+'&amp;layout=button_count&amp;show_faces=false&amp;width=180&amp;action=recommend&amp;font=arial&amp;colorscheme=light&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:180px; height:21px;" allowTransparency="true"></iframe></div></li>';
		html += '<li class="sina" title="新浪微博"><a href="'+this.getShareUrl('sina')+'" target="_blank"></a></li>';
		//html += '<li class="plurk" title="Plurk"><a href="'+this.getShareUrl('plurk')+'" target="_blank"></a></li>';
    	html += '<li class="twitter" title="Twitter"><a href="'+this.getShareUrl('twitter')+'" target="_blank"></a></li>';
    	html += '<li class="facebook" title="在Facebook上分享"><a href="'+this.getShareUrl('facebook')+'" target="_blank"></a></li>';
		html += '<li class="reversecolor" style="display:none;background-image: url(/bknlib/img/icon_reserveblack.png);float: right;" title="開關反白閱讀模式"></li>';
		*/
		$('.topHeadline').before(html);
	
	},
	
	init: function() {
		var html = '';
		//html += '<li class="print" title="列印此頁" onClick="PTY.print();"></li>';
		/*
		
		// twitter
		<a href="https://twitter.com/share" class="twitter-share-button" data-url="http://hk.on.cc/hk/bkn/cnt/commentary/20140527/bkn-20140527001844276-0527_00832_001.html">Tweet</a>
		<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>

<!-- 在您要顯示「+1 按鈕」的位置放上這個標記。 -->
<div class="g-plusone" data-size="medium"></div>

<!-- 在最後一個「+1 按鈕」標記之後放置這個標記。 -->
<script type="text/javascript">
  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/platform.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
</script>
*/

		
		
		html += '<li class="facebook_like" title="Facebook Like" ><div style="width:180px;padding-top: 4px;overflow:hidden;"><iframe src="http://www.facebook.com/plugins/like.php?href='+this.getShareUrl('fblike')+'&amp;layout=button_count&amp;show_faces=false&amp;width=180&amp;action=recommend&amp;font=arial&amp;colorscheme=light&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:180px; height:21px;" allowTransparency="true"></iframe></div></li>';
		
		//html += '<li class="qq" title="騰訊微博"><a href="'+this.getShareUrl('qq')+'" target="_blank"></a></li>';
		
		html += '<li class="sina" title="新浪微博"><a href="'+this.getShareUrl('sina')+'" target="_blank"></a></li>';
		//html += '<li class="plurk" title="Plurk"><a href="'+this.getShareUrl('plurk')+'" target="_blank"></a></li>';
    	html += '<li class="twitter" title="Twitter"><a href="'+this.getShareUrl('twitter')+'" target="_blank"></a></li>';
    	html += '<li class="facebook" title="在Facebook上分享"><a href="'+this.getShareUrl('facebook')+'" target="_blank"></a></li>';
		
		html += '<li class="largeFont" onclick="BK_News.fontSizePanel.large();" title="放大字型"></li>';		
		html += '<li class="smallFont" onclick="BK_News.fontSizePanel.small();" title="縮小字型"></li>';
		html += '<li class="reversecolor" style="display:none;float: right;" title="開關反白閱讀模式"></li>';
		
		$(this.id).append(html);
	},
	
	init_like : function() {
	
		
		/*var html = '';
		html += '<li id="facebook">' + this.facebook_like() + '</li>';
		html += '<li id="twitter">' + this.twitter_like() + '</li>';
		html += '<li id="google_plus">' + this.google_plus_like() + '</li>';
		html += '<li id="sina">' + this.sina_like() + '</li>';
		$(this.id).append(html);
		*/
		
		this.sina_like();
		
		var html = '';
		html += '<li class="largeFont" onclick="BK_News.fontSizePanel.large();" title="放大字型"></li>';		
		html += '<li class="smallFont" onclick="BK_News.fontSizePanel.small();" title="縮小字型"></li>';
		html += '<li class="reversecolor" style="display:none;float: right;" title="開關反白閱讀模式"></li>';
		$('.topNav .next_prevBtn').after(html);
	},
	
	sina_like : function() {

		var html = '';
		var content = $('.breakingNewsContent p.summary').eq(0).text();
		if ( content.length >= 67 ) {
			content = content.substring(0, 67) + '...';	
		} else {
			content += '...';
		}
		content = encodeURIComponent(content);
		
		if($('img.imgmask').length != 0){
	
			var _pic =encodeURIComponent (   "http://" +  window.location.hostname+  $('img.imgmask').eq(0).attr('original')  );

			urlPattern = 'http://service.weibo.com/share/share.php?url={url}&title={title} ' +  encodeURIComponent('(分享自 @on.cc 東網) ') + content +'&pic=' + _pic;
		}
		else{
			urlPattern = 'http://service.weibo.com/share/share.php?url={url}&title={title} ' + encodeURIComponent('(分享自 @on.cc 東網)  ') +content;
		}

		html = '<a href="'+ urlPattern.replace('{url}', window.location.href).replace('{title}', encodeURIComponent(document.title)) +'" target="_blank"></a>'
		$('.toolBar .sharetool li#sina').html( html );

	},
	
	facebook_popup_share : function() {
		window.open( 'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href), 'facebook-share-dialog', 'width=626,height=436'); 
	}
};

/* 
BK_News.date = {
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
BK_News.date.init();
 */

BK_News.imageGalleryInfo = {
	obj: null,
	domReady: false,
	data: [],
	init: function() {
		this.domReady = true;
		this.obj = $('a.thickbox');
		this.obj.each(function(index){
			BK_News.imageGalleryInfo.data.push([$(this).attr('href'), $(this).attr('title') ]);
		});
		var w =  980;
		var h = $(window).height()-100;
		/*
		if (screen.width <= 800) {
			w =  650;
			h = 400;
		} else if (screen.width <= 1024) {
			w =  934;
			h = 586;
		}
		*/
		this.obj.thickbox({
			width: w,
			height: h,
			hiddenObjSelector: null,
			innerHTML: function(target) {
				
				var loc_floder = GLBOAL_PATH;
				var cat_folder = '';
			
				if (window.location.pathname.indexOf('/china/') != -1) {
					cat_folder = 'china';
				} else if (window.location.pathname.indexOf('/entertainment/') != -1) {
					cat_folder = 'entertainment';
				} else if (window.location.pathname.indexOf('/finance/') != -1) {
					cat_folder = 'finance';
				} else if (window.location.pathname.indexOf('/news/') != -1) {
					cat_folder = 'news';
				} else if (window.location.pathname.indexOf('/sport/') != -1) {
					cat_folder = 'sport';
				} else if (window.location.pathname.indexOf('/weather/') != -1) {
					cat_folder = 'weather';
				} else if (window.location.pathname.indexOf('/life/') != -1) {			
					cat_folder = 'life';	
				} else if (window.location.pathname.indexOf('/commentary/') != -1) {			
					cat_folder = 'commentary';	
				} else if (window.location.pathname.indexOf('/lifestyle/') != -1) {			
					cat_folder = 'lifestyle';	
				}
				
			
				return '<iframe scrolling="no" frameborder="0" style="width: '+w+'px; height: '+h+'px;" name="TB_iframeContent205" id="TB_iframeContent" src="/'+loc_floder+'/'+ cat_folder + '/imageGallery.html?pId='+target.attr('href')+'" hspace="0"> </iframe>'
			}
		});
	},
	resize: function(h) {
		$('#TB_iframeContent').css('height', h);
	},
	queue: function() {
		return false;
	}
};

BK_News.Active = {
	mouseX : -1,
	mouseY : -1,
	currMouseX : -1,
	currMouseY : -1,
	flag: 1, 
	timerId : null, 
	timestamp: -1,
	init : function() {
		$('body').mousemove(function(event) {
  			BK_News.Active.currMouseX = event.pageX ;
			BK_News.Active.currMouseY = event.pageY;
		});
		
		
		var loadStatusFunc1 = function() {
			if (BK_News.Active.mouseX == -1 && BK_News.Active.mouseY == -1) {
				BK_News.Active.mouseX = BK_News.Active.currMouseX;
				BK_News.Active.mouseY = BK_News.Active.currMouseY;
			} else {
				if (BK_News.Active.currMouseX != BK_News.Active.mouseX ||  BK_News.Active.currMouseY != BK_News.Active.mouseY) {
					BK_News.Active.flag = 1;
				} else {
					BK_News.Active.flag = 0;
					setTimeout(window.location.reload(), 30000);
				}
			}	
		};		
		loadStatusFunc1();
		BK_News.Active.timerId = setInterval(loadStatusFunc1, 30000);
	},	
	init_v2 : function() {
		$('body').mousemove(function(event) {
  			BK_News.Active.currMouseX = event.pageX ;
			BK_News.Active.currMouseY = event.pageY;
		});
		var loadStatusFunc1 = function() {
			if (BK_News.Active.currMouseX != BK_News.Active.mouseX ||  
				BK_News.Active.currMouseY != BK_News.Active.mouseY  ) {
				BK_News.Active.flag = 1;
			} else {
				BK_News.Active.flag = 0;
				//setTimeout(window.location.reload(), 30000);
				window.location.reload();
			}
		};		
		BK_News.Active.timerId = setInterval(loadStatusFunc1, 300000); 
	},
	init_v3 : function() {
		$('body').mousemove(function(event) {
  			BK_News.Active.currMouseX = event.pageX ;
			BK_News.Active.currMouseY = event.pageY;
		});
			
		
		BK_News.Active.timestamp = Math.round(new Date().getTime()/1000.0);
		
		var loadStatusFunc1 = function() {
			if (BK_News.Active.currMouseX != BK_News.Active.mouseX ||  
				BK_News.Active.currMouseY != BK_News.Active.mouseY  ) {
				BK_News.Active.flag = 1;
				
				BK_News.Active.mouseX = BK_News.Active.currMouseX ;
				BK_News.Active.mouseY = BK_News.Active.currMouseY ;				
				
				BK_News.Active.timestamp = Math.round(new Date().getTime()/1000.0);
			} else {
				var currentTimeStamp = Math.round(new Date().getTime()/1000.0);
				
				if (  (currentTimeStamp -  BK_News.Active.timestamp)  >  300 ) {
				
					BK_News.Active.flag = 0;
					window.location.reload();
				}
			}
		};
		
		if ( ONCC.view != 'm' ) {
			BK_News.Active.timerId = setInterval(loadStatusFunc1, 1000); 
		}
	}	

};

BK_News.netvigationBar = {
	
	container : '#netvigationBar',
	
	init : function() {
		
		if ( $('#newsHeadline .topNav').length > 0 ) {
			$('#newsHeadline .topNav').prepend('<div id="netvigationBar"></div>');
		} else {
			$('#newsHeadline .topHeadline h1').before('<div id="netvigationBar"></div>');
			$('#newsHeadline .topHeadline h1').css('width','340px');
			$('.commentary_icon_hover').css('top','60px');
		}
		this.build();
		
	},
	
	build : function() {
	
		var netvigator = '<span class="netvigator">></span>';
		var nation = '';
		var location = '';
		var section = '';
		
		nation = this.getNation();
		location = this.getLocation();
		section = this.getSection($ONCC.corpBar.getCurrentSection());
		
		if ( $ONCC.corpBar.getCurrentSection() != 'news' && $ONCC.corpBar.getCurrentSection() != 'commentary' ) {
			$(this.container).html( nation  + netvigator + section  );
		} else {
			$(this.container).html( nation  + netvigator + section + netvigator + location  );
		}
		
	},
	
	getNation : function() {
		
		var str = '';
		if($ONCC.corpBar.getNation() == 'cn'){
			str = $ONCC.lang.translate("&#x5927;&#x9678;") +  $ONCC.lang.translate("&#x7248;");//cn
		}else if($ONCC.corpBar.getNation() == 'tw'){
			str = $ONCC.lang.translate("&#21488;&#28771;") +  $ONCC.lang.translate("&#x7248;");//tw
		}else {
			str = $ONCC.lang.translate("&#x6E2F;&#x6FB3;") +  $ONCC.lang.translate("&#x7248;");//hk
		}
		
		return '<a href="/" class="nation netvigationBarItem">' + str + '</a>';
	},
	
	getLocation : function( ) {
		
		var str = '';
		
		if ( $ONCC.corpBar.getLocationPath() == 'hk' ) {
			str = $ONCC.lang.translate("&#x6E2F;&#x6FB3;");
		} else if ( $ONCC.corpBar.getLocationPath() == 'tw' ) {
			str = $ONCC.lang.translate("&#21488;&#28771;");
		} else if ( $ONCC.corpBar.getLocationPath() == 'cn' ) {
			str = $ONCC.lang.translate("&#x5927;&#x9678;");	
		} else if ( $ONCC.corpBar.getLocationPath() == 'int' ) {
			str = $ONCC.lang.translate("&#x570B;&#x969B;");
		}
		
		return '<a href="/' + $ONCC.corpBar.getLocationPath() + '/" class="location netvigationBarItem">' + str + '</a>';
	},
	
	getSection : function() {
		var str = '';
		
		if ( $ONCC.corpBar.getCurrentSection() == 'news' ) {
			str = $ONCC.lang.translate("&#x65B0;&#x805E;");
		} else if ( $ONCC.corpBar.getCurrentSection() == 'commentary' ) {
			str = $ONCC.lang.translate("&#x8A55;&#x8AD6;");
		} else if  ( $ONCC.corpBar.getCurrentSection() == 'finance' ) {
			str = $ONCC.lang.translate("&#x8CA1;&#x7D93;");
		} else if  ( $ONCC.corpBar.getCurrentSection() == 'entertainment' ) {
			str = $ONCC.lang.translate("&#x5A1B;&#x6A02;");
		} else if  ( $ONCC.corpBar.getCurrentSection() == 'sport' ) {
			str = $ONCC.lang.translate("&#x9AD4;&#x80B2;");
		} else if  ( $ONCC.corpBar.getCurrentSection() == 'lifestyle' ) {
			str = $ONCC.lang.translate("&#x751F;&#x6D3B;");
		} else if  ( $ONCC.corpBar.getCurrentSection() == 'weather' ) {
			str = $ONCC.lang.translate("&#x5929;&#x6C23;");
		}
		
		return '<a href="/' + $ONCC.corpBar.getLocationPath() + '/' + $ONCC.corpBar.getCurrentSection() + '/index.html" class="section netvigationBarItem">' + str + '</a>';
	}
	
}
BK_News.fontSizePanel = {
	cksId: 'breakingnews-fontSize',
	selectors: ['.breakingNewsContent'],
	sizes: [{'h1':13, 'h3':12, 'p':12, 'lh':19}, {'h1':15, 'h3':13, 'p':13, 'lh':21}, {'h1':19, 'h3':16, 'p':18, 'lh':23}, {'h1':23, 'h3':21, 'p':21, 'lh':26}, {'h1':26, 'h3':24, 'p':24, 'lh':30}],
	curIdx: 3,
	init: function() {
		var idx = null;
		if (String(idx) != String(this.curIdx) && idx != null) {
			this.curIdx = idx;
			this.writeCss();
		}
	},
	small: function() {
		if (this.curIdx > 1) this.curIdx--;
		this.changeSize();
	},
	large: function() {
		if (this.curIdx < this.sizes.length) this.curIdx++;
		this.changeSize();
	},
	changeSize: function() {
		for (var i = 0; i < this.selectors.length;i++) {
			var selector = $(this.selectors[i]);
			selector.css({'line-height': this.sizes[this.curIdx-1].lh + 'px'});
			selector.find('h1').css({'font-size': this.sizes[this.curIdx-1].h1 + 'px'});
			selector.find('h3').css({'font-size': this.sizes[this.curIdx-1].h3 + 'px'});
			selector.find('p, table.commonTable td, table.commonTable th, .infoBox').css({'font-size': this.sizes[this.curIdx-1].p + 'px'});
		}
		
	},
	writeCss: function() {
		var css = ['<style type="text/css">'];
		for (var i = 0; i < this.selectors.length;i++) {
			var selector = this.selectors[i];
			css.push(selector + '{line-height:'+this.sizes[this.curIdx-1].lh+'px;}');
			css.push(selector + ' h1 {font-size:'+this.sizes[this.curIdx-1].h1+'px;}');
			css.push(selector + ' h3 {font-size:'+this.sizes[this.curIdx-1].h3+'px;}');
			css.push(selector + ' p, ' + selector + ' table.commonTable td, '+ selector + 'table.commonTable th, '+ selector + ' .infoBox {font-size:'+this.sizes[this.curIdx-1].p+'px;}');
		}
		css.push('</style>');
		document.write(css.join(''));
	}
};

/* if (typeof Urchin == 'undefined'){
	document.write("<script src='/js/urchin.js'></script>");
	document.write("<script src='/js/urchin-lib.js'></script>");
} */

$(document).ready(function() {

	$('body').addClass('_nation_' + ONCC.getNation() );
	//ONCC.eventNews.initContent();
	BK_News.Active.init_v3();	
	BK_News.fontSizePanel.init();	
	

	
	$('#ads_large3').css('margin-bottom','8px');
	
	
	if ( $('#urgentNews').length == 0 && $('#hotnewsOuterCTN').length == 0 && $('#facebookCTN').length == 0 ) {
		var rightsideBox = '';
		rightsideBox += '<div id="urgentNews"></div>';
		rightsideBox += '<div id="hotnewsOuterCTN"></div>';
		rightsideBox += '<div id="facebookCTN"></div>';
		$('#ads_large3').after( rightsideBox );
	}
	
	if ( ONCC.view == 'm' ) {
		$('#facebookCTN').hide();
	}
	
	
	ONCC.eventNews.initMain();
	// get the relate article
	ONCC.eventNews.initContent(); 
	
	var _html = '<div class="relateKewordHeader"><img src="/img/v2/toprank_' + ONCC.getNation() + $ONCC.curLang + '.jpg"></div><div id="hotnewsCTN"><div id="hotnewsInner"></div><div id="hotnewsInnerPage"></div></div>';
		
	if (  ONCC.getSection() == 'news' || ONCC.getSection() == 'sport' || ONCC.getSection() == 'entertainment' || ONCC.getSection() == 'finance' || ONCC.getSection() == 'lifestyle') {
		_html += '<div class="relateKewordHeader"><img src="/img/v2/sp_' + (( ONCC.getSection() == 'lifestyle') ? 'life_' : '' ) + ONCC.getNation() + $ONCC.curLang + '.jpg"></div><div id="focusnewsCTN"><div id="focusnewsInner"></div><div id="focusnewsInnerPage"></div></div>';
	}
	$('#hotnewsOuterCTN').html( _html );
		ONCC.HotNews.initContent();
		ONCC.FocusNews.initContent();
	
	if (  ONCC.getNation() == 'hk' || ONCC.getNation() == 'tw' ) {
		$('#facebookCTN').css('margin-bottom','8px');
		ONCC.SocialNetwork.init();
	}

	$('.goTop').click(function(evt){
		evt.stopPropagation();
		evt.preventDefault();
		$('html, body').animate({scrollTop:0}, 'slow'); return false; 
	}); 
/* 
	$('#subMenu li a').delegate('', 'mouseover', function () { 
		$(this).find('.iconPic').attr('src', '/images/icon_pic_over.gif');
		$(this).find('.iconVideo').attr('src', '/images/icon_video_over.gif');
	}).delegate('', 'mouseout', function() {
		$(this).find('.iconPic').attr('src', '/images/icon_pic.gif');
		$(this).find('.iconVideo').attr('src', '/images/icon_video.gif');
	});
	
	$('.sectbreakNews li a').delegate('', 'mouseover', function () { 
		$(this).find('.iconPic').attr('src', '/images/icon_pic_over.gif');
		$(this).find('.iconVideo').attr('src', '/images/icon_video_over.gif');
	}).delegate('', 'mouseout', function() {
		$(this).find('.iconPic').attr('src', '/images/icon_pic.gif');
		$(this).find('.iconVideo').attr('src', '/images/icon_video.gif');
	});
	
	$('.cntheadline a').delegate('', 'mouseover', function () { 
		$(this).find('.iconPic').attr('src', '/images/icon_pic_over.gif');
		$(this).find('.iconVideo').attr('src', '/images/icon_video_over.gif');
	}).delegate('', 'mouseout', function() {
		$(this).find('.iconPic').attr('src', '/images/icon_pic.gif');
		$(this).find('.iconVideo').attr('src', '/images/icon_video.gif');
	});	

	$('#toolBarMenu .related').after("<li class='new_function' style='cursor:pointer;background-position: left 0;display: block;height: 23px;text-align: left;width: 65px;padding-top:7px;'><a href='/sethomepage.html'  style='width:65px;height:17px;display:block;color:#ffffff;'>設定為首頁</a></li>");	
 */
});
