/*

unicorp js 
copy to /adv/web/corp/source/unicorp.js
copy to /adv/orisun/corp/source/unicorp.js
copy to /adv/web/corp/source/unicorp_v4.js


*/

/* S:urchin for global */  




 function writeGlobalUrchin() {
	var urchinInsertionPoint = document.getElementsByTagName('script')[0],
	urchinIframe = document.createElement('iframe');
	urchinIframe.width = '0';urchinIframe.height = '0';
	urchinIframe.src = 'http://home.on.cc/utm/' + window.location.hostname + '/report.html?t=' + new Date().getTime(); 
	urchinIframe.async = true;
	urchinInsertionPoint.parentNode.insertBefore(urchinIframe, urchinInsertionPoint);
 }
   
   
if ( ( window.location.hostname == "127.0.0.1" ) || ( window.location.hostname == "tw.on.cc" ) || ( window.location.hostname == "cn.on.cc" )) {
	//writeGlobalUrchin();
}

/* E:urchin for global */

if ( typeof ( corpbarVersion ) == 'undefined' ) {
	var corpbarVersion = '31';
}


var domain = "http://home.on.cc";
//var hkdomain = '202.125.90.7';
//var twdomain = '202.125.90.28';
var hkdomain = 'hk.on.cc';
var twdomain = 'tw.on.cc';
var cndomain = 'cn.on.cc';
//http://home.on.cc
//http://202.125.90.35:81
var $ONCC = {
	domain: 'http://home.on.cc',
	curLang : '',
	curNation : '',
	
	init: function() {
		
		var checkrevImg = new Image();
		checkrevImg.src = this.domain+'/adv/web/corp/img/checkrev.gif?screenwidth='+screen.width+'&screenheight='+screen.height+'&refer='+document.location.toString();

		// slim load yahoo keyword
		document.write("<script type='text/javascript' src='"+this.domain+"/adv/web/corp/source/unicorp_lang.js'></script>");
		document.write("<script type='text/javascript' src='"+this.domain+"/adv/web/corp/js/yahoo_keywords.js'></script>");
		
		if ( window.location.href.indexOf('zh=true') != -1 || window.location.href.indexOf('_001.html') != -1 || window.location.href.indexOf('_002.html') != -1 ) { // content page _001 and _002
			$ONCC.cookie('lang','zh', { path:'/'});
		}
		if ( window.location.href.indexOf('cn=true') != -1 || window.location.href.indexOf('home_cn.html') != -1 || window.location.href.indexOf('index_cn.html') != -1 || window.location.href.indexOf('_001_cn.html') != -1 || window.location.href.indexOf('_002_cn.html') != -1 ) { // content page _001 and _002
			$ONCC.cookie('lang','cn', { path:'/'});
		}
		
		if ( ($ONCC.cookie('lang') == null || $ONCC.cookie('lang') == 'zh' ) ) {
			$ONCC.curLang = '';
		} else {
			$ONCC.curLang = '_cn';
		}
		
	}
};

//Extend jQuery: Cookies
$ONCC.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
       	var path = options.path ? '; path=' + (options.path) : '';
		//var path = '; path=/';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
		
		//$.cookie(this.cksId, this.settings.join('-'), {expires: 999, path:'/'});
		
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                //var cookie = jQuery.trim(cookies[i]);
				var cookie = triming(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};



$ONCC.init();
$ONCC.corpBar = {};




