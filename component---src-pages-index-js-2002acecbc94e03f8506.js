(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"2mvg":function(e,t,a){"use strict";var n=a("wx14"),s=a("zLVn"),r=a("TSYQ"),i=a.n(r),l=a("q1tI"),c=a.n(l),o=a("vUet"),u=c.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,l=e.fluid,u=e.rounded,m=e.roundedCircle,A=e.thumbnail,d=Object(s.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);a=Object(o.b)(a,"img");var g=i()(l&&a+"-fluid",u&&"rounded",m&&"rounded-circle",A&&a+"-thumbnail");return c.a.createElement("img",Object(n.a)({ref:t},d,{className:i()(r,g)}))}));u.displayName="Image",u.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.a=u},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),s=a.n(n),r=a("kCIJ"),i=a("xXt2"),l=a("7vrA"),c=a("3Z9Z"),o=a("JI6e"),u=a("zLVn"),m=a("KQm4"),A=a("JX7q"),d=a("dI71"),g=a("TSYQ"),p=a.n(g),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={display:!0},a.animateCursor=a.animateCursor.bind(Object(A.a)(a)),a}Object(d.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.animateCursor()},a.componentWillUnmount=function(){this._interval&&clearInterval(this._interval)},a.animateCursor=function(){var e=this;this._interval=setInterval((function(){e.setState({display:!e.state.display})}),500)},a.render=function(){var e=this.props,t=e.cursorClassName,a=e.cursor,n=this.state.display,r=p()(t,"lfm__typing_effect_cursor");return s.a.createElement("span",{className:r,style:f(n)},a||"|")},t}(n.Component),f=function(e){return void 0===e&&(e=!0),{MsTransition:"opacity 0.5s",WebkitTransition:"opacity 0.5s",MozTransition:"opacity 0.5s",transition:"opacity 0.5s",opacity:e?1:0}},w=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={index:0,displayText:""},a.getRawText=a.getRawText.bind(Object(A.a)(a)),a.type=a.type.bind(Object(A.a)(a)),a.erase=a.erase.bind(Object(A.a)(a)),a.startTyping=a.startTyping.bind(Object(A.a)(a)),a}Object(d.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.startTyping()},a.componentWillUnmount=function(){this._timeout&&clearTimeout(this._timeout)},a.startTyping=function(){var e=this;this._timeout=setTimeout((function(){e.type()}),this.props.typingDelay)},a.getRawText=function(){var e=this.props.text;return"string"==typeof e?[e]:Object(m.a)(e)},a.type=function(){var e=this,t=this.state,a=t.index,n=t.displayText,s=this.getRawText()[a];s.length>n.length?(n=s.substr(0,n.length+1),this.setState({displayText:n},(function(){e._timeout=setTimeout((function(){e.type()}),e.props.speed)}))):this._timeout=setTimeout((function(){e.erase()}),this.props.eraseDelay)},a.erase=function(){var e=this,t=this.state,a=t.index,n=t.displayText;0===n.length?(a=a+1===this.getRawText().length?0:a+1,this.setState({index:a},(function(){e.startTyping()}))):(n=n.substr(-n.length,n.length-1),this.setState({displayText:n},(function(){e._timeout=setTimeout((function(){e.erase()}),e.props.speed)})))},a.render=function(){var e=this.props,t=(e.speed,e.typingDelay,e.eraseDelay,e.staticText),a=(e.text,e.className),n=e.cursor,r=e.cursorClassName,i=Object(u.a)(e,["speed","typingDelay","eraseDelay","staticText","text","className","cursor","cursorClassName"]),l=this.state.displayText,c=p()(a,"lfm__typing_effect");return s.a.createElement("span",Object.assign({},i,{className:c}),t?s.a.createElement("span",{className:"lfm__typing_effect_static_text"},t," "):null,s.a.createElement("span",{className:"lfm__typing_effect_text"},l),s.a.createElement(h,{cursor:n,cursorClassName:r}))},t}(n.Component);w.defaultProps={speed:200,eraseDelay:5e3,typingDelay:2500};var v=a("Bl7J"),b=a("k3mn"),B=function(e){var t=e.role,a=e.medium,n=e.name,r=e.img,i=e.children;return s.a.createElement("div",{className:"testimonial shadow-lg bg-white card"},s.a.createElement("div",{className:"card-image",style:{backgroundImage:"url("+r+")"}}),s.a.createElement("div",{className:"card-body"},s.a.createElement("ion-icon",{size:"large",name:"chatbubbles-outline"}),i,s.a.createElement("div",{className:"testimonial-referrer"},s.a.createElement("div",null,s.a.createElement("strong",null,n)),s.a.createElement("span",{className:"role"},t),", ",s.a.createElement("span",{className:"medium"},a))))},y=a("w9Ys");t.default=Object(r.injectIntl)((function(e){var t=e.intl;return s.a.createElement(v.a,null,s.a.createElement(b.a,{lang:t.locale,title:t.formatMessage({id:"title"}),keywords:["clipshare","snapscreen","innovative"]}),s.a.createElement(i.a,null,s.a.createElement(l.a,null,s.a.createElement(c.a,null,s.a.createElement(o.a,{xs:"12",md:"10",lg:"9",className:"ml-auto mr-auto"},s.a.createElement("div",{className:"lead-title"},"Share and discover what’s on TV."),s.a.createElement("h1",{className:"display-2 mb-4 py-4",style:{minHeight:200}},s.a.createElement("strong",null,"Did You snap this")," ",s.a.createElement("span",{className:"text-primary"},s.a.createElement(w,{speed:30,typingDelay:1e3,text:["epic moment","incredible news","amazing Slam-Dunk","hilarious laugh","magic Touch-down","awesome action"]}))," ",s.a.createElement("strong",null,"on TV?")),s.a.createElement("p",{className:"lead"},s.a.createElement("strong",null,"You have 2 options to share what’s on TV:")," Either have a good fortune teller who knows when you need to record the TV screen – OR – have Snapscreen ready on your mobile phone and never miss any favorite moment on TV ever again. Let us know which solution you prefer."),s.a.createElement("div",{className:"pt-4 text-center text-sm-left"},s.a.createElement(r.Link,{to:"/try/",className:"btn btn-primary btn-lg"},"Try it now"),s.a.createElement(r.Link,{to:"/vision/",className:"btn btn-link btn-lg mx-sm-2 mt-2 mt-sm-0"},"Why we do this?")))))),s.a.createElement("section",{className:""},s.a.createElement(l.a,null,s.a.createElement(c.a,null,s.a.createElement(o.a,{xs:"12",lg:"6",className:"mr-auto mb-4"},s.a.createElement("h2",{className:"h3"},s.a.createElement("strong",null,"Real use cases")," by specific roles."))),s.a.createElement("div",{className:"card-grid"},s.a.createElement(B,{role:"Journalist",medium:"FOX news",name:"Joe Concha",img:"https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2020/02/696/392/JOE-CONCHA.jpg?ve=1&tl=1"},s.a.createElement("p",null,"Snapscreen breaks a barrier in sharing media files in journalism. By snapping a TV getting a high quality clip feels like magic! Free speech at a new level.")),s.a.createElement(B,{role:"Journalist",medium:"Techchrunch",name:"Zack Whittaker",img:"https://crunchbase-production-res.cloudinary.com/image/upload/w_400,h_400,c_thumb,g_faces/arqrabrudwyofg3sb2pl"},s.a.createElement("p",null,"Snapscreen breaks a barrier in sharing media files in journalism. By snapping a TV getting a high quality clip feels like magic! Free speech at a new level."))))),s.a.createElement(y.a,null))}))},f38Q:function(e,t){e.exports="data:image/png;base64,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"},i6Tk:function(e,t,a){e.exports=a.p+"static/AWS_logo-31bd5b60cc1492df5d1270f6e0ef43c7.jpg"},w9Ys:function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),r=a("kCIJ"),i=a("7vrA"),l=a("3Z9Z"),c=a("JI6e"),o=a("2mvg"),u=a("f38Q"),m=a.n(u),A=a("i6Tk"),d=a.n(A);t.a=Object(r.injectIntl)((function(){return s.a.createElement("section",{className:"bg-white"},s.a.createElement(i.a,null,s.a.createElement(l.a,null,s.a.createElement(c.a,{xs:"12",lg:"12",className:"mx-auto"},s.a.createElement("h2",{className:"lead"},s.a.createElement("strong",null,"We are supported")," and trusted by"),s.a.createElement(o.a,{className:"mr-5 mt-4",src:m.a,alt:"Techstars",fluid:!0,width:200}),s.a.createElement(o.a,{className:"mr-5 mt-4",src:d.a,alt:"Austria Wirtschaftsservice",fluid:!0,width:240})))))}))}}]);
//# sourceMappingURL=component---src-pages-index-js-2002acecbc94e03f8506.js.map