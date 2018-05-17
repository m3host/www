webpackJsonp([22],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(310);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountLoginModule", function() { return AccountLoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { Service } from '../../../providers/service/service';
var AccountLoginModule = (function () {
    function AccountLoginModule() {
    }
    return AccountLoginModule;
}());
AccountLoginModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* AccountLogin */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* AccountLogin */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* AccountLogin */]
        ]
    })
], AccountLoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_functions__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountLogin; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {AccountForgotten} from '../forgotten/forgotten';



var AccountLogin = (function () {
    function AccountLogin(nav, service, functions, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.disableSubmit = false;
        this.loginData = [];
        this.buttonText = this.values.lan.text_login;
        this.service.loadLogin()
            .then(function (results) { return _this.loadLogin = results; });
    }
    AccountLogin.prototype.login = function (loginData) {
        var _this = this;
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.buttonText = this.values.lan.text_loading;
            this.service.login(loginData)
                .then(function (results) { return _this.handleResults(results); });
        }
    };
    AccountLogin.prototype.handleResults = function (results) {
        var _this = this;
        if (results.error_warning) {
            this.disableSubmit = false;
            this.buttonText = this.values.lan.text_login;
            this.loadLogin = results;
        }
        else if (results.logged_in == true) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* Home */])
                .then(function (results) { return _this.handleLogin(results); });
        }
    };
    AccountLogin.prototype.handleLogin = function (results) {
        this.functions.showAlert(this.values.lan.text_success, this.values.lan.text_login_success);
    };
    AccountLogin.prototype.forgotten = function (href) {
        this.nav.push('AccountForgotten', href);
    };
    AccountLogin.prototype.validateForm = function () {
        return true;
    };
    return AccountLogin;
}());
AccountLogin = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({template:/*ion-inline-start:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/account/login/login.html"*/'<!--\n   Generated template for the AccountLoginPage page.\n   \n   See http://ionicframework.com/docs/v2/components/#navigation for more info on\n   Ionic pages and navigation.\n   -->\n<ion-header>\n   <ion-navbar color="header">\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title text-center>{{values.lan?.text_login}}</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content class="account-login">\n<ion-spinner *ngIf="!loadLogin" style="font-size: 17px;" name="crescent" style="display: block; margin-left: auto; margin-right:auto; margin-top:150px;"></ion-spinner>\n\n   <div *ngIf="loadLogin" style="padding:0px 8px 5px">\n\n    <div class="info">\n      <button ion-button text-center full clear style="margin-top:50px">\n      <ion-icon ios="ios-person-add-outline" md="md-person-add"></ion-icon>\n      </button>\n    </div>\n      <form #f="ngForm">\n         <ion-list style="margin-bottom:10px">\n            <ion-item>\n               <ion-label floating>{{loadLogin.entry_email}}</ion-label>\n               <ion-input required type="email" [(ngModel)]="loginData.email" name="email"></ion-input>\n            </ion-item>\n            <ion-item>\n               <ion-label floating>{{loadLogin.entry_password}}</ion-label>\n               <ion-input required type="password" [(ngModel)]="loginData.password" name="password"></ion-input>\n            </ion-item>\n         </ion-list>\n         <button ion-button block color="button-color" type="submit" class="button button-block button-default" [disabled]="disableSubmit"  (click)="login(loginData)">{{buttonText}}</button>\n      </form>\n      <ion-item text-wrap *ngIf="loadLogin?.error_warning">\n         <h6 style="color:red;">{{loadLogin.error_warning}}</h6>\n      </ion-item>\n      <button style="margin-top:10px" ion-button clear color="button-color" class="button button-block button-clear" (click)="forgotten(loadLogin.forgotten)">{{loadLogin.text_forgotten}}</button>\n   </div>\n</ion-content>'/*ion-inline-end:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/account/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_5__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */]])
], AccountLogin);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=22.main.js.map