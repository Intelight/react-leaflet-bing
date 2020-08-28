import { BingLayerPropsTileLayer } from 'leaflet';
import { ContextProps, GridLayer } from 'react-leaflet';
export interface BingLayerOwnProps extends BingLayerPropsTileLayer, GridLayer, ContextProps {
}
export declare class BingLayerComp extends GridLayer<BingLayerOwnProps> {
}
