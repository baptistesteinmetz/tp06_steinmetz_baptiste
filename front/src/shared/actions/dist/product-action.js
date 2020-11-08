"use strict";
exports.__esModule = true;
exports.ShowProduct = exports.DelProduct = exports.AddProduct = void 0;
var AddProduct = /** @class */ (function () {
    function AddProduct(payload) {
        this.payload = payload;
    }
    AddProduct.type = '[Product] Add';
    return AddProduct;
}());
exports.AddProduct = AddProduct;
var DelProduct = /** @class */ (function () {
    function DelProduct(payload) {
        this.payload = payload;
    }
    DelProduct.type = '[Product] Del';
    return DelProduct;
}());
exports.DelProduct = DelProduct;
var ShowProduct = /** @class */ (function () {
    function ShowProduct(payload) {
        this.payload = payload;
    }
    ShowProduct.type = '[Product] Show';
    return ShowProduct;
}());
exports.ShowProduct = ShowProduct;
