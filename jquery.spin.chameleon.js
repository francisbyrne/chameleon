/**
 * Spin.js
 * http://fgnass.github.io/spin.js/
 *
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */
 (function(t,e){if(typeof exports=="object")module.exports=e();else if(typeof define=="function"&&define.amd)define(e);else t.Spinner=e()})(this,function(){"use strict";var t=["webkit","Moz","ms","O"],e={},i;function o(t,e){var i=document.createElement(t||"div"),o;for(o in e)i[o]=e[o];return i}function n(t){for(var e=1,i=arguments.length;e<i;e++)t.appendChild(arguments[e]);return t}var r=function(){var t=o("style",{type:"text/css"});n(document.getElementsByTagName("head")[0],t);return t.sheet||t.styleSheet}();function s(t,o,n,s){var a=["opacity",o,~~(t*100),n,s].join("-"),f=.01+n/s*100,l=Math.max(1-(1-t)/o*(100-f),t),u=i.substring(0,i.indexOf("Animation")).toLowerCase(),d=u&&"-"+u+"-"||"";if(!e[a]){r.insertRule("@"+d+"keyframes "+a+"{"+"0%{opacity:"+l+"}"+f+"%{opacity:"+t+"}"+(f+.01)+"%{opacity:1}"+(f+o)%100+"%{opacity:"+t+"}"+"100%{opacity:"+l+"}"+"}",r.cssRules.length);e[a]=1}return a}function a(e,i){var o=e.style,n,r;i=i.charAt(0).toUpperCase()+i.slice(1);for(r=0;r<t.length;r++){n=t[r]+i;if(o[n]!==undefined)return n}if(o[i]!==undefined)return i}function f(t,e){for(var i in e)t.style[a(t,i)||i]=e[i];return t}function l(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)if(t[o]===undefined)t[o]=i[o]}return t}function u(t){var e={x:t.offsetLeft,y:t.offsetTop};while(t=t.offsetParent)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}function d(t,e){return typeof t=="string"?t:t[e%t.length]}var p={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:1/4,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};function c(t){if(typeof this=="undefined")return new c(t);this.opts=l(t||{},c.defaults,p)}c.defaults={};l(c.prototype,{spin:function(t){this.stop();var e=this,n=e.opts,r=e.el=f(o(0,{className:n.className}),{position:n.position,width:0,zIndex:n.zIndex}),s=n.radius+n.length+n.width,a,l;if(t){t.insertBefore(r,t.firstChild||null);l=u(t);a=u(r);f(r,{left:(n.left=="auto"?l.x-a.x+(t.offsetWidth>>1):parseInt(n.left,10)+s)+"px",top:(n.top=="auto"?l.y-a.y+(t.offsetHeight>>1):parseInt(n.top,10)+s)+"px"})}r.setAttribute("role","progressbar");e.lines(r,e.opts);if(!i){var d=0,p=(n.lines-1)*(1-n.direction)/2,c,h=n.fps,m=h/n.speed,y=(1-n.opacity)/(m*n.trail/100),g=m/n.lines;(function v(){d++;for(var t=0;t<n.lines;t++){c=Math.max(1-(d+(n.lines-t)*g)%m*y,n.opacity);e.opacity(r,t*n.direction+p,c,n)}e.timeout=e.el&&setTimeout(v,~~(1e3/h))})()}return e},stop:function(){var t=this.el;if(t){clearTimeout(this.timeout);if(t.parentNode)t.parentNode.removeChild(t);this.el=undefined}return this},lines:function(t,e){var r=0,a=(e.lines-1)*(1-e.direction)/2,l;function u(t,i){return f(o(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:t,boxShadow:i,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*r+e.rotate)+"deg) translate("+e.radius+"px"+",0)",borderRadius:(e.corners*e.width>>1)+"px"})}for(;r<e.lines;r++){l=f(o(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:i&&s(e.opacity,e.trail,a+r*e.direction,e.lines)+" "+1/e.speed+"s linear infinite"});if(e.shadow)n(l,f(u("#000","0 0 4px "+"#000"),{top:2+"px"}));n(t,n(l,u(d(e.color,r),"0 0 1px rgba(0,0,0,.1)")))}return t},opacity:function(t,e,i){if(e<t.childNodes.length)t.childNodes[e].style.opacity=i}});function h(){function t(t,e){return o("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',e)}r.addRule(".spin-vml","behavior:url(#default#VML)");c.prototype.lines=function(e,i){var o=i.length+i.width,r=2*o;function s(){return f(t("group",{coordsize:r+" "+r,coordorigin:-o+" "+-o}),{width:r,height:r})}var a=-(i.width+i.length)*2+"px",l=f(s(),{position:"absolute",top:a,left:a}),u;function p(e,r,a){n(l,n(f(s(),{rotation:360/i.lines*e+"deg",left:~~r}),n(f(t("roundrect",{arcsize:i.corners}),{width:o,height:i.width,left:i.radius,top:-i.width>>1,filter:a}),t("fill",{color:d(i.color,e),opacity:i.opacity}),t("stroke",{opacity:0}))))}if(i.shadow)for(u=1;u<=i.lines;u++)p(u,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(u=1;u<=i.lines;u++)p(u);return n(e,l)};c.prototype.opacity=function(t,e,i,o){var n=t.firstChild;o=o.shadow&&o.lines||0;if(n&&e+o<n.childNodes.length){n=n.childNodes[e+o];n=n&&n.firstChild;n=n&&n.firstChild;if(n)n.opacity=i}}}var m=f(o("group"),{behavior:"url(#default#VML)"});if(!a(m,"transform")&&m.adj)h();else i=a(m,"animation");return c});
 
/** Color.js 
    https://github.com/harthur/color/tree/gh-pages

Copyright (c) 2012 Heather Arthur

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
!function(a,b,c){function d(c,f){if(!b[c]){if(!a[c]){var g="function"==typeof require&&require;if(!f&&g)return g(c,!0);if(e)return e(c,!0);throw new Error("Cannot find module '"+c+"'")}var h=b[c]={exports:{}};a[c][0].call(h.exports,function(b){var e=a[c][1][b];return d(e?e:b)},h,h.exports)}return b[c].exports}for(var e="function"==typeof require&&require,f=0;f<c.length;f++)d(c[f]);return d}({1:[function(a){Color=a("./color")},{"./color":2}],2:[function(a,b){var c=a("color-convert"),d=a("color-string");b.exports=function(a){return new e(a)};var e=function(a){if(this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],cmyk:[0,0,0,0],alpha:1},"string"==typeof a){var b=d.getRgba(a);b?this.setValues("rgb",b):(b=d.getHsla(a))&&this.setValues("hsl",b)}else if("object"==typeof a){var b=a;void 0!==b.r||void 0!==b.red?this.setValues("rgb",b):void 0!==b.l||void 0!==b.lightness?this.setValues("hsl",b):void 0!==b.v||void 0!==b.value?this.setValues("hsv",b):(void 0!==b.c||void 0!==b.cyan)&&this.setValues("cmyk",b)}};e.prototype={rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var a=this.values.rgb;return a.concat([this.values.alpha])},hslaArray:function(){var a=this.values.hsl;return a.concat([this.values.alpha])},alpha:function(a){return void 0===a?this.values.alpha:(this.setValues("alpha",a),this)},red:function(a){return this.setChannel("rgb",0,a)},green:function(a){return this.setChannel("rgb",1,a)},blue:function(a){return this.setChannel("rgb",2,a)},hue:function(a){return this.setChannel("hsl",0,a)},saturation:function(a){return this.setChannel("hsl",1,a)},lightness:function(a){return this.setChannel("hsl",2,a)},saturationv:function(a){return this.setChannel("hsv",1,a)},value:function(a){return this.setChannel("hsv",2,a)},cyan:function(a){return this.setChannel("cmyk",0,a)},magenta:function(a){return this.setChannel("cmyk",1,a)},yellow:function(a){return this.setChannel("cmyk",2,a)},black:function(a){return this.setChannel("cmyk",3,a)},hexString:function(){return d.hexString(this.values.rgb)},rgbString:function(){return d.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return d.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return d.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return d.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return d.hslaString(this.values.hsl,this.values.alpha)},keyword:function(){return d.keyword(this.values.rgb,this.values.alpha)},luminosity:function(){for(var a=this.values.rgb,b=[],c=0;c<a.length;c++){var d=a[c]/255;b[c]=.03928>=d?d/12.92:Math.pow((d+.055)/1.055,2.4)}return.2126*b[0]+.7152*b[1]+.0722*b[2]},contrast:function(a){var b=this.luminosity(),c=a.luminosity();return b>c?(b+.05)/(c+.05):(c+.05)/(b+.05)},dark:function(){var a=this.values.rgb,b=(299*a[0]+587*a[1]+114*a[2])/1e3;return 128>b},light:function(){return!this.dark()},negate:function(){for(var a=[],b=0;3>b;b++)a[b]=255-this.values.rgb[b];return this.setValues("rgb",a),this},lighten:function(a){return this.values.hsl[2]+=this.values.hsl[2]*a,this.setValues("hsl",this.values.hsl),this},darken:function(a){return this.values.hsl[2]-=this.values.hsl[2]*a,this.setValues("hsl",this.values.hsl),this},saturate:function(a){return this.values.hsl[1]+=this.values.hsl[1]*a,this.setValues("hsl",this.values.hsl),this},desaturate:function(a){return this.values.hsl[1]-=this.values.hsl[1]*a,this.setValues("hsl",this.values.hsl),this},greyscale:function(){var a=this.values.rgb,b=.3*a[0]+.59*a[1]+.11*a[2];return this.setValues("rgb",[b,b,b]),this},clearer:function(a){return this.setValues("alpha",this.values.alpha-this.values.alpha*a),this},opaquer:function(a){return this.setValues("alpha",this.values.alpha+this.values.alpha*a),this},rotate:function(a){var b=this.values.hsl[0];return b=(b+a)%360,b=0>b?360+b:b,this.values.hsl[0]=b,this.setValues("hsl",this.values.hsl),this},mix:function(a,b){b=1-(null==b?.5:b);for(var c=2*b-1,d=this.alpha()-a.alpha(),e=((-1==c*d?c:(c+d)/(1+c*d))+1)/2,f=1-e,g=this.rgbArray(),h=a.rgbArray(),i=0;i<g.length;i++)g[i]=g[i]*e+h[i]*f;this.setValues("rgb",g);var j=this.alpha()*b+a.alpha()*(1-b);return this.setValues("alpha",j),this},toJSON:function(){return this.rgb()}},e.prototype.getValues=function(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=this.values[a][c];return 1!=this.values.alpha&&(b.a=this.values.alpha),b},e.prototype.setValues=function(a,b){var d={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],cmyk:["cyan","magenta","yellow","black"]},e={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],cmyk:[100,100,100,100]},f=1;if("alpha"==a)f=b;else if(b.length)this.values[a]=b.slice(0,a.length),f=b[a.length];else if(void 0!==b[a[0]]){for(var g=0;g<a.length;g++)this.values[a][g]=b[a[g]];f=b.a}else if(void 0!==b[d[a][0]]){for(var h=d[a],g=0;g<a.length;g++)this.values[a][g]=b[h[g]];f=b.alpha}if(this.values.alpha=Math.max(0,Math.min(1,void 0!==f?f:this.values.alpha)),"alpha"!=a){for(var i in d){i!=a&&(this.values[i]=c[a][i](this.values[a]));for(var g=0;g<i.length;g++){var j=Math.max(0,Math.min(e[i][g],this.values[i][g]));this.values[i][g]=Math.round(j)}}return!0}},e.prototype.setSpace=function(a,b){var c=b[0];return void 0===c?this.getValues(a):("number"==typeof c&&(c=Array.prototype.slice.call(b)),this.setValues(a,c),this)},e.prototype.setChannel=function(a,b,c){return void 0===c?this.values[a][b]:(this.values[a][b]=c,this.setValues(a,this.values[a]),this)}},{"color-convert":3,"color-string":4}],3:[function(a,b,c){var d=a("./conversions"),c={};b.exports=c;for(var e in d){c[e+"Raw"]=function(a){return function(b){return"number"==typeof b&&(b=Array.prototype.slice.call(arguments)),d[a](b)}}(e);var f=/(\w+)2(\w+)/.exec(e),g=f[1],h=f[2];c[g]=c[g]||{},c[g][h]=c[e]=function(a){return function(b){"number"==typeof b&&(b=Array.prototype.slice.call(arguments));var c=d[a](b);if("string"==typeof c||void 0===c)return c;for(var e=0;e<c.length;e++)c[e]=Math.round(c[e]);return c}}(e)}},{"./conversions":5}],5:[function(a,b){function c(a){var b,c,d,e=a[0]/255,f=a[1]/255,g=a[2]/255,h=Math.min(e,f,g),i=Math.max(e,f,g),j=i-h;return i==h?b=0:e==i?b=(f-g)/j:f==i?b=2+(g-e)/j:g==i&&(b=4+(e-f)/j),b=Math.min(60*b,360),0>b&&(b+=360),d=(h+i)/2,c=i==h?0:.5>=d?j/(i+h):j/(2-i-h),[b,100*c,100*d]}function d(a){var b,c,d,e=a[0],f=a[1],g=a[2],h=Math.min(e,f,g),i=Math.max(e,f,g),j=i-h;return c=0==i?0:1e3*(j/i)/10,i==h?b=0:e==i?b=(f-g)/j:f==i?b=2+(g-e)/j:g==i&&(b=4+(e-f)/j),b=Math.min(60*b,360),0>b&&(b+=360),d=1e3*(i/255)/10,[b,c,d]}function e(a){var b,c,d,e,f=a[0]/255,g=a[1]/255,h=a[2]/255;return e=Math.min(1-f,1-g,1-h),b=(1-f-e)/(1-e),c=(1-g-e)/(1-e),d=(1-h-e)/(1-e),[100*b,100*c,100*d,100*e]}function f(a){return A[JSON.stringify(a)]}function g(a){var b=a[0]/255,c=a[1]/255,d=a[2]/255;b=b>.04045?Math.pow((b+.055)/1.055,2.4):b/12.92,c=c>.04045?Math.pow((c+.055)/1.055,2.4):c/12.92,d=d>.04045?Math.pow((d+.055)/1.055,2.4):d/12.92;var e=.4124*b+.3576*c+.1805*d,f=.2126*b+.7152*c+.0722*d,g=.0193*b+.1192*c+.9505*d;return[100*e,100*f,100*g]}function h(a){var b,c,d,e=g(a),f=e[0],h=e[1],i=e[2];return f/=95.047,h/=100,i/=108.883,f=f>.008856?Math.pow(f,1/3):7.787*f+16/116,h=h>.008856?Math.pow(h,1/3):7.787*h+16/116,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,b=116*h-16,c=500*(f-h),d=200*(h-i),[b,c,d]}function i(a){var b,c,d,e,f,g=a[0]/360,h=a[1]/100,i=a[2]/100;if(0==h)return f=255*i,[f,f,f];c=.5>i?i*(1+h):i+h-i*h,b=2*i-c,e=[0,0,0];for(var j=0;3>j;j++)d=g+1/3*-(j-1),0>d&&d++,d>1&&d--,f=1>6*d?b+6*(c-b)*d:1>2*d?c:2>3*d?b+6*(c-b)*(2/3-d):b,e[j]=255*f;return e}function j(a){var b,c,d=a[0],e=a[1]/100,f=a[2]/100;return f*=2,e*=1>=f?f:2-f,c=(f+e)/2,b=2*e/(f+e),[d,100*e,100*c]}function k(a){return e(i(a))}function l(a){return f(i(a))}function m(a){var b=a[0]/60,c=a[1]/100,d=a[2]/100,e=Math.floor(b)%6,f=b-Math.floor(b),g=255*d*(1-c),h=255*d*(1-c*f),i=255*d*(1-c*(1-f)),d=255*d;switch(e){case 0:return[d,i,g];case 1:return[h,d,g];case 2:return[g,d,i];case 3:return[g,h,d];case 4:return[i,g,d];case 5:return[d,g,h]}}function n(a){var b,c,d=a[0],e=a[1]/100,f=a[2]/100;return c=(2-e)*f,b=e*f,b/=1>=c?c:2-c,c/=2,[d,100*b,100*c]}function o(a){return e(m(a))}function p(a){return f(m(a))}function q(a){var b,c,d,e=a[0]/100,f=a[1]/100,g=a[2]/100,h=a[3]/100;return b=1-Math.min(1,e*(1-h)+h),c=1-Math.min(1,f*(1-h)+h),d=1-Math.min(1,g*(1-h)+h),[255*b,255*c,255*d]}function r(a){return c(q(a))}function s(a){return d(q(a))}function t(a){return f(q(a))}function u(a){var b,c,d,e=a[0]/100,f=a[1]/100,g=a[2]/100;return b=3.2406*e+-1.5372*f+g*-.4986,c=e*-.9689+1.8758*f+.0415*g,d=.0557*e+f*-.204+1.057*g,b=b>.0031308?1.055*Math.pow(b,1/2.4)-.055:b=12.92*b,c=c>.0031308?1.055*Math.pow(c,1/2.4)-.055:c=12.92*c,d=d>.0031308?1.055*Math.pow(d,1/2.4)-.055:d=12.92*d,b=0>b?0:b,c=0>c?0:c,d=0>d?0:d,[255*b,255*c,255*d]}function v(a){return z[a]}function w(a){return c(v(a))}function x(a){return d(v(a))}function y(a){return e(v(a))}b.exports={rgb2hsl:c,rgb2hsv:d,rgb2cmyk:e,rgb2keyword:f,rgb2xyz:g,rgb2lab:h,hsl2rgb:i,hsl2hsv:j,hsl2cmyk:k,hsl2keyword:l,hsv2rgb:m,hsv2hsl:n,hsv2cmyk:o,hsv2keyword:p,cmyk2rgb:q,cmyk2hsl:r,cmyk2hsv:s,cmyk2keyword:t,keyword2rgb:v,keyword2hsl:w,keyword2hsv:x,keyword2cmyk:y,xyz2rgb:u};var z={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},A={};for(var B in z)A[JSON.stringify(z[B])]=B},{}],4:[function(a,b){function c(a){if(a){var b=/^#([a-fA-F0-9]{3})$/,c=/^#([a-fA-F0-9]{6})$/,d=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d\.]+)\s*)?\)$/,e=/^rgba?\(\s*([\d\.]+)\%\s*,\s*([\d\.]+)\%\s*,\s*([\d\.]+)\%\s*(?:,\s*([\d\.]+)\s*)?\)$/,f=/(\D+)/,g=[0,0,0],h=1,i=a.match(b);if(i){i=i[1];for(var j=0;j<g.length;j++)g[j]=parseInt(i[j]+i[j],16)}else if(i=a.match(c)){i=i[1];for(var j=0;j<g.length;j++)g[j]=parseInt(i.slice(2*j,2*j+2),16)}else if(i=a.match(d)){for(var j=0;j<g.length;j++)g[j]=parseInt(i[j+1]);h=parseFloat(i[4])}else if(i=a.match(e)){for(var j=0;j<g.length;j++)g[j]=Math.round(2.55*parseFloat(i[j+1]));h=parseFloat(i[4])}else if(i=a.match(f)){if("transparent"==i[1])return[0,0,0,0];if(g=r.keyword2rgb(i[1]),!g)return}for(var j=0;j<g.length;j++)g[j]=p(g[j],0,255);return h=h||0==h?p(h,0,1):1,g.push(h),g}}function d(a){if(a){var b=/^hsla?\(\s*(\d+)\s*,\s*([\d\.]+)%\s*,\s*([\d\.]+)%\s*(?:,\s*([\d\.]+)\s*)?\)/,c=a.match(b);if(c){var d=p(parseInt(c[1]),0,360),e=p(parseFloat(c[2]),0,100),f=p(parseFloat(c[3]),0,100),g=p(parseFloat(c[4])||1,0,1);return[d,e,f,g]}}}function e(a){return c(a).slice(0,3)}function f(a){return d(a).slice(0,3)}function g(a){var b=c(a);return b?b[3]:(b=d(a))?b[3]:void 0}function h(a){return"#"+q(a[0])+q(a[1])+q(a[2])}function i(a,b){return 1>b||a[3]&&a[3]<1?j(a,b):"rgb("+a[0]+", "+a[1]+", "+a[2]+")"}function j(a,b){return void 0===b&&(b=void 0!==a[3]?a[3]:1),"rgba("+a[0]+", "+a[1]+", "+a[2]+", "+b+")"}function k(a,b){if(1>b||a[3]&&a[3]<1)return l(a,b);var c=Math.round(100*(a[0]/255)),d=Math.round(100*(a[1]/255)),e=Math.round(100*(a[2]/255));return"rgb("+c+"%, "+d+"%, "+e+"%)"}function l(a,b){var c=Math.round(100*(a[0]/255)),d=Math.round(100*(a[1]/255)),e=Math.round(100*(a[2]/255));return"rgba("+c+"%, "+d+"%, "+e+"%, "+(b||a[3]||1)+")"}function m(a,b){return 1>b||a[3]&&a[3]<1?n(a,b):"hsl("+a[0]+", "+a[1]+"%, "+a[2]+"%)"}function n(a,b){return"hsla("+a[0]+", "+a[1]+"%, "+a[2]+"%, "+(b||a[3]||1)+")"}function o(a){return r.rgb2keyword(a.slice(0,3))}function p(a,b,c){return Math.min(Math.max(b,a),c)}function q(a){var b=a.toString(16).toUpperCase();return b.length<2?"0"+b:b}var r=a("color-convert");b.exports={getRgba:c,getHsla:d,getRgb:e,getHsl:f,getAlpha:g,hexString:h,rgbString:i,rgbaString:j,percentString:k,percentaString:l,hslString:m,hslaString:n,keyword:o}},{"color-convert":3}]},{},[1]);


/**
 * Author: Francis Byrne
 *
**/

/*

Basic Usage:
============

$('#el').spin(); // Creates a default Spinner using the text color of #el.
$('#el').spin({ ... }); // Creates a Spinner using the provided options.

$('#el').spin(false); // Stops and removes the spinner.

Using Presets:
==============

$('#el').spin('small'); // Creates a 'small' Spinner using the text color of #el.
$('#el').spin('large', '#fff'); // Creates a 'large' white Spinner.

Adding a custom preset:
=======================

$.fn.spin.presets.flower = {
  lines: 9
  length: 10
  width: 20
  radius: 0
}

$('#el').spin('flower', 'red');

*/

(function(factory) {

  if (typeof exports == 'object') {
    // CommonJS
    factory(require('jquery'), require('spin'))
  }
  else if (typeof define == 'function' && define.amd) {
    // AMD, register as anonymous module
    define(['jquery', 'spin'], factory)
  }
  else {
    // Browser globals
    if (!window.Spinner) throw new Error('Spin.js not present')
    factory(window.jQuery, window.Spinner)
  }

}(function($, Spinner) {
  
  // Setup Options
  
  var heightLarge = 400,
      topOffset   = 200,
      // min widths (in pixels), used to set dynamic spinner size
      minWidthHuge  = 450,
      minWidthLarge = 320,
      minWidthMedium  = 150,
      minWidthSmall  = 50,
      // spinner sizes for each size; note: medium uses default settings above
      optsHuge = {
        lines: 11,
        length: 19,
        width: 11,
        radius: 26
      },
      optsLarge = {
        lines: 11,
        length: 15,
        width: 9,
        radius: 19
      },
      optsMedium = {
        lines: 9,
        length: 11,
        width: 7,
        radius: 12
      },
      optsSmall = {
        lines: 8,
        length: 6,
        width: 4,
        radius: 7
      },
      optsTiny = {
        lines: 8,
        length: 2,
        width: 2,
        radius: 3
      },
      defaultColor = '#999',

  // Helper Functions

  // get spinner color based on background
  getSpinnerColor = function(backgroundColor) {
    var color = Color(backgroundColor).rgb();
    var yiq = ((color.r*299)+(color.g*587)+(color.b*114))/1000;
    return (yiq >= 128) ? 'black' : 'white';
  };

  $.fn.chameleon = function(argOpts) {

    return this.each(function() {
      var $this = $(this),
        data = $this.data(),
        // by default, dynamically get a YIQ contrast of the background color
        // for details, see http://24ways.org/2010/calculating-color-contrast/ 
        defaultColor = getSpinnerColor($this.css('background-color')); 

      if (data.spinner) {
        data.spinner.stop();
        delete data.spinner;
      }
      if (argOpts !== false) {
        /* set the options with the following preference:
         * 1. preset: "tiny", "small", "large", etc.
         * 2. options argument passed into spin(options)
         * 3. default spin.js options
         */
        var opts = $.extend(
          { color: defaultColor },
          $.fn.chameleon.presets[argOpts] || argOpts || {}
        );
        
        // manually set top offset for high divs (prevents spinner appearing offscreen)
        var containerHeight = $this.height();
        if ( containerHeight <= 0 ) {
          return; // don't show spinner
        } else if ( containerHeight > heightLarge ) {
          opts.top = topOffset;
        }
        
        // set spinner size based on container width
        var containerWidth = $this.width();
        if ( containerWidth > minWidthHuge ) {
          $.extend(opts, optsHuge);
        } else if ( containerWidth > minWidthLarge ) {
          $.extend(opts, optsLarge);
        } else if ( containerWidth > minWidthMedium ) {
          $.extend(opts, optsMedium);
        } else if ( containerWidth > minWidthSmall ) {
          $.extend(opts, optsSmall);
        } else if ( containerWidth > 0 ) {
          $.extend(opts, optsTiny);
        } else {
          return; // don't show spinner
        }
        
        data.spinner = new Spinner(opts).spin(this);
        
        // override left offset to be 50% to horizontally center responsively
        $( data.spinner.el ).css( 'left', '50%' );
      }
    });
  };

  $.fn.chameleon.presets = {
    tiny: { lines: 8, length: 2, width: 2, radius: 3 },
    small: { lines: 8, length: 4, width: 3, radius: 5 },
    large: { lines: 10, length: 8, width: 4, radius: 8 }
  };

}));
