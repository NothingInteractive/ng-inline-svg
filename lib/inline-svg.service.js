"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var InlineSVGService = (function () {
    function InlineSVGService(rendererFactory) {
        this._renderer = rendererFactory.createRenderer(null, null);
    }
    InlineSVGService.prototype.insertEl = function (dir, parentEl, content, replaceContents, prepend) {
        if (replaceContents && !prepend) {
            var parentNode = dir._prevSVG && dir._prevSVG.parentNode;
            if (parentNode) {
                this._renderer.removeChild(parentNode, dir._prevSVG);
            }
            parentEl.innerHTML = '';
        }
        if (prepend) {
            this._renderer.insertBefore(parentEl, content, parentEl.firstChild);
        }
        else {
            this._renderer.appendChild(parentEl, content);
        }
        if (content.nodeName === 'svg') {
            dir._prevSVG = content;
        }
    };
    InlineSVGService.decorators = [
        { type: core_1.Injectable },
    ];
    InlineSVGService.ctorParameters = function () { return [
        { type: core_1.RendererFactory2, },
    ]; };
    return InlineSVGService;
}());
exports.InlineSVGService = InlineSVGService;