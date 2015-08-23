// JavaScript Document

var PTY = {
	cgiRoot: '/cgi-bin/',
	brkRoot: '/brknews/cnt/',
	atlRoot: '/articles/cnt/',
	svrDRoot: '/prop/cnt/',
	trnsctnRoot: '/transaction/cnt/',
	photoRoot: '/prop/cnt/',
	calcPath: '/Marketing/Oncc/Mortgage.aspx',
	ckIdLstKey: 'IDLIST',
	ckDtLstKey: 'DTLIST',
	print: function() {
		window.print();
	},
	qs: new $QueryString(),
	writeScript: function(url) {
		document.write(unescape("%3Cscript src='"+url+"' type='text/javascript'%3E%3C/script%3E"));
	},
	loadScript: function(url, callback, cbparams) {
		var head = document.getElementsByTagName("head")[0];
		var script = document.createElement("script");
		var done = false;
		script.src = url;
		script.charset = 'utf-8';
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
	},
	getTTLink: function(baseurl, params){
		var url = new $QueryString(baseurl);
		url.set(params);
		return url.toString();
	},
	getTimeStamp: function(daily) {
		var today = new Date();
		if (daily) return today.getFullYear().toString() + today.getMonth().toString() + today.getDate().toString();
		var tString =  today.getTime().toString();
		return tString.substring(0,tString.length-3)+'9'+tString.substring(tString.length-2,tString.length);
	},
	printDate: function(dateStr, format) {
		document.write($.dateFormat(dateStr, format));
	}
};

PTY.date = {
	server: null,
	client: null,
	adjust: 0,
	init: function() {
		this.server = (typeof todaydate === 'string') ? $strToDate(todaydate) : new Date(),
		this.client = new Date();
		this.adjust = this.server.getTime() - this.client.getTime();
	},
	now: function() {
		return new Date(new Date().getTime() + this.adjust);
	}
};
PTY.date.init();



PTY.config = {
	isNew: function(day) {return day<2}
};

PTY.cmnPrms = {
	cfg: {
		numrec:20,
		sorted:1,
		order:1,
		date:180
	},
	usr: {
		whichpage:null,
		district:null,
		district_id:null,
		estate:null,
		propertytype :null
	},
	range: {
		minprice:null,
		maxprice:null,
		minsize:null,
		maxsize:null,
		minroom:null,
		maxroom:null,
		ownerlisting:null
	},
	get: function(cfg, usr, range, custom) {
		var retVal = {};
		if (typeof PTY.qs === 'undefined') {
			PTY.qs = new $QueryString();
		}
		for (var key in cfg) {
			var val = PTY.qs.get(key);
			retVal[key] = (val)?val:cfg[key];
		}
		for (var key in usr) {
			var val = PTY.qs.get(key);
			if (val) {
				retVal[key] = val;
			}
		}
		for (var key in range) {
			var val = PTY.qs.get(key);
			if (val) {
				retVal[key] = val;
			}
		}
		if (custom) {
			for (var key in custom) {
				retVal[key] = custom[key];
			}
		}
		if (typeof retVal.district_id !== 'undefined') {
			delete retVal.district;
		}
		return retVal;
	}
}

PTY.srchPrms = {
	cfg: $.extend({}, PTY.cmnPrms.cfg, {type:1}),
	usr: $.extend({}, PTY.cmnPrms.usr),
	range: $.extend({}, PTY.cmnPrms.range),
	get: function(custom) {return PTY.cmnPrms.get(this.cfg, this.usr, this.range, $.extend((custom)?custom:{},{type:1}))}
};

PTY.dtlPrms = {
	cfg: $.extend({}, PTY.cmnPrms.cfg, {type:2, otherpro:'Y', otherpronum:50, relatedpro:'Y', relatedpronum:25}),
	usr: $.extend({}, PTY.cmnPrms.usr, {List_ID:null, currentrec:null}),
	range: $.extend({}, PTY.cmnPrms.range),
	get: function(custom){return PTY.cmnPrms.get(this.cfg, this.usr, this.range, $.extend((custom)?custom:{}, {type:2}))}
};


