import mapboxgl from 'mapbox-gl'
import ReactMapGL from 'react-map-gl';
const MAPBOX_TOKEN = 'pk.eyJ1IjoidmlqYXkxMzE5NCIsImEiOiJja2pjcHE1enkwa2dkMnpwMmJ2amFpejNiIn0.dJCN0NvDr4rNW6UhoML4lA';
import  React, {useState} from 'react';
import MapGL from 'react-map-gl';

const map = () => {
    const [viewport, setViewport] = useState({
        latitude: 19.07,
        longitude: 72.87,
        zoom: 14,
        bearing: 0,
        pitch: 0
      });
    
    return (
        <div>
          <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    />
        </div>
    )
}

export default map
