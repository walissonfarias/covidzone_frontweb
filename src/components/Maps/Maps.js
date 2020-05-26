import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Geocode from 'react-geocode';
import './Maps.css'
Geocode.setApiKey('AIzaSyBFuaVTjzw8AVpytUHEbWChE7V1rPVz-9Q');



export class MapContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
        }
    }

    imprimeState = () => {
        console.log(this.state.latitude, this.state.longitude);
    }

    getCurrentCoordinates = () => {
        navigator.geolocation.getCurrentPosition(location => {
            const { latitude, longitude } = location.coords;
            this.setState({
                latitude: latitude,
                longitude: longitude
            });
            this.imprimeState();
        });
    }
    componentDidMount = () => {
        this.getCurrentCoordinates();
    }

    render() {


        return (
            <div className='map-container' >
                <Map
                style={{ width: '100%', height: '100%' }}
                    google={this.props.google}
                    zoom={14}
                    initialCenter={{
                        lat: -20.3866387,
                        lng: -43.508053
                    }}
                />
            </div>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyBFuaVTjzw8AVpytUHEbWChE7V1rPVz-9Q")
})(MapContainer)

