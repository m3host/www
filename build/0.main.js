webpackJsonp([0,3],{

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

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shipping_payment_method__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__ = __webpack_require__(279);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingPaymentMethodModule", function() { return ShippingPaymentMethodModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ShippingPaymentMethodModule = (function () {
    function ShippingPaymentMethodModule() {
    }
    return ShippingPaymentMethodModule;
}());
ShippingPaymentMethodModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__shipping_payment_method__["a" /* ShippingPaymentMethod */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__["KeysPipeModule"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shipping_payment_method__["a" /* ShippingPaymentMethod */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__shipping_payment_method__["a" /* ShippingPaymentMethod */]
        ]
    })
], ShippingPaymentMethodModule);

//# sourceMappingURL=shipping-payment-method.module.js.map

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

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_checkout_service__ = __webpack_require__(208);
/* unused harmony export KeysPipe */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingPaymentMethod; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { OrderSummary } from '../order-summary/order-summary';
//import { PrivacyPolicy } from '../privacy-policy/privacy-policy';
var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
            console.log(keys);
        }
        return keys;
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Pipe */])({ name: 'keys' })
], KeysPipe);

var ShippingPaymentMethod = (function () {
    function ShippingPaymentMethod(nav, service, functions, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.disableSubmit = false;
        this.method = {};
        this.method.agree = true;
        this.info = {};
        this.buttonText = this.values.lan.text_button_continue;
        this.method.comment = "";
        this.service.getShippingPayment()
            .then(function (results) { return _this.shippingMethods = results; });
    }
    ShippingPaymentMethod.prototype.saveMethods = function (a) {
        var _this = this;
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.buttonText = this.shippingMethods.text_loading;
            this.service.saveMethods(a)
                .then(function (results) { return _this.handleResults(results); });
        }
    };
    ShippingPaymentMethod.prototype.handleResults = function (results) {
        this.disableSubmit = false;
        this.buttonText = this.shippingMethods.button_continue;
        this.nav.push('OrderSummary');
    };
    ShippingPaymentMethod.prototype.validateForm = function () {
        if (this.method.shipping == undefined) {
            this.functions.showAlert(this.values.lan.text_error, this.values.lan.error_shipping);
            return false;
        }
        if (this.method.payment == undefined) {
            this.functions.showAlert(this.values.lan.text_error, this.values.lan.error_payment);
            return false;
        }
        if (this.method.agree == undefined || this.method.agree == false) {
            this.functions.showAlert(this.values.lan.text_error, this.values.lan.error_agree);
            return false;
        }
        return true;
    };
    ShippingPaymentMethod.prototype.encodeUrl = function (href) {
        return href.replace(/&amp;/g, '&');
    };
    ShippingPaymentMethod.prototype.loadPolicy = function () {
        this.info.agree_link = this.encodeUrl(this.service.paymentMethods.agree_link);
        this.info.title = this.service.paymentMethods.agree_title;
        this.nav.push('PrivacyPolicy', this.info);
    };
    return ShippingPaymentMethod;
}());
ShippingPaymentMethod = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({template:/*ion-inline-start:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/checkout/shipping-payment-method/shipping-payment-method.html"*/'<!--\n   Generated template for the AccountLoginPage page.\n   \n   See http://ionicframework.com/docs/v2/components/#navigation for more info on\n   Ionic pages and navigation.\n   -->\n<ion-header>\n   <ion-navbar color="header">\n      <ion-title text-center>{{values.lan?.text_shipping_method}} & {{values.lan?.text_payment_method}}</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content class="shipping-payment-method">\n<ion-spinner *ngIf="!shippingMethods" style="font-size: 17px;" name="crescent" style="display: block; margin-left: auto; margin-right:auto; margin-top:150px;"></ion-spinner>\n\n   <div style="padding-bottom:50px">\n      <div *ngIf="shippingMethods">\n         <ion-list style="margin:0px" class="margin" radio-group [(ngModel)]="method.shipping">\n         <ion-item-divider style="background-color: #f4f4f4" color="light"><strong>\n            Select Shipping Method\n            </strong>\n         </ion-item-divider>\n         <div *ngFor="let method of shippingMethods.shipping_methods | keys">\n            <ion-item text-wrap *ngFor="let quote of method.value.quote  | keys">\n               <ion-label>{{quote.value.title}} - {{quote.value.text}}</ion-label>\n               <ion-radio value="{{quote.value.code}}"></ion-radio>\n            </ion-item>\n         </div>\n         </ion-list>\n      </div>\n      <ion-list style="margin:0px" radio-group [(ngModel)]="method.payment" *ngIf="shippingMethods">\n      <ion-item-divider style="background-color: #f4f4f4" color="light"><strong>\n         Select Payment Method\n         </strong>\n      </ion-item-divider>\n      <div *ngIf="service.paymentMethods.payment_methods">\n         <ion-item text-wrap *ngFor="let method of service.paymentMethods.payment_methods | keys">\n            <ion-label>{{method.value.title}}</ion-label>\n            <ion-radio text-wrap value="{{method.value.code}}" ></ion-radio>\n         </ion-item>\n      </div>\n      <ion-item>\n         <ion-label floating>{{shippingMethods.text_comments}}</ion-label>\n         <ion-input type="text" [(ngModel)]="method.comment"></ion-input>\n      </ion-item>\n      <ion-item text-wrap class="wrap" no-lines>\n         <ion-label [innerHTML]="service.paymentMethods.text_agree" (click)="loadPolicy()"></ion-label>\n         <ion-toggle checked="true" [(ngModel)]="method.agree"></ion-toggle>\n      </ion-item>\n      </ion-list>\n      <div *ngIf="shippingMethods">\n         <button style="margin-top:11px" ion-button block color="button-color" type="submit" class="button button-block button-default" [disabled]="disableSubmit" (click)="saveMethods(method)">{{buttonText}}</button>\n      </div>\n   </div>\n</ion-content>'/*ion-inline-end:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/checkout/shipping-payment-method/shipping-payment-method.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_service_checkout_service__["a" /* CheckoutService */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */]])
], ShippingPaymentMethod);

//# sourceMappingURL=shipping-payment-method.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map