import React, { useEffect, useState } from 'react';
import { LayersControl, LayerGroup, withLeaflet } from 'react-leaflet';
import BingLayer from './Bing';
import { MapLayers } from './types';

const { BaseLayer } = LayersControl;

const BingLayerGroup = (props) => {
    const [layers, setLayers] = useState([]);

    useEffect(() => {
        switch(props.ml) {
            case MapLayers.TrafficFlow: 
                const { ml, ...rest } = props;
                console.log(props, rest);
                const Imagery = <BingLayer {...rest} />,
                      Traffic = <BingLayer {...props} />;
                setLayers([Imagery, Traffic]);
                break;
            default:
                throw new Error("Not yet supported");
        }
    }, [props.ml]);

    return layers.length > 0 ? <>{layers}</>: 
    props?.fallback ?? <p>Loading...</p>;
}

export default BingLayerGroup;