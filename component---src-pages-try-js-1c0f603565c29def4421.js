(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"/Yc3":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Detector=t.Offline=t.Online=void 0;var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n("q1tI"),i=n("17x9"),l=(r=i)&&r.__esModule?r:{default:r};function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f="undefined"!=typeof navigator,h=function(e){var t=e.url,n=e.timeout;return new Promise((function(e){var r=function(){return e(!1)},a=new XMLHttpRequest;a.onerror=r,a.ontimeout=r,a.onreadystatechange=function(){a.readyState===a.HEADERS_RECEIVED&&(a.status?e(!0):r())},a.open("HEAD",t),a.timeout=n,a.send()}))},m={children:l.default.node,onChange:l.default.func,polling:l.default.oneOfType([l.default.shape({url:l.default.string,interval:l.default.number,timeout:l.default.number}),l.default.bool]),wrapperType:l.default.string},g={polling:!0,wrapperType:"span"},d={enabled:f&&/Windows.*Chrome|Windows.*Firefox|Linux.*Chrome/.test(navigator.userAgent),url:"https://ipv4.icanhazip.com/",timeout:5e3,interval:5e3},p=function(e){function t(){s(this,t);var e=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={online:!f||"boolean"!=typeof navigator.onLine||navigator.onLine},e.goOnline=e.goOnline.bind(e),e.goOffline=e.goOffline.bind(e),e}return c(t,e),a(t,[{key:"componentDidMount",value:function(){window.addEventListener("online",this.goOnline),window.addEventListener("offline",this.goOffline),this.getPollingConfig().enabled&&this.startPolling()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("online",this.goOnline),window.removeEventListener("offline",this.goOffline),this.pollingId&&this.stopPolling()}},{key:"renderChildren",value:function(){var e=this.props,t=e.children,n=e.wrapperType;return(0,o.isValidElement)(t)?t:t?o.createElement.apply(void 0,[n,{}].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(o.Children.toArray(t)))):null}},{key:"getPollingConfig",value:function(){switch(this.props.polling){case!0:return d;case!1:return{enabled:!1};default:return Object.assign({},d,this.props.polling)}}},{key:"goOnline",value:function(){this.state.online||(this.callOnChangeHandler(!0),this.setState({online:!0}))}},{key:"goOffline",value:function(){this.state.online&&(this.callOnChangeHandler(!1),this.setState({online:!1}))}},{key:"callOnChangeHandler",value:function(e){this.props.onChange&&this.props.onChange(e)}},{key:"startPolling",value:function(){var e=this,t=this.getPollingConfig().interval;this.pollingId=setInterval((function(){var t=e.getPollingConfig(),n=t.url,r=t.timeout;h({url:n,timeout:r}).then((function(t){t?e.goOnline():e.goOffline()}))}),t)}},{key:"stopPolling",value:function(){clearInterval(this.pollingId)}}]),t}(o.Component);p.propTypes=m,p.defaultProps=g;var v=t.Online=function(e){function t(){return s(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),a(t,[{key:"render",value:function(){return this.state.online?this.renderChildren():null}}]),t}(p);v.propTypes=m,v.defaultProps=g;var y=t.Offline=function(e){function t(){return s(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),a(t,[{key:"render",value:function(){return this.state.online?null:this.renderChildren()}}]),t}(p);y.propTypes=m,y.defaultProps=g;var E=t.Detector=function(e){function t(){return s(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),a(t,[{key:"render",value:function(){return this.props.render({online:this.state.online})}}]),t}(p);E.propTypes=Object.assign({},m,{render:l.default.func.isRequired}),E.defaultProps=g},"2mvg":function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),l=n("q1tI"),s=n.n(l),u=n("vUet"),c=s.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,l=e.fluid,c=e.rounded,f=e.roundedCircle,h=e.thumbnail,m=Object(a.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);n=Object(u.b)(n,"img");var g=i()(l&&n+"-fluid",c&&"rounded",f&&"rounded-circle",h&&n+"-thumbnail");return s.a.createElement("img",Object(r.a)({ref:t},m,{className:i()(o,g)}))}));c.displayName="Image",c.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.a=c},D1Df:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function f(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?m(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=n("q1tI"),y=n("H38U"),E=n("aRTE");function b(e){for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t+=String.fromCharCode(r):r<2048?(t+=String.fromCharCode(192|r>>6),t+=String.fromCharCode(128|63&r)):r<55296||r>=57344?(t+=String.fromCharCode(224|r>>12),t+=String.fromCharCode(128|r>>6&63),t+=String.fromCharCode(128|63&r)):(n++,r=65536+((1023&r)<<10|1023&e.charCodeAt(n)),t+=String.fromCharCode(240|r>>18),t+=String.fromCharCode(128|r>>12&63),t+=String.fromCharCode(128|r>>6&63),t+=String.fromCharCode(128|63&r))}return t}var w={size:128,level:"L",bgColor:"#FFFFFF",fgColor:"#000000",includeMargin:!1};function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=[];return e.forEach((function(e,r){var a=null;e.forEach((function(o,i){if(!o&&null!==a)return n.push("M".concat(a+t," ").concat(r+t,"h").concat(i-a,"v1H").concat(a+t,"z")),void(a=null);if(i!==e.length-1)o&&null===a&&(a=i);else{if(!o)return;null===a?n.push("M".concat(i+t,",").concat(r+t," h1v1H").concat(i+t,"z")):n.push("M".concat(a+t,",").concat(r+t," h").concat(i+1-a,"v1H").concat(a+t,"z"))}}))})),n.join("")}function O(e,t){return e.slice().map((function(e,n){return n<t.y||n>=t.y+t.h?e:e.map((function(e,n){return(n<t.x||n>=t.x+t.w)&&e}))}))}function P(e,t){var n=e.imageSettings,r=e.size,a=e.includeMargin;if(null==n)return null;var o=a?4:0,i=t.length+2*o,l=Math.floor(.1*r),s=i/r,u=(n.width||l)*s,c=(n.height||l)*s,f=null==n.x?t.length/2-u/2:n.x*s,h=null==n.y?t.length/2-c/2:n.y*s,m=null;if(n.excavate){var g=Math.floor(f),d=Math.floor(h);m={x:g,y:d,w:Math.ceil(u+f-g),h:Math.ceil(c+h-d)}}return{x:f,y:h,h:c,w:u,excavation:m}}var L=function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}return!0}(),k=function(e){function t(){var e,n;s(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return p(m(n=f(this,(e=h(t)).call.apply(e,[this].concat(a)))),"_canvas",void 0),p(m(n),"_image",void 0),p(m(n),"state",{imgLoaded:!1}),p(m(n),"handleImageLoad",(function(){n.setState({imgLoaded:!0})})),n}return g(t,e),c(t,[{key:"componentDidMount",value:function(){this.update()}},{key:"componentDidUpdate",value:function(){this.update()}},{key:"update",value:function(){var e=this.props,t=e.value,n=e.size,r=e.level,a=e.bgColor,o=e.fgColor,i=e.includeMargin,l=e.imageSettings,s=new y(-1,E[r]);if(s.addData(b(t)),s.make(),null!=this._canvas){var u=this._canvas,c=u.getContext("2d");if(!c)return;var f=s.modules;if(null===f)return;var h=i?4:0,m=f.length+2*h,g=P(this.props,f);null!=l&&null!=g&&null!=g.excavation&&(f=O(f,g.excavation));var d=window.devicePixelRatio||1;u.height=u.width=n*d;var p=n/m*d;c.scale(p,p),c.fillStyle=a,c.fillRect(0,0,m,m),c.fillStyle=o,L?c.fill(new Path2D(C(f,h))):f.forEach((function(e,t){e.forEach((function(e,n){e&&c.fillRect(n+h,t+h,1,1)}))})),this.state.imgLoaded&&this._image&&null!=g&&c.drawImage(this._image,g.x+h,g.y+h,g.w,g.h)}}},{key:"render",value:function(){var e=this,t=this.props,n=(t.value,t.size),r=(t.level,t.bgColor,t.fgColor,t.style),o=(t.includeMargin,t.imageSettings),s=l(t,["value","size","level","bgColor","fgColor","style","includeMargin","imageSettings"]),u=i({height:n,width:n},r),c=null,f=o&&o.src;return null!=o&&null!=f&&(c=v.createElement("img",{src:f,style:{display:"none"},onLoad:this.handleImageLoad,ref:function(t){return e._image=t}})),v.createElement(v.Fragment,null,v.createElement("canvas",a({style:u,height:n,width:n,ref:function(t){return e._canvas=t}},s)),c)}}]),t}(v.PureComponent);p(k,"defaultProps",w);var x=function(e){function t(){return s(this,t),f(this,h(t).apply(this,arguments))}return g(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.value,n=e.size,r=e.level,o=e.bgColor,i=e.fgColor,s=e.includeMargin,u=e.imageSettings,c=l(e,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]),f=new y(-1,E[r]);f.addData(b(t)),f.make();var h=f.modules;if(null===h)return null;var m=s?4:0,g=h.length+2*m,d=P(this.props,h),p=null;null!=u&&null!=d&&(null!=d.excavation&&(h=O(h,d.excavation)),p=v.createElement("image",{xlinkHref:u.src,height:d.h,width:d.w,x:d.x+m,y:d.y+m,preserveAspectRatio:"none"}));var w=C(h,m);return v.createElement("svg",a({shapeRendering:"crispEdges",height:n,width:n,viewBox:"0 0 ".concat(g," ").concat(g)},c),v.createElement("path",{fill:o,d:"M0,0 h".concat(g,"v").concat(g,"H0z")}),v.createElement("path",{fill:i,d:w}),p)}}]),t}(v.PureComponent);p(x,"defaultProps",w);var _=function(e){var t=e.renderAs,n=l(e,["renderAs"]),r="svg"===t?x:k;return v.createElement(r,n)};_.defaultProps=i({renderAs:"canvas"},w),e.exports=_},D78c:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("kCIJ"),i=n("xXt2"),l=n("7vrA"),s=n("3Z9Z"),u=n("JI6e"),c=n("/Yc3"),f=n("D1Df"),h=n.n(f),m=n("k3mn"),g=n("Bl7J"),d=n("M4a1"),p=n("yhRL"),v=n.n(p);t.default=Object(o.injectIntl)((function(e){var t=e.intl,n="https://pwa-dev.us.snapscreen.com/";return a.a.createElement(g.a,null,a.a.createElement(m.a,{lang:t.locale,title:t.formatMessage({id:"page.try.title"}),description:t.formatMessage({id:"page.try.description"}),keywords:["snap","demo","demonstration","mobile","magic","clip","share"],ogImage:v.a}),a.a.createElement(i.a,null,a.a.createElement(c.Offline,null,a.a.createElement(l.a,null,a.a.createElement(s.a,null,a.a.createElement(u.a,{xs:"12",md:"10",lg:"5",className:"ml-auto mr-auto"},a.a.createElement("div",{className:"text-center p-3"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"128",height:"128",viewBox:"0 0 512 512"},a.a.createElement("title",null,a.a.createElement(o.FormattedMessage,{id:"offline.status"})),a.a.createElement("path",{d:"M93.72,183.25C49.49,198.05,16,233.1,16,288c0,66,54,112,120,112H320.37",style:{fill:"none",stroke:"var(--base-text-color)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}),a.a.createElement("path",{d:"M467.82,377.74C485.24,363.3,496,341.61,496,312c0-59.82-53-85.76-96-88-8.89-89.54-71-144-144-144-26.16,0-48.79,6.93-67.6,18.14",style:{fill:"none",stroke:"var(--base-text-color)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}),a.a.createElement("line",{x1:"448",y1:"448",x2:"64",y2:"64",style:{fill:"none",stroke:"var(--base-text-color)",strokeLinecap:"round",strokeMiterlimit:10,strokeWidth:"32px"}}))),a.a.createElement("h1",{className:"display-2 my-4 py-4 text-center",style:{minHeight:0}},a.a.createElement("strong",null,a.a.createElement(o.FormattedMessage,{id:"offline.text"}))),a.a.createElement("p",{className:"lead text-center"},a.a.createElement(o.FormattedMessage,{id:"offline.cta"})))))),a.a.createElement(c.Online,null,a.a.createElement(l.a,null,a.a.createElement(s.a,null,a.a.createElement(u.a,null,a.a.createElement("h1",{className:"display-2 my-4 py-4 text-center",style:{minHeight:0}},a.a.createElement("strong",null,a.a.createElement(o.FormattedMessage,{id:"page.try.headline"}),"!")))),a.a.createElement(s.a,null,a.a.createElement(u.a,{xs:"12",md:"10",lg:"5",className:"ml-auto mr-auto"},a.a.createElement("ol",{className:"lead mb-4"},a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("strong",null,a.a.createElement(o.FormattedMessage,{id:"page.try.howTo1emphasize"}))," ",a.a.createElement(o.FormattedMessage,{id:"page.try.howTo1text"})," ",a.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},n))),a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("strong",null,a.a.createElement(o.FormattedMessage,{id:"page.try.howTo2emphasize"}))," ",a.a.createElement(o.FormattedMessage,{id:"page.try.howTo2text"})," ",a.a.createElement("span",{role:"img","aria-label":"smile"},"😉"))))),a.a.createElement(u.a,{xs:"12",md:"10",lg:"7",className:"mx-auto py-3"},a.a.createElement(s.a,{className:"align-items-center mb-4"},a.a.createElement(u.a,{xs:"4",sm:"3",md:"3",className:"ml-auto"},a.a.createElement(h.a,{value:n,renderAs:"svg",className:"ml-auto p-2 bg-white img-thumbnail"})),a.a.createElement(u.a,{xs:"2",sm:"1",md:"1",className:"my-auto"},a.a.createElement("ion-icon",{size:"large",name:"phone-portrait-outline",style:{color:"var(--base-text-color)",display:"inline-flex"}})),a.a.createElement(u.a,{xs:"6",sm:"6",md:"7",className:"mr-auto"},a.a.createElement("p",{className:"mt-4"},a.a.createElement(o.FormattedMessage,{id:"page.try.instruction"})))))),a.a.createElement(s.a,{className:""},a.a.createElement(u.a,{md:"10",lg:"8",className:"mx-auto my-4 py-4"},a.a.createElement(d.a,{id:"Aw3xFO1wdJ4",autoplay:"1",start:"320",mute:"1"}))),a.a.createElement(s.a,null,a.a.createElement(u.a,{md:"10",lg:"8",className:"mx-auto mt-4"},a.a.createElement("h2",{className:"my-4 text-center"},a.a.createElement("strong",null,a.a.createElement(o.FormattedMessage,{id:"page.try.endline"}))),a.a.createElement("p",{className:"text-center my-4"},a.a.createElement("strong",null,a.a.createElement(o.FormattedMessage,{id:"page.try.engagement"}))),a.a.createElement("div",{className:"pt-4 text-center"},a.a.createElement(o.Link,{to:"/contact",className:"btn btn-primary btn-lg mt-2 mt-sm-0"},a.a.createElement(o.FormattedMessage,{id:"action.contact"})),a.a.createElement(o.Link,{to:"/solution",className:"btn btn-link btn-lg mx-sm-2 mt-2 mt-sm-0"},a.a.createElement(o.FormattedMessage,{id:"action.solution"})))))))))}))},H38U:function(e,t,n){var r=n("f4xo"),a=n("rcnY"),o=n("wU8J"),i=n("Iq15"),l=n("dWSS");function s(e,t){this.typeNumber=e,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var u=s.prototype;u.addData=function(e){var t=new r(e);this.dataList.push(t),this.dataCache=null},u.isDark=function(e,t){if(e<0||this.moduleCount<=e||t<0||this.moduleCount<=t)throw new Error(e+","+t);return this.modules[e][t]},u.getModuleCount=function(){return this.moduleCount},u.make=function(){if(this.typeNumber<1){var e=1;for(e=1;e<40;e++){for(var t=a.getRSBlocks(e,this.errorCorrectLevel),n=new o,r=0,l=0;l<t.length;l++)r+=t[l].dataCount;for(l=0;l<this.dataList.length;l++){var s=this.dataList[l];n.put(s.mode,4),n.put(s.getLength(),i.getLengthInBits(s.mode,e)),s.write(n)}if(n.getLengthInBits()<=8*r)break}this.typeNumber=e}this.makeImpl(!1,this.getBestMaskPattern())},u.makeImpl=function(e,t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++)this.modules[n][r]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(e,t),this.typeNumber>=7&&this.setupTypeNumber(e),null==this.dataCache&&(this.dataCache=s.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,t)},u.setupPositionProbePattern=function(e,t){for(var n=-1;n<=7;n++)if(!(e+n<=-1||this.moduleCount<=e+n))for(var r=-1;r<=7;r++)t+r<=-1||this.moduleCount<=t+r||(this.modules[e+n][t+r]=0<=n&&n<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=r&&r<=4)},u.getBestMaskPattern=function(){for(var e=0,t=0,n=0;n<8;n++){this.makeImpl(!0,n);var r=i.getLostPoint(this);(0==n||e>r)&&(e=r,t=n)}return t},u.createMovieClip=function(e,t,n){var r=e.createEmptyMovieClip(t,n);this.make();for(var a=0;a<this.modules.length;a++)for(var o=1*a,i=0;i<this.modules[a].length;i++){var l=1*i;this.modules[a][i]&&(r.beginFill(0,100),r.moveTo(l,o),r.lineTo(l+1,o),r.lineTo(l+1,o+1),r.lineTo(l,o+1),r.endFill())}return r},u.setupTimingPattern=function(){for(var e=8;e<this.moduleCount-8;e++)null==this.modules[e][6]&&(this.modules[e][6]=e%2==0);for(var t=8;t<this.moduleCount-8;t++)null==this.modules[6][t]&&(this.modules[6][t]=t%2==0)},u.setupPositionAdjustPattern=function(){for(var e=i.getPatternPosition(this.typeNumber),t=0;t<e.length;t++)for(var n=0;n<e.length;n++){var r=e[t],a=e[n];if(null==this.modules[r][a])for(var o=-2;o<=2;o++)for(var l=-2;l<=2;l++)this.modules[r+o][a+l]=-2==o||2==o||-2==l||2==l||0==o&&0==l}},u.setupTypeNumber=function(e){for(var t=i.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var r=!e&&1==(t>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=r}for(n=0;n<18;n++){r=!e&&1==(t>>n&1);this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=r}},u.setupTypeInfo=function(e,t){for(var n=this.errorCorrectLevel<<3|t,r=i.getBCHTypeInfo(n),a=0;a<15;a++){var o=!e&&1==(r>>a&1);a<6?this.modules[a][8]=o:a<8?this.modules[a+1][8]=o:this.modules[this.moduleCount-15+a][8]=o}for(a=0;a<15;a++){o=!e&&1==(r>>a&1);a<8?this.modules[8][this.moduleCount-a-1]=o:a<9?this.modules[8][15-a-1+1]=o:this.modules[8][15-a-1]=o}this.modules[this.moduleCount-8][8]=!e},u.mapData=function(e,t){for(var n=-1,r=this.moduleCount-1,a=7,o=0,l=this.moduleCount-1;l>0;l-=2)for(6==l&&l--;;){for(var s=0;s<2;s++)if(null==this.modules[r][l-s]){var u=!1;o<e.length&&(u=1==(e[o]>>>a&1)),i.getMask(t,r,l-s)&&(u=!u),this.modules[r][l-s]=u,-1==--a&&(o++,a=7)}if((r+=n)<0||this.moduleCount<=r){r-=n,n=-n;break}}},s.PAD0=236,s.PAD1=17,s.createData=function(e,t,n){for(var r=a.getRSBlocks(e,t),l=new o,u=0;u<n.length;u++){var c=n[u];l.put(c.mode,4),l.put(c.getLength(),i.getLengthInBits(c.mode,e)),c.write(l)}var f=0;for(u=0;u<r.length;u++)f+=r[u].dataCount;if(l.getLengthInBits()>8*f)throw new Error("code length overflow. ("+l.getLengthInBits()+">"+8*f+")");for(l.getLengthInBits()+4<=8*f&&l.put(0,4);l.getLengthInBits()%8!=0;)l.putBit(!1);for(;!(l.getLengthInBits()>=8*f||(l.put(s.PAD0,8),l.getLengthInBits()>=8*f));)l.put(s.PAD1,8);return s.createBytes(l,r)},s.createBytes=function(e,t){for(var n=0,r=0,a=0,o=new Array(t.length),s=new Array(t.length),u=0;u<t.length;u++){var c=t[u].dataCount,f=t[u].totalCount-c;r=Math.max(r,c),a=Math.max(a,f),o[u]=new Array(c);for(var h=0;h<o[u].length;h++)o[u][h]=255&e.buffer[h+n];n+=c;var m=i.getErrorCorrectPolynomial(f),g=new l(o[u],m.getLength()-1).mod(m);s[u]=new Array(m.getLength()-1);for(h=0;h<s[u].length;h++){var d=h+g.getLength()-s[u].length;s[u][h]=d>=0?g.get(d):0}}var p=0;for(h=0;h<t.length;h++)p+=t[h].totalCount;var v=new Array(p),y=0;for(h=0;h<r;h++)for(u=0;u<t.length;u++)h<o[u].length&&(v[y++]=o[u][h]);for(h=0;h<a;h++)for(u=0;u<t.length;u++)h<s[u].length&&(v[y++]=s[u][h]);return v},e.exports=s},Iq15:function(e,t,n){var r=n("nVVt"),a=n("dWSS"),o=n("dQei"),i=0,l=1,s=2,u=3,c=4,f=5,h=6,m=7,g={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(e){for(var t=e<<10;g.getBCHDigit(t)-g.getBCHDigit(g.G15)>=0;)t^=g.G15<<g.getBCHDigit(t)-g.getBCHDigit(g.G15);return(e<<10|t)^g.G15_MASK},getBCHTypeNumber:function(e){for(var t=e<<12;g.getBCHDigit(t)-g.getBCHDigit(g.G18)>=0;)t^=g.G18<<g.getBCHDigit(t)-g.getBCHDigit(g.G18);return e<<12|t},getBCHDigit:function(e){for(var t=0;0!=e;)t++,e>>>=1;return t},getPatternPosition:function(e){return g.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,t,n){switch(e){case i:return(t+n)%2==0;case l:return t%2==0;case s:return n%3==0;case u:return(t+n)%3==0;case c:return(Math.floor(t/2)+Math.floor(n/3))%2==0;case f:return t*n%2+t*n%3==0;case h:return(t*n%2+t*n%3)%2==0;case m:return(t*n%3+(t+n)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var t=new a([1],0),n=0;n<e;n++)t=t.multiply(new a([1,o.gexp(n)],0));return t},getLengthInBits:function(e,t){if(1<=t&&t<10)switch(e){case r.MODE_NUMBER:return 10;case r.MODE_ALPHA_NUM:return 9;case r.MODE_8BIT_BYTE:case r.MODE_KANJI:return 8;default:throw new Error("mode:"+e)}else if(t<27)switch(e){case r.MODE_NUMBER:return 12;case r.MODE_ALPHA_NUM:return 11;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 10;default:throw new Error("mode:"+e)}else{if(!(t<41))throw new Error("type:"+t);switch(e){case r.MODE_NUMBER:return 14;case r.MODE_ALPHA_NUM:return 13;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 12;default:throw new Error("mode:"+e)}}},getLostPoint:function(e){for(var t=e.getModuleCount(),n=0,r=0;r<t;r++)for(var a=0;a<t;a++){for(var o=0,i=e.isDark(r,a),l=-1;l<=1;l++)if(!(r+l<0||t<=r+l))for(var s=-1;s<=1;s++)a+s<0||t<=a+s||0==l&&0==s||i==e.isDark(r+l,a+s)&&o++;o>5&&(n+=3+o-5)}for(r=0;r<t-1;r++)for(a=0;a<t-1;a++){var u=0;e.isDark(r,a)&&u++,e.isDark(r+1,a)&&u++,e.isDark(r,a+1)&&u++,e.isDark(r+1,a+1)&&u++,0!=u&&4!=u||(n+=3)}for(r=0;r<t;r++)for(a=0;a<t-6;a++)e.isDark(r,a)&&!e.isDark(r,a+1)&&e.isDark(r,a+2)&&e.isDark(r,a+3)&&e.isDark(r,a+4)&&!e.isDark(r,a+5)&&e.isDark(r,a+6)&&(n+=40);for(a=0;a<t;a++)for(r=0;r<t-6;r++)e.isDark(r,a)&&!e.isDark(r+1,a)&&e.isDark(r+2,a)&&e.isDark(r+3,a)&&e.isDark(r+4,a)&&!e.isDark(r+5,a)&&e.isDark(r+6,a)&&(n+=40);var c=0;for(a=0;a<t;a++)for(r=0;r<t;r++)e.isDark(r,a)&&c++;return n+=10*(Math.abs(100*c/t/t-50)/5)}};e.exports=g},M4a1:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("wx14"),i=n("zLVn"),l=n("TSYQ"),s=n.n(l),u=n("vUet"),c=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,l=e.children,c=e.aspectRatio,f=Object(i.a)(e,["bsPrefix","className","children","aspectRatio"]),h=Object(u.b)(n,"embed-responsive"),m=a.a.Children.only(l);return a.a.createElement("div",Object(o.a)({ref:t},f,{className:s()(h,r,c&&h+"-"+c)}),a.a.cloneElement(m,{className:s()(m.props.className,h+"-item")}))}));c.defaultProps={aspectRatio:"1by1"};var f=c,h=n("2mvg"),m=n("/Yc3"),g=n("wKOj"),d=n.n(g);t.a=function(e){var t=e.id,n=e.autoplay,r=e.start,o=e.mute;return a.a.createElement(a.a.Fragment,null,a.a.createElement(m.Online,null,a.a.createElement("div",{style:{position:"relative"},className:"mb-5"},a.a.createElement(f,{style:{position:"relative",zIndex:1,border:"8px solid #000000",background:"#000000"},aspectRatio:"16by9"},a.a.createElement("iframe",{title:"intro video",className:"embed-responsive-item",width:"600",height:"338",src:"https://www.youtube.com/embed/"+t+"?autoplay="+n+"&start="+r+"&mute="+o,frameBorder:"0",allowFullScreen:!0,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",autoPlay:!0})),a.a.createElement(h.a,{style:{position:"absolute",top:0,left:0,zIndex:0},fluid:!0,className:"bg-black",src:d.a,alt:"TV set"}))),a.a.createElement(m.Offline,null,a.a.createElement("div",{className:"text-center p-3",style:{position:"relative",zIndex:1,border:"2px solid #000000",background:"#000000"}},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"128",height:"128",viewBox:"0 0 512 512"},a.a.createElement("title",null,"Offline"),a.a.createElement("path",{d:"M93.72,183.25C49.49,198.05,16,233.1,16,288c0,66,54,112,120,112H320.37",style:{fill:"none",stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}),a.a.createElement("path",{d:"M467.82,377.74C485.24,363.3,496,341.61,496,312c0-59.82-53-85.76-96-88-8.89-89.54-71-144-144-144-26.16,0-48.79,6.93-67.6,18.14",style:{fill:"none",stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}),a.a.createElement("line",{x1:"448",y1:"448",x2:"64",y2:"64",style:{fill:"none",stroke:"#fff",strokeLinecap:"round",strokeMiterlimit:10,strokeWidth:"32px"}})),a.a.createElement("p",{className:"lead text-center"},a.a.createElement("strong",null,"You’re offline!")," Please connect to a network to see this video."))))}},aRTE:function(e,t){e.exports={L:1,M:0,Q:3,H:2}},dQei:function(e,t){for(var n={glog:function(e){if(e<1)throw new Error("glog("+e+")");return n.LOG_TABLE[e]},gexp:function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return n.EXP_TABLE[e]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},r=0;r<8;r++)n.EXP_TABLE[r]=1<<r;for(r=8;r<256;r++)n.EXP_TABLE[r]=n.EXP_TABLE[r-4]^n.EXP_TABLE[r-5]^n.EXP_TABLE[r-6]^n.EXP_TABLE[r-8];for(r=0;r<255;r++)n.LOG_TABLE[n.EXP_TABLE[r]]=r;e.exports=n},dWSS:function(e,t,n){var r=n("dQei");function a(e,t){if(null==e.length)throw new Error(e.length+"/"+t);for(var n=0;n<e.length&&0==e[n];)n++;this.num=new Array(e.length-n+t);for(var r=0;r<e.length-n;r++)this.num[r]=e[r+n]}a.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var t=new Array(this.getLength()+e.getLength()-1),n=0;n<this.getLength();n++)for(var o=0;o<e.getLength();o++)t[n+o]^=r.gexp(r.glog(this.get(n))+r.glog(e.get(o)));return new a(t,0)},mod:function(e){if(this.getLength()-e.getLength()<0)return this;for(var t=r.glog(this.get(0))-r.glog(e.get(0)),n=new Array(this.getLength()),o=0;o<this.getLength();o++)n[o]=this.get(o);for(o=0;o<e.getLength();o++)n[o]^=r.gexp(r.glog(e.get(o))+t);return new a(n,0).mod(e)}},e.exports=a},f4xo:function(e,t,n){var r=n("nVVt");function a(e){this.mode=r.MODE_8BIT_BYTE,this.data=e}a.prototype={getLength:function(e){return this.data.length},write:function(e){for(var t=0;t<this.data.length;t++)e.put(this.data.charCodeAt(t),8)}},e.exports=a},nVVt:function(e,t){e.exports={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8}},rcnY:function(e,t,n){var r=n("aRTE");function a(e,t){this.totalCount=e,this.dataCount=t}a.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],a.getRSBlocks=function(e,t){var n=a.getRsBlockTable(e,t);if(null==n)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+t);for(var r=n.length/3,o=new Array,i=0;i<r;i++)for(var l=n[3*i+0],s=n[3*i+1],u=n[3*i+2],c=0;c<l;c++)o.push(new a(s,u));return o},a.getRsBlockTable=function(e,t){switch(t){case r.L:return a.RS_BLOCK_TABLE[4*(e-1)+0];case r.M:return a.RS_BLOCK_TABLE[4*(e-1)+1];case r.Q:return a.RS_BLOCK_TABLE[4*(e-1)+2];case r.H:return a.RS_BLOCK_TABLE[4*(e-1)+3];default:return}},e.exports=a},wKOj:function(e,t,n){e.exports=n.p+"static/television-6e4e4ec309e158910ea13c4f8ca2d597.png"},wU8J:function(e,t){function n(){this.buffer=new Array,this.length=0}n.prototype={get:function(e){var t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(var n=0;n<t;n++)this.putBit(1==(e>>>t-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=n},yhRL:function(e,t,n){e.exports=n.p+"static/og_home-2b1b527e3f785301869c5edf0aee606b.jpg"}}]);
//# sourceMappingURL=component---src-pages-try-js-1c0f603565c29def4421.js.map