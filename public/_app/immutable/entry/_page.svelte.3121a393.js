import{S as z,i as I,s as J,J as L,a as f,k as P,y as p,K as E,h as u,c as _,l as M,m as N,z as g,n as h,b as $,A as v,G as O,L as T,H as V,g as w,d as b,B as S,I as W,M as k}from"../chunks/index.52fc2b4f.js";import"../chunks/Nav.d6390f9b.js";import{H as q}from"../chunks/Home.6bf1ef56.js";import{P as x}from"../chunks/Pagination.1b17b2b4.js";import{w as H}from"../chunks/index.5d032e7c.js";function A(n,o){{const t=localStorage.getItem(n),a=t?JSON.parse(t):o,{subscribe:r,set:s}=H(a);return r(i=>{localStorage.setItem(n,JSON.stringify(i))}),{subscribe:r,set:s}}}const y=H([]);A("pagenum",1);function B(n){let o,t,a,r,s,i,l,m;return L(n[3]),a=new q({props:{values:n[1]}}),s=new x({props:{pagenum:1}}),{c(){o=f(),t=P("html"),p(a.$$.fragment),r=f(),p(s.$$.fragment),this.h()},l(e){E("svelte-1anpopb",document.head).forEach(u),o=_(e),t=M(e,"HTML",{lang:!0,class:!0});var c=N(t);g(a.$$.fragment,c),r=_(c),g(s.$$.fragment,c),c.forEach(u),this.h()},h(){document.title="Home",h(t,"lang","en"),h(t,"class","svelte-fr3dzx")},m(e,d){$(e,o,d),$(e,t,d),v(a,t,null),O(t,r),v(s,t,null),i=!0,l||(m=T(window,"resize",n[3]),l=!0)},p:V,i(e){i||(w(a.$$.fragment,e),w(s.$$.fragment,e),i=!0)},o(e){b(a.$$.fragment,e),b(s.$$.fragment,e),i=!1},d(e){e&&u(o),e&&u(t),S(a),S(s),l=!1,m()}}}function C(n,o,t){let a;W(n,y,e=>t(6,a=e));let r,{data:s}=o,i=s.movies.results;k(y,a=i,a);let l=i;function m(){t(0,r=window.innerWidth)}return n.$$set=e=>{"data"in e&&t(2,s=e.data)},[r,l,s,m]}class F extends z{constructor(o){super(),I(this,o,C,B,J,{data:2})}}export{F as default};