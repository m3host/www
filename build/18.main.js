webpackJsonp([18],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(314);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRegisterModule", function() { return AccountRegisterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { Service } from '../../../providers/service/service';
var AccountRegisterModule = (function () {
    function AccountRegisterModule() {
    }
    return AccountRegisterModule;
}());
AccountRegisterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* AccountRegister */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* AccountRegister */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* AccountRegister */]
        ]
    })
], AccountRegisterModule);

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_functions__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountRegister; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { PrivacyPolicy } from '../../checkout/privacy-policy/privacy-policy';
/*
  Generated class for the AccountLoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var AccountRegister = (function () {
    function AccountRegister(nav, service, functions, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.disableSubmit = false;
        this.registerData = [];
        this.zone = [];
        this.info = {};
        this.registerData.newsletter = true;
        this.buttonText = this.values.lan.text_button_continue;
        this.service.loadRegister()
            .then(function (results) { return _this.loadRegister = results; });
    }
    AccountRegister.prototype.register = function (a) {
        var _this = this;
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.buttonText = this.loadRegister.text_loading;
            this.service.register(a)
                .then(function (results) { return _this.handleResults(results); });
        }
    };
    AccountRegister.prototype.handleResults = function (results) {
        var _this = this;
        this.disableSubmit = false;
        this.buttonText = this.loadRegister.button_continue;
        this.loadRegister = results;
        if (results.error_warning) {
            this.functions.showAlert(this.values.lan.text_error, results.error_warning);
        }
        else if (results.logged_in == true) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* Home */])
                .then(function (results) { return _this.handleRegister(results); });
        }
    };
    AccountRegister.prototype.handleRegister = function (results) {
        this.functions.showAlert(this.values.lan.text_success, this.values.lan.text_success_register);
    };
    AccountRegister.prototype.validateForm = function () {
        if (this.registerData.agree == undefined || this.registerData.agree == "") {
            this.functions.showAlert(this.values.lan.text_error, this.values.lan.error_agree);
            return false;
        }
        if (this.registerData.firstname == undefined || this.registerData.firstname == "") {
            return false;
        }
        if (this.registerData.lastname == undefined || this.registerData.lastname == "") {
            return false;
        }
        if (this.registerData.email == undefined || this.registerData.email == "") {
            return false;
        }
        if (this.registerData.telephone == undefined || this.registerData.telephone == "") {
            return false;
        }
        if (this.registerData.password == undefined || this.registerData.password == "") {
            return false;
        }
        if (this.registerData.confirm == undefined || this.registerData.confirm == "") {
            return false;
        }
        if (this.registerData.address_1 == undefined || this.registerData.address_1 == "") {
            return false;
        }
        if (this.registerData.city == undefined || this.registerData.city == "") {
            return false;
        }
        if (this.registerData.postcode == undefined || this.registerData.postcode == "") {
            return false;
        }
        if (this.registerData.country_id == undefined) {
            this.functions.showAlert(this.values.lan.text_error, this.values.lan.error_country);
            return false;
        }
        if (this.registerData.zone_id == undefined || this.registerData.zone_id == null) {
            this.registerData.zone_id = "0";
        }
        return true;
    };
    AccountRegister.prototype.getZone = function (country_id) {
        var _this = this;
        this.registerData.zone_id = null;
        this.service.getZone(country_id)
            .then(function (results) { return _this.zone = results; });
    };
    AccountRegister.prototype.encodeUrl = function (href) {
        return href.replace(/&amp;/g, '&');
    };
    AccountRegister.prototype.loadPolicy = function () {
        this.info.agree_link = this.encodeUrl(this.loadRegister.agree_link);
        this.info.title = this.loadRegister.agree_title;
        this.nav.push('PrivacyPolicy', this.info);
    };
    return AccountRegister;
}());
AccountRegister = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({template:/*ion-inline-start:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/account/register/register.html"*/'<!--\n   Generated template for the AccountLoginPage page.\n   \n   See http://ionicframework.com/docs/v2/components/#navigation for more info on\n   Ionic pages and navigation.\n   -->\n<ion-header>\n   <ion-navbar color="header">\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title text-center>{{values.lan?.text_register}}</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content class="register">\n<ion-spinner *ngIf="!loadRegister" style="font-size: 17px;" name="crescent" style="display: block; margin-left: auto; margin-right:auto; margin-top:150px;"></ion-spinner>\n\n   <div style="padding-bottom:50px">\n      <div *ngIf="loadRegister" style="padding:8px">\n         <form #f="ngForm">\n            <ion-list style="margin-bottom:5px">\n               <ion-item-divider style="background-color: #f4f4f4" color="light"><strong>{{loadRegister.text_your_details}}</strong></ion-item-divider>\n               <ion-item>\n                  <ion-label floating>\n                     <h6 style="color:red;" *ngIf="loadRegister?.error_firstname">{{loadRegister.error_firstname}}</h6>\n                     {{loadRegister.entry_firstname}}\n                  </ion-label>\n                  <ion-input required type="text" [(ngModel)]="registerData.firstname" name="firstname"></ion-input>\n               </ion-item>\n               <ion-item>\n                  <ion-label floating>{{loadRegister.entry_lastname}}</ion-label>\n                  <ion-input required type="text" [(ngModel)]="registerData.lastname" name="lastname"></ion-input>\n               </ion-item>\n               <ion-item>\n                  <ion-label floating>\n                     <h6 style="color:red;" *ngIf="loadRegister?.error_email">{{loadRegister.error_email}}</h6>\n                     {{loadRegister.entry_email}}\n                  </ion-label>\n                  <ion-input type="email" [(ngModel)]="registerData.email" name="email"></ion-input>\n               </ion-item>\n               <ion-item>\n                  <ion-label floating>\n                     <h6 style="color:red;" *ngIf="loadRegister?.error_telephone">{{loadRegister.error_telephone}}</h6>\n                     {{loadRegister.entry_telephone}}\n                  </ion-label>\n                  <ion-input required type="number" [(ngModel)]="registerData.telephone" name="telephone"></ion-input>\n               </ion-item>\n               <ion-item>\n                  <ion-label floating>\n                     <h6 style="color:red;" *ngIf="loadRegister?.error_password">{{loadRegister.error_password}}</h6>\n                     {{loadRegister.entry_password}}\n                  </ion-label>\n                  <ion-input required type="password" [(ngModel)]="registerData.password" name="password"></ion-input>\n               </ion-item>\n               <ion-item>\n                  <ion-label floating>\n                     <h6 style="color:red;" *ngIf="loadRegister?.error_confirm">{{loadRegister.error_confirm}}</h6>\n                     {{loadRegister.entry_confirm}}\n                  </ion-label>\n                  <ion-input required type="password" [(ngModel)]="registerData.confirm" name="confirm"></ion-input>\n               </ion-item>\n            </ion-list>\n            <ion-list style="margin-bottom:8px">\n               <ion-item-divider style="background-color: #f4f4f4" color="light"><strong>{{loadRegister.text_your_address}}</strong></ion-item-divider>\n               <ion-item>\n                  <ion-label floating>{{loadRegister.entry_company}}</ion-label>\n                  <ion-input type="text" [(ngModel)]="registerData.company" name="company"></ion-input>\n               </ion-item>\n               <ion-item>\n                  <ion-label floating>\n                     <h6 style="color:red;" *ngIf="loadRegister?.error_address_1">{{loadRegister.error_address_1}}</h6>\n                     {{loadRegister.entry_address_1}}\n                  </ion-label>\n                  <ion-input required type="text" [(ngModel)]="registerData.address_1" name="address_1"></ion-input>\n               </ion-item>\n               <ion-item>\n                  <ion-label floating>{{loadRegister.entry_address_2}}</ion-label>\n                  <ion-input type="text" [(ngModel)]="registerData.address_2" name="address_2"></ion-input>\n               </ion-item>\n               <ion-item>\n                  <ion-label floating>\n                     <h6 style="color:red;" *ngIf="loadRegister?.error_city">{{loadRegister.error_city}}</h6>\n                     {{loadRegister.entry_city}}\n                  </ion-label>\n                  <ion-input required type="text" [(ngModel)]="registerData.city" name="city"></ion-input>\n               </ion-item>\n               <ion-item>\n                  <ion-label floating>\n                     <h6 style="color:red;" *ngIf="loadRegister?.error_postcode">{{loadRegister.error_postcode}}</h6>\n                     {{loadRegister.entry_postcode}}\n                  </ion-label>\n                  <ion-input required type="number" [(ngModel)]="registerData.postcode" name="postcode"></ion-input>\n               </ion-item>\n               <ion-item>\n                  <ion-label>\n                     <h6 style="color:red;" *ngIf="loadRegister?.error_country">{{loadRegister.error_country}}</h6>\n                     {{loadRegister.entry_country}}\n                  </ion-label>\n                  <ion-select [(ngModel)]="registerData.country_id" name="country_id" (ngModelChange)="getZone(registerData.country_id)">\n                  <ion-option *ngFor="let value of loadRegister.countries" value="{{value.country_id}}">{{value.name}} ({{value.iso_code_2}})</ion-option>\n                  </ion-select>\n               </ion-item>\n               <ion-item *ngIf="zone?.zone != \'\'">\n                  <ion-label>\n                     <h6 style="color:red;" *ngIf="loadRegister?.error_zone">{{loadRegister.error_zone}}</h6>\n                     {{loadRegister.entry_zone}}\n                  </ion-label>\n                  <ion-select [(ngModel)]="registerData.zone_id" name="zone_id">\n                  <div *ngFor="let value of zone.zone">\n                     <ion-option value="{{value.zone_id}}">{{value.name}} ({{value.code}})</ion-option>\n                  </div>\n                  </ion-select>\n               </ion-item>\n               <ion-item text-wrap>\n                  <ion-label>{{loadRegister.entry_newsletter}}</ion-label>\n                  <ion-toggle checked="true" [(ngModel)]="registerData.newsletter" name="newsletter"></ion-toggle>\n               </ion-item>\n               <ion-item text-wrap>\n                  <ion-label [innerHTML]="loadRegister.text_agree" (click)="loadPolicy()"></ion-label>\n                  <ion-toggle checked="true" [(ngModel)]="registerData.agree" name="agree"></ion-toggle>\n               </ion-item>\n            </ion-list>\n            <button ion-button block color="button-color" type="submit" class="button button-block button-default" [disabled]="disableSubmit" (click)="register(registerData)">{{buttonText}}</button>\n         </form>\n      </div>\n   </div>\n</ion-content>'/*ion-inline-end:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/account/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_5__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */]])
], AccountRegister);

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=18.main.js.map