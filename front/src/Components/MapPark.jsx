import React, {Component} from 'react';
import {Map, Marker, Popup, ImageOverlay} from 'react-leaflet';
import L from 'leaflet';
import './MapPark.css';
import Filters from './Filters';
import greenBeard from './beard_green.png';
import orangeBeard from './beard_orange.png';
import redBeard from './beard_red.png';
import mapPic from './map.jpg';


class MapPark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 15,
      attractions: [],
      filters : null
    }
    this.bounds = [[40.71, -74.25], [40.77, -74.12544]];
    this.center = [40.72, -74.192];

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
        iconSize:     [70, 70], // size of the icon
        iconAnchor:   [35, 70], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -60] // point from which the popup should open relative to the iconAnchor
      })
    }
  }
  filters = (filter) => {
    this.setState({
      filters : filter
    })
    const url = `/attractions` + (this.state.filters ? '/' + this.state.filters : '');
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(json => {
      console.log(json)
      return this.setState({attractions: json})
    }
    )

  }
  componentWillMount() {
    
    // fetch(`/attractions`)
    //   .then(res => res.json())
    //   .then(json => this.setState({ attractions: json })
    //   )

  };

  componentDidUpdate() {
   
  };


  render() {

    return (<div>
      <Filters selectFilters={this.filters}/>
      <Map center={this.center} zoom={this.state.zoom} minZoom={14} maxZoom={17} maxBounds={this.bounds} maxBoundsViscosity={0.9}>
        <ImageOverlay
          url={mapPic}
          bounds={this.bounds}>
          {this.state.attractions.map( (data, i) =>
          <Marker key={i} position={[data.lat, data.long]} icon={this.icon(data.risk.level)}>
            <Popup key={i}>
            <h1 className='popupTitle'>{data.name}</h1>
            <img className='popupImage' src={data.photo} alt={data.name} />
            <p className='popupSubTitle'>{data.description}</p>
              <div className='popupBody'>
                <div>
                  <p className='popupText'>Prix : {data.price} euros</p>
                  <p className='popupText'>Ouverture: {data.openingTime}</p>
                  <p className='popupText'>Attente: {data.waitingtime} mn</p>
                  <p className='popupText'>Age minimal: {data.age}</p>
                </div>
                <div>
                  <p className='popupText'>Capacité: {data.capacity} personnes</p>
                  <p className='popupText'>Risque du moment: {data.risk.level}</p>
                  <p className='popupText'>Victimes actuelles: {data.victims}</p>
                </div>
              </div>
            </Popup>
          </Marker>
          )}
        </ImageOverlay>
      </Map>
    </div>);
  }
}

export default MapPark;
