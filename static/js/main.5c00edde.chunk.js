(this.webpackJsonpxpire=this.webpackJsonpxpire||[]).push([[0],{110:function(e,t,a){e.exports=a.p+"static/media/logo.a42da773.svg"},115:function(e){e.exports=JSON.parse('{"inputStream":{"type":"LiveStream","constraints":{"width":{"max":1920},"height":{"max":1080},"facingMode":"environment","aspectRatio":{"min":1,"max":2}}},"locator":{"patchSize":"medium","halfSample":false},"numOfWorkers":2,"frequency":10,"decoder":{"readers":["ean_reader"]},"locate":true}')},136:function(e,t,a){e.exports=a(151)},141:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),i=a.n(o),c=(a(141),a(14)),s=a.n(c),l=a(26),u=a(44),d=a(45),p=a(15),m=a(48),h=a(46),f=a(121),g=a(187),b=a(191),v=a(193),k=a(55),y=a(110),E=a.n(y),D=a(114),w=a.n(D),S=a(96),x=new S.a("Xpire");x.version(1).stores({products:"++id,name,amount,purchaseDate,expireDate, img_url"});var O=function(){var e=Object(l.a)(s.a.mark((function e(t,a,n,r){var o,i=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=i.length>4&&void 0!==i[4]?i[4]:void 0,e.next=3,x.products.add({name:t,amount:a,purchaseDate:n,expireDate:r,img_url:o});case 3:return e.next=5,x.products.toArray().then((function(e){return e}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,x.products.update(t,a).then((function(e){return e||console.log("Nothing was updated"),_()}));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),j=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.table(t).clear().catch((function(){console.log("Error occured on table clear")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.products.where("id").equals(t).delete();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.products.toArray().then((function(e){return e})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=a(198),N=a(215),B=a(197),A=a(195),T=a(196),M=a(194),L=a(190),R=Object(g.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"center"},logo:{maxWidth:"2.5rem"},deleteIcon:{color:e.palette.primary.dark},dialogActions:{paddingRight:"20px",paddingBottom:"10px"}}})),z=r.a.forwardRef((function(e,t){return r.a.createElement(L.a,Object.assign({direction:"up",ref:t},e))}));function X(e){var t=R(),a=r.a.useState(!1),n=Object(f.a)(a,2),o=n[0],i=n[1];return r.a.createElement(b.a,{position:"fixed"},r.a.createElement(v.a,null,r.a.createElement("img",{src:E.a,alt:"logo",className:t.logo}),r.a.createElement(k.a,{variant:"h6",className:t.title},"Xpire"),r.a.createElement("div",null,r.a.createElement(w.a,{className:t.deleteIcon,fontSize:"large",onClick:function(){i(!0)}})),r.a.createElement(N.a,{open:o,TransitionComponent:z,keepMounted:!0,onClose:function(){return i(!1)},"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(M.a,{id:"alert-dialog-slide-title"},"L\xf6schen best\xe4tigen"),r.a.createElement(A.a,null,r.a.createElement(T.a,{id:"alert-dialog-slide-description"},"M\xf6chten Sie wirklich alle Produkte in Xpire l\xf6schen?")),r.a.createElement(B.a,{className:t.dialogActions},r.a.createElement(I.a,{onClick:function(){return i(!1)},color:"primary"},"Abbrechen"),r.a.createElement(I.a,{onClick:function(){j("products"),i(!1),e.refreshPage()},color:"secondary"},"L\xf6schen")))))}var q=a(7),W=a(201),F=a(202),U=a(204),G=a(203),K=a(217),J=a(16),H=a(89),V=a(199),Y=a(200),Q=a(214),Z=a(82),$=a.n(Z),ee=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleListItemClick=function(e){n.setState({redirect:!0}),n.props.showProduct(e)},n.statusColor=function(e){var t=(new Date(e)-new Date)/864e5;return t>3?"#C9DEBC":t>0?"#F4E132":"#F96523"},n.handleListItemClick=n.handleListItemClick.bind(Object(p.a)(n)),n.state={redirect:!1,alertOpen:!1,alertText:""},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return this.state.redirect?r.a.createElement(J.a,{push:!0,to:"/Xpire/Product"}):r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.toolbar}),r.a.createElement(V.a,{in:this.state.alertOpen},r.a.createElement(Q.a,{severity:"error",action:r.a.createElement(Y.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){e.setState({alertOpen:!1})}},r.a.createElement($.a,{fontSize:"inherit"}))},this.state.alertText)),r.a.createElement(W.a,{dense:!0,className:t.list},this.props.products?this.props.products.map((function(a){return r.a.createElement("div",{className:t.listitemframe,key:a.id},r.a.createElement(F.a,{className:t.listitem,button:!0,onClick:function(){return e.handleListItemClick(a.id)}},r.a.createElement(G.a,null,r.a.createElement(K.a,{alt:"Avatar n\xb0".concat(a+1),src:a.img_url})),r.a.createElement(U.a,{primary:"".concat(a.name," (").concat(a.amount,")"),secondary:r.a.createElement("div",null,r.a.createElement("div",null,"G\xfcltig bis: ",Object(H.a)(new Date(a.expireDate),"dd.MM.yyyy")),r.a.createElement("div",{style:{height:"0.5rem",width:"100%",marginTop:"0.3rem",backgroundColor:e.statusColor(a.expireDate)}}))})))})):null))}}]),a}(r.a.Component),te=Object(q.a)((function(e){return{toolbar:e.mixins.toolbar,list:{padding:"1rem"},listitemframe:{margin:"0.6rem"},listitem:{borderWidth:"0.1rem",borderStyle:"solid",borderRadius:"0.5rem",borderColor:e.palette.primary.main}}}))(ee),ae=a(69),ne=a(54),re=a(218),oe=a(116),ie=a.n(oe),ce=a(117),se=a.n(ce),le=a(216),ue=a(118),de=a.n(ue),pe=a(209),me=a(23),he=a(212),fe=a(99),ge=a(115),be=a(33),ve=a.n(be),ke=function(e){var t=e.onDetected;e.cameraStatus;Object(n.useEffect)((function(){ve.a.init(ge,(function(e){return e&&console.log(e,"error msg"),ve.a.start(),function(){ve.a.stop()}})),ve.a.onProcessed((function(e){var t=ve.a.canvas.ctx.overlay,a=ve.a.canvas.dom.overlay;e&&(e.boxes&&(t.clearRect(0,0,Number(a.getAttribute("width")),Number(a.getAttribute("height"))),e.boxes.filter((function(t){return t!==e.box})).forEach((function(e){ve.a.ImageDebug.drawPath(e,{x:0,y:1},t,{color:"green",lineWidth:2})}))),e.box&&ve.a.ImageDebug.drawPath(e.box,{x:0,y:1},t,{color:"#00F",lineWidth:2}),e.codeResult&&e.codeResult.code&&ve.a.ImageDebug.drawPath(e.line,{x:"x",y:"y"},t,{color:"red",lineWidth:3}))})),ve.a.onDetected(a)}),[]);var a=function(e){t(e.codeResult.code),ve.a.stop()};return r.a.createElement("div",{id:"interactive",className:"viewport"})},ye=a(219),Ee=a(207),De=a(213),we=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){if(0!==n.props.productID){var e=n.props.products.find((function(e){return e.id===n.props.productID}));n.setState({product_name:e.name,product_amount:e.amount,product_purchaseDate:e.purchaseDate,product_expireDate:e.expireDate,product_img_url:e.img_url,imgStyle:Object(ne.a)(Object(ne.a)({},n.state.imgStyle),{},{backgroundImage:"url("+e.img_url+")"})})}},n.handleCloseSnackbar=function(e,t){"clickaway"!==t&&n.setState({openSnackbar:!1})},n.formatPurchaseDate=n.formatPurchaseDate.bind(Object(p.a)(n)),n.handleClickArrow=n.handleClickArrow.bind(Object(p.a)(n)),n.handleClickDelete=n.handleClickDelete.bind(Object(p.a)(n)),n.handleClickSave=n.handleClickSave.bind(Object(p.a)(n)),n.handleDateChange=n.handleDateChange.bind(Object(p.a)(n)),n.handleInput=n.handleInput.bind(Object(p.a)(n)),n.getProductInformationByBarcode=n.getProductInformationByBarcode.bind(Object(p.a)(n)),n.onSearchKeyDown=n.onSearchKeyDown.bind(Object(p.a)(n)),n.handleCloseSnackbar=n.handleCloseSnackbar.bind(Object(p.a)(n)),n.setBackgroundImg=n.setBackgroundImg.bind(Object(p.a)(n)),n.setDate=n.setDate.bind(Object(p.a)(n)),n.handleClickUpdate=n.handleClickUpdate.bind(Object(p.a)(n)),n.onDetected=n.onDetected.bind(Object(p.a)(n)),n.onStartScan=n.onStartScan.bind(Object(p.a)(n)),n.state={redirect:!1,product_name:"",product_amount:1,product_purchaseDate:[new Date],product_expireDate:null,product_img_url:"",imgStyle:{height:"13rem",backgroundImage:"url("+n.props.products.img_url+")",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"auto 100%"},barcode:"",openSnackbar:!1,simple_popover_message:"",result:null,camera:!1,message:"",open:!1},n}return Object(d.a)(a,[{key:"setBackgroundImg",value:function(e){this.setState({imgStyle:Object(ne.a)(Object(ne.a)({},this.state.imgStyle),{},{backgroundImage:"url("+e+")"}),product_img_url:e})}},{key:"onSearchKeyDown",value:function(e){13!==e.keyCode&&9!==e.keyCode||this.getProductInformationByBarcode(this.state.barcode)}},{key:"getProductInformationByBarcode",value:function(e){var t=this;e?13===e.length||8===e.length?fetch("https://world.openfoodfacts.org/api/v0/product/"+e+".json").then((function(e){return e.json()})).then((function(e){var a=e.product;1===e.status?a.product_name?(t.setState({product_name:a.product_name}),t.setBackgroundImg(a.image_url)):t.setState({openSnackbar:!0,message:"Produktname nicht gefunden!"}):t.setState({openSnackbar:!0,message:"Das Produkt exitiert nicht!"})}),(function(e){t.setState({openSnackbar:!0,message:"Pr\xfcfe deine Internetverbindung!"})})):this.setState({openSnackbar:!0,message:"Barcode nicht korrekt!"}):this.setState({openSnackbar:!0,message:"Bitte Barcode eingeben!"})}},{key:"handleClickArrow",value:function(e){this.setState({redirect:!0}),this.props.refreshPage()}},{key:"handleClickDelete",value:function(e){this.props.delete(this.props.productID),this.setState({redirect:!0}),this.props.refreshPage()}},{key:"handleClickSave",value:function(e){this.state.product_name&&this.state.product_amount&&this.state.product_expireDate&&this.state.product_purchaseDate?(0===this.props.productID&&(this.state.product_purchaseDate=this.formatPurchaseDate(this.state.product_purchaseDate),this.props.add(this.state.product_name,this.state.product_amount,this.state.product_purchaseDate,this.state.product_expireDate,this.state.product_img_url)),this.setState({redirect:!0}),this.props.refreshPage()):this.setState({openSnackbar:!0,message:"Bitte\xa0die Pflichtfelder ausf\xfcllen."})}},{key:"formatPurchaseDate",value:function(e){return new Date(e).toISOString().split("T")[0]}},{key:"handleDateChange",value:function(e,t){this.setDate(e,t)}},{key:"setDate",value:function(){var e=Object(l.a)(s.a.mark((function e(t,a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.toISOString().split("T")[0],e.next=3,this.setState(Object(ae.a)({},a,n));case 3:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"handleInput",value:function(e){var t=e.target.value;this.setState(Object(ne.a)(Object(ne.a)({},this.state),{},Object(ae.a)({},e.target.id,t)))}},{key:"handleClickUpdate",value:function(e){var t={name:this.state.product_name,amount:this.state.product_amount,purchaseDate:this.state.product_purchaseDate,expireDate:this.state.product_expireDate};this.props.productUpdate(this.props.productID,t),this.setState({openSnackbar:!0,message:"Daten wurden ge\xe4ndert!"})}},{key:"onDetected",value:function(e){this.setState({barcode:e,camera:!1}),this.getProductInformationByBarcode(this.state.barcode)}},{key:"onStartScan",value:function(e){this.setState({camera:!this.state.camera})}},{key:"render",value:function(){var e=this,t=this.props.classes;return this.state.redirect?r.a.createElement(J.a,{push:!0,to:"/Xpire"}):r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.toolbar}),r.a.createElement("div",{className:t.img,style:this.state.imgStyle},r.a.createElement("div",{className:t.imgOverlay},r.a.createElement(ie.a,{edge:"end",className:t.arrowIcon,onClick:this.handleClickArrow}),0!==this.props.productID&&r.a.createElement(se.a,{edge:"end",className:t.deleteIcon,onClick:this.handleClickDelete}))),r.a.createElement("div",{className:t.formContainer},r.a.createElement("form",{className:t.form},0===this.props.productID&&r.a.createElement("div",null,r.a.createElement(re.a,{id:"barcode",label:"Barcode",margin:"dense",variant:"outlined",value:this.state.barcode,className:t.textField,onChange:this.handleInput,onKeyDown:this.onSearchKeyDown,InputProps:{endAdornment:r.a.createElement(pe.a,{position:"end"},r.a.createElement(de.a,{onClick:this.onStartScan}))}}),r.a.createElement("div",{className:"container"},this.state.camera&&r.a.createElement(ke,{onDetected:this.onDetected,cameraStatus:this.state.camera}))),r.a.createElement(re.a,{required:!0,id:"product_name",label:"Titel",margin:"dense",variant:"outlined",value:this.state.product_name,className:t.textField,onChange:this.handleInput}),r.a.createElement("br",null),r.a.createElement(Ee.a,{variant:"outlined",margin:"dense",required:!0,className:t.formControl},r.a.createElement(ye.a,{htmlFor:"product_amount"},"Anzahl"),r.a.createElement(De.a,{native:!0,value:this.state.product_amount,onChange:this.handleInput,label:"Anzahl",inputProps:{name:"Anzahl",id:"product_amount"}},r.a.createElement("option",{"aria-label":"None",value:1},"1"),r.a.createElement("option",{value:2},"2"),r.a.createElement("option",{value:3},"3"),r.a.createElement("option",{value:4},"4"),r.a.createElement("option",{value:5},"5"),r.a.createElement("option",{value:6},"6"),r.a.createElement("option",{value:7},"7"))),r.a.createElement("br",null),r.a.createElement(me.a,{utils:fe.a},r.a.createElement(he.a,{required:!0,id:"product_purchaseDate",label:"Eingekauft am",margin:"dense",inputVariant:"outlined",format:"dd.MM.yyyy",value:this.state.product_purchaseDate,className:t.datePicker,onChange:function(t){return e.handleDateChange(t,"product_purchaseDate")}})),r.a.createElement("br",null),r.a.createElement(me.a,{utils:fe.a},r.a.createElement(he.a,{required:!0,id:"product_expireDate",label:"G\xfcltig bis",margin:"dense",inputVariant:"outlined",format:"dd.MM.yyyy",value:this.state.product_expireDate,className:t.datePicker,onChange:function(t){return e.handleDateChange(t,"product_expireDate")}})),r.a.createElement("br",null),0===this.props.productID&&r.a.createElement(I.a,{id:"SaveButton",variant:"contained",color:"primary",className:t.submitButton,onClick:this.handleClickSave},"Speichern"),0!==this.props.productID&&r.a.createElement(I.a,{id:"UpdateButton",variant:"contained",color:"primary",className:t.submitButton,onClick:this.handleClickUpdate},"\xc4ndern"))),r.a.createElement(le.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:this.state.openSnackbar,autoHideDuration:6e3,onClose:this.handleCloseSnackbar,message:this.state.message,action:r.a.createElement(Y.a,{size:"small","aria-label":"close",color:"inherit",onClick:this.handleCloseSnackbar},r.a.createElement($.a,{fontSize:"small"}))}))}}]),a}(r.a.Component),Se=Object(q.a)((function(e){return{toolbar:e.mixins.toolbar,imgOverlay:{height:"100%",backgroundColor:"hsla(0, 0%, 0%, 0.23)"},arrowIcon:{marginLeft:"16px",marginTop:"10px",color:"white",position:"fixed"},deleteIcon:{marginRight:"16px",marginTop:"10px",color:"white",position:"fixed",right:"0"},datePicker:{width:"100%"},formContainer:{},form:{padding:"1.6rem"},formControl:{width:"100%"},textField:{width:"100%"},submitButton:{float:"right",marginTop:"1rem"},typography:{padding:e.spacing(2)}}}))(we),xe=a(210),Oe=a(119),Ce=a.n(Oe),je=a(87),Pe=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(je.b,{to:"/Xpire/Product"},r.a.createElement(xe.a,{color:"primary","aria-label":"add",className:e.fab},r.a.createElement(Ce.a,null)))}}]),a}(r.a.Component),_e=Object(q.a)((function(e){return{fab:{position:"fixed",bottom:e.spacing(4),right:e.spacing(4)}}}))(Pe),Ie=(a(149),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_().then((function(e){n.setState({products:e})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},n.deleteProduct=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.addProductToList=function(){var e=Object(l.a)(s.a.mark((function e(t,a,r,o,i){var c,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t,a,r,o,i).then((function(e){n.setState({products:e}),c=e[e.length-1].id}));case 2:console.log("Added Product with ID: "+c),(l=new Date(o)).setDate(l.getDate()-1),l.setHours(9,0,0,0),n.scheduleNotification(t+" l\xe4uft morgen ab!","expireAlert:"+c,l.getTime()),console.log("scheduled for "+l);case 8:case"end":return e.stop()}}),e)})));return function(t,a,n,r,o){return e.apply(this,arguments)}}(),n.updateProduct=function(){var e=Object(l.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t,a).then((function(e){n.setState({products:e})}));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n.onNotificationClick=function(e){console.log("notification clicked"),console.log(e),window.open("http://www.mozilla.org","_blank")},n.scheduleNotification=function(e,t,a){"granted"===Notification.permission?navigator.serviceWorker.ready.then((function(n){"showTrigger"in Notification.prototype?(console.log("Notification Trigger feature supported"),n.showNotification("Xpire - manage your fridge and get rich",{body:e,tag:t,icon:"/Xpire/static/media/logo.3fb9c233.svg",actions:[{action:"show",title:"Anzeigen"},{action:"remind",title:"Erinnern"}],showTrigger:new TimestampTrigger(a)})):(console.log("Notification Triggers not supported"),n.showNotification("Xpire - manage your fridge and get rich",{body:"Your Browser doesnt support scheduled notifications",tag:"no-support",icon:"logo.png"}))})).then(console.log("Notification sent")).catch((function(e){return console.log(e)})):n.displayAlert("Please allow Notifications or exit Incognito Mode")},n.displayNotification=function(){console.log("sending Notification"),n.scheduleNotification("a product is about to expire","test1",Date.now()+2e3),n.scheduleNotification("another schimmel","test2",Date.now()+1e4)},n.displayAlert=function(e){n.productListComponentRef.current.setState({alertOpen:!0,alertText:e})},n.productListComponentRef=r.a.createRef(),n.state={products:[],productID:0,open:!0},n.showProduct=n.showProduct.bind(Object(p.a)(n)),n.deleteProduct=n.deleteProduct.bind(Object(p.a)(n)),n.addProductToList=n.addProductToList.bind(Object(p.a)(n)),n.updateProduct=n.updateProduct.bind(Object(p.a)(n)),n.refreshPage=n.refreshPage.bind(Object(p.a)(n)),n.componentDidMount=n.componentDidMount.bind(Object(p.a)(n)),n}return Object(d.a)(a,[{key:"refreshPage",value:function(){this.setState({productID:0}),this.componentDidMount()}},{key:"showProduct",value:function(e){this.setState({productID:e})}},{key:"render",value:function(){var e=this;return r.a.createElement(je.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(J.b,{path:"/Xpire",render:function(t){return r.a.createElement(X,{refreshPage:e.refreshPage})}}),r.a.createElement(J.b,{exact:!0,path:"/Xpire",render:function(t){return r.a.createElement(te,{ref:e.productListComponentRef,products:e.state.products,showProduct:e.showProduct,notification:e.displayNotification})}}),r.a.createElement(J.b,{exact:!0,path:"/Xpire",render:function(e){return r.a.createElement(_e,null)}}),r.a.createElement(J.b,{exact:!0,path:"/Xpire/Product",render:function(t){return r.a.createElement(Se,{productID:e.state.productID,products:e.state.products,refreshPage:e.refreshPage,add:e.addProductToList,delete:e.deleteProduct,productUpdate:e.updateProduct})}})))}}]),a}(r.a.Component)),Ne=a(120),Be=a(211),Ae=Object(Ne.a)({palette:{primary:{main:"#C9DEBC"},secondary:{main:"#F96523"}}});if(i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Be.a,{theme:Ae},r.a.createElement(Ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&"Notification"in window)navigator.serviceWorker.register("service-worker.js").then((function(e){console.log("service worker registered"),Notification.requestPermission((function(e){"granted"===e?console.log("Granted"):console.log(e)}))})).catch((function(e){console.log(e)}));else{var Te=document.createElement("a");Te.href="http://www.chromium.org/blink/serviceworker/service-worker-faq",Te.textContent="unavailable",document.querySelector("#status").appendChild(Te)}}},[[136,1,2]]]);
//# sourceMappingURL=main.5c00edde.chunk.js.map