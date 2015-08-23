/*!CK:948826914!*//*1439303506,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["8PKAL"]); }

__d('OauthLogin',['Cookie','Dialog','PopupWindow','URI','WindowComm','fbt','XD'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=c('XD').XD;function o(p,q){this.provider=p;this.endpoint=q;return this;}o.prototype.login=function(p,q,r){var s=l.makeHandler((function(v){this._closePopup();var w=this.provider+'..'+v.oauth_token+'..'+v.oauth_token_secret;h.set('tpa',w,0,'/');if(r)o._refreshLoginStatus();p&&p();}).bind(this)),t=l.makeHandler((function(v){this._closePopup();new i().setTitle(m._("\u6709\u554f\u984c\uff01\uff01")).setBody(m._("\u6211\u5011\u7121\u6cd5\u806f\u7d61{provider}\uff0c \u003Cbr \/>\u8acb\u76f4\u63a5\u767b\u5165 Facebook \u6216\u7a0d\u5f8c\u518d\u8a66\u3002",[m.param('provider',this.provider)])).setHandler(function(){q&&q();}).setButtons(i.OK).show();}).bind(this)),u=new k(this.endpoint);u.setQueryData({provider:this.provider,next:s,channel_url:t,cancel_url:t,display:'popup'});this._popup=j.open(u.toString(),416,468);};o.prototype._closePopup=function(){if(this._popup){this._popup.close();this._popup=null;}};o._refreshLoginStatus=function(){try{n.send({type:'refreshThirdPartyAuthStatus'});}catch(p){window.location.reload();}};f.exports=o;},null);
__d('OpenIDLogin',['Cookie','Dialog','OpenIDRequest','fbt','XD'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=c('XD').XD,m={login:function(n,o,p,q,r){j.context='tpa';new j().setThirdPartyLogin(true).setSuccessHandler(function(s){var t='OpenID'+'..'+s.oid+'..'+s.secret;h.set('tpa',t,0,'/');if(!!q)m._refreshLoginStatus();o&&o();}).setErrorHandler(function(s){new i().setTitle(k._("\u6709\u554f\u984c\uff01\uff01")).setBody(k._("\u6211\u5011\u7121\u6cd5\u806f\u7d61{provider}\uff0c \u003Cbr \/>\u8acb\u76f4\u63a5\u767b\u5165 Facebook \u6216\u7a0d\u5f8c\u518d\u8a66\u3002",[k.param('provider',n)])).setButtons(i.OK).setHandler(function(){p&&p();}).show();}).setProviderCache(r).setOpenIDUrl(n).send();},_refreshLoginStatus:function(){try{l.send({type:'refreshThirdPartyAuthStatus'});}catch(n){window.location.reload();}}};f.exports=m;},null);
__d('MultiLoginPopup',['Arbiter','CommentAdminPanelController','CSS','CurrentUser','Dialog','DOM','DTSG','Event','HTML','OauthLogin','OpenIDLogin','PopupWindow','SelectorDeprecated','URI','WidgetArbiter','WindowComm','$'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){if(c.__markCompiled)c.__markCompiled();var y={provider:'facebook',providerCache:{},formSubmissionInterceptors:[],init:function(){h.subscribe('platform/socialplugins/login',function(z){y.loggedIn=!!z.user;});t.subscribe('close',function(z,aa){t.setSelected(aa.selector,t.getValue(aa.selector),false);});},setProvider:function(z){y.provider=z;return this;},setProviderCache:function(z){y.providerCache=z;return this;},interceptFormSubmission:function(z,aa,ba,ca){var da=function(ea){if(ea){y.detachExistingSubmissionInterceptors();if(ea.fbDtsg){n.setToken(ea.fbDtsg);k.getID=function(){return ea.user;};}if(ea.isThirdParty==="0"){m.scry(document.documentElement,'.postToProfile').forEach(function(fa){j.show(fa);});m.scry(document.documentElement,'.postToProfileCheckbox').forEach(function(fa){if(ea.postToProfileChecked==="0"){fa.removeAttribute('checked');}else fa.setAttribute('checked','checked');});m.scry(document.documentElement,'.viewerProfileHref').forEach(function(fa){fa.href=ea.profileUrl;fa.onclick='';});m.scry(document.documentElement,'.commentas').forEach(function(fa){var ga=fa.id;m.replace(fa,p(ea.commentAsMarkup));var ha=x(ea.commentAsMarkupID);ha.id=ga;var ia=m.scry(ha,'a.commentaschange');ia.forEach(function(ja){var ka=new u(ja.getAttribute('ajaxify'));ka.addQueryData({uniqid:ga});ja.setAttribute('ajaxify',ka.toString());});});}else m.scry(document.documentElement,'.commentas').forEach(function(fa){var ga=fa.id;m.replace(fa,p(ea.commentAsMarkup));var ha=x(ea.commentAsMarkupID);ha.id=ga;});m.scry(document.documentElement,'.viewerProfilePic').forEach(function(fa){fa.src=ea.profilePic;});m.scry(document.documentElement,'.fbCommentAfterLoginButton').forEach(j.hide);m.scry(document.documentElement,'.fbCommentButton').forEach(j.show);m.scry(document.documentElement,'.fbReplyAfterLoginButton').forEach(j.hide);m.scry(document.documentElement,'.fbReplyButton').forEach(j.show);m.scry(document.documentElement,'.fbUpDownVoteAfterLogin').forEach(j.hide);m.scry(document.documentElement,'.fbUpDownVoteOption').forEach(j.show);m.scry(document.documentElement,'.closeButtonAfterLogin').forEach(j.hide);m.scry(document.documentElement,'.closeButton').forEach(j.show);i.setLoggedIn(parseInt(ea.user,10));h.inform('platform/socialplugins/login',{user:ea.user},h.BEHAVIOR_STATE);v.inform('platform/socialplugins/login',{user:ea.user},h.BEHAVIOR_STATE);}};y.login(ca,z,aa,ba,da);return false;},attachAllFormsToLogin:function(z,aa){y.formSubmissionInterceptors=[];y.popupTitle=z;y.params=aa;y.reattachLoginInterceptors();},reattachLoginInterceptors:function(){y.detachExistingSubmissionInterceptors();var z=['composer','fbUpDownVoteAfterLogin','closeButtonAfterLogin'],aa=y.popupTitle,ba=y.params,ca=function(ea){var fa=ea.getTarget();if(fa.tagName.toLowerCase()==='form'&&z.some(j.hasClass.bind(null,fa)))return y.interceptFormSubmission(fa,aa,ba);},da=o.listen(document.body,'submit',ca,o.Priority.URGENT);y.formSubmissionInterceptors.push(da);},detachExistingSubmissionInterceptors:function(){var z=y.formSubmissionInterceptors.length;for(var aa=0;aa<z;aa++)y.formSubmissionInterceptors[aa].remove();y.formSubmissionInterceptors=[];},login:function(z,aa,ba,ca,da){if(!y.loggedIn)y._openPopup(ca,da);},doOpenIDLogin:function(z,aa,ba){r.login(z,y.tpaLoginCallback(aa),y.tpaLoginCallback(ba),false,y.providerCache);},doOauthWrapLogin:function(z,aa,ba){var ca=new q(z,'/connect/oauthwrap_login.php');return ca.login(y.tpaLoginCallback(aa),y.tpaLoginCallback(ba),false);},doTwitterLogin:function(z,aa){var ba=new q('Twitter','/connect/twitter_login.php');return ba.login();},tpaLoginCallback:function(z){return (function(aa,ba){var ca=m.create('iframe',{src:aa,className:'hidden_elem'});m.appendContent(m.find(ba.documentElement,'body'),ca);}).bind(null,z,document);},loggedIn:false,_popup:null,_openPopup:function(z,aa){var ba=y.provider==='facebook'?'opener':'parent',ca=w.makeHandler(function(ka){y._closePopup();aa&&aa(ka);},ba),da=w.makeHandler(function(ka){y._closePopup();},ba),ea;ea=new u('/plugins/multi_login_popup_loggedin.php');ea.setQueryData({original_next:ca,original_cancel:da,iframe_src:z.iframe_src});ca=ea.getQualifiedURI().toString();if(y.provider==='facebook'){ea=new u('/login.php');ea.setQueryData(Object.assign(z,{display:'popup',social_plugin:'multi_login',cancel_url:da,next:ca,provider:y.provider}));var fa=450,ga=700;this._popup=s.open(ea.toString(),fa,ga);}else if(y.provider==='twitter'){y.doTwitterLogin(ca,da);}else if(y.provider==='microsoft'){y.doOauthWrapLogin(y.provider,ca,da);}else if(y.provider==='openid'){var ha=new l(),ia=function(ka){var la=ha.getFormData();y.doOpenIDLogin(la.openid_url,ca,da);ha.hide();if(ka.kill)ka.kill();return false;};ha.setContentWidth(350).setTitle('OpenID').setBody(m.create('form',{onsubmit:ia},m.create('input',{type:'text',size:60,name:'openid_url'}))).setHandler(ia).setButtons([l.CONFIRM,l.CANCEL]).show();}else{var ja=y.provider+'.com';y.doOpenIDLogin(ja,ca,da);}},_closePopup:function(){if(this._popup){this._popup.close();this._popup=null;}}};f.exports=y;},null);