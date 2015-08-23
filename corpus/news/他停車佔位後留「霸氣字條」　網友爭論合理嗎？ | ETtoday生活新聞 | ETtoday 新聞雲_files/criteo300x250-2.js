if (crtg_content && crtg_content.indexOf('E300250M2') > -1) 
{
   document.MAX_ct0 ='INSERT_CLICK_URL';
   var m3_u = (location.protocol=='https:'?'https://cas.criteo.com/delivery/ajs.php?':'http://cas.criteo.com/delivery/ajs.php?');
   var m3_r = Math.floor(Math.random()*99999999999);
   document.write ("<scr"+"ipt type='text/javascript' src='"+m3_u);
   document.write ("zoneid=169842");
   document.write ('&amp;cb=' + m3_r);
   if (document.MAX_used != ',') document.write ("&amp;exclude=" + document.MAX_used);
   document.write (document.charset ? '&amp;charset='+document.charset : (document.characterSet ? '&amp;charset='+document.characterSet : ''));
   document.write ("&amp;loc=" + escape(window.location));
   if (document.referrer) document.write ("&amp;referer=" + escape(document.referrer));
   if (document.context) document.write ("&context=" + escape(document.context));
   if ((typeof(document.MAX_ct0) != 'undefined') && (document.MAX_ct0.substring(0,4) == 'http')) {
       document.write ("&amp;ct0=" + escape(document.MAX_ct0));
   }
   if (document.mmm_fo) document.write ("&amp;mmm_fo=1");
   document.write ("'></scr"+"ipt>");
}
else
{
	document.write('<scr'+'ipt type="text/javascript">');
	document.write('google_ad_client = "ca-pub-5538854675439600";');
	document.write('google_ad_slot = "8858861379";');
	document.write('google_ad_width = 300;');
	document.write('google_ad_height = 250;');
	document.write('google_ad_region = "test";');
	document.write ('google_page_url = "http://www.ettoday.net/";');
	document.write('</scr'+'ipt>');
	document.write('<scr'+'ipt type="text/javascript" src="//pagead2.googlesyndication.com/pagead/show_ads.js"></scr'+'ipt>');
}