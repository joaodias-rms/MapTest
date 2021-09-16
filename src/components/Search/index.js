import React, {Component} from 'react';
import {styles} from './style';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

export default class Search extends Component {
  state = ({searchFocused} = false);

  render() {
    const {searchFocused} = this.state;
    const {onLocationSelected} = this.props;

    return (
      <GooglePlacesAutocomplete
        placeholder="Para onde?"
        placeholderTextColor="#333"
        onPress={{onLocationSelected}}
        query={{
          key: 'AIzaSyA9HhT5imbNVfYlTESPLs4EFTmxTrfdZOU',
          language: 'pt',
        }}
        textInputProps={{
          onFocus: () => {
            this.setState({searchFocused: true});
          },
          onBlur: () => {
            this.setState({searchFocused: false});
          },
          autoCapitalize: 'none',
          autoCorrect: false,
        }}
        listViewDisplayed={searchFocused}
        fetchDetails
        enablePoweredByContainer={false}
        styles={styles}
      />
    );
  }
}