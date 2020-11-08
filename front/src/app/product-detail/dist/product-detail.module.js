"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductDetailModule = void 0;
var router_1 = require("@angular/router");
var product_detail_routing_module_1 = require("./product-detail-routing.module");
var product_detail_component_1 = require("./product-detail.component");
var core_1 = require("@angular/core");
var ProductDetailModule = /** @class */ (function () {
    function ProductDetailModule() {
    }
    ProductDetailModule = __decorate([
        core_1.NgModule({
            declarations: [
                product_detail_component_1.ProductDetailComponent,
            ],
            imports: [
                // NgxsModule,
                // NgxsModule.forRoot([
                //   ProductState
                // ]),
                // RouterModule.forRoot(appRoutes),
                // AppModule
                router_1.RouterModule,
                product_detail_routing_module_1.ProductDetailRoutingModule,
            ],
            providers: []
        })
    ], ProductDetailModule);
    return ProductDetailModule;
}());
exports.ProductDetailModule = ProductDetailModule;
