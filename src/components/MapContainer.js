import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {trips: []};
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.trips !== undefined) {
       console.log("trips", nextProps.trips);
       this.setState({
           trips: nextProps.trips
       });
    }
}


  render() {
    var center = {lat: this.props.centerLat, lng: this.props.centerLng};
    let markers = this.state.trips.map((trip, i) => {
      console.log(trip.lat);
      return (
          <Marker key={trip.name + i} position={{lat: trip.lat, lng: trip.long}} />
      )
    });
    console.log(markers);

    return (
      <div>
        <Map 
          google={this.props.google} 
          zoom={14}         
          initialCenter={{
            lat: this.props.centerLat, lng: this.props.centerLng
          }} 
          center={{
            lat: this.props.centerLat, lng: this.props.centerLng
          }} >
          {markers}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDWiqpSDkyC_yVGhT5cFyu9kjaR7Y2fMD0')
})(MapContainer)