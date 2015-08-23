var viTms = 0, clTms = 0;
var fviTm, lviTm;
var fclTm, lclTm;
$("#BWAdBlock").mouseenter(function(ev) {
if (viTms == 0) { fviTm = new Date(); } lviTm = new Date(); ++viTms; en23 = fviTm.getFullYear() + pad2(fviTm.getMonth() + 1) + pad2(fviTm.getDate()) + pad2(fviTm.getHours()) + pad2(fviTm.getMinutes()) + pad2(fviTm.getSeconds()) + pad3(fviTm.getMilliseconds())
+ "," + viTms + "," + lviTm.getFullYear() + pad2(lviTm.getMonth() + 1) + pad2(lviTm.getDate()) + pad2(lviTm.getHours()) + pad2(lviTm.getMinutes()) + pad2(lviTm.getSeconds()) + pad3(lviTm.getMilliseconds()) + "," + lviTm.getTimezoneOffset() / (-60) + ";"
+ (ev.screenX + "," + ev.screenY) + "," + (screen.width + "x" + screen.height) + "," + (ev.clientX + "," + ev.clientY) + "," + (screen.availWidth + "x" + screen.availHeight);
}).mousedown(function(ev) {
if (clTms == 0) { fclTm = new Date(); } lclTm = new Date(); ++clTms; en24 = fclTm.getFullYear() + pad2(fclTm.getMonth() + 1) + pad2(fclTm.getDate()) + pad2(fclTm.getHours()) + pad2(fclTm.getMinutes()) + pad2(fclTm.getSeconds()) + pad3(fclTm.getMilliseconds())
+ "," + clTms + "," + lclTm.getFullYear() + pad2(lclTm.getMonth() + 1) + pad2(lclTm.getDate()) + pad2(lclTm.getHours()) + pad2(lclTm.getMinutes()) + pad2(lclTm.getSeconds()) + pad3(lclTm.getMilliseconds()) + ";" 
+ (ev.screenX + "," + ev.screenY) + "," + (screen.width + "x" + screen.height) + "," + (ev.clientX + "," + ev.clientY) + "," + (screen.availWidth + "x" + screen.availHeight) + "," + (lf_w + "x" + lf_h);
});