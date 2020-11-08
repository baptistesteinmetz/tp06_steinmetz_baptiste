"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var customvalidators_validator_1 = require("../../customvalidators.validator");
var User_1 = require("../../User");
var FormComponent = /** @class */ (function () {
    // @Input() userName: string = this.user.firstname;
    function FormComponent(fb) {
        this.fb = fb;
        this.user = new User_1.User();
        this.formValidate = false;
        this.userTab = [];
        this.user = new User_1.User();
        this.user.gender = 'Man';
        this.user.country = 'fr';
    }
    FormComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    FormComponent.prototype.initForm = function () {
        this.form = this.fb.group({
            firstname: [null, [
                    forms_1.Validators.required,
                    forms_1.Validators.pattern('^[A-Za-z]+$')
                ]],
            lastname: [null, [
                    forms_1.Validators.required,
                    forms_1.Validators.pattern('^[A-Za-z]+$')
                ]],
            city: [null, forms_1.Validators.required],
            zipcode: [null, [
                    forms_1.Validators.pattern('^[0-9]+$'),
                    forms_1.Validators.required,
                ]
            ],
            phone: [null, [
                    forms_1.Validators.pattern('^[0-9]+$'),
                    forms_1.Validators.required,
                ]],
            adress: [null, forms_1.Validators.required],
            login: [null, forms_1.Validators.required],
            mail: [null,
                [
                    forms_1.Validators.required,
                    forms_1.Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')
                ]
            ],
            gender: [null, forms_1.Validators.required],
            country: [null, forms_1.Validators.required],
            password: [null, forms_1.Validators.required],
            confirmPassword: [null, forms_1.Validators.required]
        }, {
            validator: customvalidators_validator_1.ComparePassword('password', 'confirmPassword')
        });
    };
    Object.defineProperty(FormComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: false,
        configurable: true
    });
    FormComponent.prototype.isValidInput = function (fieldName) {
        return this.form.controls[fieldName].invalid &&
            (this.form.controls[fieldName].dirty || this.form.controls[fieldName].touched);
    };
    FormComponent.prototype.onSubmit = function (event) {
        event.preventDefault();
        this.formValidate = true;
        this.user.firstname = this.form.value.firstname;
        if (this.form.valid) {
            this.userTab.push(this.user);
        }
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: 'app-form',
            // class:'component-form',
            templateUrl: './form.component.html',
            styleUrls: ['./form.component.scss'],
            host: { 'id': 'component-form' }
        })
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
