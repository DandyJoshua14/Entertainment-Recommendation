import{S as C,i as q,s as U,a as j,e as p,c as z,b,d,f as L,g as h,h as g,j as W,o as F,k as G,l as H,m as J,n as A,p as m,q as K,r as M,u as Q,v as P,w as D,x as E,y as v,z as I,A as R,B as y}from"../chunks/index.52fc2b4f.js";const X="modulepreload",Y=function(o,e){return new URL(o,e).href},O={},w=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Y(f,i),f in O)return;O[f]=!0;const t=f.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(!!i)for(let l=s.length-1;l>=0;l--){const u=s[l];if(u.href===f&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${a}`))return;const r=document.createElement("link");if(r.rel=t?"stylesheet":X,t||(r.as="script",r.crossOrigin=""),r.href=f,document.head.appendChild(r),t)return new Promise((l,u)=>{r.addEventListener("load",l),r.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e())},ie={};function Z(o){let e,n,i;var s=o[1][0];function f(t){return{props:{data:t[3],form:t[2]}}}return s&&(e=E(s,f(o)),o[12](e)),{c(){e&&v(e.$$.fragment),n=p()},l(t){e&&I(e.$$.fragment,t),n=p()},m(t,a){e&&R(e,t,a),b(t,n,a),i=!0},p(t,a){const _={};if(a&8&&(_.data=t[3]),a&4&&(_.form=t[2]),s!==(s=t[1][0])){if(e){P();const r=e;d(r.$$.fragment,1,0,()=>{y(r,1)}),L()}s?(e=E(s,f(t)),t[12](e),v(e.$$.fragment),h(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&h(e.$$.fragment,t),i=!0)},o(t){e&&d(e.$$.fragment,t),i=!1},d(t){o[12](null),t&&g(n),e&&y(e,t)}}}function $(o){let e,n,i;var s=o[1][0];function f(t){return{props:{data:t[3],$$slots:{default:[x]},$$scope:{ctx:t}}}}return s&&(e=E(s,f(o)),o[11](e)),{c(){e&&v(e.$$.fragment),n=p()},l(t){e&&I(e.$$.fragment,t),n=p()},m(t,a){e&&R(e,t,a),b(t,n,a),i=!0},p(t,a){const _={};if(a&8&&(_.data=t[3]),a&8215&&(_.$$scope={dirty:a,ctx:t}),s!==(s=t[1][0])){if(e){P();const r=e;d(r.$$.fragment,1,0,()=>{y(r,1)}),L()}s?(e=E(s,f(t)),t[11](e),v(e.$$.fragment),h(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&h(e.$$.fragment,t),i=!0)},o(t){e&&d(e.$$.fragment,t),i=!1},d(t){o[11](null),t&&g(n),e&&y(e,t)}}}function x(o){let e,n,i;var s=o[1][1];function f(t){return{props:{data:t[4],form:t[2]}}}return s&&(e=E(s,f(o)),o[10](e)),{c(){e&&v(e.$$.fragment),n=p()},l(t){e&&I(e.$$.fragment,t),n=p()},m(t,a){e&&R(e,t,a),b(t,n,a),i=!0},p(t,a){const _={};if(a&16&&(_.data=t[4]),a&4&&(_.form=t[2]),s!==(s=t[1][1])){if(e){P();const r=e;d(r.$$.fragment,1,0,()=>{y(r,1)}),L()}s?(e=E(s,f(t)),t[10](e),v(e.$$.fragment),h(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&h(e.$$.fragment,t),i=!0)},o(t){e&&d(e.$$.fragment,t),i=!1},d(t){o[10](null),t&&g(n),e&&y(e,t)}}}function T(o){let e,n=o[6]&&V(o);return{c(){e=G("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=J(e);n&&n.l(s),s.forEach(g),this.h()},h(){A(e,"id","svelte-announcer"),A(e,"aria-live","assertive"),A(e,"aria-atomic","true"),m(e,"position","absolute"),m(e,"left","0"),m(e,"top","0"),m(e,"clip","rect(0 0 0 0)"),m(e,"clip-path","inset(50%)"),m(e,"overflow","hidden"),m(e,"white-space","nowrap"),m(e,"width","1px"),m(e,"height","1px")},m(i,s){b(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=V(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&g(e),n&&n.d()}}}function V(o){let e;return{c(){e=K(o[7])},l(n){e=M(n,o[7])},m(n,i){b(n,e,i)},p(n,i){i&128&&Q(e,n[7])},d(n){n&&g(e)}}}function ee(o){let e,n,i,s,f;const t=[$,Z],a=[];function _(l,u){return l[1][1]?0:1}e=_(o),n=a[e]=t[e](o);let r=o[5]&&T(o);return{c(){n.c(),i=j(),r&&r.c(),s=p()},l(l){n.l(l),i=z(l),r&&r.l(l),s=p()},m(l,u){a[e].m(l,u),b(l,i,u),r&&r.m(l,u),b(l,s,u),f=!0},p(l,[u]){let k=e;e=_(l),e===k?a[e].p(l,u):(P(),d(a[k],1,1,()=>{a[k]=null}),L(),n=a[e],n?n.p(l,u):(n=a[e]=t[e](l),n.c()),h(n,1),n.m(i.parentNode,i)),l[5]?r?r.p(l,u):(r=T(l),r.c(),r.m(s.parentNode,s)):r&&(r.d(1),r=null)},i(l){f||(h(n),f=!0)},o(l){d(n),f=!1},d(l){a[e].d(l),l&&g(i),r&&r.d(l),l&&g(s)}}}function te(o,e,n){let{stores:i}=e,{page:s}=e,{constructors:f}=e,{components:t=[]}=e,{form:a}=e,{data_0:_=null}=e,{data_1:r=null}=e;W(i.page.notify);let l=!1,u=!1,k=null;F(()=>{const c=i.page.subscribe(()=>{l&&(n(6,u=!0),n(7,k=document.title||"untitled page"))});return n(5,l=!0),c});function N(c){D[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function S(c){D[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function B(c){D[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return o.$$set=c=>{"stores"in c&&n(8,i=c.stores),"page"in c&&n(9,s=c.page),"constructors"in c&&n(1,f=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,a=c.form),"data_0"in c&&n(3,_=c.data_0),"data_1"in c&&n(4,r=c.data_1)},o.$$.update=()=>{o.$$.dirty&768&&i.page.set(s)},[t,f,a,_,r,l,u,k,i,s,N,S,B]}class se extends C{constructor(e){super(),q(this,e,te,ee,U,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const re=[()=>w(()=>import("../chunks/0.30296f8a.js"),["../chunks/0.30296f8a.js","./_layout.svelte.46dc8ccc.js","../chunks/index.52fc2b4f.js","../assets/_layout.8bdb8dde.css"],import.meta.url),()=>w(()=>import("../chunks/1.33a53e41.js"),["../chunks/1.33a53e41.js","./error.svelte.0605e294.js","../chunks/index.52fc2b4f.js","../chunks/singletons.f7252e5a.js","../chunks/index.5d032e7c.js"],import.meta.url),()=>w(()=>import("../chunks/2.217897b8.js"),["../chunks/2.217897b8.js","./_page.svelte.3121a393.js","../chunks/index.52fc2b4f.js","../chunks/Nav.d6390f9b.js","../assets/Nav.60614438.css","../chunks/Home.6bf1ef56.js","../assets/_page.7ac8291d.css","../chunks/Pagination.1b17b2b4.js","../chunks/index.5d032e7c.js"],import.meta.url),()=>w(()=>import("../chunks/3.4ed993c7.js"),[],import.meta.url),()=>w(()=>import("../chunks/4.927a7cba.js"),["../chunks/4.927a7cba.js","./details-_trailer_id_-page.svelte.658b2746.js","../chunks/index.52fc2b4f.js","../chunks/Nav.d6390f9b.js","../assets/Nav.60614438.css","../assets/_page.7ac8291d.css"],import.meta.url),()=>w(()=>import("../chunks/5.3dfb60de.js"),["../chunks/5.3dfb60de.js","./movie-_name_-page.svelte.c5d90796.js","../chunks/index.52fc2b4f.js","../chunks/Home.6bf1ef56.js","../chunks/Nav.d6390f9b.js","../assets/Nav.60614438.css","../assets/_page.7ac8291d.css","../assets/_page.bf32d6b8.css"],import.meta.url),()=>w(()=>import("../chunks/6.aab6e7b5.js"),["../chunks/6.aab6e7b5.js","./movies-_page_-page.svelte.80107606.js","../chunks/index.52fc2b4f.js","../chunks/Home.6bf1ef56.js","../chunks/Nav.d6390f9b.js","../assets/Nav.60614438.css","../assets/_page.7ac8291d.css","../chunks/Pagination.1b17b2b4.js","../assets/_page.e9f32d84.css"],import.meta.url)],oe=[],ae={"/":[-3],"/component":[3],"/details/[trailer_id]":[-5],"/movies/[page]":[-7],"/movie/[name]":[-6]},le={handleError:({error:o})=>{console.error(o)}};export{ae as dictionary,le as hooks,ie as matchers,re as nodes,se as root,oe as server_loads};
