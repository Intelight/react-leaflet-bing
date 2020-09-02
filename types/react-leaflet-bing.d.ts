// Type definitions for react-leaflet-bing 4.3.0
// Project: https://github.com/shafferchance/react-leaflet-bing
// Definitions by: Chanceler Shaffer <https://github.com/shafferchance>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Typescript Version: 4.0.2
import * as L from 'leaflet';

declare module 'leaflet' {
    export module Bing { 
        export interface BingLayerProps {
            bingkey: string;
            ml?: string;
            subdomains?: Array<number>;
            type?: string;
            attribution?: string;
            culture?: string;
            style?: string;
        }

        export type BingLayerPropsTileLayer = BingLayerProps & L.TileLayerOptions;
    }

    export class BingLayer extends L.TileLayer {}
    
    export interface TileLayer {
        _update(): void;
    }

    export function bingLayer(bingkey: string, props: Bing.BingLayerPropsTileLayer): BingLayer;
}

export * from './index';
