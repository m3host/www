webpackJsonp([6],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product__ = __webpack_require__(329);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageModule", function() { return ProductPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductPageModule = (function () {
    function ProductPageModule() {
    }
    return ProductPageModule;
}());
ProductPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__product__["a" /* ProductPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product__["a" /* ProductPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__product__["a" /* ProductPage */]
        ]
    })
], ProductPageModule);

//# sourceMappingURL=product.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_functions__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_product_service__ = __webpack_require__(211);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { CartPage } from '../cart/cart';




var ProductPage = (function () {
    function ProductPage(nav, service, params, values, functions, alert) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.alert = alert;
        this.disableBuyNow = false;
        this.disableAddToCart = false;
        this.disableWishlist = false;
        this.mySlideOptions = {
            initialSlide: 1,
            loop: true,
            autoplay: 5800,
            pager: true
        };
        this.href = params.data;
        this.options = [];
        this.quantity = "1";
        this.service.getProduct(this.href)
            .then(function (results) { return _this.product = results; });
    }
    ProductPage.prototype.getProduct = function (href) {
        var _this = this;
        this.service.getProduct(this.href)
            .then(function (results) { return _this.product = results; });
    };
    ProductPage.prototype.addToCart = function (id) {
        var _this = this;
        this.disableAddToCart = true;
        var text = '{';
        var i;
        for (i = 0; i < this.options.length; i++) {
            var res = this.options[i].split(":");
            text += '"option[' + res[0] + ']":"' + res[1] + '",';
        }
        text += '"product_id":"' + id + '",';
        text += '"quantity":"' + this.quantity + '"}';
        var obj = JSON.parse(text);
        this.service.addToCart(obj)
            .then(function (results) { return _this.handleCart(results); });
    };
    ProductPage.prototype.handleCart = function (results) {
        this.disableAddToCart = false;
        if (results.success) {
            this.functions.showAlert(this.values.lan.text_success, results.success);
        }
        else if (results.error) {
            var text = "";
            for (var error in results.error.option) {
                text = text + results.error.option[error] + '<br>';
            }
            var alert_1 = this.alert.create({
                title: "ERROR",
                subTitle: text,
                buttons: ['OK']
            });
            alert_1.present(alert_1);
        }
    };
    ProductPage.prototype.addToWishlist = function (product_id) {
        var _this = this;
        this.disableWishlist = true;
        this.service.addToWishlist(product_id)
            .then(function (results) { return _this.handleWishlist(results); });
    };
    ProductPage.prototype.handleWishlist = function (results) {
        this.disableWishlist = false;
        if (results.success) {
            this.functions.showAlert(this.values.lan.text_success, results.success);
        }
    };
    ProductPage.prototype.getCart = function () {
        this.nav.push('CartPage');
    };
    ProductPage.prototype.buyNow = function (id) {
        var _this = this;
        this.disableBuyNow = true;
        var text = '{';
        var i;
        for (i = 0; i < this.options.length; i++) {
            var res = this.options[i].split(":");
            text += '"option[' + res[0] + ']":"' + res[1] + '",';
        }
        text += '"product_id":"' + id + '",';
        text += '"quantity":"' + this.quantity + '"}';
        var obj = JSON.parse(text);
        this.service.addToCart(obj)
            .then(function (results) { return _this.handleResults(results); });
    };
    ProductPage.prototype.handleResults = function (results) {
        this.disableBuyNow = false;
        if (results.error) {
            var text = "";
            for (var error in results.error.option) {
                text = text + results.error.option[error] + '<br>';
            }
            var alert_2 = this.alert.create({
                title: "ERROR",
                subTitle: text,
                buttons: ['OK']
            });
            alert_2.present(alert_2);
        }
        else {
            this.nav.push('CartPage');
        }
    };
    return ProductPage;
}());
ProductPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({template:/*ion-inline-start:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/product/product.html"*/'<ion-header>\n   <ion-navbar color="header">\n      <ion-title text-center>{{values.lan?.text_products}}</ion-title>\n      <ion-buttons end>\n         <button ion-button icon-only  class="has-icon icon-only has-badge" (click)="getCart()">\n            <ion-icon class="ion-ios-cart item-icon"></ion-icon>\n            <ion-badge class="badge badge-light" color="light" *ngIf="values.count">{{values.count}}</ion-badge>\n         </button>\n      </ion-buttons>\n   </ion-navbar>\n</ion-header>\n<ion-content class="product">\n<ion-spinner *ngIf="!product" style="font-size: 17px;" name="crescent" style="display: block; margin-left: auto; margin-right:auto; margin-top:150px;"></ion-spinner>\n\n   <div style="padding-bottom:50px">\n      <div *ngIf="product" style="padding:0px 5px 6px" class="background">\n         <ion-slides pager style="width: 100%; height: 40%" (ionSlideDidChange)="mySlideOptions">\n            <ion-slide *ngFor=\'let value of product.images\'>\n               <img src="{{value.popup}}" >\n             </ion-slide> \n            \n            </ion-slides>\n         <ion-item>\n            <h2 style="font-size:19px" color="header" [innerHTML]="product.heading_title"></h2>\n            <button ion-button color="button-color" clear item-right [disabled]="disableWishlist" (click)="addToWishlist(product.product_id)">\n            <ion-icon name="heart"></ion-icon>\n            <div> Add to Wishlist</div>\n            </button>\n         </ion-item>\n         <div class="padding">\n            <ion-item>\n               <h2 style="font-size:17px;margin:8px 0px"><span *ngIf="product.special"><del>{{product.price}}</del> <strong style="font-size:17px" class="calm"> {{product.special}}</strong></span><span  *ngIf="!product.special"><strong style="font-size:17px" class="assertive">{{product.price}}</strong></span></h2>\n               <h3 style="margin: 8px 0px 12px;font-size:15px" *ngIf="product.tax">\n                  {{product.text_tax}} {{product.tax}}\n               </h3>\n            </ion-item>\n         </div>\n         <div *ngIf="product.options.length">\n            <ion-item color="item">{{product.text_option}} :</ion-item>\n            <ion-item *ngFor="let option of product.options; let i = index">\n               <ion-label>\n                  {{option.name}}\n               </ion-label>\n               <ion-select [(ngModel)]="options[i]">\n               <div *ngFor="let value of option.product_option_value">\n                  <ion-option value="{{option.product_option_id + \':\' + value.option_value_id}}" *ngIf="value.price">{{value.name}} {{value.price_prefix}} {{value.price}} </ion-option>\n                  <ion-option value="{{option.product_option_id + \':\' + value.option_value_id}}" *ngIf="!value.price">{{value.name}}</ion-option>\n               </div>\n               </ion-select>\n            </ion-item>\n         </div>\n         <ion-item>\n            <ion-label>{{product.entry_qty}}</ion-label>\n            <ion-input required type="number" [(ngModel)]="quantity" min="1" name="quantity"></ion-input>\n         </ion-item>\n         <!--button block color="secondary" type="submit" class="button button-block button-default" (click)="addToCart(product.product_id)">{{product.button_cart}}</button-->\n         <ion-item color="item">\n            {{product.tab_description}} :\n         </ion-item>\n         <ion-item text-wrap no-lines>\n            <div style="margin:10px 0px 12px" [innerHTML]="product.description"></div>\n         </ion-item>\n         <div *ngIf="product.attribute_groups.length">\n            <ion-item color="item">{{product.tab_attribute}}</ion-item>\n            <div *ngFor="let item of product.attribute_groups">\n               <ion-row>\n                  <ion-col no-padding width-33>\n                     <ion-item no-lines>{{item.name}}</ion-item>\n                  </ion-col>\n                  <ion-col no-padding width-66>\n                     <ion-item no-lines text-wrap *ngFor="let item of item.attribute">\n                        {{item.name}} : {{item.text}}\n                     </ion-item>\n                  </ion-col>\n               </ion-row>\n            </div>\n         </div>\n      </div>\n   </div>\n</ion-content>\n<ion-footer *ngIf="product">\n   <ion-grid no-padding>\n      <ion-row no-padding>\n         <ion-col  width-50 no-padding>\n            <button ion-button full color="primary" no-padding no-margin [disabled]="disableBuyNow" (click)="buyNow(product.product_id)">\n            {{values.lan?.text_buy_now}}\n            </button>\n         </ion-col>\n         <ion-col royal width-50 no-padding>\n            <button ion-button full color="button-color" no-padding no-margin [disabled]="disableAddToCart" (click)="addToCart(product.product_id)">{{product.button_cart}}</button>\n         </ion-col>\n      </ion-row>\n   </ion-grid>\n</ion-footer>'/*ion-inline-end:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/product/product.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_service_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_2__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* AlertController */]])
], ProductPage);

//# sourceMappingURL=product.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map