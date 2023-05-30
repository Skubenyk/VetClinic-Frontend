//*Map

//*Import base
import styles from './map.module.scss';
import React from 'react';
import './map.scss';

//*Import Leaflet map
import Leaflet from 'leaflet';

//*Import Leaflet components
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

//*Import Leaflet styles
import 'leaflet/dist/leaflet.css';

//*Marker
Leaflet.Icon.Default.imagePath = '../node_modules/leaflet';
delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

class Map extends React.Component {
  state = {
    lat: 49.58350227730641,
    lng: 34.58231883387771,
    zoom: 17,
  };
  render() {
    const center = [this.state.lat, this.state.lng];
    return (
      <div className={styles.map}>
        <MapContainer
          zoom={this.state.zoom}
          center={center}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={center} />
        </MapContainer>
      </div>
    );
  }
}

export default Map;
