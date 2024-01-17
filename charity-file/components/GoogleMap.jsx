import React from 'react'

// GoogleMap.js
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
    lat: 52.370216, 
    lng: 4.895168
};

const GoogleMaps = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDXGRpNy3tiygoN0urSMIGho50spzhxsoo">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Add other components, markers, etc., as needed */}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;
