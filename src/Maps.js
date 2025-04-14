import React from 'react';
import {APIProvider, Map} from '@vis.gl/react-google-maps';

const MyMap = () => (
  <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
    <Map
      defaultZoom={3}
      defaultCenter={{lat: 48.85864659952736, lng: 2.298883837096165}} 
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />
  </APIProvider>
);
export default MyMap;