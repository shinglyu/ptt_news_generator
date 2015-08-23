
	 //if ( window.location.href.indexOf('yahooNativeAd') != -1 ) {
		var sectionCode = sectionCode || [];
		if ( ONCC.getLevel() == 'main') {

			if ( ONCC.getSection() == 'entertainment') {
				sectionCode.push("257f11fb-7053-4bc5-978c-3d640d4c2d63");
			} else if ( ONCC.getSection() == 'sport') {
				sectionCode.push("1f96bb24-f9fe-4458-a48a-8135af89dbb7");
			} else if ( ONCC.getSection() == 'lifestyle') {
				sectionCode.push("94d81afa-a1e5-4e31-9166-9307bc7b90b5");
			} else if ( ONCC.getSection() == 'finance') {
				sectionCode.push("cb37aec8-870a-48ba-8012-4141d5ffe029");
			} else if ( ONCC.getSection() == 'news') {
				sectionCode.push("a064ce94-ef61-4d1d-9096-713e7e9d5f70");
			}
		} else if ( ONCC.getLevel() == 'content') {
			
			if ( ONCC.view == 'm') {
				sectionCode.push("08e7836a-c01f-4851-80b6-be94deb89bfc");
			} else {
				sectionCode.push("c2883db5-23d0-45d8-9482-727fea93ba62");
			}
			
		}
		setTimeout('(function(){var script = document.createElement("script");script.async = true;script.src = "https://s.yimg.com/av/gemini/ga/gemini.js";document.body.appendChild(script);})()',1500);
	//}