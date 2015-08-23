(function(){
	var nativeHtml = {
		'bottom_fix': '<div id="fix_bottom"><ul><li style="padding:0;margin:0;height:0;width:0;"><h2><div class="imgdiv"><img class="img" src="https://s.yimg.com/av/moneyball/ads/1436940489365-6574.jpg"></div><a target="_blank" href="#">《ISO 9001認證》機密文件銷毀就得找專家！</a></h2></li></ul></div>',
		'300250': '<div id="gm_popup"><ul><li><h2><div class="imgdiv"><a href="#"></a></div><a target="_blank" href="#"></a></h2></li></ul></div>',
		'336280': '<div id="gm_popup"><ul><li><h2><div class="imgdiv"><a href="#"></a></div><a target="_blank" href="#"></a></h2></li></ul></div>'
		//'336280': '<div id="gm_popup"><ul><li><h2><div class="imgdiv"><a href="#"><img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSC-MCYOmHehTDbSty1CaVOcE8F_KaEsCcnwYmtS-RBocsA-W0d3V3xYPM"></a></div><a target="_blank" href="#">環遊世界的任意門！隨時進入全英環境，孩子遊學不用等</a></h2></li></ul></div>'
	},
	sectionCode = {
		//"bottom_fix": "3f6a19f0-e3da-4562-8166-1abf0cdf08cd"
		"bottom_fix": "61343e49-456b-4079-975e-dbc17ef858d4",
		"300250": "97ea980e-972b-405e-a5fb-dcbc88794296",
		"336280": "97ea980e-972b-405e-a5fb-dcbc88794296"
	},
	backfill = {
		"bottom_fix": "http://218.adsbro.com/ytw/ettoday/mobile_fix_backfill.html"
	},
	EtNative = {
		init: function(args) {
			var aid = this.gup("aid"),
				sectionCode = "";
			this.appendCSS( aid );
			this.appendHtml({aid: aid, html: this.getHtml({aid: aid}) });
		},
		gup: function(name){
			name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
			var regexS = "[\\?&]" + name + "=([^&#]*)";
			var regex = new RegExp(regexS);
			var results = regex.exec(window.location.href);
			if (results == null) {
				return null;
			} else {
				return results[1];
			}
		},
		getCSS: function(args){
			return nativeCss.commonCss + nativeCss[args.aid];
		},
		getHtml: function(args){
			return nativeHtml[args.aid] + this.getScriptCode({aid: args.aid});
		},
		getScriptCode: function(args){
			var aid = args.aid,
				sCode = sectionCode[aid] || "",
				yahooCode = [];
			if(sCode){
				yahooCode.push('<scr' + 'ipt "text/javascript">');
				yahooCode.push('var sectionCode = sectionCode || [];');
				yahooCode.push('sectionCode.push("'+ sCode +'");');
				yahooCode.push('(function(){');
				yahooCode.push('var script = document.createElement("script");');
				yahooCode.push('script.async = true;');
				yahooCode.push('script.src = "https://s.yimg.com/av/gemini/ga/gemini.js";');
				yahooCode.push('document.body.appendChild(script);');
				yahooCode.push('})();');
				yahooCode.push('</scr' + 'ipt>');
				return yahooCode.join("");
			}else{
				return "";
			}
		},
		appendCSS: function(sId, sCss) {
			var cssId = 'css_' + sId,
				dHead = document.getElementsByTagName('head')[0],
				d;
			if (document.getElementById(cssId) && !dHead) {
				return;
			}
			if(sCss){
				d = document.createElement('style');
				d.setAttribute('type', 'text/css');
				d.id = cssId;
				if (!/MSIE/ig.test(navigator.appVersion)) {
					d.innerHTML = sCss.replace(/ysmad/ig, sId);
				} else {
					d.styleSheet.cssText = sCss.replace(/ysmad/ig, sId);
				}
			}else{
				d = document.createElement("link");
				d.rel = "stylesheet";
				d.type = "text/css";
				d.id = cssId;
				d.href = 'http://static.intentarget.com/ettoday/gemini/'+sId+'.css';
			}
			dHead.appendChild(d);
		},
		includeLinkStyle: function(url){
			var link = document.createElement("link");
			link.rel = "stylesheet";
			link.type = "text/css";
			link.href = url;
			document.getElementsByTagName("head")[0].appendChild(link);
		},
		appendHtml: function(args) {
			document.write(args.html);
			var aid = args.aid,
				backf = backfill[aid] || "",
				adid = (aid === "bottom_fix" ? "fix_bottom" : "gm_popup"),
				adObj = document.getElementById(adid),
				num = 0,
				maxNum = 5,
				ckAd = setInterval(function(){
					var ckAdObj = adObj.getElementsByClassName("gemini-loaded");
					if ( typeof (ckAdObj) != 'undefined' && ckAdObj.length > 0) {
						clearInterval(ckAd);
						if(aid === "bottom_fix"){
							var title = ckAdObj[0].getElementsByTagName("a")[0].text,
								strLen = getStrLen(title),
								clientWidth = document.body.clientWidth;
							if((strLen > 44 && clientWidth < 330) || (strLen > 53 && clientWidth >= 330)){
								ckAdObj[0].getElementsByTagName("a")[0].style.fontSize = "1.25rem";
							}
						}
					}else{
						num++;
						if(num > maxNum){
							clearInterval(ckAd);
							if(ckAdObj.length <= 0 && backf){
								window.location.href = backf;
							}
						}
					}
				}, 1000);
		}
	};
	window.EtNative = EtNative;
	EtNative.init();
})();
function getStrLen(str){
	var realLength = 0,
		len = str.length,
		charCode = -1;
    for(var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if(charCode >= 0 && charCode <= 128){
        	realLength += 1;
        }else{
        	realLength += 2;
        }
    }
    return realLength;
}

