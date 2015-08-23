//頁籤iframe廣告==============================================
//$(function(){

	var sAdTab01Url;        //iframe 網址
	var sAdTab01W;          //iframe 寬
	var sAdTab01H;          //iframe 高
	var iAdTab01Current;    //當前頁次 
	var iAdTab01Change = 999; //★要輪播=0, 不輪播 = 999
	var iAdTab01ChangeLoop = 1; //★輪播次數 預設是1
	var $AdTab01 = $("#adTab01");
	var $AdTab01Btn = $("#adTab01 .tab_title li");
	var $AdTab01Content = $("#adTab01 .tab_content");
	var iAdTab01Size = $AdTab01Btn.length;
	var iAdTab01Speed = 2000; //停留時間  (選用)
	var aAdTab01Probability = []; //亂數 [0, 1, 2, 2, 2, 3, 4, 5]增加機率 (選用)

	if (iAdTab01Size > 0 ) {//有頁籤時
		
		//換內容
		function fnAdTab01LoadUrl(argNo){
			$AdTab01Btn.removeClass("current").eq(argNo).addClass("current");
			sAdTab01Url = $AdTab01Btn.eq(argNo).attr("data-url");
			sAdTab01W = $AdTab01Btn.eq(argNo).attr("data-w");
			sAdTab01H = $AdTab01Btn.eq(argNo).attr("data-h");
			$AdTab01Content.find("iframe").attr({"src":sAdTab01Url, "width":sAdTab01W,"height":sAdTab01H});
		};

		//輪播
		function fnAdTab01Cycle(){
			iAdTab01Change++
			if(iAdTab01Change<iAdTab01Size*iAdTab01ChangeLoop){
				iAdTab01Current++;
				if( iAdTab01Current > iAdTab01Size-1){ iAdTab01Current = 0};
				fnAdTab01LoadUrl(iAdTab01Current);
			};
		};
		
		//初始判斷
		if(aAdTab01Probability.length > 1){
			//初始亂數機率高
			iAdTab01Current = aAdTab01Probability[Math.round(Math.random()*(aAdTab01Probability.length-1))];
			fnAdTab01LoadUrl(iAdTab01Current);
		}else{
			//初始亂數
			iAdTab01Current = Math.round( Math.random()*(iAdTab01Size-1) ); 
			fnAdTab01LoadUrl(iAdTab01Current);
		};
		
		//點擊換內容
		$AdTab01Btn.on("click mouseover", function(){
			var iNo = $AdTab01Btn.index(this);
			fnAdTab01LoadUrl(iNo);
		});
		
		//輪播
		var oAdTab01Timer = setInterval(fnAdTab01Cycle, iAdTab01Speed);
		
		//懸停
		$AdTab01.hover(
			function(){
				clearInterval(oAdTab01Timer);
			},
			function(){
				oAdTab01Timer = setInterval(fnAdTab01Cycle, iAdTab01Speed);
			}
		);

		//顯示頁籤區
		$("#adTab01").fadeIn();

	}else { //沒頁籤時自動隱藏本區
		$("#adTab01").remove();
	}

//});

