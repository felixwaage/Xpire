(this.webpackJsonpxpire=this.webpackJsonpxpire||[]).push([[0],{57:function(e,n,t){e.exports=t(73)},62:function(e,n,t){},63:function(e,n,t){e.exports=t.p+"static/media/logo.3fb9c233.svg"},64:function(e,n,t){},73:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(6),i=t.n(o),c=(t(62),t(63),t(64),t(39)),l=t(40),s=t(47),u=t(45),d=t(41),m=t.n(d),p=(a.Component,t(27)),f=t(106),h=t(108),g=t(110),v=t(32),b=t(111),E=t(43),w=t.n(E),k=t(44),y=t.n(k),x=t(113),C=t(117),O=Object(f.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function W(){var e=O(),n=r.a.useState(!0),t=Object(p.a)(n,2),a=t[0],o=(t[1],r.a.useState(null)),i=Object(p.a)(o,2),c=i[0],l=i[1],s=Boolean(c),u=function(){l(null)};return r.a.createElement("div",{className:e.root},r.a.createElement(h.a,{position:"static"},r.a.createElement(g.a,null,r.a.createElement(b.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(w.a,null)),r.a.createElement(v.a,{variant:"h6",className:e.title},"Xpire"),a&&r.a.createElement("div",null,r.a.createElement(b.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){l(e.currentTarget)},color:"inherit"},r.a.createElement(y.a,null)),r.a.createElement(C.a,{id:"menu-appbar",anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:s,onClose:u},r.a.createElement(x.a,{onClick:u},"Profile"),r.a.createElement(x.a,{onClick:u},"My account"))))))}var j=t(46),S=t(112),N=t(77),A=t(116),B=t(115),P=t(114),R=t(118),L=t(119),T=Object(f.a)((function(e){return{root:{width:"100%",maxWidth:"90%",marginTop:"1rem",display:"block",marginLeft:"auto",marginRight:"auto",backgroundColor:e.palette.background.paper},listitem:{padding:"1rem",borderWidth:"0.2rem",borderStyle:"solid",borderColor:"colorPrimary"}}}));function M(){var e=T(),n=r.a.useState([1]),t=Object(p.a)(n,2),a=t[0],o=t[1],i=function(e){return function(){var n=a.indexOf(e),t=Object(j.a)(a);-1===n?t.push(e):t.splice(n,1),o(t)}};return r.a.createElement(S.a,{dense:!0,className:e.root},[0,1,2,3].map((function(n){var t="checkbox-list-secondary-label-".concat(n);return r.a.createElement(N.a,{key:n,className:e.listitem,button:!0},r.a.createElement(P.a,null,r.a.createElement(L.a,{alt:"Avatar n\xb0".concat(n+1),src:"/static/images/avatar/".concat(n+1,".jpg")})),r.a.createElement(B.a,{id:t,primary:"Line item ".concat(n+1)}),r.a.createElement(A.a,null,r.a.createElement(R.a,{edge:"end",onChange:i(n),checked:-1!==a.indexOf(n),inputProps:{"aria-labelledby":t}})))})))}var U=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(W,null),r.a.createElement(M,null))},X=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Xpire",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/Xpire","/service-worker.js");X?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):z(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):z(n,e)}))}}()}},[[57,1,2]]]);
//# sourceMappingURL=main.18b17512.chunk.js.map