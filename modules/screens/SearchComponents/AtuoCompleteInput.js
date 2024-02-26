import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const AtuoCompleteInput = ({style, lable, onPressFunction}) => {
  return (
    <GooglePlacesAutocomplete
      placeholder={lable}
      fetchDetails
      onPress={(data, details = null) => {
        onPressFunction(details)
      }}
      query={{
        key: 'AIzaSyA7aF-FfY110rFxwuRHXqpkWz8KhoHg99Q',
        language: 'en',
      }}
      style={{...style}}
    />
  );
};

export default AtuoCompleteInput;