webpackJsonp([5],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products__ = __webpack_require__(330);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductsPageModule = (function () {
    function ProductsPageModule() {
    }
    return ProductsPageModule;
}());
ProductsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__products__["a" /* ProductsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__products__["a" /* ProductsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__products__["a" /* ProductsPage */]
        ]
    })
], ProductsPageModule);

//# sourceMappingURL=products.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_category_service__ = __webpack_require__(210);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { ProductPage } from '../product/product';
//import { CartPage } from '../cart/cart';
//import {SearchPage} from '../search/search';
/*
  Generated class for the ProductsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ProductsPage = (function () {
    function ProductsPage(nav, service, params, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.listview = false;
        this.has_more_items = true;
        this.href = params.data;
        this.count = 10;
        this.options = [];
        this.quantity = "1";
        this.service.getProducts(this.href)
            .then(function (results) { return _this.products = results; });
    }
    ProductsPage.prototype.encodeUrl = function (href) {
        return href.replace(/&amp;/g, '&');
    };
    ProductsPage.prototype.getProducts = function (href) {
        this.nav.push('ProductsPage', href);
    };
    ProductsPage.prototype.getProduct = function (href) {
        this.nav.push('ProductPage', href);
    };
    ProductsPage.prototype.getCart = function () {
        this.nav.push('CartPage');
    };
    ProductsPage.prototype.getSearch = function () {
        this.nav.push('SearchPage');
    };
    ProductsPage.prototype.doInfinite = function (href, infiniteScroll) {
        var _this = this;
        this.service.loadMore(href)
            .then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    ProductsPage.prototype.handleMore = function (results, infiniteScroll) {
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
    ProductsPage.prototype.addToCart = function (id, href) {
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
    ProductsPage.prototype.handleAddToCart = function (results, href) {
        if (results.error) {
            this.nav.push('ProductPage', href);
        }
    };
    ProductsPage.prototype.deleteFromCart = function (id) {
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
    ProductsPage.prototype.setListView = function () {
        this.values.listview = true;
    };
    ProductsPage.prototype.setGridView = function () {
        this.values.listview = false;
    };
    return ProductsPage;
}());
ProductsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({template:/*ion-inline-start:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/products/products.html"*/'<ion-header>\n   <ion-navbar color="header">\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title text-center>{{values.lan?.text_product}}</ion-title>\n      <ion-buttons end>\n         <button ion-button color="light" icon-only class="has-icon icon-only" (click)="getSearch()">\n            <ion-icon ios="ios-search" md="md-search"></ion-icon>\n         </button>\n         <button ion-button icon-only  class="has-icon icon-only has-badge" (click)="getCart()">\n            <ion-icon class="ion-ios-cart item-icon"></ion-icon>\n            <ion-badge class="badge badge-light" color="light" *ngIf="values.count">{{values.count}}</ion-badge>\n         </button>\n      </ion-buttons>\n   </ion-navbar>\n</ion-header>\n<ion-content class="products">\n<ion-spinner *ngIf="!products" style="font-size: 17px;" name="crescent" style="display: block; margin-left: auto; margin-right:auto; margin-top:150px;"></ion-spinner>\n\n   <div *ngIf="products">\n      <ion-item color="item" *ngIf="products.categories.length"><strong>{{values.lan?.text_category}}</strong></ion-item>\n      <div class="grid shade" *ngIf="products.categories.length">\n         <ion-row class="row unlimited-items">\n            <ion-col style="padding:3px 3px" class="col category-label" *ngFor="let item of products.categories">\n               <a style="margin:0px" ion-button color="light" (click)="getProducts(encodeUrl(item.href))">\n                  <ion-label class="category-label" [innerHTML]="item.name"></ion-label>\n               </a>\n            </ion-col>\n         </ion-row>\n      </div>\n      <div *ngIf="!products.products.length" style="margin-top:50px">\n      <h6 text-center>{{products.text_empty}}</h6>\n      </div>\n      <br>\n      <div *ngIf="products.products.length">\n         <div *ngIf="values.listview">\n            <ion-item color="item" no-lines style="font-family:Arial; font-size:19px; font-weight:500">\n               {{values.lan?.text_product}}\n               <!--button ion-button item-right clear icon-only color="button-color" class="has-icon icon-only" (click)="setListView()">\n                  <ion-icon ios="ios-list-box" md="ios-list-box"></ion-icon>\n               </button-->\n               <button ion-button item-right clear icon-only color="button-color" class="has-icon icon-only" (click)="setGridView()" style="font-size: 17px;">\n                  <ion-icon ios="ios-grid" md="md-grid"></ion-icon>\n               </button>\n            </ion-item>\n            <ion-list>\n               <ion-item *ngFor="let item of products.products" style="padding-left:8px">\n                  <ion-thumbnail item-left style="margin:5px 16px 2px 0px">\n                     <a (click)="getProduct(encodeUrl(item.href))">\n                     <img src="{{item.thumb}}" class="image-list"></a>\n                  </ion-thumbnail>\n                  <h2 style="font-size:15.3px;margin:0 0 6px;font-weight:600">{{item.name}}</h2>\n                  <h4 *ngIf="!item.special"> {{item.price}}</h4>\n                  <h3 *ngIf="item.special"><del>{{item.price}}</del></h3>\n                  <h4 *ngIf="item.special"> {{item.special}}</h4>\n                  <p style="margin:3px 0 6px">{{item.description}}</p>\n               </ion-item>\n            </ion-list>\n         </div>\n         <!--end of list view-->\n         <!--grid view-->\n         <div *ngIf="!values.listview">\n            <ion-item color="item" style="font-family:Arial; font-size:19px;font-weight:500">\n               {{values.lan?.text_product}}\n               <button ion-button icon-only item-right clear color="button-color" class="has-icon icon-only" (click)="setListView()" style="font-size: 17px;">\n                  <ion-icon ios="ios-list-box" md="ios-list-box"></ion-icon>\n               </button>\n               <!--button ion-button icon-only item-right clear color="button-color" class="has-icon icon-only" (click)="setGridView()">\n                  <ion-icon ios="ios-grid" md="md-grid"></ion-icon>\n               </button-->\n            </ion-item>\n            <div class="card-background-page grid">\n               <ion-row class="row unlimited-items">\n                  <ion-col style="padding:3px 3px" class="col" *ngFor="let item of products.products">\n                     <ion-card>\n                        <a (click)="getProduct(encodeUrl(item.href))">\n                           <ion-card-content no-padding style="border-bottom: 0.5px solid #ececec">\n                              <img src="{{item.thumb}}">\n                           </ion-card-content>\n                        </a>\n                        <ion-label text-center [innerHTML]="item.name" style="margin:8px 0 0 0;font-weight:600;font-size: 15.3px;"></ion-label>\n                        <ion-item no-margin no-padding class="price-list price">\n                           <h4 style="text-align:center;" *ngIf="!item.special"> {{item.price}}</h4>\n                           <h3 style="text-align:center;" *ngIf="item.special"><del>{{item.price}}</del></h3>\n                           <h4 style="text-align:center;" *ngIf="item.special"> {{item.special}}</h4>\n                        </ion-item>\n                     </ion-card>\n                  </ion-col>\n               </ion-row>\n            </div>\n         </div>\n         <!--End of grid view-->\n         <!--button fab fab-fixed fab-right fab-bottom small class="button-icon-only" (click)="showFilter()"><ion-icon name="ios-funnel"></ion-icon></button-->\n      </div>\n      <ion-infinite-scroll (ionInfinite)="doInfinite(encodeUrl(products.next_page_url), $event)" *ngIf="products.current_page != products.total_page">\n      <ion-infinite-scroll-content\n         loadingSpinner="crescent"\n         loadingText="Loading more items...">\n      </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n   </div>\n</ion-content>'/*ion-inline-end:"/home/rahamsolution/mstoreapp/products/opencart/opencart_fashion_appv1.0/src/pages/products/products.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_service_values__["a" /* Values */]])
], ProductsPage);

//# sourceMappingURL=products.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map