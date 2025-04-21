import React from 'react';
// Import des composants nécessaires pour afficher une carte Google Maps
import {APIProvider, Map} from '@vis.gl/react-google-maps';

const MyMap = () => (
  // Fournisseur d'API pour injecter la clé d'authentification Google Maps
  // Utilisation d'une variable d'environnement
  <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
    <Map
      defaultZoom={13}
      defaultCenter={{lat: 48.85864659952736, lng: 2.298883837096165}} 
      gestureHandling={'greedy'}
      disableDefaultUI={false}
    />
  </APIProvider>
);
export default MyMap;