"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var InlineSVGConfig = (function () {
    function InlineSVGConfig() {
    }
    return InlineSVGConfig;
}());
exports.InlineSVGConfig = InlineSVGConfig;
var InlineSVGDefaultConfig = (function (_super) {
    __extends(InlineSVGDefaultConfig, _super);
    function InlineSVGDefaultConfig(appBase, location) {
        var _this = _super.call(this) || this;
        if (appBase !== null) {
            _this.baseUrl = appBase;
        }
        else if (location !== null) {
            _this.baseUrl = location.getBaseHrefFromDOM();
        }
        return _this;
    }
    InlineSVGDefaultConfig.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [common_1.APP_BASE_HREF,] },] },
        { type: common_1.PlatformLocation, decorators: [{ type: core_1.Optional },] },
    ]; };
    return InlineSVGDefaultConfig;
}(InlineSVGConfig));
exports.InlineSVGDefaultConfig = InlineSVGDefaultConfig;
