var _uacct="";
var _userv=0;
var _ufsc=1;
var _udn="auto";
var _uhash="on";
var _utimeout="1800";
var _ugifpath="";
var _utsp="|";
var _uflash=1;
var _utitle=1;
var _ulink=1;
var _uanchor=0;
var _utcp="/";
var _usample=100;
var _uctm=1;
var _ucto="15768000";
var _uccn="utm_campaign";
var _ucmd="utm_medium";
var _ucsr="utm_source";
var _uctr="utm_term";
var _ucct="utm_content";
var _ucid="utm_id";
var _ucno="utm_nooverride";
var _uOsr=new Array();
var _uOkw=new Array();
_uOsr[0]="google";
_uOkw[0]="q";
_uOsr[1]="yahoo";
_uOkw[1]="p";
_uOsr[2]="msn";
_uOkw[2]="q";
_uOsr[3]="aol";
_uOkw[3]="query";
_uOsr[4]="aol";
_uOkw[4]="encquery";
_uOsr[5]="lycos";
_uOkw[5]="query";
_uOsr[6]="ask";
_uOkw[6]="q";
_uOsr[7]="altavista";
_uOkw[7]="q";
_uOsr[8]="netscape";
_uOkw[8]="query";
_uOsr[9]="cnn";
_uOkw[9]="query";
_uOsr[10]="looksmart";
_uOkw[10]="qt";
_uOsr[11]="about";
_uOkw[11]="terms";
_uOsr[12]="mamma";
_uOkw[12]="query";
_uOsr[13]="alltheweb";
_uOkw[13]="q";
_uOsr[14]="gigablast";
_uOkw[14]="q";
_uOsr[15]="voila";
_uOkw[15]="rdata";
_uOsr[16]="virgilio";
_uOkw[16]="qs";
_uOsr[17]="live";
_uOkw[17]="q";
_uOsr[18]="baidu";
_uOkw[18]="wd";
_uOsr[19]="alice";
_uOkw[19]="qs";
_uOsr[20]="yandex";
_uOkw[20]="text";
_uOsr[21]="najdi";
_uOkw[21]="q";
_uOsr[22]="aol";
_uOkw[22]="q";
_uOsr[23]="club-internet";
_uOkw[23]="q";
_uOsr[24]="mama";
_uOkw[24]="query";
_uOsr[25]="seznam";
_uOkw[25]="q";
_uOsr[26]="search";
_uOkw[26]="q";
_uOsr[27]="szukaj";
_uOkw[27]="szukaj";
_uOsr[28]="szukaj";
_uOkw[28]="qt";
_uOsr[29]="netsprint";
_uOkw[29]="q";
_uOsr[30]="google.interia";
_uOkw[30]="q";
_uOsr[31]="szukacz";
_uOkw[31]="q";
_uOsr[32]="yam";
_uOkw[32]="k";
_uOsr[33]="pchome";
_uOkw[33]="q";
_uOsr[34]="bing";
_uOkw[34]="q";
var _uOno=new Array();
var _uRno=new Array();
var _uff,_udh,_udt,_ubl=0,_udo="",_uu,_ufns=0,_uns=0,_ur="-",_ufno=0,_ust=0,_ubd=document,_udl=_ubd.location,_udlh="",_uwv="1";
var _ugifpath2="/img/__utm.gif";
if(_udl.hash){_udlh=_udl.href.substring(_udl.href.indexOf("#"))
}if(_udl.protocol=="https:"){_ugifpath2="/img/__utm.gif"
}if(!_utcp||_utcp==""){_utcp="/"
}var _ecm={};
_ecm["'"]="'0";
_ecm[")"]="'1";
_ecm["*"]="'2";
_ecm["!"]="'3";
function urchinTracker(v,z){if(_udl.protocol=="file:"){return
}if(_uff&&(!v||v=="")){return
}var c,k,u,A,b,s,y,f="",B="",w=0;
var x=" expires="+_uNx()+";";
var a=_ubd.cookie;
_udh=_uDomain();
if(!_uVG()){return
}_uu=Math.round(Math.random()*2147483647);
_udt=new Date();
_ust=Math.round(_udt.getTime()/1000);
c=a.indexOf("__utma="+_udh);
k=a.indexOf("__utmb="+_udh);
u=a.indexOf("__utmc="+_udh);
if(_udn&&_udn!=""){_udo=" domain="+_udn+";"
}if(_utimeout&&_utimeout!=""){f=new Date(_udt.getTime()+(_utimeout*1000));
f=" expires="+f.toGMTString()+";"
}if(_ulink){if(_uanchor&&_udlh&&_udlh!=""){B=_udlh+"&"
}B+=_udl.search;
if(B&&B!=""&&B.indexOf("__utma=")>=0){if(!(_uIN(c=_uGC(B,"__utma=","&")))){c="-"
}if(!(_uIN(k=_uGC(B,"__utmb=","&")))){k="-"
}if(!(_uIN(u=_uGC(B,"__utmc=","&")))){u="-"
}b=_uGC(B,"__utmv=","&");
s=_uGC(B,"__utmz=","&");
y=_uGC(B,"__utmk=","&");
A=_uGC(B,"__utmx=","&");
if((y*1)!=((_uHash(c+k+u+A+s+b)*1)+(_udh*1))){_ubl=1;
c="-";
k="-";
u="-";
A="-";
s="-";
b="-"
}if(c!="-"&&k!="-"&&u!="-"){w=1
}else{if(c!="-"){w=2
}}}}if(w==1){_ubd.cookie="__utma="+c+"; path="+_utcp+";"+x+_udo;
_ubd.cookie="__utmb="+k+"; path="+_utcp+";"+f+_udo;
_ubd.cookie="__utmc="+u+"; path="+_utcp+";"+_udo
}else{if(w==2){c=_uFixA(B,"&",_ust);
_ubd.cookie="__utma="+c+"; path="+_utcp+";"+x+_udo;
_ubd.cookie="__utmb="+_udh+"; path="+_utcp+";"+f+_udo;
_ubd.cookie="__utmc="+_udh+"; path="+_utcp+";"+_udo;
_ufns=1
}else{if(c>=0&&k>=0&&u>=0){_ubd.cookie="__utmb="+_udh+"; path="+_utcp+";"+f+_udo
}else{if(c>=0){c=_uFixA(_ubd.cookie,";",_ust)
}else{c=_udh+"."+_uu+"."+_ust+"."+_ust+"."+_ust+".1"
}_ubd.cookie="__utma="+c+"; path="+_utcp+";"+x+_udo;
_ubd.cookie="__utmb="+_udh+"; path="+_utcp+";"+f+_udo;
_ubd.cookie="__utmc="+_udh+"; path="+_utcp+";"+_udo;
_ufns=1
}}}if(_ulink&&A&&A!=""&&A!="-"){A=_uUES(A);
if(A.indexOf(";")==-1){_ubd.cookie="__utmx="+A+"; path="+_utcp+";"+x+_udo
}}if(_ulink&&b&&b!=""&&b!="-"){b=_uUES(b);
if(b.indexOf(";")==-1){_ubd.cookie="__utmv="+b+"; path="+_utcp+";"+x+_udo
}}_uInfo(v,z);
_ufns=0;
_ufno=0;
if(!v||v==""){_uff=1
}}function _uInfo(m,p){var l,n="",j="",k=_udl.pathname+_udl.search;
if(m&&m!=""){k=_uES(m,1)
}_ur=_ubd.referrer;
if(!_ur||_ur==""){_ur="-"
}else{j=_ubd.domain;
if(_utcp&&_utcp!="/"){j+=_utcp
}l=_ur.indexOf(j);
if((l>=0)&&(l<=8)){_ur="0"
}if(_ur.indexOf("[")==0&&_ur.lastIndexOf("]")==(_ur.length-1)){_ur="-"
}}n+="&utmn="+_uu;
if(p){n+=p
}if(_ufsc){n+=_uBInfo()
}if(_uctm){n+=_uCInfo()
}if(_utitle&&_ubd.title&&_ubd.title!=""){n+="&utmdt="+_uES(_ubd.title)
}if(_udl.hostname&&_udl.hostname!=""){n+="&utmhn="+_uES(_udl.hostname)
}n+="&utmr="+_ur;
n+="&utmp="+k;
if((_userv==0||_userv==2)&&_uSP()){var i=new Image(1,1);
i.src=_ugifpath+"?utmwv="+_uwv+n;
i.onload=function(){_uVoid()
}
}if((_userv==1||_userv==2)&&_uSP()){var o=new Image(1,1);
o.src=_ugifpath2+"?utmwv="+_uwv+n+"&utmac="+_uacct+"&utmcc="+_uGCS();
o.onload=function(){_uVoid()
}
}return
}function _uVoid(){return
}function _uCInfo(){if(!_ucto||_ucto==""){_ucto="15768000"
}if(!_uVG()){return
}var r="",i="-",u="-",w="-",x=0,t=0,p=0,v=0,s="-",c="";
if(_uanchor&&_udlh&&_udlh!=""){c=_udlh+"&"
}c+=_udl.search;
var q=new Date(_udt.getTime()+(_ucto*1000));
var o=_ubd.cookie;
q=" expires="+q.toGMTString()+";";
if(_ulink&&!_ubl){s=_uUES(_uGC(c,"__utmz=","&"));
if(s!="-"&&s.indexOf(";")==-1){_ubd.cookie="__utmz="+s+"; path="+_utcp+";"+q+_udo;
return""
}}s=o.indexOf("__utmz="+_udh);
if(s>-1){s=_uGC(o,"__utmz="+_udh,";")
}else{s="-"
}i=_uGC(c,_ucid+"=","&");
u=_uGC(c,_ucsr+"=","&");
w=_uGC(c,"gclid=","&");
if((i!="-"&&i!="")||(u!="-"&&u!="")||(w!="-"&&w!="")){if(i!="-"&&i!=""){r+="utmcid="+_uEC(i)
}if(u!="-"&&u!=""){if(r!=""){r+="|"
}r+="utmcsr="+_uEC(u)
}if(w!="-"&&w!=""){if(r!=""){r+="|"
}r+="utmgclid="+_uEC(w)
}i=_uGC(c,_uccn+"=","&");
if(i!="-"&&i!=""){r+="|utmccn="+_uEC(i)
}else{r+="|utmccn=(not+set)"
}i=_uGC(c,_ucmd+"=","&");
if(i!="-"&&i!=""){r+="|utmcmd="+_uEC(i)
}else{r+="|utmcmd=(not+set)"
}i=_uGC(c,_uctr+"=","&");
if(i!="-"&&i!=""){r+="|utmctr="+_uEC(i)
}else{i=_uOrg(1);
if(i!="-"&&i!=""){r+="|utmctr="+_uEC(i)
}}i=_uGC(c,_ucct+"=","&");
if(i!="-"&&i!=""){r+="|utmcct="+_uEC(i)
}i=_uGC(c,_ucno+"=","&");
if(i=="1"){x=1
}if(s!="-"&&x==1){return""
}}if(r=="-"||r==""){r=_uOrg();
if(s!="-"&&_ufno==1){return""
}}if(r=="-"||r==""){if(_ufns==1){r=_uRef()
}if(s!="-"&&_ufno==1){return""
}}if(r=="-"||r==""){if(s=="-"&&_ufns==1){r="utmccn=(direct)|utmcsr=(direct)|utmcmd=(none)"
}if(r=="-"||r==""){return""
}}if(s!="-"){v=s.indexOf(".");
if(v>-1){v=s.indexOf(".",v+1)
}if(v>-1){v=s.indexOf(".",v+1)
}if(v>-1){v=s.indexOf(".",v+1)
}i=s.substring(v+1,s.length);
if(i.toLowerCase()==r.toLowerCase()){t=1
}i=s.substring(0,v);
if((v=i.lastIndexOf("."))>-1){i=i.substring(v+1,i.length);
p=(i*1)
}}if(t==0||_ufns==1){i=_uGC(o,"__utma="+_udh,";");
if((v=i.lastIndexOf("."))>9){_uns=i.substring(v+1,i.length);
_uns=(_uns*1)
}p++;
if(_uns==0){_uns=1
}_ubd.cookie="__utmz="+_udh+"."+_ust+"."+_uns+"."+p+"."+r+"; path="+_utcp+"; "+q+_udo
}if(t==0||_ufns==1){return"&utmcn=1"
}else{return"&utmcr=1"
}}function _uRef(){if(_ur=="0"||_ur==""||_ur=="-"){return""
}var f=0,i,g,h;
if((f=_ur.indexOf("://"))<0){return""
}i=_ur.substring(f+3,_ur.length);
if(i.indexOf("/")>-1){g=i.substring(i.indexOf("/"),i.length);
if(g.indexOf("?")>-1){g=g.substring(0,g.indexOf("?"))
}i=i.substring(0,i.indexOf("/"))
}i=i.toLowerCase();
h=i;
if((f=h.indexOf(":"))>-1){h=h.substring(0,f)
}for(var j=0;
j<_uRno.length;
j++){if((f=h.indexOf(_uRno[j].toLowerCase()))>-1&&h.length==(f+_uRno[j].length)){_ufno=1;
break
}}if(i.indexOf("www.")==0){i=i.substring(4,i.length)
}return"utmccn=(referral)|utmcsr="+_uEC(i)+"|utmcct="+_uEC(g)+"|utmcmd=referral"
}function _uOrg(l){if(_ur=="0"||_ur==""||_ur=="-"){return""
}var g=0,j,h;
if((g=_ur.indexOf("://"))<0){return""
}j=_ur.substring(g+3,_ur.length);
if(j.indexOf("/")>-1){j=j.substring(0,j.indexOf("/"))
}for(var k=0;
k<_uOsr.length;
k++){if(j.toLowerCase().indexOf(_uOsr[k].toLowerCase())>-1){if((g=_ur.indexOf("?"+_uOkw[k]+"="))>-1||(g=_ur.indexOf("&"+_uOkw[k]+"="))>-1){h=_ur.substring(g+_uOkw[k].length+2,_ur.length);
if((g=h.indexOf("&"))>-1){h=h.substring(0,g)
}for(var i=0;
i<_uOno.length;
i++){if(_uOno[i].toLowerCase()==h.toLowerCase()){_ufno=1;
break
}}if(l){return _uEC(h)
}else{return"utmccn=(organic)|utmcsr="+_uEC(_uOsr[k])+"|utmctr="+_uEC(h)+"|utmcmd=organic"
}}}}return""
}function _uBInfo(){var r="-",m="-",n="-",k="-",o="-",l=1;
var q=navigator;
if(self.screen){r=screen.width+"x"+screen.height;
m=screen.colorDepth+"-bit"
}else{if(self.java){var p=java.awt.Toolkit.getDefaultToolkit();
var j=p.getScreenSize();
r=j.width+"x"+j.height
}}if(q.language){n=q.language.toLowerCase()
}else{if(q.browserLanguage){n=q.browserLanguage.toLowerCase()
}}l=q.javaEnabled()?1:0;
if(_uflash){k=_uFlash()
}if(_ubd.characterSet){o=_uES(_ubd.characterSet)
}else{if(_ubd.charset){o=_uES(_ubd.charset)
}}return"&utmcs="+o+"&utmsr="+r+"&utmsc="+m+"&utmul="+n+"&utmje="+l+"&utmfl="+k
}function __utmSetTrans(){var i;
if(_ubd.getElementById){i=_ubd.getElementById("utmtrans")
}else{if(_ubd.utmform&&_ubd.utmform.utmtrans){i=_ubd.utmform.utmtrans
}}if(!i){return
}var p=i.value.split("UTM:");
var o,q,f;
if(_userv==0||_userv==2){o=new Array()
}if(_userv==1||_userv==2){q=new Array();
f=_uGCS()
}for(var e=0;
e<p.length;
e++){p[e]=_uTrim(p[e]);
if(p[e].charAt(0)!="T"&&p[e].charAt(0)!="I"){continue
}var r=Math.round(Math.random()*2147483647);
if(!_utsp||_utsp==""){_utsp="|"
}var l=p[e].split(_utsp),c="";
if(l[0].charAt(0)=="T"){c="&utmt=tran&utmn="+r;
l[1]=_uTrim(l[1]);
if(l[1]&&l[1]!=""){c+="&utmtid="+_uES(l[1])
}l[2]=_uTrim(l[2]);
if(l[2]&&l[2]!=""){c+="&utmtst="+_uES(l[2])
}l[3]=_uTrim(l[3]);
if(l[3]&&l[3]!=""){c+="&utmtto="+_uES(l[3])
}l[4]=_uTrim(l[4]);
if(l[4]&&l[4]!=""){c+="&utmttx="+_uES(l[4])
}l[5]=_uTrim(l[5]);
if(l[5]&&l[5]!=""){c+="&utmtsp="+_uES(l[5])
}l[6]=_uTrim(l[6]);
if(l[6]&&l[6]!=""){c+="&utmtci="+_uES(l[6])
}l[7]=_uTrim(l[7]);
if(l[7]&&l[7]!=""){c+="&utmtrg="+_uES(l[7])
}l[8]=_uTrim(l[8]);
if(l[8]&&l[8]!=""){c+="&utmtco="+_uES(l[8])
}}else{c="&utmt=item&utmn="+r;
l[1]=_uTrim(l[1]);
if(l[1]&&l[1]!=""){c+="&utmtid="+_uES(l[1])
}l[2]=_uTrim(l[2]);
if(l[2]&&l[2]!=""){c+="&utmipc="+_uES(l[2])
}l[3]=_uTrim(l[3]);
if(l[3]&&l[3]!=""){c+="&utmipn="+_uES(l[3])
}l[4]=_uTrim(l[4]);
if(l[4]&&l[4]!=""){c+="&utmiva="+_uES(l[4])
}l[5]=_uTrim(l[5]);
if(l[5]&&l[5]!=""){c+="&utmipr="+_uES(l[5])
}l[6]=_uTrim(l[6]);
if(l[6]&&l[6]!=""){c+="&utmiqt="+_uES(l[6])
}}if((_userv==0||_userv==2)&&_uSP()){o[e]=new Image(1,1);
o[e].src=_ugifpath+"?utmwv="+_uwv+c;
o[e].onload=function(){_uVoid()
}
}if((_userv==1||_userv==2)&&_uSP()){q[e]=new Image(1,1);
q[e].src=_ugifpath2+"?utmwv="+_uwv+c+"&utmac="+_uacct+"&utmcc="+f;
q[e].onload=function(){_uVoid()
}
}}return
}function _uFlash(){var f="-",n=navigator;
if(n.plugins&&n.plugins.length){for(var ii=0;
ii<n.plugins.length;
ii++){if(n.plugins[ii].name.indexOf("Shockwave Flash")!=-1){f=n.plugins[ii].description.split("Shockwave Flash ")[1];
break
}}}else{if(window.ActiveXObject){for(var ii=10;
ii>=2;
ii--){try{var fl=eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash."+ii+"');");
if(fl){f=ii+".0";
break
}}catch(e){}}}}return f
}function __utmLinker(w,u){if(!_ulink){return
}var x,v,c="-",h="-",k="-",b="-",l="-",a="-";
var z=_ubd.cookie;
if(!w||w==""){return
}var p=w.indexOf("?");
var y=w.indexOf("#");
if(z){c=_uES(_uGC(z,"__utma="+_udh,";"));
h=_uES(_uGC(z,"__utmb="+_udh,";"));
k=_uES(_uGC(z,"__utmc="+_udh,";"));
b=_uES(_uGC(z,"__utmx="+_udh,";"));
l=_uES(_uGC(z,"__utmz="+_udh,";"));
a=_uES(_uGC(z,"__utmv="+_udh,";"));
v=(_uHash(c+h+k+b+l+a)*1)+(_udh*1);
x="__utma="+c+"&__utmb="+h+"&__utmc="+k+"&__utmx="+b+"&__utmz="+l+"&__utmv="+a+"&__utmk="+v
}if(x){if(u&&y>-1){return
}if(u){_udl.href=w+"#"+x
}else{if(p==-1&&y==-1){_udl.href=w+"?"+x
}else{if(y==-1){_udl.href=w+"&"+x
}else{if(p==-1){_udl.href=w.substring(0,y-1)+"?"+x+w.substring(y)
}else{_udl.href=w.substring(0,y-1)+"&"+x+w.substring(y)
}}}}}else{_udl.href=w
}}function __utmLinkPost(p,v){if(!_ulink){return
}var x,w,c="-",f="-",h="-",b="-",k="-",a="-";
var z=_ubd.cookie;
if(!p||!p.action){return
}var u=p.action.indexOf("?");
var y=p.action.indexOf("#");
if(z){c=_uES(_uGC(z,"__utma="+_udh,";"));
f=_uES(_uGC(z,"__utmb="+_udh,";"));
h=_uES(_uGC(z,"__utmc="+_udh,";"));
b=_uES(_uGC(z,"__utmx="+_udh,";"));
k=_uES(_uGC(z,"__utmz="+_udh,";"));
a=_uES(_uGC(z,"__utmv="+_udh,";"));
w=(_uHash(c+f+h+b+k+a)*1)+(_udh*1);
x="__utma="+c+"&__utmb="+f+"&__utmc="+h+"&__utmx="+b+"&__utmz="+k+"&__utmv="+a+"&__utmk="+w
}if(x){if(v&&y>-1){return
}if(v){p.action+="#"+x
}else{if(u==-1&&y==-1){p.action+="?"+x
}else{if(y==-1){p.action+="&"+x
}else{if(u==-1){p.action=p.action.substring(0,y-1)+"?"+x+p.action.substring(y)
}else{p.action=p.action.substring(0,y-1)+"&"+x+p.action.substring(y)
}}}}}return
}function __utmSetVar(g){if(!g||g==""){return
}if(!_udo||_udo==""){_udh=_uDomain();
if(_udn&&_udn!=""){_udo=" domain="+_udn+";"
}}if(!_uVG()){return
}var h=Math.round(Math.random()*2147483647);
_ubd.cookie="__utmv="+_udh+"."+_uES(g)+"; path="+_utcp+"; expires="+_uNx()+";"+_udo;
var i="&utmt=var&utmn="+h;
if((_userv==0||_userv==2)&&_uSP()){var f=new Image(1,1);
f.src=_ugifpath+"?utmwv="+_uwv+i;
f.onload=function(){_uVoid()
}
}if((_userv==1||_userv==2)&&_uSP()){var j=new Image(1,1);
j.src=_ugifpath2+"?utmwv="+_uwv+i+"&utmac="+_uacct+"&utmcc="+_uGCS();
j.onload=function(){_uVoid()
}
}}function __utmTrackEvent(m,l,k,h,i){if(!m||m==""||!l||l==""){return
}var j=i,n="";
if(!j||j==""){j=_udl.pathname+_udl.search
}n+="&utmt=event&utme=5("+_UEE(m)+"*"+_UEE(l);
if(k&&k!=""){n+="*"+k
}n+=")";
if(h&&h!=""){n+="("+h+")"
}urchinTracker(j,n)
}function _uGCS(){var c,f="",e=_ubd.cookie;
if((c=_uGC(e,"__utma="+_udh,";"))!="-"){f+=_uES("__utma="+c+";+")
}if((c=_uGC(e,"__utmb="+_udh,";"))!="-"){f+=_uES("__utmb="+c+";+")
}if((c=_uGC(e,"__utmc="+_udh,";"))!="-"){f+=_uES("__utmc="+c+";+")
}if((c=_uGC(e,"__utmx="+_udh,";"))!="-"){f+=_uES("__utmx="+c+";+")
}if((c=_uGC(e,"__utmz="+_udh,";"))!="-"){f+=_uES("__utmz="+c+";+")
}if((c=_uGC(e,"__utmv="+_udh,";"))!="-"){f+=_uES("__utmv="+c+";")
}if(f.charAt(f.length-1)=="+"){f=f.substring(0,f.length-1)
}return f
}function _uGC(i,j,l){if(!i||i==""||!j||j==""||!l||l==""){return"-"
}var n,m,c,k="-";
n=i.indexOf(j);
c=j.indexOf("=")+1;
if(n>-1){m=i.indexOf(l,n);
if(m<0){m=i.length
}k=i.substring((n+c),m)
}return k
}function _uDomain(){if(!_udn||_udn==""||_udn=="none"){_udn="";
return 1
}if(_udn=="auto"){var b=_ubd.domain;
if(b.substring(0,4)=="www."){b=b.substring(4,b.length)
}_udn=b
}_udn=_udn.toLowerCase();
if(_uhash=="off"){return 1
}return _uHash(_udn)
}function _uHash(h){if(!h||h==""){return 1
}var c=0,i=0;
for(var d=h.length-1;
d>=0;
d--){var g=parseInt(h.charCodeAt(d));
c=((c<<6)&268435455)+g+(g<<14);
if((i=c&266338304)!=0){c=(c^(i>>21))
}}return c
}function _uFixA(c,i,j){if(!c||c==""||!i||i==""||!j||j==""){return"-"
}var l=_uGC(c,"__utma="+_udh,i);
var a=0,k=0;
if((k=l.lastIndexOf("."))>9){_uns=l.substring(k+1,l.length);
_uns=(_uns*1)+1;
l=l.substring(0,k);
if((k=l.lastIndexOf("."))>7){a=l.substring(k+1,l.length);
l=l.substring(0,k)
}if((k=l.lastIndexOf("."))>5){l=l.substring(0,k)
}l+="."+a+"."+j+"."+_uns
}return l
}function _uTrim(b){if(!b||b==""){return""
}while((b.charAt(0)==" ")||(b.charAt(0)=="\n")||(b.charAt(0,1)=="\r")){b=b.substring(1,b.length)
}while((b.charAt(b.length-1)==" ")||(b.charAt(b.length-1)=="\n")||(b.charAt(b.length-1)=="\r")){b=b.substring(0,b.length-1)
}return b
}function _uEC(d){var f="";
if(!d||d==""){return""
}for(var e=0;
e<d.length;
e++){if(d.charAt(e)==" "){f+="+"
}else{f+=d.charAt(e)
}}return f
}function __utmVisitorCode(f){var i=0,n=0,o=0,m=0,a=31;
var p=_uGC(_ubd.cookie,"__utma="+_udh,";");
if((o=p.indexOf(".",0))<0){return
}if((m=p.indexOf(".",o+1))>0){i=p.substring(o+1,m)
}else{return""
}if((o=p.indexOf(".",m+1))>0){n=p.substring(m+1,o)
}else{return""
}if(f){return i
}else{var c=new Array("A","B","C","D","E","F","G","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9");
return c[i>>28&a]+c[i>>23&a]+c[i>>18&a]+c[i>>13&a]+"-"+c[i>>8&a]+c[i>>3&a]+c[((i&7)<<2)+(n>>30&3)]+c[n>>25&a]+c[n>>20&a]+"-"+c[n>>15&a]+c[n>>10&a]+c[n>>5&a]+c[n&a]
}}function _uIN(f){if(!f){return false
}for(var e=0;
e<f.length;
e++){var c=f.charAt(e);
if((c<"0"||c>"9")&&(c!=".")){return false
}}return true
}function _UEE(c){var j="",e,h,i;
if(!c||c==""){return""
}for(e=0;
e<c.length;
e++){h=c.charAt(e);
i=_ecm[h];
j+=(undefined!=i)?i:h
}return j
}function _uES(c,d){if(typeof(encodeURIComponent)=="function"){if(d){return encodeURI(c)
}else{return encodeURIComponent(c)
}}else{return escape(c)
}}function _uUES(b){if(typeof(decodeURIComponent)=="function"){return decodeURIComponent(b)
}else{return unescape(b)
}}function _uVG(){if((_udn.indexOf("www.google.")==0||_udn.indexOf(".google.")==0||_udn.indexOf("google.")==0)&&_utcp=="/"&&_udn.indexOf("google.org")==-1){return false
}return true
}function _uSP(){var b=100;
if(_usample){b=_usample
}if(b>=100||b<=0){return true
}return((__utmVisitorCode(1)%10000)<(b*100))
}function urchinPathCopy(v){var i=document,p,s,d,t,h,o,c,r,u;
o=new Array("a","b","c","v","x","z");
r=_uDomain();
if(_udn&&_udn!=""){u=" domain="+_udn+";"
}p=_uNx()+";";
s=new Date();
s.setTime(s.getTime()+(_utimeout*1000));
s=s.toGMTString()+";";
d=new Date();
d.setTime(d.getTime()+(_ucto*1000));
d=d.toGMTString()+";";
for(t=0;
t<6;
t++){c=" expires=";
if(t==1){c+=s
}else{if(t==2){c=""
}else{if(t==5){c+=d
}else{c+=p
}}}h=_uGC(i.cookie,"__utm"+o[t]+"="+r,";");
if(h!="-"){i.cookie="__utm"+o[t]+"="+h+"; path="+v+";"+c+u
}}}function _uCO(){if(!_utk||_utk==""||_utk.length<10){return
}var c="";
if(_utk.charAt(0)=="!"){c=""
}_ubd.cookie="GASO="+_utk+"; path="+_utcp+";"+_udo;
var d=document.createElement("script");
d.type="text/javascript";
d.id="_gasojs";
d.src="https://"+c+"/analytics/reporting/overlay_js?gaso="+_utk+"&"+Math.random();
document.getElementsByTagName("head")[0].appendChild(d)
}function _uGT(){var d=location.hash,a;
if(d&&d!=""&&d.indexOf("#gaso=")==0){a=_uGC(d,"gaso=","&")
}else{a=_uGC(_ubd.cookie,"GASO=",";")
}return a
}var _utk=_uGT();
if(_utk&&_utk!=""&&_utk.length>10){if(window.addEventListener){window.addEventListener("load",_uCO,false)
}else{if(window.attachEvent){window.attachEvent("onload",_uCO)
}}}function _uNx(){return(new Date((new Date()).getTime()+63072000000)).toGMTString()
};