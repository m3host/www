webpackJsonp([7],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shipping_address_form__ = __webpack_require__(326);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingAddressFormModule", function() { return ShippingAddressFormModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShippingAddressFormModule = (function () {
    function ShippingAddressFormModule() {
    }
    return ShippingAddressFormModule;
}());
ShippingAddressFormModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__shipping_address_form__["a" /* ShippingAddressForm */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shipping_address_form__["a" /* ShippingAddressForm */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__shipping_address_form__["a" /* ShippingAddressForm */]
        ]
    })
], ShippingAddressFormModule);

//# sourceMappingURL=shipping-address-form.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_checkout_service__ = __webpack_require__(208);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingAddressForm; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { ShippingPaymentMethod } from '../shipping-payment-method/shipping-payment-method';
var ShippingAddressForm = (function () {
    function ShippingAddressForm(nav, service, functions, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.disableSubmit = false;
        this.shipping = {};
        this.status = [];
        this.buttonText = this.values.lan.text_button_continue;
        this.service.getShippingAddressForm()
            .then(function (results) { return _this.handleForm(results); });
    }
    ShippingAddressForm.prototype.handleForm = function (results) {
        this.form = results;
        this.getZone(results.country_id);
    };
    ShippingAddressForm.prototype.getZone = function (id) {
        var _this = this;
        this.form.zone_id = null;
        this.service.getZone(id)
            .then(function (results) { return _this.zone = results; });
    };
    ShippingAddressForm.prototype.saveShipping = function (form) {
        var _this = this;
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.buttonText = this.form.text_loading;
            this.service.saveShippingAddress(form)
                .then(function (results) { return _this.handleResults(results); });
        }
    };
    ShippingAddressForm.prototype.handleResults = function (results) {
        this.disableSubmit = false;
        this.buttonText = this.form.button_continue;
        if (results.error) {
            this.status = results;
        }
        else {
            this.nav.push('ShippingPaymentMethod');
        }
    };
    ShippingAddressForm.prototype.validateForm = function () {
        if (this.form.firstname == undefined || this.form.firstname == "") {
            return false;
        }
        if (this.form.lastname == undefined || this.form.lastname == "") {
            return false;
        }
        if (this.form.address_1 == undefined || this.form.address_1 == "") {
            return false;
        }
        if (this.form.city == undefined || this.form.city == "") {
            return false;
        }
        if (this.form.postcode == undefined || this.form.postcode == "") {
            return false;
        }
        if (this.form.country_id == undefined || this.form.country_id == "") {
            return false;
        }
        if (this.form.zone_id == undefined || this.form.zone_id == null) {
            this.form.zone_id = "0";
        }
        return true;
    };
    return ShippingAddressForm;
}());
ShippingAddressForm = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({template:/*ion-inline-start:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/checkout/shipping-address-form/shipping-address-form.html"*/'<!--\n   Generated template for the AccountLoginPage page.\n   \n   See http://ionicframework.com/docs/v2/components/#navigation for more info on\n   Ionic pages and navigation.\n   -->\n<ion-header>\n   <ion-navbar color="header">\n      <ion-title text-center>{{values.lan?.text_shipping_address}}</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content class="shipping-address-form">\n<ion-spinner *ngIf="!form" name="crescent" style="display: block; margin-left: auto; margin-right:auto; margin-top: 40px;"></ion-spinner>\n\n   <div style="padding-bottom:50px">\n      <div *ngIf="form" style="padding:0px 8px 5px">\n         <form #f="ngForm">\n            <ion-item>\n               <ion-label floating>\n                  <h6 style="color:red;" *ngIf="status.error">{{status.error.firstname}}</h6>\n                  {{form.entry_firstname}}\n               </ion-label>\n               <ion-input required type="text" [(ngModel)]="form.firstname" name="firstname"></ion-input>\n            </ion-item>\n            <ion-item>\n               <ion-label floating>{{form.entry_lastname}}</ion-label>\n               <ion-input required type="text" [(ngModel)]="form.lastname" name="lastname"></ion-input>\n            </ion-item>\n            <ion-item>\n               <ion-label floating>{{form.entry_company}}</ion-label>\n               <ion-input type="text" [(ngModel)]="form.company" name="company"></ion-input>\n            </ion-item>\n            <ion-item>\n               <ion-label floating>\n                  <h6 style="color:red;" *ngIf="status.error">{{status.error.address_1}}</h6>\n                  {{form.entry_address_1}}\n               </ion-label>\n               <ion-input required type="text" [(ngModel)]="form.address_1" name="address_1"></ion-input>\n            </ion-item>\n            <ion-item>\n               <ion-label floating>{{form.entry_address_2}}</ion-label>\n               <ion-input type="text" [(ngModel)]="form.address_2" name="address_2"></ion-input>\n            </ion-item>\n            <ion-item>\n               <ion-label floating>\n                  <h6 style="color:red;" *ngIf="status.error">{{status.error.city}}</h6>\n                  {{form.entry_city}}\n               </ion-label>\n               <ion-input required type="text" [(ngModel)]="form.city" name="city"></ion-input>\n            </ion-item>\n            <ion-item>\n               <ion-label floating>\n                  <h6 style="color:red;" *ngIf="status.error">{{status.error.postcode}}</h6>\n                  {{form.entry_postcode}}\n               </ion-label>\n               <ion-input required type="number" [(ngModel)]="form.postcode" name="postcode"></ion-input>\n            </ion-item>\n            <ion-item>\n               <ion-label>\n                  <h6 style="color:red;" *ngIf="status.error">{{status.error.country}}</h6>\n                  {{form.entry_country}}\n               </ion-label>\n               <ion-select [(ngModel)]="form.country_id" name="country_id" (ngModelChange)="getZone(form.country_id)">\n               <div *ngFor="let field of form.countries">\n                  <ion-option value="{{field.country_id}}">{{field.name}} ({{field.iso_code_2}})</ion-option>\n               </div>\n               </ion-select>      \n            </ion-item>\n            <ion-item *ngIf="zone?.zone != \'\'">\n               <ion-label>\n                  <h6 style="color:red;" *ngIf="status.error">{{status.error.zone}}</h6>\n                  {{form.entry_zone}}\n               </ion-label>\n               <ion-select [(ngModel)]="form.zone_id" name="zone_id">\n               <div *ngFor="let field of zone?.zone">\n                  <ion-option value="{{field.zone_id}}">{{field.name}}</ion-option>\n               </div>\n               </ion-select>\n            </ion-item>\n            <button style="margin-top:11px" ion-button block color="button-color" type="submit" class="button button-block button-default" [disabled]="disableSubmit" (click)="saveShipping(form)">{{buttonText}}</button>\n         </form>\n      </div>\n   </div>\n</ion-content>'/*ion-inline-end:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/checkout/shipping-address-form/shipping-address-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_service_checkout_service__["a" /* CheckoutService */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */]])
], ShippingAddressForm);

//# sourceMappingURL=shipping-address-form.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map