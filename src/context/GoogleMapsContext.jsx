// Create a new file named "GoogleMapsContext.js"
import { createContext, useState } from "react";

const GoogleMapsContext = createContext();

export const GoogleMapsProvider = ({ children }) => {
  const [isGoogleMapsLoaded, setIsGoogleMapsLoaded] = useState(false);
  const [markers, setMarkers] = useState([]);
  const [mapPosition, setMapPosition] = useState(null);
   
  return (
    <GoogleMapsContext.Provider value={{  markers, setMarkers, mapPosition, setMapPosition, isGoogleMapsLoaded, setIsGoogleMapsLoaded }}>
      {children}
    </GoogleMapsContext.Provider>
  );
};

export default GoogleMapsContext;
