import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions=({destination, origin, onReady})=> {
  return (
    <MapViewDirections
      destination={destination}
      origin={origin}
      onReady={onReady}
      apikey="AIzaSyA9HhT5imbNVfYlTESPLs4EFTmxTrfdZOU"
      strokeWidth={3}
      strokeColor="#333"
    />
  );
}

export default Directions