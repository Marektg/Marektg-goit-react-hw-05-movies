"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[312],{1913:function(n,e,t){var r=t(5861),a=t(7757),i=t.n(a),o=t(4569),c=t.n(o),s="6fabefdb44ed110e1291f5d3ba9d7ac8",u=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c().get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&query=").concat(e,"&page=1&include_adult=false"));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c().get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(s));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c().get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(s));case 3:return t=n.sent,n.next=6,t.data;case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c().get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(s));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),x={getTrendyMovies:u,getMoviesByQuery:p,getMoviesById:l,getMoviesCast:d,getMoviesReviews:h};e.ZP=x},2427:function(n,e,t){t.d(e,{Z:function(){return p}});var r,a=t(885),i=t(2791),o=t(168),c=t(6444).ZP.img(r||(r=(0,o.Z)(["\n  display: block;\n  max-width: ",";\n  width: 100%;\n"])),(function(n){var e;return null!==(e=n.maxWidth)&&void 0!==e?e:"300px"})),s=t(638),u=t(184),p=function(n){var e=n.src,t=n.alt,r=n.check,o=n.maxWidth,p=(0,i.useState)(e),d=(0,a.Z)(p,2),l=d[0],h=d[1];return(0,u.jsxs)(u.Fragment,{children:[!r&&(0,u.jsx)(c,{maxWidth:o,src:s,alt:t}),r&&(0,u.jsx)(c,{maxWidth:o,onError:function(){h(s)},src:l,alt:t})]})}},1870:function(n,e,t){t.d(e,{Z:function(){return x}});var r,a,i=t(2427),o=(t(2791),t(6731)),c=t(470),s=t(168),u=t(6444),p="10px",d=u.ZP.ul(r||(r=(0,s.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 20px;\n  justify-items: center;\n  padding: 0 20px;\n  list-style-type: none;\n  & li {\n    max-width: 300px;\n    width: 100%;\n    border: 1px solid black;\n    border-radius: ",";\n    background-color: lightgray;\n    &:hover {\n      border-color: gray;\n      box-shadow: -1px -1px 3px 1px black, 1px 1px 3px 1px black;\n    }\n  }\n  & a {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    color: black;\n    text-decoration: none;\n    & p {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-align: center;\n      margin: auto 0;\n      padding: 5px;\n      font-weight: 500;\n    }\n  }\n"])),p),l=u.ZP.div(a||(a=(0,s.Z)(["\n  max-height: 370px;\n  height: 100%;\n  border-top-left-radius: ",";\n  border-top-right-radius: ",";\n  border-bottom: 1px solid black;\n  overflow: hidden;\n  & img {\n    display: block;\n    height: 100%;\n  }\n"])),p,p),h=t(184),x=function(n){var e=n.movies,t=(0,c.TH)();return(0,h.jsx)(d,{children:e.map((function(n){return(0,h.jsx)("li",{children:(0,h.jsxs)(o.rU,{to:"/movies/".concat(n.id),state:{from:t},children:[(0,h.jsx)(l,{children:(0,h.jsx)(i.Z,{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:n.title,check:n.poster_path})}),(0,h.jsx)("p",{children:n.title})]})},n.id)}))})}},1312:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,a,i=t(5861),o=t(885),c=t(7757),s=t.n(c),u=t(1870),p=t(2791),d=t(168),l=t(6444),h=l.ZP.div(r||(r=(0,d.Z)(["\n  padding: 10px 20px;\n"]))),x=l.ZP.form(a||(a=(0,d.Z)(["\n  display: grid;\n  grid-template-columns: minmax(50px, 1fr) 80px;\n  grid-template-areas: \"searchbar searchbtn\";\n  margin: 0 auto;\n  border: 1px solid grey;\n  border-radius: 10px;\n  overflow: hidden;\n  @media (min-width: 576px) {\n    grid-template-columns: 450px 80px;\n    width: max-content;\n  }\n  & input {\n    grid-area: searchbar;\n    padding: 5px 10px;\n    outline: none;\n    border: none;\n    font-size: 18px;\n    line-height: 1.2;\n  }\n  & button {\n    display: inline-block;\n    width: 80px;\n    height: 48px;\n    border: 0;\n    background-image: url('./Icon/search.svg');\n    background-size: 30%;\n    background-repeat: no-repeat;\n    background-position: 5px;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n  \n    &:hover {\n      opacity: 1;\n    }\n    & p {\n    size: 22px;\n    width: 100px;\n    height: 100%;\n    padding: 0;\n    overflow: hidden;\n    letter-spacing: 1px;\n    font-weight: 300;\n    border: 0;\n    }\n  }\n  &:focus-within {\n    box-shadow: -1px -1px 3px 1px black, 1px 1px 3px 1px black;\n  }\n"]))),g=t(184),v=function(n){var e=n.value,t=n.submitHandler,r=n.changeHandler;return(0,g.jsx)(h,{children:(0,g.jsxs)(x,{onSubmit:t,children:[(0,g.jsx)("input",{type:"text",value:e,onChange:r}),(0,g.jsx)("button",{type:"submit",children:(0,g.jsx)("p",{children:"Search"})})]})})},f=t(6731),m=t(470),b=t(1913),y=t(491),k=function(){var n=(0,m.UO)(),e=(0,p.useState)(""),t=(0,o.Z)(e,2),r=t[0],a=t[1],c=(0,f.lr)(),d=(0,o.Z)(c,2),l=d[0],h=d[1],x=(0,p.useState)([]),k=(0,o.Z)(x,2),w=k[0],Z=k[1],j=(0,p.useState)(!1),_=(0,o.Z)(j,2),P=_[0],C=_[1],M=(0,p.useCallback)((0,i.Z)(s().mark((function n(){var e,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!(e=l.get("query"))){n.next=8;break}return n.next=5,b.ZP.getMoviesByQuery(e);case 5:t=n.sent,Z(t),C(!0);case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:C(!1);case 14:case"end":return n.stop()}}),n,null,[[0,10]])}))),[l]);return(0,p.useEffect)((function(){M()}),[M]),(0,g.jsxs)(g.Fragment,{children:[P&&(0,g.jsx)(y.Z,{}),!n.movieId&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(v,{value:r,submitHandler:function(n){n.preventDefault(),r||alert("Complete the search field!"),h(r?{query:r}:""),a("")},changeHandler:function(n){a(n.target.value)}}),(0,g.jsx)(u.Z,{movies:w})]}),n.movieId&&(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(m.j3,{})})]})}},638:function(n,e,t){n.exports=t.p+"static/media/imgNotFound.abee8cb784e0a35158ba.png"}}]);
//# sourceMappingURL=312.e7a5abe5.chunk.js.map