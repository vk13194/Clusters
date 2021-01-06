import mapboxgl from 'mapbox-gl'
import ReactMapGL from 'react-map-gl';
const MAPBOX_TOKEN = 'pk.eyJ1IjoidmlqYXkxMzE5NCIsImEiOiJja2pjcHE1enkwa2dkMnpwMmJ2amFpejNiIn0.dJCN0NvDr4rNW6UhoML4lA';
import  React, {useState} from 'react';
import MapGL from 'react-map-gl';
import {clusterLayer, clusterCountLayer, unclusteredPointLayer} from './layers';
import  {Source, Layer} from 'react-map-gl';

const clusters3 = () => {
    const [viewport, setViewport] = useState({
        latitude: 40.67,
        longitude: -103.59,
        zoom: 3,
        bearing: 0,
        pitch: 0
      });
  const   _sourceRef = React.createRef();
  const   _onViewportChange = viewport => setViewport(viewport);

  const _onClick = event => {
    const feature = event.features[0];
    const clusterId = feature.properties.cluster_id;

    const mapboxSource = _sourceRef.current.getSource();

    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) {
        return;
      }

      _onViewportChange({
        ...viewport,
        longitude: feature.geometry.coordinates[0],
        latitude: feature.geometry.coordinates[1],
        zoom,
        transitionDuration: 500
      });
    });
  };
    return (
        <div>
          <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      //onViewportChange={nextViewport => setViewport(nextViewport)}
      onViewportChange={_onViewportChange}
      mapboxApiAccessToken={MAPBOX_TOKEN}
        interactiveLayerIds={[clusterLayer.id]}
        onClick={_onClick}
    >
          <Source
          type="geojson"
          data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
          ref={_sourceRef}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source>
    </MapGL>
        </div>
    )
}

export default clusters3
