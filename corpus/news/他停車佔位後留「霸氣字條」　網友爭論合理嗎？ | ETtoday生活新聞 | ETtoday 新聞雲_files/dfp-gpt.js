//googletag.cmd.push(function() {

if (window.location.href.indexOf("3q4fd7") == -1 && window.location.href.indexOf("/news/") >0 || window.location.href.indexOf("/album/") >0 || window.location.href.indexOf("/topic/") >0) {
	googletag.defineSlot('/12656948/allsite_300x250_middle', [300, 250], 'div-gpt-ad-1410432716587-10').addService(googletag.pubads()); //全網_巨幅(中)@熱門新聞下方
	googletag.defineSlot('/12656948/allsite_300x250_2', [300, 250], 'div-gpt-ad-1410432716587-12').addService(googletag.pubads()); //全網_巨幅(下)@最新新聞下方
	googletag.defineSlot('/12656948/allsite_300x250_3', [300, 250], 'div-gpt-ad-1410432716587-13').addService(googletag.pubads()); //全網_巨幅(熱門快報下方)
}

	// Criteo script #2 Start
	var crtg_split = (crtg_content || '').split(';');
	var pubads = googletag.pubads();
	for (var i=1;i<crtg_split.length;i++){
		pubads.setTargeting("" + (crtg_split[i-1].split('='))[0] + "", "" + (crtg_split[i-1].split('='))[1] + "");
	}
	// Criteo script #2 End

	googletag.pubads().set("page_url", "http://www.ettoday.net");
	googletag.pubads().enableSyncRendering();
	googletag.pubads().enableSingleRequest();
	googletag.enableServices();

//});