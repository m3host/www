webpackJsonp([2,3],{

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

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__billing_address__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__ = __webpack_require__(279);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingAddressModule", function() { return BillingAddressModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BillingAddressModule = (function () {
    function BillingAddressModule() {
    }
    return BillingAddressModule;
}());
BillingAddressModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__billing_address__["a" /* BillingAddress */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__["KeysPipeModule"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__billing_address__["a" /* BillingAddress */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__billing_address__["a" /* BillingAddress */]
        ]
    })
], BillingAddressModule);

//# sourceMappingURL=billing-address.module.js.map

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

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_checkout_service__ = __webpack_require__(208);
/* unused harmony export KeysPipe */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingAddress; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { ShippingAddress } from '../shipping-address/shipping-address';
//import { BillingAddressForm } from '../billing-address-form/billing-address-form';
//import { ShippingPaymentMethod } from '../shipping-payment-method/shipping-payment-method';
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Pipe */])({ name: 'keys' })
], KeysPipe);

var BillingAddress = (function () {
    function BillingAddress(nav, service, params, values) {
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.billing = [];
        this.disableSubmit = false;
        this.billing = params.data;
        this.buttonText = this.billing.button_continue;
        this.billing.shipping = true;
        this.setDefaultBillingAddress();
    }
    BillingAddress.prototype.saveBillingAddress = function () {
        var _this = this;
        this.disableSubmit = true;
        this.buttonText = this.billing.text_loading;
        this.service.saveBilling(this.billing.addresses[this.setAddress])
            .then(function (results) { return _this.handleResults(results); });
    };
    BillingAddress.prototype.handleResults = function (results) {
        var _this = this;
        if (this.billing.shipping) {
            this.service.saveShipping(this.billing.addresses[this.setAddress])
                .then(function (results) { return _this.handleBillingResult(results); });
        }
        else {
            this.disableSubmit = false;
            this.buttonText = this.billing.button_continue;
            this.nav.push('ShippingAddress');
        }
    };
    BillingAddress.prototype.handleBillingResult = function (results) {
        this.disableSubmit = false;
        this.buttonText = this.billing.button_continue;
        this.nav.push('ShippingPaymentMethod');
    };
    BillingAddress.prototype.addNewAddress = function () {
        this.nav.push('BillingAddressForm');
    };
    BillingAddress.prototype.setDefaultBillingAddress = function () {
        this.setAddress = this.billing.address_id;
    };
    return BillingAddress;
}());
BillingAddress = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({template:/*ion-inline-start:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/checkout/billing-address/billing-address.html"*/'<!--\n   Generated template for the AccountLoginPage page.\n   \n   See http://ionicframework.com/docs/v2/components/#navigation for more info on\n   Ionic pages and navigation.\n   -->\n<ion-header>\n   <ion-navbar color="header">\n      <ion-title text-center>{{values.lan?.text_payment_address}}</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content class="billing-address">\n  <ion-spinner *ngIf="!billing" style="font-size: 17px;" name="crescent" style="display: block; margin-left: auto; margin-right:auto; margin-top:150px;"></ion-spinner>\n\n   <div style="padding-bottom:50px">\n      <div *ngIf="billing" style="padding:0px 8px 8px">\n         <ion-list radio-group [(ngModel)]="setAddress">\n         <ion-item><strong>\n            {{billing.text_address_existing}} </strong>\n         </ion-item>\n         <div *ngIf="billing">\n            <ion-item text-wrap *ngFor="let item of billing.addresses | keys">\n               <ion-label>{{item.value.firstname}} {{item.value.lastname}} {{item.value.company}} {{item.value.address_1}} {{item.value.address_2}} {{item.value.postcode}} {{item.value.city}} \n                  {{item.value.zone}} {{item.value.country}}\n               </ion-label>\n               <ion-radio value="{{item.value.address_id}}"></ion-radio>\n            </ion-item>\n         </div>\n         </ion-list>\n         <ion-item text-wrap>\n            <ion-label><strong>{{values.lan?.text_same_for_shipping}}</strong></ion-label>\n            <ion-toggle [(ngModel)]="billing.shipping"></ion-toggle>\n         </ion-item>\n         <button style="margin-top:10px" ion-button color="button-color" block class="button button-block" [disabled]="disableSubmit" (click)="saveBillingAddress()">{{buttonText}}</button>\n         <button style="margin-top:10px" ion-button color="button-color" clear class="button button-block" (click)="addNewAddress()">{{billing.text_address_new}}</button>\n      </div>\n   </div>\n</ion-content>'/*ion-inline-end:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/checkout/billing-address/billing-address.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_checkout_service__["a" /* CheckoutService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */]])
], BillingAddress);

//# sourceMappingURL=billing-address.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map