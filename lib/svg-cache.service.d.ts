import { RendererFactory2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import { InlineSVGConfig } from './inline-svg.config';
export declare class SVGCacheService {
    private _http;
    private static _cache;
    private static _inProgressReqs;
    private static _baseUrl;
    private _renderer;
    constructor(config: InlineSVGConfig, _http: HttpClient, rendererFactory: RendererFactory2);
    getSVG(url: string, cache?: boolean): Observable<SVGElement>;
    setBaseUrl(config: InlineSVGConfig): void;
    getAbsoluteUrl(url: string): string;
    private _svgElementFromString(str);
    private _cloneSVG(svg);
}
