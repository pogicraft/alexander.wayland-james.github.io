import{r as f,o as p,c as v,a as e,b as n,d as r,e as l,p as g,f as h,_ as m,F as _}from"./index-7f45d167.js";const d=s=>(g("data-v-425fe4c9"),s=s(),h(),s),u={class:"production-frame"},w=d(()=>e("h1",null,"Programming",-1)),x={class:"section-container",ref:"rollerUp"},b={class:"a-column"},S={class:"a-column"},T={class:"a-column"},L={class:"under-section-container",ref:"rollerDown"},P={class:"test-box",ref:"testBox"},y={class:"collapse-container",ref:"option1"},k=l('<ol class="rectangle-list" data-v-425fe4c9><li data-v-425fe4c9><a data-v-425fe4c9>Flash Card Project with <em data-v-425fe4c9>Tkinter</em></a></li><li data-v-425fe4c9><a data-v-425fe4c9>Journal Project using <em data-v-425fe4c9>SimplePyGUI</em></a></li><li data-v-425fe4c9><a data-v-425fe4c9>Compound Project using <em data-v-425fe4c9>PySide6</em></a></li><li data-v-425fe4c9><a data-v-425fe4c9>Data Aggregate and Filter Project with <em data-v-425fe4c9>Pandas</em></a></li></ol>',1),I={class:"collapse-container",ref:"option2"},C=l('<div class="rollover-container row" data-v-425fe4c9><div class="col-container col" data-v-425fe4c9><img src="https://i.ibb.co/3cCJQBY/Screenshot-2023-01-04-230211.png" data-v-425fe4c9><img src="https://i.ibb.co/PN71QLD/Screenshot-2023-01-04-230206.png" data-v-425fe4c9></div><div class="col-container col" data-v-425fe4c9><img src="https://i.ibb.co/cgyDc6Q/Screenshot-2023-01-06-205252.png" data-v-425fe4c9><img src="https://i.ibb.co/64hky1W/express2portfolio.png" data-v-425fe4c9></div></div><div class="rollover-container row" data-v-425fe4c9><div class="text-container col" data-v-425fe4c9><p data-v-425fe4c9>This is my original portfolio website, which is still available at<span data-v-425fe4c9><a href="pogicraft.github.io" data-v-425fe4c9>https://www.pogicraft.github.io</a></span><span data-v-425fe4c9><p data-v-425fe4c9>It was written in plain JavaScript and HTML using CDN inserts from the Bootstrap and JQuery libraries.</p></span></p><p data-v-425fe4c9>It is a single page site with id based breadcrumbs and a fixed navigation bar.</p></div><div class="text-container col" data-v-425fe4c9><p data-v-425fe4c9>Second iteration of my showcase which was never officially published online.</p><p data-v-425fe4c9> It was written in Pug and ExpressJS with a nodeJS environment and uses Less for CSS pre-compile.</p><p data-v-425fe4c9> I have since upgraded to Vue3 with routing, state management, preload.</p></div></div>',2),D={class:"collapse-container",ref:"option3"},$={class:"work-in-progress text-center"},B=d(()=>e("p",null,"**Work in Progress**",-1)),J={class:"visually-hidden",ref:"footerText"};function N(s,t,a,M,j,i){const c=f("font-awesome-icon");return p(),v("div",u,[w,e("div",x,[e("div",b,[e("button",{class:"language-button btn",onClick:t[0]||(t[0]=o=>i.clickedLanguage(o.target.innerText))},"Python")]),e("div",S,[e("button",{class:"language-button btn",onClick:t[1]||(t[1]=o=>i.clickedLanguage(o.target.innerText))},"HTML/JavaScript")]),e("div",T,[e("button",{class:"language-button btn",onClick:t[2]||(t[2]=o=>i.clickedLanguage(o.target.innerText))},"MongoDB")])],512),e("div",L,[e("div",P,null,512),e("div",y,[n("Python"),k],512),e("div",I,[n("HTML/JavaScript"),C],512),e("div",D,[n("MongoDB"),e("div",$,[r(c,{class:"a-icon",icon:"fa-solid fa-screwdriver-wrench"}),r(c,{class:"w-rotate a-icon fas",icon:"fa-solid fa-gear"}),r(c,{class:"a-icon",icon:"fa-solid fa-pen-ruler"}),B])],512)],512),e("p",J,"Here is a line of text",512)])}function V(s){let t=this.$el.querySelectorAll(".collapse-container");if(this.$refs.footerText.innerText===s){this.$refs.rollerUp.classList.remove("active"),this.$refs.rollerDown.classList.remove("active");for(let a=0;a<t.length;a++)t[a].classList.remove("expand");this.$refs.footerText.innerText="Here is a line of text"}else{this.$refs.rollerUp.classList.add("active"),this.$refs.rollerDown.classList.add("active");for(let a=0;a<t.length;a++)t[a].innerText.search(s)!==-1?t[a].classList.toggle("expand"):t[a].classList.remove("expand");this.$refs.footerText.innerText=s}}const H={name:"ProgrammingView",methods:{clickedLanguage:V},components:{FontAwesomeIcon:_}},Q=m(H,[["render",N],["__scopeId","data-v-425fe4c9"]]);export{Q as default};
