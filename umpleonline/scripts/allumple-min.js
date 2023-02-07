var Prototype={Version:"1.7.1",Browser:(function(){var b=navigator.userAgent;var a=Object.prototype.toString.call(window.opera)=="[object Opera]";
return{IE:!!window.attachEvent&&!a,Opera:a,WebKit:b.indexOf("AppleWebKit/")>-1,Gecko:b.indexOf("Gecko")>-1&&b.indexOf("KHTML")===-1,MobileSafari:/Apple.*Mobile/.test(b)}
})(),BrowserFeatures:{XPath:!!document.evaluate,SelectorsAPI:!!document.querySelector,ElementExtensions:(function(){var a=window.Element||window.HTMLElement;
return !!(a&&a.prototype)})(),SpecificElementExtensions:(function(){if(typeof window.HTMLDivElement!=="undefined"){return true}var c=document.createElement("div"),b=document.createElement("form"),a=false;
if(c.__proto__&&(c.__proto__!==b.__proto__)){a=true}c=b=null;return a})()},ScriptFragment:"<script[^>]*>([\\S\\s]*?)<\/script\\s*>",JSONFilter:/^\/\*-secure-([\s\S]*)\*\/\s*$/,emptyFunction:function(){},K:function(a){return a
}};if(Prototype.Browser.MobileSafari){Prototype.BrowserFeatures.SpecificElementExtensions=false}var Class=(function(){var d=(function(){for(var e in {toString:1}){if(e==="toString"){return false
}}return true})();function a(){}function b(){var h=null,g=$A(arguments);if(Object.isFunction(g[0])){h=g.shift()}function e(){this.initialize.apply(this,arguments)
}Object.extend(e,Class.Methods);e.superclass=h;e.subclasses=[];if(h){a.prototype=h.prototype;e.prototype=new a;h.subclasses.push(e)}for(var f=0,j=g.length;
f<j;f++){e.addMethods(g[f])}if(!e.prototype.initialize){e.prototype.initialize=Prototype.emptyFunction}e.prototype.constructor=e;return e
}function c(m){var g=this.superclass&&this.superclass.prototype,f=Object.keys(m);if(d){if(m.toString!=Object.prototype.toString){f.push("toString")
}if(m.valueOf!=Object.prototype.valueOf){f.push("valueOf")}}for(var e=0,h=f.length;e<h;e++){var k=f[e],j=m[k];if(g&&Object.isFunction(j)&&j.argumentNames()[0]=="$super"){var n=j;
j=(function(o){return function(){return g[o].apply(this,arguments)}})(k).wrap(n);j.valueOf=(function(o){return function(){return o.valueOf.call(o)
}})(n);j.toString=(function(o){return function(){return o.toString.call(o)}})(n)}this.prototype[k]=j}return this}return{create:b,Methods:{addMethods:c}}
})();(function(){var A=Object.prototype.toString,m=Object.prototype.hasOwnProperty,B="Null",D="Undefined",M="Boolean",y="Number",x="String",K="Object",j="[object Function]",d="[object Boolean]",k="[object Number]",f="[object String]",b="[object Array]",J="[object Date]",e=window.JSON&&typeof JSON.stringify==="function"&&JSON.stringify(0)==="0"&&typeof JSON.stringify(Prototype.K)==="undefined";
var s=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var a=(function(){for(var N in {toString:1}){if(N==="toString"){return false
}}return true})();function F(O){switch(O){case null:return B;case (void 0):return D}var N=typeof O;switch(N){case"boolean":return M;case"number":return y;
case"string":return x}return K}function h(N,P){for(var O in P){N[O]=P[O]}return N}function n(N){try{if(q(N)){return"undefined"}if(N===null){return"null"
}return N.inspect?N.inspect():String(N)}catch(O){if(O instanceof RangeError){return"..."}throw O}}function C(N){return o("",{"":N},[])
}function o(W,T,U){var V=T[W];if(F(V)===K&&typeof V.toJSON==="function"){V=V.toJSON(W)}var P=A.call(V);switch(P){case k:case d:case f:V=V.valueOf()
}switch(V){case null:return"null";case true:return"true";case false:return"false"}var S=typeof V;switch(S){case"string":return V.inspect(true);
case"number":return isFinite(V)?String(V):"null";case"object":for(var O=0,N=U.length;O<N;O++){if(U[O]===V){throw new TypeError("Cyclic reference to '"+V+"' in object")
}}U.push(V);var R=[];if(P===b){for(var O=0,N=V.length;O<N;O++){var Q=o(O,V,U);R.push(typeof Q==="undefined"?"null":Q)}R="["+R.join(",")+"]"
}else{var X=Object.keys(V);for(var O=0,N=X.length;O<N;O++){var W=X[O],Q=o(W,V,U);if(typeof Q!=="undefined"){R.push(W.inspect(true)+":"+Q)
}}R="{"+R.join(",")+"}"}U.pop();return R}}function L(N){return JSON.stringify(N)}function E(N){return $H(N).toQueryString()}function r(N){return N&&N.toHTML?N.toHTML():String.interpret(N)
}function z(N){if(F(N)!==K){throw new TypeError()}var P=[];for(var Q in N){if(m.call(N,Q)){P.push(Q)}}if(a){for(var O=0;Q=s[O];O++){if(m.call(N,Q)){P.push(Q)
}}}return P}function I(N){var O=[];for(var P in N){O.push(N[P])}return O}function u(N){return h({},N)}function G(N){return !!(N&&N.nodeType==1)
}function w(N){return A.call(N)===b}var c=(typeof Array.isArray=="function")&&Array.isArray([])&&!Array.isArray({});if(c){w=Array.isArray
}function t(N){return N instanceof Hash}function p(N){return A.call(N)===j}function g(N){return A.call(N)===f}function H(N){return A.call(N)===k
}function v(N){return A.call(N)===J}function q(N){return typeof N==="undefined"}h(Object,{extend:h,inspect:n,toJSON:e?L:C,toQueryString:E,toHTML:r,keys:Object.keys||z,values:I,clone:u,isElement:G,isArray:w,isHash:t,isFunction:p,isString:g,isNumber:H,isDate:v,isUndefined:q})
})();Object.extend(Function.prototype,(function(){var n=Array.prototype.slice;function d(r,o){var q=r.length,p=o.length;while(p--){r[q+p]=o[p]
}return r}function k(p,o){p=n.call(p,0);return d(p,o)}function g(){var o=this.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1].replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g,"").replace(/\s+/g,"").split(",");
return o.length==1&&!o[0]?[]:o}function h(q){if(arguments.length<2&&Object.isUndefined(arguments[0])){return this}if(!Object.isFunction(this)){throw new TypeError("The object is not callable.")
}var s=function(){};var o=this,p=n.call(arguments,1);var r=function(){var t=k(p,arguments),u=q;var u=this instanceof r?this:q;return o.apply(u,t)
};s.prototype=this.prototype;r.prototype=new s();return r}function f(q){var o=this,p=n.call(arguments,1);return function(s){var r=d([s||window.event],p);
return o.apply(q,r)}}function m(){if(!arguments.length){return this}var o=this,p=n.call(arguments,0);return function(){var q=k(p,arguments);
return o.apply(this,q)}}function e(q){var o=this,p=n.call(arguments,1);q=q*1000;return window.setTimeout(function(){return o.apply(o,p)
},q)}function a(){var o=d([0.01],arguments);return this.delay.apply(this,o)}function c(p){var o=this;return function(){var q=d([o.bind(this)],arguments);
return p.apply(this,q)}}function b(){if(this._methodized){return this._methodized}var o=this;return this._methodized=function(){var p=d([this],arguments);
return o.apply(null,p)}}var j={argumentNames:g,bindAsEventListener:f,curry:m,delay:e,defer:a,wrap:c,methodize:b};if(!Function.prototype.bind){j.bind=h
}return j})());(function(c){function b(){return this.getUTCFullYear()+"-"+(this.getUTCMonth()+1).toPaddedString(2)+"-"+this.getUTCDate().toPaddedString(2)+"T"+this.getUTCHours().toPaddedString(2)+":"+this.getUTCMinutes().toPaddedString(2)+":"+this.getUTCSeconds().toPaddedString(2)+"Z"
}function a(){return this.toISOString()}if(!c.toISOString){c.toISOString=b}if(!c.toJSON){c.toJSON=a}})(Date.prototype);RegExp.prototype.match=RegExp.prototype.test;
RegExp.escape=function(a){return String(a).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")};var PeriodicalExecuter=Class.create({initialize:function(b,a){this.callback=b;
this.frequency=a;this.currentlyExecuting=false;this.registerCallback()},registerCallback:function(){this.timer=setInterval(this.onTimerEvent.bind(this),this.frequency*1000)
},execute:function(){this.callback(this)},stop:function(){if(!this.timer){return}clearInterval(this.timer);this.timer=null},onTimerEvent:function(){if(!this.currentlyExecuting){try{this.currentlyExecuting=true;
this.execute();this.currentlyExecuting=false}catch(a){this.currentlyExecuting=false;throw a}}}});Object.extend(String,{interpret:function(a){return a==null?"":String(a)
},specialChar:{"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r","\\":"\\\\"}});Object.extend(String.prototype,(function(){var NATIVE_JSON_PARSE_SUPPORT=window.JSON&&typeof JSON.parse==="function"&&JSON.parse('{"test": true}').test;
function prepareReplacement(replacement){if(Object.isFunction(replacement)){return replacement}var template=new Template(replacement);
return function(match){return template.evaluate(match)}}function gsub(pattern,replacement){var result="",source=this,match;replacement=prepareReplacement(replacement);
if(Object.isString(pattern)){pattern=RegExp.escape(pattern)}if(!(pattern.length||pattern.source)){replacement=replacement("");return replacement+source.split("").join(replacement)+replacement
}while(source.length>0){if(match=source.match(pattern)){result+=source.slice(0,match.index);result+=String.interpret(replacement(match));
source=source.slice(match.index+match[0].length)}else{result+=source,source=""}}return result}function sub(pattern,replacement,count){replacement=prepareReplacement(replacement);
count=Object.isUndefined(count)?1:count;return this.gsub(pattern,function(match){if(--count<0){return match[0]}return replacement(match)
})}function scan(pattern,iterator){this.gsub(pattern,iterator);return String(this)}function truncate(length,truncation){length=length||30;
truncation=Object.isUndefined(truncation)?"...":truncation;return this.length>length?this.slice(0,length-truncation.length)+truncation:String(this)
}function strip(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}function stripTags(){return this.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi,"")
}function stripScripts(){return this.replace(new RegExp(Prototype.ScriptFragment,"img"),"")}function extractScripts(){var matchAll=new RegExp(Prototype.ScriptFragment,"img"),matchOne=new RegExp(Prototype.ScriptFragment,"im");
return(this.match(matchAll)||[]).map(function(scriptTag){return(scriptTag.match(matchOne)||["",""])[1]})}function evalScripts(){return this.extractScripts().map(function(script){return eval(script)
})}function escapeHTML(){return this.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function unescapeHTML(){return this.stripTags().replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")
}function toQueryParams(separator){var match=this.strip().match(/([^?#]*)(#.*)?$/);if(!match){return{}}return match[1].split(separator||"&").inject({},function(hash,pair){if((pair=pair.split("="))[0]){var key=decodeURIComponent(pair.shift()),value=pair.length>1?pair.join("="):pair[0];
if(value!=undefined){value=decodeURIComponent(value)}if(key in hash){if(!Object.isArray(hash[key])){hash[key]=[hash[key]]}hash[key].push(value)
}else{hash[key]=value}}return hash})}function toArray(){return this.split("")}function succ(){return this.slice(0,this.length-1)+String.fromCharCode(this.charCodeAt(this.length-1)+1)
}function times(count){return count<1?"":new Array(count+1).join(this)}function camelize(){return this.replace(/-+(.)?/g,function(match,chr){return chr?chr.toUpperCase():""
})}function capitalize(){return this.charAt(0).toUpperCase()+this.substring(1).toLowerCase()}function underscore(){return this.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/-/g,"_").toLowerCase()
}function dasherize(){return this.replace(/_/g,"-")}function inspect(useDoubleQuotes){var escapedString=this.replace(/[\x00-\x1f\\]/g,function(character){if(character in String.specialChar){return String.specialChar[character]
}return"\\u00"+character.charCodeAt().toPaddedString(2,16)});if(useDoubleQuotes){return'"'+escapedString.replace(/"/g,'\\"')+'"'}return"'"+escapedString.replace(/'/g,"\\'")+"'"
}function unfilterJSON(filter){return this.replace(filter||Prototype.JSONFilter,"$1")}function isJSON(){var str=this;if(str.blank()){return false
}str=str.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@");str=str.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]");
str=str.replace(/(?:^|:|,)(?:\s*\[)+/g,"");return(/^[\],:{}\s]*$/).test(str)}function evalJSON(sanitize){var json=this.unfilterJSON(),cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
if(cx.test(json)){json=json.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}try{if(!sanitize||json.isJSON()){return eval("("+json+")")
}}catch(e){}throw new SyntaxError("Badly formed JSON string: "+this.inspect())}function parseJSON(){var json=this.unfilterJSON();return JSON.parse(json)
}function include(pattern){return this.indexOf(pattern)>-1}function startsWith(pattern){return this.lastIndexOf(pattern,0)===0}function endsWith(pattern){var d=this.length-pattern.length;
return d>=0&&this.indexOf(pattern,d)===d}function empty(){return this==""}function blank(){return/^\s*$/.test(this)}function interpolate(object,pattern){return new Template(this,pattern).evaluate(object)
}return{gsub:gsub,sub:sub,scan:scan,truncate:truncate,strip:String.prototype.trim||strip,stripTags:stripTags,stripScripts:stripScripts,extractScripts:extractScripts,evalScripts:evalScripts,escapeHTML:escapeHTML,unescapeHTML:unescapeHTML,toQueryParams:toQueryParams,parseQuery:toQueryParams,toArray:toArray,succ:succ,times:times,camelize:camelize,capitalize:capitalize,underscore:underscore,dasherize:dasherize,inspect:inspect,unfilterJSON:unfilterJSON,isJSON:isJSON,evalJSON:NATIVE_JSON_PARSE_SUPPORT?parseJSON:evalJSON,include:include,startsWith:startsWith,endsWith:endsWith,empty:empty,blank:blank,interpolate:interpolate}
})());var Template=Class.create({initialize:function(a,b){this.template=a.toString();this.pattern=b||Template.Pattern},evaluate:function(a){if(a&&Object.isFunction(a.toTemplateReplacements)){a=a.toTemplateReplacements()
}return this.template.gsub(this.pattern,function(d){if(a==null){return(d[1]+"")}var f=d[1]||"";if(f=="\\"){return d[2]}var b=a,g=d[3],e=/^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;
d=e.exec(g);if(d==null){return f}while(d!=null){var c=d[1].startsWith("[")?d[2].replace(/\\\\]/g,"]"):d[1];b=b[c];if(null==b||""==d[3]){break
}g=g.substring("["==d[3]?d[1].length:d[0].length);d=e.exec(g)}return f+String.interpret(b)})}});Template.Pattern=/(^|.|\r|\n)(#\{(.*?)\})/;
var $break={};var Enumerable=(function(){function c(z,y){try{this._each(z,y)}catch(A){if(A!=$break){throw A}}return this}function t(B,A,z){var y=-B,C=[],D=this.toArray();
if(B<1){return D}while((y+=B)<D.length){C.push(D.slice(y,y+B))}return C.collect(A,z)}function b(A,z){A=A||Prototype.K;var y=true;this.each(function(C,B){y=y&&!!A.call(z,C,B,this);
if(!y){throw $break}},this);return y}function j(A,z){A=A||Prototype.K;var y=false;this.each(function(C,B){if(y=!!A.call(z,C,B,this)){throw $break
}},this);return y}function k(A,z){A=A||Prototype.K;var y=[];this.each(function(C,B){y.push(A.call(z,C,B,this))},this);return y}function v(A,z){var y;
this.each(function(C,B){if(A.call(z,C,B,this)){y=C;throw $break}},this);return y}function h(A,z){var y=[];this.each(function(C,B){if(A.call(z,C,B,this)){y.push(C)
}},this);return y}function g(B,A,z){A=A||Prototype.K;var y=[];if(Object.isString(B)){B=new RegExp(RegExp.escape(B))}this.each(function(D,C){if(B.match(D)){y.push(A.call(z,D,C,this))
}},this);return y}function a(y){if(Object.isFunction(this.indexOf)){if(this.indexOf(y)!=-1){return true}}var z=false;this.each(function(A){if(A==y){z=true;
throw $break}});return z}function s(z,y){y=Object.isUndefined(y)?null:y;return this.eachSlice(z,function(A){while(A.length<z){A.push(y)
}return A})}function n(y,A,z){this.each(function(C,B){y=A.call(z,y,C,B,this)},this);return y}function x(z){var y=$A(arguments).slice(1);
return this.map(function(A){return A[z].apply(A,y)})}function r(A,z){A=A||Prototype.K;var y;this.each(function(C,B){C=A.call(z,C,B,this);
if(y==null||C>=y){y=C}},this);return y}function p(A,z){A=A||Prototype.K;var y;this.each(function(C,B){C=A.call(z,C,B,this);if(y==null||C<y){y=C
}},this);return y}function e(B,z){B=B||Prototype.K;var A=[],y=[];this.each(function(D,C){(B.call(z,D,C,this)?A:y).push(D)},this);return[A,y]
}function f(z){var y=[];this.each(function(A){y.push(A[z])});return y}function d(A,z){var y=[];this.each(function(C,B){if(!A.call(z,C,B,this)){y.push(C)
}},this);return y}function o(z,y){return this.map(function(B,A){return{value:B,criteria:z.call(y,B,A,this)}},this).sort(function(D,C){var B=D.criteria,A=C.criteria;
return B<A?-1:B>A?1:0}).pluck("value")}function q(){return this.map()}function u(){var z=Prototype.K,y=$A(arguments);if(Object.isFunction(y.last())){z=y.pop()
}var A=[this].concat(y).map($A);return this.map(function(C,B){return z(A.pluck(B))})}function m(){return this.toArray().length}function w(){return"#<Enumerable:"+this.toArray().inspect()+">"
}return{each:c,eachSlice:t,all:b,every:b,any:j,some:j,collect:k,map:k,detect:v,findAll:h,select:h,filter:h,grep:g,include:a,member:a,inGroupsOf:s,inject:n,invoke:x,max:r,min:p,partition:e,pluck:f,reject:d,sortBy:o,toArray:q,entries:q,zip:u,size:m,inspect:w,find:v}
})();function $A(c){if(!c){return[]}if("toArray" in Object(c)){return c.toArray()}var b=c.length||0,a=new Array(b);while(b--){a[b]=c[b]
}return a}function $w(a){if(!Object.isString(a)){return[]}a=a.strip();return a?a.split(/\s+/):[]}Array.from=$A;(function(){var z=Array.prototype,r=z.slice,t=z.forEach;
function b(F,E){for(var D=0,G=this.length>>>0;D<G;D++){if(D in this){F.call(E,this[D],D,this)}}}if(!t){t=b}function q(){this.length=0;
return this}function d(){return this[0]}function g(){return this[this.length-1]}function m(){return this.select(function(D){return D!=null
})}function C(){return this.inject([],function(E,D){if(Object.isArray(D)){return E.concat(D.flatten())}E.push(D);return E})}function k(){var D=r.call(arguments,0);
return this.select(function(E){return !D.include(E)})}function f(D){return(D===false?this.toArray():this)._reverse()}function p(D){return this.inject([],function(G,F,E){if(0==E||(D?G.last()!=F:!G.include(F))){G.push(F)
}return G})}function u(D){return this.uniq().findAll(function(E){return D.indexOf(E)!==-1})}function x(){return r.call(this,0)}function n(){return this.length
}function A(){return"["+this.map(Object.inspect).join(", ")+"]"}function a(G,E){if(this==null){throw new TypeError()}var H=Object(this),F=H.length>>>0;
if(F===0){return -1}E=Number(E);if(isNaN(E)){E=0}else{if(E!==0&&isFinite(E)){E=(E>0?1:-1)*Math.floor(Math.abs(E))}}if(E>F){return -1}var D=E>=0?E:Math.max(F-Math.abs(E),0);
for(;D<F;D++){if(D in H&&H[D]===G){return D}}return -1}function s(G,E){if(this==null){throw new TypeError()}var H=Object(this),F=H.length>>>0;
if(F===0){return -1}if(!Object.isUndefined(E)){E=Number(E);if(isNaN(E)){E=0}else{if(E!==0&&isFinite(E)){E=(E>0?1:-1)*Math.floor(Math.abs(E))
}}}else{E=F}var D=E>=0?Math.min(E,F-1):F-Math.abs(E);for(;D>=0;D--){if(D in H&&H[D]===G){return D}}return -1}function c(K){var I=[],J=r.call(arguments,0),L,E=0;
J.unshift(this);for(var H=0,D=J.length;H<D;H++){L=J[H];if(Object.isArray(L)&&!("callee" in L)){for(var G=0,F=L.length;G<F;G++){if(G in L){I[E]=L[G]
}E++}}else{I[E++]=L}}I.length=E;return I}function w(D){return function(){if(arguments.length===0){return D.call(this,Prototype.K)}else{if(arguments[0]===undefined){var E=r.call(arguments,1);
E.unshift(Prototype.K);return D.apply(this,E)}else{return D.apply(this,arguments)}}}}function y(H){if(this==null){throw new TypeError()
}H=H||Prototype.K;var D=Object(this);var G=[],F=arguments[1],J=0;for(var E=0,I=D.length>>>0;E<I;E++){if(E in D){G[J]=H.call(F,D[E],E,D)
}J++}G.length=J;return G}if(z.map){y=w(Array.prototype.map)}function h(H){if(this==null||!Object.isFunction(H)){throw new TypeError()
}var D=Object(this);var G=[],F=arguments[1],J;for(var E=0,I=D.length>>>0;E<I;E++){if(E in D){J=D[E];if(H.call(F,J,E,D)){G.push(J)}}}return G
}if(z.filter){h=Array.prototype.filter}function j(G){if(this==null){throw new TypeError()}G=G||Prototype.K;var F=arguments[1];var D=Object(this);
for(var E=0,H=D.length>>>0;E<H;E++){if(E in D&&G.call(F,D[E],E,D)){return true}}return false}if(z.some){var j=w(Array.prototype.some)
}function B(G){if(this==null){throw new TypeError()}G=G||Prototype.K;var F=arguments[1];var D=Object(this);for(var E=0,H=D.length>>>0;
E<H;E++){if(E in D&&!G.call(F,D[E],E,D)){return false}}return true}if(z.every){var B=w(Array.prototype.every)}var v=z.reduce;function o(D,F){F=F||Prototype.K;
var E=arguments[2];return v.call(this,F.bind(E),D)}if(!z.reduce){var o=Enumerable.inject}Object.extend(z,Enumerable);if(!z._reverse){z._reverse=z.reverse
}Object.extend(z,{_each:t,map:y,collect:y,select:h,filter:h,findAll:h,some:j,any:j,every:B,all:B,inject:o,clear:q,first:d,last:g,compact:m,flatten:C,without:k,reverse:f,uniq:p,intersect:u,clone:x,toArray:x,size:n,inspect:A});
var e=(function(){return[].concat(arguments)[0][0]!==1})(1,2);if(e){z.concat=c}if(!z.indexOf){z.indexOf=a}if(!z.lastIndexOf){z.lastIndexOf=s
}})();function $H(a){return new Hash(a)}var Hash=Class.create(Enumerable,(function(){function e(r){this._object=Object.isHash(r)?r.toObject():Object.clone(r)
}function f(t,s){for(var r in this._object){var u=this._object[r],v=[r,u];v.key=r;v.value=u;t.call(s,v)}}function k(r,s){return this._object[r]=s
}function c(r){if(this._object[r]!==Object.prototype[r]){return this._object[r]}}function o(r){var s=this._object[r];delete this._object[r];
return s}function q(){return Object.clone(this._object)}function p(){return this.pluck("key")}function n(){return this.pluck("value")
}function g(s){var r=this.detect(function(t){return t.value===s});return r&&r.key}function j(r){return this.clone().update(r)}function d(r){return new Hash(r).inject(this,function(s,t){s.set(t.key,t.value);
return s})}function b(r,s){if(Object.isUndefined(s)){return r}var s=String.interpret(s);s=s.gsub(/(\r)?\n/,"\r\n");s=encodeURIComponent(s);
s=s.gsub(/%20/,"+");return r+"="+s}function a(){return this.inject([],function(v,y){var u=encodeURIComponent(y.key),s=y.value;if(s&&typeof s=="object"){if(Object.isArray(s)){var x=[];
for(var t=0,r=s.length,w;t<r;t++){w=s[t];x.push(b(u,w))}return v.concat(x)}}else{v.push(b(u,s))}return v}).join("&")}function m(){return"#<Hash:{"+this.map(function(r){return r.map(Object.inspect).join(": ")
}).join(", ")+"}>"}function h(){return new Hash(this)}return{initialize:e,_each:f,set:k,get:c,unset:o,toObject:q,toTemplateReplacements:q,keys:p,values:n,index:g,merge:j,update:d,toQueryString:a,inspect:m,toJSON:q,clone:h}
})());Hash.from=$H;Object.extend(Number.prototype,(function(){function d(){return this.toPaddedString(2,16)}function b(){return this+1
}function h(k,j){$R(0,this,true).each(k,j);return this}function g(m,k){var j=this.toString(k||10);return"0".times(m-j.length)+j}function a(){return Math.abs(this)
}function c(){return Math.round(this)}function e(){return Math.ceil(this)}function f(){return Math.floor(this)}return{toColorPart:d,succ:b,times:h,toPaddedString:g,abs:a,round:c,ceil:e,floor:f}
})());function $R(c,a,b){return new ObjectRange(c,a,b)}var ObjectRange=Class.create(Enumerable,(function(){function b(f,d,e){this.start=f;
this.end=d;this.exclusive=e}function c(e,d){var f=this.start;while(this.include(f)){e.call(d,f);f=f.succ()}}function a(d){if(d<this.start){return false
}if(this.exclusive){return d<this.end}return d<=this.end}return{initialize:b,_each:c,include:a}})());var Abstract={};var Try={these:function(){var c;
for(var b=0,d=arguments.length;b<d;b++){var a=arguments[b];try{c=a();break}catch(f){}}return c}};var Ajax={getTransport:function(){return Try.these(function(){return new XMLHttpRequest()
},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")})||false},activeRequestCount:0};
Ajax.Responders={responders:[],_each:function(b,a){this.responders._each(b,a)},register:function(a){if(!this.include(a)){this.responders.push(a)
}},unregister:function(a){this.responders=this.responders.without(a)},dispatch:function(d,b,c,a){this.each(function(f){if(Object.isFunction(f[d])){try{f[d].apply(f,[b,c,a])
}catch(g){}}})}};Object.extend(Ajax.Responders,Enumerable);Ajax.Responders.register({onCreate:function(){Ajax.activeRequestCount++},onComplete:function(){Ajax.activeRequestCount--
}});Ajax.Base=Class.create({initialize:function(a){this.options={method:"post",asynchronous:true,contentType:"application/x-www-form-urlencoded",encoding:"UTF-8",parameters:"",evalJSON:true,evalJS:true};
Object.extend(this.options,a||{});this.options.method=this.options.method.toLowerCase();if(Object.isHash(this.options.parameters)){this.options.parameters=this.options.parameters.toObject()
}}});Ajax.Request=Class.create(Ajax.Base,{_complete:false,initialize:function($super,b,a){$super(a);this.transport=Ajax.getTransport();
this.request(b)},request:function(b){this.url=b;this.method=this.options.method;var d=Object.isString(this.options.parameters)?this.options.parameters:Object.toQueryString(this.options.parameters);
if(!["get","post"].include(this.method)){d+=(d?"&":"")+"_method="+this.method;this.method="post"}if(d&&this.method==="get"){this.url+=(this.url.include("?")?"&":"?")+d
}this.parameters=d.toQueryParams();try{var a=new Ajax.Response(this);if(this.options.onCreate){this.options.onCreate(a)}Ajax.Responders.dispatch("onCreate",this,a);
this.transport.open(this.method.toUpperCase(),this.url,this.options.asynchronous);if(this.options.asynchronous){this.respondToReadyState.bind(this).defer(1)
}this.transport.onreadystatechange=this.onStateChange.bind(this);this.setRequestHeaders();this.body=this.method=="post"?(this.options.postBody||d):null;
this.transport.send(this.body);if(!this.options.asynchronous&&this.transport.overrideMimeType){this.onStateChange()}}catch(c){this.dispatchException(c)
}},onStateChange:function(){var a=this.transport.readyState;if(a>1&&!((a==4)&&this._complete)){this.respondToReadyState(this.transport.readyState)
}},setRequestHeaders:function(){var e={"X-Requested-With":"XMLHttpRequest","X-Prototype-Version":Prototype.Version,Accept:"text/javascript, text/html, application/xml, text/xml, */*"};
if(this.method=="post"){e["Content-type"]=this.options.contentType+(this.options.encoding?"; charset="+this.options.encoding:"");if(this.transport.overrideMimeType&&(navigator.userAgent.match(/Gecko\/(\d{4})/)||[0,2005])[1]<2005){e.Connection="close"
}}if(typeof this.options.requestHeaders=="object"){var c=this.options.requestHeaders;if(Object.isFunction(c.push)){for(var b=0,d=c.length;
b<d;b+=2){e[c[b]]=c[b+1]}}else{$H(c).each(function(f){e[f.key]=f.value})}}for(var a in e){this.transport.setRequestHeader(a,e[a])}},success:function(){var a=this.getStatus();
return !a||(a>=200&&a<300)||a==304},getStatus:function(){try{if(this.transport.status===1223){return 204}return this.transport.status||0
}catch(a){return 0}},respondToReadyState:function(a){var c=Ajax.Request.Events[a],b=new Ajax.Response(this);if(c=="Complete"){try{this._complete=true;
(this.options["on"+b.status]||this.options["on"+(this.success()?"Success":"Failure")]||Prototype.emptyFunction)(b,b.headerJSON)}catch(d){this.dispatchException(d)
}var f=b.getHeader("Content-type");if(this.options.evalJS=="force"||(this.options.evalJS&&this.isSameOrigin()&&f&&f.match(/^\s*(text|application)\/(x-)?(java|ecma)script(;.*)?\s*$/i))){this.evalResponse()
}}try{(this.options["on"+c]||Prototype.emptyFunction)(b,b.headerJSON);Ajax.Responders.dispatch("on"+c,this,b,b.headerJSON)}catch(d){this.dispatchException(d)
}if(c=="Complete"){this.transport.onreadystatechange=Prototype.emptyFunction}},isSameOrigin:function(){var a=this.url.match(/^\s*https?:\/\/[^\/]*/);
return !a||(a[0]=="#{protocol}//#{domain}#{port}".interpolate({protocol:location.protocol,domain:document.domain,port:location.port?":"+location.port:""}))
},getHeader:function(a){try{return this.transport.getResponseHeader(a)||null}catch(b){return null}},evalResponse:function(){try{return eval((this.transport.responseText||"").unfilterJSON())
}catch(e){this.dispatchException(e)}},dispatchException:function(a){(this.options.onException||Prototype.emptyFunction)(this,a);Ajax.Responders.dispatch("onException",this,a)
}});Ajax.Request.Events=["Uninitialized","Loading","Loaded","Interactive","Complete"];Ajax.Response=Class.create({initialize:function(c){this.request=c;
var d=this.transport=c.transport,a=this.readyState=d.readyState;if((a>2&&!Prototype.Browser.IE)||a==4){this.status=this.getStatus();this.statusText=this.getStatusText();
this.responseText=String.interpret(d.responseText);this.headerJSON=this._getHeaderJSON()}if(a==4){var b=d.responseXML;this.responseXML=Object.isUndefined(b)?null:b;
this.responseJSON=this._getResponseJSON()}},status:0,statusText:"",getStatus:Ajax.Request.prototype.getStatus,getStatusText:function(){try{return this.transport.statusText||""
}catch(a){return""}},getHeader:Ajax.Request.prototype.getHeader,getAllHeaders:function(){try{return this.getAllResponseHeaders()}catch(a){return null
}},getResponseHeader:function(a){return this.transport.getResponseHeader(a)},getAllResponseHeaders:function(){return this.transport.getAllResponseHeaders()
},_getHeaderJSON:function(){var a=this.getHeader("X-JSON");if(!a){return null}try{a=decodeURIComponent(escape(a))}catch(b){}try{return a.evalJSON(this.request.options.sanitizeJSON||!this.request.isSameOrigin())
}catch(b){this.request.dispatchException(b)}},_getResponseJSON:function(){var a=this.request.options;if(!a.evalJSON||(a.evalJSON!="force"&&!(this.getHeader("Content-type")||"").include("application/json"))||this.responseText.blank()){return null
}try{return this.responseText.evalJSON(a.sanitizeJSON||!this.request.isSameOrigin())}catch(b){this.request.dispatchException(b)}}});Ajax.Updater=Class.create(Ajax.Request,{initialize:function($super,a,c,b){this.container={success:(a.success||a),failure:(a.failure||(a.success?null:a))};
b=Object.clone(b);var d=b.onComplete;b.onComplete=(function(e,f){this.updateContent(e.responseText);if(Object.isFunction(d)){d(e,f)}}).bind(this);
$super(c,b)},updateContent:function(d){var c=this.container[this.success()?"success":"failure"],a=this.options;if(!a.evalScripts){d=d.stripScripts()
}if(c=$(c)){if(a.insertion){if(Object.isString(a.insertion)){var b={};b[a.insertion]=d;c.insert(b)}else{a.insertion(c,d)}}else{c.update(d)
}}}});Ajax.PeriodicalUpdater=Class.create(Ajax.Base,{initialize:function($super,a,c,b){$super(b);this.onComplete=this.options.onComplete;
this.frequency=(this.options.frequency||2);this.decay=(this.options.decay||1);this.updater={};this.container=a;this.url=c;this.start()
},start:function(){this.options.onComplete=this.updateComplete.bind(this);this.onTimerEvent()},stop:function(){this.updater.options.onComplete=undefined;
clearTimeout(this.timer);(this.onComplete||Prototype.emptyFunction).apply(this,arguments)},updateComplete:function(a){if(this.options.decay){this.decay=(a.responseText==this.lastText?this.decay*this.options.decay:1);
this.lastText=a.responseText}this.timer=this.onTimerEvent.bind(this).delay(this.decay*this.frequency)},onTimerEvent:function(){this.updater=new Ajax.Updater(this.container,this.url,this.options)
}});(function(a7){var aD;var a0=Array.prototype.slice;var au=document.createElement("div");function aY(bn){if(arguments.length>1){for(var F=0,bp=[],bo=arguments.length;
F<bo;F++){bp.push(aY(arguments[F]))}return bp}if(Object.isString(bn)){bn=document.getElementById(bn)}return aE.extend(bn)}a7.$=aY;if(!a7.Node){a7.Node={}
}if(!a7.Node.ELEMENT_NODE){Object.extend(a7.Node,{ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12})
}var q={};function aP(bn,F){if(bn==="select"){return false}if("type" in F){return false}return true}var c=(function(){try{var F=document.createElement('<input name="x">');
return F.tagName.toLowerCase()==="input"&&F.name==="x"}catch(bn){return false}})();var aH=a7.Element;function aE(bn,F){F=F||{};bn=bn.toLowerCase();
if(c&&F.name){bn="<"+bn+' name="'+F.name+'">';delete F.name;return aE.writeAttribute(document.createElement(bn),F)}if(!q[bn]){q[bn]=aE.extend(document.createElement(bn))
}var bo=aP(bn,F)?q[bn].cloneNode(false):document.createElement(bn);return aE.writeAttribute(bo,F)}a7.Element=aE;Object.extend(a7.Element,aH||{});
if(aH){a7.Element.prototype=aH.prototype}aE.Methods={ByTag:{},Simulated:{}};var a2={};var G={id:"id",className:"class"};function a9(bn){bn=aY(bn);
var F="<"+bn.tagName.toLowerCase();var bo,bq;for(var bp in G){bo=G[bp];bq=(bn[bp]||"").toString();if(bq){F+=" "+bo+"="+bq.inspect(true)
}}return F+">"}a2.inspect=a9;function u(F){return aY(F).style.display!=="none"}function aw(bn,F){bn=aY(bn);if(Object.isUndefined(F)){F=!aE.visible(bn)
}aE[F?"show":"hide"](bn);return bn}function aG(F){F=aY(F);F.style.display="none";return F}function h(F){F=aY(F);F.style.display="";return F
}Object.extend(a2,{visible:u,toggle:aw,hide:aG,show:h});function ac(F){F=aY(F);F.parentNode.removeChild(F);return F}var aS=(function(){var F=document.createElement("select"),bn=true;
F.innerHTML='<option value="test">test</option>';if(F.options&&F.options[0]){bn=F.options[0].nodeName.toUpperCase()!=="OPTION"}F=null;
return bn})();var H=(function(){try{var F=document.createElement("table");if(F&&F.tBodies){F.innerHTML="<tbody><tr><td>test</td></tr></tbody>";
var bo=typeof F.tBodies[0]=="undefined";F=null;return bo}}catch(bn){return true}})();var a1=(function(){try{var F=document.createElement("div");
F.innerHTML="<link />";var bo=(F.childNodes.length===0);F=null;return bo}catch(bn){return true}})();var w=aS||H||a1;var ap=(function(){var F=document.createElement("script"),bo=false;
try{F.appendChild(document.createTextNode(""));bo=!F.firstChild||F.firstChild&&F.firstChild.nodeType!==3}catch(bn){bo=true}F=null;return bo
})();function N(bp,br){bp=aY(bp);var bs=bp.getElementsByTagName("*"),bo=bs.length;while(bo--){Y(bs[bo])}if(br&&br.toElement){br=br.toElement()
}if(Object.isElement(br)){return bp.update().insert(br)}br=Object.toHTML(br);var bn=bp.tagName.toUpperCase();if(bn==="SCRIPT"&&ap){bp.text=br;
return bp}if(w){if(bn in K.tags){while(bp.firstChild){bp.removeChild(bp.firstChild)}var F=s(bn,br.stripScripts());for(var bo=0,bq;bq=F[bo];
bo++){bp.appendChild(bq)}}else{if(a1&&Object.isString(br)&&br.indexOf("<link")>-1){while(bp.firstChild){bp.removeChild(bp.firstChild)
}var F=s(bn,br.stripScripts(),true);for(var bo=0,bq;bq=F[bo];bo++){bp.appendChild(bq)}}else{bp.innerHTML=br.stripScripts()}}}else{bp.innerHTML=br.stripScripts()
}br.evalScripts.bind(br).defer();return bp}function ag(bn,bo){bn=aY(bn);if(bo&&bo.toElement){bo=bo.toElement()}else{if(!Object.isElement(bo)){bo=Object.toHTML(bo);
var F=bn.ownerDocument.createRange();F.selectNode(bn);bo.evalScripts.bind(bo).defer();bo=F.createContextualFragment(bo.stripScripts())
}}bn.parentNode.replaceChild(bo,bn);return bn}var K={before:function(F,bn){F.parentNode.insertBefore(bn,F)},top:function(F,bn){F.insertBefore(bn,F.firstChild)
},bottom:function(F,bn){F.appendChild(bn)},after:function(F,bn){F.parentNode.insertBefore(bn,F.nextSibling)},tags:{TABLE:["<table>","</table>",1],TBODY:["<table><tbody>","</tbody></table>",2],TR:["<table><tbody><tr>","</tr></tbody></table>",3],TD:["<table><tbody><tr><td>","</td></tr></tbody></table>",4],SELECT:["<select>","</select>",1]}};
var aI=K.tags;Object.extend(aI,{THEAD:aI.TBODY,TFOOT:aI.TBODY,TH:aI.TD});function an(bo,br){bo=aY(bo);if(br&&br.toElement){br=br.toElement()
}if(Object.isElement(br)){bo.parentNode.replaceChild(br,bo);return bo}br=Object.toHTML(br);var bq=bo.parentNode,bn=bq.tagName.toUpperCase();
if(bn in K.tags){var bs=aE.next(bo);var F=s(bn,br.stripScripts());bq.removeChild(bo);var bp;if(bs){bp=function(bt){bq.insertBefore(bt,bs)
}}else{bp=function(bt){bq.appendChild(bt)}}F.each(bp)}else{bo.outerHTML=br.stripScripts()}br.evalScripts.bind(br).defer();return bo}if("outerHTML" in document.documentElement){ag=an
}function a6(F){if(Object.isUndefined(F)||F===null){return false}if(Object.isString(F)||Object.isNumber(F)){return true}if(Object.isElement(F)){return true
}if(F.toElement||F.toHTML){return true}return false}function bl(bp,br,F){F=F.toLowerCase();var bt=K[F];if(br&&br.toElement){br=br.toElement()
}if(Object.isElement(br)){bt(bp,br);return bp}br=Object.toHTML(br);var bo=((F==="before"||F==="after")?bp.parentNode:bp).tagName.toUpperCase();
var bs=s(bo,br.stripScripts());if(F==="top"||F==="after"){bs.reverse()}for(var bn=0,bq;bq=bs[bn];bn++){bt(bp,bq)}br.evalScripts.bind(br).defer()
}function P(bn,bo){bn=aY(bn);if(a6(bo)){bo={bottom:bo}}for(var F in bo){bl(bn,bo[F],F)}return bn}function t(bn,bo,F){bn=aY(bn);if(Object.isElement(bo)){aY(bo).writeAttribute(F||{})
}else{if(Object.isString(bo)){bo=new aE(bo,F)}else{bo=new aE("div",bo)}}if(bn.parentNode){bn.parentNode.replaceChild(bo,bn)}bo.appendChild(bn);
return bo}function v(bn){bn=aY(bn);var bo=bn.firstChild;while(bo){var F=bo.nextSibling;if(bo.nodeType===Node.TEXT_NODE&&!/\S/.test(bo.nodeValue)){bn.removeChild(bo)
}bo=F}return bn}function a3(F){return aY(F).innerHTML.blank()}function s(bq,bp,br){var bo=K.tags[bq],bs=au;var F=!!bo;if(!F&&br){F=true;
bo=["","",0]}if(F){bs.innerHTML="&#160;"+bo[0]+bp+bo[1];bs.removeChild(bs.firstChild);for(var bn=bo[2];bn--;){bs=bs.firstChild}}else{bs.innerHTML=bp
}return $A(bs.childNodes)}function D(bo,F){if(!(bo=aY(bo))){return}var bq=bo.cloneNode(F);if(!aX){bq._prototypeUID=aD;if(F){var bp=aE.select(bq,"*"),bn=bp.length;
while(bn--){bp[bn]._prototypeUID=aD}}}return aE.extend(bq)}function Y(bn){var F=L(bn);if(F){aE.stopObserving(bn);if(!aX){bn._prototypeUID=aD
}delete aE.Storage[F]}}function bj(bn){var F=bn.length;while(F--){Y(bn[F])}}function ar(bp){var bo=bp.length,bn,F;while(bo--){bn=bp[bo];
F=L(bn);delete aE.Storage[F];delete Event.cache[F]}}if(aX){bj=ar}function m(bn){if(!(bn=aY(bn))){return}Y(bn);var bo=bn.getElementsByTagName("*"),F=bo.length;
while(F--){Y(bo[F])}return null}Object.extend(a2,{remove:ac,update:N,replace:ag,insert:P,wrap:t,cleanWhitespace:v,empty:a3,clone:D,purge:m});
function al(F,bo,bp){F=aY(F);bp=bp||-1;var bn=[];while(F=F[bo]){if(F.nodeType===Node.ELEMENT_NODE){bn.push(aE.extend(F))}if(bn.length===bp){break
}}return bn}function aK(F){return al(F,"parentNode")}function bk(F){return aE.select(F,"*")}function W(F){F=aY(F).firstChild;while(F&&F.nodeType!==Node.ELEMENT_NODE){F=F.nextSibling
}return aY(F)}function bg(bn){var F=[],bo=aY(bn).firstChild;while(bo){if(bo.nodeType===Node.ELEMENT_NODE){F.push(aE.extend(bo))}bo=bo.nextSibling
}return F}function o(F){return al(F,"previousSibling")}function bf(F){return al(F,"nextSibling")}function aU(F){F=aY(F);var bo=o(F),bn=bf(F);
return bo.reverse().concat(bn)}function aQ(bn,F){bn=aY(bn);if(Object.isString(F)){return Prototype.Selector.match(bn,F)}return F.match(bn)
}function aV(bn,bo,bp,F){bn=aY(bn),bp=bp||0,F=F||0;if(Object.isNumber(bp)){F=bp,bp=null}while(bn=bn[bo]){if(bn.nodeType!==1){continue
}if(bp&&!Prototype.Selector.match(bn,bp)){continue}if(--F>=0){continue}return aE.extend(bn)}}function Z(bn,bo,F){bn=aY(bn);if(arguments.length===1){return aY(bn.parentNode)
}return aV(bn,"parentNode",bo,F)}function x(bn,bp,F){bn=aY(bn),bp=bp||0,F=F||0;if(Object.isNumber(bp)){F=bp,bp="*"}var bo=Prototype.Selector.select(bp,bn)[F];
return aE.extend(bo)}function g(bn,bo,F){return aV(bn,"previousSibling",bo,F)}function aA(bn,bo,F){return aV(bn,"nextSibling",bo,F)}function ba(F){F=aY(F);
var bn=a0.call(arguments,1).join(", ");return Prototype.Selector.select(bn,F)}function aC(bo){bo=aY(bo);var bq=a0.call(arguments,1).join(", ");
var br=aE.siblings(bo),bn=[];for(var F=0,bp;bp=br[F];F++){if(Prototype.Selector.match(bp,bq)){bn.push(bp)}}return bn}function C(bn,F){bn=aY(bn),F=aY(F);
while(bn=bn.parentNode){if(bn===F){return true}}return false}function A(bn,F){bn=aY(bn),F=aY(F);if(!F.contains){return C(bn,F)}return F.contains(bn)&&F!==bn
}function I(bn,F){bn=aY(bn),F=aY(F);return(bn.compareDocumentPosition(F)&8)===8}var aL;if(au.compareDocumentPosition){aL=I}else{if(au.contains){aL=A
}else{aL=C}}Object.extend(a2,{recursivelyCollect:al,ancestors:aK,descendants:bk,firstDescendant:W,immediateDescendants:bg,previousSiblings:o,nextSiblings:bf,siblings:aU,match:aQ,up:Z,down:x,previous:g,next:aA,select:ba,adjacent:aC,descendantOf:aL,getElementsBySelector:ba,childElements:bg});
var S=1;function aT(F){F=aY(F);var bn=aE.readAttribute(F,"id");if(bn){return bn}do{bn="anonymous_element_"+S++}while(aY(bn));aE.writeAttribute(F,"id",bn);
return bn}function a8(bn,F){return aY(bn).getAttribute(F)}function J(bn,F){bn=aY(bn);var bo=aF.read;if(bo.values[F]){return bo.values[F](bn,F)
}if(bo.names[F]){F=bo.names[F]}if(F.include(":")){if(!bn.attributes||!bn.attributes[F]){return null}return bn.attributes[F].value}return bn.getAttribute(F)
}function d(bn,F){if(F==="title"){return bn.title}return bn.getAttribute(F)}var T=(function(){au.setAttribute("onclick",Prototype.emptyFunction);
var F=au.getAttribute("onclick");var bn=(typeof F==="function");au.removeAttribute("onclick");return bn})();if(T){a8=J}else{if(Prototype.Browser.Opera){a8=d
}}function aZ(bp,bo,br){bp=aY(bp);var bn={},bq=aF.write;if(typeof bo==="object"){bn=bo}else{bn[bo]=Object.isUndefined(br)?true:br}for(var F in bn){bo=bq.names[F]||F;
br=bn[F];if(bq.values[F]){bo=bq.values[F](bp,br)}if(br===false||br===null){bp.removeAttribute(bo)}else{if(br===true){bp.setAttribute(bo,bo)
}else{bp.setAttribute(bo,br)}}}return bp}function X(F,bo){bo=aF.has[bo]||bo;var bn=aY(F).getAttributeNode(bo);return !!(bn&&bn.specified)
}a7.Element.Methods.Simulated.hasAttribute=X;function j(F){return new aE.ClassNames(F)}var U={};function e(bn){if(U[bn]){return U[bn]
}var F=new RegExp("(^|\\s+)"+bn+"(\\s+|$)");U[bn]=F;return F}function ak(F,bn){if(!(F=aY(F))){return}var bo=F.className;if(bo.length===0){return false
}if(bo===bn){return true}return e(bn).test(bo)}function n(F,bn){if(!(F=aY(F))){return}if(!ak(F,bn)){F.className+=(F.className?" ":"")+bn
}return F}function at(F,bn){if(!(F=aY(F))){return}F.className=F.className.replace(e(bn)," ").strip();return F}function ad(bn,bo,F){if(!(bn=aY(bn))){return
}if(Object.isUndefined(F)){F=!ak(bn,bo)}var bp=aE[F?"addClassName":"removeClassName"];return bp(bn,bo)}var aF={};var aO="className",aq="for";
au.setAttribute(aO,"x");if(au.className!=="x"){au.setAttribute("class","x");if(au.className==="x"){aO="class"}}var aJ=document.createElement("label");
aJ.setAttribute(aq,"x");if(aJ.htmlFor!=="x"){aJ.setAttribute("htmlFor","x");if(aJ.htmlFor==="x"){aq="htmlFor"}}aJ=null;function ab(F,bn){return F.getAttribute(bn)
}function f(F,bn){return F.getAttribute(bn,2)}function z(F,bo){var bn=F.getAttributeNode(bo);return bn?bn.value:""}function bh(F,bn){return aY(F).hasAttribute(bn)?bn:null
}au.onclick=Prototype.emptyFunction;var O=au.getAttribute("onclick");var av;if(String(O).indexOf("{")>-1){av=function(F,bn){var bo=F.getAttribute(bn);
if(!bo){return null}bo=bo.toString();bo=bo.split("{")[1];bo=bo.split("}")[0];return bo.strip()}}else{if(O===""){av=function(F,bn){var bo=F.getAttribute(bn);
if(!bo){return null}return bo.strip()}}}aF.read={names:{"class":aO,className:aO,"for":aq,htmlFor:aq},values:{style:function(F){return F.style.cssText.toLowerCase()
},title:function(F){return F.title}}};aF.write={names:{className:"class",htmlFor:"for",cellpadding:"cellPadding",cellspacing:"cellSpacing"},values:{checked:function(F,bn){F.checked=!!bn
},style:function(F,bn){F.style.cssText=bn?bn:""}}};aF.has={names:{}};Object.extend(aF.write.names,aF.read.names);var a5=$w("colSpan rowSpan vAlign dateTime accessKey tabIndex encType maxLength readOnly longDesc frameBorder");
for(var ae=0,af;af=a5[ae];ae++){aF.write.names[af.toLowerCase()]=af;aF.has.names[af.toLowerCase()]=af}Object.extend(aF.read.values,{href:f,src:f,type:ab,action:z,disabled:bh,checked:bh,readonly:bh,multiple:bh,onload:av,onunload:av,onclick:av,ondblclick:av,onmousedown:av,onmouseup:av,onmouseover:av,onmousemove:av,onmouseout:av,onfocus:av,onblur:av,onkeypress:av,onkeydown:av,onkeyup:av,onsubmit:av,onreset:av,onselect:av,onchange:av});
Object.extend(a2,{identify:aT,readAttribute:a8,writeAttribute:aZ,classNames:j,hasClassName:ak,addClassName:n,removeClassName:at,toggleClassName:ad});
function V(F){if(F==="float"||F==="styleFloat"){return"cssFloat"}return F.camelize()}function bm(F){if(F==="float"||F==="cssFloat"){return"styleFloat"
}return F.camelize()}function B(bo,bp){bo=aY(bo);var bs=bo.style,bn;if(Object.isString(bp)){bs.cssText+=";"+bp;if(bp.include("opacity")){var F=bp.match(/opacity:\s*(\d?\.?\d*)/)[1];
aE.setOpacity(bo,F)}return bo}for(var br in bp){if(br==="opacity"){aE.setOpacity(bo,bp[br])}else{var bq=bp[br];if(br==="float"||br==="cssFloat"){br=Object.isUndefined(bs.styleFloat)?"cssFloat":"styleFloat"
}bs[br]=bq}}return bo}function aN(bn,bo){bn=aY(bn);bo=V(bo);var bp=bn.style[bo];if(!bp||bp==="auto"){var F=document.defaultView.getComputedStyle(bn,null);
bp=F?F[bo]:null}if(bo==="opacity"){return bp?parseFloat(bp):1}return bp==="auto"?null:bp}function r(F,bn){switch(bn){case"height":case"width":if(!aE.visible(F)){return null
}var bo=parseInt(aN(F,bn),10);if(bo!==F["offset"+bn.capitalize()]){return bo+"px"}return aE.measure(F,bn);default:return aN(F,bn)}}function ai(F,bn){F=aY(F);
bn=bm(bn);var bo=F.style[bn];if(!bo&&F.currentStyle){bo=F.currentStyle[bn]}if(bn==="opacity"&&!M){return bd(F)}if(bo==="auto"){if((bn==="width"||bn==="height")&&aE.visible(F)){return aE.measure(F,bn)+"px"
}return null}return bo}function az(F){return(F||"").replace(/alpha\([^\)]*\)/gi,"")}function aa(F){if(!F.currentStyle.hasLayout){F.style.zoom=1
}return F}var M=(function(){au.style.cssText="opacity:.55";return/^0.55/.test(au.style.opacity)})();function y(F,bn){F=aY(F);if(bn==1||bn===""){bn=""
}else{if(bn<0.00001){bn=0}}F.style.opacity=bn;return F}function be(F,bp){if(M){return y(F,bp)}F=aa(aY(F));var bo=aE.getStyle(F,"filter"),bn=F.style;
if(bp==1||bp===""){bo=az(bo);if(bo){bn.filter=bo}else{bn.removeAttribute("filter")}return F}if(bp<0.00001){bp=0}bn.filter=az(bo)+"alpha(opacity="+(bp*100)+")";
return F}function bc(F){return aE.getStyle(F,"opacity")}function bd(bn){if(M){return bc(bn)}var bo=aE.getStyle(bn,"filter");if(bo.length===0){return 1
}var F=(bo||"").match(/alpha\(opacity=(.*)\)/);if(F[1]){return parseFloat(F[1])/100}return 1}Object.extend(a2,{setStyle:B,getStyle:aN,setOpacity:y,getOpacity:bc});
if("styleFloat" in au.style){a2.getStyle=ai;a2.setOpacity=be;a2.getOpacity=bd}var k=0;a7.Element.Storage={UID:1};function L(F){if(F===window){return 0
}if(typeof F._prototypeUID==="undefined"){F._prototypeUID=aE.Storage.UID++}return F._prototypeUID}function b(F){if(F===window){return 0
}if(F==document){return 1}return F.uniqueID}var aX=("uniqueID" in au);if(aX){L=b}function a(bn){if(!(bn=aY(bn))){return}var F=L(bn);if(!aE.Storage[F]){aE.Storage[F]=$H()
}return aE.Storage[F]}function a4(bn,F,bo){if(!(bn=aY(bn))){return}var bp=a(bn);if(arguments.length===2){bp.update(F)}else{bp.set(F,bo)
}return bn}function aM(bo,bn,F){if(!(bo=aY(bo))){return}var bq=a(bo),bp=bq.get(bn);if(Object.isUndefined(bp)){bq.set(bn,F);bp=F}return bp
}Object.extend(a2,{getStorage:a,store:a4,retrieve:aM});var am={},aW=aE.Methods.ByTag,aB=Prototype.BrowserFeatures;if(!aB.ElementExtensions&&("__proto__" in au)){a7.HTMLElement={};
a7.HTMLElement.prototype=au.__proto__;aB.ElementExtensions=true}function bb(F){if(typeof window.Element==="undefined"){return false}var bo=window.Element.prototype;
if(bo){var bq="_"+(Math.random()+"").slice(2),bn=document.createElement(F);bo[bq]="x";var bp=(bn[bq]!=="x");delete bo[bq];bn=null;return bp
}return false}var ao=bb("object");function aj(bn,F){for(var bp in F){var bo=F[bp];if(Object.isFunction(bo)&&!(bp in bn)){bn[bp]=bo.methodize()
}}}var bi={};function ax(bn){var F=L(bn);return(F in bi)}function ay(bo){if(!bo||ax(bo)){return bo}if(bo.nodeType!==Node.ELEMENT_NODE||bo==window){return bo
}var F=Object.clone(am),bn=bo.tagName.toUpperCase();if(aW[bn]){Object.extend(F,aW[bn])}aj(bo,F);bi[L(bo)]=true;return bo}function aR(bn){if(!bn||ax(bn)){return bn
}var F=bn.tagName;if(F&&(/^(?:object|applet|embed)$/i.test(F))){aj(bn,aE.Methods);aj(bn,aE.Methods.Simulated);aj(bn,aE.Methods.ByTag[F.toUpperCase()])
}return bn}if(aB.SpecificElementExtensions){ay=ao?aR:Prototype.K}function R(bn,F){bn=bn.toUpperCase();if(!aW[bn]){aW[bn]={}}Object.extend(aW[bn],F)
}function p(bn,bo,F){if(Object.isUndefined(F)){F=false}for(var bq in bo){var bp=bo[bq];if(!Object.isFunction(bp)){continue}if(!F||!(bq in bn)){bn[bq]=bp.methodize()
}}}function ah(bp){var F;var bo={OPTGROUP:"OptGroup",TEXTAREA:"TextArea",P:"Paragraph",FIELDSET:"FieldSet",UL:"UList",OL:"OList",DL:"DList",DIR:"Directory",H1:"Heading",H2:"Heading",H3:"Heading",H4:"Heading",H5:"Heading",H6:"Heading",Q:"Quote",INS:"Mod",DEL:"Mod",A:"Anchor",IMG:"Image",CAPTION:"TableCaption",COL:"TableCol",COLGROUP:"TableCol",THEAD:"TableSection",TFOOT:"TableSection",TBODY:"TableSection",TR:"TableRow",TH:"TableCell",TD:"TableCell",FRAMESET:"FrameSet",IFRAME:"IFrame"};
if(bo[bp]){F="HTML"+bo[bp]+"Element"}if(window[F]){return window[F]}F="HTML"+bp+"Element";if(window[F]){return window[F]}F="HTML"+bp.capitalize()+"Element";
if(window[F]){return window[F]}var bn=document.createElement(bp),bq=bn.__proto__||bn.constructor.prototype;bn=null;return bq}function Q(bp){if(arguments.length===0){E()
}if(arguments.length===2){var br=bp;bp=arguments[1]}if(!br){Object.extend(aE.Methods,bp||{})}else{if(Object.isArray(br)){for(var bq=0,bo;
bo=br[bq];bq++){R(bo,bp)}}else{R(br,bp)}}var bn=window.HTMLElement?HTMLElement.prototype:aE.prototype;if(aB.ElementExtensions){p(bn,aE.Methods);
p(bn,aE.Methods.Simulated,true)}if(aB.SpecificElementExtensions){for(var bo in aE.Methods.ByTag){var F=ah(bo);if(Object.isUndefined(F)){continue
}p(F.prototype,aW[bo])}}Object.extend(aE,aE.Methods);Object.extend(aE,aE.Methods.Simulated);delete aE.ByTag;delete aE.Simulated;aE.extend.refresh();
q={}}Object.extend(a7.Element,{extend:ay,addMethods:Q});if(ay===Prototype.K){a7.Element.extend.refresh=Prototype.emptyFunction}else{a7.Element.extend.refresh=function(){if(Prototype.BrowserFeatures.ElementExtensions){return
}Object.extend(am,aE.Methods);Object.extend(am,aE.Methods.Simulated);bi={}}}function E(){Object.extend(Form,Form.Methods);Object.extend(Form.Element,Form.Element.Methods);
Object.extend(aE.Methods.ByTag,{FORM:Object.clone(Form.Methods),INPUT:Object.clone(Form.Element.Methods),SELECT:Object.clone(Form.Element.Methods),TEXTAREA:Object.clone(Form.Element.Methods),BUTTON:Object.clone(Form.Element.Methods)})
}aE.addMethods(a2)})(this);(function(){function m(I){var H=I.match(/^(\d+)%?$/i);if(!H){return null}return(Number(H[1])/100)}function A(I,J){I=$(I);
var K=I.style[J];if(!K||K==="auto"){var H=document.defaultView.getComputedStyle(I,null);K=H?H[J]:null}if(J==="opacity"){return K?parseFloat(K):1
}return K==="auto"?null:K}function D(H,I){var J=H.style[I];if(!J&&H.currentStyle){J=H.currentStyle[I]}return J}function t(J,I){var L=J.offsetWidth;
var N=w(J,"borderLeftWidth",I)||0;var H=w(J,"borderRightWidth",I)||0;var K=w(J,"paddingLeft",I)||0;var M=w(J,"paddingRight",I)||0;return L-N-H-K-M
}if("currentStyle" in document.documentElement){A=D}function w(R,S,I){var L=null;if(Object.isElement(R)){L=R;R=A(L,S)}if(R===null||Object.isUndefined(R)){return null
}if((/^(?:-)?\d+(\.\d+)?(px)?$/i).test(R)){return window.parseFloat(R)}var M=R.include("%"),J=(I===document.viewport);if(/\d/.test(R)&&L&&L.runtimeStyle&&!(M&&J)){var H=L.style.left,Q=L.runtimeStyle.left;
L.runtimeStyle.left=L.currentStyle.left;L.style.left=R||0;R=L.style.pixelLeft;L.style.left=H;L.runtimeStyle.left=Q;return R}if(L&&M){I=I||L.parentNode;
var K=m(R),N=null;var P=S.include("left")||S.include("right")||S.include("width");var O=S.include("top")||S.include("bottom")||S.include("height");
if(I===document.viewport){if(P){N=document.viewport.getWidth()}else{if(O){N=document.viewport.getHeight()}}}else{if(P){N=$(I).measure("width")
}else{if(O){N=$(I).measure("height")}}}return(N===null)?0:N*K}return 0}function k(H){if(Object.isString(H)&&H.endsWith("px")){return H
}return H+"px"}function o(H){while(H&&H.parentNode){var I=H.getStyle("display");if(I==="none"){return false}H=$(H.parentNode)}return true
}var g=Prototype.K;if("currentStyle" in document.documentElement){g=function(H){if(!H.currentStyle.hasLayout){H.style.zoom=1}return H
}}function j(H){if(H.include("border")){H=H+"-width"}return H.camelize()}Element.Layout=Class.create(Hash,{initialize:function($super,I,H){$super();
this.element=$(I);Element.Layout.PROPERTIES.each(function(J){this._set(J,null)},this);if(H){this._preComputing=true;this._begin();Element.Layout.PROPERTIES.each(this._compute,this);
this._end();this._preComputing=false}},_set:function(I,H){return Hash.prototype.set.call(this,I,H)},set:function(I,H){throw"Properties of Element.Layout are read-only."
},get:function($super,I){var H=$super(I);return H===null?this._compute(I):H},_begin:function(){if(this._isPrepared()){return}var L=this.element;
if(o(L)){this._setPrepared(true);return}var N={position:L.style.position||"",width:L.style.width||"",visibility:L.style.visibility||"",display:L.style.display||""};
L.store("prototype_original_styles",N);var O=A(L,"position"),H=L.offsetWidth;if(H===0||H===null){L.style.display="block";H=L.offsetWidth
}var I=(O==="fixed")?document.viewport:L.parentNode;var P={visibility:"hidden",display:"block"};if(O!=="fixed"){P.position="absolute"
}L.setStyle(P);var J=L.offsetWidth,K;if(H&&(J===H)){K=t(L,I)}else{if(O==="absolute"||O==="fixed"){K=t(L,I)}else{var Q=L.parentNode,M=$(Q).getLayout();
K=M.get("width")-this.get("margin-left")-this.get("border-left")-this.get("padding-left")-this.get("padding-right")-this.get("border-right")-this.get("margin-right")
}}L.setStyle({width:K+"px"});this._setPrepared(true)},_end:function(){var I=this.element;var H=I.retrieve("prototype_original_styles");
I.store("prototype_original_styles",null);I.setStyle(H);this._setPrepared(false)},_compute:function(I){var H=Element.Layout.COMPUTATIONS;
if(!(I in H)){throw"Property not found."}return this._set(I,H[I].call(this,this.element))},_isPrepared:function(){return this.element.retrieve("prototype_element_layout_prepared",false)
},_setPrepared:function(H){return this.element.store("prototype_element_layout_prepared",H)},toObject:function(){var H=$A(arguments);
var I=(H.length===0)?Element.Layout.PROPERTIES:H.join(" ").split(" ");var J={};I.each(function(K){if(!Element.Layout.PROPERTIES.include(K)){return
}var L=this.get(K);if(L!=null){J[K]=L}},this);return J},toHash:function(){var H=this.toObject.apply(this,arguments);return new Hash(H)
},toCSS:function(){var H=$A(arguments);var J=(H.length===0)?Element.Layout.PROPERTIES:H.join(" ").split(" ");var I={};J.each(function(K){if(!Element.Layout.PROPERTIES.include(K)){return
}if(Element.Layout.COMPOSITE_PROPERTIES.include(K)){return}var L=this.get(K);if(L!=null){I[j(K)]=L+"px"}},this);return I},inspect:function(){return"#<Element.Layout>"
}});Object.extend(Element.Layout,{PROPERTIES:$w("height width top left right bottom border-left border-right border-top border-bottom padding-left padding-right padding-top padding-bottom margin-top margin-bottom margin-left margin-right padding-box-width padding-box-height border-box-width border-box-height margin-box-width margin-box-height"),COMPOSITE_PROPERTIES:$w("padding-box-width padding-box-height margin-box-width margin-box-height border-box-width border-box-height"),COMPUTATIONS:{height:function(J){if(!this._preComputing){this._begin()
}var H=this.get("border-box-height");if(H<=0){if(!this._preComputing){this._end()}return 0}var K=this.get("border-top"),I=this.get("border-bottom");
var M=this.get("padding-top"),L=this.get("padding-bottom");if(!this._preComputing){this._end()}return H-K-I-M-L},width:function(J){if(!this._preComputing){this._begin()
}var I=this.get("border-box-width");if(I<=0){if(!this._preComputing){this._end()}return 0}var M=this.get("border-left"),H=this.get("border-right");
var K=this.get("padding-left"),L=this.get("padding-right");if(!this._preComputing){this._end()}return I-M-H-K-L},"padding-box-height":function(I){var H=this.get("height"),K=this.get("padding-top"),J=this.get("padding-bottom");
return H+K+J},"padding-box-width":function(H){var I=this.get("width"),J=this.get("padding-left"),K=this.get("padding-right");return I+J+K
},"border-box-height":function(I){if(!this._preComputing){this._begin()}var H=I.offsetHeight;if(!this._preComputing){this._end()}return H
},"border-box-width":function(H){if(!this._preComputing){this._begin()}var I=H.offsetWidth;if(!this._preComputing){this._end()}return I
},"margin-box-height":function(I){var H=this.get("border-box-height"),J=this.get("margin-top"),K=this.get("margin-bottom");if(H<=0){return 0
}return H+J+K},"margin-box-width":function(J){var I=this.get("border-box-width"),K=this.get("margin-left"),H=this.get("margin-right");
if(I<=0){return 0}return I+K+H},top:function(H){var I=H.positionedOffset();return I.top},bottom:function(H){var K=H.positionedOffset(),I=H.getOffsetParent(),J=I.measure("height");
var L=this.get("border-box-height");return J-L-K.top},left:function(H){var I=H.positionedOffset();return I.left},right:function(J){var L=J.positionedOffset(),K=J.getOffsetParent(),H=K.measure("width");
var I=this.get("border-box-width");return H-I-L.left},"padding-top":function(H){return w(H,"paddingTop")},"padding-bottom":function(H){return w(H,"paddingBottom")
},"padding-left":function(H){return w(H,"paddingLeft")},"padding-right":function(H){return w(H,"paddingRight")},"border-top":function(H){return w(H,"borderTopWidth")
},"border-bottom":function(H){return w(H,"borderBottomWidth")},"border-left":function(H){return w(H,"borderLeftWidth")},"border-right":function(H){return w(H,"borderRightWidth")
},"margin-top":function(H){return w(H,"marginTop")},"margin-bottom":function(H){return w(H,"marginBottom")},"margin-left":function(H){return w(H,"marginLeft")
},"margin-right":function(H){return w(H,"marginRight")}}});if("getBoundingClientRect" in document.documentElement){Object.extend(Element.Layout.COMPUTATIONS,{right:function(I){var J=g(I.getOffsetParent());
var K=I.getBoundingClientRect(),H=J.getBoundingClientRect();return(H.right-K.right).round()},bottom:function(I){var J=g(I.getOffsetParent());
var K=I.getBoundingClientRect(),H=J.getBoundingClientRect();return(H.bottom-K.bottom).round()}})}Element.Offset=Class.create({initialize:function(I,H){this.left=I.round();
this.top=H.round();this[0]=this.left;this[1]=this.top},relativeTo:function(H){return new Element.Offset(this.left-H.left,this.top-H.top)
},inspect:function(){return"#<Element.Offset left: #{left} top: #{top}>".interpolate(this)},toString:function(){return"[#{left}, #{top}]".interpolate(this)
},toArray:function(){return[this.left,this.top]}});function B(I,H){return new Element.Layout(I,H)}function d(H,I){return $(H).getLayout().get(I)
}function s(H){return Element.getDimensions(H).height}function c(H){return Element.getDimensions(H).width}function u(I){I=$(I);var M=Element.getStyle(I,"display");
if(M&&M!=="none"){return{width:I.offsetWidth,height:I.offsetHeight}}var J=I.style;var H={visibility:J.visibility,position:J.position,display:J.display};
var L={visibility:"hidden",display:"block"};if(H.position!=="fixed"){L.position="absolute"}Element.setStyle(I,L);var K={width:I.offsetWidth,height:I.offsetHeight};
Element.setStyle(I,H);return K}function r(H){H=$(H);if(h(H)||f(H)||q(H)||p(H)){return $(document.body)}var I=(Element.getStyle(H,"display")==="inline");
if(!I&&H.offsetParent){return $(H.offsetParent)}while((H=H.parentNode)&&H!==document.body){if(Element.getStyle(H,"position")!=="static"){return p(H)?$(document.body):$(H)
}}return $(document.body)}function E(I){I=$(I);var H=0,J=0;if(I.parentNode){do{H+=I.offsetTop||0;J+=I.offsetLeft||0;I=I.offsetParent}while(I)
}return new Element.Offset(J,H)}function y(I){I=$(I);var J=I.getLayout();var H=0,L=0;do{H+=I.offsetTop||0;L+=I.offsetLeft||0;I=I.offsetParent;
if(I){if(q(I)){break}var K=Element.getStyle(I,"position");if(K!=="static"){break}}}while(I);L-=J.get("margin-top");H-=J.get("margin-left");
return new Element.Offset(L,H)}function b(I){var H=0,J=0;do{H+=I.scrollTop||0;J+=I.scrollLeft||0;I=I.parentNode}while(I);return new Element.Offset(J,H)
}function C(L){var H=0,K=0,J=document.body;var I=$(L);do{H+=I.offsetTop||0;K+=I.offsetLeft||0;if(I.offsetParent==J&&Element.getStyle(I,"position")=="absolute"){break
}}while(I=I.offsetParent);I=L;do{if(I!=J){H-=I.scrollTop||0;K-=I.scrollLeft||0}}while(I=I.parentNode);return new Element.Offset(K,H)}function z(H){H=$(H);
if(Element.getStyle(H,"position")==="absolute"){return H}var L=r(H);var K=H.viewportOffset(),I=L.viewportOffset();var M=K.relativeTo(I);
var J=H.getLayout();H.store("prototype_absolutize_original_styles",{left:H.getStyle("left"),top:H.getStyle("top"),width:H.getStyle("width"),height:H.getStyle("height")});
H.setStyle({position:"absolute",top:M.top+"px",left:M.left+"px",width:J.get("width")+"px",height:J.get("height")+"px"});return H}function n(I){I=$(I);
if(Element.getStyle(I,"position")==="relative"){return I}var H=I.retrieve("prototype_absolutize_original_styles");if(H){I.setStyle(H)
}return I}function a(H){H=$(H);var I=Element.cumulativeOffset(H);window.scrollTo(I.left,I.top);return H}function x(I){I=$(I);var H=Element.getStyle(I,"position"),J={};
if(H==="static"||!H){J.position="relative";if(Prototype.Browser.Opera){J.top=0;J.left=0}Element.setStyle(I,J);Element.store(I,"prototype_made_positioned",true)
}return I}function v(H){H=$(H);var J=Element.getStorage(H),I=J.get("prototype_made_positioned");if(I){J.unset("prototype_made_positioned");
Element.setStyle(H,{position:"",top:"",bottom:"",left:"",right:""})}return H}function e(I){I=$(I);var K=Element.getStorage(I),H=K.get("prototype_made_clipping");
if(Object.isUndefined(H)){var J=Element.getStyle(I,"overflow");K.set("prototype_made_clipping",J);if(J!=="hidden"){I.style.overflow="hidden"
}}return I}function F(H){H=$(H);var J=Element.getStorage(H),I=J.get("prototype_made_clipping");if(!Object.isUndefined(I)){J.unset("prototype_made_clipping");
H.style.overflow=I||""}return H}function G(I,M,H){H=Object.extend({setLeft:true,setTop:true,setWidth:true,setHeight:true,offsetTop:0,offsetLeft:0},H||{});
M=$(M);I=$(I);var N,O,L,K={};if(H.setLeft||H.setTop){N=Element.viewportOffset(M);O=[0,0];if(Element.getStyle(I,"position")==="absolute"){var J=Element.getOffsetParent(I);
if(J!==document.body){O=Element.viewportOffset(J)}}}if(H.setWidth||H.setHeight){L=Element.getLayout(M)}if(H.setLeft){K.left=(N[0]-O[0]+H.offsetLeft)+"px"
}if(H.setTop){K.top=(N[1]-O[1]+H.offsetTop)+"px"}if(H.setWidth){K.width=L.get("border-box-width")+"px"}if(H.setHeight){K.height=L.get("border-box-height")+"px"
}return Element.setStyle(I,K)}if(Prototype.Browser.IE){r=r.wrap(function(J,I){I=$(I);if(h(I)||f(I)||q(I)||p(I)){return $(document.body)
}var H=I.getStyle("position");if(H!=="static"){return J(I)}I.setStyle({position:"relative"});var K=J(I);I.setStyle({position:H});return K
});y=y.wrap(function(K,I){I=$(I);if(!I.parentNode){return new Element.Offset(0,0)}var H=I.getStyle("position");if(H!=="static"){return K(I)
}var J=I.getOffsetParent();if(J&&J.getStyle("position")==="fixed"){g(J)}I.setStyle({position:"relative"});var L=K(I);I.setStyle({position:H});
return L})}else{if(Prototype.Browser.Webkit){E=function(I){I=$(I);var H=0,J=0;do{H+=I.offsetTop||0;J+=I.offsetLeft||0;if(I.offsetParent==document.body){if(Element.getStyle(I,"position")=="absolute"){break
}}I=I.offsetParent}while(I);return new Element.Offset(J,H)}}}Element.addMethods({getLayout:B,measure:d,getWidth:c,getHeight:s,getDimensions:u,getOffsetParent:r,cumulativeOffset:E,positionedOffset:y,cumulativeScrollOffset:b,viewportOffset:C,absolutize:z,relativize:n,scrollTo:a,makePositioned:x,undoPositioned:v,makeClipping:e,undoClipping:F,clonePosition:G});
function q(H){return H.nodeName.toUpperCase()==="BODY"}function p(H){return H.nodeName.toUpperCase()==="HTML"}function h(H){return H.nodeType===Node.DOCUMENT_NODE
}function f(H){return H!==document.body&&!Element.descendantOf(H,document.body)}if("getBoundingClientRect" in document.documentElement){Element.addMethods({viewportOffset:function(H){H=$(H);
if(f(H)){return new Element.Offset(0,0)}var I=H.getBoundingClientRect(),J=document.documentElement;return new Element.Offset(I.left-J.clientLeft,I.top-J.clientTop)
}})}})();(function(){var c=Prototype.Browser.Opera&&(window.parseFloat(window.opera.version())<9.5);var f=null;function b(){if(f){return f
}f=c?document.body:document.documentElement;return f}function d(){return{width:this.getWidth(),height:this.getHeight()}}function a(){return b().clientWidth
}function g(){return b().clientHeight}function e(){var h=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft;
var j=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;return new Element.Offset(h,j)}document.viewport={getDimensions:d,getWidth:a,getHeight:g,getScrollOffsets:e}
})();window.$$=function(){var a=$A(arguments).join(", ");return Prototype.Selector.select(a,document)};Prototype.Selector=(function(){function a(){throw new Error('Method "Prototype.Selector.select" must be defined.')
}function c(){throw new Error('Method "Prototype.Selector.match" must be defined.')}function d(m,n,h){h=h||0;var g=Prototype.Selector.match,k=m.length,f=0,j;
for(j=0;j<k;j++){if(g(m[j],n)&&h==f++){return Element.extend(m[j])}}}function e(h){for(var f=0,g=h.length;f<g;f++){Element.extend(h[f])
}return h}var b=Prototype.K;return{select:a,match:c,find:d,extendElements:(Element.extend===b)?b:e,extendElement:Element.extend}})();
/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2011, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var n=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,o=0,r=Object.prototype.toString,g=false,f=true,p=/\\/g,v=/\W/;
[0,0].sort(function(){f=false;return 0});var c=function(A,e,D,E){D=D||[];e=e||document;var G=e;if(e.nodeType!==1&&e.nodeType!==9){return[]
}if(!A||typeof A!=="string"){return D}var x,I,L,w,H,K,J,C,z=true,y=c.isXML(e),B=[],F=A;do{n.exec("");x=n.exec(F);if(x){F=x[3];B.push(x[1]);
if(x[2]){w=x[3];break}}}while(x);if(B.length>1&&h.exec(A)){if(B.length===2&&j.relative[B[0]]){I=s(B[0]+B[1],e)}else{I=j.relative[B[0]]?[e]:c(B.shift(),e);
while(B.length){A=B.shift();if(j.relative[A]){A+=B.shift()}I=s(A,I)}}}else{if(!E&&B.length>1&&e.nodeType===9&&!y&&j.match.ID.test(B[0])&&!j.match.ID.test(B[B.length-1])){H=c.find(B.shift(),e,y);
e=H.expr?c.filter(H.expr,H.set)[0]:H.set[0]}if(e){H=E?{expr:B.pop(),set:k(E)}:c.find(B.pop(),B.length===1&&(B[0]==="~"||B[0]==="+")&&e.parentNode?e.parentNode:e,y);
I=H.expr?c.filter(H.expr,H.set):H.set;if(B.length>0){L=k(I)}else{z=false}while(B.length){K=B.pop();J=K;if(!j.relative[K]){K=""}else{J=B.pop()
}if(J==null){J=e}j.relative[K](L,J,y)}}else{L=B=[]}}if(!L){L=I}if(!L){c.error(K||A)}if(r.call(L)==="[object Array]"){if(!z){D.push.apply(D,L)
}else{if(e&&e.nodeType===1){for(C=0;L[C]!=null;C++){if(L[C]&&(L[C]===true||L[C].nodeType===1&&c.contains(e,L[C]))){D.push(I[C])}}}else{for(C=0;
L[C]!=null;C++){if(L[C]&&L[C].nodeType===1){D.push(I[C])}}}}}else{k(L,D)}if(w){c(w,G,D,E);c.uniqueSort(D)}return D};c.uniqueSort=function(w){if(q){g=f;
w.sort(q);if(g){for(var e=1;e<w.length;e++){if(w[e]===w[e-1]){w.splice(e--,1)}}}}return w};c.matches=function(e,w){return c(e,null,null,w)
};c.matchesSelector=function(e,w){return c(w,null,null,[e]).length>0};c.find=function(C,e,D){var B;if(!C){return[]}for(var y=0,x=j.order.length;
y<x;y++){var z,A=j.order[y];if((z=j.leftMatch[A].exec(C))){var w=z[1];z.splice(1,1);if(w.substr(w.length-1)!=="\\"){z[1]=(z[1]||"").replace(p,"");
B=j.find[A](z,e,D);if(B!=null){C=C.replace(j.match[A],"");break}}}}if(!B){B=typeof e.getElementsByTagName!=="undefined"?e.getElementsByTagName("*"):[]
}return{set:B,expr:C}};c.filter=function(G,F,J,z){var B,e,x=G,L=[],D=F,C=F&&F[0]&&c.isXML(F[0]);while(G&&F.length){for(var E in j.filter){if((B=j.leftMatch[E].exec(G))!=null&&B[2]){var K,I,w=j.filter[E],y=B[1];
e=false;B.splice(1,1);if(y.substr(y.length-1)==="\\"){continue}if(D===L){L=[]}if(j.preFilter[E]){B=j.preFilter[E](B,D,J,L,z,C);if(!B){e=K=true
}else{if(B===true){continue}}}if(B){for(var A=0;(I=D[A])!=null;A++){if(I){K=w(I,B,A,D);var H=z^!!K;if(J&&K!=null){if(H){e=true}else{D[A]=false
}}else{if(H){L.push(I);e=true}}}}}if(K!==undefined){if(!J){D=L}G=G.replace(j.match[E],"");if(!e){return[]}break}}}if(G===x){if(e==null){c.error(G)
}else{break}}x=G}return D};c.error=function(e){throw"Syntax error, unrecognized expression: "+e};var j=c.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(e){return e.getAttribute("href")
},type:function(e){return e.getAttribute("type")}},relative:{"+":function(B,w){var y=typeof w==="string",A=y&&!v.test(w),C=y&&!A;if(A){w=w.toLowerCase()
}for(var x=0,e=B.length,z;x<e;x++){if((z=B[x])){while((z=z.previousSibling)&&z.nodeType!==1){}B[x]=C||z&&z.nodeName.toLowerCase()===w?z||false:z===w
}}if(C){c.filter(w,B,true)}},">":function(B,w){var A,z=typeof w==="string",x=0,e=B.length;if(z&&!v.test(w)){w=w.toLowerCase();for(;x<e;
x++){A=B[x];if(A){var y=A.parentNode;B[x]=y.nodeName.toLowerCase()===w?y:false}}}else{for(;x<e;x++){A=B[x];if(A){B[x]=z?A.parentNode:A.parentNode===w
}}if(z){c.filter(w,B,true)}}},"":function(y,w,A){var z,x=o++,e=t;if(typeof w==="string"&&!v.test(w)){w=w.toLowerCase();z=w;e=a}e("parentNode",w,x,y,z,A)
},"~":function(y,w,A){var z,x=o++,e=t;if(typeof w==="string"&&!v.test(w)){w=w.toLowerCase();z=w;e=a}e("previousSibling",w,x,y,z,A)}},find:{ID:function(w,x,y){if(typeof x.getElementById!=="undefined"&&!y){var e=x.getElementById(w[1]);
return e&&e.parentNode?[e]:[]}},NAME:function(x,A){if(typeof A.getElementsByName!=="undefined"){var w=[],z=A.getElementsByName(x[1]);
for(var y=0,e=z.length;y<e;y++){if(z[y].getAttribute("name")===x[1]){w.push(z[y])}}return w.length===0?null:w}},TAG:function(e,w){if(typeof w.getElementsByTagName!=="undefined"){return w.getElementsByTagName(e[1])
}}},preFilter:{CLASS:function(y,w,x,e,B,C){y=" "+y[1].replace(p,"")+" ";if(C){return y}for(var z=0,A;(A=w[z])!=null;z++){if(A){if(B^(A.className&&(" "+A.className+" ").replace(/[\t\n\r]/g," ").indexOf(y)>=0)){if(!x){e.push(A)
}}else{if(x){w[z]=false}}}}return false},ID:function(e){return e[1].replace(p,"")},TAG:function(w,e){return w[1].replace(p,"").toLowerCase()
},CHILD:function(e){if(e[1]==="nth"){if(!e[2]){c.error(e[0])}e[2]=e[2].replace(/^\+|\s*/g,"");var w=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2]==="even"&&"2n"||e[2]==="odd"&&"2n+1"||!/\D/.test(e[2])&&"0n+"+e[2]||e[2]);
e[2]=(w[1]+(w[2]||1))-0;e[3]=w[3]-0}else{if(e[2]){c.error(e[0])}}e[0]=o++;return e},ATTR:function(z,w,x,e,A,B){var y=z[1]=z[1].replace(p,"");
if(!B&&j.attrMap[y]){z[1]=j.attrMap[y]}z[4]=(z[4]||z[5]||"").replace(p,"");if(z[2]==="~="){z[4]=" "+z[4]+" "}return z},PSEUDO:function(z,w,x,e,A){if(z[1]==="not"){if((n.exec(z[3])||"").length>1||/^\w/.test(z[3])){z[3]=c(z[3],null,null,w)
}else{var y=c.filter(z[3],w,x,true^A);if(!x){e.push.apply(e,y)}return false}}else{if(j.match.POS.test(z[0])||j.match.CHILD.test(z[0])){return true
}}return z},POS:function(e){e.unshift(true);return e}},filters:{enabled:function(e){return e.disabled===false&&e.type!=="hidden"},disabled:function(e){return e.disabled===true
},checked:function(e){return e.checked===true},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex}return e.selected===true
},parent:function(e){return !!e.firstChild},empty:function(e){return !e.firstChild},has:function(x,w,e){return !!c(e[3],x).length},header:function(e){return(/h\d/i).test(e.nodeName)
},text:function(x){var e=x.getAttribute("type"),w=x.type;return x.nodeName.toLowerCase()==="input"&&"text"===w&&(e===w||e===null)},radio:function(e){return e.nodeName.toLowerCase()==="input"&&"radio"===e.type
},checkbox:function(e){return e.nodeName.toLowerCase()==="input"&&"checkbox"===e.type},file:function(e){return e.nodeName.toLowerCase()==="input"&&"file"===e.type
},password:function(e){return e.nodeName.toLowerCase()==="input"&&"password"===e.type},submit:function(w){var e=w.nodeName.toLowerCase();
return(e==="input"||e==="button")&&"submit"===w.type},image:function(e){return e.nodeName.toLowerCase()==="input"&&"image"===e.type},reset:function(w){var e=w.nodeName.toLowerCase();
return(e==="input"||e==="button")&&"reset"===w.type},button:function(w){var e=w.nodeName.toLowerCase();return e==="input"&&"button"===w.type||e==="button"
},input:function(e){return(/input|select|textarea|button/i).test(e.nodeName)},focus:function(e){return e===e.ownerDocument.activeElement
}},setFilters:{first:function(w,e){return e===0},last:function(x,w,e,y){return w===y.length-1},even:function(w,e){return e%2===0},odd:function(w,e){return e%2===1
},lt:function(x,w,e){return w<e[3]-0},gt:function(x,w,e){return w>e[3]-0},nth:function(x,w,e){return e[3]-0===w},eq:function(x,w,e){return e[3]-0===w
}},filter:{PSEUDO:function(x,C,B,D){var e=C[1],w=j.filters[e];if(w){return w(x,B,C,D)}else{if(e==="contains"){return(x.textContent||x.innerText||c.getText([x])||"").indexOf(C[3])>=0
}else{if(e==="not"){var y=C[3];for(var A=0,z=y.length;A<z;A++){if(y[A]===x){return false}}return true}else{c.error(e)}}}},CHILD:function(e,y){var B=y[1],w=e;
switch(B){case"only":case"first":while((w=w.previousSibling)){if(w.nodeType===1){return false}}if(B==="first"){return true}w=e;case"last":while((w=w.nextSibling)){if(w.nodeType===1){return false
}}return true;case"nth":var x=y[2],E=y[3];if(x===1&&E===0){return true}var A=y[0],D=e.parentNode;if(D&&(D.sizcache!==A||!e.nodeIndex)){var z=0;
for(w=D.firstChild;w;w=w.nextSibling){if(w.nodeType===1){w.nodeIndex=++z}}D.sizcache=A}var C=e.nodeIndex-E;if(x===0){return C===0}else{return(C%x===0&&C/x>=0)
}}},ID:function(w,e){return w.nodeType===1&&w.getAttribute("id")===e},TAG:function(w,e){return(e==="*"&&w.nodeType===1)||w.nodeName.toLowerCase()===e
},CLASS:function(w,e){return(" "+(w.className||w.getAttribute("class"))+" ").indexOf(e)>-1},ATTR:function(A,y){var x=y[1],e=j.attrHandle[x]?j.attrHandle[x](A):A[x]!=null?A[x]:A.getAttribute(x),B=e+"",z=y[2],w=y[4];
return e==null?z==="!=":z==="="?B===w:z==="*="?B.indexOf(w)>=0:z==="~="?(" "+B+" ").indexOf(w)>=0:!w?B&&e!==false:z==="!="?B!==w:z==="^="?B.indexOf(w)===0:z==="$="?B.substr(B.length-w.length)===w:z==="|="?B===w||B.substr(0,w.length+1)===w+"-":false
},POS:function(z,w,x,A){var e=w[2],y=j.setFilters[e];if(y){return y(z,x,w,A)}}}};var h=j.match.POS,b=function(w,e){return"\\"+(e-0+1)
};for(var d in j.match){j.match[d]=new RegExp(j.match[d].source+(/(?![^\[]*\])(?![^\(]*\))/.source));j.leftMatch[d]=new RegExp(/(^(?:.|\r|\n)*?)/.source+j.match[d].source.replace(/\\(\d+)/g,b))
}var k=function(w,e){w=Array.prototype.slice.call(w,0);if(e){e.push.apply(e,w);return e}return w};try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType
}catch(u){k=function(z,y){var x=0,w=y||[];if(r.call(z)==="[object Array]"){Array.prototype.push.apply(w,z)}else{if(typeof z.length==="number"){for(var e=z.length;
x<e;x++){w.push(z[x])}}else{for(;z[x];x++){w.push(z[x])}}}return w}}var q,m;if(document.documentElement.compareDocumentPosition){q=function(w,e){if(w===e){g=true;
return 0}if(!w.compareDocumentPosition||!e.compareDocumentPosition){return w.compareDocumentPosition?-1:1}return w.compareDocumentPosition(e)&4?-1:1
}}else{q=function(D,C){if(D===C){g=true;return 0}else{if(D.sourceIndex&&C.sourceIndex){return D.sourceIndex-C.sourceIndex}}var A,w,x=[],e=[],z=D.parentNode,B=C.parentNode,E=z;
if(z===B){return m(D,C)}else{if(!z){return -1}else{if(!B){return 1}}}while(E){x.unshift(E);E=E.parentNode}E=B;while(E){e.unshift(E);E=E.parentNode
}A=x.length;w=e.length;for(var y=0;y<A&&y<w;y++){if(x[y]!==e[y]){return m(x[y],e[y])}}return y===A?m(D,e[y],-1):m(x[y],C,1)};m=function(w,e,x){if(w===e){return x
}var y=w.nextSibling;while(y){if(y===e){return -1}y=y.nextSibling}return 1}}c.getText=function(e){var w="",y;for(var x=0;e[x];x++){y=e[x];
if(y.nodeType===3||y.nodeType===4){w+=y.nodeValue}else{if(y.nodeType!==8){w+=c.getText(y.childNodes)}}}return w};(function(){var w=document.createElement("div"),x="script"+(new Date()).getTime(),e=document.documentElement;
w.innerHTML="<a name='"+x+"'/>";e.insertBefore(w,e.firstChild);if(document.getElementById(x)){j.find.ID=function(z,A,B){if(typeof A.getElementById!=="undefined"&&!B){var y=A.getElementById(z[1]);
return y?y.id===z[1]||typeof y.getAttributeNode!=="undefined"&&y.getAttributeNode("id").nodeValue===z[1]?[y]:undefined:[]}};j.filter.ID=function(A,y){var z=typeof A.getAttributeNode!=="undefined"&&A.getAttributeNode("id");
return A.nodeType===1&&z&&z.nodeValue===y}}e.removeChild(w);e=w=null})();(function(){var e=document.createElement("div");e.appendChild(document.createComment(""));
if(e.getElementsByTagName("*").length>0){j.find.TAG=function(w,A){var z=A.getElementsByTagName(w[1]);if(w[1]==="*"){var y=[];for(var x=0;
z[x];x++){if(z[x].nodeType===1){y.push(z[x])}}z=y}return z}}e.innerHTML="<a href='#'></a>";if(e.firstChild&&typeof e.firstChild.getAttribute!=="undefined"&&e.firstChild.getAttribute("href")!=="#"){j.attrHandle.href=function(w){return w.getAttribute("href",2)
}}e=null})();if(document.querySelectorAll){(function(){var e=c,y=document.createElement("div"),x="__sizzle__";y.innerHTML="<p class='TEST'></p>";
if(y.querySelectorAll&&y.querySelectorAll(".TEST").length===0){return}c=function(J,A,E,I){A=A||document;if(!I&&!c.isXML(A)){var H=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(J);
if(H&&(A.nodeType===1||A.nodeType===9)){if(H[1]){return k(A.getElementsByTagName(J),E)}else{if(H[2]&&j.find.CLASS&&A.getElementsByClassName){return k(A.getElementsByClassName(H[2]),E)
}}}if(A.nodeType===9){if(J==="body"&&A.body){return k([A.body],E)}else{if(H&&H[3]){var D=A.getElementById(H[3]);if(D&&D.parentNode){if(D.id===H[3]){return k([D],E)
}}else{return k([],E)}}}try{return k(A.querySelectorAll(J),E)}catch(F){}}else{if(A.nodeType===1&&A.nodeName.toLowerCase()!=="object"){var B=A,C=A.getAttribute("id"),z=C||x,L=A.parentNode,K=/^\s*[+~]/.test(J);
if(!C){A.setAttribute("id",z)}else{z=z.replace(/'/g,"\\$&")}if(K&&L){A=A.parentNode}try{if(!K||L){return k(A.querySelectorAll("[id='"+z+"'] "+J),E)
}}catch(G){}finally{if(!C){B.removeAttribute("id")}}}}}return e(J,A,E,I)};for(var w in e){c[w]=e[w]}y=null})()}(function(){var e=document.documentElement,x=e.matchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.msMatchesSelector;
if(x){var z=!x.call(document.createElement("div"),"div"),w=false;try{x.call(document.documentElement,"[test!='']:sizzle")}catch(y){w=true
}c.matchesSelector=function(B,D){D=D.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!c.isXML(B)){try{if(w||!j.match.PSEUDO.test(D)&&!/!=/.test(D)){var A=x.call(B,D);
if(A||!z||B.document&&B.document.nodeType!==11){return A}}}catch(C){}}return c(D,null,null,[B]).length>0}}})();(function(){var e=document.createElement("div");
e.innerHTML="<div class='test e'></div><div class='test'></div>";if(!e.getElementsByClassName||e.getElementsByClassName("e").length===0){return
}e.lastChild.className="e";if(e.getElementsByClassName("e").length===1){return}j.order.splice(1,0,"CLASS");j.find.CLASS=function(w,x,y){if(typeof x.getElementsByClassName!=="undefined"&&!y){return x.getElementsByClassName(w[1])
}};e=null})();function a(w,B,A,E,C,D){for(var y=0,x=E.length;y<x;y++){var e=E[y];if(e){var z=false;e=e[w];while(e){if(e.sizcache===A){z=E[e.sizset];
break}if(e.nodeType===1&&!D){e.sizcache=A;e.sizset=y}if(e.nodeName.toLowerCase()===B){z=e;break}e=e[w]}E[y]=z}}}function t(w,B,A,E,C,D){for(var y=0,x=E.length;
y<x;y++){var e=E[y];if(e){var z=false;e=e[w];while(e){if(e.sizcache===A){z=E[e.sizset];break}if(e.nodeType===1){if(!D){e.sizcache=A;e.sizset=y
}if(typeof B!=="string"){if(e===B){z=true;break}}else{if(c.filter(B,[e]).length>0){z=e;break}}}e=e[w]}E[y]=z}}}if(document.documentElement.contains){c.contains=function(w,e){return w!==e&&(w.contains?w.contains(e):true)
}}else{if(document.documentElement.compareDocumentPosition){c.contains=function(w,e){return !!(w.compareDocumentPosition(e)&16)}}else{c.contains=function(){return false
}}}c.isXML=function(e){var w=(e?e.ownerDocument||e:0).documentElement;return w?w.nodeName!=="HTML":false};var s=function(e,C){var A,y=[],z="",x=C.nodeType?[C]:C;
while((A=j.match.PSEUDO.exec(e))){z+=A[0];e=e.replace(j.match.PSEUDO,"")}e=j.relative[e]?e+"*":e;for(var B=0,w=x.length;B<w;B++){c(e,x[B],y)
}return c.filter(z,y)};window.Sizzle=c})();Prototype._original_property=window.Sizzle;(function(c){var d=Prototype.Selector.extendElements;
function a(e,f){return d(c(e,f||document))}function b(f,e){return c.matches(e,[f]).length==1}Prototype.Selector.engine=c;Prototype.Selector.select=a;
Prototype.Selector.match=b})(Sizzle);window.Sizzle=Prototype._original_property;delete Prototype._original_property;var Form={reset:function(a){a=$(a);
a.reset();return a},serializeElements:function(h,d){if(typeof d!="object"){d={hash:!!d}}else{if(Object.isUndefined(d.hash)){d.hash=true
}}var e,g,a=false,f=d.submit,b,c;if(d.hash){c={};b=function(j,k,m){if(k in j){if(!Object.isArray(j[k])){j[k]=[j[k]]}j[k].push(m)}else{j[k]=m
}return j}}else{c="";b=function(j,k,m){m=m.gsub(/(\r)?\n/,"\r\n");m=encodeURIComponent(m);m=m.gsub(/%20/,"+");return j+(j?"&":"")+encodeURIComponent(k)+"="+m
}}return h.inject(c,function(j,k){if(!k.disabled&&k.name){e=k.name;g=$(k).getValue();if(g!=null&&k.type!="file"&&(k.type!="submit"||(!a&&f!==false&&(!f||e==f)&&(a=true)))){j=b(j,e,g)
}}return j})}};Form.Methods={serialize:function(b,a){return Form.serializeElements(Form.getElements(b),a)},getElements:function(e){var f=$(e).getElementsByTagName("*");
var d,c=[],b=Form.Element.Serializers;for(var a=0;d=f[a];a++){if(b[d.tagName.toLowerCase()]){c.push(Element.extend(d))}}return c},getInputs:function(g,c,d){g=$(g);
var a=g.getElementsByTagName("input");if(!c&&!d){return $A(a).map(Element.extend)}for(var e=0,h=[],f=a.length;e<f;e++){var b=a[e];if((c&&b.type!=c)||(d&&b.name!=d)){continue
}h.push(Element.extend(b))}return h},disable:function(a){a=$(a);Form.getElements(a).invoke("disable");return a},enable:function(a){a=$(a);
Form.getElements(a).invoke("enable");return a},findFirstElement:function(b){var c=$(b).getElements().findAll(function(d){return"hidden"!=d.type&&!d.disabled
});var a=c.findAll(function(d){return d.hasAttribute("tabIndex")&&d.tabIndex>=0}).sortBy(function(d){return d.tabIndex}).first();return a?a:c.find(function(d){return/^(?:input|select|textarea)$/i.test(d.tagName)
})},focusFirstElement:function(b){b=$(b);var a=b.findFirstElement();if(a){a.activate()}return b},request:function(b,a){b=$(b),a=Object.clone(a||{});
var d=a.parameters,c=b.readAttribute("action")||"";if(c.blank()){c=window.location.href}a.parameters=b.serialize(true);if(d){if(Object.isString(d)){d=d.toQueryParams()
}Object.extend(a.parameters,d)}if(b.hasAttribute("method")&&!a.method){a.method=b.method}return new Ajax.Request(c,a)}};Form.Element={focus:function(a){$(a).focus();
return a},select:function(a){$(a).select();return a}};Form.Element.Methods={serialize:function(a){a=$(a);if(!a.disabled&&a.name){var b=a.getValue();
if(b!=undefined){var c={};c[a.name]=b;return Object.toQueryString(c)}}return""},getValue:function(a){a=$(a);var b=a.tagName.toLowerCase();
return Form.Element.Serializers[b](a)},setValue:function(a,b){a=$(a);var c=a.tagName.toLowerCase();Form.Element.Serializers[c](a,b);return a
},clear:function(a){$(a).value="";return a},present:function(a){return $(a).value!=""},activate:function(a){a=$(a);try{a.focus();if(a.select&&(a.tagName.toLowerCase()!="input"||!(/^(?:button|reset|submit)$/i.test(a.type)))){a.select()
}}catch(b){}return a},disable:function(a){a=$(a);a.disabled=true;return a},enable:function(a){a=$(a);a.disabled=false;return a}};var Field=Form.Element;
var $F=Form.Element.Methods.getValue;Form.Element.Serializers=(function(){function b(h,j){switch(h.type.toLowerCase()){case"checkbox":case"radio":return f(h,j);
default:return e(h,j)}}function f(h,j){if(Object.isUndefined(j)){return h.checked?h.value:null}else{h.checked=!!j}}function e(h,j){if(Object.isUndefined(j)){return h.value
}else{h.value=j}}function a(k,o){if(Object.isUndefined(o)){return(k.type==="select-one"?c:d)(k)}var j,m,p=!Object.isArray(o);for(var h=0,n=k.length;
h<n;h++){j=k.options[h];m=this.optionValue(j);if(p){if(m==o){j.selected=true;return}}else{j.selected=o.include(m)}}}function c(j){var h=j.selectedIndex;
return h>=0?g(j.options[h]):null}function d(m){var h,n=m.length;if(!n){return null}for(var k=0,h=[];k<n;k++){var j=m.options[k];if(j.selected){h.push(g(j))
}}return h}function g(h){return Element.hasAttribute(h,"value")?h.value:h.text}return{input:b,inputSelector:f,textarea:e,select:a,selectOne:c,selectMany:d,optionValue:g,button:e}
})();Abstract.TimedObserver=Class.create(PeriodicalExecuter,{initialize:function($super,a,b,c){$super(c,b);this.element=$(a);this.lastValue=this.getValue()
},execute:function(){var a=this.getValue();if(Object.isString(this.lastValue)&&Object.isString(a)?this.lastValue!=a:String(this.lastValue)!=String(a)){this.callback(this.element,a);
this.lastValue=a}}});Form.Element.Observer=Class.create(Abstract.TimedObserver,{getValue:function(){return Form.Element.getValue(this.element)
}});Form.Observer=Class.create(Abstract.TimedObserver,{getValue:function(){return Form.serialize(this.element)}});Abstract.EventObserver=Class.create({initialize:function(a,b){this.element=$(a);
this.callback=b;this.lastValue=this.getValue();if(this.element.tagName.toLowerCase()=="form"){this.registerFormCallbacks()}else{this.registerCallback(this.element)
}},onElementEvent:function(){var a=this.getValue();if(this.lastValue!=a){this.callback(this.element,a);this.lastValue=a}},registerFormCallbacks:function(){Form.getElements(this.element).each(this.registerCallback,this)
},registerCallback:function(a){if(a.type){switch(a.type.toLowerCase()){case"checkbox":case"radio":Event.observe(a,"click",this.onElementEvent.bind(this));
break;default:Event.observe(a,"change",this.onElementEvent.bind(this));break}}}});Form.Element.EventObserver=Class.create(Abstract.EventObserver,{getValue:function(){return Form.Element.getValue(this.element)
}});Form.EventObserver=Class.create(Abstract.EventObserver,{getValue:function(){return Form.serialize(this.element)}});(function(F){var w=document.createElement("div");
var d=document.documentElement;var m="onmouseenter" in d&&"onmouseleave" in d;var N={KEY_BACKSPACE:8,KEY_TAB:9,KEY_RETURN:13,KEY_ESC:27,KEY_LEFT:37,KEY_UP:38,KEY_RIGHT:39,KEY_DOWN:40,KEY_DELETE:46,KEY_HOME:36,KEY_END:35,KEY_PAGEUP:33,KEY_PAGEDOWN:34,KEY_INSERT:45};
var B=function(Z){return false};if(window.attachEvent){if(window.addEventListener){B=function(Z){return !(Z instanceof window.Event)}
}else{B=function(Z){return true}}}var Q;function O(aa,Z){return aa.which?(aa.which===Z+1):(aa.button===Z)}var Y={0:1,1:4,2:2};function U(aa,Z){return aa.button===Y[Z]
}function R(aa,Z){switch(Z){case 0:return aa.which==1&&!aa.metaKey;case 1:return aa.which==2||(aa.which==1&&aa.metaKey);case 2:return aa.which==3;
default:return false}}if(window.attachEvent){if(!window.addEventListener){Q=U}else{Q=function(aa,Z){return B(aa)?U(aa,Z):O(aa,Z)}}}else{if(Prototype.Browser.WebKit){Q=R
}else{Q=O}}function D(Z){return Q(Z,0)}function j(Z){return Q(Z,1)}function e(Z){return Q(Z,2)}function q(Z){return Element.extend(M(Z))
}function M(ab){ab=N.extend(ab);var aa=ab.target,Z=ab.type,ac=ab.currentTarget;if(ac&&ac.tagName){if(Z==="load"||Z==="error"||(Z==="click"&&ac.tagName.toLowerCase()==="input"&&ac.type==="radio")){aa=ac
}}if(aa.nodeType==Node.TEXT_NODE){aa=aa.parentNode}return Element.extend(aa)}function k(ab,ac){var aa=M(ab),Z=Prototype.Selector.match;
if(!ac){return Element.extend(aa)}while(aa){if(Object.isElement(aa)&&Z(aa,ac)){return Element.extend(aa)}aa=aa.parentNode}}function v(Z){return{x:W(Z),y:V(Z)}
}function W(ab){var aa=document.documentElement,Z=document.body||{scrollLeft:0};return ab.pageX||(ab.clientX+(aa.scrollLeft||Z.scrollLeft)-(aa.clientLeft||0))
}function V(ab){var aa=document.documentElement,Z=document.body||{scrollTop:0};return ab.pageY||(ab.clientY+(aa.scrollTop||Z.scrollTop)-(aa.clientTop||0))
}function t(Z){N.extend(Z);Z.preventDefault();Z.stopPropagation();Z.stopped=true}N.Methods={isLeftClick:D,isMiddleClick:j,isRightClick:e,element:q,findElement:k,pointer:v,pointerX:W,pointerY:V,stop:t};
var J=Object.keys(N.Methods).inject({},function(Z,aa){Z[aa]=N.Methods[aa].methodize();return Z});if(window.attachEvent){function X(aa){var Z;
switch(aa.type){case"mouseover":case"mouseenter":Z=aa.fromElement;break;case"mouseout":case"mouseleave":Z=aa.toElement;break;default:return null
}return Element.extend(Z)}var S={stopPropagation:function(){this.cancelBubble=true},preventDefault:function(){this.returnValue=false},inspect:function(){return"[object Event]"
}};N.extend=function(aa,Z){if(!aa){return false}if(!B(aa)){return aa}if(aa._extendedByPrototype){return aa}aa._extendedByPrototype=Prototype.emptyFunction;
var ab=N.pointer(aa);Object.extend(aa,{target:aa.srcElement||Z,relatedTarget:X(aa),pageX:ab.x,pageY:ab.y});Object.extend(aa,J);Object.extend(aa,S);
return aa}}else{N.extend=Prototype.K}if(window.addEventListener){N.prototype=window.Event.prototype||document.createEvent("HTMLEvents").__proto__;
Object.extend(N.prototype,J)}var x={mouseenter:"mouseover",mouseleave:"mouseout"};function f(Z){return x[Z]||Z}if(m){f=Prototype.K}function T(Z){if(Z===window){return 0
}if(typeof Z._prototypeUID==="undefined"){Z._prototypeUID=Element.Storage.UID++}return Z._prototypeUID}function K(Z){if(Z===window){return 0
}if(Z==document){return 1}return Z.uniqueID}if("uniqueID" in w){T=K}function z(Z){return Z.include(":")}N._isCustomEvent=z;function C(ab,aa){var Z=F.Event.cache;
if(Object.isUndefined(aa)){aa=T(ab)}if(!Z[aa]){Z[aa]={element:ab}}return Z[aa]}function G(aa,Z){if(Object.isUndefined(Z)){Z=T(aa)}delete F.Event.cache[Z]
}function h(ab,ae,ah){var Z=C(ab);if(!Z[ae]){Z[ae]=[]}var ad=Z[ae];var ac=ad.length;while(ac--){if(ad[ac].handler===ah){return null}}var af=T(ab);
var aa=F.Event._createResponder(af,ae,ah);var ag={responder:aa,handler:ah};ad.push(ag);return ag}function u(ae,ab,af){var aa=C(ae);var Z=aa[ab];
if(!Z){return}var ad=Z.length,ag;while(ad--){if(Z[ad].handler===af){ag=Z[ad];break}}if(!ag){return}var ac=Z.indexOf(ag);Z.splice(ac,1);
return ag}function c(ab,aa,ac){ab=$(ab);var ad=h(ab,aa,ac);if(ad===null){return ab}var Z=ad.responder;if(z(aa)){r(ab,aa,Z)}else{o(ab,aa,Z)
}return ab}function o(ac,ab,aa){var Z=f(ab);if(ac.addEventListener){ac.addEventListener(Z,aa,false)}else{ac.attachEvent("on"+Z,aa)}}function r(ab,aa,Z){if(ab.addEventListener){ab.addEventListener("dataavailable",Z,false)
}else{ab.attachEvent("ondataavailable",Z);ab.attachEvent("onlosecapture",Z)}}function L(aa,Z,ab){aa=$(aa);var ad=!Object.isUndefined(ab),ae=!Object.isUndefined(Z);
if(!ae&&!ad){A(aa);return aa}if(!ad){I(aa,Z);return aa}var ac=u(aa,Z,ab);if(!ac){return aa}a(aa,Z,ac.responder);return aa}function E(ac,ab,aa){var Z=f(ab);
if(ac.removeEventListener){ac.removeEventListener(Z,aa,false)}else{ac.detachEvent("on"+Z,aa)}}function b(ab,aa,Z){if(ab.removeEventListener){ab.removeEventListener("dataavailable",Z,false)
}else{ab.detachEvent("ondataavailable",Z);ab.detachEvent("onlosecapture",Z)}}function A(ae){var ad=T(ae),ab=C(ae,ad);G(ae,ad);var Z,ac;
for(var aa in ab){if(aa==="element"){continue}Z=ab[aa];ac=Z.length;while(ac--){a(ae,aa,Z[ac].responder)}}}function I(ad,ab){var aa=C(ad);
var Z=aa[ab];if(!Z){return}delete aa[ab];var ac=Z.length;while(ac--){a(ad,ab,Z[ac].responder)}}function a(aa,Z,ab){if(z(Z)){b(aa,Z,ab)
}else{E(aa,Z,ab)}}function g(Z){if(Z!==document){return Z}if(document.createEvent&&!Z.dispatchEvent){return document.documentElement}return Z
}function y(ac,ab,aa,Z){ac=g($(ac));if(Object.isUndefined(Z)){Z=true}aa=aa||{};var ad=P(ac,ab,aa,Z);return N.extend(ad)}function n(ac,ab,aa,Z){var ad=document.createEvent("HTMLEvents");
ad.initEvent("dataavailable",Z,true);ad.eventName=ab;ad.memo=aa;ac.dispatchEvent(ad);return ad}function p(ac,ab,aa,Z){var ad=document.createEventObject();
ad.eventType=Z?"ondataavailable":"onlosecapture";ad.eventName=ab;ad.memo=aa;ac.fireEvent(ad.eventType,ad);return ad}var P=document.createEvent?n:p;
N.Handler=Class.create({initialize:function(ab,aa,Z,ac){this.element=$(ab);this.eventName=aa;this.selector=Z;this.callback=ac;this.handler=this.handleEvent.bind(this)
},start:function(){N.observe(this.element,this.eventName,this.handler);return this},stop:function(){N.stopObserving(this.element,this.eventName,this.handler);
return this},handleEvent:function(aa){var Z=N.findElement(aa,this.selector);if(Z){this.callback.call(this.element,aa,Z)}}});function H(ab,aa,Z,ac){ab=$(ab);
if(Object.isFunction(Z)&&Object.isUndefined(ac)){ac=Z,Z=null}return new N.Handler(ab,aa,Z,ac).start()}Object.extend(N,N.Methods);Object.extend(N,{fire:y,observe:c,stopObserving:L,on:H});
Element.addMethods({fire:y,observe:c,stopObserving:L,on:H});Object.extend(document,{fire:y.methodize(),observe:c.methodize(),stopObserving:L.methodize(),on:H.methodize(),loaded:false});
if(F.Event){Object.extend(window.Event,N)}else{F.Event=N}F.Event.cache={};function s(){F.Event.cache=null}if(window.attachEvent){window.attachEvent("onunload",s)
}w=null;d=null})(this);(function(c){var g=document.documentElement;var b="onmouseenter" in g&&"onmouseleave" in g;function f(h){return !b&&(h==="mouseenter"||h==="mouseleave")
}function d(j,h,k){if(Event._isCustomEvent(h)){return e(j,h,k)}if(f(h)){return a(j,h,k)}return function(n){var o=Event.cache[j];var m=o.element;
Event.extend(n,m);k.call(m,n)}}function e(j,h,k){return function(n){var o=Event.cache[j],m=o.element;if(Object.isUndefined(n.eventName)){return false
}if(n.eventName!==h){return false}Event.extend(n,m);k.call(m,n)}}function a(j,h,k){return function(o){var q=Event.cache[j],m=q.element;
Event.extend(o,m);var n=o.relatedTarget;while(n&&n!==m){try{n=n.parentNode}catch(p){n=m}}if(n===m){return}k.call(m,o)}}c.Event._createResponder=d;
g=null})(this);(function(a){var e;function b(){if(document.loaded){return}if(e){window.clearTimeout(e)}document.loaded=true;document.fire("dom:loaded")
}function d(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",d);b()}}function c(){try{document.documentElement.doScroll("left")
}catch(f){e=c.defer();return}b()}if(document.addEventListener){document.addEventListener("DOMContentLoaded",b,false)}else{document.attachEvent("onreadystatechange",d);
if(window==top){e=c.defer()}}Event.observe(window,"load",b)})(this);Element.addMethods();Hash.toQueryString=Object.toQueryString;var Toggle={display:Element.toggle};
Element.Methods.childOf=Element.Methods.descendantOf;var Insertion={Before:function(a,b){return Element.insert(a,{before:b})},Top:function(a,b){return Element.insert(a,{top:b})
},Bottom:function(a,b){return Element.insert(a,{bottom:b})},After:function(a,b){return Element.insert(a,{after:b})}};var $continue=new Error('"throw $continue" is deprecated, use "return" instead');
var Position={includeScrollOffsets:false,prepare:function(){this.deltaX=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;
this.deltaY=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},within:function(b,a,c){if(this.includeScrollOffsets){return this.withinIncludingScrolloffsets(b,a,c)
}this.xcomp=a;this.ycomp=c;this.offset=Element.cumulativeOffset(b);return(c>=this.offset[1]&&c<this.offset[1]+b.offsetHeight&&a>=this.offset[0]&&a<this.offset[0]+b.offsetWidth)
},withinIncludingScrolloffsets:function(b,a,d){var c=Element.cumulativeScrollOffset(b);this.xcomp=a+c[0]-this.deltaX;this.ycomp=d+c[1]-this.deltaY;
this.offset=Element.cumulativeOffset(b);return(this.ycomp>=this.offset[1]&&this.ycomp<this.offset[1]+b.offsetHeight&&this.xcomp>=this.offset[0]&&this.xcomp<this.offset[0]+b.offsetWidth)
},overlap:function(b,a){if(!b){return 0}if(b=="vertical"){return((this.offset[1]+a.offsetHeight)-this.ycomp)/a.offsetHeight}if(b=="horizontal"){return((this.offset[0]+a.offsetWidth)-this.xcomp)/a.offsetWidth
}},cumulativeOffset:Element.Methods.cumulativeOffset,positionedOffset:Element.Methods.positionedOffset,absolutize:function(a){Position.prepare();
return Element.absolutize(a)},relativize:function(a){Position.prepare();return Element.relativize(a)},realOffset:Element.Methods.cumulativeScrollOffset,offsetParent:Element.Methods.getOffsetParent,page:Element.Methods.viewportOffset,clone:function(b,c,a){a=a||{};
return Element.clonePosition(c,b,a)}};if(!document.getElementsByClassName){document.getElementsByClassName=function(b){function a(c){return c.blank()?null:"[contains(concat(' ', @class, ' '), ' "+c+" ')]"
}b.getElementsByClassName=Prototype.BrowserFeatures.XPath?function(c,e){e=e.toString().strip();var d=/\s/.test(e)?$w(e).map(a).join(""):a(e);
return d?document._getElementsByXPath(".//*"+d,c):[]}:function(e,f){f=f.toString().strip();var g=[],h=(/\s/.test(f)?$w(f):null);if(!h&&!f){return g
}var c=$(e).getElementsByTagName("*");f=" "+f+" ";for(var d=0,k,j;k=c[d];d++){if(k.className&&(j=" "+k.className+" ")&&(j.include(f)||(h&&h.all(function(m){return !m.toString().blank()&&j.include(" "+m+" ")
})))){g.push(Element.extend(k))}}return g};return function(d,c){return $(c||document.body).getElementsByClassName(d)}}(Element.Methods)
}Element.ClassNames=Class.create();Element.ClassNames.prototype={initialize:function(a){this.element=$(a)},_each:function(b,a){this.element.className.split(/\s+/).select(function(c){return c.length>0
})._each(b,a)},set:function(a){this.element.className=a},add:function(a){if(this.include(a)){return}this.set($A(this).concat(a).join(" "))
},remove:function(a){if(!this.include(a)){return}this.set($A(this).without(a).join(" "))},toString:function(){return $A(this).join(" ")
}};Object.extend(Element.ClassNames.prototype,Enumerable);(function(){window.Selector=Class.create({initialize:function(a){this.expression=a.strip()
},findElements:function(a){return Prototype.Selector.select(this.expression,a)},match:function(a){return Prototype.Selector.match(a,this.expression)
},toString:function(){return this.expression},inspect:function(){return"#<Selector: "+this.expression+">"}});Object.extend(Selector,{matchElements:function(f,g){var a=Prototype.Selector.match,d=[];
for(var c=0,e=f.length;c<e;c++){var b=f[c];if(a(b,g)){d.push(Element.extend(b))}}return d},findElement:function(f,g,b){b=b||0;var a=0,d;
for(var c=0,e=f.length;c<e;c++){d=f[c];if(Prototype.Selector.match(d,g)&&b===a++){return Element.extend(d)}}},findChildElements:function(b,c){var a=c.toArray().join(", ");
return Prototype.Selector.select(a,b||document)}})})();function Dom(){}Dom.getEvent=function(a){if(!a){var a=window.event}return a};Dom.getObject=function(a){if(a.currentTarget){return a.currentTarget
}else{return event.srcElement}};Dom.removeObject=function(a){if(a==null){return}a.parentNode.removeChild(a)};Dom.x=function(a){if(a.pageX){return a.pageX
}else{return a.x}};Dom.y=function(a){if(a.pageY){return a.pageY}else{return a.y}};Dom.left=function(a){return a.offsetLeft==0&&a.offsetTop==0?a.style.left.substr(0,a.style.left.length-"px".length):a.offsetLeft
};Dom.top=function(a){return a.offsetLeft==0&&a.offsetTop==0?a.style.top.substr(0,a.style.top.length-"px".length):a.offsetTop};Dom.cornerX=function(a){if(a.layerX){return Dom.x(a)-a.layerX
}else{return Dom.x(a)-a.offsetX}};Dom.cornerY=function(a){if(a.layerY){return Dom.y(a)-a.layerY}else{return Dom.y(a)-a.offsetY}};Dom.setClass=function(b,a){b.setAttribute("class",a);
b.setAttribute("className",a)};Dom.setStyle=function(b,a){b.setAttribute("style",a);b.style.cssText=a};Dom.setDisplay=function(c,a){var b=document.getElementById(c);
if(b==null){return}b.style.display=a};Dom.attachEvent=function(c,b,a){if(c.attachEvent){c.attachEvent("on"+b,a)}else{if(c.addEventListener){c.addEventListener(b,a,true)
}}};Dom.getElementsByName=function(b,c){var d=document.getElementsByTagName(b);var a=new Array();for(i=0,iarr=0;i<d.length;i++){att=d[i].getAttribute("name");
if(att==c){a[iarr]=d[i];iarr++}}return a};Dom.is_child_of=function(a,c){if(c!=null){try{while(c.parentNode){if((c=c.parentNode)==a){return true
}}}catch(b){Debugger.log("Unable to ask is_child_of: "+b)}}return false};Dom.divMouseEvent=function(element,event,JavaScript_code){var current_mouse_target=null;
if(event.toElement){current_mouse_target=event.toElement}else{if(event.relatedTarget){current_mouse_target=event.relatedTarget}}if(!Dom.is_child_of(element,current_mouse_target)&&element!=current_mouse_target){eval(JavaScript_code)
}};Ajax=new Object();Ajax.isSending=false;Ajax.queue=[];Ajax.waitUntilReady=function(){if(!Ajax.isSending&&Ajax.queue.length>0){Ajax.isSending=true;
var a=Ajax.queue[0];a.go();Ajax.queue.splice(0,1)}if(Ajax.queue.length>0){setTimeout("Ajax.waitUntilReady()",100)}};Ajax.createHttp=function(){for(var a=0;
a<httpFactories.length;a++){try{return httpFactories[a]()}catch(b){continue}}return false};Ajax.sendRequest=function(b,d,a){var c=new AjaxSender(b,d,a);
Ajax.queue.push(c);Ajax.waitUntilReady()};Ajax.defaultAjaxHandle=function(b){var a=b.responseText;alert(a)};var httpFactories=[function(){return new XMLHttpRequest()
},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")
}];function AjaxSender(c,b,a){this.url=c;this.callback=b;this.postData=a;this.go=function(){var e=this.url;var g=this.callback;var d=this.postData;
http=Ajax.createHttp();if(!http){return}var f=(d)?"POST":"GET";g=(g)?g:Ajax.defaultAjaxHandle;http.open(f,e,true);if(d){http.setRequestHeader("Content-type","application/x-www-form-urlencoded")
}http.onreadystatechange=function(){if(http.readyState!=4){return}if(http.status!=200&&http.status!=304){return}g(http);Ajax.isSending=false
};if(http.readyState==4){return}http.send(d)}}function roundTo(b,a){var c=Math.pow(10,a);if(a>0){return Math.round(b/c)*c}else{return Math.round(b/c)*c
}}String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")};String.prototype.ltrim=function(){return this.replace(/^\s+/,"")
};String.prototype.rtrim=function(){return this.replace(/\s+$/,"")};function trim(a){return a.replace(/^\s+|\s+$/g,"")}function format(b){var d=b;
var a="";while(d!=a){a=d;for(var c=1;c<arguments.length;c++){d=d.replace("{"+(c-1)+"}",arguments[c])}}return d}function formatOnce(a){var c=a;
for(var b=1;b<arguments.length;b++){c=c.replace("{"+(b-1)+"}",arguments[b])}return c}Json=new Object();Json.toObject=function(jsonText){if(jsonText==""){return null
}eval(format("var data = {0};",jsonText));return data};Json.toString=function(g,c,f){if(typeof(c)=="undefined"){c=null}if(typeof(f)=="undefined"){f=true
}var e="";for(var d in g){var a=g[d];if((""+a).startsWith("function")||a==undefined){continue}if(e.length>0){e+=","}if(Json.isObject(a)){e+=Json.toString(a,d,false)
}else{if(Json.isArray(a)){e+=format('"{0}" : [',d);for(var b=0;b<a.length;b++){if(b>0){e+=","}e+=Json.toString(a[b],null,true)}e+="]"
}else{e+=format('"{0}" : "{1}"',d,g[d])}}}if(c!=null){e=format('"{0}" : {{1}}',c,e)}if(f){e=format("{{0}}",e)}return e};Json.isObject=function(a){return typeof(a)=="object"&&!Json.isArray(a)
};Json.isArray=function(a){return a.constructor.toString().indexOf("Array")!=-1};Debugger=new Object();Debugger.inspect=function(b){var c="";
for(var a in b){if((""+b[a]).startsWith("function")){continue}c+=typeof(b)+"."+a+"="+b[a]+"\n"}alert(c)};Debugger.log=function(a){console.log(a)
};eval(function(h,b,m,f,g,j){g=function(a){return(a<b?"":g(parseInt(a/b)))+((a=a%b)>35?String.fromCharCode(a+29):a.toString(36))};if(!"".replace(/^/,String)){while(m--){j[g(m)]=f[m]||g(m)
}f=[function(a){return j[a]}];g=function(){return"\\w+"};m=1}while(m--){if(f[m]){h=h.replace(new RegExp("\\b"+g(m)+"\\b","g"),f[m])}}return h
}('f(!1o.31){p 31=h(){p l={5S:{"1e-1c":"","73-2E":1,"2a-1P":u,"1I":u,"6T-6S":U,"1F-1P":4,"5F":O,"5x":U,"1q":U,"5v":O,"6i-6p":U,"6J":O},Q:{5D:u,5i:16,5k:16,7P:O,7I:"5L",1b:{4e:"91 1i",3Y:"92 1i",5l:"93 90 6K",6X:"8Z I 8W 1X 8X 6K 8Y",3u:"3u",6h:"?",1u:"31\\n\\n",5Z:"94\'t 95 7J C: ",7z:"9b 9c\'t 9a C 2j-2n 99: ",6B:"<!96 2j 97 \\"-//98//8b 8V 1.0 8U//8I\\" \\"2y://7A.7E.7o/8J/86/8b/86-8K.8H\\"><2j 8G=\\"2y://7A.7E.7o/8D/8E\\"><70><8F 2y-8L=\\"8M-8S\\" 5h=\\"2c/2j; 8T=8R-8\\" /><36>8Q 31</36></70><2R 1f=\\"2a-7T:8N,\'7h 8O 8P\',7h,7L;9d-53:#9e;53:#9D;2a-1P:9E;2c-8i:85;\\"><z 1f=\\"2c-8i:85;5n-4z:9F;\\"><z 1f=\\"2a-7T:9C,9B,9y,8C-7L;2a-1P:9z-9A;\\">31</z><z 1f=\\"2a-1P:.9G;5n-9H:9N;\\"><z>84 2.0.9O (9M 9L 6H)</z><z><a 2q=\\"2y://6a.4a\\" 9I=\\"4P\\" 1f=\\"53:#9J;2c-9K:9x;\\">2y://6a.4a</a></z></z><z>9w I 9k 9l.</z><z>9m 9j-6H 9i 9f.</z></z></2R></2j>"},7j:O},1p:{59:u,3q:u,3o:u,5j:{}},30:{},8a:{9g:/\\/\\*[\\s\\S]*?\\*\\//4M,9h:/\\/\\/.*$/4M,9n:/#.*$/4M,9o:/"(?:\\.|(\\\\\\")|[^\\""\\n])*"/g,9u:/\'(?:\\.|(\\\\\\\')|[^\\\'\'\\n])*\'/g,9v:/"(?:\\.|(\\\\\\")|[^\\""])*"/g,9t:/\'(?:\\.|(\\\\\\\')|[^\\\'\'])*\'/g,3e:/\\w+:\\/\\/[\\w-.\\/?%&=]*/g,9s:{E:/(&1C;|<)\\?=?/g,17:/\\?(&2m;|>)/g},9p:{E:/(&1C;|<)%=?/g,17:/%(&2m;|>)/g},9q:{E:/(&1C;|<)\\s*2n.*?(&2m;|>)/47,17:/(&1C;|<)\\/\\s*2n\\s*(&2m;|>)/47}},1q:{15:h(32){p 38=J.1t("37"),4L=l.1q.77;38.Y="1q";C(p 2N 1X 4L){p 6j=4L[2N],4G=R 6j(32),22=4G.15();32.5E[2N]=4G;f(22==u){1V}f(9r(22)=="9P"){22=l.1q.6C(22,32.1j,2N)}22.Y+="8w "+2N;38.1z(22)}q 38},6C:h(4v,6O,4w){p a=J.1t("a"),5e=a.1f,4F=l.Q,57=4F.5i,5c=4F.5k;a.2q="#"+4w;a.36=4v;a.5P=6O;a.6c=4w;a.1r=4v;f(5z(57)==O){5e.1N=57+"5H"}f(5z(5c)==O){5e.2u=5c+"5H"}a.8q=h(e){8j{l.1q.6f(c,e||1o.6g,c.5P,c.6c)}8m(e){l.B.1u(e.6F)}q O};q a},6f:h(7i,7a,5T,7O,72){p 4Y=l.1p.5j[5T],45;f(4Y==u||(45=4Y.5E[7O])==u){q u}q 45.2h(7i,7a,72)},77:{4e:h(4p){c.15=h(){f(4p.T("5v")!=U){q}q l.Q.1b.4e};c.2h=h(4q,8v,8B){p z=4p.z;4q.71.51(4q);z.Y=z.Y.D("5t","")}},3Y:h(8g){c.15=h(){q l.Q.1b.3Y};c.2h=h(8p,8o,8t){p 33=l.B.3d(8g.5r).D(/</g,"&1C;"),2b=l.B.4y("","4P",8r,8n,"8x=0, 8k=1, 8s=0, 6n=1");33=l.B.2W(33);2b.J.3t("<5L>"+33+"</5L>");2b.J.4N()}},5l:h(4S){p 3x,8y,5M=4S.1j;c.15=h(){p 2A=l.Q;f(2A.5D==u){q u}h 1L(5C){p 5s="";C(p 5A 1X 5C){5s+="<8z 1c=\'"+5A+"\' 1W=\'"+5C[5A]+"\'/>"}q 5s};h 2p(43){p 5p="";C(p 5o 1X 43){5p+=" "+5o+"=\'"+43[5o]+"\'"}q 5p};p 48={1N:2A.5i,2u:2A.5k,1j:5M+"ai",6z:"bu/x-74-79",36:l.Q.1b.5l},46={bl:"bm",bx:"bA",bz:"5P="+5M,bF:"O"},4t=2A.5D,35;f(/aQ/i.1R(61.6b)){35="<8h"+2p({aT:"bd:bf-b9-b5-b4-b7",b8:"2y://ba.be.4a/bb/74/bc/79/b3.b2#84=9,0,0,0"})+2p(48)+">"+1L(46)+1L({aU:4t})+"</8h>"}F{35="<aS"+2p(48)+2p(46)+2p({aR:4t})+"/>"}3x=J.1t("z");3x.1r=35;q 3x};c.2h=h(aV,aW,4R){p 68=4R.b1;6V(68){2J"7C":p 5d=l.B.2W(l.B.3d(4S.5r).D(/&1C;/g,"<").D(/&2m;/g,">").D(/&b0;/g,"&"));f(1o.6e){1o.6e.aZ("2c",5d)}F{q l.B.2W(5d)}2J"aX":l.B.1u(l.Q.1b.6X);2B;2J"aY":l.B.1u(4R.6F);2B}}},bh:h(4I){c.15=h(){q l.Q.1b.3u};c.2h=h(bg,by,bB){p 25=J.1t("bG"),1J=u;f(l.1p.3o!=u){J.2R.51(l.1p.3o)}l.1p.3o=25;25.1f.bC="bE:bD;1N:6m;2u:6m;E:-6l;4z:-6l;";J.2R.1z(25);1J=25.4J.J;6t(1J,1o.J);1J.3t("<z 1e=\\""+4I.z.Y.D("5t","")+" bn\\">"+4I.z.1r+"</z>");1J.4N();25.4J.4A();25.4J.3u();h 6t(6A,6s){p 2S=6s.7M("4K");C(p i=0;i<2S.v;i++){f(2S[i].6r.bk()=="6q"&&/bi\\.12$/.1R(2S[i].2q)){6A.3t("<4K 6z=\\"2c/12\\" 6r=\\"6q\\" 2q=\\""+2S[i].2q+"\\"></4K>")}}}}},bj:h(bo){c.15=h(){q l.Q.1b.6h};c.2h=h(bv,bt){p 2b=l.B.4y("","4P",bq,bs,"6n=0"),1J=2b.J;1J.3t(l.Q.1b.6B);1J.4N();2b.4A()}}}},B:{5m:h(6R){q 6R+3z.aN(3z.aa()*ab).2f()},5u:h(4E,4x){p 3l={},1S;C(1S 1X 4E){3l[1S]=4E[1S]}C(1S 1X 4x){3l[1S]=4x[1S]}q 3l},7w:h(4u){6V(4u){2J"U":q U;2J"O":q O}q 4u},4y:h(3e,6M,4D,4C,2I){p x=(6N.1N-4D)/2,y=(6N.2u-4C)/2;2I+=", E="+x+", 4z="+y+", 1N="+4D+", 2u="+4C;2I=2I.D(/^,/,"");p 4Q=1o.9Q(3e,6M,2I);4Q.4A();q 4Q},78:h(1A,29,23){f(1A.6D){1A["e"+29+23]=23;1A[29+23]=h(){1A["e"+29+23](1o.6g)};1A.6D("a6"+29,1A[29+23])}F{1A.a7(29,23,O)}},1u:h(A){1u(l.Q.1b.1u+A)},4c:h(5a,5Y){p 2k=l.1p.59,3j=u;f(2k==u){2k={};C(p 55 1X l.30){p 3g=l.30[55].ac;f(3g==u){1V}C(p i=0;i<3g.v;i++){2k[3g[i]]=55}}l.1p.59=2k}3j=l.30[2k[5a]];f(3j==u&&5Y!=O){l.B.1u(l.Q.1b.5Z+5a)}q 3j},42:h(A,60){p 2T=A.21("\\n");C(p i=0;i<2T.v;i++){2T[i]=60(2T[i])}q 2T.4h("\\n")},6x:h(){p z=J.1t("z"),3h=J.1t("z"),6d=10,i=1;28(i<=aO){f(i%6d===0){z.1r+=i;i+=(i+"").v}F{z.1r+="&ah;";i++}}3h.Y="5F 2E";3h.1z(z);q 3h},6U:h(A){q A.D(/^[ ]*[\\n]+|[\\n]*[ ]*$/g,"")},7d:h(A){p 3i,4V={},5b=R M("^\\\\[(?<54>(.*?))\\\\]$"),69=R M("(?<1c>[\\\\w-]+)"+"\\\\s*:\\\\s*"+"(?<1W>"+"[\\\\w-%#]+|"+"\\\\[.*?\\\\]|"+"\\".*?\\"|"+"\'.*?\'"+")\\\\s*;?","g");28((3i=69.N(A))!=u){p 2g=3i.1W.D(/^[\'"]|[\'"]$/g,"");f(2g!=u&&5b.1R(2g)){p m=5b.N(2g);2g=m.54.v>0?m.54.21(/\\s*,\\s*/):[]}4V[3i.1c]=2g}q 4V},80:h(A,12){f(A==u||A.v==0||A=="\\n"){q A}A=A.D(/</g,"&1C;");A=A.D(/ {2,}/g,h(m){p 4U="";C(p i=0;i<m.v-1;i++){4U+="&1O;"}q 4U+" "});f(12!=u){A=l.B.42(A,h(2i){f(2i.v==0){q""}p 3k="";2i=2i.D(/^(&1O;| )+/,h(s){3k=s;q""});f(2i.v==0){q 3k}q 3k+"<I 1e=\\""+12+"\\">"+2i+"</I>"})}q A},7f:h(66,67){p 2Z=66.2f();28(2Z.v<67){2Z="0"+2Z}q 2Z},5y:h(){p 3b=J.1t("z"),3f,3a=0,52=J.2R,1j=l.B.5m("5y"),2O="<z 1e=\\"",2Q="</z>",4W="</1T>";3b.1r=2O+"6L\\">"+2O+"26\\">"+2O+"2E\\">"+2O+"5h"+"\\"><1T 1e=\\"7V\\"><1T 1j=\\""+1j+"\\">&1O;"+4W+4W+2Q+2Q+2Q+2Q;52.1z(3b);3f=J.a5(1j);f(/a4/i.1R(61.6b)){p 5Q=1o.9V(3f,u);3a=7l(5Q.9W("1N"))}F{3a=3f.9U}52.51(3b);q 3a},6Q:h(7R,6Y){p 1F="";C(p i=0;i<6Y;i++){1F+=" "}q 7R.D(/\\t/g,1F)},6P:h(2P,41){p 9T=2P.21("\\n"),1F="\\t",5f="";C(p i=0;i<50;i++){5f+="                    "}h 7X(3c,18,7Z){q 3c.1M(0,18)+5f.1M(0,7Z)+3c.1M(18+1,3c.v)};2P=l.B.42(2P,h(20){f(20.1h(1F)==-1){q 20}p 18=0;28((18=20.1h(1F))!=-1){p 7U=41-18%41;20=7X(20,18,7U)}q 20});q 2P},3d:h(A){q(l.Q.7P==U)?A.D(/<br\\s*\\/?>|&1C;br\\s*\\/?&2m;/47,"\\n"):A},3P:h(A){q A.D(/\\s*$/g,"").D(/^\\s*/,"")},2W:h(A){p 1Q=l.B.3d(A).21("\\n"),9X=R 5B(),7S=/^\\s*/,24=9Y;C(p i=0;i<1Q.v&&24>0;i++){p 3V=1Q[i];f(l.B.3P(3V).v==0){1V}p 3S=7S.N(3V);f(3S==u){q A}24=3z.24(3S[0].v,24)}f(24>0){C(p i=0;i<1Q.v;i++){1Q[i]=1Q[i].1M(24)}}q 1Q.4h("\\n")},7B:h(2L,2K){f(2L.H<2K.H){q-1}F{f(2L.H>2K.H){q 1}F{f(2L.v<2K.v){q-1}F{f(2L.v>2K.v){q 1}}}}q 0},2D:h(8d,2G){h 8e(3W,81){q[R l.4i(3W[0],3W.H,81.12)]};p a2=0,3X=u,3y=[],8c=2G.4m?2G.4m:8e;28((3X=2G.3D.N(8d))!=u){3y=3y.2H(8c(3X,2G))}q 3y},6o:h(8f){q 8f.D(l.8a.3e,h(m){q"<a 2q=\\""+m+"\\">"+m+"</a>"})}},1I:h(7c,4l){h 88(4s){p 49=[];C(p i=0;i<4s.v;i++){49.K(4s[i])}q 49};p 3m=4l?[4l]:88(J.7M(l.Q.7I)),7g="1r",2t=u;f(3m.v===0){q}C(p i=0;i<3m.v;i++){p 2F=3m[i],2s=l.B.7d(2F.Y),2Y;2s=l.B.5u(7c,2s);2Y=2s["7J"];f(2Y==u){1V}f(2s["2j-2n"]=="U"){2t=R l.44(2Y)}F{p 4o=l.B.4c(2Y);f(4o){2t=R 4o()}F{1V}}2t.1I(2F[7g],2s);p 2l=2t.z;f(l.Q.7j){2l=J.1t("a0");2l.1W=2t.z.1r;2l.1f.1N="aj";2l.1f.2u="aE"}2F.71.aF(2l,2F)}},aD:h(76){l.B.78(1o,"aC",h(){l.1I(76)})}};l.4i=h(4j,75,12){c.1W=4j;c.H=75;c.v=4j.v;c.12=12};l.4i.Z.2f=h(){q c.1W};l.44=h(4g){p 1H=l.B.4c(4g),4f=R l.30.aA(),aB=u;f(1H==u){q}1H=R 1H();c.4X=4f;f(1H.3K==u){l.B.1u(l.Q.1b.7z+4g);q}4f.4B.K({3D:1H.3K.I,4m:7F});h 39(4d,7G){C(p j=0;j<4d.v;j++){4d[j].H+=7G}};h 7F(14,aH){p 7x=14.I,1E=[],4k=1H.4B,7p=14.H+14.E.v,2X=1H.3K,1n;C(p i=0;i<4k.v;i++){1n=l.B.2D(7x,4k[i]);39(1n,7p);1E=1E.2H(1n)}f(2X.E!=u&&14.E!=u){1n=l.B.2D(14.E,2X.E);39(1n,14.H);1E=1E.2H(1n)}f(2X.17!=u&&14.17!=u){1n=l.B.2D(14.17,2X.17);39(1n,14.H+14[0].aM(14.17));1E=1E.2H(1n)}q 1E}};l.44.Z.1I=h(7u,7t){c.4X.1I(7u,7t);c.z=c.4X.z};l.87=h(){};l.87.Z={T:h(7v,7n){p 5J=c.1L[7v];q l.B.7w(5J==u?7n:5J)},15:h(7y){q J.1t(7y)},7m:h(5G){C(p i=0;i<c.1Y.v;i++){p 2V=c.1Y[i];f(2V===u){1V}f((5G.H>2V.H)&&(5G.H<2V.H+2V.v)){q U}}q O},6v:h(3v,7D){p 2e=[];f(3v!=u){C(p i=0;i<3v.v;i++){2e=2e.2H(l.B.2D(7D,3v[i]))}}2e=2e.aL(l.B.7B);q 2e},6u:h(){C(p i=0;i<c.1Y.v;i++){f(c.7m(c.1Y[i])){c.1Y[i]=u}}},6k:h(2C){p 3w=2C.21(/\\n/g),3s=7l(c.T("73-2E")),7e=(3s+3w.v).2f().v,89=c.T("1I",[]);2C="";C(p i=0;i<3w.v;i++){p 1s=3w[i],2w=/^(&1O;|\\s)+/.N(1s),5w="2E aK"+(i%2==0?1:2),82=l.B.7f(3s+i,7e),83=89.1h((3s+i).2f())!=-1,1D=u;f(2w!=u){1D=2w[0].2f();1s=1s.1M(1D.v);1D=1D.D(/&1O;/g," ");2w=l.1p.3q*1D.v}F{2w=0}1s=l.B.3P(1s);f(1s.v==0){1s="&1O;"}f(83){5w+=" aI"}2C+="<z 1e=\\""+5w+"\\">"+"<I 1e=\\"aJ\\">"+82+".</I>"+"<1T 1e=\\"5h\\">"+(1D!=u?"<I 1e=\\"az\\">"+1D.D(/\\s/g,"&1O;")+"</I>":"")+"<1T 1e=\\"7V\\" 1f=\\"5n-E: "+2w+"5H !aq;\\">"+1s+"</1T>"+"</1T>"+"</z>"}q 2C},6w:h(5N,5K){p 18=0,3n="",3r=l.B.80;C(p i=0;i<5K.v;i++){p 1y=5K[i];f(1y===u||1y.v===0){1V}3n+=3r(5N.1M(18,1y.H-18),"63")+3r(1y.1W,1y.12);18=1y.H+1y.v}3n+=3r(5N.1M(18),"63");q 3n},1I:h(1g,5R){p am=l.Q,3p=l.1p,z,34;c.1L={};c.z=u;c.26=u;c.I=u;c.2d=u;c.5E={};c.1j=l.B.5m("ar");3p.5j[c.1j]=c;f(1g===u){1g=""}f(3p.3q===u){3p.3q=l.B.5y()}c.1L=l.B.5u(l.5S,5R||{});f(c.T("6J")==U){c.1L.1q=c.1L.5x=O}c.z=z=c.15("37");c.26=c.15("37");c.26.Y="26";z.Y="6L";z.1j=c.1j;f(c.T("5v")){z.Y+=" 5t"}f(c.T("5x")==O){z.Y+=" ax"}z.Y+=" "+c.T("1e-1c");z.1f.av=c.T("2a-1P","");c.5r=1g;c.I=l.B.6U(1g).D(/\\r/g," ");34=c.T("1F-1P");c.I=c.T("6T-6S")==U?l.B.6P(c.I,34):l.B.6Q(c.I,34);c.I=l.B.2W(c.I);f(c.T("1q")){c.2d=c.15("37");c.2d.Y="2d";c.2d.1z(l.1q.15(c));z.1z(c.2d)}f(c.T("5F")){z.1z(l.B.6x())}z.1z(c.26);c.1Y=c.6v(c.4B,c.I);c.6u();1g=c.6w(c.I,c.1Y);1g=c.6k(l.B.3P(1g));f(c.T("6i-6p")){1g=l.B.6o(1g)}c.26.1r=1g},au:h(A){A=A.D(/^\\s+|\\s+$/g,"").D(/\\s+/g,"\\\\b|\\\\b");q"\\\\b"+A+"\\\\b"},at:h(2z){c.3K={E:{3D:2z.E,12:"2n"},17:{3D:2z.17,12:"2n"},I:R M("(?<E>"+2z.E.1i+")"+"(?<I>.*?)"+"(?<17>"+2z.17.1i+")","aw")}}};q l}()}f(!5B.1h){5B.Z.1h=h(5V,3J){3J=3z.as(3J||0,0);C(p i=3J;i<c.v;i++){f(c[i]==5V){q i}}q-1}}f(!1o.M){(h(){p 2v={N:V.Z.N,64:5q.Z.64,D:5q.Z.D,21:5q.Z.21},1G={11:/(?:[^\\\\([#\\s.]+|\\\\(?!k<[\\w$]+>|[65]{[^}]+})[\\S\\s]?|\\((?=\\?(?!#|<[\\w$]+>)))+|(\\()(?:\\?(?:(#)[^)]*\\)|<([$\\w]+)>))?|\\\\(?:k<([\\w$]+)>|[65]{([^}]+)})|(\\[\\^?)|([\\S\\s])/g,al:/(?:[^$]+|\\$(?![1-9$&`\']|{[$\\w]+}))+|\\$(?:([1-9]\\d*|[$&`\'])|{([$\\w]+)})/g,3F:/^(?:\\s+|#.*)+/,3R:/^(?:[?*+]|{\\d+(?:,\\d*)?})/,7H:/&&\\[\\^?/g,7q:/]/g},7N=h(5I,7Y,7K){C(p i=7K||0;i<5I.v;i++){f(5I[i]===7Y){q i}}q-1},7k=/()??/.N("")[1]!==3A,3L={};M=h(1d,1U){f(1d 4T V){f(1U!==3A){3G 62("56\'t 58 an 6G ao 5X V ap ay")}q 1d.3I()}p 1U=1U||"",7s=1U.1h("s")>-1,7r=1U.1h("x")>-1,4b=O,3C=[],13=[],11=1G.11,G,3N,3O,3E,3B;11.L=0;28(G=2v.N.2x(11,1d)){f(G[2]){f(!1G.3R.1R(1d.19(11.L))){13.K("(?:)")}}F{f(G[1]){3C.K(G[3]||u);f(G[3]){4b=U}13.K("(")}F{f(G[4]){3E=7N(3C,G[4]);13.K(3E>-1?"\\\\"+(3E+1)+(5z(1d.5O(11.L))?"":"(?:)"):G[0])}F{f(G[5]){13.K(3L.6Z?3L.6Z.7C(G[5],G[0].5O(1)==="P"):G[0])}F{f(G[6]){f(1d.5O(11.L)==="]"){13.K(G[6]==="["?"(?!)":"[\\\\S\\\\s]");11.L++}F{3N=M.6E("&&"+1d.19(G.H),1G.7H,1G.7q,"",{5W:"\\\\"})[0];13.K(G[6]+3N+"]");11.L+=3N.v+1}}F{f(G[7]){f(7s&&G[7]==="."){13.K("[\\\\S\\\\s]")}F{f(7r&&1G.3F.1R(G[7])){3O=2v.N.2x(1G.3F,1d.19(11.L-1))[0].v;f(!1G.3R.1R(1d.19(11.L-1+3O))){13.K("(?:)")}11.L+=3O-1}F{13.K(G[7])}}}F{13.K(G[0])}}}}}}}3B=V(13.4h(""),2v.D.2x(1U,/[aG]+/g,""));3B.1v={1i:1d,2o:4b?3C:u};q 3B};M.ak=h(1c,o){3L[1c]=o};V.Z.N=h(A){p 1a=2v.N.2x(c,A),1c,i,5g;f(1a){f(7k&&1a.v>1){5g=R V("^"+c.1i+"$(?!\\\\s)",c.3U());2v.D.2x(1a[0],5g,h(){C(i=1;i<7b.v-2;i++){f(7b[i]===3A){1a[i]=3A}}})}f(c.1v&&c.1v.2o){C(i=1;i<1a.v;i++){1c=c.1v.2o[i-1];f(1c){1a[1c]=1a[i]}}}f(c.3H&&c.L>(1a.H+1a[0].v)){c.L--}}q 1a}})()}V.Z.3U=h(){q(c.3H?"g":"")+(c.9Z?"i":"")+(c.6W?"m":"")+(c.3F?"x":"")+(c.a1?"y":"")};V.Z.3I=h(7Q){p 3T=R M(c.1i,(7Q||"")+c.3U());f(c.1v){3T.1v={1i:c.1v.1i,2o:c.1v.2o?c.1v.2o.19(0):u}}q 3T};V.Z.2x=h(a3,A){q c.N(A)};V.Z.9S=h(9R,7W){q c.N(7W[0])};M.3Z=h(4r,4Z){p 40="/"+4r+"/"+(4Z||"");q M.3Z[40]||(M.3Z[40]=R M(4r,4Z))};M.3M=h(A){q A.D(/[-[\\]{}()*+?.\\\\^$|,#\\s]/g,"\\\\$&")};M.6E=h(A,E,W,1k,2M){p 2M=2M||{},2U=2M.5W,X=2M.af,1k=1k||"",4O=1k.1h("g")>-1,6y=1k.1h("i")>-1,5U=1k.1h("m")>-1,4H=1k.1h("y")>-1,1k=1k.D(/y/g,""),E=E 4T V?(E.3H?E:E.3I("g")):R M(E,"g"+1k),W=W 4T V?(W.3H?W:W.3I("g")):R M(W,"g"+1k),1K=[],2r=0,1m=0,1l=0,1x=0,27,1Z,1w,1B,3Q,4n;f(2U){f(2U.v>1){3G ae("56\'t 58 ag ad 5X 3M 6I")}f(5U){3G 62("56\'t 58 3M 6I 6G a8 a9 6W aP")}3Q=M.3M(2U);4n=R V("^(?:"+3Q+"[\\\\S\\\\s]|(?:(?!"+E.1i+"|"+W.1i+")[^"+3Q+"])+)+",6y?"i":"")}28(U){E.L=W.L=1l+(2U?(4n.N(A.19(1l))||[""])[0].v:0);1w=E.N(A);1B=W.N(A);f(1w&&1B){f(1w.H<=1B.H){1B=u}F{1w=u}}f(1w||1B){1m=(1w||1B).H;1l=(1w?E:W).L}F{f(!2r){2B}}f(4H&&!2r&&1m>1x){2B}f(1w){f(!2r++){27=1m;1Z=1l}}F{f(1B&&2r){f(!--2r){f(X){f(X[0]&&27>1x){1K.K([X[0],A.19(1x,27),1x,27])}f(X[1]){1K.K([X[1],A.19(27,1Z),27,1Z])}f(X[2]){1K.K([X[2],A.19(1Z,1m),1Z,1m])}f(X[3]){1K.K([X[3],A.19(1m,1l),1m,1l])}}F{1K.K(A.19(1Z,1m))}1x=1l;f(!4O){2B}}}F{E.L=W.L=0;3G b6("bw bp 8l 8u 8A")}}f(1m===1l){1l++}}f(4O&&!4H&&X&&X[0]&&A.v>1x){1K.K([X[0],A.19(1x),1x,A.v])}E.L=W.L=0;q 1K};',62,725,"||||||||||||this|||if||function||||sh||||var|return||||null|length||||div|str|utils|for|replace|left|else|_109|index|code|document|push|lastIndex|XRegExp|exec|false||config|new||getParam|true|RegExp|_121|vN|className|prototype||part|css|_107|_c3|create||right|pos|slice|_111|strings|name|_101|class|style|_ed|indexOf|source|id|_122|_12d|_12c|_ca|window|vars|toolbar|innerHTML|_e0|createElement|alert|_x|_131|_12e|_ec|appendChild|obj|_132|lt|_e5|_c6|tab|lib|_bd|highlight|doc|_12a|params|substr|width|nbsp|size|_97|test|_4b|span|_102|continue|value|in|matches|_130|_91|split|_8|_57|min|_3c|lines|_12f|while|_56|font|wnd|text|bar|_d7|toString|_6e|execute|_75|html|_5b|_b7|gt|script|captureNames|attributes|href|_12b|_b4|_b1|height|_f8|_e1|call|http|_f4|_28|break|_da|getMatches|line|_b3|_a1|concat|_51|case|m2|m1|_123|_5|_80|_88|_81|body|_40|_62|_124|_d4|unindent|_c9|_b5|_7a|brushes|SyntaxHighlighter|_2|_22|_f2|_32|title|DIV|_3|offsetMatches|_7d|_7b|_8e|fixForBlogger|url|_7c|_5e|_65|_6a|_5c|_76|_4a|_af|_e9|printFrame|_f0|spaceWidth|_ea|_dc|write|print|_d5|_db|_25|_a6|Math|undefined|_10d|_106|regex|_10c|extended|throw|global|addFlags|_f6|htmlScript|_100|escape|cc|len|trim|_133|quantifier|_9d|_116|getNativeFlags|_9c|_a2|_a5|viewSource|cache|key|_89|eachLine|_2c|HtmlScript|_18|_30|gi|_2f|_ad|com|_105|findBrush|_c0|expandSource|_be|_bc|join|Match|_b9|_c7|_ab|func|esc|_b6|_19|_1a|_11b|_ac|swf|_4c|_9|_b|_49|popup|top|focus|regexList|_50|_4f|_48|_e|_7|_129|_38|contentWindow|link|_4|gm|close|_126|_blank|win|_35|_24|instanceof|_73|_6b|_82|xmlBrush|_17|_11c||removeChild|_7e|color|values|_5d|can|_f|supply|discoveredBrushes|_59|_6c|_10|_37|_d|_8c|r2|content|toolbarItemWidth|highlighters|toolbarItemHeight|copyToClipboard|guid|margin|_2e|_2d|String|originalCode|_2a|collapsed|merge|collapse|_e2|gutter|measureSpace|isNaN|_2b|Array|_29|clipboardSwf|toolbarCommands|ruler|_d2|px|_fb|_d0|_e7|pre|_27|_e6|charAt|highlighterId|_83|_ee|defaults|_14|_128|_f5|escapeChar|one|_5a|noBrush|_61|navigator|TypeError|plain|match|pP|_78|_79|_36|_6d|alexgorbatchev|userAgent|commandName|_66|clipboardData|executeCommand|event|help|auto|_6|createDisplayLines|500px|0px|scrollbars|processUrls|links|stylesheet|rel|_3f|copyStyles|removeNestedMatches|findMatches|processMatches|createRuler|_127|type|_3e|aboutDialog|createButton|attachEvent|matchRecursive|message|when|2009|character|light|clipboard|syntaxhighlighter|_4e|screen|_a|processSmartTabs|processTabs|_47|tabs|smart|trimFirstAndLastLines|switch|multiline|copyToClipboardConfirmation|_85|unicode|head|parentNode|_16|first|shockwave|_ba|_b8|items|addEvent|flash|_13|arguments|_aa|parseParams|_dd|padNumber|_b0|Times|_12|debug|_ff|parseInt|isMatchNested|_cf|org|_c8|classRight|_104|_103|_cd|_cc|_ce|toBoolean|_c5|_d1|brushNotHtmlScript|www|matchesSortCallback|get|_d6|w3|process|_c1|classLeft|tagName|brush|_fd|serif|getElementsByTagName|_fa|_15|bloggerMode|_115|_84|_99|family|_93|block|args|insertSpaces|_fc|_90|decorate|_a3|_e3|_e4|version|center|xhtml1|Highlighter|toArray|_de|regexLib|DTD|_a7|_a0|defaultAdd|_a8|_1e|object|align|try|resizable|contains|catch|400|_20|_1f|onclick|750|menubar|_21|unbalanced|_1b|item|location|_26|param|delimiters|_1c|sans|1999|xhtml|meta|xmlns|dtd|EN|TR|transitional|equiv|Content|Georgia|New|Roman|About|utf|Type|charset|Transitional|XHTML|is|your|now|The|to|expand|view|copy|Can|find|DOCTYPE|PUBLIC|W3C|option|configured|Brush|wasn|background|fff|Gorbatchev|multiLineCComments|singleLineCComments|Alex|2004|syntax|highlighter|Copyright|singleLinePerlComments|doubleQuotedString|aspScriptTags|scriptScriptTags|typeof|phpScriptTags|multiLineSingleQuotedString|singleQuotedString|multiLineDoubleQuotedString|JavaScript|none|Helvetica|xx|large|Arial|Geneva|000|1em|3em|75em|bottom|target|0099FF|decoration|01|March|4em|296|string|open|_119|apply|_8a|offsetWidth|getComputedStyle|getPropertyValue|_98|1000|ignoreCase|textarea|sticky|_a4|_117|opera|getElementById|on|addEventListener|using|the|random|1000000|aliases|than|SyntaxError|valueNames|more|middot|_clipboard|70em|addPlugin|replaceVar|_ef|flags|constructing|from|important|highlighter_|max|forHtmlScript|getKeywords|fontSize|sgi|nogutter|another|spaces|Xml|_bf|load|all|30em|replaceChild|sx|_c4|highlighted|number|alt|sort|lastIndexOf|round|150|flag|msie|src|embed|classid|movie|_33|_34|ok|error|setData|amp|command|cab|swflash|96b8|11cf|Error|444553540000|codebase|ae6d|download|pub|cabs|clsid|macromedia|d27cdb6e|_39|printSource|shCore|about|toLowerCase|allowScriptAccess|always|printing|_42|data|500||250|_44|application|_43|subject|wmode|_3a|flashVars|transparent|_3b|cssText|absolute|position|menu|IFRAME".split("|"),0,{}));
SyntaxHighlighter.brushes.Alloy=function(){var a="abstract assert assert fact in all else extends module sig String Int one some lone set no ";
this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,css:"value"},{regex:/(?!\@interface\b)\@[\$\w]+\b/g,css:"color1"},{regex:/\@interface\b/g,css:"color2"},{regex:new RegExp(this.getKeywords(a),"gm"),css:"keyword"}];
this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags)};SyntaxHighlighter.brushes.Alloy.prototype=new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Alloy.aliases=["Alloy","alloy","als"];SyntaxHighlighter.brushes.Cpp=function(){var c="ATOM BOOL BOOLEAN BYTE CHAR COLORREF DWORD DWORDLONG DWORD_PTR DWORD32 DWORD64 FLOAT HACCEL HALF_PTR HANDLE HBITMAP HBRUSH HCOLORSPACE HCONV HCONVLIST HCURSOR HDC HDDEDATA HDESK HDROP HDWP HENHMETAFILE HFILE HFONT HGDIOBJ HGLOBAL HHOOK HICON HINSTANCE HKEY HKL HLOCAL HMENU HMETAFILE HMODULE HMONITOR HPALETTE HPEN HRESULT HRGN HRSRC HSZ HWINSTA HWND INT INT_PTR INT32 INT64 LANGID LCID LCTYPE LGRPID LONG LONGLONG LONG_PTR LONG32 LONG64 LPARAM LPBOOL LPBYTE LPCOLORREF LPCSTR LPCTSTR LPCVOID LPCWSTR LPDWORD LPHANDLE LPINT LPLONG LPSTR LPTSTR LPVOID LPWORD LPWSTR LRESULT PBOOL PBOOLEAN PBYTE PCHAR PCSTR PCTSTR PCWSTR PDWORDLONG PDWORD_PTR PDWORD32 PDWORD64 PFLOAT PHALF_PTR PHANDLE PHKEY PINT PINT_PTR PINT32 PINT64 PLCID PLONG PLONGLONG PLONG_PTR PLONG32 PLONG64 POINTER_32 POINTER_64 PSHORT PSIZE_T PSSIZE_T PSTR PTBYTE PTCHAR PTSTR PUCHAR PUHALF_PTR PUINT PUINT_PTR PUINT32 PUINT64 PULONG PULONGLONG PULONG_PTR PULONG32 PULONG64 PUSHORT PVOID PWCHAR PWORD PWSTR SC_HANDLE SC_LOCK SERVICE_STATUS_HANDLE SHORT SIZE_T SSIZE_T TBYTE TCHAR UCHAR UHALF_PTR UINT UINT_PTR UINT32 UINT64 ULONG ULONGLONG ULONG_PTR ULONG32 ULONG64 USHORT USN VOID WCHAR WORD WPARAM WPARAM WPARAM char bool short int __int32 __int64 __int8 __int16 long float double __wchar_t clock_t _complex _dev_t _diskfree_t div_t ldiv_t _exception _EXCEPTION_POINTERS FILE _finddata_t _finddatai64_t _wfinddata_t _wfinddatai64_t __finddata64_t __wfinddata64_t _FPIEEE_RECORD fpos_t _HEAPINFO _HFILE lconv intptr_t jmp_buf mbstate_t _off_t _onexit_t _PNH ptrdiff_t _purecall_handler sig_atomic_t size_t _stat __stat64 _stati64 terminate_function time_t __time64_t _timeb __timeb64 tm uintptr_t _utimbuf va_list wchar_t wctrans_t wctype_t wint_t signed";
var a="break case catch class const __finally __exception __try const_cast continue private public protected __declspec default delete deprecated dllexport dllimport do dynamic_cast else enum explicit extern if for friend goto inline mutable naked namespace new noinline noreturn nothrow register reinterpret_cast return selectany sizeof static static_cast struct switch template this thread throw true false try typedef typeid typename union using uuid virtual void volatile whcar_t while";
var b="assert isalnum isalpha iscntrl isdigit isgraph islower isprintispunct isspace isupper isxdigit tolower toupper errno localeconv setlocale acos asin atan atan2 ceil cos cosh exp fabs floor fmod frexp ldexp log log10 modf pow sin sinh sqrt tan tanh jmp_buf longjmp setjmp raise signal sig_atomic_t va_arg va_end va_start clearerr fclose feof ferror fflush fgetc fgetpos fgets fopen fprintf fputc fputs fread freopen fscanf fseek fsetpos ftell fwrite getc getchar gets perror printf putc putchar puts remove rename rewind scanf setbuf setvbuf sprintf sscanf tmpfile tmpnam ungetc vfprintf vprintf vsprintf abort abs atexit atof atoi atol bsearch calloc div exit free getenv labs ldiv malloc mblen mbstowcs mbtowc qsort rand realloc srand strtod strtol strtoul system wcstombs wctomb memchr memcmp memcpy memmove memset strcat strchr strcmp strcoll strcpy strcspn strerror strlen strncat strncmp strncpy strpbrk strrchr strspn strstr strtok strxfrm asctime clock ctime difftime gmtime localtime mktime strftime time";
this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/^ *#.*/gm,css:"preprocessor"},{regex:new RegExp(this.getKeywords(c),"gm"),css:"color1 bold"},{regex:new RegExp(this.getKeywords(b),"gm"),css:"functions bold"},{regex:new RegExp(this.getKeywords(a),"gm"),css:"keyword bold"}]
};SyntaxHighlighter.brushes.Cpp.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.Cpp.aliases=["cpp","c"];SyntaxHighlighter.brushes.Java=function(){var a="abstract assert boolean break byte case catch char class const continue default do double else enum extends false final finally float for goto if implements import instanceof int interface long native new null package private protected public return short static strictfp super switch synchronized this throw throws true transient try void volatile while";
this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,css:"value"},{regex:/(?!\@interface\b)\@[\$\w]+\b/g,css:"color1"},{regex:/\@interface\b/g,css:"color2"},{regex:new RegExp(this.getKeywords(a),"gm"),css:"keyword"}];
this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags)};SyntaxHighlighter.brushes.Java.prototype=new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Java.aliases=["java"];SyntaxHighlighter.brushes.NuSMV=function(){var a="MODULE IVAR VAR ASSIGN DEFINE TRANS INVARSPEC SPEC CTLSPEC LTLSPEC next init esac case TRUE FALSE main EF AG AX AF EX EG U A E ";
this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,css:"value"},{regex:/(?!\@interface\b)\@[\$\w]+\b/g,css:"color1"},{regex:/\@interface\b/g,css:"color2"},{regex:new RegExp(this.getKeywords(a),"gm"),css:"keyword"}];
this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags)};SyntaxHighlighter.brushes.NuSMV.prototype=new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.NuSMV.aliases=["NuSMV","nusmv","smv"];SyntaxHighlighter.brushes.Php=function(){var a="abs acos acosh addcslashes addslashes array_change_key_case array_chunk array_combine array_count_values array_diff array_diff_assoc array_diff_key array_diff_uassoc array_diff_ukey array_fill array_filter array_flip array_intersect array_intersect_assoc array_intersect_key array_intersect_uassoc array_intersect_ukey array_key_exists array_keys array_map array_merge array_merge_recursive array_multisort array_pad array_pop array_product array_push array_rand array_reduce array_reverse array_search array_shift array_slice array_splice array_sum array_udiff array_udiff_assoc array_udiff_uassoc array_uintersect array_uintersect_assoc array_uintersect_uassoc array_unique array_unshift array_values array_walk array_walk_recursive atan atan2 atanh base64_decode base64_encode base_convert basename bcadd bccomp bcdiv bcmod bcmul bindec bindtextdomain bzclose bzcompress bzdecompress bzerrno bzerror bzerrstr bzflush bzopen bzread bzwrite ceil chdir checkdate checkdnsrr chgrp chmod chop chown chr chroot chunk_split class_exists closedir closelog copy cos cosh count count_chars date decbin dechex decoct deg2rad delete ebcdic2ascii echo empty end ereg ereg_replace eregi eregi_replace error_log error_reporting escapeshellarg escapeshellcmd eval exec exit exp explode extension_loaded feof fflush fgetc fgetcsv fgets fgetss file_exists file_get_contents file_put_contents fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype floatval flock floor flush fmod fnmatch fopen fpassthru fprintf fputcsv fputs fread fscanf fseek fsockopen fstat ftell ftok getallheaders getcwd getdate getenv gethostbyaddr gethostbyname gethostbynamel getimagesize getlastmod getmxrr getmygid getmyinode getmypid getmyuid getopt getprotobyname getprotobynumber getrandmax getrusage getservbyname getservbyport gettext gettimeofday gettype glob gmdate gmmktime ini_alter ini_get ini_get_all ini_restore ini_set interface_exists intval ip2long is_a is_array is_bool is_callable is_dir is_double is_executable is_file is_finite is_float is_infinite is_int is_integer is_link is_long is_nan is_null is_numeric is_object is_readable is_real is_resource is_scalar is_soap_fault is_string is_subclass_of is_uploaded_file is_writable is_writeable mkdir mktime nl2br parse_ini_file parse_str parse_url passthru pathinfo readlink realpath rewind rewinddir rmdir round str_ireplace str_pad str_repeat str_replace str_rot13 str_shuffle str_split str_word_count strcasecmp strchr strcmp strcoll strcspn strftime strip_tags stripcslashes stripos stripslashes stristr strlen strnatcasecmp strnatcmp strncasecmp strncmp strpbrk strpos strptime strrchr strrev strripos strrpos strspn strstr strtok strtolower strtotime strtoupper strtr strval substr substr_compare";
var c="and or xor array as break case cfunction class const continue declare default die do else elseif enddeclare endfor endforeach endif endswitch endwhile extends for foreach function include include_once global if new old_function return static switch use require require_once var while abstract interface public implements extends private protected throw";
var b="__FILE__ __LINE__ __METHOD__ __FUNCTION__ __CLASS__";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\$\w+/g,css:"variable"},{regex:new RegExp(this.getKeywords(a),"gmi"),css:"functions"},{regex:new RegExp(this.getKeywords(b),"gmi"),css:"constants"},{regex:new RegExp(this.getKeywords(c),"gm"),css:"keyword"}];
this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags)};SyntaxHighlighter.brushes.Php.prototype=new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Php.aliases=["php"];SyntaxHighlighter.brushes.Python=function(){var c="and assert break class continue def del elif else except exec finally for from global if import in is lambda not or pass raise return try yield while";
var a="__import__ abs all any apply basestring bin bool buffer callable chr classmethod cmp coerce compile complex delattr dict dir divmod enumerate eval execfile file filter float format frozenset getattr globals hasattr hash help hex id input int intern isinstance issubclass iter len list locals long map max min next object oct open ord pow print property range raw_input reduce reload repr reversed round set setattr slice sorted staticmethod str sum super tuple type type unichr unicode vars xrange zip";
var b="None True False self cls class_";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLinePerlComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:/^\s*@\w+/gm,css:"decorator"},{regex:/(['\"]{3})([^\1])*?\1/gm,css:"comments"},{regex:/"(?!")(?:\.|\\\"|[^\""\n])*"/gm,css:"string"},{regex:/'(?!')(?:\.|(\\\')|[^\''\n])*'/gm,css:"string"},{regex:/\+|\-|\*|\/|\%|=|==/gm,css:"keyword"},{regex:/\b\d+\.?\w*/g,css:"value"},{regex:new RegExp(this.getKeywords(a),"gm"),css:"functions"},{regex:new RegExp(this.getKeywords(c),"gm"),css:"keyword"},{regex:new RegExp(this.getKeywords(b),"gm"),css:"color1"}];
this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags)};SyntaxHighlighter.brushes.Python.prototype=new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Python.aliases=["py","python"];SyntaxHighlighter.brushes.Ruby=function(){var a="alias and BEGIN begin break case class def define_method defined do each else elsif END end ensure false for if in module new next nil not or raise redo rescue retry return self super then throw true undef unless until when while yield";
var b="Array Bignum Binding Class Continuation Dir Exception FalseClass File::Stat File Fixnum Fload Hash Integer IO MatchData Method Module NilClass Numeric Object Proc Range Regexp String Struct::TMS Symbol ThreadGroup Thread Time TrueClass";
this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLinePerlComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\b[A-Z0-9_]+\b/g,css:"constants"},{regex:/:[a-z][A-Za-z0-9_]*/g,css:"color2"},{regex:/(\$|@@|@)\w+/g,css:"variable bold"},{regex:new RegExp(this.getKeywords(a),"gm"),css:"keyword"},{regex:new RegExp(this.getKeywords(b),"gm"),css:"color1"}];
this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags)};SyntaxHighlighter.brushes.Ruby.prototype=new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Ruby.aliases=["ruby","rails","ror"];SyntaxHighlighter.brushes.Sql=function(){var b="abs avg case cast coalesce convert count current_timestamp current_user day isnull left lower month nullif replace right session_user space substring sum system_user upper user year";
var c="absolute action add after alter as asc at authorization begin bigint binary bit by cascade char character check checkpoint close collate column commit committed connect connection constraint contains continue create cube current current_date current_time cursor database date deallocate dec decimal declare default delete desc distinct double drop dynamic else end end-exec escape except exec execute false fetch first float for force foreign forward free from full function global goto grant group grouping having hour ignore index inner insensitive insert instead int integer intersect into is isolation key last level load local max min minute modify move name national nchar next no numeric of off on only open option order out output partial password precision prepare primary prior privileges procedure public read real references relative repeatable restrict return returns revoke rollback rollup rows rule schema scroll second section select sequence serializable set size smallint static statistics table temp temporary then time timestamp to top transaction translation trigger true truncate uncommitted union unique update values varchar varying view when where with work";
var a="all and any between cross in join like not null or outer some";this.regexList=[{regex:/--(.*)$/gm,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.multiLineSingleQuotedString,css:"string"},{regex:new RegExp(this.getKeywords(b),"gmi"),css:"color2"},{regex:new RegExp(this.getKeywords(a),"gmi"),css:"color1"},{regex:new RegExp(this.getKeywords(c),"gmi"),css:"keyword"}]
};SyntaxHighlighter.brushes.Sql.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.Sql.aliases=["sql"];SyntaxHighlighter.brushes.Xml=function(){function a(e,j){var f=SyntaxHighlighter.Match,h=e[0],c=new XRegExp("(&lt;|<)[\\s\\/\\?]*(?<name>[:\\w-\\.]+)","xg").exec(h),b=[];
if(e.attributes!=null){var d,g=new XRegExp("(?<name> [\\w:\\-\\.]+)\\s*=\\s*(?<value> \".*?\"|'.*?'|\\w+)","xg");while((d=g.exec(h))!=null){b.push(new f(d.name,e.index+d.index,"color1"));
b.push(new f(d.value,e.index+d.index+d[0].indexOf(d.value),"string"))}}if(c!=null){b.push(new f(c.name,e.index+c[0].indexOf(c.name),"keyword"))
}return b}this.regexList=[{regex:new XRegExp("(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)","gm"),css:"color2"},{regex:new XRegExp("(\\&lt;|<)!--\\s*.*?\\s*--(\\&gt;|>)","gm"),css:"comments"},{regex:new XRegExp("(&lt;|<)[\\s\\/\\?]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)","sg"),func:a}]
};SyntaxHighlighter.brushes.Xml.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.Xml.aliases=["xml","xhtml","xslt","html","xhtml"];
var inlineeditor_isIE=(navigator.userAgent.toLowerCase().search("msie")!=-1&&navigator.userAgent.toLowerCase().search("opera")==-1)?true:false;
var InlineEditor={alreadyInited:false,addClass:function(a,b){return InlineEditor.jscss("add",a,b)},removeClass:function(a,b){return InlineEditor.jscss("remove",a,b)
},checkClass:function(a,b){return InlineEditor.jscss("check",a,b)},swapClass:function(c,b,a){return InlineEditor.jscss("swap",c,b,a)},customEditor:function(b){var a=jQuery("<input/>");
a.attr("id",b.attr("id")+"_editor");a.val(b.html()=="-- Add More --"?"":b.html());a.width(b.parent().width()-30);a.height(b.offset().height);
return a},handleOnClick:function(a){var a=InlineEditor.fixEvent(a);var e=jQuery(InlineEditor.findEditableTarget(a.target));if(e.hasClass("uneditable")||e.hasClass("editing")){return
}var c=e.html();var b=null;if(InlineEditor.elementValue){b=InlineEditor.elementValue(e)}if(!b){b=e.html()}var d=null;if(InlineEditor.customEditor){d=InlineEditor.customEditor(e)
}d.focusout(function(f){InlineEditor.handleInputBlur(d,b,c)});d.keypress(function(g){var f=13;if(g.which==f){d.blur();if(b=="-- Add More --"&&d.val()!=""){var h=e.attr("id");
jQuery("#"+h).click()}}});e.addClass("editing");e.html("");e.append(d);d.focusin();d.select();return false},handleInputBlur:function(e,a,c){var d=e.parent();
var b=null;if(InlineEditor.editorValue){b=InlineEditor.editorValue(e)}if(!b){b=e.val()==""?a:e.val()}if(a==b){d.html(c);d.removeClass("editing");
return}d.html(b);if(InlineEditor.elementChanged){InlineEditor.elementChanged(d,a,b)}},jscss:function(b,f,d,c){switch(b){case"swap":f.className=!InlineEditor.jscss("check",f,d)?f.className.replace(c,d):f.className.replace(d,c);
break;case"add":if(!InlineEditor.jscss("check",f,d)){f.className+=f.className?" "+d:d}break;case"remove":var e=f.className.match(" "+d)?" "+d:d;
f.className=f.className.replace(e,"");break;case"check":return new RegExp("\\b"+d+"\\b").test(f.className);break}},fixEvent:function(a){var b=a?a:window.event;
if(b.target){if(b.target.nodeType==3){b.target=b.target.parentNode}}if(inlineeditor_isIE){if(b.srcElement){b.target=b.srcElement}}return b
},findEditableTarget:function(a){if(a.nodeType==1&&a.tagName=="TD"){return a}if(InlineEditor.checkClass(a,"editable")){return a}if(a.parentNode){return InlineEditor.findEditableTarget(a.parentNode)
}return null},addEvent:function(d,b,c,a){if(d.addEventListener){d.addEventListener(b,c,a);return true}else{if(d.attachEvent){return d.attachEvent("on"+b,c)
}}},removeEvent:function(d,b,c,a){if(d.removeEventListener){d.removeEventListener(b,c,a);return true}else{if(d.detachEvent){return d.detachEvent("on"+b,c)
}}}};DropboxChooser={};DropboxChooser.init=function(){jQuery(".dropbox-button-chooser").each(function(){this.setAttribute("data-link-type","direct");
this.setAttribute("data-extensions",".ump");var a=this;this.addEventListener("DbxChooserSuccess",function(b){DropboxChooser.load(b.files[0].link)
},false)})};DropboxChooser.load=function(a){UmpleSystem.merge(null);Page.showCanvasLoading(true);Page.showModelLoading(true);Page.showLayoutLoading(true);
jQuery.get(a).done(function(b){Action.freshLoad=true;Page.setUmpleCode(b);Page.hideLoading();TabControl.getCurrentHistory().save(b,"dropboxLoad");
Action.updateUmpleDiagram();Action.setCaretPosition("0");Action.updateLineNumberDisplay()}).fail(function(){Page.setFeedbackMessage("Cannot load from the chosen Dropbox file.");
Page.hideLoading()})};var DropboxInitializer={};DropboxInitializer.initializeDropbox=function(){jQuery(".dropbox-add-saver").addClass("dropbox-option").append('<li id="ttDropboxSaver"><span class="dropbox-button-saver"></span></li>');
jQuery(".dropbox-add-chooser").addClass("dropbox-option").append('<li id="ttDropboxChooser"><input type="dropbox-chooser" class="dropbox-button-chooser"/></li>');
DropboxChooser.init();DropboxSaver.init()};DropboxMaster={resetTimeout:2000};DropboxSaver={};DropboxSaver.init=function(){jQuery(".dropbox-button-saver").each(function(){DropboxSaver.createSaverIn(this)
})};DropboxSaver.createSaverIn=function(b){var c=DropboxSaver.getAbsoluteLink(Page.getFilename());var a=Dropbox.createSaveButton({files:[{url:c}],success:function(){window.setTimeout(function(){jQuery(b).children(".dropbox-dropin-btn").remove();
DropboxSaver.createSaverIn(b)},DropboxMaster.resetTimeout)},error:function(d){console.log(d);Page.setFeedbackMessage("Cannot save to the chosen Dropbox location.")
}});jQuery(b).append(a)};DropboxSaver.getAbsoluteLink=function(b){var c=document.createElement("a");c.href=b.replace(/^\.\.\//,"");return c.href
};var Action=new Object();Action.waiting_time=1500;Action.oldTimeout=null;Action.elementClicked=false;Action.canCreateByDrag=true;Action.manualSync=false;
Action.diagramInSync=true;Action.freshLoad=false;Action.gentime=new Date().getTime();Action.savedCanonical="";Action.gdprHidden=false;
Action.update="";let justUpdatetoSaveLater=false;Action.setjustUpdatetoSaveLater=function(a){justUpdatetoSaveLater=a};let justUpdatetoSaveLaterForTextCallback=false;
Action.setjustUpdatetoSaveLaterForTextCallback=function(a){justUpdatetoSaveLaterForTextCallback=a};Action.clicked=function(a){Page.clickCount+=1;
var f=a.currentTarget;var d=f.id.substring(6);if(d=="PhpCode"){Action.generateCode("php","Php")}else{if(d=="RubyCode"){Action.generateCode("ruby","Ruby")
}else{if(d=="JavaCode"){Action.generateCode("java","Java")}else{if(d=="RTCppCode"){Action.generateCode("rtcpp","RTCpp")}else{if(d=="AlloyCode"){Action.generateCode("alloy","Alloy")
}else{if(d=="NuSMVCode"){Action.generateCode("nusmv","NuSMV")}else{if(d=="CppCode"){Action.generateCode("cpp","Cpp")}else{if(d=="SQLCode"){Action.generateCode("sql","Sql")
}else{if(d=="JavaAPIDoc"){Action.generateCode("javadoc","javadoc")}else{if(d=="StateDiagram"){Action.generateCode("stateDiagram","stateDiagram")
}else{if(d=="StructureDiagram"){Action.generateCode("structureDiagram","structureDiagram")}else{if(d=="FeatureDiagram"){Action.generateCode("featureDiagram","featureDiagram")
}else{if(d=="classDiagram"){Action.generateCode("classDiagram","classDiagram")}else{if(d=="entityRelationshipDiagram"){Action.generateCode("entityRelationshipDiagram","entityRelationshipDiagram")
}else{if(d=="EcoreCode"){Action.generateCode("xml","Ecore")}else{if(d=="GenerateCode"){var g=$("inputGenerateCode").value.split(":");
Action.generateCode(g[0],g[1])}else{if(d=="ExecuteCode"){var h=$("inputGenerateCode").value.split(":");Action.executeCode(h[0],h[1])}else{if(d=="SimulateCode"){Action.simulateCode()
}else{if(d=="StartOver"){Action.startOver()}else{if(d=="ShowRefreshUmpleOnlineCompletely"){Action.showRefreshUmpleOnlineCompletely()}else{if(d=="LoadBlankModel"){Action.loadBlankModel()
}else{if(d=="PngImage"){Action.pngImage()}else{if(d=="YumlImage"){Action.yumlImage()}else{if(d=="Jsf"){Action.uigu()}else{if(d=="CopyClip"){Action.copyClipboardCode()
}else{if(d=="Copy"){Action.showCodeInSeparateWindow()}else{if(d=="CopyCommandLine"){Action.copyCommandLineCode()}else{if(d=="CopyEncodedURL"){Action.showEncodedURLCodeInSeparateWindow()
}else{if(d=="CopyLocalBrowser"){if(typeof(Storage)!=="undefined"){localStorage.setItem("umpleLocalStorage1",Page.getUmpleCode());Page.setFeedbackMessage("Model saved. Use Load From Browser later to restore.")
}else{Page.setFeedbackMessage("Unable to copy the model to browser storage. An error occurred.")}}else{if(d=="LoadLocalBrowser"){if(typeof(Storage)!=="undefined"){var o=localStorage.getItem("umpleLocalStorage1");
if(o!=null){Page.setUmpleCode(o)}}}else{if(d=="CreateTask"){jQuery("#taskArea").css("display","block");jQuery("#labelTaskName").css("display","block");
jQuery("#taskNameCell").css("display","block");jQuery("#instructions").css("display","block");jQuery("#isExperimentCell").css("display","block");
Layout.zoomResize()}else{if(d=="LoadTask"){jQuery("#loadTaskNameArea").css("display","block")}else{if(d=="LoadThisTask"){Action.loadTask(Page.getModel().split("-")[1],false)
}else{if(d=="RequestLoadTaskURL"){var m=Page.getModel().split("-")[1];Action.copyToClp(window.location.hostname+"/bookmark.php?loadTaskWithURL=1&taskname="+m+"&model="+m)
}else{if(d=="RequestAllZip"){if(document.getElementById("downloadTaskDirLink")===null){var k=document.createElement("a");k.setAttribute("href","scripts/tab_control.php?downloadTaskUserDir=1&taskid="+Page.getModel());
k.setAttribute("id","downloadTaskDirLink");var c=document.createTextNode("Download ZIP File From Here");k.appendChild(c);var b=document.createElement("LI");
b.appendChild(k);document.getElementById("taskSubmenu").appendChild(b)}else{document.getElementById("downloadTaskDirLink").setAttribute("href","scripts/tab_control.php?downloadTaskUserDir=1&taskid="+Page.getModel())
}setTimeout(function(){document.getElementById("downloadTaskDirLink").remove()},30000)}else{if(d=="DownloadFiles"){TabControl.useActiveTabTo(TabControl.saveTab)(Page.getUmpleCode());
if(document.getElementById("downloadLink")===null){var k=document.createElement("a");k.setAttribute("href","scripts/tab_control.php?download=1&&model="+Page.getModel());
k.setAttribute("id","downloadLink");var c=document.createTextNode("Download ZIP File From Here");k.appendChild(c);var b=document.createElement("LI");
b.appendChild(k);document.getElementById("saveLoad").appendChild(b)}else{document.getElementById("downloadLink").setAttribute("href","scripts/tab_control.php?download=1&&model="+Page.getModel())
}setTimeout(function(){document.getElementById("downloadLink").remove()},30000)}else{if(d=="Undo"){Action.undo()}else{if(d=="Redo"){Action.redo()
}else{if(d=="Reindent"){var p=Page.getRawUmpleCode().split("\n");var e=Page.codeMirrorEditor.getCursor(true);var n=p[e.line].match(/^\s*/)[0].length;
var j=e.ch-n;e.ch=j;Action.reindent(p,e)}else{if(d=="ShowHideTextEditor"){Layout.showHideTextEditor();Page.showText=!Page.showText;Page.setShowHideIconState("SHT_button")
}else{if(d=="ShowHideCanvas"){Layout.showHideCanvas();Page.showCanvas=!Page.showCanvas;Page.setShowHideIconState("SHD_button")}else{if(d=="ShowEditableClassDiagram"){Action.changeDiagramType({type:"editableClass"})
}else{if(d=="ShowJointJSClassDiagram"){Action.changeDiagramType({type:"JointJSClass"})}else{if(d=="ShowGvClassDiagram"){Action.changeDiagramType({type:"GvClass"})
}else{if(d=="ShowGvFeatureDiagram"){Action.changeDiagramType({type:"GvFeature"})}else{if(d=="ShowGvStateDiagram"){Action.changeDiagramType({type:"GvState"})
}else{if(d=="ShowStructureDiagram"){Action.changeDiagramType({type:"structure"})}else{if(d=="ShowHideLayoutEditor"){Layout.showHideLayoutEditor()
}else{if(d=="ManualSync"){Action.enableManualSync()}else{if(d=="SyncDiagram"){Action.processTyping("codeMirrorEditor",true);Page.codeMirrorEditor.focus()
}else{if(d=="PhotoReady"){Action.photoReady()}else{if(d=="ToggleAttributes"){Action.toggleAttributes();Page.setShowHideIconState("SHA_button")
}else{if(d=="ToggleMethods"){Action.toggleMethods();Page.setShowHideIconState("SHM_button")}else{if(d=="ToggleActions"){Action.toggleActions()
}else{if(d=="ToggleTraits"){Action.toggleTraits()}else{if(d=="ToggleTransitionLabels"){Action.toggleTransitionLabels()}else{if(d=="ToggleGuards"){Action.toggleGuards()
}else{if(d=="ToggleGuardLabels"){Action.toggleGuardLabels()}else{if(d=="AllowPinch"){Action.allowPinch()}else{if(d=="ToggleFeatureDependency"){Action.toggleFeatureDependency()
}else{if(d=="StructureLink"){Action.generateStructureDiagramFile()}else{if(d=="TabsCheckbox"){Action.toggleTabs()}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}};
Action.focusOn=function(d,b){var a="#"+d;var c=((d=="umpleModelEditorText"||d=="umpleLayoutEditorText")||d=="CodeMirror");if(d=="CodeMirror"){a=".CodeMirror-scroll"
}if(b){if(!Page.isPhotoReady()||c){jQuery(a).parent().addClass("focus");jQuery(a).addClass("visibleFocus");if(c){Page.shortcutsEnabled=false;
if(Page.selectedItem!=null){Page.unselectAllToggleTools()}Action.unselectAll()}}}else{jQuery(a).parent().removeClass("focus");jQuery(a).removeClass("visibleFocus");
if(c||d=="CodeMirror"){Page.shortcutsEnabled=true}}};Action.startOver=function(){Page.setUmpleCode("");UmpleSystem.merge(null);window.location="umple.php"
};Action.showRefreshUmpleOnlineCompletely=function(){jQuery("#buttonStartOver").show()};Action.loadBlankModel=function(){UmpleSystem.merge(null);
Page.showCanvasLoading(true);Page.showModelLoading(true);Page.showLayoutLoading(true);Ajax.sendRequest("scripts/compiler.php",Action.loadExampleCallback,"exampleCode=")
};Action.undo=function(){if(jQuery("#buttonUndo").hasClass("disabled")){return}Action.redoOrUndo(true)};Action.redo=function(){if(jQuery("#buttonRedo").hasClass("disabled")){return
}Action.redoOrUndo(false)};Action.dropHandler=function(c){Page.setFeedbackMessage("File will be dropped");c.preventDefault();if(c.dataTransfer.items){for(var b=0;
b<c.dataTransfer.items.length;b++){if(c.dataTransfer.items[b].kind==="file"){var a=c.dataTransfer.items[b].getAsFile();a.text().then(function(d){Page.setUmpleCode(d)
})}}}else{for(var b=0;b<c.dataTransfer.files.length;b++){c.dataTransfer.files[b].text().then(function(d){Page.setUmpleCode(d)})}}};Action.dragOverHandler=function(a){a.preventDefault()
};Action.redoOrUndo=function(b){var d="";if(Action.manualSync&&Action.diagramInSync){Action.diagramInSync=false;Page.enablePaletteItem("buttonSyncDiagram",true);
Page.enableDiagram(false)}if(b){d=TabControl.getCurrentHistory().getPreviousVersion()}else{d=TabControl.getCurrentHistory().getNextVersion()
}if(d==History.noChange){d=""}var g=d.indexOf(Page.modelDelimiter);var f="";if(g==-1){f=d}else{f=d.substring(0,g)}var e=Page.getRawUmpleCode().replace(Page.modelDelimiter,"");
var a=Action.findDiff(e,f);var c=Action.getCaretPosition();Action.freshLoad=true;Page.setUmpleCode(d);if(!Action.manualSync){Action.updateLayoutEditorAndDiagram()
}Action.setjustUpdatetoSaveLater(true);setTimeout(function(){if(a[1]==a[2]){Action.setCaretPosition(c)}else{Action.setCaretPosition(a[3])
}},300)};Action.findDiff=function(c,f){var a=0;var d=c.length,g=f.length;var b=d;if(g<b){b=g}var e=0;while(e<b&&c.charAt(e)===f.charAt(e)){e++;
if(c.charAt(e)==="\n"&&f.charAt(e)==="\n"){a++}}var h=f.substring(e,1);return[d,g,e,a+1]};Action.loadFile=function(){var a=Page.getFilename();
if(a!=""){Action.setjustUpdatetoSaveLater(true);if(Page.getModel().substring(0,8)=="taskroot"){Ajax.sendRequest("scripts/compiler.php",Action.loadFileCallback,format("load=1&isTask=1&filename={0}",a))
}else{Ajax.sendRequest("scripts/compiler.php",Action.loadFileCallback,format("load=1&filename={0}",a))}}else{Action.saveNewFile()}};Action.loadFileCallback=function(b){Action.freshLoad=true;
if(Object.keys(TabControl.tabs).length>1){return}Page.setUmpleCode(b.responseText,true);TabControl.getCurrentHistory().save(b.responseText,"loadFileCallback");
Action.setjustUpdatetoSaveLater(true);if(TabControl.tabs[TabControl.getActiveTabId()].nameIsEphemeral){var a=TabControl.extractNameFromCode(b.responseText);
if(a){TabControl.useActiveTabTo(TabControl.renameTab)(a,true)}}if(!Action.manualSync){Action.updateUmpleDiagram();Action.freshLoad=false
}};Action.loadTask=function(a,b){jQuery("#showInstrcutionsArea").css("display","block");if(!b){Ajax.sendRequest("bookmark.php",Action.loadTaskBookmark,format("taskname={0}&model={0}",a))
}else{if(Page.getModel().split("-")[0]=="task"){Ajax.sendRequest("scripts/compiler.php",Action.loadTaskExceptCodeCallback,format("loadTask=1&loadInstructionAsHTML=1&filename={0}",a))
}else{Ajax.sendRequest("scripts/compiler.php",Action.loadTaskExceptCodeCallback,format("loadTask=1&filename={0}",a))}}};Action.loadTaskBookmark=function(a){if(a.responseText.split(" ")[0]=="Task"){window.alert("Load Task Failed! "+a.responseText)
}else{window.location.href="umple.php?model="+a.responseText}};Action.loadTaskCallback=function(b){Action.freshLoad=true;if(Object.keys(TabControl.tabs).length>1){return
}Action.setjustUpdatetoSaveLater(true);TabControl.getCurrentHistory().save(b.responseText,"loadTaskCallback");var c=b.responseText.split("task delimiter");
Page.setUmpleCode(c[0]);if(TabControl.tabs[TabControl.getActiveTabId()].nameIsEphemeral){var a=TabControl.extractNameFromCode(c[0]);if(a){TabControl.useActiveTabTo(TabControl.renameTab)(a,true)
}}if(!Action.manualSync){Action.updateUmpleDiagram()}TabControl.useActiveTabTo(TabControl.saveTab)(Page.getUmpleCode());TabControl.saveActiveTabs();
window.location.href="bookmark.php?taskname="+c[2]+"&model="+c[3]};Action.loadTaskExceptCodeCallback=function(b){Action.freshLoad=true;
if(!justUpdatetoSaveLater){TabControl.getCurrentHistory().save(b.responseText,"loadTaskExceptCodeCallback");Action.setjustUpdatetoSaveLater(true)
}var c=b.responseText.split("task delimiter");jQuery("#labelInstructions").text('Instructions for task "'+c[2]+'":');jQuery("#requestorName").val(c[4]);
jQuery("#labelInstructions").css("display","block");jQuery("#taskArea").css("display","block");if(Page.getModel().split("-")[0]=="task"){jQuery("#labelInstructions").text('Instructions for task "'+c[2]+'":               Requestor Name:'+c[4]);
jQuery("#labelCompletionURL").css("display","none");jQuery("#completionURLCell").css("display","none");jQuery("#labelRequestorName").css("display","none");
jQuery("#requestorName").css("display","none");jQuery("#instructionsHTML").html(c[1])}else{jQuery("#instructions").val(c[1]);jQuery("#instructions").css("display","block");
jQuery("#completionURL").val(c[5]);jQuery("#isExperimentCell").css("display","inline");jQuery("#isExperiment").prop("checked",c[6]=="true");
jQuery("#instructions").each(function(){this.setAttribute("style","height:"+(this.scrollHeight)+"px;overflow-y:hidden;")}).on("input",function(){this.style.height="auto";
this.style.height=(this.scrollHeight)+"px"})}if(TabControl.tabs[TabControl.getActiveTabId()].nameIsEphemeral){var a=TabControl.extractNameFromCode(c[0]);
if(a){TabControl.useActiveTabTo(TabControl.renameTab)(a,true)}}Layout.zoomResize()};Action.submitLoadTask=function(){var a=jQuery("#inputLoadTaskName").val();
let patt=/^(\w|\.)+$/;if(!patt.test(a)){window.alert("Task Name can only contain letters(case insensitive), underscores, dots, and digits!");
return}Action.loadTask(a,false)};Action.submitTaskWork=function(){Ajax.sendRequest("task.php",Action.submitTaskWorkCallback,format("submitTaskWork=1&model={0}&responseURL={1}",Page.getModel(),window.location.href))
};Action.submitTaskWorkCallback=function(a){window.alert("Successfully submitted Task!");var b=a.responseText.split("task submit delimiter");
if(b[0]==""){window.location.href=b[2]}else{window.location.href=b[0]+"?task="+b[1]+"&url="+b[2]}};Action.launchParticipantURL=function(){var a=Page.getModel().split("-")[1];
window.open("bookmark.php?loadTaskWithURL=1&taskname="+a+"&model="+a)};Action.copyParticipantURL=function(){var b=Page.getModel().split("-")[1];
var a=window.location.hostname+window.location.pathname.substring(0,window.location.pathname.lastIndexOf("/"))+"/bookmark.php?loadTaskWithURL=1&taskname="+b+"&model="+b;
Action.copyToClp(a);Page.setFeedbackMessage("Participant URL is in copy buffer: "+a)};Action.openStartFreshWork=function(){var b=confirm("Are you sure to start from fresh?");
if(b){window.location.href="/umpleonline/umple.php"}};Action.copyToClp=function(e){prenode=document.createElement("PRE");e=document.createTextNode(e);
prenode.appendChild(e);var c=document;var f=window;var a=c.body;a.appendChild(prenode);if(a.createTextRange){var j=a.createTextRange();
j.moveToElementText(e);j.select();c.execCommand("copy")}else{var j=c.createRange();var h=f.getSelection;j.selectNodeContents(e);h().removeAllRanges();
h().addRange(j);c.execCommand("copy");h().removeAllRanges()}prenode.remove()};Action.openInstructionInNewTab=function(){jQuery("#buttonReshowInstructions").css("display","inline");
var a=window.open("about:blank","_blank");a.document.write(jQuery("#instructionsHTML").html());a.document.close();jQuery("#instructionsHTML").css("display","none");
jQuery("#labelInstructions").css("display","none");jQuery("#buttonHideInstructions").css("display","none");Layout.zoomResize()};Action.reshowInstructions=function(){jQuery("#instructionsHTML").css("display","block");
jQuery("#labelInstructions").css("display","inline");jQuery("#buttonReshowInstructions").css("display","none");jQuery("#buttonHideInstructions").css("display","inline");
Layout.zoomResize()};Action.hideInstructions=function(){jQuery("#instructionsHTML").css("display","none");jQuery("#labelInstructions").css("display","none");
jQuery("#buttonHideInstructions").css("display","none");jQuery("#buttonReshowInstructions").css("display","inline");Layout.zoomResize()
};Action.saveNewFile=function(){var b=Page.getUmpleCode();var a=Page.getFilename();if(a==""){Ajax.sendRequest("scripts/compiler.php",Action.saveNewFileCallback,format("save=1&&umpleCode={0}",b))
}};Action.saveNewFileCallback=function(a){Page.setFilename(a.responseText)};Action.changeDiagramType=function(b){var a=false;jQuery(".layoutListItem").hide();
if(b.type=="editableClass"){if(Page.useEditableClassDiagram){return}Page.useEditableClassDiagram=true;Page.useJointJSClassDiagram=false;
Page.useGvClassDiagram=false;Page.useGvStateDiagram=false;Page.useGvFeatureDiagram=false;Page.useStructureDiagram=false;a=true;jQuery("#buttonShowEditableClassDiagram").prop("checked","checked");
Page.setDiagramTypeIconState("editableClass");jQuery(".view_opt_class").show();jQuery(".view_opt_class_palette").show()}else{if(b.type=="JointJSClass"){if(Page.useJointJSClassDiagram){return
}Page.useEditableClassDiagram=false;Page.useJointJSClassDiagram=true;Page.useGvClassDiagram=false;Page.useGvStateDiagram=false;Page.useGvFeatureDiagram=false;
Page.useStructureDiagram=false;a=true;jQuery("#buttonShowJointJSClassDiagram").prop("checked","checked");Page.setDiagramTypeIconState("JointJSClass");
jQuery(".view_opt_class").show();jQuery(".view_opt_class_palette").show()}else{if(b.type=="GvClass"){if(Page.useGvClassDiagram){return
}Page.useEditableClassDiagram=false;Page.useJointJSClassDiagram=false;Page.useGvClassDiagram=true;Page.useGvStateDiagram=false;Page.useGvFeatureDiagram=false;
Page.useStructureDiagram=false;a=true;jQuery("#buttonShowGvClassDiagram").prop("checked","checked");Page.setDiagramTypeIconState("GvClass");
jQuery(".view_opt_class").show()}else{if(b.type=="GvState"){if(Page.useGvStateDiagram){return}Page.useEditableClassDiagram=false;Page.useJointJSClassDiagram=false;
Page.useGvClassDiagram=false;Page.useGvStateDiagram=true;Page.useStructureDiagram=false;Page.useGvFeatureDiagram=false;a=true;jQuery("#buttonShowGvStateDiagram").prop("checked","checked");
Page.setDiagramTypeIconState("GvState");jQuery(".view_opt_state").show()}else{if(b.type=="GvFeature"){if(Page.useGvFeatureDiagram){return
}Page.useEditableClassDiagram=false;Page.useJointJSClassDiagram=false;Page.useGvClassDiagram=false;Page.useGvStateDiagram=false;Page.useStructureDiagram=false;
Page.useGvFeatureDiagram=true;a=true;jQuery("#buttonShowGvFeatureDiagram").prop("checked","checked");Page.setDiagramTypeIconState("GvFeature");
jQuery(".view_opt_feature").show()}else{if(b.type=="structure"){if(Page.useGvStructureDiagram){return}Page.useEditableClassDiagram=false;
Page.useJointJSClassDiagram=false;Page.useGvClassDiagram=false;Page.useGvStateDiagram=false;Page.useStructureDiagram=true;Page.useGvFeatureDiagram=false;
a=true;jQuery("#buttonShowStructureDiagram").prop("checked","checked");Page.setDiagramTypeIconState("structure")}}}}}}if(a){Action.redrawDiagram()
}};Action.pngImage=function(){var b=Json.toString(UmpleSystem);var a=encodeURIComponent(b);window.open("scripts/compiler.php?asImage="+a,"UMLClassDiagram")
};Action.yumlImage=function(){var a="#buttonYumlImage";jQuery(a).showLoading();Action.ajax(Action.yumlImageCallback,"save=1")};Action.yumlImageCallback=function(b){var a=b.responseText;
var c="#buttonYumlImage";jQuery(c).hideLoading();window.open("scripts/compiler.php?asYuml="+a,"yumlClassDiagram");Page.showViewDone()
};Action.uigu=function(){var a="#buttonUigu";jQuery(a).showLoading();Action.ajax(Action.uiguCallback,"save=1")};Action.uiguCallback=function(c){var b=c.responseText;
var a="#buttonUigu";jQuery(a).hideLoading();window.open("scripts/compiler.php?asUI="+b,"showUserInterface");Page.showViewDone()};Action.copyClipboardCode=function(){Action.copyToClp(Page.getUmpleCode());
Page.setFeedbackMessage("Code has been copied to the clipboard")};Action.copyCommandLineCode=function(){var a="sh\n";a+="echo Will compile umple file. Requires umple command to be installed\n";
a+="cd ~/tmp\n";a+="mkdir testump-$$\n";a+="cd testump-$$\n";a+="cat >> test.ump <<ENDUMP\n";var b="\nENDUMP\n";b+="umple test.ump -c -\n";
b+="echo Use ctrl-D to exit back to the original shell\n\n";Action.copyToClp(a+Page.getUmpleCode()+b);Page.setFeedbackMessage("Shell code to compile on command line was copied to clipboard")
};Action.showCodeInSeparateWindow=function(){codeWindow=window.open("","UmpleCode"+Math.random()*10000,"height=700, width=400, left=100, top=100, location=no, status=no, scrollbars=yes");
codeWindow.document.write('<code><pre id="umpleCode">'+Page.getUmpleCode()+"</pre></code>");codeWindow.document.title="Umple raw code";
codeWindow.document.close()};Action.showEncodedURLCodeInSeparateWindow=function(){codeWindow=window.open("","UmpleEncodedURL"+Math.random()*10000,"height=500, width=400, left=100, top=100, location=no, status=no, scrollbars=yes");
codeWindow.document.write('<code><pre id="umpleCode">'+Page.getEncodedURL()+"</pre></code>");codeWindow.document.title="Umple encoded URL";
codeWindow.document.close()};Action.simulateCode=function(){simulateButtonSelector="#buttonSimulateCode";jQuery(simulateButtonSelector).showLoading();
Action.ajax(Action.simulateCodeCallback,"language=Simulate")};Action.simulateCodeCallback=function(a){simulateButtonSelector="#buttonSimulateCode";
jQuery(simulateButtonSelector).hideLoading();var b=a.responseText;window.open("../umpleonline/simulate.php?model="+b,"umpleSimulator");
Page.showViewDone()};Action.classSelected=function(d){var e=Page.selectedClass;var f=d;if(e!=null){Page.selectedClass=null;jQuery("#"+e.id).css("background-color","white");
var a="#"+e.id+"_anchor";for(var b=0;b<8;b++){jQuery(a+b).hide()}}if(f!=null){jQuery("#umpleCanvas").addClass("unscrollable");Page.selectedClass=UmpleSystem.find(f.id);
jQuery("#"+f.id).css("background-color","#F3F6FB");var a="#"+f.id+"_anchor";var c="#"+f.id+"_hover";for(var b=0;b<8;b++){jQuery(a+b).show();
jQuery(c+b).hide()}}else{jQuery("#umpleCanvas").removeClass("unscrollable")}};Action.classHover=function(h,g){var b=h.currentTarget;if(!Action.diagramInSync){return
}if(Page.selectedClass!=null&&Page.selectedClass.id==b.id){return}var c=g?"block":"none";var a=jQuery("#"+b.id);if(g){a.css("background-color","#F3F6FB")
}else{a.css("background-color","white")}if(Page.canShowHovers()){var f=8;var e="#"+b.id+"_hover";for(var d=0;d<f;d++){if(g){jQuery(e+d).show()
}else{jQuery(e+d).hide()}}}};Action.unselectAll=function(){Action.classSelected(null);Action.associationSelected(null);Action.generalizationSelected(null);
Action.transitionSelected(null)};Action.classClicked=function(a){if(!Action.diagramInSync){return}Action.focusOn("umpleCanvas",true);
Action.focusOn("umpleModelEditorText",false);Action.unselectAll();Action.elementClicked=true;var b=a.currentTarget;Action.selectClass(b.id);
if(Page.selectedItem=="DeleteEntity"){DiagramEdit.classDeleted(b.id)}else{if(Page.selectedItem=="AddAssociation"){if(DiagramEdit.newAssociation==null){Action.canCreateByDrag=false;
DiagramEdit.createAssociationPartOne(a)}else{DiagramEdit.createAssociationPartTwo(a);setTimeout(function(){Action.canCreateByDrag=true
},500)}}else{if(Page.selectedItem=="AddGeneralization"){if(DiagramEdit.newGeneralization==null){var c=DiagramEdit.createGeneralizationPartOne(a);
if(c){Action.canCreateByDrag=false}}else{DiagramEdit.createGeneralizationPartTwo(a);setTimeout(function(){Action.canCreateByDrag=true
},500)}}else{Action.classSelected(b)}}}};Action.stateClicked=function(a){Page.setFeedbackMessage("state clicked");if(!Action.diagramInSync){return
}Action.focusOn("umpleCanvas",true);Action.focusOn("umpleModelEditorText",false);Action.unselectAll();Action.elementClicked=true;var b=a.currentTarget;
Action.selectState(b.id);if(Page.selectedItem=="AddTransition"){if(DiagramEdit.newTransition==null){Action.canCreateByDrag=false;DiagramEdit.createTransitionPartOne(a)
}else{DiagramEdit.createTransitionPartTwo(a);setTimeout(function(){Action.canCreateByDrag=true},500)}}else{Action.stateSelected(b)}};
Action.associationClicked=function(a){if(!Action.diagramInSync){return}Action.elementClicked=true;Action.unselectAll();var b=a.currentTarget;
Action.associationSelected(b)};Action.transitionClicked=function(a){Page.setFeedbackMessage("transition clicked");if(!Action.diagramInSync){return
}Action.elementClicked=true;Action.unselectAll();var b=a.currentTarget;Action.transitionSelected(b)};Action.generalizationClicked=function(a){if(!Action.diagramInSync){return
}Action.elementClicked=true;Action.unselectAll();var b=a.currentTarget;Action.generalizationSelected(b)};Action.associationHover=function(e,d){if(!Action.diagramInSync){return
}var g=e.currentTarget;var b=UmpleSystem.findAssociation(g.id);if(g!=null&&Page.canShowHovers()){var f=2;var a="#"+g.id+"_hover";for(var c=0;
c<f;c++){if(d){jQuery(a+c).show()}else{jQuery(a+c).hide()}}}};Action.transitionHover=function(f,e){if(!Action.diagramInSync){return}var c=f.currentTarget;
var b=UmpleSystem.findTransition(c.id);if(updateAssociation!=null&&Page.canShowHovers()){var g=2;var a="#"+updateAssociation.id+"_hover";
for(var d=0;d<g;d++){if(e){jQuery(a+d).show()}else{jQuery(a+d).hide()}}}};Action.generalizationHover=function(d,c){if(!Action.diagramInSync){return
}var e=d.currentTarget;if(e!=null&&Page.canShowHovers()){var a="#"+e.id+"_hover";for(var b=0;b<3;b++){if(c){jQuery(a+b).show()}else{jQuery(a+b).hide()
}}}};Action.associationSelected=function(e){var c=(e==null)?false:true;var a=null;if(Page.selectedItem=="DeleteEntity"&&e!=null){var f=false;
DiagramEdit.associationDeleted(e.id,f);return}if(e!=null){Page.selectedAssociation=e;a=e}else{if(Page.selectedAssociation!=null){a=Page.selectedAssociation;
Page.selectedAssociation=null}else{return}}var b=2;var g="#"+a.id+"_anchor";for(var d=0;d<b;d++){if(c){jQuery(g+d).show()}else{jQuery(g+d).hide()
}}};Action.transitionSelected=function(e){var c=(e==null)?false:true;var a=null;if(Page.selectedItem=="DeleteEntity"&&e!=null){var f=false;
DiagramEdit.transitionDeleted(e.id,f);return}if(e!=null){Page.selectedTransition=e;a=e}else{if(Page.selectedTransition!=null){a=Page.selectedTransition;
Page.selectedTransition=null}else{return}}var b=2;var g="#"+a.id+"_anchor";for(var d=0;d<b;d++){if(c){jQuery(g+d).show()}else{jQuery(g+d).hide()
}}};Action.generalizationSelected=function(e){var c=(e==null)?false:true;var a=null;if(Page.selectedItem=="DeleteEntity"&&e!=null){var f=false;
DiagramEdit.generalizationDeleted(e.id,f);return}if(e!=null){Page.selectedGeneralization=e;a=e}else{if(Page.selectedGeneralization!=null){a=Page.selectedGeneralization;
Page.selectedGeneralization=null}else{return}}var b=3;var g="#"+a.id+"_anchor";for(var d=0;d<b;d++){if(c){jQuery(g+d).show()}else{jQuery(g+d).hide()
}}};Action.executeCode=function(a,b){var d="#buttonExecuteCode";var c=b;jQuery(d).showLoading();Action.ajax(function(e){Action.executeCodeCallback(e)
},format("execute=true&language={0}&languageStyle={1}&model={2}",c,a,Page.getModel()),"true")};Action.generateCode=function(a,c){var b="#buttonGenerateCode";
var e=c;var d;if(Page.getAdvancedMode()==0&&(c==="Cpp")){e="Experimental-"+c}if(c==="StateTables"){d=StateTree.colourStateTables}if(c==="EventSequence"){d=StateTree.colourEventSequences
}if(c==="stateDiagram"){e=c+"."+$("inputGenerateCode").value.split(":")[1]}jQuery(b).showLoading();Action.ajax(function(f){Action.generateCodeCallback(f,a,d)
},format("language={0}&languageStyle={1}",e,a),"true")};Action.photoReady=function(){var a="#"+Page.umpleCanvasId();if(Page.isPhotoReady()){jQuery(a).addClass("photoReady")
}else{jQuery(a).removeClass("photoReady")}UmpleSystem.redrawCanvas()};Action.executeCodeCallback=function(a){var b="#buttonExecuteCode";
jQuery(b).hideLoading();Page.showExecutionArea();Page.hideGeneratedCodeOnly();Page.showExecutedResponse(a.responseText);window.location.href="#codeExecutionArea"
};Action.generateCodeCallback=function(b,d,a){Page.showGeneratedCode(b.responseText,d);Page.hideExecutionArea();Action.gentime=new Date().getTime();
if(a!==undefined){a()}var c="#buttonGenerateCode";jQuery(c).hideLoading();Page.showCodeDone();window.location.href="#genArea"};Action.classMouseDown=function(a){if(!Action.canCreateByDrag){return
}if(Page.selectedItem=="AddAssociation"&&DiagramEdit.newAssociation==null){DiagramEdit.createAssociationPartOne(a)}else{if(Page.selectedItem=="AddGeneralization"&&DiagramEdit.newGeneralization==null){DiagramEdit.createGeneralizationPartOne(a)
}else{if(Page.selectedItem=="AddTransition"&&DiagramEdit.newTransition==null){DiagramEdit.createTransitionPartOne(a)}}}};Action.classMouseUp=function(a){if(!Action.canCreateByDrag){return
}if(Page.selectedItem=="AddAssociation"&&DiagramEdit.newAssociation!=null){DiagramEdit.createAssociationPartTwo(a)}else{if(Page.selectedItem=="AddGeneralization"&&DiagramEdit.newGeneralization!=null){DiagramEdit.createGeneralizationPartTwo(a)
}else{if(Page.selectedItem=="AddTransition"&&DiagramEdit.newTransition!=null){DiagramEdit.createTransitionPartTwo(a)}}}};Action.mouseMove=function(a){Page.clickCount=0;
if(Page.selectedItem=="AddClass"){if(DiagramEdit.newClass==null){DiagramEdit.newClass=new UmpleClass();DiagramEdit.newClass.name="";DiagramEdit.newClass.id="tempClass"
}Action.drawClassOutline(a,DiagramEdit.newClass)}if(DiagramEdit.newAssociation!=null&&Page.selectedItem=="AddAssociation"){Action.drawAssociationLine(a,DiagramEdit.newAssociation)
}if(DiagramEdit.newTransition!=null&&Page.selectedItem=="AddTransition"){Action.drawTransitionLine(a,Diagramedit.newTransition)}if(DiagramEdit.newGeneralization!=null&&Page.selectedItem=="AddGeneralization"){Action.drawGeneralizationLine(a,DiagramEdit.newGeneralization)
}};Action.drawClassOutline=function(a,g){var f="#"+Page.umpleCanvasId();var e=new UmplePosition(a.pageX,a.pageY+1,0,0);var j=e.subtract(UmpleSystem.position());
g.position=new UmplePosition(j.x,j.y,UmpleClassFactory.defaultSize.width,UmpleClassFactory.defaultSize.height);var k=g.drawableClassOutline();
jQuery(f).append(k);var h="#"+g.id;var b=h+"_width";var d=h+"_height";var c=new Object();c.left=e.x;c.top=e.y;jQuery(h).offset(c);jQuery(b).width(g.position.width);
jQuery(d).height(g.position.height)};Action.drawAssociationLine=function(c,b){var a="#"+Page.umpleCanvasId();var d=new UmplePosition(c.pageX,c.pageY,0,0);
b.classTwoPosition=d.subtract(UmpleSystem.position());jQuery(a).append(b.drawable())};Action.drawTransitionLine=function(c,b){var a="#"+Page.umpleCanvasId();
var d=new UmplePosition(c.pageX,c.pageY,0,0);b.toStatePosition=d.subtract(UmpleSystem.position());jQuery(a).append(b.drawable())};Action.drawGeneralizationLine=function(d,g){var c="#"+Page.umpleCanvasId();
var a="#"+g.getElementId();var b=UmpleSystem.position();var f=d.pageX-5-b.x;var e=d.pageY+5-b.y;g.parentPosition=new UmplePosition(f,e,0,0);
jQuery(a).remove();jQuery(c).append(g.drawable(false))};Action.umpleCanvasClicked=function(b){if(Action.elementClicked){Action.elementClicked=false;
return}if(Page.selectedItem=="AddClass"){var a=new UmplePosition(Math.floor(b.pageX),Math.floor(b.pageY),0,0);DiagramEdit.addClass(a)
}else{if(Page.selectedItem=="AddAssociation"&&DiagramEdit.newAssociation!=null){if(Page.clickCount>1){DiagramEdit.removeNewAssociation()
}}else{if(Page.selectedItem=="AddTransition"&&DiagramEdit.newTransition!=null){if(Page.clickCount>1){DiagramEdit.removeNewTransition()
}}else{if(Page.selectedItem=="AddGeneralization"&&DiagramEdit.newGeneralization!=null){if(Page.clickCount>1){DiagramEdit.removeNewGeneralization()
}}else{Action.unselectAll()}}}}};Action.directUpdateCommandCallback=function(a){Action.updateUmpleTextCallback(a);Action.redrawDiagram()
};Action.updateUmpleTextCallback=function(a){if(!justUpdatetoSaveLater&&!justUpdatetoSaveLaterForTextCallback){TabControl.getCurrentHistory().save(a.responseText,"TextCallback");
Page.setExampleMessage("")}Action.freshLoad=true;Page.setUmpleCode(a.responseText,Action.update.codeChange);Page.hideLoading();if(DiagramEdit.textChangeQueue.length==0){Action.freshLoad=false;
DiagramEdit.pendingChanges=false;Action.setjustUpdatetoSaveLater(false);Action.setjustUpdatetoSaveLaterForTextCallback(false)}else{Action.setjustUpdatetoSaveLater(true);
Action.setjustUpdatetoSaveLaterForTextCallback(true);DiagramEdit.doTextUpdate()}};Action.setExampleType=function setExampleType(){jQuery("#itemLoadExamples").hide();
jQuery("#itemLoadExamples2").hide();jQuery("#itemLoadExamples3").hide();jQuery("#itemLoadExamples4").hide();if(Page.getExampleType()=="cdModels"){jQuery("#itemLoadExamples").show();
jQuery("#defaultExampleOption").prop("selected",true)}else{if(Page.getExampleType()=="smModels"){jQuery("#itemLoadExamples2").show();
jQuery("#defaultExampleOption2").prop("selected",true)}else{if(Page.getExampleType()=="featureModels"){jQuery("#itemLoadExamples4").show();
jQuery("#defaultExampleOption4").prop("selected",true)}else{jQuery("#itemLoadExamples3").show();jQuery("#defaultExampleOption3").prop("selected",true)
}}}};Action.loadExample=function loadExample(){var h=this.dataset.diagramType;var f=jQuery(" option:selected",this);if(f.hasClass("openUmprOption")){location.href="http://umpr.umple.org?diagram-type="+h;
return}UmpleSystem.merge(null);Page.showCanvasLoading(true);Page.showModelLoading(true);Page.showLayoutLoading(true);Ajax.sendRequest("scripts/compiler.php",Action.loadExampleCallback,"exampleCode="+Page.getSelectedExample());
var a=Page.getSelectedExample().slice(0,-4);var h="";if(Page.useGvStateDiagram){h="&diagramtype=state"}else{if(Page.useGvFeatureDiagram){h="&diagramtype=GvFeature"
}else{if(Page.useStructureDiagram){h="&diagramtype=structure&generateDefault=cpp"}else{}}}var b="#buttonLarger";var e="#buttonSmaller";
var c="#"+Page.umpleCanvasId();umpleCanvasWidth=jQuery(c).width();umpleCanvasHeight=jQuery(c).height();var d=Page.getSelectedExample();
var g="?example="+a+h;Page.setExampleMessage('<a href="'+g+'">URL for '+a+" example</a>");jQuery("#inputExample").blur()};Action.loadExampleCallback=function(a){Action.freshLoad=true;
Action.setjustUpdatetoSaveLater(true);Page.setUmpleCode(a.responseText,function(){Page.hideLoading();Action.updateUmpleDiagram()});Action.setCaretPosition("0");
Action.updateLineNumberDisplay();TabControl.getCurrentHistory().save(a.responseText,"loadExampleCallback")};Action.customSizeTyped=function(){if(Action.oldTimeout!=null){clearTimeout(Action.oldTimeout)
}var b=jQuery("#widthField").val();var a=jQuery("#heightField").val();Action.oldTimeout=setTimeout(function(){Page.setUmpleCanvasSize(b,a)
},Action.waiting_time)};Action.moveSelectedClass=function(a,b){if(a==null){return}a.position=a.position.add(b);UmpleSystem.updateClass(a);
Action.classSelected(a);if(Action.oldTimeout!=null){clearTimeout(Action.oldTimeout)}Action.oldTimeout=setTimeout(function(){DiagramEdit.classMoved(Page.selectedClass)
},1000)};Action.keyboardShortcut=function(b){if(!Page.shortcutsEnabled){return}var a=b.which;if(a==27){var c=Page.unselectAllToggleTools();
if(!c){jQuery(".visibleFocus").blur()}}else{if((a==8||a==46)&&jQuery("#umpleCanvasColumn").hasClass("focus")){if(Page.selectedClass&&jQuery("#"+Page.selectedClass.id).find("input").length==0){DiagramEdit.classDeleted(Page.selectedClass.id);
b.preventDefault()}else{if(Page.selectedAssociation){DiagramEdit.associationDeleted(Page.selectedAssociation.id);b.preventDefault()}else{if(Page.selectedGeneralization){DiagramEdit.generalizationDeleted(Page.selectedGeneralization.id);
b.preventDefault()}}}}else{if((a==8||a==46)&&jQuery(".umpleClass").is(":focus")){DiagramEdit.classDeleted(document.activeElement.id);
b.preventDefault()}else{if((a==8||a==46)&&(jQuery(".untracedAssociation").is(":focus")||jQuery(".redTracedAssociation").is(":focus"))){DiagramEdit.associationDeleted(document.activeElement.id);
b.preventDefault()}else{if((a==8||a==46)&&jQuery(".umpleGeneralization").is(":focus")){DiagramEdit.generalizationDeleted(document.activeElement.id);
b.preventDefault()}}}}}};Action.getCaretPosition=function(){var d=document.getElementById("umpleModelEditorText");var c=Action.getInputSelectionStart(d);
var a=1;var e=Page.getRawUmpleCode();for(var b=0;b<(c);b++){if(e.charAt(b)=="\n"){a++}if(Page.getAdvancedMode()==2&&b<15){Page.catFeedbackMessage("<"+b+" "+e.charAt(b)+"="+e.charCodeAt(b)+"> ")
}}return a};Action.getInputSelectionStart=function(d){var g=0,f,c,b,a,e;if(typeof d.selectionStart=="number"&&typeof d.selectionEnd=="number"){g=d.selectionStart;
if(Page.getAdvancedMode()==2){Page.setFeedbackMessage("Non-IE browser ")}}else{if(Page.getAdvancedMode()==2){Page.setFeedbackMessage("IE-type browser ")
}c=document.selection.createRange();if(c&&c.parentElement()==d){a=d.value.length;f=d.value.replace(/\r\n/g,"\n");b=d.createTextRange();
b.moveToBookmark(c.getBookmark());e=d.createTextRange();e.collapse(false);if(b.compareEndPoints("StartToEnd",e)>-1){g=a}else{g=-b.moveStart("character",-a);
g+=f.slice(0,g).split("\n").length-1}}}return g};Action.setCaretPosition=function(a){if(isNaN(a-0)){if(a=="gd"){jQuery("#gdprtext").show();
Action.gdprHidden=false}if(a=="av"){document.getElementById("advancedMode").value=1;Page.setFeedbackMessage("");return}if(a=="db"){document.getElementById("advancedMode").value=2;
Page.setFeedbackMessage("Debug Mode");return}if(a=="sp"){if(existSCookie("surveyCookie")==null&&window.localStorage.getItem("surveyShown")==null){if(document.getElementById("styleTip")!=null){document.getElementById("styleTip").innerHTML=""
}window.randomSurveyRoll=1;window.surveyData.EditsBeforePrompt=1;timeSurveyUp=false;clearTimeout(timeSurvey);timeSurvey=setTimeout(function(){timeSurveyUp=true
},10000);timeSurvey;displayedText=false;if(!displayedText){beforeInstance=TabControl.getCurrentHistory().currentIndex;document.addEventListener("mouseover",function(){if(TabControl.getCurrentHistory().currentIndex-beforeInstance>=1&&!displayedText&&timeSurveyUp){displaySurvey();
this.removeEventListener("mouseover",arguments.callee)}})}}}if(a=="sc"){let setToExpire=new Date();setToExpire.setTime(setToExpire.getTime()-1000);
document.cookie="surveyCookie=done; expires="+setToExpire.toUTCString()+"; path=/;";window.localStorage.removeItem("surveyShown");document.addEventListener("mouseover",function(){});
setCookieBeforeClose("off")}if(a=="tc"){Page.setFeedbackMessage("Clearing tip cookies");let currentTime=new Date();currentTime.setTime(currentTime.getTime()-1000);
window.localStorage.removeItem("first_time");document.cookie="tipCookie=done; expires="+currentTime.toUTCString()+"; path=/;"}if(a.substr(0,2)=="cm"){if(a.substr(2,1)=="0"&&Page.codeMirrorOn){Page.setFeedbackMessage("Turning code mirroring off");
Page.codeMirrorEditor.toTextArea();Page.codeMirrorOn=false;jQuery("#linenum").val("0")}else{if(a.substr(2,1)=="1"&&!Page.codeMirrorOn){Page.initCodeMirrorEditor();
jQuery("#linenum").val("0")}}return}if(a.substr(0,2)=="bp"){Action.promptAndExecuteTest();return}else{if(!Action.selectMatchingText(a)){Page.setFeedbackMessage('Line number or word "'+a+'" not located');
setTimeout(function(){if(true){Page.setFeedbackMessage("")}},3000)}return}}if(Page.codeMirrorOn){Page.codeMirrorEditor.setSelection({line:a-1,ch:0},{line:a-1,ch:999999});
Page.codeMirrorEditor.focus();return}var f=document.getElementById("umpleModelEditorText");var d=0;var c=-1;if(a<1){c=0}else{var g=Page.getRawUmpleCode();
for(var e=0;e<g.length;e++){if(g.charAt(e)=="\n"){a--;if(a==1){d=e+1}if(a==0){c=e;break}}}if(c==-1){c=g.length;if(a!=1){d=c}}}if(f.setSelectionRange){f.focus();
f.setSelectionRange(d,c)}else{if(f.createTextRange){var b=f.createTextRange();b.collapse(true);b.moveEnd("character",c);b.moveStart("character",d);
b.select()}}};Action.promptAndExecuteTest=function(){var a=prompt("Umpleonline test prompt. Enter command e.g. 'ac Classname' to add a class","");
var b=a.substr(2,99).strip().split(" ");if(a.substr(0,1)=="a"){if(a.substr(1,1)=="c"){if(b.length>=1){Action.directAddClass(b[0]);return
}}else{if(a.substr(1,1)=="a"){if(b.length>=2){Action.directAddAttribute(b[0],b[1]);return}}else{Page.setFeedbackMessage("Syntax error in test add command")
}}Page.setFeedbackMessage("Syntax error in test command")}else{}return};Action.directAddClass=function(b){var a=Json.toString({position:{x:"10",y:"10",width:"109",height:"41"},name:b});
Page.setFeedbackMessage("Adding class "+b);Action.setjustUpdatetoSaveLater(false);Action.ajax(Action.directUpdateCommandCallback,format("action=addClass&actionCode={0}",a));
return};Action.directAddAttribute=function(b,a){Page.setFeedbackMessage("((when written) Adding to class "+b+" attribute "+a);return};
Action.selectMatchingText=function(b){if(Page.codeMirrorOn){var a=Page.codeMirrorEditor.getSearchCursor(b);if(!a.findNext()){return false
}Page.codeMirrorEditor.setSelection(a.from(),a.to());Page.codeMirrorEditor.focus();return true}return false};Action.selectItem=function(e,b){if(Page.codeMirrorOn){var a=Page.codeMirrorEditor.getSearchCursor(e);
if(!a.findNext()){return}var h=a.from();var c=new Object();c.line=Page.codeMirrorEditor.lineCount();c.ch=9999;a=Page.codeMirrorEditor.getSearchCursor(b,a.to());
while(a.findNext()){var f=a.from();innerCursor=Page.codeMirrorEditor.getSearchCursor(new RegExp("//"),f);var d=innerCursor.findPrevious();
if(d&&innerCursor.from().line==f.line){continue}innerCursor=Page.codeMirrorEditor.getSearchCursor(new RegExp("/\\*|\\*/"),f);var d=innerCursor.findPrevious();
if(d){if(d[0]==="/*"){innerCursor=Page.codeMirrorEditor.getSearchCursor(new RegExp("\\*/"),f);var d=innerCursor.findNext();if(d){var g=innerCursor.from();
if(g.line>f.line||(g.line==f.line&&g.ch>=f.ch)){continue}}}}c.line=f.line-1;c.ch=999;break}Page.codeMirrorEditor.setSelection(h,c);return
}return};Action.selectMethod=function(b,e,d){var c=new RegExp(d+" "+e+" "+b+"(\\s|[(])");var a=new RegExp("(public|protected|private|class) [A-Za-z]");
Action.selectItem(c,a)};Action.selectClass=function(c){var b=new RegExp("(class|interface|trait) "+c+"($|\\s|[{])");var a=new RegExp("(class|interface|trait) [A-Za-z]");
Action.selectItem(b,a)};Action.selectState=function(c){var b=new RegExp("(class|interface|trait) "+c+"($|\\s|[{])");var a=new RegExp("(class|interface|trait) [A-Za-z]");
Action.selectItem(b,a)};Action.selectStateInClass=function(a,b){if(Page.codeMirrorOn){}};Action.delayedFocus=function(a){var b=document.getElementById("umpleModelEditorText");
setTimeout(function(){b.focus()},a)};Action.updateLineNumberDisplay=function(){jQuery("#linenum").val(Action.getCaretPosition())};Action.umpleTyped=function(a){if(Page.getAdvancedMode()=="2"){Page.catFeedbackMessage("["+a.keyCode+"] ")
}Action.updateLineNumberDisplay();var b=a.keyCode;if(b>=33&&b<=40){return}var c=a.target.id;Action.umpleTypingActivity(c)};Action.umpleCodeMirrorCursorActivity=function(){var a=Page.codeMirrorEditor.getCursor(true).line+1;
jQuery("#linenum").val(a)};Action.umpleCodeMirrorTypingActivity=function(){if(Action.freshLoad==false){Action.umpleTypingActivity("codeMirrorEditor");
Page.codeMirrorEditor.save()}else{Action.freshLoad=false;Action.setjustUpdatetoSaveLaterForTextCallback(false)}};Action.trimMultipleNonPrintingAndComments=function(a){a=Action.removeComments(a);
a=a.replace(/[^\x21-\x7E]+/g," ");a=a.replace(/^\s+|\s+$/g,"");return a};Action.removeComments=function(d){var b="_"+ +new Date(),c=[],a=0;
return(d.replace(/(['"])(\\\1|.)+?\1/g,function(e){c[a]=e;return(b+"")+a++}).replace(/([^\/])(\/(?!\*|\/)(\\\/|.)+?\/[gim]{0,3})/g,function(f,e,g){c[a]=g;
return e+(b+"")+a++}).replace(/\/\/.*?\/?\*.+?(?=\n|\r|$)|\/\*[\s\S]*?\/\/[\s\S]*?\*\//g," ").replace(/\/\/.+?(?=\n|\r|$)|\/\*[\s\S]+?\*\//g," ").replace(RegExp("\\/\\*[\\s\\S]+"+b+"\\d+","g")," ").replace(RegExp(b+"(\\d+)","g"),function(e,f){return c[f]
}))};Action.umpleTypingActivity=function(a){if(Action.manualSync&&Action.diagramInSync){if(jQuery("#umpleCanvasColumn").is(":visible")){Page.enablePaletteItem("buttonSyncDiagram",true)
}Action.diagramInSync=false;Page.enableDiagram(false)}if(Action.oldTimeout!=null){clearTimeout(Action.oldTimeout)}if(a=="diagramEdit"){Action.oldTimeout=setTimeout('Action.processTyping("'+a+'",'+false+")",500)
}else{Action.oldTimeout=setTimeout('Action.processTyping("'+a+'",'+false+")",Action.waiting_time)}};var checkComplexityCooldown=300000;
var checkComplexityLastUsage=0;var checkComplexityFeedbackMessage='Suggestion: Since there are so many classes, <a href="javascript:Page.clickShowGvClassDiagram()">switch to automated layout</a> (G).';
var checkComplexityDisplayTime=120000;Action.checkComplexity=function(){if((Date.now()-checkComplexityCooldown)<checkComplexityLastUsage){return
}var a=jQuery("#umpleModelEditorText").val();var c=a.match(/class( |\n)((.|\n)*?){/g);if(c==null){return}var b=c.length;if(b>10){Page.setFeedbackMessage(checkComplexityFeedbackMessage);
checkComplexityLastUsage=Date.now();setTimeout(Action.removeCheckComplexityWarning,checkComplexityDisplayTime)}};Action.removeCheckComplexityWarning=function(){if(Page.getFeedbackMessage()==checkComplexityFeedbackMessage){Page.setFeedbackMessage("")
}};Action.processTyping=function(c,b){if(c!="diagramEdit"){Action.setjustUpdatetoSaveLaterForTextCallback(true)}else{Action.setjustUpdatetoSaveLaterForTextCallback(false)
}if(!Action.manualSync||b){Action.diagramInSync=true;if(c=="umpleModelEditorText"||c=="codeMirrorEditor"){Action.updateLayoutEditorAndDiagram();
var a=document.getElementById("downloadLink");if(a!==null){a.remove()}Page.enablePaletteItem("buttonSyncDiagram",false)}else{if(c=="diagramEdit"){Action.ajax(Action.updateFromDiagramCallback,Action.getLanguage())
}}}if(c!="diagramEdit"){if(!justUpdatetoSaveLater){TabControl.getCurrentHistory().save(Page.getUmpleCode(),"processTyping")}else{if(c=="umpleModelEditorText"||c=="codeMirrorEditor"){Action.setjustUpdatetoSaveLater(false)
}}Page.setExampleMessage("")}setTimeout(Action.checkComplexity,10000)};Action.updateLayoutEditorAndDiagram=function(){Action.ajax(Action.updateUmpleLayoutEditor,"language=Json")
};Action.updateUmpleLayoutEditor=function(a){var d=a.responseText.split("URL_SPLIT");var c=d[0];var b=d[1];if(b==null||b==undefined){b=a.responseText
}Page.showLayoutLoading();Action.ajax(Action.updateUmpleLayoutEditorCallback,format("action=addPositioning&actionCode={0}",b))};Action.updateUmpleLayoutEditorCallback=function(a){var b=a.responseText;
var c=Page.splitUmpleCode(b)[1];Page.setUmplePositioningCode(c);Page.hideLoading();Action.updateUmpleDiagramForce(true)};Action.updateUmpleDiagram=function(){return Action.updateUmpleDiagramForce(true)
};Action.updateUmpleDiagramForce=function(b){var a=Action.trimMultipleNonPrintingAndComments(Page.getUmpleCode());if(!b){if(a==Action.savedCanonical){return
}}Action.savedCanonical=a;Page.showCanvasLoading();Action.ajax(Action.updateUmpleDiagramCallback,Action.getLanguage())};Action.updateUmpleDiagramCallback=function(response){var diagramCode="";
var errorMessage="";diagramCode=Action.getDiagramCode(response.responseText);errorMessage=Action.getErrorCode(response.responseText);
Page.hideExecutionArea();if(diagramCode==null||diagramCode==""||diagramCode=="null"){Page.enableDiagram(false);Action.diagramInSync=false;
Page.setFeedbackMessage('<a href="#errorClick">See message.</a> To fix: edit model or click undo')}else{Page.enableDiagram(true);if(!Action.diagramInSync){Action.diagramInSync=true
}Page.setFeedbackMessage("");Page.hideGeneratedCode();if(Page.useEditableClassDiagram){var newSystem=Json.toObject(diagramCode);UmpleSystem.merge(newSystem);
UmpleSystem.update();if(Page.readOnly){jQuery("span.editable").addClass("uneditable")}}else{if(Page.useJointJSClassDiagram){var model=JSON.parse(diagramCode.replace(new RegExp('} { "name": "',"gi"),'}, { "name": "'));
var umpleCanvas=jQuery("#umpleCanvas");var paper=JJSdiagram.initJJSDiagram(umpleCanvas,model);var MouseWheelHandler=function(event){var delta=Math.max(-1,Math.min(1,(event.wheelDelta||-event.detail)));
if(event.altKey===true){var paperHeight=paper.options.height;var paperWidth=paper.options.width;var scaleFactor=1+(Math.abs(delta)/(delta*10));
paper.setDimensions(paperWidth*scaleFactor,paperHeight*scaleFactor);if(JJSdiagram.paper){JJSdiagram.paper.setDimensions(jQuery("#umpleCanvas")[0].clientWidth,jQuery("#umpleCanvas")[0].clientHeight)
}}};var paperHolder=document.getElementById("umpleCanvas");if(paperHolder.addEventListener){paperHolder.addEventListener("mousewheel",MouseWheelHandler,false);
paperHolder.addEventListener("DOMMouseScroll",MouseWheelHandler,false)}else{paperHolder.attachEvent("onmousewheel",MouseWheelHandler)
}jQuery("#jjsPaper").click(function(){Action.focusOn(Page.umpleCanvasId(),true)})}else{if(Page.useGvClassDiagram||Page.useGvStateDiagram||Page.useGvFeatureDiagram){jQuery("#umpleCanvas").html(format("{0}",diagramCode));
jQuery("#umpleCanvas").children().first().attr("id","svgCanvas");Action.setupPinch()}else{if(Page.useStructureDiagram){jQuery("#umpleCanvas").html('<svg id="svgCanvas"></svg>');
eval(diagramCode)}}}}}if(errorMessage!=""){Page.showGeneratedCode(errorMessage,"diagramUpdate")}Page.hideLoading()};Action.updateFromDiagramCallback=function(a){var c="";
var b="";c=Action.getDiagramCode(a.responseText);b=Action.getErrorCode(a.responseText);if((c==null||c==""||c=="null")&&Action.diagramInSync){Page.enableDiagram(false);
Action.diagramInSync=false;Page.setFeedbackMessage('<a href="#errorClick">See message.</a> To fix: edit model or click undo')}else{Page.enableDiagram(true);
Action.diagramInSync=true}if(b!=""){Page.showGeneratedCode(b,"diagramUpdate")}};Action.getDiagramCode=function(c){var a="";if(Page.useEditableClassDiagram||Page.useJointJSClassDiagram){a=c.split("URL_SPLIT")[1];
if(a=="null"){a=""}}else{if(Page.useGvClassDiagram||Page.useGvStateDiagram||Page.useGvFeatureDiagram){var b=c.split("<svg width=");if(b.length>1&&b[1].length>100){a="<svg width="+b[1];
a=a.replace(/<\/svg>$/,"")}}else{if(Page.useStructureDiagram){a=c.split("<p>URL_SPLIT")[1];a=a.replace(/##CANVAS_ID##/g,"svgCanvas");
a=jQuery("<div/>").html(a).text()}}}return a};Action.getErrorCode=function(c){var a="";if(Page.useEditableClassDiagram||Page.useStructureDiagram){a=c.split("URL_SPLIT")[0];
if(a=="<p>"){a=""}}else{if(Page.useGvClassDiagram||Page.useGvStateDiagram||Page.useGvFeatureDiagram){var d=c.split("<svg width=")[0];
var b=d.split("errorRow");if(b.length>1){a=d.split("<\/script>&nbsp;")[0]}}}return a};Action.classResizing=function(e,g){var f=e.target.id;
var a=UmpleSystem.find(f);var c="#"+f;var d=Math.round(jQuery(c).width());var b=Math.round(jQuery(c).height());UmpleSystem.updatingSize(a,d,b)
};Action.associationSnap=function(h,g,a){var b=jQuery(a).prop("id");var d=b.substr(0,b.lastIndexOf("_"));var e=b.substr(b.lastIndexOf("_")+"anchor".length+1);
var c=UmpleSystem.findAssociation(d);var j=c.getClass(e);var f=UmpleClassFactory.perimeterPosition(j,new UmplePosition(h,g,0,0),UmpleSystem.position());
return[f.x,f.y]};Action.associationSnapClassReady=function(b,d,a){var c=UmpleClassFactory.perimeterPosition(a,new UmplePosition(b,d,0,0),UmpleSystem.position());
return[c.x,c.y]};Action.updateMovedAssociation=function(h,a){jQuery(h).show();var c=jQuery(h).offset();var b=jQuery(h).prop("id");jQuery(h).hide();
var f=Math.round(c.left);var e=Math.round(c.top);var g=Action.associationSnap(f,e,h);var d=(new UmplePosition(g[0],g[1],0,0));if(b.endsWith("_anchor0")){a.setOffsetOnePosition(d)
}else{a.setOffsetTwoPosition(d)}UmpleSystem.redrawAssociation(a);Action.associationSelected(null)};Action.validateAttributeName=function(a){return a.length!=0&&(a.match(/^[_a-zA-Z0-9]+$/)||a.match(/^[_a-zA-Z0-9]+[\u0020]*:[\u0020]*[_a-zA-Z0-9]+(\[\])?$/))
};Action.validateMethodName=function(a){return a.length!=0&&a.match(/^[-+#]?\s*[_a-zA-Z0-9]+\s*\(([_a-zA-Z0-9]+(\[\])?(,\s*[_a-zA-Z0-9]+(\[\])?)*)?\)(\s*:\s*[_a-zA-Z0-9]+(\[\])?)?$/)
};Action.toggleAttributes=function(){Page.showAttributes=!Page.showAttributes;Action.redrawDiagram()};Action.toggleMethods=function(){Page.showMethods=!Page.showMethods;
Action.redrawDiagram()};Action.toggleActions=function(){Page.showActions=!Page.showActions;Action.redrawDiagram()};Action.toggleTransitionLabels=function(){Page.showTransitionLabels=!Page.showTransitionLabels;
Action.redrawDiagram()};Action.toggleGuards=function(){Page.showGuards=!Page.showGuards;Action.redrawDiagram()};Action.toggleGuardLabels=function(){Page.showGuardLabels=!Page.showGuardLabels;
Action.redrawDiagram()};Action.allowPinch=function(){Page.allowPinch=!Page.allowPinch;Action.redrawDiagram()};Action.toggleFeatureDependency=function(){Page.showFeatureDependency=!Page.showFeatureDependency;
Action.redrawDiagram()};Action.toggleTraits=function(){Page.showTraits=!Page.showTraits;Action.redrawDiagram()};Action.redrawDiagram=function(){UmpleSystem.merge(null);
var a=jQuery("#umpleCanvas");a.html("");if(!Action.manualSync){Action.updateUmpleDiagram();Action.diagramInSync=true}if(Action.manualSync&&!Action.diagramInSync){Page.enablePaletteItem("buttonSyncDiagram",true)
}if(!Action.manualSync||Action.diagramInSync){Page.enableCheckBoxItem("buttonPhotoReady","ttPhotoReady",true);Page.enableCheckBoxItem("buttonManualSync","ttManualSync",true);
Page.enablePaletteItem("buttonAddClass",true);Page.enablePaletteItem("buttonAddAssociation",true);Page.enablePaletteItem("buttonAddTransition",true);
Page.enablePaletteItem("buttonAddGeneralization",true);Page.enablePaletteItem("buttonDeleteEntity",true);Page.initToggleTool("buttonAddClass");
Page.initToggleTool("buttonAddAssociation");Page.initToggleTool("buttonAddTransition");Page.initToggleTool("buttonAddGeneralization");
Page.initToggleTool("buttonDeleteEntity")}};InlineEditor.elementChanged=function(f,a,d){var c=f.attr("name");var e=f.attr("id");if(c=="className"){var g=e.substr(0,e.length-"_name".length);
DiagramEdit.classNameChanged(g,a,d)}else{if(c=="attributeEdit"){var b=e.substr(e.lastIndexOf("_")+1);var g=e.substr(0,e.length-"_attribute_".length-b.length);
DiagramEdit.attributeNameChanged(g,b,a,d)}else{if(c=="methodEdit"){var b=e.substr(e.lastIndexOf("_")+1);var g=e.substr(0,e.length-"_method_".length-b.length);
DiagramEdit.methodChanged(g,b,a,d)}else{if(c=="attributeNew"){var g=e.substr(0,e.length-"_newAttribute".length);DiagramEdit.attributeNew(g,d)
}else{if(c=="methodNew"){var g=e.substr(0,e.length-"_newMethod".length);DiagramEdit.methodNew(g,d)}}}}}};Action.enableManualSync=function(a){var b=jQuery("#buttonManualSync");
var c=jQuery("#buttonSyncDiagram");if(a==undefined){a=b.is(":checked")}if(a){Action.manualSync=true}else{Action.manualSync=false;Action.processTyping("umpleModelEditorText",true);
Page.enablePaletteItem("buttonSyncDiagram",false)}};Action.generateStructureDiagramFile=function(){var a=Page.getFilename().slice(0,-9)+"structureDiagram.svg";
var b=jQuery("#innerGeneratedCodeRow").html().slice(4,-1);b=format('<svg xmlns="http://www.w3.org/2000/svg" {0}>',b);jQuery("#buttonStructureLink").showLoading();
Ajax.sendRequest("scripts/compiler.php",Action.generateStructureDiagramFileCallback,format("save=1&filename={0}&svgContent={1}",a,b))
};Action.generateStructureDiagramFileCallback=function(a){jQuery("#buttonStructureLink").hideLoading();Page.toggleStructureDiagramLink(true,a.responseText)
};Action.ajax=function(h,g,f,d){var b=Page.getUmpleCode();var e=encodeURIComponent(b);var a=Page.getFilename();var f="true";TabControl.useActiveTabTo(TabControl.saveTab)(e);
var j=TabControl.getActiveTabId();var c=!d?function(m){var k=TabControl.getActiveTabId();if(k!==j){Page.hideLoading();return}h(m)}:h;
Ajax.sendRequest("scripts/compiler.php",c,format("{0}&error={3}&umpleCode={1}&filename={2}",g,e,a,f))};if(navigator.appVersion.indexOf("Mac")!=-1){jQuery(document).ready(function(){jQuery("#undosmall").html("[cmd+z]");
jQuery("#redosmall").html("[cmd+shift+z]")});Mousetrap.bind(["command+z"],function(a){if(jQuery("#umpleCanvasColumn").hasClass("focus")){Action.undo()
}a.preventDefault()});Mousetrap.bind(["command+shift+z"],function(a){if(jQuery("#umpleCanvasColumn").hasClass("focus")){Action.redo()
}a.preventDefault()})}else{jQuery(document).ready(function(){jQuery("#undosmall").html("[ctrl+z]");jQuery("#redosmall").html("[ctrl+y]")
});Mousetrap.bind(["ctrl+z"],function(a){if(jQuery("#umpleCanvasColumn").hasClass("focus")){Action.undo()}a.preventDefault()});Mousetrap.bind(["ctrl+y"],function(a){if(jQuery("#umpleCanvasColumn").hasClass("focus")){Action.redo()
}a.preventDefault()})}Mousetrap.bind(["up"],function(a){if(jQuery("#umpleCanvasColumn").hasClass("focus")){Action.moveSelectedClass(Page.selectedClass,new UmplePosition(0,-5,0,0));
return false}});Mousetrap.bind(["shift+up"],function(a){if(jQuery("#umpleCanvasColumn").hasClass("focus")){Action.moveSelectedClass(Page.selectedClass,new UmplePosition(0,-1,0,0));
return false}});Mousetrap.bind(["down"],function(a){if(jQuery("#umpleCanvasColumn").hasClass("focus")){Action.moveSelectedClass(Page.selectedClass,new UmplePosition(0,5,0,0));
return false}});Mousetrap.bind(["shift+down"],function(a){if(jQuery("#umpleCanvasColumn").hasClass("focus")){Action.moveSelectedClass(Page.selectedClass,new UmplePosition(0,1,0,0));
return false}});Mousetrap.bind(["left"],function(a){if(jQuery("#umpleCanvasColumn").hasClass("focus")){Action.moveSelectedClass(Page.selectedClass,new UmplePosition(-5,0,0,0));
return false}});Mousetrap.bind(["shift+left"],function(a){if(jQuery("#umpleCanvasColumn").hasClass("focus")){Action.moveSelectedClass(Page.selectedClass,new UmplePosition(-1,0,0,0));
return false}});Mousetrap.bind(["right"],function(a){if(jQuery("#umpleCanvasColumn").hasClass("focus")){Action.moveSelectedClass(Page.selectedClass,new UmplePosition(5,0,0,0));
return false}});Mousetrap.bind(["shift+right"],function(a){if(jQuery("#umpleCanvasColumn").hasClass("focus")){Action.moveSelectedClass(Page.selectedClass,new UmplePosition(1,0,0,0));
return false}});Mousetrap.bind(["ctrl+e"],function(a){Page.clickShowEditableClassDiagram();return false});Mousetrap.bind(["ctrl+j"],function(a){Page.clickShowJointJSClassDiagram();
return false});Mousetrap.bind(["ctrl+g"],function(a){Page.clickShowGvClassDiagram();return false});Mousetrap.bind(["ctrl+s"],function(a){Page.clickShowGvStateDiagram();
return false});Mousetrap.bind(["ctrl+l"],function(a){Page.clickShowStructureDiagram();return false});Mousetrap.bind(["ctrl+t","ctrl+alt+shift+t"],function(a){Page.clickShowHideText();
return false});Mousetrap.bind(["ctrl+d"],function(a){Page.clickShowHideCanvas();return false});Mousetrap.bind(["ctrl+n","ctrl+alt+n"],function(a){Page.clickShowHideMenu();
return false});Mousetrap.bind(["shift+ctrl+a"],function(a){Page.clickToggleAttributes();return false});Mousetrap.bind(["ctrl+m"],function(a){Page.clickToggleMethods();
return false});Mousetrap.bind(["ctrl+r"],function(a){Page.clickToggleTraits();return false});Mousetrap.bind(["ctrl+i"],function(a){Page.clickToggleTransitionLabels();
return false});Mousetrap.bind(["ctrl+k"],function(a){Page.clickToggleGuardLabels();return false});Mousetrap.bind(["ctrl+b"],function(a){Action.promptAndExecuteTest();
return false});Mousetrap.bind(["ctrl+o"],function(a){Action.copyCommandLineCode();return false});Mousetrap.bind(["g"],function(a){if(jQuery("#umpleCanvasColumn").hasClass("focus")&&Page.selectedAssociation==null&&Page.selectedGeneralization==null){if(Page.selectedClass==null||(Page.selectedClass&&jQuery("#"+Page.selectedClass.id).find("input").length==0)){jQuery("#buttonAddGeneralization").click()
}}});Mousetrap.bind(["a"],function(a){if(jQuery("#umpleCanvasColumn").hasClass("focus")&&Page.selectedAssociation==null&&Page.selectedGeneralization==null){if(Page.selectedClass==null||(Page.selectedClass&&jQuery("#"+Page.selectedClass.id).find("input").length==0)){jQuery("#buttonAddAssociation").click()
}}});Mousetrap.bind(["c"],function(a){if(jQuery("#umpleCanvasColumn").hasClass("focus")&&Page.selectedAssociation==null&&Page.selectedGeneralization==null){if(Page.selectedClass==null||(Page.selectedClass&&jQuery("#"+Page.selectedClass.id).find("input").length==0)){jQuery("#buttonAddClass").click()
}}});Action.toggleTabsCheckbox=function(a){if($("inputGenerateCode").value.split(":")[1]=="TextUml"){a="TextUml"}if(a=="java"||a=="php"||a=="cpp"||a=="python"||a=="ruby"||a=="sql"){jQuery("#ttTabsCheckbox").show();
jQuery("#tabRow").show();if($("inputGenerateCode").value.split(":")[1]=="USE"||$("inputGenerateCode").value.split(":")[1]=="UmpleSelf"||$("inputGenerateCode").value.split(":")[1]=="Json"){jQuery("#ttTabsCheckbox").hide();
jQuery("#tabRow").hide()}}else{jQuery("#ttTabsCheckbox").hide();jQuery("#tabRow").hide();if(jQuery("#buttonTabsCheckbox").is(":checked")){jQuery("#buttonTabsCheckbox").click()
}}};Action.toggleTabs=function(){if(jQuery("#buttonTabsCheckbox").is(":checked")){jQuery("#tabRow").show();jQuery("#innerGeneratedCodeRow").hide();
jQuery("#tabButton1").click()}else{jQuery("#tabRow").hide();jQuery("#innerGeneratedCodeRow").show();jQuery("#innerGeneratedCodeRow").nextAll().hide()
}};Action.generateTabsCode=function(g){var b=[];var f=0;var e="";var d=[];var a="";var c=false;g.split("URL_SPLIT")[1].split("\n").forEach(function(h){if(h.indexOf("//%%")>=0){f++;
strFileName=h.slice(14);strFileName=strFileName.substr(0,strFileName.indexOf(" "));d[f]=strFileName;jQuery("#generatedCodeRow").append("<div id='innerGeneratedCodeRow"+f+"'></div>");
b[f]="";c=true}else{if(!c){b[f]+=h+"\n"}else{c=false}}});for(i=1;i<=f;i++){jQuery("#tabRow").append("<button type='button' id='tabButton"+i+"'>"+d[i]+"</button>");
jQuery("#tabButton"+i).click({code:b[i],tabnumber:i},showTab)}};Action.getLanguage=function(){var a="";if(Page.useEditableClassDiagram){a="language=Json"
}else{if(Page.useJointJSClassDiagram){a="language=JsonMixed"}else{if(Page.useGvClassDiagram){if(Page.showTraits){a="language=traitDiagram"
}else{a="language=classDiagram"}}else{if(Page.useGvStateDiagram){a="language=stateDiagram"}else{if(Page.useStructureDiagram){a="language=StructureDiagram"
}}}}}if(Page.useGvStateDiagram){if(!Page.showActions){a=a+".hideactions"}if(Page.showTransitionLabels){a=a+".showtransitionlabels"}if(!Page.showGuards){a=a+".hideguards"
}if(Page.showGuardLabels){a=a+".showguardlabels"}a=a+"."+$("inputGenerateCode").value.split(":")[1]}if(Page.useGvClassDiagram){if(Page.showMethods){a=a+".showmethods"
}if(!Page.showAttributes){a=a+".hideattributes"}}if(Page.useGvFeatureDiagram){a="language=featureDiagram";if(Page.showFeatureDependency){a=a+".showFeatureDependency"
}}return a};function showTab(a){jQuery("#innerGeneratedCodeRow").nextAll().hide();jQuery("#innerGeneratedCodeRow"+a.data.tabnumber).show();
Page.showGeneratedCode(a.data.code,$("inputGenerateCode").value.split(":")[0],a.data.tabnumber);jQuery("#innerGeneratedCodeRow").hide()
}Action.hidegdpr=function(){jQuery("#gdprtext").hide();Action.gdprHidden=true};Action.reindent=function(b,g){var f="";var u="";var q=b.length;
var j=false;var p=true;var a=0;var s=-1;for(var o=0;o<q;o++){var h=b[o].trim();var m=h.indexOf('"');var r=h.indexOf('"',m+1);while(m!=-1&&r!=-1){h=h.slice(0,m)+h.slice(r+1,h.length);
m=h.indexOf('"');r=h.indexOf('"',m+1)}if(h.indexOf("//")!=-1){h=h.substr(0,h.indexOf("//")).trim()}if(j){if(h.indexOf("*/")!=-1){h=h.substr(h.indexOf("*/")+2).trim();
j=false}else{if(o!=b.length-1){u+=b[o]+"\n"}else{u+=b[o]}continue}}else{if(h.indexOf("/*")!=-1){if(h.indexOf("*/")==-1){j=true;h=h.substr(0,h.indexOf("/*")).trim()
}else{h=h.substr(0,h.indexOf("/*"))+h.substr(h.indexOf("*/")+2).trim()}}}var k=h.indexOf("{");var n=h.indexOf("}");var e=h.indexOf(";");
if(e!=-1&&e!=h.length-1&&h.substr(e+1).trim().charAt(0)!="}"){b.splice(o+1,0,h.substr(e+1));if(o<=g.line){g.line++}b[o]=b[o].substr(0,b[o].match(/^\s*/)[0].length+e+1);
Action.reindent(b,g);return}var c=k!=-1&&n!=-1&&n-k<40&&h.substr(0,n).indexOf("{",k+1)==-1;if(c){if(n!=h.length-1){b.splice(o+1,0,h.substr(n+1));
if(o<=g.line){g.line++}b[o]=b[o].substr(0,b[o].match(/^\s*/)[0].length+n+1);Action.reindent(b,g);return}if(!p){if(h.slice(-1)=="{"){p=true
}else{b[o]=f+b[o].match(/^\s*/)[0].substr(a)+b[o].trim();if(h.indexOf(";")==h.length-1){p=true}}}else{b[o]=f+b[o].trim()}}else{if(k!=-1&&k!=h.length-1){b.splice(o+1,0,h.substr(k+1));
b[o]=b[o].substr(0,b[o].match(/^\s*/)[0].length+k+1);if(o<=g.line){g.line++}Action.reindent(b,g);return}if(n!=-1&&h.length>1){if(n==0){b.splice(o+1,0,h.substr(1));
b[o]="}";if(o<=g.line){g.line++}}else{b.splice(o+1,0,"}");if(o<=g.line){g.line++}if(n!=h.length-1){b.splice(o+2,0,h.substr(n+1));if(o<=g.line){g.line++
}}b[o]=b[o].substr(0,b[o].match(/^\s*/)[0].length+n)}Action.reindent(b,g);return}if(p&&h.indexOf(";")!=h.length-1&&h.slice(-1)!="{"&&h.slice(-1)!="}"&&h.slice(-2)!="||"){p=false;
a=b[o].match(/^\s*/)[0].length}if(n!=-1){f=f.substr(2)}if(!p){if(h.slice(-1)=="{"||h.slice(-2)=="||"&&h.slice(-1)=="}"){p=true;b[o]=f+b[o].trim()
}else{b[o]=f+b[o].match(/^\s*/)[0].substr(a)+b[o].trim();if(h.indexOf(";")==h.length-1){p=true}}}else{b[o]=f+b[o].trim()}if(k!=-1){f+="  "
}}if(o!=b.length-1){u+=b[o]+"\n"}else{u+=b[o]}}if(Page.codeMirrorOn){Page.codeMirrorEditor.setValue(u)}jQuery("#umpleModelEditorText").val(u);
var t=Page.getRawUmpleCode().split("\n")[g.line];var d=t.match(/^\s*/)[0].length;if(g.ch>=t.trim().length){Page.codeMirrorEditor.setCursor(g.line,t.trim().length+d)
}else{if(g.ch>=0){Page.codeMirrorEditor.setCursor(g.line,g.ch+d)}else{Page.codeMirrorEditor.setCursor(g.line,0)}}Page.codeMirrorEditor.focus()
};DiagramEdit=new Object();DiagramEdit.textChangeQueue=[];DiagramEdit.pendingChanges=false;DiagramEdit.newClass=null;DiagramEdit.newAssociation=null;
DiagramEdit.newTransition=null;DiagramEdit.newGeneralization=null;DiagramEdit.updateUmpleText=function(a){if(DiagramEdit.textChangeQueue.length==0&&!DiagramEdit.pendingChanges){DiagramEdit.pendingChanges=true;
DiagramEdit.textChangeQueue.push(a);DiagramEdit.doTextUpdate()}else{DiagramEdit.textChangeQueue.push(a)}Action.umpleTypingActivity("diagramEdit")
};DiagramEdit.doTextUpdate=function(){update=DiagramEdit.textChangeQueue.shift();Action.update=update;if(update.codeChange){Page.hideGeneratedCode()
}Action.ajax(Action.updateUmpleTextCallback,update.actionCode)};DiagramEdit.addClass=function(b){Action.setjustUpdatetoSaveLater(false);
DiagramEdit.removeNewClass();var a=UmpleSystem.createClass(b);var c=Json.toString(a);if(!Page.repeatToolItem){Page.unselectAllToggleTools()
}Page.showModelLoading();Page.showLayoutLoading();DiagramEdit.updateUmpleText({actionCode:format("action=addClass&actionCode={0}",c),codeChange:true})
};DiagramEdit.addAssociation=function(a){Action.setjustUpdatetoSaveLater(false);DiagramEdit.removeNewAssociation();var c=UmpleSystem.createAssociation(a.classOneId,a.classTwoId,a.classOnePosition.add(UmpleSystem.position()),a.classTwoPosition.add(UmpleSystem.position()));
var b=Json.toString(c);if(!Page.repeatToolItem){Page.unselectAllToggleTools()}Page.showModelLoading();Page.showLayoutLoading();DiagramEdit.updateUmpleText({actionCode:format("action=addAssociation&actionCode={0}",b),codeChange:true})
};DiagramEdit.addTransition=function(b){Action.setjustUpdatetoSaveLater(false);DiagramEdit.removeNewTransition();var a=UmpleSystem.createTransition(b.fromStateId,b.toStateId);
var c=Json.toString(a);if(!Page.repeatToolItem){Page.unselectAllToggleTools()}Page.showModelLoading();Page.showLayoutLoading();DiagramEdit.updateUmpleText({actionCode:format("action=addTransition&actionCode={0}",c),codeChange:true})
};DiagramEdit.addGeneralization=function(a){Action.setjustUpdatetoSaveLater(false);DiagramEdit.removeNewGeneralization();UmpleSystem.createGeneralization(a.childId,a.parentId);
var b=Json.toString(a);if(!Page.repeatToolItem){Page.unselectAllToggleTools()}Page.showModelLoading();Page.showLayoutLoading();DiagramEdit.updateUmpleText({actionCode:format("action=addGeneralization&actionCode={0}",b),codeChange:true})
};DiagramEdit.createAssociationPartOne=function(d){var e=new UmplePosition(d.pageX,d.pageY,0,0);var c=UmpleSystem.position();var b=e.x-c.x;
var a=e.y-c.y;Action.classSelected(d.currentTarget);DiagramEdit.newAssociation=new UmpleAssociation();DiagramEdit.newAssociation.classOneId=d.currentTarget.id;
DiagramEdit.newAssociation.classOnePosition=new UmplePosition(b,a,0,0)};DiagramEdit.createAssociationPartTwo=function(a){var b=new UmplePosition(a.pageX,a.pageY,0,0);
Action.classSelected(a.currentTarget);if(DiagramEdit.newAssociation.classOneId<=a.currentTarget.id){DiagramEdit.newAssociation.classTwoId=a.currentTarget.id;
DiagramEdit.newAssociation.classTwoPosition=b.subtract(UmpleSystem.position())}else{DiagramEdit.newAssociation.classTwoId=DiagramEdit.newAssociation.classOneId;
DiagramEdit.newAssociation.classTwoPosition=DiagramEdit.newAssociation.classOnePosition;DiagramEdit.newAssociation.classOneId=a.currentTarget.id;
DiagramEdit.newAssociation.classOnePosition=b.subtract(UmpleSystem.position())}DiagramEdit.addAssociation(DiagramEdit.newAssociation)
};DiagramEdit.createTransitionPartOne=function(d){var e=new UmplePosition(d.pageX,d.pageY,0,0);var a=UmpleSystem.position();var c=e.x-a.x;
var b=e.y-a.y;Action.classSelected(d.currentTarget);DiagramEdit.newTransition=new UmpleTransition();DiagramEdit.newTransition.fromStatePosition=d.currentTarget.id;
DiagramEdit.newTransition.toStatePosition=new UmplePosition(c,b,0,0);DiagramEdit.newTransition.eventName="event1"};DiagramEdit.createTransitionPartTwo=function(a){var b=new UmplePosition(a.pageX,a.pageY,0,0);
Action.classSelected(a.currentTarget);DiagramEdit.newTransition.toStateId=a.currentTarget.id;DiagramEdit.newTransition.toStatePosition=b.subtract(UmpleSystem.position());
DiagramEdit.addTransition(DiagramEdit.newTransition)};DiagramEdit.createGeneralizationPartOne=function(b){var a=UmpleSystem.find(b.currentTarget.id);
if(a.extendsClass!=null){return false}Action.classSelected(b.currentTarget);DiagramEdit.newGeneralization=new UmpleGeneralization();DiagramEdit.newGeneralization.childId=b.currentTarget.id;
umpleSystem=UmpleSystem.position();childPositionX=Dom.x(b)-umpleSystem.x;childPositionY=Dom.y(b)-umpleSystem.y;DiagramEdit.newGeneralization.childPosition=new UmplePosition(childPositionX,childPositionY,0,0)
};DiagramEdit.createGeneralizationPartTwo=function(a){Action.classSelected(a.currentTarget);DiagramEdit.newGeneralization.parentId=a.currentTarget.id;
DiagramEdit.newGeneralization.parentPosition=new UmplePosition(Dom.x(a),Dom.y(a),0,0);DiagramEdit.addGeneralization(DiagramEdit.newGeneralization)
};DiagramEdit.classMoved=function(d){Action.setjustUpdatetoSaveLater(false);var e=UmpleSystem.find(d.id);var c=jQuery("#"+e.id);newPositionX=Math.floor(c.offset().left);
newPositionY=Math.floor(c.offset().top);UmpleSystem.updatePosition(e,newPositionX,newPositionY);var a=Json.toString(e);var b=Page.getUmpleCode();
Page.showLayoutLoading();DiagramEdit.updateUmpleText({actionCode:format("action=editClass&actionCode={0}",a),codeChange:false});Action.classSelected(d);
UmpleSystem.trimOverlappingAssociations(e)};DiagramEdit.classResized=function(a,n){Action.setjustUpdatetoSaveLater(false);var o=a.target;
var c=o.id;var p=UmpleSystem.find(c);UmpleSystem.updateClass(p);UmpleSystem.redrawGeneralizationsTo(p,b);for(var e=0;e<UmpleSystem.umpleAssociations.length;
e++){var m=UmpleSystem.umpleAssociations[e];if(m.contains(p)){var j=m.classOneId==p.id;var d=j?m.offsetOnePosition:m.offsetTwoPosition;
var k=j?"_anchor0":"_anchor1";var h="#"+m.id+k;var b=true;DiagramEdit.associationMoved(h,b)}}var f=Json.toString(p);var g=Page.getUmpleCode();
Page.showLayoutLoading();DiagramEdit.updateUmpleText({actionCode:format("action=editClass&actionCode={0}",f),codeChange:false});Action.classSelected(o)
};DiagramEdit.associationMoved=function(d,f){Action.setjustUpdatetoSaveLater(false);if(DiagramEdit.newAssociation!=null){DiagramEdit.removeNewAssociation()
}if(f==undefined){f=false}var b=jQuery(d).attr("id");var c=b.substr(0,b.length-"_anchorX".length);var a=UmpleSystem.findAssociation(c);
Action.updateMovedAssociation(d,a);var e=Json.toString(a);Page.showLayoutLoading();DiagramEdit.updateUmpleText({codeChange:false,actionCode:format("action=editAssociation&actionCode={0}",e)})
};DiagramEdit.regularAssociationMoving=function(b){if(DiagramEdit.newAssociation==null){var c=jQuery(b).attr("id");var a=c.substr(0,c.length-"_anchorX".length);
var d=UmpleSystem.findAssociation(a);var h=new UmpleAssociation();if(c.endsWith("_anchor0")){h.classOneId=d.classTwoId;h.classOnePosition=d.classTwoPosition;
h.offsetOnePosition=d.offsetTwoPosition}else{h.classOneId=d.classOneId;h.classOnePosition=d.classOnePosition;h.offsetOnePosition=d.offsetOnePosition
}DiagramEdit.newAssociation=h}var e=jQuery(b).offset();var j=Action.associationSnap(Math.round(e.left),Math.round(e.top),b);var g=new UmplePosition(j[0],j[1]);
DiagramEdit.newAssociation.classTwoPosition=g.subtract(UmpleSystem.position());DiagramEdit.newAssociation.offsetTwoPosition=new UmplePosition(0,0,0,0);
var f="#"+Page.umpleCanvasId();jQuery(f).append(DiagramEdit.newAssociation.drawable())};DiagramEdit.reflexiveAssociationMoving=function(b){var c=jQuery(b).attr("id");
var a=c.substr(0,c.length-"_anchorX".length);var d=UmpleSystem.findAssociation(a);if(DiagramEdit.newAssociation==null){DiagramEdit.newAssociation=new UmpleAssociation();
DiagramEdit.newAssociation.classOneId=d.classOneId;DiagramEdit.newAssociation.classTwoId=d.classTwoId;DiagramEdit.newAssociation.classOnePosition=d.classOnePosition;
DiagramEdit.newAssociation.classTwoPosition=d.classTwoPosition;DiagramEdit.newAssociation.offsetOnePosition=d.offsetOnePosition;DiagramEdit.newAssociation.offsetTwoPosition=d.offsetTwoPosition;
DiagramEdit.newAssociation.id=DiagramEdit.newAssociation.getElementId()}var f=jQuery(b).offset();var j=Action.associationSnap(Math.round(f.left),Math.round(f.top),b);
var h=(new UmplePosition(j[0],j[1],0,0));var e=h.subtract(UmpleSystem.position());e.x=e.x-DiagramEdit.newAssociation.classOnePosition.x;
e.y=e.y-DiagramEdit.newAssociation.classOnePosition.y;if(c.endsWith("_anchor0")){DiagramEdit.newAssociation.offsetOnePosition=e}else{DiagramEdit.newAssociation.offsetTwoPosition=e
}var g="#"+Page.umpleCanvasId();jQuery(g).append(DiagramEdit.newAssociation.drawableReflexive())};DiagramEdit.classNameChanged=function(c,e,b){Action.setjustUpdatetoSaveLater(false);
if(b.length=0||!b.match(/^[_a-zA-Z0-9]+$/)){Action.updateUmpleDiagram();var f="Class names must be alphanumeric. &lt;"+(b.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;"))+"&gt is not valid.";
setTimeout(function(){Page.setFeedbackMessage(f)},2000);setTimeout(function(){if(true){Page.setFeedbackMessage("")}},10000)}else{var a=UmpleSystem.renameClass(c,e,b);
a.position.width=UmpleClassFactory.defaultSize.width;var d=Json.toString(a);delete a.oldname;Page.showModelLoading();Page.showLayoutLoading();
DiagramEdit.updateUmpleText({actionCode:format("action=editClass&actionCode={0}",d),codeChange:true})}};DiagramEdit.attributeNameChanged=function(c,e,f,b){Action.setjustUpdatetoSaveLater(false);
if(!Action.validateAttributeName(b)){Action.updateUmpleDiagram();setTimeout(function(){Page.setFeedbackMessage("UML Attributes must be alphanumeric with an optional type after a colon. &lt;"+(b.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;"))+"&gt is not valid.")
},2000);setTimeout(function(){if(true){Page.setFeedbackMessage("")}},10000)}else{var a=UmpleSystem.find(c);a.attributes[e].set(b);UmpleSystem.redraw(a);
var d=Json.toString(a);Page.showModelLoading();DiagramEdit.updateUmpleText({actionCode:format("action=editClass&actionCode={0}",d),codeChange:true});
a.resetAttribute(e)}};DiagramEdit.attributeNew=function(d,b){Action.setjustUpdatetoSaveLater(false);if(!Action.validateAttributeName(b)){Action.updateUmpleDiagram();
setTimeout(function(){Page.setFeedbackMessage("UML Attributes must be alphanumeric with an optional type after a colon. &lt;"+(b.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;"))+"&gt is not valid.")
},2000);setTimeout(function(){if(true){Page.setFeedbackMessage("")}},10000)}else{var a=UmpleSystem.find(d);var c=a.addAttribute(b);var e=Json.toString(a);
Page.showModelLoading();DiagramEdit.updateUmpleText({actionCode:format("action=editClass&actionCode={0}",e),codeChange:true});a.resetAttribute(c);
UmpleSystem.updateClass(a);UmpleSystem.redrawGeneralizationsTo(a);UmpleSystem.trimOverlappingAssociations(a);UmpleSystem.update()}};DiagramEdit.classDeleted=function(d){Action.setjustUpdatetoSaveLater(false);
var a=true;var g=UmpleSystem.find(d);var j=[];var b=[];for(var e=0;e<UmpleSystem.umpleAssociations.length;e++){var f=UmpleSystem.umpleAssociations[e];
if(f.contains(g)){j.push(f.id)}}for(var e=0;e<UmpleSystem.umpleClasses.length;e++){var c=UmpleSystem.umpleClasses[e];if(c.extendsClass==g.id){b.push(c.id+"_generalization")
}}for(var e=0;e<j.length;e++){DiagramEdit.associationDeleted(j[e],a)}for(var e=0;e<b.length;e++){DiagramEdit.generalizationDeleted(b[e],a)
}var k=UmpleSystem.removeClass(d);var h=Json.toString(k);if(!Page.repeatToolItem){Page.unselectAllToggleTools()}Page.showModelLoading();
Page.showLayoutLoading();DiagramEdit.updateUmpleText({actionCode:format("action=removeClass&actionCode={0}",h),codeChange:true})};DiagramEdit.methodNew=function(d,b){Action.setjustUpdatetoSaveLater(false);
if(!Action.validateMethodName(b)){Action.updateUmpleDiagram();setTimeout(function(){Page.setFeedbackMessage("Invalid UML Method. &lt;"+(b.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;"))+"&gt is not valid.")
},2000);setTimeout(function(){if(true){Page.setFeedbackMessage("")}},10000)}else{var a=UmpleSystem.find(d);var c=a.addMethod(b);var e=Json.toString(a);
Page.showModelLoading();DiagramEdit.updateUmpleText({actionCode:format("action=editClass&actionCode={0}",e),codeChange:true});a.resetMethod(c);
UmpleSystem.updateClass(a);UmpleSystem.redrawGeneralizationsTo(a);UmpleSystem.trimOverlappingAssociations(a);UmpleSystem.update()}};DiagramEdit.methodChanged=function(c,e,f,b){Action.setjustUpdatetoSaveLater(false);
if(!Action.validateMethodName(b)){Action.updateUmpleDiagram();setTimeout(function(){Page.setFeedbackMessage("Invalid UML Method. &lt;"+(b.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;"))+"&gt is not valid.")
},2000);setTimeout(function(){if(true){Page.setFeedbackMessage("")}},10000)}else{var a=UmpleSystem.find(c);a.methods[e].set(b);UmpleSystem.redraw(a);
var d=Json.toString(a);Page.showModelLoading();DiagramEdit.updateUmpleText({actionCode:format("action=editClass&actionCode={0}",d),codeChange:true});
a.resetMethod(e)}};DiagramEdit.methodDelete=function(b,d){Action.setjustUpdatetoSaveLater(false);var a=UmpleSystem.find(b);a.removeMethod(d);
var e=jQuery("#"+a.id);a.position.width=UmpleClassFactory.defaultSize.width;var c=Json.toString(a);Page.showModelLoading();DiagramEdit.updateUmpleText({actionCode:format("action=editClass&actionCode={0}",c),codeChange:true});
a.resetMethod(d);UmpleSystem.updateClass(a);UmpleSystem.redrawGeneralizationsTo(a);UmpleSystem.trimOverlappingAssociations(a);UmpleSystem.update()
};DiagramEdit.attributeDelete=function(b,d){Action.setjustUpdatetoSaveLater(false);var a=UmpleSystem.find(b);a.removeAttribute(d);var e=jQuery("#"+a.id);
a.position.width=UmpleClassFactory.defaultSize.width;var c=Json.toString(a);Page.showModelLoading();DiagramEdit.updateUmpleText({actionCode:format("action=editClass&actionCode={0}",c),codeChange:true});
a.resetAttribute(d);UmpleSystem.updateClass(a);UmpleSystem.redrawGeneralizationsTo(a);UmpleSystem.trimOverlappingAssociations(a);UmpleSystem.update()
};DiagramEdit.associationDeleted=function(a,d){Action.setjustUpdatetoSaveLater(false);if(d==undefined){d=false}var c=UmpleSystem.removeAssociation(a);
var b=Json.toString(c);if(!Page.repeatToolItem){Page.unselectAllToggleTools()}Page.showModelLoading();Page.showLayoutLoading();DiagramEdit.updateUmpleText({actionCode:format("action=removeAssociation&actionCode={0}",b),codeChange:true})
};DiagramEdit.transitionDeleted=function(a,d){Action.setjustUpdatetoSaveLater(false);if(d==undefined){d=false}var c=UmpleSystem.removeTransition(a);
var b=Json.toString(c);if(!Page.repeatToolItem){Page.unselectAllToggleTools()}Page.showModelLoading();Page.showLayoutLoading();DiagramEdit.updateUmpleText({actionCode:format("action=removeTransition&actionCode={0}",b),codeChange:true})
};DiagramEdit.generalizationDeleted=function(a,d){Action.setjustUpdatetoSaveLater(false);if(d==undefined){d=false}var c=UmpleSystem.removeGeneralization(a);
var b=Json.toString(c);if(!Page.repeatToolItem){Page.unselectAllToggleTools()}Page.showModelLoading();Page.showLayoutLoading();DiagramEdit.updateUmpleText({actionCode:format("action=removeGeneralization&actionCode={0}",b),codeChange:true})
};DiagramEdit.removeNewClass=function(){if(DiagramEdit.newClass!=null){var a="#"+DiagramEdit.newClass.id;DiagramEdit.newClass=null;jQuery(a).remove();
return true}return false};DiagramEdit.removeNewAssociation=function(){if(DiagramEdit.newAssociation!=null){var a="#"+DiagramEdit.newAssociation.getElementId();
jQuery(a).remove();DiagramEdit.newAssociation=null;return true}return false};DiagramEdit.removeNewTransition=function(){if(DiagramEdit.newTransition!=null){var a="#"+DiagramEdit.newTransition.getElementId();
jQuery(a).remove();DiagramEdit.newTransition=null;return true}return false};DiagramEdit.removeNewGeneralization=function(){if(DiagramEdit.newGeneralization!=null){var a="#"+DiagramEdit.newGeneralization.getElementId();
jQuery(a).remove();DiagramEdit.newGeneralization=null;return true}return false};UmpleAssociationFactory=new Object();UmpleAssociationFactory.create=function(b){var a=new UmpleAssociation();
a.id=b.id;a.classOneId=b.classOneId;a.classTwoId=b.classTwoId;a.offsetOnePosition=UmplePositionFactory.copy(b.offsetOnePosition);a.offsetTwoPosition=UmplePositionFactory.copy(b.offsetTwoPosition);
a.multiplicityOne=b.multiplicityOne;a.multiplicityTwo=b.multiplicityTwo;a.name=b.name;a.roleOne=b.roleOne;a.roleTwo=b.roleTwo;a.isSymmetricReflexive=(b.isSymmetricReflexive=="true"||b.isSymmetricReflexive==true)?true:false;
a.isLeftNavigable=(b.isLeftNavigable=="true"||b.isLeftNavigable==true)?true:false;a.isRightNavigable=(b.isRightNavigable=="true"||b.isRightNavigable==true)?true:false;
a.isLeftComposition=(b.isLeftComposition=="true"||b.isLeftComposition==true)?true:false;a.isRightComposition=(b.isRightComposition=="true"||b.isRightComposition==true)?true:false;
a.color=b.isTraced;return a};function UmpleAssociation(){this.id;this.classOneId;this.classTwoId;this.classOnePosition=null;this.classTwoPosition=null;
this.offsetOnePosition=null;this.offsetTwoPosition=null;this.multiplicityOne="";this.multiplicityTwo="";this.name="";this.roleOne="";
this.roleTwo="";this.isSymmetricReflexive=false;this.isLeftNavigable=true;this.isRightNavigable=true;this.isLeftComposition=false;this.isRightComposition=false;
this.color="black";this.setClasses=function(a,b){this.classOneId=a;this.classTwoId=b};this.setDefaultMultiplicities=function(){this.multiplicityOne="*";
this.multiplicityTwo="*"};this.setDefaultRoles=function(){if(this.classOneId==this.classTwoId){this.roleTwo="roleName"}};this.setRoles=function(b,a){this.roleOne=b;
this.roleTwo=a};this.setName=function(a){this.name=a};this.getName=function(){if(this.name==null||this.name==""){return this.deriveName()
}else{return this.name}};this.deriveName=function(){var c="";var b=this.classOneId;var a=this.classTwoId;if(!(this.roleOne==null||this.roleOne==="")){b=this.classOneId+":"+this.roleOne
}if(!(this.roleTwo==null||this.roleTwo==="")){a=this.classTwoId+":"+this.roleTwo}if(this.classOneId<=this.classTwoId){c=b+"__"+a}else{c=a+"__"+b
}return c};this.getElementId=function(){return this.id==null?"newassociation":this.id};this.getClass=function(a){return a==0?UmpleSystem.find(this.classOneId):UmpleSystem.find(this.classTwoId)
};this.setOffsetOnePosition=function(b){var a=UmpleSystem.find(this.classOneId);this.classOnePosition=a.position;this.offsetOnePosition=b.subtract(a.position).subtract(UmpleSystem.position());
this.offsetOnePosition.width=0;this.offsetOnePosition.height=0};this.setOffsetTwoPosition=function(b){var a=UmpleSystem.find(this.classTwoId);
this.classTwoPosition=a.position;this.offsetTwoPosition=b.subtract(a.position).subtract(UmpleSystem.position());this.offsetTwoPosition.width=0;
this.offsetTwoPosition.height=0};this.trimOverlap=function(){var f=new UmpleLine(this.offsetOnePosition.add(this.classOnePosition),this.offsetTwoPosition.add(this.classTwoPosition));
var j=UmpleSystem.find(this.classOneId).borderLines();var a=UmpleSystem.find(this.classTwoId).borderLines();var b=this.offsetOnePosition.add(this.classOnePosition);
var g=this.offsetTwoPosition.add(this.classTwoPosition);var k=[];var h=[];for(var d=0;d<j.length;d++){intersection=f.intersection(j[d]);
if(intersection!=null){k.push(intersection)}}for(var d=0;d<a.length;d++){intersection=f.intersection(a[d]);if(intersection!=null){h.push(intersection)
}}var c=new UmpleLine(b,g);var e=new UmpleLine(c.pointOne,c.pointTwo);for(var d=0;d<k.length;d++){e.pointOne=k[d];if(e.length()<c.length()){c=new UmpleLine(e.pointOne,e.pointTwo)
}}var e=new UmpleLine(c.pointOne,c.pointTwo);for(var d=0;d<h.length;d++){e.pointTwo=h[d];if(e.length()<c.length()){c=new UmpleLine(e.pointOne,e.pointTwo)
}}this.setOffsetOnePosition(c.pointOne.add(UmpleSystem.position()));this.setOffsetTwoPosition(c.pointTwo.add(UmpleSystem.position()))
};this.adjustReflexiveEndpoints=function(){var c=this.offsetOnePosition;var a=this.offsetTwoPosition;var b=UmpleSystem.find(this.classOneId).borderLines();
this.snapToClosestEdge(c,b);this.snapToClosestEdge(a,b)};this.snapToClosestEdge=function(a,g){var f=true;var h=true;var e=a.x+this.classOnePosition.x;
var d=a.y+this.classOnePosition.y;var b=d-g[0].pointOne.y;var c=e-g[1].pointOne.x;if(b>g[2].pointOne.y-d){f=false;b=g[2].pointOne.y-d
}if(c>g[3].pointOne.x-e){h=false;c=g[3].pointOne.x-e}if(b<=c){if(f){a.y=0}else{a.y=this.classOnePosition.height}}else{if(h){a.x=0}else{a.x=this.classOnePosition.width
}}};this.drawable=function(){if(this.id==null){associationDiv=this.drawableTemp()}else{if(this.isReflexive()){associationDiv=this.drawableReflexive()
}else{if(this.isComposition()){associationDiv=this.drawableComposition()}else{if(this.isBidirectional()){associationDiv=this.drawableBidirectional()
}else{associationDiv=this.drawableUnidirectional()}}}}return associationDiv};this.drawableTemp=function(){var b="#"+this.getElementId();
jQuery(b).remove();var c=this.createBaseJQueryObject();c.addClass("umpleAssociationTemp");c.attr("id","newassociation");var a=new UmpleLine(this.classOnePosition.add(this.offsetOnePosition),this.classTwoPosition.add(this.offsetTwoPosition));
c.append(a.drawable());return c};this.drawableBidirectional=function(){var f="#"+this.id;jQuery(f).remove();var d=this.createBaseJQueryObject();
if(this.color=="red"){d.addClass("redTracedAssociation")}else{d.addClass("untracedAssociation")}d.attr("id",this.id);d.attr("tabindex",2);
var a=UmpleSystem.find(this.classOneId);var k=UmpleSystem.find(this.classTwoId);if(a==null||a==undefined||k==null||k==undefined){return d
}this.classOnePosition=a.position;this.classTwoPosition=k.position;var o=this.classOnePosition.add(this.offsetOnePosition);var g=this.classTwoPosition.add(this.offsetTwoPosition);
var r=new UmpleLine(o.add(UmpleClassFactory.offsetError),g.add(UmpleClassFactory.offsetError));if(!this.isComposition()){d.append(r.drawable())
}var p="";var e=-3;p+=this.anchorDivHtml("hover",0,o.x+e,o.y+e);p+=this.anchorDivHtml("anchor",0,o.x+e,o.y+e);p+=this.anchorDivHtml("hover",1,g.x+e,g.y+e);
p+=this.anchorDivHtml("anchor",1,g.x+e,g.y+e);var c=o.slopeAngle(g);var n=this.multiplicityPosition(true);var j=this.multiplicityPosition(false);
var b=this.multiplicityDivHtml("one",this.multiplicityOne,n.x,n.y);var m=this.multiplicityDivHtml("two",this.multiplicityTwo,j.x,j.y);
if(this.roleOne!=""){roleOnePosition=this.rolePosition(true);var q=this.roleDivHtml("one",this.roleOne,roleOnePosition.x,roleOnePosition.y)
}else{q=""}if(this.roleTwo!=""){roleTwoPosition=this.rolePosition(false);var h=this.roleDivHtml("two",this.roleTwo,roleTwoPosition.x,roleTwoPosition.y)
}else{h=""}currentHtml=d.html();d.html(b+m+q+h+p+currentHtml);return d};this.drawableUnidirectional=function(){var f=this.drawableBidirectional();
var g=null;if(this.isLeftNavigable){g=this.classOnePosition.add(this.offsetOnePosition);otherEnd=this.classTwoPosition.add(this.offsetTwoPosition)
}else{g=this.classTwoPosition.add(this.offsetTwoPosition);otherEnd=this.classOnePosition.add(this.offsetOnePosition)}var c=g.slopeAngle360(otherEnd);
var a=c+30;var k=c-30;var b=10;var j=g.travelForward(b,a);var h=g.travelForward(b,k);var e=new UmpleLine(g.add(UmpleClassFactory.offsetError),j.add(UmpleClassFactory.offsetError));
var d=new UmpleLine(g.add(UmpleClassFactory.offsetError),h.add(UmpleClassFactory.offsetError));f.append(e.drawable());f.append(d.drawable());
return f};this.drawableComposition=function(){var g=this.drawableBidirectional();var n=null;if(this.isLeftComposition){n=this.classOnePosition.add(this.offsetOnePosition);
otherEnd=this.classTwoPosition.add(this.offsetTwoPosition)}else{n=this.classTwoPosition.add(this.offsetTwoPosition);otherEnd=this.classOnePosition.add(this.offsetOnePosition)
}var z=n.slopeAngle360(otherEnd);var k=z+30;var s=z-30;var j=8;var G=n.travelForward(j,k);var E=n.travelForward(j,s);var C=G.travelForward(j,s);
var x=new UmpleLine(n.add(UmpleClassFactory.offsetError),G.add(UmpleClassFactory.offsetError));var w=new UmpleLine(n.add(UmpleClassFactory.offsetError),E.add(UmpleClassFactory.offsetError));
var v=new UmpleLine(G.add(UmpleClassFactory.offsetError),C.add(UmpleClassFactory.offsetError));var u=new UmpleLine(E.add(UmpleClassFactory.offsetError),C.add(UmpleClassFactory.offsetError));
g.append(x.drawable());g.append(w.drawable());g.append(v.drawable());g.append(u.drawable());var y=new UmpleLine(C.add(UmpleClassFactory.offsetError),otherEnd.add(UmpleClassFactory.offsetError));
g.append(y.drawable());var e=4;var b=n.travelForward(e,k);var q=n.travelForward(e,s);var F=G.travelForward(e,s);var c=E.travelForward(e,k);
var m=new UmpleLine(n.add(UmpleClassFactory.offsetError),F.add(UmpleClassFactory.offsetError));var A=new UmpleLine(n.add(UmpleClassFactory.offsetError),c.add(UmpleClassFactory.offsetError));
var J=new UmpleLine(n.add(UmpleClassFactory.offsetError),C.add(UmpleClassFactory.offsetError));var o=new UmpleLine(G.add(UmpleClassFactory.offsetError),c.add(UmpleClassFactory.offsetError));
var B=new UmpleLine(G.add(UmpleClassFactory.offsetError),q.add(UmpleClassFactory.offsetError));var K=new UmpleLine(G.add(UmpleClassFactory.offsetError),E.add(UmpleClassFactory.offsetError));
var p=new UmpleLine(E.add(UmpleClassFactory.offsetError),b.add(UmpleClassFactory.offsetError));var D=new UmpleLine(E.add(UmpleClassFactory.offsetError),F.add(UmpleClassFactory.offsetError));
var a=new UmpleLine(C.add(UmpleClassFactory.offsetError),b.add(UmpleClassFactory.offsetError));var d=new UmpleLine(C.add(UmpleClassFactory.offsetError),q.add(UmpleClassFactory.offsetError));
var r=new UmpleLine(b.add(UmpleClassFactory.offsetError),q.add(UmpleClassFactory.offsetError));var H=new UmpleLine(b.add(UmpleClassFactory.offsetError),F.add(UmpleClassFactory.offsetError));
var f=new UmpleLine(b.add(UmpleClassFactory.offsetError),c.add(UmpleClassFactory.offsetError));var t=new UmpleLine(q.add(UmpleClassFactory.offsetError),F.add(UmpleClassFactory.offsetError));
var I=new UmpleLine(q.add(UmpleClassFactory.offsetError),c.add(UmpleClassFactory.offsetError));var h=new UmpleLine(F.add(UmpleClassFactory.offsetError),c.add(UmpleClassFactory.offsetError));
g.append(m.drawable());g.append(A.drawable());g.append(J.drawable());g.append(o.drawable());g.append(B.drawable());g.append(K.drawable());
g.append(p.drawable());g.append(D.drawable());g.append(a.drawable());g.append(d.drawable());g.append(r.drawable());g.append(H.drawable());
g.append(f.drawable());g.append(t.drawable());g.append(I.drawable());g.append(h.drawable());return g};this.drawableReflexive=function(){var j="#"+this.id;
jQuery(j).remove();var A=this.createBaseJQueryObject();if(this.color=="red"){A.addClass("redTracedAssociation")}else{A.addClass("untracedAssociation")
}A.attr("id",this.id);A.attr("tabindex",2);var P=UmpleSystem.find(this.classOneId);this.classOnePosition=P.position;this.classTwoPosition=P.position;
var L=P.position.height;var z=P.position.width;var t=15;var d=this.whichWall(true);factorX=d=="West"?-1:d=="South"?0:d=="East"?1:0;factorY=d=="West"?0:d=="South"?1:d=="East"?0:-1;
var f=this.offsetOnePosition.add(this.classOnePosition);var H=this.offsetOnePosition.add(this.classOnePosition).add(new UmplePosition(t*factorX,t*factorY,0,0));
if(d=="South"){f.y=f.y-1}var I=new UmpleLine(f,H);var a=this.whichWall(false);factorX=a=="West"?-1:a=="South"?0:a=="East"?1:0;factorY=a=="West"?0:a=="South"?1:a=="East"?0:-1;
var G=this.offsetTwoPosition.add(this.classTwoPosition);var Q=this.offsetTwoPosition.add(this.classTwoPosition).add(new UmplePosition(t*factorX,t*factorY,0,0));
var g=new UmpleLine(G,Q);A.append(I.drawable());A.append(g.drawable());var O=new UmplePosition(0,0,0,0);if(d==a){var c=new UmpleLine(H,Q);
if(d=="North"||d=="South"){if(this.isSymmetricReflexive){O.x=(H.x+Q.x)/2;O.y=H.y}}else{if(this.isSymmetricReflexive){O.x=H.x;O.y=(H.y+Q.y)/2
}}A.append(c.drawable())}else{if(this.offsetOnePosition.wallsAreAdjacent(d,a)){var n=new UmplePosition(0,0,0,0);var w=(d=="West"||a=="West");
var k=(d=="North"||a=="North");if(w){n.x=this.classOnePosition.x-t}else{n.x=this.classOnePosition.x+z+t}if(k){n.y=this.classOnePosition.y-t
}else{n.y=this.classOnePosition.y+L+t}var N=new UmpleLine(H,n);var h=new UmpleLine(Q,n);A.append(N.drawable());A.append(h.drawable());
if(this.isSymmetricReflexive){O.set(n.x,n.y)}}else{var x=new UmplePosition(0,0,0,0);var v=new UmplePosition(0,0,0,0);var M;var K;var J;
var u;var r;if(d=="South"||a=="South"){x.x=this.classOnePosition.x-t;x.y=this.classOnePosition.y-t;v.x=x.x;v.y=this.classOnePosition.y+L+t;
if(a=="South"){u=H;r=Q}else{u=Q;r=H}if(this.isSymmetricReflexive){O.x=x.x;O.y=(x.y+v.y)/2}}else{x.x=this.classOnePosition.x-t;x.y=this.classOnePosition.y+L+t;
v.x=this.classOnePosition.x+z+t;v.y=x.y;if(a=="East"){u=H;r=Q}else{u=Q;r=H}if(this.isSymmetricReflexive){O.x=(x.x+v.x)/2;O.y=x.y}}M=new UmpleLine(u,x);
K=new UmpleLine(x,v);J=new UmpleLine(v,r);A.append(M.drawable());A.append(K.drawable());A.append(J.drawable())}}if(!this.isSymmetricReflexive){var o=new UmplePosition(0,0,0,0);
if(d=="North"||d=="South"){O.x=H.x;O.y=(f.y+H.y)/2}else{O.x=(f.x+H.x)/2;O.y=H.y}if(a=="North"||a=="South"){o.x=Q.x;o.y=(G.y+Q.y)/2}else{o.x=(G.x+Q.x)/2;
o.y=Q.y}}var C="";var q=f;var p=G;var m=3;C+=this.anchorDivHtml("hover",0,q.x-m,q.y-m);C+=this.anchorDivHtml("anchor",0,q.x-m,q.y-m);
C+=this.anchorDivHtml("hover",1,p.x-m,p.y-m);C+=this.anchorDivHtml("anchor",1,p.x-m,p.y-m);if(this.isSymmetricReflexive){var R=UmplePositionFactory.copy(this.centerMultiplicityPosition(O));
var B=this.adjustRolePosition(O,true);var E=this.roleDivHtml("center",this.roleOne,B.x,B.y);var s=this.multiplicityDivHtml("center",this.multiplicityOne,R.x,R.y)
}else{var D=UmplePositionFactory.copy(this.reflexiveMultiplicityPosition(O,o,true));var b=UmplePositionFactory.copy(this.reflexiveMultiplicityPosition(o,O,false));
var e=this.adjustRolePosition(O,true);var y=this.adjustRolePosition(o,false);var E=(this.roleDivHtml("one",this.roleOne,e.x,e.y)+this.roleDivHtml("two",this.roleTwo,y.x,y.y));
var s=(this.multiplicityDivHtml("one",this.multiplicityOne,D.x,D.y)+this.multiplicityDivHtml("two",this.multiplicityTwo,b.x,b.y))}if(this.id==null){A.attr("id","newassociation");
return A}var F=A.html();A.html(s+E+C+F);return A};this.isReflexive=function(){return this.classOneId==this.classTwoId||this.isSymmetricReflexive
};this.isBidirectional=function(){if(this.isRightNavigable==undefined||this.isLeftNavigable==undefined){return true}return this.isRightNavigable&&this.isLeftNavigable
};this.isComposition=function(){return this.isRightComposition||this.isLeftComposition};this.endHasArrow=function(a){if(a){return this.isLeftNavigable
}else{return this.isRightNavigable}};this.contains=function(a){return a.id==this.classOneId||a.id==this.classTwoId};this.anchorDivHtml=function(c,b,a,d){return format('<div id="{0}_{1}{2}" class="{1}" name="{1}" style="left: {3}px; top: {4}px; cursor: pointer; display: none;"><img name="image" src="./scripts/_.gif"/></div>',this.id,c,b,a,d)
};this.multiplicityDivHtml=function(c,b,a,e,d){if(d==undefined||d=="undefined"){d=""}return format('<div id="{0}_{1}" class="multiplicity" name="{1}" style="left: {2}px; top: {3}px; cursor: pointer;">{4}&nbsp;&nbsp;{5}</div>',this.id,c,a,e,b,d)
};this.roleDivHtml=function(b,d,a,c){if(b=="one"){idExtension="roleOne"}else{if(b=="two"){idExtension="roleTwo"}else{if(b=="center"){idExtension="role"
}else{idExtension=""}}}return format('<div id="{0}_{1}" class="role" name="{1}" style="left: {2}px; top: {3}px; cursor: pointer;">{4}</div>',this.id,idExtension,a,c,d)
};this.whichWall=function(b){if(b){var c=this.classOnePosition;var d=this.offsetOnePosition}else{var c=this.classTwoPosition;var d=this.offsetTwoPosition
}var a=1;if(d.x==0){return"West"}else{if(d.y==0){return"North"}else{if(Math.abs(d.x-c.width)<=a){return"East"}else{return"South"}}}};
this.multiplicityPosition=function(f){if(f){var m=this.classOnePosition.add(this.offsetOnePosition);var e=this.classTwoPosition.add(this.offsetTwoPosition);
var k=this.multiplicityOne}else{var m=this.classTwoPosition.add(this.offsetTwoPosition);var e=this.classOnePosition.add(this.offsetOnePosition);
var k=this.multiplicityTwo}var j=this.whichWall(f);var b=k=="*"?new UmplePosition(0,10,0,0):new UmplePosition(0,16,0,0);var c=new UmplePosition(5*k.length+1,0,0,0);
var a=3;if((!this.isBidirectional()&&this.endHasArrow(f))||this.isComposition()){a+=5}var d=m.slopeAngle360(e);if(j=="North"){if(d<90){var h=(180-d)/2+d;
var g=m.travelForward(a,h);g=g.subtract(c);g=g.subtract(b)}else{var h=d/2;var g=m.travelForward(a,h);g=g.subtract(b)}}else{if(j=="East"){if(d>=0&&d<=90){var h=(d+90)/2+270;
var g=m.travelForward(a,h)}else{var h=((360-d+90)/2+d)%360;var g=m.travelForward(a,h);g=g.subtract(b)}}else{if(j=="South"){if(d<=270){var h=(360-d)/2+d;
var g=m.travelForward(a,h);var n=g}else{var h=(d-180)/2+180;var g=m.travelForward(a,h);var n=g;g=g.subtract(c)}}else{if(d<=180){var h=(270-d)/2+d;
var g=m.travelForward(a,h);g=g.subtract(c)}else{var h=(d-90)/2+90;var g=m.travelForward(a,h);g=g.subtract(b);g=g.subtract(c)}}}}return g
};this.centerMultiplicityPosition=function(e){var b=this.whichWall(true);var a=this.whichWall(false);var d=1;var c=5;e.width=5*this.multiplicityOne.length+c+6*this.roleOne.length;
e.height=16;if((b=="West"&&a=="West")||(b=="North"&&a=="South")||(b=="South"&&a=="North")){e.x-=(e.width+d);e.y-=e.height/2}else{if(b=="East"&&a=="East"){e.x+=d;
e.y-=e.height/2}else{if(b=="North"||a=="North"){e.y-=(d+e.height);e.x-=e.width/2}else{e.y+=d;e.x-=e.width/2}}}return e};this.reflexiveMultiplicityPosition=function(e,d,g){var a=5;
var c=1;if(g){var h=this.whichWall(true);var j=this.whichWall(false);var b=this.multiplicityOne.length;var f=this.roleOne.length}else{var h=this.whichWall(false);
var j=this.whichWall(true);var b=this.multiplicityTwo.length;var f=this.roleTwo.length}e.width=5*b+a+6*f;e.height=16;if(h=="North"){e.y-=e.height/2;
if((j=="North"&&e.x<d.x)||j=="East"){e.x-=(e.width+c)}else{e.x+=c}}else{if(h=="East"){if((j=="East"&&e.y<d.y)||j=="South"||j=="West"){e.y-=(e.height)
}else{e.y+=c}}else{if(h=="South"){e.y-=e.height/2;if((j=="South"&&e.x<d.x)||j=="East"){e.x-=(e.width+c)}else{e.x+=c}}else{if(h=="West"){e.x-=e.width;
if((j=="West"&&e.y<d.y)||j=="East"||j=="South"){e.y-=(e.height)}else{e.y+=c}}}}}return e};this.rolePosition=function(h){var n=h?this.multiplicityOne:this.multiplicityTwo;
var g=h?this.roleOne:this.roleTwo;var o=h?this.classOnePosition.add(this.offsetOnePosition):this.classTwoPosition.add(this.offsetTwoPosition);
var f=h?this.classTwoPosition.add(this.offsetTwoPosition):this.classOnePosition.add(this.offsetOnePosition);var e=new UmplePosition(5*(n.length),0,0,0);
var j=new UmplePosition(6*(g.length),0,0,0,0);var b=new UmplePosition(0,16,0,0);var d=b;var a=new UmplePosition(5,0,0,0);var k=this.multiplicityPosition(h);
var m=this.whichWall(h);var c=o.slopeAngle360(f);if(m=="North"){if(c<90){rolePosition=k.subtract(j).subtract(e)}else{rolePosition=k.add(e).add(a)
}if(n=="*"){rolePosition=rolePosition.subtract(new UmplePosition(0,6,0,0))}}else{if(m=="East"){rolePosition=k.add(e).add(a)}else{if(m=="South"){if(c<=270){rolePosition=k.add(e).add(a)
}else{rolePosition=k.subtract(j).subtract(e)}}else{rolePosition=k.subtract(j).subtract(e)}}}return rolePosition};this.adjustRolePosition=function(c,b){var a=b?this.multiplicityOne.length:this.multiplicityTwo.length;
c.x+=5*a+6;return c};this.createBaseJQueryObject=function(){return jQuery(format("<div class='{0}'></div>",this.getName()))}}UmpleAttributeFactory=new Object();
UmpleAttributeFactory.create=function(e){var d=e.type;var c=e.name;var b=e.traceColor;if(b==""){b="black"}var a=new UmpleAttribute(d,c,b);
return a};function UmpleAttribute(b,c,a){this.type=b;this.name=c;this.textColor=a;if(this.aColor===""||this.aColor===undefined){this.aColor="black"
}this.set=function(f){this.textColor="black";var e=this.type!=""&&this.name!="";if(e){this.oldType=this.type;this.oldName=this.name}var d=f.split(":");
if(d.length<2){this.type="String";this.name=f}else{this.name=d[0].trim();this.type=d[1].trim()}if(!e){this.newType=this.type;this.newName=this.name
}};this.copy=function(){return new UmpleAttribute(this.type,this.name,this.textColor)}}UmpleClassFactory=new Object();UmpleClassFactory.defaultSize=new UmplePosition(0,0,109,41);
UmpleClassFactory.offsetError=new UmplePosition(0,0,0,0);UmpleClassFactory.create=function(c){var a=new UmpleClass();a.id=c.id;a.name=c.name;
a.isInterface=c.isInterface;a.isAbstract=c.isAbstract;a.displayColor=c.displayColor;if(a.displayColor==""){a.displayColor="transparent"
}a.position.x=c.position.x;a.position.y=c.position.y;a.position.width=c.position.width;a.position.height=c.position.height;a.extendsClass=c.extendsClass;
for(var b=0;b<c.attributes.length;b++){if(c.attributes[b].modifier=="const"){continue}a.attributes.push(UmpleAttributeFactory.create(c.attributes[b]))
}for(var b=0;b<c.methods.length;b++){a.methods.push(UmpleMethodFactory.create(c.methods[b]))}if(c.implementedInterfaces!=null){for(var b=0;
b<c.implementedInterfaces.length;b++){a.interfaces[b]=c.implementedInterfaces[b].interfacesName+""}}return a};UmpleClassFactory.perimeterPosition=function(e,h,d){if(typeof(d)=="undefined"){d=new UmplePosition(0,0,0,0)
}var g=h.x;var f=h.y;var p=0;var n=d.x+e.position.x+p;var m=n+e.position.width;var k=d.y+e.position.y+p;var j=k+e.position.height;var r=g<n?n:g>m?m:g;
var q=f<k?k:f>j?j:f;var a=g-n;var t=m-g;var c=f-k;var b=j-f;var s=Math.min(a,t);var o=Math.min(c,b);if(s<o){r=a<t?n:m}else{if(o<s){q=c<b?k:j
}}return new UmplePosition(Math.round(r),Math.round(q),0,0)};function UmpleClass(){this.id;this.name;this.isInterface;this.isAbstract;
this.displayColor="transparent";this.position=new UmplePosition(0,0,109,41);this.attributes=[];this.methods=[];this.interfaces=[];this.extendsClass;
this.addAttribute=function(a){var b=new UmpleAttribute("","","");b.set(a);this.attributes.push(b);return this.attributes.length-1};this.removeAttribute=function(a){var b=this.attributes[a];
b.deleteType=b.type;b.deleteName=b.name};this.resetAttribute=function(a){if(this.attributes[a].deleteName!=null){this.attributes.splice(a,1)
}else{this.attributes[a]=this.attributes[a].copy()}};this.resetMethod=function(a){if(this.methods[a].deleteName!=null){this.methods.splice(a,1)
}else{this.methods[a]=this.methods[a].copy()}};this.addMethod=function(a){var b=new UmpleMethod("","","","");b.set(a);this.methods.push(b);
return this.methods.length-1};this.removeMethod=function(a){var b=this.methods[a];b.deleteType=b.type;b.deleteVisibility=b.visibility;
b.deleteName=b.name;b.deleteParameters=b.parameters};this.setExtendsClass=function(a){this.extendsClass=a};this.removeExtendsClass=function(){this.extendsClass=null
};this.borderLines=function(){var g=jQuery("#"+this.id);var f=g.width();var a=g.height();var e=this.position;var d=this.position.add(new UmplePosition(f,0,0,0));
var b=this.position.add(new UmplePosition(0,a,0,0));var c=this.position.add(new UmplePosition(f,a,0,0));borders=[];borders.push(new UmpleLine(e,d));
borders.push(new UmpleLine(e,b));borders.push(new UmpleLine(b,c));borders.push(new UmpleLine(d,c));return borders};this.drawable=function(){var c=this.drawClass();
var a=this.drawGeneralization();var b=[c,a];return b};this.drawClass=function(){var o="#"+this.id;var n=jQuery(o).get();if(n==undefined||n==null||n==""){classDiv=jQuery("<div></div>");
classDiv.addClass("umpleClass");classDiv.attr("tabindex",2)}else{classDiv=jQuery(n);removalSel=format("div#{0} .classTable,div#{0} .umpleAttribute,div#{0} .umpleAttributeNew,div#{0} .anchor, div#{0} .hover",this.id);
jQuery(removalSel).remove()}classDiv.attr("id",this.id);var h=-3.5;var f=-3;var e="";var p="";var k="";if(this.attributes.length>0){for(var j=0;
j<this.attributes.length;j++){var m=this.attributes[j];var g="";if(m.textColor!="black"){g=format("style='color:{0}'",m.textColor)}if(Page.isPhotoReady()){e+=format('<div class="umpleAttribute" {3}>{0} : {1}</div>',m.name,m.type,g)
}else{e+=format('<div class="umpleAttribute" {5}><span id="{2}_attribute_{3}" name="attributeEdit" class="editable editableDoubleClick">{0} : {1}</span> <img src="scripts/delete2.jpg" onclick="DiagramEdit.attributeDelete({4}{2}{4},{4}{3}{4})" /></div>',m.name,m.type,this.id,j,"'",g)
}}}if(this.methods.length>0){for(var j=0;j<this.methods.length;j++){var a=this.methods[j];var c="";if(a.visibility=="public"){c="+ "}else{if(a.visibility=="private"){c="- "
}else{if(a.visibility=="protected"){c="# "}else{c="+ "}}}var b=(a.type==""?"void":a.type);if(Page.isPhotoReady()){if(a.isAbstract=="true"){p+=format('<div class="umpleMethod">{3}<span style="font-style:italic">{1}({2}) </span> : {0} </div>',b,a.name,a.parameters,c)
}else{p+=format('<div class="umpleMethod">{3}{1}({2}) : {0} </div>',b,a.name,a.parameters,c)}}else{if(a.isAbstract=="true"){p+=format('<div class="umpleMethod"><span id="{4}_method_{5}" name="methodEdit" class="editable editableDoubleClick">{3}<span style="font-style:italic">{1}({2})</span> : {0} </span> <img src="scripts/delete2.jpg" onclick="DiagramEdit.methodDelete({6}{4}{6},{6}{5}{6})" /></div>',b,a.name,a.parameters,c,this.id,j,"'")
}else{p+=format('<div class="umpleMethod"><span id="{4}_method_{5}" name="methodEdit" class="editable editableDoubleClick">{3}{1}({2}) : {0} </span> <img src="scripts/delete2.jpg" onclick="DiagramEdit.methodDelete({6}{4}{6},{6}{5}{6})" /></div>',b,a.name,a.parameters,c,this.id,j,"'")
}}}}e+=format('<div class="umpleAttributeNew"><span id="{0}_newAttribute" name="attributeNew" class="editable editableSingleClick">{1}</span></div>',this.id,Page.isPhotoReady()?"&nbsp;":"-- Add More --");
p+=format('<div class="umpleMethodNew"><span id="{0}_newMethod" name="methodNew" class="editable editableSingleClick">{1}</span></div>',this.id,Page.isPhotoReady()?"&nbsp;":"-- Add More --");
if(!Page.isPhotoReady()){}rowspan=3;if(Page.showAttributes){rowspan+=1}if(Page.showMethods){rowspan+=1}k+=format('<table bgcolor="'+this.displayColor+'" class="classTable" border="0">',this.id)+format('  <tr class="height">    <td rowspan="{2}"> <img id="{0}_height" src="scripts/_.gif" style="width:0px;height:{1}px;display:block;"  />    </td>  </tr>',this.id,this.position.height,rowspan)+'  <tr class="classArea">    <td > <img src="scripts/class.png" title="Class" /> ';
if(Page.isPhotoReady()){if(this.isInterface=="true"){k+=format('<span>&#171interface&#187<span><br><span id="{0}_name" name="className">{1}</span>',this.id,this.name)
}else{if(this.isAbstract=="true"){k+=format('<span>&#171abstract&#187<span><br><span id="{0}_name" name="className">{1}</span>',this.id,this.name)
}else{k+=format('<span id="{0}_name" name="className">{1}</span>',this.id,this.name)}}}else{if(this.isInterface=="true"){k+=format('<span>&#171interface&#187<span><br><span id="{0}_name" name="className" class="editable editableDoubleClick">{1}</span>',this.id,this.name)
}else{if(this.isAbstract=="true"){k+=format('<span>&#171abstract&#187<span><br><span id="{0}_name" name="className" class="editable editableDoubleClick">{1}</span>',this.id,this.name)
}else{k+=format('<span id="{0}_name" name="className" class="editable editableDoubleClick" >{1}</span>',this.id,this.name)}}}k+=("</td> </tr>");
if(Page.showAttributes==true){k+=format('  <tr class="attributeArea">    <td class="attributes">{0}    </td>  </tr>',e)}if(Page.showMethods==true){k+=format('  <tr class="methodArea">    <td class="methods">{0}    </td>  </tr>',p)
}k+=format('  <tr class="width">    <td> <img id="{0}_width" src="scripts/_.gif" style="width:{1}px;height:0px;display:block;"  />    </td>  </tr>',this.id,this.position.width);
k+="</table>";var d=classDiv.html();classDiv.html(k+d);return classDiv};this.drawableClassOutline=function(){var a="#tempClass";var c=jQuery(a).get();
if(c==undefined||c==null||c==""){c=jQuery("<div></div>");c.addClass("umpleClass");c.attr("id",this.id)}else{c=jQuery(a)}var b='<table class="classTable" "border="0">'+format('  <tr class="height">    <td rowspan="4"> <img id="{0}_height" src="scripts/_.gif" style="width:0px;height:{1}px;display:block;"  />    </td>  </tr>',this.id,this.position.height)+'  <tr class="classArea">    <td> <img src="scripts/class.png" title="Class" /> '+format('      <span id="{0}_name" name="className" >{1}</span>',this.id,this.name)+'    </td>  </tr>  <tr class="attributeArea">    <td class="attributes">    </td>  </tr>  <tr class="width">'+format('    <td> <img id="{0}_width" src="scripts/_.gif" style="width:{1}px;height:0px;display:block;"  />    </td>  </tr>',this.id,this.position.width)+"</table>";
c.html(b);return c};this.drawGeneralization=function(){var b=null;var a=[];var d=UmpleSystem.find(this.extendsClass);if(d==null&&this.interfaces.length==0){return null
}if(d!=null){b=new UmpleGeneralization();b.childId=this.id;b.parentId=d.id;b.childPosition=this.position;b.parentPosition=d.position;
a[0]=b.drawable()}if(this.interfaces.length>0){var e=null;for(var c=0;c<this.interfaces.length;c++){e=UmpleSystem.find(this.interfaces[c]);
if(e==null){continue}b=new UmpleGeneralization();b.childId=this.id;b.parentId=e.id;b.childPosition=this.position;b.parentPosition=e.position;
a[c+1]=b.drawable()}}return a};this.anchorDivHtml=function(b,a){return format('<div id="{0}_{1}{2}" class="{3}" name="{4}" style="top: 0px; left: 0px; cursor:{5}; display: none;"><img name="image" src="./scripts/_.gif"/></div>',this.id,b,a,b,b,"move")
}}function UmpleGeneralization(){this.parentId=null;this.childId=null;this.parentPosition=null;this.childPosition=null;this.id=null;this.setClasses=function(a,b){this.childId=a;
this.parentId=b};this.setChildId=function(a){this.childId=a};this.setParentId=function(a){this.parentId=a};this.getElementId=function(){return this.id==null?"newgeneralization":this.id
};this.getChildId=function(){return this.childId};this.getParentId=function(){return this.parentId};this.drawable=function(z){if(z==undefined){z=true
}if(this.childId==null||this.childId==undefined){return null}var t="#"+this.childId+"_generalization";jQuery(t).remove();var j=jQuery("<div></div>");
var E=z?this.childId+"_generalization":"newgeneralization";var b="umpleGeneralization";j.attr("id",E);j.attr("tabindex",2);j.addClass(b);
var h=new UmplePosition(0,10,0,0);var y=new UmplePosition(15,0,0,0);var c=new UmplePosition(0,22,0,0);var w=this.childPosition;var B=new UmplePosition(this.childPosition.width/2,0,0,0);
var A=this.parentPosition;var f=new UmplePosition(this.parentPosition.width/2,this.parentPosition.height,0,0);f=f.add(h).add(c);A=A.add(f);
w=w.add(B);var q=this.childPosition.x;var r=this.childPosition.x+this.childPosition.width;var u=this.childPosition.y+this.childPosition.height;
var C=this.childPosition.y;var v=true;if(A.y>C){if(A.y<u){if(Math.abs(A.x-r)<Math.abs(A.x-q)){w=w.add(new UmplePosition(this.childPosition.width/2,0,0,0));
w.y=A.y;v=false}else{w=w.subtract(new UmplePosition(this.childPosition.width/2,0,0,0));w.y=A.y;v=false}}else{w=w.add(new UmplePosition(0,this.childPosition.height,0,0))
}}var s=new UmplePosition(w.x,A.y);if(v){var D=new UmpleLine(s.add(UmpleClassFactory.offsetError),A.add(UmpleClassFactory.offsetError));
var a=new UmpleLine(w.add(UmpleClassFactory.offsetError),s.add(UmpleClassFactory.offsetError));j.append(D.drawable())}else{var a=new UmpleLine(w.add(UmpleClassFactory.offsetError),A.add(UmpleClassFactory.offsetError))
}j.append(a.drawable());var p=A;var e=A.subtract(c);var d=new UmpleLine(p.add(UmpleClassFactory.offsetError),e.add(UmpleClassFactory.offsetError));
j.append(d.drawable());var o=e.subtract(new UmplePosition(y.x/2,0,0,0));var m=o.add(y);var k=e.subtract(h);var y=new UmpleLine(o.add(UmpleClassFactory.offsetError),m.add(UmpleClassFactory.offsetError));
var x=new UmpleLine(o.add(UmpleClassFactory.offsetError),k.add(UmpleClassFactory.offsetError));var n=new UmpleLine(m.add(UmpleClassFactory.offsetError),k.add(UmpleClassFactory.offsetError));
j.append(y.drawable());j.append(n.drawable());j.append(x.drawable());var g="";var F=j.html();j.html(g+F);return j};this.anchorDivHtml=function(c,b,a,d){return format('<div id="{0}_{1}{2}" class="{1}" name="{1}" style="left: {3}px; top: {4}px; cursor: pointer; display: none;"><img name="image" src="./scripts/_.gif"/></div>',this.childId+"_generalization",c,b,a,d)
}}History=new Object();History.versionCount=9999;History.noChange="//$?[No_Change]$?";History.getInstance=function(b){var a=new Object();
a.id=b;a.currentIndex=-1;a.oldestAvailableIndex=0;a.newestAvailableIndex=0;a.firstSave=true;a.undoButton=false;a.redoButton=false;a.getNextVersion=function(){return History.getNextVersion(a)
};a.getPreviousVersion=function(){return History.getPreviousVersion(a)};a.save=function(c,d){return History.save(a,c,d)};a.distanceBetween=function(d,c){return History.distanceBetween(a,d,c)
};a.setButtons=function(){return History.setButtons(a)};a.getVersion=function(c){return History.getVersion(a,c)};a.setVersion=function(c,d){return History.setVersion(a,c,d)
};return a};History.setButtons=function(a){History.enableButtonUndo(a,a.undoButton);History.enableButtonRedo(a,a.redoButton)};History.enableButtonUndo=function(a,b){a.undoButton=b;
Page.enablePaletteItem("buttonUndo",b)};History.enableButtonRedo=function(a,b){a.redoButton=b;Page.enablePaletteItem("buttonRedo",b)};
History.getNextVersion=function(b){History.enableButtonUndo(b,true);var a;if(!b.FirstSave&&b.newestAvailableIndex!=b.currentIndex){b.currentIndex=History.incrementIndex(b.currentIndex);
a=b.getVersion(b.currentIndex);if(a==undefined){a=History.noChange}}else{a=History.noChange}if(b.newestAvailableIndex==b.currentIndex){History.enableButtonRedo(b,false)
}return a};History.getPreviousVersion=function(b){var a;if(!b.FirstSave&&b.oldestAvailableIndex!=b.currentIndex){b.currentIndex=History.decrementIndex(b.currentIndex);
a=b.getVersion(b.currentIndex);if(a==undefined){a=History.noChange}else{History.enableButtonRedo(b,true)}}else{a=History.noChange}if(b.oldestAvailableIndex==b.currentIndex){History.enableButtonUndo(b,false)
}return a};History.save=function(a,b,c){if(a.getVersion(a.currentIndex)==b){return}console.log("========== saved");if(!a.firstSave){History.enableButtonRedo(a,false);
History.enableButtonUndo(a,true)}var d=a.distanceBetween(a.oldestAvailableIndex,a.currentIndex);if(d==a.versionCount-1){a.oldestAvailableIndex=History.incrementIndex(a.oldestAvailableIndex)
}a.currentIndex=History.incrementIndex(a.currentIndex);a.newestAvailableIndex=a.currentIndex;a.setVersion(a.currentIndex,b);if(a.firstSave){a.firstSave=false
}};History.decrementIndex=function(b){var a;if(b==0){a=History.versionCount-1}else{a=b-1}return a};History.incrementIndex=function(b){var a=(b+1)%History.versionCount;
return a};History.getVersion=function(b,c){var a="#textEditorColumn";var d=b.id+"version"+c;return jQuery(a).data(d)};History.setVersion=function(b,c,d){var a="#textEditorColumn";
var e=b.id+"version"+c;return jQuery(a).data(e,d)};History.distanceBetween=function(a,e,c){if(a.currentIndex==-1){return 0}var d=0;var b=e;
while(b!=c){b=History.incrementIndex(b);d+=1}return d};var Layout={};Layout.isTextVisible=true;Layout.isDiagramVisible=true;Layout.isPaletteVisible=true;
Layout.isLayoutVisible=false;Layout.layoutHandler=null;Layout.isInSmallScreenMode=false;Layout.screenThresholdWidth=945;var canvasHandle="#umpleCanvasColumn";
var editorHandle="#textEditorColumn";var modelEditorHandle="#topTextEditor";var paletteHandle="#paletteColumn";var layoutEditorHandle="#bottomTextEditor";
Layout.init=function(){Layout.errorMessageSpace=jQuery(".spacer").outerHeight();if(Layout.errorMessageSpace===null){Layout.errorMessageSpace=0
}var a=this.checkLayoutNeeded();if(a.layoutType==="large"){this.layoutHandler=new LargeScreenManager();this.isInSmallScreenMode=false
}else{if(a.layoutType==="small"){this.layoutHandler=new SmallScreenManager();this.isInSmallScreenMode=true}}this.layoutHandler.transition(true);
jQuery(window).bind("resize",function(b){if(!jQuery(b.target).hasClass("ui-resizable")){Layout.zoomResize()}})};Layout.checkLayoutNeeded=function(){if(jQuery(window).innerWidth()>jQuery(window).innerHeight()&&!(jQuery("body").innerWidth()<580&&jQuery("body").innerHeight()<580)){return{layoutType:"large"}
}else{return{layoutType:"small"}}};Layout.initPaletteSize=function(){this.layoutHandler.initPaletteSize()};Layout.initUmpleCanvasSize=function(){this.layoutHandler.initUmpleCanvasSize()
};Layout.initUmpleTextAreaSize=function(){this.layoutHandler.initUmpleTextAreaSize()};Layout.setTextEditorSize=function(b,a){this.layoutHandler.setTextEditorSize(b,a)
};Layout.setUmpleCanvasSize=function(b,a){this.layoutHandler.setUmpleCanvasSize(b,a)};Layout.adjustTextEditorHeight=function(a){if(this.isLayoutVisible){jQuery(modelEditorHandle).outerHeight(a*0.7);
if(Page.codeMirrorOn){this.resizeCodeMirrorEditor(a*0.7)}jQuery(layoutEditorHandle).outerHeight(a*0.3)}else{jQuery(modelEditorHandle).outerHeight(a);
if(Page.codeMirrorOn){this.resizeCodeMirrorEditor(a)}}jQuery(editorHandle).height(a)};Layout.resizeCodeMirrorEditor=function(a){if(Page.codeMirrorOn){Page.codeMirrorEditor.getWrapperElement().style.height=a+"px";
Page.codeMirrorEditor.refresh()}};Layout.showHideLayoutEditor=function(b){var c=jQuery(layoutEditorHandle);var a=jQuery(editorHandle).height();
if(b==undefined){b=!this.isLayoutVisible}if(b){Layout.isLayoutVisible=true;c.show()}else{Layout.isLayoutVisible=false;c.hide()}this.adjustTextEditorHeight(a)
};Layout.showHideTextEditor=function(b){var a=jQuery(editorHandle);var c=jQuery("#buttonShowHideLayoutEditor");var d=jQuery(".layoutListItem");
if(b==undefined){b=!this.isTextVisible}if(b){a.show();this.isTextVisible=true;c.prop("disabled",false);c.css("cursor","pointer");d.css("color","Black");
jQuery("#linetext").show();Page.setUmpleCode(Page.getUmpleCode())}else{a.hide();this.isTextVisible=false;c.prop("disabled",true);c.css("cursor","not-allowed");
d.css("color","DimGray");jQuery("#linetext").hide()}this.layoutHandler.showHideResizableAdjustment();this.layoutHandler.showHideResize()
};Layout.showHideCanvas=function(b){var a=jQuery(canvasHandle);if(b==undefined){b=!this.isDiagramVisible}if(b){a.show();this.isDiagramVisible=true;
Action.manualSync=jQuery("#buttonManualSync").prop("checked");jQuery("#buttonShowHideCanvas").prop("checked",true);if(!Action.manualSync){Action.updateUmpleDiagram();
Action.diagramInSync=true;Page.enableDiagram(true)}if(Action.manualSync&&!Action.diagramInSync){Page.enablePaletteItem("buttonSyncDiagram",true)
}if(!Action.manualSync||Action.diagramInSync){Page.enableCheckBoxItem("buttonPhotoReady","ttPhotoReady",true);Page.enableCheckBoxItem("buttonManualSync","ttManualSync",true);
Page.enablePaletteItem("buttonAddClass",true);Page.enablePaletteItem("buttonAddAssociation",true);Page.enablePaletteItem("buttonAddTransition",true);
Page.enablePaletteItem("buttonAddGeneralization",true);Page.enablePaletteItem("buttonDeleteEntity",true);Page.initToggleTool("buttonAddClass");
Page.initToggleTool("buttonAddAssociation");Page.initToggleTool("buttonAddTransition");Page.initToggleTool("buttonAddGeneralization");
Page.initToggleTool("buttonDeleteEntity")}}else{a.hide();this.isDiagramVisible=false;Action.manualSync=true;jQuery("#buttonShowHideCanvas").prop("checked",false);
Page.enableCheckBoxItem("buttonPhotoReady","ttPhotoReady",false);Page.enableCheckBoxItem("buttonManualSync","ttManualSync",false);Page.enablePaletteItem("buttonAddClass",false);
Page.enablePaletteItem("buttonAddAssociation",false);Page.enablePaletteItem("buttonAddTransition",false);Page.enablePaletteItem("buttonAddGeneralization",false);
Page.enablePaletteItem("buttonDeleteEntity",false);Page.enablePaletteItem("buttonSyncDiagram",false);Page.removeToggleTool("buttonAddClass");
Page.removeToggleTool("buttonAddAssociation");Page.removeToggleTool("buttonAddTransition");Page.removeToggleTool("buttonAddGeneralization");
Page.removeToggleTool("buttonDeleteEntity")}this.layoutHandler.showHideResizableAdjustment();this.layoutHandler.showHideResize()};Layout.showHideMenu=function(a){var b=jQuery("#paletteColumn");
if(a==undefined){a=!this.isPaletteVisible}if(a){Layout.isPaletteVisible=true;b.show()}else{Layout.isPaletteVisible=false;b.hide()}this.layoutHandler.showHideResizableAdjustment();
this.layoutHandler.showHideResize()};Layout.zoomResize=function(){var a=this.checkLayoutNeeded();if(a.layoutType==="large"){if(this.isInSmallScreenMode){this.toggleSmallScreenMode()
}}else{if(a.layoutType==="small"){if(!this.isInSmallScreenMode){this.toggleSmallScreenMode()}}}this.layoutHandler.adjustAfterWindowResize()
};Layout.toggleSmallScreenMode=function(){if(this.isInSmallScreenMode){this.isInSmallScreenMode=false;this.layoutHandler=new LargeScreenManager()
}else{this.isInSmallScreenMode=true;this.layoutHandler=new SmallScreenManager()}this.layoutHandler.transition(false)};Layout.verticallyResizing=function(a,b){this.layoutHandler.verticallyResizing(a,b)
};Layout.verticallyResized=function(a,b){this.layoutHandler.verticallyResized(a,b)};Layout.editorResizing=function(a,b){this.layoutHandler.editorResizing(a,b)
};Layout.editorResized=function(a,b){this.layoutHandler.editorResized(a,b)};Layout.canvasResizing=function(a,b){this.layoutHandler.canvasResizing(a,b)
};Layout.canvasResized=function(a,b){this.layoutHandler.canvasResized(a,b)};Layout.calculateMainHeight=function(){return jQuery(paletteHandle).outerHeight()
};function LargeScreenManager(){this.transition=function(d){if(!d){try{jQuery(editorHandle).resizable("destroy")}catch(b){}try{jQuery(paletteHandle).resizable("destroy")
}catch(b){}try{jQuery(canvasHandle).resizable("destroy")}catch(b){}jQuery(editorHandle).removeClass("smallScreenEditor smallScreenEditorNoMargin");
jQuery(canvasHandle).removeClass("smallScreenCanvas smallScreenCanvasNoEditor smallScreenCanvasNoEditorNoPalette")}this.adjustMarginSpace();
this.heightFactor=1;this.minCanvasSize=new UmplePosition(0,0,420,50);this.minEditorSize=new UmplePosition(0,0,284,0);var a=jQuery("body").outerWidth(true)-this.marginSpace-jQuery(paletteHandle).outerWidth()-this.minCanvasSize.width;
var c=jQuery("body").outerWidth(true)-this.marginSpace-jQuery(paletteHandle).outerWidth()-this.minEditorSize.width;this.maxEditorSize=new UmplePosition(0,0,a,0);
this.maxCanvasSize=new UmplePosition(0,0,c,0);this.initEditorResizable();this.initCanvasResizable();this.initVerticalResizable()};this.initUmpleCanvasSize=function(){this.initCanvasResizable();
this.setUmpleCanvasSize(this.minCanvasSize.width)};this.initUmpleTextAreaSize=function(){this.initEditorResizable();this.setTextEditorSize(508,undefined);
this.adjustAfterWindowResize()};this.initPaletteSize=function(){jQuery("#paletteColumn").height(this.calculateHeight());jQuery("#palette").accordion("refresh");
this.initVerticalResizable()};this.setTextEditorSize=function(c,a){var b=jQuery(editorHandle);if(c==undefined){c=b.outerWidth()}if(a==undefined){a=Layout.calculateMainHeight()
}if(c<this.minEditorSize.width){c=this.minEditorSize.width}else{if(!Layout.isDiagramVisible){c=c}}b.outerWidth(c);Layout.adjustTextEditorHeight(a);
if(Layout.isDiagramVisible){this.setUmpleCanvasSize(this.calculateLeftoverWidth()+jQuery(canvasHandle).outerWidth(),undefined)}};this.setUmpleCanvasSize=function(b,a){var c=jQuery(canvasHandle);
if(b==undefined){b=c.outerWidth()}if(a==undefined){a=Layout.calculateMainHeight()}if(b<this.minCanvasSize.width){b=this.minCanvasSize.width
}if(a<this.minCanvasSize.height){a=this.minCanvasSize.height}if(b>this.maxCanvasSize.width&&Layout.isTextVisible){b=this.maxCanvasSize.width
}c.outerWidth(b);c.height(a);jQuery("#palette").accordion("refresh")};this.showHideResize=function(){this.adjustMarginSpace();this.adjustMaxSizes();
if(Layout.isDiagramVisible&&!Layout.isTextVisible){this.setUmpleCanvasSize(this.calculateLeftoverWidth()+jQuery(canvasHandle).outerWidth(),undefined)
}else{if(Layout.isTextVisible){this.setTextEditorSize(this.calculateLeftoverWidth()+jQuery(editorHandle).outerWidth(),undefined)}}};this.showHideResizableAdjustment=function(){if(!Layout.isDiagramVisible||!Layout.isTextVisible){try{jQuery(canvasHandle).resizable("destroy")
}catch(a){}try{jQuery(editorHandle).resizable("destroy")}catch(a){}}else{if(Layout.isDiagramVisible&&Layout.isTextVisible){this.initCanvasResizable();
this.initEditorResizable()}}if(jQuery(editorHandle).outerWidth()<this.minEditorSize.width||jQuery(canvasHandle).outerWidth()<this.minCanvasSize.width){try{jQuery(canvasHandle).resizable("destroy")
}catch(a){}try{jQuery(editorHandle).resizable("destroy")}catch(a){}}else{this.initCanvasResizable();this.initEditorResizable()}this.adjustMaxSizes()
};this.adjustMaxSizes=function(){if(Layout.isDiagramVisible&&Layout.isTextVisible){var a=jQuery("body").outerWidth(true)-this.marginSpace;
if(Layout.isDiagramVisible){a-=this.minCanvasSize.width}if(Layout.isPaletteVisible){a-=jQuery(paletteHandle).outerWidth()}var b=jQuery("body").outerWidth(true)-this.marginSpace;
if(Layout.isTextVisible){b-=this.minEditorSize.width}if(Layout.isPaletteVisible){b-=jQuery(paletteHandle).outerWidth()}this.maxEditorSize=new UmplePosition(0,0,a,0);
this.maxCanvasSize=new UmplePosition(0,0,b,0);if(jQuery(editorHandle).outerWidth()>this.minEditorSize.width&&jQuery(canvasHandle).outerWidth()>this.minCanvasSize.width){jQuery(editorHandle).resizable("option","maxWidth",this.maxEditorSize.width);
jQuery(canvasHandle).resizable("option","maxWidth",this.maxCanvasSize.width)}}Action.setupPinch()};this.adjustAfterWindowResize=function(){this.adjustMaxSizes();
jQuery("#paletteColumn").height(this.calculateHeight());jQuery("#palette").accordion("refresh");var a=this.calculateLeftoverWidth();if((jQuery(canvasHandle).outerWidth()<this.minCanvasSize.width&&jQuery(canvasHandle).outerWidth()+a>=this.minCanvasSize.width&&a>0)||(jQuery(canvasHandle).outerWidth()+a<=this.minCanvasSize.width&&a>0)){this.setTextEditorSize(jQuery(editorHandle).outerWidth(),undefined)
}else{this.setTextEditorSize(a+jQuery(editorHandle).outerWidth(),undefined)}this.showHideResizableAdjustment()};this.initVerticalResizable=function(){jQuery("#mainApplication").resizable({resize:function(a,b){Layout.verticallyResizing(a,b)
},stop:function(a,b){Layout.verticallyResized(a,b)},autoHide:true,minHeight:this.minCanvasSize.height,handles:"s"})};this.initEditorResizable=function(){if(!Layout.isTextVisible||!Layout.isDiagramVisible){return
}jQuery(editorHandle).resizable({start:function(a,b){Layout.savedStartingWidth=jQuery(canvasHandle).outerWidth()},resize:function(a,b){Layout.editorResizing(a,b)
},stop:function(a,b){Layout.editorResized(a,b)},autoHide:true,minWidth:this.minEditorSize.width,maxWidth:this.maxEditorSize.width,handles:"e"})
};this.initCanvasResizable=function(){if(!Layout.isTextVisible||!Layout.isDiagramVisible){return}var a=jQuery(canvasHandle);a.resizable({start:function(b,c){Layout.savedStartingWidth=jQuery(editorHandle).outerWidth()
},resize:function(b,c){Layout.canvasResizing(b,c)},stop:function(b,c){Layout.canvasResized(b,c)},autoHide:true,minWidth:this.minCanvasSize.width,maxWidth:this.maxCanvasSize.width,handles:"w"})
};this.verticallyResizing=function(a,b){var c=b.size.height;jQuery(paletteHandle).outerHeight(c);jQuery(editorHandle).outerHeight(c);
jQuery(canvasHandle).outerHeight(c);Layout.adjustTextEditorHeight(c);jQuery("#palette").accordion("refresh")};this.verticallyResized=function(a,b){this.heightFactor=jQuery("#mainApplication").outerHeight()/(jQuery(window).innerHeight()-jQuery("#header").outerHeight()-jQuery("#topLine").outerHeight()-parseInt(jQuery("body").css("marginBottom"))-parseInt(jQuery("body").css("marginTop")));
this.setTextEditorSize(undefined,b.size.height);jQuery("#mainApplication").css("height","auto")};this.editorResizing=function(c,d){var a=d.size.width;
var b=d.originalSize.width-a;jQuery(canvasHandle).outerWidth(Layout.savedStartingWidth+b);jQuery(modelEditorHandle).width(a);jQuery(layoutEditorHandle).width(a)
};this.editorResized=function(b,c){var a=c.size.width;jQuery(modelEditorHandle).css("width","auto");jQuery(layoutEditorHandle).css("width","auto");
this.setTextEditorSize(a,undefined);delete Layout.savedStartingWidth};this.canvasResizing=function(c,d){var a=d.size.width;jQuery(canvasHandle).outerWidth(a);
var b=a-d.originalSize.width;jQuery(editorHandle).width(Layout.savedStartingWidth-b);jQuery(modelEditorHandle).width(Layout.savedStartingWidth-b);
jQuery(layoutEditorHandle).width(Layout.savedStartingWidth-b);jQuery(canvasHandle).css("left","0px");Action.setupPinch()};this.canvasResized=function(b,c){var a=c.size.width;
jQuery(modelEditorHandle).css("width","auto");jQuery(layoutEditorHandle).css("width","auto");this.setTextEditorSize(this.calculateLeftoverWidth()+jQuery(editorHandle).outerWidth(),undefined);
delete this.savedStartingWidth};this.adjustMarginSpace=function(){jQuery(editorHandle).removeClass("largeScreenEditor largeScreenEditorNoMargin");
jQuery(canvasHandle).removeClass("largeScreenCanvas largeScreenCanvasNoMargin");if(Layout.isTextVisible){if(Layout.isDiagramVisible&&Layout.isPaletteVisible){jQuery(editorHandle).addClass("largeScreenEditor");
jQuery(canvasHandle).addClass("largeScreenCanvas")}else{if(Layout.isDiagramVisible||Layout.isPaletteVisible){jQuery(editorHandle).addClass("largeScreenEditor");
jQuery(canvasHandle).addClass("largeScreenCanvasNoMargin")}else{jQuery(editorHandle).addClass("largeScreenEditorNoMargin");jQuery(canvasHandle).addClass("largeScreenCanvasNoMargin")
}}}else{jQuery(editorHandle).addClass("largeScreenEditorNoMargin");if(Layout.isDiagramVisible&&Layout.isPaletteVisible){jQuery(canvasHandle).addClass("largeScreenCanvas")
}else{jQuery(canvasHandle).addClass("largeScreenCanvasNoMargin")}}this.marginSpace=parseInt(jQuery("body").css("marginLeft"))+parseInt(jQuery("body").css("marginRight"))+1+parseInt(jQuery(canvasHandle).css("marginLeft"))+parseInt(jQuery(editorHandle).css("marginRight"))
};this.calculateLeftoverWidth=function(){var a=jQuery("body").outerWidth(true)-this.marginSpace;if(Layout.isTextVisible){a-=jQuery(editorHandle).outerWidth()
}if(Layout.isDiagramVisible){a-=jQuery(canvasHandle).outerWidth()}if(Layout.isPaletteVisible){a-=jQuery(paletteHandle).outerWidth()}return a
};this.calculateHeight=function(){var b=TabControl.isHidden()?0:jQuery("#tabControl").outerHeight();var c=jQuery("#taskArea").css("display")=="none"?0:jQuery("#taskArea").outerHeight();
if(c>jQuery(window).innerHeight()/2){c=0}var a=(jQuery(window).innerHeight()-jQuery("#header").outerHeight()-jQuery("#topLine").outerHeight()-b-parseInt(jQuery("body").css("marginBottom"))-parseInt(jQuery("body").css("marginTop"))-Layout.errorMessageSpace)*this.heightFactor-c;
if(a<this.minCanvasSize.height){return this.minCanvasSize.height}else{return a}}}function SmallScreenManager(){this.transition=function(b){if(!b){try{jQuery(editorHandle).resizable("destroy")
}catch(a){}try{jQuery(canvasHandle).resizable("destroy")}catch(a){}try{jQuery("#mainApplication").resizable("destroy")}catch(a){}jQuery(editorHandle).removeClass("largeScreenEditor largeScreenEditorNoMargin");
jQuery(canvasHandle).removeClass("largeScreenCanvas largeScreenCanvasNoMargin")}this.adjustMarginSpace();this.minCanvasSize=new UmplePosition(0,0,420,50);
this.minEditorSize=new UmplePosition(0,0,284,0);this.initEditorResizable();this.initCanvasResizable();this.initPaletteResizable()};this.initUmpleCanvasSize=function(){this.setUmpleCanvasSize(undefined,this.calculateHeight());
this.initCanvasResizable();this.initPaletteResizable();if(Layout.isDiagramVisible==false){Layout.showHideCanvas(false)}};this.initUmpleTextAreaSize=function(){this.setTextEditorSize();
this.initEditorResizable()};this.initPaletteSize=function(){jQuery("#paletteColumn").outerHeight(this.calculateHeight());jQuery("#palette").accordion("refresh")
};this.setTextEditorSize=function(b,a){var b=this.calculateLeftoverWidth();if(Layout.isPaletteVisible){jQuery(editorHandle).outerWidth(b)
}else{jQuery(editorHandle).outerWidth(b)}if(a!=undefined){Layout.adjustTextEditorHeight(a)}else{Layout.adjustTextEditorHeight(this.calculateHeight())
}};this.setUmpleCanvasSize=function(b,a){if(Layout.isTextVisible){jQuery(canvasHandle).outerWidth(jQuery("body").width())}else{jQuery(canvasHandle).outerWidth(this.calculateLeftoverWidth())
}if(a!=undefined){jQuery(canvasHandle).outerHeight(a)}};this.showHideResize=function(){var a=undefined;this.adjustMarginSpace();if(Layout.isTextVisible){this.setTextEditorSize(undefined,jQuery(paletteHandle).outerHeight())
}else{a=jQuery(paletteHandle).outerHeight()}jQuery("#palette").accordion("refresh");this.pairResizables();this.setUmpleCanvasSize(undefined,a)
};this.showHideResizableAdjustment=function(){};this.adjustAfterWindowResize=function(){jQuery("#paletteColumn").outerHeight(this.calculateHeight());
jQuery("#palette").accordion("refresh");this.setTextEditorSize();this.setUmpleCanvasSize(undefined,this.calculateHeight())};this.initEditorResizable=function(){jQuery(editorHandle).resizable({autoHide:true,minHeight:30,handles:"s"});
this.pairResizables()};this.initPaletteResizable=function(){jQuery(paletteHandle).resizable({autoHide:true,minHeight:30,handles:"s"});
this.pairResizables()};this.initCanvasResizable=function(){jQuery(canvasHandle).resizable({autoHide:true,minHeight:30,handles:"s"});this.pairResizables()
};this.verticallyResizing=function(a,b){jQuery(paletteHandle).outerHeight(b.size.height);jQuery("#palette").accordion("refresh")};this.verticallyResized=function(a,b){};
this.editorResizing=function(a,b){Layout.adjustTextEditorHeight(b.size.height)};this.editorResized=function(a,b){};this.canvasResizing=function(a,b){jQuery(canvasHandle).outerHeight(b.size.height)
};this.canvasResized=function(a,b){};this.adjustMarginSpace=function(){jQuery(canvasHandle).removeClass("smallScreenCanvas smallScreenCanvasNoEditor smallScreenCanvasNoEditorNoPalette");
jQuery(editorHandle).removeClass("smallScreenEditor smallScreenEditorNoMargin");if(Layout.isTextVisible){jQuery(canvasHandle).addClass("smallScreenCanvas");
if(Layout.isPaletteVisible){jQuery(editorHandle).addClass("smallScreenEditor")}else{jQuery(editorHandle).addClass("smallScreenEditorNoMargin")
}}else{jQuery(editorHandle).addClass("smallScreenEditorNoMargin");if(Layout.isPaletteVisible&&Layout.isDiagramVisible){jQuery(canvasHandle).addClass("smallScreenCanvasNoEditor")
}else{jQuery(canvasHandle).addClass("smallScreenCanvasNoEditorNoPalette")}}this.marginSpace=parseInt(jQuery("body").css("marginLeft"))+parseInt(jQuery("body").css("marginRight"))+1+parseInt(jQuery(editorHandle).css("marginRight"))+parseInt(jQuery(canvasHandle).css("marginLeft"))
};this.calculateLeftoverWidth=function(){if(Layout.isPaletteVisible){return jQuery("body").outerWidth(true)-this.marginSpace-jQuery(paletteHandle).outerWidth()
}else{return jQuery("body").outerWidth(true)-this.marginSpace}};this.calculateHeight=function(){var b=TabControl.isHidden()?0:jQuery("#tabControl").outerHeight();
var c=jQuery("#taskArea").css("display")=="none"?0:jQuery("#taskArea").outerHeight();if(c>jQuery(window).innerHeight()/2){c=0}var a=(jQuery(window).innerHeight()-jQuery("#header").outerHeight(true)-2*jQuery("#topLine").outerHeight(true)-b-Layout.errorMessageSpace)/2-c;
return a};this.pairResizables=function(){if(!jQuery(editorHandle).is(".ui-resizable")||!jQuery(paletteHandle).is(".ui-resizable")||!jQuery(canvasHandle).is(".ui-resizable")){return
}if(Layout.isTextVisible){var f=function(g,h){Layout.editorResizing(g,h);Layout.verticallyResizing(g,h)};var a=f;var e=function(g,h){Layout.canvasResizing(g,h)
};var c=function(g,h){Layout.editorResized(g,h);Layout.verticallyResized(g,h)};var b=c;var d=function(g,h){Layout.canvasResized(g,h)}
}else{var f=function(g,h){Layout.editorResizing(g,h)};var e=function(g,h){Layout.canvasResizing(g,h);Layout.verticallyResizing(g,h)};
var a=e;var c=function(g,h){Layout.editorResized(g,h)};var d=function(g,h){Layout.canvasResized(g,h);Layout.verticallyResized(g,h)};var b=d
}jQuery(editorHandle).resizable("option","resize",f);jQuery(editorHandle).resizable("option","stop",c);jQuery(paletteHandle).resizable("option","resize",a);
jQuery(paletteHandle).resizable("option","stop",b);jQuery(canvasHandle).resizable("option","resize",e);jQuery(canvasHandle).resizable("option","stop",d)
}}function UmpleLine(a,b){this.pointOne=a;this.pointTwo=b;this.drawable=function(g){var r=jQuery("<div class='umpleLine'></div>");var d=UmplePositionFactory.copy(this.pointOne);
var f=UmplePositionFactory.copy(this.pointTwo);if(typeof(g)!="undefined"){d.x=d.x+g.x;d.y=d.y+g.y;f.x=f.x+g.x;f.y=f.y+g.y}var j=0;if(d.y==f.y){var p=d.x<f.x?d:f;
var e=Math.abs(f.x-d.x);r.append(this.createConnector(p.x,p.y,e,1));r.append(this.createSelector(p.x,p.y,e,6));return r}else{if(d.x==f.x){var p=d.y<f.y?d:f;
var q=Math.abs(f.y-d.y);r.append(this.createConnector(p.x,p.y,1,q));r.append(this.createSelector(p.x,p.y,6,q));return r}}var k=this.slope();
var h=f.x>d.x?1:-1;var n=h*k;if(Math.abs(k)>1){n=f.y>d.y?1:-1;h=n*(1/k)}var c=0;var m=d.y;for(var o=d.x;(o<=f.x&&h>0)||(o>=f.x&&h<0);
o+=h){if(c++>1000){break}r.append(this.createConnector(o,m,1,1));r.append(this.createSelector(o,m,6,6));m+=n;j++}return r};this.slope=function(){slope=(this.pointTwo.y-this.pointOne.y)/(this.pointTwo.x-this.pointOne.x);
return slope};this.length=function(){var e=this.pointTwo.x-this.pointOne.x;var d=this.pointTwo.y-this.pointOne.y;var f=Math.sqrt(Math.pow(e,2)+Math.pow(d,2));
return Math.round(f)};this.createConnector=function(d,g,f,c){var e=jQuery("<div></div>");e.addClass("umpleAssociation");e.attr("name",this.startId);
e.css({position:"absolute",left:d,top:g,width:f,height:c});return e};this.createSelector=function(e,g,f,d){var c=jQuery("<div></div>");
c.addClass("umpleAssociationSelector");c.attr("name",this.startId);c.css({position:"absolute",left:e,top:g,width:f,height:d});return c
};this.intersection=function(m){var z=this.pointOne.x;var f=this.pointOne.y;var y=this.pointTwo.x;var e=this.pointTwo.y;var x=m.pointOne.x;
var d=m.pointOne.y;var w=m.pointTwo.x;var c=m.pointTwo.y;var r=this.slope();var q=m.slope();var t=null;var s=null;var B=null;var A=null;
var n=false;if(r==q){return null}if(r==Infinity||r==-Infinity){A=d-q*x;t=z;s=q*t+A;n=true}else{if(q==Infinity||q==-Infinity){B=f-r*z;
t=x;s=r*t+B;n=true}}if(!n){B=f-r*z;A=d-q*x;t=(A-B)/(r-q);s=r*t+B}var h=(y>z)?y:z;var g=(w>x)?w:x;var p=(e>f)?e:f;var o=(c>d)?c:d;var k=(h==y)?z:y;
var j=(g==w)?x:w;var v=(p==e)?f:e;var u=(o==c)?d:c;if(t<k||t<j||t>h||t>g||s<v||s<u||s>p||s>o){return null}t=Math.round(t);s=Math.round(s);
return new UmplePosition(t,s,0,0)}}UmpleMethodFactory=new Object();UmpleMethodFactory.create=function(b){var a=new UmpleMethod(b.visibility,b.isAbstract,b.type,b.name,b.parameters);
return a};function UmpleMethod(b,d,a,e,c){this.visibility=b;this.isAbstract=d;this.type=a;this.name=e;this.parameters=(typeof(c)=="string"?c.split(","):c);
this.set=function(j){var h=(this.name!="");if(h){this.oldVisibility=this.visibility;this.oldType=this.type;this.oldName=this.name;this.oldParameters=this.parameters
}j=j.trim();var g=j.charAt(0);if(g=="+"){this.visibility="public";j=j.substr(1)}else{if(g=="-"){this.visibility="private";j=j.substr(1)
}else{if(g=="#"){this.visibility="protected";j=j.substr(1)}else{this.visibility="public"}}}var k=j.split(":");if(k.length<2){this.type="void";
this.name=j.substring(0,j.indexOf("(")).trim();this.parameters=j.match("\\((.*)\\)")[1].replace(/\s+/g,"").split(",")}else{var f=k[0].trim();
this.type=k[1].trim();this.name=f.substring(0,f.indexOf("(")).trim();this.parameters=f.match("\\((.*)\\)")[1].replace(/\s+/g,"").split(",")
}if(!h){this.newVisibility=this.visibility;this.newType=this.type;this.newName=this.name;this.newParameters=this.parameters}};this.copy=function(){return new UmpleMethod(this.visibility,this.type,this.name,this.parameters)
}}Page=new Object();Page.selectedItem=null;Page.selectedClass=null;Page.selectedAssociation=null;Page.selectedTransition=null;Page.selectedGeneralization=null;
Page.canEditTask=false;Page.canCreateTask=true;Page.codeEffect=null;Page.clickCount=0;Page.repeatToolItem=false;Page.shortcutsEnabled=true;
Page.diagramSyncNeededAppend=false;Page.modelDelimiter="//$?[End_of_model]$?";Page.codeMirrorOn=false;Page.codeMirrorEditor=null;Page.hLine=null;
Page.modelLoadingCount=0;Page.layoutLoadingCount=0;Page.canvasLoadingCount=0;Page.onLoadingCompleteCallbacks=[];Page.readOnly=false;Page.useEditableClassDiagram=true;
Page.useGvClassDiagram=false;Page.useGvStateDiagram=false;Page.useGvFeatureDiagram=false;Page.showFeatureDependency=false;Page.useStructureDiagram=false;
Page.useFeatureDiagram=false;Page.showAttributes=true;Page.showMethods=false;Page.showActions=true;Page.showText=true;Page.showCanvas=true;
Page.showTraits=false;Page.showTransitionLabels=false;Page.showGuardLabels=false;Page.showGuards=true;Page.modifiedDiagrams=false;Page.allowPinch=false;
Page.init=function(b,e,k,h,j,g,d,c,f,a){if(performance.navigation.type==2){location.reload(true)}Page.canEditTask=f;Page.canCreateTask=a;
Layout.isDiagramVisible=b;Layout.isTextVisible=e;Layout.isPaletteVisible=k;Layout.isLayoutVisible=j;Page.readOnly=h;TabControl.init();
jQuery(".layoutListItem").hide();if(g=="GvState"){Page.useGvStateDiagram=true;Page.useEditableClassDiagram=false;Page.setDiagramTypeIconState("GvState");
Page.useGvFeatureDiagram=false;jQuery(".view_opt_state").show()}else{if(g=="GvClass"){Page.useGvClassDiagram=true;Page.useEditableClassDiagram=false;
Page.setDiagramTypeIconState("GvClass");Page.useGvFeatureDiagram=false;jQuery(".view_opt_class").show()}else{if(g=="GvClassTrait"){Page.useGvClassDiagram=true;
Page.useEditableClassDiagram=false;Page.setDiagramTypeIconState("GvClass");Page.useGvFeatureDiagram=false;Page.showTraits=true;jQuery(".view_opt_class").show()
}else{if(g=="GvFeature"){Page.useGvFeatureDiagram=true;Page.useEditableClassDiagram=false;Page.useGvStateDiagram=false;Page.useStructureDiagram=false;
Page.setDiagramTypeIconState("GvFeature");jQuery(".view_opt_feature").show()}else{if(g=="structureDiagram"){Page.useStructureDiagram=true;
Page.useEditableClassDiagram=false;Page.setDiagramTypeIconState("structureDiagram");Page.useGvFeatureDiagram=false}else{jQuery(".view_opt_class").show();
jQuery(".view_opt_class_palette").show()}}}}}jQuery.noConflict();jQuery(document).keydown(function(m){Action.keyboardShortcut(m)});Layout.init();
Page.initPaletteArea();Page.initCanvasArea();Page.initUmpleTextArea();Page.initSourceCodeArea();Page.initCodeExecutionArea();jQuery(document).ready(function(){DropboxInitializer.initializeDropbox();
ToolTips.initTooltips()});if(Page.readOnly){jQuery("#"+Page.umpleCanvasId()).addClass("photoReady")}Action.loadFile();if(c){Action.loadTask(jQuery("#model").val().split("-")[1],true)
}jQuery(d).prop("selected",true)};Page.initPaletteArea=function(){var a="#palette";var b=a+" *";jQuery(a).accordion({heightStyle:"fill",fillSpace:true,active:1,collapsible:true});
jQuery(b).addClass("unselectable");Layout.initPaletteSize();Page.initJQueryButton("buttonGenerateCode");Page.initJQueryButton("buttonExecuteCode");
Page.initJQueryButton("buttonStartOver");Page.initJQueryButton("buttonShowRefreshUmpleOnlineCompletely");Page.initJQueryButton("buttonLoadBlankModel");
Page.initHighlighter("buttonAddClass");Page.initHighlighter("buttonAddAssociation");Page.initHighlighter("buttonAddTransition");Page.initHighlighter("buttonAddGeneralization");
Page.initHighlighter("buttonDeleteEntity");Page.initHighlighter("buttonPngImage");Page.initHighlighter("buttonYumlImage");Page.initHighlighter("buttonSimulateCode");
Page.initHighlighter("buttonUigu");Page.initHighlighter("buttonCopyClip");Page.initHighlighter("buttonCopy");Page.initHighlighter("buttonCopyEncodedURL");
Page.initHighlighter("buttonCopyCommandLine");Page.initHighlighter("buttonCopyLocalBrowser");Page.initHighlighter("buttonLoadLocalBrowser");
if(Page.canEditTask){Page.initHighlighter("buttonRequestAllZip");Page.initHighlighter("buttonRequestLoadTaskURL")}if(Page.canCreateTask){Page.initHighlighter("buttonCreateTask")
}Page.initHighlighter("buttonLoadTask");Page.initHighlighter("buttonDownloadFiles");Page.initHighlighter("buttonSmaller");Page.initHighlighter("buttonLarger");
Page.initHighlighter("buttonSyncCode");Page.initHighlighter("buttonSyncDiagram");Page.initHighlighter("buttonToggleMethods");Page.initHighlighter("buttonToggleAttributes");
Page.initHighlighter("buttonToggleActions");Page.initHighlighter("buttonToggleTransitionLabels");Page.initHighlighter("buttonToggleGuards");
Page.initHighlighter("buttonToggleGuardLabels");Page.initHighlighter("buttonToggleTraits");Page.initHighlighter("buttonToggleFeatureDependency");
Page.initHighlighter("buttonallowPinch");Page.initHighlighter("buttonReindent");Page.initToggleTool("buttonAddClass");Page.initToggleTool("buttonAddAssociation");
Page.initToggleTool("buttonAddTransition");Page.initToggleTool("buttonAddGeneralization");Page.initToggleTool("buttonDeleteEntity");Page.initAction("buttonPngImage");
Page.initAction("buttonYumlImage");Page.initAction("buttonPhpCode");Page.initAction("buttonEcoreCode");Page.initAction("buttonJavaCode");
Page.initAction("buttonJavaAPIDoc");Page.initAction("buttonRubyCode");Page.initAction("buttonAlloyCode");Page.initAction("buttonNuSMVCode");
Page.initAction("buttonSqlCode");Page.initAction("buttonCppCode");Page.initAction("buttonPhotoReady");Page.initAction("buttonSimulateCode");
Page.initAction("buttonShowHideTextEditor");Page.initAction("buttonShowHideCanvas");Page.initAction("buttonShowEditableClassDiagram");
Page.initAction("buttonShowJointJSClassDiagram");Page.initAction("buttonShowGvClassDiagram");Page.initAction("buttonShowGvStateDiagram");
Page.initAction("buttonShowGvFeatureDiagram");Page.initAction("buttonShowStructureDiagram");Page.initAction("buttonShowHideLayoutEditor");
Page.initAction("buttonManualSync");Page.initAction("buttonCopyClip");Page.initAction("buttonCopy");Page.initAction("buttonCopyEncodedURL");
Page.initAction("buttonCopyCommandLine");Page.initAction("buttonCopyLocalBrowser");Page.initAction("buttonLoadLocalBrowser");if(Page.canEditTask){Page.initAction("buttonRequestAllZip");
Page.initAction("buttonRequestLoadTaskURL")}if(Page.canCreateTask){Page.initAction("buttonCreateTask")}Page.initAction("buttonLoadTask");
Page.initAction("buttonDownloadFiles");Page.initAction("buttonUndo");Page.initAction("buttonRedo");Page.initAction("buttonReindent");
Page.initAction("buttonUigu");Page.initAction("buttonStartOver");Page.initAction("buttonShowRefreshUmpleOnlineCompletely");Page.initAction("buttonLoadBlankModel");
Page.initAction("buttonGenerateCode");Page.initAction("buttonExecuteCode");Page.initAction("buttonTabsCheckbox");Page.initAction("buttonSmaller");
Page.initAction("buttonLarger");Page.initAction("buttonSyncCode");Page.initAction("buttonSyncDiagram");Page.initAction("buttonToggleMethods");
Page.initAction("buttonToggleAttributes");Page.initAction("buttonToggleActions");Page.initAction("buttonToggleTraits");Page.initAction("buttonToggleFeatureDependency");
Page.initAction("buttonToggleTransitionLabels");Page.initAction("buttonToggleGuards");Page.initAction("buttonToggleGuardLabels");Page.initAction("buttonAllowPinch");
Page.initLabels();Page.enablePaletteItem("buttonUndo",false);Page.enablePaletteItem("buttonRedo",false);Page.enablePaletteItem("buttonSyncDiagram",false);
Page.enablePaletteItem("buttonAddTransition",false);jQuery("#genstatus").hide();jQuery("#buttonViewComplete").hide();Page.initExamples();
Page.initOptions();if(Page.readOnly){jQuery("#mainDrawMenu").hide();jQuery(".layoutListItem").hide();jQuery("#preferencesTitle").hide();
jQuery("#ttPhotoReady").hide();jQuery("#ttManualSync").hide();jQuery("#canvasSizeTitle").hide();jQuery("#buttonSmaller").hide();jQuery("#buttonLarger").hide();
jQuery("#menuBookmarkable").hide()}if(Page.readOnly||!Layout.isPaletteVisible){jQuery("#topBookmarkable").hide()}if(!Layout.isPaletteVisible){jQuery("#paletteColumn").hide()
}if(!Layout.isTextVisible){if(Page.readOnly){jQuery("#topLine").hide()}else{jQuery("#linetext").hide()}}jQuery("#inputGenerateCode").on("change",function(){if(this.value.split(":")[1]==="Java"){jQuery("#buttonExecuteCode").show()
}else{jQuery("#buttonExecuteCode").hide()}})};Page.initOptions=function(){jQuery("#buttonShowHideLayoutEditor").prop("checked",Layout.isLayoutVisible);
jQuery("#buttonShowHideTextEditor").prop("checked",Layout.isTextVisible);jQuery("#buttonShowHideCanvas").prop("checked",Layout.isDiagramVisible);
jQuery("#buttonTabsCheckbox").prop("checked",false);jQuery("#tabRow").hide();jQuery("#ttTabsCheckbox").hide();jQuery("#buttonToggleAttributes").prop("checked",true);
jQuery("#buttonToggleActions").prop("checked",true);jQuery("#buttonToggleTransitionLabels").prop("checked",false);jQuery("#buttonToggleGuards").prop("checked",true);
jQuery("#buttonToggleGuardLabels").prop("checked",false);jQuery("#buttonToggleTraits").prop("checked",Page.showTraits);jQuery("#buttonToggleFeatureDependency").prop("checked",false);
jQuery("#buttonAllowPinch").prop("checked",false);if(Page.useEditableClassDiagram){jQuery("#buttonShowEditableClassDiagram").prop("checked",true)
}if(Page.useJointJSClassDiagram){jQuery("#buttonShowJointJSClassDiagram").prop("checked",true)}if(Page.useGvClassDiagram){jQuery("#buttonShowGvClassDiagram").prop("checked",true)
}if(Page.useGvFeatureDiagram){jQuery("#buttonShowGvFeatureDiagram").prop("checked",true)}if(Page.useGvStateDiagram){jQuery("#buttonShowGvStateDiagram").prop("checked",true)
}if(Page.useStructureDiagram){jQuery("#buttonShowStructureDiagram").prop("checked",true)}jQuery("#buttonPhotoReady").prop("checked",false);
jQuery("#buttonManualSync").prop("checked",false);jQuery("#buttonShowHideTextEditor").prop("disabled",false);jQuery("#buttonShowHideCanvas").prop("disabled",false);
jQuery("#buttonPhotoReady").prop("disabled",false);jQuery("#buttonManualSync").prop("disabled",false)};Page.initHighlighter=function(b){var a="#"+b;
jQuery(a).mouseover(function(){Page.highlightItem(b)});jQuery(a).mouseout(function(){Page.unhighlightItem(b)})};Page.removeHighlighter=function(b){var a="#"+b;
jQuery(a).unbind("mouseover");jQuery(a).unbind("mouseout")};Page.enableCheckBoxItem=function(e,b,a){var c=jQuery("#"+b);var d=jQuery("#"+e);
if(a){d.prop("disabled",false);d.css("cursor","pointer");c.css("color","Black")}else{d.prop("disabled",true);d.css("cursor","not-allowed");
c.css("color","Silver")}};Page.enablePaletteItem=function(d,a){var c=jQuery("#"+d);var b=!c.hasClass("disabled");if(b==a){return}if(a){c.removeClass();
c.prop("disabled",true);Page.initHighlighter(d)}else{c.removeClass();c.addClass("disabled");c.prop("disabled",false);Page.removeHighlighter(d)
}};Page.initToggleTool=function(b){var a=jQuery("#"+b);a.unbind().click(function(){Page.toggleToolItem(b,false)});a.dblclick(function(){Page.toggleToolItem(b,true)
})};Page.removeToggleTool=function(b){var a=jQuery("#"+b);a.unbind("click");a.unbind("dblclick")};Page.initJQueryButton=function(c){var a="#"+c;
var b=jQuery(a).attr("value");jQuery(a).button({label:b,className:"jQuery-palette-button"})};Page.initAction=function(b){var a="#"+b;
jQuery(a).click(Action.clicked)};Page.initLabels=function(){var d=jQuery(".buttonExtend");for(var b=0,a=d.length;b<a;b++){var c="#"+jQuery(d[b]).prop("id");
jQuery(c).click(function(e){return function(){jQuery("#"+jQuery(e).prop("id").replace("label","button")).trigger("click")}}(c))}};Page.initUmpleTextArea=function(){var a=jQuery("#umpleModelEditorText");
var b=jQuery("#umpleLayoutEditorText");a.keyup(function(c){Action.freshLoad=false;Action.umpleTyped(c)});a.mousedown(function(){setTimeout('jQuery("#linenum").val(Action.getCaretPosition())',25)
});b.keyup(function(c){Action.freshLoad=false;Action.setjustUpdateNowtoSaveLater(false);Action.umpleCodeMirrorTypingActivity()});a.focus(function(){Action.focusOn("umpleModelEditorText",true)
});b.focus(function(){Action.focusOn("umpleLayoutEditorText",true)});a.blur(function(){Action.focusOn("umpleModelEditorText",false)});
b.blur(function(){Action.focusOn("umpleLayoutEditorText",false)});Page.initCodeMirrorEditor();Layout.initUmpleTextAreaSize();if(!Layout.isTextVisible){Layout.showHideTextEditor(false)
}if(!Layout.isLayoutVisible){Layout.showHideLayoutEditor(false)}};Page.initCodeMirrorEditor=function(){Page.codeMirrorEditor=CodeMirror.fromTextArea(document.getElementById("umpleModelEditorText"),{lineNumbers:true,matchBrackets:true,readOnly:Page.readOnly,mode:"text/x-umple",lineWrapping:true,extraKeys:{"Ctrl-E":function(a){Page.clickShowEditableClassDiagram()
},"Ctrl-J":function(a){Page.clickShowJointJSClassDiagram()},"Ctrl-G":function(a){Page.clickShowGvClassDiagram()},"Ctrl-S":function(a){Page.clickShowGvStateDiagram()
},"Ctrl-L":function(a){Page.clickShowStructureDiagram()},"Ctrl-T":function(a){Page.clickShowHideText()},"Shift-Ctrl-Alt-T":function(a){Page.clickShowHideText()
},"Ctrl-D":function(a){Page.clickShowHideCanvas()},"Ctrl-N":function(a){Page.clickShowHideMenu()},"Ctrl-Alt-N":function(a){Page.clickShowHideMenu()
},"Ctrl-Shift-=":function(a){Page.clickButtonlarger()},"Ctrl-Shift--":function(a){Page.clickButtonSmaller()},"Shift-Ctrl-A":function(a){Page.clickToggleAttributes()
},"Ctrl-M":function(a){Page.clickToggleMethods()},"Ctrl-R":function(a){Page.clickToggleTraits()},"Ctrl-I":function(a){Page.clickToggleTransitionLabels()
},"Ctrl-K":function(a){Page.clickToggleGuardLabels()},"Ctrl-O":function(a){Action.copyCommandLineCode()},"Ctrl-B":function(a){Action.promptAndExecuteTest()
},Esc:function(a){a.getInputField().blur()}}});Page.codeMirrorEditor.on("focus",function(b,a){Action.focusOn("CodeMirror",true)});Page.codeMirrorEditor.on("blur",function(b,a){Action.focusOn("CodeMirror",false)
});Page.codeMirrorEditor.on("gutterClick",function(b,a){Page.codeMirrorEditor.foldCode(a)});Page.codeMirrorEditor.on("change",function(a,b){Action.umpleCodeMirrorTypingActivity()
});Page.codeMirrorEditor.on("cursorActivity",function(){Page.codeMirrorEditor.addLineClass(Page.hLine,null);Page.hLine=Page.codeMirrorEditor.addLineClass(Page.codeMirrorEditor.getCursor().line,"activeline");
Action.umpleCodeMirrorCursorActivity()});Page.hLine=Page.codeMirrorEditor.addLineClass(0,"activeline");Page.codeMirrorOn=true};Page.setDiagramTypeIconState=function(a){buttonList=["ECD_button","GCD_button","SD_button"];
for(i=0,l=buttonList.length;i<l;++i){document.getElementById(buttonList[i]).className="button2"}switch(a){case"editableClass":document.getElementById("ECD_button").className="button2 active";
break;case"GvClass":document.getElementById("GCD_button").className="button2 active";break;case"GvState":document.getElementById("SD_button").className="button2 active";
break}};Page.setShowHideIconState=function(a){switch(a){case"SHT_button":if(Page.showText){document.getElementById(a).className="button2 active"
}else{document.getElementById(a).className="button2"}break;case"SHD_button":if(Page.showCanvas){document.getElementById(a).className="button2 active"
}else{document.getElementById(a).className="button2"}break;case"SHA_button":if(Page.showAttributes){document.getElementById(a).className="button2 active"
}else{document.getElementById(a).className="button2"}break;case"SHM_button":if(Page.showMethods){document.getElementById(a).className="button2 active"
}else{document.getElementById(a).className="button2"}break}};Page.clickShowEditableClassDiagram=function(){jQuery("#buttonShowEditableClassDiagram").trigger("click")
};Page.clickShowJointJSClassDiagram=function(){jQuery("#buttonShowJointJSClassDiagram").trigger("click")};Page.clickShowGvClassDiagram=function(){jQuery("#buttonShowGvClassDiagram").trigger("click")
};Page.clickShowGvStateDiagram=function(){jQuery("#buttonShowGvStateDiagram").trigger("click")};Page.clickShowGvFeatureDiagram=function(){jQuery("#buttonShowGvFeatureDiagram").trigger("click")
};Page.clickShowStructureDiagram=function(){jQuery("#buttonShowStructureDiagram").trigger("click")};Page.clickShowHideText=function(){jQuery("#buttonShowHideTextEditor").trigger("click")
};Page.clickShowHideCanvas=function(){jQuery("#buttonShowHideCanvas").trigger("click")};Page.clickShowHideMenu=function(){Layout.showHideMenu()
};Page.clickButtonlarger=function(){jQuery("#buttonLarger").trigger("click")};Page.clickButtonSmaller=function(){jQuery("#buttonSmaller").trigger("click")
};Page.clickToggleAttributes=function(){jQuery("#buttonToggleAttributes").trigger("click")};Page.clickToggleMethods=function(){jQuery("#buttonToggleMethods").trigger("click")
};Page.clickToggleTraits=function(){jQuery("#buttonToggleTraits").trigger("click")};Page.clickToggleFeatureDependency=function(){jQuery("#buttonToggleFeatureDependency").trigger("click")
};Page.clickToggleTransitionLabels=function(){jQuery("#buttonToggleTransitionLabels").trigger("click")};Page.clickToggleGuardLabels=function(){jQuery("#buttonToggleGuards").trigger("click")
};Page.clickToggleGuardLabels=function(){jQuery("#buttonToggleGuardLabels").trigger("click")};Page.clickAllowPinch=function(){jQuery("#buttonAllowPinch").trigger("click")
};Page.isPhotoReady=function(){if(Page.readOnly){return(true)}else{var a="#buttonPhotoReady";return jQuery(a).prop("checked")}};Page.initSourceCodeArea=function(){SyntaxHighlighter.config.clipboardSwf="scripts/clipboard.swf";
var a="#generatedCodeRow";jQuery(a).hide()};Page.initCodeExecutionArea=function(){var a="#codeExecutionArea";jQuery(a).hide()};Page.showExecutionArea=function(){var a="#codeExecutionArea";
jQuery(a).show()};Page.hideExecutionArea=function(){var a="#codeExecutionArea";jQuery(a).hide()};Page.hideGeneratedCode=function(){jQuery("#generatedCodeRow").hide();
jQuery("#innerGeneratedCodeRow").hide();if(!Page.useStructureDiagram){jQuery("#svgCanvas").hide()}};Page.hideGeneratedCodeOnly=function(){jQuery("#generatedCodeRow").hide();
jQuery("#innerGeneratedCodeRow").hide()};Page.initCanvasArea=function(){var a=jQuery("#umpleCanvas");Layout.initUmpleCanvasSize();a.click(function(b){Action.umpleCanvasClicked(b)
});a.mousemove(Action.mouseMove);a.focus(function(){Action.focusOn(Page.umpleCanvasId(),true)});a.blur(function(){Action.focusOn(Page.umpleCanvasId(),false)
});a.delegate("[class$='editableDoubleClick']","dblclick",InlineEditor.handleOnClick);a.delegate("[class$='editableSingleClick']","click",InlineEditor.handleOnClick);
if(!Layout.isDiagramVisible){Layout.showHideCanvas(false)}};Page.setExamples=function(a){var b=a+".ump";jQuery("#inputExample").change(Action.loadExample);
jQuery("#inputExample option").each(function(){if(this.value==b){jQuery('#inputExample option[value = "'+b+'"]').attr("selected",true);
return}});jQuery("#inputExampleType").change(Action.setExampleType);jQuery("#inputExample2").change(Action.loadExample);jQuery("#inputExample2 option").each(function(){if(this.value==b){jQuery('#inputExample2 option[value = "'+b+'"]').attr("selected",true);
return}});jQuery("#inputExample3").change(Action.loadExample);jQuery("#inputExample3 option").each(function(){if(this.value==b){jQuery('#inputExample3 option[value = "'+b+'"]').attr("selected",true);
return}});jQuery("#inputExample4").change(Action.loadExample);jQuery("#inputExample4 option").each(function(){if(this.value==b){jQuery('#inputExample4 option[value = "'+b+'"]').attr("selected",true);
return}})};Page.initExamples=function(){jQuery("#inputExample").change(Action.loadExample);jQuery("#defaultExampleOption").attr("selected",true);
jQuery("#inputExampleType").change(Action.setExampleType);jQuery("#inputExample2").change(Action.loadExample);jQuery("#defaultExampleOption2").attr("selected",true);
jQuery("#inputExample3").change(Action.loadExample);jQuery("#defaultExampleOption3").attr("selected",true);jQuery("#inputExample4").change(Action.loadExample);
jQuery("#defaultExampleOption4").attr("selected",true);if(Page.useStructureDiagram){jQuery("#structureModels").prop("selected",true);
jQuery("#itemLoadExamples").hide();jQuery("#itemLoadExamples2").hide();jQuery("#itemLoadExamples4").hide()}else{if(Page.useGvStateDiagram){jQuery("#smModels").prop("selected",true);
jQuery("#itemLoadExamples").hide();jQuery("#itemLoadExamples3").hide();jQuery("#itemLoadExamples4").hide()}else{if(Page.useGvFeatureDiagram){jQuery("#featureModels").prop("selected",true);
jQuery("#itemLoadExamples").hide();jQuery("#itemLoadExamples2").hide();jQuery("#itemLoadExamples3").hide()}else{jQuery("#cdModels").prop("selected",true);
jQuery("#itemLoadExamples2").hide();jQuery("#itemLoadExamples3").hide();jQuery("#itemLoadExamples4").hide()}}}};Page.highlightItem=function(b){var a="#"+b;
jQuery(a).addClass("highlight")};Page.unhighlightItem=function(b){var a="#"+b;jQuery(a).removeClass("highlight")};Page.enableDiagram=function(a){Page.enableEditDragAndResize(a);
Page.enablePaletteItem("buttonAddClass",a);Page.enablePaletteItem("buttonAddAssociation",a);Page.enablePaletteItem("buttonAddGeneralization",a);
Page.enablePaletteItem("buttonDeleteEntity",a);Page.showDiagramSyncNeeded(!a)};Page.enableTransition=function(a){Page.enablePaletteItem("buttonAddTransition",a);
Page.enablePaletteItem("buttonAddAssociation",!a)};Page.enableEditDragAndResize=function(a){if(a){jQuery("span.editable").removeClass("uneditable");
jQuery("div.umpleClass").removeClass("unselectable");jQuery("div.umpleClass.ui-draggable").draggable({disabled:false})}else{jQuery("span.editable").addClass("uneditable");
jQuery("div.umpleClass").addClass("unselectable");jQuery("div.umpleClass.ui-draggable").draggable({disabled:true});jQuery(":text").blur()
}};Page.toggleToolItem=function(d,b){if(b==undefined){b=false}Page.repeatToolItem=b;var a=d.substring(6);var c=(a!=Page.selectedItem);
if(c){Page.selectToggleTool(a)}else{Page.unselectAllToggleTools()}};Page.unselectAllToggleTools=function(){var b=false;var a=false;a=DiagramEdit.removeNewClass();
if(a){b=true}a=DiagramEdit.removeNewAssociation();if(a){b=true}a=DiagramEdit.removeNewTransition();if(a){b=true}a=DiagramEdit.removeNewGeneralization();
if(a){b=true}var c="ul.toggle li.selected";jQuery(c).removeClass("selected highlight");setTimeout("Page.enableEditDragAndResize(true);",500);
Page.selectedItem=null;Page.repeatToolItem=false;return b};Page.selectToggleTool=function(b){if(Page.selectedItem!=null){DiagramEdit.removeNewClass();
DiagramEdit.removeNewAssociation();DiagramEdit.removeNewTransition();DiagramEdit.removeNewGeneralization()}Page.enableEditDragAndResize(false);
Page.selectedItem=b;Action.unselectAll();var c=format("ul.toggle li.selected");var a="#button"+b;jQuery(c).removeClass("selected highlight");
jQuery(a).addClass("selected")};Page.canShowHovers=function(){return Page.selectedItem==null||Page.selectedItem=="DeleteEntity"};Page.getRawUmpleCode=function(){return document.getElementById("umpleModelEditorText").value
};Page.getUmpleCode=function(){var a=Page.getRawUmpleCode().replace(Page.modelDelimiter,"");var c=jQuery("#umpleLayoutEditorText").val().replace(Page.modelDelimiter,"");
if(c!==""&&!c.includes("namespace -;")){c="\n\nnamespace -;\n"+c}var b=a+Page.modelDelimiter+c;return b};Page.getEncodedURL=function(){var a=window.location.href.split("?")[0];
if(a.substr(0,37)=="https://cruise.umple.org/umpleonline/"){a="http://try.umple.org/"}return a+"?text="+encodeURIComponent(Page.getUmpleCode())
};Page.splitUmpleCode=function(d){var c=d.indexOf(Page.modelDelimiter);if(c==-1){b=d;e=""}else{d=d.replace(Page.modelDelimiter,"");var b=d.substr(0,c);
var e=d.substr(c,d.length)}var a=[b,e];return a};Page.setUmpleCode=function(b,c){var a=Page.splitUmpleCode(b);jQuery("#umpleLayoutEditorText").val(a[1]);
if(Page.codeMirrorOn){if(!((typeof c==="boolean")&&c==false)){Page.codeMirrorEditor.setValue(a[0])}}jQuery("#umpleModelEditorText").val(a[0]);
if(typeof c==="function"){c()}};Page.setUmplePositioningCode=function(a){jQuery("#umpleLayoutEditorText").val(a)};Page.umpleCanvasId=function(){return"umpleCanvas"
};Page.createBookmark=function(){TabControl.useActiveTabTo(TabControl.saveTab)(Page.getUmpleCode());TabControl.saveActiveTabs();window.location.href="bookmark.php?model="+Page.getModel()
};Page.createTask=function(){var b=jQuery("#taskName").val();let patt=/^(\w|\.)+$/;if(!patt.test(b)){window.alert("Task Name can only contain letters(case insensitive), underscores, dots, and digits!");
return}var d=jQuery("#requestorName").val();var a=jQuery("#instructions");var c=jQuery("#completionURL").val();var e=jQuery("#isExperiment").is(":checked");
TabControl.useActiveTabTo(TabControl.saveTab)(Page.getUmpleCode());TabControl.saveActiveTabs();Ajax.sendRequest("task.php",Page.createTaskCallback,format("taskName={0}&instructions={1}&model={2}&requestorName={3}&completionURL={4}&isExperiment={5}",b,a.val(),Page.getModel(),d,c,e))
};Page.createTaskCallback=function(a){if(a.responseText.split(" ")[0]=="Task"){window.alert("Not able to create a task with that name. "+a.responseText)
}else{window.location.href="umple.php?task=1&model="+a.responseText}};Page.editTask=function(){var b=jQuery("#instructions");var a=jQuery("#model").val().split("-")[1];
var d=jQuery("#requestorName").val();var c=jQuery("#completionURL").val();var e=jQuery("#isExperiment").is(":checked");TabControl.useActiveTabTo(TabControl.saveTab)(Page.getUmpleCode());
TabControl.saveActiveTabs();Ajax.sendRequest("task.php",Page.editTaskCallback,"edit=1&taskName="+a+"&instructions="+b.val()+"&model="+Page.getModel()+"&requestorName="+d+"&completionURL="+c+"&isExperiment="+e)
};Page.editTaskCallback=function(a){Page.setFeedbackMessage("Changes saved")};Page.cancelTaskResponse=function(){var a=confirm("Are you sure to cancel this task response?");
if(a){window.location.href="task.php?cancelTaskResponse=1&model="+Page.getModel()}};Page.hideTask=function(){jQuery("#taskArea").css("display","none");
jQuery("#labelTaskName").css("display","none");jQuery("#taskNameCell").css("display","none");jQuery("#instructions").css("display","none");
jQuery("#isExperimentCell").css("display","none");jQuery("#isExperiment").attr("checked",false);Layout.zoomResize()};Page.cancelTask=function(){if(jQuery("#completionURL").val()!=""||jQuery("#taskName").val()!=""||jQuery("#requestorName").val()!=""||jQuery("#instructions").val()!=""){var a=confirm("Are you sure you want to end the task creation process?");
if(a){jQuery("#taskName").val("");jQuery("#requestorName").val("");jQuery("#completionURL").val("");jQuery("#instructions").val("");Page.hideTask()
}}else{Page.hideTask()}};Page.endTaskEdit=function(){var a=confirm("Are you sure you want to end the task editing process?");if(a){Page.hideTask()
}};Page.toggleTabs=function(){TabControl.isHidden()?TabControl.showTabs():TabControl.hideTabs();Layout.layoutHandler.adjustAfterWindowResize()
};Page.showDiagramSyncNeeded=function(c){var b=jQuery("#umpleCanvas");var a='<div id="syncNeededMessage" class="syncNeededMessage unselectable">Diagram is out of synchronization with the text due to selecting Manual Sync or an error in the text that has caused the compiler to produce no output. </div>';
if(c&&!Page.diagramSyncNeededAppend){b.append(a);Page.diagramSyncNeededAppend=true;Page.readOnly=true;UmpleSystem.redrawCanvas()}else{if(!c&&Page.diagramSyncNeededAppend){jQuery("#syncNeededMessage").remove();
Page.diagramSyncNeededAppend=false;Page.readOnly=false;UmpleSystem.redrawCanvas()}}};Page.hideLoading=function(){var b="#topTextEditor";
var c="#bottomTextEditor";var a="#"+Page.umpleCanvasId();if(Page.modelLoadingCount>0){Page.modelLoadingCount--}if(Page.layoutLoadingCount>0){Page.layoutLoadingCount--
}if(Page.canvasLoadingCount>0){Page.canvasLoadingCount--}if(Page.modelLoadingCount===0){jQuery(b).hideLoading()}if(Page.layoutLoadingCount===0){jQuery(c).hideLoading()
}if(Page.canvasLoadingCount===0){jQuery(a).hideLoading()}if(Page.modelLoadingCount===0&&Page.layoutLoadingCount===0&&Page.canvasLoadingCount===0){jQuery(".bookmarkableUrl").removeClass("disabled")
}};Page.showModelLoading=function(){var a=jQuery("#topTextEditor");if(Page.modelLoadingCount==0){if(jQuery("#textEditorColumn").is(":visible")){a.showLoading()
}jQuery(".bookmarkableUrl").addClass("disabled")}Page.modelLoadingCount++};Page.showLayoutLoading=function(){var a=jQuery("#bottomTextEditor");
if(Page.layoutLoadingCount==0){jQuery(".bookmarkableUrl").addClass("disabled");if(a.is(":visible")){a.showLoading()}}Page.layoutLoadingCount++
};Page.showCanvasLoading=function(){var a=jQuery("#umpleCanvas");if(Page.canvasLoadingCount==0){jQuery(".bookmarkableUrl").addClass("disabled");
if(a.is(":visible")){a.showLoading()}}Page.canvasLoadingCount++};Page.resetCanvasSize=function(){Page.setUmpleCanvasSize(Layout.minCanvasSize.width,Layout.minCanvasSize.height)
};Page.getSelectedExample=function(){var b="";var c=Page.getExampleType();if(c=="cdModels"){var a=false;b=jQuery("#inputExample option:selected").val();
if(b=="GeometricSystem.ump"){a=true}if(a){if(!Page.useGvClassDiagram){jQuery("#buttonShowGvClassDiagram").attr("checked",true);Action.changeDiagramType({type:"GvClass"})
}}else{if(!(Page.useEditableClassDiagram||Page.useGvClassDiagram)){jQuery("#buttonShowEditableClassDiagram").attr("checked",true);Action.changeDiagramType({type:"editableClass"})
}}}else{if(c=="featureModels"){b=jQuery("#inputExample4 option:selected").val();if(!Page.useGvFeatureDiagram){jQuery("#buttonShowGvFeatureDiagram").attr("checked",true);
Action.changeDiagramType({type:"GvFeature"})}}else{if(c=="smModels"){b=jQuery("#inputExample2 option:selected").val();if(!Page.useGvStateDiagram&&!Page.useJointJSClassDiagram){jQuery("#buttonShowGvStateDiagram").attr("checked",true);
Action.changeDiagramType({type:"GvState"})}}else{b=jQuery("#inputExample3 option:selected").val();if(!Page.useStructureDiagram){jQuery("#buttonShowStructureDiagram").attr("checked",true);
Action.changeDiagramType({type:"structure"})}}}}return b};Page.getExampleType=function(){var a=jQuery("#exampleType option:selected").val();
return a};Page.showCodeDone=function(){var a="#genstatus";jQuery(a).show();setTimeout(function(){jQuery(a).hide()},2000)};Page.showViewDone=function(){var a="#buttonViewComplete";
jQuery(a).dialog({closeOnEscape:true,hide:"puff",height:100,width:250});setTimeout(function(){jQuery(a).dialog("close")},2000)};Page.showExecutedResponse=function(a){jQuery("#executionMessage").html(a)
};Page.showGeneratedCode=function(code,language,tabnumber){if(typeof(tabnumber)==="undefined"){tabnumber=""}Action.toggleTabsCheckbox(language);
Page.applyGeneratedCodeAreaStyles(language);var errorMarkup=Page.getErrorMarkup(code,language);var generatedMarkup=Page.getGeneratedMarkup(code,language);
if(tabnumber==""){jQuery("#downloadArea").html(errorMarkup)}else{jQuery("#messageArea").html(errorMarkup)}if(language=="java"||language=="php"||language=="cpp"||language=="ruby"||language=="python"||language=="xml"||language=="sql"||language=="alloy"||language=="nusmv"){jQuery("#innerGeneratedCodeRow"+tabnumber).html(formatOnce('<pre class="brush: {1};">{0}</pre>',generatedMarkup,language));
SyntaxHighlighter.highlight("code");if(tabnumber==""){jQuery("#innerGeneratedCodeRow").nextAll().remove();jQuery("#tabRow").html("");
Action.generateTabsCode(code);Action.toggleTabs()}}else{if(language=="structureDiagram"){eval(generatedMarkup);var downloadLink='<div id="diagramLinkContainer"></div>';
errorMarkup=downloadLink+errorMarkup;if(errorMarkup!=""){jQuery("#messageArea").html(errorMarkup)}Page.toggleStructureDiagramLink(false)
}else{jQuery("#innerGeneratedCodeRow"+tabnumber).html(generatedMarkup)}}};Page.applyGeneratedCodeAreaStyles=function(b){var a=jQuery("#generatedCodeRow");
a.show();jQuery("#innerGeneratedCodeRow").show();if(b=="diagramUpdate"){a.removeClass("generatedCode");a.removeClass("generatedDiagram")
}else{if(b=="stateDiagram"||b=="classDiagram"||b=="structureDiagram"){a.removeClass("generatedCode");a.addClass("generatedDiagram");if(b=="structureDiagram"){jQuery("#innerGeneratedCodeRow").html('<svg id="generatedSVGCanvas"></svg>')
}}else{a.removeClass("generatedDiagram");a.addClass("generatedCode")}}};Page.getErrorMarkup=function(c,d){var a="";if(d=="classDiagram"||d=="stateDiagram"){a=c.split("<svg xmlns=")[0];
a=a.replace(/&nbsp;\s*$/,"")}else{if(d=="javadoc"||d=="yumlDiagram"){a=c.split("<iframe ")[0]}else{if(d=="diagramUpdate"){a=c.replace(/<p>[\s\S]*/,"")
}else{var b=c.split("<p>URL_SPLIT");if(b.length>1){a=b[0]}}}}return a};Page.getGeneratedMarkup=function(c,d){var a="";if(d=="classDiagram"||d=="stateDiagram"){a=c.split("<svg width=")[1];
a="<svg width="+a;a=a.replace(/<\/svg>$/,"")}else{if(d=="javadoc"||d=="yumlDiagram"){a=c.split("<iframe ")[1];a="<iframe "+a}else{if(d=="diagramUpdate"){}else{if(d=="structureDiagram"){a=c.split("<p>URL_SPLIT")[1];
a=a.replace(/##CANVAS_ID##/g,"generatedSVGCanvas");a=jQuery("<div/>").html(a).text()}else{var b=c.split("<p>URL_SPLIT");a=(b.length>1)?b[1]:c
}}}}return a};Page.toggleStructureDiagramLink=function(b,a){linkContainer=jQuery("#diagramLinkContainer");if(b){linkContainer.html(format("<a href='{0}' target='_blank' id='structureLink'>Download the SVG for the following</a>",a));
jQuery("#structureLink").on("click",function(c){Page.toggleStructureDiagramLink(false)})}else{linkContainer.html('<div id="buttonStructureLink" value="Generate SVG"></div>');
Page.initJQueryButton("buttonStructureLink");Page.initAction("buttonStructureLink")}};Page.setFilename=function(a){jQuery("#filename").val(a)
};Page.setFeedbackMessage=function(a){document.getElementById("feedbackMessage").innerHTML=a};Page.setExampleMessage=function(a){document.getElementById("exampleMessage").innerHTML=a
};Page.getFeedbackMessage=function(){return document.getElementById("feedbackMessage").innerHTML};Page.catFeedbackMessage=function(b){var a=document.getElementById("feedbackMessage").innerHTML;
document.getElementById("feedbackMessage").innerHTML=a+b};Page.getFilename=function(){return jQuery("#filename").val()};Page.getAdvancedMode=function(){return document.getElementById("advancedMode").value
};Page.getModel=function(){return jQuery("#model").val()};jQuery.fn.selectRange=function(b,a){return this.each(function(){if(this.setSelectionRange){this.focus();
this.setSelectionRange(b,a)}else{if(this.createTextRange){var c=this.createTextRange();c.collapse(true);c.moveEnd("character",a);c.moveStart("character",b);
c.select()}}})};UmplePositionFactory=new Object();UmplePositionFactory.copy=function(a){return new UmplePosition(a.x,a.y,a.width,a.height)
};function UmplePosition(c,b,a,d){this.x=c;this.y=b;this.width=a;this.height=d;this.set=function(f,e){this.x=f;this.y=e};this.subtract=function(e){return new UmplePosition(this.x-e.x,this.y-e.y,this.width-e.width,this.height-e.height)
};this.add=function(e){if(e==null){return UmplePositionFactory.copy(this)}return new UmplePosition(this.x+e.x,this.y+e.y,this.width+e.width,this.height+e.height)
};this.slopeAngle=function(e){return this.slopeAngleAndQuadrant(e)[0]};this.quadrant=function(e){return this.slopeAngleAndQuadrant(e)[1]
};this.equalsIgnoreSize=function(e){if(this.x!=e.x){return false}if(this.y!=e.y){return false}return true};this.slopeAngleAndQuadrant=function(p){var h=p.y-this.y;
var j=this.x-p.x;var m=h/j;var f=Math.atan(m)*180/3.14159;var g=h>=0&&j>=0;var o=h>=0&&j<0;var k=h<0&&j>=0;var n=h<0&&j<0;var e=g?"top-right":o?"top-left":k?"bottom-right":"bottom-left";
return[f,e]};this.slopeAngle360=function(j){var f;if(this.y==j.y){if(this.x>j.x){return 180}else{return 0}}var g=j.y-this.y;var h=j.x-this.x;
var e=h/g;if(j.y<this.y){f=90+Math.atan(e)*180/3.14159}else{f=270+Math.atan(e)*180/3.14159}return Math.round(f)};this.travelForward=function(j,h){var f=new UmplePosition(0,0,0,0);
var g=0;var e=0;if(h>=0&&h<90){g=Math.cos(h*3.14159/180)*j;e=Math.sin(h*3.14159/180)*j;f.x=this.x+g;f.y=this.y-e}else{if(h>=90&&h<180){h-=90;
g=Math.sin(h*3.14159/180)*j;e=Math.cos(h*3.14159/180)*j;f.x=this.x-g;f.y=this.y-e}else{if(h>=180&&h<270){h-=180;g=Math.cos(h*3.14159/180)*j;
e=Math.sin(h*3.14159/180)*j;f.x=this.x-g;f.y=this.y+e}else{h-=270;g=Math.sin(h*3.14159/180)*j;e=Math.cos(h*3.14159/180)*j;f.x=this.x+g;
f.y=this.y+e}}}f.x=Math.round(f.x);f.y=Math.round(f.y);return f};this.wallsAreAdjacent=function(f,e){if(f==e){return false}if(f=="West"&&e=="East"){return false
}if(f=="East"&&e=="West"){return false}if(f=="North"&&e=="South"){return false}if(f=="South"&&e=="North"){return false}return true};this.areAnglesSimilar=function(f,e){var g=3;
return Math.abs(f-e)<=g};this.toString=function(){return"("+this.x+","+this.y+","+this.width+","+this.height+")"}}jQuery(document).ready(function(){var f="filecode=";
var b="VIEW=";var e="DIAGRAM=";var d="PREF=";var a=document.cookie.split(";");var h=null;jQuery("#restorecode").hide();for(var g=0;g<a.length;
g++){var j=a[g].trim();if(j.indexOf(f)==0){h=j.substring(f.length,j.length)}else{if(j.indexOf(b)==0){b=j.substring(b.length,j.length)
}else{if(j.indexOf(e)==0){e=j.substring(e.length,j.length)}else{if(j.indexOf(d)!=-1){d=j.substring(d.length,j.length)}}}}}if(d.indexOf("g")!=-1){Action.hidegdpr()
}if(h!=null&&h.length!=0){jQuery("#restorecode").show();setTimeout(function(){jQuery("#restorecode").hide()},30000);jQuery("#restorecode").click(function(){jQuery("#restorecode").hide();
Page.setFilename(h);Action.loadFile();if(b.indexOf("d")!=-1){if(!jQuery("#buttonShowHideCanvas").prop("checked")){jQuery("#buttonShowHideCanvas").trigger("click")
}}else{if(jQuery("#buttonShowHideCanvas").prop("checked")){jQuery("#buttonShowHideCanvas").trigger("click")}}if(b.indexOf("t")!=-1){if(!jQuery("#buttonShowHideTextEditor").prop("checked")){jQuery("#buttonShowHideTextEditor").trigger("click")
}}else{if(jQuery("#buttonShowHideTextEditor").prop("checked")){jQuery("#buttonShowHideTextEditor").trigger("click")}}if(b.indexOf("l")!=-1){if(!jQuery("#buttonShowHideLayoutEditor").prop("checked")){jQuery("#buttonShowHideLayoutEditor").trigger("click")
}}else{if(jQuery("#buttonShowHideLayoutEditor").prop("checked")){jQuery("#buttonShowHideLayoutEditor").trigger("click")}}if(b.indexOf("a")!=-1){if(!jQuery("#buttonToggleAttributes").prop("checked")){jQuery("#buttonToggleAttributes").trigger("click")
}}else{if(jQuery("#buttonToggleAttributes").prop("checked")){jQuery("#buttonToggleAttributes").trigger("click")}}if(b.indexOf("m")!=-1){if(!jQuery("#buttonToggleMethods").prop("checked")){jQuery("#buttonToggleMethods").trigger("click")
}}else{if(jQuery("#buttonToggleMethods").prop("checked")){jQuery("#buttonToggleMethods").trigger("click")}}if(e.indexOf("e")!=-1){if(!jQuery("#buttonShowEditableClassDiagram").prop("checked")){jQuery("#buttonShowEditableClassDiagram").trigger("click")
}}else{if(e.indexOf("c")!=-1){if(!jQuery("#buttonShowGvClassDiagram").prop("checked")){jQuery("#buttonShowGvClassDiagram").trigger("click")
}}else{if(e.indexOf("s")!=-1){if(!jQuery("#buttonShowGvStateDiagram").prop("checked")){jQuery("#buttonShowGvStateDiagram").trigger("click")
}}}}if(d.indexOf("p")!=-1){if(!jQuery("#buttonPhotoReady").prop("checked")){jQuery("#buttonPhotoReady").trigger("click")}}else{if(jQuery("#buttonPhotoReady").prop("checked")){jQuery("#buttonPhotoReady").trigger("click")
}}if(d.indexOf("s")!=-1){if(!jQuery("#buttonManualSync").prop("checked")){jQuery("#buttonManualSync").trigger("click")}}else{if(jQuery("#buttonManualSync").prop("checked")){jQuery("#buttonManualSync").trigger("click")
}}})}});window.onbeforeunload=function(b){var a=new Date();a.setTime(a.getTime()+(30*24*60*60*1000));if(!(Page.getUmpleCode()==="//$?[End_of_model]$?")){document.cookie="filecode="+Page.getFilename()+";expires="+a.toGMTString()+";";
cookie_view="VIEW=";if(jQuery("#buttonShowHideCanvas").prop("checked")){cookie_view+="d"}if(jQuery("#buttonShowHideTextEditor").prop("checked")){cookie_view+="t"
}if(jQuery("#buttonShowHideLayoutEditor").prop("checked")){cookie_view+="l"}if(jQuery("#buttonToggleAttributes").prop("checked")){cookie_view+="a"
}if(jQuery("#buttonToggleMethods").prop("checked")){cookie_view+="m"}if(jQuery("#buttonToggleTransitionLabel").prop("checked")){cookie_view+="r"
}if(jQuery("#buttonToggleGuardLabel").prop("checked")){cookie_view+="g"}cookie_view+=";expires="+a.toGMTString()+";";document.cookie=cookie_view;
cookie_diagram="DIAGRAM=";if(jQuery("#buttonShowEditableClassDiagram").prop("checked")){cookie_diagram+="e"}else{if(jQuery("#buttonShowGvClassDiagram").prop("checked")){cookie_diagram+="c"
}else{if(jQuery("#buttonShowGvStateDiagram").prop("checked")){cookie_diagram+="s"}}}cookie_diagram+=";expires="+a.toGMTString()+";";document.cookie=cookie_diagram
}cookie_pref="PREF=";if(Action.gdprHidden){cookie_pref+="g"}if(jQuery("#buttonPhotoReady").prop("checked")){cookie_pref+="p"}if(jQuery("#buttonManualSync").prop("checked")){cookie_pref+="s"
}cookie_pref+=";expires="+a.toGMTString()+";";document.cookie=cookie_pref};function existSCookie(a){return document.cookie.match("(^|;)\\s*"+a+"\\s*=\\s*([^;]+)")
}function setCookieBeforeClose(a){if(a=="on"){window.onbeforeunload=function(){if(window.randomSurveyRoll!=1){setSurveyCookie(60)}else{if(notToday){setSurveyCookie(1)
}else{if(clickedForMoreSurvey==false&&clickedStartSurvey==false){setSurveyCookie(15)}else{if(clickedForMoreSurvey==true&&clickedStartSurvey==false){setSurveyCookie(30)
}else{setSurveyCookie(60)}}}}}}else{window.onbeforeunload=function(){}}}function groupHideToday(){hideRecruitementMessage();if(document.getElementById("surveyMessage")!=null){document.getElementById("mainSurveySpan").removeChild(document.getElementById("surveyMessage"));
document.getElementById("mainSurveySpan").removeChild(document.getElementById("surveyExtra"))}notToday=true}var clickedForMoreSurvey=false;
var clickedStartSurvey=false;var displayedText=false;var notToday=false;var timeSurveyUp=false;if(existSCookie("surveyCookie")==null&&window.surveyData!=null){if(window.randomSurveyRoll==1){var surveySeen=window.localStorage.getItem("surveyShown");
if(surveySeen==null||surveySeen!=window.surveyData.SurveyURL){if(timeSurvey){clearTimeout(timeSurvey)}var timeSurvey=setTimeout(function(){timeSurveyUp=true
},window.surveyData.MinutesBeforePrompt*60*1000);timeSurvey;var beforeInstance=TabControl.getCurrentHistory().currentIndex;if(!displayedText){document.addEventListener("mouseover",function(){if(TabControl.getCurrentHistory().currentIndex-beforeInstance>window.surveyData.EditsBeforePrompt&&!displayedText&&timeSurveyUp){displaySurvey();
this.removeEventListener("mouseover",arguments.callee)}})}}}setCookieBeforeClose("on")}function setSurveyCookie(a){let currentTime=new Date(Date.now()+a*24*60*60*1000);
document.cookie="surveyCookie=done; expires="+currentTime.toUTCString()+"; path=/;"}function displaySurvey(){displayedText=true;var c=document.getElementById("mainSurveySpan");
if(!c.contains(document.getElementById("surveyMessage"))){var b=document.createElement("span");b.innerHTML='<span><a href="'+window.surveyData.SurveyURL+'" target="umplesurvey" onmouseover="showRecruitementMessage()">'+window.surveyData.InvitationalMessage+"</a></span><br/>";
b.id="surveyMessage";c.appendChild(b);var a=document.createElement("span");a.innerHTML=window.surveyData.RecruitmentText+'<div id="surveyPopUp"><span class="linkToSurvey" onclick="countClicked()"><a href="'+window.surveyData.SurveyURL+'" target="umplesurvey"class="linkToSurvey">Start Survey</a></span><span onclick="groupHideToday()" class="linkToNotSurvey">Not Today</span></div>';
a.id="surveyExtra";c.appendChild(a);a.addEventListener("mouseleave",function(){hideRecruitementMessage()});b.addEventListener("click",function(){countClicked()
});sendToSurveyLog("SurveyRequested")}}function showRecruitementMessage(){clickedForMoreSurvey=true;if(!document.getElementById("surveyExtra").classList.contains("fade-in")){document.getElementById("surveyExtra").classList.remove("fade-outInst");
document.getElementById("surveyExtra").classList.add("fade-in")}}function hideRecruitementMessage(){if(!document.getElementById("surveyExtra").classList.contains("fade-outInst")){document.getElementById("surveyExtra").classList.remove("fade-in");
document.getElementById("surveyExtra").classList.add("fade-outInst")}}function countClicked(){window.localStorage.setItem("surveyShown",window.surveyData.surveyURL);
clickedStartSurvey=true;sendToSurveyLog("SurveyClicked")}function sendToSurveyLog(a){console.log("processing");let recordTime=new Date(Date.now()).toString();
if(a=="SurveyRequested"){jQuery.ajax({url:"umple.php",method:"POST",data:{surveyLogInfo:"\n"+a+" "+recordTime},dataType:"html"}).done(function(){console.log("Success: Files sent!")
}).fail(function(){console.log("An error occurred, the files couldn't be sent!")})}if(a=="SurveyClicked"){jQuery.ajax({url:"umple.php",method:"POST",data:{surveyLogInfo2:"\n"+a+" "+recordTime},dataType:"html"}).done(function(){console.log("Success: Files sent!")
}).fail(function(){console.log("An error occurred, the files couldn't be sent!")})}}UmpleSystem=new Object();UmpleSystem.umpleClasses=[];
UmpleSystem.umpleAssociations=[];UmpleSystem.umpleTransitions=[];UmpleSystem.position=function(){var b=jQuery("#umpleCanvas");var a=Math.ceil(b.offset().left-b.scrollLeft());
var d=Math.ceil(b.offset().top-b.scrollTop());var c=new UmplePosition(a,d,0,0);return c};UmpleSystem.findIn=function(c,b){if(c==null){return null
}for(var d=0;d<c.length;d++){var a=c[d];if(a.id==b){return a}}return null};UmpleSystem.find=function(a){return UmpleSystem.findIn(this.umpleClasses,a)
};UmpleSystem.findAssociation=function(b){var a=UmpleSystem.findIn(this.umpleAssociations,b);return a};UmpleSystem.createAssociation=function(a,d,e,c){var b=new UmpleAssociation();
b.id=this.nextAssociationId();b.setClasses(a,d);b.setOffsetOnePosition(e);b.setOffsetTwoPosition(c);b.setDefaultMultiplicities();b.setDefaultRoles();
b.setName(b.getName());if(a==d){b.adjustReflexiveEndpoints()}else{b.trimOverlap()}return this.addAssociation(b)};UmpleSystem.createTransition=function(c,b){var a=new UmpleTransition();
a.id=this.nextTransitionId();a.setStates(fromStateId,toStateId);a.setDefaultEvent();a.setName(a.getName());return this.addTransition(a)
};UmpleSystem.createGeneralization=function(a,c){var b=UmpleSystem.find(a);b.extendsClass=c;UmpleSystem.updateClass(b)};UmpleSystem.addAssociation=function(a){this.umpleAssociations.push(a);
var b=this.redrawAssociation(a);return a};UmpleSystem.addTransition=function(a){this.umpleTransitions.push(a);var b=this.redrawTransition(a);
return a};UmpleSystem.createClass=function(b){var a=new UmpleClass();a.id=this.nextId("NewClass");a.name=a.id;a.position.set(b.x-UmpleSystem.position().x,b.y-UmpleSystem.position().y,UmpleClassFactory.defaultSize.width,UmpleClassFactory.defaultSize.height);
var c=this.addClass(a);UmpleSystem.redrawGeneralizationsTo(c);return c};UmpleSystem.addClass=function(a){this.umpleClasses.push(a);this.updateClass(a);
var b=jQuery("#"+a.id);b.click(Action.classClicked);b.mouseover(function(c){Action.classHover(c,true)});b.mouseout(function(c){Action.classHover(c,false)
});b.mousedown(function(c){setTimeout(function(){Action.classMouseDown(c)},400)});b.mouseup(function(c){Action.classMouseUp(c)});if(!Page.readOnly){b.draggable({containment:"parent",stop:function(c,d){DiagramEdit.classMoved(c.target)
}})}jQuery(".ui-icon-gripsmall-diagonal-se").removeClass("ui-icon-gripsmall-diagonal-se");return a};UmpleSystem.replaceClass=function(f){for(var c=0;
c<this.umpleClasses.length;c++){var d=this.umpleClasses[c];if(d.id==f.id){var b="#"+d.id;var g=b+"_generalization";var e=jQuery(b).get();
var a=jQuery(g).get();jQuery(e).attr("id",f.id);if(a!=undefined){jQuery(a).attr("id",f.id+"_generalization");jQuery(a).remove()}this.umpleClasses[c]=f;
this.updateClass(this.umpleClasses[c]);return}}};UmpleSystem.renameClass=function(d,a,g){var h=UmpleSystem.find(d);var j="#"+d;var c=j+"_generalization";
g=this.nextId(g);h.id=g;h.name=g;h.oldname=a;jQuery(j).attr("id",h.id);if(jQuery(c).get()!=undefined){jQuery(c).attr("id",h.id+"_generalization")
}for(var e=0;e<this.umpleAssociations.length;e++){var f=this.umpleAssociations[e];if(f.classOneId==a){f.classOneId=h.id}if(f.classTwoId==a){f.classTwoId=h.id
}}for(var e=0;e<this.umpleClasses.length;e++){var b=this.umpleClasses[e];if(b.extendsClass==a){b.extendsClass=g;this.updateClass(b)}}UmpleSystem.updateClass(h);
return h};UmpleSystem.replaceAssociation=function(a){for(var b=0;b<this.umpleAssociations.length;b++){var c=this.umpleAssociations[b];
if(c.id==a.id){this.umpleAssociations[b]=a;index=b}}this.redrawAssociation(a);return};UmpleSystem.updatePosition=function(a,c,b){a.position.x=c-UmpleSystem.position().x;
a.position.y=b-UmpleSystem.position().y;UmpleSystem.redrawAssociationsFor(a);UmpleSystem.redrawGeneralizationsTo(a);UmpleSystem.updateClass(a)
};UmpleSystem.updateClass=function(h){var f=h.drawable();var g=f[0];var b=f[1];var c=jQuery("#"+Page.umpleCanvasId());var a=jQuery("#"+h.id);
c.append(g);if(b!=null){for(var e=0;e<b.length;e++){c.append(b[e])}}UmpleSystem.redraw(h);var d=2;var j=false;if(a.width()>h.position.width+d){h.position.width=a.width();
j=true}if(a.height()>h.position.height+d){h.position.height=a.height();j=true}if(j){UmpleSystem.redraw(h)}jQuery(".ui-icon-gripsmall-diagonal-se").removeClass("ui-icon-gripsmall-diagonal-se")
};UmpleSystem.redrawAssociationsFor=function(a){for(var c=0;c<this.umpleAssociations.length;c++){var b=this.umpleAssociations[c];if(b.contains(a)){UmpleSystem.redrawAssociation(b)
}}};UmpleSystem.redrawAssociation=function(b){var c="#"+b.id;var a="#"+Page.umpleCanvasId();var d=null;d=b.drawable();jQuery(a).append(d);
if(!Page.isPhotoReady()){jQuery(c).click(Action.associationClicked);jQuery(c).mouseover(function(e){Action.associationHover(e,true)});
jQuery(c).mouseout(function(e){Action.associationHover(e,false)});UmpleSystem.setDragableAssociationAnchor(b,0);UmpleSystem.setDragableAssociationAnchor(b,1)
}return d};UmpleSystem.redrawTransition=function(a){var c="#"+a.id;var b="#"+Page.umpleCanvasId();var d=null;d=a.drawable();jQuery(b).append(d);
if(!Page.isPhotoReady()){jQuery(c).click(Action.transitionClicked)}return d};UmpleSystem.redrawGeneralizationsTo=function(d){for(var c=0;
c<this.umpleClasses.length;c++){var a=this.umpleClasses[c];if(a.extendsClass==d.id){this.updateClass(a)}else{if(a.interfaces.length>0){for(var b=0;
b<a.interfaces.length;b++){if(a.interfaces[b]==d.id){this.updateClass(a)}}}}}};UmpleSystem.update=function(){for(var a=0;a<this.umpleClasses.length;
++a){var g=this.umpleClasses[a];g.position.height=28;if(Page.showAttributes){g.position.height+=17*(g.attributes.size())}if(Page.showMethods){g.position.height+=17*(g.methods.size())
}UmpleSystem.updateClass(g)}for(var a=0;a<this.umpleAssociations.length;++a){var f=UmpleSystem.find(this.umpleAssociations[a].classOneId);
var h=this.umpleAssociations[a].offsetOnePosition.x+f.position.x+UmpleSystem.position().x;var d=this.umpleAssociations[a].offsetOnePosition.y+f.position.y+UmpleSystem.position().y;
var k=Action.associationSnapClassReady(h,d,f);var e=UmpleSystem.find(this.umpleAssociations[a].classTwoId);h=this.umpleAssociations[a].offsetTwoPosition.x+e.position.x+UmpleSystem.position().x;
d=this.umpleAssociations[a].offsetTwoPosition.y+e.position.y+UmpleSystem.position().y;var j=Action.associationSnapClassReady(h,d,e);var c=new UmplePosition(k[0],k[1],0,0);
var b=new UmplePosition(j[0],j[1],0,0);this.umpleAssociations[a].setOffsetOnePosition(c);this.umpleAssociations[a].setOffsetTwoPosition(b);
UmpleSystem.redrawAssociation(this.umpleAssociations[a])}for(var a=0;a<this.umpleClasses.length;++a){UmpleSystem.trimOverlappingAssociations(this.umpleClasses[a])
}};UmpleSystem.redraw=function(h){var d=h.position.x+UmpleSystem.position().x;var c=h.position.y+UmpleSystem.position().y;var j="#"+h.id;
var b=j+"_generalization";var e=j+"_width";var g=j+"_height";var f=new Object();f.top=c;f.left=d;jQuery(j).offset(f);jQuery(e).width(h.position.width);
jQuery(g).height(h.position.height);if(!Page.isPhotoReady()){var a=jQuery(b).get();if(a!=undefined){jQuery(b).click(Action.generalizationClicked);
jQuery(b).mouseover(function(k){Action.generalizationHover(k,true)});jQuery(b).mouseout(function(k){Action.generalizationHover(k,false)
})}}this.redrawAssociationsFor(h)};UmpleSystem.trimOverlappingAssociations=function(a){Page.showLayoutLoading();for(var c=0;c<UmpleSystem.umpleAssociations.length;
c++){var b=UmpleSystem.umpleAssociations[c];if(b.contains(a)){var e=UmplePositionFactory.copy(b.offsetOnePosition);var d=UmplePositionFactory.copy(b.offsetTwoPosition);
if(b.isReflexive()){b.adjustReflexiveEndpoints()}else{b.trimOverlap()}if(!e.equalsIgnoreSize(b.offsetOnePosition)||!d.equalsIgnoreSize(b.offsetTwoPosition)){Page.showLayoutLoading();
UmpleSystem.redrawAssociation(b);var f=Json.toString(b);DiagramEdit.updateUmpleText({actionCode:format("action=editAssociation&actionCode={0}",f),codeChange:false})
}}}if(UmpleSystem.umpleAssociations.length==0){Action.setjustUpdatetoSaveLater(false)}Page.hideLoading()};UmpleSystem.updateAnchor=function(c,d){var e="#"+c.id;
var b=e+"_anchor"+d;var f=e+"_hover"+d;var a="";switch(d){case 0:a="left top";break;case 1:a="left center";break;case 2:a="left bottom";
break;case 3:a="center bottom";break;case 4:a="right bottom";break;case 5:a="right center";break;case 6:a="right top";break;case 7:a="center top";
break}jQuery(b).show();jQuery(f).show();jQuery(b).position({my:"center",at:a,of:e});jQuery(f).position({my:"center",at:a,of:e});jQuery(b).hide();
jQuery(f).hide()};UmpleSystem.setDragableAssociationAnchor=function(c,d){if(Page.readOnly){return}if(c.isReflexive()){var a="#"+c.id+"_anchor"+d;
var b=d==0?c.classOneId:c.classTwoId;jQuery(a).draggable({drag:function(e,f){DiagramEdit.reflexiveAssociationMoving("#"+e.target.id)},stop:function(e,f){DiagramEdit.associationMoved("#"+e.target.id)
},cursor:"pointer",snap:"#"+b,snapTolerance:5,containment:"#"+b,zIndex:1})}else{var a="#"+c.id+"_anchor"+d;var b=d==0?c.classOneId:c.classTwoId;
jQuery(a).draggable({drag:function(e,f){DiagramEdit.regularAssociationMoving("#"+e.target.id)},stop:function(e,f){DiagramEdit.associationMoved("#"+e.target.id)
},cursor:"pointer",snap:"#"+b,snapTolerance:5,containment:"#"+b,zIndex:1})}};UmpleSystem.updatingSize=function(a,c,b){a.position.width=c;
a.position.height=b;UmpleSystem.redraw(a)};UmpleSystem.removeClass=function(b){for(var d=0;d<this.umpleClasses.length;d++){var a=this.umpleClasses[d];
if(a.id==b){this.umpleClasses.splice(d,1);var c="#"+b;var e=c+"_generalization";jQuery(c).remove();jQuery(e).remove();return a}}return null
};UmpleSystem.removeAssociation=function(a){for(var c=0;c<this.umpleAssociations.length;c++){var b=this.umpleAssociations[c];if(b.id==a){this.umpleAssociations.splice(c,1);
var d="#"+a;jQuery(d).remove();return b}}return null};UmpleSystem.removeTransition=function(b){for(var c=0;c<this.umpleAssociations.length;
c++){var a=this.umpleAssociations[c];if(a==b){this.umpleTransitions.splice(c,1);var d="#"+b;jQuery(d).remove();return a}}return null};
UmpleSystem.removeGeneralization=function(b){var e="#"+b;jQuery(e).remove();var d=b.replace("_generalization","");var a=UmpleSystem.find(d);
a.extendsClass=null;var c=new UmpleGeneralization();c.childId=a.id;c.parentId=a.extendsClass;return c};UmpleSystem.redrawCanvas=function(){UmpleSystem.merge(UmpleSystem)
};UmpleSystem.merge=function(a){UmpleSystem.mergeClasses(a);UmpleSystem.mergeAssociations(a)};UmpleSystem.mergeClasses=function(d){if(d==null){while(this.umpleClasses.length>0){this.removeClass(this.umpleClasses[0].id)
}return}for(var b=0;b<this.umpleClasses.length;b++){var a=this.umpleClasses[b];var e=this.findIn(d.umpleClasses,a.id);if(e==null){b-=1;
this.removeClass(a.id)}else{this.replaceClass(UmpleClassFactory.create(e))}}for(var b=0;b<d.umpleClasses.length;b++){var e=d.umpleClasses[b];
var c=this.find(e.id);if(c==null){this.addClass(UmpleClassFactory.create(e))}}for(var b=0;b<this.umpleClasses.length;b++){var a=this.umpleClasses[b];
if(a.extendsClass!=null||a.interfaces.length>0){this.updateClass(a)}}};UmpleSystem.mergeAssociations=function(e){if(e==null){while(this.umpleAssociations.length>0){this.removeAssociation(this.umpleAssociations[0].id)
}return}for(var c=0;c<this.umpleAssociations.length;c++){var b=this.umpleAssociations[c];var a=this.findIn(e.umpleAssociations,b.id);
if(a==null){c-=1;this.removeAssociation(b.id)}else{this.replaceAssociation(UmpleAssociationFactory.create(a))}}for(var c=0;c<e.umpleAssociations.length;
c++){var d=this.findAssociation(e.umpleAssociations[c].id);if(d==null){var a=UmpleAssociationFactory.create(e.umpleAssociations[c]);this.addAssociation(a)
}}};UmpleSystem.nextId=function(f){var d="umpleElement_";var b=d+"0";if(typeof(f)!="undefined"){d=f;b=f}var e=false;var a=0;while(a<100&&!e){if(a>0){b=d+a
}e=true;for(var c=0;c<this.umpleClasses.length;c++){if(this.umpleClasses[c].id==b){e=false;a+=1;break}}if(e){return b}}return""};UmpleSystem.nextAssociationId=function(f){var d="umpleAssociation_";
var b=d+"0";if(typeof(f)!="undefined"){d=f;b=f}var e=false;var a=0;while(a<100&&!e){if(a>0){b=d+a}e=true;for(var c=0;c<this.umpleAssociations.length;
c++){if(this.umpleAssociations[c].id==b){e=false;a+=1;break}}if(e){return b}}return""};UmpleSystem.nextTransitionId=function(f){var d="umpleTransition_";
var b=d+"0";if(typeof(f)!="undefined"){d=f;b=f}var e=false;var a=0;while(a<100&&!e){if(a>0){b=d+a}e=true;for(var c=0;c<this.umpleTransitions.length;
c++){if(this.umpleTransitions[c].id==b){e=false;a+=1;break}}if(e){return b}}return""};TabControl=new Object();TabControl.maxTabs=10;TabControl.maxNameLength=32;
TabControl.defaultTabName="Untitled";TabControl.showHideKey="showUmpleTabs";TabControl.requestQueue=[];TabControl.remoteDelim="%NAME:CONTENT:DELIM%";
TabControl.illegalNameRegxp=/[\/\?<>\\:\*\|":]/g;TabControl.controlNameRegxp=/[\x00-\x1f\x80-\x9f]/g;TabControl.reservedNameRegxp=/^\.+$/;
TabControl.windowsReservedNameRegxp=/^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;TabControl.windowsTrailingRegxp=/[\. ]+$/;TabControl.nameReplacement="_";
TabControl.init=function(){jQuery("#tabs").sortable({axis:"x",helper:"clone",items:"li:not(.unsortable)",update:TabControl.saveActiveTabs});
jQuery.fn.selectText=function(){var d=document;var b=this[0];if(d.body.createTextRange){var a=document.body.createTextRange();a.moveToElementText(b);
a.select()}else{if(window.getSelection){var c=window.getSelection();var a=document.createRange();a.selectNodeContents(b);c.removeAllRanges();
c.addRange(a)}}};TabControl.reset();if(!localStorage[TabControl.showHideKey]){TabControl.hideTabs()}TabControl.loadAllTabs()};TabControl.showTabs=function(){jQuery("#toggleTabsButton").html("Hide Tabs");
jQuery("#tabControl").show();localStorage[TabControl.showHideKey]=true};TabControl.hideTabs=function(){jQuery("#toggleTabsButton").html("Show Tabs");
jQuery("#tabControl").hide();delete localStorage[TabControl.showHideKey]};TabControl.saveActiveTabs=function(){var a=[];jQuery(".tabname").each(function(){a.push(jQuery(this).text())
});TabControl.addToRequestQueue("scripts/tab_control.php",function(b){},format("index=1&&model={0}&&orderedTabNames={1}",Page.getModel(),encodeURIComponent(JSON.stringify(a))))
};TabControl.getActiveTabId=function(){return(TabControl.activeTab)?TabControl.activeTab.id:null};TabControl.isHidden=function(){return jQuery("#tabControl").is(":hidden")
};TabControl.reset=function(){TabControl.activeTab=null;TabControl.tabs={};TabControl.nextTabId=1;TabControl.requestQueue=[];TabControl.queuedTabs=0;
TabControl.reservedNames={model:true}};TabControl.sanitizeName=function(a){var b=a.replace(TabControl.illegalNameRegxp,TabControl.nameReplacement).replace(TabControl.controlNameRegxp,TabControl.nameReplacement).replace(TabControl.reservedNameRegxp,TabControl.nameReplacement).replace(TabControl.windowsReservedNameRegxp,TabControl.nameReplacement).replace(TabControl.windowsTrailingNameRegxp,TabControl.nameReplacement);
return b};TabControl.findNextAvailableTabName=function(c){var b=c;var a=2;while(TabControl.reservedNames.hasOwnProperty(b)){b=c+a++}return b
};TabControl.extractNameFromCode=function(b){var c=/class[\s]*([a-zA-Z_$][a-zA-Z_$0-9]*)[\s]*{/g;var a=c.exec(b);if(a){return a[1]}};
TabControl.createTab=function(b,c,k){if(Page.readOnly&&b=="afterTabControlInit"){return}else{if(b=="afterTabControlInit"){b=null}}if(Object.keys(TabControl.tabs).length==TabControl.maxTabs){return
}var g=TabControl.nextTabId++;var a=!b?TabControl.defaultTabName:b;if(c!=null){if(!b){var d=TabControl.extractNameFromCode(c);if(d){a=d
}}}else{c=Page.modelDelimiter}var h=TabControl.findNextAvailableTabName(a);TabControl.tabs[g]={name:h,id:g,history:History.getInstance(g),nameIsEphemeral:b==null};
TabControl.reservedNames[h]=true;TabControl.saveTab(g,c);var j=jQuery("#createTabBtn");var f=jQuery('<li id="tab'+g+'" class=""><a class="tabname" title="Double-click to rename tab" id="tabName'+g+'" href="javascript:TabControl.selectTab(\''+g+"');\">"+h+'</a><button class="tabbtn" onclick="javascript:TabControl.deleteTab(\''+g+"');\">&times;</button></li>");
f.insertBefore(j);if(Object.keys(TabControl.tabs).length==TabControl.maxTabs){j.hide()}var e=TabControl.getTabNameDiv(g);handleNameEdit=function(){e.attr("contentEditable",false);
if(window.getSelection){window.getSelection().removeAllRanges()}else{if(document.selection){document.selection.empty()}}var m=e.text();
var n=TabControl.tabs[g].name;if(m===n){return}var o=false;if(TabControl.sanitizeName(m)!==m){alert("The name contains invalid characters. Please try again.")
}else{if(m.length===0||m.length>TabControl.maxNameLength){alert("Name must be between 1 and "+TabControl.maxNameLength+" characters long. Please try again.")
}else{if(TabControl.reservedNames.hasOwnProperty(m)){alert("This name is already in use. Please try again.")}else{o=true}}}if(o){e.text(m);
TabControl.renameTab(g,m)}else{e.text(n);e.selectText();e.attr("contentEditable",true)}};e.bind("dblclick",function(){e.attr("contentEditable",true);
e.focus();e.selectText()}).blur(handleNameEdit).keypress(function(o){var n=13;var m=8;if(o.which==n){e.blur()}if(o.which!=m&&e.text().length>=TabControl.maxNameLength){o.preventDefault()
}});if(!k){TabControl.saveActiveTabs()}TabControl.selectTab(g)};TabControl.saveTab=function(c,e){var b=TabControl.getTabFilename(TabControl.tabs[c].name);
var d=Page.getModel();localStorage[b]=e;if(String(Page.getFilename()).indexOf("tasks")!==-1){b="tasks/"+b;d="tasks/"+d}var a=e.replace(/&/g,"%26").replace(/\+/g,"%2B");
TabControl.addToRequestQueue("scripts/compiler.php",TabControl.saveTabCallback(c),format("save=1&&lock=1&&model={2}&&umpleCode={0}&&filename={1}",a,b,d))
};TabControl.saveTabCallback=function(a){return function(b){if(TabControl.tabs[a]){TabControl.tabs[a].filename=b.responseText}}};TabControl.selectTab=function(b){if(TabControl.activeTab){if(b==TabControl.activeTab.id){return
}var d=TabControl.getTabDiv(TabControl.activeTab.id);d.removeClass("selected");TabControl.saveTab(TabControl.activeTab.id,Page.getUmpleCode())
}TabControl.activeTab=TabControl.tabs[b];var c=TabControl.getTabDiv(b);c.addClass("selected");TabControl.getCurrentHistory().setButtons();
var a=TabControl.getTabFilename(TabControl.activeTab.name);Page.setUmpleCode(localStorage[a]);Action.setCaretPosition(0);Action.updateLineNumberDisplay()
};TabControl.loadAllTabs=function(){TabControl.addToRequestQueue("scripts/tab_control.php",TabControl.loadAllTabsCallback,format("list=1&&model={0}",Page.getModel()))
};TabControl.loadAllTabsCallback=function(a){var c=a.responseText.split("<br />");var b=false;c.map(function(g){if(!g){return}var f=g.split(TabControl.remoteDelim);
var d=f[0];var e=f[1];if(!d||d==="model"){return}if(!b){TabControl.hideTabs();b=true}TabControl.createTab(d,e,true)});if(!b){TabControl.createTab(null,Page.getUmpleCode())
}else{TabControl.showTabs()}};TabControl.deleteTab=function(d){if(Page.readOnly){return}if(Object.keys(TabControl.tabs).length>1){var e=TabControl.getTabNameDiv(d);
var b=confirm("Are you sure you want to remove the file "+e.text()+".ump from the model? If you answer OK, the code will be deleted; this cannot be undone, so consider answering Cancel and saving it first.");
if(!b){return}var f=d==TabControl.activeTab.id;TabControl.getTabDiv(d).remove();var e=TabControl.tabs[d].name;var c=TabControl.tabs[d].filename;
delete TabControl.reservedNames[e];delete TabControl.tabs[d];delete localStorage[c];var a=jQuery("#createTabBtn");a.show();TabControl.addToRequestQueue("scripts/tab_control.php",function(g){},format("delete=1&&model={0}&&name={1}",Page.getModel(),e));
if(f){TabControl.activeTab=null;TabControl.selectTab(Object.keys(TabControl.tabs)[0])}TabControl.saveActiveTabs()}};TabControl.renameTab=function(c,b,a){if(Page.readOnly){return
}if(TabControl.reservedNames.hasOwnProperty(b)){return}var f=TabControl.tabs[c].name;if(f==b){return}var d=TabControl.getTabFilename(f);
var e=TabControl.getTabFilename(b);localStorage[e]=localStorage[d];delete localStorage[d];if(a){TabControl.getTabNameDiv(c).text(b)}TabControl.tabs[c].nameIsEphemeral=false;
TabControl.addToRequestQueue("scripts/tab_control.php",TabControl.renameTabCallback(c,b),format("rename=1&&model={0}&&oldname={1}&&newname={2}",Page.getModel(),f,b));
TabControl.saveActiveTabs()};TabControl.renameTabCallback=function(b,a){return function(c){delete TabControl.reservedNames[TabControl.tabs[b].name];
TabControl.reservedNames[a]=true;TabControl.tabs[b].name=a}};TabControl.getTabFilename=function(a){return format("{0}/{1}.ump",Page.getModel(),a)
};TabControl.getTabNameDiv=function(a){return jQuery("#tabName"+a)};TabControl.getTabDiv=function(a){return jQuery("#tab"+a)};TabControl.addToRequestQueue=function(c,d,b){var a={endpoint:c,callback:TabControl.getQueuedCallback(d),parameters:b};
TabControl.requestQueue.push(a);if(TabControl.requestQueue.length===1){jQuery(".bookmarkableUrl").addClass("disabled");Ajax.sendRequest(a.endpoint,TabControl.getQueuedHeadCallback(a.callback),a.parameters)
}};TabControl.getQueuedHeadCallback=function(a){return function(b){TabControl.requestQueue.shift();a(b)}};TabControl.getQueuedCallback=function(a){return function(b){var c=TabControl.requestQueue.shift();
a(b);if(c){if(c.hasOwnProperty("endpoint")){Ajax.sendRequest(c.endpoint,c.callback,c.parameters)}else{c.callback()}}else{if(Page.modelLoadingCount===0&&Page.layoutLoadingCount===0&&Page.canvasLoadingCount===0){jQuery(".bookmarkableUrl").removeClass("disabled")
}}}};TabControl.addCallbackToRequestQueue=function(b){var a={callback:TabControl.getQueuedCallback(b)};TabControl.requestQueue.push(a);
if(TabControl.requestQueue.length===1){jQuery(".bookmarkableUrl").addClass("disabled");TabControl.getQueuedHeadCallback(a.callback())
}};TabControl.getCurrentHistory=function(){if(!TabControl.activeTab){return History.getInstance()}return TabControl.tabs[TabControl.activeTab.id].history
};TabControl.useActiveTabTo=function(a){if(!TabControl.activeTab){return function(){}}return a.bind(null,TabControl.activeTab.id)};var ToolTips={};
var undo,redo,toggleTextEditor;if(navigator.appVersion.indexOf("Mac")!=-1){undo="cmd-z";redo="cmd-shift-z";toggleTextEditor="ctrl-t"}else{undo="ctrl-z";
redo="ctrl-y";toggleTextEditor="ctrl-alt-shift-t"}ToolTips.tooltipEntries={ttSaveBookmark:["li","Click to bookmark this model"],ttSaveModel:["li","Click to save this model for ongoing editing.<br/><br/>After clicking this, you will need to use your browser's functionality to copy or bookmark the newly-created semi-permanent URL.<br/><br/>As you make further edits at the new URL, they will be instantly saved. You will be able to come back any time to continue editing.<br/><br/>The URL and its model will continue to be available for up to a year from the last time you edited it.<br/><br/>Do not use the new URL as a safe backup: If you (or anyone else who you give the URL) modifies or deletes the text, then your work would be lost."],buttonCopyClip:["li","Click to copy the code to the clipboard<br/><br/>After doing this you can paste the result into a .ump file on your computer. Note that this will copy diagram layout information which is normally hidden, as well as the Umple text."],buttonCopy:["li","Click to open a window containing the plain source for this model"],buttonCopyCommandLine:["li","Click to copy a script to execute your model on the Linux or Mac command line.<br/><br/>After doing this, paste the result into a terminal.<br/><br/>The script will create a new directory under ~/tmp, create the umple file there as test.ump. compile the Umple and resulting Java (and suggest for you how to run the Java if there is a main program present).<br/><br/>Before doing this you need to install the Java development environment and an 'umple' script using a tool such as homebrew. The Umple script should run 'java -jar umple.jar' with a .ump file as an argument  </br><b>Shortcut: [ctrl-o]</b>"],buttonCopyEncodedURL:["li","Click to view a url encoded with this model.<br/><br/>This only works for small models with about 5 classes or less.<br/><br/>You can send people that URL so they can recreate your model in their browser, or you can use this to embed a small example in a presentation file (such as PowerPoint)."],buttonCopyLocalBrowser:["li","Click to save the Umple text from the current tab in your browser local storage for later reloading using Load from Browser below.<br/><br/>This can be useful to transfer text to a different browser tab, or temporarily stash some work you may want to come back to. But it should not be used for a permanent backup."],buttonLoadLocalBrowser:["li","Click to load the Umple text from what you had previously saved in this browser (above).<br/><br/>This operation can be undone."],buttonDownloadFiles:["li","Click to download your entire model, one .ump file per Umple tab.<br/><br/>This is a two-step process. After you click this, the zip file will be created and a link will appear below; you must click on that link to actually complete the download.<br/><br/>This is the best way to safely back up your work to your own computer."],buttonCreateTask:["li","Create a modeling task for participants to try.</br>You will be able to give them some instructions. The model currently appearing here will be their starting point. The instructions could be requirements to model, or changes to make. This can be for an experiment or a course assignment."],buttonLoadTask:["li","Load a model and a set of instructions that have been created by someone running an experiment or a teacher of a course. You need to enter the task name that the person gave you."],buttonRequestAllZip:["li","Create a zip file to download, containing all submissions for this task."],ttDropboxSaver:["li","Click to save your model to dropbox"],ttShowRefreshUmpleCompletely:["li","Click to erase your work and completely restart UmpleOnline.<br/><br/>Use this only if UmpleOnline gets into a state where things seem messed up. After doing this you will NOT be able to use the undo command to restore the model. The text and diagrams will be permanently erased. You should select 'Download Files' above first to back up your work.<br/><br/>For safety, this is a two-step process: A confirmation link will appear below that you must click on after you click on this."],ttLoadBlankModel:["li","Click to load a blank model.<br/><br/>This can be undone using the undo command in Tools. This is the best way to start new work, but you may want to download your files first (above) to back them up."],ttDropboxChooser:["li","Click to load an example from dropbox"],buttonAddClass:["li","Click the diagram to add a class </br><b>Shortcut: [c]</b>"],buttonAddAssociation:["li","Click on two classes to create an association </br><b>Shortcut: [a]</b>"],buttonAddGeneralization:["li","Click on two classes to create a generalization </br><b>Shortcut: [g]</b>"],buttonDeleteEntity:["li","Click on a class, association, or generalization to delete that entity </br><b>Shortcut: [DEL]</b>"],buttonUndo:["li","Click to undo the most recent action </br><b>Shortcut: ["+undo+"]</b>"],buttonRedo:["li","Click to redo the most recent undone action </br><b>Shortcut: ["+redo+"]</b>"],buttonReindent:["li","Click this to adjust the text so that blocks marked by { and } have their contents indented by 2 spaces"],buttonSyncDiagram:["li","Click to sync the diagram and the text"],ttGeneratedCodeType:["li","Choose the language or diagram to generate"],ttGenerateCode:["li","Click this button to generate the above code or diagram"],ttExecuteCode:["li","Click this button to execute the above code"],ttShowHideCanvas:["li","Show/Hide the diagram </br><b>Shortcut: [ctrl+d]</b>"],ttShowHideTextEditor:["li","Show/Hide the text editor </br><b>Shortcut: ["+toggleTextEditor+"]"],ttShowHideLayoutEditor:["li","Show/Hide the layout editor"],ttToggleAttributes:["li","Show/Hide attributes in class diagrams </br><b>Shortcut: [shift+ctrl+a]</b>"],ttToggleMethods:["li","Show/Hide methods in class diagrams </br><b>Shortcut: [ctrl+m]</b>"],ttToggleTraits:["li","Show/Hide traits; when selected any traits and their relationships are explicitly shown; when unselected, traits are merged into their client classes </br><b>Shortcut: [ctrl+r]</b>"],ttToggleActions:["li","Show/Hide actions in state diagrams (hide to simplify)"],ttToggleGuards:["li","Show/Hide guards in state diagrams (hide to simplify)"],ttToggleTransitionLabels:["li","Show/Hide transition labels in state diagrams (t1, t2 etc.) to allow reference"],ttToggleGuardLabels:["li","Show/Hide guard labels on the state diagrams (g1, g2 etc.) to allow reference"],SHT_button:["a","Show/Hide the text editor - <b>"+toggleTextEditor+"</b>"],SHD_button:["a","Show/hide diagram pane on right - <b> ctrl-D</b>"],SHA_button:["a","Show/hide attributes in class diagrams - <b>shift-ctrl-A</b>"],SHM_button:["a","Show/hide methods in class diagrams - <b>ctrl-M</b>"],ttShowEditableClassDiagram:["li","Display a graphically editable class diagram </br><b>Shortcut: [ctrl+e]</b>"],ttShowJointJSClassDiagram:["li","Display a graphically editable class diagram displayed using joint.js </br><b>Shortcut: [ctrl+j]</b>"],ttShowGvClassDiagram:["li","Display a class diagram rendered using GraphViz </br><b>Shortcut: [ctrl+g]</b>"],ttShowGvStateDiagram:["li","Display a state diagram rendered using GraphViz</br><b>Shortcut: [ctrl+s]</b>"],ttShowStructureDiagram:["li","Display a graphically editable composite structure diagram </br><b>Shortcut: [ctrl+l]</b>"],ttShowGvFeatureDiagram:["li","Display a feature diagram rendered using GraphViz </br>"],ECD_button:["a","Editable class diagram - <b>ctrl-E</b>"],GCD_button:["a","Graphviz class diagram - <b>ctrl-G</b>"],SD_button:["a","State diagram - <b>ctrl-S</b>"],ttPhotoReady:["li","Remove editing handles from diagram"],ttManualSync:["li","Stop the diagram from syncing automatically"],ttAllowPinch:["li","When active on GraphViz diagrams, this allows two-fingered gestures to zoom the diagram in or out to make it have any desired resolution and size (but prevents the entire browser from being zoomed in this manner)"],ttYumlImage:["li","Generate a class diagram using Yuml in another window"]};
ToolTips.initTooltips=function(){for(var a in this.tooltipEntries){if(a=="SD_button"||a=="GCD_button"||a=="ECD_button"||a=="SHT_button"||a=="SHD_button"||a=="SHA_button"||a=="SHM_button"){jQuery("#"+a).tooltip({items:this.tooltipEntries[a][0],content:this.tooltipEntries[a][1],show:{delay:1000},position:{my:"left top+25%",of:"#"+a}})
}else{jQuery("#"+a).tooltip({items:this.tooltipEntries[a][0],content:this.tooltipEntries[a][1],show:{delay:1000},position:{my:"right",at:"left",of:"#"+a}})
}}dropDownTooltips={exampleType:["li","Choose an example type to load"],itemLoadExamples:["li","Choose a class diagram example to load. * means executable, since it has a main program"],itemLoadExamples2:["li","Choose a state diagram example to load. * means executable, since it has a main program"],itemLoadExamples3:["li","Choose a composite structure diagram example to load"]};
for(a in dropDownTooltips){jQuery("#"+a).tooltip({items:dropDownTooltips[a][0],content:dropDownTooltips[a][1],show:{delay:1000},position:{my:"center+15% bottom",at:"top",of:"#"+a}})
}jQuery(document).tooltip({show:{delay:1000}})};UmpleTransitionFactory=new Object();UmpleTransitionFactory.create=function(b){var a=new UmpleTransition();
a.id=b.id;a.fromStateId=b.fromStateId;a.toStateId=b.toStateId;a.name=b.name;a.eventName=b.eventName;return a};function UmpleTransition(){this.id=null;
this.fromStatePosition=null;this.toStatePosition=null;this.fromStateId;this.toStateId;this.name="";this.eventName="";this.color="black";
this.setStates=function(a,b){this.fromStateId=a;this.toStateId=b};this.setDefaultEvent=function(){this.eventName="event1"};this.setName=function(a){this.name=a
};this.getName=function(){return this.name};this.getElementId=function(){return this.id==null?"newtransition":this.id};this.getState=function(a){return a==0?UmpleSystem.find(this.fromStateId):UmpleSystem.find(this.toStateId)
}}var ObjectsUtil={objects:{},parentCalls:{},declare:function(D,B,q){if(ObjectsUtil.objects[D]){return}this.parentCalls[D]={};ObjectsUtil.objects[D]=function(){ObjectsUtil.objects[D].prototype.constructor.apply(this,arguments)
};var p=[];for(var w=0;w<B.length;w++){p.push(B[w])}var C=[];for(var w=0;w<p.length;w++){var v=p[w];var x=ObjectsUtil.get(v);if(typeof x!=="function"){continue
}var y=x.prototype;var A=y.constructor;if(A){C.push(A)}for(var s in y){if(s!=="constructor"){var u=y[s];if(typeof u==="function"){if(!this.parentCalls[D][s]){this.parentCalls[D][s]=[]
}this.parentCalls[D][s].push(u)}else{ObjectsUtil.objects[D].prototype[s]=u}}else{}}}ObjectsUtil.objects[D].prototype.className=D;var r;
for(var s in q){if(s==="constructor"){r=q[s]}else{ObjectsUtil.objects[D].prototype[s]=q[s]}}var t=this.parentCalls[D];for(var s in t){if(!ObjectsUtil.objects[D].prototype[s]){var z=t[s];
if(z.length>0){ObjectsUtil.objects[D].prototype[s]=z[0]}}}ObjectsUtil.objects[D].prototype.constructor=function(){for(var a=0;a<C.length;
a++){C[a].apply(this,arguments)}if(r){r.apply(this,arguments)}}},superCall:function(k,h,f){var j=this.parentCalls[j.className];if(j){for(var g=0;
g<j.length;g++){j[g].call(k,f)}}},define:function(c,d){if(ObjectsUtil.objects[c]){return}ObjectsUtil.objects[c]=d;return d},get:function(b){return ObjectsUtil.objects[b]
},newInstance:function(g,h){var f=new ObjectsUtil.objects[g](h);if(typeof h!=="string"){for(var e in h){if(f[e]){continue}f[e]=h[e]}}return f
},isArray:function(b){return b&&(typeof b=="array"||b instanceof Array)}};(function(){var b=ObjectsUtil.get("util.core.CoreUtil");ObjectsUtil.declare("util.core.Map",[],{values:null,keys:null,constructor:function(){this.values=[];
this.keys=[]},put:function(a,e){var f=this.keys.indexOf(a);if(f===-1){this.values.push(e);this.keys.push(a)}else{this.values[f]=e}},get:function(a){return this.values[this.keys.indexOf(a)]
},remove:function(a){var d=this.keys.indexOf(a);if(d<0){return}this.values.splice(d,1);this.keys.splice(d,1)},clear:function(){this.values=[];
this.keys=[]}})})();(function(){var d=ObjectsUtil.newInstance("util.core.Map");var c=[];ObjectsUtil.define("util.core.Events",{topics:{},suspend:null,connect:function(s,q,r,b){var a=this;
var p,m;if(q.addEventListener){p=function(){b.apply(r,arguments)};q.addEventListener(s,p,false);m=function(){q.removeEventListener(s,p,false)
}}else{var o=d.get(q);if(!o){o=[];d.put(q,o)}if(!o[s]){o[s]={bridged:q[s],connects:[]};var a=this;q[s]=function(){o[s].bridged.apply(q,arguments);
if(!a.suspend){var e=o[s].connects;for(var f=0,g;g=e[f];f++){g.callback.apply(g.context,arguments)}}}}o[s].connects.push({callback:b,context:r});
p=b}var n={callback:p,disconnector:m,type:s,object:q,context:r};c.push(n);return n},disconnectAll:function(){while(c.length>0){this.disconnect(c[0],d)
}this.topics={}},disconnect:function(m,p){if(!m){return}if(m.object.removeEventListener){m.disconnector()}else{var b=d.get(m.object);
if(!b){return}var n=b[m.type];if(!n){return}n=n.connects;if(!n){return}for(var q=0,a;a=n[q];q++){if(a.callback===m.callback){n.splice(n.indexOf(a),1);
q=0}}}var o=c.indexOf(m);if(o>-1){c.splice(o,1)}},subscribe:function(h,a,g){if(!this.topics[h]){this.topics[h]=[]}var b={handler:a,context:g};
this.topics[h].push(b);return b},unsubscribe:function(f,a){if(!this.topics[f]){return}var b=this.topics[f].indexof(a);if(b>-1){this.topics[f].splice(b,1)
}},publish:function(j){var b=this.topics[j];if(!b){return}for(var k=0,h;h=b[k];k++){var a=Array.prototype.slice.call(arguments,1);h.handler.apply(h.context||this,a)
}}})})();(function(){ObjectsUtil.define("util.core.UUIDGenerator",{generate:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(f){var e=Math.random()*16|0,d=f==="x"?e:(e&3|8);
return d.toString(16)})}})})();(function(){ObjectsUtil.define("util.svg.SVGUtil",{SVG:"http://www.w3.org/2000/svg",syncLineBetweenVertices:function(U,O,L){var B=O.getRootNode();
var P=parseFloat(B.getAttribute("height"));var S=O.focalNode;var T=L.focalNode;var K=parseFloat(S.getAttribute("x"));var Z=parseFloat(S.getAttribute("y"));
var X=parseFloat(S.getAttribute("height"));var I=parseFloat(S.getAttribute("width"));var M=parseFloat(T.getAttribute("x"));var aa=parseFloat(T.getAttribute("y"));
var Y=parseFloat(T.getAttribute("height"));var J=parseFloat(T.getAttribute("width"));var C=K+(I/2);var F=Z+(X/2);var D={y:F,x:C};var R={y:aa,x:M+(J/2),getRange:function(a,c){var b=M/P;
var d=(J/2)*b;var e=M+(J/2);if(Math.abs(a-e)<2){return e}if(a<M+(J/2)){return e-d}else{if(a>M+(J/2)){return e+d}else{return e}}}};var Q={y:aa+Y,x:M+(J/2),getRange:function(a,c){var b=M/P;
var d=(J/2)*b;var e=M+(J/2);if(Math.abs(a-e)<2){return e}if(a<M+(J/2)){return e-d}else{if(a>M+(J/2)){return e+d}else{return e}}}};var W={y:aa+(Y/2),x:M,getRange:function(a,c){var b=aa/P;
var d=(Y/2)*b;var e=aa+(Y/2);if(Math.abs(c-e)<2){return e}if(c<aa+(Y/2)){return e-d}else{if(c>aa+(Y/2)){return e+d}else{return e}}}};
var N={y:aa+(Y/2),x:M+J,getRange:function(a,c){var b=aa/P;var d=(Y/2)*b;var e=aa+(Y/2);if(Math.abs(c-e)<2){return e}if(c<aa+(Y/2)){return e-d
}else{if(c>aa+(Y/2)){return e+d}else{return e}}}};var ab=function(a,b){return Math.abs((a.x-b.x))+Math.abs((a.y-b.y))};var E=ab(D,R);
var G=ab(D,Q);var V=ab(D,W);var H=ab(D,N);if(E<G&&E<V&&E<H){U.setAttribute("d","M"+C+","+F+" L"+R.getRange(C,F)+" "+R.y)}else{if(G<E&&G<V&&G<H){U.setAttribute("d","M"+C+","+F+" L"+Q.getRange(C,F)+" "+Q.y)
}else{if(V<E&&V<G&&V<H){U.setAttribute("d","M"+C+","+F+" L"+W.x+" "+W.getRange(C,F))}else{if(H<E&&H<G&&H<V){U.setAttribute("d","M"+C+","+F+" L"+N.x+" "+N.getRange(C,F))
}}}}O.parentNode.refreshChild(U)},syncVertixLines:function(g){var k=ObjectsUtil.get("util.svg.SVGUtil");var j=g.getChildren("connector");
for(var h=0;f=j[h];h++){var f=j[h];k.syncLineBetweenVertices(f.focalNode,f.source,f.target)}},getConnector:function(g,h){var k=g.getChildren("connector");
for(var f=0;f<k.length;f++){var j=k[f];if(j.target===g){if(j.source===h){return j}}else{if(j.source===g){if(j.target===h){return j}}}}return null
}})})();(function(){var f=ObjectsUtil.get("util.svg.SVGUtil");var d={};var e={};ObjectsUtil.define("layout.shapes.ShapesRegistry",{register:function(a,b){d[a]=b
},draw:function(a,c,b){var h=ObjectsUtil.newInstance(d[a],c,b);if(!e[a]){e[a]={}}e[a][h.id||h.guid]=h;h.draw(c,b);return h},get:function(b,a){return a?e[b][a]:e[b]
},getAndGroup:function(k,a){var c=this.get(k,a);var o={};for(var n in c){var b=c[n];if(!b){continue}var m=b.parent;if(!m){continue}if(!o[m]){o[m]={}
}o[m][n]=b}return o},destroy:function(a){e[a.guid].destroy();e[a.guid]=undefined},empty:function(){e={}},showMessage:function(k,b){var c=document.getElementById(k);
if(!c){return}ObjectsUtil.get("util.core.Events").disconnectAll();ObjectsUtil.get("layout.shapes.ShapesRegistry").empty();ObjectsUtil.get("util.core.DomUtil").empty(c);
var m=ObjectsUtil.get("util.svg.SVGUtil");var a=c.descriptionMessage||document.createElementNS(m.SVG,"text");a.setAttribute("x",20);a.setAttribute("y",20);
a.setAttribute("style","fill: #000000;  font-family:tahoma; font-size: 16;  font-weight:bold");a.appendChild(document.createTextNode(b));
c.appendChild(a);var j=ObjectsUtil.get("util.core.DomUtil").calculateTextSize(b,a);c.style.width=j.w+120+"px";c.style.height=j.h+5+"px";
c.style.border="none";c.descriptionMessage=a},paint:function(a,b){if(b&&a.args.container){ObjectsUtil.get("util.core.Events").disconnectAll();
ObjectsUtil.get("layout.shapes.ShapesRegistry").empty();ObjectsUtil.get("util.core.DomUtil").empty(a.args.container)}this._paint(a)},_paint:function(a,h,c){if(h){a.args.parentNode=h
}if(c){a.args.container=c}if(!a.args.id){a.args.id=a.args.name}var b=ShapesRegistry.draw(a.descriptor,a.args,a);return b}})})();(function(){var j=ObjectsUtil.get("util.svg.SVGUtil");
var g=ObjectsUtil.get("layout.shapes.ShapesRegistry");var h=40;var k=100000;var f=0.0005;f=0.0005;ObjectsUtil.declare("layout.routers.AutomaticRouter",[],{forcex:null,forcey:null,_layoutInterval:null,graph:null,constructor:function(a){this.graph=a;
this.forcex={};this.forcey={}},layout:function(){var a=this;a._doLayout();this._layoutInterval=setInterval(function(){a._doLayout()},100)
},_doLayout:function(){var w=this.graph.getChildren("rectangle");for(var u=0;vertix1=w[u];u++){var r=vertix1.name;this.forcex[r]=0;this.forcey[r]=0;
for(var t=0;vertix2=w[t];t++){var s=vertix2.name;if(r===s){continue}var a=parseFloat(vertix2.getAttribute("x"))-parseFloat(vertix1.getAttribute("x"));
var b=parseFloat(vertix2.getAttribute("y"))-parseFloat(vertix1.getAttribute("y"));var c=Math.pow(a,2)+Math.pow(b,2);this.forcex[r]-=(k/c)*a;
this.forcey[r]-=(k/c)*b;if(j.getConnector(vertix1,vertix2)){var x=Math.sqrt(c);this.forcex[r]+=(x-h)*a;this.forcey[r]+=(x-h)*b}}}var v=0;
for(var u=0;vertix1=w[u];u++){var r=vertix1.name;var d=this.forcex[r]*f;var e=this.forcey[r]*f;v=v+Math.abs(d)+Math.abs(e);vertix1.setPosition({x:parseFloat(vertix1.getAttribute("x"))+d,y:parseFloat(vertix1.getAttribute("y"))+e})
}if(Math.round(v)<40){clearInterval(this._layoutInterval)}}})})();(function(){var j=ObjectsUtil.get("util.svg.SVGUtil");var g=ObjectsUtil.get("layout.shapes.ShapesRegistry");
var h=40;var k=100000;var f=0.0005;f=0.0005;ObjectsUtil.declare("layout.routers.HorizontalTreeRouter",[],{forcex:null,forcey:null,graph:null,constructor:function(a){this.graph=a;
this.forcex={};this.forcey={}},layout:function(){var a=this;a._doLayout()},_doLayout:function(){var y=[];var B=function(t,o){var n=[];
var p=t.getChildren("connector");for(var m=0;m<p.length;m++){var r=p[m];if(r.source===t){var s=r.target;if(o&&y.indexOf(s)>-1){continue
}n.push(r.target)}else{if(r.target===t){var q=r.source;if(o&&y.indexOf(q)>-1){continue}n.push(r.source)}}}return n};var J=function(o){var n=o.getChildren("connector");
if(n.length<1){return 1}var p=0;for(var m=0;subChild=n[m];m++){p=p+J(subChild)}return p};var e=function(n){var p=n.getChildren("connector");
if(p.length<1){return 1}var o=0;for(var r=0;subChild=p[r];r++){var q;if(subChild.source===n){q=subChild.target}else{if(subChild.target===n){q=subChild.source
}}if(!q){continue}var m=parseFloat(q.getAttribute("width"));if(m>o){o=m}}return o};var A=function(n,p){if(!p){p=[]}var m=B(n);if(m.length===1){return 1
}var o=0;for(var r=0;r<m.length;r++){var q=m[r];if(p.indexOf(q)>-1){continue}p.push(m[r]);o=o+A(m[r],p)}return o};var I=this.graph.getChildren("rectangle");
var c=I;c.sort(function(n,m){return J(m)-J(n)});var b=40;var d=30;var x={x:0,y:0};var G=function(w,s,m,r){if(y.indexOf(w)>-1){return}y.push(w);
var X=J(w,true);if(r){X--}w.setPosition({x:s,y:m});if(m>x.y){x.y=m}if(s>x.x){x.x=s}var t=B(w,true);var T=t.length;var o=X*b;var Z=m-(o/2);
var W=0;for(var ab=0;ab<T;ab++){var V=t[ab];var v=J(V)-1;var n=Z;if(ab){n=n+b}if(!v){v=1}var ac=n+(v*b);var aa=(n+ac)/2;var Y=s+d+parseFloat(w.getAttribute("width"));
V.setPosition({x:Y,y:aa});if(aa>x.y){x.y=aa}if(Y>x.x){x.x=Y}Z=ac-b;W=W+(v||1);y.push(V);var u=B(V,true);var q=Y+parseFloat(V.getAttribute("width"))+d;
if(u.length===1){G(u[0],q,aa,true)}else{if(u.length>=2){var ad=n+b/2;var U=(((ac-ad)/u.length))+b/u.length;for(var p=0;p<u.length;p++){G(u[p],q,ad+(U*p),true)
}}}}};for(var F=0;F<c.length;F++){var z=c[F];if(y.indexOf(z)>-1){continue}var C=A(z);var a=y.length===0?((C*b)/4):x.y+b;G(z,d,a)}if(!this.graph.height){var H=parseFloat(this.graph.getAttribute("height"));
var D=x.y+b;if(D>H){this.graph.setAttribute("height",parseFloat(D))}}if(!this.graph.width){var E=parseFloat(this.graph.getAttribute("width"));
var D=x.x+100;if(D>E){this.graph.setAttribute("width",parseFloat(D))}}for(var F=0;F<y.length;F++){var z=y[F];z.parentNode.refreshChild(z.focalNode);
j.syncVertixLines(z)}}})})();(function(){var c=0;var d=ObjectsUtil.get("util.core.Events");ObjectsUtil.declare("layout.shapes.AbstractNode",[],{focalNode:null,guid:null,children:null,type:null,parentNode:null,incremntal:null,_incomplete:null,constructor:function(a){this.children=[];
this.id=a.id;this.parentNode=a.parentNode;this.incremntal++},getChildren:function(a){return this.children[a||""]||[]},getPosition:function(){return{x:0,y:0,h:0,w:0}
},setPosition:function(b,a){},shiftPosition:function(a,b){var h=this.getPosition();for(var g in a){h[g]=(h[g]||0)+a[g]}this.setPosition(h,b)
},getSuperContainer:function(){var a=this.container;while(true){var b=a.container;if(b&&b.className){a=b}else{break}}return a},addChild:function(a){this.removeChild(a);
var b=a.type||"";if(!this.children[b]){this.children[b]=[]}this.children[b].push(a)},removeChild:function(a){var b=a.type||"";if(!this.children[b]){return
}if(!this.children[b]){return}var f=this.children[b].indexOf(a);if(f==-1){return}this.children[b].splice(f,1)},appendChild:function(a){this.focalNode.appendChild(a)
},refreshChild:function(a){if(a.parentNode===this.focalNode){this.focalNode.removeChild(a);this.insertBefore(a,this.focalNode.firstChild)
}},insertBefore:function(a,b){if(!b){this.appendChild(a)}else{this.focalNode.insertBefore(a,b)}},draw:function(a){},getAttribute:function(a){return this.focalNode.getAttribute(a)
},setAttribute:function(b,a){this.focalNode.setAttribute(b,a)},getRootNode:function(){var b=this.parentNode.focalNode;if(b.tagName==="svg"){return b
}var a=b.parentNode;while(a){a=a.parentNode;if(a&&a.tagName==="svg"){return a}}return b},handleMove:function(b,a){},destroy:function(){}})
})();(function(){var p=ObjectsUtil.get("util.svg.SVGUtil");var h=ObjectsUtil.get("util.core.Events");var n=ObjectsUtil.get("util.core.UUIDGenerator");
var k=0;var m="#222";var j="#fff";var o="10px";ObjectsUtil.declare("layout.shapes.RectangleNode",["layout.shapes.AbstractNode"],{focalNode:null,guid:null,name:null,color:null,fontColor:null,rx:null,parentNode:null,strokeWidth:null,_moving:null,type:null,constructor:function(a){this.type="rectangle";
this.name=a.name||("Node"+k);this.guid=a.id||this.name;this.color=a.color||m;this.fontColor=a.fontColor||j;this.rx=a.rx||o;this.strokeWidth=a.strokeWidth||1;
this.strokeWidth=this.strokeWidth+"px";k++},draw:function(c){var b=parseInt(this.parentNode.getAttribute("width"));var d=parseInt(this.parentNode.getAttribute("height"));
this.focalNode=document.createElementNS(p.SVG,"rect");this.focalNode.setAttribute("style","fill: "+this.color+"; stroke-width: "+this.strokeWidth+";");
this.focalNode.setAttribute("rx",this.rx);this.parentNode.appendChild(this.focalNode);this.focalNode.name=this.name;this.focalNode.textLabel=document.createElementNS(p.SVG,"text");
this.focalNode.textLabel.setAttribute("style","fill: "+this.fontColor+"; stroke-width: 1px;");this.focalNode.textLabel.appendChild(document.createTextNode(this.name));
this.parentNode.appendChild(this.focalNode.textLabel);this.focalNode.h=this.focalNode.textLabel.getBBox().height+10;this.focalNode.w=this.focalNode.textLabel.getBBox().width+10;
this.focalNode.setAttribute("height",this.focalNode.h+"px");this.focalNode.setAttribute("width",this.focalNode.w+"px");var e=h.connect("mousedown",this.focalNode,this,function(g){this.handleMove(this.focalNode,g)
});var e=h.connect("mousedown",this.focalNode.textLabel,this,function(g){this.handleMove(this.focalNode,g)});var f=Math.random()*(b*0.8)+(b*0.1);
var a=(Math.random()*(d*0.8))+(d*0.1);this.setPosition({x:f,y:a})},setPosition:function(c){var a=parseFloat(c.x);var b=parseFloat(c.y);
this.focalNode.setAttribute("x",a);this.focalNode.setAttribute("y",b);this.focalNode.textLabel.setAttribute("x",a+5+"px");this.focalNode.textLabel.setAttribute("y",b+(2*this.focalNode.h/3)+"px");
p.syncVertixLines(this)},handleMove:function(c,t){var f=c.parentNode.getScreenCTM();var s=c.parentNode.createSVGPoint();s.x=t.clientX;
s.y=t.clientY;s=s.matrixTransform(f.inverse());var d=parseFloat(s.x)-parseFloat(c.getAttribute("x"));var e=parseFloat(s.y)-parseFloat(c.getAttribute("y"));
var g=this.getChildren("rectangle");this._moving=c;var a=h.connect("mousemove",document,this,function(q){var v=c.parentNode.getScreenCTM();
var r=c.parentNode.createSVGPoint();r.x=q.clientX;r.y=q.clientY;r=r.matrixTransform(v.inverse());this.setPosition({x:r.x-d,y:r.y-e});
this.parentNode.updateArrowMarker()});var b=h.connect("mouseup",document,this,function(){h.disconnect(a);h.disconnect(b);this.parentNode.updateArrowMarker()
})}})})();(function(){var g=ObjectsUtil.get("layout.shapes.ShapesRegistry");var k=ObjectsUtil.get("util.svg.SVGUtil");var f="1px";var h="#444";
var j=0;ObjectsUtil.declare("layout.shapes.Connector",["layout.shapes.AbstractNode"],{focalNode:null,source:null,target:null,name:null,color:null,rx:null,strokeWidth:null,type:null,constructor:function(a){this.type="connector";
this.setSource(a.source);this.setTarget(a.target);this.name=a.name||("Connector"+j);this.guid=a.id||this.source.guid+"_"+this.target.guid+"_"+j;
this.strokeWidth=a.strokeWidth||f;this.color=a.color||h;j++},setSource:function(a){var b=g.get("RectangleNode",a);this.source=b;b.addChild(this)
},setTarget:function(a){var b=g.get("RectangleNode",a);this.target=b;b.addChild(this)},draw:function(a){this.focalNode=document.createElementNS(k.SVG,"path");
this.focalNode.setAttribute("style","stroke: "+this.color+"; stroke-width:"+this.strokeWidth+";");this.parentNode.insertBefore(this.focalNode,this.parentNode.firstChild);
this.focalNode.setAttribute("marker-end","url(#Triangle)");return this.focalNode}})})();var ShapesRegistry=ObjectsUtil.get("layout.shapes.ShapesRegistry");
(function(){ShapesRegistry.register("Connector","layout.shapes.Connector");ShapesRegistry.register("RectangleNode","layout.shapes.RectangleNode");
ShapesRegistry.register("Graph","layout.shape.Graph")})();(function(){var g=ObjectsUtil.get("layout.routers.HorizontalTreeRouter");var e=ObjectsUtil.get("util.core.Events");
var h=ObjectsUtil.get("util.svg.SVGUtil");var f=ObjectsUtil.get("layout.shapes.ShapesRegistry");ObjectsUtil.declare("layout.shape.Graph",["layout.shapes.AbstractNode"],{routingObject:null,height:null,width:null,_layoutInterval:null,_moving:null,_defs:null,constructor:function(a){this.height=a.height;
this.width=a.width;var c=a.container;var b=a.router;this.router=b||new g(this);this.focalNode=document.getElementById(c);this.updateArrowMarker()
},draw:function(b,a){},_paint:function(a){a.args.parentNode=this;if(!a.args.id){a.args.id=a.args.name}a.args.container=this;var b=f.draw(a.descriptor,a.args,a);
return b},updateArrowMarker:function(){if(!this._defs){this._defs=document.createElementNS(h.SVG,"defs");var b=document.createElementNS(h.SVG,"marker");
b.setAttribute("id","Triangle");b.setAttribute("viewBox","0 0 20 20");b.setAttribute("refX","20");b.setAttribute("refY","10");b.setAttribute("markerUnits","strokeWidth");
b.setAttribute("markerWidth","8");b.setAttribute("markerHeight","6");b.setAttribute("orient","auto");var a=document.createElementNS(h.SVG,"path");
b.appendChild(a);a.setAttribute("d","M 0 0 L 20 10 L 0 20 z");this._defs.appendChild(b)}else{this.focalNode.removeChild(this._defs)}this.focalNode.appendChild(this._defs)
},addRectNode:function(a){a.parentNode=this;var b=f.draw("RectangleNode",a);this.addChild(b)},drawConnector:function(a){a.parentNode=this;
var b=f.draw("Connector",a);this.addChild(b)},layout:function(){this.router.layout()}})})();(function(){var b=ObjectsUtil.define("util.core.DomUtil",{empty:function(a){if(!a.tagName){a=document.getElementById(a)
}if(!a){return}if(a.canHaveChildren){try{a.innerHTML="";return}catch(f){}}for(var e;e=a.lastChild;){this._empty(e,a)}},_empty:function(d,a){if(d.firstChild){this.empty(d)
}if(a){a.removeChild(d);if(d.removeNode){d.removeNode(false)}}},calculateTextSize:function(h,j){var k=document.createElement("span");
k.innerHTML=h;k.style.visibility="hidden";var n=this.position(k);if(typeof j==="object"&&!j.parentNode){for(var m in j){k.style[m]=j[m]
}}else{k.style.fontSize=window.getComputedStyle(j,null).getPropertyValue("font-size");k.style.fontFamily=window.getComputedStyle(j,null).getPropertyValue("font-family");
k.style.fontWeight=window.getComputedStyle(j,null).getPropertyValue("font-weight")}var a=document.body;a.appendChild(k);var n=this.position(k);
a.removeChild(k);return n},position:function(k,n){var h=ObjectsUtil.get("util.core.CoreUtil");k=this.nodeById(k);var a=this.getFirstParent(k,"body");
var j=k.getBoundingClientRect();j={x:j.left,y:j.top,w:j.right-j.left,h:j.bottom-j.top};if(n){var m=this.scrollValue(k);j.x+=m.x;j.y+=m.y
}return j},transformValue:function(e){var a=e.getAttribute("transform");if(!a){return{x:0,y:0}}a=a.substring("translate(".length,a.length-1);
var f=a.split(",");if(f.length<2){f=a.split(" ")}return{x:parseFloat(f[0]),y:parseFloat(f[1])}},scrollValue:function(q){var j=function(g,d){var f;
var e=window["page"+g+"Offset"];if(typeof(e)==="number"){f=e}else{var c="scroll"+d;if(document.body&&document.body[c]){f=document.body[c]
}else{if(document.documentElement&&document.documentElement[c]){f=document.documentElement[c]}}}return f};var p=function(){return j("Y","Top")
};var a=function(){return j("X","Left")};var m=0,k=0;var n={x:a(),y:p()};var o=q;while(o){if(o!==document.body&&o!==document.documentElement){if(o.scrollTop>0){n.y=n.y+o.scrollTop;
break}if(o.scrollLeft>0){n.x=n.x+o.scrollLeft;break}}o=o.parentNode}return n},nodeById:function(e,a){var f=ObjectsUtil.get("util.core.CoreUtil");
if(f.checkBrowser("ie")){this.nodeById=function(c,d){if(typeof c!=="string"){return c}return(d||document).getElementById(c)};return this.nodeById(e,a)
}this.nodeById=function(c,d){if(typeof c!=="string"){return c}if(!a){a=document}var n=a.getElementById(c);if(n.id==c||(n.attributes&&n.attributes.id&&n.attributes.id.value==c)){return n
}var k=a.all[c];if(!k){return}if(!f.isArray(k)){k=[k]}for(var o=0,m;m=k[o];o++){if(m.id==c||(m.attributes&&m.attributes.id&&m.attributes.id.value==c)){return m
}}};return this.nodeById(e,a)},transformPoint:function(h,k){var j=ObjectsUtil.get("util.core.DomUtil").getFirstParent(h,"svg");var a=j.getScreenCTM();
var g=j.createSVGPoint();g.x=k.x;g.y=k.y;g=g.matrixTransform(a.inverse());k.x=g.x;k.y=g.y},getFirstParent:function(f,h){if(!f||!h){return
}h=h.toUpperCase();if(f.tagName.toUpperCase()===h){return f}var g=f.parentNode;var a;while(g){if(g.tagName&&(g.tagName.toUpperCase()===h.toUpperCase())){a=g;
break}g=g.parentNode}return a}})})();(function(){var b=ObjectsUtil.define("util.core.CoreUtil",{store:{},toString:{}.toString,_browserSettings:null,clone:function(e){var a={};
for(var f in e){a[f]=e[f]}return a},stopEvent:function(a){a.cancelBubble=true;a.preventDefault();a.stopPropagation()},checkBrowser:function(d){var a=this.store[d];
if(a!==undefined){return a}a=navigator.userAgent.search(d);this.store[d]=a;return a},browserSettings:function(){if(this._browserSettings){return this._browserSettings
}var e=navigator.userAgent;var a;var f=e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i)||[];if(/trident/i.test(f[1])){a=/\brv[ :]+(\d+(\.\d+)?)/g.exec(e)||[];
this._browserSettings={browser:"ie",version:a[1]||""};return this._browserSettings}f=f[2]?[f[1],f[2]]:[navigator.appName,navigator.appVersion,"-?"];
if((a=e.match(/version\/([\.\d]+)/i))!=null){f[2]=a[1]}this._browserSettings={browser:f[0].toLowerCase(),version:f[1]||""}},version:function(a){var d=this.browserSettings();
if(d.browser===a){return parseFloat(d.version)}return 0},isFunction:function(a){return this._is(a,"[object Function]")},isString:function(a){return this._is(a,"[object String]")
},isArray:function(a){return this._is(a,"[object Array]")},_is:function(d,a){return this.toString.call(d)===a}})})();(function(){var SVGUtil=ObjectsUtil.get("util.svg.SVGUtil");
var Events=ObjectsUtil.get("util.core.Events");var UUIDGenerator=ObjectsUtil.get("util.core.UUIDGenerator");var incremntal=0;var DEFAULT_COLOR="rgb(255,255,255)";
var DEFAULT_FONT_COLOR="#fff";var DEFAULT_ROUND_RATIO="10px";var ShapesRegistry=ObjectsUtil.get("layout.shapes.ShapesRegistry");ShapesRegistry.register("StrucutreDiagram","layout.shapes.StrucutreDiagram");
ShapesRegistry.register("Part","layout.shapes.Part");ShapesRegistry.register("Port","layout.shapes.Port");ShapesRegistry.register("PartIcon","layout.shapes.PartIcon");
ShapesRegistry.register("PortConnector","layout.shapes.PortConnector");ObjectsUtil.declare("layout.shapes.StructureDiagramNode",["layout.shapes.AbstractNode"],{_moveHandle:null,constructor:function(args){this._moveHandle=Events.subscribe("structure.diagram.node.move."+this.id,function(args){var self=this;
var visited=[];var updateMoveInformation=function(entry){if(visited.indexOf(entry)>-1){return}visited.push(entry);var position=entry.getPrecisePosition?entry.getPrecisePosition():entry.getPosition();
if(!self.parentNode.layoutInformation){self.parentNode.layoutInformation={}}var updatedInfo={x:position.x,y:position.y,h:position.h,w:position.w};
self.parentNode.layoutInformation[entry.id]=updatedInfo;var children=entry.getChildren();for(var index=0,child;child=children[index];
index++){updateMoveInformation(child)}};updateMoveInformation(this)},this)},destroy:function(){Events.unsubsribe(this._moveHandle)}});
var StructureDiagramUtil=ObjectsUtil.define("layout.shapes.diagram.structure..StructureDiagramUtil",{portToPart:function(port,userHandler,otherPort){var CoreUtil=ObjectsUtil.get("util.core.CoreUtil");
var portObject=CoreUtil.isString(port)?ShapesRegistry.get("Port",port):port;var part=otherPort||portObject.container;var partPosition=part.getPosition();
var portPosition=portObject.getPosition();var deltaRight=parseInt(Math.abs(portPosition.x-(partPosition.x+partPosition.w)+portPosition.w));
var deltaLeft=parseInt(Math.abs((portPosition.x-(partPosition.x))+portPosition.w));var deltaTop=parseInt(Math.abs(portPosition.y-(partPosition.y-portPosition.h)));
var deltaBottom=parseInt(Math.abs(portPosition.y-(partPosition.y+partPosition.h)+portPosition.h));var handler=function(x,y,direction,portPosition){var isCorner=function(att1,att2){return att1<5&&att2<5
};if(port.isPrivate){if(direction==="right"){direction="left";y=y+(2)}else{if(direction==="left"){direction="right";y=y+(2);x=x+(2)}else{if(direction==="top"){direction="bottom";
y=y+((portPosition.h/2)+2)}else{if(direction==="bottom"){direction="top";y=y-((portPosition.h/2)+2)}else{direction="right"}}}}}userHandler(x,y,direction,portPosition,(isCorner(deltaBottom,deltaLeft)||isCorner(deltaTop,deltaLeft)||isCorner(deltaBottom,deltaRight)||isCorner(deltaTop,deltaRight)),{deltaRight:deltaRight,deltaLeft:deltaLeft,deltaTop:deltaTop,deltaBottom:deltaBottom})
};var side;if(deltaRight<deltaLeft&&deltaRight<=deltaTop&&deltaRight<=deltaBottom){if(partPosition.y-portPosition.h>portPosition.y){return handler(portPosition.x+(portPosition.w/2-2),portPosition.y,"top",portPosition)
}else{if((portPosition.y>(partPosition.y+partPosition.h+document.body.scrollTop)-portPosition.h)){return handler(portPosition.x+(portPosition.w/2-2),portPosition.y+(portPosition.h/2+4),"bottom",portPosition)
}else{return handler(portPosition.x+(portPosition.w-2),portPosition.y+(portPosition.h/2),"right",portPosition)}}}else{if(deltaLeft<deltaRight&&deltaLeft<=deltaTop&&deltaLeft<=deltaBottom){if(partPosition.y-portPosition.h>portPosition.y){return handler(portPosition.x+(portPosition.w/2-2),portPosition.y,"top",portPosition)
}else{if((portPosition.y>(partPosition.y+partPosition.h+document.body.scrollTop)-portPosition.h)){return handler(portPosition.x+(portPosition.w/2-2),portPosition.y+(portPosition.h/2+4),"bottom",portPosition)
}else{return handler(portPosition.x+(portPosition.w-2),portPosition.y+(portPosition.h/2),"left",portPosition)}}}else{if(deltaTop<deltaRight&&deltaTop<deltaLeft&&deltaTop<deltaBottom){return handler(portPosition.x+(portPosition.w/2-2),portPosition.y,"top",portPosition)
}else{if(deltaBottom<deltaRight&&deltaBottom<deltaLeft&&deltaBottom<deltaTop){return handler(portPosition.x+(portPosition.w/2-2),portPosition.y+(portPosition.h/2+4),"bottom",portPosition)
}}}}}});ObjectsUtil.declare("layout.shapes.StrucutreDiagram",["layout.shape.Graph"],{layoutInformation:null,settings:null,constructor:function(args){this.layoutInformation=args.layout
},draw:function(args,entry){this.focalNode.style.width="100%";this.focalNode.style.height="3600px";this._incomplete=true;this.settings=entry.args.settings||{};
var layout=entry.args.layout;if(this.height){this.setAttribute("height",this.height)}if(this.width){this.setAttribute("width",this.width)
}var nodes=args.nodes;if(!nodes){return}var mapByParent={"":{}};var getArray=function(id){var array=mapByParent[id||""];if(array){return array
}mapByParent[id]={};return mapByParent[id]};var undefineds=[];var setDetails=function(node){var args=node.args;var id=args.id||args.name;
if(id){node.children={};var obj=getArray(args.parent)[args.id||args.name||new Date().getTime()]=node}else{if(undefineds.indexOf(node)===-1){undefineds.push(node)
}}};for(var index=0,node;node=nodes[index];index++){setDetails(node)}var search=function(obj,id){for(var att in obj){if(att===id){return obj[id]
}var val=search(obj[att].children,id);if(val){return val}}};var pending=[];var putInHirarchy=function(obj){for(var id in obj){if(!id){continue
}var subObject=obj[id];var array=search(mapByParent[""],id);if(array){var indexOf=pending.indexOf(id);if(indexOf>-1){pending.splice(indexOf,1)
}var contents=mapByParent[id];for(var att in contents){array.children[att]=contents[att]}delete mapByParent[id]}else{var indexOf=pending.indexOf(id);
if(indexOf===-1){pending.push(id)}}for(var att in subObject){putInHirarchy(subObject[att].children)}}};putInHirarchy(mapByParent);while(pending.length>0){putInHirarchy(mapByParent)
}var CoreUtil=ObjectsUtil.get("util.core.CoreUtil");var mainObject=mapByParent[""];var avoid=[];var flatten=function(obj){for(var att in obj){var current=obj[att];
if(avoid.indexOf(current)>-1){continue}if(current.descriptor==="Part"&&!mainObject[att]){mainObject[att]=CoreUtil.clone(current);avoid.push(mainObject[att])
}flatten(current.children)}};flatten(mainObject);var reEnforce={};var reEnforce=function(obj){for(var att in obj){if(reEnforce[att]){continue
}reEnforce[att]=att;var current=obj[att];reEnforce(current);var children=current.children;for(var sub in children){var subObject=obj[sub];
if(subObject){reEnforce(subObject);reEnforce:{for(var subAtt in mainObject[sub].children){current.children[sub].children=mainObject[sub].children;
break reEnforce}for(var subAtt in current.children[sub].children){mainObject[sub].children=current.children[sub].children;break reEnforce
}}}}}};reEnforce(mainObject);var prepareArgs=function(originalArgs,parentNode,container,suffixId){var subArgs=CoreUtil.clone(originalArgs,parentNode,container);
subArgs.parent=container.id;subArgs.parentNode=parentNode;if(!subArgs.id){subArgs.id=subArgs.name}if(suffixId){subArgs.id=suffixId+"_"+subArgs.id
}if(layout){var layoutInfo=layout[subArgs.id];if(layoutInfo){subArgs.x=layoutInfo.x;subArgs.y=layoutInfo.y;subArgs.h=layoutInfo.h;subArgs.w=layoutInfo.w;
subArgs.hasLayoutInformation=true}}subArgs.container=container;return subArgs};var rowMargin=20;var columnMargin=20;var horiontalSpace=30;
var verticalSpace=30;var columnStart=columnMargin;var rowStart=rowMargin+horiontalSpace;var isAutoLayout=true;for(var att in mainObject){var current=mainObject[att];
var args=prepareArgs(current.args,this,this);if(!args.x||!args.y){if(!isAutoLayout){columnStart=columnStart+columnMargin+20}args.x=rowStart;
args.y=columnStart;isAutoLayout=true}else{isAutoLayout=false}if(current.descriptor==="Part"){args.isStructureDiagram=true}var shape=ShapesRegistry.draw(current.descriptor,args);
var children=current.children;var margined=false;var parentSet=false;var pending=[];for(var subAtt in children){var subCurrent=children[subAtt];
var subShapeArgs=prepareArgs(subCurrent.args,this,shape,att);var subShape=ShapesRegistry.draw(subCurrent.descriptor,subShapeArgs);subShape._incomplete=true;
if(!subShapeArgs.hasLayoutInformation){shape.addChild(subShape);parentSet=true}else{parentSet=false}if(subCurrent.descriptor==="Part"||(subCurrent.descriptor==="Port"&&(subCurrent.args.isPrivate==="true"||subCurrent.args.isPrivate===true))){if(!margined){rowStart=rowStart+rowMargin+horiontalSpace;
columnStart=columnStart+columnMargin+20;margined=true}var subChildren=subCurrent.children;for(var subSubAtt in subChildren){var subSubCurrent=subChildren[subSubAtt];
if(subSubCurrent.descriptor==="Port"){var _args=prepareArgs(subSubCurrent.args,this,subShape,att);var subShape1=ShapesRegistry.draw(subSubCurrent.descriptor,_args);
if(!_args.hasLayoutInformation){subShape.addChild(subShape1)}else{pending.push(subShape1)}}}var subPosition=subShape.getPosition();if(subPosition.x+rowStart>650){var containerPosition=shape.getPosition();
var currentHeightEnd=(containerPosition.y+containerPosition.h)-20;columnStart=currentHeightEnd+verticalSpace;rowStart=rowMargin+horiontalSpace+rowMargin+horiontalSpace
}if(isAutoLayout){subShape.shiftPosition({x:rowStart,y:columnStart})}delete subShape._incomplete;for(var pendingIndex=0,currentPending;
currentPending=pending[pendingIndex];pendingIndex++){subShape.addChild(currentPending)}pending=[];subPosition=subShape.getPosition();
var containerPosition=shape.getPosition();var end=subPosition.x+subPosition.w;var currentEnd=(containerPosition.x+containerPosition.w)-40;
var heightEnd=subPosition.y+subPosition.h;var currentHeightEnd=(containerPosition.y+containerPosition.h)-20;var wDiff=end-currentEnd;
var hDiff=heightEnd-currentHeightEnd;if(hDiff>0||wDiff>0){var object={};if(wDiff>0){object.w=wDiff}if(hDiff>0){object.h=hDiff}shape.shiftPosition(object)
}rowStart=rowStart+subPosition.w+rowMargin+rowMargin+rowMargin+rowMargin}pending=[];if(!parentSet){shape.addChild(subShape)}delete subShape._incomplete
}var containerPosition=shape.getPosition();var currentEnd=(containerPosition.x+containerPosition.h)-40;var containerPosition=shape.getPosition();
var currentHeightEnd=(containerPosition.y+containerPosition.h)-20;columnStart=columnMargin+currentHeightEnd+verticalSpace;rowStart=rowMargin+horiontalSpace;
this.addChild(shape)}for(var att in mainObject){var part=ShapesRegistry.get("Part",att);for(var uncategoriedIndex=0,uncategoried;uncategoried=undefineds[uncategoriedIndex];
uncategoriedIndex++){var args=uncategoried.args;var source=args.sources[0];var target=args.targets[0];var partSource=att+"_"+source;if(!ShapesRegistry.get("Port",partSource)){continue
}var partTarget=att+"_"+target;if(!ShapesRegistry.get("Port",partTarget)){continue}var altered=CoreUtil.clone(args);altered.sources=[partSource];
altered.part=att;altered.targets=[partTarget];altered.parentNode=this;altered.container=part;ShapesRegistry.draw(uncategoried.descriptor,altered)
}}var pos=ObjectsUtil.get("util.core.DomUtil").position(this.focalNode,true);this.focalNode.style.height=(currentHeightEnd+20)+"px";this._incomplete=false;
this.refreshBoundaries();var parts=ShapesRegistry.get("Part");var byGroups=ShapesRegistry.getAndGroup("Part");this.adjustShapes(layout||{},byGroups,parts)
},adjustShapes:function(layout,byGroups,parts,around){var visited=[];for(var att in parts){var part=parts[att];var alteredPosition=part.getPosition();
var shiftVal=this._adjustShapes(parts[att],layout,visited,around);if(shiftVal){shiftVal=shiftVal-5;part.shiftPosition({x:-(around?shiftVal-around:shiftVal)})
}if(byGroups){var subParts=byGroups[part.name];for(var subAtt in subParts){var subPart=subParts[subAtt];var basePosition=subPart.getPosition();
for(var sub2Att in subParts){if(sub2Att===subAtt){continue}var subPart2=subParts[sub2Att];var subPart2Position=subPart2.getPosition();
if(subPart2Position.x>basePosition.x||Math.abs(subPart2Position.y-basePosition.y)>50){continue}var to=subPart2Position.x+subPart2Position.w;
for(var index=0,subPart2child;subPart2child=subPart2.children[index];index++){if(subPart2child.className==="layout.shapes.Port"){var x=parseFloat(subPart2child.labelNode.getAttribute("x"));
var textWidth=ObjectsUtil.get("util.core.DomUtil").calculateTextSize(subPart2child.labelNode.childNodes[0].textContent+"...",subPart2child.labelNode).w;
var exepctedTo=x+textWidth;if(exepctedTo>to){to=exepctedTo}}}var subShift=this._adjustShapes(subPart,layout,[],to);if(subShift!=basePosition.x){subShift=(to)-subShift;
subPart.shiftPosition({x:subShift})}}}}}},_adjustShapes:function(part,layout,visited,around,level){if(layout[part.id]||visited.indexOf(part)>-1){return
}visited.push(part);var position=part.getPosition();var shiftVal=around||0;for(var index=0,child;child=part.children[index];index++){if(child.className==="layout.shapes.Port"){var x=parseFloat(child.labelNode.getAttribute("x"));
if(x<shiftVal){shiftVal=x}}else{if(child.className==="layout.shapes.Part"){var nestedShiftVal=this._adjustShapes(child,layout,visited);
if(nestedShiftVal<shiftVal){var alteredPosition=child.getPosition();alteredPosition.x=alteredPosition.x-nestedShiftVal;child.setPosition(alteredPosition)
}}}}return shiftVal},refreshBoundaries:function(){var position=ObjectsUtil.get("util.core.DomUtil").position(this.focalNode,true);var verticalEnd=position.y+position.h;
var horizontalEnd=position.x+position.w;var children=this.getChildren("partNode");var maxY=0,maxX=0;for(var index=0,child;child=children[index];
index++){if(child.className!=="layout.shapes.Part"){continue}var pos=child.getPosition();var horizontalEnd=pos.x+pos.w;if(horizontalEnd>maxX){maxX=horizontalEnd
}verticalEnd=pos.y+pos.h+20;if(verticalEnd>maxY){maxY=verticalEnd}var verticalEnd=pos.y+pos.h;if(verticalEnd>maxY){maxY=verticalEnd}var partChildren=child.getChildren();
for(var subIndex=0,partChild;partChild=partChildren[subIndex];subIndex++){if(partChild.labelNode){var labelPos=ObjectsUtil.get("util.core.DomUtil").position(partChild.labelNode);
horizontalEnd=labelPos.x+labelPos.w;if(horizontalEnd>maxX){maxX=horizontalEnd}verticalEnd=labelPos.y+labelPos.h;if(verticalEnd>maxY){maxY=verticalEnd
}}var partChildChildren=partChild.getChildren();for(var subSubIndex=0,partChildChild;partChildChild=partChildChildren[subSubIndex];subSubIndex++){if(!partChildChild.labelNode){continue
}labelPos=ObjectsUtil.get("util.core.DomUtil").position(partChildChild.labelNode);horizontalEnd=labelPos.x+labelPos.w;if(horizontalEnd>maxX){maxX=horizontalEnd
}verticalEnd=labelPos.y+labelPos.h;if(verticalEnd>maxY){maxY=verticalEnd}}}}var height=parseFloat(this.focalNode.style.height);if(Math.abs(maxY-height)>1){this.focalNode.style.height=(maxY+10)+"px"
}var width=parseFloat(this.focalNode.style.width);if(Math.abs(maxX-width)>1){this.focalNode.style.width=(maxX+10)+"px"}}});ObjectsUtil.declare("layout.shapes.Part",["layout.shapes.StructureDiagramNode"],{isStructureDiagram:null,multiplicity:null,children:null,focalNode:null,guid:null,iconPart:null,name:null,parent:null,color:null,fontColor:null,rx:null,parentNode:null,strokeWidth:null,height:null,width:null,yCoord:null,xCoord:null,_moving:null,type:null,constructor:function(args){this.isStructureDiagram=args.isStructureDiagram;
this.multiplicity=args.multiplicity;this.type="partNode";this.parent=args.parent;this.children=[];this.name=args.name||("Node"+incremntal);
this.guid=args.id||this.name;this.color=args.color||DEFAULT_COLOR;this.fontColor=args.fontColor||DEFAULT_FONT_COLOR;this.rx=args.rx||DEFAULT_ROUND_RATIO;
this.strokeWidth=args.strokeWidth||1;this.strokeWidth=this.strokeWidth+"px";incremntal++},addChild:function(child){var CoreUtil=ObjectsUtil.get("util.core.CoreUtil");
if(CoreUtil.isArray(child)){for(var index=0,c;c=child[index];index++){this.children.push(c)}}else{this.children.push(child)}this.applyConstraints()
},getChildren:function(type,args){if(type){var filtered=[];for(var index=0,child;child=this.children[index];index++){if(child.type===type){var valid=true;
if(args){for(var att in args){if(!args[att]?child[att]:args[att]!==child[att]){valid=false;break}}}if(valid){filtered.push(child)}}}return filtered
}return this.children},draw:function(args){var settings=this.getSuperContainer().settings;this.part_highlight_color=settings.part_highlight_color||"#5DBCD2";
this.part_container_highlight_color=settings.part_container_highlight_color||"#FFFFFF";this.part_container_label_highlight_color=settings.part_container_label_highlight_color||"#e6e6e6";
var CoreUtil=ObjectsUtil.get("util.core.CoreUtil");var DomUtil=ObjectsUtil.get("util.core.DomUtil");this.focalNode=document.createElementNS(SVGUtil.SVG,"g");
var mouseMoveHandler=Events.connect("mousemove",this.focalNode,this,function(e){if(this.__resizeStarted){return}var self=this;var stopListening=function(){delete self.__resizeStarted;
Events.disconnect(self._tempResizeMouseUpHandler);Events.disconnect(self._tempResizeMouseDownHandler);Events.disconnect(self._tempResizeMouseMoveHandler);
self.focalNode.style.cursor="";delete self._tempResizeMouseDownHandler};var iseDetected=false;var position=DomUtil.position(this.focalNode);
var horizontalEnd=position.x+position.w;var horizontalDiff=(e.clientX)-horizontalEnd;if(Math.abs(horizontalDiff)<10){this.focalNode.style.cursor="col-resize";
iseDetected=true}else{var verticalEnd=position.y+position.h;var verticalDiff=(e.clientY)-verticalEnd;if(Math.abs(verticalDiff)<10){this.focalNode.style.cursor="row-resize";
iseDetected=true}}Events.disconnect(this._tempResizeMouseDownHandler);Events.disconnect(this._tempResizeMouseOutHandler);if(iseDetected){this._tempResizeMouseDownHandler=Events.connect("mousedown",document,this,function(e){if(this.__resizeStarted){stopListening()
}Events.disconnect(this._tempResizeMouseOutHandler);CoreUtil.stopEvent(e);this.__resizeStarted=true;this._tempResizeMouseUpHandler=Events.connect("mouseup",document,this,function(e){CoreUtil.stopEvent(e);
stopListening();this.getSuperContainer().refreshBoundaries()});this._tempResizeMouseMoveHandler=Events.connect("mousemove",document,this,function(e){CoreUtil.stopEvent(e);
if(!this._tempResizeMouseDownHandler){stopListening();return}var children=this.getChildren();var maxY=0,maxX=0;for(var index=0,child;
child=children[index];index++){if(child.className!=="layout.shapes.Part"){continue}var pos=DomUtil.position(child.focalNode);var horizontalEnd=pos.x+pos.w;
if(horizontalEnd>maxX){maxX=horizontalEnd}var verticalEnd=pos.y+pos.h;if(verticalEnd>maxY){maxY=verticalEnd}}var object={};var position=DomUtil.position(this.focalNode);
var set=false;if(this._tempResizeMouseDownHandler.verticalDiff){if(e.clientY>maxY){object.h=(e.clientY)-position.y;set=true}}else{if(this._tempResizeMouseDownHandler.horizontalDiff){if(e.clientX>maxX){object.w=(e.clientX)-position.x;
set=true}}}if(set){this.setPosition(object)}})});this._tempResizeMouseDownHandler.horizontalDiff=horizontalDiff;this._tempResizeMouseDownHandler.verticalDiff=verticalDiff;
this._tempResizeMouseOutHandler=Events.connect("mouseout",this.focalNode,this,function(e){stopListening()})}else{stopListening()}});this.focalNode.setAttribute("style","fill: "+this.color+"; font-family:'sans-serif';");
this.parentNode.appendChild(this.focalNode);this.rectNode=document.createElementNS(SVGUtil.SVG,"rect");this.rectNode.setAttribute("style","stroke:#000000;");
this.rectNode.setAttribute("fill","#FFFFFF");this.focalNode.appendChild(this.rectNode);this.highlightNode=document.createElementNS(SVGUtil.SVG,"rect");
this.highlightNode.setAttribute("style","stroke:#000000;");if(!this.isStructureDiagram){this.highlightNode.setAttribute("fill",this.part_highlight_color)
}else{this.highlightNode.setAttribute("fill",this.part_container_highlight_color)}this.focalNode.appendChild(this.highlightNode);this.nameNode=document.createElementNS(SVGUtil.SVG,"text");
this.nameNode.setAttribute("style","fill: #000000;  font-family:tahoma; font-size: 10; font-weight:bold");this.nameNode.appendChild(document.createTextNode(args.name));
this.focalNode.appendChild(this.nameNode);if(!this.isStructureDiagram){this.iconPart=ShapesRegistry.draw("PartIcon",{parentNode:this.focalNode})
}this.setPosition({x:args.x,y:args.y,h:args.h,w:args.w});var mouseDownHandler=Events.connect("mousedown",this.focalNode,this,function(e){if(this._tempResizeMouseDownHandler){return
}this.handleMove(this.focalNode,e)});var mouseDownHandler=Events.connect("mousedown",this.highlightNode,this,function(e){if(this._tempResizeMouseDownHandler){return
}this.handleMove(this.focalNode,e)})},updatePosition:function(position){var currentPosition=ObjectsUtil.get("util.core.DomUtil").transformValue(this.focalNode);
currentPosition.h=parseFloat(this.rectNode.getAttribute("height"));currentPosition.w=parseFloat(this.rectNode.getAttribute("width"));
if(position.h){currentPosition.h=currentPosition.h+position.h}if(position.w){currentPosition.w=currentPosition.w+position.w;var children=this.getChildren("portNode");
for(var childIndex=0,child;child=children[childIndex];childIndex++){StructureDiagramUtil.portToPart(child,function(x,y,direction,portPosition){if(direction==="right"){var pos=child.getPosition();
child.shiftPosition({x:position.w},true)}})}}this.setPosition(currentPosition,true)},shiftPosition:function(shiftObject,args){var position={x:this.xCoord,y:this.yCoord,h:this.height,w:this.width};
for(var att in shiftObject){position[att]=(position[att]||0)+shiftObject[att]}this.setPosition(position,args)},setPosition:function(position,restrained){var CoreUtil=ObjectsUtil.get("util.core.CoreUtil");
var currentPosition=this.getPosition();var xCoord=parseFloat(position.x)||this.xCoord||0;var yCoord=parseFloat(position.y)||this.yCoord||0;
var height=parseFloat(position.h)||this.height||40;var textWidth=ObjectsUtil.get("util.core.DomUtil").calculateTextSize(this.nameNode.childNodes[0].textContent+"...",this.nameNode).w;
var width=parseFloat(position.w)||this.width||(textWidth+75);if(height<40){height=40}if(width<(textWidth+75)){width=(textWidth+75)}this.highlightNode.setAttribute("height",20);
this.highlightNode.setAttribute("width",width);this.rectNode.setAttribute("height",height);this.rectNode.setAttribute("width",width);
if(!this.isStructureDiagram){this.iconPart.setPosition({x:width-25,y:6})}this.focalNode.setAttribute("transform","translate("+xCoord+","+yCoord+")");
if(!this.isStructureDiagram&&this.multiplicity==="*"){if(!this.shadowNode){this.shadowNode=document.createElementNS(SVGUtil.SVG,"rect");
this.shadowNode.setAttribute("style","stroke:#000000;");this.shadowNode.setAttribute("fill","none");this.focalNode.insertBefore(this.shadowNode,this.focalNode.firstChild)
}this.shadowNode.setAttribute("transform","translate("+(3)+","+(-3)+")");this.shadowNode.setAttribute("height",height);this.shadowNode.setAttribute("width",width)
}this.nameNode.setAttribute("y","15");if(this.isStructureDiagram){this.nameNode.setAttribute("x","15");if(!this.nameNode.highlight){this.nameNode.highlight=document.createElementNS("http://www.w3.org/2000/svg","rect");
this.nameNode.highlight.setAttribute("style","fill:"+this.part_container_label_highlight_color+";");this.nameNode.parentNode.insertBefore(this.nameNode.highlight,this.nameNode);
this.nameNode.highlight.border=document.createElementNS(SVGUtil.SVG,"polygon");this.nameNode.highlight.border.setAttribute("style","stroke:black;stroke-width:1;");
this.nameNode.parentNode.insertBefore(this.nameNode.highlight.border,this.nameNode)}else{this.nameNode.parentNode.removeChild(this.nameNode.highlight);
this.nameNode.parentNode.insertBefore(this.nameNode.highlight,this.nameNode);this.nameNode.parentNode.removeChild(this.nameNode.highlight.border);
this.nameNode.parentNode.insertBefore(this.nameNode.highlight.border,this.nameNode)}this.nameNode.highlight.setAttribute("x","1");this.nameNode.highlight.setAttribute("y","1");
this.nameNode.highlight.setAttribute("width",textWidth+10);this.nameNode.highlight.setAttribute("height",18);var xDelta=0;var yDelta=0;
if(!CoreUtil.browserSettings()||CoreUtil.browserSettings().browser!=="chrome"){xDelta=2;yDelta=18}else{xDelta=0;yDelta=20}this.nameNode.highlight.border.setAttribute("points",(textWidth+11)+","+xDelta+" "+(textWidth+11)+","+yDelta)
}else{this.nameNode.setAttribute("x",(width/2)-(textWidth/2))}if(!restrained){var newPosition=this.getPosition();var shiftX=newPosition.x-currentPosition.x;
var shiftY=newPosition.y-currentPosition.y;if(shiftX!==0||shiftY!==0){for(var index=0,child;child=this.children[index];index++){if(child.className==="layout.shapes.Port"||child.className==="layout.shapes.Part"){child.shiftPosition({x:shiftX,y:shiftY})
}}}this.applyConstraints()}this.xCoord=xCoord;this.yCoord=yCoord;this.height=height;this.width=width;if(this.container&&this.container.getPrecisePosition){var containerPosition=this.container.getPrecisePosition();
var lastEnd=this.yCoord+this.height;var lastWidthEnd=this.xCoord+this.width;var containerEnd=containerPosition.y+containerPosition.h-20;
var containerWidthEnd=containerPosition.x+containerPosition.w-20;var hDiff=lastEnd-containerEnd;var wDiff=lastWidthEnd-containerWidthEnd;
if(hDiff>0||wDiff>0){var object={};var changed=false;if(hDiff>0){object.h=hDiff+20;changed=true}if(wDiff>10){object.w=wDiff+20;changed=true
}if(changed){this.container.shiftPosition(object)}}}this.refreshBoundaries()},refreshBoundaries:function(){var superContainer=this.getSuperContainer();
if(superContainer._incomplete){return}superContainer.refreshBoundaries()},getPosition:function(){var DomUtil=ObjectsUtil.get("util.core.DomUtil");
var position=DomUtil.position(this.focalNode,true);var focRect=this.focalNode.getBoundingClientRect();var focParentRect=this.focalNode.parentNode.parentNode.getBoundingClientRect();
position.x=focRect.left-focParentRect.left;position.y=focRect.top-focParentRect.top;position.y=(position.y+8)-parseInt(window.getComputedStyle(this.focalNode.parentNode.parentNode,null).getPropertyValue("padding-top"));
position.x=(position.x+8)-parseInt(window.getComputedStyle(this.focalNode.parentNode.parentNode,null).getPropertyValue("padding-left"));
var container=DomUtil.getFirstParent(this.focalNode,"svg").parentNode;var scrollLeft=container.scrollLeft;var scrollTop=container.scrollTop;
position.x=position.x+(scrollLeft||0);position.y=position.y+(scrollTop||0);if(this.shadowNode){position.w=position.w-3;position.h=position.h-3
}return position},getPrecisePosition:function(){return{h:this.height,w:this.width,y:this.yCoord,x:this.xCoord}},applyConstraints:function(){if(this._incomplete){return
}var position=this.getPosition();var alteredPosition=this.getPosition();var shiftVal=0;for(var index=0,child;child=this.children[index];
index++){if(child.className==="layout.shapes.Port"){child.applyConstraints()}else{if(child.className==="layout.shapes.Part"){}}}if(alteredPosition.w!==position.w){this.setPosition(alteredPosition,true)
}},handleMove:function(vertex,event){var DomUtil=ObjectsUtil.get("util.core.DomUtil");var CoreUtil=ObjectsUtil.get("util.core.CoreUtil");
var canvas=DomUtil.getFirstParent(vertex,"svg");var m=vertex.parentNode.getScreenCTM();var p=canvas.createSVGPoint();p.x=event.clientX;
p.y=event.clientY;p=p.matrixTransform(m.inverse());var position=this.getPrecisePosition();var deltaX=parseFloat(p.x)-parseFloat(position.x);
var deltaY=parseFloat(p.y)-parseFloat(position.y);var originalPosition;if(this.container.getPrecisePosition){originalPosition=this.container.getPrecisePosition()
}this._moving=vertex;var disableTextSelection=Events.connect("onselectstart",document,this,function(e){CoreUtil.stopEvent(e)});var mouseMoveHandle=Events.connect("mousemove",document,this,function(e){var self=this;
var m=vertex.parentNode.getScreenCTM();var p=canvas.createSVGPoint();p.x=e.clientX;p.y=e.clientY;p=p.matrixTransform(m.inverse());var object={};
var position=self.getPrecisePosition();object.y=p.y;object.x=p.x;var containerNewPosition=self.container[self.container.getPrecisePosition?"getPrecisePosition":"getPosition"]();
if(object.x-deltaX<containerNewPosition.x){return}if(object.y-deltaY<containerNewPosition.y){return}self.setPosition({x:object.x-deltaX,y:object.y-deltaY});
if(originalPosition){var containerNewPosition=self.container.getPrecisePosition();var lastEnd=self.yCoord+self.height;var lastWidthEnd=self.xCoord+self.width;
var containerEnd=originalPosition.y+originalPosition.h;var containerWidthEnd=originalPosition.x+originalPosition.w;var hDiff=lastEnd-containerEnd;
var wDiff=lastWidthEnd-containerWidthEnd;if(hDiff<0&&wDiff<0){self.container.setPosition(originalPosition)}}});var mouseUpHandle=Events.connect("mouseup",document,this,function(){Events.disconnect(mouseMoveHandle);
Events.disconnect(mouseUpHandle);Events.disconnect(disableTextSelection);this._moving=undefined;this.getSuperContainer().refreshBoundaries();
Events.publish("structure.diagram.node.move."+this.id)});CoreUtil.stopEvent(event)}});var ICON_WIDTH=12;var ICON_HEIGHT=10;ObjectsUtil.declare("layout.shapes.PartIcon",["layout.shapes.AbstractNode"],{draw:function(args){this.iconNode=document.createElementNS(SVGUtil.SVG,"rect");
this.iconNode.setAttribute("style","stroke:#000000;");this.iconNode.setAttribute("height",ICON_HEIGHT);this.iconNode.setAttribute("width",ICON_WIDTH);
this.iconNode.setAttribute("fill","none");this.parentNode.appendChild(this.iconNode)},setPosition:function(position){var xCoord=parseFloat(position.x)||0;
var yCoord=parseFloat(position.y)||0;var margin=2;var separator=1;var partHeight=2;var partWidth=6;this.iconNode.setAttribute("x",xCoord);
this.iconNode.setAttribute("y",yCoord);if(!this.iconNodePart1){this.iconNodePart1=document.createElementNS(SVGUtil.SVG,"rect")}else{this.parentNode.removeChild(this.iconNodePart1)
}this.iconNodePart1.setAttribute("style","stroke:#000000;");this.iconNodePart1.setAttribute("height",partHeight);this.iconNodePart1.setAttribute("width",partWidth);
this.iconNodePart1.setAttribute("y",yCoord+margin);this.iconNodePart1.setAttribute("x",xCoord-(partWidth/2));this.iconNodePart1.setAttribute("fill","#5DBCD2");
this.parentNode.appendChild(this.iconNodePart1);if(!this.iconNodePart2){this.iconNodePart2=document.createElementNS(SVGUtil.SVG,"rect")
}else{this.parentNode.removeChild(this.iconNodePart2)}this.iconNodePart2.setAttribute("style","stroke:#000000;");this.iconNodePart2.setAttribute("height",partHeight);
this.iconNodePart2.setAttribute("width",partWidth);this.iconNodePart2.setAttribute("y",yCoord+margin+partHeight+margin);this.iconNodePart2.setAttribute("x",xCoord-(partWidth/2));
this.iconNodePart2.setAttribute("fill","#5DBCD2");this.parentNode.appendChild(this.iconNodePart2)}});var PortSymbols=ObjectsUtil.define("layout.shapes.Port.PortSymbols",{right:function(port){port.symbol=document.createElementNS(SVGUtil.SVG,"polygon");
port.symbol.setAttribute("points","8,2 2.5,5 8,8");port.symbol.setAttribute("style","fill:black;stroke:#000000;stroke-width:1");port.containerNode.appendChild(port.symbol)
},left:function(port){port.symbol=document.createElementNS(SVGUtil.SVG,"polygon");port.symbol.setAttribute("points","2.5,2 8,5 2.5,8");
port.symbol.setAttribute("style","fill:#000000;stroke:#000000;stroke-width:1");port.containerNode.appendChild(port.symbol)},twoArrows:function(port){var drawLine=function(x1,y1,x2,y2){var line1=document.createElementNS(SVGUtil.SVG,"line");
line1.setAttribute("x1",x1);line1.setAttribute("y1",y1);line1.setAttribute("x2",x2);line1.setAttribute("y2",y2);line1.setAttribute("style","fill:#000000;stroke:#000000;stroke-width:1");
port.containerNode.appendChild(line1)};drawLine("4","2","8.5","4");drawLine("1.5","4","8.5","4");drawLine("1.5","6","8.5","6");drawLine("1.5","6","6","8")
},conjugated:function(port){var symbol=PortSymbols._drawCircleSymbol(port,"Conjucated port");symbol.setAttribute("style","stroke: black;")
},conjugatedReplicated:function(port){var symbol=PortSymbols._drawCircleSymbol(port,"Conjucated replicated port");symbol.setAttribute("style","stroke: black;");
port.set3D()},replicatedEndPort:function(port){PortSymbols.endPort(port,"Replicated end port");port.set3D()},endPort:function(port,title){var symbol=PortSymbols._drawCircleSymbol(port,title||"End port");
var currentParentColor=port.focalNode.getAttribute("fill");symbol.setAttribute("style","stroke: "+currentParentColor+";");symbol.setAttribute("fill",currentParentColor);
port.focalNode.setAttribute("fill","#000000")},conjucatedReplicatedRelayPort:function(port){var symbol=PortSymbols._drawRectSymbol(port,"Conjucated replicated relay port");
symbol.setAttribute("style","stroke: black;");port.set3D()},conjucatedRelayPort:function(port){var symbol=PortSymbols._drawRectSymbol(port,"Conjucated relay port");
symbol.setAttribute("style","stroke: black;")},replicatedRelayPort:function(port){PortSymbols.relayPort(port,"Replicated relay port");
port.set3D()},relayPort:function(port,title){var symbol=PortSymbols._drawRectSymbol(port,title||"Relay port");symbol.setAttribute("style","stroke: black;");
var currentParentColor=port.focalNode.getAttribute("fill");symbol.setAttribute("style","stroke: "+currentParentColor+";");symbol.setAttribute("fill",currentParentColor);
port.focalNode.setAttribute("fill","#000000")},_drawCircleSymbol:function(port,title){var circle=document.createElementNS(SVGUtil.SVG,"circle");
circle.setAttribute("fill","#000000");circle.setAttribute("r",3);circle.setAttribute("cx",5);circle.setAttribute("cy",5);port.containerNode.appendChild(circle);
PortSymbols._appendTooltip(title,port,circle);return circle},_drawRectSymbol:function(port,title){var rect=document.createElementNS(SVGUtil.SVG,"rect");
rect.setAttribute("fill","#000000");rect.setAttribute("height",4);rect.setAttribute("width",4);rect.setAttribute("x",3);rect.setAttribute("y",3);
port.containerNode.appendChild(rect);PortSymbols._appendTooltip(title,port,rect);return rect},_appendTooltip:function(title,port,element){if(title){element.titleElement=document.createElementNS(SVGUtil.SVG,"title");
port.focalNode.appendChild(element.titleElement);element.titleElement.appendChild(document.createTextNode(title));element.titleElement=document.createElementNS(SVGUtil.SVG,"title");
element.appendChild(element.titleElement);element.titleElement.appendChild(document.createTextNode(title))}}});var ConnectorSymbols=ObjectsUtil.define("layout.shapes.connector.ConnectorSymbols",{draw:function(connector,args,direction,receive){return ConnectorSymbols._draw(connector,args,direction,receive)
},_draw:function(connector,args,direction,receive){if(!connector.connectorSymbol){connector.connectorSymbol=document.createElementNS(SVGUtil.SVG,"g");
connector.connectorSymbol.setAttribute("fill","none");var r=5;var delta=4;var title="";if(args.indexOf("provide")>-1){connector.connectorSymbol.path=document.createElementNS(SVGUtil.SVG,"path");
connector.connectorSymbol.path.setAttribute("style","stroke: #000000;");connector.connectorSymbol.appendChild(connector.connectorSymbol.path);
title="Provide"}if(args.indexOf("require")>-1){connector.connectorSymbol.circle1=document.createElementNS(SVGUtil.SVG,"circle");connector.connectorSymbol.circle1.setAttribute("style","stroke: black;");
connector.connectorSymbol.circle1.setAttribute("r",r);connector.connectorSymbol.appendChild(connector.connectorSymbol.circle1);connector.connectorSymbol.setAttribute("fill","white");
if(title){title=title+"\\"}title=title+"Require"}if(title){connector.connectorSymbol.title=document.createElementNS(SVGUtil.SVG,"title");
connector.connectorSymbol.appendChild(connector.connectorSymbol.title);connector.connectorSymbol.title.appendChild(document.createTextNode(title))
}connector.parentNode.appendChild(connector.connectorSymbol)}else{connector.parentNode.removeChild(connector.connectorSymbol);connector.parentNode.appendChild(connector.connectorSymbol)
}if(connector.connectorSymbol.path){var r=5;var delta=4;var firstEnd=r+delta;var otherEnd=firstEnd*-1;if(receive){if(direction==="vertical"){var pair1=(otherEnd+",0");
var pair2=(firstEnd+",0")}else{var pair1=("0,"+otherEnd);var pair2=("0,"+(firstEnd))}}else{if(direction==="vertical"){var pair2=(otherEnd+",0");
var pair1=(firstEnd+",0")}else{var pair2=("0,"+otherEnd);var pair1=("0,"+(firstEnd))}}var pathString="M"+pair1+(" A"+r+","+r)+" 0 0,1 "+pair2;
connector.connectorSymbol.path.setAttribute("d",pathString)}return connector.connectorSymbol}});var LABEL_FONT_SETTINGS={fontSize:10,fontFamily:"arial, serif",fontWeight:"normal"};
ObjectsUtil.declare("layout.shapes.Port",["layout.shapes.StructureDiagramNode"],{focalNode:null,guid:null,isPrivate:null,connectors:null,name:null,color:null,fontColor:null,rx:null,parentNode:null,strokeWidth:null,_moving:null,type:null,portType:null,constructor:function(args){this.type="portNode";
this.isPrivate=(args.isPrivate==="true"||args.isPrivate===true)?true:false;this.multiplicity=args.multiplicity;this.connectors={sources:[],targets:[]};
this.portType=args.portType;this.name=args.name||("Node"+incremntal);this.guid=args.id||this.name;this.color=args.color||DEFAULT_COLOR;
this.fontColor=args.fontColor||DEFAULT_FONT_COLOR;this.rx=args.rx||DEFAULT_ROUND_RATIO;this.strokeWidth=args.strokeWidth||1;this.strokeWidth=this.strokeWidth+"px";
incremntal++},addConnector:function(child,type){var CoreUtil=ObjectsUtil.get("util.core.CoreUtil");if(CoreUtil.isArray(child)){for(var index=0,c;
c=child[index];index++){if(this.connectors[type].indexOf(c)>-1){continue}this.connectors[type].push(c)}}else{if(this.connectors[type].indexOf(child)==-1){this.connectors[type].push(child)
}}},draw:function(args){var settings=this.getSuperContainer().settings;this.portFillColor=settings.portFillColor||"#FFFFCC";this.containerNode=document.createElementNS(SVGUtil.SVG,"g");
this.parentNode.appendChild(this.containerNode);this.focalNode=document.createElementNS(SVGUtil.SVG,"rect");this.focalNode.setAttribute("style","stroke:#000000;");
this.focalNode.setAttribute("height","10");this.focalNode.setAttribute("width","10");this.focalNode.setAttribute("fill",this.portFillColor);
this.containerNode.appendChild(this.focalNode);var CoreUtil=ObjectsUtil.get("util.core.CoreUtil");var DomUtil=ObjectsUtil.get("util.core.DomUtil");
var typeSymbol=args.typeSymbol;if(typeSymbol){if(typeSymbol.indexOf("(function")>-1){var typeSymboleEval=eval(typeSymbol);if(CoreUtil.isFunction(typeSymboleEval)){typeSymboleEval(this)
}}}else{var portType=args.portType;var mappedFunction=PortSymbols[portType];if(mappedFunction){mappedFunction(this)}}this.labelNode=document.createElementNS(SVGUtil.SVG,"text");
this.labelNode.setAttribute("style","fill: #000000;  font-family:"+LABEL_FONT_SETTINGS.fontFamily+"; font-size: "+LABEL_FONT_SETTINGS.fontSize+";  font-weight:"+LABEL_FONT_SETTINGS.fontWeight+";");
var portLabelText=args.name;if(args.multiplicity!==undefined){portLabelText=portLabelText+"["+args.multiplicity+"]"}this.labelNode.appendChild(document.createTextNode(portLabelText));
this.parentNode.appendChild(this.labelNode);var partObject=this.container;if(args.x!==undefined&&args.y!==undefined){this.setPosition({x:args.x,y:args.y},true)
}else{if(!this.isPrivate){var x,y,delta;var position=partObject.getPosition();var portPosition=this.getPosition();var children=partObject.getChildren("portNode",{isPrivate:undefined});
var adjustedLength=children.length;var w=this.getPosition().w;var direction=children.length%10;var partMax=position.x+position.w;for(var index=0,child;
child=children[index];index++){StructureDiagramUtil.portToPart(child,function(x,y,_direction,portPosition){if(_direction==="right"||_direction==="left"){return
}var prevWidth=DomUtil.calculateTextSize(child.labelNode.childNodes[0].textContent,child.labelNode).w;var childPosition=child.getPosition();
var start=child.getPosition().x;var reachTo=start+prevWidth/2;if(partMax<reachTo+childPosition.w*2||partMax<start+childPosition.w*2){return
}var diff=(prevWidth/2+w/2);var deltaDiff=position.w/6;if(diff>position.w/5-15){direction++}if(diff>position.w/4){direction++}})}var self=this;
if(direction<10){var directionFinder=function(direction,looped){if(direction===0){delta=(((position.h/2))/2)-5;x=position.x-portPosition.w;
y=(position.y+(position.h/2))-portPosition.h-delta}else{if(direction===1){delta=((position.h/2))/2;x=position.x-portPosition.w;y=((position.y+(position.h/2))-portPosition.h)+delta
}else{if(direction===2){delta=((position.w/2))/2;x=(position.x-portPosition.w)+(position.w/2)-delta;y=(position.y)-portPosition.h}else{if(direction===3){x=(position.x-portPosition.w)+(position.w/2);
y=(position.y)-portPosition.h}else{if(direction===4){delta=((position.w/2))/2;x=(position.x-portPosition.w)+(position.w/2)+delta;y=(position.y)-portPosition.h
}else{if(direction===5){delta=((position.h/2))/2;x=((position.x+position.w)-portPosition.w);y=((position.y+(position.h/2))-portPosition.h)-delta
}else{if(direction===6){delta=((position.h/2))/2;x=((position.x+position.w)-portPosition.w);y=((position.y+(position.h/2))-portPosition.h)+delta
}else{if(direction===7){delta=((position.w/2))/2;x=((position.x-portPosition.w)+(position.w/2))-delta;y=(position.y+(position.h))-portPosition.h
}else{if(direction===8){x=(position.x-portPosition.w)+(position.w/2);y=(position.y+(position.h))-portPosition.h}else{if(direction===9){delta=((position.w/2))/2;
x=((position.x-portPosition.w)+(position.w/2))+delta;y=(position.y+(position.h))-portPosition.h}}}}}}}}}}};directionFinder(direction)
}else{var start=children.length-10;var direction=start%8;var endY=(position.y+position.h)-20;if(direction<6){var byIndex=((parseFloat(direction/2)+((start-direction+1)/3))*portPosition.h);
if(!byIndex){byIndex=4}var delta=parseInt(start/8)+byIndex+(portPosition.h*2);var right=direction%2;if(!right){var x=((position.x)-portPosition.w);
var y=((position.y+(position.h/2))-portPosition.h)+delta;var diff=y-endY;if(diff>0){partObject.updatePosition({h:diff})}}else{var x=((position.x)-portPosition.w)+position.w
}var updatedPosition=partObject.getPosition();var y=((updatedPosition.y+(updatedPosition.h)))-((portPosition.h*2))+4}else{if(direction%2===0){var x=(position.x+position.w)-(portPosition.w/2);
var y=position.y-portPosition.h;partObject.updatePosition({w:30})}else{var x=(position.x+position.w)-parseFloat(portPosition.w*3);var y=(position.y+position.h)-portPosition.h
}}}for(var childIndex=0,child;child=children[childIndex];childIndex++){child.applyConstraints()}this.setPosition({x:x,y:y})}}this.applyConstraints();
var mouseDownHandler=Events.connect("mousedown",this.containerNode,this,function(e){this.handleMove(this.focalNode,e)});var mouseDownHandler=Events.connect("mousedown",this.labelNode,this,function(e){this.handleMove(this.focalNode,e)
})},setPosition:function(position,restrained){xCoord=parseFloat(position.x)||0;yCoord=parseFloat(position.y)||0;this.containerNode.setAttribute("transform","translate("+xCoord+","+yCoord+")");
if(this.multiplicity==="*"){this.set3D()}var self=this;StructureDiagramUtil.portToPart(this,function(x,y,direction,portPosition){if(direction==="right"){self.labelNode.setAttribute("x",x+2);
self.labelNode.setAttribute("y",y-1)}else{if(direction==="top"){var position=ObjectsUtil.get("util.core.DomUtil").calculateTextSize(self.labelNode.childNodes[0].textContent,self.focalNode);
self.labelNode.setAttribute("x",x-parseFloat(position.w/2));self.labelNode.setAttribute("y",y-parseFloat(portPosition.h/2))}else{if(direction==="left"){var position=ObjectsUtil.get("util.core.DomUtil").calculateTextSize(self.labelNode.childNodes[0].textContent,self.labelNode);
self.labelNode.setAttribute("x",parseFloat((x-(position.w+portPosition.w))));self.labelNode.setAttribute("y",y)}else{if(direction==="bottom"){var position=ObjectsUtil.get("util.core.DomUtil").calculateTextSize(self.labelNode.childNodes[0].textContent,self.focalNode);
self.labelNode.setAttribute("x",x-parseFloat(position.w/2));self.labelNode.setAttribute("y",y+parseFloat(portPosition.h))}}}}if(!restrained){self.applyConstraints()
}});var parentNode=self.labelNode.parentNode;parentNode.removeChild(self.labelNode);parentNode.appendChild(self.labelNode)},set3D:function(){if(!this.shadowNode){this.shadowNode=document.createElementNS(SVGUtil.SVG,"rect");
this.shadowNode.setAttribute("style","stroke:#000000;");this.shadowNode.setAttribute("fill",this.portFillColor||"#FFFFFF");this.containerNode.insertBefore(this.shadowNode,this.containerNode.firstChild)
}this.shadowNode.setAttribute("transform","translate("+(1)+","+(-2)+")");this.shadowNode.setAttribute("height",11);this.shadowNode.setAttribute("width",11)
},applyConstraints:function(){var part=this.container;if(!part||part._incomplete){return}var CoreUtil=ObjectsUtil.get("util.core.CoreUtil");
var childPosition=this.getPosition();var position=part.getPosition();if(this.isPrivate){var changed=false;var maxX=((position.x+position.w)-childPosition.w)-childPosition.w;
var minX=position.x+childPosition.w;var maxY=((position.y+position.h)-childPosition.h)-childPosition.h;var minY=position.y+childPosition.h;
var newPosition=CoreUtil.clone(childPosition);if(newPosition.x<minX){newPosition.x=minX;changed=true}else{if(newPosition.x>maxX){newPosition.x=maxX;
changed=true}}if(newPosition.y<minY){newPosition.y=minY;changed=true}else{if(newPosition.y>maxY){newPosition.y=maxY;changed=true}}if(changed){this.setPosition(newPosition,true)
}}else{var enforceY=true;var newPosition=CoreUtil.clone(childPosition);var updateY=function(){var pos1=(position.y)-childPosition.h;var pos2=(position.y+position.h)-childPosition.h;
var diff1=Math.abs(newPosition.y-pos1);var diff2=Math.abs(newPosition.y-pos2);if(diff2<=diff1){newPosition.y=pos2}else{newPosition.y=pos1
}};if(childPosition.x<position.x-childPosition.w){newPosition.x=position.x-childPosition.w}else{if(childPosition.x>((position.x+position.w)-childPosition.w)){newPosition.x=(position.x+position.w)-childPosition.w
}else{var max=(position.x+position.w)-childPosition.w;var min=position.x-childPosition.w;var current=newPosition.x;StructureDiagramUtil.portToPart(this,function(x,y,direction,portPosition,isCorner,deltaInformation){if(isCorner){updateY()
}else{if(direction==="bottom"){if(Math.abs(deltaInformation.deltaBottom)>1){newPosition.y=newPosition.y+deltaInformation.deltaBottom}}else{if(direction==="top"){if(Math.abs(deltaInformation.deltaTop)>1){newPosition.y=newPosition.y-deltaInformation.deltaTop
}}else{if(direction==="right"){if(Math.abs(deltaInformation.deltaRight)>1){newPosition.x=newPosition.x+deltaInformation.deltaRight}}else{if(direction==="left"){if(Math.abs(deltaInformation.deltaLeft)>1){newPosition.x=newPosition.x-deltaInformation.deltaLeft
}}}}}}});enforceY=false}}if(enforceY){var max=(position.y+position.h)-childPosition.h;var min=(position.y)-childPosition.h;var current=childPosition.y-childPosition.h;
if(current<min||current>max){updateY()}}var minimuxX=position.x-childPosition.w;var maximumX=(position.x+position.w)-childPosition.w;
var minimuxY=position.y-childPosition.h;var maximumY=(position.y+position.h)-childPosition.h;if(newPosition.x<minimuxX){newPosition.x=minimuxX
}if(newPosition.x>maximumX){newPosition.x=maximumX}if(newPosition.y<minimuxY){newPosition.y=minimuxY}if(newPosition.y>maximumY){newPosition.y=maximumY
}if(parseInt(newPosition.x)!==parseInt(childPosition.x)||parseInt(newPosition.y)!==parseInt(childPosition.y)||parseInt(newPosition.h)!==parseInt(childPosition.h)||parseInt(newPosition.w)!==parseInt(childPosition.w)){this.setPosition(newPosition,true)
}}},getPosition:function(){var transform=ObjectsUtil.get("util.core.DomUtil").transformValue(this.containerNode);transform.w=13;transform.h=13;
return transform},handleMove:function(vertex,event){var DomUtil=ObjectsUtil.get("util.core.DomUtil");var CoreUtil=ObjectsUtil.get("util.core.CoreUtil");
var canvas=DomUtil.getFirstParent(vertex,"svg");var m=vertex.parentNode.getScreenCTM();var p=canvas.createSVGPoint();var scrollValue=DomUtil.scrollValue(vertex);
p.x=event.clientX+scrollValue.x;p.y=event.clientY+scrollValue.y;p=p.matrixTransform(m.inverse());var position=this.getPosition();var deltaX=parseFloat(p.x)-parseFloat(position.x);
var deltaY=parseFloat(p.y)-parseFloat(position.y);this._moving=vertex;var disableTextSelection=Events.connect("onselectstart",document,this,function(e){CoreUtil.stopEvent(e)
});var mouseMoveHandle=Events.connect("mousemove",document,this,function(e){var self=this;var m=vertex.parentNode.getScreenCTM();var p=canvas.createSVGPoint();
p.x=e.clientX;p.y=e.clientY;p=p.matrixTransform(m.inverse());var object={};if(this.isPrivate){object.y=p.y;object.x=p.x}else{StructureDiagramUtil.portToPart(this,function(x,y,direction,portPosition,isCorner){if(isCorner){object.y=p.y;
object.x=p.x}else{if(direction==="left"||direction==="right"){object.y=p.y}else{object.x=p.x}}})}self.shiftPosition(object);CoreUtil.stopEvent(e)
});var mouseUpHandle=Events.connect("mouseup",document,this,function(){Events.disconnect(mouseMoveHandle);Events.disconnect(mouseUpHandle);
Events.disconnect(disableTextSelection);this._moving=undefined;this.getSuperContainer().refreshBoundaries();Events.publish("structure.diagram.node.move."+this.id)
});CoreUtil.stopEvent(event)}});var Events=ObjectsUtil.get("util.core.Events");var incremntal=0;var sources=[];ObjectsUtil.declare("layout.shapes.PortConnector",["layout.shapes.StructureDiagramNode"],{focalNode:null,guid:null,name:null,color:null,fontColor:null,rx:null,parentNode:null,strokeWidth:null,_moving:null,type:null,connectorType:null,constructor:function(args){this.connectorType=args.connectorType;
this.type="portConnector";this.name=args.name||("Connector"+incremntal);this.guid=args.id||this.name;this.sources=args.sources;this.targets=args.targets;
this.part=args.part;incremntal++;this.points=args.points},draw:function(args){var colors=["red","green","blue","brown","black","orange","lime"];
var colors=["black","black","black","black","black","black","black","black"];if(sources.indexOf(this.sources[0])===-1){sources.push(this.sources[0])
}var color=colors[sources.indexOf(this.sources[0])];this.focalNode=document.createElementNS(SVGUtil.SVG,"polyline");this.focalNode.setAttribute("style","fill:none;stroke:"+color+";stroke-width:1px;");
this.parentNode.appendChild(this.focalNode);if(this.points){this.focalNode.setAttribute("points",this.points)}else{this.setPosition();
for(var typeIndex=0,type;type=["sources","targets"][typeIndex];typeIndex++){for(var index=0,current;current=this[type][index];index++){var currentPort=ShapesRegistry.get("Port",current);
currentPort.addConnector(this,type);Events.connect("setPosition",currentPort,this,function(position){this.setPosition(position)});this.container.applyConstraints()
}}}},setPosition:function(position){if(this.sources[0]===this.targets[0]){return this.focalNode.setAttribute("points","")}var positions=[];
var properTarget=this["targets"][0];var properSource=this["sources"][0];var targetObject=ShapesRegistry.get("Port",properTarget);var sourceObject=ShapesRegistry.get("Port",properSource);
if(targetObject.getPosition().x<sourceObject.getPosition().x){var temp=properSource;properSource=properTarget;properTarget=temp}var handler=function(x,y,direction){positions.push({x:x,y:y,direction:direction})
};var adjustPosition=function(object){if(object.direction==="left"){object.x=object.x;object.y=object.y+(5)}else{if(object.direction==="right"){object.x=object.x+(10);
object.y=object.y+(5)}else{if(object.direction==="top"){object.x=object.x+5;object.y=object.y}else{if(object.direction==="bottom"){object.y=object.y+10;
object.x=object.x+(5)}}}}};var source=ShapesRegistry.get("Port",properSource);var sourcePart=source.container;var sourcePartPosition=sourcePart.getPosition();
var sourcePosition=source.getPosition();StructureDiagramUtil.portToPart(properSource,handler);var target=ShapesRegistry.get("Port",properTarget);
var targetPart=target.container;var targetPartPosition=targetPart.getPosition();var targetPosition=target.getPosition();StructureDiagramUtil.portToPart(properTarget,handler);
var selfConnector=sourcePart===targetPart;var points=[];var pos1=positions[0];if(!positions[0]){return}sourcePosition.direction=pos1.direction;
var pos2=positions[1];if(!pos2){return}targetPosition.direction=pos2.direction;var currentSourcePosition=source.getPosition();var currentTargetPosition=target.getPosition();
var isInternal=false;var self=this;var revertDirectionForRelayPorts=function(currentPosition,current,other,otherPosition){if(current.isPrivate){if(otherPosition.direction==="left"){currentPosition.direction="right"
}else{if(otherPosition.direction==="top"){currentPosition.direction="bottom"}else{if(otherPosition.direction==="bottom"){currentPosition.direction="top"
}else{if(otherPosition.direction==="right"){currentPosition.direction="left"}}}}}else{if(current.parent===self.part&&(other.isPrivate||other.parent!==self.part)){if(currentPosition.direction==="left"){currentPosition.direction="right"
}else{if(currentPosition.direction==="top"){currentPosition.direction="bottom"}else{if(currentPosition.direction==="bottom"){currentPosition.direction="top"
}else{if(currentPosition.direction==="right"){currentPosition.direction="left"}}}}}}};if(source.isPrivate){revertDirectionForRelayPorts(targetPosition,target,source,sourcePosition);
revertDirectionForRelayPorts(sourcePosition,source,target,targetPosition)}else{revertDirectionForRelayPorts(sourcePosition,source,target,targetPosition);
revertDirectionForRelayPorts(targetPosition,target,source,sourcePosition)}var direction=sourcePosition.direction;var preciseTarget={x:targetPosition.x,y:targetPosition.y,direction:targetPosition.direction};
adjustPosition(preciseTarget);var finalDestination={x:preciseTarget.x,y:preciseTarget.y};var preciseStart={x:sourcePosition.x,y:sourcePosition.y,direction:sourcePosition.direction};
var moveTo=function(obj){var nextObj={};if(obj.direction==="left"){nextObj.x=obj.x-(10);nextObj.y=obj.y}else{if(obj.direction==="right"){nextObj.x=obj.x+(10);
nextObj.y=obj.y}else{if(obj.direction==="top"){nextObj.x=obj.x;nextObj.y=obj.y-(10)}else{if(obj.direction==="bottom"){nextObj.x=obj.x;
nextObj.y=obj.y+(10)}}}}nextObj.direction=obj.direction;return nextObj};var points=[];var start={x:sourcePosition.x,y:sourcePosition.y,direction:sourcePosition.direction};
adjustPosition(start);points.push(start);var afterStart=moveTo(start);points.push(afterStart);var end={x:targetPosition.x,y:targetPosition.y,direction:targetPosition.direction};
adjustPosition(end);var beforeEnd=moveTo(end);points.push({x:beforeEnd.x,y:afterStart.y});points.push(beforeEnd);points.push(end);var detectOverlappedPoints=function(){var length=points.length;
for(var index=0;index<length-1;index++){var p1=points[index];var p2=points[index+1];var p3=points[index+2];var compareAtt=function(att){if(!p3){return false
}if(p1[att]===p2[att]&&p2[att]===p3[att]){return true}return false};if(compareAtt("y")){var otherDiff=0;if(((sourcePosition.direction==="left")&&(targetPosition.direction==="left"))){var p4=points[index+3];
if(p4){var differenceToPart=p4.y-p1.y}else{var differenceToPart=(targetPartPosition.y)-p1.y-(sourcePosition.h*1.5)}}else{if(((sourcePosition.direction==="left")&&(targetPosition.direction==="bottom"))){var differenceToPart=(targetPartPosition.y)-p1.y-(sourcePosition.h*1.5);
if(targetPartPosition.x>sourcePartPosition.x&&sourcePartPosition.y<targetPartPosition.y){var otherDiff=(targetPartPosition.x)-p1.x-(sourcePosition.h*1.5)
}}else{var differenceToPart=(sourcePartPosition.y+sourcePartPosition.h)-p2.y}}var upatedY=undefined;if(p2.x<p1.x&&p2.x<p3.x){upatedY=p2.y+differenceToPart;
points.splice(index+2,0,{x:p2.x+otherDiff,y:upatedY})}else{if(p3.y<p1.y&&p3.y<p2.y){upatedY=p2.y-differenceToPart;points.splice(index+2,0,{x:p1.x,y:upatedY})
}}if(upatedY){p3.y=upatedY}}else{if(compareAtt("x")){if((sourcePosition.direction==="bottom"&&targetPosition.direction==="top")){var differenceToPart=(targetPartPosition.x+targetPartPosition.w)-p1.x
}else{if(((sourcePosition.direction==="right"||sourcePosition.direction==="bottom")&&(p2.direction==="top"||p2.direction==="bottom"))||(sourcePosition.direction==="top"&&(p3.direction==="bottom"||p3.direction==="top"))){if((targetPart===sourcePart&&(target.isPrivate||source.isPrivate))){var differenceToPart=(targetPosition.x)-p1.x-(sourcePosition.h)
}else{var differenceToPart=(targetPartPosition.x)-p1.x-(sourcePosition.h*1.5)}if(sourcePosition.direction==="bottom"&&targetPosition.direction==="bottom"&&sourcePosition.y<targetPosition.y){var p0=points[index-1];
if(p0){p0.y=p2.y;p1.y=p2.y}}}else{var differenceToPart=(targetPartPosition.x+targetPartPosition.w)-p1.x}}var upatedY=undefined;if(p2.y<p1.y&&p2.y<p3.y){if(points[index+1].direction===points[index+2].direction&&!points[index+3]&&!(targetPosition.direction==="top")){points.splice(index+1,1)
}else{upatedY=p2.x+differenceToPart;points.splice(index+2,0,{x:p3.x,y:p2.y})}}else{if(p2.y>p1.y&&p2.y>p3.y){upatedY=p2.x+differenceToPart;
points.splice(index+2,0,{x:p3.x,y:p2.y})}}if(upatedY){p1.x=upatedY;p2.x=upatedY}}}}};detectOverlappedPoints();var removeUnwantedReturns=function(){var lastSimilarPars=[];
for(var index=1;index<points.length-5;index++){var p1=points[index];var p2=points[index+1];var p3=points[index+2];var p4=points[index+3];
if(p1.x===p2.x&&p3.x===p4.x&&p4.x>p2.x){points[index+1].y=p4.y;points.splice(points.indexOf(p3),1);points.splice(points.indexOf(p4),1);
index=1;continue}}};var shortenPath=function(){for(var index=1;index<points.length-3;index++){var point1=points[index];var point2=points[index+1];
var point3=points[index+2];if(!((point3.direction==="left"||point3.direction==="top")&&point1.y<point3.y&&(point1.direction==="bottom"))||(point3.direction&&point3.direction===point1.direction)){continue
}if(point1.y===point2.y&&point2.x===point3.x){point1.y=point3.y;if(points[index+3]){point3.x=points[index+3].x}points.splice(points.indexOf(point2),1);
index=1;continue}}};shortenPath();removeUnwantedReturns();var findLongestLine=function(){var longest={points:[],delta:0};var length=points.length;
for(var index=0;index<length-1;index++){var point1=points[index];var point2=points[index+1];var delta1=Math.abs(point2.x-point1.x);var delta2=Math.abs(point2.y-point1.y);
var delta=delta1>delta2?delta1:delta2;if(longest.delta<delta){longest={points:[point1,point2],delta:delta}}}return longest.points};var getIntersection=function(line){var line=findLongestLine();
var point1=line[0];var point2=line[1];var delta1=Math.abs(point2.x-point1.x);var delta2=Math.abs(point2.y-point1.y);if(delta1>delta2){return{direction:"horiontal",x:point1.x+(delta1/2),y:point1.y}
}else{var p1;if(point1.y>point2.y){p1=point1}else{p1=point2}return{direction:"vertical",x:point2.x,y:p1.y-(delta2/2)}}};if(this.connectorType&&this.connectorType.length>0){var symnbolLocation=getIntersection(findLongestLine());
var targetAsIs=ShapesRegistry.get("Port",this["targets"][0]);var sourceAsIs=ShapesRegistry.get("Port",this["sources"][0]);var receive;
if(targetAsIs.getPosition().x>=sourceAsIs.getPosition().x){receive=false;if(symnbolLocation.direction==="vertical"){symnbolLocation.y=symnbolLocation.y-20
}else{symnbolLocation.x=symnbolLocation.x-20}}else{receive=true;if(symnbolLocation.direction==="vertical"){symnbolLocation.y=symnbolLocation.y+20
}else{symnbolLocation.yx=symnbolLocation.x+20}}var elem=ConnectorSymbols.draw(this,this.connectorType,symnbolLocation.direction,receive);
elem.setAttribute("transform","translate("+symnbolLocation.x+","+symnbolLocation.y+")")}var sourceParent=source.focalNode.parentNode;
var targetParent=target.focalNode.parentNode;var sourceParentParent=sourceParent.parentNode;var targetParentParent=targetParent.parentNode;
sourceParentParent.removeChild(sourceParent);sourceParentParent.appendChild(sourceParent);targetParentParent.removeChild(targetParent);
targetParentParent.appendChild(targetParent);this.focalNode.setAttribute("points",this.arrayToPoints(points));var connectorList=[];var all=source.connectors.sources.concat(source.connectors.targets).concat(target.connectors.sources).concat(target.connectors.sources);
for(var index=0,current;current=all[index];index++){if(!connectorList[current.name]){connectorList[current.name]=current}}this.adjustOverlappedConnectors(connectorList)
},adjustOverlappedConnectors:function(connectorList){var portConnectors=connectorList||ShapesRegistry.get("PortConnector");var shapePoints={};
for(var name in portConnectors){var connector=portConnectors[name];if(!connector.getAttribute){continue}var connectorPoints=[];shapePoints[connector.name]={connector:connector,connectorPoints:connectorPoints};
var points=connector.getAttribute("points").split(" ");for(var index=0,point;point=points[index];index++){var pair=point.split(",");connectorPoints.push({x:parseFloat(pair[0]),y:parseFloat(pair[1])})
}}var connectorIndex=0;var visitedTargets={};var visitedConnectors=[];var indenMap=ObjectsUtil.newInstance("util.core.Map");for(var name in shapePoints){var object=shapePoints[name];
var portConnector=object.connector;var connectorPoints=object.connectorPoints;for(var subName in shapePoints){connectorIndex++;var subObject=shapePoints[subName];
var subPortConnector=subObject.connector;if(subPortConnector===portConnector){continue}var subConnectorPoints=subObject.connectorPoints;
var target=subPortConnector.targets[0];if(visitedTargets[target]===undefined){visitedTargets[target]=0}else{if(visitedConnectors.indexOf(subPortConnector)===-1){visitedTargets[target]++
}}visitedConnectors.push(subPortConnector);var increment=indenMap.get(subPortConnector);if(!increment){increment=((visitedTargets[target]%2)?2:-2)*(Math.round(visitedTargets[target]/2));
indenMap.put(subPortConnector,increment)}var alteredPoints=[subConnectorPoints[0],subConnectorPoints[1]];var changed=false;for(var index=0;
index<subConnectorPoints.length-1;index++){var current=subConnectorPoints[index];var next=subConnectorPoints[index+1];var pairX=[current.x,next.x];
var pairY=[current.y,next.y];var changeHorizontal,changeVertical;for(var mainIndex=0;mainIndex<connectorPoints.length-1;mainIndex++){var mainCurrent=connectorPoints[mainIndex];
var mainNext=connectorPoints[mainIndex+1];var adjustNewValue=function(getter,ignoreGetter){var direction=1;var increase=3;var lastMax=3;
var newValue=subConnectorPoints[index][getter]+(increase*direction);var found=false;while(!found){search:{for(var searchName in shapePoints){var searchObject=shapePoints[searchName];
var searchObjectPoints=searchObject.connectorPoints;for(var searchIndex=0,searchPoint;searchPoint=searchObjectPoints[searchIndex];searchIndex++){if(searchPoint[getter]===newValue&&(Math.abs(searchPoint[ignoreGetter]-subConnectorPoints[index][ignoreGetter])<25||Math.abs(searchPoint[ignoreGetter]-subConnectorPoints[index+1][ignoreGetter])<25)){if(direction<1){if(increase<0.1){increase=lastMax+1;
lastMax++}else{increase=increase/2}}direction=direction*-1;newValue=subConnectorPoints[index][getter]+(increase*direction);break search
}}}found=true;break}}return newValue};var changeHorizontal=mainCurrent.x===current.x&&mainNext.x===next.x&&mainCurrent.x===next.x&&(mainNext.y===next.y||Math.abs(current.y-mainCurrent.y)<=3);
var changeVertical=mainCurrent.y===current.y&&mainNext.y===next.y&&mainCurrent.y===next.y&&(mainNext.x===next.x||Math.abs(current.x-mainCurrent.x)<=3);
if(changeHorizontal){var newValue=adjustNewValue("x","y");subObject.alteredx=true;subConnectorPoints[index].x=newValue;subConnectorPoints[index+1].x=newValue;
subPortConnector.movedHorizontally=true;changed=true}else{if(changeVertical){var newValue=adjustNewValue("y","x");subObject.alteredy=true;
subConnectorPoints[index].y=newValue;subConnectorPoints[index+1].y=newValue;subPortConnector.movedVertically=true;changed=true}}}}for(var index=0;
index<subConnectorPoints.length-2;index++){var p1=subConnectorPoints[index];var p2=subConnectorPoints[index+1];var p3=subConnectorPoints[index+2];
if(p2.y<p1.y&&p2.y<p3.y&&p1.x===p2.x&&p2.x===p3.x){subConnectorPoints.splice(index+1,1);index=0}else{if(p2.x<p1.x&&p2.x<p3.x&&p1.y===p2.y&&p2.y===p3.y){subConnectorPoints.splice(index+1,1);
index=0}}}for(var index=0;index<subConnectorPoints.length-1;index++){var p1=subConnectorPoints[index];var p2=subConnectorPoints[index+1];
var p3=subConnectorPoints[index+2];if(p2.x!=p1.x&&Math.abs(p2.x-p1.x)<7){p2.x=p1.x;index=-1;changed=true}else{if(p2.y-p1.y&&Math.abs(p2.y-p1.y)<7){p2.y=p1.y;
index=0;changed=true}else{if(index>4){break}}}}if(changed){var alteredPoints="";for(var pointIndex=0,currentPoint;currentPoint=subConnectorPoints[pointIndex];
pointIndex++){var prev1=subConnectorPoints[pointIndex-1];var prev2=subConnectorPoints[pointIndex-2];if(alteredPoints){alteredPoints=alteredPoints+" "
}var newPoint=currentPoint;if(prev1&&prev2){if(currentPoint.x!==prev1.x&&currentPoint.y!==prev1.y){if(prev2.x==prev1.x){newPoint.x=prev2.x
}else{if(prev2.y==prev1.y){newPoint.y=prev2.y}}}}alteredPoints=alteredPoints+newPoint.x+","+newPoint.y}subPortConnector.setAttribute("points",alteredPoints)
}}}},arrayToPoints:function(points){var pointString="";for(var index=0,current;current=points[index];index++){if(pointString){pointString=pointString+" "
}pointString=pointString+current.x+","+current.y}return pointString},getPosition:function(){return{x:parseFloat(this.focalNode.getAttribute("x")),y:parseFloat(this.focalNode.getAttribute("y")),w:13,h:13}
}})})();var StateTree={};function StateNode(a,b){this.parent=a;this.id=b;this.activeColour=null;this.passiveColor=null}StateNode.prototype.getParent=function(){return this.parent
};StateNode.prototype.getRoot=function(){var b=this;var a=null;while(b!==null){a=b;b=b.getParent()}return a};StateNode.prototype.getId=function(){return this.id
};StateNode.prototype.getDepth=function(){var a=this;var b=0;while(a!==null){a=a.getParent();b++}return b};function StateColourer(b,a){this.numShades=b;
this.numColours=a;this.cachedColours=this.baseColours.slice()}StateColourer.prototype.passiveColour="999999";StateColourer.prototype.baseColours=["CC99A2","9AAFAF","FFFF7F","98FB98","9DD6D6","D2AB6F","B19CD9"];
StateColourer.prototype.getBasePassiveColour=function(){var a=this.passiveColour;for(var b=0;b<(5-this.numShades)&&b<3;b++){a=this.lighten(a)
}return a};StateColourer.prototype.getBaseColour=function(c){var a;if(c<this.cachedColours.length){a=this.cachedColours[c]}else{c=c%this.cachedColours.length;
a=this.modifyColour(this.cachedColours[c]);this.cachedColours[c]=a}for(var b=0;b<(5-this.numShades)&&b<3;b++){a=this.lighten(a)}return a
};StateColourer.prototype.getLightenAmount=function(){return 15};StateColourer.prototype.getModifyAmount=function(){return 20};StateColourer.prototype.modifyColour=function(c){var c=this.createColour(c);
var a,b;if(c.red>c.blue){if(c.red>c.green){c.red-=this.getModifyAmount();if(c.blue>c.green){c.green+=this.getModifyAmount()}else{c.blue+=this.getModifyAmount()
}}else{c.green-=this.getModifyAmount();c.blue+=this.getModifyAmount()}}else{if(c.blue>c.green){c.blue-=this.getModifyAmount();if(c.red>c.green){c.green+=this.getModifyAmount()
}else{c.red+=this.getModifyAmount()}}else{c.blue-=this.getModifyAmount();c.red+=this.getModifyAmount()}}return c.toHex()};StateColourer.prototype.lighten=function(b){var b=this.createColour(b);
var a=this.getLightenAmount();b.modifyRed(a);b.modifyBlue(a);b.modifyGreen(a);return b.toHex()};StateColourer.prototype.createColour=function(f){var c=parseInt(f,16);
var e=(c>>16);var a=((c>>8)&255);var d=(c&255);return new Colour(e,a,d)};function Colour(c,a,b){this.red=c;this.blue=a;this.green=b}Colour.prototype.modifyRed=function(a){this.red+=a;
if(this.red>255){this.red=255}else{if(this.red<0){this.red=0}}};Colour.prototype.modifyBlue=function(a){this.blue+=a;if(this.blue>255){this.blue=255
}else{if(this.blue<0){this.blue=0}}};Colour.prototype.modifyGreen=function(a){this.green+=a;if(this.green>255){this.green=255}else{if(this.green<0){this.green=0
}}};Colour.prototype.modifyByName=function(a,b){if(a!=="red"&&a!=="blue"&&a!=="green"){throw"Not a valid colour name"}};Colour.prototype.toHex=function(){var a=this.green|(this.blue<<8)|(this.red<<16);
return a.toString(16)};function StateTable(b,a){this.table=b;this.stateTree=a}StateTable.prototype.readTable=function(){var c=this.table.find("tr");
var d=0;for(var a=1;a<c.length;a++){var b=jQuery(c[a]).find("td")[0];this.stateTree.stateNodes.push(this.stateTree.createState(jQuery(b),d++))
}};StateTable.prototype.colour=function(){var f=this.table.find("tr");var b,d,a;if(this.stateTree.type==="state"){b=jQuery(f[0]).find("td");
for(var e=1;e<b.length;e++){jQuery(b[e]).css("background-color","#"+this.stateTree.stateNodes[e-1].activeColour)}}for(var e=1;e<f.length;
e++){d=this.stateTree.stateNodes[e-1];b=jQuery(f[e]).find("td");a=jQuery(b[0]);a.css("background-color","#"+d.activeColour);for(var c=1;
c<b.length;c++){a=jQuery(b[c]);if(a.text().match(/^\s$/)){a.css("background-color","#"+d.passiveColour)}else{a.css("background-color","#"+d.activeColour)
}}}};function EventSequence(c,a,b){this.headerTable=c;this.bodyTable=a;this.stateTree=b}EventSequence.prototype.readTable=function(){var a=jQuery(this.headerTable).find("td");
var c=0;for(var b=1;b<a.length;b++){this.stateTree.stateNodes.push(this.stateTree.createState(jQuery(a[b]),c++))}};EventSequence.prototype.colour=function(){var f,b,d,a;
f=jQuery(this.headerTable).find("td");for(var e=1;e<f.length;e++){d=this.stateTree.stateNodes[e-1];jQuery(f[e]).css("background-color","#"+d.activeColour)
}f=jQuery(this.bodyTable).find("tr");for(var e=1;e<f.length;e++){d=this.stateTree.stateNodes[e-1];b=jQuery(f[e]).find("td");for(var c=0;
c<b.length;c++){a=jQuery(b[c]);if(a.text().match(/^\s$/)){a.css("background-color","#"+d.passiveColour)}else{a.css("background-color","#"+d.activeColour)
}}}};StateTree.init=function(b,a){StateTree.stateNodes=[];if(b.hasClass("event-statetable")){StateTree.type="event";StateTree.handler=new StateTable(b,this)
}else{if(b.hasClass("state-statetable")){StateTree.type="state";StateTree.handler=new StateTable(b,this)}else{if(b.hasClass("event-sequence-grid")){StateTree.type="eventSequence";
StateTree.handler=new EventSequence(b.find("table")[0],b.find("table")[1],this)}else{console.log("Unknown state table type");StateTree.type="unknown"
}}}};StateTree.createState=function(a,d){var c=parseInt(a.attr("data-parent"));var b=StateTree.stateNodes[c];if(isNaN(c)){b=null}return new StateNode(b,d)
};StateTree.maxDepth=function(){var a=0;var b;for(var c=0;c<StateTree.stateNodes.length;c++){b=StateTree.stateNodes[c].getDepth();if(b>a){a=b
}}return a};StateTree.numStateFamilies=function(){numStateFamilies=0;for(var a=0;a<StateTree.stateNodes.length;a++){if(StateTree.stateNodes[a].getParent()===null){numStateFamilies++
}}return numStateFamilies};StateTree.readTable=function(){StateTree.handler.readTable()};StateTree.assignStateColours=function(){var b=new StateColourer(StateTree.maxDepth(),StateTree.numStateFamilies());
var c=0;var d;for(var a=0;a<StateTree.stateNodes.length;a++){d=StateTree.stateNodes[a];if(d.getParent()===null){d.passiveColour=b.getBasePassiveColour();
d.activeColour=b.getBaseColour(c++)}else{d.passiveColour=b.lighten(d.getParent().passiveColour);d.activeColour=b.lighten(d.getParent().activeColour)
}}};StateTree.colour=function(){StateTree.assignStateColours();StateTree.handler.colour()};StateTree.colourStateTables=function(){jQuery(document).ready(function(){jQuery(".statetable").each(function(){StateTree.init(jQuery(this));
StateTree.readTable();StateTree.colour()})})};StateTree.colourEventSequences=function(){jQuery(document).ready(function(){jQuery(".event-sequence-grid").each(function(){StateTree.init(jQuery(this));
StateTree.readTable();StateTree.colour()})})};