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
      zoom: 14,
      attractions: [],
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
          case 'Tranquille':
            return greenBeard;
          case 'Dangereux':
            return orangeBeard;
          case 'Mortel':
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
  dataRender = (data, i, key) => data ? data[i].key : 'error';

  componentWillMount() {
    fetch('/attractions')
    .then(res => res.json())
    .then(json => this.setState({attractions: json})
    )
  
  };

  componentDidMount() {
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
          {this.state.attractions.map( (data, i) => 
          <Marker key={i} position={[data.lat, data.long]} icon={this.icon(data.risk.level)}>
            <Popup key={i}> 
              <h1>{data.name}</h1> 
              <img src={data.photo} alt={data.name} width='150px' height='auto'/>
              <p>{data.description}</p>
              <p>Prix : {data.price} euros</p>
              <p>Ouverture: {data.openingTime}</p>
              <p>Attente: {data.waitingtime} mn</p>
              <p>Age minimal: {data.age}</p>
              <p>Capacité: {data.capacity} personnes</p>
              <p>Risque du moment: {data.risk.level}</p>
              <p>Victimes actuelles: {data.victims}</p>
            </Popup>
          </Marker>
          )}
        </ImageOverlay>
      </Map>
    </div>);
  }
}

export default MapPark;
