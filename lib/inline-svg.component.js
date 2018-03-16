"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var inline_svg_directive_1 = require("./inline-svg.directive");
var inline_svg_service_1 = require("./inline-svg.service");
var InlineSVGComponent = (function () {
    function InlineSVGComponent(_inlineSVGService, el) {
        this._inlineSVGService = _inlineSVGService;
        this._el = el;
    }
    InlineSVGComponent.prototype.ngAfterViewInit = function () {
        this._updateContent();
    };
    InlineSVGComponent.prototype.ngOnChanges = function (changes) {
        if (changes['content']) {
            this._updateContent();
        }
    };
    InlineSVGComponent.prototype._updateContent = function () {
        this._inlineSVGService.insertEl(this.context, this._el.nativeElement, this.content, this.replaceContents, this.prepend);
    };
    InlineSVGComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'inline-svg',
                    template: '',
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush
                },] },
    ];
    InlineSVGComponent.ctorParameters = function () { return [
        { type: inline_svg_service_1.InlineSVGService, },
        { type: core_1.ElementRef, },
    ]; };
    InlineSVGComponent.propDecorators = {
        "context": [{ type: core_1.Input },],
        "content": [{ type: core_1.Input },],
        "replaceContents": [{ type: core_1.Input },],
        "prepend": [{ type: core_1.Input },],
    };
    return InlineSVGComponent;
}());
exports.InlineSVGComponent = InlineSVGComponent;