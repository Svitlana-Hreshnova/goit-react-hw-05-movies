"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[964],{155:function(n,t,e){e.d(t,{Z:function(){return o}});var r=e(689),c=e(87),u="MoviesList_movieList__8BnEE",a="MoviesList_movieListItem__pwpnH",i=e(184),o=function(n){var t=n.movies,e=(0,r.TH)();return(0,i.jsx)("ul",{className:u,children:t.map((function(n){return(0,i.jsx)("li",{className:a,children:(0,i.jsx)(c.rU,{to:{pathname:"/movies/".concat(n.id),state:{from:e}},children:n.title})},n.id)}))})}},577:function(n,t,e){e.d(t,{Df:function(){return o},TP:function(){return f},tx:function(){return v},z1:function(){return s},zv:function(){return p}});var r=e(861),c=e(311),u=e.n(c),a="1b93674f2cdbcec2a1dada65eabf4efc",i="https://api.themoviedb.org/3",o=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/trending/movie/day?api_key=").concat(a));case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,n.abrupt("return",e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/search/movie?api_key=").concat(a,"&query=").concat(t));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/movie/").concat(t,"?api_key=").concat(a));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(a));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(a));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},964:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r=e(861),c=e(439),u=e(311),a=e.n(u),i=e(791),o=e(87),s=e(577),f=e(155),p="SearchForm_searchInput__h6REp",v=e(184),h=function(n){var t=n.onHandleSubmit,e=(0,i.useState)(""),r=(0,c.Z)(e,2),u=r[0],a=r[1];return(0,v.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t(u)},children:[(0,v.jsx)("input",{type:"text",placeholder:"Search for movies",value:u,onChange:function(n){return a(n.target.value)},className:p}),(0,v.jsx)("button",{type:"submit",children:"Search"})]})},l="Movies_container__+-Cnt",d=function(){var n=(0,i.useState)([]),t=(0,c.Z)(n,2),e=t[0],u=t[1],p=(0,i.useState)(!1),d=(0,c.Z)(p,2),m=d[0],x=d[1],_=(0,i.useState)(null),w=(0,c.Z)(_,2),y=w[0],b=w[1],j=(0,o.lr)(),k=(0,c.Z)(j,2),Z=k[0],S=k[1],g=Z.get("query")||"";(0,i.useEffect)((function(){if(g){var n=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return x(!0),n.prev=1,n.next=4,(0,s.z1)(g);case 4:t=n.sent,u(t.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),b("Something went wrong...");case 11:return n.prev=11,x(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}}),[g]);return(0,v.jsxs)("div",{className:l,children:[(0,v.jsx)("h2",{children:"Search Movies"}),(0,v.jsx)(h,{onHandleSubmit:function(n){S({query:n})}}),m&&(0,v.jsx)("p",{children:"Loading..."}),y&&(0,v.jsx)("p",{children:y}),e.length>0&&(0,v.jsx)(f.Z,{movies:e})]})}},861:function(n,t,e){function r(n,t,e,r,c,u,a){try{var i=n[u](a),o=i.value}catch(s){return void e(s)}i.done?t(o):Promise.resolve(o).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,u){var a=n.apply(t,e);function i(n){r(a,c,u,i,o,"next",n)}function o(n){r(a,c,u,i,o,"throw",n)}i(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=964.6ae8468c.chunk.js.map