parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"cGAc":[function(require,module,exports) {
function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}$(document).ready(function(){new(function(){function e(){var n=this;t(this,e),this.currentId=null,this.currentTab=null,this.tabContainerHeight=70;var o=this;$(".et-hero-tab").click(function(){o.onTabClick(event,$(this))}),$(window).scroll(function(){n.onScroll()}),$(window).resize(function(){n.onResize()})}return n(e,[{key:"onTabClick",value:function(t,e){t.preventDefault();var n=$(e.attr("href")).offset().top-this.tabContainerHeight+1;$("html, body").animate({scrollTop:n},600)}},{key:"onScroll",value:function(){this.checkTabContainerPosition(),this.findCurrentTabSelector()}},{key:"onResize",value:function(){this.currentId&&this.setSliderCss()}},{key:"checkTabContainerPosition",value:function(){var t=$(".et-hero-tabs").offset().top+$(".et-hero-tabs").height()-this.tabContainerHeight;$(window).scrollTop()>t?$(".et-hero-tabs-container").addClass("et-hero-tabs-container--top"):$(".et-hero-tabs-container").removeClass("et-hero-tabs-container--top")}},{key:"findCurrentTabSelector",value:function(t){var e,n,o=this;$(".et-hero-tab").each(function(){var t=$(this).attr("href"),r=$(t).offset().top-o.tabContainerHeight,i=$(t).offset().top+$(t).height()-o.tabContainerHeight;$(window).scrollTop()>r&&$(window).scrollTop()<i&&(e=t,n=$(this))}),this.currentId==e&&null!==this.currentId||(this.currentId=e,this.currentTab=n,this.setSliderCss())}},{key:"setSliderCss",value:function(){var t=0,e=0;this.currentTab&&(t=this.currentTab.css("width"),e=this.currentTab.offset().left),$(".et-hero-tab-slider").css("width",t),$(".et-hero-tab-slider").css("left",e)}}]),e}()),history.scrollRestoration="manual",$(window).on("beforeunload",function(){$(window).scrollTop(0)})});
},{}]},{},["cGAc"], null)
//# sourceMappingURL=/my.2024bd09.js.map