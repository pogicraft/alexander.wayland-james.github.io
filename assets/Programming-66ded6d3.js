import{r as d,o as f,c as p,a,b as n,d as v,e as r,p as b,f as g,_ as h,F as m}from"./index-d174ce1e.js";const c=s=>(b("data-v-3a198fb6"),s=s(),g(),s),_={class:"production-frame"},u=c(()=>a("h1",null,"Programming",-1)),w={class:"section-container",ref:"rollerUp"},x={class:"a-column"},S={class:"a-column"},T={class:"a-column"},y={class:"under-section-container",ref:"rollerDown"},L={class:"test-box",ref:"testBox"},P={class:"collapse-container",ref:"option1"},k=r('<ol class="rectangle-list" data-v-3a198fb6><li data-v-3a198fb6><a data-v-3a198fb6>Flash Card Project with <em data-v-3a198fb6>Tkinter</em></a></li><li data-v-3a198fb6><a data-v-3a198fb6>Journal Project using <em data-v-3a198fb6>SimplePyGUI</em></a></li><li data-v-3a198fb6><a data-v-3a198fb6>Compound Project using <em data-v-3a198fb6>PySide6</em></a></li><li data-v-3a198fb6><a data-v-3a198fb6>Data Aggregate and Filter Project with <em data-v-3a198fb6>Pandas</em></a></li></ol>',1),I={class:"collapse-container",ref:"option2"},C=r('<div class="rollover-container row" data-v-3a198fb6><div class="col-container col" data-v-3a198fb6><img src="https://i.ibb.co/3cCJQBY/Screenshot-2023-01-04-230211.png" data-v-3a198fb6><img src="https://i.ibb.co/PN71QLD/Screenshot-2023-01-04-230206.png" data-v-3a198fb6></div><div class="col-container col" data-v-3a198fb6><img src="https://i.ibb.co/cgyDc6Q/Screenshot-2023-01-06-205252.png" data-v-3a198fb6><img src="https://i.ibb.co/64hky1W/express2portfolio.png" data-v-3a198fb6></div></div><div class="rollover-container row" data-v-3a198fb6><div class="text-container col" data-v-3a198fb6><p data-v-3a198fb6>This is my original portfolio website, which is still available at<span data-v-3a198fb6><a href="pogicraft.github.io" data-v-3a198fb6>https://www.pogicraft.github.io</a></span><span data-v-3a198fb6><p data-v-3a198fb6>It was written in plain JavaScript and HTML using CDN inserts from the Bootstrap and JQuery libraries.</p></span></p><p data-v-3a198fb6>It is a single page site with id based breadcrumbs and a fixed navigation bar.</p></div><div class="text-container col" data-v-3a198fb6><p data-v-3a198fb6>Second iteration of my showcase which was never officially published online.</p><p data-v-3a198fb6>It was written in Pug and ExpressJS with a nodeJS environment and uses Less for CSS pre-compile.</p><p data-v-3a198fb6>I have since upgraded to Vue3 with routing, state management, preload.</p></div></div>',2),D={class:"collapse-container",ref:"option3"},$={class:"work-in-progress text-center"},B=c(()=>a("p",null,"**Work in Progress**",-1)),J={class:"visually-hidden",ref:"footerText"};function N(s,e,t,M,j,i){const l=d("font-awesome-icon");return f(),p("div",_,[u,a("div",w,[a("div",x,[a("button",{class:"language-button btn",onClick:e[0]||(e[0]=o=>i.clickedLanguage(o.target.innerText))},"Python")]),a("div",S,[a("button",{class:"language-button btn",onClick:e[1]||(e[1]=o=>i.clickedLanguage(o.target.innerText))},"HTML/JavaScript")]),a("div",T,[a("button",{class:"language-button btn",onClick:e[2]||(e[2]=o=>i.clickedLanguage(o.target.innerText))},"MongoDB")])],512),a("div",y,[a("div",L,null,512),a("div",P,[n("Python"),k],512),a("div",I,[n("HTML/JavaScript"),C],512),a("div",D,[n("MongoDB"),a("div",$,[v(l,{class:"fas",icon:"fa-solid fa-gear",style:{"font-size":"5rem",display:"inline-block",color:"wheat"}}),B])],512)],512),a("p",J,"Here is a line of text",512)])}function V(s){let e=this.$el.querySelectorAll(".collapse-container");if(this.$refs.footerText.innerText===s){this.$refs.rollerUp.classList.remove("active"),this.$refs.rollerDown.classList.remove("active");for(let t=0;t<e.length;t++)e[t].classList.remove("expand");this.$refs.footerText.innerText="Here is a line of text"}else{this.$refs.rollerUp.classList.add("active"),this.$refs.rollerDown.classList.add("active");for(let t=0;t<e.length;t++)e[t].innerText.search(s)!==-1?e[t].classList.toggle("expand"):e[t].classList.remove("expand");this.$refs.footerText.innerText=s}}const H={name:"ProgrammingView",methods:{clickedLanguage:V},components:{FontAwesomeIcon:m}},Q=h(H,[["render",N],["__scopeId","data-v-3a198fb6"]]);export{Q as default};
