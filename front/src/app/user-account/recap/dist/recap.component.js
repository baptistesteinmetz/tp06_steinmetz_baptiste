"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RecapComponent = exports.CodePipe = exports.PhonePipe = void 0;
var core_1 = require("@angular/core");
var User_1 = require("../../User");
var PhonePipe = /** @class */ (function () {
    function PhonePipe() {
    }
    PhonePipe.prototype.transform = function (rawNum) {
        rawNum = rawNum.charAt(0) !== 0 ? rawNum.substring(1) : '' + rawNum.substring(1);
        var newStr = '';
        var i = 0;
        for (; i < Math.floor(rawNum.length / 2) - 1; i++) {
            newStr = newStr + rawNum.substr(i * 2, 2) + '-';
        }
        return newStr + rawNum.substr(i * 2);
    };
    PhonePipe = __decorate([
        core_1.Pipe({
            name: 'phone'
        })
    ], PhonePipe);
    return PhonePipe;
}());
exports.PhonePipe = PhonePipe;
var CodePipe = /** @class */ (function () {
    function CodePipe() {
    }
    CodePipe.prototype.transform = function (country) {
        switch (country) {
            case 'fr':
                return '+33';
                break;
            case 'en':
                return '+44';
                break;
            case 'gr':
                return '+49';
                break;
            case 'us':
                return '+1';
                break;
        }
    };
    CodePipe = __decorate([
        core_1.Pipe({
            name: 'callcode'
        })
    ], CodePipe);
    return CodePipe;
}());
exports.CodePipe = CodePipe;
var RecapComponent = /** @class */ (function () {
    function RecapComponent() {
        // user: User = new User();
        // visible: boolean = false;
        this.user = new User_1.User();
        this.formValidate = false;
    }
    RecapComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], RecapComponent.prototype, "user");
    __decorate([
        core_1.Input()
    ], RecapComponent.prototype, "formValidate");
    RecapComponent = __decorate([
        core_1.Component({
            selector: 'app-recap',
            templateUrl: './recap.component.html',
            styleUrls: ['./recap.component.scss']
        })
    ], RecapComponent);
    return RecapComponent;
}());
exports.RecapComponent = RecapComponent;
