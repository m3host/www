webpackJsonp([23],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgotten__ = __webpack_require__(309);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountForgottenModule", function() { return AccountForgottenModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { Service } from '../../../providers/service/service';
var AccountForgottenModule = (function () {
    function AccountForgottenModule() {
    }
    return AccountForgottenModule;
}());
AccountForgottenModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__forgotten__["a" /* AccountForgotten */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgotten__["a" /* AccountForgotten */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__forgotten__["a" /* AccountForgotten */]
        ]
    })
], AccountForgottenModule);

//# sourceMappingURL=forgotten.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountForgotten; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { AccountLogin} from '../login/login';




var AccountForgotten = (function () {
    function AccountForgotten(nav, service, params, functions, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.disableSubmit = false;
        this.href = params.data;
        this.loadForgotten = null;
        this.forgottenData = [];
        console.log(this.href);
        this.service.loadForgotten(this.href)
            .then(function (results) { return _this.loadForgotten = results; });
    }
    AccountForgotten.prototype.forgotten = function (email) {
        var _this = this;
        this.disableSubmit = true;
        this.service.forgotten(this.href, email)
            .then(function (results) { return _this.handleResults(results); }); //loadForgotten = results);     
    };
    AccountForgotten.prototype.handleResults = function (results) {
        var _this = this;
        this.disableSubmit = false;
        if (results.success) {
            this.nav.push('AccountLogin')
                .then(function (results) { return _this.handleLogin(results); });
        }
        else if (results.error_warning) {
            this.functions.showAlert(this.values.lan.text_error, results.error_warning);
        }
    };
    AccountForgotten.prototype.handleLogin = function (results) {
        this.functions.showAlert(this.values.lan.text_success, "An email with a confirmation link has been sent your email address.");
    };
    return AccountForgotten;
}());
AccountForgotten = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({template:/*ion-inline-start:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/account/forgotten/forgotten.html"*/'\n<ion-header>\n   <ion-navbar color="header">\n      <ion-title text-center *ngIf="loadForgotten">{{loadForgotten?.heading_title}}</ion-title>\n      <ion-title text-center *ngIf="!loadForgotten">{{values.lan?.text_forgotten}}</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content class="forgotten">\n<ion-spinner *ngIf="!loadForgotten" style="font-size: 17px;" name="crescent" style="display: block; margin-left: auto; margin-right:auto; margin-top:150px;"></ion-spinner>\n\n   <div *ngIf="loadForgotten" style="padding:8px 8px 5px">\n   <div class="info">\n      <button ion-button text-center full clear style="margin:50px 0 25px 0">\n      <ion-icon ios="ios-person-add-outline" md="md-person-add"></ion-icon>\n      </button>\n    </div>\n      <form #f="ngForm">\n         <ion-item>\n            <ion-label floating>{{loadForgotten.entry_email}}</ion-label>\n            <ion-input type="email" [(ngModel)]="forgottenData.email" name="email"></ion-input>\n         </ion-item>\n         <button style="margin-top:10px" ion-button block color="button-color" class="button button-block button-default" [disabled]="disableSubmit" (click)="forgotten(forgottenData.email)">{{loadForgotten?.button_continue}}</button>\n      </form>\n   </div>\n</ion-content>'/*ion-inline-end:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/account/forgotten/forgotten.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */]])
], AccountForgotten);

//# sourceMappingURL=forgotten.js.map

/***/ })

});
//# sourceMappingURL=23.main.js.map