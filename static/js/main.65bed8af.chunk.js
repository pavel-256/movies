(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{24:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var i=t(0),r=t(1),n=t.n(r),s=t(17),c=t.n(s),o=(t(24),t(8)),l=t(10),d=t.p+"static/media/avatar.6dc2a3db.jpg",m=t.p+"static/media/batman.1d710c52.jpg",h=t.p+"static/media/leon.4e45ee1b.jpg",b=t.p+"static/media/madmax.4a358394.jpg",j=t.p+"static/media/rambo2.24b451e2.jpg",g=t.p+"static/media/riddic.340ee78c.jpg",p=t.p+"static/media/robocop2.2f527339.jpg",u=t.p+"static/media/spiderman3.36db5e2c.jpg",v=t.p+"static/media/terminator2.52efc32d.jpeg",w=t.p+"static/media/matrix.19d8f172.jpg",x=n.a.createContext(),O=function(){return Object(r.useContext)(x)},f=function(e){var a,t=e.children,n=Object(r.useState)([(a={name:"Avatar",discription:"A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",rating:[5,5,5,5],img:"https://www.youtube.com/embed/6ziBFh3V1aM",avg:5,img2:d},Object(l.a)(a,"avg",5),Object(l.a)(a,"director","James Cameron"),Object(l.a)(a,"writers","James Cameron"),Object(l.a)(a,"stars","Sam Worthington, Zoe Saldana, Sigourney Weaver "),a),{name:"The Matrix",discription:"When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",rating:[4,3,5,5],img:"https://www.youtube.com/embed/EweuTOz7g-g",img2:w,avg:4.2,director:"Lilly Wachowski,  Lana Wachowski",writers:"Lilly Wachowski,  Lana Wachowski",stars:"Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss "},{name:"The Dark Knight",discription:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",rating:[3,3,5,1],img:"https://www.youtube.com/embed/EXeTwQWrcwY",img2:m,avg:3,director:"Christopher Nolan",writers:"Jonathan Nolan, Christopher Nolan",stars:"Christian Bale, Heath Ledger, Aaron Eckhart"},{name:"Spiderman 3",discription:"A strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, temptations, and revenge.",rating:[1,3,2,2],img:"https://www.youtube.com/embed/zjdtiQx7RIw",img2:u,avg:2,director:"Sam Raimi",writers:"Sam Raimi",stars:"Tobey Maguire, Kirsten Dunst, Topher Grace"},{name:"Leon",discription:"Mathilda, a 12-year-old girl, is reluctantly taken in by L\xe9on, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his prot\xe9g\xe9e and learns the assassin's trade.",rating:[2,3,4,2],img:"https://www.youtube.com/embed/rNw0D7Hh0DY",img2:h,avg:2.7,director:"Luc Besson",writers:"Luc Besson",stars:"Jean Reno, Gary Oldman, Natalie Portman"},{name:"Mad Max",discription:"In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",rating:[4,4,4,3],img:"https://www.youtube.com/embed/YWNWi-ZWL3c",img2:b,avg:3.7,director:"George Miller",writers:"George Miller, Brendan McCarthy ",stars:"Tom Hardy, Charlize Theron, Nicholas Hoult"},{name:"Rambo 2",discription:"In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",rating:[2,2,2,4],img:"https://www.youtube.com/embed/IQt9bDOGTgg",img2:j,avg:2.5,director:"George P. Cosmatos",writers:"David Morrell, Kevin Jarre",stars:"Sylvester Stallone, Richard Crenna, Charles Napier"},{name:"Riddic",discription:"Left for dead on a sun-scorched planet, Riddick finds himself up against an alien race of predators. Activating an emergency beacon alerts two ships: one carrying a new breed of mercenary, the other captained by a man from Riddick's past.",rating:[3,2,2,1],img:"https://www.youtube.com/embed/iP3eFIOBU0k",img2:g,avg:2,director:"David Twohy",writers:"David Twohy, Jim Wheat",stars:"Vin Diesel, Karl Urban, Katee Sackhoff"},{name:"Robocop 2",discription:"Robocop is back to fight a new seed of crime and a more dangerous and violent robot version of himself.",rating:[2,3,5,2],img:"https://www.youtube.com/embed/HNcy89RqF5Q",img2:p,avg:3,director:"Irvin Kershner",writers:"Edward Neumeier,  Michael Miner ",stars:"Peter Weller, Nancy Allen, Belinda Bauer"},{name:"Terminator 2",discription:"A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.",rating:[1,2,3,5],img:"https://www.youtube.com/embed/CRRlbK5w8AE",img2:v,avg:2.7,director:"James Cameron",writers:"James Cameron, William Wisher",stars:"Arnold Schwarzenegger, Linda Hamilton, Edward Furlong"}]),s=Object(o.a)(n,2),c=s[0],O=s[1];return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(x.Provider,{value:{movies:c,setMovies:O},children:t})})},y=t(2);function N(e){var a=O(),t=a.movies,n=a.setMovies,s=Object(r.useState)({name:e.name}),c=Object(o.a)(s,2),l=c[0],d=(c[1],t.slice()),m=function(a){var t=a.target.value,i=e.index;d[i].rating.push(Number(t));var r=d[i];r.avg=r.rating.reduce((function(e,a){return e+a}))/r.rating.length,n(d),h()},h=function(){e.sendDisplay(l.name)};return Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"col mb-4 ",children:Object(i.jsxs)("div",{className:"card movie_card",children:[Object(i.jsx)("div",{className:"videoWrapper",children:Object(i.jsx)("iframe",{width:755,height:506,frameBorder:0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:e.img,classname:"card-img-top",alt:"..."})}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("h3",{className:"card-title",children:e.name}),Object(i.jsx)("p",{className:"card-text",children:e.discription}),Object(i.jsx)("br",{}),Object(i.jsxs)("h6",{children:["Director: \xa0 ",e.director]}),Object(i.jsxs)("h6",{children:["Writers: \xa0 ",e.writers]}),Object(i.jsxs)("h6",{children:["Stars: \xa0 ",e.stars]}),Object(i.jsx)("br",{}),Object(i.jsxs)("h6",{children:["Average Rating:\xa0 ",e.avg.toFixed(1)," ",Object(i.jsx)("i",{class:"fas fa-star"})]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{className:"btn btn-warning btn-lg",value:"1",onClick:m,children:"1"}),Object(i.jsx)("button",{value:"2",className:"btn btn-warning btn-lg",onClick:m,children:"2"}),Object(i.jsx)("button",{value:"3",onClick:m,className:"btn btn-warning btn-lg",children:"3"}),Object(i.jsx)("button",{onClick:m,value:"4",className:"btn btn-warning btn-lg",children:"4"}),Object(i.jsx)("button",{value:"5",onClick:m,className:"btn btn-warning btn-lg",children:"5"})]})]})})})}var k=Object(y.f)((function(e){var a=Object(y.e)(),t=O(),n=t.movies,s=(t.setMovies,Object(r.useState)({display:!1,resetSelect:!1})),c=Object(o.a)(s,2),l=c[0],d=c[1];!function(){for(var e=0;e<n.length;e++)for(var a=0;a<n.length-1-e;a++)if(n[a].avg>n[a+1].avg){var t=n[a];n[a]=n[a+1],n[a+1]=t}n.reverse()}();var m=function(e){d({display:!0,resetSelect:!0}),a.push("/".concat(e.target.value)),window.scrollTo({top:0,behavior:"smooth"})},h=function(e){a.push("/".concat(e)),d({display:!0})};return Object(i.jsxs)("div",{children:[Object(i.jsx)("header",{id:"top",children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsxs)("div",{className:"movie_icon",children:[" ",Object(i.jsx)("i",{class:"fas fa-video mr-2 fa-2x "}),Object(i.jsx)("span",{id:"main_icon",children:"MovieRatings"})]}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(i.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link text-white ",href:""})}),Object(i.jsx)("li",{className:"nav-item mr-auto",children:Object(i.jsxs)("select",{value:(l.resetSelect,"Movies"),onChange:m,name:"name",className:"custom-select mr-sm-2 ",children:[Object(i.jsx)("option",{selected:"true",disabled:"disabled",children:"Movies"}),n.map((function(e,a){return Object(i.jsx)("option",{children:e.name})}))]})})]})})]})})}),Object(i.jsx)("main",{className:"min-h620 main",children:Object(i.jsx)("div",{className:"container-fluid",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-lg-7 movie col-md-12 col-sm-12",children:n.map((function(e,a){return a<1&&!1===l.display?Object(i.jsx)(y.a,{exact:!0,path:"/",component:function(){return Object(i.jsx)(N,{name:e.name,discription:e.discription,rating:e.rating,index:a,img:e.img,avg:e.avg,director:e.director,writers:e.writers,stars:e.stars,sendDisplay:h})}}):Object(i.jsx)(y.a,{exact:!0,path:"/".concat(e.name),component:function(){return Object(i.jsx)(N,{name:e.name,discription:e.discription,rating:e.rating,index:a,img:e.img,avg:e.avg,director:e.director,writers:e.writers,stars:e.stars,sendDisplay:h})}})}))}),Object(i.jsxs)("div",{className:"col-lg-5 movies col-md-12 col-sm-12  ",children:[Object(i.jsx)("h1",{className:"best",children:"Best 3 Movies"}),n.map((function(e,a){return a<3?Object(i.jsx)("div",{className:"card mb-5  movie_card ",style:{maxWidth:"600px"},children:Object(i.jsxs)("div",{className:"row no-gutters ",children:[Object(i.jsx)("div",{className:"col-lg-6 bestMoviWrapper ",children:Object(i.jsx)("img",{src:e.img2,className:"img-best",alt:"..."})}),Object(i.jsx)("div",{className:"col-lg-6 col",children:Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("button",{id:"scroll",onClick:m,value:e.name,className:"card-title btn btn-warning btn-lg ",children:e.name}),Object(i.jsxs)("p",{className:"mt-4",children:["Rating: ",e.avg.toFixed(1),Object(i.jsx)("i",{class:"fas fa-star",children:" "})]}),Object(i.jsx)("p",{className:"card-text",children:Object(i.jsx)("small",{className:"text-muted"})})]})})]})}):null}))]})]})})}),Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-12",children:Object(i.jsx)("p",{className:"text-white text-center pt-2 ",children:"MovieRatings \xa9 2021"})})})})})]})}));t(30);var C=function(){return Object(i.jsx)(n.a.Fragment,{children:Object(i.jsx)(k,{component:k})})},M=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(a){var t=a.getCLS,i=a.getFID,r=a.getFCP,n=a.getLCP,s=a.getTTFB;t(e),i(e),r(e),n(e),s(e)}))},S=t(11),W=Object(i.jsx)(S.a,{basename:"/movies",children:Object(i.jsx)(f,{children:Object(i.jsx)(C,{})})});c.a.render(W,document.getElementById("root")),M()}},[[31,1,2]]]);
//# sourceMappingURL=main.65bed8af.chunk.js.map