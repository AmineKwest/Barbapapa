import React, {Component} from 'react';
import {Map, Marker, Popup, ImageOverlay} from 'react-leaflet';
import L from 'leaflet';
import './MapPark.css';

import greenBeard from './beard_green.png';
import orangeBeard from './beard_orange.png';
import redBeard from './beard_red.png';
import mapPic from './map.jpg';


class MapPark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 14
    }
    this.bounds = [[40.71, -74.25], [40.77, -74.12544]];
    this.center = [40.74, -74.19];
    this.croisiere = [40.76, -74.168];
    this.auberge = [40.746, -74.195];
    this.lancer = [40.732, -74.159];
    this.barber = [40.728, -74.229];
    this.ring = [40.753, -74.215];

    this.icon = (risk) => {
      const choice = (p) => {
        switch (p) {
          case 'tranquille':
            return greenBeard;
          case 'dangereux':
            return orangeBeard;
          case 'mortel':
            return redBeard;
          default:
            return greenBeard;
        }
      }

      return new L.icon({
       iconUrl: choice(risk),
       iconSize:     [40, 40], // size of the icon
       iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
       popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
      })
    }
  }

  componentWillMount() {
    fetch('/attractions')
    .then(res => res.json())
    .then(json => this.setState({attractions: json}))
  };

  render() {
    return (<div>
      <Map center={this.center} zoom={this.state.zoom} minZoom={14} maxZoom={17} maxBounds={this.bounds} maxBoundsViscosity={0.9}>
        <ImageOverlay
          url={mapPic}
          bounds={this.bounds}>
          <Marker position={this.croisiere} icon={this.icon('tranquille')}>
            <Popup><h1>Le drakkar s'amuse</h1><p>Quand l'amour rencontre la barbe</p></Popup>
          </Marker>
          <Marker position={this.auberge} icon={this.icon('tranquille')}>
            <Popup><h1>L'auberge du poney qui tousse</h1><p>Le lieu de rencontre incontournable</p></Popup>
          </Marker>
          <Marker position={this.lancer} icon={this.icon('dangereux')} >
            <Popup><h1>Le lancer de nains</h1><p>Testez votre puissance</p></Popup>
          </Marker>
          <Marker position={this.barber} icon={this.icon('mortel')} >
            <Popup><h1>Sweeny's Barber</h1><p>Prenez le trésor au risque de votre barbe !</p></Popup>
          </Marker>
          <Marker position={this.ring} icon={this.icon('mortel')} >
            <Popup><h1>Le ring de l'évolution</h1><p>Retour de bâton pour Darwin</p></Popup>
          </Marker>
        </ImageOverlay>
      </Map>
    </div>);
  }
}

export default MapPark;
