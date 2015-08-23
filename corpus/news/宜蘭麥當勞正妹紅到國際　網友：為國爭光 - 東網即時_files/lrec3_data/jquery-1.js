/*
 * jQuery JavaScript Library v1.5.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu Mar 31 15:28:23 2011 -0400
 */
(function(aR,aP){function af(b){return aL.isWindow(b)?b:b.nodeType===9?b.defaultView||b.parentWindow:!1
}function al(e){if(!cn[e]){var d=aL("<"+e+">").appendTo("body"),f=d.css("display");
d.remove();
if(f==="none"||f===""){f="block"
}cn[e]=f
}return cn[e]
}function an(e,d){var f={};
aL.each(ao.concat.apply([],ao.slice(0,d)),function(){f[this]=e
});
return f
}function c2(){try{return new aR.ActiveXObject("Microsoft.XMLHTTP")
}catch(a){}}function cu(){try{return new aR.XMLHttpRequest
}catch(a){}}function cw(){aL(aR).unload(function(){for(var b in cz){cz[b](0,1)
}})
}function cI(B,A){B.dataFilter&&(A=B.dataFilter(A,B.dataType));
var z=B.dataTypes,y={},x,w,v=z.length,u,t=z[0],s,r,q,d,b;
for(x=1;
x<v;
x++){if(x===1){for(w in B.converters){typeof w==="string"&&(y[w.toLowerCase()]=B.converters[w])
}}s=t,t=z[x];
if(t==="*"){t=s
}else{if(s!=="*"&&s!==t){r=s+" "+t,q=y[r]||y["* "+t];
if(!q){b=aP;
for(d in y){u=d.split(" ");
if(u[0]===s||u[0]==="*"){b=y[u[1]+" "+t];
if(b){d=y[d],d===!0?q=b:b===!0&&(q=d);
break
}}}}!q&&!b&&aL.error("No conversion from "+r.replace(" "," to ")),q!==!0&&(A=q?q(A):b(d(A)))
}}}return A
}function cJ(t,s,r){var q=t.contents,p=t.dataTypes,o=t.responseFields,n,m,l,b;
for(m in o){m in r&&(s[o[m]]=r[m])
}while(p[0]==="*"){p.shift(),n===aP&&(n=t.mimeType||s.getResponseHeader("content-type"))
}if(n){for(m in q){if(q[m]&&q[m].test(n)){p.unshift(m);
break
}}}if(p[0] in r){l=p[0]
}else{for(m in r){if(!p[0]||t.converters[m+" "+p[0]]){l=m;
break
}b||(b=m)
}l=l||b
}if(l){l!==p[0]&&p.unshift(l);
return r[l]
}}function cK(g,d,j,i){if(aL.isArray(d)&&d.length){aL.each(d,function(a,c){j||aQ.test(g)?i(g,c):cK(g+"["+(typeof c==="object"||aL.isArray(c)?a:"")+"]",c,j,i)
})
}else{if(j||d==null||typeof d!=="object"){i(g,d)
}else{if(aL.isArray(d)||aL.isEmptyObject(d)){i(g,"")
}else{for(var h in d){cK(g+"["+h+"]",d[h],j,i)
}}}}}function cL(v,u,t,s,r,q){r=r||u.dataTypes[0],q=q||{},q[r]=!0;
var p=v[r],o=0,n=p?p.length:0,m=v===cR,b;
for(;
o<n&&(m||!b);
o++){b=p[o](u,t,s),typeof b==="string"&&(!m||q[b]?b=aP:(u.dataTypes.unshift(b),b=cL(v,u,t,s,b,q)))
}(m||!b)&&!q["*"]&&(b=cL(v,u,t,s,"*",q));
return b
}function cM(b){return function(a,p){typeof a!=="string"&&(p=a,a="*");
if(aL.isFunction(p)){var o=a.toLowerCase().split(cX),n=0,m=o.length,l,k,d;
for(;
n<m;
n++){l=o[n],d=/^\+/.test(l),d&&(l=l.substr(1)||"*"),k=b[l]=b[l]||[],k[d?"unshift":"push"](p)
}}}
}function aU(g,d,j){var i=d==="width"?a1:aZ,h=d==="width"?g.offsetWidth:g.offsetHeight;
if(j==="border"){return h
}aL.each(i,function(){j||(h-=parseFloat(aL.css(g,"padding"+this))||0),j==="margin"?h+=parseFloat(aL.css(g,"margin"+this))||0:h-=parseFloat(aL.css(g,"border"+this+"Width"))||0
});
return h
}function b7(d,c){c.src?aL.ajax({url:c.src,async:!1,dataType:"script"}):aL.globalEval(c.text||c.textContent||c.innerHTML||""),c.parentNode&&c.parentNode.removeChild(c)
}function b9(b){return"getElementsByTagName" in b?b.getElementsByTagName("*"):"querySelectorAll" in b?b.querySelectorAll("*"):[]
}function ck(e,d){if(d.nodeType===1){var f=d.nodeName.toLowerCase();
d.clearAttributes(),d.mergeAttributes(e);
if(f==="object"){d.outerHTML=e.outerHTML
}else{if(f!=="input"||e.type!=="checkbox"&&e.type!=="radio"){if(f==="option"){d.selected=e.defaultSelected
}else{if(f==="input"||f==="textarea"){d.defaultValue=e.defaultValue
}}}else{e.checked&&(d.defaultChecked=d.checked=e.checked),d.value!==e.value&&(d.value=e.value)
}}d.removeAttribute(aL.expando)
}}function aT(r,q){if(q.nodeType===1&&aL.hasData(r)){var p=aL.expando,o=aL.data(r),n=aL.data(q,o);
if(o=o[p]){var m=o.events;
n=n[p]=aL.extend({},o);
if(m){delete n.handle,n.events={};
for(var l in m){for(var k=0,d=m[l].length;
k<d;
k++){aL.event.add(q,l+(m[l][k].namespace?".":"")+m[l][k].namespace,m[l][k],m[l][k].data)
}}}}}}function c1(d,c){return aL.nodeName(d,"table")?d.getElementsByTagName("tbody")[0]||d.appendChild(d.ownerDocument.createElement("tbody")):d
}function b8(f,d,h){if(aL.isFunction(d)){return aL.grep(f,function(b,i){var c=!!d.call(b,i,b);
return c===h
})
}if(d.nodeType){return aL.grep(f,function(b,c){return b===d===h
})
}if(typeof d==="string"){var g=aL.grep(f,function(b){return b.nodeType===1
});
if(cp.test(d)){return aL.filter(d,g,!h)
}d=aL.filter(d,g)
}return aL.grep(f,function(b,c){return aL.inArray(b,d)>=0===h
})
}function cj(b){return !b||!b.parentNode||b.parentNode.nodeType===11
}function ct(d,c){return(d&&d!=="*"?d+".":"")+c.replace(aj,"`").replace(ah,"&")
}function cv(J){var I,H,G,F,E,D,C,B,A,z,y,x,w,v=[],u=[],r=aL._data(this,"events");
if(J.liveFired!==this&&r&&r.live&&!J.target.disabled&&(!J.button||J.type!=="click")){J.namespace&&(x=new RegExp("(^|\\.)"+J.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),J.liveFired=this;
var d=r.live.slice(0);
for(C=0;
C<d.length;
C++){E=d[C],E.origType.replace(am,"")===J.type?u.push(E.selector):d.splice(C--,1)
}F=aL(J.target).closest(u,J.currentTarget);
for(B=0,A=F.length;
B<A;
B++){y=F[B];
for(C=0;
C<d.length;
C++){E=d[C];
if(y.selector===E.selector&&(!x||x.test(E.namespace))&&!y.elem.disabled){D=y.elem,G=null;
if(E.preType==="mouseenter"||E.preType==="mouseleave"){J.type=E.preType,G=aL(J.relatedTarget).closest(E.selector)[0]
}(!G||G!==D)&&v.push({elem:D,handleObj:E,level:y.level})
}}}for(B=0,A=v.length;
B<A;
B++){F=v[B];
if(H&&F.level>H){break
}J.currentTarget=F.elem,J.data=F.handleObj.data,J.handleObj=F.handleObj,w=F.handleObj.origHandler.apply(F.elem,arguments);
if(w===!1||J.isPropagationStopped()){H=F.level,w===!1&&(I=!1);
if(J.isImmediatePropagationStopped()){break
}}}return I
}}function cA(b,h,g){var d=aL.extend({},g[0]);
d.type=b,d.originalEvent={},d.liveFired=aP,aL.event.handle.call(h,d),d.isDefaultPrevented()&&g[0].preventDefault()
}function ab(){return !0
}function ac(){return !1
}function aB(d){for(var c in d){if(c!=="toJSON"){return !1
}}return !0
}function aD(b,h,g){if(g===aP&&b.nodeType===1){g=b.getAttribute("data-"+h);
if(typeof g==="string"){try{g=g==="true"?!0:g==="false"?!1:g==="null"?null:aL.isNaN(g)?aF.test(g)?aL.parseJSON(g):g:parseFloat(g)
}catch(d){}aL.data(b,h,g)
}else{g=aP
}}return g
}var aN=aR.document,aL=function(){function J(){if(!bh.isReady){try{aN.documentElement.doScroll("left")
}catch(d){setTimeout(J,1);
return
}bh.ready()
}}var bh=function(e,d){return new bh.fn.init(e,d,be)
},bg=aR.jQuery,bf=aR.$,be,bd=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,bc=/\S/,bb=/^\s+/,ba=/\s+$/,Z=/\d/,Y=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,X=/^[\],:{}\s]*$/,W=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,V=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,T=/(?:^|:|,)(?:\s*\[)+/g,R=/(webkit)[ \/]([\w.]+)/,P=/(opera)(?:.*version)?[ \/]([\w.]+)/,N=/(msie) ([\w.]+)/,L=/(mozilla)(?:.*? rv:([\w.]+))?/,I=navigator.userAgent,H,c,b,a=Object.prototype.toString,U=Object.prototype.hasOwnProperty,S=Array.prototype.push,Q=Array.prototype.slice,O=String.prototype.trim,M=Array.prototype.indexOf,K={};
bh.fn=bh.prototype={constructor:bh,init:function(d,p,o){var n,m,l,h;
if(!d){return this
}if(d.nodeType){this.context=this[0]=d,this.length=1;
return this
}if(d==="body"&&!p&&aN.body){this.context=aN,this[0]=aN.body,this.selector="body",this.length=1;
return this
}if(typeof d==="string"){n=bd.exec(d);
if(!n||!n[1]&&p){return !p||p.jquery?(p||o).find(d):this.constructor(p).find(d)
}if(n[1]){p=p instanceof bh?p[0]:p,h=p?p.ownerDocument||p:aN,l=Y.exec(d),l?bh.isPlainObject(p)?(d=[aN.createElement(l[1])],bh.fn.attr.call(d,p,!0)):d=[h.createElement(l[1])]:(l=bh.buildFragment([n[1]],[h]),d=(l.cacheable?bh.clone(l.fragment):l.fragment).childNodes);
return bh.merge(this,d)
}m=aN.getElementById(n[2]);
if(m&&m.parentNode){if(m.id!==n[2]){return o.find(d)
}this.length=1,this[0]=m
}this.context=aN,this.selector=d;
return this
}if(bh.isFunction(d)){return o.ready(d)
}d.selector!==aP&&(this.selector=d.selector,this.context=d.context);
return bh.makeArray(d,this)
},selector:"",jquery:"1.5.2",length:0,size:function(){return this.length
},toArray:function(){return Q.call(this,0)
},get:function(d){return d==null?this.toArray():d<0?this[this.length+d]:this[d]
},pushStack:function(f,d,h){var g=this.constructor();
bh.isArray(f)?S.apply(g,f):bh.merge(g,f),g.prevObject=this,g.context=this.context,d==="find"?g.selector=this.selector+(this.selector?" ":"")+h:d&&(g.selector=this.selector+"."+d+"("+h+")");
return g
},each:function(e,d){return bh.each(this,e,d)
},ready:function(d){bh.bindReady(),c.done(d);
return this
},eq:function(d){return d===-1?this.slice(d):this.slice(d,+d+1)
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},slice:function(){return this.pushStack(Q.apply(this,arguments),"slice",Q.call(arguments).join(","))
},map:function(d){return this.pushStack(bh.map(this,function(e,f){return d.call(e,f,e)
}))
},end:function(){return this.prevObject||this.constructor(null)
},push:S,sort:[].sort,splice:[].splice},bh.fn.init.prototype=bh.fn,bh.extend=bh.fn.extend=function(){var u,t,s,r,q,p,o=arguments[0]||{},n=1,m=arguments.length,d=!1;
typeof o==="boolean"&&(d=o,o=arguments[1]||{},n=2),typeof o!=="object"&&!bh.isFunction(o)&&(o={}),m===n&&(o=this,--n);
for(;
n<m;
n++){if((u=arguments[n])!=null){for(t in u){s=o[t],r=u[t];
if(o===r){continue
}d&&r&&(bh.isPlainObject(r)||(q=bh.isArray(r)))?(q?(q=!1,p=s&&bh.isArray(s)?s:[]):p=s&&bh.isPlainObject(s)?s:{},o[t]=bh.extend(d,p,r)):r!==aP&&(o[t]=r)
}}}return o
},bh.extend({noConflict:function(d){aR.$=bf,d&&(aR.jQuery=bg);
return bh
},isReady:!1,readyWait:1,ready:function(d){d===!0&&bh.readyWait--;
if(!bh.readyWait||d!==!0&&!bh.isReady){if(!aN.body){return setTimeout(bh.ready,1)
}bh.isReady=!0;
if(d!==!0&&--bh.readyWait>0){return
}c.resolveWith(aN,[bh]),bh.fn.trigger&&bh(aN).trigger("ready").unbind("ready")
}},bindReady:function(){if(!c){c=bh._Deferred();
if(aN.readyState==="complete"){return setTimeout(bh.ready,1)
}if(aN.addEventListener){aN.addEventListener("DOMContentLoaded",b,!1),aR.addEventListener("load",bh.ready,!1)
}else{if(aN.attachEvent){aN.attachEvent("onreadystatechange",b),aR.attachEvent("onload",bh.ready);
var d=!1;
try{d=aR.frameElement==null
}catch(f){}aN.documentElement.doScroll&&d&&J()
}}}},isFunction:function(d){return bh.type(d)==="function"
},isArray:Array.isArray||function(d){return bh.type(d)==="array"
},isWindow:function(d){return d&&typeof d==="object"&&"setInterval" in d
},isNaN:function(d){return d==null||!Z.test(d)||isNaN(d)
},type:function(d){return d==null?String(d):K[a.call(d)]||"object"
},isPlainObject:function(d){if(!d||bh.type(d)!=="object"||d.nodeType||bh.isWindow(d)){return !1
}if(d.constructor&&!U.call(d,"constructor")&&!U.call(d.constructor.prototype,"isPrototypeOf")){return !1
}var e;
for(e in d){}return e===aP||U.call(d,e)
},isEmptyObject:function(e){for(var d in e){return !1
}return !0
},error:function(d){throw d
},parseJSON:function(d){if(typeof d!=="string"||!d){return null
}d=bh.trim(d);
if(X.test(d.replace(W,"@").replace(V,"]").replace(T,""))){return aR.JSON&&aR.JSON.parse?aR.JSON.parse(d):(new Function("return "+d))()
}bh.error("Invalid JSON: "+d)
},parseXML:function(d,g,f){aR.DOMParser?(f=new DOMParser,g=f.parseFromString(d,"text/xml")):(g=new ActiveXObject("Microsoft.XMLDOM"),g.async="false",g.loadXML(d)),f=g.documentElement,(!f||!f.nodeName||f.nodeName==="parsererror")&&bh.error("Invalid XML: "+d);
return g
},noop:function(){},globalEval:function(f){if(f&&bc.test(f)){var d=aN.head||aN.getElementsByTagName("head")[0]||aN.documentElement,g=aN.createElement("script");
bh.support.scriptEval()?g.appendChild(aN.createTextNode(f)):g.text=f,d.insertBefore(g,d.firstChild),d.removeChild(g)
}},nodeName:function(e,d){return e.nodeName&&e.nodeName.toUpperCase()===d.toUpperCase()
},each:function(d,q,p){var o,n=0,m=d.length,l=m===aP||bh.isFunction(d);
if(p){if(l){for(o in d){if(q.apply(d[o],p)===!1){break
}}}else{for(;
n<m;
){if(q.apply(d[n++],p)===!1){break
}}}}else{if(l){for(o in d){if(q.call(d[o],o,d[o])===!1){break
}}}else{for(var k=d[0];
n<m&&q.call(k,n,k)!==!1;
k=d[++n]){}}}return d
},trim:O?function(d){return d==null?"":O.call(d)
}:function(d){return d==null?"":(d+"").replace(bb,"").replace(ba,"")
},makeArray:function(f,d){var h=d||[];
if(f!=null){var g=bh.type(f);
f.length==null||g==="string"||g==="function"||g==="regexp"||bh.isWindow(f)?S.call(h,f):bh.merge(h,f)
}return h
},inArray:function(f,e){if(e.indexOf){return e.indexOf(f)
}for(var h=0,g=e.length;
h<g;
h++){if(e[h]===f){return h
}}return -1
},merge:function(g,k){var j=g.length,i=0;
if(typeof k.length==="number"){for(var h=k.length;
i<h;
i++){g[j++]=k[i]
}}else{while(k[i]!==aP){g[j++]=k[i++]
}}g.length=j;
return g
},grep:function(i,h,n){var m=[],l;
n=!!n;
for(var k=0,j=i.length;
k<j;
k++){l=!!h(i[k],k),n!==l&&m.push(i[k])
}return m
},map:function(i,h,n){var m=[],l;
for(var k=0,j=i.length;
k<j;
k++){l=h(i[k],k,n),l!=null&&(m[m.length]=l)
}return m.concat.apply([],m)
},guid:1,proxy:function(d,g,f){arguments.length===2&&(typeof g==="string"?(f=d,d=f[g],g=aP):g&&!bh.isFunction(g)&&(f=g,g=aP)),!g&&d&&(g=function(){return d.apply(f||this,arguments)
}),d&&(g.guid=d.guid=d.guid||g.guid||bh.guid++);
return g
},access:function(s,r,q,p,o,n){var m=s.length;
if(typeof r==="object"){for(var l in r){bh.access(s,l,r[l],p,o,q)
}return s
}if(q!==aP){p=!n&&p&&bh.isFunction(q);
for(var d=0;
d<m;
d++){o(s[d],r,p?q.call(s[d],d,o(s[d],r)):q,n)
}return s
}return m?o(s[0],r):aP
},now:function(){return(new Date).getTime()
},uaMatch:function(e){e=e.toLowerCase();
var d=R.exec(e)||P.exec(e)||N.exec(e)||e.indexOf("compatible")<0&&L.exec(e)||[];
return{browser:d[1]||"",version:d[2]||"0"}
},sub:function(){function f(e,h){return new f.fn.init(e,h)
}bh.extend(!0,f,this),f.superclass=this,f.fn=f.prototype=this(),f.fn.constructor=f,f.subclass=this.subclass,f.fn.init=function d(e,h){h&&h instanceof bh&&!(h instanceof f)&&(h=f(h));
return bh.fn.init.call(this,e,h,g)
},f.fn.init.prototype=f.fn;
var g=f(aN);
return f
},browser:{}}),bh.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,d){K["[object "+d+"]"]=d.toLowerCase()
}),H=bh.uaMatch(I),H.browser&&(bh.browser[H.browser]=!0,bh.browser.version=H.version),bh.browser.webkit&&(bh.browser.safari=!0),M&&(bh.inArray=function(e,d){return M.call(d,e)
}),bc.test("?")&&(bb=/^[\s\xA0]+/,ba=/[\s\xA0]+$/),be=bh(aN),aN.addEventListener?b=function(){aN.removeEventListener("DOMContentLoaded",b,!1),bh.ready()
}:aN.attachEvent&&(b=function(){aN.readyState==="complete"&&(aN.detachEvent("onreadystatechange",b),bh.ready())
});
return bh
}(),aJ="then done fail isResolved isRejected promise".split(" "),aH=[].slice;
aL.extend({_Deferred:function(){var g=[],d,j,i,h={done:function(){if(!i){var m=arguments,l,f,e,b,a;
d&&(a=d,d=0);
for(l=0,f=m.length;
l<f;
l++){e=m[l],b=aL.type(e),b==="array"?h.done.apply(h,e):b==="function"&&g.push(e)
}a&&h.resolveWith(a[0],a[1])
}return this
},resolveWith:function(b,a){if(!i&&!d&&!j){a=a||[],j=1;
try{while(g[0]){g.shift().apply(b,a)
}}finally{d=[b,a],j=0
}}return this
},resolve:function(){h.resolveWith(this,arguments);
return this
},isResolved:function(){return j||d
},cancel:function(){i=1,g=[];
return this
}};
return h
},Deferred:function(e){var d=aL._Deferred(),h=aL._Deferred(),g;
aL.extend(d,{then:function(b,f){d.done(b).fail(f);
return this
},fail:h.done,rejectWith:h.resolveWith,reject:h.resolve,isRejected:h.isResolved,promise:function(b){if(b==null){if(g){return g
}g=b={}
}var f=aJ.length;
while(f--){b[aJ[f]]=d[aJ[f]]
}return b
}}),d.done(h.cancel).fail(d.cancel),delete d.cancel,e&&e.call(d,d);
return d
},when:function(f){function j(b){return function(a){d[b]=arguments.length>1?aH.call(arguments,0):a,--l||k.resolveWith(k,aH.call(d,0))
}
}var d=arguments,n=0,m=d.length,l=m,k=m<=1&&f&&aL.isFunction(f.promise)?f:aL.Deferred();
if(m>1){for(;
n<m;
n++){d[n]&&aL.isFunction(d[n].promise)?d[n].promise().then(j(n),k.reject):--l
}l||k.resolveWith(k,d)
}else{k!==f&&k.resolveWith(k,m?[f]:[])
}return k.promise()
}}),function(){aL.support={};
var v=aN.createElement("div");
v.style.display="none",v.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var u=v.getElementsByTagName("*"),t=v.getElementsByTagName("a")[0],s=aN.createElement("select"),r=s.appendChild(aN.createElement("option")),q=v.getElementsByTagName("input")[0];
if(u&&u.length&&t){aL.support={leadingWhitespace:v.firstChild.nodeType===3,tbody:!v.getElementsByTagName("tbody").length,htmlSerialize:!!v.getElementsByTagName("link").length,style:/red/.test(t.getAttribute("style")),hrefNormalized:t.getAttribute("href")==="/a",opacity:/^0.55$/.test(t.style.opacity),cssFloat:!!t.style.cssFloat,checkOn:q.value==="on",optSelected:r.selected,deleteExpando:!0,optDisabled:!1,checkClone:!1,noCloneEvent:!0,noCloneChecked:!0,boxModel:null,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableHiddenOffsets:!0,reliableMarginRight:!0},q.checked=!0,aL.support.noCloneChecked=q.cloneNode(!0).checked,s.disabled=!0,aL.support.optDisabled=!r.disabled;
var p=null;
aL.support.scriptEval=function(){if(p===null){var h=aN.documentElement,k=aN.createElement("script"),j="script"+aL.now();
try{k.appendChild(aN.createTextNode("window."+j+"=1;"))
}catch(i){}h.insertBefore(k,h.firstChild),aR[j]?(p=!0,delete aR[j]):p=!1,h.removeChild(k)
}return p
};
try{delete v.test
}catch(o){aL.support.deleteExpando=!1
}!v.addEventListener&&v.attachEvent&&v.fireEvent&&(v.attachEvent("onclick",function d(){aL.support.noCloneEvent=!1,v.detachEvent("onclick",d)
}),v.cloneNode(!0).fireEvent("onclick")),v=aN.createElement("div"),v.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";
var c=aN.createDocumentFragment();
c.appendChild(v.firstChild),aL.support.checkClone=c.cloneNode(!0).cloneNode(!0).lastChild.checked,aL(function(){var g=aN.createElement("div"),f=aN.getElementsByTagName("body")[0];
if(f){g.style.width=g.style.paddingLeft="1px",f.appendChild(g),aL.boxModel=aL.support.boxModel=g.offsetWidth===2,"zoom" in g.style&&(g.style.display="inline",g.style.zoom=1,aL.support.inlineBlockNeedsLayout=g.offsetWidth===2,g.style.display="",g.innerHTML="<div style='width:4px;'></div>",aL.support.shrinkWrapBlocks=g.offsetWidth!==2),g.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
var h=g.getElementsByTagName("td");
aL.support.reliableHiddenOffsets=h[0].offsetHeight===0,h[0].style.display="",h[1].style.display="none",aL.support.reliableHiddenOffsets=aL.support.reliableHiddenOffsets&&h[0].offsetHeight===0,g.innerHTML="",aN.defaultView&&aN.defaultView.getComputedStyle&&(g.style.width="1px",g.style.marginRight="0",aL.support.reliableMarginRight=(parseInt(aN.defaultView.getComputedStyle(g,null).marginRight,10)||0)===0),f.removeChild(g).style.display="none",g=h=null
}});
var a=function(f){var e=aN.createElement("div");
f="on"+f;
if(!e.attachEvent){return !0
}var g=f in e;
g||(e.setAttribute(f,"return;"),g=typeof e[f]==="function");
return g
};
aL.support.submitBubbles=a("submit"),aL.support.changeBubbles=a("change"),v=u=t=null
}}();
var aF=/^(?:\{.*\}|\[.*\])$/;
aL.extend({cache:{},uuid:0,expando:"jQuery"+(aL.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(b){b=b.nodeType?aL.cache[b[aL.expando]]:b[aL.expando];
return !!b&&!aB(b)
},data:function(t,s,r,q){if(aL.acceptData(t)){var p=aL.expando,o=typeof s==="string",n,m=t.nodeType,d=m?aL.cache:t,b=m?t[aL.expando]:t[aL.expando]&&aL.expando;
if((!b||q&&b&&!d[b][p])&&o&&r===aP){return
}b||(m?t[aL.expando]=b=++aL.uuid:b=aL.expando),d[b]||(d[b]={},m||(d[b].toJSON=aL.noop));
if(typeof s==="object"||typeof s==="function"){q?d[b][p]=aL.extend(d[b][p],s):d[b]=aL.extend(d[b],s)
}n=d[b],q&&(n[p]||(n[p]={}),n=n[p]),r!==aP&&(n[s]=r);
if(s==="events"&&!n[s]){return n[p]&&n[p].events
}return o?n[s]:n
}},removeData:function(r,q,p){if(aL.acceptData(r)){var o=aL.expando,n=r.nodeType,m=n?aL.cache:r,i=n?r[aL.expando]:aL.expando;
if(!m[i]){return
}if(q){var d=p?m[i][o]:m[i];
if(d){delete d[q];
if(!aB(d)){return
}}}if(p){delete m[i][o];
if(!aB(m[i])){return
}}var a=m[i][o];
aL.support.deleteExpando||m!=aR?delete m[i]:m[i]=null,a?(m[i]={},n||(m[i].toJSON=aL.noop),m[i][o]=a):n&&(aL.support.deleteExpando?delete r[aL.expando]:r.removeAttribute?r.removeAttribute(aL.expando):r[aL.expando]=null)
}},_data:function(e,d,f){return aL.data(e,d,f,!0)
},acceptData:function(d){if(d.nodeName){var c=aL.noData[d.nodeName.toLowerCase()];
if(c){return c!==!0&&d.getAttribute("classid")===c
}}return !0
}}),aL.fn.extend({data:function(b,p){var o=null;
if(typeof b==="undefined"){if(this.length){o=aL.data(this[0]);
if(this[0].nodeType===1){var n=this[0].attributes,m;
for(var l=0,h=n.length;
l<h;
l++){m=n[l].name,m.indexOf("data-")===0&&(m=m.substr(5),aD(this[0],m,o[m]))
}}}return o
}if(typeof b==="object"){return this.each(function(){aL.data(this,b)
})
}var d=b.split(".");
d[1]=d[1]?"."+d[1]:"";
if(p===aP){o=this.triggerHandler("getData"+d[1]+"!",[d[0]]),o===aP&&this.length&&(o=aL.data(this[0],b),o=aD(this[0],b,o));
return o===aP&&d[1]?this.data(d[0]):o
}return this.each(function(){var a=aL(this),c=[d[0],p];
a.triggerHandler("setData"+d[1]+"!",c),aL.data(this,b,p),a.triggerHandler("changeData"+d[1]+"!",c)
})
},removeData:function(b){return this.each(function(){aL.removeData(this,b)
})
}}),aL.extend({queue:function(f,d,h){if(f){d=(d||"fx")+"queue";
var g=aL._data(f,d);
if(!h){return g||[]
}!g||aL.isArray(h)?g=aL._data(f,d,aL.makeArray(h)):g.push(h);
return g
}},dequeue:function(f,d){d=d||"fx";
var h=aL.queue(f,d),g=h.shift();
g==="inprogress"&&(g=h.shift()),g&&(d==="fx"&&h.unshift("inprogress"),g.call(f,function(){aL.dequeue(f,d)
})),h.length||aL.removeData(f,d+"queue",!0)
}}),aL.fn.extend({queue:function(b,d){typeof b!=="string"&&(d=b,b="fx");
if(d===aP){return aL.queue(this[0],b)
}return this.each(function(a){var c=aL.queue(this,b,d);
b==="fx"&&c[0]!=="inprogress"&&aL.dequeue(this,b)
})
},dequeue:function(b){return this.each(function(){aL.dequeue(this,b)
})
},delay:function(d,c){d=aL.fx?aL.fx.speeds[d]||d:d,c=c||"fx";
return this.queue(c,function(){var a=this;
setTimeout(function(){aL.dequeue(a,c)
},d)
})
},clearQueue:function(b){return this.queue(b||"fx",[])
}});
var aA=/[\n\t\r]/g,az=/\s+/,ay=/\r/g,ax=/^(?:href|src|style)$/,aw=/^(?:button|input)$/i,au=/^(?:button|input|object|select|textarea)$/i,ar=/^a(?:rea)?$/i,ap=/^(?:radio|checkbox)$/i;
aL.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"},aL.fn.extend({attr:function(d,c){return aL.access(this,d,c,!0,aL.attr)
},removeAttr:function(d,c){return this.each(function(){aL.attr(this,d,""),this.nodeType===1&&this.removeAttribute(d)
})
},addClass:function(r){if(aL.isFunction(r)){return this.each(function(a){var e=aL(this);
e.addClass(r.call(this,a,e.attr("class")))
})
}if(r&&typeof r==="string"){var q=(r||"").split(az);
for(var p=0,o=this.length;
p<o;
p++){var n=this[p];
if(n.nodeType===1){if(n.className){var m=" "+n.className+" ",l=n.className;
for(var k=0,d=q.length;
k<d;
k++){m.indexOf(" "+q[k]+" ")<0&&(l+=" "+q[k])
}n.className=aL.trim(l)
}else{n.className=r
}}}}return this
},removeClass:function(d){if(aL.isFunction(d)){return this.each(function(a){var e=aL(this);
e.removeClass(d.call(this,a,e.attr("class")))
})
}if(d&&typeof d==="string"||d===aP){var p=(d||"").split(az);
for(var o=0,n=this.length;
o<n;
o++){var m=this[o];
if(m.nodeType===1&&m.className){if(d){var k=(" "+m.className+" ").replace(aA," ");
for(var j=0,b=p.length;
j<b;
j++){k=k.replace(" "+p[j]+" "," ")
}m.className=aL.trim(k)
}else{m.className=""
}}}}return this
},toggleClass:function(f,d){var h=typeof f,g=typeof d==="boolean";
if(aL.isFunction(f)){return this.each(function(b){var a=aL(this);
a.toggleClass(f.call(this,b,a.attr("class"),d),d)
})
}return this.each(function(){if(h==="string"){var k,e=0,c=aL(this),b=d,a=f.split(az);
while(k=a[e++]){b=g?b:!c.hasClass(k),c[b?"addClass":"removeClass"](k)
}}else{if(h==="undefined"||h==="boolean"){this.className&&aL._data(this,"__className__",this.className),this.className=this.className||f===!1?"":aL._data(this,"__className__")||""
}}})
},hasClass:function(f){var e=" "+f+" ";
for(var h=0,g=this.length;
h<g;
h++){if((" "+this[h].className+" ").replace(aA," ").indexOf(e)>-1){return !0
}}return !1
},val:function(v){if(!arguments.length){var u=this[0];
if(u){if(aL.nodeName(u,"option")){var t=u.attributes.value;
return !t||t.specified?u.value:u.text
}if(aL.nodeName(u,"select")){var s=u.selectedIndex,r=[],q=u.options,p=u.type==="select-one";
if(s<0){return null
}for(var o=p?s:0,l=p?s+1:q.length;
o<l;
o++){var d=q[o];
if(d.selected&&(aL.support.optDisabled?!d.disabled:d.getAttribute("disabled")===null)&&(!d.parentNode.disabled||!aL.nodeName(d.parentNode,"optgroup"))){v=aL(d).val();
if(p){return v
}r.push(v)
}}if(p&&!r.length&&q.length){return aL(q[s]).val()
}return r
}if(ap.test(u.type)&&!aL.support.checkOn){return u.getAttribute("value")===null?"on":u.value
}return(u.value||"").replace(ay,"")
}return aP
}var b=aL.isFunction(v);
return this.each(function(a){var i=aL(this),h=v;
if(this.nodeType===1){b&&(h=v.call(this,a,i.val())),h==null?h="":typeof h==="number"?h+="":aL.isArray(h)&&(h=aL.map(h,function(c){return c==null?"":c+""
}));
if(aL.isArray(h)&&ap.test(this.type)){this.checked=aL.inArray(i.val(),h)>=0
}else{if(aL.nodeName(this,"select")){var g=aL.makeArray(h);
aL("option",this).each(function(){this.selected=aL.inArray(aL(this).val(),g)>=0
}),g.length||(this.selectedIndex=-1)
}else{this.value=h
}}}})
}}),aL.extend({attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(t,s,r,q){if(!t||t.nodeType===3||t.nodeType===8||t.nodeType===2){return aP
}if(q&&s in aL.attrFn){return aL(t)[s](r)
}var p=t.nodeType!==1||!aL.isXMLDoc(t),o=r!==aP;
s=p&&aL.props[s]||s;
if(t.nodeType===1){var n=ax.test(s);
if(s==="selected"&&!aL.support.optSelected){var m=t.parentNode;
m&&(m.selectedIndex,m.parentNode&&m.parentNode.selectedIndex)
}if((s in t||t[s]!==aP)&&p&&!n){o&&(s==="type"&&aw.test(t.nodeName)&&t.parentNode&&aL.error("type property can't be changed"),r===null?t.nodeType===1&&t.removeAttribute(s):t[s]=r);
if(aL.nodeName(t,"form")&&t.getAttributeNode(s)){return t.getAttributeNode(s).nodeValue
}if(s==="tabIndex"){var d=t.getAttributeNode("tabIndex");
return d&&d.specified?d.value:au.test(t.nodeName)||ar.test(t.nodeName)&&t.href?0:aP
}return t[s]
}if(!aL.support.style&&p&&s==="style"){o&&(t.style.cssText=""+r);
return t.style.cssText
}o&&t.setAttribute(s,""+r);
if(!t.attributes[s]&&(t.hasAttribute&&!t.hasAttribute(s))){return aP
}var b=!aL.support.hrefNormalized&&p&&n?t.getAttribute(s,2):t.getAttribute(s);
return b===null?aP:b
}o&&(t[s]=r);
return t[s]
}});
var am=/\.(.*)$/,ak=/^(?:textarea|input|select)$/i,aj=/\./g,ah=/ /g,ae=/[^\w\s.|`]/g,ad=function(b){return b.replace(ae,"\\$&")
};
aL.event={add:function(D,C,B,A){if(D.nodeType!==3&&D.nodeType!==8){try{aL.isWindow(D)&&(D!==aR&&!D.frameElement)&&(D=aR)
}catch(z){}if(B===!1){B=ac
}else{if(!B){return
}}var y,x;
B.handler&&(y=B,B=y.handler),B.guid||(B.guid=aL.guid++);
var w=aL._data(D);
if(!w){return
}var v=w.events,u=w.handle;
v||(w.events=v={}),u||(w.handle=u=function(c){return typeof aL!=="undefined"&&aL.event.triggered!==c.type?aL.event.handle.apply(u.elem,arguments):aP
}),u.elem=D,C=C.split(" ");
var t,s=0,d;
while(t=C[s++]){x=y?aL.extend({},y):{handler:B,data:A},t.indexOf(".")>-1?(d=t.split("."),t=d.shift(),x.namespace=d.slice(0).sort().join(".")):(d=[],x.namespace=""),x.type=t,x.guid||(x.guid=B.guid);
var b=v[t],a=aL.event.special[t]||{};
if(!b){b=v[t]=[];
if(!a.setup||a.setup.call(D,A,d,u)===!1){D.addEventListener?D.addEventListener(t,u,!1):D.attachEvent&&D.attachEvent("on"+t,u)
}}a.add&&(a.add.call(D,x),x.handler.guid||(x.handler.guid=B.guid)),b.push(x),aL.event.global[t]=!0
}D=null
}},global:{},remove:function(L,K,J,I){if(L.nodeType!==3&&L.nodeType!==8){J===!1&&(J=ac);
var H,G,F,E,D=0,C,B,A,z,y,x,w,v=aL.hasData(L)&&aL._data(L),d=v&&v.events;
if(!v||!d){return
}K&&K.type&&(J=K.handler,K=K.type);
if(!K||typeof K==="string"&&K.charAt(0)==="."){K=K||"";
for(G in d){aL.event.remove(L,G+K)
}return
}K=K.split(" ");
while(G=K[D++]){w=G,x=null,C=G.indexOf(".")<0,B=[],C||(B=G.split("."),G=B.shift(),A=new RegExp("(^|\\.)"+aL.map(B.slice(0).sort(),ad).join("\\.(?:.*\\.)?")+"(\\.|$)")),y=d[G];
if(!y){continue
}if(!J){for(E=0;
E<y.length;
E++){x=y[E];
if(C||A.test(x.namespace)){aL.event.remove(L,w,x.handler,E),y.splice(E--,1)
}}continue
}z=aL.event.special[G]||{};
for(E=I||0;
E<y.length;
E++){x=y[E];
if(J.guid===x.guid){if(C||A.test(x.namespace)){I==null&&y.splice(E--,1),z.remove&&z.remove.call(L,x)
}if(I!=null){break
}}}if(y.length===0||I!=null&&y.length===1){(!z.teardown||z.teardown.call(L,B)===!1)&&aL.removeEvent(L,G,v.handle),H=null,delete d[G]
}}if(aL.isEmptyObject(d)){var b=v.handle;
b&&(b.elem=null),delete v.events,delete v.handle,aL.isEmptyObject(v)&&aL.removeData(L,aP,!0)
}}},trigger:function(B,A,z){var y=B.type||B,x=arguments[3];
if(!x){B=typeof B==="object"?B[aL.expando]?B:aL.extend(aL.Event(y),B):aL.Event(y),y.indexOf("!")>=0&&(B.type=y=y.slice(0,-1),B.exclusive=!0),z||(B.stopPropagation(),aL.event.global[y]&&aL.each(aL.cache,function(){var a=aL.expando,c=this[a];
c&&c.events&&c.events[y]&&aL.event.trigger(B,A,c.handle.elem)
}));
if(!z||z.nodeType===3||z.nodeType===8){return aP
}B.result=aP,B.target=z,A=aL.makeArray(A),A.unshift(B)
}B.currentTarget=z;
var w=aL._data(z,"handle");
w&&w.apply(z,A);
var v=z.parentNode||z.ownerDocument;
try{z&&z.nodeName&&aL.noData[z.nodeName.toLowerCase()]||z["on"+y]&&z["on"+y].apply(z,A)===!1&&(B.result=!1,B.preventDefault())
}catch(u){}if(!B.isPropagationStopped()&&v){aL.event.trigger(B,A,v,!0)
}else{if(!B.isDefaultPrevented()){var t,s=B.target,r=y.replace(am,""),q=aL.nodeName(s,"a")&&r==="click",d=aL.event.special[r]||{};
if((!d._default||d._default.call(z,B)===!1)&&!q&&!(s&&s.nodeName&&aL.noData[s.nodeName.toLowerCase()])){try{s[r]&&(t=s["on"+r],t&&(s["on"+r]=null),aL.event.triggered=B.type,s[r]())
}catch(b){}t&&(s["on"+r]=t),aL.event.triggered=aP
}}}},handle:function(x){var w,v,u,t,s,r=[],q=aL.makeArray(arguments);
x=q[0]=aL.event.fix(x||aR.event),x.currentTarget=this,w=x.type.indexOf(".")<0&&!x.exclusive,w||(u=x.type.split("."),x.type=u.shift(),r=u.slice(0).sort(),t=new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.)?")+"(\\.|$)")),x.namespace=x.namespace||r.join("."),s=aL._data(this,"events"),v=(s||{})[x.type];
if(s&&v){v=v.slice(0);
for(var p=0,d=v.length;
p<d;
p++){var b=v[p];
if(w||t.test(b.namespace)){x.handler=b.handler,x.data=b.data,x.handleObj=b;
var a=b.handler.apply(this,q);
a!==aP&&(x.result=a,a===!1&&(x.preventDefault(),x.stopPropagation()));
if(x.isImmediatePropagationStopped()){break
}}}}return x.result
},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(b){if(b[aL.expando]){return b
}var l=b;
b=aL.Event(l);
for(var k=this.props.length,j;
k;
){j=this.props[--k],b[j]=l[j]
}b.target||(b.target=b.srcElement||aN),b.target.nodeType===3&&(b.target=b.target.parentNode),!b.relatedTarget&&b.fromElement&&(b.relatedTarget=b.fromElement===b.target?b.toElement:b.fromElement);
if(b.pageX==null&&b.clientX!=null){var d=aN.documentElement,c=aN.body;
b.pageX=b.clientX+(d&&d.scrollLeft||c&&c.scrollLeft||0)-(d&&d.clientLeft||c&&c.clientLeft||0),b.pageY=b.clientY+(d&&d.scrollTop||c&&c.scrollTop||0)-(d&&d.clientTop||c&&c.clientTop||0)
}b.which==null&&(b.charCode!=null||b.keyCode!=null)&&(b.which=b.charCode!=null?b.charCode:b.keyCode),!b.metaKey&&b.ctrlKey&&(b.metaKey=b.ctrlKey),!b.which&&b.button!==aP&&(b.which=b.button&1?1:b.button&2?3:b.button&4?2:0);
return b
},guid:100000000,proxy:aL.proxy,special:{ready:{setup:aL.bindReady,teardown:aL.noop},live:{add:function(b){aL.event.add(this,ct(b.origType,b.selector),aL.extend({},b,{handler:cv,guid:b.handler.guid}))
},remove:function(b){aL.event.remove(this,ct(b.origType,b.selector),b)
}},beforeunload:{setup:function(e,d,f){aL.isWindow(this)&&(this.onbeforeunload=f)
},teardown:function(d,c){this.onbeforeunload===c&&(this.onbeforeunload=null)
}}}},aL.removeEvent=aN.removeEventListener?function(e,d,f){e.removeEventListener&&e.removeEventListener(d,f,!1)
}:function(e,d,f){e.detachEvent&&e.detachEvent("on"+d,f)
},aL.Event=function(b){if(!this.preventDefault){return new aL.Event(b)
}b&&b.type?(this.originalEvent=b,this.type=b.type,this.isDefaultPrevented=b.defaultPrevented||b.returnValue===!1||b.getPreventDefault&&b.getPreventDefault()?ab:ac):this.type=b,this.timeStamp=aL.now(),this[aL.expando]=!0
},aL.Event.prototype={preventDefault:function(){this.isDefaultPrevented=ab;
var b=this.originalEvent;
b&&(b.preventDefault?b.preventDefault():b.returnValue=!1)
},stopPropagation:function(){this.isPropagationStopped=ab;
var b=this.originalEvent;
b&&(b.stopPropagation&&b.stopPropagation(),b.cancelBubble=!0)
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=ab,this.stopPropagation()
},isDefaultPrevented:ac,isPropagationStopped:ac,isImmediatePropagationStopped:ac};
var aa=function(d){var c=d.relatedTarget;
try{if(c&&c!==aN&&!c.parentNode){return
}while(c&&c!==this){c=c.parentNode
}c!==this&&(d.type=d.data,aL.event.handle.apply(this,arguments))
}catch(f){}},cH=function(b){b.type=b.data,aL.event.handle.apply(this,arguments)
};
aL.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(d,c){aL.event.special[d]={setup:function(a){aL.event.add(this,c,a&&a.selector?cH:aa,d)
},teardown:function(b){aL.event.remove(this,c,b&&b.selector?cH:aa)
}}
}),aL.support.submitBubbles||(aL.event.special.submit={setup:function(d,c){if(this.nodeName&&this.nodeName.toLowerCase()!=="form"){aL.event.add(this,"click.specialSubmit",function(f){var e=f.target,g=e.type;
(g==="submit"||g==="image")&&aL(e).closest("form").length&&cA("submit",this,arguments)
}),aL.event.add(this,"keypress.specialSubmit",function(f){var e=f.target,g=e.type;
(g==="text"||g==="password")&&aL(e).closest("form").length&&f.keyCode===13&&cA("submit",this,arguments)
})
}else{return !1
}},teardown:function(b){aL.event.remove(this,".specialSubmit")
}});
if(!aL.support.changeBubbles){var cG,cE=function(e){var d=e.type,f=e.value;
d==="radio"||d==="checkbox"?f=e.checked:d==="select-multiple"?f=e.selectedIndex>-1?aL.map(e.options,function(b){return b.selected
}).join("-"):"":e.nodeName.toLowerCase()==="select"&&(f=e.selectedIndex);
return f
},cC=function cC(b){var h=b.target,g,d;
if(ak.test(h.nodeName)&&!h.readOnly){g=aL._data(h,"_change_data"),d=cE(h),(b.type!=="focusout"||h.type!=="radio")&&aL._data(h,"_change_data",d);
if(g===aP||d===g){return
}if(g!=null||d){b.type="change",b.liveFired=aP,aL.event.trigger(b,arguments[1],h)
}}};
aL.event.special.change={filters:{focusout:cC,beforedeactivate:cC,click:function(e){var d=e.target,f=d.type;
(f==="radio"||f==="checkbox"||d.nodeName.toLowerCase()==="select")&&cC.call(this,e)
},keydown:function(e){var d=e.target,f=d.type;
(e.keyCode===13&&d.nodeName.toLowerCase()!=="textarea"||e.keyCode===32&&(f==="checkbox"||f==="radio")||f==="select-multiple")&&cC.call(this,e)
},beforeactivate:function(d){var c=d.target;
aL._data(c,"_change_data",cE(c))
}},setup:function(e,d){if(this.type==="file"){return !1
}for(var f in cG){aL.event.add(this,f+".specialChange",cG[f])
}return ak.test(this.nodeName)
},teardown:function(b){aL.event.remove(this,".specialChange");
return ak.test(this.nodeName)
}},cG=aL.event.special.change.filters,cG.focus=cG.beforeactivate
}aN.addEventListener&&aL.each({focus:"focusin",blur:"focusout"},function(d,c){function g(b){var e=aL.event.fix(b);
e.type=c,e.originalEvent={},aL.event.trigger(e,null,e.target),e.isDefaultPrevented()&&b.preventDefault()
}var h=0;
aL.event.special[c]={setup:function(){h++===0&&aN.addEventListener(d,g,!0)
},teardown:function(){--h===0&&aN.removeEventListener(d,g,!0)
}}
}),aL.each(["bind","one"],function(b,d){aL.fn[d]=function(c,p,o){if(typeof c==="object"){for(var n in c){this[d](n,p,c[n],o)
}return this
}if(aL.isFunction(p)||p===!1){o=p,p=aP
}var m=d==="one"?aL.proxy(o,function(e){aL(this).unbind(e,m);
return o.apply(this,arguments)
}):o;
if(c==="unload"&&d!=="one"){this.one(c,p,o)
}else{for(var l=0,k=this.length;
l<k;
l++){aL.event.add(this[l],c,m,p)
}}return this
}
}),aL.fn.extend({unbind:function(g,d){if(typeof g!=="object"||g.preventDefault){for(var i=0,h=this.length;
i<h;
i++){aL.event.remove(this[i],g,d)
}}else{for(var j in g){this.unbind(j,g[j])
}}return this
},delegate:function(f,e,h,g){return this.live(e,h,g,f)
},undelegate:function(e,d,f){return arguments.length===0?this.unbind("live"):this.die(d,null,f,e)
},trigger:function(d,c){return this.each(function(){aL.event.trigger(d,c,this)
})
},triggerHandler:function(e,d){if(this[0]){var f=aL.Event(e);
f.preventDefault(),f.stopPropagation(),aL.event.trigger(f,d,this[0]);
return f.result
}},toggle:function(e){var d=arguments,f=1;
while(f<d.length){aL.proxy(e,d[f++])
}return this.click(aL.proxy(e,function(b){var a=(aL._data(this,"lastToggle"+e.guid)||0)%f;
aL._data(this,"lastToggle"+e.guid,a+1),b.preventDefault();
return d[a].apply(this,arguments)||!1
}))
},hover:function(d,c){return this.mouseenter(d).mouseleave(c||d)
}});
var cy={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};
aL.each(["live","die"],function(b,d){aL.fn[d]=function(D,C,B,A){var z,y=0,x,w,v,u=A||this.selector,t=A?this:aL(this.context);
if(typeof D==="object"&&!D.preventDefault){for(var s in D){t[d](s,C,D[s],u)
}return this
}aL.isFunction(C)&&(B=C,C=aP),D=(D||"").split(" ");
while((z=D[y++])!=null){x=am.exec(z),w="",x&&(w=x[0],z=z.replace(am,""));
if(z==="hover"){D.push("mouseenter"+w,"mouseleave"+w);
continue
}v=z,z==="focus"||z==="blur"?(D.push(cy[z]+w),z=z+w):z=(cy[z]||z)+w;
if(d==="live"){for(var r=0,c=t.length;
r<c;
r++){aL.event.add(t[r],"live."+ct(z,u),{data:C,selector:u,handler:B,origType:z,origHandler:B,preType:v})
}}else{t.unbind("live."+ct(z,u),B)
}}return this
}
}),aL.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(d,c){aL.fn[c]=function(b,e){e==null&&(e=b,b=null);
return arguments.length>0?this.bind(c,b,e):this.trigger(c)
},aL.attrFn&&(aL.attrFn[c]=!0)
}),function(){function c(t,s,r,q,p,o){for(var n=0,m=q.length;
n<m;
n++){var l=q[n];
if(l){var k=!1;
l=l[t];
while(l){if(l.sizcache===r){k=q[l.sizset];
break
}if(l.nodeType===1){o||(l.sizcache=r,l.sizset=n);
if(typeof s!=="string"){if(l===s){k=!0;
break
}}else{if(E.filter(s,[l]).length>0){k=l;
break
}}}l=l[t]
}q[n]=k
}}}function d(t,s,r,q,p,o){for(var n=0,m=q.length;
n<m;
n++){var l=q[n];
if(l){var k=!1;
l=l[t];
while(l){if(l.sizcache===r){k=q[l.sizset];
break
}l.nodeType===1&&!o&&(l.sizcache=r,l.sizset=n);
if(l.nodeName.toLowerCase()===s){k=l;
break
}l=l[t]
}q[n]=k
}}}var L=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,K=0,J=Object.prototype.toString,I=!1,H=!0,G=/\\/g,F=/\W/;
[0,0].sort(function(){H=!1;
return 0
});
var E=function(Q,O,N,M){N=N||[],O=O||aN;
var v=O;
if(O.nodeType!==1&&O.nodeType!==9){return[]
}if(!Q||typeof Q!=="string"){return N
}var p,m,l,k,f,a,V,U,T=!0,S=E.isXML(O),R=[],P=Q;
do{L.exec(""),p=L.exec(P);
if(p){P=p[3],R.push(p[1]);
if(p[2]){k=p[3];
break
}}}while(p);
if(R.length>1&&C.exec(Q)){if(R.length===2&&D.relative[R[0]]){m=b(R[0]+R[1],O)
}else{m=D.relative[R[0]]?[O]:E(R.shift(),O);
while(R.length){Q=R.shift(),D.relative[Q]&&(Q+=R.shift()),m=b(Q,m)
}}}else{!M&&R.length>1&&O.nodeType===9&&!S&&D.match.ID.test(R[0])&&!D.match.ID.test(R[R.length-1])&&(f=E.find(R.shift(),O,S),O=f.expr?E.filter(f.expr,f.set)[0]:f.set[0]);
if(O){f=M?{expr:R.pop(),set:z(M)}:E.find(R.pop(),R.length===1&&(R[0]==="~"||R[0]==="+")&&O.parentNode?O.parentNode:O,S),m=f.expr?E.filter(f.expr,f.set):f.set,R.length>0?l=z(m):T=!1;
while(R.length){a=R.pop(),V=a,D.relative[a]?V=R.pop():a="",V==null&&(V=O),D.relative[a](l,V,S)
}}else{l=R=[]
}}l||(l=m),l||E.error(a||Q);
if(J.call(l)==="[object Array]"){if(T){if(O&&O.nodeType===1){for(U=0;
l[U]!=null;
U++){l[U]&&(l[U]===!0||l[U].nodeType===1&&E.contains(O,l[U]))&&N.push(m[U])
}}else{for(U=0;
l[U]!=null;
U++){l[U]&&l[U].nodeType===1&&N.push(m[U])
}}}else{N.push.apply(N,l)
}}else{z(l,N)
}k&&(E(k,v,N,M),E.uniqueSort(N));
return N
};
E.uniqueSort=function(f){if(x){I=H,f.sort(x);
if(I){for(var e=1;
e<f.length;
e++){f[e]===f[e-1]&&f.splice(e--,1)
}}}return f
},E.matches=function(f,e){return E(f,null,null,e)
},E.matchesSelector=function(f,e){return E(e,null,null,[f]).length>0
},E.find=function(r,q,p){var o;
if(!r){return[]
}for(var n=0,m=D.order.length;
n<m;
n++){var l,k=D.order[n];
if(l=D.leftMatch[k].exec(r)){var i=l[1];
l.splice(1,1);
if(i.substr(i.length-1)!=="\\"){l[1]=(l[1]||"").replace(G,""),o=D.find[k](l,q,p);
if(o!=null){r=r.replace(D.match[k],"");
break
}}}}o||(o=typeof q.getElementsByTagName!=="undefined"?q.getElementsByTagName("*"):[]);
return{set:o,expr:r}
},E.filter=function(W,V,U,T){var S,R,Q=W,P=[],O=V,N=V&&V[0]&&E.isXML(V[0]);
while(W&&V.length){for(var M in D.filter){if((S=D.leftMatch[M].exec(W))!=null&&S[2]){var v,u,l=D.filter[M],k=S[1];
R=!1,S.splice(1,1);
if(k.substr(k.length-1)==="\\"){continue
}O===P&&(P=[]);
if(D.preFilter[M]){S=D.preFilter[M](S,O,U,P,T,N);
if(S){if(S===!0){continue
}}else{R=v=!0
}}if(S){for(var Y=0;
(u=O[Y])!=null;
Y++){if(u){v=l(u,S,Y,O);
var X=T^!!v;
U&&v!=null?X?R=!0:O[Y]=!1:X&&(P.push(u),R=!0)
}}}if(v!==aP){U||(O=P),W=W.replace(D.match[M],"");
if(!R){return[]
}break
}}}if(W===Q){if(R==null){E.error(W)
}else{break
}}Q=W
}return O
},E.error=function(e){throw"Syntax error, unrecognized expression: "+e
};
var D=E.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(e){return e.getAttribute("href")
},type:function(e){return e.getAttribute("type")
}},relative:{"+":function(j,i){var p=typeof i==="string",o=p&&!F.test(i),n=p&&!o;
o&&(i=i.toLowerCase());
for(var m=0,l=j.length,k;
m<l;
m++){if(k=j[m]){while((k=k.previousSibling)&&k.nodeType!==1){}j[m]=n||k&&k.nodeName.toLowerCase()===i?k||!1:k===i
}}n&&E.filter(i,j,!0)
},">":function(i,h){var n,m=typeof h==="string",l=0,k=i.length;
if(m&&!F.test(h)){h=h.toLowerCase();
for(;
l<k;
l++){n=i[l];
if(n){var j=n.parentNode;
i[l]=j.nodeName.toLowerCase()===h?j:!1
}}}else{for(;
l<k;
l++){n=i[l],n&&(i[l]=m?n.parentNode:n.parentNode===h)
}m&&E.filter(h,i,!0)
}},"":function(h,e,l){var k,j=K++,i=c;
typeof e==="string"&&!F.test(e)&&(e=e.toLowerCase(),k=e,i=d),i("parentNode",e,j,h,k,l)
},"~":function(h,e,l){var k,j=K++,i=c;
typeof e==="string"&&!F.test(e)&&(e=e.toLowerCase(),k=e,i=d),i("previousSibling",e,j,h,k,l)
}},find:{ID:function(f,e,h){if(typeof e.getElementById!=="undefined"&&!h){var g=e.getElementById(f[1]);
return g&&g.parentNode?[g]:[]
}},NAME:function(h,g){if(typeof g.getElementsByName!=="undefined"){var l=[],k=g.getElementsByName(h[1]);
for(var j=0,i=k.length;
j<i;
j++){k[j].getAttribute("name")===h[1]&&l.push(k[j])
}return l.length===0?null:l
}},TAG:function(f,e){if(typeof e.getElementsByTagName!=="undefined"){return e.getElementsByTagName(f[1])
}}},preFilter:{CLASS:function(j,i,p,o,n,m){j=" "+j[1].replace(G,"")+" ";
if(m){return j
}for(var l=0,k;
(k=i[l])!=null;
l++){k&&(n^(k.className&&(" "+k.className+" ").replace(/[\t\n\r]/g," ").indexOf(j)>=0)?p||o.push(k):p&&(i[l]=!1))
}return !1
},ID:function(e){return e[1].replace(G,"")
},TAG:function(f,e){return f[1].replace(G,"").toLowerCase()
},CHILD:function(f){if(f[1]==="nth"){f[2]||E.error(f[0]),f[2]=f[2].replace(/^\+|\s*/g,"");
var e=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(f[2]==="even"&&"2n"||f[2]==="odd"&&"2n+1"||!/\D/.test(f[2])&&"0n+"+f[2]||f[2]);
f[2]=e[1]+(e[2]||1)-0,f[3]=e[3]-0
}else{f[2]&&E.error(f[0])
}f[0]=K++;
return f
},ATTR:function(i,h,n,m,l,k){var j=i[1]=i[1].replace(G,"");
!k&&D.attrMap[j]&&(i[1]=D.attrMap[j]),i[4]=(i[4]||i[5]||"").replace(G,""),i[2]==="~="&&(i[4]=" "+i[4]+" ");
return i
},PSEUDO:function(a,l,k,j,i){if(a[1]==="not"){if((L.exec(a[3])||"").length>1||/^\w/.test(a[3])){a[3]=E(a[3],null,null,l)
}else{var h=E.filter(a[3],l,k,!0^i);
k||j.push.apply(j,h);
return !1
}}else{if(D.match.POS.test(a[0])||D.match.CHILD.test(a[0])){return !0
}}return a
},POS:function(e){e.unshift(!0);
return e
}},filters:{enabled:function(e){return e.disabled===!1&&e.type!=="hidden"
},disabled:function(e){return e.disabled===!0
},checked:function(e){return e.checked===!0
},selected:function(e){e.parentNode&&e.parentNode.selectedIndex;
return e.selected===!0
},parent:function(e){return !!e.firstChild
},empty:function(e){return !e.firstChild
},has:function(f,e,g){return !!E(g[3],f).length
},header:function(e){return/h\d/i.test(e.nodeName)
},text:function(f){var e=f.getAttribute("type"),g=f.type;
return"text"===g&&(e===g||e===null)
},radio:function(e){return"radio"===e.type
},checkbox:function(e){return"checkbox"===e.type
},file:function(e){return"file"===e.type
},password:function(e){return"password"===e.type
},submit:function(e){return"submit"===e.type
},image:function(e){return"image"===e.type
},reset:function(e){return"reset"===e.type
},button:function(e){return"button"===e.type||e.nodeName.toLowerCase()==="button"
},input:function(e){return/input|select|textarea|button/i.test(e.nodeName)
}},setFilters:{first:function(f,e){return e===0
},last:function(f,e,h,g){return e===g.length-1
},even:function(f,e){return e%2===0
},odd:function(f,e){return e%2===1
},lt:function(f,e,g){return e<g[3]-0
},gt:function(f,e,g){return e>g[3]-0
},nth:function(f,e,g){return g[3]-0===e
},eq:function(f,e,g){return g[3]-0===e
}},filter:{PSEUDO:function(r,q,p,o){var n=q[1],m=D.filters[n];
if(m){return m(r,p,q,o)
}if(n==="contains"){return(r.textContent||r.innerText||E.getText([r])||"").indexOf(q[3])>=0
}if(n==="not"){var l=q[3];
for(var k=0,j=l.length;
k<j;
k++){if(l[k]===r){return !1
}}return !0
}E.error(n)
},CHILD:function(t,s){var r=s[1],q=t;
switch(r){case"only":case"first":while(q=q.previousSibling){if(q.nodeType===1){return !1
}}if(r==="first"){return !0
}q=t;
case"last":while(q=q.nextSibling){if(q.nodeType===1){return !1
}}return !0;
case"nth":var p=s[2],o=s[3];
if(p===1&&o===0){return !0
}var n=s[0],m=t.parentNode;
if(m&&(m.sizcache!==n||!t.nodeIndex)){var l=0;
for(q=m.firstChild;
q;
q=q.nextSibling){q.nodeType===1&&(q.nodeIndex=++l)
}m.sizcache=n
}var k=t.nodeIndex-o;
return p===0?k===0:k%p===0&&k/p>=0
}},ID:function(f,e){return f.nodeType===1&&f.getAttribute("id")===e
},TAG:function(f,e){return e==="*"&&f.nodeType===1||f.nodeName.toLowerCase()===e
},CLASS:function(f,e){return(" "+(f.className||f.getAttribute("class"))+" ").indexOf(e)>-1
},ATTR:function(i,h){var n=h[1],m=D.attrHandle[n]?D.attrHandle[n](i):i[n]!=null?i[n]:i.getAttribute(n),l=m+"",k=h[2],j=h[4];
return m==null?k==="!=":k==="="?l===j:k==="*="?l.indexOf(j)>=0:k==="~="?(" "+l+" ").indexOf(j)>=0:j?k==="!="?l!==j:k==="^="?l.indexOf(j)===0:k==="$="?l.substr(l.length-j.length)===j:k==="|="?l===j||l.substr(0,j.length+1)===j+"-":!1:l&&m!==!1
},POS:function(h,g,l,k){var j=g[2],i=D.setFilters[j];
if(i){return i(h,l,g,k)
}}}},C=D.match.POS,B=function(f,e){return"\\"+(e-0+1)
};
for(var A in D.match){D.match[A]=new RegExp(D.match[A].source+/(?![^\[]*\])(?![^\(]*\))/.source),D.leftMatch[A]=new RegExp(/(^(?:.|\r|\n)*?)/.source+D.match[A].source.replace(/\\(\d+)/g,B))
}var z=function(f,e){f=Array.prototype.slice.call(f,0);
if(e){e.push.apply(e,f);
return e
}return f
};
try{Array.prototype.slice.call(aN.documentElement.childNodes,0)[0].nodeType
}catch(y){z=function(g,f){var j=0,i=f||[];
if(J.call(g)==="[object Array]"){Array.prototype.push.apply(i,g)
}else{if(typeof g.length==="number"){for(var h=g.length;
j<h;
j++){i.push(g[j])
}}else{for(;
g[j];
j++){i.push(g[j])
}}}return i
}
}var x,w;
aN.documentElement.compareDocumentPosition?x=function(f,e){if(f===e){I=!0;
return 0
}if(!f.compareDocumentPosition||!e.compareDocumentPosition){return f.compareDocumentPosition?-1:1
}return f.compareDocumentPosition(e)&4?-1:1
}:(x=function(t,s){var r,q,p=[],o=[],n=t.parentNode,m=s.parentNode,l=n;
if(t===s){I=!0;
return 0
}if(n===m){return w(t,s)
}if(!n){return -1
}if(!m){return 1
}while(l){p.unshift(l),l=l.parentNode
}l=m;
while(l){o.unshift(l),l=l.parentNode
}r=p.length,q=o.length;
for(var g=0;
g<r&&g<q;
g++){if(p[g]!==o[g]){return w(p[g],o[g])
}}return g===r?w(t,o[g],-1):w(p[g],s,1)
},w=function(f,e,h){if(f===e){return h
}var g=f.nextSibling;
while(g){if(g===e){return -1
}g=g.nextSibling
}return 1
}),E.getText=function(f){var e="",h;
for(var g=0;
f[g];
g++){h=f[g],h.nodeType===3||h.nodeType===4?e+=h.nodeValue:h.nodeType!==8&&(e+=E.getText(h.childNodes))
}return e
},function(){var f=aN.createElement("div"),h="script"+(new Date).getTime(),g=aN.documentElement;
f.innerHTML="<a name='"+h+"'/>",g.insertBefore(f,g.firstChild),aN.getElementById(h)&&(D.find.ID=function(i,l,k){if(typeof l.getElementById!=="undefined"&&!k){var j=l.getElementById(i[1]);
return j?j.id===i[1]||typeof j.getAttributeNode!=="undefined"&&j.getAttributeNode("id").nodeValue===i[1]?[j]:aP:[]
}},D.filter.ID=function(i,e){var j=typeof i.getAttributeNode!=="undefined"&&i.getAttributeNode("id");
return i.nodeType===1&&j&&j.nodeValue===e
}),g.removeChild(f),g=f=null
}(),function(){var e=aN.createElement("div");
e.appendChild(aN.createComment("")),e.getElementsByTagName("*").length>0&&(D.find.TAG=function(g,f){var j=f.getElementsByTagName(g[1]);
if(g[1]==="*"){var i=[];
for(var h=0;
j[h];
h++){j[h].nodeType===1&&i.push(j[h])
}j=i
}return j
}),e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!=="undefined"&&e.firstChild.getAttribute("href")!=="#"&&(D.attrHandle.href=function(f){return f.getAttribute("href",2)
}),e=null
}(),aN.querySelectorAll&&function(){var g=E,f=aN.createElement("div"),i="__sizzle__";
f.innerHTML="<p class='TEST'></p>";
if(!f.querySelectorAll||f.querySelectorAll(".TEST").length!==0){E=function(Q,P,O,N){P=P||aN;
if(!N&&!E.isXML(P)){var M=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(Q);
if(M&&(P.nodeType===1||P.nodeType===9)){if(M[1]){return z(P.getElementsByTagName(Q),O)
}if(M[2]&&D.find.CLASS&&P.getElementsByClassName){return z(P.getElementsByClassName(M[2]),O)
}}if(P.nodeType===9){if(Q==="body"&&P.body){return z([P.body],O)
}if(M&&M[3]){var v=P.getElementById(M[3]);
if(!v||!v.parentNode){return z([],O)
}if(v.id===M[3]){return z([v],O)
}}try{return z(P.querySelectorAll(Q),O)
}catch(u){}}else{if(P.nodeType===1&&P.nodeName.toLowerCase()!=="object"){var t=P,p=P.getAttribute("id"),l=p||i,k=P.parentNode,a=/^\s*[+~]/.test(Q);
p?l=l.replace(/'/g,"\\$&"):P.setAttribute("id",l),a&&k&&(P=P.parentNode);
try{if(!a||k){return z(P.querySelectorAll("[id='"+l+"'] "+Q),O)
}}catch(R){}finally{p||t.removeAttribute("id")
}}}}return g(Q,P,O,N)
};
for(var h in g){E[h]=g[h]
}f=null
}}(),function(){var h=aN.documentElement,g=h.matchesSelector||h.mozMatchesSelector||h.webkitMatchesSelector||h.msMatchesSelector;
if(g){var k=!g.call(aN.createElement("div"),"div"),j=!1;
try{g.call(aN.documentElement,"[test!='']:sizzle")
}catch(i){j=!0
}E.matchesSelector=function(e,n){n=n.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");
if(!E.isXML(e)){try{if(j||!D.match.PSEUDO.test(n)&&!/!=/.test(n)){var m=g.call(e,n);
if(m||!k||e.document&&e.document.nodeType!==11){return m
}}}catch(l){}}return E(n,null,null,[e]).length>0
}
}}(),function(){var e=aN.createElement("div");
e.innerHTML="<div class='test e'></div><div class='test'></div>";
if(e.getElementsByClassName&&e.getElementsByClassName("e").length!==0){e.lastChild.className="e";
if(e.getElementsByClassName("e").length===1){return
}D.order.splice(1,0,"CLASS"),D.find.CLASS=function(g,f,h){if(typeof f.getElementsByClassName!=="undefined"&&!h){return f.getElementsByClassName(g[1])
}},e=null
}}(),aN.documentElement.contains?E.contains=function(f,e){return f!==e&&(f.contains?f.contains(e):!0)
}:aN.documentElement.compareDocumentPosition?E.contains=function(f,e){return !!(f.compareDocumentPosition(e)&16)
}:E.contains=function(){return !1
},E.isXML=function(f){var e=(f?f.ownerDocument||f:0).documentElement;
return e?e.nodeName!=="HTML":!1
};
var b=function(j,i){var p,o=[],n="",m=i.nodeType?[i]:i;
while(p=D.match.PSEUDO.exec(j)){n+=p[0],j=j.replace(D.match.PSEUDO,"")
}j=D.relative[j]?j+"*":j;
for(var l=0,k=m.length;
l<k;
l++){E(j,m[l],o)
}return E.filter(n,o)
};
aL.find=E,aL.expr=E.selectors,aL.expr[":"]=aL.expr.filters,aL.unique=E.uniqueSort,aL.text=E.getText,aL.isXMLDoc=E.isXML,aL.contains=E.contains
}();
var cs=/Until$/,cr=/^(?:parents|prevUntil|prevAll)/,cq=/,/,cp=/^.[^:#\[\.,]*$/,co=Array.prototype.slice,cm=aL.expr.match.POS,cl={children:!0,contents:!0,next:!0,prev:!0};
aL.fn.extend({find:function(i){var d=this.pushStack("","find",i),n=0;
for(var m=0,l=this.length;
m<l;
m++){n=d.length,aL.find(i,this[m],d);
if(m>0){for(var k=n;
k<d.length;
k++){for(var j=0;
j<n;
j++){if(d[j]===d[k]){d.splice(k--,1);
break
}}}}}return d
},has:function(d){var c=aL(d);
return this.filter(function(){for(var b=0,e=c.length;
b<e;
b++){if(aL.contains(this,c[b])){return !0
}}})
},not:function(b){return this.pushStack(b8(this,b,!1),"not",b)
},filter:function(b){return this.pushStack(b8(this,b,!0),"filter",b)
},is:function(b){return !!b&&aL.filter(b,this).length>0
},closest:function(v,u){var t=[],s,r,q=this[0];
if(aL.isArray(v)){var p,o,n={},m=1;
if(q&&v.length){for(s=0,r=v.length;
s<r;
s++){o=v[s],n[o]||(n[o]=aL.expr.match.POS.test(o)?aL(o,u||this.context):o)
}while(q&&q.ownerDocument&&q!==u){for(o in n){p=n[o],(p.jquery?p.index(q)>-1:aL(q).is(p))&&t.push({selector:o,elem:q,level:m})
}q=q.parentNode,m++
}}return t
}var d=cm.test(v)?aL(v,u||this.context):null;
for(s=0,r=this.length;
s<r;
s++){q=this[s];
while(q){if(d?d.index(q)>-1:aL.find.matchesSelector(q,v)){t.push(q);
break
}q=q.parentNode;
if(!q||!q.ownerDocument||q===u){break
}}}t=t.length>1?aL.unique(t):t;
return this.pushStack(t,"closest",v)
},index:function(b){if(!b||typeof b==="string"){return aL.inArray(this[0],b?aL(b):this.parent().children())
}return aL.inArray(b.jquery?b[0]:b,this)
},add:function(f,d){var h=typeof f==="string"?aL(f,d):aL.makeArray(f),g=aL.merge(this.get(),h);
return this.pushStack(cj(h[0])||cj(g[0])?g:aL.unique(g))
},andSelf:function(){return this.add(this.prevObject)
}}),aL.each({parent:function(d){var c=d.parentNode;
return c&&c.nodeType!==11?c:null
},parents:function(b){return aL.dir(b,"parentNode")
},parentsUntil:function(e,d,f){return aL.dir(e,"parentNode",f)
},next:function(b){return aL.nth(b,2,"nextSibling")
},prev:function(b){return aL.nth(b,2,"previousSibling")
},nextAll:function(b){return aL.dir(b,"nextSibling")
},prevAll:function(b){return aL.dir(b,"previousSibling")
},nextUntil:function(e,d,f){return aL.dir(e,"nextSibling",f)
},prevUntil:function(e,d,f){return aL.dir(e,"previousSibling",f)
},siblings:function(b){return aL.sibling(b.parentNode.firstChild,b)
},children:function(b){return aL.sibling(b.firstChild)
},contents:function(b){return aL.nodeName(b,"iframe")?b.contentDocument||b.contentWindow.document:aL.makeArray(b.childNodes)
}},function(d,c){aL.fn[d]=function(i,h){var b=aL.map(this,c,i),a=co.call(arguments);
cs.test(d)||(h=i),h&&typeof h==="string"&&(b=aL.filter(h,b)),b=this.length>1&&!cl[d]?aL.unique(b):b,(this.length>1||cq.test(h))&&cr.test(d)&&(b=b.reverse());
return this.pushStack(b,d,a.join(","))
}
}),aL.extend({filter:function(e,d,f){f&&(e=":not("+e+")");
return d.length===1?aL.find.matchesSelector(d[0],e)?[d[0]]:[]:aL.find.matches(e,d)
},dir:function(b,j,i){var h=[],d=b[j];
while(d&&d.nodeType!==9&&(i===aP||d.nodeType!==1||!aL(d).is(i))){d.nodeType===1&&h.push(d),d=d[j]
}return h
},nth:function(g,f,j,i){f=f||1;
var h=0;
for(;
g;
g=g[j]){if(g.nodeType===1&&++h===f){break
}}return g
},sibling:function(e,d){var f=[];
for(;
e;
e=e.nextSibling){e.nodeType===1&&e!==d&&f.push(e)
}return f
}});
var b6=/ jQuery\d+="(?:\d+|null)"/g,b4=/^\s+/,b2=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,b0=/<([\w:]+)/,a8=/<tbody/i,a6=/<|&#?\w+;/,a4=/<(?:script|object|embed|option|style)/i,a2=/checked\s*(?:[^=]|=\s*.checked.)/i,a0={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};
a0.optgroup=a0.option,a0.tbody=a0.tfoot=a0.colgroup=a0.caption=a0.thead,a0.th=a0.td,aL.support.htmlSerialize||(a0._default=[1,"div<div>","</div>"]),aL.fn.extend({text:function(b){if(aL.isFunction(b)){return this.each(function(a){var d=aL(this);
d.text(b.call(this,a,d.text()))
})
}if(typeof b!=="object"&&b!==aP){return this.empty().append((this[0]&&this[0].ownerDocument||aN).createTextNode(b))
}return aL.text(this)
},wrapAll:function(d){if(aL.isFunction(d)){return this.each(function(a){aL(this).wrapAll(d.call(this,a))
})
}if(this[0]){var c=aL(d,this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode&&c.insertBefore(this[0]),c.map(function(){var b=this;
while(b.firstChild&&b.firstChild.nodeType===1){b=b.firstChild
}return b
}).append(this)
}return this
},wrapInner:function(b){if(aL.isFunction(b)){return this.each(function(a){aL(this).wrapInner(b.call(this,a))
})
}return this.each(function(){var a=aL(this),d=a.contents();
d.length?d.wrapAll(b):a.append(b)
})
},wrap:function(b){return this.each(function(){aL(this).wrapAll(b)
})
},unwrap:function(){return this.parent().each(function(){aL.nodeName(this,"body")||aL(this).replaceWith(this.childNodes)
}).end()
},append:function(){return this.domManip(arguments,!0,function(b){this.nodeType===1&&this.appendChild(b)
})
},prepend:function(){return this.domManip(arguments,!0,function(b){this.nodeType===1&&this.insertBefore(b,this.firstChild)
})
},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,!1,function(c){this.parentNode.insertBefore(c,this)
})
}if(arguments.length){var b=aL(arguments[0]);
b.push.apply(b,this.toArray());
return this.pushStack(b,"before",arguments)
}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,!1,function(c){this.parentNode.insertBefore(c,this.nextSibling)
})
}if(arguments.length){var b=this.pushStack(this,"after",arguments);
b.push.apply(b,aL(arguments[0]).toArray());
return b
}},remove:function(f,d){for(var h=0,g;
(g=this[h])!=null;
h++){if(!f||aL.filter(f,[g]).length){!d&&g.nodeType===1&&(aL.cleanData(g.getElementsByTagName("*")),aL.cleanData([g])),g.parentNode&&g.parentNode.removeChild(g)
}}return this
},empty:function(){for(var d=0,c;
(c=this[d])!=null;
d++){c.nodeType===1&&aL.cleanData(c.getElementsByTagName("*"));
while(c.firstChild){c.removeChild(c.firstChild)
}}return this
},clone:function(d,c){d=d==null?!1:d,c=c==null?d:c;
return this.map(function(){return aL.clone(this,d,c)
})
},html:function(b){if(b===aP){return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(b6,""):null
}if(typeof b!=="string"||a4.test(b)||!aL.support.leadingWhitespace&&b4.test(b)||a0[(b0.exec(b)||["",""])[1].toLowerCase()]){aL.isFunction(b)?this.each(function(a){var e=aL(this);
e.html(b.call(this,a,e.html()))
}):this.empty().append(b)
}else{b=b.replace(b2,"<$1></$2>");
try{for(var h=0,g=this.length;
h<g;
h++){this[h].nodeType===1&&(aL.cleanData(this[h].getElementsByTagName("*")),this[h].innerHTML=b)
}}catch(d){this.empty().append(b)
}}return this
},replaceWith:function(b){if(this[0]&&this[0].parentNode){if(aL.isFunction(b)){return this.each(function(a){var f=aL(this),d=f.html();
f.replaceWith(b.call(this,a,d))
})
}typeof b!=="string"&&(b=aL(b).detach());
return this.each(function(){var a=this.nextSibling,d=this.parentNode;
aL(this).remove(),a?aL(a).before(b):aL(d).append(b)
})
}return this.length?this.pushStack(aL(aL.isFunction(b)?b():b),"replaceWith",b):this
},detach:function(b){return this.remove(b,!0)
},domManip:function(x,w,v){var u,t,s,r,q=x[0],p=[];
if(!aL.support.checkClone&&arguments.length===3&&typeof q==="string"&&a2.test(q)){return this.each(function(){aL(this).domManip(x,w,v,!0)
})
}if(aL.isFunction(q)){return this.each(function(c){var a=aL(this);
x[0]=q.call(this,c,w?a.html():aP),a.domManip(x,w,v)
})
}if(this[0]){r=q&&q.parentNode,aL.support.parentNode&&r&&r.nodeType===11&&r.childNodes.length===this.length?u={fragment:r}:u=aL.buildFragment(x,this,p),s=u.fragment,s.childNodes.length===1?t=s=s.firstChild:t=s.firstChild;
if(t){w=w&&aL.nodeName(t,"tr");
for(var o=0,d=this.length,b=d-1;
o<d;
o++){v.call(w?c1(this[o],t):this[o],u.cacheable||d>1&&o<b?aL.clone(s,!0,!0):s)
}}p.length&&aL.each(p,b7)
}return this
}}),aL.buildFragment=function(d,c,n){var m,l,k,j=c&&c[0]?c[0].ownerDocument||c[0]:aN;
d.length===1&&typeof d[0]==="string"&&d[0].length<512&&j===aN&&d[0].charAt(0)==="<"&&!a4.test(d[0])&&(aL.support.checkClone||!a2.test(d[0]))&&(l=!0,k=aL.fragments[d[0]],k&&(k!==1&&(m=k))),m||(m=j.createDocumentFragment(),aL.clean(d,j,m,n)),l&&(aL.fragments[d[0]]=k?m:1);
return{fragment:m,cacheable:l}
},aL.fragments={},aL.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(d,c){aL.fn[d]=function(o){var n=[],m=aL(o),l=this.length===1&&this[0].parentNode;
if(l&&l.nodeType===11&&l.childNodes.length===1&&m.length===1){m[c](this[0]);
return this
}for(var k=0,b=m.length;
k<b;
k++){var a=(k>0?this.clone(!0):this).get();
aL(m[k])[c](a),n=n.concat(a)
}return this.pushStack(n,d,m.selector)
}
}),aL.extend({clone:function(i,d,n){var m=i.cloneNode(!0),l,k,j;
if((!aL.support.noCloneEvent||!aL.support.noCloneChecked)&&(i.nodeType===1||i.nodeType===11)&&!aL.isXMLDoc(i)){ck(i,m),l=b9(i),k=b9(m);
for(j=0;
l[j];
++j){ck(l[j],k[j])
}}if(d){aT(i,m);
if(n){l=b9(i),k=b9(m);
for(j=0;
l[j];
++j){aT(l[j],k[j])
}}}return m
},clean:function(B,A,z,y){A=A||aN,typeof A.createElement==="undefined"&&(A=A.ownerDocument||A[0]&&A[0].ownerDocument||aN);
var x=[];
for(var w=0,v;
(v=B[w])!=null;
w++){typeof v==="number"&&(v+="");
if(!v){continue
}if(typeof v!=="string"||a6.test(v)){if(typeof v==="string"){v=v.replace(b2,"<$1></$2>");
var u=(b0.exec(v)||["",""])[1].toLowerCase(),t=a0[u]||a0._default,s=t[0],r=A.createElement("div");
r.innerHTML=t[1]+v+t[2];
while(s--){r=r.lastChild
}if(!aL.support.tbody){var q=a8.test(v),d=u==="table"&&!q?r.firstChild&&r.firstChild.childNodes:t[1]==="<table>"&&!q?r.childNodes:[];
for(var c=d.length-1;
c>=0;
--c){aL.nodeName(d[c],"tbody")&&!d[c].childNodes.length&&d[c].parentNode.removeChild(d[c])
}}!aL.support.leadingWhitespace&&b4.test(v)&&r.insertBefore(A.createTextNode(b4.exec(v)[0]),r.firstChild),v=r.childNodes
}}else{v=A.createTextNode(v)
}v.nodeType?x.push(v):x=aL.merge(x,v)
}if(z){for(w=0;
x[w];
w++){!y||!aL.nodeName(x[w],"script")||x[w].type&&x[w].type.toLowerCase()!=="text/javascript"?(x[w].nodeType===1&&x.splice.apply(x,[w+1,0].concat(aL.makeArray(x[w].getElementsByTagName("script")))),z.appendChild(x[w])):y.push(x[w].parentNode?x[w].parentNode.removeChild(x[w]):x[w])
}}return x
},cleanData:function(t){var s,r,q=aL.cache,p=aL.expando,o=aL.event.special,n=aL.support.deleteExpando;
for(var m=0,l;
(l=t[m])!=null;
m++){if(l.nodeName&&aL.noData[l.nodeName.toLowerCase()]){continue
}r=l[aL.expando];
if(r){s=q[r]&&q[r][p];
if(s&&s.events){for(var d in s.events){o[d]?aL.event.remove(l,d):aL.removeEvent(l,d,s.handle)
}s.handle&&(s.handle.elem=null)
}n?delete l[aL.expando]:l.removeAttribute&&l.removeAttribute(aL.expando),delete q[r]
}}}});
var b5=/alpha\([^)]*\)/i,b3=/opacity=([^)]*)/,b1=/-([a-z])/ig,a9=/([A-Z]|^ms)/g,a7=/^-?\d+(?:px)?$/i,a5=/^-?\d/,a3={position:"absolute",visibility:"hidden",display:"block"},a1=["Left","Right"],aZ=["Top","Bottom"],aY,aX,aW,aV=function(d,c){return c.toUpperCase()
};
aL.fn.css=function(b,d){if(arguments.length===2&&d===aP){return this
}return aL.access(this,b,d,!0,function(f,h,g){return g!==aP?aL.style(f,h,g):aL.css(f,h)
})
},aL.extend({cssHooks:{opacity:{get:function(e,d){if(d){var f=aY(e,"opacity","opacity");
return f===""?"1":f
}return e.style.opacity
}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0},cssProps:{"float":aL.support.cssFloat?"cssFloat":"styleFloat"},style:function(r,q,p,o){if(r&&r.nodeType!==3&&r.nodeType!==8&&r.style){var n,m=aL.camelCase(q),l=r.style,d=aL.cssHooks[m];
q=aL.cssProps[m]||m;
if(p===aP){if(d&&"get" in d&&(n=d.get(r,!1,o))!==aP){return n
}return l[q]
}if(typeof p==="number"&&isNaN(p)||p==null){return
}typeof p==="number"&&!aL.cssNumber[m]&&(p+="px");
if(!d||!("set" in d)||(p=d.set(r,p))!==aP){try{l[q]=p
}catch(b){}}}},css:function(b,l,k){var j,i=aL.camelCase(l),d=aL.cssHooks[i];
l=aL.cssProps[i]||i;
if(d&&"get" in d&&(j=d.get(b,!0,k))!==aP){return j
}if(aY){return aY(b,l,i)
}},swap:function(g,f,j){var i={};
for(var h in f){i[h]=g.style[h],g.style[h]=f[h]
}j.call(g);
for(h in f){g.style[h]=i[h]
}},camelCase:function(b){return b.replace(b1,aV)
}}),aL.curCSS=aL.css,aL.each(["height","width"],function(d,c){aL.cssHooks[c]={get:function(b,i,h){var g;
if(i){b.offsetWidth!==0?g=aU(b,c,h):aL.swap(b,a3,function(){g=aU(b,c,h)
});
if(g<=0){g=aY(b,c,c),g==="0px"&&aW&&(g=aW(b,c,c));
if(g!=null){return g===""||g==="auto"?"0px":g
}}if(g<0||g==null){g=b.style[c];
return g===""||g==="auto"?"0px":g
}return typeof g==="string"?g:g+"px"
}},set:function(f,e){if(!a7.test(e)){return e
}e=parseFloat(e);
if(e>=0){return e+"px"
}}}
}),aL.support.opacity||(aL.cssHooks.opacity={get:function(d,c){return b3.test((c&&d.currentStyle?d.currentStyle.filter:d.style.filter)||"")?parseFloat(RegExp.$1)/100+"":c?"1":""
},set:function(g,d){var j=g.style;
j.zoom=1;
var i=aL.isNaN(d)?"":"alpha(opacity="+d*100+")",h=j.filter||"";
j.filter=b5.test(h)?h.replace(b5,i):j.filter+" "+i
}}),aL(function(){aL.support.reliableMarginRight||(aL.cssHooks.marginRight={get:function(e,d){var f;
aL.swap(e,{display:"inline-block"},function(){d?f=aY(e,"margin-right","marginRight"):f=e.style.marginRight
});
return f
}})
}),aN.defaultView&&aN.defaultView.getComputedStyle&&(aX=function(b,l,k){var j,i,d;
k=k.replace(a9,"-$1").toLowerCase();
if(!(i=b.ownerDocument.defaultView)){return aP
}if(d=i.getComputedStyle(b,null)){j=d.getPropertyValue(k),j===""&&!aL.contains(b.ownerDocument.documentElement,b)&&(j=aL.style(b,k))
}return j
}),aN.documentElement.currentStyle&&(aW=function(h,g){var l,k=h.currentStyle&&h.currentStyle[g],j=h.runtimeStyle&&h.runtimeStyle[g],i=h.style;
!a7.test(k)&&a5.test(k)&&(l=i.left,j&&(h.runtimeStyle.left=h.currentStyle.left),i.left=g==="fontSize"?"1em":k||0,k=i.pixelLeft+"px",i.left=l,j&&(h.runtimeStyle.left=j));
return k===""?"auto":k
}),aY=aX||aW,aL.expr&&aL.expr.filters&&(aL.expr.filters.hidden=function(e){var d=e.offsetWidth,f=e.offsetHeight;
return d===0&&f===0||!aL.support.reliableHiddenOffsets&&(e.style.display||aL.css(e,"display"))==="none"
},aL.expr.filters.visible=function(b){return !aL.expr.filters.hidden(b)
});
var aS=/%20/g,aQ=/\[\]$/,aO=/\r?\n/g,aM=/#.*$/,aK=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,aI=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,aG=/^(?:about|app|app\-storage|.+\-extension|file|widget):$/,aE=/^(?:GET|HEAD)$/,aC=/^\/\//,c0=/\?/,cZ=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cY=/^(?:select|textarea)/i,cX=/\s+/,cW=/([?&])_=[^&]*/,cV=/(^|\-)([a-z])/g,cU=function(e,d,f){return d+f.toUpperCase()
},cT=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,cS=aL.fn.load,cR={},cQ={},cP,cO;
try{cP=aN.location.href
}catch(cN){cP=aN.createElement("a"),cP.href="",cP=cP.href
}cO=cT.exec(cP.toLowerCase())||[],aL.fn.extend({load:function(b,n,m){if(typeof b!=="string"&&cS){return cS.apply(this,arguments)
}if(!this.length){return this
}var l=b.indexOf(" ");
if(l>=0){var k=b.slice(l,b.length);
b=b.slice(0,l)
}var j="GET";
n&&(aL.isFunction(n)?(m=n,n=aP):typeof n==="object"&&(n=aL.param(n,aL.ajaxSettings.traditional),j="POST"));
var d=this;
aL.ajax({url:b,type:j,dataType:"html",data:n,complete:function(f,e,g){g=f.responseText,f.isResolved()&&(f.done(function(c){g=c
}),d.html(k?aL("<div>").append(g.replace(cZ,"")).find(k):g)),m&&d.each(m,[g,e,f])
}});
return this
},serialize:function(){return aL.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){return this.elements?aL.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||cY.test(this.nodeName)||aI.test(this.type))
}).map(function(e,d){var f=aL(this).val();
return f==null?null:aL.isArray(f)?aL.map(f,function(b,g){return{name:d.name,value:b.replace(aO,"\r\n")}
}):{name:d.name,value:f.replace(aO,"\r\n")}
}).get()
}}),aL.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(d,c){aL.fn[c]=function(b){return this.bind(c,b)
}
}),aL.each(["get","post"],function(b,d){aL[d]=function(c,j,i,h){aL.isFunction(j)&&(h=h||i,i=j,j=aP);
return aL.ajax({type:d,url:c,data:j,success:i,dataType:h})
}
}),aL.extend({getScript:function(b,d){return aL.get(b,aP,d,"script")
},getJSON:function(e,d,f){return aL.get(e,d,f,"json")
},ajaxSetup:function(e,d){d?aL.extend(!0,e,aL.ajaxSettings,d):(d=e,e=aL.extend(!0,aL.ajaxSettings,d));
for(var f in {context:1,url:1}){f in d?e[f]=d[f]:f in aL.ajaxSettings&&(e[f]=aL.ajaxSettings[f])
}return e
},ajaxSettings:{url:cP,isLocal:aG.test(cO[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":aR.String,"text html":!0,"text json":aL.parseJSON,"text xml":aL.parseXML}},ajaxPrefilter:cM(cR),ajaxTransport:cM(cQ),ajax:function(T,S){function A(m,i,g,f){if(E!==2){E=2,G&&clearTimeout(G),H=aP,J=f||"",B.readyState=m?4:0;
var e,r,p,o=g?cJ(R,B,g):aP,k,j;
if(m>=200&&m<300||m===304){if(R.ifModified){if(k=B.getResponseHeader("Last-Modified")){aL.lastModified[L]=k
}if(j=B.getResponseHeader("Etag")){aL.etag[L]=j
}}if(m===304){i="notmodified",e=!0
}else{try{r=cI(R,o),i="success",e=!0
}catch(h){i="parsererror",p=h
}}}else{p=i;
if(!i||m){i="error",m<0&&(m=0)
}}B.status=m,B.statusText=i,e?O.resolveWith(Q,[r,i,B]):O.rejectWith(Q,[B,i,p]),B.statusCode(M),M=aP,D&&P.trigger("ajax"+(e?"Success":"Error"),[B,R,e?r:p]),N.resolveWith(Q,[B,i]),D&&(P.trigger("ajaxComplete",[B,R]),--aL.active||aL.event.trigger("ajaxStop"))
}}typeof T==="object"&&(S=T,T=aP),S=S||{};
var R=aL.ajaxSetup({},S),Q=R.context||R,P=Q!==R&&(Q.nodeType||Q instanceof aL)?aL(Q):aL.event,O=aL.Deferred(),N=aL._Deferred(),M=R.statusCode||{},L,K={},J,I,H,G,F,E=0,D,C,B={readyState:0,setRequestHeader:function(e,c){E||(K[e.toLowerCase().replace(cV,cU)]=c);
return this
},getAllResponseHeaders:function(){return E===2?J:null
},getResponseHeader:function(e){var f;
if(E===2){if(!I){I={};
while(f=aK.exec(J)){I[f[1].toLowerCase()]=f[2]
}}f=I[e.toLowerCase()]
}return f===aP?null:f
},overrideMimeType:function(c){E||(R.mimeType=c);
return this
},abort:function(c){c=c||"abort",H&&H.abort(c),A(0,c);
return this
}};
O.promise(B),B.success=B.done,B.error=B.fail,B.complete=N.done,B.statusCode=function(e){if(e){var c;
if(E<2){for(c in e){M[c]=[M[c],e[c]]
}}else{c=e[B.status],B.then(c,c)
}}return this
},R.url=((T||R.url)+"").replace(aM,"").replace(aC,cO[1]+"//"),R.dataTypes=aL.trim(R.dataType||"*").toLowerCase().split(cX),R.crossDomain==null&&(F=cT.exec(R.url.toLowerCase()),R.crossDomain=F&&(F[1]!=cO[1]||F[2]!=cO[2]||(F[3]||(F[1]==="http:"?80:443))!=(cO[3]||(cO[1]==="http:"?80:443)))),R.data&&R.processData&&typeof R.data!=="string"&&(R.data=aL.param(R.data,R.traditional)),cL(cR,R,S,B);
if(E===2){return !1
}D=R.global,R.type=R.type.toUpperCase(),R.hasContent=!aE.test(R.type),D&&aL.active++===0&&aL.event.trigger("ajaxStart");
if(!R.hasContent){R.data&&(R.url+=(c0.test(R.url)?"&":"?")+R.data),L=R.url;
if(R.cache===!1){var z=aL.now(),d=R.url.replace(cW,"$1_="+z);
R.url=d+(d===R.url?(c0.test(R.url)?"&":"?")+"_="+z:"")
}}if(R.data&&R.hasContent&&R.contentType!==!1||S.contentType){K["Content-Type"]=R.contentType
}R.ifModified&&(L=L||R.url,aL.lastModified[L]&&(K["If-Modified-Since"]=aL.lastModified[L]),aL.etag[L]&&(K["If-None-Match"]=aL.etag[L])),K.Accept=R.dataTypes[0]&&R.accepts[R.dataTypes[0]]?R.accepts[R.dataTypes[0]]+(R.dataTypes[0]!=="*"?", */*; q=0.01":""):R.accepts["*"];
for(C in R.headers){B.setRequestHeader(C,R.headers[C])
}if(R.beforeSend&&(R.beforeSend.call(Q,B,R)===!1||E===2)){B.abort();
return !1
}for(C in {success:1,error:1,complete:1}){B[C](R[C])
}H=cL(cQ,R,S,B);
if(H){B.readyState=1,D&&P.trigger("ajaxSend",[B,R]),R.async&&R.timeout>0&&(G=setTimeout(function(){B.abort("timeout")
},R.timeout));
try{E=1,H.send(K,A)
}catch(b){status<2?A(-1,b):aL.error(b)
}}else{A(-1,"No Transport")
}return B
},param:function(b,j){var i=[],h=function(e,c){c=aL.isFunction(c)?c():c,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(c)
};
j===aP&&(j=aL.ajaxSettings.traditional);
if(aL.isArray(b)||b.jquery&&!aL.isPlainObject(b)){aL.each(b,function(){h(this.name,this.value)
})
}else{for(var d in b){cK(d,b[d],j,h)
}}return i.join("&").replace(aS,"+")
}}),aL.extend({active:0,lastModified:{},etag:{}});
var cF=aL.now(),cD=/(\=)\?(&|$)|\?\?/i;
aL.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return aL.expando+"_"+cF++
}}),aL.ajaxPrefilter("json jsonp",function(v,u,t){var s=typeof v.data==="string";
if(v.dataTypes[0]==="jsonp"||u.jsonpCallback||u.jsonp!=null||v.jsonp!==!1&&(cD.test(v.url)||s&&cD.test(v.data))){var r,q=v.jsonpCallback=aL.isFunction(v.jsonpCallback)?v.jsonpCallback():v.jsonpCallback,p=aR[q],o=v.url,n=v.data,d="$1"+q+"$2",a=function(){aR[q]=p,r&&aL.isFunction(p)&&aR[q](r[0])
};
v.jsonp!==!1&&(o=o.replace(cD,d),v.url===o&&(s&&(n=n.replace(cD,d)),v.data===n&&(o+=(/\?/.test(o)?"&":"?")+v.jsonp+"="+q))),v.url=o,v.data=n,aR[q]=function(b){r=[b]
},t.then(a,a),v.converters["script json"]=function(){r||aL.error(q+" was not called");
return r[0]
},v.dataTypes[0]="json";
return"script"
}}),aL.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(b){aL.globalEval(b);
return b
}}}),aL.ajaxPrefilter("script",function(b){b.cache===aP&&(b.cache=!1),b.crossDomain&&(b.type="GET",b.global=!1)
}),aL.ajaxTransport("script",function(b){if(b.crossDomain){var f,c=aN.head||aN.getElementsByTagName("head")[0]||aN.documentElement;
return{send:function(d,a){f=aN.createElement("script"),f.async="async",b.scriptCharset&&(f.charset=b.scriptCharset),f.src=b.url,f.onload=f.onreadystatechange=function(e,g){if(!f.readyState||/loaded|complete/.test(f.readyState)){f.onload=f.onreadystatechange=null,c&&f.parentNode&&c.removeChild(f),f=aP,g||a(200,"success")
}},c.insertBefore(f,c.firstChild)
},abort:function(){f&&f.onload(0,1)
}}
}});
var cB=aL.now(),cz,cx;
aL.ajaxSettings.xhr=aR.ActiveXObject?function(){return !this.isLocal&&cu()||c2()
}:cu,cx=aL.ajaxSettings.xhr(),aL.support.ajax=!!cx,aL.support.cors=cx&&"withCredentials" in cx,cx=aP,aL.support.ajax&&aL.ajaxTransport(function(b){if(!b.crossDomain||aL.support.cors){var d;
return{send:function(n,m){var l=b.xhr(),k,c;
b.username?l.open(b.type,b.url,b.async,b.username,b.password):l.open(b.type,b.url,b.async);
if(b.xhrFields){for(c in b.xhrFields){l[c]=b.xhrFields[c]
}}b.mimeType&&l.overrideMimeType&&l.overrideMimeType(b.mimeType),!b.crossDomain&&!n["X-Requested-With"]&&(n["X-Requested-With"]="XMLHttpRequest");
try{for(c in n){l.setRequestHeader(c,n[c])
}}catch(a){}l.send(b.hasContent&&b.data||null),d=function(v,u){var t,s,r,q,h;
try{if(d&&(u||l.readyState===4)){d=aP,k&&(l.onreadystatechange=aL.noop,delete cz[k]);
if(u){l.readyState!==4&&l.abort()
}else{t=l.status,r=l.getAllResponseHeaders(),q={},h=l.responseXML,h&&h.documentElement&&(q.xml=h),q.text=l.responseText;
try{s=l.statusText
}catch(g){s=""
}t||!b.isLocal||b.crossDomain?t===1223&&(t=204):t=q.text?200:404
}}}catch(f){u||m(-1,f)
}q&&m(t,s,q,r)
},b.async&&l.readyState!==4?(cz||(cz={},cw()),k=cB++,l.onreadystatechange=cz[k]=d):d()
},abort:function(){d&&d(0,1)
}}
}});
var cn={},av=/^(?:toggle|show|hide)$/,at=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,aq,ao=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];
aL.fn.extend({show:function(i,d,n){var m,l;
if(i||i===0){return this.animate(an("show",3),i,d,n)
}for(var k=0,j=this.length;
k<j;
k++){m=this[k],l=m.style.display,!aL._data(m,"olddisplay")&&l==="none"&&(l=m.style.display=""),l===""&&aL.css(m,"display")==="none"&&aL._data(m,"olddisplay",al(m.nodeName))
}for(k=0;
k<j;
k++){m=this[k],l=m.style.display;
if(l===""||l==="none"){m.style.display=aL._data(m,"olddisplay")||""
}}return this
},hide:function(h,d,l){if(h||h===0){return this.animate(an("hide",3),h,d,l)
}for(var k=0,j=this.length;
k<j;
k++){var i=aL.css(this[k],"display");
i!=="none"&&!aL._data(this[k],"olddisplay")&&aL._data(this[k],"olddisplay",i)
}for(k=0;
k<j;
k++){this[k].style.display="none"
}return this
},_toggle:aL.fn.toggle,toggle:function(f,d,h){var g=typeof f==="boolean";
aL.isFunction(f)&&aL.isFunction(d)?this._toggle.apply(this,arguments):f==null||g?this.each(function(){var a=g?f:aL(this).is(":hidden");
aL(this)[a?"show":"hide"]()
}):this.animate(an("toggle",3),f,d,h);
return this
},fadeTo:function(f,e,h,g){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:e},f,h,g)
},animate:function(g,d,j,i){var h=aL.speed(d,j,i);
if(aL.isEmptyObject(g)){return this.each(h.complete)
}return this[h.queue===!1?"each":"queue"](function(){var a=aL.extend({},h),o,n=this.nodeType===1,m=n&&aL(this).is(":hidden"),l=this;
for(o in g){var k=aL.camelCase(o);
o!==k&&(g[k]=g[o],delete g[o],o=k);
if(g[o]==="hide"&&m||g[o]==="show"&&!m){return a.complete.call(this)
}if(n&&(o==="height"||o==="width")){a.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];
if(aL.css(this,"display")==="inline"&&aL.css(this,"float")==="none"){if(aL.support.inlineBlockNeedsLayout){var f=al(this.nodeName);
f==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)
}else{this.style.display="inline-block"
}}}aL.isArray(g[o])&&((a.specialEasing=a.specialEasing||{})[o]=g[o][1],g[o]=g[o][0])
}a.overflow!=null&&(this.style.overflow="hidden"),a.curAnim=aL.extend({},g),aL.each(g,function(u,t){var s=new aL.fx(l,a,u);
if(av.test(t)){s[t==="toggle"?m?"show":"hide":t](g)
}else{var r=at.exec(t),q=s.cur();
if(r){var p=parseFloat(r[2]),b=r[3]||(aL.cssNumber[u]?"":"px");
b!=="px"&&(aL.style(l,u,(p||1)+b),q=(p||1)/s.cur()*q,aL.style(l,u,q+b)),r[1]&&(p=(r[1]==="-="?-1:1)*p+q),s.custom(q,p,b)
}else{s.custom(q,t,"")
}}});
return !0
})
},stop:function(e,d){var f=aL.timers;
e&&this.queue([]),this.each(function(){for(var b=f.length-1;
b>=0;
b--){f[b].elem===this&&(d&&f[b](!0),f.splice(b,1))
}}),d||this.dequeue();
return this
}}),aL.each({slideDown:an("show",1),slideUp:an("hide",1),slideToggle:an("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(d,c){aL.fn[d]=function(b,f,e){return this.animate(c,b,f,e)
}
}),aL.extend({speed:function(f,d,h){var g=f&&typeof f==="object"?aL.extend({},f):{complete:h||!h&&d||aL.isFunction(f)&&f,duration:f,easing:h&&d||d&&!aL.isFunction(d)&&d};
g.duration=aL.fx.off?0:typeof g.duration==="number"?g.duration:g.duration in aL.fx.speeds?aL.fx.speeds[g.duration]:aL.fx.speeds._default,g.old=g.complete,g.complete=function(){g.queue!==!1&&aL(this).dequeue(),aL.isFunction(g.old)&&g.old.call(this)
};
return g
},easing:{linear:function(f,e,h,g){return h+g*f
},swing:function(f,e,h,g){return(-Math.cos(f*Math.PI)/2+0.5)*g+h
}},timers:[],fx:function(e,d,f){this.options=d,this.elem=e,this.prop=f,d.orig||(d.orig={})
}}),aL.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(aL.fx.step[this.prop]||aL.fx.step._default)(this)
},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]
}var d,c=aL.css(this.elem,this.prop);
return isNaN(d=parseFloat(c))?!c||c==="auto"?0:c:d
},custom:function(h,d,l){function i(b){return k.step(b)
}var k=this,j=aL.fx;
this.startTime=aL.now(),this.start=h,this.end=d,this.unit=l||this.unit||(aL.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,i.elem=this.elem,i()&&aL.timers.push(i)&&!aq&&(aq=setInterval(j.tick,j.interval))
},show:function(){this.options.orig[this.prop]=aL.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),aL(this.elem).show()
},hide:function(){this.options.orig[this.prop]=aL.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)
},step:function(t){var s=aL.now(),r=!0;
if(t||s>=this.options.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),this.options.curAnim[this.prop]=!0;
for(var q in this.options.curAnim){this.options.curAnim[q]!==!0&&(r=!1)
}if(r){if(this.options.overflow!=null&&!aL.support.shrinkWrapBlocks){var p=this.elem,o=this.options;
aL.each(["","X","Y"],function(e,c){p.style["overflow"+c]=o.overflow[e]
})
}this.options.hide&&aL(this.elem).hide();
if(this.options.hide||this.options.show){for(var n in this.options.curAnim){aL.style(this.elem,n,this.options.orig[n])
}}this.options.complete.call(this.elem)
}return !1
}var m=s-this.startTime;
this.state=m/this.options.duration;
var l=this.options.specialEasing&&this.options.specialEasing[this.prop],d=this.options.easing||(aL.easing.swing?"swing":"linear");
this.pos=aL.easing[l||d](this.state,m,0,1,this.options.duration),this.now=this.start+(this.end-this.start)*this.pos,this.update();
return !0
}},aL.extend(aL.fx,{tick:function(){var d=aL.timers;
for(var c=0;
c<d.length;
c++){d[c]()||d.splice(c--,1)
}d.length||aL.fx.stop()
},interval:13,stop:function(){clearInterval(aq),aq=null
},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(b){aL.style(b.elem,"opacity",b.now)
},_default:function(b){b.elem.style&&b.elem.style[b.prop]!=null?b.elem.style[b.prop]=(b.prop==="width"||b.prop==="height"?Math.max(0,b.now):b.now)+b.unit:b.elem[b.prop]=b.now
}}}),aL.expr&&aL.expr.filters&&(aL.expr.filters.animated=function(b){return aL.grep(aL.timers,function(a){return b===a.elem
}).length
});
var ai=/^t(?:able|d|h)$/i,ag=/^(?:body|html)$/i;
"getBoundingClientRect" in aN.documentElement?aL.fn.offset=function(B){var A=this[0],z;
if(B){return this.each(function(a){aL.offset.setOffset(this,B,a)
})
}if(!A||!A.ownerDocument){return null
}if(A===A.ownerDocument.body){return aL.offset.bodyOffset(A)
}try{z=A.getBoundingClientRect()
}catch(y){}var x=A.ownerDocument,w=x.documentElement;
if(!z||!aL.contains(w,A)){return z?{top:z.top,left:z.left}:{top:0,left:0}
}var v=x.body,u=af(x),t=w.clientTop||v.clientTop||0,s=w.clientLeft||v.clientLeft||0,r=u.pageYOffset||aL.support.boxModel&&w.scrollTop||v.scrollTop,q=u.pageXOffset||aL.support.boxModel&&w.scrollLeft||v.scrollLeft,p=z.top+r-t,d=z.left+q-s;
return{top:p,left:d}
}:aL.fn.offset=function(x){var w=this[0];
if(x){return this.each(function(a){aL.offset.setOffset(this,x,a)
})
}if(!w||!w.ownerDocument){return null
}if(w===w.ownerDocument.body){return aL.offset.bodyOffset(w)
}aL.offset.initialize();
var v,u=w.offsetParent,t=w,s=w.ownerDocument,r=s.documentElement,q=s.body,p=s.defaultView,o=p?p.getComputedStyle(w,null):w.currentStyle,n=w.offsetTop,d=w.offsetLeft;
while((w=w.parentNode)&&w!==q&&w!==r){if(aL.offset.supportsFixedPosition&&o.position==="fixed"){break
}v=p?p.getComputedStyle(w,null):w.currentStyle,n-=w.scrollTop,d-=w.scrollLeft,w===u&&(n+=w.offsetTop,d+=w.offsetLeft,aL.offset.doesNotAddBorder&&(!aL.offset.doesAddBorderForTableAndCells||!ai.test(w.nodeName))&&(n+=parseFloat(v.borderTopWidth)||0,d+=parseFloat(v.borderLeftWidth)||0),t=u,u=w.offsetParent),aL.offset.subtractsBorderForOverflowNotVisible&&v.overflow!=="visible"&&(n+=parseFloat(v.borderTopWidth)||0,d+=parseFloat(v.borderLeftWidth)||0),o=v
}if(o.position==="relative"||o.position==="static"){n+=q.offsetTop,d+=q.offsetLeft
}aL.offset.supportsFixedPosition&&o.position==="fixed"&&(n+=Math.max(r.scrollTop,q.scrollTop),d+=Math.max(r.scrollLeft,q.scrollLeft));
return{top:n,left:d}
},aL.offset={initialize:function(){var d=aN.body,c=aN.createElement("div"),p,o,n,m,l=parseFloat(aL.css(d,"marginTop"))||0,k="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
aL.extend(c.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),c.innerHTML=k,d.insertBefore(c,d.firstChild),p=c.firstChild,o=p.firstChild,m=p.nextSibling.firstChild.firstChild,this.doesNotAddBorder=o.offsetTop!==5,this.doesAddBorderForTableAndCells=m.offsetTop===5,o.style.position="fixed",o.style.top="20px",this.supportsFixedPosition=o.offsetTop===20||o.offsetTop===15,o.style.position=o.style.top="",p.style.overflow="hidden",p.style.position="relative",this.subtractsBorderForOverflowNotVisible=o.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=d.offsetTop!==l,d.removeChild(c),aL.offset.initialize=aL.noop
},bodyOffset:function(e){var d=e.offsetTop,f=e.offsetLeft;
aL.offset.initialize(),aL.offset.doesNotIncludeMarginInBodyOffset&&(d+=parseFloat(aL.css(e,"marginTop"))||0,f+=parseFloat(aL.css(e,"marginLeft"))||0);
return{top:d,left:f}
},setOffset:function(z,y,x){var w=aL.css(z,"position");
w==="static"&&(z.style.position="relative");
var v=aL(z),u=v.offset(),t=aL.css(z,"top"),s=aL.css(z,"left"),r=(w==="absolute"||w==="fixed")&&aL.inArray("auto",[t,s])>-1,q={},p={},o,d;
r&&(p=v.position()),o=r?p.top:parseInt(t,10)||0,d=r?p.left:parseInt(s,10)||0,aL.isFunction(y)&&(y=y.call(z,x,u)),y.top!=null&&(q.top=y.top-u.top+o),y.left!=null&&(q.left=y.left-u.left+d),"using" in y?y.using.call(z,q):v.css(q)
}},aL.fn.extend({position:function(){if(!this[0]){return null
}var f=this[0],d=this.offsetParent(),h=this.offset(),g=ag.test(d[0].nodeName)?{top:0,left:0}:d.offset();
h.top-=parseFloat(aL.css(f,"marginTop"))||0,h.left-=parseFloat(aL.css(f,"marginLeft"))||0,g.top+=parseFloat(aL.css(d[0],"borderTopWidth"))||0,g.left+=parseFloat(aL.css(d[0],"borderLeftWidth"))||0;
return{top:h.top-g.top,left:h.left-g.left}
},offsetParent:function(){return this.map(function(){var b=this.offsetParent||aN.body;
while(b&&(!ag.test(b.nodeName)&&aL.css(b,"position")==="static")){b=b.offsetParent
}return b
})
}}),aL.each(["Left","Top"],function(b,f){var d="scroll"+f;
aL.fn[d]=function(h){var e=this[0],a;
if(!e){return null
}if(h!==aP){return this.each(function(){a=af(this),a?a.scrollTo(b?aL(a).scrollLeft():h,b?h:aL(a).scrollTop()):this[d]=h
})
}a=af(e);
return a?"pageXOffset" in a?a[b?"pageYOffset":"pageXOffset"]:aL.support.boxModel&&a.document.documentElement[d]||a.document.body[d]:e[d]
}
}),aL.each(["Height","Width"],function(b,f){var d=f.toLowerCase();
aL.fn["inner"+f]=function(){return this[0]?parseFloat(aL.css(this[0],d,"padding")):null
},aL.fn["outer"+f]=function(c){return this[0]?parseFloat(aL.css(this[0],d,c?"margin":"border")):null
},aL.fn[d]=function(c){var l=this[0];
if(!l){return c==null?null:this
}if(aL.isFunction(c)){return this.each(function(a){var g=aL(this);
g[d](c.call(this,a,g[d]()))
})
}if(aL.isWindow(l)){var k=l.document.documentElement["client"+f];
return l.document.compatMode==="CSS1Compat"&&k||l.document.body["client"+f]||k
}if(l.nodeType===9){return Math.max(l.documentElement["client"+f],l.body["scroll"+f],l.documentElement["scroll"+f],l.body["offset"+f],l.documentElement["offset"+f])
}if(c===aP){var j=aL.css(l,d),e=parseFloat(j);
return aL.isNaN(e)?j:e
}return this.css(d,typeof c==="string"?c:c+"px")
}
}),aR.jQuery=aR.$=aL
})(window);