webpackJsonp([20],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_details__ = __webpack_require__(312);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsModule", function() { return OrderDetailsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { Service } from '../../../providers/service/service';
var OrderDetailsModule = (function () {
    function OrderDetailsModule() {
    }
    return OrderDetailsModule;
}());
OrderDetailsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__order_details__["a" /* OrderDetails */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order_details__["a" /* OrderDetails */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__order_details__["a" /* OrderDetails */]
        ]
    })
], OrderDetailsModule);

//# sourceMappingURL=order-details.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetails; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { ReturnProduct } from '../return-product/return-product'

var OrderDetails = (function () {
    function OrderDetails(nav, service, params, functions, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.id = params.data;
        this.service.getOrder(this.id)
            .then(function (results) { return _this.orderDetails = results; });
    }
    OrderDetails.prototype.reorder = function (href) {
        var _this = this;
        this.service.addToCart(href)
            .then(function (results) { return _this.handleCart(results); });
    };
    OrderDetails.prototype.handleCart = function (results) {
        if (results.success) {
            this.functions.showAlert(this.values.lan.text_success, results.success);
        }
    };
    OrderDetails.prototype.returnProduct = function (href) {
        this.nav.push('ReturnProduct', href);
    };
    OrderDetails.prototype.encodeUrl = function (href) {
        return href.replace(/&amp;/g, '&');
    };
    return OrderDetails;
}());
OrderDetails = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({template:/*ion-inline-start:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/account/order-details/order-details.html"*/'<!--\n   Generated template for the AccountLoginPage page.\n   \n   See http://ionicframework.com/docs/v2/components/#navigation for more info on\n   Ionic pages and navigation.\n   -->\n<ion-header>\n   <ion-navbar color="header">\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title text-center>{{values.lan?.text_order_detail}}</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content class="order-details">\n<ion-spinner *ngIf="!orderDetails" style="font-size: 17px;" name="crescent" style="display: block; margin-left: auto; margin-right:auto; margin-top:150px;"></ion-spinner>\n\n   <div *ngIf="orderDetails" style="padding:0 8px 8px">\n      <ion-item-group>\n         <!--h4>{{orderDetails.text_order_detail}}</h4-->\n         <ion-item-divider style="background-color: #f4f4f4" color="light"><strong style="font-size:100%">{{orderDetails.text_order_id}}</strong></ion-item-divider>\n         <ion-item>{{orderDetails.order_id}}</ion-item>\n         <ion-item-divider style="background: #f4f4f4" color="light"><strong style="font-size:100%">{{orderDetails.text_date_added}}</strong></ion-item-divider>\n         <ion-item>{{orderDetails.date_added}}</ion-item>\n         <ion-item-divider style="background: #f4f4f4" color="light"><strong style="font-size:100%">{{orderDetails.text_payment_method}}</strong></ion-item-divider>\n         <ion-item>{{orderDetails.payment_method}}</ion-item>\n         <div *ngIf="orderDetails.payment_address">\n            <ion-item-divider style="background: #f4f4f4" color="light"><strong style="font-size:100%">{{orderDetails.text_payment_address}}</strong></ion-item-divider>\n            <ion-item [innerHTML]="orderDetails.payment_address" style="padding:10px 8px "></ion-item>\n         </div>\n         <div *ngIf="orderDetails.shipping_method">\n            <ion-item-divider style="background: #f4f4f4" color="light"><strong style="font-size:100%">{{orderDetails.text_shipping_method}}</strong></ion-item-divider>\n            <ion-item>{{orderDetails.shipping_method}}</ion-item>\n         </div>\n         <div *ngIf="orderDetails.shipping_address">\n            <ion-item-divider style="background: #f4f4f4" color="light"><strong style="font-size:100%">{{orderDetails.text_shipping_address}}</strong></ion-item-divider>\n            <ion-item [innerHTML]="orderDetails.shipping_address" style="padding:10px 8px "></ion-item>\n         </div>\n         <div *ngIf="orderDetails.histories">\n            <ion-item-divider style="background: #f4f4f4" color="light"><strong style="font-size:100%">{{orderDetails.column_status}}</strong></ion-item-divider>\n            <ion-item>{{orderDetails.histories[0].status}}</ion-item>\n         </div>\n         <ion-item-divider style="background: #f4f4f4" color="light"><strong style="font-size:110%">{{values.lan?.text_product_details}}</strong></ion-item-divider>\n         <div *ngIf="orderDetails.products">\n            <ion-item *ngFor="let item of orderDetails.products">\n               <h4>{{orderDetails.column_name}} : {{item.name}}</h4>\n               <h4>{{orderDetails.column_model}} : {{item.model}}</h4>\n               <h4>{{orderDetails.column_quantity}} : {{item.quantity}}</h4>\n               <h4>{{orderDetails.column_price}} : {{item.price}}</h4>\n               <h4>{{orderDetails.column_total}} : {{item.total}}</h4>\n               <button ion-button clear color="button-color" medium (click)="returnProduct(encodeUrl(item.return))">{{orderDetails.button_return}}</button>\n               <button ion-button clear color="button-color" medium (click)="reorder(encodeUrl(item.reorder))">{{orderDetails.button_reorder}}</button>\n            </ion-item>\n         </div>\n         <ion-item-divider style="background: #f4f4f4" color="light"><strong style="font-size:110%">{{orderDetails.column_total}}</strong></ion-item-divider>\n      </ion-item-group>\n      <ion-grid style="padding:0px 5px">\n         <ion-row *ngFor="let total of orderDetails.totals">\n            <ion-col style="padding:0px 5px" width-50>\n               <h6 style="margin:10px 0px"><b>{{total.title}}</b></h6>\n            </ion-col>\n            <ion-col style="padding:0px 5px" width-50 class="align-right">\n               <h6 color="header" style="margin:10px 0px"><b>{{total.text}}</b></h6>\n            </ion-col>\n         </ion-row>\n      </ion-grid>\n   </div>\n   <br>\n</ion-content>'/*ion-inline-end:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/account/order-details/order-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */]])
], OrderDetails);

//# sourceMappingURL=order-details.js.map

/***/ })

});
//# sourceMappingURL=20.main.js.map