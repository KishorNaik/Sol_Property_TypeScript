"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    Object.defineProperty(UserModel.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    UserModel.prototype.toJSON = function () {
        return {
            firstName: this.firstName,
            lastName: this.lastName
        };
    };
    return UserModel;
}());
exports.default = UserModel;
