var gemi_domain = window.location.origin;
var gemi_url = gemi_domain + "/events/ad-source/sitebro/et_native.html?aid=" + gemi_ifrW + gemi_ifrH;

if(gemi_domain.indexOf("movies.ettoday.net") > -1){
	gemi_url = "http://movies.ettoday.net/et_native.html?aid=" + gemi_ifrW + gemi_ifrH;
}else if(gemi_domain.indexOf("travel.ettoday.net") > -1){
	gemi_url = "http://travel.ettoday.net/et_native.html?aid=" + gemi_ifrW + gemi_ifrH;
}else if(gemi_domain.indexOf("game.ettoday.net") > -1){
	gemi_url = "http://game.ettoday.net/et_native.html?aid=" + gemi_ifrW + gemi_ifrH;
}

document.write('<iframe width="'+ gemi_ifrW +'" scrolling="no" height="'+ gemi_ifrH +'" frameborder="0" style="" vspace="0" marginheight="0" marginwidth="0" hspace="0" allowtransparency="true" src="'+ gemi_url +'"></iframe>');