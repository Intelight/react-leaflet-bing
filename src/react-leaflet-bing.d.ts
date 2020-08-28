declare namespace L {
    interface BingLayerProps {
        bingkey: string;
        ml: string;
        subdomains?: Array<number>;
        type?: string;
        attribution?: string;
        culture?: string;
        style?: string;
    }

    type BingLayerPropsTileLayer = BingLayerProps & TileLayerOptions;

    class BingLayer extends TileLayer {}
    
    interface TileLayer  {
        _update(): void;
    }

    function bingLayer(bingkey: string, props: BingLayerPropsTileLayer): BingLayer;
}
