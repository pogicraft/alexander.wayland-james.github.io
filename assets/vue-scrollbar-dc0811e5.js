import{_ as U,o as j,c as q,g as z}from"./index-0fec8166.js";/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */function X(t){return getComputedStyle(t)}function m(t,e){for(var n in e){var i=e[n];typeof i=="number"&&(i=i+"px"),t.style[n]=i}return t}function A(t){var e=document.createElement("div");return e.className=t,e}var k=typeof Element<"u"&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function L(t,e){if(!k)throw new Error("No element matching method supported");return k.call(t,e)}function S(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function B(t,e){return Array.prototype.filter.call(t.children,function(n){return L(n,e)})}var g={main:"ps",rtl:"ps__rtl",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},I={x:null,y:null};function O(t,e){var n=t.element.classList,i=g.state.scrolling(e);n.contains(i)?clearTimeout(I[e]):n.add(i)}function K(t,e){I[e]=setTimeout(function(){return t.isAlive&&t.element.classList.remove(g.state.scrolling(e))},t.settings.scrollingThreshold)}function J(t,e){O(t,e),K(t,e)}var M=function(e){this.element=e,this.handlers={}},N={isEmpty:{configurable:!0}};M.prototype.bind=function(e,n){typeof this.handlers[e]>"u"&&(this.handlers[e]=[]),this.handlers[e].push(n),this.element.addEventListener(e,n,!1)};M.prototype.unbind=function(e,n){var i=this;this.handlers[e]=this.handlers[e].filter(function(a){return n&&a!==n?!0:(i.element.removeEventListener(e,a,!1),!1)})};M.prototype.unbindAll=function(){for(var e in this.handlers)this.unbind(e)};N.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every(function(e){return t.handlers[e].length===0})};Object.defineProperties(M.prototype,N);var E=function(){this.eventElements=[]};E.prototype.eventElement=function(e){var n=this.eventElements.filter(function(i){return i.element===e})[0];return n||(n=new M(e),this.eventElements.push(n)),n};E.prototype.bind=function(e,n,i){this.eventElement(e).bind(n,i)};E.prototype.unbind=function(e,n,i){var a=this.eventElement(e);a.unbind(n,i),a.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(a),1)};E.prototype.unbindAll=function(){this.eventElements.forEach(function(e){return e.unbindAll()}),this.eventElements=[]};E.prototype.once=function(e,n,i){var a=this.eventElement(e),s=function(r){a.unbind(n,s),i(r)};a.bind(n,s)};function _(t){if(typeof window.CustomEvent=="function")return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function D(t,e,n,i,a){i===void 0&&(i=!0),a===void 0&&(a=!1);var s;if(e==="top")s=["contentHeight","containerHeight","scrollTop","y","up","down"];else if(e==="left")s=["contentWidth","containerWidth","scrollLeft","x","left","right"];else throw new Error("A proper axis should be provided");Q(t,n,s,i,a)}function Q(t,e,n,i,a){var s=n[0],r=n[1],o=n[2],l=n[3],c=n[4],p=n[5];i===void 0&&(i=!0),a===void 0&&(a=!1);var b=t.element;t.reach[l]=null,b[o]<1&&(t.reach[l]="start"),b[o]>t[s]-t[r]-1&&(t.reach[l]="end"),e&&(b.dispatchEvent(_("ps-scroll-"+l)),e<0?b.dispatchEvent(_("ps-scroll-"+c)):e>0&&b.dispatchEvent(_("ps-scroll-"+p)),i&&J(t,l)),t.reach[l]&&(e||a)&&b.dispatchEvent(_("ps-"+l+"-reach-"+t.reach[l]))}function f(t){return parseInt(t,10)||0}function V(t){return L(t,"input,[contenteditable]")||L(t,"select,[contenteditable]")||L(t,"textarea,[contenteditable]")||L(t,"button,[contenteditable]")}function Z(t){var e=X(t);return f(e.width)+f(e.paddingLeft)+f(e.paddingRight)+f(e.borderLeftWidth)+f(e.borderRightWidth)}var R={isWebKit:typeof document<"u"&&"WebkitAppearance"in document.documentElement.style,supportsTouch:typeof window<"u"&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:typeof navigator<"u"&&navigator.msMaxTouchPoints,isChrome:typeof navigator<"u"&&/Chrome/i.test(navigator&&navigator.userAgent)};function W(t){var e=t.element,n=Math.floor(e.scrollTop),i=e.getBoundingClientRect();t.containerWidth=Math.round(i.width),t.containerHeight=Math.round(i.height),t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(B(e,g.element.rail("x")).forEach(function(a){return S(a)}),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(B(e,g.element.rail("y")).forEach(function(a){return S(a)}),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=C(t,f(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=f((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=C(t,f(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=f(n*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),F(e,t),t.scrollbarXActive?e.classList.add(g.state.active("x")):(e.classList.remove(g.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=t.isRtl===!0?t.contentWidth:0),t.scrollbarYActive?e.classList.add(g.state.active("y")):(e.classList.remove(g.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)}function C(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function F(t,e){var n={width:e.railXWidth},i=Math.floor(t.scrollTop);e.isRtl?n.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:n.left=t.scrollLeft,e.isScrollbarXUsingBottom?n.bottom=e.scrollbarXBottom-i:n.top=e.scrollbarXTop+i,m(e.scrollbarXRail,n);var a={top:i,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?a.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth-9:a.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?a.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth*2-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:a.left=e.scrollbarYLeft+t.scrollLeft,m(e.scrollbarYRail,a),m(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),m(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}function G(t){t.element,t.event.bind(t.scrollbarY,"mousedown",function(e){return e.stopPropagation()}),t.event.bind(t.scrollbarYRail,"mousedown",function(e){var n=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top,i=n>t.scrollbarYTop?1:-1;t.element.scrollTop+=i*t.containerHeight,W(t),e.stopPropagation()}),t.event.bind(t.scrollbarX,"mousedown",function(e){return e.stopPropagation()}),t.event.bind(t.scrollbarXRail,"mousedown",function(e){var n=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left,i=n>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=i*t.containerWidth,W(t),e.stopPropagation()})}function $(t){x(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),x(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])}function x(t,e){var n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],p=e[8],b=t.element,Y=null,H=null,h=null;function v(u){u.touches&&u.touches[0]&&(u[a]=u.touches[0].pageY),b[l]=Y+h*(u[a]-H),O(t,c),W(t),u.stopPropagation(),u.type.startsWith("touch")&&u.changedTouches.length>1&&u.preventDefault()}function y(){K(t,c),t[p].classList.remove(g.state.clicking),t.event.unbind(t.ownerDocument,"mousemove",v)}function d(u,w){Y=b[l],w&&u.touches&&(u[a]=u.touches[0].pageY),H=u[a],h=(t[i]-t[n])/(t[s]-t[o]),w?t.event.bind(t.ownerDocument,"touchmove",v):(t.event.bind(t.ownerDocument,"mousemove",v),t.event.once(t.ownerDocument,"mouseup",y),u.preventDefault()),t[p].classList.add(g.state.clicking),u.stopPropagation()}t.event.bind(t[r],"mousedown",function(u){d(u)}),t.event.bind(t[r],"touchstart",function(u){d(u,!0)})}function tt(t){var e=t.element,n=function(){return L(e,":hover")},i=function(){return L(t.scrollbarX,":focus")||L(t.scrollbarY,":focus")};function a(s,r){var o=Math.floor(e.scrollTop);if(s===0){if(!t.scrollbarYActive)return!1;if(o===0&&r>0||o>=t.contentHeight-t.containerHeight&&r<0)return!t.settings.wheelPropagation}var l=e.scrollLeft;if(r===0){if(!t.scrollbarXActive)return!1;if(l===0&&s<0||l>=t.contentWidth-t.containerWidth&&s>0)return!t.settings.wheelPropagation}return!0}t.event.bind(t.ownerDocument,"keydown",function(s){if(!(s.isDefaultPrevented&&s.isDefaultPrevented()||s.defaultPrevented)&&!(!n()&&!i())){var r=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(r){if(r.tagName==="IFRAME")r=r.contentDocument.activeElement;else for(;r.shadowRoot;)r=r.shadowRoot.activeElement;if(V(r))return}var o=0,l=0;switch(s.which){case 37:s.metaKey?o=-t.contentWidth:s.altKey?o=-t.containerWidth:o=-30;break;case 38:s.metaKey?l=t.contentHeight:s.altKey?l=t.containerHeight:l=30;break;case 39:s.metaKey?o=t.contentWidth:s.altKey?o=t.containerWidth:o=30;break;case 40:s.metaKey?l=-t.contentHeight:s.altKey?l=-t.containerHeight:l=-30;break;case 32:s.shiftKey?l=t.containerHeight:l=-t.containerHeight;break;case 33:l=t.containerHeight;break;case 34:l=-t.containerHeight;break;case 36:l=t.contentHeight;break;case 35:l=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&o!==0||t.settings.suppressScrollY&&l!==0||(e.scrollTop-=l,e.scrollLeft+=o,W(t),a(o,l)&&s.preventDefault())}})}function et(t){var e=t.element;function n(r,o){var l=Math.floor(e.scrollTop),c=e.scrollTop===0,p=l+e.offsetHeight===e.scrollHeight,b=e.scrollLeft===0,Y=e.scrollLeft+e.offsetWidth===e.scrollWidth,H;return Math.abs(o)>Math.abs(r)?H=c||p:H=b||Y,H?!t.settings.wheelPropagation:!0}function i(r){var o=r.deltaX,l=-1*r.deltaY;return(typeof o>"u"||typeof l>"u")&&(o=-1*r.wheelDeltaX/6,l=r.wheelDeltaY/6),r.deltaMode&&r.deltaMode===1&&(o*=10,l*=10),o!==o&&l!==l&&(o=0,l=r.wheelDelta),r.shiftKey?[-l,-o]:[o,l]}function a(r,o,l){if(!R.isWebKit&&e.querySelector("select:focus"))return!0;if(!e.contains(r))return!1;for(var c=r;c&&c!==e;){if(c.classList.contains(g.element.consuming))return!0;var p=X(c);if(l&&p.overflowY.match(/(scroll|auto)/)){var b=c.scrollHeight-c.clientHeight;if(b>0&&(c.scrollTop>0&&l<0||c.scrollTop<b&&l>0))return!0}if(o&&p.overflowX.match(/(scroll|auto)/)){var Y=c.scrollWidth-c.clientWidth;if(Y>0&&(c.scrollLeft>0&&o<0||c.scrollLeft<Y&&o>0))return!0}c=c.parentNode}return!1}function s(r){var o=i(r),l=o[0],c=o[1];if(!a(r.target,l,c)){var p=!1;t.settings.useBothWheelAxes?t.scrollbarYActive&&!t.scrollbarXActive?(c?e.scrollTop-=c*t.settings.wheelSpeed:e.scrollTop+=l*t.settings.wheelSpeed,p=!0):t.scrollbarXActive&&!t.scrollbarYActive&&(l?e.scrollLeft+=l*t.settings.wheelSpeed:e.scrollLeft-=c*t.settings.wheelSpeed,p=!0):(e.scrollTop-=c*t.settings.wheelSpeed,e.scrollLeft+=l*t.settings.wheelSpeed),W(t),p=p||n(l,c),p&&!r.ctrlKey&&(r.stopPropagation(),r.preventDefault())}}typeof window.onwheel<"u"?t.event.bind(e,"wheel",s):typeof window.onmousewheel<"u"&&t.event.bind(e,"mousewheel",s)}function rt(t){if(!R.supportsTouch&&!R.supportsIePointer)return;var e=t.element;function n(h,v){var y=Math.floor(e.scrollTop),d=e.scrollLeft,u=Math.abs(h),w=Math.abs(v);if(w>u){if(v<0&&y===t.contentHeight-t.containerHeight||v>0&&y===0)return window.scrollY===0&&v>0&&R.isChrome}else if(u>w&&(h<0&&d===t.contentWidth-t.containerWidth||h>0&&d===0))return!0;return!0}function i(h,v){e.scrollTop-=v,e.scrollLeft-=h,W(t)}var a={},s=0,r={},o=null;function l(h){return h.targetTouches?h.targetTouches[0]:h}function c(h){return h.pointerType&&h.pointerType==="pen"&&h.buttons===0?!1:!!(h.targetTouches&&h.targetTouches.length===1||h.pointerType&&h.pointerType!=="mouse"&&h.pointerType!==h.MSPOINTER_TYPE_MOUSE)}function p(h){if(c(h)){var v=l(h);a.pageX=v.pageX,a.pageY=v.pageY,s=new Date().getTime(),o!==null&&clearInterval(o)}}function b(h,v,y){if(!e.contains(h))return!1;for(var d=h;d&&d!==e;){if(d.classList.contains(g.element.consuming))return!0;var u=X(d);if(y&&u.overflowY.match(/(scroll|auto)/)){var w=d.scrollHeight-d.clientHeight;if(w>0&&(d.scrollTop>0&&y<0||d.scrollTop<w&&y>0))return!0}if(v&&u.overflowX.match(/(scroll|auto)/)){var T=d.scrollWidth-d.clientWidth;if(T>0&&(d.scrollLeft>0&&v<0||d.scrollLeft<T&&v>0))return!0}d=d.parentNode}return!1}function Y(h){if(c(h)){var v=l(h),y={pageX:v.pageX,pageY:v.pageY},d=y.pageX-a.pageX,u=y.pageY-a.pageY;if(b(h.target,d,u))return;i(d,u),a=y;var w=new Date().getTime(),T=w-s;T>0&&(r.x=d/T,r.y=u/T,s=w),n(d,u)&&h.preventDefault()}}function H(){t.settings.swipeEasing&&(clearInterval(o),o=setInterval(function(){if(t.isInitialized){clearInterval(o);return}if(!r.x&&!r.y){clearInterval(o);return}if(Math.abs(r.x)<.01&&Math.abs(r.y)<.01){clearInterval(o);return}if(!t.element){clearInterval(o);return}i(r.x*30,r.y*30),r.x*=.8,r.y*=.8},10))}R.supportsTouch?(t.event.bind(e,"touchstart",p),t.event.bind(e,"touchmove",Y),t.event.bind(e,"touchend",H)):R.supportsIePointer&&(window.PointerEvent?(t.event.bind(e,"pointerdown",p),t.event.bind(e,"pointermove",Y),t.event.bind(e,"pointerup",H)):window.MSPointerEvent&&(t.event.bind(e,"MSPointerDown",p),t.event.bind(e,"MSPointerMove",Y),t.event.bind(e,"MSPointerUp",H)))}var lt=function(){return{handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1}},nt={"click-rail":G,"drag-thumb":$,keyboard:tt,wheel:et,touch:rt},P=function(e,n){var i=this;if(n===void 0&&(n={}),typeof e=="string"&&(e=document.querySelector(e)),!e||!e.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");this.element=e,e.classList.add(g.main),this.settings=lt();for(var a in n)this.settings[a]=n[a];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var s=function(){return e.classList.add(g.state.focus)},r=function(){return e.classList.remove(g.state.focus)};this.isRtl=X(e).direction==="rtl",this.isRtl===!0&&e.classList.add(g.rtl),this.isNegativeScroll=function(){var c=e.scrollLeft,p=null;return e.scrollLeft=-1,p=e.scrollLeft<0,e.scrollLeft=c,p}(),this.negativeScrollAdjustment=this.isNegativeScroll?e.scrollWidth-e.clientWidth:0,this.event=new E,this.ownerDocument=e.ownerDocument||document,this.scrollbarXRail=A(g.element.rail("x")),e.appendChild(this.scrollbarXRail),this.scrollbarX=A(g.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",s),this.event.bind(this.scrollbarX,"blur",r),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var o=X(this.scrollbarXRail);this.scrollbarXBottom=parseInt(o.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=f(o.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=f(o.borderLeftWidth)+f(o.borderRightWidth),m(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=f(o.marginLeft)+f(o.marginRight),m(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=A(g.element.rail("y")),e.appendChild(this.scrollbarYRail),this.scrollbarY=A(g.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",s),this.event.bind(this.scrollbarY,"blur",r),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var l=X(this.scrollbarYRail);this.scrollbarYRight=parseInt(l.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=f(l.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?Z(this.scrollbarY):null,this.railBorderYWidth=f(l.borderTopWidth)+f(l.borderBottomWidth),m(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=f(l.marginTop)+f(l.marginBottom),m(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:e.scrollLeft<=0?"start":e.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:e.scrollTop<=0?"start":e.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(c){return nt[c](i)}),this.lastScrollTop=Math.floor(e.scrollTop),this.lastScrollLeft=e.scrollLeft,this.event.bind(this.element,"scroll",function(c){return i.onScroll(c)}),W(this)};P.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,m(this.scrollbarXRail,{display:"block"}),m(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=f(X(this.scrollbarXRail).marginLeft)+f(X(this.scrollbarXRail).marginRight),this.railYMarginHeight=f(X(this.scrollbarYRail).marginTop)+f(X(this.scrollbarYRail).marginBottom),m(this.scrollbarXRail,{display:"none"}),m(this.scrollbarYRail,{display:"none"}),W(this),D(this,"top",0,!1,!0),D(this,"left",0,!1,!0),m(this.scrollbarXRail,{display:""}),m(this.scrollbarYRail,{display:""}))};P.prototype.onScroll=function(e){this.isAlive&&(W(this),D(this,"top",this.element.scrollTop-this.lastScrollTop),D(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)};P.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),S(this.scrollbarX),S(this.scrollbarY),S(this.scrollbarXRail),S(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)};P.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(e){return!e.match(/^ps([-_].+|)$/)}).join(" ")};const st={name:"vue-custom-scrollbar",props:{settings:{default:null},swicher:{type:Boolean,default:!0},tagname:{type:String,default:"section"}},data(){return{ps:null}},methods:{scrollHandle(t){this.$emit(t.type,t)},update(){this.ps&&this.ps.update()},__init(){this.swicher&&(this._ps_inited?this.ps.update():(this._ps_inited=!0,this.ps=new P(this.$el,this.settings)))},__uninit(){this.ps&&(this.ps.destroy(),this.ps=null,this._ps_inited=!1)}},watch:{swicher(t){t&&!this._ps_inited&&this.__init(),!t&&this._ps_inited&&this.__uninit()},settings:{deep:!0,handler(){this.__uninit(),this.__init()}},$route(){this.update()}},mounted(){this.$isServer||this.__init()},updated(){this.$nextTick(this.update)},activated(){this.__init()},deactivated(){this.__uninit()},beforeDestroy(){this.__uninit()}},ot=["is"];function it(t,e,n,i,a,s){return j(),q("section",{class:"ps-container",is:t.$props.tagname,onPsScrollY:e[0]||(e[0]=(...r)=>s.scrollHandle&&s.scrollHandle(...r)),onPsScrollX:e[1]||(e[1]=(...r)=>s.scrollHandle&&s.scrollHandle(...r)),onPsScrollUp:e[2]||(e[2]=(...r)=>s.scrollHandle&&s.scrollHandle(...r)),onPsScrollDown:e[3]||(e[3]=(...r)=>s.scrollHandle&&s.scrollHandle(...r)),onPsScrollLeft:e[4]||(e[4]=(...r)=>s.scrollHandle&&s.scrollHandle(...r)),onPsScrollRight:e[5]||(e[5]=(...r)=>s.scrollHandle&&s.scrollHandle(...r)),onPsYReachStart:e[6]||(e[6]=(...r)=>s.scrollHandle&&s.scrollHandle(...r)),onPsYReachEnd:e[7]||(e[7]=(...r)=>s.scrollHandle&&s.scrollHandle(...r)),onPsXReachStart:e[8]||(e[8]=(...r)=>s.scrollHandle&&s.scrollHandle(...r)),onPsXReachEnd:e[9]||(e[9]=(...r)=>s.scrollHandle&&s.scrollHandle(...r))},[z(t.$slots,"default")],40,ot)}const ct=U(st,[["render",it]]);export{ct as v};
