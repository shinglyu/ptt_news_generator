var GLBOAL_PATH = 'tw';
var NEWS_PATH = '/' + GLBOAL_PATH + '/' + 'bkn';

$(document).ready(function() {
	if ($AD.hFrame.loaded) {
		var hframeCtn = $('#hframeCtn');
		if (hframeCtn.length === 0) {
			$('#header').after('<div id="hframeCtn"></div>');
			hframeCtn = $('#hframeCtn');
		}
		var hframeHTML = $AD.hFrame.right.css({'position':'absolute', 'top':'0px','right':-$AD.hFrame.right.width+'px'}).renderHtml() +  $AD.hFrame.left.css({'position':'absolute', 'top':'0px','left':-$AD.hFrame.left.width+'px'}).renderHtml();
		hframeCtn.append(hframeHTML);
		$AD.hFrame.left.writeFlash();
		$AD.hFrame.right.writeFlash();
	}
	ONCC.footer.init();

});