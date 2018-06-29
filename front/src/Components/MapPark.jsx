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
          <Marker position={this.croisiere} icon={this.icon('tranquille')}>
            <Popup>
              <h1>{this.state.attractions[0] && this.state.attractions[0].name}</h1>
              <img src={this.state.attractions[0] && this.state.attractions[0].photo} width='150px' height='auto' alt='drakkar'/>
              <p>Quand l'amour rencontre la barbe</p>
              <p>Prix : {this.state.attractions[0] && this.state.attractions[0].price} euros</p>
              <p>Ouverture: {this.state.attractions[0] && this.state.attractions[0].openingTime}</p>
              <p>Attente: {this.state.attractions[0] && this.state.attractions[0].waitingtime} mn</p>
              <p>Age minimal: {this.state.attractions[0] && this.state.attractions[0].age}</p>
              <p>Capacité: {this.state.attractions[0] && this.state.attractions[0].capacity} personnes</p>
              <p>Risque du moment: {this.state.attractions[0] && this.state.attractions[0].risk.level}</p>
              <p>Victimes actuelles: {this.state.attractions[0] && this.state.attractions[0].victims}</p>
            </Popup>
          </Marker>


          <Marker position={this.auberge} icon={this.icon('tranquille')}>
          <Popup>
              <h1>{this.state.attractions[0] && this.state.attractions[4].name}</h1>
              <img src={this.state.attractions[0] && this.state.attractions[4].photo} width='150px' height='auto' alt='drakkar'/>
              <p>Le lieu de rencontre incontournable</p>
              <p>Prix : {this.state.attractions[0] && this.state.attractions[4].price} euros</p>
              <p>Ouverture: {this.state.attractions[0] && this.state.attractions[4].openingTime}</p>
              <p>Attente: {this.state.attractions[0] && this.state.attractions[4].waitingtime} mn</p>
              <p>Age minimal: {this.state.attractions[0] && this.state.attractions[4].age}</p>
              <p>Capacité: {this.state.attractions[0] && this.state.attractions[4].capacity} personnes</p>
              <p>Risque du moment: {this.state.attractions[0] && this.state.attractions[4].risk.level}</p>
              <p>Victimes actuelles: {this.state.attractions[0] && this.state.attractions[4].victims}</p>
            </Popup>
          </Marker>


          <Marker position={this.lancer} icon={this.icon('dangereux')} >
          <Popup>
              <h1>{this.state.attractions[0] && this.state.attractions[1].name}</h1>
              <img src={this.state.attractions[0] && this.state.attractions[1].photo} width='150px' height='auto' alt='drakkar'/>
              <p>Testez votre puissance</p>
              <p>Prix : {this.state.attractions[0] && this.state.attractions[1].price} euros</p>
              <p>Ouverture: {this.state.attractions[0] && this.state.attractions[1].openingTime}</p>
              <p>Attente: {this.state.attractions[0] && this.state.attractions[1].waitingtime} mn</p>
              <p>Age minimal: {this.state.attractions[0] && this.state.attractions[1].age}</p>
              <p>Capacité: {this.state.attractions[0] && this.state.attractions[1].capacity} personnes</p>
              <p>Risque du moment: {this.state.attractions[0] && this.state.attractions[1].risk.level}</p>
              <p>Victimes actuelles: {this.state.attractions[0] && this.state.attractions[1].victims}</p>
            </Popup>
          </Marker>


          <Marker position={this.barber} icon={this.icon('mortel')} >
          <Popup>
              <h1>{this.state.attractions[0] && this.state.attractions[3].name}</h1>
              <img src={this.state.attractions[0] && this.state.attractions[3].photo} width='150px' height='auto' alt='drakkar'/>
              <p>Prenez le trésor au risque de votre barbe !</p>
              <p>Prix : {this.state.attractions[0] && this.state.attractions[3].price} euros</p>
              <p>Ouverture: {this.state.attractions[0] && this.state.attractions[3].openingTime}</p>
              <p>Attente: {this.state.attractions[0] && this.state.attractions[3].waitingtime} mn</p>
              <p>Age minimal: {this.state.attractions[0] && this.state.attractions[3].age}</p>
              <p>Capacité: {this.state.attractions[0] && this.state.attractions[3].capacity} personnes</p>
              <p>Risque du moment: {this.state.attractions[0] && this.state.attractions[3].risk.level}</p>
              <p>Victimes actuelles: {this.state.attractions[0] && this.state.attractions[3].victims}</p>
            </Popup>
          </Marker>


          <Marker position={this.ring} icon={this.icon('mortel')} >
          <Popup >
              <h1>{this.state.attractions[0] && this.state.attractions[2].name}</h1>
              <img src={this.state.attractions[0] && this.state.attractions[2].photo} width='150px' height='auto' alt='drakkar'/>
              <p>Retour de bâton pour Darwin</p>
              <p>Prix : {this.state.attractions[0] && this.state.attractions[2].price} euros</p>
              <p>Ouverture: {this.state.attractions[0] && this.state.attractions[2].openingTime}</p>
              <p>Attente: {this.state.attractions[0] && this.state.attractions[2].waitingtime} mn</p>
              <p>Age minimal: {this.state.attractions[0] && this.state.attractions[2].age}</p>
              <p>Capacité: {this.state.attractions[0] && this.state.attractions[2].capacity} personnes</p>
              <p>Risque du moment: {this.state.attractions[0] && this.state.attractions[2].risk.level}</p>
              <p>Victimes actuelles: {this.state.attractions[0] && this.state.attractions[2].victims}</p>
            </Popup>
          </Marker>


        </ImageOverlay>
      </Map>
    </div>);
  }
}

export default MapPark;
