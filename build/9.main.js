webpackJsonp([9],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_summary__ = __webpack_require__(324);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSummaryModule", function() { return OrderSummaryModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderSummaryModule = (function () {
    function OrderSummaryModule() {
    }
    return OrderSummaryModule;
}());
OrderSummaryModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__order_summary__["a" /* OrderSummary */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order_summary__["a" /* OrderSummary */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__order_summary__["a" /* OrderSummary */]
        ]
    })
], OrderSummaryModule);

//# sourceMappingURL=order-summary.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_functions__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_checkout_service__ = __webpack_require__(208);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSummary; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrderSummary = (function () {
    function OrderSummary(nav, service, values, functions, alert, inAppBrowser) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.alert = alert;
        this.inAppBrowser = inAppBrowser;
        this.disableSubmit = false;
        this.buttonText = this.values.lan.text_confirm_order;
        this.service.getOrderSummary()
            .then(function (results) { return _this.orderSummary = results; });
    }
    OrderSummary.prototype.saveOrder = function () {
        var _this = this;
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.buttonText = this.values.lan.text_loading;
            if (this.orderSummary.payment_code == 'pp_pro') {
                this.service.savePpPro(this.orderSummary)
                    .then(function (results) { return _this.save(results); });
            }
            else if (this.orderSummary.payment_code == 'authorizenet_aim') {
                this.service.saveAuthoriseNet(this.orderSummary)
                    .then(function (results) { return _this.save(results); });
            }
            else if (this.orderSummary.payment_code == 'cod' || this.orderSummary.payment_code == 'bank_transfer' || this.orderSummary.payment_code == 'cheque' || this.orderSummary.payment_code == 'skrill') {
                this.service.saveOrder(this.orderSummary.payment_code)
                    .then(function (results) { return _this.handleResults(results); });
            }
            else if (this.orderSummary.payment_code == 'pp_standard') {
                var browser = this.inAppBrowser.create(this.orderSummary.payment.redirect, '_blank', 'location=yes');
                browser.show();
                this.values.count = 0;
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* Home */]);
            }
            else if (this.orderSummary.payment_code == 'payu') {
                var payment = this.orderSummary.payment;
                var url = payment.action + '?key=' + payment.key + '&txnid=' + payment.txnid + '&amount=' + payment.amount + '&productinfo=' + payment.productinfo + '&firstname=' + payment.firstname + '&Lastname=' + payment.Lastname +
                    '&Zipcode=' + payment.Zipcode + '&email=' + payment.email + '&phone=' + payment.phone + '&surl=' + payment.surl + '&furl=' + payment.furl +
                    '&curl=' + payment.curl + '&Hash=' + payment.Hash + '&Pg=' + payment.Pg + '&service_provider=' + payment.service_provider + '&address1=' + payment.address1 +
                    '&address2=' + payment.address2 + '&city=' + payment.city + '&country=' + payment.country + '&state=' + payment.state;
                console.log(url);
                var browser = this.inAppBrowser.create(url, '_blank', 'location=yes');
                browser.show();
                this.values.count = 0;
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* Home */]);
            }
        }
    };
    OrderSummary.prototype.save = function (results) {
        var _this = this;
        this.service.saveOrder(this.orderSummary.payment_code)
            .then(function (results) { return _this.handleResults(results); });
    };
    OrderSummary.prototype.handleResults = function (results) {
        this.disableSubmit = false;
        this.buttonText = this.values.lan.text_confirm_order;
        if (results.status) {
            this.values.count = 0;
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* Home */]);
        }
        var alert = this.alert.create({
            title: results.heading_title,
            subTitle: results.text,
            buttons: [results.button_continue]
        });
        alert.present(alert);
    };
    OrderSummary.prototype.validateForm = function () {
        if (this.orderSummary.payment_code == 'pp_pro') {
            if (this.orderSummary.payment.cc_type == undefined) {
                this.functions.showAlert(this.values.lan.text_error, "Please Select Card Type");
                return false;
            }
            if (this.orderSummary.payment.cc_number == undefined || this.orderSummary.payment.cc_number == "") {
                this.functions.showAlert(this.values.lan.text_error, "Please Type Card Number");
                return false;
            }
            if (this.orderSummary.payment.cc_expire_date_month == undefined) {
                this.functions.showAlert(this.values.lan.text_error, "Please Select Card Expire Month");
                return false;
            }
            if (this.orderSummary.payment.cc_expire_date_year == undefined) {
                this.functions.showAlert(this.values.lan.text_error, "Please Select Card Expire Year");
                return false;
            }
            if (this.orderSummary.payment.cc_cvv2 == undefined || this.orderSummary.payment.cc_cvv2 == "") {
                this.functions.showAlert(this.values.lan.text_error, "Please Enter Card CVV Number");
                return false;
            }
        }
        else if (this.orderSummary.payment_code == 'authorizenet_aim') {
            if (this.orderSummary.payment.cc_owner == undefined || this.orderSummary.payment.cc_owner == "") {
                this.functions.showAlert(this.values.lan.text_error, "Please Enter Card Owner Name");
                return false;
            }
            if (this.orderSummary.payment.cc_number == undefined || this.orderSummary.payment.cc_number == "") {
                this.functions.showAlert(this.values.lan.text_error, "Please Type Card Number");
                return false;
            }
            if (this.orderSummary.payment.cc_expire_date_month == undefined) {
                this.functions.showAlert(this.values.lan.text_error, "Please Select Card Expire Month");
                return false;
            }
            if (this.orderSummary.payment.cc_expire_date_year == undefined) {
                this.functions.showAlert(this.values.lan.text_error, "Please Select Card Expire Year");
                return false;
            }
            if (this.orderSummary.payment.cc_cvv2 == undefined || this.orderSummary.payment.cc_cvv2 == "") {
                this.functions.showAlert(this.values.lan.text_error, "Please Enter Card CVV Number");
                return false;
            }
        }
        return true;
    };
    return OrderSummary;
}());
OrderSummary = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({template:/*ion-inline-start:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/checkout/order-summary/order-summary.html"*/'<!--\n   Generated template for the AccountLoginPage page.\n   \n   See http://ionicframework.com/docs/v2/components/#navigation for more info on\n   Ionic pages and navigation.\n   -->\n<ion-header>\n   <ion-navbar color="header">\n      <ion-title text-center>{{values.lan?.text_order}}</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content class="order-summary">\n<ion-spinner *ngIf="!orderSummary" style="font-size: 17px;" name="crescent" style="display: block; margin-left: auto; margin-right:auto; margin-top:150px;"></ion-spinner>\n\n   <div style="padding-bottom:50px">\n      <div *ngIf="orderSummary" style="padding: 0px 8px 8px">\n         <ion-list style="margin-bottom:0px;border-bottom:0.5px solid #e0e0e0">\n            <ion-item *ngFor="let item of orderSummary.products">\n               <h2 [innerHTML]="item.name"><b>{{orderSummary.column_name}} :</b></h2>\n               <h2><b>{{orderSummary.column_price}} :</b> {{item.price}}</h2>\n               <h3><b>{{orderSummary.column_quantity}} :</b> {{item.quantity}}</h3>\n               <h2><b>{{orderSummary.column_total}} :</b> {{item.total}}</h2>\n            </ion-item>\n         </ion-list>\n         <ion-grid style="padding:0px 5px">\n            <ion-row *ngFor="let total of orderSummary.totals">\n               <ion-col style="padding:0px 5px" width-50>\n                  <h6 style="margin:10px 0px"><b>{{total.title}}</b></h6>\n               </ion-col>\n               <ion-col style="padding:0px 5px" width-50 text-right>\n                  <h6 color="header" style="margin:10px 0px"><b>{{total.text}}</b></h6>\n               </ion-col>\n            </ion-row>\n         </ion-grid>\n         <div *ngIf="orderSummary.payment_code == \'pp_pro\'">\n            <br/>\n            <ion-item-divider style="background-color: #f4f4f4" color="light"><strong>\n               {{orderSummary.payment.text_credit_card}}</strong>\n            </ion-item-divider>\n            <ion-item>\n               <ion-label>  \n                  {{orderSummary.payment.entry_cc_type}}\n               </ion-label>\n               <ion-select [(ngModel)]="orderSummary.payment.cc_type">\n               <div *ngFor="let type of orderSummary.payment.cards">\n                  <ion-option value="{{type.value}}">{{type.text}}</ion-option>\n               </div>\n               </ion-select> \n            </ion-item>\n            <ion-item>\n               <ion-label floating>{{orderSummary.payment.entry_cc_number}}</ion-label>\n               <ion-input required type="number" [(ngModel)]="orderSummary.payment.cc_number"></ion-input>\n            </ion-item>\n            <ion-item>\n               <ion-label>  \n                  {{orderSummary.payment.entry_cc_expire_date}}\n               </ion-label>\n               <ion-select [(ngModel)]="orderSummary.payment.cc_expire_date_month">\n               <div *ngFor="let type of orderSummary.payment.months">\n                  <ion-option value="{{type.value}}">{{type.text}}</ion-option>\n               </div>\n               </ion-select>\n               <ion-select [(ngModel)]="orderSummary.payment.cc_expire_date_year">\n               <div *ngFor="let type of orderSummary.payment.year_expire">\n                  <ion-option value="{{type.value}}">{{type.text}}</ion-option>\n               </div>\n               </ion-select> \n            </ion-item>\n            <ion-item>\n               <ion-label floating>{{orderSummary.payment.entry_cc_cvv2}}</ion-label>\n               <ion-input required type="number" [(ngModel)]="orderSummary.payment.cc_cvv2"></ion-input>\n            </ion-item>\n         </div>\n         <div *ngIf="orderSummary.payment_code == \'authorizenet_aim\'">\n            <br/>\n            <ion-item-divider style="background-color: #f4f4f4" color="light">\n               {{orderSummary.payment.text_credit_card}}\n            </ion-item-divider>\n            <ion-item>\n               <ion-label floating>{{orderSummary.payment.entry_cc_owner}}</ion-label>\n               <ion-input required type="text" [(ngModel)]="orderSummary.payment.cc_owner"></ion-input>\n            </ion-item>\n            <ion-item>\n               <ion-label floating>{{orderSummary.payment.entry_cc_number}}</ion-label>\n               <ion-input required type="number" [(ngModel)]="orderSummary.payment.cc_number"></ion-input>\n            </ion-item>\n            <ion-item>\n               <ion-label>  \n                  {{orderSummary.payment.entry_cc_expire_date}}\n               </ion-label>\n               <ion-select [(ngModel)]="orderSummary.payment.cc_expire_date_month">\n               <div *ngFor="let type of orderSummary.payment.months">\n                  <ion-option value="{{type.value}}">{{type.text}}</ion-option>\n               </div>\n               </ion-select>\n               <ion-select [(ngModel)]="orderSummary.payment.cc_expire_date_year">\n               <div *ngFor="let type of orderSummary.payment.year_expire">\n                  <ion-option value="{{type.value}}">{{type.text}}</ion-option>\n               </div>\n               </ion-select> \n            </ion-item>\n            <ion-item>\n               <ion-label floating>{{orderSummary.payment.entry_cc_cvv2}}</ion-label>\n               <ion-input required type="number" [(ngModel)]="orderSummary.payment.cc_cvv2"></ion-input>\n            </ion-item>\n         </div>\n         <div *ngIf="orderSummary.payment_code == \'bank_transfer\'">\n            <br/>\n            <ion-item-divider style="background-color: #f4f4f4" color="light">\n               {{orderSummary.payment.text_instruction}}\n            </ion-item-divider>\n            <ion-item text-wrap>\n               {{orderSummary.payment.text_description}}\n            </ion-item>\n            <ion-item text-wrap>\n               {{orderSummary.payment.text_payment}}\n            </ion-item>\n            <ion-item text-wrap>\n               {{orderSummary.payment.bank}}\n            </ion-item>\n         </div>\n         <button style="margin-top:10px" ion-button block color="button-color" type="submit" class="button button-block button-default" [disabled]="disableSubmit" (click)="saveOrder()">{{buttonText}}</button>\n      </div>\n   </div>\n</ion-content>'/*ion-inline-end:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/checkout/order-summary/order-summary.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_service_checkout_service__["a" /* CheckoutService */], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_5__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], OrderSummary);

//# sourceMappingURL=order-summary.js.map

/***/ })

});
//# sourceMappingURL=9.main.js.map