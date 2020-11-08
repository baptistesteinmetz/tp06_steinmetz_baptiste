"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserAccountModule = void 0;
var common_1 = require("@angular/common");
var user_account_routing_module_1 = require("./user-account-routing.module");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var customdirectives_directive_1 = require("./../customdirectives.directive");
var recap_component_1 = require("./../user-account/recap/recap.component");
var form_component_1 = require("./../user-account/form/form.component");
var footer_form_component_1 = require("./../user-account/footer-form/footer-form.component");
var header_form_component_1 = require("./header-form/header-form.component");
var UserAccountModule = /** @class */ (function () {
    function UserAccountModule() {
    }
    UserAccountModule = __decorate([
        core_1.NgModule({
            declarations: [
                footer_form_component_1.FooterComponent,
                form_component_1.FormComponent,
                header_form_component_1.HeaderFormComponent,
                recap_component_1.RecapComponent,
                customdirectives_directive_1.ErrorInputDirective,
                recap_component_1.PhonePipe,
                recap_component_1.CodePipe,
            ],
            imports: [
                // AppModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                user_account_routing_module_1.UserAccountRoutingModule
            ],
            providers: []
        })
    ], UserAccountModule);
    return UserAccountModule;
}());
exports.UserAccountModule = UserAccountModule;
