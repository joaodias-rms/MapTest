import React, {Component, Fragment} from 'react';

import {View} from 'react-native';

import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import Search from '../Search';
import Directions from '../Directions';
import {getPixelSize} from '../../utils';
import markerImg from '../../assets/marker.png';

import {
  LocationBox,
  LocationText,
  LocationTimeBox,
  LocationTimeText,
  LocationTimeSmall,
} from './styles';

export default class Map extends Component {
  state = {
    region: null,
    destination: null,
  };

  async componentDidMount() {
    Geolocation.getCurrentPosition(
      async ({coords: {latitude, longitude}}) => {
        this.setState({
          location,
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134,
          },
        });
      },
      () => {},
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000,
      },
    );
  }

  handleLocationSelected = (data, {geometry}) => {
    const {
      location: {lat: latitude, lng: longitude},
    } = geometry;

    this.setState({
      destination: {
        latitude,
        longitude,
        title: data.structured_formatting.main_text,
      },
    });
  };

  render() {
    const {region, destination} = this.state;

    return (
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          region={region}
          showsUserLocation
          loadingEnabled
          ref={el => (this.MapView = el)}>
          {destination && (
            <Fragment>
              <Directions
                origin={region}
                destination={destination}
                onReady={result => {
                  this.MapView.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                      right: getPixelSize(50),
                      left: getPixelSize(50),
                      top: getPixelSize(50),
                      bottom: getPixelSize(50),
                    },
                  });
                }}
              />

              <Marker
                coordinate={region}
                anchor={{x: 0, y: 0}}
                image={markerImg}>
                <LocationBox>
                  <LocationTimeBox>
                    <LocationTimeText>31</LocationTimeText>
                    <LocationTimeSmall>M</LocationTimeSmall>
                  </LocationTimeBox>
                  <LocationText>Rua das gerberas</LocationText>
                </LocationBox>
              </Marker>

              <Marker
                coordinate={destination}
                anchor={{x: 0, y: 0}}
                image={markerImg}>
                <LocationBox>
                  <LocationText>{destination.title}</LocationText>
                </LocationBox>
              </Marker>
            </Fragment>
          )}
        </MapView>
        <Search onLocationSelected={this.handleLocationSelected} />
      </View>
    );
  }
}
