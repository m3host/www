webpackJsonp([16],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wishlist__ = __webpack_require__(316);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistModule", function() { return WishlistModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WishlistModule = (function () {
    function WishlistModule() {
    }
    return WishlistModule;
}());
WishlistModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__wishlist__["a" /* Wishlist */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wishlist__["a" /* Wishlist */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__wishlist__["a" /* Wishlist */]
        ]
    })
], WishlistModule);

//# sourceMappingURL=wishlist.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_wishlist_service__ = __webpack_require__(213);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wishlist; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { CartPage } from '../../cart/cart';
//import { ProductPage } from '../../product/product';



var Wishlist = (function () {
    function Wishlist(nav, service, values, functions) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.count = 10;
        this.service.load()
            .then(function (results) { return _this.wishlist = results; });
    }
    Wishlist.prototype.getCart = function () {
        this.nav.push('CartPage');
    };
    Wishlist.prototype.addToCart = function (product_id) {
        var _this = this;
        this.service.addToCart(product_id)
            .then(function (results) { return _this.handleWishlist(results, product_id); });
    };
    Wishlist.prototype.handleWishlist = function (results, id) {
        if (results.success) {
            this.functions.showAlert(this.values.lan.text_success, results.success);
        }
        else if (results.error) {
            this.nav.push('ProductPage', results.redirect);
        }
    };
    Wishlist.prototype.delete = function (id) {
        var _this = this;
        this.service.deleteItem(id)
            .then(function (results) { return _this.update(results); });
    };
    Wishlist.prototype.update = function (results) {
        var _this = this;
        this.service.load()
            .then(function (results) { return _this.wishlist = results; });
    };
    return Wishlist;
}());
Wishlist = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({template:/*ion-inline-start:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/account/wishlist/wishlist.html"*/'<!--\n   Generated template for the AccountLoginPage page.\n   \n   See http://ionicframework.com/docs/v2/components/#navigation for more info on\n   Ionic pages and navigation.\n   -->\n<ion-header>\n   <ion-navbar color="header">\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title text-center>{{values.lan?.text_wishlist}}</ion-title>\n      <ion-buttons end>\n         <button ion-button icon-only class="has-icon icon-only has-badge" (click)="getCart()">\n            <ion-icon class="ion-ios-cart item-icon"></ion-icon>\n            <ion-badge class="badge badge-light" color="light" *ngIf="values.count">{{values.count}}</ion-badge>\n         </button>\n      </ion-buttons>\n   </ion-navbar>\n</ion-header>\n<ion-content class="wishlist">\n  <ion-spinner *ngIf="!wishlist" style="font-size: 17px;" name="crescent" style="display: block; margin-left: auto; margin-right:auto; margin-top:150px;"></ion-spinner>\n\n   <div *ngIf="wishlist" style="padding: 0 8px 8px">\n      <ion-item *ngIf="!wishlist.products.length" text-center no-lines style="margin-top:50px">\n         <button ion-button full clear color="button-color">{{wishlist.text_empty}}</button>\n      </ion-item>\n      <div *ngIf="wishlist?.products">\n         <ion-list>\n            <ion-item *ngFor="let item of wishlist.products">\n               <ion-thumbnail item-left style="margin-right:16px">\n                  <img src="{{item.thumb}}"> \n               </ion-thumbnail>\n               <h2>{{item.name}}</h2>\n               <h3>{{wishlist.column_price}} : {{item.price}}</h3>\n               <h3 *ngIf="item.stock">{{item.stock}}</h3>\n               <h3 *ngIf="item.special">Special Prize : {{item.special}}</h3>\n               <ion-row>\n                  <ion-col width-30 style="padding-left:0px">\n                     <button ion-button full small color="button-color" no-padding no-margin (click)="delete(item.product_id)">{{wishlist.button_remove}}</button>\n                  </ion-col>\n                  <ion-col width-30>\n                     <button ion-button full small color="primary" no-padding no-margin (click)="addToCart(item.product_id)">\n                        {{values.lan?.text_add}}\n                        <ion-icon name="cart"></ion-icon>\n                     </button>\n                  </ion-col>\n               </ion-row>\n            </ion-item>\n         </ion-list>\n      </div>\n   </div>\n   <br>\n</ion-content>\n<!--Work Here-->'/*ion-inline-end:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/account/wishlist/wishlist.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_service_wishlist_service__["a" /* WishlistService */], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */]])
], Wishlist);

//# sourceMappingURL=wishlist.js.map

/***/ })

});
//# sourceMappingURL=16.main.js.map