import React from 'react';
import {GridLayer, withLeaflet} from 'react-leaflet';
import * as L from 'leaflet';
import { BingLayerOwnProps } from './types';

class BingLayer extends GridLayer<BingLayerOwnProps> {
  createLeafletElement(props) {
    return L.bingLayer(props.bingkey, this.getOptions(props));
  }
}

export default withLeaflet(BingLayer);
