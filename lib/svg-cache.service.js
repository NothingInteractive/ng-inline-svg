"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/finally");
require("rxjs/add/operator/map");
require("rxjs/add/operator/share");
var inline_svg_config_1 = require("./inline-svg.config");
var SVGCacheService = (function () {
    function SVGCacheService(config, _http, rendererFactory) {
        this._http = _http;
        this._renderer = rendererFactory.createRenderer(null, null);
        if (config && !SVGCacheService._baseUrl) {
            this.setBaseUrl(config);
        }
        if (!SVGCacheService._cache) {
            SVGCacheService._cache = new Map();
        }
        if (!SVGCacheService._inProgressReqs) {
            SVGCacheService._inProgressReqs = new Map();
        }
    }
    SVGCacheService.prototype.getSVG = function (url, cache) {
        var _this = this;
        if (cache === void 0) { cache = true; }
        var absUrl = this.getAbsoluteUrl(url);
        if (cache && SVGCacheService._cache.has(absUrl)) {
            return Observable_1.Observable.of(this._cloneSVG(SVGCacheService._cache.get(absUrl)));
        }
        if (SVGCacheService._inProgressReqs.has(absUrl)) {
            return SVGCacheService._inProgressReqs.get(absUrl);
        }
        var req = this._http.get(absUrl, { responseType: 'text' })
            .catch(function (err) { return err; })
            .finally(function () {
            SVGCacheService._inProgressReqs.delete(absUrl);
        })
            .share()
            .map(function (svgText) {
            var svgEl = _this._svgElementFromString(svgText);
            SVGCacheService._cache.set(absUrl, svgEl);
            return _this._cloneSVG(svgEl);
        });
        SVGCacheService._inProgressReqs.set(absUrl, req);
        return req;
    };
    SVGCacheService.prototype.setBaseUrl = function (config) {
        if (config) {
            SVGCacheService._baseUrl = config.baseUrl;
        }
    };
    SVGCacheService.prototype.getAbsoluteUrl = function (url) {
        if (SVGCacheService._baseUrl && !/^https?:\/\//i.test(url)) {
            url = SVGCacheService._baseUrl + url;
            if (url.indexOf('//') === 0) {
                url = url.substring(1);
            }
        }
        var base = this._renderer.createElement('BASE');
        base.href = url;
        return base.href;
    };
    SVGCacheService.prototype._svgElementFromString = function (str) {
        var div = this._renderer.createElement('DIV');
        div.innerHTML = str;
        var svg = div.querySelector('svg');
        if (!svg) {
            throw new Error('No SVG found in loaded contents');
        }
        return svg;
    };
    SVGCacheService.prototype._cloneSVG = function (svg) {
        return svg.cloneNode(true);
    };
    SVGCacheService.decorators = [
        { type: core_1.Injectable },
    ];
    SVGCacheService.ctorParameters = function () { return [
        { type: inline_svg_config_1.InlineSVGConfig, decorators: [{ type: core_1.Optional },] },
        { type: http_1.HttpClient, },
        { type: core_1.RendererFactory2, },
    ]; };
    return SVGCacheService;
}());
exports.SVGCacheService = SVGCacheService;
