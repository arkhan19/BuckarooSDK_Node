"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PayablePaymentMethod_1 = require("../PayablePaymentMethod");
var Banktransfer = /** @class */ (function (_super) {
    __extends(Banktransfer, _super);
    function Banktransfer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._paymentName = 'transfer';
        _this._serviceVersion = 1;
        return _this;
    }
    Banktransfer.prototype.pay = function (payload) {
        return _super.prototype.pay.call(this, payload);
    };
    return Banktransfer;
}(PayablePaymentMethod_1.PayablePaymentMethod));
var _banktransfer;
var banktransfer = function () {
    if (!_banktransfer)
        _banktransfer = new Banktransfer();
    return _banktransfer;
};
exports.default = banktransfer;
//# sourceMappingURL=index.js.map