$ONCC.corpBar = {
	
	version: corpbarVersion,
	curSect: null,
	curLocation : null,
	
	hidePromo: false,
	miniMode: false,
	init: function() {
	
		var $NATCIONCSS = '';
		this.curSect = this.getSection();
		this.curLocation = this.getLocation();
		document.write("<script type='text/javascript' src='http://on.cc/adv/web/corp/js/weather_info.js'></script>");
	
		if (typeof $ONCC_CORPBAR_CSS === 'undefined') {
			$ONCC_CORPBAR_CSS = $ONCC.domain + '/adv/web/corp/source/unicorp_v4.css?v='+this.version;
			$NATCIONCSS = $ONCC.domain + '/adv/web/corp/source/unicorp_v4_' + $ONCC.corpBar.getNation() + '.css?v='+this.version;
			$NATCIONCSS = $ONCC.domain + '/adv/web/corp/source/unicorp_v4_' + $ONCC.corpBar.getNation() + '.css?v='+this.version;
			
		}
		
		if (  window.location.hostname == '15.15.4.162' || window.location.hostname == '202.125.90.157' || window.location.hostname == '202.125.90.158'  || window.location.hostname == '202.125.90.159' || window.location.hostname == '202.125.90.119' || window.location.hostname == '202.125.90.7' || window.location.hostname == '202.125.90.28' || window.location.hostname == '127.0.0.1' || window.location.hostname == '192.168.1.1'  || window.location.hostname == 'localhost' ) {
			$ONCC_CORPBAR_CSS = '/adv/web/corp/source/unicorp_v4.css?v='+this.version;
			$NATCIONCSS = '/adv/web/corp/source/unicorp_v4_' + $ONCC.corpBar.getNation() + '.css?v='+this.version;
		}
		
		document.write('<link rel="stylesheet" type="text/css" href="'+$ONCC_CORPBAR_CSS+'" media="all">');
		document.write('<link rel="stylesheet" type="text/css" href="'+$NATCIONCSS+'" media="all">');
		
		
	},
	mainMenuSet:[
		{
			'name':'&#x65B0;&#x805E;',
			'id':'news',
			'link':false,
			'target':false,
			'cls':'base_line title',
			'nation':'hk,tw,cn',
			'section':'news',
			'root':true,
			'location':'hk,tw,cn,int',
			'node':[
				{
					'name':'&#x6E2F;&#x6FB3;',
					'id':'hk_news',
					'link':'/hk/news/index.html',
					'target':false,
					'nation':'hk,tw,cn',
					'cls':'circle level2',
					'section':'news',
					'location':'hk',
					'root':false,
					'node':false
				},
				{
					'name':'&#21488;&#28771;',
					'id':'tw_news',
					'link':'/tw/news/index.html',
					'target':false,
					'nation':'hk,tw,cn',
					'cls':'circle level2',
					'section':'news',
					'location':'tw',
					'root':false,
					'node':false
				},
				{
					'name':'&#x5927;&#x9678;',
					'id':'cn_news',
					'link':'/cn/news/index.html',
					'target':false,
					'nation':'hk,tw,cn',
					'cls':'circle level2',
					'section':'news',
					'location':'cn',
					'root':false,
					'node':false
				},
				{
					'name':'&#x570B;&#x969B;',
					'id':'int_news',
					'link':'/int/news/index.html',
					'target':false,
					'nation':'hk,tw,cn',
					'cls':'circle level2',
					'section':'news',
					'location':'int',
					'root':false,
					'node':false
				}
			]
		},
		{
			'name':'&#x8A55;&#x8AD6;',
			'id':'commentary',
			'link':false,
			'target':false,
			'nation':'hk,tw,cn',
			'cls':'base_line title',
			'section':'commentary',
			'location':'hk,tw,cn',
			'root':true,
			'node':[
				{
					'name':'&#x6E2F;&#x6FB3;',
					'id':'hk_commentary',
					'link':'/hk/commentary/index.html',
					'target':false,
					'nation':'hk,tw,cn',
					'cls':'circle level2',
					'section':'commentary',
					'location':'hk',
					'root':false,
					'node':false
				},
				{
					'name':'&#21488;&#28771;',
					'id':'tw_commentary',
					'link':'/tw/commentary/index.html',
					'target':false,
					'nation':'hk,tw,cn',
					'cls':'circle level2',
					'section':'commentary',
					'location':'tw',
					'root':false,
					'node':false
				},
				{
					'name':'&#x5927;&#x9678;',
					'id':'cn_commentary',
					'link':'/cn/commentary/index.html',
					'target':false,
					'nation':'hk,tw,cn',
					'cls':'circle level2',
					'section':'commentary',
					'location':'cn',
					'root':false,
					'node':false
				}
			]
		},
		{
			'name':'',
			'id':'',
			'link':false,
			'target':false,
			'nation':'hk,tw,cn',
			'cls':'base_line',
			'section':'finance,entertainment,sport,lifestyle',
			'location':'hk',
			'root':false,
			'node':[
				{
					'name':'&#x5A1B;&#x6A02;',
					'id':'hk_ent',
					'link':'/hk/entertainment/index.html',
					'target':false,
					'nation':'hk,cn',
					'cls':'title circle level1',
					'section':'entertainment',
					'location':'hk',
					'root':true,
					'node':false
				},
				{
					'name':'&#x8CA1;&#x7D93;',
					'id':'hk_finance',
					'link':'/hk/finance/index.html',
					'target':false,
					'nation':'hk,cn',
					'cls':'title circle level1',
					'section':'finance',
					'location':'hk',
					'root':true,
					'node':false
				},
				
				{
					'name':'&#x9AD4;&#x80B2;',
					'id':'hk_sport',
					'link':'/hk/sport/index.html',
					'target':false,
					'nation':'hk,cn',
					'cls':'title circle level1',
					'section':'sport',
					'location':'hk',
					'root':true,
					'node':false
				},
				{
					'name':'&#x751F;&#x6D3B;',
					'id':'hk_life',
					'link':'/hk/lifestyle/index.html',
					'target':false,
					'nation':'hk,cn',
					'cls':'title circle level1',
					'section':'lifestyle',
					'location':'hk',
					'root':true,
					'node':false
				},
				{
					'name':'&#x5A1B;&#x6A02;',
					'id':'hk_ent',
					'link':'/tw/entertainment/index.html',
					'target':false,
					'nation':'tw',
					'cls':'title circle level1',
					'section':'entertainment',
					'location':'tw',
					'root':true,
					'node':false
				},
				{
					'name':'&#x8CA1;&#x7D93;',
					'id':'finance',
					'link':'/tw/finance/index.html',
					'target':false,
					'nation':'tw',
					'cls':'title circle level1',
					'section':'finance',
					'location':'tw',
					'root':true,
					'node':false
				},
				
				{
					'name':'&#x9AD4;&#x80B2;',
					'id':'hk_sport',
					'link':'/tw/sport/index.html',
					'target':false,
					'nation':'tw',
					'cls':'title circle level1',
					'section':'sport',
					'location':'tw',
					'root':true,
					'node':false
				},
				{
					'name':'&#x751F;&#x6D3B;',
					'id':'hk_life',
					'link':'/tw/lifestyle/index.html',
					'target':false,
					'nation':'tw',
					'cls':'title circle level1',
					'section':'lifestyle',
					'location':'tw',
					'root':true,
					'node':false
				}
			]
		}
		
	],
	sectionSet: {
		'location_1' : {
			
			'name' : '台灣',
			'id' : 'siteTW',
			'childs' : [
				{ 'name' : '&#21488;&#28771;' , 'url' : '' },
				{ 'name' : '&#x65B0;&#x805E;' , 'url' : '/tw/news/index.html' , "class":'news'},
				{ 'name' : '&#x8CA1;&#x7D93;' , 'url' : '/tw/finance/index.html' , "class":'finance'},
				{ 'name' : '&#x5A1B;&#x6A02;' , 'url' : '/tw/entertainment/index.html' , "class":'entertainment'},
				{ 'name' : '&#x9AD4;&#x80B2;' , 'url' : '/tw/sport/index.html' , "class":'sport'},
				{ 'name' : '&#x751F;&#x6D3B;' , 'url' : '/tw/lifestyle/index.html' , "class":'lifestyle'},
				{ 'name' : '&#x8A55;&#x8AD6;' , 'url' : '/tw/commentary/index.html' , "class":'commentary'}
			]

		},
		'location_2' : {
			'name' : '港澳',
			'id' : 'siteHK',
			'childs' : [
				{ 'name' : '&#x6E2F;&#x6FB3;' , 'url' : '' },
				{ 'name' : '&#x65B0;&#x805E;' , 'url' : '/hk/news/index.html' , "class":'news'},
				{ 'name' : '&#x8CA1;&#x7D93;' , 'url' : '/hk/finance/index.html'  , "class":'finance' },
				{ 'name' : '&#x5A1B;&#x6A02;' , 'url' : '/hk/entertainment/index.html'  , "class":'entertainment'},
				{ 'name' : '&#x9AD4;&#x80B2;' , 'url' : '/hk/sport/index.html'  , "class":'sport'},
				{ 'name' : '&#x751F;&#x6D3B;' , 'url' : '/hk/lifestyle/index.html' , "class":'lifestyle' },
				{ 'name' : '&#x8A55;&#x8AD6;' , 'url' : '/hk/commentary/index.html' , "class":'commentary'}

			]	
		},
		
		'location_3' : {
			
			'name' : '大陸',
			'id' : 'siteCN',
			'childs' : [
				{ 'name' : '&#x6E2F;&#x6FB3;' , 'url' : '' },
				{ 'name' : '&#x65B0;&#x805E;' , 'url' : '/hk/news/index.html' , "class":'news'},
				{ 'name' : '&#x8CA1;&#x7D93;' , 'url' : '/hk/finance/index.html'  , "class":'finance' },
				{ 'name' : '&#x5A1B;&#x6A02;' , 'url' : '/hk/entertainment/index.html'  , "class":'entertainment'},
				{ 'name' : '&#x9AD4;&#x80B2;' , 'url' : '/hk/sport/index.html'  , "class":'sport'},
				{ 'name' : '&#x751F;&#x6D3B;' , 'url' : '/hk/lifestyle/index.html' , "class":'lifestyle' },
				{ 'name' : '&#x8A55;&#x8AD6;' , 'url' : '/hk/commentary/index.html' , "class":'commentary'}

			]	

		},
	
		
		
		
		'location_4' : {
			
			'name' : '國際',
			'id' : 'siteINT',
			'childs' : [
				//{ 'name' : '&#x7F8E;&#x52A0;' , 'url' : '' },
				{ 'name' : '&#x570B;&#x969B;' , 'url' : '' },
				{ 'name' : '&#x65B0;&#x805E;' , 'url' : '/int/news/index.html' , "class":'news'},
				{ 'name' : '&#x8CA1;&#x7D93;' , 'url' : '/int/finance/index.html'  , "class":'finance' },
				{ 'name' : '&#x5A1B;&#x6A02;' , 'url' : '/int/entertainment/index.html'  , "class":'entertainment'},
				{ 'name' : '&#x9AD4;&#x80B2;' , 'url' : '/int/sport/index.html'  , "class":'sport'}
			
			]

		},
		
			/*
		
		'location_5' : {
			
			'name' : '歐洲',
			'id' : 'siteEU',
			'childs' : [
				{ 'name' : '&#x6B50;&#x6D32;' , 'url' : '' },
				{ 'name' : '&#x65B0;&#x805E;' , 'url' : '/eu/news/index.html' , "class":'news'},
				{ 'name' : '&#x8CA1;&#x7D93;' , 'url' : '/eu/finance/index.html'  , "class":'finance' },
				{ 'name' : '&#x5A1B;&#x6A02;' , 'url' : '/eu/entertainment/index.html'  , "class":'entertainment'},
				{ 'name' : '&#x9AD4;&#x80B2;' , 'url' : '/eu/sport/index.html'  , "class":'sport'}
			
			]

		},
		
		'location_6' : {
			
			'name' : '澳紐',
			'id' : 'siteAU',
			'childs' : [
				{ 'name' : '&#x6FB3;&#x7D10;' , 'url' : '' },
				{ 'name' : '&#x65B0;&#x805E;' , 'url' : '/au/news/index.html' , "class":'news'},
				{ 'name' : '&#x8CA1;&#x7D93;' , 'url' : '/au/finance/index.html'  , "class":'finance' },
				{ 'name' : '&#x5A1B;&#x6A02;' , 'url' : '/au/entertainment/index.html'  , "class":'entertainment'},
				{ 'name' : '&#x9AD4;&#x80B2;' , 'url' : '/au/sport/index.html'  , "class":'sport'}
			
			]

		},
		
		'location_7' : {
			
			'name' : '其他',
			'id' : 'siteOT',
			'childs' : [
				{ 'name' : '&#x5176;&#x4ED6;' , 'url' : '' },
				{ 'name' : '&#x65B0;&#x805E;' , 'url' : '/ot/news/index.html' , "class":'news'},
				{ 'name' : '&#x8CA1;&#x7D93;' , 'url' : '/ot/finance/index.html'  , "class":'finance' },
				{ 'name' : '&#x5A1B;&#x6A02;' , 'url' : '/ot/entertainment/index.html'  , "class":'entertainment'},
				{ 'name' : '&#x9AD4;&#x80B2;' , 'url' : '/ot/sport/index.html'  , "class":'sport'}
			
			]

		},*/
		
		'global' : {
			
			'name' : '環球',
			'id' : 'siteNav',
			'childs' : [
				{ 'name' : '&#x6E2F;&#x6FB3;' , 'url' : '/hk/news/index.html' , 'class':'siteHK' },
				{ 'name' : '&#21488;&#28771;' , 'url' : '/tw/news/index.html' , 'class':'siteTW'},
				{ 'name' : '&#x5927;&#x9678;' , 'url' : '/cn/news/index.html', 'class':'siteCN' },
				{ 'name' : '&#x570B;&#x969B;' , 'url' : '/int/news/index.html' , 'class':'siteINT' }
				//{ 'name' : '&#x6B50;&#x6D32;' , 'url' : '/eu/news/index.html' , 'class':'siteEU'},
				//{ 'name' : '&#x6FB3;&#x7D10;' , 'url' : '/au/news/index.html', 'class':'siteAU' },
				//{ 'name' : '&#x5176;&#x4ED6;' , 'url' : '/ot/news/index.html', 'class':'siteOT' }
			]
			
		},
		/*
		'starhall' : {
			'name' : '',
			'id' : 'starhall',
			'childs' : [
				{'name':'', 'url':'http://starhall.on.cc','class':'starhall'}
			]
		
		},*/
		'channel' : {
			'name' : '',
			'id' : 'siteChannel',
			'childs' : [
			
				{'name':'&#x6771;&#x7DB2;&#x96FB;&#x8996;', 'url':'http://tv.on.cc/' + (( window.location.href.indexOf('tw.on.cc') != -1 ) ? 'tw': 'hk' )+'/index.html', 'class' : 'ontv'},
				{'name':'&#x6771;&#x65B9;&#x65E5;&#x5831;&#32;&#45;&#32;<span class="remark">&#x7DB2;<span class="char"></span><span class="char"></span>&#x9801;</span>', 'url':'http://orientaldaily.on.cc', 'class' : 'odn'},
				{'name':'&#x592A;<span class="char">&#x967D;</span><span class="char2">&#x5831;</span>&#32;&#45;&#32;<span class="remark">&#x7DB2;<span class="char"></span><span class="char"></span>&#x9801;</span>', 'url':'http://the-sun.on.cc', 'class' : 'tsn'},
				
				{'name':'&#x6771;&#x65B9;&#x65E5;&#x5831;&#32;&#45;&#32;<span class="remark">&#x96FB;&#x5B50;&#x5831;</span>', 'url':'http://home.on.cc/epaper/home.html?pub=odn', 'chkEx':'epaper.on.cc/cgi-bin/index.cgi?pub=odn', 'class' : 'odn'},
				{'name':'&#x592A;<span class="char">&#x967D;</span><span class="char2">&#x5831;</span>&#32;&#45;&#32;<span class="remark">&#x96FB;&#x5B50;&#x5831;</span>', 'url':'http://home.on.cc/epaper/home.html?pub=tsn', 'chkEx':'epaper.on.cc/cgi-bin/index.cgi?pub=tsn', 'class' : 'tsn'},
				
				//{'name':'&#x6FB3;&#x9580;&#x6771;&#x65B9;&#32;&#45;&#32;<span class="remark">&#x96FB;&#x5B50;&#x5831;</span>', 'url':'http://macauoriental.on.cc/', 'class' : 'mod'},
				
				{'name':'&#x597D;<span class="char"></span><span class="char"></span><span class="char"></span><span class="char"></span>&#x5831;&#32;&#45;&#32;<span class="remark">&#x96FB;&#x5B50;&#x5831;</span>', 'url':'http://the-sun.on.cc/cgi-bin/good_news.cgi', 'class' : 'goodnews'},
				{'name':'&#x570B;&#x969B;&#x65E5;&#x5831;&#32;&#45;&#32;<span class="remark">&#x96FB;&#x5B50;&#x5831;</span>', 'url':'http://epaper.on.cc/idn/', 'chkEx':'http://epaper.on.cc/idn/', 'class' : 'idn'},
				
				{'name':'&#x7279;<span class="char"></span><span class="char"></span><span class="char"></span><span class="char"></span>&#x520A; - <span class="remark">&#x96FB;&#x5B50;&#x7248;</span>', 'url':'http://home.on.cc/epaper/home.html?pub=spe','class':'special'},
				
				{'name':'<span class="m18_1">&#x6771;&#x7DB2;</span>&#77;&#111;&#110;&#101;&#121;<span class="m18_1">&#49;&#56;</span>', 'url':'http://money18.on.cc','class':'money18'},
				
				{'name':'FLASHoN', 'url':'http://flashon.com','class':'flashon'},
				//{'name':'FLASHoN&#45;<span class="remark">&#x96FB;&#x5B50;&#x7248;</span>', 'url':'http://flashon.com/emagazine/', 'class' : 'flashon'},

				
				
				
				{'name':'&#x99AC;&#x7D93;', 'url':'http://racing.on.cc','class':'racing'},
				{'name':'&#x6CE2;&#x7D93;', 'url':'http://football.on.cc','class':'football'},
				{'name':'<span class="luxelife_1"></span>', 'url':'http://luxe.on.cc','class':'luxelife'},
				{'name':'<span class="baby_1"></span>', 'url':'http://baby.on.cc','class':'baby'},
				{'name':'<span class="starhall_1"></span>', 'url':'http://starhall.on.cc','class':'starhall'},
				{'name':'<span class="wacky_1"></span>', 'url':'http://wacky.on.cc','class':'wacky'},
				{'name':'<span class="wedding_1"></span>', 'url':'http://wedding.on.cc','class':'wedding'},
				//{'name':'&#x65B0;&#x805E;&#x5C08;&#x8F2F;', 'url':'specials.on.cc'},
				{'name':'&#x6435;&#x6A13;&#x31;&#x38;', 'url':'http://p18.on.cc','class':'property'},
				{'name': '&#x5206;&#x985E;&#x5EE3;&#x544A;', 'url': 'http://classified.on.cc','class':'classified' },
				{'name':'&#x6148;&#x5584;&#x57FA;&#x91D1;', 'url':'http://opg.on.cc/tc/odn_charity.html','class':'charity'}

			]
			
		},
		
		'opginfo' : {
			
			'name' : '',
			'id' : 'opginfo',
			'childs' : [
				{'name':'&#x5EE3;&#x544A;&#x50F9;&#x76EE;', 'url':'http://ad.on.cc/','class':'opginfo'},
				{'name':'&#x806F;&#x7D61;&#x67E5;&#x8A62;', 'url':'http://opg.on.cc/tc/contactus.html','class':'opginfo'},
				{'name':'&#x6703;&#x54E1;&#x901A;&#x8A0A;', 'url':'http://on.cc/cgi-bin/index_notice.cgi','class':'opginfo'},
				{'name':'&#x7248;&#x6B0A;&#x6536;&#x8CBB;', 'url':'http://on.cc/copyright/','class':'opginfo'},
				{'name':'&#x4F01;&#x696D;&#x95DC;&#x4FC2;', 'url':'http://opg.on.cc/tc/index.html','class':'opginfo'},
				{'name':'&#x514D;&#x8CAC;&#x8072;&#x660E;', 'url':'http://home.on.cc/disclaimer/index.html','class':'opginfo'}
				
			
			]	
		}
		
	
	},
	getSection: function() {
		var href = window.location.href;
		var rtnVal = {key:'', site:{}};
		for(var sectKey in this.sectionSet) {
			var childs = this.sectionSet[sectKey]['childs'];
			if (href.indexOf(this.sectionSet[sectKey]['url']) != -1) {
				rtnVal.key = sectKey;
			}
			for(var i = 0; i < childs.length; i++) {
				if(typeof childs[i] != 'undefined'){
					if(typeof childs[i]['chkEx'] == 'undefined'){
						var chkExp = childs[i]['url'];
					}else{
						var chkExp = childs[i]['chkEx'];
					}
					//var chkExp = (childs[i]['chkEx'] || childs[i]['url']);
					if (href.indexOf(chkExp) != -1) {
						rtnVal.key = sectKey;
						rtnVal.site = childs[i];
					}
				}
			}
		}
		return rtnVal;
	},
	
	getNation : function() {
		var domain = window.location.hostname;
		if ( domain == twdomain || domain == 'tw.on.cc' || domain == '202.125.90.158') {
			return 'tw';
		}
		
		if ( domain == hkdomain || domain == 'hk.on.cc' || domain == '202.125.90.157') {
			return 'hk';
		}
		
		if ( domain == hkdomain || domain == 'cn.on.cc' || domain == '202.125.90.159') {
			return 'cn';
		}
		
		return 'hk';
			
	},
	
	getCurrentSection: function() {
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
		} else if (url.indexOf('/weather/') !== -1) {
			return 'weather';
		}
		return null;
	},
	
	
	getLocation : function() {
		var href = window.location.href;
		
		if ( href.indexOf('/hk/') != -1 ) {
			return 'siteHK';	
		}
		
		if ( href.indexOf('/tw/') != -1 ) {
			return 'siteTW';	
		}
		
		if ( href.indexOf('/cn/') != -1 ) {
			return 'siteCN';	
		}
		
		if ( href.indexOf('/us/') != -1 ) {
			return 'siteUS';	
		}
		
		if ( href.indexOf('/eu/') != -1 ) {
			return 'siteEU';	
		}
		
		if ( href.indexOf('/au/') != -1 ) {
			return 'siteAU';	
		}
		
		if ( href.indexOf('/ot/') != -1 ) {
			return 'siteOT';	
		}
		
		if ( href.indexOf('/int/') != -1 ) {
			return 'siteINT';	
		}
			
		if ( $ONCC.corpBar.getNation() == 'hk' ) {
			return 'siteHK';
		} else if ( $ONCC.corpBar.getNation() == 'cn' ) {
			return 'siteCN';
		} else {
			return 'siteTW';
		}
		
	},
	getLocationPath : function() {
		return (this.getLocation().replace('site','')).toLowerCase();
	},
	
	getToday: function() {
		if (todaydate.length >= 8){
				var yyyy = todaydate.substring(0,4);
				var mm = parseInt(todaydate.substring(4,6), 10) - 1;
				var dd = todaydate.substring(6,8);
				var HH = (todaydate.length >= 10) ? todaydate.substring(8,10) : 0;
				var MM = (todaydate.length >= 12) ? todaydate.substring(10,12) : 0;
				var ss = (todaydate.length >= 14) ? todaydate.substring(12,14) : 0;
				return new Date(yyyy, mm, dd, HH, MM, ss);
		}
		return new Date();
	},
	
	print: function(miniMode) {
		
		if ( corpbarVersion*1  > 30 ) {
			document.write(this.renderMainMenu());
			if($ONCC.corpBar.getNation() == 'tw'){
				$('.hk_news').insertAfter('.tw_news');
				$('.hk_commentary').insertAfter('.tw_commentary');
			}
			if($ONCC.corpBar.getNation() == 'cn'){
				$('.cn_news').insertBefore('.hk_news');
				$('.cn_commentary').insertBefore('.hk_commentary');
			}
			//$('ul.mainmenu li.base_line').after('<div class="base_line"></div>');//ie bug
		}
			
	
		/*if (typeof miniMode !== 'undefined') {
			this.miniMode = miniMode;
		}
		document.write(this.render());*/
	},
	
	print_v3 : function() {
		
			
		if ( corpbarVersion*1  > 30 ) {
			
				var html = [];
				this.langConvert();
				//html.push(this.renderMainLogo());
				//html.push(this.renderODNNname());
				html.push(this.renderMainDate());  
				if ( $ONCC.corpBar.getNation() == 'hk' ) {
					html.push(this.renderMainWeather());  
				}
				html.push(this.renderLanguage());
				
				$('#sideLeft .gap').before(html.join(''));
				$.each ( $('#sideLeft .base_line') , function( k,v ) {
					$.each ( $(v).find('li'), function( k1,v1 ) {
						var menu_location = ( ONCC.getNation() == 'cn' && ONCC.getSection() != 'news' ) ? 'hk' : ONCC.getLocation();
						if ( $(v1).hasClass(  menu_location + "_" + ONCC.getSection().replace('style','').replace('ertainment','') ) ) {
							$(v).addClass('on');
							$(v1).addClass('on');
						}
					});
				});
				
			if($ONCC.corpBar.getNation() == 'tw'){
				$('.hk_news').insertAfter('.tw_news');
				$('.hk_commentary').insertAfter('.tw_commentary');
			}
			if($ONCC.corpBar.getNation() == 'cn'){
				$('.cn_news').insertBefore('.hk_news');
				$('.cn_commentary').insertBefore('.hk_commentary');
			}
			//$('ul.mainmenu li.base_line').after('<div class="base_line"></div>');//ie bug
		}
			
	
		
		
	},
	
	renderMainMenu : function() {
		var html = [];
		this.langConvert();
		html.push(this.renderMainLogo());
		html.push(this.renderODNNname());
		html.push(this.renderMainDate());  
		if ( $ONCC.corpBar.getNation() == 'hk' ) {
			html.push(this.renderMainWeather());  
		}
		html.push(this.renderLanguage());
		
		html.push(this.renderMainSection());
		
		for(var sectKey in this.sectionSet) {
			if(sectKey.indexOf('channel') != -1 || sectKey.indexOf('opginfo') != -1 || sectKey.indexOf('starhall') != -1){
				html.push(this.renderChildSection(sectKey));
			}
		}
		return html.join('');
	},
	
	langConvert : function() {
		
		if (  ($ONCC.cookie('lang') == 'cn' ) ) {
			for(var sectKey in this.sectionSet) {
				var childs = this.sectionSet[sectKey]['childs'];
			
				for(var i = 0; i < childs.length; i++) {
			
					if(typeof childs[i] != 'undefined'){
						childs[i]['name'] = $ONCC.lang.translate(childs[i]['name']);
					}
				}
			}
		}
		
		
	},
	
	renderMainLogo : function() {
		
		var html = [];
		html.push('<ul class="">');
		html.push('<li> <a href="http://' + $ONCC.corpBar.getNation() + '.on.cc" title="on.cc 東網"><img src="http://on.cc/img/oncc_logo_v2.png"></a></li>');
		html.push('</ul>');

		return  html.join('');
		
	},
	
	renderODNNname : function() {
		
		var html = [];
		html.push('<ul class="">');
		html.push('<li> <a href="http://' + $ONCC.corpBar.getNation() + '.on.cc" title="on.cc 東網"><img src="http://on.cc/img/oncc_name.png"></a></li>');
		html.push('</ul>');

		return html.join('');
		
	},
	
	renderMainDate : function() {
		if(typeof serverTime != 'undefined') {
            todaydate = serverTime;
        }
		var html = [];
		html.push('<ul id="dateInfo">');
		
		var weekdaysArray = new Array("&#x65E5;","&#x4E00;", "&#x4E8C;", "&#x4E09;", "&#x56DB;", "&#x4E94;", "&#x516D;");
		var td = this.getToday();
		html.push('<li class="">' + (td.getMonth()+1)+'&#x6708;'+td.getDate()+'&#x65E5; ('+weekdaysArray[td.getDay()] + ')</li>');
		//html.push('<li class="">'+td.getFullYear().toString()  + '&#24180;'+ (td.getMonth()+1)+'&#x6708;'+td.getDate()+'&#x65E5; ('+weekdaysArray[td.getDay()] + ')</li>');

		html.push('</ul>');

		return  html.join('');
		
	},
	
	renderLanguage : function() {
		
		var html = [];
		
		html.push('<ul id="languageInfo">');
		
		html.push('<li id="zh_lang" class="btn txt ' + ( ( $ONCC.curLang == '' ) ? 'on':'') + '">繁</li>');
		html.push('<li id="cn_lang" class="btn txt ' +  ((  $ONCC.curLang == '_cn' ) ? 'on':'') + ' ">简</li>');
		
		if ( $ONCC.corpBar.getCurrentSection() == 'weather' ) {
			var region = '<li id="region_change" class="txt btn disable">';
		} else {
			var region = '<li id="region_change" class="txt btn">';
		}
		var extLang = '';
		var path = '';

		if ( $ONCC.curLang == '_cn' ) {
			extLang = 'cn=true';
		} else {
			extLang = 'zh=true';
		}
		if($ONCC.corpBar.getNation() == 'hk'){
		
			// switch to same section
			if ( $ONCC.corpBar.getCurrentSection() == 'news' || $ONCC.corpBar.getCurrentSection() == 'commentary' ) {
				path = '/' + $ONCC.corpBar.getLocationPath() + '/' + $ONCC.corpBar.getCurrentSection() + '/index.html';
			} else {
				path = '/tw/' + $ONCC.corpBar.getCurrentSection() + '/index.html';
			}

			region += $ONCC.lang.translate('&#x6E2F;&#x6FB3;') + $ONCC.lang.translate('&#x7248;') + '<img class="region_menu_arrow" src="/img/v2/ic_arrow_grey2.gif">';
			region += '<ul id="region_menu">';
			region += '<li id="" class="item active"><div class="version_txt" >' + $ONCC.lang.translate('&#x5176;&#x4ED6;&#x7248;&#x672C;') + '</div></li>';
			//region += '<li id="region_hk" class="item active"><div>' +  $ONCC.lang.translate('&#x6E2F;&#x6FB3;') + $ONCC.lang.translate('&#x7248;') + '</div></li>';
			region += '<li id="region_tw" class="item"><a href="http://' + twdomain + (( location.port != "") ? ':' + location.port : '' ) + path + '?' + extLang + '" ><div>' +  $ONCC.lang.translate('&#21488;&#28771;') + $ONCC.lang.translate('&#x7248;') + '</div></a></li>';
			
			// switch to same section
			if ( $ONCC.corpBar.getCurrentSection() == 'news' || $ONCC.corpBar.getCurrentSection() == 'commentary' ) {
				path = '/' + $ONCC.corpBar.getLocationPath() + '/' + $ONCC.corpBar.getCurrentSection() + '/index.html';
				region += '<li id="region_cn" class="item"><a href="http://' + cndomain + (( location.port != "") ? ':' + location.port : '' ) + path + '?' + extLang + '" ><div>' +  $ONCC.lang.translate('&#x5927;&#x9678;') + $ONCC.lang.translate('&#x7248;') + '</div></a></li>';
	
			} else {
				path = '/hk/' + $ONCC.corpBar.getCurrentSection() + '/index.html';
				region += '<li id="region_cn" class="item"><a href="http://' + cndomain + (( location.port != "") ? ':' + location.port : '' ) + path + '?' + extLang + '" ><div>' +  $ONCC.lang.translate('&#x5927;&#x9678;') + $ONCC.lang.translate('&#x7248;') + '</div></a></li>';
	
			}
			
		}
		
		if($ONCC.corpBar.getNation() == 'tw'){
			
			// switch to same section
			if ( $ONCC.corpBar.getCurrentSection() == 'news' || $ONCC.corpBar.getCurrentSection() == 'commentary' ) {
				path = '/' + $ONCC.corpBar.getLocationPath() + '/' + $ONCC.corpBar.getCurrentSection() + '/index.html';
			} else {
				path = '/hk/' + $ONCC.corpBar.getCurrentSection() + '/index.html';
			}
			
			region +=  $ONCC.lang.translate('&#21488;&#28771;') + $ONCC.lang.translate('&#x7248;') + '<img class="region_menu_arrow" src="/img/v2/ic_arrow_grey2.gif">';
			region += '<ul id="region_menu">';
			region += '<li id="" class="item active"><div  class="version_txt" >' + $ONCC.lang.translate('&#x5176;&#x4ED6;&#x7248;&#x672C;') + '</div></li>';
			region += '<li id="region_hk" class="item"><a href="http://' + hkdomain + (( location.port != "") ? ':' + location.port : '' ) + path + '?' + extLang + '" ><div>' +  $ONCC.lang.translate('&#x6E2F;&#x6FB3;') + $ONCC.lang.translate('&#x7248;') + '</div></a></li>';
			//region += '<li id="region_tw" class="item active"><div>' +  $ONCC.lang.translate('&#21488;&#28771;') + $ONCC.lang.translate('&#x7248;') + '</div></li>';
			region += '<li id="region_cn" class="item"><a href="http://' + cndomain + (( location.port != "") ? ':' + location.port : '' ) + path + '?' + extLang + '" ><div>' +  $ONCC.lang.translate('&#x5927;&#x9678;') + $ONCC.lang.translate('&#x7248;') + '</div></a></li>';
		
		}
		
		if($ONCC.corpBar.getNation() == 'cn'){
			
			// switch to same section
			if ( $ONCC.corpBar.getCurrentSection() == 'news' || $ONCC.corpBar.getCurrentSection() == 'commentary' ) {
				path = '/' + $ONCC.corpBar.getLocationPath() + '/' + $ONCC.corpBar.getCurrentSection() + '/index.html';
			} else {
				path = '/hk/' + $ONCC.corpBar.getCurrentSection() + '/index.html';
			}
			
			region +=  $ONCC.lang.translate('&#x5927;&#x9678;') + $ONCC.lang.translate('&#x7248;') + '<img class="region_menu_arrow" src="/img/v2/ic_arrow_grey2.gif">';
			region += '<ul id="region_menu">';
			region += '<li id="" class="item active"><div  class="version_txt" >' + $ONCC.lang.translate('&#x5176;&#x4ED6;&#x7248;&#x672C;') + '</div></li>';
			region += '<li id="region_hk" class="item"><a href="http://' + hkdomain + (( location.port != "") ? ':' + location.port : '' ) + path + '?' + extLang + '" ><div>' +  $ONCC.lang.translate('&#x6E2F;&#x6FB3;') + $ONCC.lang.translate('&#x7248;') + '</div></a></li>';
			
			if ( $ONCC.corpBar.getCurrentSection() == 'news' || $ONCC.corpBar.getCurrentSection() == 'commentary' ) {
				path = '/' + $ONCC.corpBar.getLocationPath() + '/' + $ONCC.corpBar.getCurrentSection() + '/index.html';
				region += '<li id="region_tw" class="item"><a href="http://' + twdomain + (( location.port != "") ? ':' + location.port : '' ) + path + '?' + extLang + '" ><div>' +  $ONCC.lang.translate('&#21488;&#28771;') + $ONCC.lang.translate('&#x7248;') + '</div></a></li>';
			
			} else {
				path = '/tw/' + $ONCC.corpBar.getCurrentSection() + '/index.html';
				region += '<li id="region_tw" class="item"><a href="http://' + twdomain + (( location.port != "") ? ':' + location.port : '' ) + path + '?' + extLang + '" ><div>' +  $ONCC.lang.translate('&#21488;&#28771;') + $ONCC.lang.translate('&#x7248;') + '</div></a></li>';
			
			}
			
			//region += '<li id="region_cn" class="item active"><div>' +  $ONCC.lang.translate('&#x5927;&#x9678;') + $ONCC.lang.translate('&#x7248;') + '</div></li>';
		}
		
		
		
		/*if($ONCC.corpBar.curLocation != 'siteCN'){
			region += '<li id="region_ch" class="item"><a href="#" ><div>大陸</div></a></li>';
		}
		
		region += '<li id="region_us" class="item"><div>美加</div></li>';
		region += '<li id="region_eur" class="item"><div>歐洲</div></li>';
		region += '<li id="region_aus" class="item"><div>澳紐</div></li>';
		region += '<li id="region_other" class="item"><div>其他</div></li>';
		*/
		region += '</ul>';
		region += '</li>';
		html.push(region);
		//html.push('<li id="region_change"><div class="txt on">身份轉換</div></li>');	
		
		//html.push('<li class="btn" onMouseOver="$ONCC.corpBar.showSubMenu(this)" onMouseOut="'+onMouseOutFunc+'"><a href="http://'+this.sectionSet[sectKey]['url']+'" class="'+sectKey+'" title="'+this.sectionSet[sectKey]['name']+'"><em>'+this.sectionSet[sectKey]['name']+'</em></a>');
		
		html.push('</ul><div class="gap"></div>');	
		
		return html.join('');
	},
	
	renderLanguageMenu : function() {
		
	},
	renderMainSection:function(){
		var menu = this.mainMenuSet;
		var html = '';
		var _this = this;
		html += '<ul class="mainmenu">';
		$.each(menu,function(){
			html += _this.renderNode(this);
		})
		html += '</ul>';
		return html;
	},
	renderNode:function(node){
		if(!node){return false;}
		var html = '';
		var _this = this;
		var nation = $ONCC.corpBar.getNation(); 
		var location = $ONCC.corpBar.getLocationPath();
		var section = $ONCC.corpBar.getCurrentSection();
		var cls = '';
		var root = (typeof node.root != 'undefined')?node.root:false;
		if(node.location != null && node.location.indexOf(location) != -1 && node.section.indexOf(section) != -1){
			cls = 'on';
		}
		if(node.nation != null && node.nation.indexOf(nation) != -1){
			if(node.id){
				if(node.link){
					
					if ( node.link.indexOf('http://') == -1 ) {
					
						if ( window.location.hostname == '15.15.4.162' || window.location.hostname == '202.125.90.157' || window.location.hostname == '202.125.90.158'  || window.location.hostname == '202.125.90.159' || window.location.hostname == '202.125.90.119' || window.location.hostname == '202.125.90.7' || window.location.hostname == '202.125.90.28' || window.location.hostname == '127.0.0.1' || window.location.hostname == '192.168.1.1'  || window.location.hostname == 'localhost' ) {
							html += ('<li class="linking '+(root?'root':'')+' '+node.cls+' '+cls+' '+node.id+'"><a href="' + node.link+'" '+(node.target?'target="'+node.target+'"':'')+'><div class="line">'+(node.cls.indexOf('circle')!=-1?'<span class="bullet">&nbsp;&#8226;&nbsp;</span>':'')+'<span class="lang">'+$ONCC.lang.translate(node.name)+'</span>'+'</div></a>');
						} else {
							
							//html.push('<a href="' + (( $ONCC.curLang == '_cn') ? childs[i]['url'].replace('index.html','index_cn.html') : childs[i]['url']) + '" ' + ((childs[i]['class'])?'class="'  + childs[i]['class'] + '"':'') + ' target="_blank">'  + childs[i]['name'] + '</a>');
							//if (( node.id.indexOf('commentary') != -1 && $ONCC.corpBar.getNation() == 'tw' ) || $ONCC.corpBar.getNation() == 'hk' || $ONCC.corpBar.getNation() == 'cn'  ) {
							if ( node.id.indexOf('commentary') != -1 ) {
								html += ('<li class="linking '+(root?'root':'')+' '+node.cls+' '+cls+' '+node.id+'"><a href="http://' + $ONCC.corpBar.getNation() + '.on.cc' + node.link+'" '+(node.target?'target="'+node.target+'"':'')+'><div class="line">'+(node.cls.indexOf('circle')!=-1?'<span class="bullet">&nbsp;&#8226;&nbsp;</span>':'')+'<span class="lang">'+$ONCC.lang.translate(node.name)+'</span>'+'</div></a>');
							} else {
								html += ('<li class="linking '+(root?'root':'')+' '+node.cls+' '+cls+' '+node.id+'"><a href="http://' + $ONCC.corpBar.getNation() + '.on.cc' + (( $ONCC.curLang == '_cn') ? node.link.replace('index.html','index_cn.html'):node.link) +'" '+(node.target?'target="'+node.target+'"':'')+'><div class="line">'+(node.cls.indexOf('circle')!=-1?'<span class="bullet">&nbsp;&#8226;&nbsp;</span>':'')+'<span class="lang">'+$ONCC.lang.translate(node.name)+'</span>'+'</div></a>');
							}
							
							
						}
					} else {
						html += ('<li class="linking '+(root?'root':'')+' '+node.cls+' '+cls+' '+node.id+'"><a href="'+node.link+'" '+(node.target?'target="'+node.target+'"':'')+'><div class="line">'+(node.cls.indexOf('circle')!=-1?'<span class="bullet">&nbsp;&#8226;&nbsp;</span>':'')+'<span class="lang">'+$ONCC.lang.translate(node.name)+'</span>'+'</div></a>');
					}
				}else{
					html += ('<li class="'+node.cls+' '+cls+' '+(root?'root':'')+' '+node.id+'" ><div class="line">'+(node.cls.indexOf('circle')!=-1?'<span class="bullet">&nbsp;&#8226;&nbsp;</span>':'')+'<span class="lang"><span class="bullet">&nbsp;&#8226;&nbsp;</span>'+$ONCC.lang.translate(node.name)+'</span></div>');
				}
			}else{
				html += ('<li class="'+node.cls+' '+cls+' '+(root?'root':'')+' '+node.id+'" >');
			}
			if(node.node){
				html += ('<ul class="'+node.cls+'">');
				$.each(node.node,function(){
					html += (_this.renderNode(this,root));
				})
				html += ('</ul>');
			}
			html += ('</li>');
		}
		return html;

	},
	renderChildSection : function ( sectKey ) {
		
			
			if ( sectKey.indexOf('location') !== -1 ) {
				if (  this.sectionSet[sectKey]['id'] != this.curLocation ) {
					return '';	
				}
			}
			
			
			var html = [];
			var addClass =  [];
			
			
			html.push('<ul id="' + this.sectionSet[sectKey]['id'] +  '">');

			var childs = this.sectionSet[sectKey]['childs'];
			
			for(var i = 0; i < childs.length; i++) {
				
				
				addClass = [];
				
				if ( this.curLocation ==  this.sectionSet[sectKey]['id'] ) {
					
					if ( typeof ( childs[i] ) != 'undefined' ) {
						if (childs[i]['class']) {
							
							if ( window.location.href.indexOf('/' + childs[i]['class'] + '/') != -1 ) {
								addClass.push('on');
							}
						}
					}
				}
				
				if ( i == 0 ) {
					addClass.push('first');
				}

							
				if ( typeof ( childs[i]) != 'undefined' ) {
					if ( childs[i]['class'] != this.curLocation ) {
					
						html.push('<li ' + (( addClass.length > 0 ) ? 'class="' + addClass.join(' ')+ '"' : '' ) + '>');
	
						if ( childs[i]['url'] != '' ) {
							if ( childs[i]['url'].indexOf('http://') == -1 ) {
								html.push('<a href="http://' + $ONCC.corpBar.getNation() + '.on.cc' + childs[i]['url'] + '" ' + ((childs[i]['class'])?'class="'  + childs[i]['class'] + '"':'') + '>'  + childs[i]['name'] + '</a>');
							} else {
								html.push('<a href="' + childs[i]['url'] + '" ' + ((childs[i]['class'])?'class="'  + childs[i]['class'] + '"':'') + ' target="_blank">'  + childs[i]['name'] + '</a>');
							}
						} else {
							html.push( childs[i]['name']);
						}
						html.push('</li>');
					}
				}
				/*var chkExp = (childs[i]['chkEx'] || childs[i]['url']);
				if (href.indexOf(chkExp) != -1) {
					rtnVal.key = sectKey;
					rtnVal.site = childs[i];
				}*/
			}
			
			html.push('</ul>');

			
			
			return  html.join('');
			
		
			//var onMouseOutFunc = (window.location.href.indexOf('/cgi-bin/index.cgi?pub=') != -1) ? '$ONCC.corpBar.closeSubMenu()' : '$ONCC.corpBar.hideSubMenu()'; //fix epaper crazy flash affect settimeout
			/*html.push('<li class="btn'+isOn+'" onMouseOver="$ONCC.corpBar.showSubMenu(this)" onMouseOut="'+onMouseOutFunc+'"><a href="http://'+this.sectionSet[sectKey]['url']+'" class="'+sectKey+'" title="'+this.sectionSet[sectKey]['name']+'"><em>'+this.sectionSet[sectKey]['name']+'</em></a>');
			html.push(this.renderSubMenu(sectKey));
			html.push('</li><li class="spacer"></li>');
			*/
			
			
	},
	
	renderMainWeather : function() {
		
		 var html = [];
		 html.push('<ul id="weatherInfo">');
		 if(corpbar_weather_gif !='') {
			var icons = corpbar_weather_gif.split('|');
			var titles = corpbar_weather_gif_alt.split('|');
			for(var i=0; i<icons.length; i++)
			{
				html.push('<li><img src="'+$ONCC.domain+'/adv/web/corp/img/'+icons[i]+'" alt="'+titles[i]+'" title="'+titles[i]+'" style="vertical-align: middle; margin-right:4px;">');
			}
		}
		html.push( corpbar_temperature+'<img src="'+$ONCC.domain+'/adv/web/corp/img/oncc_deg.gif"></li>');
		html.push('</ul>');
		html.push('<ul id="weatherSection">'); 
		html.push('<li><a href="http://' +  $ONCC.corpBar.getNation()  + '.on.cc/hk/weather/index.html"><img src="http://hk.on.cc/img/v2/weather_icon.png"></a></li>');
		html.push('</ul>');
		 
		return html.join('');
		
	},
	
	
	
	render: function(miniMode) {
		var corpbarClass = (this.miniMode === true) ? ' class="mini"' : '';
		return '<div id="corpbar"'+corpbarClass+'>' + this.renderTop(this.miniMode) + this.renderBottom(this.miniMode) + '</div>';
	},
	renderTop: function() {
		var html = [];
		html.push('<div id="corpbar-top">');
		html.push('<ul class="clearList functionList">');
    	html.push((this.hidePromo) ? '<li><div id="corpbar-top-right-ctn"></div></li>' : this.renderSearchBox());
    	//html.push('<li class="topClassified"><a href="http://classified.on.cc" class="classified" title="&#x5206;&#x985E;&#x8CC7;&#x8A0A;"></a></li>');
    	html.push('</ul>');
		html.push(this.renderTopMenu());
		html.push('</div>');
		return html.join('');
	},
	renderBottom: function() {
		var html = [];
		html.push('<div id="corpbar-bottom">');
		html.push('<ul class="clearList miscInfo">');
    		html.push((this.hidePromo) ? this.renderSearchBox() : this.renderPromo());
		//html.push((this.hidePromo) ? this.renderSearchBox() : '');
        html.push(this.renderWeatherInfo());
		html.push(this.renderWeatherBreaking());
    	html.push('</ul>');
		html.push(this.renderSitePath());
		html.push('</div>');
		return html.join('');
	},
	renderTopMenu: function() {
		var html = [];
		html.push('<ul class="clearList menuList">');
		html.push('<li class="btn"><a href="http://on.cc/" class="logo" title="on.cc - &#x6771;&#x65B9;&#x5831;&#x696D;&#x96C6;&#x5718;&#x7DB2;&#x7AD9;"></a></li><li class="spacer"></li>');
		//html.push('<li class="btn" onMouseOver="$ONCC.corpBar.closeSubMenu()"><a href="http://tv.on.cc/" class="ontv" title="ontv"></a></li><li class="spacer"></li>');
		for(var sectKey in this.sectionSet) {
			var isOn = (this.curSect.key == sectKey) ? ' on' : '';
			var onMouseOutFunc = (window.location.href.indexOf('/cgi-bin/index.cgi?pub=') != -1) ? '$ONCC.corpBar.closeSubMenu()' : '$ONCC.corpBar.hideSubMenu()'; //fix epaper crazy flash affect settimeout
			html.push('<li class="btn'+isOn+'" onMouseOver="$ONCC.corpBar.showSubMenu(this)" onMouseOut="'+onMouseOutFunc+'"><a href="http://'+this.sectionSet[sectKey]['url']+'" class="'+sectKey+'" title="'+this.sectionSet[sectKey]['name']+'"><em>'+this.sectionSet[sectKey]['name']+'</em></a>');
			html.push(this.renderSubMenu(sectKey));
			html.push('</li><li class="spacer"></li>');
		}
		return html.join('');
	},
	renderSubMenu: function(sect) {
		var html = [];
		var spacer = function(num) {
			var rtnVal = '<tr>';
			for(var x = 1; x <= num; x++) {
				rtnVal += '<td class="hr"><div></div></td>';
			}
			rtnVal += '</tr>';
			return rtnVal;
		};
		var row = 5;
		var childs = this.sectionSet[sect]['childs'];
		if (childs.length > 0) {
			var cols = Math.ceil(childs.length/row);
			html.push('<div class="submenu" id="corpbar-submenu-'+sect+'"><table>');
			var maxRow = ((childs.length > row) ? row : childs.length);
			for(var i = 0; i < maxRow; i++) {
				html.push('<tr>');
				html.push('<td><a href="http://'+childs[i]['url']+'">&nbsp;'+childs[i]['name']+'&nbsp;</a></td>');
				for (var j = 1; j <= cols; j++) {
					var childsIdx = i+(row*j);
					if (childsIdx < childs.length) {
						html.push('<td><a href="http://'+childs[childsIdx]['url']+'">&nbsp;'+childs[childsIdx]['name']+'&nbsp;</a></td>');
					} else {
						html.push('<td></td>');
					}
				}
			
				html.push('</tr>');
				if (i < maxRow -1) {
					html.push(spacer(cols));
				}
			}
			html.push('</table></div>');
		}
		return html.join('');
	},
	renderPromo: function() {
		/*
		var html = '';
		var promoSet = corp_promo_list;
		if (promoSet.length > 3) {
			var rndSet = [];
			while (rndSet.length < 3) {
				var rndIdx = Math.floor((Math.random()*promoSet.length));
				rndSet.push(promoSet[rndIdx]);
				promoSet.splice(rndIdx,1);
			}
			promoSet = rndSet;
		}
		html += '<li class="promoInfo">&nbsp;&#x63A8;&#x4ECB;&#x003A;';
		for (var i = 0; i < promoSet.length; i++) {
			html += '<a href="'+promoSet[i].promolink+'" target="_top">'+promoSet[i].promoname+'</a>';
		}
		html += '</li>';
		return html;
		*/

		var randArrayindex;
		if(yahoo_keyword_list.length > 3)
		{
			randArrayindex = this.randomXnumberfromY(3, yahoo_keyword_list.length);
		}
		else
		{
			randArrayindex = new Array();
			for(var i=0; i<yahoo_keyword_list.length; i++)
			{
				randArrayindex.push(i);
			}
		}
		var yahoo_keywords_text= "";
		yahoo_keywords_text+= '<li class="promoInfo">&nbsp;&#x71B1;&#x9580;';
		for(var i=0; i<randArrayindex.length; i++)
		{
			yahoo_keywords_text += '<a href="http://home.on.cc/search/index.html?o=0&sk='+ encodeURIComponent(yahoo_keyword_list[randArrayindex[i]].promoname1) +'&x=0&y=0"  >'+yahoo_keyword_list[randArrayindex[i]].promoname1 +'&nbsp;</a>';
		}
		yahoo_keywords_text += '</li>';
		//document.getElementById("corp_promo_links").innerHTML = yahoo_keywords_text;
		return yahoo_keywords_text;

	},
	renderSearchBox: function() {
		return '<li class="yahoo"><iframe src="'+$ONCC.domain+'/adv/web/corp/js/searchbox.html?ref='+document.domain+'" width="212" height="20" frameborder="0" scrolling="no"></iframe></li>';
	},
	renderWeatherInfo: function() {
		var td = this.getToday();
		var weekdaysArray = new Array("&#x65E5;","&#x4E00;", "&#x4E8C;", "&#x4E09;", "&#x56DB;", "&#x4E94;", "&#x516D;");
		var html = '';
		if(corpbar_weather_gif !='') {
			html += '<li class="weatherIcon">';
			var icons = corpbar_weather_gif.split('|');
			var titles = corpbar_weather_gif_alt.split('|');
			for(var i=0; i<icons.length; i++)
			{
				html += ' <img src="'+$ONCC.domain+'/adv/web/corp/img/'+icons[i]+'" alt="'+titles[i]+'" title="'+titles[i]+'">';
			}
			html += '</li>';
		}
		html += '<li class="weatherInfo">'+(td.getMonth()+1)+'&#x6708;'+td.getDate()+'&#x65E5; ('+weekdaysArray[td.getDay()]+') '+corpbar_temperature+'<img src="'+$ONCC.domain+'/adv/web/corp/img/oncc_deg.gif"></li>';
		return html;
	},
	renderWeatherBreaking: function(miniMode) {
		var html = '';
		//corpbar_weather_rolltext = '&#x6E2C;&#x8A66;&#x5929;&#x6587;Breaking&#x8D70;&#x99AC;&#x71C8;!!!!&#x6E2C;&#x8A66;&#x5929;&#x6587;Breaking&#x8D70;&#x99AC;&#x71C8;!!!!';
		if (corpbar_weather_rolltext !="")
		{
			html += '<li class="weatherBreaking"><table><tr><td><marquee scrollamount="2" scrolldelay="10"><a href="http://news.on.cc/cnt/weather/index.html" target="_top">'+corpbar_weather_rolltext+'</a></marquee></td></tr></table></li>';
		}
		//html += '<li class="bottomClassified"><a href="http://classified.on.cc" class="classified" title="&#x5206;&#x985E;&#x8CC7;&#x8A0A;"></a></li>';;
		return html;
	},
	renderSitePath: function() {
		var html = '';
		var firstNodeUrl = 'http://on.cc';
		var firstNodeName = 'on.cc&nbsp;&#x6771;&#x65B9;&#x4E92;&#x52D5; &#x4E3B;&#x9801;';
		if (this.curSect.key != '') {
			firstNodeUrl ='http://'+this.sectionSet[this.curSect.key]['url'];
			firstNodeName += '('+this.sectionSet[this.curSect.key]['name']+')';
		}
		html += '<div class="sitePath"><a href="'+firstNodeUrl+'" target="_top">'+firstNodeName+'</a> &gt; ';
		if (typeof this.curSect.site['name'] != 'undefined') {
			html += '<span><a href="http://'+this.curSect.site['url']+'" target="_top">'+this.curSect.site['name']+'</a></span>';
		}
		html += '</div>';
		return html;
	},
	subMenuTimeId: null,
	curSubMenu: null,
	showSubMenu: function(elem) {
		if (this.subMenuTimeId != null) {
			clearTimeout(this.subMenuTimeId);
		}
		if (elem != this.curSubMenu) this.closeSubMenu();
		if (elem.childNodes.length > 1) { 
			if (elem.className.indexOf('on') == -1) {
				elem.className = elem.className + ' hover';
			}
			this.curSubMenu = elem.childNodes[1];
			this.curSubMenu.style.display = 'block';
		}
	},
	closeSubMenu: function() {
		if (this.curSubMenu != null) {
			this.curSubMenu.style.display = 'none';
			if (this.curSubMenu.parentNode.className.indexOf(' hover') != -1) {
				this.curSubMenu.parentNode.className = this.curSubMenu.parentNode.className.replace(' hover', '');
			}
			this.curSubMenu = null;
		}
	},
	hideSubMenu: function() {
		if (this.subMenuTimeId != null) {
			clearTimeout(this.subMenuTimeId);
		}
		this.subMenuTimeId = setTimeout("$ONCC.corpBar.closeSubMenu()", 200);
	},
	writeScript: function (url) {
		document.write(unescape("%3Cscript src='"+url+"' type='text/javascript'%3E%3C/script%3E"));
	},
	getTimeStamp: function (daily) {
		var today = new Date();
		if (daily) return today.getFullYear().toString() + today.getMonth().toString() + today.getDate().toString();
		var tString =  today.getTime().toString();
		return tString.substring(0,tString.length-3)+'9'+tString.substring(tString.length-2,tString.length);
	},
	randomXnumberfromY: function(inX, inY)
	{
		var randomXnumberArray = new Array();
		for(var i=0; i<inX; i++)
		{
			var this_rand_no = parseInt((Math.random()*inY)+"");
			var ok = 0;
			while(ok == 0)
			{
				var repeat = 0;
				for (var j=0; j<randomXnumberArray.length; j++)
				{
					if(this_rand_no == randomXnumberArray[j])
					{
						repeat = 1;
					}
				}
				if(repeat == 1)
				{
					this_rand_no = parseInt((Math.random()*inY)+"");
				}
				else
				{
					ok = 1;
				}
			}
			randomXnumberArray.push(this_rand_no);
		}
		return randomXnumberArray;
	}
}









