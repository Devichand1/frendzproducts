_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[36],{Al62:function(e,t,a){"use strict";a.d(t,"b",(function(){return H})),a.d(t,"a",(function(){return X}));var r=a("Wx3k"),n=a.n(r),i=a("YwBl"),o=a.n(i),c=a("5m4K"),s=a.n(c),l=a("jGZ7"),d=a.n(l),u=a("8nC3"),p=a.n(u),m=a("sTci"),g=a.n(m),b=a("swSV"),h=a.n(b),f=a("pMJ+"),v=a.n(f),y=a("hqUj"),O=a.n(y),w=a("Lvft"),j=a.n(w),x=a("EXd6"),k=a.n(x),E=a("i9BY"),_=a.n(E),N=a("GuGM"),P=a.n(N),S=a("AvHu"),C=a.n(S),B=a("NPw0"),D=a.n(B),I=a("c+VH"),R=a.n(I),T=a("8P9W"),W=a.n(T),H=[{id:1,title:"Vehicle",image:{url:n.a},slug:"/products?m_cat=vehicles"},{id:2,title:"Books",image:{url:o.a},slug:"/products?m_cat=books"},{id:3,title:"Gadgets",image:{url:s.a},slug:"/products?m_cat=gadgets"},{id:4,title:"Hostel Items",image:{url:d.a},slug:"/products?m_cat=hostel-items"},{id:5,title:"Sports & Gym",image:{url:p.a},slug:"/products?m_cat=sports-gym"},{id:6,title:"Stationary",image:{url:g.a},slug:"/products?m_cat=stationary"},{id:7,title:"Others",image:{url:h.a},slug:"/products"}],X=[{id:"EventIcon1",title:"Technical",image:{url:v.a},slug:"/events?m_cat=technical"},{id:"EventIcon2",title:"Entrepreneurship",image:{url:O.a},slug:"/events?m_cat=entrepreneurship"},{id:"EventIcon3",title:"Culture",image:{url:j.a},slug:"/events?m_cat=culture"},{id:"EventIcon4",title:"Sports Events",image:{url:R.a},slug:"/events?m_cat=sports"},{id:"EventIcon5",title:"Education Events",image:{url:o.a},slug:"/events?m_cat=books"},{id:"EventIcon6",title:"Library",image:{url:k.a},slug:"/events?m_cat=library"}];_.a,_.a,_.a,_.a,_.a,_.a,P.a,P.a,P.a,P.a,P.a,P.a,C.a,D.a,W.a,W.a,W.a,W.a},B9XD:function(e,t,a){"use strict";(function(e){var r=a("ODXe"),n=a("rePB"),i=a("wx14"),o=a("q1tI"),c=a.n(o),s=a("R/WZ"),l=a("Ji2X"),d=a("hlFM"),u=a("ofer"),p=a("tRbT"),m=a("30+C"),g=a("oa/T"),b=a("Z3vd"),h=a("svBs"),f=a.n(h),v=a("z1+X"),y=a.n(v),O=a("JLvS"),w=a.n(O),j=a("Eih4"),x=(a("YFqc"),a("/MKj")),k=a("2mpK"),E=a("79Xs"),_=a("ZiQX"),N=a("q9EX"),P=a("321u"),S=a("nOHt"),C=c.a.createElement;function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function I(e){return C(_.a,Object(i.a)({elevation:6,variant:"filled"},e))}var R=Object(s.a)((function(e){var t;return D(D({},j.a),{},(t={},Object(n.a)(t,e.breakpoints.up("md"),j.b),Object(n.a)(t,e.breakpoints.down("sm"),j.c),t))}));t.a=function(t){var a=t.data,n=Object(x.b)(),i=c.a.useState(0),s=Object(r.a)(i,2),h=s[0],v=s[1],O=Object(o.useState)({}),j=(O[0],O[1]),_=Object(o.useState)([]),B=_[0],D=_[1],T=Object(o.useState)(!1),W=(T[0],T[1],c.a.useState(!1)),H=Object(r.a)(W,2),X=H[0],G=H[1],M=c.a.useState(""),z=Object(r.a)(M,2),L=z[0],q=z[1],A=c.a.useState("success"),F=Object(r.a)(A,2),J=F[0],U=F[1],Y=Object(x.c)((function(e){return e.auth_user.userFavEvents})),K=Object(x.c)((function(e){return e.auth_user.accessToken})),V=Object(x.c)((function(e){return e.auth_user.user.id})),Z=Object(x.c)((function(e){return e.auth_user.user}));Object(o.useEffect)((function(){Q()}),[Y]);var Q=function(){Y&&Y.includes(a.id)&&(console.log(Y,Y.includes(a.id)),v(1))},$=function(){console.log("clk"),K&&""!=K||window.location.replace("/?signup=open"),h?(Object(k.g)({type_id:a.id,type:"event",user_id:V,action:"remove"}).then((function(e){e.error?(G(!0),q("There is some error.Please try again later"),U("error"),n(Object(N.a)(Z,K,e.body.favEvents,e.body.favProducts))):(G(!0),q("Removed from favourites"),U("success"),n(Object(N.a)(Z,K,e.body.favEvents,e.body.favProducts)))})),v(!h)):(Object(k.g)({type_id:a.id,type:"event",user_id:V,action:"add"}).then((function(e){e.error?(G(!0),q("There is some error.Please try again later"),U("error"),n(Object(N.a)(Z,K,e.body.favEvents,e.body.favProducts))):(G(!0),q("Added to favourites"),U("success"),n(Object(N.a)(Z,K,e.body.favEvents,e.body.favProducts)))})),v(!h))},ee=function(){G(!X)},te=Object(S.useRouter)();function ae(e){return C("div",{className:"video-wrapper"},C("video",{width:"560",height:"315",controls:!0},C("source",{src:e.embedUrl,type:"video/mp4"})))}Object(o.useEffect)((function(){if(j(a),a&&a.images){var e=[];a.images.map((function(t){"video"==t.type?e.push({original:t.thumbnail_link,thumbnail:t.thumbnail_link,embedUrl:t.link,renderItem:ae.bind(undefined)}):e.push({original:t.link,thumbnail:t.thumbnail_link})})),D(e)}}),[a]);var re=R();return a&&a.active?C("section",{className:re.section},C(l.a,{maxWidth:"xl"},C(p.a,{container:!0},C(p.a,{item:!0,lg:12,md:12,sm:12,xs:12,className:re.grid},C(E.a,{open:X,autoHideDuration:6e3,onClose:ee},C(I,{onClose:ee,severity:J},L)),C(m.a,{className:"".concat(re.card," ").concat(re.spanCol4," ").concat(re.spanRow2)},C(g.a,{className:re.cardBody},C("div",{className:re.Gallery},C(f.a,{items:B,showPlayButton:!1,showFullscreenButton:!1,showGalleryPlayButton:!0})))),C(m.a,{className:"".concat(re.card," ").concat(re.spanCol2)},C(g.a,{className:re.cardInnerBody},C("div",{className:re.Left},C(d.a,{className:re.box},C(u.a,{className:re.heading},"Date"),C(u.a,{variant:"h6"},a.event_date)),C(d.a,{className:re.box},C(u.a,{className:re.heading},"Category Type"),C(u.a,{variant:"h6"},a.category?a.category.name:"")),C(d.a,{className:re.box},C(u.a,{className:re.heading},"Contact Number"),C(u.a,{variant:"h4",color:"primary"},a.contact_number))),C("div",{className:re.Right},C(h?y.a:w.a,{style:{color:"var(--theme)"},onClick:$,id:a.id}),C(P.a,{title:a.title,url:"".concat(e.env.APP_URL).concat(te.asPath)})))),C(m.a,{className:"".concat(re.card," ").concat(re.SellerCard," ").concat(re.spanCol2)},C(g.a,{className:re.cardInner},C("div",{className:re.cardHead},C(d.a,{className:re.box},C(u.a,{className:re.heading},"Event Organiser"),C(u.a,{variant:"h6"},a.university?a.university.name:"")),C("div",{className:"d-flex"},C(d.a,{className:re.Pricebox},C(u.a,{className:re.heading},"Price"),C(u.a,{variant:"h4",color:"primary"},"\u20b9",a.price)))),C("div",{className:re.cardAction},C("a",{target:"_blank",href:"".concat(a.book_event_link)},C(b.a,{className:re.primaryBtn},"Book Event")),C("a",{target:"_blank",href:"".concat(a.visit_website_link)},C(b.a,{className:re.secondaryBtn},"Visit Website"))))),C(m.a,{className:"".concat(re.card," ").concat(re.spanCol6)},C(g.a,{className:re.cardBody},C(u.a,{className:re.heading},"Description"),C(u.a,{className:re.paragraph},a.description))))))):C(l.a,{maxWidth:"xl"},C(d.a,{className:re.sectionHeader},C(u.a,{variant:"h4"},"Event not found!!"))," ")}}).call(this,a("8oxB"))},Eih4:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return i}));var r={section:{padding:"2rem 0 5rem",position:"relative",overflow:"hidden","&::before":{content:'""',background:"url(/static/images/circleCenter.svg)",backgroundRepeat:"no-repeat",backgroundSize:"cover",top:"55%",left:"50%",transform:"translate(-50%, -50%)",height:"540px",width:"540px",position:"absolute",zIndex:"-1"},"&::after":{content:'""',background:"url(/static/images/circleCenter.svg)",backgroundRepeat:"no-repeat",backgroundSize:"cover",bottom:"-15rem",left:"-25rem",height:"50rem",width:"50rem",position:"absolute",zIndex:"-1"}},card:{border:"#D6D6D6 solid 2px",boxShadow:"none",padding:"1.5rem 2rem",borderRadius:"6px",position:"relative"},Gallery:{"& .image-gallery-thumbnail":{width:"23%"},"& .image-gallery-thumbnail.active":{border:"4px solid var(--theme)"},"& .image-gallery-left-nav .image-gallery-svg":{width:"60px",height:"60px",color:"black"},"& .image-gallery-right-nav .image-gallery-svg":{width:"60px",height:"60px",color:"black"},"& .image-gallery-thumbnails-wrapper":{marginTop:"2rem"},"& .image-gallery-left-nav":{left:"-3.5rem",outline:"none"},"& .image-gallery-right-nav":{right:"-3.5rem",outline:"none"},"& .video-wrapper iframe":{width:"100%",height:"500px"},"& .video-wrapper video":{width:"100%",height:"500px"},"& .play-button":{cursor:"pointer",position:"absolute",left:"0",top:"0",bottom:"0",right:"0",margin:"auto",height:"60px",width:"100px",backgroundColor:"rgba(0,0,0,.7)",borderRadius:"5px"},"& .play-button::after":{content:'""',display:"block",position:"absolute",top:"16.5px",left:"40px",margin:"0 auto",borderStyle:"solid",borderWidth:"12.5px 0 12.5px 20px",borderColor:"transparent transparent transparent rgba(255,255,255,1)"}},heading:{color:"#868686",fontSize:"1.1rem"},paragraph:{fontSize:"1.2rem",fontWeight:"500"},box:{marginBottom:"2rem"},Pricebox:{borderTop:"solid 1px #D6D6D6",paddingTop:"1rem","& h4":{fontWeight:"600"}},cardInnerBody:{display:"flex",width:"100%",paddingBottom:"0 !important"},Left:{width:"100%"},Right:{width:"80px",position:"absolute",right:"1rem",top:"1rem",display:"flex",justifyContent:"space-around"},SellerCard:{padding:0,"& .MuiCardContent-root":{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},"& .d-flex":{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2rem"},"& .d-flex .MuiBox-root":{width:"50%"},"& .d-flex .MuiBox-root:first-child":{borderTop:"none"},"& .social-links":{marginBottom:"0",textAlign:"right"},"& .social-links a":{color:"var(--theme)",display:"inline-block",margin:"5px"}},cardInner:{padding:"0 !important"},cardHead:{padding:"2.5rem 2rem 0 2rem",display:"flex",flexWrap:"wrap",flexDirection:"column"},sellerImg:{"& img":{width:"71px",height:"71px",borderRadius:"50%",border:"solid 2px var(--theme)"}},sellerDetails:{marginLeft:"2rem",flex:"1"},cardAction:{display:"flex",flexWrap:"wrap","& a":{width:"50%"},"& button":{width:"100%",borderRadius:0,boxShadow:"none",height:"4rem"}},primaryBtn:{background:"var(--theme)",color:"#fff","&:hover":{background:"var(--theme)"}},secondaryBtn:{background:"#EBEEEF","&:hover":{background:"#EBEEEF"}},grid:{display:"grid",gridGap:"2rem"}},n={card:{padding:"1rem",marginRight:"0"},Gallery:{"& .image-gallery-thumbnail":{width:"33%"},"& .video-wrapper iframe":{width:"100%",height:"220px"},"& .video-wrapper video":{width:"100%",height:"220px"}},SellerCard:{padding:"0",order:"1"},cardHead:{padding:"1.5rem 1rem"},heading:{fontSize:"14px"}},i={grid:{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gridGap:"2.5rem"},spanRow2:{gridRow:"span 3 / auto"},spanCol2:{gridColumn:"span 3 / auto"},spanCol4:{gridColumn:"span 3 / auto"},spanCol6:{gridColumn:"span 6 / auto"}}},d5jU:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return I}));var r=a("o0o1"),n=a.n(r),i=a("HaE+"),o=a("ODXe"),c=a("rePB"),s=a("q1tI"),l=a.n(s),d=a("R/WZ"),u=a("1i9w"),p=a("Ji2X"),m=a("ofer"),g=a("hlFM"),b=a("Sgle"),h=a("hlie"),f=a("bo4g"),v=a.n(f),y=a("lopY"),O=a("0lTa"),w=a("B9XD"),j=a("eSM8"),x=(a("Al62"),a("InJ6")),k=a("nOHt"),E=a("vGTh"),_=a("+Isj"),N=a("iae6"),P=l.a.createElement;function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(Object(a),!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a("oY9k");var B=Object(d.a)((function(e){var t;return C(C({},x.b),{},(t={},Object(c.a)(t,e.breakpoints.up("md"),x.c),Object(c.a)(t,e.breakpoints.between("sm","md"),x.a),Object(c.a)(t,e.breakpoints.down("sm"),x.d),t))}));function D(e){e.preventDefault(),console.info("You clicked a breadcrumb.")}function I(e){var t=e.query,a=(Object(k.useRouter)(),t.pid),r=Object(s.useState)({}),c=r[0],d=r[1],f=Object(s.useState)(!0),x=f[0],S=f[1],C=Object(s.useState)([]),I=C[0],R=C[1],T=l.a.useState(!1),W=Object(o.a)(T,2);W[0],W[1];Object(s.useEffect)((function(){H()}),[]);var H=function(){var e=Object(i.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(E.i)(a).then((function(e){d(e),S(!1)})),Object(E.g)("?paginate=1").then((function(e){R(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=B();Object(y.a)((function(e){return e.breakpoints.down("sm")}));return P(u.a,null,P(O.a,null),P(p.a,{maxWidth:"xl"},P(b.a,{separator:P(v.a,{fontSize:"small"}),"aria-label":"breadcrumb",className:X.Breadcrumbs},P(h.a,{color:"inherit",href:"/",onClick:D},"Homepage"),P(m.a,{color:"primary"},"Event"))),x&&P(_.a,{className:X.backdrop,open:x},P(N.a,{color:"inherit"})),!x&&P(w.a,{data:c}),P("section",{className:X.section,style:{background:"var(--theme-light)"}},P(p.a,{maxWidth:"xl"},P(g.a,{className:X.sectionHeader},P(m.a,{variant:"h2"},"REVIEW"),P(m.a,null,"Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit Lorem ipsum dolor sit amet, aretent consectetuer adipiscing elit")),I&&I.length>0&&P(j.a,{data:I}))))}I.getInitialProps=function(e){return{query:e.query}}},dMK3:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events/item/[pid]",function(){return a("d5jU")}])}},[["dMK3",0,1,5,14,2,3,4,6,7,8,10,13,15,22]]]);