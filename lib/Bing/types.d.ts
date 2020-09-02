import { Bing } from 'leaflet';
import { ContextProps, GridLayer, LayerGroup } from 'react-leaflet';
export declare enum MapLayers {
    Basemap = "Basemap",
    Buildings = "Buildings",
    OrdnanceSurvey = "OrdnanceSurvey",
    TrafficFlow = "TrafficFlow"
}
export declare enum ImagerySets {
    Aerial = "Aerial",
    AerialWithLabels = "AerialWithLabels",
    AerialWithLabelIsOnDemand = "AerialWithLabelIsOnDemand",
    Streetside = "Streetside",
    BirdsEye = "BirdsEye",
    BirdsEyeWithLabels = "BirdsEyeWithLabels",
    Road = "Road",
    CanvasDark = "CanvasDark",
    CanvasLight = "CanvasLight",
    CanvasGrey = "CanvasGrey"
}
export interface BingLayerOwnProps extends Bing.BingLayerPropsTileLayer, GridLayer, ContextProps {
    type: ImagerySets;
}
export interface BingGroupLayerOwnProps extends Bing.BingLayerProps, LayerGroup, ContextProps {
    ml: MapLayers;
    type: ImagerySets;
    name: string;
}
export declare class BingLayer extends GridLayer<BingLayerOwnProps> {
}
