"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.ProductState = void 0;
var product_action_1 = require("./../actions/product-action");
var store_1 = require("@ngxs/store");
var ProductState = /** @class */ (function () {
    function ProductState() {
    }
    ProductState.getProduct = function (id) {
        // return state.products.find(x => x.id === id);
    };
    ProductState.getNbProducts = function (state) {
        return state.products.length;
    };
    ProductState.getFullPriceProducts = function (state) {
        var price = 0;
        state.products.forEach(function (product) {
            price += product.price;
        });
        var rounding = price.toFixed(2);
        price = Number(rounding);
        return price;
    };
    ProductState.prototype.add = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var payload = _b.payload;
        var state = getState();
        // if(!state.products.find((product)=> product.id === payload.id)){
        // ProductState.getFullPriceProducts(state);
        patchState({
            // créer un nouveau tableau
            // l'opérateur ... permet de consituer une liste d'élement du tableau
            products: __spreadArrays(state.products, [payload])
        });
        // }
    };
    ProductState.prototype.del = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var payload = _b.payload;
        var state = getState();
        var index = state.products.indexOf(payload);
        state.products.splice(index, 1);
        patchState({
        //   // supprimer le payload dans users
        //   products: state.products
        });
    };
    ProductState.prototype.show = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var payload = _b.payload;
        var state = getState();
        patchState({
            product: payload
        });
    };
    __decorate([
        store_1.Action(product_action_1.AddProduct)
    ], ProductState.prototype, "add");
    __decorate([
        store_1.Action(product_action_1.DelProduct)
    ], ProductState.prototype, "del");
    __decorate([
        store_1.Action(product_action_1.ShowProduct)
    ], ProductState.prototype, "show");
    __decorate([
        store_1.Selector()
    ], ProductState, "getProduct");
    __decorate([
        store_1.Selector()
    ], ProductState, "getNbProducts");
    __decorate([
        store_1.Selector()
    ], ProductState, "getFullPriceProducts");
    ProductState = __decorate([
        store_1.State({
            name: 'listProducts',
            defaults: {
                products: [],
                product: null
            }
        })
    ], ProductState);
    return ProductState;
}());
exports.ProductState = ProductState;
