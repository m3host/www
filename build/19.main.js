webpackJsonp([19],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders__ = __webpack_require__(313);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrdersModule = (function () {
    function OrdersModule() {
    }
    return OrdersModule;
}());
OrdersModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__orders__["a" /* Orders */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orders__["a" /* Orders */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__orders__["a" /* Orders */]
        ]
    })
], OrdersModule);

//# sourceMappingURL=orders.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Orders; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { OrderDetails } from '../order-details/order-details';
var Orders = (function () {
    function Orders(nav, service, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.service.getOrders()
            .then(function (results) { return _this.orders = results; });
    }
    Orders.prototype.getOrderDetails = function (href) {
        this.nav.push('OrderDetails', href);
    };
    Orders.prototype.encodeUrl = function (href) {
        return href.replace(/&amp;/g, '&');
    };
    Orders.prototype.doInfinite = function (href, infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        this.service.loadMore(href)
            .then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    Orders.prototype.handleMore = function (results, infiniteScroll) {
        infiniteScroll.complete();
        if (results.orders != undefined) {
            for (var i = 0; i < results.orders.length; i++) {
                this.orders.orders.push(results.orders[i]);
            }
            ;
        }
        this.orders.current_page = results.current_page;
        this.orders.total_page = results.total_page;
        this.orders.next_page_url = results.next_page_url;
    };
    return Orders;
}());
Orders = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({template:/*ion-inline-start:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/account/orders/orders.html"*/'<!--\n   Generated template for the AccountLoginPage page.\n   \n   See http://ionicframework.com/docs/v2/components/#navigation for more info on\n   Ionic pages and navigation.\n   -->\n<ion-header>\n   <ion-navbar color="header">\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title text-center>{{values.lan?.text_my_orders}}</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content class="account-orders">\n<ion-spinner *ngIf="!orders" style="font-size: 17px;" name="crescent" style="display: block; margin-left: auto; margin-right:auto; margin-top:150px;"></ion-spinner>\n\n   <div *ngIf="orders" style="padding:0 8px 8px">\n     <div>\n       <h5 text-center style="margin-top:50px;color:#000;font-size:17px" *ngIf="!orders.orders.length">{{orders.text_empty}}</h5>\n     </div>\n      <ion-item *ngFor="let item of orders.orders">\n         <h2><b> {{orders.column_order_id}} :</b> {{item.order_id}}</h2>\n         <h2><b> {{orders.column_customer}} : </b>{{item.name}}</h2>\n         <h2><b> {{orders.column_date_added}} :</b> {{item.date_added}}</h2>\n         <h2><b> {{orders.column_status}} :</b> {{item.status}}</h2>\n         <h2><b>{{orders.column_product}} :</b> {{item.products}}</h2>\n         <h2><b>{{orders.column_total}} :</b> {{item.total}}</h2>\n         <ion-row no-padding>\n            <ion-col>\n               <button ion-button clear color="button-color" small (click)="getOrderDetails(encodeUrl(item.view))">\n                  <ion-icon name="md-create"></ion-icon>\n                  {{orders.button_view}}\n               </button>\n            </ion-col>\n         </ion-row>\n      </ion-item>\n      <ion-infinite-scroll (ionInfinite)="doInfinite(encodeUrl(orders.next_page_url), $event)" *ngIf="orders.current_page != orders.total_page">\n      <ion-infinite-scroll-content\n         loadingSpinner="crescent"\n         loadingText="Loading more items...">\n      </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n   </div>\n   <br>\n</ion-content>'/*ion-inline-end:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/account/orders/orders.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */]])
], Orders);

//# sourceMappingURL=orders.js.map

/***/ })

});
//# sourceMappingURL=19.main.js.map