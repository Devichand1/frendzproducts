_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[49],{EeGy:function(t,e,a){"use strict";a("ODXe");var n=a("o0o1"),r=a.n(n),c=a("HaE+"),o=a("rePB"),u=a("q1tI"),i=a.n(u),s=a("R/WZ"),d=a("1i9w"),l=a("Z3vd"),p=a("Ji2X"),m=a("hlFM"),f=a("ofer"),b=a("tRbT"),O=a("LPpy"),g=a("/d1K"),y=a("0lTa"),h=a("eSM8"),j=(a("sS1X"),a("lopY")),w=(a("Al62"),a("97jo")),v=a("InJ6"),k=a("iae6"),_=a("nOHt"),P=a("vGTh"),S=a("/MKj"),N=i.a.createElement;function E(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function x(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?E(Object(a),!0).forEach((function(e){Object(o.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var I=a("oY9k"),q=Object(s.a)((function(t){var e;return x(x({},v.b),{},(e={},Object(o.a)(e,t.breakpoints.up("md"),v.c),Object(o.a)(e,t.breakpoints.between("sm","md"),v.a),Object(o.a)(e,t.breakpoints.down("sm"),v.d),e))}));e.a=function(t){var e=t.data,a=t.url,n=t.m_uni,o=t.query,s=Object(u.useState)([]),v=s[0],E=s[1],x=Object(u.useState)(!1),M=x[0],H=x[1],T=Object(u.useState)(!1),W=T[0],J=T[1],R=Object(u.useState)(0),X=R[0],B=R[1],C=Object(u.useState)([]),D=C[0],G=C[1],F=Object(u.useState)([]),Y=F[0],K=F[1],A=Object(S.c)((function(t){return t.auth_user.user}));Object(u.useEffect)((function(){var t="http://fanto.in/admin/api";function e(){return(e=Object(c.a)(r.a.mark((function e(){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(t+"/adverts");case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,K(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(u.useEffect)((function(){a&&L(a,0,[]),Object(P.g)().then((function(t){G(t)}))}),[e,a,n,o]);var L=function(){var t=Object(c.a)(r.a.mark((function t(e,a,n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return B(a=a?a+1:1),e="".concat(e,"&page=").concat(a),t.next=5,Object(P.m)(e).then((function(t){n&&n.data&&(t.data=n.data.concat(t.data)),t&&t.current_page==t.last_page&&J(!0),E(t),H(!1)}));case 5:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}(),U=Object(_.useRouter)(),Z=q(),z=Object(j.a)("(max-width:600px)"),Q=function(){A.id?U.push("/post"):window.location.replace("/?signup=open")};return N(d.a,null,Y&&Y.productHeader&&N(y.a,{adImg:Y.productHeader.link,adlink:Y.productHeader.openlink}),N("section",{className:Z.section},N(p.a,{maxWidth:"xl"},N(m.a,{className:Z.productsHeader},N(f.a,{variant:"h5"},"Buy/Rent Used Products in your College"),N(l.a,{variant:"contained",color:"primary",onClick:Q},"Add Product"))),N(p.a,{maxWidth:"xl"},N(b.a,{container:!0},N(b.a,{item:!0,lg:3,md:3,sm:12,xs:12},z?N(g.a,{showFilterBtn:"true",m_uni:n,query:o}):N(w.a,{offsetTop:100,offsetBottom:20},N(g.a,{m_uni:n,query:o}))),N(b.a,{item:!0,lg:9,md:9,sm:12,xs:12},N(m.a,{className:Z.ProductsGridWrapper},v.data&&v.data.length>0&&v.data.slice(0,8).map((function(t,e){return N(i.a.Fragment,{key:t.id},N(O.a,{data:t}),2==e&&Y&&Y.product1&&N(y.a,{adImg:Y.product1.link,adlink:Y.product1.openlink}))}))),v.data&&v.data.length<=0&&N(f.a,{variant:"h4"},"Oops!! we we could not find related to your search. Please search something else"),N(m.a,{style:{backgroundImage:"url(/static/images/boxbg.png)"},className:Z.productContentSection},N(f.a,{variant:"h4"},"Want to see Your Stuffs Here ?"),N(f.a,null,"Upload the products you want to sell, and get a buyer within your college."),N("a",{onClick:Q,className:"selProd"},"Selling Product")),N(m.a,{className:Z.ProductsGridWrapper},v.data&&v.data.length>0&&v.data.slice(8,v.data.length).map((function(t,e){return N(i.a.Fragment,{key:t.id},N(O.a,{data:t}),2==e&&Y&&Y.product2&&N(y.a,{adImg:Y.product2.link,adlink:Y.product2.openlink}))}))),v.data&&v.data.length>0&&!W&&N("div",{className:Z.loadMorewrapper},N(l.a,{variant:"contained",color:"primary",className:Z.loadMore,disabled:M,onClick:function(){M||(H(!0),L(a,X,v))}},"Load More"),M&&N(k.a,{size:24,className:Z.buttonProgress})))))),N("section",{className:Z.section,style:{background:"var(--theme-light)"}},N(p.a,{maxWidth:"xl"},N(m.a,{className:Z.sectionHeader},N(f.a,{variant:"h2"},"REVIEW")),D&&D.length>0&&N(h.a,{data:D}))))}},"O1O/":function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products",function(){return a("mTwM")}])},mTwM:function(t,e,a){"use strict";a.r(e);var n=a("q1tI"),r=a.n(n),c=a("EeGy"),o=(a("oY9k"),a("/MKj")),u=a("/Q2I"),i=a("X7BR"),s=r.a.createElement;function d(t){var e=t.query,a=Object(o.c)((function(t){return t.auth_user.user})),r=Object(n.useState)(!1),d=r[0],l=r[1],p=Object(n.useState)(""),m=p[0],f=p[1],b=Object(n.useState)(""),O=b[0],g=b[1];Object(n.useEffect)((function(){y(e)}),[e]);var y=function(t){var e=t.s,n=t.m_city,r=t.m_cat,c=t.m_uni,o=t.type,u=e?"?s=".concat(e,"&paginate=12"):"?paginate=12",s=localStorage.getItem(i.b),d=localStorage.getItem(i.a);s=s&&JSON.parse(s)?JSON.parse(s).response:"",!c&&s&&s.length?c=d?c:s[0].name:c||a.id?!c&&a.university&&a.university.name&&(c=d?c:a.university.name):l(!0),g(c),n&&(u=u+"&m_city="+n),r&&(u=u+"&m_cat="+r),c&&(u=u+"&m_uni="+c),o&&(u=u+"&type="+o),f(u)};return s("div",null,d&&s(u.a,{openStatus:d}),s(c.a,{url:m,m_uni:O,query:e}))}d.getInitialProps=function(t){return{query:t.query}},e.default=d}},[["O1O/",0,1,5,14,2,3,4,6,7,8,9,10,13,15,17]]]);