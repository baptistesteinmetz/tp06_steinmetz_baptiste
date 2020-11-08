"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductListComponent = void 0;
var animations_1 = require("@angular/animations");
var product_action_1 = require("./../../../shared/actions/product-action");
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService, store) {
        this.productService = productService;
        this.store = store;
        this.products = this.productService.getSearchResults();
        this.stateHide = 'inactive';
        this.loaded = true;
    }
    ProductListComponent.prototype.hideCart = function (event) {
        var _this = this;
        var switchState = this.stateHide;
        switchState == 'active' ? switchState = 'inactive' : switchState = 'active';
        var timer$ = rxjs_1.timer(100);
        timer$.subscribe(function (t) {
            _this.stateHide = switchState;
        });
    };
    ProductListComponent.prototype.onClickAdd = function (product) {
        this.addProduct(product);
    };
    ProductListComponent.prototype.addProduct = function (product) {
        this.store.dispatch(new product_action_1.AddProduct(product));
    };
    ProductListComponent.prototype.ngOnInit = function () {
        // setTimeout(() => {
        //   // this.loaded = true;
        // }, 3000);
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'app-product-list',
            templateUrl: './product-list.component.html',
            styleUrls: ['./product-list.component.scss'],
            animations: [
                animations_1.trigger('hide', [
                    animations_1.state('active', animations_1.style({
                        transform: 'translateX(80%)'
                    })),
                    animations_1.state('inactive', animations_1.style({
                        transform: 'translateX(0%)'
                    })),
                    animations_1.transition('active => inactive', animations_1.animate('800ms ease-in')),
                ])
            ]
        })
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
