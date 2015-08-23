/********************* LOGO 專用 *********************/
var etLogoRightNow = new Date();
var etLogoStartTime = new Date(2015, 6-1, 17, 00, 00, 00); // 結束時間 (年,月(0-11),日,時,分,秒)
var etLogoEndTime = new Date(2015, 6-1, 20, 23, 59, 59); // 結束時間 (年,月(0-11),日,時,分,秒
var etLogoSrc = 'http://static.ettoday.net/web_2011/images/logo/2015_dragon_boat_festival.gif'; //圖檔路徑

if (etLogoRightNow > etLogoStartTime && etLogoRightNow < etLogoEndTime) {
	//上檔期間-節慶Logo
	document.write('<a href="http://www.ettoday.net" title="回首頁"><img src="'+etLogoSrc+'" width="300" height="70" border="0" alt="ETtoday 新聞雲"/></a>');
}else{
	//下檔期間-預設Logo
	document.write('<a href="http://www.ettoday.net" title="回首頁"><img src="http://static.ettoday.net/web_2011/images/logo_ettoday.gif" width="300" height="70" border="0" alt="ETtoday 新聞雲"/></a>');
};








//=======================備用 判斷瀏覽器是否支援 Flash================================
/*
var MM_contentVersion = 6;
var plugin = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;
if ( plugin ) {
  var words = navigator.plugins["Shockwave Flash"].description.split(" ");
	 for (var i = 0; i < words.length; ++i)
	 {
  if (isNaN(parseInt(words[i])))
  continue;
  var MM_PluginVersion = words[i]; 
	 }
 var MM_FlashCanPlay = MM_PluginVersion >= MM_contentVersion;
}
else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 
	&& (navigator.appVersion.indexOf("Win") != -1)) {
	document.write('<SCR' + 'IPT LANGUAGE=VBScript\> \n'); //FS hide this from IE4.5 Mac by splitting the tag
	document.write('on error resume next \n');
	document.write('MM_FlashCanPlay = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & MM_contentVersion)))\n');
	document.write('</SCR' + 'IPT\> \n');
}

if ( MM_FlashCanPlay ) {//瀏覽器支援Flash時

	var etLogoRightNow = new Date();
	var etLogoStartTime = new Date(2014, 4, 26, 00, 00, 00); // 結束時間 (年,月(0-11),日,時,分,秒)
	var etLogoEndTime = new Date(2014, 5, 2, 23, 59, 59); // 結束時間 (年,月(0-11),日,時,分,秒

	if (etLogoRightNow > etLogoStartTime && etLogoRightNow < etLogoEndTime) {//現在時間介於開始和結束時間，顯示Flash Logo
		//節慶 Logo (純 flash)
		document.write('<embed src="http://cache.ettoday.net/web_2011/images/logo/2014-dragonboat.swf" name="flashIntro" width="300" height="70" wmode="opaque" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></embed>');
		
	
	} else {//不在指定期間時，顯示圖片Logo
		//圖檔Logo
		document.write('<a href="http://www.ettoday.net" title="回首頁"><img src="http://static.ettoday.net/web_2011/images/logo_ettoday.gif" width="300" height="70" usemap="#update_flash" border="0" alt="ETtoday 新聞雲"/></a>');
	}
	
} else { //沒有flash時的替代圖檔設定
	//原始LOGO
	document.write('<a href="http://www.ettoday.net" title="回首頁"><img src="http://static.ettoday.net/web_2011/images/logo_ettoday.gif" width="300" height="70" usemap="#update_flash" border="0" alt="ETtoday 新聞雲"/></a>');
}
*/