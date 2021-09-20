import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const { APIKEY } = process.env

const Directions=(destination, origin, onReady)=> {
  return (
    <MapViewDirections
      destination={destination}
      origin={origin}
      onReady={onReady}
      apikey={APIKEY}
      strokeWidth={3}
      strokeColor="#333"
    />
  );
}

export default Directions