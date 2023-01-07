import{h as ie,i as f,j as c,k as m,l as D,m as Te,n as Ce,q as Ae,s as ne,t as G,u as be,v as _e,x,r as R,o as Z,c as Se,a as L,d as ee,w as te,y as je,z as Me,p as Ie,f as Oe,A as Le,B as De,_ as Ee}from"./index-0fec8166.js";/**
 * Vue 3 Carousel 0.2.9
 * (c) 2022
 * @license MIT
 */const h={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0},xe={itemsToShow:{default:h.itemsToShow,type:Number},itemsToScroll:{default:h.itemsToScroll,type:Number},wrapAround:{default:h.wrapAround,type:Boolean},snapAlign:{default:h.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:h.transition,type:Number},breakpoints:{default:h.breakpoints,type:Object},autoplay:{default:h.autoplay,type:Number},pauseAutoplayOnHover:{default:h.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:h.mouseDrag,type:Boolean},touchDrag:{default:h.touchDrag,type:Boolean},dir:{default:h.dir,validator(e){return["rtl","ltr"].includes(e)}},settings:{default(){return{}},type:Object}};function Ne({config:e,slidesCount:n}){const{snapAlign:o,wrapAround:s,itemsToShow:i=1}=e;if(s)return Math.max(n-1,0);let a;switch(o){case"start":a=n-i;break;case"end":a=n-1;break;case"center":case"center-odd":a=n-Math.ceil((i-.5)/2);break;case"center-even":a=n-Math.ceil(i/2);break;default:a=0;break}return Math.max(a,0)}function Be({config:e,slidesCount:n}){const{wrapAround:o,snapAlign:s,itemsToShow:i=1}=e;let a=0;if(o||i>n)return a;switch(s){case"start":a=0;break;case"end":a=i-1;break;case"center":case"center-odd":a=Math.floor((i-1)/2);break;case"center-even":a=Math.floor((i-2)/2);break;default:a=0;break}return a}function oe({val:e,max:n,min:o}){return n<o?e:Math.min(Math.max(e,o),n)}function Ve({config:e,currentSlide:n,slidesCount:o}){const{snapAlign:s,wrapAround:i,itemsToShow:a=1}=e;let u=n;switch(s){case"center":case"center-odd":u-=(a-1)/2;break;case"center-even":u-=(a-2)/2;break;case"end":u-=a-1;break}return i?u:oe({val:u,max:o-a,min:0})}function $e(e){var n,o,s,i;return e?((n=e[0])===null||n===void 0?void 0:n.children)==="v-if"||((s=(o=e[0])===null||o===void 0?void 0:o.type)===null||s===void 0?void 0:s.name)==="CarouselSlide"?e.filter(a=>{var u;return((u=a.type)===null||u===void 0?void 0:u.name)==="CarouselSlide"}):((i=e[0])===null||i===void 0?void 0:i.children)||[]:[]}function X({val:e,max:n,min:o=0}){return e>n?X({val:e-(n+1),max:n,min:o}):e<o?X({val:e+(n+1),max:n,min:o}):e}function Pe(e,n){let o;return function(...s){const i=this;o||(e.apply(i,s),o=!0,setTimeout(()=>o=!1,n))}}function Re(e,n){let o;return function(...s){o&&clearTimeout(o),o=setTimeout(()=>{e(...s),o=null},n)}}var Xe=ie({name:"ARIA",setup(){const e=f("currentSlide",c(0)),n=f("slidesCount",c(0));return()=>m("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},`Item ${e.value+1} of ${n.value}`)}}),ze=ie({name:"Carousel",props:xe,setup(e,{slots:n,emit:o,expose:s}){var i;const a=c(null),u=c([]),g=c(0),d=c(0);let b=c({}),_=Object.assign({},h);const l=D(Object.assign({},_)),r=c((i=e.modelValue)!==null&&i!==void 0?i:0),y=c(0),E=c(0),C=c(0),M=c(0);let A,z;x("config",l),x("slidesCount",d),x("currentSlide",r),x("maxSlide",C),x("minSlide",M),x("slideWidth",g);function H(){const t=Object.assign(Object.assign({},e),e.settings);b=c(Object.assign({},t.breakpoints)),_=Object.assign(Object.assign({},t),{settings:void 0,breakpoints:void 0}),le(_)}function N(){const t=Object.keys(b.value).map(v=>Number(v)).sort((v,T)=>+T-+v);let p=Object.assign({},_);t.some(v=>window.matchMedia(`(min-width: ${v}px)`).matches?(p=Object.assign(Object.assign({},p),b.value[v]),!0):!1),le(p)}function le(t){Object.entries(t).forEach(([p,v])=>l[p]=v)}const se=Re(()=>{Object.keys(b.value).length&&(N(),I()),B()},16);function B(){if(!a.value)return;const t=a.value.getBoundingClientRect();g.value=t.width/l.itemsToShow}function I(){d.value<=0||(E.value=Math.ceil((d.value-1)/2),C.value=Ne({config:l,slidesCount:d.value}),M.value=Be({config:l,slidesCount:d.value}),l.wrapAround||(r.value=oe({val:r.value,max:C.value,min:M.value})))}Te(()=>{Object.keys(b.value).length&&N(),Ce(()=>{I(),B(),o("init")}),de(),window.addEventListener("resize",se,{passive:!0})}),Ae(()=>{z&&clearTimeout(z),A&&clearInterval(A),window.removeEventListener("resize",se,{passive:!0})});let S=!1;const V={x:0,y:0},$={x:0,y:0},w=D({x:0,y:0}),W=c(!1),ye=()=>{W.value=!0},we=()=>{W.value=!1};function re(t){["INPUT","TEXTAREA"].includes(t.target.tagName)||(S=t.type==="touchstart",!(!S&&t.button!==0||j.value)&&(S||t.preventDefault(),V.x=S?t.touches[0].clientX:t.clientX,V.y=S?t.touches[0].clientY:t.clientY,document.addEventListener(S?"touchmove":"mousemove",ue,!0),document.addEventListener(S?"touchend":"mouseup",ce,!0)))}const ue=Pe(t=>{$.x=S?t.touches[0].clientX:t.clientX,$.y=S?t.touches[0].clientY:t.clientY;const p=$.x-V.x,v=$.y-V.y;w.y=v,w.x=p},16);function ce(){const t=l.dir==="rtl"?-1:1,p=Math.sign(w.x)*.4,v=Math.round(w.x/g.value+p)*t;if(v&&!S){const T=Q=>{Q.stopPropagation(),window.removeEventListener("click",T,!0)};window.addEventListener("click",T,!0)}k(r.value-v),w.x=0,w.y=0,document.removeEventListener(S?"touchmove":"mousemove",ue,!0),document.removeEventListener(S?"touchend":"mouseup",ce,!0)}function de(){!l.autoplay||l.autoplay<=0||(A=setInterval(()=>{l.pauseAutoplayOnHover&&W.value||P()},l.autoplay))}function ve(){A&&(clearInterval(A),A=null),de()}const j=c(!1);function k(t){const p=l.wrapAround?t:oe({val:t,max:C.value,min:M.value});r.value===p||j.value||(o("slide-start",{slidingToIndex:t,currentSlideIndex:r.value,prevSlideIndex:y.value,slidesCount:d.value}),j.value=!0,y.value=r.value,r.value=p,z=setTimeout(()=>{if(l.wrapAround){const v=X({val:p,max:C.value,min:0});v!==r.value&&(r.value=v,o("loop",{currentSlideIndex:r.value,slidingToIndex:t}))}o("update:modelValue",r.value),o("slide-end",{currentSlideIndex:r.value,prevSlideIndex:y.value,slidesCount:d.value}),j.value=!1,ve()},l.transition))}function P(){k(r.value+l.itemsToScroll)}function Y(){k(r.value-l.itemsToScroll)}const pe={slideTo:k,next:P,prev:Y};x("nav",pe),x("isSliding",j);const fe=ne(()=>Ve({config:l,currentSlide:r.value,slidesCount:d.value}));x("slidesToScroll",fe);const ke=ne(()=>{const t=l.dir==="rtl"?-1:1,p=fe.value*g.value*t;return{transform:`translateX(${w.x-p}px)`,transition:`${j.value?l.transition:0}ms`,margin:l.wrapAround?`0 -${d.value*g.value}px`:"",width:"100%"}});function me(){H(),N(),I(),B(),ve()}Object.keys(xe).forEach(t=>{["modelValue"].includes(t)||G(()=>e[t],me)}),G(()=>e.modelValue,t=>{t!==r.value&&k(Number(t))}),G(d,I),H();const ge={config:l,slidesCount:d,slideWidth:g,next:P,prev:Y,slideTo:k,currentSlide:r,maxSlide:C,minSlide:M,middleSlide:E};s({updateBreakpointsConfigs:N,updateSlidesData:I,updateSlideWidth:B,initDefaultConfigs:H,restartCarousel:me,slideTo:k,next:P,prev:Y,nav:pe,data:ge});const F=n.default||n.slides,q=n.addons,he=D(ge);return()=>{const t=$e(F==null?void 0:F(he)),p=(q==null?void 0:q(he))||[];t.forEach((U,J)=>U.props.index=J);let v=t;if(l.wrapAround){const U=t.map((K,O)=>be(K,{index:-t.length+O,isClone:!0,key:`clone-before-${O}`})),J=t.map((K,O)=>be(K,{index:t.length+O,isClone:!0,key:`clone-after-${O}`}));v=[...U,...t,...J]}u.value=t,d.value=Math.max(t.length,1);const T=m("ol",{class:"carousel__track",style:ke.value,onMousedown:l.mouseDrag?_e(re,["capture"]):null,onTouchstart:l.touchDrag?_e(re,["capture"]):null},v),Q=m("div",{class:"carousel__viewport"},T);return m("section",{ref:a,class:{carousel:!0,"carousel--rtl":l.dir==="rtl"},dir:l.dir,"aria-label":"Gallery",tabindex:"0",onMouseenter:ye,onMouseleave:we},[Q,p,m(Xe)])}}});const He={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},ae=e=>{const n=e.name;if(!n||typeof n!="string")return;const o=He[n],s=m("path",{d:o}),i=e.title||n,a=m("title",i);return m("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:i},[a,s])};ae.props={name:String,title:String};const We=(e,{slots:n,attrs:o})=>{const{next:s,prev:i}=n||{},a=f("config",D(Object.assign({},h))),u=f("maxSlide",c(1)),g=f("minSlide",c(1)),d=f("currentSlide",c(1)),b=f("nav",{}),{dir:_,wrapAround:l}=a,r=_==="rtl",y=m("button",{type:"button",class:["carousel__prev",!l&&d.value<=g.value&&"carousel__prev--disabled",o==null?void 0:o.class],"aria-label":"Navigate to previous slide",onClick:b.prev},(i==null?void 0:i())||m(ae,{name:r?"arrowRight":"arrowLeft"})),E=m("button",{type:"button",class:["carousel__next",!l&&d.value>=u.value&&"carousel__next--disabled",o==null?void 0:o.class],"aria-label":"Navigate to next slide",onClick:b.next},(s==null?void 0:s())||m(ae,{name:r?"arrowLeft":"arrowRight"}));return[y,E]},Ye=()=>{const e=f("maxSlide",c(1)),n=f("minSlide",c(1)),o=f("currentSlide",c(1)),s=f("nav",{}),i=u=>X({val:o.value,max:e.value,min:0})===u,a=[];for(let u=n.value;u<e.value+1;u++){const g=m("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":i(u)},"aria-label":`Navigate to slide ${u+1}`,onClick:()=>s.slideTo(u)}),d=m("li",{class:"carousel__pagination-item",key:u},g);a.push(d)}return m("ol",{class:"carousel__pagination"},a)};var Fe=ie({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:n}){const o=f("config",D(Object.assign({},h))),s=f("currentSlide",c(0)),i=f("slidesToScroll",c(0)),a=f("slideWidth",c(0)),u=f("isSliding",c(!1)),g=ne(()=>({width:a.value?`${a.value}px`:"100%"})),d=()=>e.index===s.value,b=()=>e.index===s.value-1,_=()=>e.index===s.value+1,l=()=>{const r=Math.floor(i.value),y=Math.ceil(i.value+o.itemsToShow-1);return e.index>=r&&e.index<=y};return()=>{var r;return m("li",{style:g.value,class:{carousel__slide:!0,"carousel_slide--clone":e.isClone,"carousel__slide--visible":l(),"carousel__slide--active":d(),"carousel__slide--prev":b(),"carousel__slide--next":_(),"carousel__slide--sliding":u.value},"aria-hidden":!l()},(r=n.default)===null||r===void 0?void 0:r.call(n))}}});const qe=e=>(Ie("data-v-87ea6ebe"),e=e(),Oe(),e),Qe={class:"production-frame"},Ue={class:"section-container"},Je=qe(()=>L("h1",null,"Customer Service",-1)),Ke={class:"car-container"},Ge=["src"];function Ze(e,n,o,s,i,a){const u=R("slide"),g=R("navigation"),d=R("pagination"),b=R("carousel");return Z(),Se("div",Qe,[L("div",Ue,[Je,L("div",Ke,[ee(b,{"items-to-show":1.5,autoplay:1200,wrapAround:!0,transition:"200",pauseAutoplayOnHover:"true"},{addons:te(()=>[ee(g),ee(d)]),default:te(()=>[(Z(!0),Se(je,null,Me(i.images,(_,l)=>(Z(),Le(u,{key:_.id},{default:te(()=>[L("img",{src:_.url,width:"600"},null,8,Ge),L("h6",null,De(_.caption),1)]),_:2},1024))),128))]),_:1},8,["items-to-show"])])])])}const et={name:"customerService",components:{Carousel:ze,Slide:Fe,Pagination:Ye,Navigation:We},data(){return{images:[{id:1,url:"https://i.ibb.co/8Bbr8D1/cs-001.jpg",caption:"Full Displays"},{id:2,url:"https://i.ibb.co/PZgK7QP/cs-002.jpg",caption:"Beautiful Chicken Tender Order"},{id:3,url:"https://i.ibb.co/y894xDd/cs-003.jpg",caption:"Clear area"},{id:4,url:"https://i.ibb.co/KxXCmwD/cs-004.jpg",caption:"Clean fryers"},{id:5,url:"https://i.ibb.co/m6s9HHV/cs-005.jpg",caption:"Shiny sinks"},{id:6,url:"https://i.ibb.co/dQsq0MD/cs-006.jpg",caption:"I love this table!"},{id:7,url:"https://i.ibb.co/Dzd7p5X/cs-007.jpg",caption:"Clear workspaces"},{id:8,url:"https://i.ibb.co/mX41RdW/cs-008.jpg",caption:"Wings for sale"},{id:9,url:"https://i.ibb.co/JF6QLFY/cs-009.jpg",caption:"Floors ready for another day"},{id:10,url:"https://i.ibb.co/VjpVjqJ/cs-010.jpg",caption:"No oil, no mess"}]}}},nt=Ee(et,[["render",Ze],["__scopeId","data-v-87ea6ebe"]]);export{nt as default};
