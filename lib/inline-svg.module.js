"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var inline_svg_component_1 = require("./inline-svg.component");
var inline_svg_config_1 = require("./inline-svg.config");
var inline_svg_directive_1 = require("./inline-svg.directive");
var svg_cache_service_1 = require("./svg-cache.service");
var inline_svg_service_1 = require("./inline-svg.service");
var InlineSVGModule = (function () {
    function InlineSVGModule() {
    }
    InlineSVGModule.forRoot = function (config) {
        return {
            ngModule: InlineSVGModule,
            providers: [
                { provide: inline_svg_config_1.InlineSVGConfig, useValue: config }
            ]
        };
    };
    InlineSVGModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [inline_svg_directive_1.InlineSVGDirective, inline_svg_component_1.InlineSVGComponent],
                    exports: [inline_svg_directive_1.InlineSVGDirective],
                    providers: [
                        inline_svg_service_1.InlineSVGService,
                        svg_cache_service_1.SVGCacheService,
                        { provide: inline_svg_config_1.InlineSVGConfig, useClass: inline_svg_config_1.InlineSVGDefaultConfig },
                    ],
                    entryComponents: [inline_svg_component_1.InlineSVGComponent]
                },] },
    ];
    InlineSVGModule.ctorParameters = function () { return []; };
    return InlineSVGModule;
}());
exports.InlineSVGModule = InlineSVGModule;