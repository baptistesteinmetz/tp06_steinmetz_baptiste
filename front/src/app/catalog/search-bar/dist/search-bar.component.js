"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SearchBarComponent = void 0;
var core_1 = require("@angular/core");
var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(productService) {
        this.productService = productService;
        // init value to asc price and no search input
        this.searchInput = '';
        this.filterPriceStatus = 0;
        this.productService.priceFilter(this.filterPriceStatus).subscribe();
    }
    SearchBarComponent.prototype.ngOnInit = function () {
        // get products
        this.productService.searchProduct(this.searchInput).subscribe();
    };
    SearchBarComponent.prototype.onSearchProducts = function () {
        // on input change we search products and update the view
        this.productService.searchProduct(this.searchInput.toLowerCase()).subscribe();
    };
    SearchBarComponent.prototype.onFilterPriceProducts = function () {
        this.filterNameStatus = null;
        // changing status and updating depending on price
        this.filterPriceStatus === 1 ? this.filterPriceStatus = 0 : this.filterPriceStatus = 1;
        this.productService.priceFilter(this.filterPriceStatus).subscribe();
    };
    SearchBarComponent.prototype.onFilterNameProducts = function () {
        this.filterPriceStatus = null;
        // changing status and updating depending on name;
        this.filterNameStatus === 1 ? this.filterNameStatus = 0 : this.filterNameStatus = 1;
        this.productService.nameFilter(this.filterNameStatus).subscribe();
    };
    __decorate([
        core_1.Input()
    ], SearchBarComponent.prototype, "products");
    SearchBarComponent = __decorate([
        core_1.Component({
            selector: 'app-search-bar',
            templateUrl: './search-bar.component.html',
            styleUrls: ['./search-bar.component.scss']
        })
    ], SearchBarComponent);
    return SearchBarComponent;
}());
exports.SearchBarComponent = SearchBarComponent;
