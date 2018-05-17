webpackJsonp([1,3],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipe__ = __webpack_require__(306);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipeModule", function() { return KeysPipeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var KeysPipeModule = (function () {
    function KeysPipeModule() {
    }
    return KeysPipeModule;
}());
KeysPipeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__pipe__["a" /* KeysPipe */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__pipe__["a" /* KeysPipe */]]
    })
], KeysPipeModule);

//# sourceMappingURL=pipe.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shipping_address__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__ = __webpack_require__(279);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingAddressModule", function() { return ShippingAddressModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ShippingAddressModule = (function () {
    function ShippingAddressModule() {
    }
    return ShippingAddressModule;
}());
ShippingAddressModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__shipping_address__["a" /* ShippingAddress */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__["KeysPipeModule"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shipping_address__["a" /* ShippingAddress */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__shipping_address__["a" /* ShippingAddress */]
        ]
    })
], ShippingAddressModule);

//# sourceMappingURL=shipping-address.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*
  Generated class for the Pipe pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Pipe */])({
        name: 'keys'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])()
], KeysPipe);

//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_checkout_service__ = __webpack_require__(208);
/* unused harmony export KeysPipe */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingAddress; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { ShippingAddressForm } from '../shipping-address-form/shipping-address-form';
//import { ShippingPaymentMethod } from '../shipping-payment-method/shipping-payment-method';
var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
            console.log(keys);
        }
        console.log(keys);
        return keys;
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Pipe */])({ name: 'keys' })
], KeysPipe);

var ShippingAddress = (function () {
    function ShippingAddress(nav, service, params, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.disableSubmit = false;
        this.buttonText = this.values.lan.text_button_continue;
        this.service.getShippingAddress()
            .then(function (results) { return _this.setDefaultShippingAddress(results); });
    }
    ShippingAddress.prototype.saveShippingAddress = function () {
        var _this = this;
        this.disableSubmit = true;
        this.buttonText = this.shipping.text_loading;
        this.service.saveShipping(this.shipping.addresses[this.setAddress])
            .then(function (results) { return _this.handleResults(results); });
    };
    ShippingAddress.prototype.handleResults = function (results) {
        this.disableSubmit = false;
        this.buttonText = this.shipping.button_continue;
        this.nav.push('ShippingPaymentMethod');
    };
    ShippingAddress.prototype.addNewAddress = function () {
        this.nav.push('ShippingAddressForm');
    };
    ShippingAddress.prototype.setDefaultShippingAddress = function (results) {
        this.shipping = results;
        this.setAddress = this.shipping.address_id;
    };
    return ShippingAddress;
}());
ShippingAddress = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({template:/*ion-inline-start:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/checkout/shipping-address/shipping-address.html"*/'<!--\n   Generated template for the AccountLoginPage page.\n   \n   See http://ionicframework.com/docs/v2/components/#navigation for more info on\n   Ionic pages and navigation.\n   -->\n<ion-header>\n   <ion-navbar color="header">\n      <ion-title text-center>{{values.lan?.text_shipping_address}}</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content class="shipping-address">\n<ion-spinner *ngIf="!shipping" style="font-size: 17px;" name="crescent" style="display: block; margin-left: auto; margin-right:auto; margin-top:150px;"></ion-spinner>\n\n   <div style="padding-bottom:50px">\n      <div *ngIf="shipping" style="padding:0px 8px 5px">\n         <ion-list radio-group [(ngModel)]="setAddress">\n         <ion-item><strong>\n            {{shipping.text_address_existing}}\n            </strong>\n         </ion-item>\n         <div *ngIf="shipping">\n            <ion-item text-wrap *ngFor="let item of shipping.addresses | keys">\n               <ion-label>{{item.value.firstname}} {{item.value.lastname}} {{item.value.company}} {{item.value.address_1}} {{item.value.address_2}} {{item.value.postcode}} {{item.value.city}} {{item.value.zone}} {{item.value.country}}</ion-label>\n               <ion-radio value="{{item.value.address_id}}"></ion-radio>\n            </ion-item>\n         </div>\n         </ion-list>\n         <button style="margin-top:10px" ion-button color="button-color" block class="button button-block" [disabled]="disableSubmit" (click)="saveShippingAddress()">{{buttonText}}</button>\n         <button style="margin-top:10px" ion-button clear color="button-color" class="button button-block" (click)="addNewAddress()">{{shipping.text_address_new}}</button>\n      </div>\n   </div>\n</ion-content>'/*ion-inline-end:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/checkout/shipping-address/shipping-address.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_checkout_service__["a" /* CheckoutService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */]])
], ShippingAddress);

//# sourceMappingURL=shipping-address.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map