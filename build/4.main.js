webpackJsonp([4],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(331);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchPageModule = (function () {
    function SearchPageModule() {
    }
    return SearchPageModule;
}());
SearchPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]
        ]
    })
], SearchPageModule);

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_search_service__ = __webpack_require__(212);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import {CartPage} from '../cart/cart';
//import { ProductPage } from '../product/product';
/*
  Generated class for the ProductPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var SearchPage = (function () {
    function SearchPage(nav, service, values) {
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.listview = false;
        this.shouldShowCancel = true;
        this.options = [];
        this.quantity = "1";
        this.values.filter = {};
        this.myInput = "";
    }
    SearchPage.prototype.getCart = function () {
        this.nav.push('CartPage');
    };
    SearchPage.prototype.onInput = function ($event) {
        var _this = this;
        this.searchKey = $event.srcElement.value;
        this.values.filter = {};
        this.service.getSearch($event.srcElement.value, this.count, this.values.filter)
            .then(function (results) { return _this.products = results; });
    };
    SearchPage.prototype.getProduct = function (href) {
        this.nav.push('ProductPage', href);
    };
    SearchPage.prototype.encodeUrl = function (href) {
        return href.replace(/&amp;/g, '&');
    };
    SearchPage.prototype.doInfinite = function (href, infiniteScroll) {
        var _this = this;
        this.service.loadMore(href)
            .then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    SearchPage.prototype.handleMore = function (results, infiniteScroll) {
        infiniteScroll.complete();
        if (results.products != undefined) {
            for (var i = 0; i < results.products.length; i++) {
                this.products.products.push(results.products[i]);
            }
            ;
        }
        this.products.current_page = results.current_page;
        this.products.total_page = results.total_page;
        this.products.next_page_url = results.next_page_url;
    };
    SearchPage.prototype.addToCart = function (id, href) {
        var _this = this;
        if (this.values.cartItemCount[id] == undefined) {
            this.values.cartItemCount[id] = 1;
        }
        else {
            this.values.cartItemCount[id] += 1;
        }
        ;
        var text = '{';
        var i;
        for (i = 0; i < this.options.length; i++) {
            var res = this.options[i].split(":");
            text += '"option[' + res[0] + ']":"' + res[1] + '",';
        }
        text += '"product_id":"' + id + '",';
        text += '"quantity":"' + this.quantity + '"}';
        var obj = JSON.parse(text);
        this.service.addToCart(obj)
            .then(function (results) { return _this.handleAddToCart(results, href); });
    };
    SearchPage.prototype.handleAddToCart = function (results, href) {
        if (results.error) {
            this.nav.push('ProductPage', href);
        }
    };
    SearchPage.prototype.deleteFromCart = function (id) {
        var _this = this;
        if (this.values.cartItemCount[id] != undefined && this.values.cartItemCount[id] == 0) {
            this.values.cartItemCount[id] = 0;
        }
        else {
            this.values.cartItemCount[id] -= 1;
        }
        ;
        this.service.updateCart(id, this.values.cartItemCount[id])
            .then(function (results) { return _this.status = results; });
    };
    SearchPage.prototype.setListView = function () {
        this.values.listview = true;
    };
    SearchPage.prototype.setGridView = function () {
        this.values.listview = false;
    };
    return SearchPage;
}());
SearchPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({template:/*ion-inline-start:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/search/search.html"*/'<!--\n   Generated template for the SearchPage page.\n   \n   See http://ionicframework.com/docs/v2/components/#navigation for more info on\n   Ionic pages and navigation.\n   -->\n<ion-header>\n   <ion-navbar color="header">\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-searchbar\n      [(ngModel)]="myInput"\n      [showCancelButton]="shouldShowCancel"\n      (ionInput)="onInput($event)">\n      </ion-searchbar>\n   </ion-navbar>\n</ion-header>\n<ion-content class="search">\n<ion-spinner *ngIf="!products" style="font-size: 17px;" name="crescent" style="display: block; margin-left: auto; margin-right:auto; margin-top:150px;"></ion-spinner>\n\n   <div *ngIf="products">\n      <div *ngIf="products.products.length">\n         <div *ngIf="values.listview">\n            <ion-item color="item" no-lines style="font-family:Arial; font-size:19px; font-weight:500">\n               {{values.lan?.text_product}}\n               <!--button ion-button item-right clear icon-only color="menu" class="has-icon icon-only" (click)="setListView()">\n                  <ion-icon ios="ios-list-box" md="ios-list-box"></ion-icon>\n               </button-->\n               <button ion-button item-right clear icon-only color="button-color" class="has-icon icon-only" (click)="setGridView()" style="font-size: 17px;">\n                  <ion-icon ios="ios-grid" md="md-grid"></ion-icon>\n               </button>\n            </ion-item>\n            <ion-list>\n               <ion-item *ngFor="let item of products.products" style="padding-left:8px">\n                  <ion-thumbnail item-left style="margin:5px 16px 2px 0px">\n                     <a (click)="getProduct(encodeUrl(item.href))">\n                     <img src="{{item.thumb}}" class="image-list"></a>\n                  </ion-thumbnail>\n                  <h2 style="font-size:15.3px;margin:0 0 6px;font-weight:600">{{item.name}}</h2>\n                  <h4 *ngIf="!item.special"> {{item.price}}</h4>\n                  <h3 *ngIf="item.special"><del>{{item.price}}</del></h3>\n                  <h4 *ngIf="item.special"> {{item.special}}</h4>\n                  <p style="margin:3px 0 6px">{{item.description}}</p>\n                  <!--START OF COMMENT ADD TO CARt BUTTON-->\n                  <!--button ion-button no-margin color="button-color" item-right outline *ngIf="values.cartItemCount[item.product_id] == undefined || values.cartItemCount[item.product_id] == 0" (click)="addToCart(item.product_id, encodeUrl(item.href))">\n                     {{values.lan?.text_add}}\n                     </button>\n                     <button ion-button style="margin-right:0px;" item-right clear icon-only color="button-color" class="has-icon icon-only" *ngIf="values.cartItemCount[item.product_id] >= 1" (click)="deleteFromCart(item.product_id)">\n                     <ion-icon class="margin" ios="ios-remove-circle-outline" md="ios-remove-circle-outline"></ion-icon>\n                     </button>\n                     <button ion-button style="margin-right:0px;" item-right color="button-color" clear *ngIf="values.cartItemCount[item.product_id] >= 1">{{values.cartItemCount[item.product_id]}}</button>\n                     <button ion-button item-right clear color="button-color" icon-only class="has-icon icon-only" *ngIf="values.cartItemCount[item.product_id] >= 1" (click)="addToCart(item.product_id, encodeUrl(item.href))">\n                     <ion-icon ios="ios-add-circle-outline" md="ios-add-circle-outline"></ion-icon>\n                     </button-->\n                  <!--END OF COMMENT ADD TO CARt BUTTON-->\n               </ion-item>\n            </ion-list>\n         </div>\n         <!--Start of grid view-->\n         <div *ngIf="!values.listview">\n            <ion-item color="item" style="font-family:Arial; font-size:19px; font-weight:500">\n               {{values.lan?.text_product}}\n               <button ion-button item-right icon-only clear color="button-color" class="has-icon icon-only" (click)="setListView()" style="font-size: 17px;">\n                  <ion-icon ios="ios-list-box" md="ios-list-box"></ion-icon> \n               </button>\n               <!--button ion-button item-right icon-only clear color="button-color" class="has-icon icon-only" (click)="setGridView()">\n                  <ion-icon ios="ios-grid" md="md-grid"></ion-icon>\n               </button-->\n            </ion-item>\n            <div class="card-background-page grid">\n               <ion-row class="row unlimited-items">\n                  <ion-col style="padding:3px 2px" class="col" *ngFor="let item of products.products">\n                     <ion-card>\n                        <a (click)="getProduct(encodeUrl(item.href))">\n                           <ion-card-content no-padding style="border-bottom: 0.5px solid #ececec">\n                              <img src="{{item.thumb}}">\n                           </ion-card-content>\n                        </a>\n                         <ion-label text-center [innerHTML]="item.name" style="margin:8px 0 0 0;font-weight:600;font-size: 15.3px;"></ion-label>\n                        <ion-item no-margin no-padding class="price-list price">\n                           <h4 style="text-align:center;" *ngIf="!item.special"> {{item.price}}</h4>\n                           <h3 style="text-align:center;" *ngIf="item.special"><del>{{item.price}}</del></h3>\n                           <h4 style="text-align:center;" *ngIf="item.special"> {{item.special}}</h4>\n                           <!--START OF COMMENT ADD TO CARt BUTTON-->\n                           <!--button ion-button no-margin color="button-color" item-right clear *ngIf="values.cartItemCount[item.product_id] == undefined || values.cartItemCount[item.product_id] == 0" (click)="addToCart(item.product_id, encodeUrl(item.href))">\n                              {{values.lan?.text_add}}\n                              </button>\n                              <button ion-button item-right clear icon-only item-right clear color="button-color" class="has-icon icon-only" *ngIf="values.cartItemCount[item.product_id] >= 1" (click)="deleteFromCart(item.product_id)">\n                              <ion-icon class="margin" ios="ios-remove-circle-outline" md="ios-remove-circle-outline"></ion-icon>\n                              </button>\n                              <button ion-button item-right color="button-color" clear *ngIf="values.cartItemCount[item.product_id] >= 1">{{values.cartItemCount[item.product_id]}}</button>\n                              <button ion-button class="margin" item-right clear color="button-color" icon-only class="has-icon icon-only" *ngIf="values.cartItemCount[item.product_id] >= 1" (click)="addToCart(item.product_id, encodeUrl(item.href))">\n                              <ion-icon ios="ios-add-circle-outline" md="ios-add-circle-outline"></ion-icon>\n                              </button-->\n                           <!--END OF COMMENT ADD TO CARt BUTTON-->\n                        </ion-item>\n                     </ion-card>\n                  </ion-col>\n               </ion-row>\n            </div>\n         </div>\n         <!--End of grid view-->\n      </div>\n      <ion-infinite-scroll (ionInfinite)="doInfinite(encodeUrl(products.next_page_url), $event)" *ngIf="products.current_page != products.total_page">\n      <ion-infinite-scroll-content\n         loadingSpinner="crescent"\n         loadingText="Loading more items...">\n      </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n   </div>\n</ion-content>'/*ion-inline-end:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/search/search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map