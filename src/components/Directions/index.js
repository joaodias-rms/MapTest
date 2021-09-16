import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const { apikey } = process.env

const Directions=({destination, origin, onReady})=> {
  return (
    <MapViewDirections
      destination={destination}
      origin={origin}
      onReady={onReady}
      apikey={apikey}
      strokeWidth={3}
      strokeColor="#333"
    />
  );
}

export default Directions