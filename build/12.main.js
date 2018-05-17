webpackJsonp([12],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout_option__ = __webpack_require__(321);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutOptionModule", function() { return CheckoutOptionModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckoutOptionModule = (function () {
    function CheckoutOptionModule() {
    }
    return CheckoutOptionModule;
}());
CheckoutOptionModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__checkout_option__["a" /* CheckoutOption */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkout_option__["a" /* CheckoutOption */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__checkout_option__["a" /* CheckoutOption */]
        ]
    })
], CheckoutOptionModule);

//# sourceMappingURL=checkout-option.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_checkout_service__ = __webpack_require__(208);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutOption; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { BillingAddress } from '../billing-address/billing-address';
//import { CheckoutRegister } from '../checkout-register/checkout-register';
//import { CheckoutForgotten } from '../checkout-forgotten/checkout-forgotten';
//import { GuestCheckout } from '../guest-checkout/guest-checkout';
//import { BillingAddressForm } from '../billing-address-form/billing-address-form';
var CheckoutOption = (function () {
    function CheckoutOption(nav, service, params, functions, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.disableSubmit = false;
        this.loginData = {};
        this.error = [];
        this.buttonText = this.values.lan.text_login;
        this.service.getCheckoutLogin()
            .then(function (results) { return _this.checkoutLogin = results; });
    }
    CheckoutOption.prototype.register = function () {
        this.nav.push('CheckoutRegister');
    };
    CheckoutOption.prototype.forgot = function () {
        this.nav.push('CheckoutForgotten', this.checkoutLogin.forgotten);
    };
    CheckoutOption.prototype.guest = function () {
        this.nav.push('GuestCheckout');
    };
    CheckoutOption.prototype.login = function () {
        var _this = this;
        this.disableSubmit = true;
        this.buttonText = this.values.lan.text_loading;
        this.service.doLogin(this.loginData)
            .then(function (results) { return _this.handleResults(results); });
    };
    CheckoutOption.prototype.handleResults = function (results) {
        var _this = this;
        this.disableSubmit = false;
        this.buttonText = this.values.lan.text_login;
        this.error = results;
        if (results.error) {
            this.functions.showAlert(this.values.lan.text_error, results.error.warning);
        }
        else if (results.logged == true) {
            this.values.logged = true;
            this.service.getBillingAddress()
                .then(function (results) { return _this.handleAddress(results); });
        }
    };
    CheckoutOption.prototype.handleAddress = function (results) {
        if (results.addresses) {
            this.nav.push('BillingAddress', results);
        }
        else {
            this.nav.push('BillingAddressForm');
        }
    };
    return CheckoutOption;
}());
CheckoutOption = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({template:/*ion-inline-start:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/checkout/checkout-option/checkout-option.html"*/'<!--\n   Generated template for the AccountLoginPage page.\n   \n   See http://ionicframework.com/docs/v2/components/#navigation for more info on\n   Ionic pages and navigation.\n   -->\n<ion-header>\n   <ion-navbar color="header">\n      <ion-title text-center>{{values.lan?.text_checkout}}</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content class="checkout-option">\n  <ion-spinner *ngIf="!checkoutLogin" style="font-size: 17px;" name="crescent" style="display: block; margin-left: auto; margin-right:auto; margin-top:150px;"></ion-spinner>\n\n   <div *ngIf="checkoutLogin" style="padding:5px">\n    <div class="info">\n      <button ion-button text-center full clear>\n      <ion-icon ios="ios-person-add-outline" md="md-person-add"></ion-icon>\n      </button>\n    </div>\n\n      <ion-item no-lines style="padding-left:10px;">\n         <h2 style="font-size:22px;">{{checkoutLogin.text_returning_customer}}</h2>\n      </ion-item>\n      <form #f="ngForm">\n         <ion-list style="margin-bottom:10px">\n            <ion-item>\n               <ion-label floating>{{checkoutLogin.entry_email}}</ion-label>\n               <ion-input required type="email" [(ngModel)]="loginData.email" name="email"></ion-input>\n            </ion-item>\n            <ion-item>\n               <ion-label floating>{{checkoutLogin.entry_password}}</ion-label>\n               <ion-input required type="password" [(ngModel)]="loginData.password" name="password"></ion-input>\n            </ion-item>\n         </ion-list>\n         <button ion-button block color="button-color" type="submit" class="button button-block button-default" [disabled]="disableSubmit" (click)="login()">{{buttonText}}</button>\n      </form>\n      <ion-item text-wrap *ngIf="error.error">\n         <h6 style="color:red;">{{values.lan?.error_login}}</h6>\n      </ion-item>\n      <button style="margin-top:10px" ion-button block clear color="button-color" class="button button-block button-default" (click)="forgot()">{{checkoutLogin.text_forgotten}}</button>\n      <h5 text-center style="margin:0px">OR</h5>\n      <button ion-button block clear color="button-color" class="button button-block button-default" (click)="register()">{{checkoutLogin.text_register}}</button>\n      <button ion-button block clear color="button-color" class="button button-block button-default" (click)="guest()">{{checkoutLogin.text_guest}}</button>\n   </div>\n</ion-content>'/*ion-inline-end:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/checkout/checkout-option/checkout-option.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_service_checkout_service__["a" /* CheckoutService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */]])
], CheckoutOption);

//# sourceMappingURL=checkout-option.js.map

/***/ })

});
//# sourceMappingURL=12.main.js.map