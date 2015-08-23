/********************* 果實 in-page 影音廣告 *********************/
var ONEAD = {};
ONEAD.channel =  21; // ETtoday：新聞頻道 (是個別網站的頻道屬性，由果實夥伴提供)

//聲音播放時段設定 (設定每天自動靜音的時間區段)
var AudioStartHour = 8;//<---自動聲音播放開始：時
var AudioStartMinute = 0;//<---自動聲音播放開始：分
var AudioPlayStopHour = 21;//<---自動聲音播放結束：時
var AudioPlaySopMinute = 59;//<---自動聲音播放結束：分

//抓取現在時間
var RightNOW = new Date();
var this_hour = RightNOW.getHours();
var this_minute = RightNOW.getMinutes();
var this_second = RightNOW.getSeconds();

//靜音期間設定：以0時為0，分別計數出各時間點距0時幾秒
var AutoAudioStartTime = (AudioStartHour*60*60)+(AudioStartMinute*60);
var AutoAudioStopTime = (AudioPlayStopHour*60*60)+(AudioPlaySopMinute*60);
var RightTime = (this_hour*60*60)+(this_minute*60);

//音量依時間不同
if (AutoAudioStartTime <= RightTime && RightTime <= AutoAudioStopTime) {//現在時間介於聲音播放開始和結束時間
	ONEAD.volume =  0.1; // 預設音量，值域為 0 ~ 1，建議採中間值 0.5。
	//alert("音量0.1");
} else {
	ONEAD.volume =  0; // 預設音量，值域為 0 ~ 1，建議採中間值 0.5。
	//alert("音量0");
}

ONEAD.slot_limit = {width: 1000, height: 408};//廣告 Player 的寬高設定
ONEAD.slot_limit_multiple = {
	inread: {
	width: 665,
	height: 406
	}
};

ONEAD.response_freq = {start:1, step: 3};

//分頻id
var categoryID = $("body").attr("id");
if (categoryID =="" || categoryID == undefined){
	ONEAD.category = "-1";
} else {
	ONEAD.category = categoryID;
}
ONEAD.response_freq_multiple = {
    incover: "1",
    instream: "1,4",
    inread: "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99"
};

// async 
ONEAD.cmd = ONEAD.cmd || [];

// For OneAD, DON'T MODIFY the following
if (ONEAD){
	ONEAD.uid = "1000019";	//正式UID，由果實夥伴提供
	//ONEAD.uid = "1000001"; //測試UID
	ONEAD.external_url = "http://onead.onevision.com.tw/"; //正式影音廣告主機
	//ONEAD.external_url = "http://demo.onead.com.tw/"; //測試影音廣告主機	
	ONEAD.wrapper = 'ONEAD_player_wrapper';	
	ONEAD.wrapper_multiple = {
		instream: "ONEAD_player_wrapper", // equals to inpage
		inread: "ONEAD_inread_wrapper",
		incover: "ONEAD_incover_wrapper"
	};	
}

if (typeof window.isip_js == "undefined") {	
	// document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');

	// async
	(function() {
	var src = 'http://ad-specs.guoshipartners.com/static/js/isip.v2.js';//正式isip.js
	//var src = 'http://ad-specs.guoshipartners.com/demo/js/isip.js';//測試isip.js
	
	var js = document.createElement('script');
	js.async = true;
	js.type = 'text/javascript';
	var useSSL = 'https:' == document.location.protocol;
	js.src = src;	
	var node = document.getElementsByTagName('script')[0];
	node.parentNode.insertBefore(js, node.nextSibling); // insert after
	})();	
}


// ONEAD, this is tempate if you want to overwrite
ONEAD_on_get_response = function(param){
// if there is no pid, param is {}, it's not null
if (param === null || param.pid === undefined){
	// 沒廣告
} else {
	var t = setInterval(function(){
	if (ONEAD_is_above(100)){    }
		 }, 1000);
	 }
}

// 這個函式名稱是固定的，廣告播放完畢會呼叫之
function changeADState(obj){
    // if not out-of-screen
    if (!ONEAD_is_above(200)){ // 可知廣告是否超過 browser 顯示範圍， 以控制廣告播放完畢時，不會slideup
        // following is necessary for Firefox (its bug), DON'T remove it
        ONEAD_setfocus();

        if (obj.newstate == 'COMPLETED' || obj.newstate == 'DELETED' ){
        if (ONEAD.play_mode == 'incover'){
            // remove the dimming block
            ONEAD_cleanup(ONEAD.play_mode);
        }else{
            ONEAD_cleanup();
        }
        }
    }
    else {
            if (obj.newstate == 'DELETED' ){

                if (ONEAD.play_mode == 'incover'){
                    // remove the dimming block
                    ONEAD_cleanup(ONEAD.play_mode);
                }else{
                    ONEAD_cleanup();
                }
            }
    }
}