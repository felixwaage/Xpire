(this.webpackJsonpxpire=this.webpackJsonpxpire||[]).push([[0],{104:function(e,t,a){e.exports=a.p+"static/media/logo.3fb9c233.svg"},108:function(e){e.exports=JSON.parse('{"inputStream":{"type":"LiveStream","constraints":{"width":{"min":450},"height":{"min":300},"facingMode":"environment","aspectRatio":{"min":1,"max":2}}},"locator":{"patchSize":"medium","halfSample":true},"numOfWorkers":2,"frequency":10,"decoder":{"readers":["ean_reader"]},"locate":true}')},129:function(e,t,a){e.exports=a(142)},134:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(12),i=a.n(o),c=(a(134),a(13)),s=a.n(c),u=a(24),l=a(42),d=a(43),p=a(15),h=a(46),m=a(44),f=a(176),g=a(179),b=a(181),v=a(66),k=a(104),y=a.n(k),E=Object(f.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"center"},logo:{maxWidth:"2.5rem"}}}));function D(){var e=E();return n.a.createElement(g.a,{position:"fixed"},n.a.createElement(b.a,null,n.a.createElement("img",{src:y.a,alt:"logo",className:e.logo}),n.a.createElement(v.a,{variant:"h6",className:e.title},"Xpire"),n.a.createElement("div",null)))}var w=a(7),O=a(184),x=a(185),C=a(187),j=a(186),S=a(197),P=a(16),_=a(84),N=a(182),I=a(183),B=a(195),T=a(63),A=a.n(T),M=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).handleListItemClick=function(e){r.setState({redirect:!0}),r.props.showProduct(e)},r.statusColor=function(e){var t=(new Date(e)-new Date)/864e5;return t>3?"#C9DEBC":t>0?"#F4E132":"#F96523"},r.handleListItemClick=r.handleListItemClick.bind(Object(p.a)(r)),r.state={redirect:!1,alertOpen:!1,alertText:""},r}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return this.state.redirect?n.a.createElement(P.a,{push:!0,to:"/Xpire/Product"}):n.a.createElement("div",{className:t.root},n.a.createElement("div",{className:t.toolbar}),n.a.createElement(N.a,{in:this.state.alertOpen},n.a.createElement(B.a,{severity:"error",action:n.a.createElement(I.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){e.setState({alertOpen:!1})}},n.a.createElement(A.a,{fontSize:"inherit"}))},this.state.alertText)),n.a.createElement(O.a,{dense:!0,className:t.list},this.props.products?this.props.products.map((function(a){return n.a.createElement("div",{className:t.listitemframe,key:a.id},n.a.createElement(x.a,{className:t.listitem,button:!0,onClick:function(){return e.handleListItemClick(a.id)}},n.a.createElement(j.a,null,n.a.createElement(S.a,{alt:"Avatar n\xb0".concat(a+1),src:a.img_url})),n.a.createElement(C.a,{primary:"".concat(a.name," (").concat(a.amount,")"),secondary:n.a.createElement("div",null,n.a.createElement("div",null,"G\xfcltig bis: ",Object(_.a)(new Date(a.expireDate),"dd.MM.yyyy")),n.a.createElement("div",{style:{height:"0.5rem",width:"100%",marginTop:"0.3rem",backgroundColor:e.statusColor(a.expireDate)}}))})))})):null),n.a.createElement("button",{onClick:this.props.notification},"Notify me!"))}}]),a}(n.a.Component),L=Object(w.a)((function(e){return{toolbar:e.mixins.toolbar,list:{padding:"1rem"},listitemframe:{margin:"0.6rem"},listitem:{borderWidth:"0.1rem",borderStyle:"solid",borderRadius:"0.5rem",borderColor:e.palette.primary.main}}}))(M),R=a(65),X=a(50),z=a(194),q=a(190),W=a(109),F=a.n(W),U=a(110),G=a.n(U),J=a(188),V=a(196),H=a(111),K=a.n(H),Y=a(189),Q=a(22),Z=a(193),$=a(96),ee=a(108),te=a(32),ae=a.n(te),re=function(e){var t=e.onDetected;Object(r.useEffect)((function(){ae.a.init(ee,(function(e){return e&&console.log(e,"error msg"),ae.a.start(),function(){ae.a.stop()}})),ae.a.onProcessed((function(e){var t=ae.a.canvas.ctx.overlay,a=ae.a.canvas.dom.overlay;e&&(e.boxes&&(t.clearRect(0,0,Number(a.getAttribute("width")),Number(a.getAttribute("height"))),e.boxes.filter((function(t){return t!==e.box})).forEach((function(e){ae.a.ImageDebug.drawPath(e,{x:0,y:1},t,{color:"green",lineWidth:2})}))),e.box&&ae.a.ImageDebug.drawPath(e.box,{x:0,y:1},t,{color:"#00F",lineWidth:2}),e.codeResult&&e.codeResult.code&&ae.a.ImageDebug.drawPath(e.line,{x:"x",y:"y"},t,{color:"red",lineWidth:3}))})),ae.a.onDetected(a)}),[]);var a=function(e){t(e.codeResult.code)};return n.a.createElement("div",{id:"interactive",className:"viewport"})},ne=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).componentDidMount=function(){if(0!==r.props.productID){var e=r.props.products.find((function(e){return e.id===r.props.productID}));r.setState({product_name:e.name,product_amount:e.amount,product_purchaseDate:e.purchaseDate,product_expireDate:e.expireDate,product_img_url:e.img_url,imgStyle:Object(X.a)(Object(X.a)({},r.state.imgStyle),{},{backgroundImage:"url("+e.img_url+")"})})}},r.handleCloseSnackbar=function(e,t){"clickaway"!==t&&r.setState({openSnackbar:!1})},r.handleClickArrow=r.handleClickArrow.bind(Object(p.a)(r)),r.handleClickDelete=r.handleClickDelete.bind(Object(p.a)(r)),r.handleClickSave=r.handleClickSave.bind(Object(p.a)(r)),r.handleDateChange=r.handleDateChange.bind(Object(p.a)(r)),r.handleInput=r.handleInput.bind(Object(p.a)(r)),r.getProductInformationByBarcode=r.getProductInformationByBarcode.bind(Object(p.a)(r)),r.showErrorPopOver=r.showErrorPopOver.bind(Object(p.a)(r)),r.handleClose=r.handleClose.bind(Object(p.a)(r)),r.handleCloseSnackbar=r.handleCloseSnackbar.bind(Object(p.a)(r)),r.setBackgroundImg=r.setBackgroundImg.bind(Object(p.a)(r)),r.setDate=r.setDate.bind(Object(p.a)(r)),r.handleClickUpdate=r.handleClickUpdate.bind(Object(p.a)(r)),r.onDetected=r.onDetected.bind(Object(p.a)(r)),r.onStartScan=r.onStartScan.bind(Object(p.a)(r)),r.state={redirect:!1,product_name:"",product_amount:"",product_purchaseDate:"",product_expireDate:"",product_img_url:"",imgStyle:{height:"13rem",backgroundImage:"url("+r.props.products.img_url+")",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"auto 100%"},barcode:"",anchorEl:{},open:!1,openSnackbar:!1,id:"simple-popover",simple_popover_message:"",result:null,camera:!1},r}return Object(d.a)(a,[{key:"setBackgroundImg",value:function(e){this.setState({imgStyle:Object(X.a)(Object(X.a)({},this.state.imgStyle),{},{backgroundImage:"url("+e+")"}),product_img_url:e})}},{key:"showErrorPopOver",value:function(e,t){this.setState({open:!0,anchorEl:t,simple_popover_message:e})}},{key:"handleClose",value:function(){this.setState({anchorEl:null,open:!1})}},{key:"getProductInformationByBarcode",value:function(e){var t=this;if(13==e.keyCode){var a=this.state.barcode;a?13===a.length||8===a.length?fetch("https://world.openfoodfacts.org/api/v0/product/"+a+".json").then((function(e){return e.json()})).then((function(a){var r=a.product;1===a.status?r.product_name?(t.setState({product_name:r.product_name}),t.setBackgroundImg(r.image_url)):t.showErrorPopOver("Produktname nicht gefunden!",e.currentTarget):t.showErrorPopOver("Das Produkt existiert nicht!",e.currentTarget)}),(function(a){t.showErrorPopOver("Pr\xfcfe deine Internetverbindung!",e.currentTarget)})):this.showErrorPopOver("Barcode nicht korrekt!",e.currentTarget):this.showErrorPopOver("Bitte Barcode eingeben!",e.currentTarget)}}},{key:"handleClickArrow",value:function(e){this.setState({redirect:!0}),this.props.refreshPage()}},{key:"handleClickDelete",value:function(e){this.props.delete(this.props.productID),this.setState({redirect:!0}),this.props.refreshPage()}},{key:"handleClickSave",value:function(e){this.state.product_purchaseDate||this.setDate(new Date,"purchaseDate"),this.state.product_expireDate||this.setDate(new Date,"expireDate"),0===this.props.productID&&this.props.add(this.state.product_name,this.state.product_amount,this.state.product_purchaseDate,this.state.product_expireDate,this.state.product_img_url),this.setState({redirect:!0}),this.props.refreshPage()}},{key:"handleDateChange",value:function(e,t){this.setDate(e,t)}},{key:"setDate",value:function(){var e=Object(u.a)(s.a.mark((function e(t,a){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.toISOString().split("T")[0],e.next=3,this.setState(Object(R.a)({},a,r));case 3:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"handleInput",value:function(e){var t=e.target.value;this.setState(Object(X.a)(Object(X.a)({},this.state),{},Object(R.a)({},e.target.id,t)))}},{key:"handleClickUpdate",value:function(e){var t={name:this.state.product_name,amount:this.state.product_amount,purchaseDate:this.state.product_purchaseDate,expireDate:this.state.product_expireDate};this.props.productUpdate(this.props.productID,t),this.setState({openSnackbar:!0})}},{key:"onDetected",value:function(e){this.setState({barcode:e,camera:!1})}},{key:"onStartScan",value:function(e){this.setState({camera:!this.state.camera})}},{key:"render",value:function(){var e=this,t=this.props.classes;return this.state.redirect?n.a.createElement(P.a,{push:!0,to:"/Xpire"}):n.a.createElement("div",{className:t.root},n.a.createElement("div",{className:t.toolbar}),n.a.createElement("div",{className:t.img,style:this.state.imgStyle},n.a.createElement("div",{className:t.imgOverlay},n.a.createElement(F.a,{edge:"end",className:t.arrowIcon,onClick:this.handleClickArrow}),0!==this.props.productID&&n.a.createElement(G.a,{edge:"end",className:t.deleteIcon,onClick:this.handleClickDelete}))),n.a.createElement(J.a,{id:this.state.id,open:this.state.open,anchorEl:this.state.anchorEl,onClose:this.handleClose,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},n.a.createElement(v.a,{className:t.typography},this.state.simple_popover_message)),n.a.createElement("div",{className:t.formContainer},n.a.createElement("form",{className:t.form},0===this.props.productID&&n.a.createElement("div",null,n.a.createElement(z.a,{id:"barcode",label:"Barcode",margin:"dense",variant:"outlined",value:this.state.barcode,className:t.textField,onChange:this.handleInput,onKeyDown:this.getProductInformationByBarcode,InputProps:{endAdornment:n.a.createElement(Y.a,{position:"end"},n.a.createElement(K.a,{onClick:this.onStartScan}))}}),n.a.createElement("div",{className:"container"},this.state.camera&&n.a.createElement(re,{onDetected:this.onDetected}))),n.a.createElement(z.a,{required:!0,id:"product_name",label:"Titel",margin:"dense",variant:"outlined",value:this.state.product_name,className:t.textField,onChange:this.handleInput}),n.a.createElement("br",null),n.a.createElement(z.a,{required:!0,id:"product_amount",label:"Anzahl",margin:"dense",variant:"outlined",value:this.state.product_amount,className:t.textField,onChange:this.handleInput}),n.a.createElement("br",null),n.a.createElement(Q.a,{utils:$.a},n.a.createElement(Z.a,{required:!0,id:"product_purchaseDate",label:"Eingekauft am",margin:"dense",inputVariant:"outlined",format:"dd.MM.yyyy",value:this.state.product_purchaseDate,className:t.datePicker,onChange:function(t){return e.handleDateChange(t,"product_purchaseDate")}})),n.a.createElement("br",null),n.a.createElement(Q.a,{utils:$.a},n.a.createElement(Z.a,{required:!0,id:"product_expireDate",label:"G\xfcltig bis",margin:"dense",inputVariant:"outlined",format:"dd.MM.yyyy",value:this.state.product_expireDate,className:t.datePicker,onChange:function(t){return e.handleDateChange(t,"product_expireDate")}})),n.a.createElement("br",null),0===this.props.productID&&n.a.createElement(q.a,{id:"SaveButton",variant:"contained",color:"primary",className:t.submitButton,onClick:this.handleClickSave},"Speichern"),0!==this.props.productID&&n.a.createElement(q.a,{id:"UpdateButton",variant:"contained",color:"primary",className:t.submitButton,onClick:this.handleClickUpdate},"\xc4ndern"))),n.a.createElement(V.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:this.state.openSnackbar,autoHideDuration:6e3,onClose:this.handleCloseSnackbar,message:"Daten wurden ge\xe4ndert!",action:n.a.createElement(I.a,{size:"small","aria-label":"close",color:"inherit",onClick:this.handleCloseSnackbar},n.a.createElement(A.a,{fontSize:"small"}))}))}}]),a}(n.a.Component),oe=Object(w.a)((function(e){return{toolbar:e.mixins.toolbar,imgOverlay:{height:"100%",backgroundColor:"hsla(0, 0%, 0%, 0.23)"},arrowIcon:{marginLeft:"16px",marginTop:"10px",color:"white",position:"fixed"},deleteIcon:{marginRight:"16px",marginTop:"10px",color:"white",position:"fixed",right:"0"},datePicker:{width:"100%"},formContainer:{},form:{padding:"1.6rem"},textField:{width:"100%"},submitButton:{float:"right",marginTop:"1rem"},typography:{padding:e.spacing(2)}}}))(ne),ie=a(191),ce=a(112),se=a.n(ce),ue=a(82),le=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.classes;return n.a.createElement(ue.b,{to:"/Xpire/Product"},n.a.createElement(ie.a,{color:"primary","aria-label":"add",className:e.fab},n.a.createElement(se.a,null)))}}]),a}(n.a.Component),de=Object(w.a)((function(e){return{fab:{position:"fixed",bottom:e.spacing(4),right:e.spacing(4)}}}))(le),pe=a(95),he=new pe.a("Xpire");he.version(1).stores({products:"++id,name,amount,purchaseDate,expireDate, img_url"});var me=function(){var e=Object(u.a)(s.a.mark((function e(t,a,r,n){var o,i=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=i.length>4&&void 0!==i[4]?i[4]:void 0,e.next=3,he.products.add({name:t,amount:a,purchaseDate:r,expireDate:n,img_url:o});case 3:return e.next=5,he.products.toArray().then((function(e){return e}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,a,r,n){return e.apply(this,arguments)}}(),fe=function(){var e=Object(u.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,he.products.update(t,a).then((function(e){return e||console.log("Nothing was updated"),be()}));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),ge=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he.products.where("id").equals(t).delete();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),be=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he.products.toArray().then((function(e){return e})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ve=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).componentDidMount=function(){(function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be().then((function(e){r.setState({products:e})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},r.deleteProduct=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.addProductToList=function(){var e=Object(u.a)(s.a.mark((function e(t,a,n,o,i){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me(t,a,n,o,i).then((function(e){r.setState({products:e})}));case 2:case"end":return e.stop()}}),e)})));return function(t,a,r,n,o){return e.apply(this,arguments)}}(),r.updateProduct=function(){var e=Object(u.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe(t,a).then((function(e){r.setState({products:e})}));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),r.scheduleNotification=function(e,t,a){"granted"===Notification.permission?navigator.serviceWorker.ready.then((function(r){"showTrigger"in Notification.prototype?(console.log("Notification Triggers supported"),r.showNotification("Xpire - manage your fridge and get rich",{body:e,tag:t,icon:"logo.svg",showTrigger:new TimestampTrigger(a)})):(console.log("Notification Triggers not supported"),r.showNotification("Xpire - manage your fridge and get rich",{body:"Your Browser doesnt support scheduled notifications",tag:"no-support",icon:"logo.svg"}))})).then(console.log("Notification sent")).catch((function(e){return console.log(e)})):r.displayAlert("Please allow Notifications or exit Incognito Mode")},r.displayNotification=function(){console.log("sending Notification"),r.scheduleNotification("a product is about to expire","test1",Date.now()+2e3),r.scheduleNotification("another schimmel","test2",Date.now()+5e3)},r.displayAlert=function(e){r.productListComponentRef.current.setState({alertOpen:!0,alertText:e})},r.productListComponentRef=n.a.createRef(),r.state={products:[],productID:0,open:!0},r.showProduct=r.showProduct.bind(Object(p.a)(r)),r.deleteProduct=r.deleteProduct.bind(Object(p.a)(r)),r.addProductToList=r.addProductToList.bind(Object(p.a)(r)),r.updateProduct=r.updateProduct.bind(Object(p.a)(r)),r.refreshPage=r.refreshPage.bind(Object(p.a)(r)),r.componentDidMount=r.componentDidMount.bind(Object(p.a)(r)),r}return Object(d.a)(a,[{key:"refreshPage",value:function(){this.setState({productID:0}),this.componentDidMount()}},{key:"showProduct",value:function(e){this.setState({productID:e})}},{key:"render",value:function(){var e=this;return n.a.createElement(ue.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(P.b,{path:"/Xpire",component:D}),n.a.createElement(P.b,{exact:!0,path:"/Xpire",render:function(t){return n.a.createElement(L,{ref:e.productListComponentRef,products:e.state.products,showProduct:e.showProduct,notification:e.displayNotification})}}),n.a.createElement(P.b,{exact:!0,path:"/Xpire",render:function(e){return n.a.createElement(de,null)}}),n.a.createElement(P.b,{exact:!0,path:"/Xpire/Product",render:function(t){return n.a.createElement(oe,{productID:e.state.productID,products:e.state.products,refreshPage:e.refreshPage,add:e.addProductToList,delete:e.deleteProduct,productUpdate:e.updateProduct})}})))}}]),a}(n.a.Component),ke=a(113),ye=a(192),Ee=Object(ke.a)({palette:{primary:{main:"#C9DEBC"},secondary:{main:"#F96523"}}});if(i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(ye.a,{theme:Ee},n.a.createElement(ve,null))),document.getElementById("root")),"serviceWorker"in navigator&&"Notification"in window)navigator.serviceWorker.register("service-worker.js").then((function(e){console.log("service worker registered"),Notification.requestPermission((function(e){"granted"===e?console.log("Granted"):console.log(e)}))})).catch((function(e){console.log(e)}));else{var De=document.createElement("a");De.href="http://www.chromium.org/blink/serviceworker/service-worker-faq",De.textContent="unavailable",document.querySelector("#status").appendChild(De)}}},[[129,1,2]]]);
//# sourceMappingURL=main.6d2bd962.chunk.js.map