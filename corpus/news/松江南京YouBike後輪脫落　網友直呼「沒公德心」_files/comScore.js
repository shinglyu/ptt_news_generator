(function (window) {
    // just in case that the window.Scupio object does not exist 
    if(typeof(window.Scupio) === 'undefined') {
        window.Scupio = {};
    }

    var CSString="";
    CSString += "<!-- Begin comScore Tag -->";
    CSString += "<script>  var _comscore = _comscore || [];";
    CSString += "  _comscore.push({ c1: \"8\", c2: \"11473066\" ,c3: \"%%%%\" });";
    CSString += "  (function() {";
    CSString += "    var s = document.createElement(\"script\"), el = document.getElementsByTagName(\"script\")[0]; s.async = true;";
    CSString += "    s.src = (document.location.protocol == \"https:\" ? \"https:\/\/sb\" : \"http:\/\/b\") + \".scorecardresearch.com\/beacon.js\";";
    CSString += "    el.parentNode.insertBefore(s, el);";
    CSString += "  })();";
    CSString += "<\/script>";
    CSString += "<noscript>";
    CSString += "  <img src=\"http:\/\/b.scorecardresearch.com\/p?c1=8&c2=11473066&c3=%%%%&c15=&cv=2.0&cj=1\" \/>";
    CSString += "<\/noscript>";
    CSString += "<!-- End comScore Tag -->";

    window.Scupio.comScore = {};
    window.Scupio.comScore['4'] = CSString.replace('%%%%', '2370896352948000004');
    window.Scupio.comScore['5'] = CSString.replace('%%%%', '2370896352948000004');
    window.Scupio.comScore['32'] = CSString.replace('%%%%', '2370896352948000004');
    window.Scupio.comScore['19'] = CSString.replace('%%%%', '2370896352948000019');
    window.Scupio.comScore['23'] = CSString.replace('%%%%', '2370896352948000023');
    window.Scupio.comScore['6'] = CSString.replace('%%%%', '2370896352948000006');
    window.Scupio.comScore['8'] = CSString.replace('%%%%', '2370896352948000006');
    window.Scupio.comScore['7'] = CSString.replace('%%%%', '2370896352948000006');
    window.Scupio.comScore['31'] = CSString.replace('%%%%', '2370896352948000006');
    window.Scupio.comScore['20'] = CSString.replace('%%%%', '2370896352948000006');
    window.Scupio.comScore['15'] = CSString.replace('%%%%', '2370896352948000021');
    window.Scupio.comScore['25'] = CSString.replace('%%%%', '2370896352948000021');
    window.Scupio.comScore['21'] = CSString.replace('%%%%', '2370896352948000021');
    window.Scupio.comScore['1'] = CSString.replace('%%%%', '2370896352948000001');
    window.Scupio.comScore['26'] = CSString.replace('%%%%', '2370896352948000001');
    window.Scupio.comScore['27'] = CSString.replace('%%%%', '2370896352948000001');
    window.Scupio.comScore['24'] = CSString.replace('%%%%', '2370896352948000001');
    window.Scupio.comScore['13'] = CSString.replace('%%%%', '2370896352948000001');
    window.Scupio.comScore['16'] = CSString.replace('%%%%', '2370896352948000015');
    window.Scupio.comScore['17'] = CSString.replace('%%%%', '2370896352948000015');
    window.Scupio.comScore['18'] = CSString.replace('%%%%', '2370896352948000015');
    window.Scupio.comScore['22'] = CSString.replace('%%%%', '2370896352948000015');
    window.Scupio.comScore['11'] = CSString.replace('%%%%', '2370896352948000011');
    window.Scupio.comScore['30'] = CSString.replace('%%%%', '2370896352948000011');
    window.Scupio.comScore['29'] = CSString.replace('%%%%', '2370896352948000011');
    window.Scupio.comScore['14'] = CSString.replace('%%%%', '2370896352948000011');
    window.Scupio.comScore['10'] = CSString.replace('%%%%', '2370896352948000009');
    window.Scupio.comScore['2'] = CSString.replace('%%%%', '2370896352948000036');
    window.Scupio.comScore['9'] = CSString.replace('%%%%', '2370896352948000036');
    window.Scupio.comScore['28'] = CSString.replace('%%%%', '2370896352948000036');
    window.Scupio.comScore['3'] = CSString.replace('%%%%', '2370896352948000038');
    window.Scupio.comScore['12'] = CSString.replace('%%%%', '2370896352948000037');

})(window);