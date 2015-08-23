(function(window, undefined) {

    var _w = window;
    var _d = window.document;
    var _undefined = typeof (undefined);

    // if there is not a global Scupio object, create it!
    if (typeof (_w.Scupio) === _undefined) {
        _w.Scupio = {};
        _w.Scupio.alive = {};
        _w.Scupio.response = {};
    }

    var _s = _w.Scupio;

    // prepare all the parameters needed before asking for an ad
    var scriptId = "cts_1007_10772_11438_1_script";
    _s.alive[scriptId] = true;
    
    // detect protocol
    var http = 'http' + (_w.location.protocol.charAt(4) == 's' ? 's://' : '://');

    /* prepare helper function */
    //   1. script/stylesheet loader
    _s.load = _s.load || function(url, type, test, callback) {
        // load only if test is true, else just do callback
        if (!test) {
            if (typeof (callback) === "function") callback();
        } else {
            var script;

            if (type === "script") {
                script = window.document.createElement("script");
                script.type = "text/javascript";
                script.src = url;
            } else if (type === "stylesheet") {
                script = window.document.createElement("link");
                script.type = "text/css";
                script.rel = "stylesheet";
                script.href = url;
            } else {
                throw "In Scupio.loadScript(), type: " + type + " is unknown.";
            }

            if (script.readyState) { //IE
                script.onreadystatechange = function() {
                    if (script.readyState == "loaded" || script.readyState == "complete") {
                        script.onreadystatechange = null;
                        if (typeof (callback) === "function") {
                            callback();
                        }
                    }
                };
            } else { //Others
                script.onload = function() {
                    if (typeof (callback) === "function") {
                        callback();
                    }
                };
            }

            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        }
    };

    //   2. browser detection
    _s.browser = _s.browser || {
        init: function() {
            this.iFrame = this.detectIFrame();
            this.name = this.searchString(this.dataBrowser) || "an unknown browser";
            this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
            this.OS = this.searchString(this.dataOS) || "an unknown OS";
            this.mobile = (/iPhone|iPod|iPad|Android|BlackBerry|Opera/).test(navigator.userAgent);
        },
        detectIFrame: function() {
            return _w.self != _w.top;
        },
        searchString: function(data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                var dataProp = data[i].prop;
                this.versionSearchString = data[i].versionSearch || data[i].identity;
                if (dataString) {
                    if (dataString.indexOf(data[i].subString) != -1)
                        return data[i].identity;
                } else if (dataProp)
                    return data[i].identity;
            }
        },
        searchVersion: function(dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index == -1) return;
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        },
        dataBrowser: [{
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        }, {
            string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        }, {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        }, {
            prop: window.opera,
            identity: "Opera",
            versionSearch: "Version"
        }, {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        }, {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        }, {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        }, {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        }, { // for newer Netscapes (6+)
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        }, {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        }, {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        }, { // for older Netscapes (4-)
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }
        ],
        dataOS: [{
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        }, {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        }, {
            string: navigator.userAgent,
            subString: "iPhone",
            identity: "iPhone/iPod"
        }, {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }
        ]

    };
    _s.browser.init();
    
    // 3. Change Protocal
    _s.protocallSwapper = _s.protocallSwapper || function (url, protocall) {
        // url, please use full url, example "http://www.scupio.com"
        // protacall, example "https://"
        // returns url, example "https://www.scupio.com"
        var url_temp = url;
        
        if(typeof(url_temp) === "string") {
            var url_head_short = url.substring(0, 7);
            var url_head_long = url.substring(0, 8);
            
            if((url_head_short === "http://")) {
                url_temp = protocall + url_temp.substring(7);
            }
            else if((url_head_long === "https://")) {
                url_temp = protocall + url_temp.substring(8);
            }
        }
        
        return url_temp;
    }
    
    // 4. VCE url builder
    function vce_url(c3, adid, wid, cid) {
      var temp = wid.split(',');
                            
      // append VCE          
      var url = "<script src='http://b.voicefive.com/c2/11473066/rs.js#c1=3&amp;c3=" + c3 + 
                "&amp;c4=" + adid + 
                "&amp;c5=" + cid + 
                "&amp;c6=&amp;c10=1&amp;c11=" + temp[0] + 
                "&amp;c13=950x390&amp;c16=gen&amp;ax_i=&amp;ax_g=&amp;'></script>";
    
      return url;
    }

    var 
    // original parameters
    ts4 = (new Date).getTime() + Math.floor(Math.random() * 14930352),
    // player parameters
        id = ts4,
        width = 0, // going to be known after we get the ads
        height = 0, // going to be known after we get the ads
        volume = 0.0,
        adviewerArg = "&channelid=11438&wid=1007,1,24&PubID=lQgYBQ==",
        volume_on_by_default = false,
        auto_start = false,
        play_only_in_view_port = false;
    
    var pub = 'lQgYBQ==', cid = '11438', wid = '1007,1,24';;

    if (volume > 0.0) {
        volume_on_by_default = true;
    } else {
        volume = 0.5;
    }

    // setup response object
    _s.response[id] = null;
    // ask for an ad
    _s.load(http + "adsense.scupio.com/ADPInline/ADViewer.aspx?sv=1,950,390,1" + adviewerArg + "&u=" + encodeURIComponent(location.href) + "&ref=" + encodeURIComponent(document.referrer) + "&oid=" + id, "script", true);

    // load VideoJS and jQuery
    var src = http + "adsense.scupio.com/adpinline/js/";
    _s.load(src + "video-js.min.css", "stylesheet", typeof (VideoJS) === _undefined);
    _s.load(src + "video.min.js", "script", typeof (VideoJS) === _undefined);
    
    var jQQ;

    // also do no confict
    _s.load(http + "ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js", "script", true, function () {
        jQQ = jQuery.noConflict(true);
        
        // append comScore reach pixel code
        _s.load(http + "adsense.scupio.com/adpinline/js/comScore.js", "script", true, function () {
            if(typeof(wid) !== "undefined") {
                var wid_temp = wid.split(',');
                wid_temp[1] = jQQ.trim(wid_temp[1]); // second field is channel id
                if(typeof(_s.comScore[wid_temp[1]]) !== "undefined") {
                    jQQ("body").append(_s.comScore[wid_temp[1]]);
                }
            }
        });
    });

    /* waiting in a loop pulling for everything to load */
    var requiredLibAreNotLoaded = true;
    var trueViewEvent = false;
    var waiting = 20;
    var intervalId;
    intervalId = setInterval(function() {
        waiting--;
        if (waiting < 0) {
            // servers are too slow
            _w.clearInterval(intervalId);
        } else {
            if ( (typeof (jQQ) !== "undefined") && (typeof (VideoJS) !== "undefined") && requiredLibAreNotLoaded && (_s.response[id] !== null) ) {
                requiredLibAreNotLoaded = false;
                _s.load(src + "player2.js", "script", typeof (_s._Player_) === _undefined);
            } else if ( (typeof (window.Scupio._Player_) !== _undefined) && (_s.response[id] !== null) && (typeof(jQQ) !== "undefined") && (typeof(VideoJS) !== "undefined") ) {
                _w.clearInterval(intervalId);

                // mm
                if (_s.response[id].mm && _s.response[id].mm.pc) {
                  // append mm pixel code
                  jQQ('body').append('<img style="display:inline-block;margin:0;padding:0;border:0;width:0;height:0;" src="' + _s.response[id].mm.pc + '"></img>');
                }

                // if in ( 7-session ) and there is ( no assets for a hiding state ), then don't render at all
                if ((typeof (_s.response[id].open) === "number") || _s.response[id].expandablehide) {
                    // load expandable to DOM
                    var strVar = "";
                    strVar += "<div id=\"scupio-expandable" + id + "\" style=\"margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;padding:0;border:1px solid #cfcfcf;vertical-align:baseline;background-color:#cfcfcf;width:950px;height:" + (_s.response[id].expandablehide ? "90" : "14") + "px;position:relative;z-index:1;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;\">";
                    strVar += "    <div id=\"toggle-button" + id + "\" style=\"margin:0;padding:0px;border:0;vertical-align:baseline;position:absolute;top:0px;right:0px;width:82px;height:20px;z-index:121;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;filter:alpha(opacity=100);-moz-opacity:1.0;-khtml-opacity:1.0;opacity:1.0;background:url('" + http + "adsense.scupio.com/adpinline/images/expandable-icon2.png') -0px -139px;\"><\/div>";
                    if (_s.response[id].expandablehide) {
                        strVar += "<div id=\"toggle-open" + id + "\" style=\"margin:0;padding:0;border:0;vertical-align:baseline;position:absolute;top:0px;left:0px;height:90px;width:222px;z-index:121;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;filter:alpha(opacity=100);-moz-opacity:1.0;-khtml-opacity:1.0;opacity:1.0;background:url('" + http + "adsense.scupio.com/adpinline/images/expandable-icon2.png') -0px -40px;\"><\/div>";
                        strVar += "<div id=\"expandable-outer" + id + "\" style=\"margin:0;padding:0;border:0;vertical-align:baseline;position:absolute;top:0px;right:0px;z-index:5;width:728px;height:90px;background-image:url('" + _s.response[id].expandablehide + "');background-size:100% 100%;cursor:pointer;\"><\/div>";
                    }
                    strVar += "    <div id=\"expandable-inner" + id + "\" style=\"margin:0;padding:0;border:0;vertical-align:baseline;z-index:5;width:950px;height:390px;display:none\">";
                    if (_s.response[id].expandableopen) {
                        strVar += "    <img id=\"click-area" + id + "\" src=\"" + _s.response[id].expandableopen + "\" style=\"cursor:pointer;margin:0;padding:0;border:0;vertical-align:baseline;position:absolute;top:0px;left:0px;\" \/>";
                        strVar += "    <div id=\"scupio-expandable-player" + id + "\" style=\"margin:0;padding:0;border:0;vertical-align:baseline;position:absolute;top:45px;left:30px;z-index:10;\">";
                        strVar += "        <div id=\"scupio-expandable-player-hook" + id + "\" style=\"margin:0;padding:0;border:0;vertical-align:baseline;position:absolute;top:0;left:0;z-index:10;\">";
                        strVar += "        <\/div>";
                        strVar += "    <\/div>";
                        width = 560;
                        height = 315;
                    } else {
                        strVar += "    <div id=\"scupio-expandable-player" + id + "\" style=\"margin:0;padding:0;border:0;vertical-align:baseline;position:absolute;top:0;left:0;z-index:10;\">";
                        strVar += "        <div id=\"scupio-expandable-player-hook" + id + "\" style=\"margin:0;padding:0;border:0;vertical-align:baseline;position:absolute;top:0;left:0;z-index:10;\">";
                        strVar += "        <\/div>";
                        strVar += "    <\/div>";
                        width = 950;
                        height = 390;
                    }
                    strVar += "    <\/div>";
                    if (_s.response[id].expandableopen) {
                        strVar += "<div id=\"scupio-expandable-scupio_logo" + id + "\" style=\"margin:0;padding:0;border:0;vertical-align:baseline;position:absolute;bottom:0px;right:0;width:16px;height:18px;cursor:pointer;z-index:133;\">";
                        strVar += "    <div style=\"margin:0;padding:0;border:0;vertical-align:baseline;position:absolute;bottom:0px;right:0;width:15px;height:18px;background:url('" + http + "adsense.scupio.com/adpinline/images/expandable-icon.png') 0px -18px;\"><\/div>";
                        strVar += "<\/div>";
                    }
                    strVar += "<\/div>";

                    var has_mouse = false;

                    // expandable open state
                    var open = false;
                    // valid player
                    var ad_is_valid = true;
                    // prepare player parameters
                    var parameters = {};

                    parameters.id = id;
                    parameters.hook = "scupio-expandable-player-hook" + id;
                    
                    parameters.$ = jQQ;
                    
                    parameters.attributes = {};
                    if (_s.browser.name === "Explorer") {
                        parameters.attributes.preload = "none";
                        ad_is_valid = false;
                        if (_s.browser.version == "9") {
                            ad_is_valid = true;
                        }
                        if (_s.browser.version == "10") {
                            ad_is_valid = true;
                        }
                        if (http === "https://") {
                            ad_is_valid = false;
                        }
                    }

                    // player dimension
                    parameters.style = {
                        width: width,
                        height: height
                    };

                    // video source
                    if (_s.response[id].video) {
                        var video_path = _s.response[id].video.substring(0, _s.response[id].video.length - 4);
                        parameters.source = [{ type: "video/webm", src: video_path + ".webm" },
                                             { type: "video/mp4", src: video_path + ".mp4" },
                                             { type: "video/ogg", src: video_path + ".ogv" }];
                    }
                    else {
                        ad_is_valid = false;
                    }

                    // browser information
                    parameters.browser = {};
                    if (_s.browser.name) parameters.browser.name = _s.browser.name;
                    if (_s.browser.iFrame) parameters.browser.in_iframe = _s.browser.iFrame;
                    if (_s.browser.OS) {
                        parameters.browser.os = _s.browser.OS;
                    }
                    if (_s.browser.mobile) {
                        ad_is_valid = false;
                    }

                    parameters.behavior = {
                        volume: volume,
                        volume_on_by_default: volume_on_by_default,
                        auto_start: auto_start,
                        play_only_in_view_port: play_only_in_view_port,
                        show_logo: _s.response[id].expandableopen ? false : true,
                        ttl: 10
                    };

                    // monry event
                    // open for the first time in a 7-session
                    if (typeof (_s.response[id].open) === "number" && _s.response[id].open >= 0) {
                        if (_s.response[id].money === "trueview") {
                            trueViewEvent = true;
                        }
                    }

                    parameters.event = {
                        onView: function() {
                            // send view log
                            if (_s.response[id].money === "view") {
                                _s.load(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=1&va=1&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp, "script", true);
                                if( typeof(_s.response[id].vce) !== "undefined" &&
                                  typeof(_s.response[id].vce.c3) !== "undefined" && 
                                  typeof(_s.response[id].adid) !== "undefined") {
                            
                                    // append VCE
                                    jQQ("#scupio-expandable" + id).after(vce_url(_s.response[id].vce.c3, _s.response[id].adid, wid, cid));
                                }
                            } else {
                                // reset trueview on non-view view
                                // let view event reset this, since trueview only happens after a view
                                trueViewEvent = true;
                                _s.load(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=2&va=1&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp, "script", true);
                            }
                            
                            if( typeof(_s.response[id].vce_view) !== "undefined" &&
                               typeof(_s.response[id].vce_view.c3) !== "undefined" && 
                               typeof(_s.response[id].adid) !== "undefined") {
                            
                                // append VCE
                                jQQ("#scupio-expandable" + id).after(vce_url(_s.response[id].vce_view.c3, _s.response[id].adid, wid, cid));
                            }

                            // dfa
                            if (window.ScupioMap[_s.response[id].adid]) {
                              jQQ('body').append('<img style="display:inline-block;margin:0;padding:0;border:0;width:0;height:0;" src="' + window.ScupioMap[_s.response[id].adid]['view'] + '"></img>');
                            }

                        },
                        on30s: function() {
                            // send trueview log
                            if (trueViewEvent) {
                                _s.load(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=3&va=6&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp, "script", true);
                                if( typeof(_s.response[id].vce) !== "undefined" &&
                                  typeof(_s.response[id].vce.c3) !== "undefined" && 
                                  typeof(_s.response[id].adid) !== "undefined") {
                            
                                    // append VCE
                                    jQQ("#scupio-expandable" + id).after(vce_url(_s.response[id].vce.c3, _s.response[id].adid, wid, cid));
                                }
                            } else {
                                _s.load(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=4&va=6&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp, "script", true);
                            }
                            trueViewEvent = false;

                            // dfa
                            if (window.ScupioMap[_s.response[id].adid]) {
                              jQQ('body').append('<img style="display:inline-block;margin:0;padding:0;border:0;width:0;height:0;" src="' + window.ScupioMap[_s.response[id].adid]['30'] + '"></img>');
                            }

                        },
                        on25p: function (mouse) {
                          // mm
                          if (_s.response[id].mm) {
                            _s.load(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=4&va=9&t=25&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp, "script", true);
                            if (mouse || has_mouse) {
                              _s.load(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=4&va=10&t=25&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp, "script", true);
                            }
                          }
                        },
                        on50p: function (mouse) {
                          // mm
                          if (_s.response[id].mm) {
                            _s.load(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=4&va=9&t=50&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp, "script", true);
                            if (mouse || has_mouse) {
                              _s.load(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=4&va=10&t=50&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp, "script", true);
                            }
                          }
                        },
                        on75p: function (mouse) {
                          // mm
                          if (_s.response[id].mm) {
                            _s.load(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=4&va=9&t=75&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp, "script", true);
                            if (mouse || has_mouse) {
                              _s.load(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=4&va=10&t=75&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp, "script", true);
                            }
                          }
                        },
                        onPlayClick: function () {
                          _s.load(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=4&va=11&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp, "script", true);
                        },
                        onEnded: function(in_view, player_id, mouse) {
                            // send trueview log
                            if (trueViewEvent) {
                                _s.load(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=3&va=2&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp, "script", true);
                                if( typeof(_s.response[id].vce) !== "undefined" &&
                                  typeof(_s.response[id].vce.c3) !== "undefined" && 
                                  typeof(_s.response[id].adid) !== "undefined") {
                            
                                    // append VCE
                                    jQQ("#scupio-expandable" + id).after(vce_url(_s.response[id].vce.c3, _s.response[id].adid, wid, cid));
                                }
                            }
                            else {
                                if(in_view){
                                    _s.load(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=4&va=7&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp, "script", true);
                                }
                                _s.load(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=4&va=2&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp, "script", true);
                            }

                            trueViewEvent = false;
                          
                            // mm
                            if (_s.response[id].mm) {
                              _s.load(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=4&va=9&t=100&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp, "script", true);
                              if (mouse || has_mouse) {
                                _s.load(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=4&va=10&t=100&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp, "script", true);
                              }
                            }

                            // dfa
                            if (window.ScupioMap[_s.response[id].adid]) {
                              jQQ('body').append('<img style="display:inline-block;margin:0;padding:0;border:0;width:0;height:0;" src="' + window.ScupioMap[_s.response[id].adid]['end'] + '"></img>');
                            }

                            if (_s.response[id].expandablehide) {
                                jQQ("#expandable-inner" + id).stop(true, true).hide(0, function() {
                                    jQQ("#scupio-expandable" + id).stop(true, true).animate({
                                        height: "90px"
                                    }, function() {
                                        jQQ("#expandable-outer" + id).stop(true, true).show();
                                        jQQ("#toggle-open" + id).show();
                                        open = false;
                                    });
                                });
                            } else {
                                jQQ("#expandable-inner" + id).stop(true, true).hide(0, function() {
                                    jQQ("#scupio-expandable" + id).stop(true, true).animate({
                                        height: "0px"
                                    }, function() {
                                        open = false;
                                        jQQ("#scupio-expandable" + id).remove();
                                    });
                                });
                            }

                            // mm
                            if (_s.response[id].mm) {
                                _s.load(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=4&va=9&t=100&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp, "script", true);
                                if (mouse) {
                                  _s.load(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=4&va=10&t=100&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp, "script", true);
                                }
                            }
                        }
                    }

                    if (_s.response[id].fblink) {
                        parameters.event.onFbClick = function() {
                            // send trueview log
                            if (trueViewEvent) {
                                var redirentURI = "http://money.scupio.com/adpinline/VideoClick.aspx?vl=3&va=5&ToURL=" + encodeURIComponent(_s.response[id].fblink) + "&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp;
                                window.open(redirentURI, '_blank');
                                if( typeof(_s.response[id].vce) !== "undefined" &&
                                  typeof(_s.response[id].vce.c3) !== "undefined" && 
                                  typeof(_s.response[id].adid) !== "undefined") {
                            
                                    // append VCE
                                    jQQ("#scupio-expandable" + id).after(vce_url(_s.response[id].vce.c3, _s.response[id].adid, wid, cid));
                                }
                            } else {
                                var redirentURI = "http://money.scupio.com/adpinline/VideoClick.aspx?vl=4&va=5&ToURL=" + encodeURIComponent(_s.response[id].fblink) + "&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp;
                                window.open(redirentURI, '_blank');
                            }

                            trueViewEvent = false;
                        };
                    }

                    if (_s.response[id].link) {
                        parameters.event.onAdClick = function() {
                            // send trueview log
                            if (trueViewEvent) {
                                var redirentURI = "http://money.scupio.com/adpinline/VideoClick.aspx?vl=3&va=4&ToURL=" + encodeURIComponent(_s.response[id].link) + "&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp;
                                window.open(redirentURI, '_blank');
                                if( typeof(_s.response[id].vce) !== "undefined" &&
                                  typeof(_s.response[id].vce.c3) !== "undefined" && 
                                  typeof(_s.response[id].adid) !== "undefined") {
                            
                                    // append VCE
                                    jQQ("#scupio-expandable" + id).after(vce_url(_s.response[id].vce.c3, _s.response[id].adid, wid, cid));
                                }
                            } else {
                                var redirentURI = "http://money.scupio.com/adpinline/VideoClick.aspx?vl=4&va=4&ToURL=" + encodeURIComponent(_s.response[id].link) + "&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp;
                                window.open(redirentURI, '_blank');
                            }

                            trueViewEvent = false;
                        };
                    }

                    parameters.event.onError = function() {
                        jQQ("#scupio-expandable" + id).remove();
                    };

                    var barbar;
                    if (ad_is_valid) {
                        // load expandable to DOM
                        jQQ("#" + scriptId).after(strVar);

                        jQQ("#scupio-expandable" + id).hover(function(){
                          has_mouse = true;
                        }, function(){
                          has_mouse = false;
                        });

                        // attach player to expandable
                        barbar = _s._Player_.create(parameters);

                        // attach listeners to expandable
                        jQQ(_d).ready(function() {
                            var lid;

                            // open for the first time in a 7-session
                            if (typeof (_s.response[id].open) === "number" && _s.response[id].open >= 0) {
                                open = true;

                                jQQ("#expandable-outer" + id).hide();
                                jQQ("#toggle-open" + id).hide();
                                jQQ("#scupio-expandable" + id).stop(true, true).animate({
                                    height: "390px"
                                }, 600, function() { });

                                jQQ("#expandable-inner" + id).delay(600).show(0, function() {
                                    // inner is now openned, try to play our video
                                    var vto = 50;
                                    lid = setInterval(function() {
                                        vto--;
                                        if (vto < 0) {
                                            _w.clearInterval(lid);
                                            // failed 
                                            jQQ("#scupio-expandable" + id).remove();
                                        }

                                        if (typeof (barbar) !== "undefined" && barbar.ready) {
                                            _w.clearInterval(lid);
                                            barbar.play = true;
                                        }
                                    }, 200);

                                });

                                // change toggle button text
                                jQQ("#toggle-button" + id).css('background-position', '-89px -139px');
                            }

                            // trueview
                            jQQ("#click-area" + id).click(function() {
                                if (trueViewEvent) {
                                    var redirentURI = "http://money.scupio.com/adpinline/VideoClick.aspx?vl=3&va=4&ToURL=" + encodeURIComponent(_s.response[id].link) + "&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp;
                                    window.open(redirentURI, '_blank');
                                    if( typeof(_s.response[id].vce) !== "undefined" &&
                                        typeof(_s.response[id].vce.c3) !== "undefined" && 
                                        typeof(_s.response[id].adid) !== "undefined") {
                            
                                        // append VCE
                                        jQQ("#scupio-expandable" + id).after(vce_url(_s.response[id].vce.c3, _s.response[id].adid, wid, cid));
                                    }
                                } else {
                                    var redirentURI = "http://money.scupio.com/adpinline/VideoClick.aspx?vl=4&va=4&ToURL=" + encodeURIComponent(_s.response[id].link) + "&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp;
                                    window.open(redirentURI, '_blank');
                                }

                                trueViewEvent = false;
                            });

                            // trueview
                            jQQ("#expandable-outer" + id).click(function() {
                                if (trueViewEvent) {
                                    var redirentURI = "http://money.scupio.com/adpinline/VideoClick.aspx?vl=3&va=4&ToURL=" + encodeURIComponent(_s.response[id].link) + "&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp;
                                    window.open(redirentURI, '_blank');
                                    if( typeof(_s.response[id].vce) !== "undefined" &&
                                        typeof(_s.response[id].vce.c3) !== "undefined" && 
                                        typeof(_s.response[id].adid) !== "undefined") {
                            
                                        // append VCE
                                        jQQ("#scupio-expandable" + id).after(vce_url(_s.response[id].vce.c3, _s.response[id].adid, wid, cid));
                                    }
                                } else {
                                    var redirentURI = "http://money.scupio.com/adpinline/VideoClick.aspx?vl=4&va=4&ToURL=" + encodeURIComponent(_s.response[id].link) + "&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp;
                                    window.open(redirentURI, '_blank');
                                }

                                trueViewEvent = false;
                            });

                            jQQ("#scupio-expandable-scupio_logo" + id).click(function() {
                                window.open(decodeURIComponent("http://www.scupio.com.tw"), '_blank');
                            });

                            jQQ("#toggle-button" + id).click(function() {
                                if (open) {
                                    if (typeof (barbar) !== "undefined" && barbar.ready) {
                                        barbar.reset();
                                        barbar.play = false;
                                        barbar.pause = true;
                                    }

                                    if (_s.response[id].expandablehide) {
                                        jQQ("#expandable-inner" + id).stop(true, true).hide(0, function() {
                                            jQQ("#scupio-expandable" + id).stop(true, true).animate({
                                                height: "90px"
                                            }, function() {
                                                jQQ("#expandable-outer" + id).stop(true, true).show();
                                                jQQ("#toggle-open" + id).show();
                                                open = false;
                                            });
                                        });
                                    }
                                    else {
                                        jQQ("#expandable-inner" + id).stop(true, true).hide(0, function() {
                                            jQQ("#scupio-expandable" + id).stop(true, true).animate({
                                                height: "0px",
                                                border: "0px"
                                            }, function() {
                                                open = false;
                                                jQQ("#toggle-button" + id).remove();
                                                setTimeout(function() {
                                                    jQQ("#scupio-expandable" + id).remove();
                                                }, 1000);
                                            });
                                        });
                                    }

                                    jQQ("#toggle-button" + id).css('background-position', '0px -139px');

                                    _s.load(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=4&va=8&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp, "script", true);
                                }
                                else {
                                    open = true;
                                    jQQ("#expandable-outer" + id).hide();
                                    jQQ("#toggle-open" + id).hide();
                                    jQQ("#scupio-expandable" + id).stop(true, true).animate({
                                        height: "390px"
                                    }, 600);
                                    jQQ("#expandable-inner" + id).delay(600).show(0, function() {
                                        // inner is now openned, try to play our video
                                        var vto = 50;
                                        lid = setInterval(function() {
                                            vto--;
                                            if (vto < 0) {
                                                _w.clearInterval(lid);
                                                // failed 
                                                jQQ("#scupio-expandable" + id).remove();
                                            }

                                            if (typeof (barbar) !== "undefined" && barbar.ready) {
                                                _w.clearInterval(lid);
                                                barbar.reset();
                                                barbar.play = true;
                                                barbar.pause = false;
                                            }
                                        }, 200);

                                    });
                                    jQQ("#toggle-button" + id).css('background-position', '-89px -139px');
                                    
                                    _s.load(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=4&va=11&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp, "script", true);
                                }
                            });

                            jQQ("#toggle-open" + id).click(function() {
                                if (!open) {
                                    open = true;
                                    jQQ("#expandable-outer" + id).hide();
                                    jQQ("#toggle-open" + id).hide();
                                    jQQ("#scupio-expandable" + id).stop(true, true).animate({
                                        height: "390px"
                                    }, 600);
                                    jQQ("#expandable-inner" + id).delay(600).show(0, function() {
                                        // inner is now openned, try to play our video
                                        var vto = 50;
                                        lid = setInterval(function() {
                                            vto--;
                                            if (vto < 0) {
                                                _w.clearInterval(lid);
                                                // failed 
                                                jQQ("#scupio-expandable" + id).remove();
                                            }

                                            if (typeof (barbar) !== "undefined" && barbar.ready) {
                                                _w.clearInterval(lid);
                                                barbar.reset();
                                                barbar.play = true;
                                                barbar.pause = false;
                                            }
                                        }, 200);

                                    });
                                    jQQ("#toggle-button" + id).css('background-position', '-89px -139px');

                                    _s.load(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=4&va=11&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp, "script", true);
                                }
                            });
                        });
                    }
                }
            }
        }
    }, 100);

})(window);
