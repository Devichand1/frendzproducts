(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"5pOn":function(e,t,n){"use strict";var a=n("rePB"),r=n("q1tI"),o=n.n(r),i=n("R/WZ"),c=n("+Isj"),s=n("iae6"),l=n("InJ6"),p=o.a.createElement;function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=Object(i.a)((function(e){var t;return u(u({},l.b),{},(t={},Object(a.a)(t,e.breakpoints.up("md"),l.c),Object(a.a)(t,e.breakpoints.between("sm","md"),l.a),Object(a.a)(t,e.breakpoints.down("sm"),l.d),t))}));t.a=function(e){var t=e.loading,n=g();return t&&p(c.a,{className:n.backdrop,open:t},p(s.a,{color:"inherit"}))}},"9viw":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("/MKj"),i=(n("FKIu"),n("mjKo")),c=r.a.createElement;t.a=function(e){var t=e.auth,n=Object(o.c)((function(e){return e.messages})),r=Object(a.useState)([]),s=r[0],l=r[1];return console.log(n),Object(a.useEffect)((function(){l(n.messages)}),[n]),c("div",null,s.length>0&&s.map((function(e,n){return c(i.a,{message:e,auth:t,key:n})})))}},InJ6:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return s}));var a,r=n("rePB"),o={backdrop:{zIndex:99999,color:"#fff"},section:{padding:"5rem 0",position:"relative"},ptZero:{paddingTop:"0 !important"},spacingBox:{margin:"3rem 0"},sectionHeader:{textAlign:"center",maxWidth:"910px",margin:"0 auto","& h3":{marginBottom:"1rem"},"& h2":{marginBottom:"1rem",textTransform:"uppercase"},"& p":{color:"#4A4A4A",fontSize:"1.25rem"}},IconCardWrapper:{maxWidth:"960px",margin:"2rem auto 0",display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center","&::before":{content:'""',background:"url(/static/images/circleCenter.svg)",backgroundRepeat:"no-repeat",backgroundSize:"cover",top:"55%",left:"50%",transform:"translate(-50%, -50%)",height:"540px",width:"540px",position:"absolute",zIndex:"-1"},"&::after":{content:'""',background:"url(/static/images/circleCenter.svg)",backgroundRepeat:"no-repeat",backgroundSize:"cover",bottom:"-15rem",left:"-25rem",height:"50rem",width:"50rem",position:"absolute",zIndex:"-1"}},EventIconCardWrapper:{margin:"2rem auto 0",display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},productsHeader:{paddingBottom:"1rem",borderBottom:"solid 1px #BDBDBD",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center","& h5":{marginBottom:"1rem"}},downloadApp:{padding:"3rem 0",position:"relative","&::before":{content:'""',position:"absolute",width:"100%",height:"100%",top:0,left:0,background:"rgba(235, 238, 239, 0.6)",zIndex:"1"}},downloadTitle:{position:"relative",zIndex:"2",marginLeft:"auto","& h3":{color:"#2A66EA"}},downloadContent:{margin:"0 auto",position:"relative",zIndex:"2",width:"max-content","& h5":{marginBottom:"1rem",textAlign:"center"}},downloadLinks:{display:"flex",alignItems:"center",justifyContent:"space-between","& a":{width:"48%"},"& img":{width:"100%"}},ProductsGridWrapper:{display:"grid",gridTemplateColumns:"repeat( auto-fit, 300px )",gridGap:"1rem","&:nth-of-type(1)":{paddingTop:"2rem"},"&:nth-last-of-type(1)":{paddingTop:"2rem"}},productContentSection:{margin:"3rem 0",padding:"2rem",backgroundSize:"120%",textAlign:"center",backgroundPosition:"center","& h4":{fontWeight:"600"},"& button":{marginTop:"6rem",marginBottom:"2rem",width:"290px",height:"51px",border:"2px solid #000",background:"none",borderRadius:"5px",fontSize:"1rem",fontWeight:"600"}},fliterBtn:(a={background:"var(--theme)",color:"#fff",width:"1rem",marginLeft:"auto",marginTop:"1rem",marginRight:"5px"},Object(r.a)(a,"width","8rem"),Object(r.a)(a,"height","2.5rem"),Object(r.a)(a,"display","flex"),Object(r.a)(a,"&:hover",{background:"var(--theme)"}),a),Breadcrumbs:{"& a":{fontWeight:"500"},"& p":{fontWeight:"500"}},csoonImg:{maxWidth:"500px",width:"80%",marginBottom:"1rem"},loadMore:{fontSize:"1rem",padding:"0.6rem 2rem"},loadMorewrapper:{textAlign:"center",position:"relative",marginTop:"1.2rem"},buttonProgress:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},catBtn:{fontSize:"1.5rem",textTransform:"capitalize","& + div":{zIndex:"99"},"&:hover":{background:"none"},"& .MuiTouchRipple-root":{display:"none"}}},i={section:{padding:"1rem 0"},productContentSection:{margin:"1rem 0",paddingBottom:"0"},spacingBox:{margin:"0.5rem 0"},productsHeader:{flexDirection:"column",alignItems:"flex-start","&> div:nth-child(2)":{alignSelf:"flex-end"},"& h5":{marginBottom:0}},sectionHeader:{"& h3":{marginBottom:"1rem",lineHeight:"2rem"},"& h2":{marginBottom:"0rem"},"& p":{fontSize:"14px"}},IconCardWrapper:{"&::after":{display:"none"},"&::before":{width:"20rem",height:"20rem"}},EventIconCardWrapper:{marginTop:"1rem","& .swiper-container":{paddingBottom:"2.5rem"},"& .swiper-pagination-bullet-active":{background:"var(--theme)"},"& .swiper-button-prev":{display:"none"},"& .swiper-button-next":{display:"none"}},downloadTitle:{"& h3":{marginBottom:"2rem",textAlign:"center"}},downloadLinks:{"& img":{width:"100px"}},ProductsGridWrapper:{paddingTop:"1rem","& .event__card":{width:"100% !important"}}},c={IconCardWrapper:{"&::after":{display:"none"}}},s={downloadTitle:{width:"50%"},EventIconCardWrapper:{"& .swiper-pagination":{display:"none"}}}},"RM/v":function(e,t,n){"use strict";var a=n("ODXe"),r=n("rePB"),o=n("q1tI"),i=n.n(o),c=n("R/WZ"),s=n("ofer"),l=n("V1OU"),p=(n("YFqc"),n("tqn1")),d=n.n(p),u=n("/MKj"),g=(n("fTHX"),n("5pOn")),f=n("FKIu"),m=n("o0o1"),h=n.n(m),b=n("HaE+"),v=n("wd/R"),x=n.n(v),y=n("GN20"),w=i.a.createElement,O=function(e){var t=e.dialog,n=e.auth,a=e.selectDialog,r=e.dialogs,i=e.unread_messages_count,c=Object(o.useState)(""),s=c[0],l=c[1],p=Object(o.useState)(""),g=p[0],f=p[1],m=Object(o.useState)(""),v=m[0],y=m[1],O=Object(o.useState)(""),j=(O[0],O[1],Object(o.useState)(0)),k=j[0],_=j[1],S=Object(u.c)((function(e){return e.selectedDialog}));Object(u.b)();Object(o.useEffect)((function(){if(t){if(t.related_data&&y(t.related_data.title),t.users.length){var e=t.users.filter((function(e){return e.user.id!=n.id}));e[0]&&l(e[0].user)}t.last_message&&f(t.last_message),N(t.connecty_dialog_id)}}),[t,i,r]);var N=function(){var e=Object(b.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={chat_dialog_ids:[t]},d.a.chat.message.unreadCount(n).then((function(e){_(e[t]),console.log("resultunread",e[t],n)})).catch((function(e){}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=S&&t&&S.id==t.id;return s?w("li",{onClick:function(){t&&a(t,r)},className:"person ".concat(P?"selected":"")},w("img",{src:s.profile_img?s.profile_img:"/static/images/user-placeholder.png",alt:""}),w("div",{className:"imgRight"},w("span",{className:"name"},s.first_name),w("span",{className:"time"},g.created_at?x()(g.created_at).fromNow():""),w("span",{className:"preview"},v),k>0&&w("span",{className:"unread-box"},w("span",{className:"unread"},k)))):null},j=n("iae6"),k=n("o7Ty"),_=n("fPwM"),S=i.a.createElement;function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=Object(c.a)((function(e){var t;return P(P({},l.a),{},(t={},Object(r.a)(t,e.breakpoints.up("sm"),l.b),Object(r.a)(t,e.breakpoints.down("sm"),l.c),t))}));t.a=function(e){var t=e.type,n=void 0===t?"":t,r=e.id,c=void 0===r?"":r,l=Object(u.c)((function(e){return e.selectedDialog})),p=Object(u.c)((function(e){return e.chatConnected})),d=Object(o.useState)([]),m=d[0],h=d[1],b=Object(o.useState)([]),v=b[0],x=b[1],w=i.a.useState(!0),N=Object(a.a)(w,2),P=N[0],I=N[1],C=i.a.useState(!0),D=Object(a.a)(C,2),z=D[0],T=D[1],W=i.a.useState(!1),R=Object(a.a)(W,2),E=R[0],A=R[1],L=Object(u.c)((function(e){return e.auth_user.user})),M=Object(u.b)();Object(o.useEffect)((function(){!m.length&&p&&(T(!0),q(n,c))}),[n,c,L,p]);var q=function(e,t){var n=1;if(!(v&&v.current_page>=v.last_page)){v&&v.current_page&&(n=v.current_page+1);var a="?page=".concat(n);t&&(a+="&type=".concat(e,"&id=").concat(t)),Object(f.a)(L.id,a).then((function(e){var t=e.body;if(e.error)alert("Oops!! there was some problem while connecting");else{var n=m.concat(t.data);h(n),x(t),T(!1),A(!1)}}))}},F=function(e,t){I(!1),H(e.id,t),M(Object(y.a)(e))},H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=t.map((function(t){return t.id==e&&(t.unread_messages_count=0),t}));h(n)},K=B();return S("div",{className:K.wrapper},S(g.a,{loading:z}),S("div",{className:"container"},S("div",{className:1==P?"left":"active left"},S("div",{className:"top"},S(s.a,{variant:"h4"},"Messages ")),S("ul",{className:"people",onScroll:function(e){if(m.length&&v.current_page!=v.last_page){var t=e.target;t.scrollHeight-t.scrollTop===t.clientHeight&&(A(!0),q())}}},m.length>0&&m.map((function(e){return S(O,{dialog:e,key:e.id,auth:L,selectDialog:F,dialogs:m,unread_messages_count:e.unread_messages_count?e.unread_messages_count:""})})),E&&S("div",{className:"dialog-loader"},S(j.a,{color:"primary",size:20})))),L&&S(k.a,{dialogs:m,selectedDialogVal:l||{},auth:L,goBack:function(){I(!0),M(Object(y.a)({})),M(Object(_.b)([]))},dialogsArr:m,updateDialogSeenBySeller:function(e,t){t=m.map((function(t){return t.id==e.id&&(t.opened_by_seller=!0),t})),console.log("dialogsupdate",t),h(t)},deleteDialogSeenBySeller:function(e,t){t=m.filter((function(t){return t.id!=e.id})),h(t),M(Object(y.a)({}))}})))}},V1OU:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return s}));var a,r=n("rePB"),o={wrapper:{marginBottom:"40px",position:"relative",left:"50%",width:"var(--wrapper)",height:"calc(100vh - 150px)",minHeight:"400px",WebkitTransform:"translate(-50%, 0)",transform:"translate(-50%, 0)",marginTop:"0.3rem","& .container":{position:"relative",backgroundColor:"var(--white)",height:"100%",overflow:"hidden"},"& .container .left":{float:"left",width:"37.6%",height:"100%",border:"1px solid var(--light)",backgroundColor:"var(--white)",overflow:"hidden"},"& .container .left .top":{position:"relative",width:"100%",height:"96px",padding:"29px"},"& .container .left .top:after":{position:"absolute",bottom:"0",left:"50%",display:"block",width:"100%",height:"1px",content:"''",backgroundColor:"var(--light)",WebkitTransform:"translate(-50%, 0)",transform:"translate(-50%, 0)"},"& .container .left input":{float:"left",width:"188px",height:"42px",padding:"0 15px",border:"1px solid var(--light)",backgroundColor:"#eceff1",borderRadius:"21px",fontFamily:"'Source Sans Pro', sans-serif",fontWeight:"400"},"& .container .left input:focus":{outline:"none"},"& .container .left a.search":{display:"block",float:"left",width:"42px",height:"42px",marginLeft:"10px",border:"1px solid var(--light)",backgroundColor:"var(--blue)",backgroundImage:'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/name-type.png")',backgroundRepeat:"no-repeat",backgroundPosition:"top 12px left 14px",borderRadius:"50%"},"& .container .left .people":{marginLeft:"-1px",borderRight:"1px solid var(--light)",borderLeft:"1px solid var(--light)",width:"calc(100% + 2px)",height:"calc(100% - 100px)",padding:"0",listStyle:"none",overflowY:"auto",overflowX:"hidden"},"& .container .left  .unread-box":(a={background:"#f7812a",borderRadius:"50%",padding:"5px",fontSize:"9px",display:"inline-block",width:"20px"},Object(r.a)(a,"background","#010101"),Object(r.a)(a,"color","#fff"),Object(r.a)(a,"textAlign","center"),a),"& .container .left .people .person":{position:"relative",width:"100%",padding:"12px 30px 16px",cursor:"pointer",backgroundColor:"var(--white)",display:"flex",marginTop:0},"& .container .left .people .person:after":{position:"absolute",bottom:"0",left:"50%",display:"block",width:"100%",height:"1px",content:"''",backgroundColor:"var(--light)",WebkitTransform:"translate(-50%, 0)",transform:"translate(-50%, 0)"},"& .container .left .people .person img":{float:"left",width:"40px",height:"40px",marginRight:"12px",borderRadius:"50%"},"& .container .left .people .person .imgRight":{display:"flex",flexWrap:"wrap",width:"calc(100% - 50px)"},"& .container .left .people .person .name":{fontSize:"14px",lineHeight:"22px",color:"var(--dark)",fontFamily:"'Source Sans Pro', sans-serif",fontWeight:"600",width:"100%"},"& .container .left .people .person .time":{fontSize:"14px",position:"absolute",top:"16px",right:"10%",padding:"0 0 5px 5px",color:"var(--grey)"},"& .container .left .dialog-loader":{textAlign:"center",padding:"10px"},"& .container .left .people .person .preview":{fontSize:"14px",display:"inline-block",overflow:"hidden !important",width:"calc(100% - 25px)",whiteSpace:"nowrap",textOverflow:"ellipsis",color:"var(--grey)"},"& .container .left .people .person.active, & .container .left .people .person:hover":{marginTop:"-1px",marginLeft:"-1px",paddingTop:"13px",border:"0",backgroundColor:"var(--grey)",width:"calc(100% + 2px)",paddingLeft:"calc(10% + 1px)"},"& .container .left .people .person.active span, & .container .left .people .person:hover span":{color:"var(--white)",background:"transparent"},"& .container .left .people .person.active:after, & .container .left .people .person:hover:after":{display:"none"},"& .container .left .people .person.active, & .container .left .people .person.selected":{marginTop:"-1px",marginLeft:"-1px",paddingTop:"13px",border:"0",backgroundColor:"var(--blue)",width:"calc(100% + 2px)",paddingLeft:"calc(10% + 1px)"},"& .container .left .people .person.active span, & .container .left .people .person.selected span":{color:"var(--white)"},"& .container .left .people .person.active:after, & .container .left .people .person.selected:after":{display:"none"},"& .container .right":{position:"relative",float:"left",width:"62.4%",height:"100%"},"& .container .right .top":{width:"100%",height:"100px",padding:"15px 29px",backgroundColor:"#eceff1",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"flex-start"},"& .container .right .top p":{margin:"5px 0 10px",width:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},"& .container .right .top p a":{color:"#519f3f"},"& .container .right .top span":{fontSize:"15px",color:"var(--grey)"},"& .container .right .top span .name":{color:"var(--dark)",fontFamily:"'Source Sans Pro', sans-serif",fontWeight:"600"},"& .container .emptyDialog img":{height:"100px"},"& .container .emptyDialog":{height:"100%",display:"flex",justifyContent:"center",alignItems:"center",color:"gray"},"& .container .right .chat":{position:"relative",overflow:"auto",padding:"0 35px 92px",borderWidth:"1px 1px 1px 0",borderStyle:"solid",borderColor:"var(--light)",height:"calc(100% - 100px)",WebkitBoxPack:"end",justifyContent:"flex-end",WebkitBoxOrient:"vertical",WebkitBoxDirection:"normal",flexDirection:"column"},"& .container .right::before":{content:'""',height:"46px",width:"97%",background:"#fff",bottom:"2px",left:0,position:"absolute",zIndex:"1"},"& .container .right .confirm-availability .buttons":{marginBottom:10},"& .container .right .confirm-availability .info":{color:"gray",margin:0},"& .container .right .confirm-availability":{top:0,position:"absolute",background:"rgb(241 245 245 / 96%)",height:"100%",width:"100%",zIndex:"999",justifyContent:"center",alignItems:"center",flexDirection:"column",color:"#000000",display:"flex",textAlign:"center",padding:10},"& .container .right .write":{position:"absolute",bottom:"20px",zIndex:"2",left:"30px",height:"42px",paddingLeft:"8px",border:"1px solid var(--light)",backgroundColor:"#eceff1",width:"calc(100% - 58px)",borderRadius:"5px"},"& .container .right .write input":{fontSize:"16px",float:"left",width:"80%",height:"40px",padding:"0 10px",color:"var(--dark)",border:"0",outline:"none",backgroundColor:"#eceff1",fontFamily:"'Source Sans Pro', sans-serif",fontWeight:"400"},"& .container .right .write .write-link.attach:before":{display:"inline-block",float:"left",width:"20px",height:"42px",content:"''",backgroundImage:'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/attachment.png")',backgroundRepeat:"no-repeat",backgroundPosition:"center"},"& .container .right .write .write-link.smiley:before":{display:"inline-block",float:"left",width:"20px",height:"42px",content:"''",backgroundImage:'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/smiley.png")',backgroundRepeat:"no-repeat",backgroundPosition:"center"},"& .container .right .write .write-link.send:before":{display:"inline-block",float:"left",width:"20px",height:"42px",marginLeft:"11px",content:"''",backgroundImage:'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/send.png")',backgroundRepeat:"no-repeat",backgroundPosition:"center"},"& .container .right .bubble .time":{fontSize:"10px",color:"gray"},"& .container .right .bubble.me .time":{fontSize:"10px",color:"gray"},"& .container .right .bubble.you .time":{fontSize:"10px",color:"#fff"},"& .container .right .bubble":{fontSize:"16px",position:"relative",clear:"both",marginBottom:"8px",padding:"13px 14px",verticalAlign:"top",borderRadius:"5px",display:"flex",flexDirection:"column"},"& .container .right .bubble:before":{position:"absolute",top:"19px",display:"block",width:"8px",height:"6px",content:"'\\00a0'",WebkitTransform:"rotate(29deg) skew(-35deg)",transform:"rotate(29deg) skew(-35deg)"},"& .container .right .bubble.you":{float:"left",color:"var(--white)",backgroundColor:"var(--blue)",alignSelf:"flex-start",WebkitAnimationName:"slideFromLeft",animationName:"slideFromLeft"},"& .container .right .bubble.you:before":{left:"-3px",backgroundColor:"var(--blue)"},"& .container .right .bubble.me":{float:"right",color:"var(--dark)",backgroundColor:"#eceff1",alignSelf:"flex-end",WebkitAnimationName:"slideFromRight",animationName:"slideFromRight"},"& .container .right .bubble.me:before":{right:"-3px",backgroundColor:"#eceff1"},"& .container .right .conversation-start":{position:"relative",width:"100%",marginBottom:"27px",textAlign:"center"},"& .container .right .conversation-start span":{fontSize:"14px",display:"inline-block",color:"var(--grey)"},"& .container .right .conversation-start span:before, & .container .right .conversation-start span:after":{position:"absolute",top:"10px",display:"inline-block",width:"30%",height:"1px",content:"''",backgroundColor:"var(--light)"},"& .container .right .conversation-start span:before":{left:"0"},"& .container .right .conversation-start span:after":{right:"0"}}},i={},c={backBtn:{display:"none"}},s={wrapper:{marginTop:"0",width:"100%",height:"calc(100vh - 117px)","& .container .right":{width:"100%"},"& .container .left":{width:"100%",position:"absolute",zIndex:9,transform:"translateX(0)",transition:"transform ease-in-out 450ms"},"& .container .left.active":{transform:"translateX(-100%)",transition:"transform ease-in-out 450ms"},"& .container .right .write":{display:"flex"},"& .container .right .top":{}},backBtn:{marginRight:"1rem"},flex:{display:"flex"}}},mjKo:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("wd/R"),i=n.n(o),c=r.a.createElement;t.a=function(e){var t=e.message,n=e.auth,r=Object(a.useState)(""),o=r[0],s=r[1],l=Object(a.useState)(!1),p=l[0],d=l[1];return Object(a.useEffect)((function(){t&&(d(t.sender_id==n.connectycube_user.connectycube_id),s(t.message))}),[t]),!!o&&c("div",{className:"msg"},c("div",{className:"bubble ".concat(p?"me":"you")},c("span",{className:"text"},o),c("span",{className:"time"}," ",i()(t.created_at).format("DD/MM/YYYY hh:mm a"))))}},o7Ty:function(e,t,n){"use strict";(function(e){var a=n("rePB"),r=n("q1tI"),o=n.n(r),i=n("snoG"),c=n.n(i),s=n("R/WZ"),l=n("V1OU"),p=n("iae6"),d=(n("FKIu"),n("/vFe"),n("mjKo"),n("wd/R"),n("ofer")),u=n("Z3vd"),g=n("tqn1"),f=n.n(g),m=n("/MKj"),h=n("fPwM"),b=n("9viw"),v=(n("GN20"),n("vGTh")),x=o.a.createElement;function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=Object(s.a)((function(e){var t;return w(w({},l.a),{},(t={},Object(a.a)(t,e.breakpoints.up("sm"),l.b),Object(a.a)(t,e.breakpoints.up("md"),l.d),Object(a.a)(t,e.breakpoints.down("sm"),l.c),t))}));t.a=function(t){var n=t.selectedDialogVal,a=t.auth,i=t.goBack,s=t.dialogsArr,l=t.updateDialogSeenBySeller,g=t.deleteDialogSeenBySeller,y=O(),w=Object(r.useState)(!0),j=w[0],k=w[1],_=Object(r.useState)({}),S=(_[0],_[1]),N=Object(r.useState)({}),P=(N[0],N[1],Object(r.useState)(!1)),B=P[0],I=P[1],C=Object(r.useState)(!1),D=C[0],z=C[1],T=Object(r.useState)(0),W=T[0],R=T[1],E=Object(r.useState)(""),A=E[0],L=E[1],M=Object(m.c)((function(e){return e.messages})),q=Object(r.useState)(""),F=q[0],H=q[1],K=Object(r.useState)(""),Y=K[0],G=K[1],U=Object(r.useState)(""),V=U[0],J=U[1],X=Object(r.useState)(""),Z=(X[0],X[1],Object(r.useState)(!1)),Q=(Z[0],Z[1],Object(m.b)()),$=Object(r.useRef)("");Object(r.useEffect)((function(){if(!n.id)return k(!1),H(""),G(""),J(""),void R(0);S(n),ee(1);var e=n;if(e&&e.users.length){var t=e.users.filter((function(e){return e.user.id!=a.id}));t[0].user&&Object(v.o)(t[0].user.id).then((function(e){return e&&e.id&&H(e)}))}if(e&&e.related_data){var r=e.related,o=e.related_data,i="/products/item/".concat(o.id);"request"==r&&(i="/buy-request"),G(o.title),J(i),0==e.opened_by_seller&&e.related_data.seller_id==a.id&&I(!0)}}),[n]);var ee=function(e){L("");var t=e||W+1,a={chat_dialog_id:n.connecty_dialog_id,sort_desc:"date_sent",limit:10,skip:10*(t-1)};console.log("selectedDialogVal",n),f.a.chat.message.list(a).then((function(e){if(e.items.length){var a=e.items.reverse().concat(M.messages);setTimeout((function(){te(M.messages.length?30:"")}),200),Q(Object(h.c)(a,n)),R(t)}else M.messages.length||(Q(Object(h.c)([],n)),1==t&&L("product"==n.related?"Do you still have this product?":"Do you still have this request"),R(-1));f.a.chat.getLastUserActivity(userId).then((function(e){console.log("lastactive",e);e.userId,e.seconds})).catch((function(e){}))})).catch((function(e){}))},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";k(!1),$&&$.current&&($.current.scrollTop=e||$.current.scrollHeight)},ne=function(e){z(!0),Object(v.w)(n.id,e,a.id).then((function(t){console.log(t),z(!1),"yes"==e?(I(!1),l(n,s)):g(n,s)}))};return n.id?x("div",{className:"right"},x("div",{className:"top"},x("div",{className:y.flex},x(c.a,{className:y.backBtn,onClick:i}),x("span",null,"To:"," ",x("span",{className:"name"},F.first_name," ",F.last_name))),x("p",null,V?x("a",{href:V},Y):Y)),x("div",{className:"chat",onScroll:function(e){var t=e.target;!M.messages.length||W<0||t.scrollTop||ee()},ref:$},j&&x("div",{className:"emptyDialog"},x(p.a,{color:"primary",size:30})),x(b.a,{auth:a})),x("div",{className:"write"},!j&&x(o.a.Fragment,null,x("a",{href:"javascript:;",className:"test"}),x("input",{type:"text",name:"chatmessage",id:"chatmessage",value:A,onChange:function(e){return L(e.target.value)}}),x("a",{href:"javascript:;",className:"write-link send",onClick:function(t){if(t.preventDefault(),A){var r=n,o=Math.floor(Date.now()/1e3),i={type:"groupchat",body:A,message:A,dialog_id:r.connecty_dialog_id,extension:{save_to_history:1,dialog_id:r.connecty_dialog_id,sender_id:a.connectycube_user.connectycube_id,date_sent:o},markable:1,sender_id:a.connectycube_user.connectycube_id};Q(Object(h.b)(i)),L(""),i.id=f.a.chat.helpers.getBsonObjectId(),i=f.a.chat.send(r.xmpp_room_jid,i),f.a.chat.getLastUserActivity(F.connectycube_user.connectycube_id).then((function(t){console.log("resultconect",t);t.userId;if(t.seconds>500){Object(v.t)(F.id);var n={app_id:e.env.ONESIGNAL_APP_ID,contents:{en:"You recieved a new message."},filters:[{field:"tag",key:"user",relation:"=",value:F.id}],url:e.env.APP_URL+"/chat"};fetch("https://onesignal.com/api/v1/notifications",{headers:{"Content-Type":"application/json; charset=utf-8",Authorization:"Basic "+e.env.ONESIGNAL_REST_KEY},method:"post",body:JSON.stringify(n)}).then((function(e){if(e.ok)return e.json();throw Error("Request rejected with status ".concat(e.status))})).then((function(e){return console.log("responseDatasadsad",e),e})).catch((function(e){return console.log("responseDatasadsad",e)}))}})).catch((function(e){})),setTimeout((function(){te()}),200)}}}))),B&&x("div",{className:"confirm-availability"},x(d.a,{variant:"h6"},"Please Confirm if this product is a valid product"),x("p",null,V?x("a",{href:V},Y):Y),!D&&x("div",{className:"buttons"},x(u.a,{size:"large",color:"primary",variant:"contained",style:{marginRight:5},onClick:function(){return ne("yes")}},"Yes"),x(u.a,{size:"large",color:"secondary",variant:"contained",onClick:function(){return ne("no")}},"No")),D&&x(p.a,{color:"primary",size:30}),x("p",{className:"info"},"By clicking on 'Yes', you can continue to chat"),x("p",{className:"info"},"By clicking on 'No', the product will be automatically deleted."))):x("div",{className:"right"},x("div",{className:"top"}),x("div",{className:"chat"},!j&&!s.length&&x("div",{className:"emptyDialog"},x("img",{src:"/static/images/undraw_typing.svg"}),x(d.a,null,"Your message box is empty")),!j&&s.length>0&&x("div",{className:"emptyDialog"},x(d.a,null,"Please select a dialog to start chat"))))}}).call(this,n("8oxB"))},snoG:function(e,t,n){"use strict";var a=n("TqRt"),r=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("q1tI")),i=(0,a(n("8/g6")).default)(o.createElement("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace");t.default=i}}]);