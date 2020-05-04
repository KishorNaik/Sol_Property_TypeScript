"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userModel_1 = require("./userModel");
var Main = /** @class */ (function () {
    function Main(userModel) {
        this.userModel = userModel;
    }
    Main.prototype.getUserData = function () {
        this.userModel.firstName = "Kishor";
        this.userModel.lastName = "Naik";
    };
    Main.prototype.displayUserData = function () {
        console.log(this.userModel.firstName + " " + this.userModel.lastName);
    };
    Main.prototype.convertIntoJson = function () {
        console.log(JSON.stringify(this.userModel));
    };
    Main.prototype.execute = function () {
        this.getUserData();
        this.displayUserData();
        this.convertIntoJson();
    };
    return Main;
}());
exports.default = Main;
function uiMiddleware() {
    var userModelObj = new userModel_1.default();
    var mainObj = new Main(userModelObj);
    mainObj.execute();
}
uiMiddleware();
