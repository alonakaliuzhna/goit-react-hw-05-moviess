"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[921],{866:function(n,e,t){var r=t(373),o=t(184);e.Z=function(){return(0,o.jsx)(r.gy,{heigth:"100",width:"100",color:"grey",ariaLabel:"loading"})}},225:function(n,e,t){t.d(e,{O:function(){return u},r:function(){return s}});var r,o,c=t(168),i=t(751),a=t(501),u=i.ZP.ul(r||(r=(0,c.Z)(["\ndisplay: flex;\nflex-direction: column;\nlist-style: none;\nalign-items: flex-start;"]))),s=(0,i.ZP)(a.OL)(o||(o=(0,c.Z)(["\n\n&.active,\n&:hover {\n    color: #D8BFD8;}\n"])))},565:function(n,e,t){t.d(e,{Tg:function(){return l},Ai:function(){return f},Mc:function(){return p},wL:function(){return d},Bt:function(){return g}});var r=t(861),o=t(757),c=t.n(o),i="https://api.themoviedb.org/3/",a="0dc1b7672e27ccf3c49c2486e3f06114";function u(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(c().mark((function n(){var e,t,r,o=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:"",t=o.length>1&&void 0!==o[1]?o[1]:{},console.log(e),n.next=5,fetch(e,t);case 5:if(!(r=n.sent).ok){n.next=12;break}return n.next=9,r.json();case 9:n.t0=n.sent,n.next=13;break;case 12:n.t0=Promise.reject(new Error("Not found"));case 13:return n.abrupt("return",n.t0);case 14:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function l(){return u("".concat(i,"/trending/movie/day?api_key=").concat(a))}function f(n){return console.log(n),u("".concat(i,"search/movie?api_key=").concat(a,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"))}function p(n){return console.log(n),u("".concat(i,"movie/").concat(n,"?api_key=").concat(a,"&language=en-US"))}function d(n){return u("".concat(i,"movie/").concat(n,"/credits?api_key=").concat(a,"&language=en-US"))}function g(n){return u("".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(a,"&language=en-US&page=1"))}},921:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,o,c,i,a=t(982),u=t(885),s=t(791),l=t(501),f=t(871),p=t(565),d=t(168),g=t(751),h=t(719),m=g.ZP.form(r||(r=(0,d.Z)([" display: flex;\njustify-content: center;\nalign-items: center;\npadding: 8px;\nmargin-bottom: 10px;\nmargin-top: 10px;\n"]))),x=g.ZP.input(o||(o=(0,d.Z)(["\ndisplay: inline-block;\nwidth: 400px;\nheight: 30px;\nfont: inherit;\nfont-size: 20px;\noutline: none;\npadding-left: 4px;\npadding-right: 4px;\nborder-color: #D8BFD8;\n;"]))),v=g.ZP.button(c||(c=(0,d.Z)(["\n \nbackground-color: #E6E6FA;\nborder-color: #D8BFD8;\ndisplay: inline-block;\nheight: 37px;\nborder: 0;\n\nbackground-size: 40%;\nbackground-repeat: no-repeat;\nbackground-position: center;\nopacity: 0.6;\ntransition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\ncursor: pointer;\noutline: none;;"]))),b=(0,g.ZP)(h.wTD)(i||(i=(0,d.Z)(["\nwidth:40px;\nheigth:40px"]))),y=t(184),Z=function(n){var e=n.onSubmit,t=((0,f.TH)(),(0,s.useState)("")),r=(0,u.Z)(t,2),o=r[0],c=r[1];return(0,y.jsxs)(m,{onSubmit:function(n){if(n.preventDefault(),""===o.trim())return alert("Enter a search name");e(o),c("")},children:[(0,y.jsx)(x,{type:"text",autoComplete:"off",placeholder:"Search movie",value:o,onChange:function(n){var e=n.currentTarget.value.toLowerCase();c(e)}}),(0,y.jsxs)(v,{type:"submit",children:[" ",(0,y.jsx)(b,{})]})]})},k=t(683),j=t(225);var w=function(n){var e=n.movies,t=n.locationFrom;return(0,y.jsx)(j.O,{children:e.map((function(n){var e=n.id,r=n.title;return r&&(0,y.jsx)("li",{children:(0,y.jsx)(j.r,{to:"".concat(e),state:{from:(0,k.Z)({},t)},children:r})},e)}))})},S=t(866),_=function(){var n=(0,l.lr)(),e=(0,u.Z)(n,2),t=e[0],r=e[1],o=(0,s.useState)("idle"),c=(0,u.Z)(o,2),i=c[0],d=c[1],g=(0,s.useState)(null),h=(0,u.Z)(g,2),m=h[0],x=h[1],v=(0,s.useState)([]),b=(0,u.Z)(v,2),k=b[0],j=b[1],_=(0,f.TH)(),D=t.get("query");(0,s.useEffect)((function(){D&&(d("pending"),(0,p.Ai)(D).then((function(n){j((function(e){return[].concat((0,a.Z)(e),(0,a.Z)(n.results))})),d("resolved")})).catch((function(n){x(n),d("rejected")})))}),[D]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Z,{onSubmit:function(n){r("?query=".concat(n))}}),"pending"===i&&(0,y.jsx)(S.Z,{}),"rejected"===i&&(0,y.jsxs)("h1",{children:[m&&m.message," "]}),"resolved"===i&&(0,y.jsx)(w,{movies:k,locationFrom:_})]})}}}]);
//# sourceMappingURL=921.bc5835a5.chunk.js.map