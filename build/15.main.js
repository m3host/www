webpackJsonp([15],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(317);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartPageModule = (function () {
    function CartPageModule() {
    }
    return CartPageModule;
}());
CartPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]
        ],
    })
], CartPageModule);

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_cart_service__ = __webpack_require__(209);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { BillingAddress } from '../checkout/billing-address/billing-address';
//import { CheckoutOption } from '../checkout/checkout-option/checkout-option';
var CartPage = (function () {
    function CartPage(nav, service, values, params, functions) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.params = params;
        this.functions = functions;
        this.disableCoupon = false;
        this.disableCheckout = false;
        this.quantity = 1;
        this.buttonText = this.values.lan.text_apply_coupon;
        this.service.loadCart()
            .then(function (results) { return _this.cart = results; });
    }
    CartPage.prototype.delete = function (id) {
        var _this = this;
        this.service.deleteItem(id)
            .then(function (results) { return _this.cart = results; });
    };
    CartPage.prototype.checkout = function () {
        var _this = this;
        this.disableCheckout = true;
        if (this.cart.error_warning != "") {
            this.disableCheckout = false;
            this.functions.showAlert(this.values.lan.text_error, this.cart.error_warning);
        }
        else {
            this.service.checkout()
                .then(function (results) { return _this.handleCheckout(results); });
        }
    };
    CartPage.prototype.handleCheckout = function (results) {
        var _this = this;
        this.disableCheckout = false;
        if (results.logged != null) {
            this.service.getBillingAddress()
                .then(function (results) { return _this.handleAddress(results); });
        }
        else {
            this.nav.push('CheckoutOption');
        }
    };
    CartPage.prototype.handleAddress = function (results) {
        this.nav.push('BillingAddress', results);
    };
    CartPage.prototype.decreaseCart = function (id, quantity) {
        var _this = this;
        this.quantity = parseInt(quantity) - 1;
        this.service.updateCart(id, this.quantity)
            .then(function (results) { return _this.handleAddToCart(results); });
    };
    CartPage.prototype.addToCart = function (id, quantity) {
        var _this = this;
        this.quantity = parseInt(quantity) + 1;
        this.service.updateCart(id, this.quantity)
            .then(function (results) { return _this.handleAddToCart(results); });
    };
    CartPage.prototype.handleAddToCart = function (results) {
        var _this = this;
        this.service.loadCart()
            .then(function (results) { return _this.cart = results; });
    };
    CartPage.prototype.getCoupon = function (cart) {
        var _this = this;
        if (this.validateForm()) {
            this.disableCoupon = true;
            this.buttonText = "Loading...";
            this.service.getCoupon(cart)
                .then(function (results) { return _this.handleCoupon(results); });
        }
    };
    CartPage.prototype.handleCoupon = function (results) {
        var _this = this;
        this.disableCoupon = false;
        this.buttonText = this.values.lan.text_apply_coupon;
        if (results.error != undefined) {
            this.functions.showAlert(this.values.lan.text_error, results.error);
        }
        else if (results.success != undefined) {
            this.service.loadCartOnCoupon()
                .then(function (results) { return _this.cart = results; });
            this.functions.showAlert(this.values.lan.text_success, results.success);
        }
    };
    CartPage.prototype.validateForm = function () {
        if (this.cart.coupon == undefined || this.cart.coupon == "") {
            return false;
        }
        return true;
    };
    return CartPage;
}());
CartPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({template:/*ion-inline-start:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/cart/cart.html"*/'<!--\n   Generated template for the CartPage page.\n   \n   See http://ionicframework.com/docs/v2/components/#navigation for more info on\n   Ionic pages and navigation.\n   -->\n<ion-header>\n   <ion-navbar color="header">\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title text-center>{{values.lan?.text_cart}}</ion-title>\n      <ion-buttons end>\n         <button ion-button icon-only color="light" class="has-icon icon-only has-badge">\n            <ion-icon class="ion-ios-cart item-icon"></ion-icon>\n            <ion-badge class="badge badge-light" color="light" *ngIf="values.count">{{values.count}}</ion-badge>\n         </button>\n      </ion-buttons>\n   </ion-navbar>\n</ion-header>\n<ion-content class="cart">\n  <ion-spinner *ngIf="!cart" style="font-size: 17px;" name="crescent" style="display: block; margin-left: auto; margin-right:auto; margin-top:150px;"></ion-spinner>\n\n   <div style="padding-bottom:50px">\n      <div *ngIf="cart" style="padding:0px 5px 16px 5px">\n         <!--Work Here-->\n         <ion-item *ngIf="!cart.text_count" text-center no-lines>\n         <img src="assets/empty.png" style="width:60%;margin:auto;display:block">\n            <button ion-button full clear color="button-color">{{cart.text_error}}</button>\n         </ion-item>\n         <div *ngIf="cart?.products">\n            <ion-item text-wrap *ngIf="cart.error_warning">\n               <h4 color="header">{{cart.error_warning}}</h4>\n            </ion-item>\n            <ion-list style="margin:0px;border-bottom:0.4px solid #e4e4e4">\n               <ion-item style="padding-left:8px" *ngFor="let item of cart.products">\n                  <ion-thumbnail item-left style="margin-right:16px">\n                     <img src="{{item.thumb}}">\n                  </ion-thumbnail>\n                  <h2 style="color:red;" *ngIf="!item.stock">\n                     ***\n                  </h2>\n                  <h2 [innerHTML]="item.name"></h2>\n                  <button ion-button style="margin:0px 0px 9px 0px" icon-only item-right clear color="button-color" class="has-icon icon-only" (click)="decreaseCart(item.cart_id, item.quantity)">\n                     <ion-icon color="button-color" ios="ios-remove-circle-outline" md="ios-remove-circle-outline"></ion-icon>\n                  </button>\n                  <h6 item-right style="margin:0px 0px 9px 0px;padding:0px 7px" class="quantity">{{item.quantity}}</h6>\n                  <button ion-button style="margin:0px 0px 9px 0px" icon-only item-right clear color="button-color" class="has-icon icon-only" (click)="addToCart(item.cart_id, item.quantity)">\n                     <ion-icon color="button-color" ios="ios-add-circle-outline" md="ios-add-circle-outline"></ion-icon>\n                  </button>\n                  <h3 color="header">{{cart.column_price}} : {{item.price}}</h3>\n                  <h3>{{cart.column_quantity}}: </h3>\n                  <h3>{{cart.column_total}} : {{item.total}}</h3>\n                  <a (click)="delete(item.cart_id )">\n                     <ion-icon name="trash" style="font-size:25px"></ion-icon>\n                  </a>\n               </ion-item>\n            </ion-list>\n            <ion-grid style="padding:0px 5px">\n               <ion-row *ngFor="let total of cart.totals">\n                  <ion-col style="padding:0px 5px" width-50>\n                     <h6 style="margin:10px 0px"><b>{{total.title}}</b></h6>\n                  </ion-col>\n                  <ion-col style="padding:0px 5px" width-50 class="align-right">\n                     <h6 color="header" style="margin:10px 0px"><b>{{total.text}}</b></h6>\n                  </ion-col>\n               </ion-row>\n            </ion-grid>\n            <hr>\n            <ion-item *ngIf="cart.modules[0].entry_coupon" style="padding-left:8px">\n               <ion-label floating>{{cart.modules[0].entry_coupon}}</ion-label>\n               <ion-input required type="text" [(ngModel)]="cart.coupon"></ion-input>\n            </ion-item>\n            <ion-item *ngIf="!cart.modules[0].entry_coupon" style="padding-left:8px">\n               <ion-label floating>Enter your coupon code here</ion-label>\n               <ion-input required type="text" [(ngModel)]="cart.coupon"></ion-input>\n            </ion-item>\n            <button ion-button class="top" style="border-radius: 2px" color="button-color" full no-padding no-margin [disabled]="disableCoupon" (click)="getCoupon(cart)">{{buttonText}}</button>\n         </div>\n      </div>\n   </div>\n</ion-content>\n<ion-footer *ngIf="cart?.products">\n   <button ion-button color="button-color" full no-padding no-margin [disabled]="disableCheckout" (click)="checkout()">{{cart.button_checkout}}</button>\n</ion-footer>\n<!--Work Here-->'/*ion-inline-end:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/cart/cart.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_service_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */]])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=15.main.js.map