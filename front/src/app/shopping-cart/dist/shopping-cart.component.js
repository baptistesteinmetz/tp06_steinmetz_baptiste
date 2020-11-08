"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShoppingCartComponent = void 0;
var product_action_1 = require("./../../shared/actions/product-action");
var product_state_1 = require("./../../shared/states/product-state");
var core_1 = require("@angular/core");
var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(router, _renderer, _elemRef, store) {
        this.router = router;
        this._renderer = _renderer;
        this._elemRef = _elemRef;
        this.store = store;
        // @HostBinding('class.homeLogo') isHome:boolean = false;
        this.empty = true;
        // i want different styles depending on the route, since the shopping cart is shown on the store page (like amazon)
        if (this.router.url == '/cart') {
            this._renderer.setAttribute(this._elemRef.nativeElement, 'id', 'shopping-cart-page');
        }
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        this.listProduct$ = this.store.select(function (state) { return state.listProducts.products; });
        // Solution 1
        this.nbProducts$ = this.store.select(product_state_1.ProductState.getNbProducts);
        this.priceProducts$ = this.store.select(product_state_1.ProductState.getFullPriceProducts);
    };
    ShoppingCartComponent.prototype.onClickRemove = function (product) {
        this.removeItem(product);
    };
    ShoppingCartComponent.prototype.removeItem = function (product) {
        this.store.dispatch(new product_action_1.DelProduct(product));
    };
    ShoppingCartComponent = __decorate([
        core_1.Component({
            selector: 'app-shopping-cart',
            templateUrl: './shopping-cart.component.html',
            styleUrls: ['./shopping-cart.component.scss']
        })
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());
exports.ShoppingCartComponent = ShoppingCartComponent;
