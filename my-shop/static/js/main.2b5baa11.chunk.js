(this["webpackJsonpmy-shop"]=this["webpackJsonpmy-shop"]||[]).push([[0],{13:function(e,t,n){},20:function(e,t,n){e.exports=n(32)},25:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(18),o=n.n(r),l=(n(25),n(13),n(1)),u=function(){var e=Object(l.f)();return c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){e.push("/Home")}},"Logo"))},m=n(6);var i=function(){var e={color:"White"};return c.a.createElement("nav",null,c.a.createElement(u,null),c.a.createElement("ul",{className:"nav-links"},c.a.createElement("li",null,c.a.createElement(m.b,{style:e,to:"/home"},"Home")),c.a.createElement("li",null,c.a.createElement(m.b,{style:e,to:"/about"},"About")),c.a.createElement("li",null,c.a.createElement(m.b,{style:e,to:"/shop"},"Shop"))))},s=n(8),p=n.n(s),E=n(10),h=n(11);var f=function(){Object(a.useEffect)((function(){o()}),[]);var e=Object(a.useState)([]),t=Object(h.a)(e,2),n=t[0],r=t[1],o=function(){var e=Object(E.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fortnite-api.theapinetwork.com/upcoming/get");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log("SHOP:ITEM.DATA: ",n.data),r(n.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",null,n.map((function(e){return c.a.createElement("h1",{key:e.itemId},c.a.createElement(m.b,{to:"/shop/".concat(e.itemId)},e.item.name))})))};var v=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"About Page"))},d=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Home Page"))};var b=function(e){var t=e.match;Object(a.useEffect)((function(){u(),console.log("MATCH: ",t)}),[]);var n=Object(a.useState)({images:{}}),r=Object(h.a)(n,2),o=r[0],l=r[1],u=function(){var e=Object(E.a)(p.a.mark((function e(){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fortnite-api.theapinetwork.com/item/get?id=".concat(t.params.id));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,console.log("RESP: ",n),console.log("ITEM: ",a),console.log("ITEM.DATA: ",a.data),console.log("ITEM.DATA.ITEM: ",a.data.item),l(a.data.item);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("h1",null,o.name),c.a.createElement("img",{src:o.images.background,width:"200",height:"300",alt:""}),c.a.createElement("h2",null,o.description))};var g=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m.a,null,c.a.createElement(i,null),c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/",exact:!0,component:d}),c.a.createElement(l.a,{path:"/home",exact:!0,component:d}),c.a.createElement(l.a,{path:"/about",component:v}),c.a.createElement(l.a,{path:"/shop",exact:!0,component:f}),c.a.createElement(l.a,{path:"/shop/:id",component:b}))))};o.a.render(c.a.createElement(g,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.2b5baa11.chunk.js.map