if (typeof $ONCC_CORPBAR_NOINIT === 'undefined') {
	$ONCC.corpBar.init();
}
$ONCC.footer = {
	crYear: '2015', //copyright year
	slogan: {
		'odn': '&#x6771;&#x65B9;&#x65E5;&#x5831;&#x9999;&#x6E2F;&#x4EBA;&#x7684;&#x5831;&#x7D19; &#x5FC5;&#x7136;&#x9996;&#x9078; &#x9023;&#x7E8C;39&#x5E74;&#x9999;&#x6E2F;&#x92B7;&#x91CF;&#x7B2C;&#x4E00;'
	},
	copyRightSet: {
		'default': '&#x7248;&#x6B0A;&#x6240;&#x6709; &copy; {crYear} ON.CC (BVI) LTD. All rights reserved.',
		'corp_eng': 'Copyright &copy; {crYear} ON.CC (BVI) LTD. All rights reserved.'
	},
	/*
	recommendSet: {
		'default': '&#x5EFA;&#x8B70;&#x4F7F;&#x7528;&#x5FAE;&#x8EDF;Internet Explorer 5.5 &#x6216;&#x4EE5;&#x4E0A;&#x7248;&#x672C;&#x53CA;&#x700F;&#x89BD;&#x89E3;&#x8C61;&#x5EA6;&#x70BA; 1024 x 768',
		'corp_eng': 'Best viewed with IE 5.5 or above and 1024 x 768 resolution are recommended.'
	},
	*/
	menuItemSet : {
	'0': '<a href="http://ad.on.cc/" target="_blank">&#x5EE3;&#x544A;&#x50F9;&#x76EE;</a>',
		'1': '<a href="http://opg.on.cc/tc/contactus.html" target="_blank">&#x806F;&#x7D61;&#x67E5;&#x8A62;</a>',
		'2': '<a href="http://on.cc/cgi-bin/index_notice.cgi" target="_blank">&#x6703;&#x54E1;&#x901A;&#x8A0A;</a>',
		'3': '<a href="http://on.cc/copyright/" target="_blank">&#x7248;&#x6B0A;&#x6536;&#x8CBB;</a>',
		'4': '<a href="http://opg.on.cc/tc/index.html" target="_blank">&#x4F01;&#x696D;&#x95DC;&#x4FC2;</a>',
		'5': '<a href="http://home.on.cc/disclaimer/index.html" target="_blank">&#x514D;&#x8CAC;&#x8072;&#x660E;</a>'		
	},
	menuGroup: {
		'default': ['0','1','2','3','4','5'],
		'ireport':['0','1','2','3','4','5'],
		'ontv': ['0','1','2','3','4','5'],
		'finance':['0','1','2','3','4','5'],
		'property': ['0','1','2','3','4','5']
	},
	getCopyRight: function(sect) {
		var rtnVal = this.copyRightSet['default'];
		if (typeof this.copyRightSet[sect] != 'undefined') {
			rtnVal = this.copyRightSet[sect];
		}
				
		this.setupAnalytics( sect );
		
		return rtnVal.replace('{crYear}', this.crYear);
	},
	
	setupAnalytics: function( sect ) {
		// s:Load Comscore tag
		setTimeout(('$ONCC.footer.setCSTag("'+sect+'")'), 1);
		// e:Load Comscore tag
		// s:Load Google Analytics
		if (( window.location.hostname == "tw.on.cc" ) || ( window.location.hostname == "cn.on.cc" ) || ( window.location.hostname == "hk.on.cc" ) || ( window.location.hostname == "orientaldaily.on.cc" ) || ( window.location.hostname == "the-sun.on.cc" )) {
			setTimeout(('$ONCC.footer.setGATag()'), 1);
		}
		
		// e:Load Google Analytics
		
	},
	getRecommend: function(sect) {
		/*
		remove browser recommend text
		var rtnVal = this.recommendSet['default'];
		if (typeof this.recommendSet[sect] != 'undefined') {
			rtnVal = this.recommendSet[sect];
		}
		*/
		return '';
	},
	getMenuList: function(sect, attr) {
		var ml = [];
		var mg = this.menuGroup['default'];
		if (typeof this.menuGroup[sect] != 'undefined') {
			mg = this.menuGroup[sect];
		}
		for(var i = 0; i < mg.length; i++) {
			var item = this.menuItemSet[mg[i]];
			if (typeof(attr) != 'undefined' && attr != '') {
				item = item.replace('">', '" '+attr+'>');
			}
			if (mg[i] == '3') {
				item = item.replace('{referCode}', this.getReferCode(sect));
			}
			ml.push(item);
		}
		return ml;
	},
	getReferCode: function(sect) {
		var rtnVal = 'O';
		switch(sect) {
			case 'odn': rtnVal = 'YO'; break;
			case 'tsn': rtnVal = 'YT'; break;
			case 'oncc': rtnVal = 'O'; break;
			case 'mobile': rtnVal = 'OM'; break;
			case 'ireport': rtnVal = 'RE'; break;
			case 'car': case 'classified': rtnVal = 'OC'; break;
			case 'racing': case 'football': rtnVal = 'OR'; break;
			case 'ecard': rtnVal = 'OE'; break;
			case 'life': case 'travel': rtnVal = 'OT'; break;
			case 'ncnews': rtnVal = 'ONEWS'; break;
			case 'ontv': case 'video': rtnVal = 'OVI'; break;
			case 'finance': rtnVal = 'M18'; break;
			case 'world': rtnVal = 'OSN'; break;
			case 'food': rtnVal = 'FO'; break;
			case 'property': rtnVal = 'PTY'; break;
		}
		return rtnVal;
	},
	getSlogan: function(sect) {
		return this.slogan[sect];
	},
	// s:Comscore tagging
	setCSTag: function(sect) {
		//if (sect==='tsn'||sect==='ontv') {
			if (typeof _comscore==='undefined') {_comscore = []}
			_comscore.push({c1:2,c2:'7914332',c3:'',c4:'',c5:'',c6:'',c15:''});
			(function(){
				var csInsertionPoint = document.getElementsByTagName('script')[0],
					csScript = document.createElement('script');
				csScript.src = 
					(document.location.protocol==='https:'?'https://sb':'http://b') + 
					'.scorecardresearch.com/beacon.js?t='+
					((function(){var today = new Date();return today.getFullYear().toString() + today.getMonth().toString() + today.getDate().toString()})());
				csScript.async = true;
				csInsertionPoint.parentNode.insertBefore(csScript, csInsertionPoint);
			})();
		//}
	},
	// e:Comscore tagging
	
	setGATag: function() {
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		 
		  ga('create', 'UA-57924738-1', window.location.hostname);
		  ga('send', 'pageview');
		//}
	}
}