PTY.searchType = function() {
	var sell = null;
	var rent = null;
	var hasValue = false;
	
	if (arguments.length>=2) {
		hasValue = true;
		sell = arguments[0];
		rent = arguments[1];
	}
	if (typeof PTY.qs === 'undefined') {
		PTY.qs = new $QueryString();
	}
	var pType = (function(){
		if (PTY.qs.get('propertytype')) {
			return PTY.qs.get('propertytype');
		}
		if (typeof PTY.searchPageType!=='undefined') {
			return PTY.searchPageType
		}
		return null;
	})();
	if (pType){
		switch (pType) {
			case '1':
				return $.extend({ttxt:'出售', ptxt:'售價', stxt:'售價', cssClass:'sell'}, (hasValue)?{val:(sell)?('$'+sell.toChiUnit(1)):'-'}:{});
				break;
			case '2':
				return $.extend({ttxt:'出租', ptxt:'租價', stxt:'租價', cssClass:'rent'}, (hasValue)?{val:(rent)?('$'+rent.toCommasString(1)):'-'}:{});
				break;
			case '3':
				if (hasValue) {
					if (sell) {
						return $.extend({ttxt:'出售/租', ptxt:'售價', stxt:'售/租價', cssClass:'sell'}, {val:('$'+sell.toChiUnit(1))});
					} else if (rent) {
						return $.extend({ttxt:'出售/租', ptxt:'租價', stxt:'售/租價', cssClass:'sell'}, {val:('$'+rent.toCommasString(1))});
					} else {
						return $.extend({ttxt:'出售/租', ptxt:'售價', stxt:'售/租價', cssClass:'sell'}, {val:'-'});
					}
				} else {
					return {ttxt:'出售/租', ptxt:'售價', stxt:'售/租價', cssClass:'sell'};
				}
				break;
			default:break;
		}
	}
	
	return null;
};

PTY.area = {
	data:{raw:null, htmlStr:null, hk:null, kln:null, nt: null, is: null},
	extCB:null,
	init: function(extCB) {
		this.extCB = extCB;
		$.ajax({
			dataType:'script',
			scriptCharset:'utf-8',
			url: 'http://p18.on.cc/js/property_arealst_order.js',
			//url: 'http://property.on.cc' + PTY.svrDRoot+'js/property_arealst.js?t='+PTY.getTimeStamp(),
			success:this.cb
		});
	},
	cb: function() {
		if (typeof area_hk!=='undefined' && typeof area_kln!=='undefined' && typeof area_nt!=='undefined' && typeof area_is!=='undefined') {
			with (PTY.area) {
				data.raw = {hk:area_hk, kln:area_kln, nt:area_nt, is:area_is};
				var opts = [];
				var hk_arr = [];
				var kln_arr = [];
				var nt_arr = [];
				var is_arr = [];											
				opts.push('<option value="-1" selected>任何</option>');
				
				for (var key in data.raw) {
					var d = data.raw[key];
					if (d.Member.length>0) {
						opts.push('<optgroup label="'+d.Name_TC+'">');
						for (var i=0; i<d.Member.length; i++) {
							var member = d.Member[i];
							opts.push('<option value="'+member.District_ID+'">&nbsp;'+member.District+'&nbsp;</option>');
							if(key == "hk") {
								hk_arr.push('<option value="'+member.District_ID+'">&nbsp;'+member.District+'&nbsp;</option>');
							} else if  (key == "kln") {
								kln_arr.push('<option value="'+member.District_ID+'">&nbsp;'+member.District+'&nbsp;</option>');
							} else if  (key == "nt") {
								nt_arr.push('<option value="'+member.District_ID+'">&nbsp;'+member.District+'&nbsp;</option>');
							} else if (key == "is") {
								is_arr.push('<option value="'+member.District_ID+'">&nbsp;'+member.District+'&nbsp;</option>');
							}
							
						}
						opts.push('</optgroup>');
					}
				}
				data.htmlStr = opts.join('');
				data.hk = hk_arr.join('');
				data.kln = kln_arr.join('');
				data.nt = nt_arr.join('');
				data.is =	is_arr.join('');											
				if (extCB) {
					extCB(PTY.area.data);
				}
			}
		}
	}
};

