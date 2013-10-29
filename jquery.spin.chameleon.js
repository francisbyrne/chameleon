/** 
 * Chameleon.js
 * Copyright (c) 2013 Francis Byrne
 * MIT License
 *
 */

/**
 * Spin.js
 * http://fgnass.github.io/spin.js/
 *
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */
 (function(t,e){if(typeof exports=="object")module.exports=e();else if(typeof define=="function"&&define.amd)define(e);else t.Spinner=e()})(this,function(){"use strict";var t=["webkit","Moz","ms","O"],e={},i;function o(t,e){var i=document.createElement(t||"div"),o;for(o in e)i[o]=e[o];return i}function n(t){for(var e=1,i=arguments.length;e<i;e++)t.appendChild(arguments[e]);return t}var r=function(){var t=o("style",{type:"text/css"});n(document.getElementsByTagName("head")[0],t);return t.sheet||t.styleSheet}();function s(t,o,n,s){var a=["opacity",o,~~(t*100),n,s].join("-"),f=.01+n/s*100,l=Math.max(1-(1-t)/o*(100-f),t),u=i.substring(0,i.indexOf("Animation")).toLowerCase(),d=u&&"-"+u+"-"||"";if(!e[a]){r.insertRule("@"+d+"keyframes "+a+"{"+"0%{opacity:"+l+"}"+f+"%{opacity:"+t+"}"+(f+.01)+"%{opacity:1}"+(f+o)%100+"%{opacity:"+t+"}"+"100%{opacity:"+l+"}"+"}",r.cssRules.length);e[a]=1}return a}function a(e,i){var o=e.style,n,r;i=i.charAt(0).toUpperCase()+i.slice(1);for(r=0;r<t.length;r++){n=t[r]+i;if(o[n]!==undefined)return n}if(o[i]!==undefined)return i}function f(t,e){for(var i in e)t.style[a(t,i)||i]=e[i];return t}function l(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)if(t[o]===undefined)t[o]=i[o]}return t}function u(t){var e={x:t.offsetLeft,y:t.offsetTop};while(t=t.offsetParent)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}function d(t,e){return typeof t=="string"?t:t[e%t.length]}var p={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:1/4,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};function c(t){if(typeof this=="undefined")return new c(t);this.opts=l(t||{},c.defaults,p)}c.defaults={};l(c.prototype,{spin:function(t){this.stop();var e=this,n=e.opts,r=e.el=f(o(0,{className:n.className}),{position:n.position,width:0,zIndex:n.zIndex}),s=n.radius+n.length+n.width,a,l;if(t){t.insertBefore(r,t.firstChild||null);l=u(t);a=u(r);f(r,{left:(n.left=="auto"?l.x-a.x+(t.offsetWidth>>1):parseInt(n.left,10)+s)+"px",top:(n.top=="auto"?l.y-a.y+(t.offsetHeight>>1):parseInt(n.top,10)+s)+"px"})}r.setAttribute("role","progressbar");e.lines(r,e.opts);if(!i){var d=0,p=(n.lines-1)*(1-n.direction)/2,c,h=n.fps,m=h/n.speed,y=(1-n.opacity)/(m*n.trail/100),g=m/n.lines;(function v(){d++;for(var t=0;t<n.lines;t++){c=Math.max(1-(d+(n.lines-t)*g)%m*y,n.opacity);e.opacity(r,t*n.direction+p,c,n)}e.timeout=e.el&&setTimeout(v,~~(1e3/h))})()}return e},stop:function(){var t=this.el;if(t){clearTimeout(this.timeout);if(t.parentNode)t.parentNode.removeChild(t);this.el=undefined}return this},lines:function(t,e){var r=0,a=(e.lines-1)*(1-e.direction)/2,l;function u(t,i){return f(o(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:t,boxShadow:i,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*r+e.rotate)+"deg) translate("+e.radius+"px"+",0)",borderRadius:(e.corners*e.width>>1)+"px"})}for(;r<e.lines;r++){l=f(o(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:i&&s(e.opacity,e.trail,a+r*e.direction,e.lines)+" "+1/e.speed+"s linear infinite"});if(e.shadow)n(l,f(u("#000","0 0 4px "+"#000"),{top:2+"px"}));n(t,n(l,u(d(e.color,r),"0 0 1px rgba(0,0,0,.1)")))}return t},opacity:function(t,e,i){if(e<t.childNodes.length)t.childNodes[e].style.opacity=i}});function h(){function t(t,e){return o("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',e)}r.addRule(".spin-vml","behavior:url(#default#VML)");c.prototype.lines=function(e,i){var o=i.length+i.width,r=2*o;function s(){return f(t("group",{coordsize:r+" "+r,coordorigin:-o+" "+-o}),{width:r,height:r})}var a=-(i.width+i.length)*2+"px",l=f(s(),{position:"absolute",top:a,left:a}),u;function p(e,r,a){n(l,n(f(s(),{rotation:360/i.lines*e+"deg",left:~~r}),n(f(t("roundrect",{arcsize:i.corners}),{width:o,height:i.width,left:i.radius,top:-i.width>>1,filter:a}),t("fill",{color:d(i.color,e),opacity:i.opacity}),t("stroke",{opacity:0}))))}if(i.shadow)for(u=1;u<=i.lines;u++)p(u,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(u=1;u<=i.lines;u++)p(u);return n(e,l)};c.prototype.opacity=function(t,e,i,o){var n=t.firstChild;o=o.shadow&&o.lines||0;if(n&&e+o<n.childNodes.length){n=n.childNodes[e+o];n=n&&n.firstChild;n=n&&n.firstChild;if(n)n.opacity=i}}}var m=f(o("group"),{behavior:"url(#default#VML)"});if(!a(m,"transform")&&m.adj)h();else i=a(m,"animation");return c});
 
/** 
  The following functions are from color.js: scale, getRgba and keyword2rgb
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
        //var color = Color(backgroundColor).rgb();
        var color = getRgba(backgroundColor);
        var yiq = ((color[0]*299)+(color[1]*587)+(color[2]*114))/1000;
        return (yiq >= 128) ? 'black' : 'white';
      },

      // helper
      scale = function(num, min, max) {
         return Math.min(Math.max(min, num), max);
      },

      // generic browser color keywords
      keyword2rgb = function(keyword) {
        var cssKeywords = {
              aliceblue:  [240,248,255],
              antiquewhite: [250,235,215],
              aqua: [0,255,255],
              aquamarine: [127,255,212],
              azure:  [240,255,255],
              beige:  [245,245,220],
              bisque: [255,228,196],
              black:  [0,0,0],
              blanchedalmond: [255,235,205],
              blue: [0,0,255],
              blueviolet: [138,43,226],
              brown:  [165,42,42],
              burlywood:  [222,184,135],
              cadetblue:  [95,158,160],
              chartreuse: [127,255,0],
              chocolate:  [210,105,30],
              coral:  [255,127,80],
              cornflowerblue: [100,149,237],
              cornsilk: [255,248,220],
              crimson:  [220,20,60],
              cyan: [0,255,255],
              darkblue: [0,0,139],
              darkcyan: [0,139,139],
              darkgoldenrod:  [184,134,11],
              darkgray: [169,169,169],
              darkgreen:  [0,100,0],
              darkgrey: [169,169,169],
              darkkhaki:  [189,183,107],
              darkmagenta:  [139,0,139],
              darkolivegreen: [85,107,47],
              darkorange: [255,140,0],
              darkorchid: [153,50,204],
              darkred:  [139,0,0],
              darksalmon: [233,150,122],
              darkseagreen: [143,188,143],
              darkslateblue:  [72,61,139],
              darkslategray:  [47,79,79],
              darkslategrey:  [47,79,79],
              darkturquoise:  [0,206,209],
              darkviolet: [148,0,211],
              deeppink: [255,20,147],
              deepskyblue:  [0,191,255],
              dimgray:  [105,105,105],
              dimgrey:  [105,105,105],
              dodgerblue: [30,144,255],
              firebrick:  [178,34,34],
              floralwhite:  [255,250,240],
              forestgreen:  [34,139,34],
              fuchsia:  [255,0,255],
              gainsboro:  [220,220,220],
              ghostwhite: [248,248,255],
              gold: [255,215,0],
              goldenrod:  [218,165,32],
              gray: [128,128,128],
              green:  [0,128,0],
              greenyellow:  [173,255,47],
              grey: [128,128,128],
              honeydew: [240,255,240],
              hotpink:  [255,105,180],
              indianred:  [205,92,92],
              indigo: [75,0,130],
              ivory:  [255,255,240],
              khaki:  [240,230,140],
              lavender: [230,230,250],
              lavenderblush:  [255,240,245],
              lawngreen:  [124,252,0],
              lemonchiffon: [255,250,205],
              lightblue:  [173,216,230],
              lightcoral: [240,128,128],
              lightcyan:  [224,255,255],
              lightgoldenrodyellow: [250,250,210],
              lightgray:  [211,211,211],
              lightgreen: [144,238,144],
              lightgrey:  [211,211,211],
              lightpink:  [255,182,193],
              lightsalmon:  [255,160,122],
              lightseagreen:  [32,178,170],
              lightskyblue: [135,206,250],
              lightslategray: [119,136,153],
              lightslategrey: [119,136,153],
              lightsteelblue: [176,196,222],
              lightyellow:  [255,255,224],
              lime: [0,255,0],
              limegreen:  [50,205,50],
              linen:  [250,240,230],
              magenta:  [255,0,255],
              maroon: [128,0,0],
              mediumaquamarine: [102,205,170],
              mediumblue: [0,0,205],
              mediumorchid: [186,85,211],
              mediumpurple: [147,112,219],
              mediumseagreen: [60,179,113],
              mediumslateblue:  [123,104,238],
              mediumspringgreen:  [0,250,154],
              mediumturquoise:  [72,209,204],
              mediumvioletred:  [199,21,133],
              midnightblue: [25,25,112],
              mintcream:  [245,255,250],
              mistyrose:  [255,228,225],
              moccasin: [255,228,181],
              navajowhite:  [255,222,173],
              navy: [0,0,128],
              oldlace:  [253,245,230],
              olive:  [128,128,0],
              olivedrab:  [107,142,35],
              orange: [255,165,0],
              orangered:  [255,69,0],
              orchid: [218,112,214],
              palegoldenrod:  [238,232,170],
              palegreen:  [152,251,152],
              paleturquoise:  [175,238,238],
              palevioletred:  [219,112,147],
              papayawhip: [255,239,213],
              peachpuff:  [255,218,185],
              peru: [205,133,63],
              pink: [255,192,203],
              plum: [221,160,221],
              powderblue: [176,224,230],
              purple: [128,0,128],
              red:  [255,0,0],
              rosybrown:  [188,143,143],
              royalblue:  [65,105,225],
              saddlebrown:  [139,69,19],
              salmon: [250,128,114],
              sandybrown: [244,164,96],
              seagreen: [46,139,87],
              seashell: [255,245,238],
              sienna: [160,82,45],
              silver: [192,192,192],
              skyblue:  [135,206,235],
              slateblue:  [106,90,205],
              slategray:  [112,128,144],
              slategrey:  [112,128,144],
              snow: [255,250,250],
              springgreen:  [0,255,127],
              steelblue:  [70,130,180],
              tan:  [210,180,140],
              teal: [0,128,128],
              thistle:  [216,191,216],
              tomato: [255,99,71],
              turquoise:  [64,224,208],
              violet: [238,130,238],
              wheat:  [245,222,179],
              white:  [255,255,255],
              whitesmoke: [245,245,245],
              yellow: [255,255,0],
              yellowgreen:  [154,205,50]
            };
        return cssKeywords[keyword];
      },

      // get rgba from any color string as [r, g, b, a]
      getRgba = function(string) {
         if (!string) {
            return;
         }
         var abbr =  /^#([a-fA-F0-9]{3})$/,
             hex =  /^#([a-fA-F0-9]{6})$/,
             rgba = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d\.]+)\s*)?\)$/,
             per = /^rgba?\(\s*([\d\.]+)\%\s*,\s*([\d\.]+)\%\s*,\s*([\d\.]+)\%\s*(?:,\s*([\d\.]+)\s*)?\)$/,
             keyword = /(\D+)/;

         var rgb = [0, 0, 0],
             a = 1,
             match = string.match(abbr);
         if (match) {
            match = match[1];
            for (var i = 0; i < rgb.length; i++) {
               rgb[i] = parseInt(match[i] + match[i], 16);
            }
         }
         else if (match = string.match(hex)) {
            match = match[1];
            for (var i = 0; i < rgb.length; i++) {
               rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
            }
         }
         else if (match = string.match(rgba)) {
            for (var i = 0; i < rgb.length; i++) {
               rgb[i] = parseInt(match[i + 1]);
            }
            a = parseFloat(match[4]);
         }
         else if (match = string.match(per)) {
            for (var i = 0; i < rgb.length; i++) {
               rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
            }
            a = parseFloat(match[4]);
         }
         else if (match = string.match(keyword)) {
            if (match[1] == "transparent") {
               return [0, 0, 0, 0];
            }
            rgb = keyword2rgb(match[1]);
            if (!rgb) {
               return;
            }
         }

         for (var i = 0; i < rgb.length; i++) {
            rgb[i] = scale(rgb[i], 0, 255);
         }
         if (!a && a != 0) {
            a = 1;
         }
         else {
            a = scale(a, 0, 1);
         }
         rgb.push(a);
         return rgb;
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
