function bookmark()
{
	url="http://www.cts.com.tw";
	title="華視全球資訊網";
	var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	if(is_chrome){
	var d = window.open("http://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk="+url+"&title="+title,"bkmk_popup","left="+((window.screenX||window.screenLeft)+10)+",top="+((window.screenY||window.screenTop)+10)+",height=420px,width=550px,resizable=1,alwaysRaised=1");
	window.setTimeout(function(){d.focus()},300);
	}else if (window.sidebar) {
		window.sidebar.addPanel(title, url, "");
	}else if( window.external ) {
		window.external.AddFavorite( url, title); 
	}else if(window.opera && window.print) {
		return true;
	}
}

function changeArticleClass(className){
	$("#article").removeClass().addClass("article").addClass(className);
	localStorage.setItem("CtsArticleClass", className);
}
function sitemapToggle(){
	$(".footer_sitemap").toggle();	
}
function moneyFormat(str)
{
	if(str.length<=3) return str; else return moneyFormat(str.substr(0,str.length-3))+","+(str.substr(str.length-3));
} 
function gotop(){
	$("html,body").animate({
           scrollTop:0
    },1000);
}
$(document).ready(function(e) {

	if(localStorage.getItem("CtsArticleClass")) changeArticleClass(localStorage.getItem("CtsArticleClass"));
	
    $(".gotop").click(gotop);
	/*$(window).scroll(function() {
        if ( $(this).scrollTop() > 200){
            $('.gotop').fadeIn("fast");
        } else {
            $('.gotop').stop().fadeOut("fast");
        }
    });*/
});