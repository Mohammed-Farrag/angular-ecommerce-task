"use strict";(self.webpackChunkapp1_for_cv=self.webpackChunkapp1_for_cv||[]).push([[880],{4880:(dt,T,s)=>{s.r(T),s.d(T,{ProductsModule:()=>ut});var a=s(6814),C=s(6472),p=s(5692),t=s(5879),A=s(8323),g=s(8776),L=s(70),m=s(3176),v=s(6311),h=s(2296),u=s(5195),Z=s(617);let w=(()=>{class n{constructor(){this.onSortChanges=new t.vpe,this.onLimitChanges=new t.vpe,this.sort="desc",this.itemShowCount=12,this.onColsCountChange=new t.vpe}onSortMenu(o){this.sort=o,this.onSortChanges.emit(o)}onItemsUpdated(o){this.itemShowCount=o,this.onLimitChanges.emit(o)}onColsUpdated(o){this.onColsCountChange.emit(o)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-products-filter"]],outputs:{onSortChanges:"onSortChanges",onLimitChanges:"onLimitChanges",onColsCountChange:"onColsCountChange"},decls:23,vars:2,consts:[[1,"mb-4","px-5","py-5"],[1,"flex","justify-between","items-center"],[1,""],["mat-button","",3,"matMenuTriggerFor"],["sortMenu","matMenu"],["mat-menu-item","",3,"click"],[1,"flex","items-center"],[3,"click"]],template:function(o,e){if(1&o&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"div",2)(3,"button",3),t._uU(4),t.TgZ(5,"mat-icon"),t._uU(6,"expand_more "),t.qZA()(),t.TgZ(7,"mat-menu",null,4)(9,"button",5),t.NdJ("click",function(){return e.onSortMenu("desc")}),t._uU(10,"Desc"),t.qZA(),t.TgZ(11,"button",5),t.NdJ("click",function(){return e.onSortMenu("asc")}),t._uU(12,"Asc"),t.qZA()()(),t.TgZ(13,"div",6)(14,"button",7),t.NdJ("click",function(){return e.onColsUpdated(1)}),t.TgZ(15,"mat-icon"),t._uU(16,"view_list"),t.qZA()(),t.TgZ(17,"button",7),t.NdJ("click",function(){return e.onColsUpdated(3)}),t.TgZ(18,"mat-icon"),t._uU(19,"view_module"),t.qZA()(),t.TgZ(20,"button",7),t.NdJ("click",function(){return e.onColsUpdated(4)}),t.TgZ(21,"mat-icon"),t._uU(22,"view_comfy"),t.qZA()()()()()),2&o){const r=t.MAs(8);t.xp6(3),t.Q6J("matMenuTriggerFor",r),t.xp6(1),t.hij(" Sort By ",e.sort," ")}},dependencies:[v.VK,v.OP,v.p6,h.lW,u.a8,Z.Hw],encapsulation:2}),n})();var U=s(186);function H(n,i){if(1&n&&(t.TgZ(0,"p",16),t._uU(1),t.qZA()),2&n){const o=t.oxw(2);t.xp6(1),t.Oqu(o.product.description)}}const I=function(n){return{"text-center":n}},Q=function(n){return{"flex text-center ":n}},O=function(n,i){return{"h-[200px]":n,"h-[360px]":i}},N=function(n){return{"px-8 flex flex-col justify-center":n}},W=function(n){return{"text-center font-bold text-2xl":n}},q=function(n){return["/products",n]},Y=function(n){return{"cursor-not-allowed":n}};function E(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"mat-card",2)(1,"mat-card-content")(2,"div",3),t._UZ(3,"img",4),t.TgZ(4,"div",5)(5,"div")(6,"p",6),t._uU(7),t.qZA(),t.TgZ(8,"p",7),t._uU(9),t.qZA(),t.YNc(10,H,2,1,"p",8),t.qZA(),t.TgZ(11,"div",9)(12,"span",10),t._uU(13),t.ALo(14,"currency"),t.qZA(),t.TgZ(15,"a",11),t._uU(16," product details"),t.qZA(),t.TgZ(17,"div",12)(18,"button",13),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.onAddToCart())}),t.TgZ(19,"mat-icon"),t._uU(20,"shopping_cart"),t.qZA()(),t.TgZ(21,"button",14)(22,"mat-icon",15),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.onAddToFav(r.product))}),t._uU(23,"favorite"),t.qZA()()()()()()()()}if(2&n){const o=t.oxw();t.Q6J("ngClass",t.VKq(16,I,!o.fullWidthMode)),t.xp6(2),t.Q6J("ngClass",t.VKq(18,Q,o.fullWidthMode)),t.xp6(1),t.Q6J("ngClass",t.WLB(20,O,!o.fullWidthMode,o.fullWidthMode))("src",o.product.image,t.LSH),t.xp6(1),t.Q6J("ngClass",t.VKq(23,N,o.fullWidthMode)),t.xp6(2),t.Q6J("ngClass",t.VKq(25,W,o.fullWidthMode)),t.xp6(1),t.hij(" ",o.product.category,""),t.xp6(2),t.Oqu(o.product.title),t.xp6(1),t.Q6J("ngIf",o.fullWidthMode),t.xp6(3),t.Oqu(t.lcZ(14,14,o.product.price)),t.xp6(2),t.Q6J("routerLink",t.VKq(27,q,o.product.id)),t.xp6(3),t.Q6J("ngClass",t.VKq(29,Y,!o.isAuth))("disabled",!o.isAuth),t.xp6(4),t.Q6J("color",o.product.isFav?"warn":"")}}function j(n,i){1&n&&(t.TgZ(0,"div",17),t._uU(1," loader\n"),t.qZA())}let P=(()=>{class n{constructor(o,e){this.ProductService=o,this.authService=e,this.fullWidthMode=!1,this.onAddToCartChange=new t.vpe,this.isFav=!1,this.authService.isAuth.subscribe(r=>this.isAuth=r)}onAddToCart(){this.onAddToCartChange.emit(this.product)}ngOnInit(){}onAddToFav(o){this.ProductService.addToFav(o),this.isFav=!this.isFav}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(g.M),t.Y36(U.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-product-box"]],inputs:{fullWidthMode:"fullWidthMode",product:"product"},outputs:{onAddToCartChange:"onAddToCartChange"},decls:2,vars:2,consts:[["class","p-2 mat-elevation-z2",3,"ngClass",4,"ngIf"],["class","my-5",4,"ngIf"],[1,"p-2","mat-elevation-z2",3,"ngClass"],[3,"ngClass"],[1,"mb-1","mx-auto","h-[200px]",3,"ngClass","src"],[1,"w-full",3,"ngClass"],[1,"text-lg",3,"ngClass"],[1,"truncate","px-5"],["class","leading-4  pt-5",4,"ngIf"],[1,"flex","justify-around","items-center","px-5","mt-7"],[1,"text-red-400"],["mat-raised-button","","color","primary",1,"max-w-[150px]","text-md",3,"routerLink"],[1,"actions","flex","justify-between","gap-2"],[1,"text-grey-500","order-1",3,"ngClass","disabled","click"],["color","warn",1,"text-grey-500"],[3,"color","click"],[1,"leading-4","pt-5"],[1,"my-5"]],template:function(o,e){1&o&&(t.YNc(0,E,24,31,"mat-card",0),t.YNc(1,j,2,0,"div",1)),2&o&&(t.Q6J("ngIf",e.product),t.xp6(1),t.Q6J("ngIf",!e.product))},dependencies:[a.mk,a.O5,p.rH,h.zs,u.a8,u.dn,Z.Hw,a.H9],encapsulation:2}),n})();function B(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"mat-grid-tile")(1,"app-product-box",5),t.NdJ("onAddToCartChange",function(r){t.CHM(o);const c=t.oxw();return t.KtG(c.onAddToCartChange(r))}),t.qZA()()}if(2&n){const o=i.$implicit,e=t.oxw();t.xp6(1),t.Q6J("fullWidthMode",1===e.cols)("product",o)}}const K=function(n){return{itemsPerPage:7,currentPage:n}},S={1:400,3:335,4:350};let z=(()=>{class n{constructor(o,e,r){this.cartService=o,this.ProductService=e,this.drawerSer=r,this.p=1,this.cols=3,this.rowHeight=S[this.cols],this.products=[],this.limit="12",this.sort="desc",this.drawerToggle=!1}ngOnInit(){this.getAllProducts(),this.drawerSer.open.subscribe(o=>this.drawerToggle=o),this.ProductService.products.subscribe(o=>this.products=o)}getAllProducts(){let o=this.ProductService.favourites.value;this.productsSubscription=this.ProductService.getAllProducts(this.sort,this.category).subscribe(e=>{let r=e.map(c=>(o.map(l=>{l.id==c.id&&(c.isFav=!0)}),c));this.products=r})}ngOnDestroy(){this.productsSubscription&&this.productsSubscription.unsubscribe()}onColsCountChange(o){this.cols=o,this.rowHeight=S[this.cols]}onShowCategory(o){this.category=o,this.getAllProducts()}onAddToCartChange(o){this.cartService.onAddToCart({product:o.image,name:o.title,price:o.price,quantity:1,id:o.id})}onSortChanges(o){this.sort=o,this.getAllProducts()}onLimitChanges(o){this.limit=o.toString(),this.getAllProducts()}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(A.N),t.Y36(g.M),t.Y36(L.z))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-product-list"]],decls:6,vars:9,consts:[[3,"onColsCountChange","onLimitChanges","onSortChanges"],[1,"flex","justify-center","py-5"],["previousLabel","prev",1,"pagination-controls",3,"directionLinks","pageChange"],["gutterSize","16",3,"cols","rowHeight"],[4,"ngFor","ngForOf"],[1,"w-full",3,"fullWidthMode","product","onAddToCartChange"]],template:function(o,e){1&o&&(t.TgZ(0,"app-products-filter",0),t.NdJ("onColsCountChange",function(c){return e.onColsCountChange(c)})("onLimitChanges",function(c){return e.onLimitChanges(c)})("onSortChanges",function(c){return e.onSortChanges(c)}),t.qZA(),t.TgZ(1,"div",1)(2,"pagination-controls",2),t.NdJ("pageChange",function(c){return e.p=c}),t.qZA()(),t.TgZ(3,"mat-grid-list",3),t.YNc(4,B,2,2,"mat-grid-tile",4),t.ALo(5,"paginate"),t.qZA()),2&o&&(t.xp6(2),t.Q6J("directionLinks",!0),t.xp6(1),t.Q6J("cols",e.cols)("rowHeight",e.rowHeight),t.xp6(1),t.Q6J("ngForOf",t.xi3(5,4,e.products,t.VKq(7,K,e.p))))},dependencies:[a.sg,C.LS,m.Il,m.DX,w,P,C._s],styles:[".pagination-controls[_ngcontent-%COMP%]     li.current{background-color:#00f!important;border-radius:7px}.pagination-controls[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous a:before, .pagination-controls[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous.disabled:before, .pagination-controls[_ngcontent-%COMP%]     .ngx-pagination .pagination-next a:after, .pagination-controls[_ngcontent-%COMP%]     .ngx-pagination .pagination-next.disabled:after{opacity:0}"]}),n})();const k=function(){return["/"]};let X=(()=>{class n{constructor(o,e){this.route=o,this.productService=e,this.product={}}ngOnInit(){let o=this.route.snapshot.paramMap.get("id")||"";this.productService.getSingleProduct(+o).subscribe(e=>this.product=e)}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(p.gz),t.Y36(g.M))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-single-product"]],decls:13,vars:5,consts:[[1,"mb-5"],[1,"h2","mb-5"],[1,"flex","justify-around","w-full"],[1,"p-2"],["mat-card-image","","width","200","height","500",3,"src"],[1,"text-center","flex","flex-col","gap-4","justify-between"],[1,"max-w-[500px]"],["mat-raised-button","","color","primary",3,"routerLink"]],template:function(o,e){1&o&&(t.TgZ(0,"mat-card")(1,"mat-card-header",0)(2,"div",1),t._uU(3),t.qZA()(),t.TgZ(4,"mat-card-content")(5,"div",2)(6,"div",3),t._UZ(7,"img",4),t.qZA(),t.TgZ(8,"div",5)(9,"p",6),t._uU(10),t.qZA(),t.TgZ(11,"button",7),t._uU(12," go to Home "),t.qZA()()()()()),2&o&&(t.xp6(3),t.hij(" ",e.product.title," "),t.xp6(4),t.Q6J("src",e.product.image,t.LSH),t.xp6(3),t.Oqu(e.product.description),t.xp6(1),t.Q6J("routerLink",t.DdM(4,k)))},dependencies:[p.rH,h.lW,u.a8,u.dn,u.dk,u.G2],encapsulation:2}),n})();var V=s(3920);function G(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"mat-grid-tile")(1,"app-product-box",4),t.NdJ("onAddToCartChange",function(r){t.CHM(o);const c=t.oxw(2);return t.KtG(c.onAddToCartChange(r))}),t.qZA()()}if(2&n){const o=i.$implicit;t.xp6(1),t.Q6J("product",o)}}function D(n,i){if(1&n&&(t.TgZ(0,"mat-grid-list",2),t.YNc(1,G,2,1,"mat-grid-tile",3),t.qZA()),2&n){const o=t.oxw();t.Q6J("cols",3),t.xp6(1),t.Q6J("ngForOf",o.favs)}}function $(n,i){1&n&&(t.TgZ(0,"div",5)(1,"p",6),t._uU(2," there is no Favs"),t.qZA(),t.TgZ(3,"button",7),t._uU(4," Start Shopping "),t.qZA()())}let R=(()=>{class n{constructor(o,e){this.ProductService=o,this.cartService=e,this.favs=[],this.ProductService.favourites.subscribe(r=>this.favs=r)}onAddToCartChange(o){this.cartService.onAddToCart({product:o.image,name:o.title,price:o.price,quantity:1,id:o.id})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(g.M),t.Y36(A.N))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-favourites"]],decls:3,vars:2,consts:[["gutterSize","16","rowHeight","300px",3,"cols",4,"ngIf","ngIfElse"],["noFavs",""],["gutterSize","16","rowHeight","300px",3,"cols"],[4,"ngFor","ngForOf"],[1,"w-full",3,"product","onAddToCartChange"],[1,"flex","justify-center","flex-col","gap-5","items-center","py-5"],[1,"text-center","w-full","text-2xl","mb-5","font-bold"],["mat-raised-button","","routerLink","/"]],template:function(o,e){if(1&o&&(t.YNc(0,D,2,2,"mat-grid-list",0),t.YNc(1,$,5,0,"ng-template",null,1,t.W1O)),2&o){const r=t.MAs(2);t.Q6J("ngIf",e.favs.length)("ngIfElse",r)}},dependencies:[a.sg,a.O5,p.rH,m.Il,m.DX,h.lW,P],encapsulation:2}),n})();var b=s(9862),tt=s(8504),ot=s(9360),y=s(8251),nt=s(2737),et=s(4825),rt=s(4829),st=s(6306);let ct=(()=>{class n{intercept(o,e){return e.handle(o).pipe(function it(n=1/0){let i;i=n&&"object"==typeof n?n:{count:n};const{count:o=1/0,delay:e,resetOnSuccess:r=!1}=i;return o<=0?nt.y:(0,ot.e)((c,l)=>{let d,_=0;const x=()=>{let F=!1;d=c.subscribe((0,y.x)(l,f=>{r&&(_=0),l.next(f)},void 0,f=>{if(_++<o){const M=()=>{d?(d.unsubscribe(),d=null,x()):F=!0};if(null!=e){const lt="number"==typeof e?(0,et.H)(e):(0,rt.Xf)(e(f,_)),J=(0,y.x)(l,()=>{J.unsubscribe(),M()},()=>{l.complete()});lt.subscribe(J)}else M()}else l.error(f)})),F&&(d.unsubscribe(),d=null,x())};x()})}(1),(0,st.K)(r=>{let c="";return c=r.error instanceof ErrorEvent?`form Client Error: ${r.error.message}`:`Error Status: ${r.status}\nMessage: ${r.message}`,console.log(c),(0,tt._)(c)}))}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();const at=[{path:"",component:z},{path:"favourites",component:R},{path:":id",component:X}];let ut=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[g.M,{provide:b.TP,useClass:ct,multi:!0}],imports:[a.ez,C.JX,p.Bz.forChild(at),V.h,b.JF]}),n})()}}]);