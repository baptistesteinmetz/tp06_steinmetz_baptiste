"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var environment_1 = require("../environments/environment");
var operators_1 = require("rxjs/operators");
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.filteredProducts$ = new rxjs_1.ReplaySubject(1);
    }
    ProductService.prototype.getSearchResults = function () {
        return this.filteredProducts$.asObservable();
    };
    ProductService.prototype.searchProduct = function (searchTerm) {
        var _this = this;
        return this.getProducts().pipe(
        // using tap to update the stream without changing any data
        operators_1.tap(function (products) {
            products = products.filter(function (product) {
                if (!isNaN(parseFloat(searchTerm))) {
                    return product.price === parseFloat(searchTerm);
                }
                else {
                    return product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm);
                }
            });
            // updating the stream
            _this.filteredProducts$.next(products);
        }), operators_1.map(function () { return void 0; }));
    };
    ProductService.prototype.getSingleProduct = function (id) {
        return this.getProducts().pipe(operators_1.map(function (product) { return product.find(function (prod) {
            if (prod.id == id)
                return prod;
        }); }));
    };
    ProductService.prototype.getProducts = function () {
        var _this = this;
        // return cached products
        if (this.products) {
            return rxjs_1.of(this.products);
        }
        // fetch and cache products
        return this.http.get(environment_1.environment.baseUrl).pipe(operators_1.tap(function (products) { return _this.products = products; }));
    };
    ProductService.prototype.priceFilter = function (status) {
        var _this = this;
        return this.getProducts().pipe(operators_1.tap(function (products) {
            products = products.sort(function (a, b) {
                switch (status) {
                    case 0:
                        return a.price < b.price ? -1 : 1;
                        break;
                    case 1:
                        return a.price > b.price ? -1 : 1;
                        break;
                }
            });
            _this.filteredProducts$.next(products);
        }), operators_1.map(function () { return void 0; }));
    };
    ProductService.prototype.nameFilter = function (status) {
        var _this = this;
        return this.getProducts().pipe(operators_1.tap(function (products) {
            products = products.sort(function (a, b) {
                switch (status) {
                    case 0:
                        // console.log('here !');
                        return a.name < b.name ? -1 : 1;
                        break;
                    case 1:
                        // console.log('here ?');
                        return a.name > b.name ? -1 : 1;
                        break;
                }
            });
            _this.filteredProducts$.next(products);
        }), operators_1.map(function () { return void 0; }));
    };
    ProductService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