//s:compatiable function(old corpbar)
function pbmenu(sectcode) {
	var attr;
	var html = '';
	var mSplit = ' <span style="color:#999999;font-size:12px">|</span> ';
	switch(sectcode) {
		case 'tsnmain': attr='tsnfooter'; break;
		case 'car': case 'ecard': attr='foot'; break;
		default: attr='LowLink';
	}
	attr = ' class="'+attr+'"';
	if (sectcode == 'ireport') {
		attr = ' style="font-size:12px;"';
		html += '<div'+attr+'><div>* &#x500B;&#x5225;&#x624B;&#x6A5F;&#x7DB2;&#x7D61;&#x5546;&#x53EF;&#x80FD;&#x6536;&#x53D6;&#x6578;&#x64DA;&#x670D;&#x52D9;&#x8CBB;&#x7528;&#x003B;&#x5831;&#x6599;&#x8ACB;&#x700F;&#x89BD;&#x4EBA;&#x4EBA;&#x505A;&#x8A18;&#x8005;&#x4F7F;&#x7528;&#x689D;&#x6B3E;</div>';
	}
	html += mSplit + $ONCC.footer.getMenuList(sectcode, attr).join(mSplit) + mSplit;
	if (sectcode == 'ireport') {
		html += '</div>';
	}
	document.write(html);
}
function pyear(pub) {
	document.write($ONCC.footer.getCopyRight(pub));
}
function get_bottom(pub) {
	return $ONCC.footer.getCopyRight(pub);
}
function pyear_xsl(pub) {
	return $ONCC.footer.getCopyRight(pub);
}
function uniprint(args) {
	//document.write('<div id="debugLog" style="height:200px;overflow:scroll"></div>');
	$ONCC.corpBar.print(args);
}
function uniprint_xsl() {
	document.getElementById("corpbar").innerHTML = $ONCC.corpBar.render();
}
function triming(str){
	return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}
//e:compatiable function(old corpbar)