PTY.searchFrm = {
	/*
	option:{
		sell: {
			minprice: '<option value="-1" selected>任何</option><option value="0">0</option><option value="1000000">100萬</option><option value="1500000">150萬</option><option value="2000000">200萬</option><option value="2500000">250萬</option><option value="3000000">300萬</option><option value="3500000">350萬</option><option value="4000000">400萬</option><option value="4500000">450萬</option><option value="5000000">500萬</option><option value="5500000">550萬</option><option value="6000000">600萬</option><option value="6500000">650萬</option><option value="7000000">700萬</option><option value="7500000">750萬</option><option value="8000000">800萬</option><option value="8500000">850萬</option><option value="9000000">900萬</option>',
			maxprice: '<option value="-1" selected>任何</option><option value="1000000">100萬</option><option value="1500000">150萬</option><option value="2000000">200萬</option><option value="2500000">250萬</option><option value="3000000">300萬</option><option value="3500000">350萬</option><option value="4000000">400萬</option><option value="4500000">450萬</option><option value="5000000">500萬</option><option value="5500000">550萬</option><option value="6000000">600萬</option><option value="6500000">650萬</option><option value="7000000">700萬</option><option value="7500000">750萬</option><option value="8000000">800萬</option><option value="8500000">850萬</option><option value="9000000">900萬</option><option value="10000000">1000萬</option><option value="infinite">&gt;1000萬</option>'
		},
		rent:{
			minprice:'<option value="-1" selected>任何</option><option value="0">0</option><option value="2500">2,500</option><option value="5000">5,000</option><option value="7500">7,500</option><option value="10000">10,000</option><option value="15000">15,000</option><option value="20000">20,000</option><option value="25000">25,000</option><option value="30000">30,000</option><option value="50000">50,000</option><option value="70000">70,000</option><option value="100000">100,000</option>',
			maxprice:'<option value="-1" selected>任何</option><option value="2500">2,500</option><option value="5000">5,000</option><option value="7500">7,500</option><option value="10000">10,000</option><option value="15000">15,000</option><option value="20000">20,000</option><option value="25000">25,000</option><option value="30000">30,000</option><option value="50000">50,000</option><option value="70000">70,000</option><option value="100000">100,000</option><option value="infinite">&gt;100,000</option>'
		}
	},
	*/
	init: function() {
		//$("#pty_search_area").append(PTY.searchFrm.render_form());
		
		//PTY.area.init(this.fillArea);
		
		/*
		if (arguments.length>=1&&arguments[0]=='rent') {
			$('#priceLabel').empty().append('租價(元)');
			$('#minprice').empty().append(this.option.rent.minprice);
			$('#maxprice').empty().append(this.option.rent.maxprice);
		} else {
			$('#priceLabel').empty().append('售價(元)');
			$('#minprice').empty().append(this.option.sell.minprice);
			$('#maxprice').empty().append(this.option.sell.maxprice);
		}
		$('#searchForm input[name=propertytype]:radio').change(function(evt){
			with (PTY.searchFrm.option) {
				switch ($(evt.target).val()) {
					case '1':
						$('#priceLabel').empty().append('售價(元)');
						$('#minprice').empty().append(sell.minprice);
						$('#maxprice').empty().append(sell.maxprice);
					break;
					case '2':
						$('#priceLabel').empty().append('租價(元)');
						$('#minprice').empty().append(rent.minprice);
						$('#maxprice').empty().append(rent.maxprice);
					break;
				}
			}
		});
		*/
		
		/* S: mini search */
		$('#pty_mini_search_frm').html(PTY.searchFrm.render_mini_form());
		
		$('#searchForm_mini').submit(this.validate_mini);
		$('#btn_search_mini').click(this.validate_mini);
		$("#district_mini").change(function(){ 			
    		//alert($("#district_mini option:selected").text() );
			if ( $("#district_mini option:selected").val() == -2) {
				$("#district_area_mini").empty();
				$("#district_area_mini").append("<option selected=\"\" value=\"-2\">---</option>");
				$("#district_area_mini").append("<option  value=\"-1\">任何</option>");
			} else if ( $("#district_mini option:selected").val() == -1) { //All
				$("#district_area_mini").empty();
				
				$("#district_area_mini").append("<option selected=\"\" value=\"-1\">任何</option>");
				$("#district_area_mini").append('<optgroup label="香港">');
				$("#district_area_mini").append(PTY.area.data.hk);
				$("#district_area_mini").append('</optgroup>');	
				
				$("#district_area_mini").append('<optgroup label="九龍">');
				$("#district_area_mini").append(PTY.area.data.kln);
				$("#district_area_mini").append('</optgroup>');						
						
				$("#district_area_mini").append('<optgroup label="新界">');
				$("#district_area_mini").append(PTY.area.data.nt);
				$("#district_area_mini").append('</optgroup>');								
							
				$("#district_area_mini").append('<optgroup label="離島">');
				$("#district_area_mini").append(PTY.area.data.is);
				$("#district_area_mini").append('</optgroup>');									
							
			} else if ( $("#district_mini option:selected").val() == 1) { //hk
				$("#district_area_mini").empty();
				//$("#district_area_mini").append("<option selected=\"\" value=\"-1\">任何</option>");
				$("#district_area_mini").append(PTY.area.data.hk);
			} else if ( $("#district_mini option:selected").val() == 2) { //kln
				$("#district_area_mini").empty();
				//$("#district_area_mini").append("<option selected=\"\" value=\"-1\">任何</option>");
				$("#district_area_mini").append(PTY.area.data.kln);				
			} else if ( $("#district_mini option:selected").val() == 3) { //nt
				$("#district_area_mini").empty();
				//$("#district_area_mini").append("<option selected=\"\" value=\"-1\">任何</option>");
				$("#district_area_mini").append(PTY.area.data.nt);				
			} else if ( $("#district_mini option:selected").val() == 4) { //is
				$("#district_area_mini").empty();
				//$("#district_area_mini").append("<option selected=\"\" value=\"-1\">任何</option>");
				$("#district_area_mini").append(PTY.area.data.is);				
			}
		});
		/* E: mini_search */
	},
	/* curDistrict:null, */
	validate_mini: function(evt) {
		evt.stopPropagation();
		evt.preventDefault();
		
		var prmtrs = {};
		
		if ($('#district_area_mini').val() != '-2') {
			if ($('#district_area_mini option:selected').val() != '-1') {
				prmtrs = $.extend({}, prmtrs, {district_id:$('#district_area_mini').val(), district:$.trim($('#district_area_mini option:selected').text())});
			}
		}	else {
			alert('請選擇地點！');
			return false;
		}
		prmtrs = $.extend({}, prmtrs, {propertytype:$('#searchForm_mini input[name=propertytype_mini]:checked').val()});
		window.location = "http://p18.on.cc" +  PTY.getTTLink('/search/results.html', prmtrs);
	},
	resetFrm: function(evt) {
		evt.stopPropagation();
		evt.preventDefault();
		$('#searchForm')
			.find(':selected').removeAttr('selected').end()
			.find('option[value=-1]').attr('selected','').end()
			.find(':radio')
				.removeAttr('checked').end()
			.find(':radio')
				.each(function(i){
					if ($(this).attr('value')=='1') {
						this.checked = true;
					}
				})
			.end()
			.find(':checkbox')
				.each(function(i){
					this.checked = false;
				})
			.end()
			.find(':text').val('');
	}, 
	render_mini_form: function() {
		
		var form = [];
		/*Sim comment*/
		//form.push("<div class=\"pty_mini_search_frm\"></div>");
		/*Sim comment*/
		
		//form.push("<iframe scrolling=\"no\" src=\"http://p18.on.cc/search/search_engine.html\" border=\"0\" width=\"300px\" frameborder=\"0\"></iframe>");
		form.push(PTY.searchFrm.build());
		
		$('#pty_mini_search_frm').css({
			'background-color' : 'white',
			'padding-bottom' : '25px',
			'border' : 'solid 1px #d4c3b3'
		});
		
		
		//form.push("<div id=\"pty_mini_search_frm\" style=\"width:300px;border:solid 1px #d4c3b3;padding-bottom: 0px;padding-top: 0px;\"><iframe scrolling=\"no\" src=\"http://p18.on.cc/search/search_engine.html\" border=\"0\" width=\"300px\"  frameborder=\"0\"></iframe></div>");
	
	
		return form.join('');
	},
	build:function(){
		var html = '';
        html += '<div class="searchProperty" style="margin:0;padding:0">';
        html += '    <div class="header" style="background: url(\'/images/search_engine_patt.gif\') repeat-x scroll 0 0 transparent;height: 40px;left: 0;position: relative;top: 0;width: 100%;">';
        html += '        <div class="left" style="left: 10px;position: absolute;top: 4px;">';
        html += '            <img src="/images/search_engine_logo.png" />';
        html += '        </div>';
        html += '        <div class="right" style="position: absolute;left: 120px;top: 12px;">';
        html += '            <img src="/images/search_engine_title.png" />';
        html += '        </div>';
        html += '    </div>';
        html += '   <table border="0" cellspacing="0" cellpadding="0" style="height: 60px;margin: 0 auto;width: 280px;margin-top:5px;">';
        html += '        <tr>';
        html += '            <td style="font-size: 13px;">租／售</td>';
        html += '            <td style="font-size: 13px;">';
        html += '                <input type="radio" value="2" name="propertytype">&nbsp;租&nbsp;&nbsp;';
        html += '                <input type="radio" value="1" name="propertytype">&nbsp;售';
        html += '            </td>';
        html += '           <td rowspan="2">';
        html += '                <div style="cursor: pointer;" id="prop_search_btn" onClick="PTY.searchFrm.goSearch()"><img src="/images/search_engine_search.png" /></div>';
        html += '            </td>';
        html += '        </tr>';
        html += '        <tr>';
        html += '            <td>';
        html += '                <select style="width:100px" id="district" name="district" onChange="PTY.searchFrm.changeDist()"><option selected="" value="-1">地區</option><optgroup area="hk" label="香港" area_id="1"><option area="1" value="HA">&nbsp;香港仔&nbsp;</option><option area="1" value="HWC">&nbsp;灣仔&nbsp;</option><option area="1" value="HSY">&nbsp;西營盤&nbsp;</option><option area="1" value="HSW">&nbsp;上環&nbsp;</option><option area="1" value="HSS">&nbsp;小西灣&nbsp;</option><option area="1" value="HSK">&nbsp;筲箕灣&nbsp;</option><option area="1" value="HRB">&nbsp;淺水灣&nbsp;</option><option area="1" value="HQB">&nbsp;鰂魚涌&nbsp;</option><option area="1" value="HPF">&nbsp;薄扶林&nbsp;</option><option area="1" value="HNP">&nbsp;北角&nbsp;</option><option area="1" value="HNH">&nbsp;北角半山&nbsp;</option><option area="1" value="HMW">&nbsp;西半山&nbsp;</option><option area="1" value="HME">&nbsp;東半山&nbsp;</option><option area="1" value="HMC">&nbsp;中半山&nbsp;</option><option area="1" value="HKT">&nbsp;堅尼地城&nbsp;</option><option area="1" value="HHV">&nbsp;跑馬地&nbsp;</option><option area="1" value="HCW">&nbsp;柴灣&nbsp;</option><option area="1" value="HCB">&nbsp;銅鑼灣&nbsp;</option><option area="1" value="HWH">&nbsp;黃竹坑&nbsp;</option></optgroup><optgroup area="kln" label="九龍" area_id="2"><option area="2" value="KCS">&nbsp;長沙灣&nbsp;</option><option area="2" value="KNT">&nbsp;牛頭角&nbsp;</option><option area="2" value="KSK">&nbsp;石硤尾 / 又一村&nbsp;</option><option area="2" value="KSP">&nbsp;新蒲崗&nbsp;</option><option area="2" value="KTK">&nbsp;大角咀&nbsp;</option><option area="2" value="KTS">&nbsp;尖沙咀&nbsp;</option><option area="2" value="KTW">&nbsp;土瓜灣&nbsp;</option><option area="2" value="KWT">&nbsp;黃大仙&nbsp;</option><option area="2" value="KYM">&nbsp;油麻地&nbsp;</option><option area="2" value="KNC">&nbsp;牛池灣&nbsp;</option><option area="2" value="KLT">&nbsp;藍田&nbsp;</option><option area="2" value="KDH">&nbsp;鑽石山&nbsp;</option><option area="2" value="KHH">&nbsp;紅磡&nbsp;</option><option area="2" value="KHM">&nbsp;何文田&nbsp;</option><option area="2" value="KKB">&nbsp;九龍灣&nbsp;</option><option area="2" value="KKC">&nbsp;九龍城&nbsp;</option><option area="2" value="KKL">&nbsp;九龍塘&nbsp;</option><option area="2" value="KKT">&nbsp;觀塘&nbsp;</option><option area="2" value="KLC">&nbsp;荔枝角 / 美孚&nbsp;</option><option area="2" value="KYT">&nbsp;油塘&nbsp;</option></optgroup><optgroup area="nt" label="新界東" area_id="3"><option area="3" value="NFL">&nbsp;粉嶺&nbsp;</option><option area="3" value="NMO">&nbsp;馬鞍山&nbsp;</option><option area="3" value="NSK">&nbsp;西貢&nbsp;</option><option area="3" value="NSS">&nbsp;上水&nbsp;</option><option area="3" value="NST">&nbsp;沙田&nbsp;</option><option area="3" value="NTK">&nbsp;將軍澳&nbsp;</option><option area="3" value="NTP">&nbsp;大埔&nbsp;</option></optgroup><optgroup area="is" label="新界西" area_id="4"><option area="4" value="NKC">&nbsp;葵涌&nbsp;</option><option area="4" value="NMW">&nbsp;馬灣&nbsp;</option><option area="4" value="NTC">&nbsp;東涌&nbsp;</option><option area="4" value="NTM">&nbsp;屯門&nbsp;</option><option area="4" value="NTS">&nbsp;天水圍&nbsp;</option><option area="4" value="NTW">&nbsp;荃灣&nbsp;</option><option area="4" value="NTY">&nbsp;青衣&nbsp;</option><option area="4" value="NYL">&nbsp;元朗&nbsp;</option></optgroup></select>';
        html += '            </td>';
        html += '            <td>';
        html += '                <select style="width:100px" id="estate" name="estate"><option value="-1">任何</option></select>';
        html += '            </td>';
        html += '        </tr>';
        html += '        <tr>';
        html += '            <td colspan="2"><span style="color: #827349; font-size: 13px;">樓盤由property.hk提供</span></td>';
        html += '        </tr>';
        html += '    </table>';
        html += '</div>';
		return html;
	},
	buildThin:function(){
        var html = '';
		html += '<div class="searchProperty" style="margin:0;padding:0">';
        html += '    <div class="header" style="background: url(\'/images/search_engine_patt.gif\') repeat-x scroll 0 0 transparent;height: 40px;left: 0;position: relative;top: 0;width: 100%;">';
        html += '        <div class="left" style="left: 10px;position: absolute;top: 4px;">';
        html += '            <img src="/images/search_engine_logo.png" />';
        html += '        </div>';
        html += '        <div class="right" style="position: absolute;left: 120px;top: 12px;">';
        html += '           <img src="/images/search_engine_title.png" />';
        html += '        </div>';
        html += '    </div>';
        html += '    <table border="0" cellspacing="0" cellpadding="0" style="height: 60px;margin: 0 auto;width: 180px;margin-top:5px;">';
        html += '        <tr>';
        html += '            <td style="padding: 3px 0px;font-size: 13px;">租／售</td>';
        html += '            <td rowspan="4" valign="top">';
        html += '                <div style="cursor: pointer;" id="prop_search_btn" onClick="PTY.searchFrm.goSearch()" ><img src="/images/search_engine_search.png" /></div>';
        html += '            </td>';
        html += '        </tr>';
        html += '        <tr>';
        html += '            <td style="padding: 3px 0px;font-size: 13px;">';
        html += '                <input type="radio" value="2" name="propertytype">&nbsp;租&nbsp;&nbsp;';
        html += '                <input type="radio" value="1" name="propertytype">&nbsp;售';
        html += '            </td>';
        html += '        </tr>';
        html += '        <tr>';
        html += '           <td style="padding: 3px 0px;">';
        html += '                <select style="width:100px" id="district" name="district" onChange="PTY.searchFrm.changeDist()"><option selected="" value="-1">地區</option><optgroup area="hk" label="香港" area_id="1"><option area="1" value="HA">&nbsp;香港仔&nbsp;</option><option area="1" value="HWC">&nbsp;灣仔&nbsp;</option><option area="1" value="HSY">&nbsp;西營盤&nbsp;</option><option area="1" value="HSW">&nbsp;上環&nbsp;</option><option area="1" value="HSS">&nbsp;小西灣&nbsp;</option><option area="1" value="HSK">&nbsp;筲箕灣&nbsp;</option><option area="1" value="HRB">&nbsp;淺水灣&nbsp;</option><option area="1" value="HQB">&nbsp;鰂魚涌&nbsp;</option><option area="1" value="HPF">&nbsp;薄扶林&nbsp;</option><option area="1" value="HNP">&nbsp;北角&nbsp;</option><option area="1" value="HNH">&nbsp;北角半山&nbsp;</option><option area="1" value="HMW">&nbsp;西半山&nbsp;</option><option area="1" value="HME">&nbsp;東半山&nbsp;</option><option area="1" value="HMC">&nbsp;中半山&nbsp;</option><option area="1" value="HKT">&nbsp;堅尼地城&nbsp;</option><option area="1" value="HHV">&nbsp;跑馬地&nbsp;</option><option area="1" value="HCW">&nbsp;柴灣&nbsp;</option><option area="1" value="HCB">&nbsp;銅鑼灣&nbsp;</option><option area="1" value="HWH">&nbsp;黃竹坑&nbsp;</option></optgroup><optgroup area="kln" label="九龍" area_id="2"><option area="2" value="KCS">&nbsp;長沙灣&nbsp;</option><option area="2" value="KNT">&nbsp;牛頭角&nbsp;</option><option area="2" value="KSK">&nbsp;石硤尾 / 又一村&nbsp;</option><option area="2" value="KSP">&nbsp;新蒲崗&nbsp;</option><option area="2" value="KTK">&nbsp;大角咀&nbsp;</option><option area="2" value="KTS">&nbsp;尖沙咀&nbsp;</option><option area="2" value="KTW">&nbsp;土瓜灣&nbsp;</option><option area="2" value="KWT">&nbsp;黃大仙&nbsp;</option><option area="2" value="KYM">&nbsp;油麻地&nbsp;</option><option area="2" value="KNC">&nbsp;牛池灣&nbsp;</option><option area="2" value="KLT">&nbsp;藍田&nbsp;</option><option area="2" value="KDH">&nbsp;鑽石山&nbsp;</option><option area="2" value="KHH">&nbsp;紅磡&nbsp;</option><option area="2" value="KHM">&nbsp;何文田&nbsp;</option><option area="2" value="KKB">&nbsp;九龍灣&nbsp;</option><option area="2" value="KKC">&nbsp;九龍城&nbsp;</option><option area="2" value="KKL">&nbsp;九龍塘&nbsp;</option><option area="2" value="KKT">&nbsp;觀塘&nbsp;</option><option area="2" value="KLC">&nbsp;荔枝角 / 美孚&nbsp;</option><option area="2" value="KYT">&nbsp;油塘&nbsp;</option></optgroup><optgroup area="nt" label="新界東" area_id="3"><option area="3" value="NFL">&nbsp;粉嶺&nbsp;</option><option area="3" value="NMO">&nbsp;馬鞍山&nbsp;</option><option area="3" value="NSK">&nbsp;西貢&nbsp;</option><option area="3" value="NSS">&nbsp;上水&nbsp;</option><option area="3" value="NST">&nbsp;沙田&nbsp;</option><option area="3" value="NTK">&nbsp;將軍澳&nbsp;</option><option area="3" value="NTP">&nbsp;大埔&nbsp;</option></optgroup><optgroup area="is" label="新界西" area_id="4"><option area="4" value="NKC">&nbsp;葵涌&nbsp;</option><option area="4" value="NMW">&nbsp;馬灣&nbsp;</option><option area="4" value="NTC">&nbsp;東涌&nbsp;</option><option area="4" value="NTM">&nbsp;屯門&nbsp;</option><option area="4" value="NTS">&nbsp;天水圍&nbsp;</option><option area="4" value="NTW">&nbsp;荃灣&nbsp;</option><option area="4" value="NTY">&nbsp;青衣&nbsp;</option><option area="4" value="NYL">&nbsp;元朗&nbsp;</option></optgroup></select>';
        html += '            </td>';
        html += '        </tr>';
        html += '        <tr>';
        html += '            <td style="padding: 3px 0px;">';
        html += '                <select style="width:100px" id="estate" name="estate"><option value="-1">任何</option></select>';
        html += '            </td>';
        html += '        </tr>';
        html += '        <tr>';
        html += '            <td colspan="2"><span style="color: #827349; font-size: 13px;">樓盤由property.hk提供</span></td>';
        html += '        </tr>';
        html += '    </table>';
        html += '</div>';
		return html;
	},
	showSelectList:function(){
        var html_arr = [];
		var value = $('.searchProperty #district').val();
		if(value != -1){
			html_arr.push('<option value="-1">任何</option>');
			for (var i = 0; i < property_count_ALL[value].Property_ID.length; i++) {
				html_arr.push('<option>' + property_count_ALL[value].Property_ID[i] + '</option>');
			}
			$('#estate').html(html_arr.join(''));
		}
	},
	changeDist:function(){
        if ($('#district ').val() != -1) {
			if(typeof property_count_ALL == "undefined"){
			var url = '/js/property_count_ALL.js';
				$.ajax({
					url: url,
					success: function(){PTY.searchFrm.showSelectList()},
					dataType: 'script',
					scriptCharset: 'utf-8'
				});
			}else{
				PTY.searchFrm.showSelectList();
			}
			/*
            var url = 'http://p18.on.cc/prop/cnt/js/property_count/property_count_' + $('#district ').val() + '.js';
            $.ajax({
                url: url,
                success: function(){PTY.searchFrm.showSelectList()},
                dataType: 'script',
                scriptCharset: 'utf-8'
            });
			*/
        }
	},
	goSearch:function(){
        var url = 'http://p18.on.cc/search/results.html';
        var sellRent = '';
              
        if (parseInt($('input[name=propertytype]:checked').val()) == 2) {
            sellRent = '&minpricerent=1';
        } else if (parseInt($('input[name=propertytype]:checked').val()) == 1) {
            sellRent = '&minprice=0.001';
        }
               
        if ($('#district').val() != -1) {
            if ($('#estate').val() != -1) {
                url += '?district_id=' + $('#district').val() + '&district=' + encodeURIComponent($.trim($('#district option:selected').text())) + '&estate=' + encodeURIComponent($('#estate').val()) + '&propertytype=3' + sellRent;
                window.open(url);
            } else {
                url += '?district_id=' + $('#district').val() + '&district=' + encodeURIComponent($.trim($('#district option:selected').text())) + '&propertytype=3' + sellRent;
                window.open(url);
            }
        } else {
            url += '?district_id=ALL&district='+encodeURIComponent('地區')+'&propertytype=3' + sellRent;
            window.open(url);
        }
	}
};
// E: PTY
