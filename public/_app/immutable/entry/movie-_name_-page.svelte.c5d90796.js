import{S as A,i as F,s as I,a as z,k as p,K as N,h as _,c as E,l as v,m as b,n as h,b as B,g as O,d as q,q as y,r as $,G as c,H,y as T,z as V,A as w,B as x}from"../chunks/index.52fc2b4f.js";import{H as C}from"../chunks/Home.6bf1ef56.js";function K(i){let e,s,t,r,o,n,f,u,g,a,l,m;return{c(){e=p("div"),s=p("h1"),t=y("404"),r=z(),o=p("p"),n=y("Oops! The page you're looking for cannot be found."),f=z(),u=p("div"),g=y("404"),a=z(),l=p("a"),m=y("Go Back Home"),this.h()},l(k){e=v(k,"DIV",{class:!0});var d=b(e);s=v(d,"H1",{class:!0});var P=b(s);t=$(P,"404"),P.forEach(_),r=E(d),o=v(d,"P",{class:!0});var S=b(o);n=$(S,"Oops! The page you're looking for cannot be found."),S.forEach(_),f=E(d),u=v(d,"DIV",{class:!0});var D=b(u);g=$(D,"404"),D.forEach(_),a=E(d),l=v(d,"A",{href:!0,class:!0});var G=b(l);m=$(G,"Go Back Home"),G.forEach(_),d.forEach(_),this.h()},h(){h(s,"class","svelte-laz3sa"),h(o,"class","svelte-laz3sa"),h(u,"class","error-code svelte-laz3sa"),h(l,"href","/"),h(l,"class","btn svelte-laz3sa"),h(e,"class","container svelte-laz3sa")},m(k,d){B(k,e,d),c(e,s),c(s,t),c(e,r),c(e,o),c(o,n),c(e,f),c(e,u),c(u,g),c(e,a),c(e,l),c(l,m)},p:H,i:H,o:H,d(k){k&&_(e)}}}function Y(i){let e,s;return e=new C({props:{values:i[2]}}),{c(){T(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,r){w(e,t,r),s=!0},p:H,i(t){s||(O(e.$$.fragment,t),s=!0)},o(t){q(e.$$.fragment,t),s=!1},d(t){x(e,t)}}}function j(i){let e,s,t,r,o,n;document.title=e=i[0]||i[1]?"Search":"404 - Page Not Found";const f=[Y,K],u=[];function g(a,l){return a[2]?0:1}return r=g(i),o=u[r]=f[r](i),{c(){s=z(),t=p("body"),o.c(),this.h()},l(a){N("svelte-1kvfeig",document.head).forEach(_),s=E(a),t=v(a,"BODY",{class:!0});var m=b(t);o.l(m),m.forEach(_),this.h()},h(){h(t,"class","svelte-laz3sa")},m(a,l){B(a,s,l),B(a,t,l),u[r].m(t,null),n=!0},p(a,[l]){(!n||l&3)&&e!==(e=a[0]||a[1]?"Search":"404 - Page Not Found")&&(document.title=e),o.p(a,l)},i(a){n||(O(o),n=!0)},o(a){q(o),n=!1},d(a){a&&_(s),a&&_(t),u[r].d()}}}function J(i,e,s){let{data:t}=e,r=t.respond.results,o=t.movies.results,n=[...o,...r];return i.$$set=f=>{"data"in f&&s(3,t=f.data)},[r,o,n,t]}class Q extends A{constructor(e){super(),F(this,e,J,j,I,{data:3})}}export{Q as default};
