(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{24:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var i=t(0),n=t(1),s=t.n(n),c=t(16),r=t.n(c),o=(t(24),t(10)),l=t(17),d=t.p+"static/media/avatar.6dc2a3db.jpg",m=t.p+"static/media/batman.1d710c52.jpg",b=t.p+"static/media/leon.4e45ee1b.jpg",h=t.p+"static/media/madmax.4a358394.jpg",j=t.p+"static/media/rambo2.24b451e2.jpg",g=t.p+"static/media/riddic.340ee78c.jpg",p=t.p+"static/media/robocop2.2f527339.jpg",u=t.p+"static/media/spiderman3.36db5e2c.jpg",v=t.p+"static/media/terminator2.52efc32d.jpeg",x=t.p+"static/media/matrix.19d8f172.jpg",w=s.a.createContext(),O=function(){return Object(n.useContext)(w)},f=function(e){var a=e.children,t=Object(n.useState)([Object(l.a)({name:"Avatar",id:1,discription:"A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",rating:[],img:"https://www.youtube.com/embed/6ziBFh3V1aM",avg:5,img2:d},"avg",5),{name:"The Matrix",id:2,discription:"When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",rating:[],img:"https://www.youtube.com/embed/EweuTOz7g-g",img2:x,avg:4.5},{name:"The Dark Knight",id:3,discription:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",rating:[],img:"https://www.youtube.com/embed/EXeTwQWrcwY",img2:m,avg:3.8},{name:"Spiderman 3",id:4,discription:"A strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, temptations, and revenge.",rating:[],img:"https://www.youtube.com/embed/zjdtiQx7RIw",img2:u,avg:2.1},{name:"Leon",id:5,discription:"Mathilda, a 12-year-old girl, is reluctantly taken in by L\xe9on, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his prot\xe9g\xe9e and learns the assassin's trade.",rating:[],img:"https://www.youtube.com/embed/rNw0D7Hh0DY",img2:b,avg:2.7},{name:"Mad Max",id:6,discription:"In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",rating:[],img:"https://www.youtube.com/embed/YWNWi-ZWL3c",img2:h,avg:4.4},{name:"Rambo 2",id:7,discription:"In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",rating:[],img:"https://www.youtube.com/embed/IQt9bDOGTgg",img2:j,avg:2.3},{name:"Riddic",id:7,discription:"EE",rating:[],img:"https://www.youtube.com/embed/iP3eFIOBU0k",img2:g,avg:3.4},{name:"Robocop 2",id:7,discription:"Robocop is back to fight a new seed of crime and a more dangerous and violent robot version of himself.",rating:[],img:"https://www.youtube.com/embed/HNcy89RqF5Q",img2:p,avg:2.3},{name:"Terminator 2",id:7,discription:"A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.",rating:[],img:"https://www.youtube.com/embed/CRRlbK5w8AE",img2:v,avg:1.4}]),s=Object(o.a)(t,2),c=s[0],r=s[1];return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(w.Provider,{value:{movies:c,setMovies:r},children:a})})},N=t(2);function y(e){var a=O(),t=a.movies,n=a.setMovies,s=t.slice(),c=function(a){var t=a.target.value,i=e.index;s[i].rating.push(Number(t));var c=s[i];c.avg=c.rating.reduce((function(e,a){return e+a}))/c.rating.length,n(s)};return Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"col mb-4 ",children:Object(i.jsxs)("div",{className:"card movie_card",children:[Object(i.jsx)("div",{className:"videoWrapper",children:Object(i.jsx)("iframe",{width:755,height:506,frameBorder:0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:e.img,classname:"card-img-top",alt:"..."})}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("h3",{className:"card-title",children:e.name}),Object(i.jsx)("p",{className:"card-text",children:e.discription}),Object(i.jsxs)("div",{children:["Average Rating: ",e.avg.toFixed(1)," ",Object(i.jsx)("i",{class:"fas fa-star"})]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{className:"btn btn-warning",value:"1",onClick:c,children:"1"}),Object(i.jsx)("button",{value:"2",className:"btn btn-warning",onClick:c,children:"2"}),Object(i.jsx)("button",{value:"3",onClick:c,className:"btn btn-warning",children:"3"}),Object(i.jsx)("button",{onClick:c,value:"4",className:"btn btn-warning",children:"4"}),Object(i.jsx)("button",{value:"5",onClick:c,className:"btn btn-warning",children:"5"})]})]})})})}var k=Object(N.f)((function(e){var a=Object(N.e)(),t=O().movies,s=Object(n.useState)({display:!1}),c=Object(o.a)(s,2),r=c[0],l=c[1];!function(){for(var e=0;e<t.length;e++)for(var a=0;a<t.length-1-e;a++)if(t[a].avg>t[a+1].avg){var i=t[a];t[a]=t[a+1],t[a+1]=i}t.reverse()}();var d=function(e){console.log(e.target.value),l({display:!0}),a.push("/".concat(e.target.value)),window.scrollTo({top:0,behavior:"smooth"})};return Object(i.jsxs)("div",{children:[Object(i.jsx)("header",{id:"top",children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsxs)("div",{className:"movie_icon",children:[" ",Object(i.jsx)("i",{class:"fas fa-video mr-2 fa-2x "}),Object(i.jsx)("span",{id:"main_icon",children:"MovieRatings"})]}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(i.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link text-white ",href:""})}),Object(i.jsx)("li",{className:"nav-item mr-auto",children:Object(i.jsxs)("select",{onChange:d,name:"name",className:"custom-select mr-sm-2 ",children:[Object(i.jsx)("option",{selected:"false",disabled:"disabled",children:"Movies"}),t.map((function(e,a){return Object(i.jsx)("option",{children:e.name})}))]})})]})})]})})}),Object(i.jsx)("main",{className:"min-h620 main",children:Object(i.jsx)("div",{className:"container-fluid",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-lg-7 movie col-md-12 col-sm-12",children:t.map((function(e,a){return a<1&&!1===r.display?Object(i.jsx)(N.a,{exact:!0,path:"/",component:function(){return Object(i.jsx)(y,{name:e.name,discription:e.discription,rating:e.rating,index:a,img:e.img,avg:e.avg})}}):Object(i.jsx)(N.a,{exact:!0,path:"/".concat(e.name),component:function(){return Object(i.jsx)(y,{name:e.name,discription:e.discription,rating:e.rating,index:a,img:e.img,avg:e.avg})}})}))}),Object(i.jsxs)("div",{className:"col-lg-5 movies col-md-12 col-sm-12  ",children:[Object(i.jsx)("h1",{className:"best",children:"Best 3 Movies"}),t.map((function(e,a){return a<3?Object(i.jsx)("div",{className:"card mb-3 movie_card ",style:{maxWidth:"600px"},children:Object(i.jsxs)("div",{className:"row no-gutters ",children:[Object(i.jsx)("div",{className:"col-lg-6 bestMoviWrapper ",children:Object(i.jsx)("img",{src:e.img2,className:"img-best",alt:"..."})}),Object(i.jsx)("div",{className:"col-lg-6 col",children:Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("button",{id:"scroll",onClick:d,value:e.name,className:"card-title btn btn-warning btn-lg ",children:e.name}),Object(i.jsxs)("p",{className:"mt-4",children:["Rating: ",e.avg.toFixed(1)," ",Object(i.jsx)("i",{class:"fas fa-star",children:" "})]}),Object(i.jsx)("p",{className:"card-text",children:Object(i.jsx)("small",{className:"text-muted"})})]})})]})}):null}))]})]})})}),Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-12",children:Object(i.jsx)("p",{className:"text-white text-center pt-2 ",children:"MovieRatings \xa9 2021"})})})})})]})}));t(30);var C=function(){return Object(i.jsx)(s.a.Fragment,{children:Object(i.jsx)(k,{component:k})})},M=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(a){var t=a.getCLS,i=a.getFID,n=a.getFCP,s=a.getLCP,c=a.getTTFB;t(e),i(e),n(e),s(e),c(e)}))},R=t(9),F=Object(i.jsx)(R.a,{basename:"/movies",children:Object(i.jsx)(f,{children:Object(i.jsx)(C,{})})});r.a.render(F,document.getElementById("root")),M()}},[[31,1,2]]]);
//# sourceMappingURL=main.5cea5cbc.chunk.js.map