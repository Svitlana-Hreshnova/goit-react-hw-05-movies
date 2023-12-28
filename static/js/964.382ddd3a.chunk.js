"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[964],{155:function(n,e,t){t.d(e,{Z:function(){return i}});t(791);var r=t(689),c=t(87),u="MoviesList_movieList__8BnEE",a="MoviesList_movieListItem__pwpnH",s=t(184),i=function(n){var e=n.movies,t=(0,r.TH)();return(0,s.jsx)("ul",{className:u,children:e.map((function(n){return(0,s.jsx)("li",{className:a,children:(0,s.jsx)(c.rU,{to:{pathname:"/movies/".concat(n.id),state:{from:t,query:new URLSearchParams(t.search).get("query")}},children:n.title})},n.id)}))})}},577:function(n,e,t){t.d(e,{Df:function(){return i},TP:function(){return f},tx:function(){return v},z1:function(){return o},zv:function(){return p}});var r=t(861),c=t(311),u=t.n(c),a="1b93674f2cdbcec2a1dada65eabf4efc",s="https://api.themoviedb.org/3",i=function(){var n=(0,r.Z)(u().mark((function n(){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/trending/movie/day?api_key=").concat(a));case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,n.abrupt("return",t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/search/movie?api_key=").concat(a,"&query=").concat(e));case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/movie/").concat(e,"?api_key=").concat(a));case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(a));case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(a));case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},964:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r=t(861),c=t(439),u=t(311),a=t.n(u),s=t(791),i=t(87),o="SearchForm_searchInput__h6REp",f=t(184),p=function(n){var e=n.onHandleSubmit,t=n.currentQuery,r=(0,s.useState)(t||""),u=(0,c.Z)(r,2),a=u[0],i=u[1];return(0,f.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e(a)},children:[(0,f.jsx)("input",{type:"text",placeholder:"Search for movies",value:a,onChange:function(n){return i(n.target.value)},className:o}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})},v=t(155),h=t(577),l="Movies_container__+-Cnt",m=function(){var n=(0,s.useState)([]),e=(0,c.Z)(n,2),t=e[0],u=e[1],o=(0,s.useState)(!1),m=(0,c.Z)(o,2),d=m[0],x=m[1],_=(0,s.useState)(null),w=(0,c.Z)(_,2),y=w[0],b=w[1],j=(0,i.lr)(),k=(0,c.Z)(j,2),Z=k[0],S=k[1],g=Z.get("query")||"";(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return x(!0),n.prev=1,n.next=4,(0,h.z1)(g);case 4:e=n.sent,u(e.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),b("Something went wrong...");case 11:return n.prev=11,x(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[g]);return(0,f.jsxs)("div",{className:l,children:[(0,f.jsx)("h2",{children:"Search Movies"}),(0,f.jsx)(p,{onHandleSubmit:function(n){S({query:n})},currentQuery:g}),d&&(0,f.jsx)("p",{children:"Loading..."}),y&&(0,f.jsx)("p",{children:y}),t.length>0&&(0,f.jsx)(v.Z,{movies:t})]})}},861:function(n,e,t){function r(n,e,t,r,c,u,a){try{var s=n[u](a),i=s.value}catch(o){return void t(o)}s.done?e(i):Promise.resolve(i).then(r,c)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(c,u){var a=n.apply(e,t);function s(n){r(a,c,u,s,i,"next",n)}function i(n){r(a,c,u,s,i,"throw",n)}s(void 0)}))}}t.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=964.382ddd3a.chunk.js.map