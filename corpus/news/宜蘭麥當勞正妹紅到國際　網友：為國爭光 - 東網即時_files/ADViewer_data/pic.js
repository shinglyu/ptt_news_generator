var en23 = "";
var en24 = "";

function onLogo() {
    var itm = document.getElementById('bwlogo1');
    itm.style.visibility = 'hidden';
    itm = document.getElementById('bwlogo2');
    itm.style.visibility = 'visible';
}
function outLogo() {
    var itm = document.getElementById('bwlogo2');
    itm.style.visibility = 'hidden';
    itm = document.getElementById('bwlogo1');
    itm.style.visibility = 'visible';
}
var bwtimer;
function stopper() {
    clearTimeout(bwtimer);
}
function closer() {
    bwtimer = setTimeout('outLogo()', 1000);
}
function scupioclick() {
    window.open(adurl);
}
function scupioclick2(a) {
    window.open(a);
}
function swfclick() {
    go(adurl + '&en23=' + en23 + '&en24=' + en24, '_blank');
}
function swfclick0() {
    go(adurl0 + '&en23=' + en23 + '&en24=' + en24, '_blank');
}
function swfclick1() {
    go(adurl1 + '&en23=' + en23 + '&en24=' + en24, '_blank');
}


function go(u,t) {
    if(navigator.appName=="Microsoft Internet Explorer") {
        var l=document.getElementById("bwlink");
        l.target=t;
        l.href=u;
        l.click();
    }
    else { window.open(u,t); }
}

// 300x250, charge
function redirect() {
    var ades = adurl + '&rand=' + Math.random();
    go(ades + '&en23=' + en23 + '&en24=' + en24, '_blank');
}

// 300x250, no charge
function playvideo() {
    var ades = adurl + '&redirect=4&rand=' + Math.random();
    includejs(ades);
    isFirstPlay = false;
}


// 728x90, charge
function openvideo() {
    var ades = adurl + '&redirect=3&rand=' + Math.random();
    go(ades + '&en23=' + en23 + '&en24=' + en24, '_blank');
}


function createjs(jssrc) {
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', jssrc);
    return s;
}

function includejs(jssrc) {
    var head = document.getElementsByTagName('head')[0];
    if (head) head.appendChild(createjs(jssrc));
    else document.body.appendChild(createjs(jssrc));
}

function pad2(i) {
    if (i < 10 && i >= 0)
        return "0" + i;
    else
        return "" + i;
}

function pad3(i) {
    if (i < 10 && i >= 0)
        return "00" + i;
    else if (i < 100 && i >= 0)
        return "0" + i;
    else
        return i + "";
}




