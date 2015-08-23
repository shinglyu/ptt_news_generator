// JavaScript Document

var Urchin = {
	
	//domain: 'home.on.cc',
	domain: window.location.hostname,
	ugifpath : '/img/__utm.gif',
	current_path : '',
	
	matching : {
'polling' : 'polling_%E6%B0%91%E6%84%8F%E8%AA%BF%E6%9F%A5',
'sitemap' : 'sitemap_%E7%B6%B2%E7%AB%99%E5%9C%B0%E5%9C%96',
'hk_index_news' : 'hk_index_news_%E9%A6%99%E6%B8%AF%E6%96%B0%E8%81%9E%E4%B8%BB%E9%A0%81',
'hk_index_commentary' : 'hk_index_commentary_%E9%A6%99%E6%B8%AF%E8%A9%95%E8%AB%96%E4%B8%BB%E9%A0%81',
'hk_index_finance' : 'hk_index_finance_%E9%A6%99%E6%B8%AF%E8%B2%A1%E7%B6%93%E4%B8%BB%E9%A0%81',
'hk_index_sport' : 'hk_index_sport_%E9%A6%99%E6%B8%AF%E9%AB%94%E8%82%B2%E4%B8%BB%E9%A0%81',
'hk_index_lifestyle' : 'hk_index_lifestyle_%E9%A6%99%E6%B8%AF%E7%94%9F%E6%B4%BB%E4%B8%BB%E9%A0%81',
'hk_index_entertainment' : 'hk_index_entertainment_%E9%A6%99%E6%B8%AF%E5%A8%9B%E6%A8%82%E4%B8%BB%E9%A0%81',
'hk_list_news' : 'hk_list_news_%E9%A6%99%E6%B8%AF%E6%96%B0%E8%81%9E%E5%88%97%E8%A1%A8',
'hk_list_commentary' : 'hk_list_commentary_%E9%A6%99%E6%B8%AF%E8%A9%95%E8%AB%96%E5%88%97%E8%A1%A8',
'hk_list_finance' : 'hk_list_finance_%E9%A6%99%E6%B8%AF%E8%B2%A1%E7%B6%93%E5%88%97%E8%A1%A8',
'hk_list_sport' : 'hk_list_sport_%E9%A6%99%E6%B8%AF%E9%AB%94%E8%82%B2%E5%88%97%E8%A1%A8',
'hk_list_lifestyle' : 'hk_list_lifestyle_%E9%A6%99%E6%B8%AF%E7%94%9F%E6%B4%BB%E5%88%97%E8%A1%A8',
'hk_list_entertainment' : 'hk_list_entertainment_%E9%A6%99%E6%B8%AF%E5%A8%9B%E6%A8%82%E5%88%97%E8%A1%A8',
'hk_content_news' : 'hk_content_news_%E9%A6%99%E6%B8%AF%E6%96%B0%E8%81%9E%E5%85%A7%E5%AE%B9',
'hk_content_commentary' : 'hk_content_commentary_%E9%A6%99%E6%B8%AF%E8%A9%95%E8%AB%96%E5%85%A7%E5%AE%B9',
'hk_content_finance' : 'hk_content_finance_%E9%A6%99%E6%B8%AF%E8%B2%A1%E7%B6%93%E5%85%A7%E5%AE%B9',
'hk_content_sport' : 'hk_content_sport_%E9%A6%99%E6%B8%AF%E9%AB%94%E8%82%B2%E5%85%A7%E5%AE%B9',
'hk_content_lifestyle' : 'hk_content_lifestyle_%E9%A6%99%E6%B8%AF%E7%94%9F%E6%B4%BB%E5%85%A7%E5%AE%B9',
'hk_content_entertainment' : 'hk_content_entertainment_%E9%A6%99%E6%B8%AF%E5%A8%9B%E6%A8%82%E5%85%A7%E5%AE%B9',
'cn_index_news' : 'cn_index_news_%E5%A4%A7%E9%99%B8%E6%96%B0%E8%81%9E%E4%B8%BB%E9%A0%81',
'cn_index_commentary' : 'cn_index_commentary_%E5%A4%A7%E9%99%B8%E8%A9%95%E8%AB%96%E4%B8%BB%E9%A0%81',
'cn_index_finance' : 'cn_index_finance_%E5%A4%A7%E9%99%B8%E8%B2%A1%E7%B6%93%E4%B8%BB%E9%A0%81',
'cn_index_sport' : 'cn_index_sport_%E5%A4%A7%E9%99%B8%E9%AB%94%E8%82%B2%E4%B8%BB%E9%A0%81',
'cn_index_lifestyle' : 'cn_index_lifestyle_%E5%A4%A7%E9%99%B8%E7%94%9F%E6%B4%BB%E4%B8%BB%E9%A0%81',
'cn_index_entertainment' : 'cn_index_entertainment_%E5%A4%A7%E9%99%B8%E5%A8%9B%E6%A8%82%E4%B8%BB%E9%A0%81',
'cn_list_news' : 'cn_list_news_%E5%A4%A7%E9%99%B8%E6%96%B0%E8%81%9E%E5%88%97%E8%A1%A8',
'cn_list_commentary' : 'cn_list_commentary_%E5%A4%A7%E9%99%B8%E8%A9%95%E8%AB%96%E5%88%97%E8%A1%A8',
'cn_list_finance' : 'cn_list_finance_%E5%A4%A7%E9%99%B8%E8%B2%A1%E7%B6%93%E5%88%97%E8%A1%A8',
'cn_list_sport' : 'cn_list_sport_%E5%A4%A7%E9%99%B8%E9%AB%94%E8%82%B2%E5%88%97%E8%A1%A8',
'cn_list_lifestyle' : 'cn_list_lifestyle_%E5%A4%A7%E9%99%B8%E7%94%9F%E6%B4%BB%E5%88%97%E8%A1%A8',
'cn_list_entertainment' : 'cn_list_entertainment_%E5%A4%A7%E9%99%B8%E5%A8%9B%E6%A8%82%E5%88%97%E8%A1%A8',
'cn_content_news' : 'cn_content_news_%E5%A4%A7%E9%99%B8%E6%96%B0%E8%81%9E%E5%85%A7%E5%AE%B9',
'cn_content_commentary' : 'cn_content_commentary_%E5%A4%A7%E9%99%B8%E8%A9%95%E8%AB%96%E5%85%A7%E5%AE%B9',
'cn_content_finance' : 'cn_content_finance_%E5%A4%A7%E9%99%B8%E8%B2%A1%E7%B6%93%E5%85%A7%E5%AE%B9',
'cn_content_sport' : 'cn_content_sport_%E5%A4%A7%E9%99%B8%E9%AB%94%E8%82%B2%E5%85%A7%E5%AE%B9',
'cn_content_lifestyle' : 'cn_content_lifestyle_%E5%A4%A7%E9%99%B8%E7%94%9F%E6%B4%BB%E5%85%A7%E5%AE%B9',
'cn_content_entertainment' : 'cn_content_entertainment_%E5%A4%A7%E9%99%B8%E5%A8%9B%E6%A8%82%E5%85%A7%E5%AE%B9',
'tw_index_news' : 'tw_index_news_%E5%8F%B0%E7%81%A3%E6%96%B0%E8%81%9E%E4%B8%BB%E9%A0%81',
'tw_index_commentary' : 'tw_index_commentary_%E5%8F%B0%E7%81%A3%E8%A9%95%E8%AB%96%E4%B8%BB%E9%A0%81',
'tw_index_finance' : 'tw_index_finance_%E5%8F%B0%E7%81%A3%E8%B2%A1%E7%B6%93%E4%B8%BB%E9%A0%81',
'tw_index_sport' : 'tw_index_sport_%E5%8F%B0%E7%81%A3%E9%AB%94%E8%82%B2%E4%B8%BB%E9%A0%81',
'tw_index_lifestyle' : 'tw_index_lifestyle_%E5%8F%B0%E7%81%A3%E7%94%9F%E6%B4%BB%E4%B8%BB%E9%A0%81',
'tw_index_entertainment' : 'tw_index_entertainment_%E5%8F%B0%E7%81%A3%E5%A8%9B%E6%A8%82%E4%B8%BB%E9%A0%81',
'tw_list_news' : 'tw_list_news_%E5%8F%B0%E7%81%A3%E6%96%B0%E8%81%9E%E5%88%97%E8%A1%A8',
'tw_list_commentary' : 'tw_list_commentary_%E5%8F%B0%E7%81%A3%E8%A9%95%E8%AB%96%E5%88%97%E8%A1%A8',
'tw_list_finance' : 'tw_list_finance_%E5%8F%B0%E7%81%A3%E8%B2%A1%E7%B6%93%E5%88%97%E8%A1%A8',
'tw_list_sport' : 'tw_list_sport_%E5%8F%B0%E7%81%A3%E9%AB%94%E8%82%B2%E5%88%97%E8%A1%A8',
'tw_list_lifestyle' : 'tw_list_lifestyle_%E5%8F%B0%E7%81%A3%E7%94%9F%E6%B4%BB%E5%88%97%E8%A1%A8',
'tw_list_entertainment' : 'tw_list_entertainment_%E5%8F%B0%E7%81%A3%E5%A8%9B%E6%A8%82%E5%88%97%E8%A1%A8',
'tw_content_news' : 'tw_content_news_%E5%8F%B0%E7%81%A3%E6%96%B0%E8%81%9E%E5%85%A7%E5%AE%B9',
'tw_content_commentary' : 'tw_content_commentary_%E5%8F%B0%E7%81%A3%E8%A9%95%E8%AB%96%E5%85%A7%E5%AE%B9',
'tw_content_finance' : 'tw_content_finance_%E5%8F%B0%E7%81%A3%E8%B2%A1%E7%B6%93%E5%85%A7%E5%AE%B9',
'tw_content_sport' : 'tw_content_sport_%E5%8F%B0%E7%81%A3%E9%AB%94%E8%82%B2%E5%85%A7%E5%AE%B9',
'tw_content_lifestyle' : 'tw_content_lifestyle_%E5%8F%B0%E7%81%A3%E7%94%9F%E6%B4%BB%E5%85%A7%E5%AE%B9',
'tw_content_entertainment' : 'tw_content_entertainment_%E5%8F%B0%E7%81%A3%E5%A8%9B%E6%A8%82%E5%85%A7%E5%AE%B9',
'int_index_news' : 'int_index_news_%E5%9C%8B%E9%9A%9B%E6%96%B0%E8%81%9E%E4%B8%BB%E9%A0%81',
'int_index_commentary' : 'int_index_commentary_%E5%9C%8B%E9%9A%9B%E8%A9%95%E8%AB%96%E4%B8%BB%E9%A0%81',
'int_index_finance' : 'int_index_finance_%E5%9C%8B%E9%9A%9B%E8%B2%A1%E7%B6%93%E4%B8%BB%E9%A0%81',
'int_index_sport' : 'int_index_sport_%E5%9C%8B%E9%9A%9B%E9%AB%94%E8%82%B2%E4%B8%BB%E9%A0%81',
'int_index_lifestyle' : 'int_index_lifestyle_%E5%9C%8B%E9%9A%9B%E7%94%9F%E6%B4%BB%E4%B8%BB%E9%A0%81',
'int_index_entertainment' : 'int_index_entertainment_%E5%9C%8B%E9%9A%9B%E5%A8%9B%E6%A8%82%E4%B8%BB%E9%A0%81',
'int_list_news' : 'int_list_news_%E5%9C%8B%E9%9A%9B%E6%96%B0%E8%81%9E%E5%88%97%E8%A1%A8',
'int_list_commentary' : 'int_list_commentary_%E5%9C%8B%E9%9A%9B%E8%A9%95%E8%AB%96%E5%88%97%E8%A1%A8',
'int_list_finance' : 'int_list_finance_%E5%9C%8B%E9%9A%9B%E8%B2%A1%E7%B6%93%E5%88%97%E8%A1%A8',
'int_list_sport' : 'int_list_sport_%E5%9C%8B%E9%9A%9B%E9%AB%94%E8%82%B2%E5%88%97%E8%A1%A8',
'int_list_lifestyle' : 'int_list_lifestyle_%E5%9C%8B%E9%9A%9B%E7%94%9F%E6%B4%BB%E5%88%97%E8%A1%A8',
'int_list_entertainment' : 'int_list_entertainment_%E5%9C%8B%E9%9A%9B%E5%A8%9B%E6%A8%82%E5%88%97%E8%A1%A8',
'int_content_news' : 'int_content_news_%E5%9C%8B%E9%9A%9B%E6%96%B0%E8%81%9E%E5%85%A7%E5%AE%B9',
'int_content_commentary' : 'int_content_commentary_%E5%9C%8B%E9%9A%9B%E8%A9%95%E8%AB%96%E5%85%A7%E5%AE%B9',
'int_content_finance' : 'int_content_finance_%E5%9C%8B%E9%9A%9B%E8%B2%A1%E7%B6%93%E5%85%A7%E5%AE%B9',
'int_content_sport' : 'int_content_sport_%E5%9C%8B%E9%9A%9B%E9%AB%94%E8%82%B2%E5%85%A7%E5%AE%B9',
'int_content_lifestyle' : 'int_content_lifestyle_%E5%9C%8B%E9%9A%9B%E7%94%9F%E6%B4%BB%E5%85%A7%E5%AE%B9',
'int_content_entertainment' : 'int_content_entertainment_%E5%9C%8B%E9%9A%9B%E5%A8%9B%E6%A8%82%E5%85%A7%E5%AE%B9'
	},
	click_view : function ( path, action ) {
		_var_cat = 'image';
		_var_action = 'clickview';
		__utmTrackEvent(_var_cat, _var_action, action );
	},
	
	label_view : function ( cat, action, name ) {
		_var_cat = cat;
		_var_action = action;
		__utmTrackEvent(_var_cat, _var_action, name );
	},
	
	content_view : function( path ) {

		_udn = this.domain;
		_ugifpath= this.ugifpath;
		
		_var_cat = 'html';
		_var_action = 'pageview';
		__utmTrackEvent(_var_cat, _var_action, Urchin.getMatching(getUrchinSect(path)));
		urchinTracker(path);
		
		
		function getUrchinSect(path) {
			
			var nation;
			var section;
			var type;
			
			if ( path.indexOf('/polling/') != -1 ) {
				return 'polling';
			} else if ( path.indexOf('/sitemap/') != -1 ) {
				return 'sitemap';
			}
			
			if (path.indexOf('/hk/') != -1) {
				nation = 'hk';
			} else if (path.indexOf('/tw/') != -1) {
				nation = 'tw';
			} else if (path.indexOf('/cn/') != -1) {
				nation = 'cn';
			} else if (path.indexOf('/int/') != -1) {
				nation = 'int';
			} else {
				nation = '';
			}
			
			
			if (path.indexOf('/news/') != -1) {
				section = 'news';
			} else if (path.indexOf('/finance/') != -1) {
				section = 'finance';
			} else if (path.indexOf('/entertainment/') != -1) {
				section = 'entertainment';
			} else if (path.indexOf('/sport/') != -1) {
				section = 'sport';
			} else if (path.indexOf('/lifestyle/') != -1) {
				section = 'lifestyle';
			} else if (path.indexOf('/commentary/') != -1) {
				section = 'commentary';	
			}  else if (path.indexOf('/weather/') != -1) {
				section = 'weather';	
			} else {
				section = '';
			}
			
			if (path.indexOf('index.html') != -1 || path.indexOf('.html') == -1) {
				type = 'index';
			} else if (path.indexOf('newslist.html') != -1) {
				type = 'list';
			} else {
				type = 'content';
			}
			
			return nation + '_' + type + '_' + section;
		}

	},
	
	getMatching : function ( str ) {
		if (typeof Urchin.matching[str] !== 'undefined')
			return Urchin.matching[str];
		else 
			return str;
	}	
}


