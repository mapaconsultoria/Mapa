// Create a new file named "GoogleMapsContext.js"
import { createContext, useState } from "react";

const GoogleMapsContext = createContext();

export const GoogleMapsProvider = ({ children }) => {
  const [isGoogleMapsLoaded, setIsGoogleMapsLoaded] = useState(false);
   
  return (
    <GoogleMapsContext.Provider value={{ isGoogleMapsLoaded, setIsGoogleMapsLoaded }}>
      {children}
    </GoogleMapsContext.Provider>
  );
};

export default GoogleMapsContext;
