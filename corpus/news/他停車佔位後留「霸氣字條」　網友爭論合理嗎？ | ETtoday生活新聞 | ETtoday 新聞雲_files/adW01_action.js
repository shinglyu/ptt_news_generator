/*================== adW01 廣告=============================*/

var oAdW01Html = '<div class="adW01" id="'+ adW01Var[0].packId +'" style="position:fixed; *position:fixed; _position:absolute; z-index:50;" >';
	oAdW01Html += '<a href="http://ad.ettoday.net/adclick.php?bid='+ adW01Var[0].bid +'&bannerid='+ adW01Var[0].bannerid +'" target="_blank" rel="nofollow">';
	oAdW01Html += '<img src="'+ adW01Var[0].file +'" width="'+ adW01Var[0].width +'" height="'+ adW01Var[0].height +'" />';
	oAdW01Html += '</a>';
	oAdW01Html += '</div>'

//視窗太小隱藏浮水印
function fnAdW01WinChange(){
	var iWinW=$(window).width();
	if(iWinW < 1000+adW01Var[0].width){
		$(".adW01").hide();
	}
	else{
		$(".adW01").show();
	}
}

//初始
$(function(){
	$("body").append(oAdW01Html);
	$(".adW01").css({
		"width":adW01Var[0].width,
		"height":adW01Var[0].height,
		"right":adW01Var[0].right,
		"top":adW01Var[0].top
	});
	
	//ie6 png 換圖
	if ($.browser.msie && ($.browser.version == "6.0")){
		$(".adW01 img[src$=png]").attr("src",adW01Var[0].gifFix);
	}
	
	//視窗太小隱藏浮水印
	fnAdW01WinChange();
	
	//改變視窗
	$(window).resize(function() {
		fnAdW01WinChange();
	});
});




