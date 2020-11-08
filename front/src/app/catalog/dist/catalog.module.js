"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CatalogModule = void 0;
var catalog_routing_module_1 = require("./catalog-routing.module");
var common_1 = require("@angular/common");
var shopping_cart_module_1 = require("../shopping-cart/shopping-cart.module");
var core_1 = require("@angular/core");
var get_products_service_1 = require("./../get-products.service");
var forms_1 = require("@angular/forms");
var search_bar_component_1 = require("./search-bar/search-bar.component");
var product_list_component_1 = require("./product-list/product-list.component");
var CatalogModule = /** @class */ (function () {
    function CatalogModule() {
    }
    CatalogModule = __decorate([
        core_1.NgModule({
            declarations: [
                product_list_component_1.ProductListComponent,
                search_bar_component_1.SearchBarComponent,
            ],
            imports: [
                // AppModule,
                forms_1.FormsModule,
                common_1.CommonModule,
                catalog_routing_module_1.CatalogRoutingModule,
                shopping_cart_module_1.ShoppingCartModule,
            ],
            providers: [get_products_service_1.ProductService],
            bootstrap: []
        })
    ], CatalogModule);
    return CatalogModule;
}());
exports.CatalogModule = CatalogModule;
