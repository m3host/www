webpackJsonp([17],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__return_product__ = __webpack_require__(315);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnProductModule", function() { return ReturnProductModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReturnProductModule = (function () {
    function ReturnProductModule() {
    }
    return ReturnProductModule;
}());
ReturnProductModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__return_product__["a" /* ReturnProduct */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__return_product__["a" /* ReturnProduct */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__return_product__["a" /* ReturnProduct */]
        ]
    })
], ReturnProductModule);

//# sourceMappingURL=return-product.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnProduct; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { OrderDetails } from '../order-details/order-details';

var ReturnProduct = (function () {
    function ReturnProduct(nav, service, params, functions, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.disableSubmit = false;
        this.href = params.data;
        this.buttonText = this.values.lan.text_button_continue;
        this.service.getForm(this.href)
            .then(function (results) { return _this.form = results; });
    }
    ReturnProduct.prototype.saveReturnProduct = function (href) {
        var _this = this;
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.buttonText = this.values.lan.text_loading;
            this.service.saveReturnProduct(this.form, href)
                .then(function (results) { return _this.handleResults(results); });
        }
    };
    ReturnProduct.prototype.handleResults = function (results) {
        this.disableSubmit = false;
        this.buttonText = this.values.lan.text_button_continue;
        this.functions.showAlert(this.values.lan.text_success, results.text_message);
        this.nav.pop();
    };
    ReturnProduct.prototype.encodeUrl = function (href) {
        return href.replace(/&amp;/g, '&');
    };
    ReturnProduct.prototype.validateForm = function () {
        if (this.form.return_reason_id == undefined || this.form.return_reason_id == "") {
            this.functions.showAlert(this.values.lan.text_error, this.values.lan.text_error_return_reason);
            return false;
        }
        if (this.form.opened == undefined || this.form.opened == false) {
            this.functions.showAlert(this.values.lan.text_error, this.values.lan.text_error_product_opened);
            return false;
        }
        if (this.form.firstname == undefined || this.form.firstname == "") {
            return false;
        }
        if (this.form.email == undefined || this.form.email == "") {
            return false;
        }
        if (this.form.order_id == undefined || this.form.order_id == "") {
            return false;
        }
        if (this.form.product == undefined || this.form.product == "") {
            return false;
        }
        if (this.form.quantity == undefined || this.form.quantity == "") {
            return false;
        }
        if (this.form.model == undefined || this.form.model == "") {
            return false;
        }
        return true;
    };
    return ReturnProduct;
}());
ReturnProduct = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({template:/*ion-inline-start:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/account/return-product/return-product.html"*/'<!--\n   Generated template for the AccountLoginPage page.\n   \n   See http://ionicframework.com/docs/v2/components/#navigation for more info on\n   Ionic pages and navigation.\n   -->\n<ion-header>\n   <ion-navbar color="header">\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title text-center text-center>{{values.lan?.text_return_product}}</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content class="return-product">\n<ion-spinner *ngIf="!form" style="font-size: 17px;" name="crescent" style="display: block; margin-left: auto; margin-right:auto; margin-top:150px;"></ion-spinner>\n   <div *ngIf="form" style="padding:8px">\n      <ion-list style="margin-bottom:5px">\n         <ion-item-divider style="background-color: #f4f4f4" color="light"><strong>{{form.text_order}}</strong></ion-item-divider>\n         <ion-item>\n            <ion-label floating>{{form.entry_firstname}}</ion-label>\n            <ion-input required type="text" [(ngModel)]="form.firstname"></ion-input>\n         </ion-item>\n         <ion-item>\n            <ion-label floating>{{form.entry_lastname}}</ion-label>\n            <ion-input required type="text" [(ngModel)]="form.lastname"></ion-input>\n         </ion-item>\n         <ion-item>\n            <ion-label floating>{{form.entry_email}}</ion-label>\n            <ion-input required type="email" [(ngModel)]="form.email"></ion-input>\n         </ion-item>\n         <ion-item>\n            <ion-label floating>{{form.entry_telephone}}</ion-label>\n            <ion-input required type="number" [(ngModel)]="form.telephone"></ion-input>\n         </ion-item>\n         <ion-item>\n            <ion-label floating>{{form.entry_order_id}}</ion-label>\n            <ion-input required type="text" [(ngModel)]="form.order_id"></ion-input>\n         </ion-item>\n         <ion-item>\n            <ion-label floating>{{form.entry_date_ordered}}</ion-label>\n            <ion-input required type="date" [(ngModel)]="form.date_ordered"></ion-input>\n         </ion-item>\n      </ion-list>\n      <ion-list style="margin-bottom:5px">\n         <ion-item-divider style="background-color: #f4f4f4" color="light"><strong>{{form.text_product}}</strong></ion-item-divider>\n         <ion-item>\n            <ion-label floating>{{form.entry_product}}</ion-label>\n            <ion-input required type="text" [(ngModel)]="form.product"></ion-input>\n         </ion-item>\n         <ion-item>\n            <ion-label floating>{{form.entry_quantity}}</ion-label>\n            <ion-input required type="number" [(ngModel)]="form.quantity"></ion-input>\n         </ion-item>\n         <ion-item>\n            <ion-label floating>{{form.entry_model}}</ion-label>\n            <ion-input required type="text" [(ngModel)]="form.model"></ion-input>\n         </ion-item>\n      </ion-list>\n      <ion-list radio-group [(ngModel)]="form.return_reason_id" style="margin-bottom:0px">\n      <ion-item-divider style="background-color: #f4f4f4" color="light"><strong>{{form.entry_reason}}</strong></ion-item-divider>\n      <div *ngFor= "let item of form.return_reasons">\n         <ion-item>\n            <ion-label>{{item.name}}</ion-label>\n            <ion-radio value="{{item.name}}" checked></ion-radio>\n         </ion-item>\n      </div>\n      </ion-list>\n      <ion-item>\n         <ion-label floating>{{form.entry_fault_detail}}</ion-label>\n         <ion-input required type="text" [(ngModel)]="form.fault_detail"></ion-input>\n      </ion-item>\n      <ion-row radio-group [(ngModel)]="form.opened">\n      <ion-col width-40>\n         <ion-item no-line>\n            {{form.entry_opened}}\n         </ion-item>\n      </ion-col>\n      <ion-col width-30>\n         <ion-item no-line>\n            <ion-label>{{form.text_yes}}</ion-label>\n            <ion-radio value="{{form.text_yes}}" checked></ion-radio>\n         </ion-item>\n      </ion-col>\n      <ion-col width-30>\n         <ion-item no-line>\n            <ion-label>{{form.text_no}}</ion-label>\n            <ion-radio value="{{form.text_no}}" checked></ion-radio>\n         </ion-item>\n      </ion-col>\n      </ion-row>\n      <ion-grid>\n         <button ion-button color="button-color" block [disabled]="disableSubmit" (click)="saveReturnProduct(encodeUrl(form.action))">{{buttonText}}</button>\n      </ion-grid>\n   </div>\n   <br>\n   <br>\n</ion-content>'/*ion-inline-end:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/account/return-product/return-product.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
], ReturnProduct);

//# sourceMappingURL=return-product.js.map

/***/ })

});
//# sourceMappingURL=17.main.js.map