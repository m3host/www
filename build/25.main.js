webpackJsonp([25],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address__ = __webpack_require__(307);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressModule", function() { return AddressModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { Service } from '../../../providers/service/service';
var AddressModule = (function () {
    function AddressModule() {
    }
    return AddressModule;
}());
AddressModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__address__["a" /* Address */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__address__["a" /* Address */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__address__["a" /* Address */]
        ]
    })
], AddressModule);

//# sourceMappingURL=address.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { NewAddressForm } from '../new-address-form/new-address-form';
//import { EditAddressForm } from '../edit-address-form/edit-address-form';
var Address = (function () {
    function Address(nav, service, functions, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.service.getAddress()
            .then(function (results) { return _this.addresses = results; });
    }
    Address.prototype.addNewAddress = function () {
        this.nav.push('NewAddressForm');
    };
    Address.prototype.editAddress = function (id) {
        this.nav.push('EditAddressForm', id);
    };
    Address.prototype.deleteAddress = function (href) {
        var _this = this;
        this.service.deleteAddress(href)
            .then(function (results) { return _this.handleResults(results); });
    };
    Address.prototype.handleResults = function (results) {
        var _this = this;
        if (results.success) {
            this.service.getAddress()
                .then(function (results) { return _this.addresses = results; });
        }
        else if (results.error_warning) {
            this.functions.showAlert(this.values.lan.text_error, results.error_warning);
        }
    };
    Address.prototype.encodeUrl = function (href) {
        return href.replace(/&amp;/g, '&');
    };
    return Address;
}());
Address = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({template:/*ion-inline-start:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/account/address/address.html"*/'\n<ion-header>\n   <ion-navbar color="header">\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title text-center>{{values.lan?.text_address}}</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content class="account-address">\n\n<ion-spinner *ngIf="!addresses" style="font-size: 17px;" name="crescent" style="display: block; margin-left: auto; margin-right:auto; margin-top:150px;"></ion-spinner>\n\n   <div style="padding-bottom:50px">\n      <div *ngIf="addresses" style="padding:8px">\n         <ion-item *ngFor="let item of addresses.addresses">\n            <h2 style="font-family:Arial;font-size:16px" [innerHTML]="item.address"></h2>\n            <ion-row no-padding>\n               <ion-col>\n                  <button ion-button clear color="button-color" small (click)="editAddress(item.address_id)">\n                     <ion-icon name="md-create"></ion-icon>\n                     {{values.lan?.text_edit}}\n                  </button>\n               </ion-col>\n               <ion-col style="margin:0px">\n                  <ion-buttons end>\n                     <button ion-button clear color="button-color" small (click)="deleteAddress(encodeUrl(item.delete))">\n                        <ion-icon name="ios-trash"></ion-icon>\n                        {{values.lan?.text_trash}}\n                     </button>\n                  </ion-buttons>\n               </ion-col>\n            </ion-row>\n         </ion-item>\n         <button style="margin-top:10px" ion-button block color="button-color" type="submit" class="button button-block button-default" (click)="addNewAddress()">{{addresses.button_new_address}}</button>\n      </div>\n   </div>\n</ion-content>'/*ion-inline-end:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/account/address/address.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */]])
], Address);

//# sourceMappingURL=address.js.map

/***/ })

});
//# sourceMappingURL=25.main.js.map