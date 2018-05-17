webpackJsonp([8],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__privacy_policy__ = __webpack_require__(325);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyModule", function() { return PrivacyPolicyModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PrivacyPolicyModule = (function () {
    function PrivacyPolicyModule() {
    }
    return PrivacyPolicyModule;
}());
PrivacyPolicyModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__privacy_policy__["a" /* PrivacyPolicy */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__privacy_policy__["a" /* PrivacyPolicy */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__privacy_policy__["a" /* PrivacyPolicy */]
        ]
    })
], PrivacyPolicyModule);

//# sourceMappingURL=privacy-policy.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicy; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PrivacyPolicy = (function () {
    function PrivacyPolicy(nav, service, params, functions, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.href = params.data.agree_link;
        this.title = params.data.title;
        this.service.loadPolicy(this.href)
            .then(function (results) { return _this.handlePolicy(results); });
    }
    PrivacyPolicy.prototype.handlePolicy = function (results) {
        this.policy = results;
    };
    return PrivacyPolicy;
}());
PrivacyPolicy = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({template:/*ion-inline-start:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/checkout/privacy-policy/privacy-policy.html"*/'<!--\n   Generated template for the ForgottenPage page.\n   \n   See http://ionicframework.com/docs/v2/components/#navigation for more info on\n   Ionic pages and navigation.\n   -->\n<ion-header>\n   <ion-navbar color="header">\n      <ion-title text-center *ngIf="title">{{title}}</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content class="privacy-policy">\n<ion-spinner *ngIf="!policy" style="font-size: 17px;" name="crescent" style="display: block; margin-left: auto; margin-right:auto; margin-top:150px;"></ion-spinner>\n\n   <div *ngIf="policy" style="padding:8px">\n      <div [innerHTML]="policy"></div>\n   </div>\n</ion-content>'/*ion-inline-end:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/checkout/privacy-policy/privacy-policy.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */]])
], PrivacyPolicy);

//# sourceMappingURL=privacy-policy.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map