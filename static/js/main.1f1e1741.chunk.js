(this.webpackJsonpxpire=this.webpackJsonpxpire||[]).push([[0],{110:function(e,t,a){e.exports=a.p+"static/media/logo.3fb9c233.svg"},115:function(e){e.exports=JSON.parse('{"inputStream":{"type":"LiveStream","constraints":{"width":{"min":450},"height":{"min":300},"facingMode":"environment","aspectRatio":{"min":1,"max":2}}},"locator":{"patchSize":"medium","halfSample":true},"numOfWorkers":2,"frequency":10,"decoder":{"readers":["ean_reader"]},"locate":true}')},138:function(e,t,a){e.exports=a(151)},143:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(12),i=a.n(o),c=(a(143),a(15)),s=a.n(c),l=a(26),u=a(44),d=a(45),p=a(14),m=a(48),h=a(46),f=a(121),g=a(185),b=a(189),v=a(191),k=a(55),E=a(110),y=a.n(E),w=a(114),D=a.n(w),O=a(96),C=new O.a("Xpire");C.version(1).stores({products:"++id,name,amount,purchaseDate,expireDate, img_url"});var x=function(){var e=Object(l.a)(s.a.mark((function e(t,a,r,n){var o,i=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=i.length>4&&void 0!==i[4]?i[4]:void 0,e.next=3,C.products.add({name:t,amount:a,purchaseDate:r,expireDate:n,img_url:o});case 3:return e.next=5,C.products.toArray().then((function(e){return e}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,a,r,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,C.products.update(t,a).then((function(e){return e||console.log("Nothing was updated"),_()}));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),j=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.table(t).clear().catch((function(){console.log("Error occured on table clear")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.products.where("id").equals(t).delete();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.products.toArray().then((function(e){return e})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=a(196),I=a(213),T=a(195),B=a(193),A=a(194),z=a(192),M=a(188),R=Object(g.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"center"},logo:{maxWidth:"2.5rem"}}})),L=n.a.forwardRef((function(e,t){return n.a.createElement(M.a,Object.assign({direction:"up",ref:t},e))}));function X(e){var t=R(),a=n.a.useState(!1),r=Object(f.a)(a,2),o=r[0],i=r[1];return n.a.createElement(b.a,{position:"fixed"},n.a.createElement(v.a,null,n.a.createElement("img",{src:y.a,alt:"logo",className:t.logo}),n.a.createElement(k.a,{variant:"h6",className:t.title},"Xpire"),n.a.createElement("div",null,n.a.createElement(D.a,{fontSize:"large",onClick:function(){i(!0)}})),n.a.createElement(I.a,{open:o,TransitionComponent:L,keepMounted:!0,onClose:function(){return i(!1)},"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},n.a.createElement(z.a,{id:"alert-dialog-slide-title"},"Delete all Products?"),n.a.createElement(B.a,null,n.a.createElement(A.a,{id:"alert-dialog-slide-description"},"Are you sure you want to delete all of your products in Xpire? There's no turning back after that.")),n.a.createElement(T.a,null,n.a.createElement(N.a,{onClick:function(){return i(!1)},color:"primary"},"Cancel"),n.a.createElement(N.a,{onClick:function(){j("products"),i(!1),e.refreshPage()},color:"secondary"},"Delete all Products")))))}var q=a(7),W=a(199),F=a(200),U=a(202),G=a(201),J=a(215),H=a(16),V=a(89),K=a(197),Y=a(198),Q=a(212),Z=a(68),$=a.n(Z),ee=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).handleListItemClick=function(e){r.setState({redirect:!0}),r.props.showProduct(e)},r.statusColor=function(e){var t=(new Date(e)-new Date)/864e5;return t>3?"#C9DEBC":t>0?"#F4E132":"#F96523"},r.handleListItemClick=r.handleListItemClick.bind(Object(p.a)(r)),r.state={redirect:!1,alertOpen:!1,alertText:""},r}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return this.state.redirect?n.a.createElement(H.a,{push:!0,to:"/Xpire/Product"}):n.a.createElement("div",{className:t.root},n.a.createElement("div",{className:t.toolbar}),n.a.createElement(K.a,{in:this.state.alertOpen},n.a.createElement(Q.a,{severity:"error",action:n.a.createElement(Y.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){e.setState({alertOpen:!1})}},n.a.createElement($.a,{fontSize:"inherit"}))},this.state.alertText)),n.a.createElement(W.a,{dense:!0,className:t.list},this.props.products?this.props.products.map((function(a){return n.a.createElement("div",{className:t.listitemframe,key:a.id},n.a.createElement(F.a,{className:t.listitem,button:!0,onClick:function(){return e.handleListItemClick(a.id)}},n.a.createElement(G.a,null,n.a.createElement(J.a,{alt:"Avatar n\xb0".concat(a+1),src:a.img_url})),n.a.createElement(U.a,{primary:"".concat(a.name," (").concat(a.amount,")"),secondary:n.a.createElement("div",null,n.a.createElement("div",null,"G\xfcltig bis: ",Object(V.a)(new Date(a.expireDate),"dd.MM.yyyy")),n.a.createElement("div",{style:{height:"0.5rem",width:"100%",marginTop:"0.3rem",backgroundColor:e.statusColor(a.expireDate)}}))})))})):null))}}]),a}(n.a.Component),te=Object(q.a)((function(e){return{toolbar:e.mixins.toolbar,list:{padding:"1rem"},listitemframe:{margin:"0.6rem"},listitem:{borderWidth:"0.1rem",borderStyle:"solid",borderRadius:"0.5rem",borderColor:e.palette.primary.main}}}))(ee),ae=a(70),re=a(54),ne=a(216),oe=a(116),ie=a.n(oe),ce=a(117),se=a.n(ce),le=a(203),ue=a(214),de=a(118),pe=a.n(de),me=a(207),he=a(23),fe=a(210),ge=a(99),be=a(115),ve=a(35),ke=a.n(ve),Ee=function(e){var t=e.onDetected;Object(r.useEffect)((function(){ke.a.init(be,(function(e){return e&&console.log(e,"error msg"),ke.a.start(),function(){ke.a.stop()}})),ke.a.onProcessed((function(e){var t=ke.a.canvas.ctx.overlay,a=ke.a.canvas.dom.overlay;e&&(e.boxes&&(t.clearRect(0,0,Number(a.getAttribute("width")),Number(a.getAttribute("height"))),e.boxes.filter((function(t){return t!==e.box})).forEach((function(e){ke.a.ImageDebug.drawPath(e,{x:0,y:1},t,{color:"green",lineWidth:2})}))),e.box&&ke.a.ImageDebug.drawPath(e.box,{x:0,y:1},t,{color:"#00F",lineWidth:2}),e.codeResult&&e.codeResult.code&&ke.a.ImageDebug.drawPath(e.line,{x:"x",y:"y"},t,{color:"red",lineWidth:3}))})),ke.a.onDetected(a)}),[]);var a=function(e){t(e.codeResult.code)};return n.a.createElement("div",{id:"interactive",className:"viewport"})},ye=a(218),we=a(206),De=a(211),Oe=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).componentDidMount=function(){if(0!==r.props.productID){var e=r.props.products.find((function(e){return e.id===r.props.productID}));r.setState({product_name:e.name,product_amount:e.amount,product_purchaseDate:e.purchaseDate,product_expireDate:e.expireDate,product_img_url:e.img_url,imgStyle:Object(re.a)(Object(re.a)({},r.state.imgStyle),{},{backgroundImage:"url("+e.img_url+")"})})}},r.handleCloseSnackbar=function(e,t){"clickaway"!==t&&r.setState({openSnackbar:!1})},r.formatPurchaseDate=r.formatPurchaseDate.bind(Object(p.a)(r)),r.handleClickArrow=r.handleClickArrow.bind(Object(p.a)(r)),r.handleClickDelete=r.handleClickDelete.bind(Object(p.a)(r)),r.handleClickSave=r.handleClickSave.bind(Object(p.a)(r)),r.handleDateChange=r.handleDateChange.bind(Object(p.a)(r)),r.handleInput=r.handleInput.bind(Object(p.a)(r)),r.getProductInformationByBarcode=r.getProductInformationByBarcode.bind(Object(p.a)(r)),r.showErrorPopOver=r.showErrorPopOver.bind(Object(p.a)(r)),r.handleClose=r.handleClose.bind(Object(p.a)(r)),r.handleCloseSnackbar=r.handleCloseSnackbar.bind(Object(p.a)(r)),r.setBackgroundImg=r.setBackgroundImg.bind(Object(p.a)(r)),r.setDate=r.setDate.bind(Object(p.a)(r)),r.handleClickUpdate=r.handleClickUpdate.bind(Object(p.a)(r)),r.onDetected=r.onDetected.bind(Object(p.a)(r)),r.onStartScan=r.onStartScan.bind(Object(p.a)(r)),r.state={redirect:!1,product_name:"",product_amount:"",product_purchaseDate:[new Date],product_expireDate:null,product_img_url:"",imgStyle:{height:"13rem",backgroundImage:"url("+r.props.products.img_url+")",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"auto 100%"},barcode:"",anchorEl:{},open:!1,openSnackbar:!1,id:"simple-popover",simple_popover_message:"",result:null,camera:!1,message:""},r}return Object(d.a)(a,[{key:"setBackgroundImg",value:function(e){this.setState({imgStyle:Object(re.a)(Object(re.a)({},this.state.imgStyle),{},{backgroundImage:"url("+e+")"}),product_img_url:e})}},{key:"showErrorPopOver",value:function(e,t){this.setState({open:!0,anchorEl:t,simple_popover_message:e})}},{key:"handleClose",value:function(){this.setState({anchorEl:null,open:!1})}},{key:"getProductInformationByBarcode",value:function(e){var t=this;if(13===e.keyCode||9===e.keyCode){var a=this.state.barcode;a?13===a.length||8===a.length?fetch("https://world.openfoodfacts.org/api/v0/product/"+a+".json").then((function(e){return e.json()})).then((function(a){var r=a.product;1===a.status?r.product_name?(t.setState({product_name:r.product_name}),t.setBackgroundImg(r.image_url)):t.showErrorPopOver("Produktname nicht gefunden!",e.currentTarget):t.showErrorPopOver("Das Produkt existiert nicht!",e.currentTarget)}),(function(a){t.showErrorPopOver("Pr\xfcfe deine Internetverbindung!",e.currentTarget)})):this.showErrorPopOver("Barcode nicht korrekt!",e.currentTarget):this.showErrorPopOver("Bitte Barcode eingeben!",e.currentTarget)}}},{key:"handleClickArrow",value:function(e){this.setState({redirect:!0}),this.props.refreshPage()}},{key:"handleClickDelete",value:function(e){this.props.delete(this.props.productID),this.setState({redirect:!0}),this.props.refreshPage()}},{key:"handleClickSave",value:function(e){this.state.product_name&&this.state.product_amount&&this.state.product_expireDate&&this.state.product_purchaseDate?(0===this.props.productID&&(this.state.product_purchaseDate=this.formatPurchaseDate(this.state.product_purchaseDate),this.props.add(this.state.product_name,this.state.product_amount,this.state.product_purchaseDate,this.state.product_expireDate,this.state.product_img_url)),this.setState({redirect:!0}),this.props.refreshPage()):this.setState({openSnackbar:!0,message:"Bitte\xa0die Pflichtfelder ausf\xfcllen."})}},{key:"formatPurchaseDate",value:function(e){return new Date(e).toISOString().split("T")[0]}},{key:"handleDateChange",value:function(e,t){this.setDate(e,t)}},{key:"setDate",value:function(){var e=Object(l.a)(s.a.mark((function e(t,a){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.toISOString().split("T")[0],e.next=3,this.setState(Object(ae.a)({},a,r));case 3:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"handleInput",value:function(e){var t=e.target.value;this.setState(Object(re.a)(Object(re.a)({},this.state),{},Object(ae.a)({},e.target.id,t)))}},{key:"handleClickUpdate",value:function(e){var t={name:this.state.product_name,amount:this.state.product_amount,purchaseDate:this.state.product_purchaseDate,expireDate:this.state.product_expireDate};this.props.productUpdate(this.props.productID,t),this.setState({openSnackbar:!0,message:"Daten wurden ge\xe4ndert!"})}},{key:"onDetected",value:function(e){this.setState({barcode:e,camera:!1})}},{key:"onStartScan",value:function(e){this.setState({camera:!this.state.camera})}},{key:"render",value:function(){var e=this,t=this.props.classes;return this.state.redirect?n.a.createElement(H.a,{push:!0,to:"/Xpire"}):n.a.createElement("div",{className:t.root},n.a.createElement("div",{className:t.toolbar}),n.a.createElement("div",{className:t.img,style:this.state.imgStyle},n.a.createElement("div",{className:t.imgOverlay},n.a.createElement(ie.a,{edge:"end",className:t.arrowIcon,onClick:this.handleClickArrow}),0!==this.props.productID&&n.a.createElement(se.a,{edge:"end",className:t.deleteIcon,onClick:this.handleClickDelete}))),n.a.createElement(le.a,{id:this.state.id,open:this.state.open,anchorEl:this.state.anchorEl,onClose:this.handleClose,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},n.a.createElement(k.a,{className:t.typography},this.state.simple_popover_message)),n.a.createElement("div",{className:t.formContainer},n.a.createElement("form",{className:t.form},0===this.props.productID&&n.a.createElement("div",null,n.a.createElement(ne.a,{id:"barcode",label:"Barcode",margin:"dense",variant:"outlined",value:this.state.barcode,className:t.textField,onChange:this.handleInput,onKeyDown:this.getProductInformationByBarcode,InputProps:{endAdornment:n.a.createElement(me.a,{position:"end"},n.a.createElement(pe.a,{onClick:this.onStartScan}))}}),n.a.createElement("div",{className:"container"},this.state.camera&&n.a.createElement(Ee,{onDetected:this.onDetected}))),n.a.createElement(ne.a,{required:!0,id:"product_name",label:"Titel",margin:"dense",variant:"outlined",value:this.state.product_name,className:t.textField,onChange:this.handleInput}),n.a.createElement("br",null),n.a.createElement(we.a,{variant:"outlined",margin:"dense",required:!0,className:t.formControl},n.a.createElement(ye.a,{htmlFor:"product_amount"},"Anzahl"),n.a.createElement(De.a,{native:!0,value:this.state.product_amount,onChange:this.handleInput,label:"Anzahl",inputProps:{name:"Anzahl",id:"product_amount"}},n.a.createElement("option",{"aria-label":"None",value:"1"},"1"),n.a.createElement("option",{value:2},"2"),n.a.createElement("option",{value:3},"3"),n.a.createElement("option",{value:4},"4"),n.a.createElement("option",{value:5},"5"),n.a.createElement("option",{value:6},"6"),n.a.createElement("option",{value:7},"7"))),n.a.createElement("br",null),n.a.createElement(he.a,{utils:ge.a},n.a.createElement(fe.a,{required:!0,id:"product_purchaseDate",label:"Eingekauft am",margin:"dense",inputVariant:"outlined",format:"dd.MM.yyyy",value:this.state.product_purchaseDate,className:t.datePicker,onChange:function(t){return e.handleDateChange(t,"product_purchaseDate")}})),n.a.createElement("br",null),n.a.createElement(he.a,{utils:ge.a},n.a.createElement(fe.a,{required:!0,id:"product_expireDate",label:"G\xfcltig bis",margin:"dense",inputVariant:"outlined",format:"dd.MM.yyyy",value:this.state.product_expireDate,className:t.datePicker,onChange:function(t){return e.handleDateChange(t,"product_expireDate")}})),n.a.createElement("br",null),0===this.props.productID&&n.a.createElement(N.a,{id:"SaveButton",variant:"contained",color:"primary",className:t.submitButton,onClick:this.handleClickSave},"Speichern"),0!==this.props.productID&&n.a.createElement(N.a,{id:"UpdateButton",variant:"contained",color:"primary",className:t.submitButton,onClick:this.handleClickUpdate},"\xc4ndern"))),n.a.createElement(ue.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:this.state.openSnackbar,autoHideDuration:6e3,onClose:this.handleCloseSnackbar,message:this.state.message,action:n.a.createElement(Y.a,{size:"small","aria-label":"close",color:"inherit",onClick:this.handleCloseSnackbar},n.a.createElement($.a,{fontSize:"small"}))}))}}]),a}(n.a.Component),Ce=Object(q.a)((function(e){return{toolbar:e.mixins.toolbar,imgOverlay:{height:"100%",backgroundColor:"hsla(0, 0%, 0%, 0.23)"},arrowIcon:{marginLeft:"16px",marginTop:"10px",color:"white",position:"fixed"},deleteIcon:{marginRight:"16px",marginTop:"10px",color:"white",position:"fixed",right:"0"},datePicker:{width:"100%"},formContainer:{},form:{padding:"1.6rem"},formControl:{width:"100%"},textField:{width:"100%"},submitButton:{float:"right",marginTop:"1rem"},typography:{padding:e.spacing(2)}}}))(Oe),xe=a(208),Se=a(119),je=a.n(Se),Pe=a(87),_e=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.classes;return n.a.createElement(Pe.b,{to:"/Xpire/Product"},n.a.createElement(xe.a,{color:"primary","aria-label":"add",className:e.fab},n.a.createElement(je.a,null)))}}]),a}(n.a.Component),Ne=Object(q.a)((function(e){return{fab:{position:"fixed",bottom:e.spacing(4),right:e.spacing(4)}}}))(_e),Ie=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).componentDidMount=function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_().then((function(e){r.setState({products:e})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},r.deleteProduct=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.addProductToList=function(){var e=Object(l.a)(s.a.mark((function e(t,a,n,o,i){var c,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t,a,n,o,i).then((function(e){r.setState({products:e}),c=e[e.length-1].id}));case 2:console.log("Added Product with ID: "+c),(l=new Date(o)).setDate(l.getDate()-1),l.setHours(9,0,0,0),r.scheduleNotification(t+" l\xe4uft morgen ab!","expireAlert:"+c,l.getTime()),console.log("scheduled for "+l);case 8:case"end":return e.stop()}}),e)})));return function(t,a,r,n,o){return e.apply(this,arguments)}}(),r.updateProduct=function(){var e=Object(l.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t,a).then((function(e){r.setState({products:e})}));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),r.onNotificationClick=function(e){console.log("notification clicked"),console.log(e),window.open("http://www.mozilla.org","_blank")},r.scheduleNotification=function(e,t,a){"granted"===Notification.permission?navigator.serviceWorker.ready.then((function(r){"showTrigger"in Notification.prototype?(console.log("Notification Trigger feature supported"),r.showNotification("Xpire - manage your fridge and get rich",{body:e,tag:t,icon:"/Xpire/static/media/logo.3fb9c233.svg",actions:[{action:"show",title:"Anzeigen"},{action:"remind",title:"Erinnern"}],showTrigger:new TimestampTrigger(a)})):(console.log("Notification Triggers not supported"),r.showNotification("Xpire - manage your fridge and get rich",{body:"Your Browser doesnt support scheduled notifications",tag:"no-support",icon:"logo.png"}))})).then(console.log("Notification sent")).catch((function(e){return console.log(e)})):r.displayAlert("Please allow Notifications or exit Incognito Mode")},r.displayNotification=function(){console.log("sending Notification"),r.scheduleNotification("a product is about to expire","test1",Date.now()+2e3),r.scheduleNotification("another schimmel","test2",Date.now()+1e4)},r.displayAlert=function(e){r.productListComponentRef.current.setState({alertOpen:!0,alertText:e})},r.productListComponentRef=n.a.createRef(),r.state={products:[],productID:0,open:!0},r.showProduct=r.showProduct.bind(Object(p.a)(r)),r.deleteProduct=r.deleteProduct.bind(Object(p.a)(r)),r.addProductToList=r.addProductToList.bind(Object(p.a)(r)),r.updateProduct=r.updateProduct.bind(Object(p.a)(r)),r.refreshPage=r.refreshPage.bind(Object(p.a)(r)),r.componentDidMount=r.componentDidMount.bind(Object(p.a)(r)),r}return Object(d.a)(a,[{key:"refreshPage",value:function(){this.setState({productID:0}),this.componentDidMount()}},{key:"showProduct",value:function(e){this.setState({productID:e})}},{key:"render",value:function(){var e=this;return n.a.createElement(Pe.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(H.b,{path:"/Xpire",render:function(t){return n.a.createElement(X,{refreshPage:e.refreshPage})}}),n.a.createElement(H.b,{exact:!0,path:"/Xpire",render:function(t){return n.a.createElement(te,{ref:e.productListComponentRef,products:e.state.products,showProduct:e.showProduct,notification:e.displayNotification})}}),n.a.createElement(H.b,{exact:!0,path:"/Xpire",render:function(e){return n.a.createElement(Ne,null)}}),n.a.createElement(H.b,{exact:!0,path:"/Xpire/Product",render:function(t){return n.a.createElement(Ce,{productID:e.state.productID,products:e.state.products,refreshPage:e.refreshPage,add:e.addProductToList,delete:e.deleteProduct,productUpdate:e.updateProduct})}})))}}]),a}(n.a.Component),Te=a(120),Be=a(209),Ae=Object(Te.a)({palette:{primary:{main:"#C9DEBC"},secondary:{main:"#F96523"}}});if(i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Be.a,{theme:Ae},n.a.createElement(Ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&"Notification"in window)navigator.serviceWorker.register("service-worker.js").then((function(e){console.log("service worker registered"),Notification.requestPermission((function(e){"granted"===e?console.log("Granted"):console.log(e)}))})).catch((function(e){console.log(e)}));else{var ze=document.createElement("a");ze.href="http://www.chromium.org/blink/serviceworker/service-worker-faq",ze.textContent="unavailable",document.querySelector("#status").appendChild(ze)}}},[[138,1,2]]]);
//# sourceMappingURL=main.1f1e1741.chunk.js.map