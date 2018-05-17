webpackJsonp([24],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_address_form__ = __webpack_require__(308);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAddressFormModule", function() { return EditAddressFormModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { Service } from '../../../providers/service/service';
var EditAddressFormModule = (function () {
    function EditAddressFormModule() {
    }
    return EditAddressFormModule;
}());
EditAddressFormModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__edit_address_form__["a" /* EditAddressForm */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_address_form__["a" /* EditAddressForm */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__edit_address_form__["a" /* EditAddressForm */]
        ]
    })
], EditAddressFormModule);

//# sourceMappingURL=edit-address-form.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAddressForm; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Address } from '../address/address';




var EditAddressForm = (function () {
    function EditAddressForm(nav, service, params, functions, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.regions = [];
        this.disableSubmit = false;
        this.id = params.data;
        this.address = {};
        this.newAddress = {};
        this.buttonText = this.values.lan.text_button_continue;
        this.service.editAddressForm(this.id)
            .then(function (results) { return _this.a(results); });
    }
    EditAddressForm.prototype.getZone = function (id) {
        var _this = this;
        this.form.zone_id = null;
        this.service.getZone(id)
            .then(function (results) { return _this.zone = results; });
    };
    EditAddressForm.prototype.saveAddress = function (href) {
        var _this = this;
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.buttonText = this.form.text_loading;
            this.service.saveAddress(this.form, href)
                .then(function (results) { return _this.handleResults(results); });
        }
    };
    EditAddressForm.prototype.handleResults = function (results) {
        this.disableSubmit = false;
        this.buttonText = this.form.button_continue;
        if (results.success != undefined) {
            this.nav.setRoot('Address');
        }
        else {
            this.form = results;
        }
    };
    EditAddressForm.prototype.a = function (b) {
        this.form = b;
        this.getZone(this.form.country_id);
    };
    EditAddressForm.prototype.encodeUrl = function (href) {
        return href.replace(/&amp;/g, '&');
    };
    EditAddressForm.prototype.validateForm = function () {
        if (this.form.country_id == undefined) {
            this.functions.showAlert(this.values.lan.text_error, this.values.lan.error_country);
            return false;
        }
        if (this.form.zone_id == undefined || this.form.zone_id == null) {
            this.form.zone_id = "0";
        }
        return true;
    };
    return EditAddressForm;
}());
EditAddressForm = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({template:/*ion-inline-start:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/account/edit-address-form/edit-address-form.html"*/'<ion-header>\n   <ion-navbar color="header">\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title text-center>{{values.lan?.text_edit_address}}</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content class="edit-address-form">\n<ion-spinner *ngIf="!form" style="font-size: 17px;" name="crescent" style="display: block; margin-left: auto; margin-right:auto; margin-top:150px;"></ion-spinner>\n\n   <div *ngIf="form" style="padding: 0px 8px 8px">\n      <ion-list style="margin-bottom:10px">\n         <ion-item>\n            <ion-label floating>\n               <h6 style="color:red;" *ngIf="form.error_firstname">{{form.error_firstname}}</h6>\n               {{form.entry_firstname}}\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.firstname" name="firstname"></ion-input>\n         </ion-item>\n         <ion-item>\n            <ion-label floating>\n               <h6 style="color:red;" *ngIf="form.error_lastname">{{form.error_lastname}}</h6>\n               {{form.entry_lastname}}\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.lastname" name="lastname"></ion-input>\n         </ion-item>\n         <ion-item>\n            <ion-label floating>{{form.entry_company}}</ion-label>\n            <ion-input required type="text" [(ngModel)]="form.company" name="company"></ion-input>\n         </ion-item>\n         <ion-item>\n            <ion-label floating>\n               <h6 style="color:red;" *ngIf="form.error_address_1">{{form.error_address_1}}</h6>\n               {{form.entry_address_1}}\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.address_1" name="address_1"></ion-input>\n         </ion-item>\n         <ion-item>\n            <ion-label floating>{{form.entry_address_2}}</ion-label>\n            <ion-input required type="text" [(ngModel)]="form.address_2" name="address_2"></ion-input>\n         </ion-item>\n         <ion-item>\n            <ion-label floating>\n               <h6 style="color:red;" *ngIf="form.error_city">{{form.error_city}}</h6>\n               {{form.entry_city}}\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.city" name="city"></ion-input>\n         </ion-item>\n         <ion-item>\n            <ion-label floating>\n               <h6 style="color:red;" *ngIf="form.error_postcode">{{form.error_postcode}}</h6>\n               {{form.entry_postcode}}\n            </ion-label>\n            <ion-input required type="number" [(ngModel)]="form.postcode" name="postcode"></ion-input>\n         </ion-item>\n         <ion-item>\n            <ion-label>\n               <h6 style="color:red;" *ngIf="form?.error_country">{{form.error_country}}</h6>\n               {{form.entry_country}}\n            </ion-label>\n            <ion-select [(ngModel)]="form.country_id" name="country_id" (ngModelChange)="getZone(form.country_id)">\n            <div *ngFor="let field of form.countries">\n               <ion-option value="{{field.country_id}}">{{field.name}} ({{field.iso_code_2}})</ion-option>\n            </div>\n            </ion-select>\n         </ion-item>\n         <ion-item  *ngIf="zone?.zone != \'\'">\n            <ion-label>\n               <h6 style="color:red;" *ngIf="form?.error_zone">{{form.error_zone}}</h6>\n               {{form.entry_zone}}\n            </ion-label>\n            <ion-select [(ngModel)]="form.zone_id" name="zone_id" >\n            <div *ngFor="let value of zone?.zone">\n               <ion-option value="{{value.zone_id}}">{{value.name}}</ion-option>\n            </div>\n            </ion-select>\n         </ion-item>\n         <ion-item text-wrap>\n            <ion-label><strong>{{form.entry_default}}</strong></ion-label>\n            <ion-toggle [(ngModel)]="form.default" checked="true"></ion-toggle>\n         </ion-item>\n      </ion-list>\n      <button ion-button block color="button-color" type="submit" class="button button-block button-default" [disabled]="disableSubmit" (click)="saveAddress(encodeUrl(form.action))">{{buttonText}}</button>\n   </div>\n   <br>\n</ion-content>'/*ion-inline-end:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/account/edit-address-form/edit-address-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */]])
], EditAddressForm);

//# sourceMappingURL=edit-address-form.js.map

/***/ })

});
//# sourceMappingURL=24.main.js.map